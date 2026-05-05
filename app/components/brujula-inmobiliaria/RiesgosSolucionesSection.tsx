"use client";

import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
  type TransitionEvent,
} from "react";

const riesgos = [
  {
    icon: "💰",
    title: "Que pagues más de lo que realmente vale el inmueble",
    desc: "Cuando estás lejos es muy difícil saber si el precio que te piden es justo o si el inmueble está por encima del valor de mercado.",
  },
  {
    icon: "🏦",
    title: "Que el banco no acepte el inmueble para crédito",
    desc: "Puede pasar que quieras financiar la compra y descubras demasiado tarde que el banco no acepta ese inmueble como garantía.",
  },
  {
    icon: "⚖️",
    title: "Que el inmueble tenga problemas legales",
    desc: "Un inmueble puede tener embargos, deudas, limitaciones o problemas jurídicos que no siempre son evidentes al principio.",
  },
  {
    icon: "✍️",
    title: "Negociar sin respaldo legal",
    desc: "Si no tienes quién te represente, puedes terminar firmando acuerdos o promesas de compraventa que no protegen tus intereses.",
  },
  {
    icon: "💸",
    title: "Enviar dinero desde el exterior de forma insegura",
    desc: "Transferir arras o dinero para la compra sin un proceso claro puede generar riesgos legales, retrasos o pérdidas por mal tipo de cambio.",
  },
  {
    icon: "✈️",
    title: "No poder estar en Colombia para supervisar el proceso",
    desc: "Estar lejos significa que no puedes verificar documentos, hablar con el vendedor o controlar cada paso de la negociación.",
  },
  {
    icon: "📊",
    title: "No saber si el inmueble realmente es una buena inversión",
    desc: "A veces compras pensando en rentas o valorización, pero sin un análisis claro es difícil saber qué puedes esperar realmente del inmueble.",
  },
  {
    icon: "🔍",
    title: "Comprar sin conocer el estado real del inmueble",
    desc: "Las fotos no siempre muestran humedades, deterioros, fallas estructurales o detalles que pueden afectar el valor de la compra.",
  },
  {
    icon: "🧾",
    title: "No revisar correctamente los documentos",
    desc: "Certificados, escrituras, impuestos y paz y salvos deben revisarse con cuidado antes de avanzar en cualquier negociación.",
  },
  {
    icon: "🏘️",
    title: "Elegir una zona sin conocer su verdadero potencial",
    desc: "Desde el exterior es difícil saber si una zona tiene valorización, buena demanda, seguridad o proyección real.",
  },
  {
    icon: "📉",
    title: "Invertir sin calcular rentabilidad ni costos ocultos",
    desc: "Administración, impuestos, mantenimientos y gastos de cierre pueden cambiar completamente el resultado financiero de la inversión.",
  },
  {
    icon: "⏱️",
    title: "Perder oportunidades por falta de seguimiento",
    desc: "Un buen inmueble puede perderse si no hay alguien atento a responder, negociar, verificar y avanzar en el momento correcto.",
  },
  {
    icon: "🤝",
    title: "Depender de personas sin una ruta clara",
    desc: "Cuando no hay un proceso organizado, puedes terminar tomando decisiones importantes con información incompleta o poco confiable.",
  },
];

const BASE_INDEX = riesgos.length;
const GAP = 20;

export default function RiesgosSolucionesSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLElement | null>(null);
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const [cardStep, setCardStep] = useState(355);
  const [currentIndex, setCurrentIndex] = useState(BASE_INDEX);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const infiniteRiesgos = useMemo(() => {
    return [...riesgos, ...riesgos, ...riesgos];
  }, []);

  const releaseLock = () => {
    isAnimatingRef.current = false;

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useLayoutEffect(() => {
    const updateSize = () => {
      if (!firstCardRef.current) return;

      const cardWidth = firstCardRef.current.offsetWidth;
      setCardStep(cardWidth + GAP);
      setIsReady(true);
    };

    updateSize();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateSize)
        : null;

    if (viewportRef.current && resizeObserver) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener("resize", updateSize);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateSize);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const moveCarousel = (direction: "left" | "right") => {
    if (isAnimatingRef.current || !isReady) return;

    isAnimatingRef.current = true;
    setTransitionEnabled(true);

    setCurrentIndex((prev) => {
      return direction === "right" ? prev + 1 : prev - 1;
    });

    timeoutRef.current = window.setTimeout(() => {
      releaseLock();
    }, 720);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    let nextIndex = currentIndex;

    if (currentIndex >= riesgos.length * 2) {
      nextIndex = currentIndex - riesgos.length;
    }

    if (currentIndex < riesgos.length) {
      nextIndex = currentIndex + riesgos.length;
    }

    if (nextIndex !== currentIndex) {
      setTransitionEnabled(false);
      setCurrentIndex(nextIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }

    releaseLock();
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointerStartRef.current) return;

    const diffX = event.clientX - pointerStartRef.current.x;
    const diffY = event.clientY - pointerStartRef.current.y;

    pointerStartRef.current = null;

    if (Math.abs(diffX) < 45) return;
    if (Math.abs(diffY) > Math.abs(diffX)) return;

    if (diffX > 0) {
      moveCarousel("left");
    } else {
      moveCarousel("right");
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FBF8F3] pt-[76px] pb-[46px] sm:pt-[96px] sm:pb-[50px]"
      style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
    >
      <div className="mx-auto w-full">
        {/* HEADER */}
        <div className="mx-auto mb-[56px] max-w-[900px] px-4 text-center sm:mb-[78px] sm:px-6">
          <div className="mb-[14px] inline-block text-[10px] font-bold uppercase tracking-[0.26em] text-[#C9900C] sm:mb-[16px] sm:text-[11px] sm:tracking-[0.28em]">
            Riesgos que eliminamos
          </div>

          <h2 className="text-[30px] font-extrabold leading-[1.14] tracking-[-0.035em] text-[#0F2D5C] sm:text-[40px] lg:text-[43px]">
            Cada riesgo tiene{" "}
            <em className="font-semibold italic text-[#C9900C]">
              una solución
            </em>
          </h2>

          <p className="mx-auto mt-[20px] max-w-[820px] text-[15.5px] font-normal leading-[1.7] tracking-[-0.01em] text-[#475569] sm:mt-[24px] sm:text-[18px]">
            El colombiano que compra desde el exterior enfrenta 13 riesgos
            concretos. Brújula Inmobiliaria fue diseñada para resolverlos
            todos.
          </p>
        </div>

        {/* CARRUSEL CIRCULAR */}
        <div
          ref={viewportRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartRef.current = null;
          }}
          onPointerLeave={() => {
            pointerStartRef.current = null;
          }}
          className="
            relative w-full overflow-hidden px-4 pt-8 pb-12 -mt-8
            sm:px-6
            lg:px-[max(32px,calc((100vw-1680px)/2+32px))]
          "
          style={{ touchAction: "pan-y" }}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`
              flex gap-[20px] select-none will-change-transform
              transition-opacity duration-300
              ${isReady ? "opacity-100" : "opacity-0"}
            `}
            style={{
              transform: `translate3d(-${currentIndex * cardStep}px, 0, 0)`,
              transition: transitionEnabled
                ? "transform 540ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease"
                : "opacity 300ms ease",
            }}
          >
            {infiniteRiesgos.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                ref={index === 0 ? firstCardRef : null}
                className="
                  group relative flex min-h-[315px] w-[calc(100vw-32px)] shrink-0 flex-col
                  overflow-hidden rounded-[18px] border border-[rgba(15,45,92,0.10)]
                  bg-white px-[28px] py-[28px]
                  shadow-[0_1px_3px_rgba(15,45,92,0.05)]
                  transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-[7px]
                  hover:border-[rgba(15,45,92,0.12)]
                  hover:shadow-[0_14px_34px_rgba(15,45,92,0.08),0_4px_10px_rgba(15,45,92,0.04)]
                  sm:w-[335px]
                "
              >
                {/* Línea inferior animada */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full overflow-hidden">
                  <div
                    className="
                      h-full w-full origin-left scale-x-0
                      bg-[linear-gradient(90deg,#0F2D5C_0%,#F0B429_100%)]
                      transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-x-100
                    "
                  />
                </div>

                <div
                  className="
                    mb-[18px] flex h-[44px] w-[44px] shrink-0 items-center justify-center
                    rounded-[10px] bg-[#0F2D5C] text-[20px]
                    shadow-[0_6px_14px_rgba(15,45,92,0.16)]
                    transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.04]
                    group-hover:shadow-[0_8px_18px_rgba(15,45,92,0.18)]
                  "
                >
                  {item.icon}
                </div>

                <h3 className="mb-[12px] text-[17px] font-bold leading-[1.38] tracking-[-0.01em] text-[#0F2D5C]">
                  {item.title}
                </h3>

                <p className="text-[15px] font-normal leading-[1.55] tracking-[0.01em] text-[#64748B]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CONTROLES */}
        <div className="mt-[48px] flex items-center justify-center gap-[28px] sm:mt-[64px] sm:gap-[32px]">
          <button
            type="button"
            aria-label="Ver tarjetas anteriores"
            onClick={() => moveCarousel("left")}
            className="
              flex h-[44px] w-[44px] items-center justify-center rounded-full
              bg-[#0F2D5C] pb-[2px] text-[30px] font-bold leading-none text-[#FFC107]
              shadow-[0_8px_20px_rgba(15,45,92,0.18)]
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-[#091D3E]
              hover:shadow-[0_12px_28px_rgba(15,45,92,0.24)]
              active:scale-95
            "
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Ver siguientes tarjetas"
            onClick={() => moveCarousel("right")}
            className="
              flex h-[44px] w-[44px] items-center justify-center rounded-full
              bg-[#0F2D5C] pb-[2px] text-[30px] font-bold leading-none text-[#FFC107]
              shadow-[0_8px_20px_rgba(15,45,92,0.18)]
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-[#091D3E]
              hover:shadow-[0_12px_28px_rgba(15,45,92,0.24)]
              active:scale-95
            "
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}