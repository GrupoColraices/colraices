export default function TrustStrip() {
  return (
    <section className="w-full bg-[#0F2D5C] py-[28px] px-4 overflow-hidden">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">

          {/* LEFT INTRO */}
          <div className="flex items-center justify-center pb-8 lg:pb-0 lg:pr-10 xl:pr-12 lg:border-r border-[rgba(255,255,255,0.14)] w-full lg:w-[165px] lg:flex-shrink-0">
            <div className="text-[#94A3B8] uppercase tracking-[2.8px] text-[13px] leading-[1.35] font-medium text-center">
              POR QUÉ
              <br />
              CONFIAR
            </div>
          </div>

          {/* TRUST ITEMS */}
          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-8 lg:gap-x-12 lg:pl-12">

            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-white font-bold text-[32px] leading-none tracking-[-0.5px]">
                5
              </span>
              <span className="mt-3 text-[#94A3B8] text-[13px] leading-[1.4] font-medium whitespace-normal lg:whitespace-nowrap">
                Perfiles de cliente con ruta personalizada
              </span>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-[#FFC107] font-bold text-[32px] leading-none tracking-[-0.5px]">
                1%
              </span>
              <span className="mt-3 text-[#94A3B8] text-[13px] leading-[1.4] font-medium whitespace-normal lg:whitespace-nowrap">
                Honorario solo si el proceso es exitoso
              </span>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-white font-bold text-[32px] leading-none tracking-[-0.5px]">
                7
              </span>
              <span className="mt-3 text-[#94A3B8] text-[13px] leading-[1.4] font-medium whitespace-normal lg:whitespace-nowrap">
                Días hábiles para entrega del diagnóstico
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}