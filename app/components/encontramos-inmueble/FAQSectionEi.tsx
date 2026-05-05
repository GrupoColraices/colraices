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

export default function FAQSectionEi() 
{
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden border-b border-[#0F2D5C] bg-[#FBF8F3] px-4 py-[72px] font-['Montserrat'] sm:px-6 sm:py-[88px] lg:px-8">
      <div className="mx-auto w-full max-w-[1070px]">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_360px] lg:gap-[64px]">
          {/* FAQ LIST */}
          <div className="w-full">
            <div className="mb-[54px]">
              <span className="block text-[20px] font-bold italic leading-none text-[#FFC107]">
                Preguntas frecuentes
              </span>

              <h2 className="mt-3 text-[34px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F2D5C] sm:text-[40px] lg:text-[42px]">
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
                      className="flex w-full items-center justify-between gap-6 py-[19px] text-left"
                    >
                      <span className="text-[15px] font-medium leading-[1.45] tracking-[0.01em] text-[#0F2D5C] sm:text-[16px]">
                        {faq.question}
                      </span>

                      <span
                        className={[
                          "flex h-[24px] min-h-[24px] w-[24px] min-w-[24px] items-center justify-center rounded-full",
                          "border border-[#0F2D5C]/10 bg-white/30 text-[14px] font-medium leading-none text-[#0F2D5C]",
                          "transition-all duration-300 ease-out",
                          "group-hover:border-[#FFC107]/70 group-hover:bg-[#FFC107]/10 group-hover:text-[#0F2D5C]",
                          isOpen
                            ? "rotate-45 border-[#FFC107]/80 bg-[#FFC107]/15"
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
                        <p className="max-w-[620px] pb-[20px] pr-10 text-[14px] font-normal leading-[1.75] text-[#475569]">
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
          <aside className="relative mx-auto flex min-h-[430px] w-full max-w-[340px] flex-col items-center justify-center rounded-[20px] border border-[#0F2D5C]/10 bg-[#FBF8F3] px-8 py-10 text-center shadow-[0_24px_64px_rgba(15,45,92,0.03)] lg:mt-[16px] lg:min-h-[608px]">
            <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,193,7,0.06),transparent_42%)]" />

            <div className="relative z-10">
              <h3 className="text-[18px] font-bold leading-[1.25] text-[#0F2D5C]">
                Habla directamente
                <br />
                con un asesor
              </h3>

              <p className="mx-auto mt-8 max-w-[245px] text-[14px] font-normal leading-[1.55] text-[#64748B]">
                Te ayudamos a entender qué producto necesitas y cómo empezar.
                100% remoto. Sin compromiso.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex h-[44px] w-full min-w-[250px] items-center justify-center rounded-full bg-[#0F2D5C] px-8 text-[15px] font-bold text-white shadow-[0_14px_28px_rgba(15,45,92,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#091D3E] hover:shadow-[0_18px_36px_rgba(15,45,92,0.22)] active:translate-y-0"
              >
                Agendar llamada
              </a>

              <p className="mt-5 text-[12px] font-medium text-[#94A3B8]">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}