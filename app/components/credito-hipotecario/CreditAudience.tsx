export default function CreditAudience() {
  return (
    <div className="w-full flex justify-center bg-[#FBF8F3]">
      <div
        className="w-[1180px]"
        style={{
          padding: "88px 48px",
        }}
      >
        {/* HEADER */}
        <div className="flex flex-col items-center gap-[10px]">
          <p className="text-[20px] leading-[30px] italic text-[#0A0A0A] text-center">
            ¿Para quién es este crédito?
          </p>

          <div className="text-center">
            <span className="text-[35.86px] leading-[43px] font-semibold text-[#0F2D5C]">
              Si vives en el exterior y quieres{" "}
            </span>
            <span className="text-[35.86px] leading-[43px] font-extrabold text-[#0F2D5C]">
              comprar en Colombia, esto es para ti.
            </span>
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="mt-[26px] text-center">
          <p className="text-[15.2px] leading-[25.8px] text-[#475569]">
            Si tu historial está limpio y puedes demostrar ingresos, puedes
            calificar. Estos son los perfiles más comunes:
          </p>
        </div>

        {/* CARDS */}
        <div className="flex gap-[20px] mt-[32px]">
          {/* CARD 1 */}
          <div className="group relative w-[348px] min-h-[380px] bg-white rounded-[16px_0px_16px_0px] border border-[rgba(15,45,92,0.10)] p-[28.8px] flex flex-col overflow-hidden transition-all duration-[280ms] ease-out hover:-translate-y-[6px] hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">
            
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1A4F9E] transition-all duration-500 ease-out group-hover:w-full" />

            <div className="w-[48px] h-[48px] bg-[#FBF8F3] rounded-[12px] flex items-center justify-center text-[22px] transition-all duration-300 group-hover:bg-[#FFF4CC] group-hover:shadow-[0px_4px_12px_rgba(255,193,7,0.25)]">
              🇺🇸
            </div>

            <h3 className="mt-[16px] text-[16.8px] leading-[25.2px] font-semibold text-[#0F2D5C]">
              Profesional con contrato en EEUU o Europa
            </h3>

            <p className="mt-[8px] text-[14px] leading-[22.4px] text-[#475569]">
              Tienes un contrato laboral en el exterior (con mínimo 3 meses de
              antigüedad). Demuestras ingresos estables. Quieres comprar vivienda
              en Colombia para ti o tu familia.
            </p>

            <div className="mt-auto pt-[16px] border-t border-[rgba(15,45,92,0.10)] text-[14px] leading-[22.4px]">
              <span className="font-bold text-[#1A4F9E]">
                Documentos:{" "}
              </span>
              <span className="text-[#94A3B8]">
                Contrato laboral traducido y apostillado, extractos bancarios
                últimos 6 meses.
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group relative w-[348px] min-h-[380px] bg-white rounded-[16px_0px_16px_0px] border border-[rgba(15,45,92,0.10)] p-[28.8px] flex flex-col overflow-hidden transition-all duration-[280ms] ease-out hover:-translate-y-[6px] hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">
            
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1A4F9E] transition-all duration-500 ease-out group-hover:w-full" />

            <div className="w-[48px] h-[48px] bg-[#FBF8F3] rounded-[12px] flex items-center justify-center text-[22px] transition-all duration-300 group-hover:bg-[#FFF4CC] group-hover:shadow-[0px_4px_12px_rgba(255,193,7,0.25)]">
              💼
            </div>

            <h3 className="mt-[16px] text-[16.8px] leading-[25.2px] font-semibold text-[#0F2D5C]">
              Independiente o emprendedor
            </h3>

            <p className="mt-[8px] text-[14px] leading-[22.4px] text-[#475569]">
              Trabajas por tu cuenta en el exterior. Tienes declaraciones de
              renta o estados financieros que demuestran ingresos consistentes
              (mínimo 1 año).
            </p>

            <div className="mt-auto pt-[16px] border-t border-[rgba(15,45,92,0.10)] text-[14px] leading-[22.4px]">
              <span className="font-bold text-[#1A4F9E]">
                Documentos:{" "}
              </span>
              <span className="text-[#94A3B8]">
                Declaraciones de renta, extractos bancarios, certificaciones de
                ingresos.
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group relative w-[348px] min-h-[380px] bg-white rounded-[16px_0px_16px_0px] border border-[rgba(15,45,92,0.10)] p-[28.8px] flex flex-col overflow-hidden transition-all duration-[280ms] ease-out hover:-translate-y-[6px] hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">
            
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1A4F9E] transition-all duration-500 ease-out group-hover:w-full" />

            <div className="w-[48px] h-[48px] bg-[#FBF8F3] rounded-[12px] flex items-center justify-center text-[22px] transition-all duration-300 group-hover:bg-[#FFF4CC] group-hover:shadow-[0px_4px_12px_rgba(255,193,7,0.25)]">
              🏠
            </div>

            <h3 className="mt-[16px] text-[16.8px] leading-[25.2px] font-semibold text-[#0F2D5C]">
              Colombiano que regresa
            </h3>

            <p className="mt-[8px] text-[14px] leading-[22.4px] text-[#475569]">
              Viviste en el exterior y ahora vuelves (o planeas volver). Tienes
              ahorros o ingresos del exterior que puedes traer de forma legal.
              Quieres establecerte con vivienda propia.
            </p>

            <div className="mt-auto pt-[16px] border-t border-[rgba(15,45,92,0.10)] text-[14px] leading-[22.4px]">
              <span className="font-bold text-[#1A4F9E]">
                Documentos:{" "}
              </span>
              <span className="text-[#94A3B8]">
                Extractos bancarios, carta explicativa del origen de fondos.
              </span>
            </div>
          </div>
        </div>

        {/* BANNER */}
        <div className="mt-[28px] w-full h-[66px] bg-[#0F2D5C] rounded-[12px] flex items-center px-[24px] gap-[16px]">
          <span className="text-[20px]">💡</span>

          <div className="flex flex-wrap items-center gap-[4px] text-[14px] leading-[21px]">
            <span className="font-bold text-white">
              ¿Pareja o familia?
            </span>
            <span className="text-white/75">
              Pueden sumar ingresos para calificar a un monto mayor. No tienen
              que estar casados — unión libre también aplica.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}