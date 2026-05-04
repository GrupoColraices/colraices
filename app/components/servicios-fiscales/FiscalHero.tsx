"use client";

export default function FiscalHero() {
  return (
    <section className="relative w-full bg-[#FBF8F3] overflow-hidden">
      <style jsx>{`
        @keyframes pulseDotFloat {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateY(-3px);
            opacity: 0.85;
          }
        }

        .animate-pulse-dot {
          animation: pulseDotFloat 2s ease-in-out infinite;
        }
      `}</style>

      {/* Right background circles */}
      <div className="absolute right-[-260px] top-[170px] hidden xl:block pointer-events-none">
        <div className="relative w-[760px] h-[760px] rounded-full border border-[#0F2D5C]/4">
          <div className="absolute inset-[80px] rounded-full border border-[#0F2D5C]/4" />
          <div className="absolute inset-[160px] rounded-full border border-[#0F2D5C]/4" />
          <div className="absolute inset-[240px] rounded-full border border-[#0F2D5C]/4" />
          <div className="absolute inset-[320px] rounded-full border border-[#0F2D5C]/4" />
        </div>
      </div>

      {/* Main container */}
      <div className="max-w-[1180px] mx-auto pt-[60px] pb-[68px] pr-[96px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-[612px] mt-[80px] lg:mt-[142px] lg:ml-[52px]">

            {/* Headline block */}
            <div className="w-full max-w-[612px] mb-[20px]">
              <h1 className="font-semibold text-[#0F2D5C] text-[40px] sm:text-[48px] lg:text-[53.78px] leading-[1.12]">
                Saliste de Colombia.
              </h1>

              <h2 className="font-semibold italic text-[#1A4F9E] text-[34px] sm:text-[38px] lg:text-[40px] leading-[1.12]">
                Tus obligaciones <br />
                fiscales, no.
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-[460px] mb-[42px]">
              <p className="font-light text-[#475569] text-[16.8px] leading-[29.4px]">
                Muchos colombianos en el exterior creen que al irse dejaron
                de tener cuentas con el fisco colombiano. La mayoría se
                equivoca. En 3 días hábiles tendrás el resultado.
              </p>
            </div>

            {/* Buttons row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button className="h-[51.2px] px-[28px] rounded-full bg-[#FFC107] text-[#0F2D5C] font-semibold text-[14.4px] leading-[21.6px] whitespace-nowrap shadow-md hover:scale-[1.02] transition-all duration-300">
                Hacer diagnóstico gratuito →
              </button>

              <button className="h-[51.2px] px-[28px] rounded-full border border-[#0F2D5C]/25 text-[#0F2D5C] font-semibold text-[14.4px] leading-[21.6px] whitespace-nowrap hover:bg-[#0F2D5C]/5 transition-all duration-300">
                Ver qué resolvemos
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full max-w-[400px] min-h-[685.67px] rounded-[32px] bg-[#0F2D5C] px-[36px] pt-[36px] pb-[36px] mt-16 lg:mt-0 shadow-[0_30px_60px_rgba(15,45,92,0.18)]">

            {/* Badge */}
            <div className="inline-flex items-center gap-[6px] h-[28.4px] px-[14px] rounded-full bg-[#059669]/25 border border-[#10B981]/30 mb-[20px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#34D399] animate-pulse-dot" />
              <span className="uppercase text-[#FFC107] font-semibold text-[11.2px] tracking-[1.12px] leading-[16.8px]">
                Diagnóstico gratuito
              </span>
            </div>

            {/* Card title */}
            <div className="mb-[12px]">
              <h3 className="text-white font-bold text-[30.4px] leading-[33.4px] tracking-[-1px]">
                ¿Tengo que hacer <br />
                algo o no?
              </h3>
            </div>

            {/* Time */}
            <p className="text-white/45 text-[13.12px] leading-[19.7px] mb-[24px]">
              3 días · <span className="text-[#FFC107]">Sin costo</span>
            </p>

            {/* Steps */}
            <div className="space-y-[10px] mb-[40px]">
              {[
                "Respondes unas preguntas simples sobre tu situación",
                "El sistema analiza si tienes obligaciones activas en Colombia",
                "Recibes tu cotización exacta — solo pagas por lo que te corresponde",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="min-w-[20px] h-[20px] rounded-full bg-[#059669]/25 border border-[#10B981]/30 flex items-center justify-center text-[#FFC107] text-[11px] font-semibold mt-[2px]">
                    {i + 1}
                  </div>
                  <p className="text-white/65 text-[13.12px] leading-[19.7px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/8 mb-[16px]" />

            {/* Subtitle */}
            <p className="uppercase text-white/35 font-semibold text-[9.92px] tracking-[1.19px] leading-[14.9px] mb-[14px]">
              El diagnóstico te dice
            </p>

            {/* Results */}
            <div className="space-y-[7px] mb-[32px]">
              {[
                "Si estás obligado a declarar renta en Colombia y por qué",
                "Si tienes años pendientes y cuánto costaría ponerte al día",
                "Si el predial de tus inmuebles en Colombia está en orden",
                "O si no tienes ninguna obligación activa — y eso también lo confirma",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#FFC107] text-[14px] mt-[2px]">✓</span>
                  <p className="text-white/55 text-[12.48px] leading-[18.7px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full h-[49.6px] rounded-full bg-[#FFC107] text-[#0F2D5C] font-semibold text-[14.4px] leading-[21.6px] shadow-md hover:scale-[1.02] transition-all duration-300">
              Empezar el diagnóstico →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}