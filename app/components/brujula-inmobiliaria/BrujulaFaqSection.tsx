"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Para quién es este servicio?",
    answer:
      "Está pensado para colombianos en el exterior que quieren invertir en vivienda en Colombia, pero no tienen el tiempo, la red o la tranquilidad para hacerlo solos.",
  },
  {
    question: "¿Qué no incluye el servicio?",
    answer:
      "No incluye la negociación final, la promesa de compraventa ni los trámites legales o de crédito. Esos pasos se activan después con otros servicios del ecosistema.",
  },
  {
    question: "¿Cuánto tiempo toma?",
    answer:
      "Normalmente entre 30 y 60 días. Las primeras opciones suelen llegar en los primeros 10 días hábiles.",
  },
  {
    question: "¿Qué pasa si ya encontré un inmueble?",
    answer:
      "En ese caso no necesitas este servicio. Te acompañamos con otro producto del ecosistema que se enfoca en proteger y gestionar la compra.",
  },
  {
    question: "¿Cómo sé que las opciones son confiables?",
    answer:
      "Cada inmueble pasa por un filtro comercial y una revisión legal inicial antes de llegar a ti, para que no pierdas tiempo ni asumas riesgos innecesarios.",
  },
  {
    question: "¿Ustedes de qué lado están?",
    answer:
      "Estamos de tu lado. Nuestro rol es representarte a ti como comprador, no al vendedor.",
  },
  {
    question: "¿Puedo empezar si aún no sé qué comprar?",
    answer:
      "Sí. De hecho, muchos clientes empiezan así. Te ayudamos a ordenar ideas y definir qué tipo de inversión tiene más sentido para ti.",
  },
  {
    question: "¿Necesito viajar a Colombia?",
    answer:
      "No. Puedes hacer todo el proceso desde el exterior. Nosotros somos tus ojos y tu respaldo aquí.",
  },
];

export default function FAQSectionEi() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden border-y-2 border-[#0F2D5C] bg-[#FBF8F3] px-4 py-[72px] font-['Montserrat',system-ui,sans-serif] sm:px-6 lg:px-8 lg:py-[88px]">
      <div className="mx-auto w-full max-w-[1008px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px] lg:gap-[56px]">
          {/* FAQ LIST */}
          <div className="w-full">
            <div className="mb-[62px] text-left">
              <span className="block text-[20px] font-bold italic leading-none text-[#FFC107]">
                Preguntas frecuentes
              </span>

              <h2 className="mt-[8px] text-[34px] font-bold leading-[1.18] tracking-[-0.035em] text-[#0F2D5C] sm:text-[38px] lg:text-[40px]">
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
                      className="flex w-full items-center justify-between gap-5 py-[21px] text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15.5px] font-medium leading-[1.45] tracking-[0.01em] text-[#0F2D5C] transition-colors duration-300 group-hover:text-[#1A4F9E] sm:text-[16px]">
                        {faq.question}
                      </span>

                      <span
                        className={[
                          "flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full",
                          "border border-[#0F2D5C]/10 bg-[#FBF8F3] text-[15px] font-normal leading-none text-[#0F2D5C]",
                          "transition-all duration-300 ease-out",
                          "group-hover:border-[#FFC107]/70 group-hover:bg-white group-hover:shadow-[0_8px_22px_rgba(15,45,92,0.08)]",
                          isOpen
                            ? "rotate-45 border-[#FFC107]/80 bg-white shadow-[0_8px_22px_rgba(15,45,92,0.08)]"
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
                        <p className="max-w-[620px] pb-[22px] pr-10 text-[14.5px] font-normal leading-[1.75] text-[#475569]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTACT CARD */}
          <aside className="relative mx-auto flex min-h-[448px] w-full max-w-[320px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-[#0F2D5C]/10 bg-[#FBF8F3] px-[28px] py-10 text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#0F2D5C]/15 hover:bg-white/55 hover:shadow-[0_24px_64px_rgba(15,45,92,0.12)] lg:mx-0 lg:mt-[2px]">
            <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,193,7,0.045),transparent_44%)]" />

            <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC107]/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <h3 className="text-[17px] font-bold leading-[1.28] tracking-[-0.015em] text-[#0F2D5C]">
                Habla directamente
                <br />
                con un asesor
              </h3>

              <p className="mx-auto mt-[14px] max-w-[245px] text-[13.5px] font-normal leading-[1.55] text-[#64748B]">
                Te ayudamos a entender el proceso completo y resolver todas tus
                dudas. 100% remoto. Sin compromiso.
              </p>

              <a
                href="#"
                className="mt-[20px] inline-flex h-[44px] w-full max-w-[262px] items-center justify-center rounded-full bg-[#0F2D5C] px-8 text-[14.5px] font-bold text-white shadow-[0_12px_28px_rgba(15,45,92,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#091D3E] hover:shadow-[0_18px_36px_rgba(15,45,92,0.24)] active:translate-y-0"
              >
                Agendar llamada
              </a>

              <p className="mt-[20px] text-[12.5px] font-medium leading-none text-[#94A3B8]">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}