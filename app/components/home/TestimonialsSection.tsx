"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  getTestimonios,
  type Testimonio as ApiTestimonio,
} from "@/app/lib/TestimoniosApi";

type Testimonial = {
  id: string;
  quote: string;
  fullQuote: string;
  name: string;
  country: string;
  initials: string;
  service: string;
  rating: number;
  hasImage: boolean;
  imageUrl: string | null;
  hasVideo: boolean;
  videoUrl: string | null;
};

const GAP = 20;
const TESTIMONIALS_ERROR_MESSAGE = "No se pudieron cargar los testimonios.";
const DEFAULT_SERVICE = "Crédito";

function truncateQuote(quote: string): string {
  return quote.length > 165 ? `${quote.slice(0, 162).trim()}...` : quote;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function mapApiTestimonial(testimonial: ApiTestimonio): Testimonial {
  return {
    id: testimonial.id,
    quote: truncateQuote(testimonial.testimonial),
    fullQuote: testimonial.testimonial,
    name: testimonial.name,
    country: testimonial.country || "Colombiano en el exterior",
    initials: testimonial.initials || getInitials(testimonial.name),
    service: testimonial.service || DEFAULT_SERVICE,
    rating: testimonial.rating ?? 0,
    hasImage: testimonial.hasImage,
    imageUrl: testimonial.imageUrl,
    hasVideo: testimonial.hasVideo,
    videoUrl: testimonial.videoUrl,
  };
}

function Stars({ rating }: { rating: number }) {
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div
      className="text-[#FFC107] tracking-[1px]"
      aria-label={`${safeRating} de 5 estrellas`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">
          {index < safeRating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

function Avatar({
  item,
  size = 40,
}: {
  item: Testimonial;
  size?: 40 | 48;
}) {
  const textSize = size === 48 ? "text-[18px]" : "text-[13px]";

  return (
    <div
      className={`relative overflow-hidden rounded-full bg-[#1A4F9E] text-white flex items-center justify-center font-semibold ${textSize}`}
      style={{ width: size, height: size }}
    >
      {item.hasImage && item.imageUrl ? (
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      ) : (
        item.initials
      )}
    </div>
  );
}

function LoadingTestimonials() {
  return (
    <div className="mt-[48px] overflow-hidden" aria-live="polite">
      <div className="flex gap-[20px]">
        {Array.from({ length: 3 }, (_, index) => (
          <article
            key={index}
            className="flex-shrink-0 bg-[#FBF8F3] border border-[#0F2D5C]/10 rounded-tl-[16px] rounded-br-[16px] p-[20px] sm:p-[24px] animate-pulse"
            style={{ width: 354.66, minHeight: 320 }}
          >
            <div className="flex items-start justify-between mb-[24px]">
              <div className="h-[18px] w-[96px] rounded bg-[#FFC107]/40" />
              <div className="h-[28px] w-[86px] rounded-tl-[8px] rounded-br-[8px] bg-[#FFC107]/40" />
            </div>
            <div className="space-y-[10px]">
              <div className="h-[14px] w-full rounded bg-[#2A3F77]/10" />
              <div className="h-[14px] w-[92%] rounded bg-[#2A3F77]/10" />
              <div className="h-[14px] w-[78%] rounded bg-[#2A3F77]/10" />
            </div>
            <div className="mt-[92px] pt-[16px] border-t border-[#E2E8F0] flex items-center gap-[12px]">
              <div className="h-[40px] w-[40px] rounded-full bg-[#1A4F9E]/20" />
              <div className="space-y-[8px]">
                <div className="h-[14px] w-[128px] rounded bg-[#2A3F77]/10" />
                <div className="h-[12px] w-[82px] rounded bg-[#2A3F77]/10" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FeedbackState({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div className="mt-[48px] bg-[#FBF8F3] border border-[#0F2D5C]/10 rounded-tl-[16px] rounded-br-[16px] px-[20px] py-[28px] text-center">
      <p className="text-[#2A3F77] text-[15px] leading-[24px]">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-[18px] h-[40px] px-[18px] bg-[#2A3F77] rounded-[6px] text-white font-semibold text-[13px] hover:opacity-95 transition"
        >
          Intentar de nuevo
        </button>
      )}
    </div>
  );
}

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number>(354.66);
  const [testimonials, setTestimonials] = useState<ApiTestimonio[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const displayTestimonials = useMemo(
    () => testimonials.map(mapApiTestimonial),
    [testimonials],
  );

  const loop: Testimonial[] = useMemo(
    () => displayTestimonials.concat(displayTestimonials, displayTestimonials),
    [displayTestimonials],
  );

  const [index, setIndex] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function loadTestimonials() {
      setIsLoading(true);
      setError(null);

      try {
        const result = await getTestimonios();

        if (!isMounted) {
          return;
        }

        setTestimonials(result.testimonials);
        setError(result.error);
      } catch {
        if (!isMounted) {
          return;
        }

        setTestimonials([]);
        setError(TESTIMONIALS_ERROR_MESSAGE);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadTestimonials();

    return () => {
      isMounted = false;
    };
  }, [reloadKey]);

  const updateCardWidth = useCallback(() => {
    if (!containerRef.current) return;

    const containerW = containerRef.current.offsetWidth;

    if (containerW < 640) {
      setCardWidth(Math.max(280, containerW - 8));
      return;
    }

    const visibleCards = 3;
    const totalGap = GAP * (visibleCards - 1);
    setCardWidth((containerW - totalGap) / visibleCards);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(updateCardWidth);
    window.addEventListener("resize", updateCardWidth);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateCardWidth);
    };
  }, [updateCardWidth]);

  useEffect(() => {
    if (displayTestimonials.length === 0) return;

    const frame = requestAnimationFrame(updateCardWidth);
    return () => cancelAnimationFrame(frame);
  }, [displayTestimonials.length, updateCardWidth]);

  useEffect(() => {
    if (displayTestimonials.length === 0) {
      setIndex(0);
      return;
    }

    setTransition(false);
    setIndex(displayTestimonials.length);
    isAnimatingRef.current = false;
  }, [displayTestimonials.length]);

  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedTestimonial]);

  const startAutoPlay = useCallback(() => {
    if (selectedTestimonial || displayTestimonials.length === 0) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIndex((prev) => prev + 1);
    }, 3000);
  }, [selectedTestimonial, displayTestimonials.length]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, startAutoPlay]);

  const handleTransitionEnd = () => {
    if (displayTestimonials.length === 0) return;

    if (index >= displayTestimonials.length * 2) {
      setTransition(false);
      setIndex(displayTestimonials.length);
      isAnimatingRef.current = false;
      return;
    }
    if (index <= 0) {
      setTransition(false);
      setIndex(displayTestimonials.length);
      isAnimatingRef.current = false;
      return;
    }
    isAnimatingRef.current = false;
  };

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  const handleNext = () => {
    if (isAnimatingRef.current || displayTestimonials.length === 0) return;
    isAnimatingRef.current = true;
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimatingRef.current || displayTestimonials.length === 0) return;
    isAnimatingRef.current = true;
    setIndex((prev) => prev - 1);
  };

  const retryTestimonials = () => setReloadKey((current) => current + 1);
  const hasTestimonials = displayTestimonials.length > 0;

  return (
    <>
      <section className="w-full bg-[#FFFFFF]">
        <div className="w-full max-w-[1416px] mx-auto px-[20px] sm:px-[40px] md:px-[80px] lg:px-[156px] py-[60px] md:py-[80px] lg:py-[96px]">
          <div className="max-w-[1103.09px] mx-auto">
            <div className="flex flex-col items-center text-center gap-[8px]">
              <p className="text-[#FFC107] text-[16px] italic font-semibold">
                Lo que dicen quienes ya confiaron en nosotros
              </p>
              <h2 className="text-[#0F2D5C] text-[22px] sm:text-[24px] md:text-[28px] font-medium leading-[1.3]">
                Colombianos como t&uacute; que ya est&aacute;n construyendo
                futuro.
              </h2>
            </div>

            {isLoading && <LoadingTestimonials />}

            {!isLoading && error && (
              <FeedbackState message={error} onRetry={retryTestimonials} />
            )}

            {!isLoading && !error && !hasTestimonials && (
              <FeedbackState message="Aún no hay testimonios disponibles." />
            )}

            {!isLoading && !error && hasTestimonials && (
              <>
                <div ref={containerRef} className="mt-[48px] overflow-hidden">
                  <div
                    onTransitionEnd={handleTransitionEnd}
                    className={`flex gap-[20px] ${
                      transition
                        ? "transition-transform duration-500 ease-out"
                        : ""
                    }`}
                    style={{
                      transform: `translateX(-${index * (cardWidth + GAP)}px)`,
                    }}
                  >
                    {loop.map((item, i) => (
                      <article
                        key={`${item.id}-${i}`}
                        className="flex-shrink-0 bg-[#FBF8F3] border border-[#0F2D5C]/10 rounded-tl-[16px] rounded-br-[16px] p-[20px] sm:p-[24px] flex flex-col justify-between"
                        style={{ width: cardWidth, minHeight: 320 }}
                      >
                        <div>
                          <div className="flex items-start justify-between mb-[16px]">
                            <Stars rating={item.rating} />
                            <span className="h-[28px] px-[12px] bg-[#FFC107] text-[#2A3F77] text-[11px] font-semibold uppercase flex items-center rounded-tl-[8px] rounded-br-[8px]">
                              {item.service}
                            </span>
                          </div>

                          <p className="text-[#1E293B] text-[14px] sm:text-[15px] md:text-[16px] italic leading-[26px] md:leading-[28px] whitespace-pre-line">
                            {'"'}
                            {item.quote}
                            {'"'}
                          </p>

                          {item.fullQuote !== item.quote && (
                            <button
                              type="button"
                              onClick={() => setSelectedTestimonial(item)}
                              className="mt-[18px] text-[#F5B800] font-semibold text-[14px] flex items-center gap-[4px] hover:opacity-90 transition"
                            >
                              Ver m&aacute;s{" "}
                              <span aria-hidden="true">{"→"}</span>
                            </button>
                          )}
                        </div>

                        <div className="pt-[16px] mt-[16px] border-t border-[#E2E8F0]">
                          <div className="flex items-center gap-[12px]">
                            <Avatar item={item} />
                            <div>
                              <p className="text-[#2A3F77] font-semibold text-[14px]">
                                {item.name}
                              </p>
                              <p className="text-[#94A3B8] text-[12px]">
                                {item.country}
                              </p>
                            </div>
                          </div>

                          {item.hasVideo && item.videoUrl && (
                            <a
                              href={item.videoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-[14px] w-full h-[40px] bg-[#2A3F77] rounded-[6px] flex items-center justify-center gap-[8px] text-white font-semibold text-[13px] hover:opacity-95 transition"
                            >
                              <span
                                className="text-[11px] leading-none"
                                aria-hidden="true"
                              >
                                {"▶"}
                              </span>
                              VER VIDEO TESTIMONIO
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-[70px] mt-[32px]">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-[48px] h-[48px] rounded-full bg-[#2A3F77] text-white flex items-center justify-center text-xl"
                    aria-label="Testimonio anterior"
                  >
                    <span aria-hidden="true">{"‹"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-[48px] h-[48px] rounded-full bg-[#2A3F77] text-white flex items-center justify-center text-xl"
                    aria-label="Siguiente testimonio"
                  >
                    <span aria-hidden="true">{"›"}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A3F77]/80 px-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative w-full max-w-[640px] bg-white rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none p-[28px] sm:p-[36px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-[20px] right-[20px] text-[#2A3F77] text-[34px] leading-none"
              aria-label="Cerrar testimonio"
            >
              <span aria-hidden="true">{"×"}</span>
            </button>

            <div className="h-[32px] w-fit px-[14px] bg-[#FFC107] text-[#2A3F77] text-[14px] font-semibold uppercase flex items-center mb-[26px] rounded-tl-[8px] rounded-br-[8px]">
              {selectedTestimonial.service}
            </div>

            <div className="tracking-[2px] text-[18px] mb-[20px]">
              <Stars rating={selectedTestimonial.rating} />
            </div>

            <p className="text-[#2A3F77] text-[15px] leading-[26px] mb-[36px]">
              {'"'}
              {selectedTestimonial.fullQuote}
              {'"'}
            </p>

            <div className="flex items-center gap-[14px]">
              <Avatar item={selectedTestimonial} size={48} />
              <div>
                <p className="text-[#2A3F77] font-semibold text-[17px]">
                  {selectedTestimonial.name}
                </p>
                <p className="text-[#94A3B8] text-[13px]">
                  {selectedTestimonial.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
