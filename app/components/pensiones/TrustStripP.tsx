export default function TrustStrip() {
  return (
    <section className="w-full bg-[#0F2D5C] py-8 sm:py-10 lg:py-[28px] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between">

          {/* LEFT INTRO */}
          <div className="flex items-center justify-center lg:justify-start pb-8 lg:pb-0 lg:pr-10 xl:pr-12 lg:border-r border-[rgba(255,255,255,0.12)] w-full lg:w-auto min-w-0 lg:min-w-[170px]">
            <div className="text-[#94A3B8] uppercase tracking-[2.5px] sm:tracking-[3px] text-[clamp(12px,2vw,13px)] leading-[1.4] font-medium text-center lg:text-left">
              Por qué
              <br />
              confiar
            </div>
          </div>

          {/* TRUST ITEMS */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 lg:gap-y-8 gap-x-6 sm:gap-x-8 lg:gap-x-10 lg:pl-10 xl:pl-12 pt-2 lg:pt-0">

            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-[#FFC107] font-bold text-[clamp(34px,8vw,42px)] leading-none tracking-[-1px]">
                18+
              </span>
              <span className="mt-3 text-[#94A3B8] text-[clamp(14px,2.3vw,15px)] leading-[1.55] max-w-[220px] font-medium">
                Años de experiencia en sistema pensional colombiano
              </span>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-white font-bold text-[clamp(34px,8vw,42px)] leading-none tracking-[-1px]">
                5
              </span>
              <span className="mt-3 text-[#94A3B8] text-[clamp(14px,2.3vw,15px)] leading-[1.55] max-w-[220px] font-medium">
                Perfiles de cliente con ruta personalizada
              </span>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-[#FFC107] font-bold text-[clamp(34px,8vw,42px)] leading-none tracking-[-1px]">
                1%
              </span>
              <span className="mt-3 text-[#94A3B8] text-[clamp(14px,2.3vw,15px)] leading-[1.55] max-w-[220px] font-medium">
                Honorario solo si el proceso es exitoso
              </span>
            </div>

            {/* ITEM 4 */}
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-white font-bold text-[clamp(34px,8vw,42px)] leading-none tracking-[-1px]">
                7
              </span>
              <span className="mt-3 text-[#94A3B8] text-[clamp(14px,2.3vw,15px)] leading-[1.55] max-w-[220px] font-medium">
                Días hábiles para entrega del diagnóstico
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}