"use client";

import React, { useMemo, useState } from "react";

type IncludeItem = {
  paso: number;
  titulo: string;
  descripcion: string;
};

const ITEMS_INCLUIDOS: IncludeItem[] = [
  {
    paso: 1,
    titulo: "Revisamos la escritura antes de firmar",
    descripcion:
      "El equipo legal verifica que el contenido corresponde exactamente a lo que tú aprobaste. Si hay algo inusual o que no cuadra, te avisamos antes de actuar.",
  },
  {
    paso: 2,
    titulo: "Te guiamos para obtener el poder desde tu país",
    descripcion:
      "Te decimos exactamente qué notario contactar, qué debe decir el poder, cómo apostillarlo y cómo enviárnoslo. Sin que tengas que adivinar nada.",
  },
  {
    paso: 3,
    titulo: "Validamos que el poder esté en regla",
    descripcion:
      "Antes de ir a la notaría, revisamos que el poder cumple todos los requisitos legales en Colombia. Si hay algo que corregir, lo resolvemos contigo a tiempo.",
  },
  {
    paso: 4,
    titulo: "Nos presentamos en la notaría el día pactado",
    descripcion:
      "El apoderado de Colraices asiste a la notaría en la ciudad y la fecha acordada, y firma la escritura en tu nombre.",
  },
  {
    paso: 5,
    titulo: "Confirmación y copia digital",
    descripcion:
      "Recibes confirmación inmediata de que la escritura fue firmada, y te enviamos la copia escaneada ese mismo día.",
  },
  {
    paso: 6,
    titulo: "Acompañamiento directo durante todo el proceso",
    descripcion:
      "Punto de contacto asignado. Cualquier duda o cambio de última hora lo resuelves en tiempo real con quien lleva tu caso.",
  },
];

const getVisiblesCount = (width: number): number => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

export default function SeccionIncluyeServicio() {
  const [indiceInicio, setIndiceInicio] = useState(0);
  const [visiblesCount, setVisiblesCount] = useState(3);
  const total = ITEMS_INCLUIDOS.length;

  React.useEffect(() => {
    const actualizar = () => {
      setVisiblesCount(getVisiblesCount(window.innerWidth));
    };

    actualizar();
    window.addEventListener("resize", actualizar);
    return () => window.removeEventListener("resize", actualizar);
  }, []);

  const itemsVisibles = useMemo(
    () =>
      Array.from(
        { length: visiblesCount },
        (_, i) => ITEMS_INCLUIDOS[(indiceInicio + i) % total],
      ),
    [indiceInicio, total, visiblesCount],
  );

  const moverCircular = (paso: number) => {
    setIndiceInicio((prev) => (prev + paso + total) % total);
  };
  const isMobile = visiblesCount === 1;

  return (
    <section style={estilos.seccion}>
      <div style={estilos.contenedor1180}>
        <header style={estilos.encabezado180}>
          <div style={estilos.eyebrow}>QUÉ INCLUYE EL SERVICIO</div>
          <h2 style={estilos.titulo}>
            De principio a fin.
            <br />
            <em style={estilos.tituloEm}>Sin que tengas que estar.</em>
          </h2>
          <p style={estilos.subtitulo}>
            El precio de USD $230 cubre todo el proceso — desde que contratas
            hasta que tienes la escritura firmada en tu correo.
          </p>
        </header>

        <div style={estilos.sliderWrap}>
          {!isMobile && (
            <button
              aria-label="Anterior"
              style={{ ...estilos.flecha, ...estilos.flechaIzquierda }}
              onClick={() => moverCircular(-1)}
            >
              ‹
            </button>
          )}

          <div style={estilos.slider}>
            <div
              style={{
                ...estilos.filaTarjetas,
                gridTemplateColumns: `repeat(${visiblesCount}, minmax(0, 1fr))`,
              }}
            >
              {itemsVisibles.map((item) => (
                <article
                  key={`${indiceInicio}-${item.paso}`}
                  className="repl-card-hover"
                  style={{
                    ...estilos.tarjeta,
                    animation: "carruselFadeUp 300ms ease both",
                  }}
                >
                  <div style={estilos.badgePaso}>{item.paso}</div>
                  <h3 style={estilos.tarjetaTitulo}>{item.titulo}</h3>
                  <p style={estilos.tarjetaDescripcion}>{item.descripcion}</p>
                </article>
              ))}
            </div>

            <div style={estilos.dots}>
              {ITEMS_INCLUIDOS.map((item, idx) => (
                <button
                  key={item.paso}
                  aria-label={`Ir al paso ${item.paso}`}
                  onClick={() => setIndiceInicio(idx)}
                  style={idx === indiceInicio ? estilos.dotActivo : estilos.dot}
                />
              ))}
            </div>
          </div>

          {!isMobile && (
            <button
              aria-label="Siguiente"
              style={{ ...estilos.flecha, ...estilos.flechaDerecha }}
              onClick={() => moverCircular(1)}
            >
              ›
            </button>
          )}
        </div>
        {isMobile && (
          <div style={estilos.flechasMobileWrap}>
            <button
              aria-label="Anterior"
              style={estilos.flechaMobile}
              onClick={() => moverCircular(-1)}
            >
              ‹
            </button>
            <button
              aria-label="Siguiente"
              style={estilos.flechaMobile}
              onClick={() => moverCircular(1)}
            >
              ›
            </button>
          </div>
        )}
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

        @media (max-width: 1023px) {
          .repl-card-hover:hover {
            transform: none;
            box-shadow: 0 8px 20px rgba(15, 45, 92, 0.1);
          }
        }
      `}</style>
    </section>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  seccion: {
    background: "#FBF8F3",
    padding: "clamp(48px, 8vw, 88px) 0 clamp(56px, 10vw, 120px)",
    minHeight: "auto",
    fontFamily: '"Montserrat", system-ui, sans-serif',
    display: "flex",
    justifyContent: "center",
  },
  contenedor1180: {
    width: "min(1180px, calc(100vw - 24px))",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(24px, 4vw, 40px)",
  },
  encabezado180: {
    minHeight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    textAlign: "center",
  },
  eyebrow: {
    color: "#C9900C",
    fontSize: "clamp(12px, 2.5vw, 16px)",
    lineHeight: 1.2,
    letterSpacing: "0.09em",
    fontWeight: 600,
    margin: 0,
  },
  titulo: {
    margin: 0,
    color: "#0F2D5C",
    fontSize: "clamp(1.6rem, 5vw, 35.86px)",
    lineHeight: 1.2,
    fontWeight: 600,
  },
  tituloEm: { color: "#1A4F9E", fontStyle: "italic", fontWeight: 600 },
  subtitulo: {
    margin: 0,
    maxWidth: 1060,
    color: "#475569",
    fontSize: "clamp(0.95rem, 2.2vw, 15.2px)",
    lineHeight: 1.7,
    padding: "0 8px",
  },
  sliderWrap: {
    position: "relative",
    padding: "0 clamp(4px, 2vw, 56px)",
  },
  slider: {
    width: "100%",
    minHeight: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    overflow: "hidden",
  },
  filaTarjetas: {
    display: "grid",
    gap: "clamp(12px, 2vw, 18px)",
  },
  tarjeta: {
    background: "#F8FAFC",
    borderRadius: 20,
    padding: "clamp(16px, 2.2vw, 22px)",
    minHeight: "clamp(200px, 28vw, 239px)",
    transition:
      "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
  },
  badgePaso: {
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "rgba(201,144,12,.2)",
    color: "#92650A",
    fontSize: 16,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  tarjetaTitulo: {
    margin: "0 0 12px",
    color: "#0F2D5C",
    fontSize: "clamp(14px, 1.8vw, 16px)",
    lineHeight: 1.45,
    fontWeight: 600,
  },
  tarjetaDescripcion: {
    margin: 0,
    color: "#475569",
    fontSize: "clamp(13px, 1.8vw, 14px)",
    lineHeight: 1.6,
  },
  flecha: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 40,
    height: 40,
    borderRadius: 999,
    border: "2px solid #0F2D5C",
    background: "#FBF8F3",
    color: "#0F2D5C",
    fontSize: 16,
    lineHeight: "36px",
    cursor: "pointer",
    zIndex: 2,
  },
  flechaIzquierda: { left: 0 },
  flechaDerecha: { right: 0 },
  flechasMobileWrap: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginTop: 8,
  },
  flechaMobile: {
    width: 40,
    height: 40,
    borderRadius: 999,
    border: "2px solid #0F2D5C",
    background: "#FBF8F3",
    color: "#0F2D5C",
    fontSize: 16,
    lineHeight: "36px",
    cursor: "pointer",
  },
  dots: { display: "flex", justifyContent: "center", gap: 7 },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "#D1D5DB",
    border: "none",
    padding: 0,
    cursor: "pointer",
  },
  dotActivo: {
    width: 26,
    height: 10,
    borderRadius: 999,
    background: "#0F2D5C",
    border: "none",
    padding: 0,
    cursor: "pointer",
  },
};