'use client';

import type { CSSProperties } from 'react';

const pasos = [
  { id: 1, icono: '📋', texto: 'Consulta inicial y diagnóstico de tu caso' },
  {
    id: 2,
    icono: '📝',
    texto: 'Preparación de documentos y estrategia legal, según tu servicio',
  },
  { id: 3, icono: '⚖️', texto: 'Gestión activa del trámite' },
  { id: 4, icono: '✅', texto: 'Seguimiento hasta el cierre exitoso' },
];

const sectionStyle: CSSProperties = {
  width: '100%',
  padding: '100px 10px 60px',
  backgroundColor: '#0B1F3F',
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
};

const containerStyle: CSSProperties = {
  maxWidth: 1064,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  fontFamily: 'Montserrat, sans-serif',
  position: 'relative',
};

const stepsContainerStyle: CSSProperties = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 18,
};

const connectorStyle: CSSProperties = {
  position: 'absolute',
  left: '13%',
  right: '13%',
  top: 28,
  height: 1,
  background:
    'linear-gradient(to right, rgba(240,180,41,0.5), rgba(240,180,41,0.1))',
};

const stepStyle: CSSProperties = {
  textAlign: 'center',
  zIndex: 1,
};

const iconWrapStyle: CSSProperties = {
  position: 'relative',
  width: 56,
  height: 56,
  margin: '0 auto',
  borderRadius: 999,
  display: 'grid',
  placeItems: 'center',
  background: 'linear-gradient(180deg, #1a4f9e, #0f2d5c)',
  border: '2px solid rgba(255, 193, 7, 0.25)',
};

const badgeStyle: CSSProperties = {
  position: 'absolute',
  top: -8,
  right: -8,
  width: 22,
  height: 22,
  borderRadius: 999,
  display: 'grid',
  placeItems: 'center',
  background: '#ffc107',
  color: '#0a0a0a',
  fontSize: 12,
  fontWeight: 600,
};

export default function ComoTrabajamos() {
  return (
    <section style={sectionStyle} aria-labelledby="ct-title">

      {/* 🔳 GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 🔵 LUZ */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 20% 25%, rgba(26,79,158,0.15) 0%, transparent 60%)',
        }}
      />

      {/* 🟡 GLOW */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 92% 92%, rgba(201,144,12,0.08) 0%, transparent 40%)',
        }}
      />

      {/* 🎯 NOISE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />

      <div style={containerStyle}>
        <p
          style={{
            margin: 0,
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: '1.74px',
            color: '#ffc107',
          }}
        >
          CÓMO TRABAJAMOS
        </p>

        <h2
          id="ct-title"
          style={{
            margin: 0,
            textAlign: 'center',
            fontSize: 'clamp(28px, 4vw, 35.86px)',
            fontWeight: 600,
          }}
        >
          <span>Procesos </span>
          <span style={{ color: '#ffc107' }}>claros y ordenados</span>
        </h2>

        <p
          style={{
            margin: '0 auto',
            maxWidth: 800,
            textAlign: 'center',
            fontSize: 16.8,
            lineHeight: '28.9px',
          }}
        >
          Te acompañamos paso a paso, según tu caso y servicio seleccionado.
        </p>

        <div style={stepsContainerStyle}>
          <div style={connectorStyle} />

          {pasos.map((paso) => (
            <article key={paso.id} style={stepStyle}>
              <div
                style={{
                  ...iconWrapStyle,
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.border = '2px solid #ffc107';
                  el.style.boxShadow =
                    '0 0 0 4px rgba(240,180,41,0.15), 0 0 12px rgba(240,180,41,0.5)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.border =
                    '2px solid rgba(255, 193, 7, 0.25)';
                  el.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: 19.2 }}>{paso.icono}</span>
                <span style={badgeStyle}>{paso.id}</span>
              </div>

              <p
                style={{
                  margin: '14px auto 0',
                  maxWidth: 246,
                  fontSize: 13.12,
                  color: 'rgba(255,255,255,0.72)',
                }}
              >
                {paso.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}