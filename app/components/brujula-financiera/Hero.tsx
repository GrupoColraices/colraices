export default function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#091D3E] pt-[96px] px-[48px]">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-[1180px] h-[609.15px] relative">

        {/* CONTENEDOR INTERNO */}
        <div className="w-[1108px] h-[413.15px] flex gap-[64px]">

          {/* LEFT */}
          <div className="w-[620px] h-[413.15px] relative">

            {/* BADGE */}
            <div className="w-[328.29px] h-[43.6px] rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.07)] flex items-center pl-[48.8px]">
              <span className="text-[12.48px] leading-[18.7px] tracking-[0.12px] font-semibold text-[rgba(255,255,255,0.8)]">
                Banco Davivienda · Bróker autorizado
              </span>
            </div>

            {/* LINEA + LABEL */}
            <div className="absolute left-[328.29px] top-[13.45px] flex items-center gap-[8px]">
              <div className="w-[24px] h-[2px] bg-[#FFC107]" />
              <span className="text-[16px] leading-[24px] text-[#FFC107]">
                Crédito hipotecario
              </span>
            </div>

            {/* TITULO */}
            <div className="absolute top-[63.6px] w-[620px]">
              <h1 className="text-[36px] leading-[61.9px] font-semibold text-white">
                Compra tu vivienda en Colombia.
              </h1>

              <h1 className="text-[53.78px] leading-[61.9px] font-semibold italic text-[#FFD54F]">
                Desde el exterior.
              </h1>
            </div>

            {/* DESCRIPCIÓN */}
            <p className="absolute top-[206.69px] w-[542px] text-[20px] leading-[29.4px] text-[rgba(255,255,255,0.52)] font-light">
              Hasta 80% de financiación. Hasta 30 años de plazo. 100% remoto.
              Tramitado directamente con Davivienda — sin intermediarios adicionales.
            </p>

            {/* BOTONES */}
            <div className="absolute top-[363.95px] flex gap-[12px]">

              {/* BTN PRIMARY */}
              <button className="w-[224.21px] h-[49.2px] rounded-full bg-[#FFC107] text-[#2A3F77] text-[14.4px] font-semibold shadow-md flex items-center justify-center hover:translate-y-[-2px] transition">
                Conocer mi cupo gratis
              </button>

              {/* BTN SECONDARY */}
              <button className="w-[181.98px] h-[49.2px] rounded-full border border-[rgba(255,255,255,0.3)] text-white text-[14.4px] font-semibold flex items-center justify-center hover:bg-white/5 transition">
                ¿Cómo funciona?
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-[400px] h-[320.2px] mt-[46.48px] flex flex-col gap-[16px]">

            {/* CARD 1 */}
            <div className="w-[400px] h-[152.1px] rounded-tl-[16px] rounded-br-[16px] border border-[rgba(255,193,7,0.35)] bg-[rgba(255,193,7,0.06)] relative">

              <span className="absolute left-[24.8px] top-[32.1px] text-[10.4px] tracking-[1.04px] font-bold text-[rgba(255,255,255,0.45)]">
                DAVIVIENDA
              </span>

              <h3 className="absolute left-[24.8px] top-[57.7px] text-[16.8px] font-semibold text-white">
                Crédito hipotecario
              </h3>

              <p className="absolute left-[24.8px] top-[88.9px] w-[350.4px] text-[12.16px] leading-[18.2px] text-[rgba(255,255,255,0.5)]">
                Para comprar vivienda nueva o usada en Colombia. Hasta 80% de financiación.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="w-[400px] h-[152.1px] rounded-tl-[16px] rounded-br-[16px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] relative">

              <span className="absolute left-[24.8px] top-[32.1px] text-[10.4px] tracking-[1.04px] font-bold text-[#3B82F6]">
                BANCO UNIÓN
              </span>

              <h3 className="absolute left-[24.8px] top-[57.7px] text-[16.8px] font-semibold text-white">
                Crédito libre inversión
              </h3>

              <p className="absolute left-[24.8px] top-[88.9px] w-[350.4px] text-[12.8px] leading-[18.2px] text-[rgba(255,255,255,0.5)]">
                Si ya tienes un inmueble en Colombia. Hasta 70% del valor del inmueble.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}