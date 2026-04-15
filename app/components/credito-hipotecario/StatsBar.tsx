export default function StatsBar() {
  return (
    <div
      className="w-full flex justify-center"
      style={{
        backgroundColor: "#EDEDED",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          width: "1180px",
          height: "133.6px",
          paddingLeft: "91.18px",
          paddingRight: "91.2px",
        }}
      >
        {/* ITEM 1 */}
        <div className="flex flex-col items-center w-[120px]">
          <span className="text-[32px] leading-[32px] font-bold text-[#2A3F77]">
            80%
          </span>
          <span className="mt-[4px] text-[12px] leading-[16.8px] text-[#2A3F77] text-center">
            Financiación máxima
          </span>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-start w-[129.68px]">
          <span className="text-[32px] leading-[32px] font-bold text-[#2A3F77]">
            30 años
          </span>
          <span className="mt-[4px] text-[12px] leading-[16.8px] text-[#2A3F77]">
            Plazo máximo
          </span>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center w-[120px]">
          <span className="text-[32px] leading-[32px] font-bold text-[#2A3F77]">
            100%
          </span>
          <span className="mt-[4px] text-[12px] leading-[16.8px] text-[#2A3F77] text-center">
            Proceso remoto
          </span>
        </div>

        {/* ITEM 4 */}
        <div className="flex flex-col items-center w-[140px]">
        <span className="text-[32px] leading-[32px] font-bold text-[#2A3F77] whitespace-nowrap">
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