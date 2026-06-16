"use client";

import { useState } from "react";

const slides = [
  [
    { id: 1, title: "Contratas el servicio", desc: "Directo o hablando primero con un asesor Colraices.", badge: "Día 0", active: false },
    { id: 2, title: "Recolección de información", desc: "Información básica y documentación mínima necesaria para el análisis.", badge: "Día 0–1", active: true },
    { id: 3, title: "Análisis financiero y crediticio", desc: "Revisión técnica del perfil, consulta en centrales de riesgo y marcación bancaria interna.", badge: "Día 1–2", active: false },
  ],
  [
    { id: 4, title: "Evaluación de viabilidad", desc: "Contrastamos tu perfil con las políticas reales de los bancos aliados.", badge: "Día 2–3", active: false },
    { id: 5, title: "Entrega del informe y plan", desc: "Recibes el informe personalizado con diagnóstico, estimación y plan de acción.", badge: "Día 3 máx.", active: true },
    { id: 6, title: "Sesión de asesoría", desc: "Tu asesor te explica el resultado y define los próximos pasos concretos contigo.", badge: "Incluida", active: false, check: true },
  ],
];

export default function ProcesoSectionBc() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full bg-[#FBF8F3] flex justify-center pb-[70px]">
      <div className="w-full max-w-[1180px] px-4 md:px-8 lg:px-[48px] pt-16 md:pt-[88px] flex flex-col">

        {/* HEADER */}
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-base md:text-[20px] text-[#0A0A0A]">El proceso</span>

          <h2 className="mt-[8px] text-2xl md:text-3xl lg:text-[36px] font-semibold text-[#0F2D5C]">
            Seis pasos. Resultado en 3 días hábiles.
          </h2>

          <p className="mt-[16px] max-w-[800px] text-sm md:text-[15px] text-[#475569]">
            Desde que contratas hasta que recibes tu diagnóstico completo y plan de acción.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-12 md:mt-[80px] flex items-center justify-center">

          {/* LEFT ARROW (solo desktop) */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 z-10 w-[44px] h-[44px] rounded-full border border-[#FFC107] text-[#FFC107] items-center justify-center"
          >
            ←
          </button>

          {/* CARDS */}
          <div className="flex gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-2 md:px-0">

            {slides[index].map((card) => {
              const isActive = card.active;

              return (
                <div
                  key={card.id}
                  className={`
                    snap-center shrink-0
                    ${isActive
                      ? "w-[260px] sm:w-[280px] md:w-[300px] lg:w-[323px] border-2 border-[#FFC107] md:-mt-[8px]"
                      : "w-[260px] sm:w-[280px] md:w-[300px] lg:w-[308px] border border-[#2A3F77]/15"}
                    bg-white rounded-[16px] overflow-hidden shadow-sm transition-all duration-300
                  `}
                >

                  {/* TOP */}
                  <div
                    className={`w-full ${
                      isActive
                        ? "h-[100px] sm:h-[110px] md:h-[126px] bg-gradient-to-b from-[#FFD54F] to-[#FFC107]"
                        : "h-[100px] sm:h-[110px] md:h-[120px] bg-gradient-to-b from-[#4A6FA5] to-[#2A3F77]"
                    } flex items-center justify-center`}
                  >
                    <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full bg-white flex items-center justify-center">
                      <span
                        className={`text-lg md:text-[24px] font-bold ${
                          isActive ? "text-[#FFC107]" : "text-[#2A3F77]"
                        }`}
                      >
                        {card.check ? "✓" : card.id}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="px-4 md:px-[20px] pt-5 md:pt-[24px] pb-6">
                    <h3 className="text-[15px] md:text-[16px] font-semibold text-[#2A3F77]">
                      {card.title}
                    </h3>

                    <p className="mt-[10px] md:mt-[12px] text-[13px] md:text-[14px] text-[#64748B]">
                      {card.desc}
                    </p>

                    <div
                      className={`mt-[14px] md:mt-[16px] inline-block px-[12px] py-[6px] rounded-full ${
                        isActive
                          ? "bg-[#FFC107]/10 text-[#F59E0B]"
                          : "bg-[#2A3F77]/10 text-[#2A3F77]"
                      }`}
                    >
                      <span className="text-[11px] md:text-[12px] font-semibold">
                        {card.badge}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* RIGHT ARROW (solo desktop) */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 z-10 w-[44px] h-[44px] rounded-full bg-[#2A3F77] text-white items-center justify-center shadow-md"
          >
            →
          </button>
        </div>

        {/* INDICATOR */}
        <div className="flex justify-center mt-[32px] gap-[8px]">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[6px] w-[24px] rounded-full transition-all ${
                i === index ? "bg-[#FFC107]" : "bg-[#FFC107]/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}