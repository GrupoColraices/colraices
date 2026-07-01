'use client';

import React, { useState } from 'react';
import { OFFICIAL_WHATSAPP_URL } from '@/app/lib/officialUrls';

export default function CtaFinalFinanzas() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  const scrollToProductos = () => {
    const productosSection = document.getElementById('productos');

    if (productosSection) {
      productosSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      className="ctaFinalFinanzas"
      aria-label="CTA final finanzas"
    >
      <div className="ctaFinalFinanzas__container">
        {/* TITULO */}
        <h2 className="ctaFinalFinanzas__title">
          Empieza hoy. Compra mañana.
        </h2>

        {/* SUBTITULO */}
        <p className="ctaFinalFinanzas__subtitle">
          Empieza con una conversación. Sin compromisos, sin letra pequeña, sin enredos.
        </p>

        {/* BOTONES */}
        <div className="ctaFinalFinanzas__buttons">
          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsPrimaryHovered(true)}
            onMouseLeave={() => setIsPrimaryHovered(false)}
            className="ctaFinalFinanzas__button ctaFinalFinanzas__button--primary"
            style={{
              transform: isPrimaryHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: isPrimaryHovered
                ? '0 10px 24px rgba(255, 193, 7, 0.45), 0 0 20px rgba(255, 193, 7, 0.35)'
                : 'none',
            }}
          >
            Hablar con un asesor
          </a>

          <button
            type="button"
            onClick={scrollToProductos}
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
            className="ctaFinalFinanzas__button ctaFinalFinanzas__button--secondary"
            style={{
              transform: isSecondaryHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: isSecondaryHovered
                ? '0 8px 20px rgba(9, 29, 62, 0.55), 0 0 16px rgba(255, 255, 255, 0.12)'
                : 'none',
            }}
          >
            Ver todos los productos
          </button>
        </div>
      </div>

      <style jsx>{`
        .ctaFinalFinanzas {
          width: 100%;
          background-color: #091d3e;
          display: flex;
          justify-content: center;
          padding: clamp(64px, 10vw, 100px) clamp(16px, 4vw, 20px);
          box-sizing: border-box;
          overflow: hidden;
        }

        .ctaFinalFinanzas__container {
          width: 100%;
          max-width: 1180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }

        .ctaFinalFinanzas__title {
          margin: 0;
          color: #fff;
          font-family: Montserrat, sans-serif;
          font-weight: 300;
          line-height: 1.2;
          font-size: clamp(28px, 7vw, 41.83px);
          max-width: 100%;
          text-wrap: balance;
        }

        .ctaFinalFinanzas__subtitle {
          margin-top: 16px;
          margin-bottom: 0;
          color: rgba(255, 255, 255, 0.72);
          font-family: Montserrat, sans-serif;
          font-size: 15.2px;
          line-height: 1.45;
          text-align: center;
          max-width: 600px;
          width: 100%;
          white-space: nowrap;
          overflow: visible;
          box-sizing: border-box;
        }

        .ctaFinalFinanzas__buttons {
          margin-top: 32px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        .ctaFinalFinanzas__button {
          min-height: 48px;
          padding: 14px 28px;
          border-radius: 100px;
          color: #fff;
          font-family: Montserrat, sans-serif;
          font-size: 14.4px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          max-width: 100%;
          box-sizing: border-box;
        }

        .ctaFinalFinanzas__button--primary {
          border: none;
          background-color: #ffc107;
        }

        .ctaFinalFinanzas__button--secondary {
          border: 0.8px solid rgba(255, 255, 255, 0.3);
          background-color: transparent;
        }

        @media (max-width: 767px) {
          .ctaFinalFinanzas {
            padding: 64px 18px;
          }

          .ctaFinalFinanzas__subtitle {
            max-width: 340px;
            white-space: normal;
            overflow-wrap: break-word;
            text-wrap: pretty;
            font-size: 14px;
            line-height: 1.45;
          }

          .ctaFinalFinanzas__buttons {
            margin-top: 28px;
          }
        }

        @media (max-width: 420px) {
          .ctaFinalFinanzas__buttons {
            flex-direction: column;
          }

          .ctaFinalFinanzas__button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
}