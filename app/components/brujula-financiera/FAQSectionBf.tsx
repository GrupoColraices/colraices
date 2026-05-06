"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿En qué se diferencia la Brújula Financiera de la Brújula Crediticia?",
    answer:
      "La Brújula Financiera es un diagnóstico general de tu salud financiera — te dice cómo estás y qué hacer. La Brújula Crediticia va un paso más allá: analiza específicamente si puedes pedir crédito, lo marca con el banco y te da un plan para llegar al sí. Una orienta, la otra prepara para una decisión concreta.",
  },
  {
    question: "¿La Brújula Financiera accede a mis datos directamente?",
    answer:
      "Colraices trabaja con la información que tú decides compartir. El análisis se hace con lo que nos proporcionas — no se accede a ningún sistema sin tu autorización explícita.",
  },
  {
    question: "¿Qué pasa si después del diagnóstico necesito que Colraices actúe por mí?",
    answer:
      "El plan de acción te indica exactamente qué hacer. Si necesitas que Colraices ejecute las acciones — por ejemplo, resolver un reporte negativo — puedes contratar Buena Data de forma complementaria. Tu asesor te explica cómo se integran los dos servicios.",
  },
  {
    question: "¿Puedo pagar en euros?",
    answer:
      "Sí. Los clientes en Europa pagan en euros. Los de América, en dólares. Tu asesor Colraices te confirma las opciones según tu país de residencia.",
  },
  {
    question: "¿Tengo que tener cédula colombiana vigente?",
    answer:
      "Para consultar el historial crediticio en Colombia sí es necesaria la cédula colombiana. Si tienes dudas sobre tu situación documental, cuéntaselo a tu asesor antes de contratar.",
  },
];

export default function FAQSectionBuenaD() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <section className="relative z-10 flex w-full justify-center bg-[#FFFFFF] px-4 pt-[88px] pb-[120px] md:px-8">
      <div className="flex w-full max-w-[1180px] flex-col gap-[40px]">

        {/* HEADER */}
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
          <span className="text-[20px] text-[#0A0A0A]">
            Preguntas frecuentes
          </span>

          <h2 className="mx-auto max-w-[980px] text-[28px] leading-[1.15] font-semibold text-[#0F2D5C] md:text-[36px]">
            Lo que suelen preguntar antes de contratar.
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-[40px] lg:flex-row">

          {/* FAQ LIST */}
          <div className="w-full border-t border-[#0F2D5C1A] lg:w-[708px]">
            {faqs.map((faq, i) => {
              const active = openIndex === i;
              const isHighlighted = active || hovered === i;

              return (
                <div key={i} className="border-b border-[#0F2D5C1A]">
                  <button
                    onClick={() => setOpenIndex(active ? null : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="flex w-full items-start justify-between gap-4 py-[20px] text-left"
                  >
                    <span className="text-[15px] leading-[21.3px] text-[#0F2D5C]">
                      {faq.question}
                    </span>

                    <div
                      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-[13.6px] transition-all duration-200"
                      style={{
                        background: isHighlighted ? "#F5B400" : "#FBF8F3",
                        border: "0.8px solid #0F2D5C1A",
                        color: isHighlighted ? "#FFFFFF" : "#0F2D5C",
                      }}
                    >
                      {active ? "−" : "+"}
                    </div>
                  </button>

                  {active && (
                    <p className="pb-[20px] pr-4 text-[14px] leading-[21px] text-[#475569]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT CARD */}
          <div className="flex w-full flex-col items-center gap-5 rounded-[20px] bg-[#FBF8F3] p-[28px] text-center lg:w-[320px]">
            <h3 className="text-[16px] font-semibold text-[#0F2D5C]">
              ¿Tienes una pregunta que no está aquí?
            </h3>

            <p className="text-[13px] leading-[21px] text-[#475569]">
              Escríbenos. Un asesor Colraices te responde antes de que tengas que decidir nada.
            </p>

            <button
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "999px",
                background: hoveredBtn ? "#071A3A" : "#0F2D5C",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "background 0.25s ease",
              }}
            >
              Hacer una pregunta →
            </button>

            <span className="text-[11.5px] text-[#94A3B8]">
              Sin compromiso · Respuesta en menos de 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}