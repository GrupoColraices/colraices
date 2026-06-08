import "server-only";

const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_REVALIDATE_SECONDS = 3600;
const LATEST_VIDEOS_LIMIT = 4;

export type YoutubeVideo = {
  id: string;
  title: string;
  description: string | null;
  channelTitle: string | null;
  thumbnailUrl: string | null;
  duration: string | null;
  embedUrl: string;
  publishedAt: string | null;
};

export type YoutubeVideosResult = {
  videos: YoutubeVideo[];
  error: string | null;
};

type YoutubeChannelResponse = {
  items?: Array<{
    contentDetails?: {
      relatedPlaylists?: {
        uploads?: string;
      };
    };
  }>;
};

type YoutubePlaylistItemsResponse = {
  items?: Array<{
    contentDetails?: {
      videoId?: string;
    };
  }>;
};

type YoutubeVideosResponse = {
  items?: Array<{
    id?: string;
    snippet?: {
      title?: string;
      description?: string;
      channelTitle?: string;
      publishedAt?: string;
      thumbnails?: {
        maxres?: { url?: string };
        standard?: { url?: string };
        high?: { url?: string };
        medium?: { url?: string };
        default?: { url?: string };
      };
    };
    contentDetails?: {
      duration?: string;
    };
  }>;
};

type YoutubeThumbnails = {
  maxres?: { url?: string };
  standard?: { url?: string };
  high?: { url?: string };
  medium?: { url?: string };
  default?: { url?: string };
};

function formatYoutubeDuration(duration: string | undefined): string | null {
  if (!duration) return null;

  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return null;

  const [, hoursRaw, minutesRaw, secondsRaw] = match;
  const hours = Number(hoursRaw ?? 0);
  const minutes = Number(minutesRaw ?? 0);
  const seconds = Number(secondsRaw ?? 0);

  if (!Number.isFinite(hours) || !Number.isFinite(minutes) || !Number.isFinite(seconds)) {
    return null;
  }

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

async function fetchYoutube<T>(path: string, searchParams: URLSearchParams): Promise<T> {
  const response = await fetch(`${YOUTUBE_API_BASE_URL}/${path}?${searchParams.toString()}`, {
    next: { revalidate: YOUTUBE_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`YouTube API request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

function getBestThumbnailUrl(thumbnails: YoutubeThumbnails | undefined): string | null {
  return (
    thumbnails?.maxres?.url ??
    thumbnails?.standard?.url ??
    thumbnails?.high?.url ??
    thumbnails?.medium?.url ??
    thumbnails?.default?.url ??
    null
  );
}

export async function getLatestYoutubeVideos(): Promise<YoutubeVideosResult> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return {
      videos: [],
      error: "Configuración de YouTube incompleta.",
    };
  }

  try {
    const channelsParams = new URLSearchParams({
      part: "contentDetails",
      id: channelId,
      key: apiKey,
    });

    const channelsData = await fetchYoutube<YoutubeChannelResponse>("channels", channelsParams);
    const uploadsPlaylistId = channelsData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      return { videos: [], error: "No se encontró la playlist de uploads del canal." };
    }

    const playlistItemsParams = new URLSearchParams({
      part: "contentDetails",
      playlistId: uploadsPlaylistId,
      maxResults: String(LATEST_VIDEOS_LIMIT),
      key: apiKey,
    });

    const playlistItemsData = await fetchYoutube<YoutubePlaylistItemsResponse>(
      "playlistItems",
      playlistItemsParams,
    );

    const videoIds = (playlistItemsData.items ?? [])
      .map((item) => item.contentDetails?.videoId)
      .filter((videoId): videoId is string => Boolean(videoId));

    if (videoIds.length === 0) {
      return { videos: [], error: "No hay videos disponibles para mostrar." };
    }

    const videosParams = new URLSearchParams({
      part: "contentDetails,snippet",
      id: videoIds.join(","),
      key: apiKey,
    });

    const videosData = await fetchYoutube<YoutubeVideosResponse>("videos", videosParams);

    const videosById = new Map(
      (videosData.items ?? [])
        .map((video) => {
          const id = video.id;
          if (!id) return null;

          return [
            id,
            {
              id,
              title: video.snippet?.title?.trim() || "Video sin título",
              description: video.snippet?.description?.trim() || null,
              channelTitle: video.snippet?.channelTitle?.trim() || null,
              thumbnailUrl: getBestThumbnailUrl(video.snippet?.thumbnails),
              duration: formatYoutubeDuration(video.contentDetails?.duration),
              embedUrl: `https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`,
              publishedAt: video.snippet?.publishedAt || null,
            } satisfies YoutubeVideo,
          ] as const;
        })
        .filter((entry): entry is readonly [string, YoutubeVideo] => Boolean(entry)),
    );

    const orderedVideos = videoIds
      .map((videoId) => videosById.get(videoId))
      .filter((video): video is YoutubeVideo => Boolean(video));

    return {
      videos: orderedVideos,
      error: null,
    };
  } catch {
    return {
      videos: [],
      error: "No pudimos cargar el contenido multimedia en este momento.",
    };
  }
}
