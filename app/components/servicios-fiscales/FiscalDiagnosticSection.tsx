"use client";

const leftCards = [
  {
    icon: "✓",
    title: "Claridad inmediata",
    text: "Sabes en 3 días si tienes que declarar, pagar predial, o si estás completamente en regla.",
  },
  {
    icon: "💰",
    title: "Cotización exacta",
    text: "No es una estimación vaga. Es el precio final por lo que realmente tienes pendiente — nada más.",
  },
  {
    icon: "🎯",
    title: "Sin compromiso",
    text: "El diagnóstico es gratis. Solo contratas el servicio si decides actuar.",
  },
];

const steps = [
  {
    number: "1",
    title: "Respondes unas preguntas simples",
    text: "Dónde vives, cuánto tiempo llevas fuera, si tienes inmuebles en Colombia, tus ingresos aproximados.",
  },
  {
    number: "2",
    title: "El sistema analiza tu situación",
    text: "Cruza tus respuestas con las reglas de la DIAN y determina si eres residente fiscal colombiano.",
  },
  {
    number: "3",
    title: "Recibes tu diagnóstico personalizado",
    text: "Te decimos qué tienes pendiente (si es que tienes algo), cuánto costaría resolverlo, y qué pasa si no actúas.",
  },
];

export default function FiscalDiagnosticSection() {
  return (
    <section className="relative w-full bg-[#091D3E] py-16 lg:py-[88px] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8 xl:px-[52px]">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">

          {/* LEFT */}
          <div className="w-full lg:w-[510px] shrink-0">
            <p className="text-[#FFC107] text-[11.2px] font-semibold tracking-[1.57px] leading-[16.8px] uppercase mb-7">
              EL CENTRO DEL SERVICIO
            </p>

            <h2 className="text-white text-[28px] sm:text-[32px] lg:text-[35.86px] font-semibold leading-[1.2] mb-8">
              El diagnóstico <br />
              <span className="text-[#FFC107] italic">que lo resuelve todo</span>
            </h2>

            <p className="text-white/65 text-[16.8px] leading-[29.4px] font-light mb-8">
              El 80% de los colombianos en el exterior no sabe si tiene
              obligaciones fiscales activas en Colombia. Este diagnóstico
              gratuito te lo aclara en minutos, para que sepas con certeza
              dónde estás y qué hacer si hay algo pendiente.
            </p>

            <div className="flex flex-col gap-[14px]">
              {leftCards.map((card, index) => (
                <div
                  key={index}
                  className="group flex gap-[14px] p-5 rounded-[20px] bg-white/4 border border-white/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_24px_rgba(0,0,0,0.22)] hover:bg-white/[0.09] hover:border-white/[0.16] cursor-pointer"
                >
                  <div className="w-9 h-9 min-w-[36px] rounded-md bg-[#059669]/18 border border-[#10B981]/25 flex items-center justify-center text-[15.2px] text-white transition-all duration-300 group-hover:bg-[#059669]/28 group-hover:border-[#10B981]/40 group-hover:scale-105">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-[14.08px] font-semibold leading-[21.1px] mb-0.5">
                      {card.title}
                    </h3>
                    <p className="text-white/50 text-[12.64px] leading-[20.2px] transition-colors duration-300 group-hover:text-white/72">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full lg:w-[510px] shrink-0 bg-white rounded-[32px] overflow-hidden">

            {/* Card header */}
            <div className="relative bg-[#FFC107] px-7 pt-7 pb-6 overflow-hidden">
              <div className="absolute w-[110px] h-[110px] rounded-full bg-white/15 -top-9 -right-9" />
              <p className="text-white/60 text-[10.4px] font-semibold tracking-[1.35px] leading-[15.6px] uppercase mb-1">
                DIAGNÓSTICO FISCAL GRATUITO
              </p>
              <h3 className="text-white text-[22.4px] font-bold leading-[25.8px] mb-1">
                Cómo funciona
              </h3>
              <p className="text-white/65 text-[12.48px] leading-[18.7px]">
                Sin costo · Sin compromisos
              </p>
            </div>

            {/* Steps */}
            <div className="px-7 pt-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-[14px] pb-[18px]">
                  <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#FFC107] text-white flex items-center justify-center text-[13px] font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-[#0F2D5C] text-[13.6px] font-semibold leading-[20.4px] mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-[#475569] text-[12.48px] leading-[19.3px]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-7 pb-7 mt-1.5">
              <button className="w-full h-[49.6px] rounded-full bg-[#0F2D5C] text-white text-[14.4px] font-semibold leading-[21.6px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(15,45,92,0.22)]">
                Empezar el diagnóstico ahora
              </button>
              <p className="text-[#94A3B8] text-[11.52px] leading-[17.3px] text-center mt-2.5">
                Sin costo · Sin compromisos · 3 días
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}