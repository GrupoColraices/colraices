"use client";

const usosMonetizacion = [
  {
    icono: "🏠",
    uso: "USO 1",
    titulo: "Compra de vivienda en Colombia",
    descripcion:
      "Tienes el capital para comprar o complementar un crédito hipotecario. Monetización asegura que llegue correctamente legalizado para que la transacción no tenga problemas.",
  },
  {
    icono: "📊",
    uso: "USO 2",
    titulo: "Inversión en Colombia",
    descripcion:
      "Quieres invertir en un negocio, proyecto o activo en Colombia. El proceso de monetización garantiza que los fondos queden correctamente registrados ante las autoridades.",
  },
  {
    icono: "🏦",
    uso: "USO 3",
    titulo: "Ahorro a término fijo en Colombia",
    descripcion:
      "Quieres constituir un CDT o depósito a término en Colombia. Monetización permite que los fondos lleguen legalizados y listos para ser depositados en una entidad financiera colombiana.",
  },
  {
    icono: "🏗️",
    uso: "USO 4",
    titulo: "Construcción o remodelación",
    descripcion:
      "Tienes un proyecto de construcción o reforma en Colombia que requiere capital. Monetización garantiza que el dinero llegue legalizado y listo para ser ejecutado.",
  },
];

export default function ParaQuienEsMo() {
  return (
    <section className="w-full bg-[#FBF8F3] py-[48px] md:py-[88px]">
      <div className="max-w-[1180px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">

        {/* HEADER */}
        <div className="w-full max-w-[1084px] mx-auto flex flex-col items-center">

          {/* SUBTITLE */}
          <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-[24px] font-normal text-[#0A0A0A] text-center font-montserrat">
            ¿Para quién es Monetización?
          </p>

          {/* MAIN TITLE */}
          <div className="mt-[16px] md:mt-[24px] flex flex-col items-center text-center">
            <h2 className="text-[#0F2D5C] font-montserrat text-[22px] sm:text-[28px] md:text-[35.86px] leading-[1.2] font-bold italic tracking-[0px]">
              Cualquier persona natural que necesite traer
            </h2>
            <h3 className="text-[#0F2D5C] font-montserrat text-[22px] sm:text-[28px] md:text-[35.86px] leading-[1.2] font-light italic tracking-[0px]">
              capital a Colombia de forma segura.
            </h3>
          </div>
        </div>

        {/* GRID CARDS */}
        <div className="mt-[32px] md:mt-[48px] w-full max-w-[1084px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[12px] md:gap-[16px]">
          {usosMonetizacion.map((uso, index) => (
            <div
              key={index}
              className="relative w-full min-h-[140px] bg-white border border-[#0F2D5C]/10 rounded-[18px] px-[20px] md:px-[24px] pt-[20px] md:pt-[24px] pb-[20px] md:pb-[24px] flex overflow-hidden
                transition-all duration-200 cursor-pointer
                hover:border-[#FFC107] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:-translate-y-1"
            >

              {/* LEFT ACCENT BAR */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#FFC107] rounded-tl-[18px] rounded-bl-[18px]" />

              {/* ICON */}
              <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-[12px] bg-[#FFF9C4] flex items-center justify-center text-[18px] md:text-[20px] shrink-0">
                {uso.icono}
              </div>

              {/* CONTENT */}
              <div className="ml-[14px] md:ml-[16px] flex-1">
                <p className="text-[9.6px] md:text-[10.4px] leading-[15.6px] tracking-[1.04px] font-bold uppercase text-[#FFC107] font-montserrat">
                  {uso.uso}
                </p>

                <h3 className="mt-[4px] text-[13.5px] md:text-[15.2px] leading-[1.5] font-semibold text-[#0F2D5C] font-montserrat">
                  {uso.titulo}
                </h3>

                <p className="mt-[8px] text-[12px] md:text-[13.12px] leading-[1.6] font-normal text-[#475569] font-montserrat">
                  {uso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MINIMUM AMOUNT BANNER */}
        <div className="mt-[12px] md:mt-[16px] w-full max-w-[1086px] mx-auto bg-[#0F2D5C] rounded-[14px] px-[20px] md:px-[24px] py-[16px] md:py-[20px] flex items-center gap-[12px] md:gap-[16px]">

          {/* AMOUNT */}
          <div className="text-[26px] md:text-[32px] leading-[1] font-bold text-[#FFD54F] font-montserrat shrink-0">
            $10K
          </div>

          {/* TEXT CONTENT */}
          <div className="flex flex-col gap-[4px]">
            <p className="text-[9px] md:text-[11.2px] leading-[16.8px] tracking-[1.12px] uppercase font-bold text-white/40 font-montserrat">
              MONTO MÍNIMO
            </p>

            <p className="text-[11px] md:text-[14px] leading-[1.6] font-normal text-white/65 font-montserrat">
              Monetización está diseñada para montos desde USD $10.000 en
              adelante, sin límite superior. Si tienes una cantidad menor,
              recomendamos usar servicios de giro tradicionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}