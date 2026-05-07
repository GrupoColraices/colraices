"use client";

import { type CSSProperties, useEffect, useState } from "react";

const components = [
  {
    id: 1,
    title: "Diagnóstico de perfil migratorio",
    description:
      "Análisis de tu situación laboral, educativa, familiar y financiera para determinar las opciones más viables según el país de destino.",
  },
  {
    id: 2,
    title: "Análisis de viabilidad por país y tipo de visa",
    description:
      "Evaluación de la categoría migratoria más adecuada para tu perfil, con comparación de opciones cuando existe más de una ruta posible.",
  },
  {
    id: 3,
    title: "Hoja de ruta personalizada",
    description:
      "Documento de trabajo que detalla el proceso paso a paso: documentos requeridos, tiempos estimados y costos de tasas oficiales.",
  },
  {
    id: 4,
    title: "Sesión de orientación",
    description:
      "Reunión en la que se te explica la hoja de ruta, se resuelven tus dudas y se definen los primeros pasos concretos.",
  },
  {
    id: 5,
    title: "Revisión y orientación documental",
    description:
      "Colraíces revisa los documentos que vas preparando, identifica errores o faltantes y orienta su corrección antes de la radicación.",
  },
  {
    id: 6,
    title: "Acompañamiento durante la solicitud",
    description:
      "Tienes un punto de contacto en Colraíces durante todo el proceso, desde la radicación hasta que recibes la resolución.",
  },
  {
    id: 7,
    title: "Orientación si el resultado es negativo",
    description:
      "Si la solicitud es rechazada, el equipo orienta sobre las causas posibles, los recursos disponibles y los próximos pasos recomendados.",
  },
];

type ScreenSize = "mobile" | "tablet" | "desktop";

function getCardClasses({
  screenSize,
  isCenter,
  abs,
}: {
  screenSize: ScreenSize;
  isCenter: boolean;
  abs: number;
}) {
  const baseClasses =
    "absolute left-1/2 translate-x-[calc(-50%_+_var(--x-offset))] bg-[#FFF9ED] border border-[rgba(42,63,119,0.10)] rounded-tl-2xl rounded-br-2xl text-center transition-[transform,opacity,box-shadow] duration-300 ease-in-out";

  if (screenSize === "mobile") {
    return `${baseClasses} top-[14px] h-[360px] w-[min(calc(100vw_-_32px),340px)] px-[18px] pt-[22px] pb-[14px] opacity-100 shadow-[0_18px_40px_rgba(42,63,119,0.18)] cursor-default`;
  }

  if (screenSize === "tablet") {
    return `${baseClasses} ${
      isCenter
        ? "top-[14px] h-[340px] w-[250px] px-[18px] pt-[22px] pb-[14px] opacity-100 shadow-[0_18px_40px_rgba(42,63,119,0.18)] cursor-default"
        : "top-[42px] h-[280px] w-[190px] px-3 pt-4 pb-2 opacity-[0.35] shadow-none cursor-pointer"
    }`;
  }

  const widthClass = isCenter
    ? "w-[240px]"
    : abs === 1
    ? "w-[200px]"
    : abs === 2
    ? "w-[190px]"
    : "w-[186px]";

  const heightClass = isCenter
    ? "h-[352px]"
    : abs === 1
    ? "h-[296px]"
    : abs === 2
    ? "h-[286px]"
    : "h-[278px]";

  const opacityClass = isCenter
    ? "opacity-100"
    : abs === 1
    ? "opacity-50"
    : abs === 2
    ? "opacity-[0.34]"
    : "opacity-[0.22]";

  return `${baseClasses} ${widthClass} ${heightClass} ${opacityClass} ${
    isCenter
      ? "top-[14px] px-[18px] pt-[22px] pb-[14px] shadow-[0_18px_40px_rgba(42,63,119,0.18)] cursor-default"
      : "top-[42px] px-3 pt-4 pb-2 shadow-none cursor-pointer"
  }`;
}

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

  const total = components.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1280) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const visibleCards =
    screenSize === "mobile"
      ? [0]
      : screenSize === "tablet"
      ? [-1, 0, 1]
      : [-3, -2, -1, 0, 1, 2, 3];

  return (
    <section className="overflow-hidden border-t-4 border-[#0f2d5c] bg-[#f3f3f3] px-4 pt-[60px] pb-[70px] font-[Montserrat,system-ui,sans-serif] md:px-[30px] md:pt-[70px] md:pb-[75px] xl:px-0 xl:pt-20 xl:pb-[70px]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 px-2 text-center md:mb-[30px] md:px-5 xl:px-0">
          <div className="text-xs font-semibold tracking-[2px] text-[#FFC107] md:text-[13px] xl:text-sm">
            — QUÉ INCLUYE EL SERVICIO
          </div>

          <h2 className="mt-4 mb-2.5 text-[clamp(28px,8vw,38px)] leading-[1.2] font-bold text-[#0F2D5C] md:text-[clamp(34px,5vw,42px)] xl:text-[38px]">
            7 componentes.
            <em className="text-[#F0B429] italic"> Un solo acompañante.</em>
          </h2>

          <p className="mx-auto max-w-[760px] text-sm leading-[1.6] text-[#475569] md:text-[15px] xl:text-[15.5px]">
            Todo lo que necesitas para avanzar con método desde que decides
            hasta que recibes la resolución, en un solo servicio.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[860px] px-[46px] md:px-[54px]">
          <button
            type="button"
            aria-label="Ver componente anterior"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-50 flex size-[38px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-[#284784] text-xl leading-none text-white transition-colors duration-200 hover:bg-[#FFC107] md:size-10"
          >
            ‹
          </button>

          <div className="mx-auto w-full max-w-[760px] overflow-hidden">
            <div className="relative flex h-[430px] w-full items-center justify-center md:h-[390px] xl:h-[400px]">
              {visibleCards.map((pos) => {
                const item = components[(activeIndex + pos + total) % total];
                const isCenter = pos === 0;
                const abs = Math.abs(pos);

                const xOffset =
                  screenSize === "mobile"
                    ? 0
                    : pos * (screenSize === "tablet" ? 220 : 260);

                return (
                  <article
                    key={item.id}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveIndex((prev) => (prev + pos + total) % total);
                      }
                    }}
                    className={getCardClasses({ screenSize, isCenter, abs })}
                    style={
                      {
                        "--x-offset": `${xOffset}px`,
                        zIndex: 20 - abs,
                      } as CSSProperties
                    }
                  >
                    <div
                      className={`mx-auto mb-3 rounded-full bg-gradient-to-b from-[#FFC107] to-[#FFD54F] font-bold text-[#2A3F77] ${
                        isCenter || screenSize === "mobile"
                          ? "size-[52px] text-[17px] leading-[52px]"
                          : "size-[44px] text-[15px] leading-[44px]"
                      }`}
                    >
                      {item.id}
                    </div>

                    <h3
                      className={`mb-2.5 font-semibold leading-[1.25] text-[#2A3F77] ${
                        screenSize === "mobile"
                          ? "text-lg"
                          : isCenter
                          ? "text-[15px]"
                          : "text-[13.5px]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`leading-[1.65] text-[#64748B] ${
                        screenSize === "mobile"
                          ? "text-sm"
                          : isCenter
                          ? "text-[13.5px]"
                          : "text-[11.5px]"
                      }`}
                    >
                      {item.description}
                    </p>

                    {isCenter && (
                      <div className="mt-3.5 flex flex-wrap justify-center gap-1.5">
                        {components.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Ir al componente ${i + 1}`}
                            aria-current={
                              i === activeIndex ? "true" : undefined
                            }
                            onClick={(event) => {
                              event.stopPropagation();
                              setActiveIndex(i);
                            }}
                            className={`h-2 rounded-full border-0 p-0 transition-all duration-200 ${
                              i === activeIndex
                                ? "w-[22px] bg-[#FFC107]"
                                : "w-2 bg-[rgba(42,63,119,0.22)]"
                            }`}
                          />
                        ))}Dos servicios según
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Ver siguiente componente"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-50 flex size-[38px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-[#284784] text-xl leading-none text-white transition-colors duration-200 hover:bg-[#FFC107] md:size-10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}