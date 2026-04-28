"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿La Brújula Crediticia es lo mismo que el Pre-aprobado del proceso de Crédito?",
    answer:
      "No. Son dos cosas distintas. La Brújula Crediticia es un servicio de evaluación que analiza tu perfil y te entrega un diagnóstico con estimación — pero no emite una carta de pre-aprobado del banco. El Pre-aprobado del proceso de Crédito sí implica documentación completa y una respuesta formal de la entidad bancaria.",
  },
  {
    question: "¿Si la Brújula Crediticia dice que no califico, puedo pedir el dinero de vuelta?",
    answer:
      "La Brújula Crediticia no garantiza aprobación — garantiza un diagnóstico honesto. Si el resultado es que hoy no calificas, eso es exactamente la información que pagaste: sabes la verdad antes de comprometer más recursos. El plan de acción te dice qué necesitas para llegar al sí.",
  },
  {
    question: "¿En qué se diferencia de la Brújula Financiera?",
    answer:
      "La Brújula Financiera es un diagnóstico general de tu salud financiera. La Brújula Crediticia va un paso más allá: analiza específicamente si puedes pedir crédito, lo marca con el banco y te da una estimación del cupo. Una orienta tu situación general, la otra prepara para una decisión concreta de crédito.",
  },
  {
    question: "¿La marcación bancaria afecta mi historial crediticio?",
    answer:
      "La marcación que se realiza es interna — se registra en el sistema de gestión del aliado bancario sin radicar documentación ni generar una consulta formal que aparezca en centrales de riesgo. Tu historial no se ve afectado por este proceso.",
  },
  {
    question: "¿Puedo contratar la Brújula Crediticia si ya tengo el inmueble definido?",
    answer:
      "Sí, aunque si ya tienes el inmueble definido y tu perfil parece sólido, es posible que tengas sentido ir directo al proceso de Pre-aprobado de Crédito. Un asesor Colraices te ayuda a evaluar cuál de los dos caminos tiene más sentido para tu situación específica.",
  },
];

export default function FAQSectionBc() {
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
            Lo que preguntan antes de contratar.
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
              ¿No estás seguro de si es la Brújula Crediticia o el Crédito lo que necesitas?
            </h3>

            <p className="text-[13px] text-[#475569] leading-[21px]">
              Es la pregunta más frecuente. Un asesor te explica la diferencia en dos minutos.
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
              Hablar con un asesor →
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