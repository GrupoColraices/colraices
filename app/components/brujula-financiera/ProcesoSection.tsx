"use client";
 
import { useState } from "react";
 
/* ── Tipos ── */
interface Step {
  number: string;
  title: string;
  desc: string;
  tag: string;
  active?: boolean;
}
 
interface CircleProps {
  number: string;
  active: boolean;
}
 
/* ── Datos ── */
const stepsTop: Step[] = [
  {
    number: "1",
    title: "Contratas el servicio",
    desc: "Elige entre pago directo o hablar primero con un asesor.",
    tag: "Día 0",
  },
  {
    number: "2",
    title: "Compartimos qué necesitamos",
    desc: "Información básica para el análisis. Mínima documentación.",
    tag: "Día 0-1",
  },
  {
    number: "3",
    title: "Análisis y diagnóstico",
    desc: "La Unidad de Negocio Financiera de Colraíces analiza tu información.",
    tag: "Día 1-2",
  },
];
 
const stepsBottom: Step[] = [
  {
    number: "4",
    title: "Entregamos el informe",
    desc: "Recibes tu informe personalizado y plan de acción.",
    tag: "Día 3 máx.",
    active: false,
  },
  {
    number: "5",
    title: "Sesión de asesoría",
    desc: "Tu asesor te explica todo y define los próximos pasos contigo.",
    tag: "Incluido",
    active: false,
  },
  {
    number: "✓",
    title: "Seguimiento posterior",
    desc: "Si hay avances o dudas, el seguimiento también está incluido.",
    tag: "Incluido",
    active: true,
  },
];
 
/* ── Estilos reutilizables ── */
const font = "'Montserrat', sans-serif";
 
const titleStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: font,
  fontWeight: 600,
  fontSize: "15.2px",
  lineHeight: "19.75px",
  letterSpacing: "0px",
  color: "#0F2D5C",
};
 
const descStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: font,
  fontWeight: 400,
  fontSize: "13.12px",
  lineHeight: "21px",
  letterSpacing: "0px",
  color: "#475569",
  maxWidth: "341.33px",
};
 
const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "100px",
  backgroundColor: "#FEF3C7",
  color: "#FFC107",
  fontFamily: font,
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "15.29px",
  whiteSpace: "nowrap",
  width: "fit-content",
};
 
/* ── Subcomponente Circle con hover ── */
function Circle({ number, active }: CircleProps) {
  const [hovered, setHovered] = useState(false);
 
  // Estado activo (✓ amarillo): no cambia en hover
  if (active) {
    return (
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "28px",
          flexShrink: 0,
          backgroundColor: "#FFC107",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: font,
          fontWeight: 700,
          fontSize: "19.2px",
          lineHeight: "28.8px",
          color: "#FFFFFF",
        }}
      >
        {number}
      </div>
    );
  }
 
  // Estado normal con hover: blanco → azul oscuro
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "56px",
        height: "56px",
        borderRadius: "28px",
        flexShrink: 0,
        backgroundColor: hovered ? "#0F2D5C" : "#FFFFFF",
        border: hovered ? "none" : "0.8px solid #0F2D5C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: font,
        fontWeight: 700,
        fontSize: "19.2px",
        lineHeight: "28.8px",
        color: hovered ? "#FFFFFF" : "#0F2D5C",
        cursor: "pointer",
        transition: "background-color 0.2s ease, color 0.2s ease, border 0.2s ease",
      }}
    >
      {number}
    </div>
  );
}
 
/* ── Componente principal ── */
export default function ProcesoSection() {
  return (
    <section
      className="w-full flex justify-center"
      style={{
        backgroundColor: "#FBF8F3",
        paddingLeft: "48px",
        paddingRight: "48px",
        paddingTop: "88px",
        paddingBottom: "88px",
      }}
    >
      <div
        className="w-full flex flex-col"
        style={{ maxWidth: "1180px", gap: "48px" }}
      >
 
        {/* HEADER */}
        <div className="text-center">
          <p
            style={{
              fontFamily: font,
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0px",
              color: "#0A0A0A",
              margin: 0,
            }}
          >
            El proceso
          </p>
          <h2
            style={{
              fontFamily: font,
              fontWeight: 800,
              fontStyle: "italic",
              fontSize: "35.86px",
              lineHeight: "43px",
              letterSpacing: "0px",
              color: "#0F2D5C",
              margin: 0,
            }}
          >
            Seis pasos. Todo resuelto en 3 días.
          </h2>
        </div>
 
        {/* TIMELINE */}
        <div className="flex flex-col" style={{ gap: "48px" }}>
 
          {/* FILA SUPERIOR (1-2-3) con línea conectora */}
          <div className="grid grid-cols-3 relative" style={{ gap: "48px" }}>
            <div
              className="absolute"
              style={{
                top: "28px",
                left: 0,
                right: 0,
                height: "1px",
                backgroundColor: "rgba(15, 45, 92, 0.10)",
                zIndex: 0,
              }}
            />
            {stepsTop.map((step, i) => (
              <div key={i} className="flex flex-col relative" style={{ gap: "12px", zIndex: 1 }}>
                <Circle number={step.number} active={false} />
                <h3 style={titleStyle}>{step.title}</h3>
                <p style={descStyle}>{step.desc}</p>
                <span style={badgeStyle}>{step.tag}</span>
              </div>
            ))}
          </div>
 
          {/* FILA INFERIOR (4-5-✓) sin línea */}
          <div className="grid grid-cols-3" style={{ gap: "48px" }}>
            {stepsBottom.map((step, i) => (
              <div key={i} className="flex flex-col" style={{ gap: "12px" }}>
                <Circle number={step.number} active={step.active === true} />
                <h3 style={titleStyle}>{step.title}</h3>
                <p style={descStyle}>{step.desc}</p>
                <span style={badgeStyle}>{step.tag}</span>
              </div>
            ))}
          </div>
 
        </div>
      </div>
    </section>
  );
}