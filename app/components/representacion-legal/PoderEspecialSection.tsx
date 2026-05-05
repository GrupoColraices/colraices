import React from "react";

export default function PoderEspecialSection() {
  return (
    <>
      <style>{`
        :root {
          --repl-white: #ffffff;
          --repl-navy: #0f2d5c;
          --repl-gold-deep: #92650a;
          --repl-slate-mid: #475569;
          --repl-font-body: "Montserrat", system-ui, sans-serif;
        }

        * { box-sizing: border-box; }

        .repl-poder-wrap {
          margin: 0;
          width: 100%;
          padding: 88px 0;
          background: #ffffff;
          border-top: 3px solid #0f2d5c;
          font-family: var(--repl-font-body);
          color: var(--repl-navy);
        }

        .repl-section-pad { width: 100%; }
        .repl-container { max-width: 1180px; margin: 0 auto; padding: 0 52px; }
        .text-center { text-align: center; }

        .repl-intro-stack {
          width: 100%;
          min-height: 279.83px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .repl-eyebrow {
          font-size: 16px;
          letter-spacing: 1.57px;
          text-transform: uppercase;
          color: #b6820c;
          line-height: 16.8px;
          margin-bottom: 0;
        }

        .repl-section-title {
          margin: 0;
          font-size: 35.86px;
          line-height: 43px;
          color: #163a70;
          font-weight: 600;
        }

        .repl-section-title-line1 { width: 281px; margin: 0 auto; }

        .repl-section-title em {
          display: inline-block;
          width: 334px;
          font-style: italic;
          color: #2455a3;
          font-weight: 600;
        }

        .repl-section-sub {
          margin: 0 auto;
          max-width: 773px;
          font-size: 15.2px;
          line-height: 26.6px;
          color: #66758b;
        }

        .repl-section-sub-intro { max-width: 731px; }
        .repl-section-sub-detail { max-width: 773px; }
        .repl-section-sub strong { color: var(--repl-navy); }
        .repl-copy-wrap { margin-bottom: 0; display: flex; flex-direction: column; gap: 12px; }

        .repl-card-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          min-height: 222.01px;
        }

        .repl-card {
          background: #fff;
          border: 1px solid rgba(42, 63, 119, 0.08);
          border-radius: 16px 0;
          padding: 32px 28px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .repl-card-kicker {
          font-size: 11.52px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.38px;
          color: var(--repl-gold-deep);
          line-height: 17.3px;
          margin-bottom: 14px;
        }

        .repl-card-text {
          max-width: 452px;
          font-size: 14.72px;
          color: var(--repl-slate-mid);
          line-height: 25px;
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
          .repl-intro-stack { min-height: auto; }
          .repl-card-grid { grid-template-columns: 1fr; min-height: auto; }
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
            <div className="repl-eyebrow repl-animate repl-animate-1">La figura que te protege</div>
            <h2 className="repl-section-title repl-animate repl-animate-1">
              <span className="repl-section-title-line1">Poder especial.</span><br />
              <em>No poder general.</em>
            </h2>
            <div className="repl-copy-wrap repl-animate repl-animate-2">
              <p className="repl-section-sub repl-section-sub-intro">
                Hay una diferencia fundamental entre los dos tipos de poder notarial.
                Y para ti, como cliente, esa diferencia lo es todo.
              </p>
              <p className="repl-section-sub repl-section-sub-detail" style={{ marginBottom: 48 }}>
                El poder especial que Colraices usa <strong>está limitado exactamente a un acto concreto</strong> — la firma de una escritura específica, en una notaría específica, por un valor específico. No más. Cuando ese acto se ejecuta, el poder vence automáticamente.
              </p>
            </div>
          </div>

          <div className="repl-card-grid repl-animate repl-animate-3">
            <div className="repl-card">
              <div className="repl-card-kicker">Lo que eso significa para ti</div>
              <div className="repl-card-text">
                Nadie puede actuar más allá de lo que tú autorizaste. El apoderado no
                puede vender otra propiedad tuya, comprometerte en otro negocio ni hacer
                nada que no esté descrito en ese poder. Es la forma más segura de delegar
                una firma.
              </div>
            </div>
            <div className="repl-card">
              <div className="repl-card-kicker">¿Cómo otorgas el poder desde el exterior?</div>
              <div className="repl-card-text">
                Ante un notario o autoridad competente en tu país de residencia. El
                documento se apostilla para que tenga validez en Colombia. Colraices te guía
                paso a paso en ese proceso — y verifica que el poder esté bien hecho antes de
                proceder.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}