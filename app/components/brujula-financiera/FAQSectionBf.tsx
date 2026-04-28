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
    <section className="w-full bg-[#FFFFFF] flex justify-center px-4 md:px-8 pt-[88px] pb-[120px] relative z-10">
      <div className="w-full max-w-[1180px] flex flex-col gap-[40px]">

        {/* HEADER */}
        <div className="text-left flex flex-col gap-2">
          <span className="text-[20px] text-[#0A0A0A]">
            Preguntas frecuentes
          </span>

          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0F2D5C]">
            Las dudas más comunes sobre Buena Data.
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-[40px]">

          {/* FAQ LIST */}
          <div className="w-full lg:w-[708px] border-t border-[#0F2D5C1A]">
            {faqs.map((faq, i) => {
              const active = openIndex === i;
              const isHighlighted = active || hovered === i;

              return (
                <div key={i} className="border-b border-[#0F2D5C1A]">
                  <button
                    onClick={() => setOpenIndex(active ? null : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="w-full flex justify-between items-start gap-4 py-[20px] text-left"
                  >
                    <span className="text-[15px] text-[#0F2D5C] leading-[21.3px]">
                      {faq.question}
                    </span>

                    <div
                      className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[13.6px] transition-all duration-200"
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
                    <p className="text-[14px] text-[#475569] leading-[21px] pb-[20px] pr-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT CARD */}
          <div className="w-full lg:w-[320px] bg-[#FBF8F3] rounded-[20px] p-[28px] flex flex-col items-center text-center gap-5">

            <h3 className="text-[16px] font-semibold text-[#0F2D5C]">
              ¿Tienes una pregunta que no está aquí?
            </h3>

            <p className="text-[13px] text-[#475569] leading-[21px]">
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