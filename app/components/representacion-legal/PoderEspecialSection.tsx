import React from "react";

export default function PoderEspecialSection() {
  return (
    <>
      <style>{`
        :root {
          --repl-white: #ffffff;
          --repl-navy: #0f2d5c;
          --repl-accent: #FFC107;
          --repl-slate-mid: #475569;
          --repl-blue-title: #0f2d5c;
          --repl-blue-italic: #1a4f9e;
          --repl-font-body: "Montserrat", system-ui, sans-serif;
        }

        * { box-sizing: border-box; }

        .repl-poder-wrap {
          margin: 0;
          width: 100%;
          padding: 88px 0 80px;
          background: var(--repl-white);
          border-top: 3px solid var(--repl-navy);
          font-family: var(--repl-font-body);
          color: var(--repl-navy);
        }

        .repl-section-pad { width: 100%; }

        .repl-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 52px;
        }

        .text-center { text-align: center; }

        .repl-intro-stack {
          width: 100%;
          height: 279.83px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .repl-eyebrow {
          margin: 0 0 26.23px 0;
          width: 100%;
          font-size: 16px;
          line-height: 16.8px;
          font-weight: 600;
          letter-spacing: 1.57px;
          text-transform: uppercase;
          color: var(--repl-accent);
        }

        .repl-section-title {
          margin: 0 0 32px 0;
          width: 100%;
          font-size: 35.86px;
          line-height: 43px;
          color: var(--repl-blue-title);
          font-weight: 600;
          white-space: nowrap;
        }

        .repl-section-title-line1 {
          display: inline;
        }

        .repl-section-title em {
          display: inline;
          font-style: italic;
          color: var(--repl-blue-italic);
          font-weight: 600;
        }

        .repl-copy-wrap {
          width: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .repl-section-sub {
          margin: 0 auto;
          width: 100%;
          font-size: 15.2px;
          line-height: 26.6px;
          font-weight: 400;
          color: var(--repl-slate-mid);
        }

        .repl-section-sub-intro {
          max-width: 905px;
        }

        .repl-section-sub-detail {
          max-width: 941px;
        }

        .repl-section-sub strong {
          color: var(--repl-navy);
          font-weight: 700;
        }

        .repl-card-grid {
          margin-top: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
          width: 100%;
          min-height: 222.01px;
        }

        .repl-card {
          width: 100%;
          min-height: 222.01px;
          background: #fff;
          border: 1px solid rgba(42, 63, 119, 0.08);
          border-radius: 16px 0;
          padding: 32.8px 28.8px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .repl-card-kicker {
          margin: 0 0 14px 0;
          font-size: 11.52px;
          line-height: 17.3px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.38px;
          color: var(--repl-accent);
        }

        .repl-card-text {
          max-width: 452px;
          margin: 0;
          font-size: 14.72px;
          line-height: 25px;
          font-weight: 400;
          color: var(--repl-slate-mid);
        }

        @keyframes replFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .repl-animate {
          opacity: 0;
          animation: replFadeUp 700ms cubic-bezier(.22,1,.36,1) forwards;
        }

        .repl-animate-1 { animation-delay: 80ms; }
        .repl-animate-2 { animation-delay: 160ms; }
        .repl-animate-3 { animation-delay: 240ms; }

        @media (max-width: 900px) {
          .repl-poder-wrap { padding: 64px 0; }
          .repl-container { padding: 0 20px; }

          .repl-intro-stack {
            height: auto;
            margin-bottom: 40px;
          }

          .repl-eyebrow {
            margin-bottom: 22px;
          }

          .repl-section-title {
            margin-bottom: 28px;
            white-space: normal;
            font-size: 30px;
            line-height: 38px;
          }

          .repl-copy-wrap {
            gap: 16px;
          }

          .repl-card-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .repl-card {
            min-height: auto;
          }
        }

        @media (max-width: 520px) {
          .repl-container { padding: 0 18px; }

          .repl-section-title {
            font-size: 27px;
            line-height: 34px;
          }

          .repl-card {
            padding: 28px 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .repl-animate {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      <section className="repl-poder-wrap repl-section-pad repl-poder-section">
        <div className="repl-container">
          <div className="text-center repl-intro-stack">
            <div className="repl-eyebrow repl-animate repl-animate-1">
              La figura que te protege
            </div>

            <h2 className="repl-section-title repl-animate repl-animate-1">
              <span className="repl-section-title-line1">Poder especial.</span>{" "}
              <em>No poder general.</em>
            </h2>

            <div className="repl-copy-wrap repl-animate repl-animate-2">
              <p className="repl-section-sub repl-section-sub-intro">
                Hay una diferencia fundamental entre los dos tipos de poder notarial. Y para ti, como cliente, esa diferencia lo es todo.
              </p>

              <p className="repl-section-sub repl-section-sub-detail">
                El poder especial que Colraices usa <strong>está limitado exactamente a un acto concreto</strong> — la firma de una escritura específica, en una notaría específica, por un valor específico. No más. Cuando ese acto se ejecuta, el poder vence automáticamente.
              </p>
            </div>
          </div>

          <div className="repl-card-grid repl-animate repl-animate-3">
            <div className="repl-card">
              <div className="repl-card-kicker">
                Lo que eso significa para ti
              </div>

              <p className="repl-card-text">
                Nadie puede actuar más allá de lo que tú autorizaste. El apoderado no
                puede vender otra propiedad tuya, comprometerte en otro negocio ni hacer
                nada que no esté descrito en ese poder. Es la forma más segura de delegar
                una firma.
              </p>
            </div>

            <div className="repl-card">
              <div className="repl-card-kicker">
                ¿Cómo otorgas el poder desde el exterior?
              </div>

              <p className="repl-card-text">
                Ante un notario o autoridad competente en tu país de residencia. El
                documento se apostilla para que tenga validez en Colombia. Colraices te guía
                paso a paso en ese proceso — y verifica que el poder esté bien hecho antes de
                proceder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
