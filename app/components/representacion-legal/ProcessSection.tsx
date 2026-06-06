"use client";

import React, { useMemo, useRef, useState, useLayoutEffect } from "react";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  time: string;
};

const steps: ProcessStep[] = [
  { id: 1, title: "Contratación y entrega de información", description: "Contratas el servicio y nos envías: copia de la escritura (o promesa), identificación y fecha pactada para la firma.", time: "Día 1" },
  { id: 2, title: "Revisión jurídica y guía para el poder", description: "El equipo legal revisa la escritura y te envía las instrucciones exactas para obtener el poder notarial en tu país.", time: "Días 1-2" },
  { id: 3, title: "Obtienes y apostillas el poder", description: "Vas a un notario en tu país, firmas el poder especial, lo apostillas y nos lo envías (digital o físico según el caso).", time: "Depende de tu país" },
  { id: 4, title: "Validación y coordinación final", description: "Verificamos que el poder cumple todos los requisitos legales. Confirmamos con la notaría en Colombia y coordinamos día y hora exacta.", time: "Días 6-8" },
  { id: 5, title: "Firma y envío de la escritura", description: "El apoderado asiste a la notaría, firma en tu nombre, y ese mismo día recibes la confirmación más la copia digital de la escritura firmada.", time: "Día pactado" },
];

const GAP = 19;
const LOOP_COPIES = 9;
const MIDDLE_COPY = Math.floor(LOOP_COPIES / 2);
const getMiddleIndex = () => steps.length * MIDDLE_COPY;

export default function ProcessSection() {
  const [visible, setVisible] = useState(3);
  const [virtualIndex, setVirtualIndex] = useState(getMiddleIndex);
  const [animate, setAnimate] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(980);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    // A partir de 940 px se muestran 3 tarjetas
    const getVisibleFromWidth = (width: number) => {
      if (width < 768) return 1;
      if (width < 940) return 2;
      return 3;
    };

    const update = () => {
      const width = el.clientWidth;
      const nextVisible = getVisibleFromWidth(width);

      setViewportWidth(width);
      setVisible((prev) => {
        if (prev === nextVisible) return prev;

        setAnimate(false);
        setVirtualIndex((prev) => {
          const currentRealIndex =
            ((prev % steps.length) + steps.length) % steps.length;

          return getMiddleIndex() + currentRealIndex;
        });

        return nextVisible;
      });
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const looped = useMemo(
    () => Array.from({ length: LOOP_COPIES }, () => steps).flat(),
    [],
  );

  const cardWidth = Math.max((viewportWidth - GAP * (visible - 1)) / visible, 0);
  const offset = virtualIndex * (cardWidth + GAP);
  const realIndex = ((virtualIndex % steps.length) + steps.length) % steps.length;

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

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return;

    setIsTransitioning(false);

    const currentRealIndex =
      ((virtualIndex % steps.length) + steps.length) % steps.length;

    const lowerLimit = steps.length;
    const upperLimit = steps.length * (LOOP_COPIES - 2);

    // Evitar el "salto hacia atrás" reposicionando el índice a la misma tarjeta equivalente
    if (virtualIndex <= lowerLimit || virtualIndex >= upperLimit) {
      setAnimate(false);
      setVirtualIndex(getMiddleIndex() + currentRealIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    }
  };

  return (
    <section className="bg-[#FBF8F3] px-4 pt-16 pb-20 md:px-6 md:pt-20 md:pb-24 lg:px-0 lg:pt-[88px] lg:pb-[136px]">
      <div className="mx-auto mb-[48px] w-full max-w-[1180px] text-center">
        {/* Etiqueta de sección en azul oscuro */}
        <div className="mb-[12px] text-[14px] font-bold leading-[17px] tracking-[0.24em] text-[#0F2D5C]">
          Proceso
        </div>

        <h2 className="text-[32px] font-bold leading-[1.16] tracking-[0px] text-[#0F2D5C] sm:text-[36px] lg:text-[36px]">
          Del contrato a <em className="italic text-[#1A4F9E]">la firma.</em>
        </h2>

        <p className="mx-auto mt-[12px] max-w-[800px] text-[15px] leading-[21px] text-[#475569]">
          Cinco pasos. Menos de 10 días hábiles si el poder está listo.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1180px] items-start justify-center gap-[22px] md:gap-[30px]">
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="mt-[140px] grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#FFC107] bg-[#FBF8F3] text-[26px] leading-none text-[#FFC107] shadow-[0_8px_18px_rgba(15,45,92,0.08)] disabled:opacity-40"
          disabled={isTransitioning}
        >
          ‹
        </button>

        <div
          ref={viewportRef}
          className="relative h-[352px] min-w-0 flex-1 lg:max-w-[980px]"
        >
          <div className="h-[320px] overflow-hidden">
            <div
              className={`flex ${
                animate ? "transition-transform duration-500 ease-in-out" : ""
              }`}
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${offset}px)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {looped.map((step, idx) => (
                <article
                  key={`${step.id}-${idx}`}
                  className="flex h-[320px] shrink-0 flex-col rounded-[20px] border border-[rgba(255,193,7,0.15)] bg-[#FFF9ED] p-[24px] shadow-[0_14px_28px_rgba(15,45,92,0.06)]"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="mb-[28px] grid h-[52px] w-[52px] place-items-center rounded-full bg-[#FFC107] text-[20px] font-bold leading-none text-white shadow-[0_10px_20px_rgba(255,193,7,0.22)]">
                    {step.id}
                  </div>

                  <h3 className="text-[15.2px] font-bold leading-[20.5px] text-[#0F2D5C]">
                    {step.title}
                  </h3>

                  <p className="mt-[14px] text-[13.12px] leading-[21px] text-[#475569]">
                    {step.description}
                  </p>

                  <span className="mt-auto inline-flex h-[24px] w-fit items-center rounded-full border border-[rgba(255,193,7,0.25)] bg-[#FFF3C7] px-[12px] text-[10.88px] font-semibold leading-none text-[#92650A]">
                    {step.time}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2 text-center"
            aria-hidden="true"
          >
            {steps.map((_, i) => (
              <span
                key={i}
                className={`mx-[4px] inline-block h-2 rounded-full align-middle ${
                  i === realIndex
                    ? "w-[22px] bg-[#FFC107]"
                    : "w-2 bg-[rgba(255,193,7,0.28)]"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Siguiente"
          onClick={next}
          className="mt-[140px] grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#FFC107] bg-[#FBF8F3] text-[26px] leading-none text-[#FFC107] shadow-[0_8px_18px_rgba(15,45,92,0.08)] disabled:opacity-40"
          disabled={isTransitioning}
        >
          ›
        </button>
      </div>
    </section>
  );
}