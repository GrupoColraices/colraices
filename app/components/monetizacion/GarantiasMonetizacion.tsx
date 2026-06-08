"use client";

const garantiasSi = [
  "Legalización correcta ante el Banco de la República según normativa vigente.",
  "Negociación de tasa de cambio en mesa de dinero — mejor que la tasa de ventanilla.",
  "Comunicación constante y transparente durante todo el proceso.",
  "Entrega de certificado de declaración de cambio legalizada.",
  "Devolución total del dinero si el proceso no puede completarse por responsabilidad de Colraices.",
];

const garantiasNo = [
  "Tiempos de procesamiento del banco emisor en el exterior (fuera de nuestro control).",
  "Cambios en la tasa de cambio si el cliente no transfiere en el plazo acordado tras bloquear la tasa.",
  "Aprobación automática si la documentación presentada tiene inconsistencias o no cumple requisitos legales.",
  "Asesoría tributaria o fiscal sobre el tratamiento de los fondos en Colombia (consulta con un contador).",
  "Devolución de comisiones de terceros (bancos intermediarios, corresponsales) si el proceso se cancela por decisión del cliente.",
];

export default function GarantiasMonetizacion() {
  return (
    <section className="w-full bg-[#FBF8F3] px-12 pt-[88px] pb-0">
      <div className="max-w-[1184px] mx-auto">
        {/* Encabezado */}
        <div className="w-full">
          <p className="text-[20px] leading-6 font-normal text-[#0A0A0A] font-montserrat">
            Garantías
          </p>

          <h2 className="mt-[4px] text-[35.86px] leading-[43px] font-semibold text-[#0F2D5C] font-montserrat">
            Qué garantiza Monetización — y qué no.
          </h2>

          <p className="mt-[10px] text-[15.2px] leading-[25.8px] font-normal text-[#475569] font-montserrat">
            Claridad total sobre el alcance del servicio.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-[48px] flex flex-col lg:flex-row gap-6 w-full">
          {/* Sí garantizamos */}
          <div className="w-full lg:w-[530px] rounded-[20px] border border-[rgba(255,193,7,0.15)] bg-[#FFF9C4] p-[30.8px]">
            {/* Título */}
            <div className="flex items-center gap-[10px]">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-[rgba(255,193,7,0.15)] flex items-center justify-center">
                <span className="text-[16px] leading-6 text-[#0A0A0A] font-normal">
                  ✓
                </span>
              </div>

              <span className="text-[16px] leading-6 font-semibold text-[#FFC107] font-montserrat">
                Sí garantizamos
              </span>
            </div>

            {/* Lista */}
            <div className="mt-[48px] flex flex-col gap-[24px]">
              {garantiasSi.map((item, index) => (
                <div key={index} className="flex items-start gap-[10px]">
                  <div className="w-[18px] h-[18px] rounded-full bg-[rgba(255,193,7,0.15)] flex items-center justify-center flex-shrink-0 mt-[2px]">
                    <span className="text-[9px] leading-[13.9px] text-[#FFC107]">
                      ✓
                    </span>
                  </div>

                  <p className="text-[14px] leading-[21.7px] font-normal text-[#1E293B] font-montserrat">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* No garantizamos */}
          <div className="w-full lg:w-[530px] rounded-[20px] border border-[rgba(220,38,38,0.12)] bg-[#FEF2F2] p-[30.8px]">
            {/* Título */}
            <div className="flex items-center gap-[10px]">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-[rgba(220,38,38,0.10)] flex items-center justify-center">
                <span className="text-[16px] leading-6 text-[#0A0A0A] font-normal">
                  ✕
                </span>
              </div>

              <span className="text-[16px] leading-6 font-semibold text-[#DC2626] font-montserrat">
                No garantizamos
              </span>
            </div>

            {/* Lista */}
            <div className="mt-[48px] flex flex-col gap-[24px]">
              {garantiasNo.map((item, index) => (
                <div key={index} className="flex items-start gap-[10px]">
                  <div className="w-[18px] h-[18px] rounded-full bg-[rgba(220,38,38,0.10)] flex items-center justify-center flex-shrink-0 mt-[2px]">
                    <span className="text-[9px] leading-[13.9px] text-[#DC2626]">
                      ×
                    </span>
                  </div>

                  <p className="text-[14px] leading-[21.7px] font-normal text-[#1E293B] font-montserrat">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Espacio inferior */}
        <div className="h-[88px]" />
      </div>
    </section>
  );
}