"use client";

import { useState, useEffect } from "react";

const components = [
  { id: 1, title: "Diagnóstico de perfil migratorio", description: "Análisis de tu situación laboral, educativa, familiar y financiera para determinar las opciones más viables según el país de destino." },
  { id: 2, title: "Análisis de viabilidad por país y tipo de visa", description: "Evaluación de la categoría migratoria más adecuada para tu perfil, con comparación de opciones cuando existe más de una ruta posible." },
  { id: 3, title: "Hoja de ruta personalizada", description: "Documento de trabajo que detalla el proceso paso a paso: documentos requeridos, tiempos estimados y costos de tasas oficiales." },
  { id: 4, title: "Sesión de orientación", description: "Reunión en la que se te explica la hoja de ruta, se resuelven tus dudas y se definen los primeros pasos concretos." },
  { id: 5, title: "Revisión y orientación documental", description: "Colraíces revisa los documentos que vas preparando, identifica errores o faltantes y orienta su corrección antes de la radicación." },
  { id: 6, title: "Acompañamiento durante la solicitud", description: "Tienes un punto de contacto en Colraíces durante todo el proceso, desde la radicación hasta que recibes la resolución." },
  { id: 7, title: "Orientación si el resultado es negativo", description: "Si la solicitud es rechazada, el equipo orienta sobre las causas posibles, los recursos disponibles y los próximos pasos recomendados." },
];

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [hoveredArrow, setHoveredArrow] = useState<"left" | "right" | null>(null);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

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
    <section
      style={{
        background: "#f3f3f3",
        padding:
          screenSize === "mobile"
            ? "60px 16px 70px"
            : screenSize === "tablet"
            ? "70px 30px 75px"
            : "80px 0 70px",
        overflow: "hidden",
        borderTop: "4px solid #0f2d5c",
        fontFamily: "Montserrat, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: screenSize === "mobile" ? 40 : 30,
            padding:
              screenSize === "mobile"
                ? "0 8px"
                : screenSize === "tablet"
                ? "0 20px"
                : "0",
          }}
        >
          <div
            style={{
              color: "#FFC107",
              fontSize:
                screenSize === "mobile" ? 12 : screenSize === "tablet" ? 13 : 14,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            — QUÉ INCLUYE EL SERVICIO
          </div>

          <h2
            style={{
              margin: "16px 0 10px",
              fontSize:
                screenSize === "mobile"
                  ? "clamp(28px,8vw,38px)"
                  : screenSize === "tablet"
                  ? "clamp(34px,5vw,42px)"
                  : 38,
              lineHeight: 1.2,
              fontWeight: 700,
              color: "#0F2D5C",
            }}
          >
            7 componentes.
            <em style={{ color: "#F0B429", fontStyle: "italic" }}>
              {" "}Un solo acompañante.
            </em>
          </h2>

          <p
            style={{
              margin: 0,
              color: "#475569",
              fontSize:
                screenSize === "mobile" ? 14 : screenSize === "tablet" ? 15 : 15.5,
              lineHeight: 1.6,
              maxWidth: 760,
              marginInline: "auto",
            }}
          >
            Todo lo que necesitas para avanzar con método desde que decides hasta que recibes la resolución, en un solo servicio.
          </p>
        </div>

        {/* Carousel */}
        <div
          style={{
            position: "relative",
            height:
              screenSize === "mobile"
                ? 430
                : screenSize === "tablet"
                ? 390
                : 400,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {visibleCards.map((pos) => {
            const item =
              components[
                (activeIndex + pos + total) % total
              ];

            const isCenter = pos === 0;
            const abs = Math.abs(pos);

            let width;
            let height;
            let opacity;
            let xOffset;

            if (screenSize === "mobile") {
              width = Math.min(window.innerWidth - 32, 340);
              height = 360;
              opacity = 1;
              xOffset = 0;
            } else if (screenSize === "tablet") {
              width = isCenter ? 250 : 190;
              height = isCenter ? 340 : 280;
              opacity = isCenter ? 1 : 0.35;
              xOffset = pos * 220;
            } else {
              width = isCenter ? 240 : abs === 1 ? 200 : abs === 2 ? 190 : 186;
              height = isCenter ? 352 : abs === 1 ? 296 : abs === 2 ? 286 : 278;
              opacity = isCenter ? 1 : abs === 1 ? 0.5 : abs === 2 ? 0.34 : 0.22;
              xOffset = pos * 260;
            }

            return (
              <article
                key={`${pos}-${item.id}`}
                onClick={() => !isCenter && setActiveIndex((activeIndex + pos + total) % total)}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: `translateX(calc(-50% + ${xOffset}px))`,
                  top: isCenter ? 14 : screenSize === "mobile" ? 14 : 42,
                  width,
                  height,
                  background: "#FFF9ED",
                  border: "1px solid rgba(42,63,119,.10)",
                  borderRadius: "16px 0 16px 0",
                  opacity,
                  zIndex: 20 - abs,
                  textAlign: "center",
                  padding:
                    isCenter || screenSize === "mobile"
                      ? "22px 18px 14px"
                      : "16px 12px 8px",
                  boxShadow: isCenter
                    ? "0 18px 40px rgba(42,63,119,.18)"
                    : "none",
                  cursor: isCenter ? "default" : "pointer",
                  transition: "all .35s ease",
                }}
              >
                <div
                  style={{
                    width: isCenter ? 52 : 44,
                    height: isCenter ? 52 : 44,
                    borderRadius: 999,
                    margin: "0 auto 12px",
                    background: "linear-gradient(180deg,#FFC107,#FFD54F)",
                    color: "#2A3F77",
                    fontWeight: 700,
                    fontSize: isCenter ? 17 : 15,
                    lineHeight: isCenter ? "52px" : "44px",
                  }}
                >
                  {item.id}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#2A3F77",
                    fontSize:
                      screenSize === "mobile"
                        ? 18
                        : isCenter
                        ? 15
                        : 13.5,
                    lineHeight: 1.25,
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#64748B",
                    fontSize:
                      screenSize === "mobile"
                        ? 14
                        : isCenter
                        ? 13.5
                        : 11.5,
                    lineHeight: 1.65,
                  }}
                >
                  {item.description}
                </p>

                {isCenter && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 6,
                      marginTop: 14,
                      flexWrap: "wrap",
                    }}
                  >
                    {components.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(i);
                        }}
                        style={{
                          width: i === activeIndex ? 22 : 8,
                          height: 8,
                          borderRadius: 999,
                          border: 0,
                          background:
                            i === activeIndex
                              ? "#FFC107"
                              : "rgba(42,63,119,.22)",
                          padding: 0,
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                )}
              </article>
            );
          })}

          {/* Left Arrow */}
          <button
            onMouseEnter={() => setHoveredArrow("left")}
            onMouseLeave={() => setHoveredArrow(null)}
            onClick={prevSlide}
            style={{
              position: "absolute",
              left:
                screenSize === "mobile"
                  ? 8
                  : screenSize === "tablet"
                  ? 18
                  : "calc(50% - 415px)",
              top: screenSize === "mobile" ? "50%" : 178,
              transform:
                screenSize === "mobile" ? "translateY(-50%)" : "none",
              width: screenSize === "mobile" ? 38 : 40,
              height: screenSize === "mobile" ? 38 : 40,
              borderRadius: "50%",
              background:
                hoveredArrow === "left" ? "#FFC107" : "#284784",
              color: "white",
              border: "none",
              cursor: "pointer",
              zIndex: 50,
              transition: "background .2s ease",
              fontSize: 20,
            }}
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onMouseEnter={() => setHoveredArrow("right")}
            onMouseLeave={() => setHoveredArrow(null)}
            onClick={nextSlide}
            style={{
              position: "absolute",
              right:
                screenSize === "mobile"
                  ? 8
                  : screenSize === "tablet"
                  ? 18
                  : "calc(50% - 415px)",
              top: screenSize === "mobile" ? "50%" : 178,
              transform:
                screenSize === "mobile" ? "translateY(-50%)" : "none",
              width: screenSize === "mobile" ? 38 : 40,
              height: screenSize === "mobile" ? 38 : 40,
              borderRadius: "50%",
              background:
                hoveredArrow === "right" ? "#FFC107" : "#284784",
              color: "white",
              border: "none",
              cursor: "pointer",
              zIndex: 50,
              transition: "background .2s ease",
              fontSize: 20,
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}