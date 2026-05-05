'use client';

import { useEffect, useState } from 'react';

export default function PerfilamientoSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const aplicaItems = [
    {
      icon: '🌎',
      text: 'Eres colombiano viviendo en el exterior (sin importar cuánto tiempo lleves fuera)',
    },
    {
      icon: '🏠',
      text: 'Tienes uno o más inmuebles en Colombia a tu nombre',
    },
    {
      icon: '💼',
      text: 'Generas ingresos en Colombia o tienes inversiones allá',
    },
    {
      icon: '❓',
      text: 'No sabes con certeza si estás obligado a declarar renta o pagar predial',
    },
    {
      icon: '⏰',
      text: 'Llevas años sin declarar y quieres regularizar tu situación fiscal',
    },
  ];

  const noAplicaItems = [
    {
      icon: '🚫',
      text: 'No tienes ningún vínculo económico con Colombia (ni inmuebles, ni ingresos, ni inversiones)',
    },
    {
      icon: '📋',
      text: 'Ya tienes un contador en Colombia que lleva tu situación fiscal al día',
    },
    {
      icon: '⚖️',
      text: 'Tienes un proceso activo con la DIAN que requiere litigio o defensa tributaria especializada',
    },
  ];

  if (!loaded) {
    return (
      <section
        style={{
          width: '100%',
          height: '637.91px',
          background: '#FFFFFF',
          opacity: 0,
        }}
      />
    );
  }

  return (
    <>
      <section className="perfilamiento-section">
        <div className="perfilamiento-container">
          {/* Header */}
          <div className="perfilamiento-header">
            <div className="perfilamiento-label">
              <div className="perfilamiento-line" />
              <span>Perfilamiento</span>
            </div>

            <h2>
              ¿Este servicio es <span>para ti?</span>
            </h2>
          </div>

          {/* Main Box */}
          <div className="perfilamiento-box">
            {/* Left */}
            <div className="perfilamiento-column">
              <h3>✓ Aplica perfectamente si...</h3>

              <div className="perfilamiento-list">
                {aplicaItems.map((item, index) => (
                  <div
                    key={index}
                    className="perfilamiento-item aplica"
                    style={{
                      animationDelay: `${index * 0.08}s`,
                    }}
                  >
                    <div className="perfilamiento-icon">{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="perfilamiento-divider" />

            {/* Right */}
            <div className="perfilamiento-column">
              <h3 className="right-title">→ No aplica si...</h3>

              <div className="perfilamiento-list">
                {noAplicaItems.map((item, index) => (
                  <div
                    key={index}
                    className="perfilamiento-item no-aplica"
                    style={{
                      animationDelay: `${index * 0.08}s`,
                    }}
                  >
                    <div className="perfilamiento-icon">{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .perfilamiento-section {
          width: 100%;
          background: #ffffff;
          display: flex;
          justify-content: center;
          padding: 88px 0 120px;
          font-family: 'Montserrat', sans-serif;
          animation: fadeIn 0.4s ease forwards;
        }

        .perfilamiento-container {
          width: 1180px;
          display: flex;
          flex-direction: column;
        }

        .perfilamiento-header {
          margin-left: 52px;
          width: 1076px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeUp 0.8s ease;
        }

        .perfilamiento-label {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 16.8px;
        }

        .perfilamiento-line {
          width: 24px;
          height: 2px;
          background: #ffc107;
        }

        .perfilamiento-label span {
          font-size: 11.2px;
          font-weight: 600;
          line-height: 16.8px;
          letter-spacing: 1.57px;
          color: #ffc107;
          text-transform: uppercase;
        }

        .perfilamiento-header h2 {
          margin: 0;
          font-size: 35.86px;
          font-weight: 600;
          line-height: 43px;
          color: #0f2d5c;
        }

        .perfilamiento-header h2 span {
          color: #1a4f9e;
          font-style: italic;
        }

        .perfilamiento-box {
          margin-top: 48px;
          margin-left: 52px;
          width: 1076px;
          background: #fbf8f3;
          border-radius: 32px;
          padding: 40px;
          box-sizing: border-box;
          display: flex;
          animation: fadeUp 0.9s ease;
          transition: transform 0.45s ease, box-shadow 0.45s ease;
        }

        .perfilamiento-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(15, 45, 92, 0.08);
        }

        .perfilamiento-column {
          width: 457.5px;
          display: flex;
          flex-direction: column;
        }

        .perfilamiento-column h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          color: #0f2d5c;
        }

        .right-title {
          color: #475569 !important;
        }

        .perfilamiento-list {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .perfilamiento-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-height: 41.15px;
          padding: 6px 8px;
          border-radius: 12px;
          transition: all 0.35s ease;
          animation: itemFade 0.6s ease both;
        }

        .perfilamiento-item:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.72);
        }

        .aplica:hover {
          box-shadow: 0 10px 25px rgba(26, 79, 158, 0.08);
        }

        .no-aplica:hover {
          box-shadow: 0 10px 25px rgba(148, 163, 184, 0.08);
        }

        .perfilamiento-icon {
          width: 19.78px;
          flex-shrink: 0;
          font-size: 14px;
          line-height: 20.6px;
          display: flex;
          justify-content: center;
          transition: transform 0.35s ease;
        }

        .perfilamiento-item:hover .perfilamiento-icon {
          transform: scale(1.18) rotate(4deg);
        }

        .perfilamiento-item p {
          margin: 0;
          width: 427.73px;
          font-size: 13.28px;
          font-weight: 400;
          line-height: 20.6px;
          color: #475569;
        }

        .no-aplica p {
          color: #94a3b8;
        }

        .perfilamiento-divider {
          width: 1px;
          background: rgba(15, 45, 92, 0.1);
          margin: 0 40px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            transform: translateY(25px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes itemFade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1200px) {
          .perfilamiento-container {
            width: 100%;
            padding: 0 20px;
          }

          .perfilamiento-header,
          .perfilamiento-box {
            width: 100%;
            margin-left: 0;
          }

          .perfilamiento-box {
            flex-direction: column;
            gap: 40px;
          }

          .perfilamiento-divider {
            width: 100%;
            height: 1px;
            margin: 0;
          }

          .perfilamiento-column {
            width: 100%;
          }

          .perfilamiento-item p {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}