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
        "Si quieres cumplir un sueño y es de Vivienda date esta oportunidad con este grupo de profesionales yo lo hice y es la mejor decisión que tome. Gracias COLRAICES .. Por estar conmigo en cada paso de mi gestión para culminar esta gran Meta MI VIVIENDA, EN MI LINDO PAIS COLOMBIA .UNA VEZ MÁS GRACIAS.",
      name: "Sabydonaty Bustos Tafur",
      country: "España",
      initials: "SB",
    },
  ];

  //  OBSERVER PRO
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#FFFFFF]">
      <div className="w-full max-w-[1416px] mx-auto px-[156.07px] pt-[96px] pb-[96px]">
        <div className="max-w-[1103.09px] mx-auto">

          {/* HEADER */}
          <div
            className={`
              flex flex-col items-center text-center gap-[8px]
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <p className="text-[#FFC107] text-[16px] italic font-semibold leading-none">
              Lo que dicen quienes ya confiaron en nosotros
            </p>

            <h2 className="text-[#0F2D5C] text-[28px] font-medium leading-[34px]">
              Colombianos como tú que ya están construyendo futuro.
            </h2>
          </div>

          {/* CARDS */}
          <div className="mt-[48px] grid grid-cols-1 md:grid-cols-[354.66px_354.68px_354.66px] gap-[20px]">
            {testimonials.map((item, index) => (
              <article
                key={index}
                className={`
                  h-[410.64px] bg-[#FBF8F3] border border-[#0F2D5C]/10 
                  rounded-[0px] rounded-tl-[16px] rounded-tr-[0px] rounded-br-[16px] rounded-bl-[0px] 
                  p-[24px] flex flex-col justify-between 
                  shadow-[0_4px_12px_rgba(15,45,92,0.08)]
                  transition-all duration-700 ease-out
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(15,45,92,0.12)]
                `}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <div>
                  <div className="flex items-start justify-between mb-[20px]">
                    <div className="text-[#FFC107] text-[14px] leading-none tracking-[1px]">
                      ★★★★★
                    </div>

                    <span className="inline-flex items-center justify-center h-[30px] px-[14px] rounded-[4px] bg-[#FFC107] text-[#2A3F77] text-[12px] font-semibold tracking-[0.04em] uppercase">
                      Crédito
                    </span>
                  </div>

                  <p className="text-[#1E293B] text-[16px] italic leading-[28px] whitespace-pre-line">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-[18px] border-t border-[#E2E8F0] flex items-center gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#1A4F9E] text-white flex items-center justify-center text-[14px] font-semibold flex-shrink-0">
                    {item.initials}
                  </div>

                  <div>
                    <p className="text-[#2A3F77] text-[14px] font-semibold leading-[20px]">
                      {item.name}
                    </p>
                    <p className="text-[#94A3B8] text-[12px] leading-[18px]">
                      {item.country}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}