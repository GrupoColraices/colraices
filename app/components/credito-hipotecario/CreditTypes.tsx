export default function CreditTypes() {
  const specLabel =
    "text-[13.12px] leading-[19.7px] text-[#94A3B8]";
  const specValue =
    "text-[13.6px] leading-[20.4px] font-semibold text-[#0F2D5C] text-right justify-self-end";
  const specRow =
    "grid grid-cols-[110px_1fr] gap-4 items-start";

  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1180px] px-4 sm:px-8 py-14 md:py-[88px]">
        {/* HEADER */}
        <div className="w-full max-w-[1084px] mx-auto text-center">
          <p className="text-[18px] sm:text-[20px] leading-[30px] italic text-[#0A0A0A]">
            Tres opciones — según tu situación
          </p>

          <h2 className="mt-[3px] text-[26px] sm:text-[32px] md:text-[35.86px] leading-tight md:leading-[43px] font-semibold text-[#0F2D5C]">
            ¿Qué tipo de crédito necesitas?
          </h2>

          <p className="mt-[8px] text-[14px] sm:text-[15.2px] leading-[24px] sm:leading-[25.8px] text-[#475569] max-w-[950px] mx-auto">
            Crédito hipotecario para comprar vivienda, libre inversión para capitalizar tu inmueble, o leasing habitacional para usar mientras pagas y al final decidir si compras.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-10 md:mt-[48px] w-full max-w-[1104px] mx-auto flex flex-col lg:flex-row gap-[24px]">
          {/* CARD 1 */}
          <div className="w-full lg:w-[351.99px] min-h-[610.23px] bg-white border-[1.27px] border-[#0F2D5C] rounded-[16px_0px_16px_0px] flex flex-col px-[36.8px] pt-[36.8px] pb-8 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-[8px] bg-[#FBF8F3] px-[12px] py-[6px] rounded-full">
                <div className="w-[20px] h-[20px] rounded-[4px] bg-[#DF0209] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] leading-[15px] font-bold text-white">D</span>
                </div>
                <span className="text-[12px] leading-[18px] font-semibold text-[#0F2D5C] whitespace-nowrap">
                  Banco Davivienda
                </span>
              </div>

              <div className="bg-[#0F2D5C] text-white text-[10.88px] leading-[16.3px] font-bold tracking-[0.87px] px-[12px] py-[4px] rounded-full whitespace-nowrap flex-shrink-0">
                PRINCIPAL
              </div>
            </div>

            <div className="mt-5 text-[32px] leading-[48px]">🏠</div>

            <h3 className="mt-[14px] text-[20.8px] leading-[31.2px] font-semibold text-[#0F2D5C]">
              Crédito hipotecario
            </h3>

            <p className="mt-[8px] text-[14.4px] leading-[23.8px] text-[#475569]">
              Para comprar vivienda nueva o usada en Colombia. Hasta 80% de financiación. Hasta 30 años de plazo. Proceso 100% remoto.
            </p>

            <div
              className="mt-5 flex flex-col gap-[10px] flex-1"
              style={{
                borderTop: "0.8px solid rgba(15,45,92,0.1)",
                paddingTop: "20px",
              }}
            >
              <div className={specRow}>
                <span className={specLabel}>Financiación</span>
                <span className={specValue}>Hasta 80% del valor de la vivienda</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Plazo</span>
                <span className={specValue}>Hasta 30 años</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Cuota inicial</span>
                <span className={specValue}>Mínimo 20% del valor</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Tipo de vivienda</span>
                <span className={specValue}>Nueva o usada</span>
              </div>
            </div>

            <div className="mt-6 text-center text-[14.4px] leading-[21.6px] font-semibold text-[#0A0A0A]">
              Tu Cupo de crédito →
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full lg:w-[352.01px] min-h-[610.23px] bg-white border-[1.27px] border-[rgba(15,45,92,0.1)] rounded-[16px_0px_16px_0px] flex flex-col px-[36.8px] pt-[36.8px] pb-8 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">
            <div className="flex items-start">
              <div className="flex items-center gap-[8px] bg-[#FBF8F3] px-[12px] py-[6px] rounded-full">
                <div className="w-[20px] h-[20px] rounded-[4px] bg-[#DF0209] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] leading-[15px] font-bold text-white">D</span>
                </div>
                <span className="text-[12px] leading-[18px] font-semibold text-[#0F2D5C] whitespace-nowrap">
                  Banco Davivienda
                </span>
              </div>
            </div>

            <div className="mt-5 text-[32px] leading-[48px]">🏡</div>

            <h3 className="mt-[14px] text-[20.8px] leading-[31.2px] font-semibold text-[#0F2D5C]">
              Crédito leasing habitacional
            </h3>

            <p className="mt-[8px] text-[14.4px] leading-[23.8px] text-[#475569]">
              Financia hasta 80% de tu vivienda en Colombia. La puedes usar mientras la pagas mes a mes y al final decides si la compras.
            </p>

            <div
              className="mt-5 flex flex-col gap-[10px] flex-1"
              style={{
                borderTop: "0.8px solid rgba(15,45,92,0.1)",
                paddingTop: "20px",
              }}
            >
              <div className={specRow}>
                <span className={specLabel}>Financiación</span>
                <span className={specValue}>Hasta 80% del valor de la vivienda</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Plazo</span>
                <span className={specValue}>Hasta 30 años</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Tipo de vivienda</span>
                <span className={specValue}>Nueva o usada</span>
              </div>
            </div>

            <div className="mt-6 text-center text-[14.4px] leading-[21.6px] font-semibold text-[#0A0A0A]">
              Tu Cupo de crédito →
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-full lg:w-[351.99px] min-h-[610.23px] bg-white border-[1.27px] border-[rgba(15,45,92,0.1)] rounded-[16px_0px_16px_0px] flex flex-col px-[36.8px] pt-[36.8px] pb-8 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0px_12px_30px_rgba(15,45,92,0.15)]">
            <div className="flex items-start">
              <div className="flex items-center gap-[8px] bg-[#FBF8F3] px-[12px] py-[6px] rounded-full">
                <div className="w-[20px] h-[20px] rounded-[4px] bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] leading-[15px] font-bold text-white">U</span>
                </div>
                <span className="text-[12px] leading-[18px] font-semibold text-[#0F2D5C] whitespace-nowrap">
                  Banco Unión
                </span>
              </div>
            </div>

            <div className="mt-5 text-[32px] leading-[48px]">💼</div>

            <h3 className="mt-[14px] text-[20.8px] leading-[31.2px] font-semibold text-[#0F2D5C]">
              Crédito libre inversión
            </h3>

            <p className="mt-[8px] text-[14.4px] leading-[23.8px] text-[#475569]">
              Si ya tienes un inmueble en Colombia y quieres capitalizarlo. Sin restricción de destino del dinero. Hasta 70% del valor del inmueble.
            </p>

            <div
              className="mt-5 flex flex-col gap-[10px] flex-1"
              style={{
                borderTop: "0.8px solid rgba(15,45,92,0.1)",
                paddingTop: "20px",
              }}
            >
              <div className={specRow}>
                <span className={specLabel}>Financiación</span>
                <span className={specValue}>Hasta 70% del valor del inmueble</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Plazo</span>
                <span className={specValue}>Hasta 15 años</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Garantía</span>
                <span className={specValue}>Hipoteca sobre inmueble</span>
              </div>

              <div className={specRow}>
                <span className={specLabel}>Destino</span>
                <span className={specValue}>Libre (inversión, negocio, gastos)</span>
              </div>
            </div>

            <div className="mt-6 text-center text-[14.4px] leading-[21.6px] font-semibold text-[#0A0A0A]">
              Tu Cupo de crédito →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}