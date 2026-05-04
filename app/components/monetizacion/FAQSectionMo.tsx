"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Puedo usar Monetización para montos menores a USD $10.000?",
    answer:
      "No. Monetización está diseñada exclusivamente para transferencias desde USD $10.000 en adelante. Para montos menores, recomendamos usar servicios de giro tradicionales como Remitly, Western Union o transferencias bancarias directas, que suelen ser más eficientes y económicos para cantidades pequeñas.",
  },
  {
    question: "¿El 1% incluye todas las comisiones?",
    answer:
      "El 1% cubre la gestión completa de Colraices: asesoría, negociación en mesa de dinero, legalización ante BanRep y acompañamiento. Sin embargo, las comisiones de bancos intermediarios (banco emisor en el exterior, bancos corresponsales, etc.) son responsabilidad del cliente. Colraices te informa de estos costos adicionales estimados durante la cotización inicial.",
  },
  {
    question: "¿Cuánto tiempo demora todo el proceso?",
    answer:
      "Máximo 5 días hábiles desde que recibes la confirmación de tasa bloqueada hasta que los fondos llegan a la cuenta de destino en Colombia. El tiempo puede variar si el banco emisor en el exterior retiene la transferencia para revisión de cumplimiento o si hay documentación incompleta.",
  },
  {
    question: "¿Puedo transferir dinero desde cualquier país?",
    answer:
      "Sí, siempre que el país de origen no esté en listas restrictivas de Colombia o bajo sanciones internacionales. Durante la consulta inicial, tu asesor validará que el origen de los fondos sea compatible con la normativa colombiana de cambio internacional.",
  },
  {
    question: "¿Qué pasa si me arrepiento después de contratar?",
    answer:
      "Si decides cancelar antes de realizar la transferencia internacional, no hay penalidad. Si ya transferiste y el proceso está en curso, Colraices puede devolver los fondos descontando únicamente los costos reales ya incurridos (comisiones bancarias, gastos de legalización parcial, etc.). La transparencia es total.",
  },
    {
    question: "¿Monetización me ayuda con temas tributarios en Colombia?",
    answer:
      "No. Monetización se centra exclusivamente en la transferencia y legalización de divisas. Para consultas sobre declaración de renta, impuestos o tratamiento tributario de los fondos en Colombia, debes consultar con un contador o asesor tributario independiente.",
  },
  {
    question: "¿Puedo transferir dinero a nombre de otra persona?",
    answer:
      "Sí, pero con condiciones. La transferencia debe cumplir con la normativa de cambio internacional de Colombia, que exige documentación que justifique la operación (por ejemplo, contrato de compraventa, préstamo formalizado, donación con soporte legal, etc.). Tu asesor evaluará tu caso durante la consulta inicial.",
  },
];

export default function FAQSectionMo() {
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
            Las dudas más comunes sobre Monetización.
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
          <div className="w-full lg:w-[320px] bg-[#FBF8F3] rounded-[20px] p-[28px] flex flex-col items-center justify-center text-center gap-5 min-h-[340px]">

            <h3 className="text-[16px] font-semibold text-[#0F2D5C]">
              Habla directamente con un asesor
            </h3>

            <p className="text-[13px] text-[#475569] leading-[21px]">
              Te ayudamos a entender qué producto necesitas y cómo empezar. 100% remoto. Sin compromiso.
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
              Agendar llamada
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