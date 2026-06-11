"use client";

import React, { useState, useEffect } from "react";

// ─── TYPES ───────────────────────────────────────
type Card = {
  situacion: string;
  titulo: string;
  descripcion: string;
  icono: string;
  fraseBack: string;
  emojiBack: string;
};

// ─── DATA ────────────────────────────────────────
const cards: Card[] = [
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

// ─── SCREEN HOOK ─────────────────────────────────
type Screen = "mobile" | "tablet" | "desktop";

function useScreen(): Screen {
  const getScreen = (): Screen => {
    if (typeof window === "undefined") return "mobile";
    if (window.innerWidth < 640) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  };

  const [screen, setScreen] = useState<Screen>("mobile");

  useEffect(() => {
    const handler = () => setScreen(getScreen());
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return screen;
}

// ─── FLIP CARD ───────────────────────────────────
function FlipCard({
  card,
  screen,
}: {
  card: Card;
  screen: Screen;
}) {
  const [flipped, setFlipped] = useState(false);
  const isMobile = screen === "mobile";

  const interactionProps = isMobile
    ? { onClick: () => setFlipped((f) => !f) }
    : {
        onMouseEnter: () => setFlipped(true),
        onMouseLeave: () => setFlipped(false),
      };

  return (
    <div
      {...interactionProps}
      className="w-full min-h-[160px] md:min-h-[200px] [perspective:1000px] cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 bg-white border border-[rgba(15,45,92,0.10)] rounded-[16px_0px_16px_0px] [backface-visibility:hidden] overflow-hidden">
          
          {/* línea */}
          <div className="absolute left-0 top-0 w-[2px] h-full bg-[#0F2D5C]" />

          {/* icon */}
          <div className="absolute left-4 top-4 md:left-6 md:top-6 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center border border-[rgba(42,63,119,0.08)] rounded-[10px] md:rounded-[12px]">
            <span className="text-[17px] md:text-[20px]">
              {card.icono}
            </span>
          </div>

          {/* text */}
          <div className="absolute left-[72px] md:left-[84.8px] top-4 md:top-6 right-3 md:right-6 bottom-4 md:bottom-6 flex flex-col gap-1">
            
            <span className="text-[9.5px] md:text-[10.4px] font-bold tracking-[1.04px] uppercase text-[#0F2D5C]">
              {card.situacion}
            </span>

            <span className="text-[14px] md:text-[15.2px] font-semibold text-[#0F2D5C]">
              {card.titulo}
            </span>

            <span className="text-[12.5px] md:text-[13.12px] text-[#475569] leading-[1.55]">
              {card.descripcion}
            </span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-[rgba(42,63,119,0.06)] border border-[rgba(15,45,92,0.10)] rounded-[16px_0px_16px_0px] [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-center px-6 md:px-12 py-7 md:py-6 gap-3 md:gap-4">
          
          <span className="text-[36px] md:text-[40px]">
            {card.emojiBack}
          </span>

          <p className="text-[14px] md:text-[15.2px] italic font-semibold text-[#0F2D5C] leading-[1.6]">
            {card.fraseBack}
          </p>

          {isMobile && (
            <span className="text-[10px] text-[rgba(15,45,92,0.4)]">
              Toca para volver
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────
export default function BuenaDataSection() {
  const screen = useScreen();

  return (
    <div className="w-full bg-[#FBF8F3] flex justify-center">
      <div className="w-full max-w-[1180px] px-5 md:px-8 lg:px-12 py-12 md:py-16 flex flex-col gap-8 md:gap-12">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-2">
          
          <span className="text-[14px] md:text-[16px] lg:text-[20px] text-black">
            ¿Para quién es Buena Data?
          </span>

          <span className="text-[24px] md:text-[28px] lg:text-[35.86px] font-semibold text-[#0F2D5C] leading-tight">
            Cuatro situaciones típicas. Una sola solución.
          </span>

          <span className="text-[13px] md:text-[14px] lg:text-[15.2px] text-[#475569] max-w-[640px] mt-1">
            Si te identificas con alguna de estas situaciones, Buena Data está diseñado exactamente para ti.
          </span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          {cards.map((card, index) => (
            <FlipCard key={index} card={card} screen={screen} />
          ))}
        </div>

        {/* MOBILE HINT */}
        {screen === "mobile" && (
          <p className="text-center text-[11px] text-[rgba(15,45,92,0.4)] -mt-4">
            Toca cada tarjeta para ver más
          </p>
        )}
      </div>
    </div>
  );
}