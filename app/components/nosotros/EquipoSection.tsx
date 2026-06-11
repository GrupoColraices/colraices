"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TransitionEvent } from "react";

type TeamMember = {
  name: string;
  role: string;
  location?: string;
  image?: string;
  featured?: boolean;
};

const teamMembers: TeamMember[] = [
  {
    name: "Milena Osorio",
    role: "Consultora Colraices",
    location: "Alemania",
    image: "/equipo/Milena_Osorio.jpg",
  },
  {
    name: "Elisa Guerrero",
    role: "Consultora Colraices",
    location: "España",
    image: "/equipo/Elisa_Guerrero.jpg",
  },
  {
    name: "Daniel Felipe Pérez",
    role: "Dirección Ejecutiva",
    image: "/equipo/Daniel_ Felipe_Perez.jpg",
    featured: true,
  },
  {
    name: "Camila Suárez",
    role: "Consultora Colraices",
    image: "/equipo/Camila_Suarez.jpg",
  },
  {
    name: "Diana Ossa",
    role: "Consultora Colraices",
    image: "/equipo/Diana_Ossa.jpg",
  },
  {
    name: "Luz Ángela Vanegas",
    role: "Consultora Colraices",
    image: "/equipo/Luz_Angela_Vanegas.jpg",
  },
  {
    name: "Bibiana Ulloa",
    role: "Consultora Colraices",
    image: "/equipo/Bibiana_Ulloa.jpg",
  },
  {
    name: "Angélica Báez",
    role: "Consultora Colraices",
    image: "/equipo/Angelica_Baez.jpg",
  },
  {
    name: "Luisa Fernanda Diaz",
    role: "Consultora Colraices",
    image: "/equipo/Luisa_Fernanda_Diaz.jpg",
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
  const [isDesktop, setIsDesktop] = useState(false);

  const currentIndexRef = useRef(totalMembers);
  const isLockedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);

  const activeDot = normalizeIndex(currentIndex);
  const visibleMembers = isDesktop ? loopMembers : teamMembers;

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
    if (!isDesktop || isLockedRef.current) return;

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
    if (!isDesktop || event.propertyName !== "transform") return;

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
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      const desktop = mediaQuery.matches;

      setIsDesktop(desktop);
      setWithTransition(false);
      setIsAnimating(false);
      isLockedRef.current = false;

      if (desktop) {
        setSafeCurrentIndex(totalMembers);
      } else {
        setSafeCurrentIndex(0);
      }

      requestAnimationFrame(() => {
        setWithTransition(true);
      });
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      clearFallbackTimer();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section id="equipo" className="overflow-hidden bg-[#EDEDED] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
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

          <div className="-mx-6 -my-2 overflow-x-auto overflow-y-hidden px-6 py-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:overflow-hidden md:px-0 [&::-webkit-scrollbar]:hidden">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={[
                "flex touch-pan-x snap-x snap-mandatory md:snap-none md:will-change-transform",
                withTransition
                  ? "md:transition-transform md:duration-[650ms] md:ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "md:transition-none",
              ].join(" ")}
              style={{
                transform: isDesktop
                  ? `translateX(-${currentIndex * 25}%)`
                  : undefined,
              }}
            >
              {visibleMembers.map((member, index) => {
                const isFeatured = member.featured === true;

                return (
                  <div
                    key={`${member.name}-${index}`}
                    className="shrink-0 basis-[82%] snap-center px-3 min-[420px]:basis-[76%] sm:basis-[48%] md:basis-1/4"
                  >
                    <article
                      className={[
                        "group relative flex h-[188px] flex-col items-center justify-center overflow-hidden rounded-[14px] px-5 text-center md:h-[180px]",
                        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:will-change-transform",
                        "md:hover:-translate-y-2 md:hover:scale-[1.015]",
                        "before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[130%] before:bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.24)_45%,transparent_70%)] before:transition-transform before:duration-700 md:hover:before:translate-x-[130%]",
                        isFeatured
                          ? "bg-[#0F2D5C] md:hover:shadow-[0_20px_46px_rgba(15,45,92,0.28)]"
                          : "bg-white md:hover:shadow-[0_18px_44px_rgba(15,45,92,0.14)]",
                      ].join(" ")}
                    >
                      <div className="relative mb-4 flex h-[62px] w-[62px] items-center justify-center overflow-hidden rounded-full border border-[#CBD5E1] bg-[#F1F5F9] transition-transform duration-500 md:group-hover:scale-110">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="62px"
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <UserIcon />
                        )}
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
                        <div className="relative mt-3 flex items-center gap-1 text-[11px] font-bold text-[#FFC107] transition-transform duration-300 md:group-hover:scale-105">
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

          <div className="mt-8 hidden justify-center gap-4 md:flex">
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