"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es exactamente Brújula Inmobiliaria?",
    answer:
      "Es un servicio de acompañamiento para analizar, validar y orientar tu compra inmobiliaria en Colombia, ayudándote a tomar decisiones con mayor seguridad desde el exterior.",
  },
  {
    question: "¿Cuánto cuesta y cómo se paga?",
    answer:
      "El servicio tiene un valor definido según el alcance contratado y se paga por etapas, ligado al avance real del proceso.",
  },
  {
    question: "¿Cómo sé que el inmueble es seguro para comprar?",
    answer:
      "Revisamos aspectos comerciales, jurídicos y documentales del inmueble para ayudarte a identificar riesgos antes de avanzar con la compra.",
  },
  {
    question: "¿Ustedes me representan legalmente en Colombia?",
    answer:
      "Te acompañamos en el proceso y, cuando se requiere representación formal, se estructura mediante los documentos y poderes correspondientes.",
  },
  {
    question: "¿Mi dinero está protegido?",
    answer:
      "El objetivo del servicio es ayudarte a reducir riesgos antes de comprometer recursos, validando la información clave del inmueble y del proceso.",
  },
];

export default function BrujulaFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative w-full overflow-hidden border-y border-[#0F2D5C] bg-[#FBF8F3] px-4 py-[72px] font-['Montserrat',system-ui,sans-serif] sm:px-6 lg:px-8 lg:py-[88px]">
      <div className="mx-auto grid w-full max-w-[1010px] items-start gap-10 lg:grid-cols-[1fr_320px] lg:gap-[56px]">
        {/* FAQ LIST */}
        <div className="w-full">
          <div className="mb-[56px]">
            <span className="block text-[18px] font-bold italic leading-none text-[#FFC107] sm:text-[20px]">
              Preguntas frecuentes
            </span>

            <h2 className="mt-3 text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0F2D5C] sm:text-[42px] lg:text-[44px]">
              Todo lo que necesitas saber.
            </h2>
          </div>

          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#0F2D5C]/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center justify-between gap-6 py-[21px] text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-medium leading-[1.4] tracking-[0.01em] text-[#0F2D5C] transition-colors duration-300 group-hover:text-[#091D3E] sm:text-[17px]">
                      {faq.question}
                    </span>

                    <span
                      className={[
                        "grid h-[25px] w-[25px] shrink-0 place-items-center rounded-full",
                        "border border-[#0F2D5C]/12 bg-[#FBF8F3]",
                        "text-[15px] font-medium leading-none text-[#0F2D5C]",
                        "transition-all duration-300 ease-out",
                        "group-hover:border-[#0F2D5C]/25 group-hover:bg-white group-hover:shadow-[0_8px_22px_rgba(15,45,92,0.08)]",
                        isOpen ? "rotate-45 bg-white shadow-sm" : "rotate-0",
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
                      <p className="max-w-[620px] pb-6 pr-10 text-[14px] font-normal leading-[1.75] text-[#64748B] sm:text-[15px]">
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
        <aside className="flex min-h-[390px] w-full flex-col items-center justify-center rounded-[18px] border border-[#0F2D5C]/10 bg-[#FBF8F3] px-7 py-10 text-center shadow-[0_1px_2px_rgba(15,45,92,0.03)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#0F2D5C]/15 hover:shadow-[0_22px_55px_rgba(15,45,92,0.10)] sm:px-9 lg:min-h-[446px]">
          <h3 className="text-[18px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F2D5C]">
            Habla directamente
            <br />
            con un asesor
          </h3>

          <p className="mt-[18px] max-w-[250px] text-[15px] font-normal leading-[1.45] text-[#64748B]">
            Te ayudamos a entender el proceso completo y resolver todas tus
            dudas. 100% remoto. Sin compromiso.
          </p>

          <a
            href="#"
            className="mt-[22px] inline-flex h-[44px] w-full max-w-[262px] items-center justify-center rounded-full bg-[#0F2D5C] px-6 text-[15px] font-bold text-white shadow-[0_14px_28px_rgba(15,45,92,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#091D3E] hover:shadow-[0_18px_36px_rgba(15,45,92,0.24)] active:translate-y-0"
          >
            Agendar llamada
          </a>

          <div className="mt-[19px] text-[12px] font-semibold text-[#94A3B8]">
            Respuesta en menos de 24 horas
          </div>
        </aside>
      </div>
    </section>
  );
}