export default function ViabilidadSection() 
{
  return (
    <section
      id="viabilidad"
      className="w-full bg-white px-4 py-12 font-['Montserrat',system-ui,sans-serif] sm:px-6 lg:px-8 xl:min-h-[493px] xl:px-0 xl:py-0"
    >
      <div className="mx-auto flex w-full max-w-[1388px] items-center justify-center xl:min-h-[493px]">
        <div className="grid w-full max-w-[1104px] overflow-hidden rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:grid-cols-2 xl:h-[333.88px]">
          {/* IZQUIERDA */}
          <div className="flex flex-col justify-center bg-[#2A3F77] px-7 py-10 sm:px-10 xl:px-[49.99px] xl:py-0">
            <p className="mb-[12px] text-[18px] font-normal leading-[27px] tracking-[0px] text-white">
              Un solo punto de partida:
            </p>

            <h2 className="mb-[20px] max-w-[453px] text-[32px] font-bold leading-[41.6px] tracking-[0px] text-[#FFC107]">
              Conocer tu capacidad
              <br />
              de financiamiento
            </h2>

            <a
              href="https://colraices.com/cupocreditodavivienda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[54.97px] w-full max-w-[314.74px] items-center justify-center gap-[12px] rounded-[8px] bg-[#4A6FA5] px-[20px] text-[15px] font-semibold leading-[22.5px] tracking-[0px] text-white no-underline transition-all duration-300 hover:bg-[#557BB2]"
            >
              <span className="text-[18px] leading-none">📊</span>
              <span className="whitespace-nowrap">Conoce tu cupo de crédito</span>
              <span className="text-[18px] leading-none">›</span>
            </a>
          </div>

          {/* DERECHA */}
          <div className="flex flex-col justify-center gap-[32px] bg-[#F8F9FA] px-7 py-10 sm:px-10 xl:px-[49.99px] xl:py-0">
            {/* Item 1 */}
            <div className="flex items-start gap-[20px]">
              <div className="flex h-[55.99px] w-[55.99px] shrink-0 items-center justify-center rounded-full border-[1.27px] border-[#E5E7EB] bg-white">
                <span className="text-[28px] leading-[42px] text-[#0A0A0A]">⏱️</span>
              </div>

              <div className="flex max-w-[377px] flex-col gap-[8px]">
                <h4 className="text-[18px] font-bold leading-[27px] tracking-[0px] text-[#2A3F77]">
                  Respuesta inmediata
                </h4>
                <p className="text-[14px] font-normal leading-[22.4px] tracking-[0px] text-[#64748B]">
                  En minutos tienes la capacidad de cuota de Colombia,
                  inmediatamente desde y solo presionando un botón al exterior
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-[20px]">
              <div className="flex h-[55.99px] w-[55.99px] shrink-0 items-center justify-center rounded-full border-[1.27px] border-[#E5E7EB] bg-white">
                <span className="text-[28px] leading-[42px] text-[#0A0A0A]">💰</span>
              </div>

              <div className="flex max-w-[377px] flex-col gap-[8px]">
                <h4 className="text-[18px] font-bold leading-[27px] tracking-[0px] text-[#2A3F77]">
                  Gratis
                </h4>
                <p className="text-[14px] font-normal leading-[22.4px] tracking-[0px] text-[#64748B]">
                  No pagas un solo peso ni envias dinero a Colombia por obtenér
                  tu cupo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}