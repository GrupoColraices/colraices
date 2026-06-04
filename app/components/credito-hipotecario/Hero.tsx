import { DAVIVIENDA_CUPO_CREDITO_URL } from "@/app/lib/officialUrls";

export default function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#091D3E] lg:h-[684.3px] lg:overflow-hidden max-lg:px-5 max-lg:pt-12 max-lg:pb-12">
      <div className="w-full max-w-[1152px] h-full relative max-lg:flex max-lg:flex-col max-lg:gap-10">
        {/* LEFT */}
        <div className="w-full lg:w-[592px] lg:h-[438.2px] lg:absolute lg:left-[48px] lg:top-[121.05px] flex flex-col gap-5 lg:block">
          {/* Badge + Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:block">
            <div className="w-fit lg:w-[328.29px] h-[43.6px] rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.07)] flex items-center pl-[48.8px] relative">
              <div className="absolute left-[10.8px] top-[7.8px] w-[28px] h-[28px] flex items-center justify-center">
                <span className="text-[13px] leading-[19.5px] font-bold text-white">
                  D
                </span>
              </div>

              <span className="text-[12.48px] leading-[18.7px] tracking-[0.12px] font-semibold text-[rgba(255,255,255,0.8)]">
                Banco Davivienda · Bróker autorizado
              </span>

              <div className="ml-auto mr-[12px] w-[6px] h-[6px] rounded-full bg-[#4ADE80] opacity-[0.8] animate-pulse" />
            </div>

            <div className="flex items-center gap-[8px] lg:absolute lg:left-[360.29px] lg:top-[13.45px]">
              <div className="w-[24px] h-[2px] bg-[#FFC107]" />
              <span className="text-[16px] leading-[24px] text-[#FFC107]">
                Crédito hipotecario
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="lg:absolute lg:left-0 lg:top-[63.6px] lg:w-[592px] lg:h-[181.2px]">
            <h1 className="text-[36px] lg:text-[52.52px] leading-[1.1] lg:leading-[60.4px] font-semibold text-white">
              Compra tu vivienda en Colombia.{" "}
              <span className="italic text-[#FFD54F]">
                Desde el exterior.
              </span>
            </h1>
          </div>

          {/* Paragraph */}
          <p className="lg:absolute lg:left-0 lg:top-[264.8px] lg:w-[592px] text-[16.8px] leading-[29.4px] text-[rgba(255,255,255,0.52)] font-light">
            Hasta 80% de financiación. Hasta 30 años de plazo. 100% remoto.
            Tramitado directamente con Davivienda — sin intermediarios
            adicionales.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[12px] lg:absolute lg:left-0 lg:top-[389px]">
            <a
              href={DAVIVIENDA_CUPO_CREDITO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[224.21px] h-[49.2px] rounded-full bg-[#FFC107] text-[#2A3F77] text-[14.4px] font-semibold shadow-md flex items-center justify-center hover:translate-y-[-2px] transition"
            >
              Conocer mi cupo gratis
            </a>

            <a
              href="#como-funciona"
              className="w-full sm:w-[181.98px] h-[49.2px] rounded-full border border-[rgba(255,255,255,0.3)] text-white text-[14.4px] font-semibold flex items-center justify-center hover:bg-white/5 transition"
            >
              ¿Cómo funciona?
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[400px] lg:h-[488.3px] lg:absolute lg:left-[704px] lg:top-[96px] flex flex-col gap-[16px]">
          {/* CARD 1 */}
          <a href="#tipos-de-credito" className="group w-full lg:w-[400px] lg:h-[152.1px] rounded-tl-[16px] rounded-br-[16px] border border-[rgba(255,255,255,0.08)] border-l-[4px] border-l-[#df0209] bg-[rgba(255,193,7,0.06)] relative cursor-pointer transition-transform duration-200 ease-out hover:translate-x-[6px] p-6 lg:p-0">
            <span className="block mb-2 lg:mb-0 lg:absolute lg:left-[24.8px] lg:top-[32.1px] text-[10.4px] tracking-[1.04px] font-bold text-[#ea3442]">
              DAVIVIENDA
            </span>

            <div className="flex items-center justify-between lg:block">
              <h3 className="lg:absolute lg:left-[24.8px] lg:top-[57.7px] text-[16.8px] font-semibold text-white">
                Crédito hipotecario
              </h3>

              <span className="lg:absolute lg:right-[20px] lg:top-[57.7px] text-[rgba(255,255,255,0.3)] text-[16px] transition-all duration-200 ease-out group-hover:text-white group-hover:translate-x-[4px] group-hover:scale-110 inline-block">
                →
              </span>
            </div>

            <p className="mt-2 lg:mt-0 lg:absolute lg:left-[24.8px] lg:top-[88.9px] lg:w-[330px] text-[12.16px] leading-[18.2px] text-[rgba(255,255,255,0.5)]">
              Para comprar vivienda nueva o usada en Colombia. Hasta 80% de
              financiación.
            </p>
          </a>

          {/* CARD 2 */}
          <a href="#tipos-de-credito" className="group w-full lg:w-[400px] lg:h-[152.1px] rounded-tl-[16px] rounded-br-[16px] border border-[rgba(255,255,255,0.08)] border-l-[4px] border-l-[#00a3e2] bg-[rgba(255,255,255,0.06)] relative cursor-pointer transition-transform duration-200 ease-out hover:translate-x-[6px] p-6 lg:p-0">
            <span className="block mb-2 lg:mb-0 lg:absolute lg:left-[24.8px] lg:top-[32.1px] text-[10.4px] tracking-[1.04px] font-bold text-[#00a3e2]">
              BANCO UNIÓN
            </span>

            <div className="flex items-center justify-between lg:block">
              <h3 className="lg:absolute lg:left-[24.8px] lg:top-[57.7px] text-[16.8px] font-semibold text-white">
                Crédito libre inversión
              </h3>

              <span className="lg:absolute lg:right-[20px] lg:top-[57.7px] text-[rgba(255,255,255,0.3)] text-[16px] transition-all duration-200 ease-out group-hover:text-white group-hover:translate-x-[4px] group-hover:scale-110 inline-block">
                →
              </span>
            </div>

            <p className="mt-2 lg:mt-0 lg:absolute lg:left-[24.8px] lg:top-[88.9px] lg:w-[330px] text-[12.8px] leading-[18.2px] text-[rgba(255,255,255,0.5)]">
              Si ya tienes un inmueble en Colombia. Hasta 70% del valor del
              inmueble.
            </p>
          </a>

          {/* CARD 3 */}
          <a href="#tipos-de-credito" className="group w-full lg:w-[400px] lg:h-[152.1px] rounded-tl-[16px] rounded-br-[16px] border border-[rgba(255,255,255,0.08)] border-l-[4px] border-l-[#df0209] bg-[rgba(255,193,7,0.06)] relative cursor-pointer transition-transform duration-200 ease-out hover:translate-x-[6px] p-6 lg:p-0">
            <span className="block mb-2 lg:mb-0 lg:absolute lg:left-[24.8px] lg:top-[32.1px] text-[10.4px] tracking-[1.04px] font-bold text-[#ea3442]">
              DAVIVIENDA
            </span>

            <div className="flex items-center justify-between lg:block">
              <h3 className="lg:absolute lg:left-[24.8px] lg:top-[57.7px] text-[16.8px] font-semibold text-white">
                Leasing habitacional
              </h3>

              <span className="lg:absolute lg:right-[20px] lg:top-[57.7px] text-[rgba(255,255,255,0.3)] text-[16px] transition-all duration-200 ease-out group-hover:text-white group-hover:translate-x-[4px] group-hover:scale-110 inline-block">
                →
              </span>
            </div>

            <p className="mt-2 lg:mt-0 lg:absolute lg:left-[24.8px] lg:top-[88.9px] lg:w-[330px] text-[12.8px] leading-[18.2px] text-[rgba(255,255,255,0.5)]">
              Financia hasta el 80% de la vivienda en Colombia, pagas mes a mes
              y al final decides si es tuya.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
