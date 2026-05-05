"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es exactamente Brújula Inmobiliaria?",
    answer:
      "Es un servicio de acompañamiento estratégico para colombianos en el exterior que quieren comprar vivienda en Colombia con respaldo, análisis y representación local.",
  },
  {
    question: "¿Cuánto cuesta y cómo se paga?",
    answer:
      "El valor depende del tipo de acompañamiento que necesites. Te explicamos todo desde el inicio, sin costos ocultos y con opciones de pago claras.",
  },
  {
    question: "¿Cómo sé que el inmueble es seguro para comprar?",
    answer:
      "Cada propiedad pasa por validaciones comerciales y legales preliminares para ayudarte a evitar riesgos antes de avanzar en el proceso.",
  },
  {
    question: "¿Ustedes me representan legalmente en Colombia?",
    answer:
      "Sí. Podemos acompañarte y representarte durante diferentes etapas del proceso mediante herramientas legales y operativas adaptadas para clientes en el exterior.",
  },
  {
    question: "¿Mi dinero está protegido?",
    answer:
      "Nuestro proceso busca darte trazabilidad, validación y acompañamiento antes de cualquier movimiento importante para reducir riesgos y darte tranquilidad.",
  },
];

export default function FAQSectionBrujula() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden border-y border-[#0F2D5C] bg-[#F7F5F1] px-4 py-[86px] font-['Montserrat'] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1030px]">
        <div className="grid items-start gap-[58px] lg:grid-cols-[1fr_320px]">
          
          {/* LEFT SIDE */}
          <div className="w-full">
            <div className="mb-[54px]">
              <span className="block text-[20px] font-bold italic leading-none text-[#FFC107]">
                Preguntas frecuentes
              </span>

              <h2 className="mt-3 text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0F2D5C] sm:text-[42px]">
                Todo lo que necesitas saber.
              </h2>
            </div>

            <div className="w-full">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="group border-b border-[#0F2D5C]/10"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-[24px] text-left"
                    >
                      <span className="text-[15px] font-medium leading-[1.45] tracking-[0.01em] text-[#0F2D5C] sm:text-[16px]">
                        {faq.question}
                      </span>

                      <span
                        className={[
                          "flex h-[28px] min-h-[28px] w-[28px] min-w-[28px] items-center justify-center rounded-full",
                          "border border-[#D7D7D7] bg-white text-[15px] font-medium leading-none text-[#0F2D5C]",
                          "transition-all duration-300 ease-out",
                          "group-hover:border-[#FFC107]/80 group-hover:bg-[#FFC107]/10",
                          isOpen
                            ? "rotate-45 border-[#FFC107] bg-[#FFC107]/15"
                            : "rotate-0",
                        ].join(" ")}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={[
                        "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        <p className="max-w-[640px] pb-[24px] pr-10 text-[14px] leading-[1.8] text-[#64748B]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CARD */}
          <aside className="relative mx-auto flex min-h-[445px] w-full max-w-[290px] flex-col items-center justify-center rounded-[22px] border border-[#DADADA] bg-[#F7F5F1] px-8 py-10 text-center">

            <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_50%_30%,rgba(255,193,7,0.05),transparent_45%)]" />

            <div className="relative z-10">
              <h3 className="text-[18px] font-bold leading-[1.25] text-[#0F2D5C]">
                Habla directamente
                <br />
                con un asesor
              </h3>

              <p className="mx-auto mt-5 max-w-[230px] text-[14px] leading-[1.7] text-[#7C8798]">
                Te ayudamos a entender el proceso completo y resolver todas tus dudas.
                100% remoto. Sin compromiso.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex h-[44px] min-w-[262px] items-center justify-center rounded-full bg-[#12356D] px-8 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(18,53,109,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0F2D5C] hover:shadow-[0_18px_34px_rgba(18,53,109,0.22)]"
              >
                Agendar llamada
              </a>

              <p className="mt-6 text-[12px] font-medium text-[#A0AEC0]">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}