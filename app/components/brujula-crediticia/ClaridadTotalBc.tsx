"use client";

import { useEffect, useRef, useState, RefObject } from "react";

// ─── Static data outside component (no recreación en cada render) ────────────
const GARANTIAS = [
  "Un análisis técnico y profesional del perfil financiero y crediticio",
  "Una evaluación alineada con las políticas bancarias reales de los aliados",
  "Un diagnóstico honesto del punto en el que se encuentra el cliente",
  "Una estimación del cupo potencial de crédito (nivel medio-alto de certeza)",
  "Un plan claro para mejorar la posición crediticia si es necesario",
];

const NO_GARANTIAS = [
  "Carta bancaria de pre-aprobado — eso es la etapa de Crédito",
  "Aprobación final de crédito por parte del banco",
  "La tasa definitiva ni las condiciones finales del banco",
  "El monto exacto — es una estimación, no una oferta vinculante",
];

const CONDICIONES = [
  "Veracidad de la información entregada por el cliente",
  "Comportamiento financiero futuro del cliente",
  "Análisis final del banco y de la garantía inmobiliaria",
];

// ─── Hook reutilizable ────────────────────────────────────────────────────────
function useInView(threshold = 0.1): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ─── Sub-componente reutilizable para cada fila de lista ──────────────────────
interface ListItemProps {
  text: string;
  idx: number;
  inView: boolean;
  delay: number;
  variant: "green" | "red";
}

function ListItem({ text, inView, delay, variant }: ListItemProps) {
  const icon = variant === "green"
    ? { bg: "bg-[#05966926]", text: "text-[#059669]", symbol: "✓", size: "text-[9px]" }
    : { bg: "bg-[#DC26261A]", text: "text-[#DC2626]", symbol: "×", size: "text-[10px]" };

  return (
    <div
      className={`list-row list-row-${variant} flex items-start gap-3 anim-item${inView ? " visible" : ""}`}
      style={inView ? { animationDelay: `${delay}s` } : {}}
    >
      <div className={`w-[18px] h-[18px] rounded-full ${icon.bg} flex items-center justify-center ${icon.size} ${icon.text} mt-1 flex-shrink-0`}>
        {icon.symbol}
      </div>
      <p className="text-[14px] leading-[21.7px] text-[#1E293B] font-normal">{text}</p>
    </div>
  );
}

// ─── Estilos de animación (constante fuera del render, no se recrea) ──────────
const ANIMATION_STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-22px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(22px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.93); }
    to   { opacity: 1; transform: scale(1); }
  }

  .anim-header-label { opacity: 0; }
  .anim-header-label.visible {
    animation: fadeIn 0.5s ease forwards;
    animation-delay: 0.05s;
  }

  .anim-header-h2 { opacity: 0; }
  .anim-header-h2.visible {
    animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: 0.18s;
  }

  .anim-card-left { opacity: 0; }
  .anim-card-left.visible {
    animation: slideInLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: 0.05s;
  }

  .anim-card-right { opacity: 0; }
  .anim-card-right.visible {
    animation: slideInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: 0.15s;
  }

  /* En móvil las cards son full-width: slide lateral no aplica, usa fadeUp */
  @media (max-width: 1023px) {
    .anim-card-left.visible,
    .anim-card-right.visible {
      animation-name: fadeUp;
      animation-delay: 0.05s;
    }
  }

  .anim-item {
    opacity: 0;
    transform: translateY(12px);
    transition: none;
  }
  .anim-item.visible {
    animation: fadeUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .anim-condiciones { opacity: 0; }
  .anim-condiciones.visible {
    animation: scaleIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: 0.05s;
  }

  .anim-cond-item { opacity: 0; }
  .anim-cond-item.visible {
    animation: fadeUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  /* Hover micro-interaction */
  .list-row {
    border-radius: 8px;
    padding: 4px 6px;
    margin: -4px -6px;
    transition: background 0.18s ease, transform 0.18s ease;
  }
  .list-row:hover { transform: translateX(4px); }
  .list-row-green:hover { background: rgba(5, 150, 105, 0.06); }
  .list-row-red:hover   { background: rgba(220, 38, 38, 0.06); }

  /* Accesibilidad: respeta preferencia del usuario de reducir movimiento */
  @media (prefers-reduced-motion: reduce) {
    .anim-header-label, .anim-header-h2,
    .anim-card-left, .anim-card-right,
    .anim-item, .anim-condiciones, .anim-cond-item {
      opacity: 1 !important;
      transform: none !important;
      animation: none !important;
    }
    .list-row { transition: none; }
  }
`;

// ─── Componente principal ─────────────────────────────────────────────────────
export default function ClaridadTotalBc() {
  const [headerRef,      headerInView]      = useInView();
  const [garantiasRef,   garantiasInView]   = useInView();
  const [noGarantiasRef, noGarantiasInView] = useInView();
  const [condicionesRef, condicionesInView] = useInView();

  return (
    <>
      <style>{ANIMATION_STYLES}</style>

      <section className="w-full bg-white flex justify-center">
        <div className="w-full max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-12 pt-[80px] md:pt-[88px] pb-[80px] flex flex-col">

          {/* HEADER */}
          <div ref={headerRef} className="w-full max-w-[1084px] mx-auto">
            <p className={`text-[18px] md:text-[20px] leading-[24px] font-normal text-[#0A0A0A] mb-2 anim-header-label${headerInView ? " visible" : ""}`}>
              Claridad total
            </p>
            <h2 className={`text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.2] font-semibold text-[#0F2D5C] max-w-[760px] anim-header-h2${headerInView ? " visible" : ""}`}>
              Lo que sí garantizamos. Y lo que no prometemos.
            </h2>
          </div>

          {/* MAIN GRID */}
          <div className="w-full max-w-[1084px] mx-auto mt-[60px] flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* GARANTIZAMOS */}
              <div
                ref={garantiasRef}
                className={`rounded-[20px] border border-[#05966926] bg-[#ECFDF5] p-6 md:p-[30px] anim-card-left${garantiasInView ? " visible" : ""}`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-[34px] h-[34px] rounded-[10px] bg-[#05966926] flex items-center justify-center text-[16px]">✅</div>
                  <h3 className="text-[16px] font-semibold text-[#059669] leading-6">Esto sí garantizamos</h3>
                </div>
                <div className="flex flex-col gap-5">
                  {GARANTIAS.map((item, idx) => (
                    <ListItem
                      key={idx}
                      text={item}
                      idx={idx}
                      inView={garantiasInView}
                      delay={0.18 + idx * 0.08}
                      variant="green"
                    />
                  ))}
                </div>
              </div>

              {/* NO GARANTIZA */}
              <div
                ref={noGarantiasRef}
                className={`rounded-[20px] border border-[#DC26261F] bg-[#FEF2F2] p-6 md:p-[30px] anim-card-right${noGarantiasInView ? " visible" : ""}`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-[34px] h-[34px] rounded-[10px] bg-[#DC26261A] flex items-center justify-center text-[16px]">⚠️</div>
                  <h3 className="text-[16px] font-semibold text-[#DC2626] leading-6">Esto NO garantiza</h3>
                </div>
                <div className="flex flex-col gap-5">
                  {NO_GARANTIAS.map((item, idx) => (
                    <ListItem
                      key={idx}
                      text={item}
                      idx={idx}
                      inView={noGarantiasInView}
                      delay={0.18 + idx * 0.09}
                      variant="red"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CONDICIONES */}
            <div
              ref={condicionesRef}
              className={`w-full rounded-[14px] border border-[#FFC10733] bg-[#FEF3C7] px-6 py-5 anim-condiciones${condicionesInView ? " visible" : ""}`}
            >
              <h4 className="text-[15px] font-bold leading-[19.7px] text-[#0F2D5C] mb-5">
                Los resultados están sujetos a:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {CONDICIONES.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 anim-cond-item${condicionesInView ? " visible" : ""}`}
                    style={condicionesInView ? { animationDelay: `${0.2 + idx * 0.1}s` } : {}}
                  >
                    <div className="w-[5px] h-[5px] rounded-full bg-[#FFC107] mt-[8px] flex-shrink-0" />
                    <p className="text-[12.8px] leading-[18.6px] text-[#475569] font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}