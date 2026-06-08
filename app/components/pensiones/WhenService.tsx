import React from "react";

const appliesItems = [
  {
    icon: "📋",
    text: "Cotizaste en Colombia antes de emigrar y nunca has revisado tu historial pensional.",
  },
  {
    icon: "💳",
    text: "Quieres seguir cotizando voluntariamente en Colombia desde el exterior.",
  },
  {
    icon: "🌍",
    text: "Resides en un país con el que Colombia tiene convenio de seguridad social.",
  },
  {
    icon: "🎯",
    text: "Tienes edad de pensión o estás próximo a ella y quieres saber qué te corresponde.",
  },
  {
    icon: "⚖️",
    text: "Te negaron una pensión que crees que te corresponde o llevas tiempo sin respuesta de Colpensiones.",
  },
];

const notAppliesItems = [
  {
    icon: "🚫",
    text: "Nunca cotizaste en Colombia y no tienes historial pensional en el sistema colombiano. Sin historial no hay base para una asesoría pensional colombiana.",
  },
  {
    icon: "🌐",
    text: "Buscas asesoría sobre el sistema pensional del país donde resides actualmente. Ese servicio está fuera del alcance de Colraices.",
  },
];

export default function WhenService() {
  return (
    <section
      style={{
        padding: "88px 0",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 52px",
        }}
      >
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "35.86px",
            lineHeight: "43px",
            fontWeight: 600,
            color: "#0F2D5C",
            textAlign: "center",
            margin: "0 0 52px",
            letterSpacing: "0",
          }}
        >
          ¿Es este servicio{" "}
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 600,
              color: "#1A4F9E",
            }}
          >
            para ti?
          </em>
        </h2>

        <div className="when-grid">
          {/* LEFT CARD */}
          <div className="when-card when-card-left">
            <div className="when-header">
              <div className="when-icon when-icon-yes">✓</div>
              <h3 className="when-title when-title-yes">Aplica si…</h3>
            </div>

            <div className="when-items">
              {appliesItems.map((item, index) => (
                <div key={index} className="when-item">
                  <span className="when-item-icon">{item.icon}</span>
                  <span className="when-item-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="when-card when-card-right">
            <div className="when-header">
              <div className="when-icon when-icon-no">→</div>
              <h3 className="when-title when-title-no">No aplica si…</h3>
            </div>

            <div className="when-items">
              {notAppliesItems.map((item, index) => (
                <div key={index} className="when-item">
                  <span className="when-item-icon">{item.icon}</span>
                  <span className="when-item-text when-item-muted">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .when-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .when-card {
          border: 1px solid rgba(15,45,92,.1);
          border-radius: 20px;
          padding: 28.8px;
          min-height: 351px;
          box-sizing: border-box;
        }

        .when-card-left {
          background: #FBF8F3;
        }

        .when-card-right {
          background: #FFFFFF;
        }

        .when-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }

        .when-icon {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          font-weight: 700;
        }

        .when-icon-yes {
          background: #0F2D5C;
          color: #FFFFFF;
        }

        .when-icon-no {
          background: #F3EDE3;
          color: #475569;
        }

        .when-title {
          margin: 0;
          font-family: Montserrat, sans-serif;
          font-size: 14.4px;
          line-height: 21.6px;
          font-weight: 700;
          letter-spacing: 0;
        }

        .when-title-yes {
          color: #0F2D5C;
        }

        .when-title-no {
          color: #475569;
        }

        .when-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .when-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .when-item-icon {
          width: 18px;
          flex-shrink: 0;
          font-size: 12px;
          line-height: 20px;
          margin-top: 1px;
        }

        .when-item-text {
          font-family: Montserrat, sans-serif;
          font-size: 13.28px;
          line-height: 20.6px;
          font-weight: 400;
          color: #475569;
          letter-spacing: 0;
        }

        .when-item-muted {
          color: #94A3B8;
        }

        @media (max-width: 1024px) {
          .when-grid {
            grid-template-columns: 1fr;
          }

          .when-card {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 72px 0 !important;
          }

          section > div {
            padding: 0 24px !important;
          }

          section h2 {
            font-size: 30px !important;
            line-height: 38px !important;
            margin-bottom: 40px !important;
          }

          .when-card {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          section h2 {
            font-size: 26px !important;
            line-height: 34px !important;
          }

          .when-item-text {
            font-size: 12.5px;
            line-height: 19px;
          }
        }
      `}</style>
    </section>
  );
}