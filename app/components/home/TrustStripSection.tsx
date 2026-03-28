export default function StatsSection() {
  return (
    <section className="w-full bg-[#0F2D5C] flex items-center py-10 md:h-[166px]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px]">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* IZQUIERDA */}
          <div className="flex items-center gap-6 justify-center md:justify-start">

            <p className="text-white/60 text-[11px] md:text-[12px] leading-[16px] md:leading-[18px] tracking-[2px] uppercase text-center md:text-left">
              Colombianos <br /> que ya <br /> confían en <br /> nosotros
            </p>

            <div className="hidden md:block w-[1px] h-[60px] bg-white/20"></div>

          </div>

          {/* MÉTRICAS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:items-center gap-y-6 gap-x-8 md:gap-[80px] text-center">

            <div>
              <p className="text-[#FFC107] text-[24px] md:text-[32px] font-bold">
                23 años
              </p>
              <p className="text-white/60 text-[12px] md:text-[13px] mt-1">
                acompañando colombianos en el exterior
              </p>
            </div>

            <div>
              <p className="text-white text-[24px] md:text-[32px] font-bold">
                +83.000
              </p>
              <p className="text-white/60 text-[12px] md:text-[13px] mt-1">
                colombianos atendidos en el mundo
              </p>
            </div>

            <div>
              <p className="text-white text-[24px] md:text-[32px] font-bold">
                +11.000
              </p>
              <p className="text-white/60 text-[12px] md:text-[13px] mt-1">
                negocios concretados en Colombia
              </p>
            </div>

            <div>
              <p className="text-white text-[24px] md:text-[32px] font-bold">
                +15
              </p>
              <p className="text-white/60 text-[12px] md:text-[13px] mt-1">
                A los que hemos llegado
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}