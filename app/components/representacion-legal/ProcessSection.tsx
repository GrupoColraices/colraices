"use client";

import React, { useMemo, useRef, useState, useLayoutEffect } from "react";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  time: string;
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Contratación y entrega de información",
    description:
      "Contratas el servicio y nos envías: copia de la escritura (o promesa), identificación y fecha pactada para la firma.",
    time: "Día 1",
  },
  {
    id: 2,
    title: "Revisión jurídica y guía para el poder",
    description:
      "El equipo legal revisa la escritura y te envía las instrucciones exactas para obtener el poder notarial en tu país.",
    time: "Días 1-2",
  },
  {
    id: 3,
    title: "Obtienes y apostillas el poder",
    description:
      "Vas a un notario en tu país, firmas el poder especial, lo apostillas y nos lo envías (digital o físico según el caso).",
    time: "Depende de tu país",
  },
  {
    id: 4,
    title: "Validación y coordinación final",
    description:
      "Verificamos que el poder cumple todos los requisitos legales. Confirmamos con la notaría en Colombia y coordinamos día y hora exacta.",
    time: "Días 6-8",
  },
  {
    id: 5,
    title: "Firma y envío de la escritura",
    description:
      "El apoderado asiste a la notaría, firma en tu nombre, y ese mismo día recibes la confirmación más la copia digital de la escritura firmada.",
    time: "Día pactado",
  },
];

const GAP = 20;

export default function ProcessSection() {
  const [visible, setVisible] = useState(3);
  const [virtualIndex, setVirtualIndex] = useState(3);
  const [animate, setAnimate] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(980);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const getVisibleFromWidth = (width: number) => {
      if (width < 768) return 1;
      if (width < 1100) return 2;
      return 3;
    };

    const update = () => {
      const width = el.clientWidth;
      const nextVisible = getVisibleFromWidth(width);

      setViewportWidth(width);
      setVisible((prev) => {
        if (prev === nextVisible) return prev;

        setAnimate(false);
        setVirtualIndex(nextVisible);
        return nextVisible;
      });
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const looped = useMemo(
    () => [...steps.slice(-visible), ...steps, ...steps.slice(0, visible)],
    [visible],
  );

  const cardWidth = Math.max((viewportWidth - GAP * (visible - 1)) / visible, 0);
  const offset = virtualIndex * (cardWidth + GAP);
  const realIndex = (virtualIndex - visible + steps.length) % steps.length;

  const next = () => {
    if (isTransitioning) return;
    setAnimate(true);
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (isTransitioning) return;
    setAnimate(true);
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    const firstReal = visible;
    const lastReal = visible + steps.length - 1;

    if (virtualIndex > lastReal) {
      setAnimate(false);
      setVirtualIndex(firstReal);
      requestAnimationFrame(() => setAnimate(true));
      return;
    }

    if (virtualIndex < firstReal) {
      setAnimate(false);
      setVirtualIndex(lastReal);
      requestAnimationFrame(() => setAnimate(true));
    }
  };

  return (
    <section className="bg-[#FBF8F3] px-4 py-12 md:px-6 md:py-16 lg:py-[88px]">
      <div className="mx-auto mb-8 w-full max-w-[1180px] text-center md:mb-12 lg:px-[52px]">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#C9900C] md:text-sm">
          Proceso
        </div>
        <h2 className="text-3xl font-bold leading-tight text-[#0F2D5C] sm:text-4xl md:text-5xl">
          Del contrato <em className="italic text-[#1A4F9E]">a la firma.</em>
        </h2>
        <p className="mx-auto mt-3 max-w-[800px] text-sm text-[#475569] sm:text-base">
          Cinco pasos. Menos de 10 días hábiles si el poder está listo.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4 md:gap-5">
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="grid h-9 w-9 place-items-center rounded-full border border-[#C9900C] text-2xl leading-none text-[#C9900C] disabled:opacity-50"
          disabled={isTransitioning}
        >
          ‹
        </button>

        <div ref={viewportRef} className="overflow-hidden">
          <div
            className={`flex ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {looped.map((step, idx) => (
              <article
                key={`${step.id}-${idx}`}
                className="min-h-[260px] shrink-0 rounded-[20px] border border-[rgba(201,144,12,0.15)] bg-[#FFF9ED] p-4 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,45,92,0.12),0_4px_10px_rgba(15,45,92,0.08)] sm:min-h-[290px] md:min-h-[320px] md:p-5"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#C9900C] text-2xl font-bold text-white md:h-11 md:w-11 md:text-3xl">
                  {step.id}
                </div>
                <h3 className="mb-2 text-sm font-semibold leading-5 text-[#0F2D5C] md:text-[15.2px] md:leading-[20.5px]">
                  {step.title}
                </h3>
                <p className="mb-4 text-xs leading-5 text-[#475569] sm:text-[13.12px] sm:leading-[21px]">
                  {step.description}
                </p>
                <span className="inline-block rounded-full bg-[#F7E6B5] px-3 py-1 text-[10.88px] font-semibold leading-[16.3px] text-[#92650A]">
                  {step.time}
                </span>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Siguiente"
          onClick={next}
          className="grid h-9 w-9 place-items-center rounded-full border border-[#C9900C] text-2xl leading-none text-[#C9900C] disabled:opacity-50"
          disabled={isTransitioning}
        >
          ›
        </button>
      </div>

      <div className="mt-5 text-center" aria-hidden="true">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`mx-1 inline-block h-2 rounded-full ${i === realIndex ? "w-[22px] bg-[#C9900C]" : "w-2 bg-[#E8D3A9]"}`}
          />
        ))}
      </div>
    </section>
  );
}