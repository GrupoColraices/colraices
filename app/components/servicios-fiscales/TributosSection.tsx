"use client";

import React from "react";

const tributos = [
  {
    icon: "📋",
    eyebrow: "SITUACIÓN SIMPLE",
    title: "Declaración de\nRenta en Colombia",
    intro:
      "Tienes una o dos fuentes de ingreso, no tienes activos muy complejos, y quieres ponerte al día con la DIAN sin complicaciones.",
    bullets: [
      "Revisamos tu historial tributario y lo que hay pendiente",
      "Elaboramos la declaración y tú la revisas antes de firmar",
      "La presentamos ante la DIAN por ti, sin que tengas que ir a ningún lado",
      "Te entregamos el acuse de recibo y un resumen claro del resultado",
    ],
  },
  {
    icon: "🌐",
    eyebrow: "VIDA FISCAL EN DOS PAÍSES",
    title: "Renta con ingresos\nen dos países",
    intro:
      "Tienes ingresos tanto en Colombia como en el exterior, varios activos, o necesitas que alguien analice si tu situación fiscal en ambos países está bien manejada.",
    bullets: [
      "Analizamos si hay un convenio entre Colombia y tu país para evitar tributar dos veces",
      "Elaboramos la declaración con el tratamiento correcto de tus rentas del exterior",
      "Te explicamos el resultado y qué hacer distinto el año que viene para reducir tu carga",
      "Ordenamos tu estructura fiscal para evitar errores costosos",
    ],
  },
  {
    icon: "🏠",
    eyebrow: "INMUEBLES EN COLOMBIA",
    title: "Impuesto Predial\nal día",
    intro:
      "Tienes una o más propiedades en Colombia y no sabes con certeza si el predial está pagado, si hay años atrasados, o cuánto debes hoy.",
    bullets: [
      "Verificamos el estado exacto de cada inmueble tuyo",
      "Identificamos años pendientes y cuánto hay acumulado con intereses",
      "Te decimos exactamente cuánto pagar y cómo hacerlo desde donde estés",
      "Te avisamos antes de que venzan los descuentos por pronto pago",
    ],
  },
];

export default function TributosSection() {
  return (
    <>
      <section className="tributos-section">
        <div className="tributos-wrap">
          <div className="tributos-header">
            <div className="eyebrow">— QUÉ RESOLVEMOS</div>

            <h2>
              Los tres tributos que más <span>se descuidan</span>
            </h2>

            <p>
              El servicio cubre exactamente lo que el diagnóstico detecte para tu
              caso. Sin módulos que no necesitas.
            </p>
          </div>

          <div className="tributos-grid">
            {tributos.map((item, i) => (
              <div className="tributo-card" key={i}>
                <div className="tributo-top">
                  <div className="icon">{item.icon}</div>

                  <div className="card-eyebrow">{item.eyebrow}</div>

                  <h3>
                    {item.title.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h3>
                </div>

                <div className="tributo-body">
                  <h4>Para ti si...</h4>

                  <p className="intro">{item.intro}</p>

                  <ul>
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="tributos-bottom">
            <div className="bottom-icon">🗓️</div>

            <div className="bottom-content">
              <div className="bottom-eyebrow">TAMBIÉN RESOLVEMOS</div>

              <h3>Años anteriores pendientes</h3>

              <p>
                Si llevas varios años sin declarar, no hace falta entrar en
                pánico. El diagnóstico identifica exactamente cuántos años tienes
                pendientes, cuánto está acumulado en sanciones, y cuál es la forma
                más ordenada de regularizarlo. Se cotiza por año adicional — solo
                pagas lo que te corresponde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .tributos-section {
          width: 100%;
          background: #fbf8f3;
          padding: 48px 0 72px;
        }

        .tributos-wrap {
          width: 1180px;
          margin: 0 auto;
        }

        .tributos-header {
          padding: 0 52px;
          margin-bottom: 42px;
        }

        .eyebrow {
          color: #ffc107;
          font-size: 11.2px;
          font-weight: 600;
          line-height: 16.8px;
          letter-spacing: 1.57px;
          text-transform: uppercase;
          font-family: Montserrat, sans-serif;
          margin-bottom: 10px;
        }

        .tributos-header h2 {
          font-family: Montserrat, sans-serif;
          font-size: 35.86px;
          font-weight: 600;
          line-height: 43px;
          color: #0f2d5c;
          margin: 0;
          letter-spacing: -0.4px;
        }

        .tributos-header h2 span {
          color: #1a4f9e;
          font-style: italic;
        }

        .tributos-header p {
          margin-top: 10px;
          max-width: 580px;
          color: #475569;
          font-size: 15.2px;
          line-height: 26px;
          font-family: Montserrat, sans-serif;
        }

        .tributos-grid {
          display: grid;
          grid-template-columns: repeat(3, 345.33px);
          gap: 12px;
          padding: 0 52px;
          margin-bottom: 22px;
          align-items: stretch;
        }

        .tributo-card {
          background: #ffffff;
          border: 0.8px solid rgba(15, 45, 92, 0.1);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(15, 45, 92, 0.03);
          min-height: 462px;
          height: auto;
          transition:
            transform 0.32s ease,
            box-shadow 0.32s ease;
          cursor: default;
        }

        .tributo-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 18px 40px rgba(15, 45, 92, 0.14),
            8px 18px 28px rgba(15, 45, 92, 0.08);
        }

        .tributo-top {
          min-height: 146px;
          padding: 22px 28px 18px;
          background: radial-gradient(
              circle at top right,
              rgba(31, 119, 255, 0.18),
              transparent 30%
            ),
            linear-gradient(135deg, #0f2d5c 0%, #12386f 55%, #0d4c7d 100%);
        }

        .icon {
          font-size: 24px;
          margin-bottom: 12px;
          line-height: 1;
        }

        .card-eyebrow {
          font-size: 9.92px;
          line-height: 14.9px;
          letter-spacing: 1.09px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          font-weight: 600;
          font-family: Montserrat, sans-serif;
          margin-bottom: 8px;
        }

        .tributo-top h3 {
          margin: 0;
          color: #ffffff;
          font-size: 16.8px;
          line-height: 21.8px;
          font-weight: 600;
          font-family: Montserrat, sans-serif;
        }

        .tributo-body {
          padding: 16px 28px 18px;
        }

        .tributo-body h4 {
          margin: 0 0 10px;
          font-size: 13.12px;
          line-height: 19.7px;
          font-weight: 600;
          color: #0f2d5c;
          font-family: Montserrat, sans-serif;
        }

        .intro {
          color: #475569;
          font-size: 13.12px;
          line-height: 20px;
          margin-bottom: 12px;
          font-family: Montserrat, sans-serif;
        }

        .tributo-body ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tributo-body li {
          position: relative;
          padding-left: 14px;
          color: #475569;
          font-size: 12.8px;
          line-height: 18px;
          font-family: Montserrat, sans-serif;
        }

        .tributo-body li::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ffc107;
          position: absolute;
          left: 0;
          top: 6px;
        }

        .tributos-bottom {
          width: 1076px;
          margin: 0 auto;
          background: #ffffff;
          border: 0.8px solid rgba(15, 45, 92, 0.1);
          border-radius: 32px;
          display: flex;
          align-items: flex-start;
          padding: 24px 32px;
          gap: 20px;
          box-shadow: 0 2px 6px rgba(15, 45, 92, 0.03);
        }

        .bottom-icon {
          font-size: 28px;
          line-height: 1;
          padding-top: 6px;
        }

        .bottom-content {
          flex: 1;
        }

        .bottom-eyebrow {
          color: #ffc107;
          font-size: 10.4px;
          line-height: 15.6px;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 8px;
          font-family: Montserrat, sans-serif;
        }

        .bottom-content h3 {
          margin: 0 0 10px;
          color: #0f2d5c;
          font-size: 16.8px;
          font-weight: 600;
          font-family: Montserrat, sans-serif;
        }

        .bottom-content p {
          margin: 0;
          color: #475569;
          font-size: 13.28px;
          line-height: 21.5px;
          font-family: Montserrat, sans-serif;
          max-width: 942px;
        }

        @media (max-width: 1280px) {
          .tributos-wrap {
            transform: scale(0.92);
            transform-origin: top center;
          }
        }
      `}</style>
    </>
  );
}