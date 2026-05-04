"use client";

const aplicaSi = [
  {
    icono: "🌍",
    texto:
      "Eres colombiano en el exterior con un familiar en Colombia dispuesto a ejecutar un negocio.",
  },
  {
    icono: "💰",
    texto: "Tienes capacidad de inversión inicial.",
  },
  {
    icono: "🎯",
    texto:
      "Tienes una idea de negocio —o quieres validar una— y necesitas método para avanzar.",
  },
  {
    icono: "⏱️",
    texto:
      "Entiendes que un negocio real necesita tiempo y acompañamiento profesional.",
  },
  {
    icono: "📊",
    texto:
      "Buscas visibilidad sobre tu inversión sin tener que microgestionar desde el exterior.",
  },
];

const tenEnCuenta = [
  {
    icono: "🚫",
    texto:
      "Este no es un servicio para quien busca resultados inmediatos o sin esfuerzo del ejecutor.",
  },
  {
    icono: "📝",
    texto:
      "Colraices acompaña y estructura, pero no ejecuta el negocio por ti. El éxito depende del compromiso de ambas partes.",
  },
  {
    icono: "💼",
    texto:
      "El servicio no incluye la inversión inicial del negocio ni los gastos operativos — solo el acompañamiento profesional.",
  },
  {
    icono: "🏢",
    texto:
      "No aplica para negocios que requieran licencias especiales, permisos sanitarios complejos o regulación sectorial alta.",
  },
];

export default function PerfilamientoServicioCe() {
  return (
    <section className="w-full bg-[#F5F1EB] border-t-[4px] border-[#0A2E63] pt-[72px] sm:pt-[82px] md:pt-[90px] pb-[78px] sm:pb-[90px] md:pb-[96px] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-[1088px] mx-auto">

        {/* Header */}
        <div className="text-center mb-[52px]">
          <div className="flex items-center justify-center gap-[10px] mb-[18px]">
            <div className="w-[20px] h-[1.5px] bg-[#F4B400]" />
            <span className="text-[11px] sm:text-[12px] tracking-[0.28em] uppercase font-medium text-[#F4B400]">
              PARA QUIÉN APLICA
            </span>
          </div>

          <h2 className="text-[36px] xs:text-[44px] sm:text-[56px] md:text-[62px] leading-[1.04] tracking-[-0.04em] font-semibold text-[#0A2E63]">
            ¿Es este servicio{" "}
            <span className="text-[#F4B400] italic font-medium">
              para ti?
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[34px]">

          {/* Left Card */}
          <div className="bg-[linear-gradient(180deg,rgba(5,150,105,0.05)_0%,rgba(255,249,230,1)_100%)] border border-[#BFE3D0] rounded-[22px] px-[28px] sm:px-[32px] py-[30px] sm:py-[34px] min-h-[332px]">
            <div className="flex items-center gap-[14px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full bg-[#059669] flex items-center justify-center text-white text-[15px] font-bold shrink-0">
                ✓
              </div>
              <h3 className="text-[#0A2E63] text-[17px] sm:text-[18px] font-semibold">
                Aplica si...
              </h3>
            </div>

            <ul className="space-y-[16px]">
              {aplicaSi.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[14px] text-[#596579] text-[15px] sm:text-[16px] leading-[1.65]"
                >
                  <span className="text-[15px] mt-[3px] shrink-0">
                    {item.icono}
                  </span>
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-[linear-gradient(180deg,rgba(241,245,249,0.6)_0%,#F8FAFC_100%)] border border-[#D8DDE7] rounded-[22px] px-[28px] sm:px-[32px] py-[30px] sm:py-[34px] min-h-[332px]">
            <div className="flex items-center gap-[14px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full bg-[#95A4BA] flex items-center justify-center text-white text-[15px] font-bold shrink-0">
                →
              </div>
              <h3 className="text-[#0A2E63] text-[17px] sm:text-[18px] font-semibold">
                Ten en cuenta que...
              </h3>
            </div>

            <ul className="space-y-[16px]">
              {tenEnCuenta.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[14px] text-[#A0ACBF] text-[15px] sm:text-[16px] leading-[1.65]"
                >
                  <span className="text-[15px] mt-[3px] shrink-0">
                    {item.icono}
                  </span>
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="bg-[linear-gradient(180deg,rgba(255,249,230,0.95)_0%,#FFF9E6_100%)] rounded-[18px] border-l-[4px] border-[#F4B400] px-[30px] sm:px-[34px] py-[24px] sm:py-[26px]">
          <p className="text-[15px] sm:text-[16px] leading-[1.75] text-[#0A2E63]">
            <span className="font-semibold">
              Una nota importante sobre el riesgo:
            </span>{" "}
            Todo emprendimiento tiene riesgo. Colraices reduce ese riesgo con
            método, validación y acompañamiento continuo, pero no lo elimina.
            El cliente entiende que está iniciando un negocio real y asume la
            responsabilidad de su operación y resultados.
          </p>
        </div>

      </div>
    </section>
  );
}