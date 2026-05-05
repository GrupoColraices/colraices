import React from "react";

const applicableItems = [
  {
    icon: "📝",
    text: "Tienes una fecha de escritura definida y estás fuera de Colombia.",
  },
  {
    icon: "🏠",
    text: "Estás comprando o vendiendo un inmueble y no puedes viajar para firmar.",
  },
  {
    icon: "⏰",
    text: "No quieres arriesgar el cierre aplazando la firma.",
  },
  {
    icon: "🛡️",
    text: "Prefieres que un profesional jurídico revise la escritura antes de que se firme.",
  },
  {
    icon: "🗺️",
    text: "La notaría está en Bogotá, Medellín, Cali, Ibagué, Armenia, Cartagena o Barranquilla.",
  },
];

const notApplicableItems = [
  {
    icon: "🚫",
    text: "Aún no hay escritura ni fecha pactada. Este servicio es para actos concretos, no para gestiones exploratorias.",
  },
  {
    icon: "📋",
    text: "Buscas un poder amplio para gestionar múltiples asuntos. Colraices solo usa poderes especiales.",
  },
  {
    icon: "⚖️",
    text: "El acto requiere asesoría legal completa (litigios, sucesiones complejas, etc.). Este servicio es representación de firma, no litigio.",
  },
];

export default function WhenSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-[88px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,144,12,0.08),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(26,79,158,0.08),transparent_35%)]" />

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-[52px]">
        <header className="flex animate-[fade-up_.8s_ease-out] flex-col items-center gap-3 text-center">
          <div className="text-[16px] font-semibold uppercase leading-[16.8px] tracking-[1.57px] text-[#C9900C]">PERFILAMIENTO</div>
          <h2 className="font-[var(--repl-font-display)] text-[35.86px] font-semibold leading-[43px] tracking-[0px] text-[#0F2D5C]">
            ¿Cuándo <em className="not-italic text-[#1A4F9E]">tiene sentido</em> este servicio?
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="group min-h-[362px] animate-[fade-up_.95s_ease-out] rounded-[32px] border border-[rgba(15,45,92,0.1)] bg-[#FBF8F3] p-[32px] shadow-[0_8px_30px_rgba(15,45,92,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,45,92,0.14)]">
            <div className="mb-[20px] flex items-center gap-[12px]">
              <span className="grid h-[24px] w-[24px] place-items-center rounded-full bg-[#C9900C] text-base font-bold leading-none text-white transition-transform duration-500 group-hover:scale-110">
                ✓
              </span>
              <h3 className="text-[15.2px] font-bold leading-[22.8px] text-[#0F2D5C]">Aplica perfectamente si...</h3>
            </div>

            <ul className="space-y-[11px]">
              {applicableItems.map((item, index) => (
                <li
                  key={item.text}
                  className="flex items-start gap-[12px] text-[14.4px] leading-[21.6px] text-[#475569] opacity-0 animate-[fade-up_.6s_ease-out_forwards]"
                  style={{ animationDelay: `${160 + index * 95}ms` }}
                >
                  <span className="mt-[1px] shrink-0 leading-none transition-transform duration-500 group-hover:scale-110">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group min-h-[362px] animate-[fade-up_1.05s_ease-out] rounded-[32px] border border-[rgba(15,45,92,0.1)] bg-[#ffffff] p-[32px] shadow-[0_8px_30px_rgba(15,45,92,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,45,92,0.12)]">
            <div className="mb-[20px] flex items-center gap-[12px]">
              <span className="grid h-[24px] w-[24px] place-items-center rounded-full bg-[#F3EDE3] text-base font-bold leading-none text-[#475569] transition-transform duration-500 group-hover:scale-110">
                →
              </span>
              <h3 className="text-[15.2px] font-bold leading-[22.8px] text-[#0F2D5C]">No aplica si...</h3>
            </div>

            <ul className="space-y-[11px]">
              {notApplicableItems.map((item, index) => (
                <li
                  key={item.text}
                  className="flex items-start gap-[12px] text-[14.4px] leading-[21.6px] text-[#94A3B8] opacity-0 animate-[fade-up_.6s_ease-out_forwards]"
                  style={{ animationDelay: `${220 + index * 95}ms` }}
                >
                  <span className="mt-[1px] shrink-0 leading-none transition-transform duration-500 group-hover:scale-110">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}