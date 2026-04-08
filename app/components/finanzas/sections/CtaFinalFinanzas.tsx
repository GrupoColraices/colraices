'use client';

import React, { useState } from 'react';

const CTA_CONTENT_WIDTH = 1180;
const CTA_HEIGHT = 371.15;

const SECTION_TOP_PADDING = 100;
const CONTENT_HEIGHT = 171.15;

const TITLE_HEIGHT = 48.11;
const SUBTITLE_TOP = 60.11;
const SUBTITLE_HEIGHT = 25.84;
const BUTTONS_TOP = 121.95;
const BUTTONS_HEIGHT = 49.2;

export default function CtaFinalFinanzas() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <section
      style={{
        width: '100%',
        minHeight: `${CTA_HEIGHT}px`,
        backgroundColor: '#091D3E',
        opacity: 1,
        borderRadius: 0,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
      aria-label="CTA final finanzas"
    >
      <div
        style={{
          width: `${CTA_CONTENT_WIDTH}px`,
          height: `${CTA_HEIGHT}px`,
          position: 'relative',
        }}
      >
        <div
          style={{
            width: `${CTA_CONTENT_WIDTH}px`,
            height: `${CONTENT_HEIGHT}px`,
            position: 'absolute',
            left: 0,
            top: `${SECTION_TOP_PADDING}px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              margin: 0,
              width: `${CTA_CONTENT_WIDTH}px`,
              height: `${TITLE_HEIGHT}px`,
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 1)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '41.83px',
              fontWeight: 300,
              lineHeight: '48.1px',
            }}
          >
            Empieza hoy. Compra mañana.
          </h2>

          <p
            style={{
              margin: 0,
              width: `${CTA_CONTENT_WIDTH}px`,
              height: `${SUBTITLE_HEIGHT}px`,
              marginTop: `${SUBTITLE_TOP - TITLE_HEIGHT}px`,
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.46)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15.2px',
              fontWeight: 400,
              lineHeight: '25.8px',
            }}
          >
            No importa en qué momento estés. Siempre hay un primer paso. Cuéntanos tu
            caso y te decimos por dónde empezar.
          </p>

          <div
            style={{
              width: `${CTA_CONTENT_WIDTH}px`,
              height: `${BUTTONS_HEIGHT}px`,
              marginTop: `${BUTTONS_TOP - SUBTITLE_TOP - SUBTITLE_HEIGHT}px`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <button
              type="button"
              onMouseEnter={() => setIsPrimaryHovered(true)}
              onMouseLeave={() => setIsPrimaryHovered(false)}
              style={{
                width: '208.11px',
                height: '49.2px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: '#FFC107',
                color: 'rgba(255, 255, 255, 1)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14.4px',
                fontWeight: 600,
                lineHeight: '21.6px',
                cursor: 'pointer',
                transform: isPrimaryHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isPrimaryHovered
                  ? '0 10px 24px rgba(255, 193, 7, 0.45), 0 0 20px rgba(255, 193, 7, 0.35)'
                  : 'none',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Hablar con un asesor
            </button>

            <button
              type="button"
              onMouseEnter={() => setIsSecondaryHovered(true)}
              onMouseLeave={() => setIsSecondaryHovered(false)}
              style={{
                width: '228.64px',
                height: '49.2px',
                borderRadius: '100px',
                border: '0.8px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'transparent',
                color: 'rgba(255, 255, 255, 1)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14.4px',
                fontWeight: 600,
                lineHeight: '21.6px',
                cursor: 'pointer',
                transform: isSecondaryHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isSecondaryHovered
                  ? '0 8px 20px rgba(9, 29, 62, 0.55), 0 0 16px rgba(255, 255, 255, 0.12)'
                  : 'none',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Ver todos los productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}