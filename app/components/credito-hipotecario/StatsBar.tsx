export default function StatsBar() {
  return (
    <div
      className="w-full flex justify-center bg-[#EDEDED]"
    >
      <div
        className="
          flex items-center justify-between
          w-full max-w-[1180px]
          h-auto md:h-[133.6px]
          px-6 md:px-[91px]
          py-6 md:py-0
          flex-wrap md:flex-nowrap
          gap-y-6 md:gap-y-0
        "
      >
        {/* ITEM 1 */}
        <div className="flex flex-col items-center w-1/2 md:w-[120px]">
          <span className="text-[28px] md:text-[32px] leading-[32px] font-bold text-[#2A3F77]">
            80%
          </span>
          <span className="mt-[4px] text-[12px] leading-[16.8px] text-[#2A3F77] text-center">
            Financiación máxima
          </span>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center md:items-start w-1/2 md:w-[129.68px]">
          <span className="text-[28px] md:text-[32px] leading-[32px] font-bold text-[#2A3F77]">
            30 años
          </span>
          <span className="mt-[4px] text-[12px] leading-[16.8px] text-[#2A3F77] text-center md:text-left">
            Plazo máximo
          </span>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center w-1/2 md:w-[120px]">
          <span className="text-[28px] md:text-[32px] leading-[32px] font-bold text-[#2A3F77]">
            100%
          </span>
          <span className="mt-[4px] text-[12px] leading-[16.8px] text-[#2A3F77] text-center">
            Proceso remoto
          </span>
        </div>

        {/* ITEM 4 */}
        <div className="flex flex-col items-center w-1/2 md:w-[140px]">
          <span className="text-[28px] md:text-[32px] leading-[32px] font-bold text-[#2A3F77] whitespace-nowrap">
            3–5 días
          </span>
          <span className="mt-[4px] text-[12px] leading-[16.8px] text-[#2A3F77] text-center whitespace-nowrap">
            Respuesta de viabilidad
          </span>
        </div>
      </div>
    </div>
  );
}