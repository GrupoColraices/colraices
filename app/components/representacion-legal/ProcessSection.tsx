"use client";

import React, { useMemo, useRef, useState, useLayoutEffect } from "react";

type ProcessStep = { id: number; title: string; description: string; time: string };

const steps: ProcessStep[] = [
  { id: 1, title: "Contratación y entrega de información", description: "Contratas el servicio y nos envías: copia de la escritura (o promesa), identificación y fecha pactada para la firma.", time: "Día 1" },
  { id: 2, title: "Revisión jurídica y guía para el poder", description: "El equipo legal revisa la escritura y te envía las instrucciones exactas para obtener el poder notarial en tu país.", time: "Días 1-2" },
  { id: 3, title: "Obtienes y apostillas el poder", description: "Vas a un notario en tu país, firmas el poder especial, lo apostillas y nos lo envías (digital o físico según el caso).", time: "Depende de tu país" },
  { id: 4, title: "Validación y coordinación final", description: "Verificamos que el poder cumple todos los requisitos legales. Confirmamos con la notaría en Colombia y coordinamos día y hora exacta.", time: "Días 6-8" },
  { id: 5, title: "Firma y envío de la escritura", description: "El apoderado asiste a la notaría, firma en tu nombre, y ese mismo día recibes la confirmación más la copia digital de la escritura firmada.", time: "Día pactado" },
];

const VISIBLE = 3;
const GAP = 20;

export default function ProcessSection() {
  const [virtualIndex, setVirtualIndex] = useState(VISIBLE);
  const [animate, setAnimate] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(980);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setViewportWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const looped = useMemo(() => [...steps.slice(-VISIBLE), ...steps, ...steps.slice(0, VISIBLE)], []);
  const cardWidth = Math.max((viewportWidth - GAP * (VISIBLE - 1)) / VISIBLE, 0);
  const offset = virtualIndex * (cardWidth + GAP);
  const realIndex = (virtualIndex - VISIBLE + steps.length) % steps.length;

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnimate(true);
    setVirtualIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnimate(true);
    setVirtualIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    const firstReal = VISIBLE;
    const lastReal = VISIBLE + steps.length - 1;

    if (virtualIndex > lastReal) {
      setAnimate(false);
      setVirtualIndex(firstReal);
      return;
    }

    if (virtualIndex < firstReal) {
      setAnimate(false);
      setVirtualIndex(lastReal);
      return;
    }
  };

  return (
    <section className="bg-[#FBF8F3] py-[88px]">
      <div className="mx-auto mb-12 w-full max-w-[1180px] px-[52px] text-center">
        <div className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#C9900C]">Proceso</div>
        <h2 className="text-[48px] font-bold leading-tight text-[#0F2D5C]">Del contrato <em className="italic text-[#1A4F9E]">a la firma.</em></h2>
        <p className="mx-auto mt-3 max-w-[800px] text-base text-[#475569]">Cinco pasos. Menos de 10 días hábiles si el poder está listo.</p>
      </div>

      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[auto_1fr_auto] items-center gap-5 px-0">
        <button type="button" aria-label="Anterior" onClick={prev} className="grid h-[38px] w-[38px] place-items-center rounded-full border border-[#C9900C] text-2xl leading-none text-[#C9900C] disabled:opacity-50" disabled={isTransitioning}>‹</button>

        <div ref={viewportRef} className="overflow-hidden">
          <div
            className={`flex ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {looped.map((step, idx) => (
              <article key={`${step.id}-${idx}`} className="min-h-[320px] shrink-0 rounded-[20px] border border-[rgba(201,144,12,0.15)] bg-[#FFF9ED] p-5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,45,92,0.12),0_4px_10px_rgba(15,45,92,0.08)]" style={{ width: `${cardWidth}px`, animation: `replCardIn 420ms ease-out ${idx * 45}ms both` }}>
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#C9900C] text-3xl font-bold text-white">{step.id}</div>
                <h3 className="mb-2 text-[15.2px] font-semibold leading-[20.5px] tracking-[0px] text-[#0F2D5C]">{step.title}</h3>
                <p className="mb-4 text-[13.12px] font-normal leading-[21px] tracking-[0px] text-[#475569]">{step.description}</p>
                <span className="inline-block rounded-full bg-[#F7E6B5] px-3 py-1 text-[10.88px] font-semibold leading-[16.3px] tracking-[0px] text-[#92650A]">{step.time}</span>
              </article>
            ))}
          </div>
        </div>

        <button type="button" aria-label="Siguiente" onClick={next} className="grid h-[38px] w-[38px] place-items-center rounded-full border border-[#C9900C] text-2xl leading-none text-[#C9900C] disabled:opacity-50" disabled={isTransitioning}>›</button>
      </div>

      <div className="mt-5 text-center" aria-hidden="true">
        {steps.map((_, i) => <span key={i} className={`mx-1 inline-block h-2 rounded-full ${i === realIndex ? "w-[22px] bg-[#C9900C]" : "w-2 bg-[#E8D3A9]"}`} />)}
      </div>

      <style jsx>{`
        @keyframes replCardIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}