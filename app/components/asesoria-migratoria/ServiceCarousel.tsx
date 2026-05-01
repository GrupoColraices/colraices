"use client";

import { useState } from "react";

const components = [
  { id: 1, title: "Diagnóstico de perfil migratorio", description: "Análisis de tu situación laboral, educativa, familiar y financiera para determinar las opciones más viables según el país de destino." },
  { id: 2, title: "Análisis de viabilidad por país y tipo de visa", description: "Evaluación de la categoría migratoria más adecuada para tu perfil, con comparación de opciones cuando existe más de una ruta posible." },
  { id: 3, title: "Hoja de ruta personalizada", description: "Documento de trabajo que detalla el proceso paso a paso: documentos requeridos, tiempos estimados y costos de tasas oficiales." },
  { id: 4, title: "Sesión de orientación", description: "Reunión en la que se te explica la hoja de ruta, se resuelven tus dudas y se definen los primeros pasos concretos." },
  { id: 5, title: "Revisión y orientación documental", description: "Colraíces revisa los documentos que vas preparando, identifica errores o faltantes y orienta su corrección antes de la radicación." },
  { id: 6, title: "Acompañamiento durante la solicitud", description: "Tienes un punto de contacto en Colraíces durante todo el proceso, desde la radicación hasta que recibes la resolución." },
  { id: 7, title: "Orientación si el resultado es negativo", description: "Si la solicitud es rechazada, el equipo orienta sobre las causas posibles, los recursos disponibles y los próximos pasos recomendados." },
];

const positions = [-3, -2, -1, 0, 1, 2, 3];

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [hoveredPos, setHoveredPos] = useState<number | null>(null);
  const [hoveredArrow, setHoveredArrow] = useState<"left" | "right" | null>(null);
  const total = components.length;
  const getIndex = (offset: number) => (activeIndex + offset + total) % total;

  return (
    <section style={{ background: "#f3f3f3", padding: "80px 0 70px", overflow: "hidden", borderTop: "4px solid #0f2d5c", fontFamily: "Montserrat, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ color: "#FFC107", fontSize: 14, fontWeight: 600, letterSpacing: 2 }}>— QUÉ INCLUYE EL SERVICIO</div>
          <h2 style={{ margin: "16px 0 10px", fontSize: 38, lineHeight: 1.2, fontWeight: 700, color: "#0F2D5C" }}>7 componentes.<em style={{ color: "#F0B429", fontStyle: "italic" }}> Un solo acompañante.</em></h2>
          <p style={{ margin: 0, color: "#475569", fontSize: 15.5, lineHeight: 1.6 }}>Todo lo que necesitas para avanzar con método desde que decides hasta que recibes la resolución, en un solo servicio.</p>
        </div>

        <div style={{ position: "relative", height: 400 }}>
          {positions.map((pos) => {
            const item = components[getIndex(pos)];
            const isCenter = pos === 0;
            const abs = Math.abs(pos);
            const width = isCenter ? 240 : abs === 1 ? 200 : abs === 2 ? 190 : 186;
            const height = isCenter ? 352 : abs === 1 ? 296 : abs === 2 ? 286 : 278;
            const opacity = isCenter ? 1 : abs === 1 ? 0.5 : abs === 2 ? 0.34 : 0.22;
            const left = `calc(50% + ${pos * 260}px - ${width / 2}px)`;

            return (
              <article key={`${pos}-${item.id}`} onClick={() => !isCenter && setActiveIndex(getIndex(pos))} onMouseEnter={() => setHoveredPos(pos)} onMouseLeave={() => setHoveredPos(null)} style={{ position: "absolute", left, top: isCenter ? 14 : 42, width, height, background: "#FFF9ED", border: "1px solid rgba(42,63,119,.10)", borderRadius: "16px 0 16px 0", opacity, zIndex: 20 - abs, textAlign: "center", padding: isCenter ? "22px 18px 12px" : "16px 12px 8px", transform: hoveredPos === pos ? "translateY(-6px)" : "translateY(0)", boxShadow: hoveredPos === pos ? "0 8px 18px rgba(42,63,119,.16)" : isCenter ? "0 18px 40px rgba(42,63,119,.18)" : "none", cursor: isCenter ? "default" : "pointer", transition: "transform .2s ease, box-shadow .2s ease, opacity .32s ease" }}>
                <div style={{ width: isCenter ? 52 : 44, height: isCenter ? 52 : 44, borderRadius: 999, margin: "0 auto 12px", background: "linear-gradient(180deg,#FFC107,#FFD54F)", color: "#2A3F77", fontWeight: 700, fontSize: isCenter ? 17 : 15, lineHeight: isCenter ? "52px" : "44px" }}>{item.id}</div>
                <h3 style={{ margin: "0 0 10px", color: "#2A3F77", fontSize: isCenter ? 15 : 13.5, lineHeight: 1.2, fontWeight: 600 }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#64748B", fontSize: isCenter ? 13.5 : 11.5, lineHeight: 1.6 }}>{item.description}</p>
                {isCenter && <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>{components.map((_, i) => <button key={i} onClick={(e)=>{e.stopPropagation();setActiveIndex(i);}} style={{ width: i===activeIndex?22:8, height: 8, borderRadius: 999, border: 0, background: i===activeIndex?"#FFC107":"rgba(42,63,119,.22)", padding: 0, cursor: "pointer" }} />)}</div>}
              </article>
            );
          })}

          <button onMouseEnter={() => setHoveredArrow("left")} onMouseLeave={() => setHoveredArrow(null)} onClick={() => setActiveIndex((i) => (i - 1 + total) % total)} style={{ position: "absolute", left: "calc(50% - 415px)", top: 178, width: 40, height: 40, borderRadius: "50%", background: hoveredArrow === "left" ? "#FFC107" : "#284784", color: "white", border: "none", cursor: "pointer", zIndex: 40, transition: "background .2s ease" }}>‹</button>
          <button onMouseEnter={() => setHoveredArrow("right")} onMouseLeave={() => setHoveredArrow(null)} onClick={() => setActiveIndex((i) => (i + 1) % total)} style={{ position: "absolute", right: "calc(50% - 415px)", top: 178, width: 40, height: 40, borderRadius: "50%", background: hoveredArrow === "right" ? "#FFC107" : "#284784", color: "white", border: "none", cursor: "pointer", zIndex: 40, transition: "background .2s ease" }}>›</button>
        </div>
      </div>
    </section>
  );
}