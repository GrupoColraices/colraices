"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  
  const testimonials = [
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
  
  const loop = [...testimonials, ...testimonials];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cardWidth = 354.66;
  const gap = 20;

  // 🔥 autoplay inteligente
  const startAutoPlay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 3000); // espera 3s sin interacción
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  // 🔥 loop infinito limpio
  useEffect(() => {
    if (index >= testimonials.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 500);

      setTimeout(() => {
        setTransition(true);
      }, 520);
    }
  }, [index]);

  // 🔥 botones con pausa inteligente
  const handleNext = () => {
    setIndex((prev) => prev + 1);
    startAutoPlay();
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    startAutoPlay();
  };

  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="w-full max-w-[1416px] mx-auto px-[156px] py-[96px]">
        <div className="max-w-[1103.09px] mx-auto">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center gap-[8px]">
            <p className="text-[#FFC107] text-[16px] italic font-semibold">
              Lo que dicen quienes ya confiaron en nosotros
            </p>

            <h2 className="text-[#0F2D5C] text-[28px] font-medium">
              Colombianos como tú que ya están construyendo futuro.
            </h2>
          </div>

          {/* SLIDER */}
          <div className="mt-[48px] overflow-hidden">

            <div
              className={`flex gap-[20px] ${transition ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                transform: `translateX(-${index * (cardWidth + gap)}px)`
              }}
            >
              {loop.map((item, index) => (
                <article
                  key={index}
                  className="
                    min-w-[354.66px]
                    h-[410.64px]
                    bg-[#FBF8F3]
                    border border-[#0F2D5C]/10
                    rounded-tl-[16px] rounded-br-[16px]
                    p-[24px]
                    flex flex-col justify-between
                  "
                >
                  <div>
                    <div className="flex items-start justify-between mb-[20px]">
                      <div className="text-[#FFC107] tracking-[1px]">
                        ★★★★★
                      </div>

                      <span className="h-[30px] px-[14px] bg-[#FFC107] text-[#2A3F77] text-[12px] font-semibold uppercase flex items-center">
                        Crédito
                      </span>
                    </div>

                    <p className="text-[#1E293B] text-[16px] italic leading-[28px] whitespace-pre-line">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="pt-[18px] border-t border-[#E2E8F0] flex items-center gap-[12px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#1A4F9E] text-white flex items-center justify-center font-semibold">
                      {item.initials}
                    </div>

                    <div>
                      <p className="text-[#2A3F77] font-semibold">
                        {item.name}
                      </p>
                      <p className="text-[#94A3B8] text-[12px]">
                        {item.country}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* BOTONES */}
          <div className="flex justify-center gap-[20px] mt-[32px]">

            <button
              onClick={handlePrev}
              className="w-[48px] h-[48px] rounded-full bg-[#2A3F77] text-white flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={handleNext}
              className="w-[48px] h-[48px] rounded-full bg-[#2A3F77] text-white flex items-center justify-center"
            >
              ›
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}