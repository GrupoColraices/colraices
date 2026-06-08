'use client';

import React, { memo } from 'react';

interface Testimonio {
  tag: string;
  color: string;
  bgTag: string;
  quote: string;
  name: string;
  info: string;
  initials: string;
}

const testimonios: Testimonio[] = [
  {
    tag: 'Crédito hipotecario',
    color: '#FFC107',
    bgTag: '#FEF3C7',
    quote:
      '"Nunca pensé que podría comprar en Colombia desde el exterior. Con Colraices todo fue remoto, claro y rápido. Hoy tengo mi apartamento en Medellín."',
    name: 'Laura P.',
    info: 'Residente en Nueva York · Davivienda',
    initials: 'LP',
  },
  {
    tag: 'Crédito hipotecario',
    color: '#0F2D5C',
    bgTag: 'rgba(15, 45, 92, 0.08)',
    quote:
      '"Me explicaron paso a paso qué necesitaba. El proceso fue 100% remoto. En 2 meses ya estaba firmando. Increíble."',
    name: 'Juan M.',
    info: 'Residente en Madrid · Davivienda',
    initials: 'JM',
  },
  {
    tag: 'Libre inversión',
    color: '#DC2626',
    bgTag: '#FEF2F2',
    quote:
      '"Tenía un apartamento en Bogotá y lo capitalicé para invertir en otro proyecto. El proceso fue claro y sin sorpresas."',
    name: 'Carlos M.',
    info: 'Residente en Miami · Banco Unión',
    initials: 'CM',
  },
];

const TestimonioCard = memo(function TestimonioCard({
  item,
}: {
  item: Testimonio;
}) {
  return (
    <article className="hr-card">
      <div className="hr-card-top">
        <span className="hr-watermark" style={{ color: item.color }}>
          \&ldquo;
        </span>

        <div className="hr-badge" style={{ backgroundColor: item.bgTag }}>
          <span style={{ color: item.color }}>{item.tag}</span>
        </div>

        <span className="hr-stars" aria-label="5 estrellas">
          ★★★★★
        </span>
      </div>

      <blockquote className="hr-quote">{item.quote}</blockquote>

      <footer className="hr-footer">
        <div className="hr-avatar" aria-hidden="true">
          <span>{item.initials}</span>
        </div>

        <div>
          <p className="hr-author-name">{item.name}</p>
          <p className="hr-author-info">{item.info}</p>
        </div>
      </footer>
    </article>
  );
});

export default function HistoriasRealesSection() {
  return (
    <>
      <style>{`
        :root {
          --hr-bg: #FBF8F3;
          --hr-primary: #0F2D5C;
          --hr-secondary: #1E293B;
          --hr-border: rgba(15, 45, 92, 0.1);
          --hr-hover-border: rgba(26, 79, 158, 0.25);
          --hr-shadow: 0 14px 30px rgba(15, 45, 92, 0.12);
          --hr-radius: 16px 0 16px 0;
          --hr-font: 'Montserrat', system-ui, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .hr-section {
          width: 100%;
          background-color: var(--hr-bg);
          padding: 88px 48px 56px;
          font-family: var(--hr-font);
        }

        .hr-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .hr-header {
          margin-bottom: 48px;
          text-align: center;
        }

        .hr-subtitle {
          margin: 0;
          display: block;
          font-style: italic;
          font-size: 20px;
          line-height: 30px;
          color: #0A0A0A;
        }

        .hr-title {
          margin: 3px 0 0;
          display: block;
          font-weight: 600;
          font-size: 35.6px;
          line-height: 43px;
          color: var(--hr-primary);
        }

        .hr-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .hr-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          background-color: var(--hr-bg);
          border: 0.8px solid var(--hr-border);
          border-radius: var(--hr-radius);
          overflow: hidden;
          transition:
            transform 300ms ease-out,
            box-shadow 300ms ease-out,
            border-color 300ms ease-out;
          will-change: transform;
        }

        .hr-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--hr-shadow);
          border-color: var(--hr-hover-border);
        }

        .hr-card-top {
          position: relative;
          padding: 28px 28px 0;
        }

        .hr-watermark {
          position: absolute;
          top: 8px;
          left: 14px;
          z-index: 0;
          font-size: 62px;
          line-height: 62px;
          font-weight: 700;
          font-style: italic;
          opacity: 0.12;
          pointer-events: none;
          user-select: none;
        }

        .hr-badge,
        .hr-stars {
          position: relative;
          z-index: 1;
        }

        .hr-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          margin-bottom: 12px;
          border-radius: 999px;
        }

        .hr-badge span {
          font-size: 10.4px;
          font-weight: 700;
          line-height: 15.6px;
          letter-spacing: 0.83px;
          text-transform: uppercase;
        }

        .hr-stars {
          display: block;
          color: #FFC107;
          font-size: 13.6px;
          line-height: 20px;
          letter-spacing: 0px;
        }

        .hr-quote {
          flex: 1;
          margin: 0;
          padding: 16px 28px 24px;
          border: none;
          font-size: 14.4px;
          line-height: 25.2px;
          font-style: italic;
          color: var(--hr-secondary);
        }

        .hr-footer {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px 28px;
          border-top: 0.8px solid var(--hr-border);
        }

        .hr-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          min-width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #1A4F9E;
        }

        .hr-avatar span {
          font-size: 12px;
          font-weight: 600;
          color: #FFFFFF;
        }

        .hr-author-name,
        .hr-author-info {
          margin: 0;
        }

        .hr-author-name {
          font-size: 14px;
          font-weight: 600;
          line-height: 21px;
          color: var(--hr-primary);
        }

        .hr-author-info {
          font-size: 11.52px;
          line-height: 17.3px;
          color: #94A3B8;
          opacity: 0.7;
        }

        @media (max-width: 1023px) {
          .hr-section {
            padding: 64px 32px 44px;
          }

          .hr-header {
            margin-bottom: 36px;
          }

          .hr-subtitle {
            font-size: 17px;
          }

          .hr-title {
            font-size: 28px;
            line-height: 36px;
          }

          .hr-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hr-quote {
            font-size: 13.5px;
            line-height: 23px;
          }
        }

        @media (max-width: 639px) {
          .hr-section {
            padding: 48px 20px 36px;
          }

          .hr-header {
            margin-bottom: 28px;
          }

          .hr-subtitle {
            font-size: 15px;
            line-height: 24px;
          }

          .hr-title {
            font-size: 22px;
            line-height: 30px;
          }

          .hr-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 379px) {
          .hr-section {
            padding: 40px 16px 28px;
          }

          .hr-title {
            font-size: 19px;
            line-height: 27px;
          }

          .hr-card-top {
            padding: 24px 20px 0;
          }

          .hr-quote {
            padding: 14px 20px 20px;
            font-size: 12.5px;
            line-height: 21px;
          }

          .hr-footer {
            padding: 12px 20px;
          }

          .hr-badge span {
            font-size: 9px;
          }
        }
      `}</style>

      <section className="hr-section" aria-labelledby="historias-reales-title">
        <div className="hr-inner">
          <header className="hr-header">
            <p className="hr-subtitle">Historias reales</p>
            <h2 id="historias-reales-title" className="hr-title">
              Colombianos que ya compraron desde el exterior.
            </h2>
          </header>

          <div className="hr-grid">
            {testimonios.map((item) => (
              <TestimonioCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
