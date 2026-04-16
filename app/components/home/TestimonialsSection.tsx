"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Son super excelentes! Me han acompañado en todo el proceso y la asesoría es inmediata. Han sido de mucha ayuda, sin duda los super recomiendo y no me arrepiento de haberlos escogido para hacer mi sueño de una casa realidad!",
    name: "Jairo Gonzalez Cabarcas",
    country: "Alemania",
    initials: "JG",
  },
  {
    quote:
      "Culmine de manera satisfactoria mi proceso de compra de inmueble. Desde el acompañamiento para la presentación de documentos, la intermediación con la constructora y la legalización ante la notaria. Mi experiencia fue 10/10",
    name: "Ana Maria Castrillon",
    country: "Estados Unidos",
    initials: "AC",
  },
  {
    quote:
      "Si quieres cumplir un sueño y es de Vivienda date esta oportunidad con este grupo de profesionales yo lo hice y es la mejor decisión que tome. Gracias COLRAICES por estar conmigo en cada paso de mi gestión para culminar esta gran meta.",
    name: "Sabydonaty Bustos Tafur",
    country: "España",
    initials: "SB",
  },
  {
    quote:
      "Recomendar de manera muy especial a Colraices y a Camila Suarez quien fue mi asesora, quien me asesoró y me acompañó durante todo el proceso el cual fue aprobado",
    name: "Diana Prieto",
    country: "Estados Unidos",
    initials: "DP",
  },
  {
    quote:
      "Yo siempre quería comprar apartamento en Colombia pero no sabía cómo hacer, por dónde empezar, lógicamente estando en el exterior es más difícil...",
    name: "Tito Venegas",
    country: "Estados Unidos",
    initials: "TV",
  },
];

const GAP = 20;

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(354.66);

  // Calcula el ancho de la card según el viewport
  const updateCardWidth = useCallback(() => {
    if (!containerRef.current) return;
    const containerW = containerRef.current.offsetWidth;
    // Móvil: casi todo el ancho del contenedor
    // Tablet+: 354px fijo
    setCardWidth(containerW < 640 ? containerW - 8 : 354.66);
  }, []);

  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [updateCardWidth]);

  // Triplicado para loop infinito
  const loop = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  const [index, setIndex] = useState(TESTIMONIALS.length);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnimatingRef = useRef(false);

  const startAutoPlay = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIndex((prev) => prev + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, startAutoPlay]);

  const handleTransitionEnd = () => {
    if (index >= TESTIMONIALS.length * 2) {
      setTransition(false);
      setIndex(TESTIMONIALS.length);
      isAnimatingRef.current = false;
      return;
    }
    if (index <= 0) {
      setTransition(false);
      setIndex(TESTIMONIALS.length);
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
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIndex((prev) => prev + 1);
    startAutoPlay();
  };

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIndex((prev) => prev - 1);
    startAutoPlay();
  };

  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="
        w-full 
        max-w-[1416px] 
        mx-auto 
        px-[20px] 
        sm:px-[40px] 
        md:px-[80px] 
        lg:px-[156px] 
        py-[60px] 
        md:py-[80px] 
        lg:py-[96px]
      ">
        <div className="max-w-[1103.09px] mx-auto">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center gap-[8px]">
            <p className="text-[#FFC107] text-[16px] italic font-semibold">
              Lo que dicen quienes ya confiaron en nosotros
            </p>
            <h2 className="text-[#0F2D5C] text-[22px] sm:text-[24px] md:text-[28px] font-medium leading-[1.3]">
              Colombianos como tú que ya están construyendo futuro.
            </h2>
          </div>

          {/* CAROUSEL */}
          <div ref={containerRef} className="mt-[48px] overflow-hidden">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-[20px] ${transition ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                transform: `translateX(-${index * (cardWidth + GAP)}px)`,
              }}
            >
              {loop.map((item, i) => (
                <article
                  key={i}
                  className="
                    flex-shrink-0
                    bg-[#FBF8F3]
                    border border-[#0F2D5C]/10
                    rounded-tl-[16px] rounded-br-[16px]
                    p-[20px] sm:p-[24px]
                    flex flex-col justify-between
                  "
                  style={{ width: cardWidth, minHeight: 320 }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-[16px]">
                      <div className="text-[#FFC107] tracking-[1px]">★★★★★</div>
                      <span className="h-[28px] px-[12px] bg-[#FFC107] text-[#2A3F77] text-[11px] font-semibold uppercase flex items-center">
                        Crédito
                      </span>
                    </div>

                    <p className="text-[#1E293B] text-[14px] sm:text-[15px] md:text-[16px] italic leading-[26px] md:leading-[28px] whitespace-pre-line">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-[16px] mt-[16px] border-t border-[#E2E8F0] flex items-center gap-[12px]">
                    <div className="w-[40px] h-[40px] flex-shrink-0 rounded-full bg-[#1A4F9E] text-white flex items-center justify-center font-semibold text-[13px]">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-[#2A3F77] font-semibold text-[14px]">{item.name}</p>
                      <p className="text-[#94A3B8] text-[12px]">{item.country}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CONTROLES */}
          <div className="flex justify-center gap-[20px] mt-[32px]">
            <button
              onClick={handlePrev}
              aria-label="Anterior testimonio"
              className="w-[48px] h-[48px] rounded-full bg-[#2A3F77] text-white flex items-center justify-center text-xl hover:opacity-90 transition"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              aria-label="Siguiente testimonio"
              className="w-[48px] h-[48px] rounded-full bg-[#2A3F77] text-white flex items-center justify-center text-xl hover:opacity-90 transition"
            >
              ›
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
