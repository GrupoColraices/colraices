"use client";
 
import { useRef, useState, useCallback } from "react";
 
export default function ServicioIncluye() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 pt-[88px] pb-[80px] overflow-visible">
      <div className="w-full max-w-[1180px] flex flex-col gap-[48px]">
 
        {/* HEADER */}
        <div className="w-full text-center flex flex-col gap-[5px]">
          <p className="text-[20px] leading-[24px] text-[#0A0A0A]">
            Qué incluye el servicio
          </p>
          <h2 className="text-[28px] md:text-[36px] leading-[43px] text-[#0F2D5C] font-semibold">
            Colraices actúa directamente por ti — no solo asesora.
          </h2>
        </div>
 
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <Card
            number="1"
            icon="🔍"
            title="Analizamos tu situación"
            description="Revisamos tu historial financiero en Colombia para entender exactamente qué está pasando."
            items={[
              "Consulta en centrales de riesgo",
              "Identificación de deudas y reportes negativos",
              "Diagnóstico claro y plan de acción",
            ]}
          />
          <Card
            number="2"
            icon="⚖️"
            title="Actuamos en tu nombre"
            description="Nos autorizas para representarte y gestionar directamente tu caso ante las entidades."
            items={[
              "Representación legal formal",
              "Gestión ante bancos, empresas y centrales de riesgo",
              "Negociación con acreedores y entidades financieras",
            ]}
          />
          <Card
            number="3"
            icon="💬"
            title="Gestionamos hasta resolverlo"
            description="Ejecutamos los trámites necesarios para avanzar en la solución de tu caso."
            items={[
              "Acuerdos de pago o negociación de deudas",
              "Trámite de paz y salvos",
              "Solicitudes formales y corrección de información",
            ]}
          />
          <Card
            number="4"
            icon="📝"
            title="Trámite de paz y salvos y peticiones"
            description="Cuando el proceso termina, recibes un informe completo con el resultado de todas las gestiones realizadas."
            items={[
              "Certificaciones y paz y salvos obtenidos",
              "Validación de obligaciones cerradas",
              "Informe final con el estado actualizado de tu historial",
            ]}
          />
        </div>
 
        {/* ALERTA */}
        <div className="w-full rounded-[14px] border border-[#DC2626]/20 bg-[#FEF2F2] p-[24px] flex gap-[14px]">
          <div className="text-[20px] leading-[30px]">⚠️</div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[#DC2626] font-bold text-[14px] leading-[21px]">
              Buena Data NO incluye el pago de las deudas
            </p>
            <p className="text-[#475569] text-[14px] leading-[23px]">
              El servicio cubre la gestión, negociación y trámites legales, pero NO incluye el pago directo de las deudas, multas o saldos pendientes. Esos pagos los asume el cliente de acuerdo con lo negociado. Colraices coordina los desembolsos y valida que todo quede correctamente registrado.
            </p>
          </div>
        </div>
 
      </div>
    </section>
  );
}
 
 
/* ─── CARD con animación mouse-tracking spotlight ─── */
function Card({
  number,
  icon,
  title,
  description,
  items,
}: {
  number: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);
 
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
 
    // Cancelar RAF anterior para no acumular
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
 
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y, opacity: 1 });
    });
  }, []);
 
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, opacity: 1 });
  }, []);
 
  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setIsHovered(false);
    setSpotlight(prev => ({ ...prev, opacity: 0 }));
  }, []);
 
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[275px] rounded-[20px] p-[28px] flex flex-col gap-[12px] overflow-hidden"
      style={{
        border: isHovered
          ? "1px solid rgba(15, 45, 92, 0.22)"
          : "1px solid rgba(15, 45, 92, 0.10)",
        boxShadow: isHovered
          ? "0 8px 32px rgba(15, 45, 92, 0.13), 0 2px 8px rgba(15, 45, 92, 0.07)"
          : "0 1px 4px rgba(15, 45, 92, 0.04)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
        transition:
          "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
        willChange: "transform",
        background: "#ffffff",
      }}
    >
      {/* ── SPOTLIGHT OVERLAY que sigue el cursor ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[20px]"
        style={{
          opacity: spotlight.opacity,
          transition: "opacity 300ms ease",
          background: `radial-gradient(
            circle 220px at ${spotlight.x}% ${spotlight.y}%,
            rgba(15, 45, 92, 0.055) 0%,
            rgba(15, 45, 92, 0.018) 40%,
            transparent 70%
          )`,
          zIndex: 0,
        }}
      />
 
      {/* ── BORDE GLOW interior (sigue el spotlight) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[20px]"
        style={{
          opacity: spotlight.opacity * 0.7,
          transition: "opacity 300ms ease",
          background: `radial-gradient(
            ellipse 80% 60% at ${spotlight.x}% ${spotlight.y}%,
            rgba(255, 193, 7, 0.06) 0%,
            transparent 60%
          )`,
          zIndex: 0,
        }}
      />
 
      {/* NUMERO GRANDE (FONDO) */}
      <span
        className="absolute top-[12px] right-[16px] text-[64px] font-bold pointer-events-none select-none"
        style={{
          color: isHovered
            ? "rgba(15, 45, 92, 0.07)"
            : "rgba(15, 45, 92, 0.04)",
          transition: "color 300ms ease",
          zIndex: 1,
        }}
      >
        {number}
      </span>
 
      {/* ICON */}
      <div
        className="text-[26px] leading-[39px]"
        style={{
          position: "relative",
          zIndex: 2,
          transform: isHovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 300ms ease",
          transformOrigin: "left center",
        }}
      >
        {icon}
      </div>
 
      {/* TITLE */}
      <h3
        className="text-[#0F2D5C] font-semibold text-[16px] leading-[24px]"
        style={{ position: "relative", zIndex: 2 }}
      >
        {title}
      </h3>
 
      {/* DESCRIPTION */}
      <p
        className="text-[#475569] text-[14px] leading-[23px]"
        style={{ position: "relative", zIndex: 2 }}
      >
        {description}
      </p>
 
      {/* LIST */}
      <div
        className="flex flex-col gap-[6px] mt-[6px]"
        style={{ position: "relative", zIndex: 2 }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-[8px]">
            <div
              className="w-[5px] h-[5px] rounded-full mt-[7px] flex-shrink-0"
              style={{
                background: isHovered ? "#FFC107" : "#FFC107",
                boxShadow: isHovered
                  ? "0 0 6px rgba(255, 193, 7, 0.6)"
                  : "none",
                transition: "box-shadow 300ms ease",
              }}
            />
            <p className="text-[#475569] text-[13px] leading-[19px]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}