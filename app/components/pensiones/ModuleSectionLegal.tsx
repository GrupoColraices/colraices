"use client";
 
import { useState, useRef, useEffect } from "react";
 
const moduleItems = [
  {
    num: "1",
    category: "ENTRADA",
    title: "Revisión del historial",
    desc: "Se asigna asesor del Módulo 1 para revisar el expediente completo del cliente.",
  },
  {
    num: "2",
    category: "PRIMER FILTRO",
    title: "Vías administrativas",
    desc: "Si existen vías no agotadas, se activan antes de escalar al litigio.",
  },
  {
    num: "3",
    category: "ANÁLISIS",
    title: "Concepto técnico",
    desc: "El equipo legal emite concepto técnico sobre la procedencia del litigio.",
  },
  {
    num: "4",
    category: "VALIDACIÓN",
    title: "Aprobación del cliente",
    desc: "La vía judicial se activa únicamente con la aprobación explícita del cliente.",
  },
  {
    num: "5",
    category: "PREPARACIÓN",
    title: "Construcción del caso",
    desc: "El equipo jurídico estructura la demanda con los documentos y pruebas disponibles.",
  },
  {
    num: "6",
    category: "EJECUCIÓN",
    title: "Radicación y tramitación",
    desc: "Colraices radica la demanda ante la jurisdicción correspondiente y la lleva hasta resolución.",
  },
  {
    num: "7",
    category: "CONTROL",
    title: "Monitoreo procesal",
    desc: "Seguimiento permanente al estado del proceso con alertas al cliente en cada hito.",
  },
  {
    num: "8",
    category: "ACCIÓN LEGAL",
    title: "Recursos y apelaciones",
    desc: "Si el fallo es desfavorable en primera instancia, se evalúan y ejecutan recursos legales.",
  },
  {
    num: "9",
    category: "CIERRE",
    title: "Fallo y notificación",
    desc: "Se notifica al cliente el resultado final y se explican los alcances del fallo.",
  },
  {
    num: "10",
    category: "SEGUIMIENTO",
    title: "Acompañamiento y cobro",
    desc: "Actualizaciones periódicas y acompañamiento en el cobro efectivo cuando el fallo es favorable.",
  },
];
 
const CARDS_TO_SHOW = 5;
const GAP = 14; // px
 
export default function ModuleSectionII() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
 
  // maxIndex: how many times we can step forward
  const maxIndex = moduleItems.length - CARDS_TO_SHOW; // 10 - 5 = 5 → 6 dots
 
  // Measure the real track width from the DOM so cardWidth is exact
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.offsetWidth;
      // trackW = 5 * cardW + 4 * GAP  →  cardW = (trackW - 4*GAP) / 5
      const w = (trackW - GAP * (CARDS_TO_SHOW - 1)) / CARDS_TO_SHOW;
      setCardWidth(Math.floor(w));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
 
  const nextSlide = () => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prevSlide = () => setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1));
 
  // Each carousel step shifts by exactly (cardWidth + GAP) px
  const translateX = currentIndex * (cardWidth + GAP);
 
  // Arrow positions:
  // Left arrow sits on the RIGHT edge of card 1  → left = cardWidth - 18px (half arrow width)
  // Right arrow sits on the LEFT edge of card 5  → right = cardWidth - 18px
  const arrowInset = cardWidth - 18;
 
  return (
    <section className="w-full bg-[#0B1E3D] py-[72px] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-[52px]">
 
        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div className="max-w-[820px] mb-[36px]">
 
          {/* Línea + etiqueta */}
          <div className="flex items-center gap-[10px] mb-[18px]">
            <div className="w-[28px] h-[2px] bg-[#FFC107]" />
            <span className="text-[#FFC107] uppercase tracking-[1.57px] text-[11.2px] font-semibold">
              MÓDULO II
            </span>
          </div>
 
          {/* Badge + título */}
          <div className="flex items-center gap-[16px] mb-[28px]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#FFC107] flex items-center justify-center font-bold text-[#0B1E3D] text-[16px] shadow-md flex-shrink-0">
              II
            </div>
            <div>
              <div className="text-[#FFC107] uppercase tracking-[1.57px] text-[11px] font-semibold mb-[2px]">
                MÓDULO 2 · INCLUIDO CUANDO PROCEDE
              </div>
              <h2 className="text-white text-[24px] sm:text-[28px] font-semibold leading-[1.3]">
                Representación Legal en Pensiones
              </h2>
            </div>
          </div>
 
          {/* Bloque advertencia borde amarillo */}
          <div className="border-l-[3px] border-[#FFC107] bg-[rgba(255,255,255,0.05)] rounded-r-[12px] px-[24px] py-[20px]">
            <p className="text-[#cbd5e1] text-[14.5px] leading-[1.75] italic">
              <span className="font-bold text-[#FFC107] not-italic">
                La demanda no es el camino que Colraices incentiva.
              </span>{" "}
              Es el último recurso al que se llega cuando todos los caminos
              administrativos se han agotado y el Estado ha incumplido una
              obligación que el derecho le impone. La vía judicial se activa
              únicamente con la aprobación explícita del cliente y previo
              concepto técnico del equipo legal.
            </p>
          </div>
        </div>
 
        {/* ── PROTOCOLO LABEL ─────────────────────────────────────────────── */}
        <div className="text-[#94a3b8] uppercase tracking-[2px] text-[11px] font-semibold mb-[20px]">
          PROTOCOLO DE ACTIVACIÓN — 10 PASOS
        </div>
 
        {/* ── MOBILE ──────────────────────────────────────────────────────── */}
        <div className="lg:hidden overflow-x-auto pb-4">
          <div className="flex gap-[14px] w-max">
            {moduleItems.map((item) => (
              <div
                key={item.num}
                className="min-w-[78vw] sm:min-w-[44vw] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-[16px] px-[20px] pt-[18px] pb-[20px] flex flex-col"
              >
                <div className="w-[30px] h-[30px] rounded-full bg-[#FFC107] text-[#0B1E3D] text-[12px] font-bold flex items-center justify-center mb-[10px]">
                  {item.num}
                </div>
                <div className="text-[#FFC107] uppercase tracking-[1.4px] text-[10px] font-semibold mb-[6px]">
                  {item.category}
                </div>
                <h3 className="text-white text-[15px] font-semibold leading-[1.4] mb-[8px]">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-[13px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
 
        {/* ── DESKTOP ─────────────────────────────────────────────────────── */}
        <div className="hidden lg:block">
          <div className="relative">
 
            {/* ── Track: measured by ref ── */}
            <div className="overflow-hidden" ref={trackRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(-${translateX}px)`,
                }}
              >
                {moduleItems.map((item) => (
                  <div
                    key={item.num}
                    style={{
                      width: cardWidth ? `${cardWidth}px` : `calc((100% - ${GAP * (CARDS_TO_SHOW - 1)}px) / ${CARDS_TO_SHOW})`,
                      minWidth: cardWidth ? `${cardWidth}px` : `calc((100% - ${GAP * (CARDS_TO_SHOW - 1)}px) / ${CARDS_TO_SHOW})`,
                      flexShrink: 0,
                    }}
                    className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-[16px] px-[20px] pt-[20px] pb-[22px] flex flex-col min-h-[190px]"
                  >
                    <div className="w-[30px] h-[30px] rounded-full bg-[#FFC107] text-[#0B1E3D] text-[12px] font-bold flex items-center justify-center mb-[10px] flex-shrink-0">
                      {item.num}
                    </div>
                    <div className="text-[#FFC107] uppercase tracking-[1.4px] text-[10px] font-semibold mb-[6px]">
                      {item.category}
                    </div>
                    <h3 className="text-white text-[14.5px] font-semibold leading-[1.4] mb-[8px]">
                      {item.title}
                    </h3>
                    <p className="text-[#94a3b8] text-[12.5px] leading-[1.65] flex-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Flecha IZQUIERDA — borde derecho de tarjeta 1 */}
            {cardWidth > 0 && (
              <button
                onClick={prevSlide}
                aria-label="Anterior"
                style={{ left: `${arrowInset}px` }}
                className="absolute top-1/2 -translate-y-1/2 z-20 w-[36px] h-[36px] rounded-full border-2 border-[#FFC107] bg-[#0B1E3D] flex items-center justify-center hover:bg-[#FFC107] transition-colors group"
              >
                <span className="text-[#FFC107] group-hover:text-[#0B1E3D] text-[20px] leading-none select-none">
                  ‹
                </span>
              </button>
            )}
 
            {/* Flecha DERECHA — borde izquierdo de tarjeta 5 */}
            {cardWidth > 0 && (
              <button
                onClick={nextSlide}
                aria-label="Siguiente"
                style={{ right: `${arrowInset}px` }}
                className="absolute top-1/2 -translate-y-1/2 z-20 w-[36px] h-[36px] rounded-full border-2 border-[#FFC107] bg-[#0B1E3D] flex items-center justify-center hover:bg-[#FFC107] transition-colors group"
              >
                <span className="text-[#FFC107] group-hover:text-[#0B1E3D] text-[20px] leading-none select-none">
                  ›
                </span>
              </button>
            )}
          </div>
 
          {/* DOTS: 6 posiciones (maxIndex + 1) */}
          <div className="flex justify-center gap-[7px] mt-[28px]">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Posición ${idx + 1}`}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-[22px] bg-[#FFC107]"
                    : "w-[8px] bg-[rgba(255,255,255,0.2)]"
                }`}
              />
            ))}
          </div>
        </div>
 
      </div>
    </section>
  );
}