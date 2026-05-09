"use client";

import { useEffect, useRef, useState, type TransitionEvent } from "react";

type TeamMember = {
  name: string;
  role: string;
  location?: string;
  featured?: boolean;
};

const teamMembers: TeamMember[] = [
  {
    name: "Milena Osorio",
    role: "Consultora Colraices",
    location: "Alemania",
  },
  {
    name: "Elisa Guerrero",
    role: "Consultora Colraices",
    location: "España",
  },
  {
    name: "Daniel Felipe Pérez",
    role: "Dirección Ejecutiva",
    featured: true,
  },
  {
    name: "Camila Suárez",
    role: "Consultora Colraices",
  },
  {
    name: "Diana Ossa",
    role: "Consultora Colraices",
  },
  {
    name: "Luz Ángela Vanegas",
    role: "Consultora Colraices",
  },
  {
    name: "Bibiana Ulloa",
    role: "Consultora Colraices",
  },
  {
    name: "Angélica Báez",
    role: "Consultora Colraices",
  },
];

const totalMembers = teamMembers.length;
const loopMembers = [...teamMembers, ...teamMembers, ...teamMembers];
const transitionMs = 650;

function UserIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function normalizeIndex(index: number) {
  return ((index % totalMembers) + totalMembers) % totalMembers;
}

export default function EquipoSection() {
  const [currentIndex, setCurrentIndex] = useState(totalMembers);
  const [withTransition, setWithTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentIndexRef = useRef(totalMembers);
  const isLockedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);

  const activeDot = normalizeIndex(currentIndex);

  const clearFallbackTimer = () => {
    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  };

  const setSafeCurrentIndex = (nextIndex: number) => {
    currentIndexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
  };

  const unlockCarousel = () => {
    clearFallbackTimer();
    isLockedRef.current = false;
    setIsAnimating(false);
  };

  const jumpWithoutAnimation = (nextIndex: number) => {
    setWithTransition(false);
    setSafeCurrentIndex(nextIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setWithTransition(true);
        unlockCarousel();
      });
    });
  };

  const scheduleFallbackUnlock = (nextIndex: number) => {
    clearFallbackTimer();

    fallbackTimerRef.current = window.setTimeout(() => {
      const normalized = normalizeIndex(nextIndex);
      jumpWithoutAnimation(totalMembers + normalized);
    }, transitionMs + 180);
  };

  const moveTo = (nextIndex: number) => {
    if (isLockedRef.current) return;

    isLockedRef.current = true;
    setIsAnimating(true);
    setWithTransition(true);
    setSafeCurrentIndex(nextIndex);
    scheduleFallbackUnlock(nextIndex);
  };

  const prevSlide = () => {
    moveTo(currentIndexRef.current - 1);
  };

  const nextSlide = () => {
    moveTo(currentIndexRef.current + 1);
  };

  const goToSlide = (index: number) => {
    if (normalizeIndex(currentIndexRef.current) === index) return;

    moveTo(totalMembers + index);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return;

    const index = currentIndexRef.current;

    if (index >= totalMembers * 2) {
      jumpWithoutAnimation(totalMembers + normalizeIndex(index));
      return;
    }

    if (index < totalMembers) {
      jumpWithoutAnimation(totalMembers + normalizeIndex(index));
      return;
    }

    unlockCarousel();
  };

  useEffect(() => {
    return () => {
      clearFallbackTimer();
    };
  }, []);

  return (
    <section id="equipo" className="overflow-hidden bg-[#EDEDED] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#FEF3C7] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#FFC107]">
            El equipo
          </span>

          <h2 className="whitespace-normal text-3xl font-bold tracking-tight text-[#0F2D5C] md:whitespace-nowrap md:text-5xl">
            Las personas detrás del ecosistema.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6B7280] md:text-base">
            Detrás de cada proceso hay alguien que te escucha, que entiende tu
            caso y que te acompaña paso a paso.
          </p>
        </div>

        <div className="relative mx-auto max-w-[980px]">
          <button
            type="button"
            onClick={prevSlide}
            disabled={isAnimating}
            aria-label="Anterior"
            className="absolute top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#D1D5DB] shadow-sm transition hover:text-[#0F2D5C] disabled:pointer-events-none disabled:opacity-70 md:-left-10 md:flex lg:-left-14"
          >
            <ArrowLeft />
          </button>

          <div className="-my-2 overflow-hidden py-2">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={[
                "flex will-change-transform",
                withTransition
                  ? "transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "transition-none",
              ].join(" ")}
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {loopMembers.map((member, index) => {
                const isFeatured = member.featured === true;

                return (
                  <div
                    key={`${member.name}-${index}`}
                    className="shrink-0 basis-1/4 px-3"
                  >
                    <article
                      className={[
                        "group relative flex h-[180px] flex-col items-center justify-center overflow-hidden rounded-[14px] px-5 text-center",
                        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                        "hover:-translate-y-2 hover:scale-[1.015]",
                        "before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[130%] before:bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.24)_45%,transparent_70%)] before:transition-transform before:duration-700 hover:before:translate-x-[130%]",
                        isFeatured
                          ? "bg-[#0F2D5C] hover:shadow-[0_20px_46px_rgba(15,45,92,0.28)]"
                          : "bg-white hover:shadow-[0_18px_44px_rgba(15,45,92,0.14)]",
                      ].join(" ")}
                    >
                      <div className="relative mb-4 flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#CBD5E1] bg-[#F1F5F9] transition-transform duration-500 group-hover:scale-110">
                        <UserIcon />
                      </div>

                      <h3
                        className={[
                          "relative text-sm font-bold transition-transform duration-300 md:text-[15px]",
                          isFeatured ? "text-white" : "text-[#2A3F77]",
                        ].join(" ")}
                      >
                        {member.name}
                      </h3>

                      <p
                        className={[
                          "relative mt-1 text-xs transition-transform duration-300 md:text-[13px]",
                          isFeatured ? "text-[#FFC107]" : "text-[#6B7280]",
                        ].join(" ")}
                      >
                        {member.role}
                      </p>

                      {member.location && (
                        <div className="relative mt-3 flex items-center gap-1 text-[11px] font-bold text-[#FFC107] transition-transform duration-300 group-hover:scale-105">
                          <PinIcon />
                          {member.location}
                        </div>
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            disabled={isAnimating}
            aria-label="Siguiente"
            className="absolute top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#D1D5DB] shadow-sm transition hover:text-[#0F2D5C] disabled:pointer-events-none disabled:opacity-70 md:-right-10 md:flex lg:-right-14"
          >
            <ArrowRight />
          </button>

          <div className="mt-8 flex justify-center gap-4">
            {teamMembers.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                aria-label={`Ir a ${member.name}`}
                className={[
                  "h-1.5 w-1.5 rounded-full transition-all duration-300 disabled:pointer-events-none",
                  activeDot === index
                    ? "scale-125 bg-[#4B5563]"
                    : "bg-[#C9C9C9] hover:bg-[#9CA3AF]",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}