'use client';

import React, { useState } from 'react';

export default function CtaFinalFinanzas() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#091D3E',
        display: 'flex',
        justifyContent: 'center',
        padding: '100px 20px', // 🔥 padding lateral para móvil
      }}
      aria-label="CTA final finanzas"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1180px', // 🔥 mantiene el diseño en desktop
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* TITULO */}
        <h2
          style={{
            margin: 0,
            color: '#fff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            lineHeight: '1.2',
            fontSize: 'clamp(28px, 4vw, 41.83px)', // 🔥 responsive real
          }}
        >
          Empieza hoy. Compra mañana.
        </h2>

        {/* SUBTITULO */}
        <p
          style={{
            marginTop: '16px',
            color: 'rgba(255,255,255,0.46)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(14px, 2.5vw, 15.2px)',
            lineHeight: '1.7',
            maxWidth: '700px', // 🔥 evita textos muy largos en PC
          }}
        >
          No importa en qué momento estés. Siempre hay un primer paso. Cuéntanos tu
          caso y te decimos por dónde empezar.
        </p>

        {/* BOTONES */}
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap', // 🔥 permite bajar en móvil
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            onMouseEnter={() => setIsPrimaryHovered(true)}
            onMouseLeave={() => setIsPrimaryHovered(false)}
            style={{
              padding: '14px 28px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: '#FFC107',
              color: '#fff',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14.4px',
              fontWeight: 600,
              cursor: 'pointer',
              transform: isPrimaryHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: isPrimaryHovered
                ? '0 10px 24px rgba(255, 193, 7, 0.45), 0 0 20px rgba(255, 193, 7, 0.35)'
                : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            Hablar con un asesor
          </button>

          <button
            type="button"
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
            style={{
              padding: '14px 28px',
              borderRadius: '100px',
              border: '0.8px solid rgba(255, 255, 255, 0.3)',
              backgroundColor: 'transparent',
              color: '#fff',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14.4px',
              fontWeight: 600,
              cursor: 'pointer',
              transform: isSecondaryHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: isSecondaryHovered
                ? '0 8px 20px rgba(9, 29, 62, 0.55), 0 0 16px rgba(255, 255, 255, 0.12)'
                : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            Ver todos los productos
          </button>
        </div>
      </div>
    </section>
  );
}