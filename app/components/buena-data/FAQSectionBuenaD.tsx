"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Puedo contratar Buena Data si vivo fuera de Colombia?",
    answer:
      "Sí. De hecho, Buena Data está diseñado específicamente para colombianos en el exterior que no pueden gestionar sus problemas financieros en Colombia de forma presencial. Todo el proceso se hace de forma remota.",
  },
  {
    question: "¿Garantizan que van a eliminar todos mis reportes?",
    answer:
      "No. Si el reporte es legítimo (la deuda es real y está vigente), es muy difícil eliminarlo completamente. Lo que sí garantizamos es negociar, saldar la deuda y actualizar el estado en las centrales de riesgo. Si hay errores o casos de fraude demostrable, gestionamos la corrección o eliminación.",
  },
  {
    question: "¿Cuánto tiempo demora todo el proceso?",
    answer:
      "Entre 30 y 90 días desde el inicio hasta el cierre completo. El tiempo depende de la complejidad del caso, la cantidad de deudas o reportes, y el tiempo de respuesta de las entidades involucradas.",
  },
  {
    question: "¿El precio incluye el pago de las deudas?",
    answer:
      "No. Los USD $290 cubren la gestión, negociación y trámites legales. El pago directo de las deudas, multas o saldos pendientes lo asume el cliente de acuerdo con lo negociado. Colraices coordina los desembolsos y valida que todo quede correctamente registrado.",
  },
  {
    question: "¿Qué pasa si mi caso no tiene solución legal?",
    answer:
      "Durante la Fase 1 (Diagnóstico), analizamos la viabilidad jurídica del caso. Si determinamos que no hay base legal para actuar (por ejemplo, una deuda prescrita que no puede cobrarse pero tampoco eliminarse), te lo informamos con total transparencia y te devolvemos el dinero descontando únicamente los costos ya incurridos en el diagnóstico.",
  },
  {
    question: "¿Puedo contratar Buena Data si tengo un caso de suplantación de identidad?",
    answer:
      "Sí. De hecho, es uno de los casos más comunes que gestionamos. Si alguien usó tu cédula para contraer deudas que no son tuyas, Colraices gestiona la denuncia formal, radica las peticiones de corrección y coordina todo el proceso legal para limpiar tu nombre.",
  },
  {
    question: "¿Necesito viajar a Colombia en algún momento del proceso?",
    answer:
      "No. Todo el proceso se gestiona de forma remota. Solo necesitas otorgar un poder notarial (que puede hacerse en el consulado colombiano de tu ciudad) para que Colraices actúe en tu nombre.",
  },
];

export default function FAQSectionBuenaD() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <>
      <style>{`
        .faqbd-section {
          width: 100%;
          background: #FFFFFF;
          display: flex;
          justify-content: center;
          padding: 88px 48px 88px;
          box-sizing: border-box;
        }

        .faqbd-inner {
          width: 100%;
          max-width: 1180px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* ── HEADER ── */
        .faqbd-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .faqbd-label {
          font-family: Montserrat, sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #0A0A0A;
          margin: 0;
        }

        .faqbd-heading {
          font-family: Montserrat, sans-serif;
          font-weight: 600;
          font-size: 35.86px;
          line-height: 43.01px;
          color: #0F2D5C;
          margin: 0;
        }

        /* ── CONTENT ROW ── */
        .faqbd-content {
          width: 100%;
          display: flex;
          flex-direction: row;
          gap: 152px;
          align-items: stretch;
        }

        /* ── FAQ LIST ── */
        .faqbd-list {
          flex: 1;
          min-width: 0;
          border-top: 0.8px solid rgba(15, 45, 92, 0.1);
        }

        .faqbd-item {
          border-bottom: 0.8px solid rgba(15, 45, 92, 0.1);
          display: flex;
          flex-direction: column;
        }

        .faqbd-item-btn {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          padding: 19.96px 0;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          box-sizing: border-box;
        }

        .faqbd-question {
          font-family: Montserrat, sans-serif;
          font-weight: 500;
          font-size: 15.2px;
          line-height: 21.3px;
          color: #0F2D5C;
          flex: 1;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          white-space: normal;
        }

        .faqbd-toggle {
          width: 26px;
          height: 26px;
          min-width: 26px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Montserrat, sans-serif;
          font-weight: 400;
          font-size: 13.6px;
          line-height: 20.4px;
          flex-shrink: 0;
          margin-top: calc((21.3px - 26px) / 2);
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .faqbd-answer {
          font-family: Montserrat, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #475569;
          margin: 0;
          padding-bottom: 19.96px;
        }

        /* ── RIGHT CARD ── */
        .faqbd-card {
          width: 320px;
          flex-shrink: 0;
          background: #FBF8F3;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 28.8px;
          box-sizing: border-box;
        }

        .faqbd-card-title {
          font-family: Montserrat, sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 21.6px;
          color: #0F2D5C;
          margin: 0 0 8.83px;
        }

        .faqbd-card-desc {
          font-family: Montserrat, sans-serif;
          font-weight: 400;
          font-size: 13.12px;
          line-height: 21px;
          color: #475569;
          margin: 0 0 18px;
          width: 100%;
        }

        .faqbd-card-cta {
          width: 100%;
          height: 45px;
          border-radius: 100px;
          font-family: Montserrat, sans-serif;
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          color: #FFFFFF;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, box-shadow 0.3s ease;
        }

        .faqbd-card-note {
          font-family: Montserrat, sans-serif;
          font-weight: 400;
          font-size: 11.52px;
          line-height: 17.28px;
          color: #94A3B8;
          margin: 20px 0 0;
        }

        /* ── TABLET (≤ 1024px) ── */
        @media (max-width: 1024px) {
          .faqbd-content {
            flex-direction: column;
            gap: 40px;
          }
          .faqbd-card {
            width: 100%;
            padding: 48px 32px;
          }
          .faqbd-heading {
            font-size: 28px;
            line-height: 36px;
          }
        }

        /* ── MOBILE (≤ 640px) ── */
        @media (max-width: 640px) {
          .faqbd-section {
            padding: 56px 20px 56px;
          }
          .faqbd-heading {
            font-size: 22px;
            line-height: 30px;
          }
          .faqbd-label {
            font-size: 14px;
          }
          .faqbd-card {
            padding: 40px 20px;
          }
        }
      `}</style>

      <section className="faqbd-section">
        <div className="faqbd-inner">

          {/* HEADER */}
          <div className="faqbd-header">
            <p className="faqbd-label">Preguntas frecuentes</p>
            <h2 className="faqbd-heading">Las dudas más comunes sobre Buena Data.</h2>
          </div>

          {/* CONTENT */}
          <div className="faqbd-content">

            {/* FAQ LIST */}
            <div className="faqbd-list">
              {faqs.map((faq, i) => {
                const active = openIndex === i;
                const highlighted = active || hovered === i;

                return (
                  <div key={i} className="faqbd-item">
                    <button
                      className="faqbd-item-btn"
                      onClick={() => setOpenIndex(active ? null : i)}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <span className="faqbd-question">{faq.question}</span>

                      <div
                        className="faqbd-toggle"
                        style={{
                          background: highlighted ? "#FFC107" : "#FBF8F3",
                          border: highlighted
                            ? "0.8px solid #FFC107"
                            : "0.8px solid rgba(15, 45, 92, 0.15)",
                          color: highlighted ? "#FFFFFF" : "#0F2D5C",
                        }}
                      >
                        {active ? "−" : "+"}
                      </div>
                    </button>

                    {active && (
                      <p className="faqbd-answer">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT CARD */}
            <div className="faqbd-card">
              <h3 className="faqbd-card-title">
                Habla directamente<br />con un asesor
              </h3>

              <p className="faqbd-card-desc">
                Te ayudamos a entender qué producto necesitas y cómo empezar. 100% remoto. Sin compromiso.
              </p>

              <button
                className="faqbd-card-cta"
                onMouseEnter={() => setHoveredBtn(true)}
                onMouseLeave={() => setHoveredBtn(false)}
                style={{
                  background: hoveredBtn ? "#071A3A" : "#0F2D5C",
                  boxShadow: hoveredBtn
                    ? "0 0 16px 5px rgba(255, 193, 7, 0.22)"
                    : "0 0 8px 2px rgba(255, 193, 7, 0.12)",
                }}
              >
                Agendar llamada
              </button>

              <p className="faqbd-card-note">Respuesta en menos de 24 horas</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}