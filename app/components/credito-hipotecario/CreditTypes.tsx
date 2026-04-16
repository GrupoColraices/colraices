export default function CreditTypes() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-[1180px]" style={{ padding: "88px 48px" }}>

        {/* HEADER */}
        <div className="w-[1084px]">
          <p className="text-[20px] leading-[30px] italic text-[#0A0A0A]">
            Dos opciones — según tu situación
          </p>

          <h2 className="mt-[3px] text-[35.86px] leading-[43px] font-semibold text-[#0F2D5C]">
            ¿Qué tipo de crédito necesitas?
          </h2>

          <p className="mt-[8px] text-[15.2px] leading-[25.8px] text-[#475569]">
            Si vas a comprar vivienda, el crédito hipotecario es tu camino. Si ya tienes un inmueble y quieres capitalizarlo, libre inversión es la opción.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-[48px] flex gap-[24px]">

          {/* CARD 1 */}
          <div className="w-[530px] h-[524.05px] bg-white border-[0.8px] border-[#0F2D5C] rounded-[16px_0px_16px_0px] relative 
          transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:-translate-y-[6px] 
          hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">

            {/* CHIP CORREGIDO */}
            <div className="absolute left-[36.8px] top-[36.8px] flex items-center gap-[8px] bg-[#FBF8F3] px-[12px] py-[6px] rounded-full">
              
              <div className="w-[20px] h-[20px] rounded-[4px] bg-[#DF0209] flex items-center justify-center">
                <span className="text-[10px] leading-[15px] font-bold text-white">
                  D
                </span>
              </div>

              <span className="text-[12px] leading-[18px] font-semibold text-[#0F2D5C]">
                Banco Davivienda
              </span>

            </div>

            <div className="absolute left-[419.32px] top-[20.8px] bg-[#0F2D5C] text-white text-[10.88px] leading-[16.3px] font-bold tracking-[0.87px] px-[12px] py-[4px] rounded-full">
              PRINCIPAL
            </div>

            <div className="absolute left-[36.8px] top-[86.8px] text-[32px] leading-[48px] text-[#0A0A0A]">
              🏠
            </div>

            <h3 className="absolute left-[36.8px] top-[148.8px] text-[20.8px] leading-[31.2px] font-semibold text-[#0F2D5C]">
              Crédito hipotecario
            </h3>

            <p className="absolute left-[36.8px] top-[188px] w-[456.4px] text-[14.4px] leading-[23.8px] text-[#475569]">
              Para comprar vivienda nueva o usada en Colombia. Hasta 80% de financiación. Hasta 30 años de plazo. Proceso 100% remoto.
            </p>

            <div
              className="absolute left-[36.8px] top-[259.5px] w-[456.4px] flex flex-col gap-[10px]"
              style={{
                borderTop: "0.8px solid rgba(15,45,92,0.1)",
                paddingTop: "20px",
              }}
            >
              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Financiación</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Hasta 80% del valor de la vivienda
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Plazo</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Hasta 30 años
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Cuota inicial</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Mínimo 20% del valor
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Tipo de vivienda</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Nueva o usada
                </span>
              </div>
            </div>

            <div className="absolute left-[36.8px] top-[425.9px] text-[14.4px] leading-[21.6px] font-semibold text-[#0A0A0A]">
              Verificar viabilidad →
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-[530px] h-[524.05px] bg-white border-[0.8px] border-[rgba(15,45,92,0.1)] rounded-[16px_0px_16px_0px] relative 
          transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:-translate-y-[6px] 
          hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">

            {/* CHIP CORREGIDO */}
            <div className="absolute left-[36.8px] top-[36.8px] flex items-center gap-[8px] bg-[#FBF8F3] px-[12px] py-[6px] rounded-full">
              
              <div className="w-[20px] h-[20px] rounded-[4px] bg-[#1D4ED8] flex items-center justify-center">
                <span className="text-[10px] leading-[15px] font-bold text-white">
                  U
                </span>
              </div>

              <span className="text-[12px] leading-[18px] font-semibold text-[#0F2D5C]">
                Banco Unión
              </span>

            </div>

            <div className="absolute left-[36.8px] top-[86.8px] text-[32px] leading-[48px] text-[#0A0A0A]">
              💼
            </div>

            <h3 className="absolute left-[36.8px] top-[148.8px] text-[20.8px] leading-[31.2px] font-semibold text-[#0F2D5C]">
              Crédito libre inversión
            </h3>

            <p className="absolute left-[36.8px] top-[188px] w-[456.4px] text-[14.4px] leading-[23.8px] text-[#475569]">
              Si ya tienes un inmueble en Colombia y quieres capitalizarlo. Sin restricción de destino del dinero. Hasta 70% del valor del inmueble.
            </p>

            <div
              className="absolute left-[36.8px] top-[259.5px] w-[456.4px] flex flex-col gap-[10px]"
              style={{
                borderTop: "0.8px solid rgba(15,45,92,0.1)",
                paddingTop: "20px",
              }}
            >
              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Financiación</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Hasta 70% del valor del inmueble
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Plazo</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Hasta 15 años
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Garantía</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Hipoteca sobre inmueble
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13.12px] leading-[19.7px] text-[#94A3B8]">Destino</span>
                <span className="text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C]">
                  Libre (inversión, negocio, gastos)
                </span>
              </div>
            </div>

            <div className="absolute left-[36.8px] top-[425.9px] text-[14.4px] leading-[21.6px] font-semibold text-[#0A0A0A]">
              Consultar este crédito →
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}