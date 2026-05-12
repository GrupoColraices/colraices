export default function StartHelpSection() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#192440_0%,#2A3F77_100%)] py-[60px]">
      <div className="mx-auto w-full max-w-[1104px] px-6 lg:px-0">
        <div className="grid items-center gap-[48px] lg:grid-cols-[352px_1fr]">
          <div className="text-center">
            <h2 className="mx-auto w-[352px] max-w-full font-['Montserrat'] text-[28px] font-extrabold leading-[36.4px] tracking-[0px] text-white">
              ¿No sabes por dónde empezar?
            </h2>

            <p className="mx-auto mt-[12px] w-[352px] max-w-full font-['Montserrat'] text-[15px] font-normal leading-[24px] tracking-[0px] text-white/85">
              Te ayudamos a dar el primer paso con herramientas gratuitas.
            </p>
          </div>

          <div className="grid gap-[24px] md:grid-cols-2">
            <article className="flex min-h-[269px] flex-col rounded-[14px] border border-[#EDEDED] bg-white px-[24px] py-[28px] shadow-[0_2px_16px_rgba(41,63,119,0.08)]">
              <h3 className="font-['Montserrat'] text-[16px] font-bold leading-[24px] tracking-[0px] text-[#1A2340]">
                Calcula tu cupo e inicia tu viabilidad
              </h3>

              <p className="mt-[12px] font-['Montserrat'] text-[14px] font-normal leading-[22.4px] tracking-[0px] text-[#4B5563]">
                Conoce cuánto podrías obtener de financiamiento en Colombia y da
                el primer paso para evaluar tu viabilidad de crédito desde el
                exterior.
              </p>

              <button
                type="button"
                className="mt-auto h-[43.5px] w-full rounded-[10px] bg-[#2A3F77] px-[20px] font-['Montserrat'] text-[13px] font-bold leading-[19.5px] tracking-[0px] text-white transition duration-200 hover:bg-[#192440]"
              >
                Cupo de Crédito
              </button>
            </article>

            <article className="flex min-h-[269px] flex-col rounded-[14px] border border-[#EDEDED] bg-white px-[24px] py-[28px] shadow-[0_2px_16px_rgba(41,63,119,0.08)]">
              <h3 className="font-['Montserrat'] text-[16px] font-bold leading-[24px] tracking-[0px] text-[#1A2340]">
                ¿Tienes dudas?
              </h3>

              <p className="mt-[12px] font-['Montserrat'] text-[14px] font-normal leading-[22.4px] tracking-[0px] text-[#4B5563]">
                Si todavía no tienes claro qué necesitas o cuál debería ser tu
                siguiente paso, conversemos. Te ayudamos a entender tu situación
                y las opciones que tienes desde el exterior.
              </p>

              <button
                type="button"
                className="mt-auto h-[43.5px] w-full rounded-[10px] bg-[#FFC107] px-[20px] font-['Montserrat'] text-[13px] font-bold leading-[19.5px] tracking-[0px] text-[#192440] transition duration-200 hover:bg-[#FFD54F]"
              >
                Quiero orientación
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
