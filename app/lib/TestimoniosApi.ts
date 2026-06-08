export type TestimoniosApiItem = {
  id?: number | string | null;
  service?: string | null;
  testimonial?: string | null;
  name?: string | null;
  country?: string | null;
  has_video?: boolean | null;
  video_url?: string | null;
  rating?: number | string | null;
  has_image?: boolean | null;
  image_url?: string | null;
  initials?: string | null;
};

export type TestimoniosApiResponse = {
  data?: TestimoniosApiItem[];
};

export type Testimonio = {
  id: string;
  service: string | null;
  testimonial: string;
  name: string;
  country: string | null;
  hasVideo: boolean;
  videoUrl: string | null;
  rating: number | null;
  hasImage: boolean;
  imageUrl: string | null;
  initials: string | null;
};

export type TestimoniosResult = {
  testimonials: Testimonio[];
  error: string | null;
};

const TESTIMONIOS_ENDPOINT =
  "https://blog.colraices.com/api/v1/testimonials";

const TESTIMONIOS_ERROR_MESSAGE = "No se pudieron cargar los testimonios.";

function normalizeText(value?: string | number | null): string {
  return String(value ?? "").trim();
}

function normalizePublicUrl(value?: string | null): string | null {
  const url = normalizeText(value);

  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return null;
    }

    return parsedUrl.toString();
  } catch {
    return null;
  }
}

function normalizeRemoteImageUrl(value?: string | null): string | null {
  const url = normalizePublicUrl(value);

  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "localhost") {
      return parsedUrl.protocol === "http:" && parsedUrl.port === "8000"
        ? parsedUrl.toString()
        : null;
    }

    if (parsedUrl.hostname === "blog.colraices.com") {
      parsedUrl.protocol = "https:";
      return parsedUrl.toString();
    }

    return parsedUrl.protocol === "https:" ? parsedUrl.toString() : null;
  } catch {
    return null;
  }
}

function normalizeRating(value?: number | string | null): number | null {
  const parsedRating = Number(value);

  if (!Number.isFinite(parsedRating)) {
    return null;
  }

  return Math.min(5, Math.max(0, Math.round(parsedRating)));
}

function mapApiTestimonio(item: TestimoniosApiItem): Testimonio | null {
  const id = normalizeText(item.id);
  const quote = normalizeText(item.testimonial);
  const name = normalizeText(item.name);
  const hasVideo = item.has_video === true;
  const hasImage = item.has_image === true;

  if (!quote || !name) {
    return null;
  }

  return {
    id: id || `${name}-${quote.slice(0, 24)}`,
    service: normalizeText(item.service) || null,
    testimonial: quote,
    name,
    country: normalizeText(item.country) || null,
    hasVideo,
    videoUrl: hasVideo ? normalizePublicUrl(item.video_url) : null,
    rating: normalizeRating(item.rating),
    hasImage,
    imageUrl: hasImage ? normalizeRemoteImageUrl(item.image_url) : null,
    initials: normalizeText(item.initials) || null,
  };
}

export async function getTestimonios(): Promise<TestimoniosResult> {
  try {
    const response = await fetch(TESTIMONIOS_ENDPOINT, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        testimonials: [],
        error: TESTIMONIOS_ERROR_MESSAGE,
      };
    }

    const json = (await response.json()) as TestimoniosApiResponse;

    const testimonials = Array.isArray(json.data)
      ? json.data
          .map(mapApiTestimonio)
          .filter((item): item is Testimonio => Boolean(item))
      : [];

    return {
      testimonials,
      error: null,
    };
  } catch {
    return {
      testimonials: [],
      error: TESTIMONIOS_ERROR_MESSAGE,
    };
  }
}