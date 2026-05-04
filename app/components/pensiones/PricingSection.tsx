export default function PricingSection() {
  const moduleOneItems = [
    "Diagnóstico pensional completo e historial",
    "Evaluación de todas las opciones disponibles",
    "Orientación sobre convenios bilaterales si aplica",
    "Plan de acción personalizado con pasos concretos",
    "Sesión de orientación y resolución de dudas",
    "Acompañamiento en trámites de primer nivel",
    "Evaluación de procedencia del Módulo 2 si aplica",
  ];

  return (
    <section className="w-full bg-[#FBF8F3] border-t border-[#0F2D5C] py-[88px] px-0">
      <div className="max-w-[1180px] mx-auto px-[52px]">
        {/* HEADER */}
        <div className="w-full mb-[52px]">
          <div className="flex flex-col items-center text-center h-[114.83px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[16px] h-[2px] bg-[#FFC107]" />
              <span className="uppercase text-[#FFC107] font-semibold tracking-[2.2px] text-[12px] leading-none">
                Inversión
              </span>
            </div>

            <h2 className="text-[#0F2D5C] font-semibold text-[58px] leading-[1.08] tracking-[-0.03em] font-montserrat">
              Pagas por lo que <em className="italic font-medium text-[#1A4F9E]">recibes.</em>
              <br />
              <span className="italic font-normal">Y el resto, solo si funciona.</span>
            </h2>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-[52px] items-start">
          {/* LEFT CARD */}
          <div className="relative w-full lg:w-[452px] h-auto lg:h-[390px] rounded-[32px] bg-[#0F2D5C] shadow-[0_24px_64px_rgba(15,45,92,0.18)] overflow-hidden flex-shrink-0">
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_45%,transparent_75%)]" />

            <div className="relative z-10 pt-[30px] px-[30px] pb-[34px]">
              <div className="uppercase text-white/40 text-[10.4px] tracking-[1.35px] font-medium leading-[15.6px] mb-[10px]">
                Módulo I · Precio fijo
              </div>

              <div className="relative w-[170px] h-[72px] mb-[10px]">
                <div className="absolute top-[6px] left-0 text-white text-[20px] font-bold leading-none">
                  US$
                </div>
                <div className="absolute top-0 left-[42px] text-white text-[57.6px] font-bold leading-[57.6px] tracking-[0px]">
                  370
                </div>
              </div>

              <p className="text-white/42 text-[12.48px] leading-[18.7px] mb-[14px] max-w-[300px]">
                Precio independiente de la complejidad del caso
              </p>

              <div className="space-y-[6px]">
                {moduleOneItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-[10px] text-white/65 text-[13.12px] leading-[19.7px]"
                  >
                    <div className="w-[17px] h-[17px] rounded-full bg-[#FFC107]/20 border border-[#C9900C]/25 flex items-center justify-center text-[#FFC107] text-[9px] font-bold flex-shrink-0 mt-[2px]">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[524px] flex flex-col gap-[18px]">
            {/* TOP CARD */}
            <div className="bg-white rounded-[32px] border border-[rgba(15,45,92,0.10)] w-full lg:h-[266.55px] p-[22.8px] shadow-[0_4px_16px_rgba(15,45,92,0.06)]">
              <div className="uppercase text-[#FFC107] text-[10.4px] tracking-[1.35px] font-medium leading-[15.6px] mb-[12px]">
                Módulo II · Modelo de éxito
              </div>

              <h3 className="text-[#0F2D5C] font-semibold text-[17.6px] leading-[26.4px] mb-[10px]">
                Representación Legal en Pensiones
              </h3>

              <p className="text-[#475569] text-[13.12px] leading-[21.6px] mb-[18px]">
                El Módulo 2 está incluido en el Módulo 1 cuando procede. No hay cobro anticipado. El honorario solo aplica cuando el Estado paga efectivamente al cliente.
              </p>

              <div className="w-full h-[58px] rounded-[16px] bg-[#FFF4C7] border border-[#E7C65C] px-5 flex items-center gap-4">
                <div className="text-[#0F2D5C] font-bold text-[38.4px] leading-[38.4px] tracking-[0px]">
                  1%
                </div>
                <div className="text-[#475569] text-[12.8px] leading-[19.2px]">
                  del valor total reconocido por el Estado
                  <br />
                  <strong className="text-[#0F2D5C] font-semibold">
                    Solo si el proceso es exitoso
                  </strong>
                </div>
              </div>
            </div>

            {/* NOTE CARD 1 */}
            <div className="bg-white rounded-[20px] border border-[rgba(15,45,92,0.10)] h-[136.05px] p-[22.8px] shadow-[0_4px_16px_rgba(15,45,92,0.05)]">
              <h4 className="text-[#0F2D5C] font-semibold text-[14.08px] leading-[21.1px] mb-[10px]">
                El modelo que alinea los intereses
              </h4>
              <p className="text-[#475569] text-[12.8px] leading-[21.1px]">
                Si el proceso no prospera, Colraices no cobra honorario por el litigio. Este modelo crea un incentivo real hacia el resultado — y por eso el protocolo de activación es tan riguroso.
              </p>
            </div>

            {/* NOTE CARD 2 */}
            <div className="bg-white rounded-[20px] border border-[rgba(15,45,92,0.10)] h-[136.05px] p-[22.8px] shadow-[0_4px_16px_rgba(15,45,92,0.05)]">
              <h4 className="text-[#0F2D5C] font-semibold text-[14.08px] leading-[21.1px] mb-[10px]">
                Sin letra pequeña
              </h4>
              <p className="text-[#475569] text-[12.8px] leading-[21.1px]">
                Los tiempos de los procesos judiciales dependen de la carga de los despachos y la complejidad del caso. El cliente recibe esta información con total transparencia antes de aprobar el inicio del litigio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
