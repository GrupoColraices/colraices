"use client";

import React, { useState, useEffect } from "react";
 
// ─── Data ────────────────────────────────────────────────────────────────────
const cards = [
  {
    situacion: "Situación 1",
    titulo: "Reportes negativos en centrales de riesgo",
    descripcion:
      "Tienes reportes en DataCrédito, TransUnion u otras centrales de riesgo en Colombia. Eso te bloquea para pedir crédito, firmar contratos o hacer trámites financieros. Quieres limpiarlo pero no sabes por dónde empezar.",
    icono: "📉",
    fraseBack:
      "Tengo un reporte negativo en Colombia y desde el exterior no sé cómo resolverlo.",
    emojiBack: "😩",
  },
  {
    situacion: "Situación 2",
    titulo: "Deudas antiguas en mora",
    descripcion:
      "Dejaste una deuda sin pagar antes de salir de Colombia. Han pasado años y la deuda sigue ahí, creciendo con intereses. Quieres saldarla pero no sabes con quién negociar ni cómo hacerlo desde el exterior.",
    icono: "💳",
    fraseBack:
      "Tengo deudas o reportes que quiero pagar o negociar, pero hacer esos trámites desde otro país es imposible.",
    emojiBack: "😩",
  },
  {
    situacion: "Situación 3",
    titulo: "Fraude o suplantación de identidad",
    descripcion:
      "Alguien usó tu cédula para pedir créditos, abrir cuentas o contratar servicios en Colombia. Ahora tienes deudas que no son tuyas y reportes que no reconoces. Quieres limpiar tu nombre pero el proceso legal es complejo.",
    icono: "🔓",
    fraseBack:
      "Alguien usó mi cédula o mis datos y ahora mi historial está afectado.",
    emojiBack: "😨",
  },
  {
    situacion: "Situación 4",
    titulo: "Paz y salvos y certificaciones bloqueadas",
    descripcion:
      "Necesitas un paz y salvo de un banco, una entidad pública o una empresa privada en Colombia para cerrar un proceso (venta de inmueble, herencia, liquidación de sociedad). El trámite está bloqueado y no avanza.",
    icono: "📄",
    fraseBack:
      "Necesito un paz y salvo o una certificación en Colombia para cerrar un trámite importante.",
    emojiBack: "😟",
  },
];
 
// ─── Breakpoint hook ─────────────────────────────────────────────────────────
type Screen = "mobile" | "tablet" | "desktop";
 
function useScreen(): Screen {
  const getScreen = (): Screen => {
    if (typeof window === "undefined") return "desktop";
    if (window.innerWidth < 640) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  };
  const [screen, setScreen] = useState<Screen>(getScreen);
  useEffect(() => {
    const handler = () => setScreen(getScreen());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return screen;
}
 
// ─── Flip Card ───────────────────────────────────────────────────────────────
function FlipCard({
  card,
  screen,
}: {
  card: (typeof cards)[0];
  screen: Screen;
}) {
  const [flipped, setFlipped] = useState(false);
  const isMobile = screen === "mobile";
 
  // Mobile/tablet → flip on tap; desktop → flip on hover
  const interactionProps = isMobile
    ? { onClick: () => setFlipped((f) => !f) }
    : {
        onMouseEnter: () => setFlipped(true),
        onMouseLeave: () => setFlipped(false),
      };
 
  const cardMinHeight = isMobile ? 160 : 200;
  const backPadding = isMobile ? "28px 24px" : "24px 48px";
  const backFontSize = isMobile ? 14 : 15.2;
  const backEmojiSize = isMobile ? 36 : 40;
  const labelSize = isMobile ? 9.5 : 10.4;
  const titleSize = isMobile ? 14 : 15.2;
  const descSize = isMobile ? 12.5 : 13.12;
  const iconLeft = isMobile ? 16 : 24.8;
  const iconTop = isMobile ? 16 : 24.8;
  const textLeft = isMobile ? 72 : 84.8;
  const textTop = isMobile ? 16 : 24.8;
  const textRight = isMobile ? 14 : 24.8;
 
  return (
    <div
      {...interactionProps}
      style={{
        width: "100%",
        minHeight: cardMinHeight,
        perspective: 1000,
        cursor: "pointer",
        // hint for mobile users on first render
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: cardMinHeight,
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{
            position: flipped ? "absolute" : "relative",
            inset: 0,
            minHeight: cardMinHeight,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#FFFFFF",
            border: "0.8px solid rgba(15, 45, 92, 0.10)",
            borderRadius: "16px 0px 16px 0px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* Accent line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 2,
              height: "100%",
              backgroundColor: "#0F2D5C",
            }}
          />
 
          {/* Icon */}
          <div
            style={{
              position: "absolute",
              left: iconLeft,
              top: iconTop,
              width: isMobile ? 36 : 44,
              height: isMobile ? 36 : 44,
              borderRadius: isMobile ? 10 : 12,
              border: "1px solid rgba(42, 63, 119, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: isMobile ? 17 : 20 }}>{card.icono}</span>
          </div>
 
          {/* Text */}
          <div
            style={{
              position: "absolute",
              left: textLeft,
              top: textTop,
              right: textRight,
              bottom: isMobile ? 16 : 24.8,
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 4 : 5,
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: labelSize,
                lineHeight: "1.5",
                letterSpacing: "1.04px",
                color: "#0F2D5C",
                textTransform: "uppercase",
              }}
            >
              {card.situacion}
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: titleSize,
                lineHeight: "1.5",
                color: "#0F2D5C",
              }}
            >
              {card.titulo}
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: descSize,
                lineHeight: "1.55",
                color: "#475569",
              }}
            >
              {card.descripcion}
            </span>
          </div>
        </div>
 
        {/* ── BACK ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            minHeight: cardMinHeight,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "rgba(42, 63, 119, 0.06)",
            border: "0.8px solid rgba(15, 45, 92, 0.10)",
            borderRadius: "16px 0px 16px 0px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? 12 : 16,
            padding: backPadding,
          }}
        >
          <span style={{ fontSize: backEmojiSize, lineHeight: 1 }}>
            {card.emojiBack}
          </span>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: backFontSize,
              lineHeight: "1.6",
              color: "#0F2D5C",
              textAlign: "center",
              margin: 0,
            }}
          >
            {card.fraseBack}
          </p>
          {isMobile && (
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                color: "rgba(15,45,92,0.4)",
                marginTop: 4,
              }}
            >
              Toca para volver
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
 
// ─── Main Section ─────────────────────────────────────────────────────────────
export default function BuenaDataSection() {
  const screen = useScreen();
 
  const paddingH = screen === "mobile" ? 20 : screen === "tablet" ? 32 : 48;
  const paddingTop = screen === "mobile" ? 48 : screen === "tablet" ? 64 : 88;
  const gridCols = screen === "mobile" ? "1fr" : "1fr 1fr";
  const eyebrowSize = screen === "mobile" ? 14 : screen === "tablet" ? 16 : 20;
  const titleSize =
    screen === "mobile" ? 24 : screen === "tablet" ? 28 : 35.86;
  const subtitleSize = screen === "mobile" ? 13 : screen === "tablet" ? 14 : 15.2;
  const sectionGap = screen === "mobile" ? 32 : screen === "tablet" ? 40 : 48;
 
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#FBF8F3",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          backgroundColor: "#FBF8F3",
          paddingTop,
          paddingLeft: paddingH,
          paddingRight: paddingH,
          paddingBottom: screen === "mobile" ? 48 : 64,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: sectionGap,
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: screen === "mobile" ? 6 : 4,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: eyebrowSize,
              lineHeight: "1.4",
              color: "#0A0A0A",
            }}
          >
            ¿Para quién es Buena Data?
          </span>
 
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: titleSize,
              lineHeight: "1.2",
              color: "#0F2D5C",
            }}
          >
            Cuatro situaciones típicas. Una sola solución.
          </span>
 
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: subtitleSize,
              lineHeight: "1.7",
              color: "#475569",
              maxWidth: 640,
              marginTop: 4,
              whiteSpace: "nowrap",
            }}
          >
            Si te identificas con alguna de estas situaciones, Buena Data está diseñado exactamente para ti.
          </span>
        </div>
 
        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: screen === "mobile" ? 12 : 16,
          }}
        >
          {cards.map((card, index) => (
            <FlipCard key={index} card={card} screen={screen} />
          ))}
        </div>
 
        {/* Mobile hint */}
        {screen === "mobile" && (
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              color: "rgba(15,45,92,0.4)",
              textAlign: "center",
              margin: "-16px 0 0",
            }}
          >
            Toca cada tarjeta para ver más
          </p>
        )}
      </div>
    </div>
  );
}