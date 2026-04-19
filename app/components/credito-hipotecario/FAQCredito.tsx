"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Tengo que viajar a Colombia para solicitar el crédito?",
    answer:
      "No. Todo el proceso es 100% remoto. Desde la verificación de viabilidad hasta la firma, todo se hace desde el exterior.",
  },
  {
    question: "¿Cuánto tiempo lleva el proceso completo?",
    answer:
      "Depende de qué tan rápido reúnas los documentos. En promedio, desde la verificación de viabilidad hasta el desembolso: 45–60 días.",
  },
  {
    question:
      "¿Qué pasa si mi historial crediticio en Colombia no está limpio?",
    answer:
      'El banco revisa tu historial. Si hay reportes negativos, es muy difícil que aprueban el crédito. Recomendamos primero resolver esos bloqueos con nuestro producto "Buena Data".',
  },
  {
    question: "¿Puedo comprar vivienda usada o solo nueva?",
    answer:
      "Ambas. El crédito hipotecario con Davivienda funciona tanto para vivienda nueva como usada.",
  },
  {
    question: "¿Cómo se calcula la cuota mensual?",
    answer:
      "Depende del monto, el plazo y la tasa. Como referencia: un crédito de COP $200 millones a 20 años con tasa del 18% E.A. genera una cuota aproximada de COP $3 millones mensuales. Te damos la simulación exacta en la verificación de viabilidad.",
  },
  {
    question: "¿Colraices cobra alguna comisión adicional?",
    answer:
      "No. Somos bróker autorizado de Davivienda. El banco nos paga una comisión, no tú. Tu única obligación financiera es con el banco: la cuota inicial y el crédito.",
  },
];

export default function FAQCredito() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#FBF8F3",
        paddingTop: "55px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          width: "1180px",
          display: "flex",
          gap: "64px",
          alignItems: "stretch", // 🔥 clave para que la card tome toda la altura
        }}
      >
        {/* LEFT */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "italic",
              fontSize: "20px",
              color: "#0F2D5C",
              marginBottom: "8px",
            }}
          >
            Preguntas frecuentes
          </p>

          <h2
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "35.86px",
              lineHeight: "43px",
              color: "#0F2D5C",
              marginBottom: "40px",
              maxWidth: "540px",
            }}
          >
            Todo lo que necesitas saber sobre el crédito.
          </h2>

          <div>
            {faqs.map((faq, i) => {
              const active = open === i;

              return (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid #FBF8F3",
                    padding: "18px 0",
                  }}
                >
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#0F2D5C",
                        textAlign: "left",
                      }}
                    >
                      {faq.question}
                    </span>

                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        background: active ? "#FFC107" : "transparent",
                        border: active
                          ? "1px solid #FFC107"
                          : "1px solid #D9D9D9",
                        color: active ? "#fff" : "#0F2D5C",
                      }}
                    >
                      {active ? "−" : "+"}
                    </div>
                  </button>

                  {active && (
                    <p
                      style={{
                        marginTop: "12px",
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#6B7280",
                        maxWidth: "520px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          style={{
            width: "320px",
            borderRadius: "20px",
            border: "1px solid #E5E7EB",
            padding: "32px 24px",
            background: "#FBF8F3",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // 🔥 centra vertical
            alignItems: "center",
            textAlign: "center",

            height: "100%", // 🔥 toma altura del contenedor padre
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#0F2D5C",
              marginBottom: "12px",
            }}
          >
            Habla directamente con un asesor
          </h3>

          <p
            style={{
              fontSize: "13px",
              color: "#6B7280",
              lineHeight: "20px",
              marginBottom: "24px",
              maxWidth: "240px",
            }}
          >
            Te explicamos todo en detalle: requisitos, tasas, plazos,
            documentación. 100% remoto. Sin compromiso.
          </p>

          <button
            style={{
              width: "100%",
              background: "#0F2D5C",
              color: "#fff",
              padding: "14px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 6px 14px rgba(15,45,92,0.2)",
            }}
          >
            Agendar llamada
          </button>

          <p
            style={{
              fontSize: "12px",
              color: "#9CA3AF",
              marginTop: "12px",
            }}
          >
            Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}