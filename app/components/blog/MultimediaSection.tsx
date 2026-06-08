"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import type { YoutubeVideo } from "@/app/lib/youtubeApi";

type MultimediaSectionProps = {
  videos: YoutubeVideo[];
  videosError: string | null;
};

const cardStyles = [
  {
    category: "YouTube",
    emoji: "📺",
    gradient: "from-[#162039] to-[#3A5EA8]",
  },
  {
    category: "Contenido reciente",
    emoji: "🏡",
    gradient: "from-[#0F2A1D] to-[#2A7A50]",
  },
  {
    category: "Colraices",
    emoji: "💼",
    gradient: "from-[#2A1535] to-[#7A3A90]",
  },
  {
    category: "Multimedia",
    emoji: "✈️",
    gradient: "from-[#2A1800] to-[#C85C00]",
  },
] as const;

export default function MultimediaSection({
  videos,
  videosError,
}: MultimediaSectionProps) {
  const [activeVideo, setActiveVideo] = useState<YoutubeVideo | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section id="videos" className="bg-[#F8F9FB] py-[88px]">
      <div className="mx-auto max-w-[1104px] px-6">
        <div className="mx-auto mb-[52px] max-w-[760px] text-center">
          <h2 className="font-['Montserrat'] text-[34px] font-extrabold leading-[40.8px] tracking-[-0.5px] text-[#192440]">
            Contenido Multimedia
          </h2>

          <p className="mt-[22px] font-['Montserrat'] text-[15px] font-normal leading-[22.5px] tracking-[0px] text-[#4B5563]">
            Videos cortos sobre crédito, vivienda, impuestos, migración y
            procesos desde el exterior.
          </p>
        </div>

        {videosError && videos.length === 0 ? (
          <div className="rounded-[14px] bg-white px-6 py-8 text-center shadow-[0_8px_28px_rgba(15,45,92,0.08)]">
            <p className="font-['Montserrat'] text-[14px] font-semibold leading-[21px] text-[#2A3F77]">
              No pudimos cargar el contenido multimedia en este momento.
            </p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {videos.map((video, index) => {
            const style = cardStyles[index % cardStyles.length];

            return (
            <article
              key={video.id}
              className="group w-full overflow-hidden rounded-[14px] bg-white shadow-[0_8px_28px_rgba(15,45,92,0.08)] transition-all duration-300 ease-out hover:-translate-y-[8px] hover:shadow-[0_18px_42px_rgba(15,45,92,0.18)]"
            >
              <div
                className={`relative h-[150px] overflow-hidden bg-gradient-to-br ${style.gradient}`}
              >
                {video.thumbnailUrl ? (
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 261px, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute bottom-[18px] right-[32px] text-[52px] leading-none opacity-[0.18]">
                    {style.emoji}
                  </span>
                )}

                <button
                  type="button"
                  aria-label={`Reproducir video: ${video.title}`}
                  onClick={() => setActiveVideo(video)}
                  className="absolute left-1/2 top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#192440] shadow-[0_10px_22px_rgba(0,0,0,0.24)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#FFC107] group-hover:text-[#192440]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="ml-[2px] h-[17px] w-[17px] fill-current"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </button>

                <span className="absolute bottom-[8px] left-[10px] rounded-[4px] bg-[#0A0A0A]/90 px-[7px] py-[3px] font-['Montserrat'] text-[10px] font-bold leading-none text-white">
                  {video.duration ?? "--:--"}
                </span>
              </div>

              <div className="h-[86px] px-[15px] pt-[13px]">
                <p className="mb-[8px] font-['Montserrat'] text-[10px] font-bold uppercase leading-[15px] tracking-[0.8px] text-[#2A3F77]">
                  {video.channelTitle ?? style.category}
                </p>

                <h4 className="line-clamp-2 overflow-hidden text-ellipsis font-['Montserrat'] text-[13px] font-bold leading-[18.2px] tracking-[0px] text-[#1A2340]">
                  {video.title}
                </h4>
              </div>
            </article>
            );
          })}
        </div>

        {activeVideo ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 px-4"
            onClick={() => setActiveVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Reproduciendo video: ${activeVideo.title}`}
          >
            <div
              className="relative w-full max-w-[960px] overflow-hidden rounded-[14px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full bg-white/90 text-[26px] leading-none text-[#192440]"
                aria-label="Cerrar video"
              >
                ×
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
