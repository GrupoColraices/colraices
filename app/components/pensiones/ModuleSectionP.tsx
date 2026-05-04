"use client";

import { useState } from "react";

const moduleItems = [
  {
    num: "1",
    title: "Diagnóstico pensional completo",
    desc: "Consulta y sistematización del historial en el sistema colombiano (Colpensiones o fondo privado). El cliente sabe con exactitud cuántas semanas tiene, en qué fondo y cuál es su estado actual.",
  },
  {
    num: "2",
    title: "Evaluación de opciones según perfil",
    desc: "Análisis de las rutas disponibles según edad, semanas cotizadas, país de residencia y objetivos: cotización voluntaria, totalización, pensión doble, bono pensional o devolución de saldos.",
  },
  {
    num: "3",
    title: "Orientación sobre convenios bilaterales",
    desc: "Si el cliente reside en un país con convenio de seguridad social con Colombia, la asesoría explica cómo funciona la totalización, qué documentación se requiere y los pasos para activarlo.",
  },
  {
    num: "4",
    title: "Plan de acción personalizado",
    desc: "Documento que resume el diagnóstico, las opciones evaluadas, la recomendación de Colraices y los pasos concretos que el cliente debe dar según su ruta óptima.",
  },
  {
    num: "5",
    title: "Sesión de orientación",
    desc: "Reunión de presentación del plan, resolución de dudas y definición de primeros pasos. Incluye orientación específica sobre el bono pensional y su posible uso en vivienda cuando aplica.",
  },
  {
    num: "6",
    title: "Acompañamiento en trámites de primer nivel",
    desc: "Orientación y apoyo para los trámites iniciales ante Colpensiones o el fondo privado. El cliente tiene un punto de contacto que explica cada paso sin tener que navegar solo la burocracia.",
  },
];

export default function ModuleSectionP() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 3;
  const maxIndex = moduleItems.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full bg-[#FBF8F3] py-[78px] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-[52px]">
        {/* HEADER */}
        <div className="max-w-[760px] mb-[44px]">
          <div className="text-[#FFC107] uppercase tracking-[1.57px] text-[11.2px] font-semibold leading-[16.8px] mb-[10px]">
            MÓDULO I
          </div>

          <div className="flex items-start gap-[14px] mb-[14px]">
            <div className="w-[38px] h-[38px] rounded-full bg-[#0F2D5C] flex items-center justify-center text-white font-bold text-[18px] shadow-md flex-shrink-0 mt-[2px]">
              I
            </div>

            <div>
              <div className="text-[#FFC107] uppercase tracking-[1.57px] text-[11.2px] font-semibold leading-[16.8px] mb-[2px]">
                MÓDULO 1 · US$370 · PRECIO FIJO
              </div>

              <h2 className="text-[#0F2D5C] text-[22px] sm:text-[26px] lg:text-[22.4px] font-semibold leading-[33.6px]">
                Asesoría y Planificación Pensional
              </h2>
            </div>
          </div>

          <p className="text-[#475569] text-[15px] sm:text-[16px] leading-[1.75] max-w-[760px]">
            El objetivo es que el cliente entienda exactamente cuál es su
            situación pensional real, qué opciones tiene y cuál es la ruta más
            conveniente para su perfil. Para la mayoría, este módulo resuelve
            todo.
          </p>
        </div>

        {/* MOBILE / TABLET */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-[18px] w-max">
            {moduleItems.map((item) => (
              <div
                key={item.num}
                className="min-w-[85vw] sm:min-w-[46vw] bg-white border border-[rgba(15,45,92,0.08)] rounded-[20px] px-[24px] pt-[22px] pb-[24px] shadow-sm min-h-[220px] flex flex-col overflow-hidden"
              >
                <div className="w-[28px] h-[28px] rounded-full bg-[#0F2D5C] text-white text-[13px] font-bold flex items-center justify-center mb-[18px] flex-shrink-0">
                  {item.num}
                </div>

                <h3 className="text-[#0F2D5C] text-[17px] font-semibold leading-[1.45] mb-[10px] flex-shrink-0">
                  {item.title}
                </h3>

                <p className="text-[#475569] text-[14px] leading-[20.7px] flex-1 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block relative">
          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-[-26px] top-[44%] -translate-y-1/2 z-20 w-[40px] h-[40px] rounded-full border-2 border-[#FFC107] bg-[#FBF8F3] flex items-center justify-center"
          >
            <span className="text-[#FFC107] text-[22px] leading-none">
              ‹
            </span>
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-[-26px] top-[44%] -translate-y-1/2 z-20 w-[40px] h-[40px] rounded-full border-2 border-[#FFC107] bg-[#FBF8F3] flex items-center justify-center"
          >
            <span className="text-[#FFC107] text-[22px] leading-none">
              ›
            </span>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-[18px] transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {moduleItems.map((item) => (
                <div
                  key={item.num}
                  style={{
                    minWidth: `calc(${100 / cardsToShow}% - 12px)`,
                  }}
                  className="bg-white border border-[rgba(15,45,92,0.08)] rounded-[20px] px-[30px] pt-[22px] pb-[26px] shadow-sm h-[220px] flex flex-col overflow-hidden"
                >
                  <div className="w-[28px] h-[28px] rounded-full bg-[#0F2D5C] text-white text-[13px] font-bold flex items-center justify-center mb-[18px] flex-shrink-0">
                    {item.num}
                  </div>

                  <h3 className="text-[#0F2D5C] text-[16.8px] font-semibold leading-[25.2px] mb-[12px] min-h-[52px] flex-shrink-0">
                    {item.title}
                  </h3>

                  <p className="text-[#475569] text-[13px] leading-[20.7px] flex-1 overflow-hidden">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-[8px] mt-[28px]">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-[22px] bg-[#FFC107]"
                    : "w-[8px] bg-[#D7DCE5]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STRATEGIC CARD */}
        <div className="mt-[56px] bg-white border border-[rgba(255,193,7,0.15)] rounded-[28px] px-[30px] py-[30px] shadow-sm max-w-[1094px]">
          <div className="flex flex-col sm:flex-row items-start gap-[20px]">
            <div className="text-[32px] flex-shrink-0 leading-none mt-[6px]">
              🏠
            </div>

            <div className="flex-1">
              <div className="text-[#FFC107] uppercase tracking-[1.41px] text-[10.88px] font-semibold leading-[16.3px] mb-[6px]">
                CONEXIÓN ESTRATÉGICA
              </div>

              <h3 className="text-[#0F2D5C] text-[16.8px] font-semibold leading-[25.2px] mb-[8px]">
                Bono pensional → vivienda en Colombia
              </h3>

              <p className="text-[#475569] text-[13.28px] leading-[21.9px]">
                Cuando el diagnóstico indica que el cliente tiene derecho al
                bono pensional, la asesoría incluye orientación específica sobre
                cómo{" "}
                <span className="font-semibold text-[#0F2D5C]">
                  utilizarlo como parte del pago de una vivienda en Colombia.
                </span>{" "}
                Un activo invisible que puede convertirse en las llaves de un
                inmueble real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}