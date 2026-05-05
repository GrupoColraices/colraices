"use client";

import React, { useMemo, useState } from "react";

type IncludeItem = {
  paso: number;
  titulo: string;
  descripcion: string;
};

const ITEMS_INCLUIDOS: IncludeItem[] = [
  { paso: 1, titulo: "Revisamos la escritura antes de firmar", descripcion: "El equipo legal verifica que el contenido corresponde exactamente a lo que tú aprobaste. Si hay algo inusual o que no cuadra, te avisamos antes de actuar." },
  { paso: 2, titulo: "Te guiamos para obtener el poder desde tu país", descripcion: "Te decimos exactamente qué notario contactar, qué debe decir el poder, cómo apostillarlo y cómo enviárnoslo. Sin que tengas que adivinar nada." },
  { paso: 3, titulo: "Validamos que el poder esté en regla", descripcion: "Antes de ir a la notaría, revisamos que el poder cumple todos los requisitos legales en Colombia. Si hay algo que corregir, lo resolvemos contigo a tiempo." },
  { paso: 4, titulo: "Nos presentamos en la notaría el día pactado", descripcion: "El apoderado de Colraices asiste a la notaría en la ciudad y la fecha acordada, y firma la escritura en tu nombre." },
  { paso: 5, titulo: "Confirmación y copia digital", descripcion: "Recibes confirmación inmediata de que la escritura fue firmada, y te enviamos la copia escaneada ese mismo día." },
  { paso: 6, titulo: "Acompañamiento directo durante todo el proceso", descripcion: "Punto de contacto asignado. Cualquier duda o cambio de última hora lo resuelves en tiempo real con quien lleva tu caso." },
];

export default function SeccionIncluyeServicio() {
  const [indiceInicio, setIndiceInicio] = useState(0);
  const total = ITEMS_INCLUIDOS.length;

  const itemsVisibles = useMemo(
    () => Array.from({ length: 3 }, (_, i) => ITEMS_INCLUIDOS[(indiceInicio + i) % total]),
    [indiceInicio, total],
  );

  const moverCircular = (paso: number) => setIndiceInicio((prev) => (prev + paso + total) % total);

  return (
    <section style={estilos.seccion}>
      <div style={estilos.contenedor1180}>
        <header style={estilos.encabezado180}>
          <div style={estilos.eyebrow}>QUÉ INCLUYE EL SERVICIO</div>
          <h2 style={estilos.titulo}>De principio a fin.<br /><em style={estilos.tituloEm}>Sin que tengas que estar.</em></h2>
          <p style={estilos.subtitulo}>El precio de USD $230 cubre todo el proceso — desde que contratas hasta que tienes la escritura firmada en tu correo.</p>
        </header>

        <div style={estilos.sliderWrap}>
          <button aria-label="Anterior" style={{ ...estilos.flecha, ...estilos.flechaIzquierda }} onClick={() => moverCircular(-1)}>‹</button>

          <div style={estilos.slider980x350}>
            <div style={estilos.filaTarjetas}>
              {itemsVisibles.map((item) => (
                <article key={`${indiceInicio}-${item.paso}`} className="repl-card-hover" style={{ ...estilos.tarjeta, animation: "carruselFadeUp 300ms ease both" }}>
                  <div style={estilos.badgePaso}>{item.paso}</div>
                  <h3 style={estilos.tarjetaTitulo}>{item.titulo}</h3>
                  <p style={estilos.tarjetaDescripcion}>{item.descripcion}</p>
                </article>
              ))}
            </div>

            <div style={estilos.dots}>
              {ITEMS_INCLUIDOS.map((item, idx) => (
                <button key={item.paso} aria-label={`Ir al paso ${item.paso}`} onClick={() => setIndiceInicio(idx)} style={idx === indiceInicio ? estilos.dotActivo : estilos.dot} />
              ))}
            </div>
          </div>

          <button aria-label="Siguiente" style={{ ...estilos.flecha, ...estilos.flechaDerecha }} onClick={() => moverCircular(1)}>›</button>
        </div>
      </div>

      <style>{`
        @keyframes carruselFadeUp {
          from { opacity: 0; transform: translateY(10px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .repl-card-hover { border: 1px solid rgba(15,45,92,.1); }
        .repl-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(201, 144, 12, 0.45);
          box-shadow: 0 20px 38px rgba(15, 45, 92, 0.14);
        }
      `}</style>
    </section>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  seccion: { background: "#FBF8F3", padding: "88px 0 0", minHeight: 746, fontFamily: '"Montserrat", system-ui, sans-serif', display: "flex", justifyContent: "center" },
  contenedor1180: { width: "min(1180px, calc(100vw - 24px))", display: "flex", flexDirection: "column", gap: 40 },
  encabezado180: { minHeight: 180, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center" },
  eyebrow: { color: "#C9900C", fontSize: 16, lineHeight: "16.8px", letterSpacing: "1.57px", fontWeight: 600, margin: 0 },
  titulo: { margin: 0, color: "#0F2D5C", fontSize: "clamp(2rem, 5vw, 35.86px)", lineHeight: 1.2, fontWeight: 600 },
  tituloEm: { color: "#1A4F9E", fontStyle: "italic", fontWeight: 600 },
  subtitulo: { margin: 0, maxWidth: 1060, color: "#475569", fontSize: "clamp(0.95rem, 2.3vw, 15.2px)", lineHeight: 1.75, padding: "0 8px" },
  sliderWrap: { position: "relative", padding: "0 56px" },
  slider980x350: { width: "100%", minHeight: 350, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20, overflow: "hidden" },
  filaTarjetas: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18 },
  tarjeta: { background: "#F8FAFC", borderRadius: 28, padding: "20px 22px", minHeight: 239, transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease" },
  badgePaso: { width: 36, height: 36, borderRadius: 999, background: "rgba(201,144,12,.2)", color: "#92650A", fontSize: 16, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 18 },
  tarjetaTitulo: { margin: "0 0 12px", color: "#0F2D5C", fontSize: 14.72, lineHeight: "22.1px", fontWeight: 600 },
  tarjetaDescripcion: { margin: 0, color: "#475569", fontSize: 12.96, lineHeight: "21.4px" },
  flecha: { position: "absolute", top: 100, width: 40, height: 40, borderRadius: 999, border: "2px solid #0F2D5C", background: "#FBF8F3", color: "#0F2D5C", fontSize: 16, lineHeight: "36px", cursor: "pointer", zIndex: 2 },
  flechaIzquierda: { left: 0 },
  flechaDerecha: { right: 0 },
  dots: { display: "flex", justifyContent: "center", gap: 7 },
  dot: { width: 10, height: 10, borderRadius: 999, background: "#D1D5DB", border: "none", padding: 0, cursor: "pointer" },
  dotActivo: { width: 26, height: 10, borderRadius: 999, background: "#0F2D5C", border: "none", padding: 0, cursor: "pointer" },
};