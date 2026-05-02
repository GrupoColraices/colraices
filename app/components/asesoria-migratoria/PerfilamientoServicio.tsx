"use client";

const aplicaSi = [
  {
    icono: "🌍",
    texto:
      "Quieres migrar a trabajar y no sabes qué visa solicitar ni cuáles son los requisitos reales del país de destino.",
  },
  {
    icono: "💼",
    texto:
      "Tienes una oferta laboral en el exterior y necesitas orientación urgente sobre cómo hacerla válida legalmente.",
  },
  {
    icono: "👨‍👩‍👧‍👦",
    texto:
      "Quieres llevar a tu familia contigo y no sabes si deben salir juntos o si existe un proceso de reagrupación posterior.",
  },
  {
    icono: "🛂",
    texto:
      "Iniciaste un proceso por tu cuenta, te bloqueaste en alguna etapa y necesitas retomarlo con acompañamiento.",
  },
  {
    icono: "🛡️",
    texto:
      "Tienes ahorros para afrontar el proceso pero no confías en los canales informales que has encontrado.",
  },
];

const tenEnCuenta = [
  {
    icono: "🏛️",
    texto:
      "Colraices orienta y prepara, pero el cliente es quien presenta la solicitud. No actuamos como representante legal ante las autoridades migratorias del país de destino.",
  },
  {
    icono: "💳",
    texto:
      "Las tasas consulares y traducciones oficiales son costos que asumir directamente — se informan con precisión desde la hoja de ruta.",
  },
  {
    icono: "📍",
    texto:
      "Este servicio es para colombianos que aún están en Colombia preparando su proceso, no para quienes ya residen en el exterior.",
  },
];

export default function PerfilamientoServicio() {
  return (
    <section className="w-full bg-[#F5F1EB] border-t border-[#0A2E63] pt-[60px] sm:pt-[72px] md:pt-[86px] pb-[70px] md:pb-[95px] px-4 sm:px-6 md:px-10 lg:px-0">
      <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[853px] mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-[30px] sm:mb-[34px] md:mb-[36px]">
          <div className="flex items-center justify-center gap-[8px] mb-[16px] sm:mb-[18px]">
            <div className="w-[18px] h-[1.5px] bg-[#F4B400]" />
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.24em] uppercase text-[#F4B400] leading-none">
              Perfilamiento
            </span>
          </div>

          <h2 className="text-[34px] sm:text-[42px] md:text-[56px] leading-[1.05] font-semibold tracking-[-0.035em] text-[#0A2E63] px-2">
            ¿Es este servicio{" "}
            <span className="text-[#F4B400] italic font-medium">
              para ti?
            </span>
          </h2>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px] mb-[28px] md:mb-[32px]">
          {/* Izquierda */}
          <div className="bg-[#F7F0DF] border border-[#E8D2A3] rounded-[18px] px-[18px] sm:px-[22px] pt-[20px] sm:pt-[24px] pb-[20px] sm:pb-[22px] min-h-auto md:min-h-[281px]">
            <div className="flex items-center gap-[10px] mb-[18px]">
              <div className="w-[23px] h-[23px] rounded-full bg-[#F4B400] flex items-center justify-center text-white text-[12px] font-bold shrink-0">
                ✓
              </div>
              <h3 className="text-[#0A2E63] text-[14px] sm:text-[15px] font-semibold leading-none">
                Aplica si...
              </h3>
            </div>

            <ul className="space-y-[12px]">
              {aplicaSi.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[10px] text-[#4F5A6D] text-[12px] sm:text-[13px] leading-[1.5]"
                >
                  <span className="text-[12px] mt-[2px] shrink-0">
                    {item.icono}
                  </span>
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Derecha */}
          <div className="bg-[#ECEEF3] border border-[#D4D8E1] rounded-[18px] px-[18px] sm:px-[22px] pt-[20px] sm:pt-[24px] pb-[20px] sm:pb-[22px] min-h-auto md:min-h-[281px]">
            <div className="flex items-center gap-[10px] mb-[18px]">
              <div className="w-[23px] h-[23px] rounded-full bg-[#9AA6BB] flex items-center justify-center text-white text-[12px] font-bold shrink-0">
                →
              </div>
              <h3 className="text-[#0A2E63] text-[14px] sm:text-[15px] font-semibold leading-none">
                Ten en cuenta que...
              </h3>
            </div>

            <ul className="space-y-[15px]">
              {tenEnCuenta.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[10px] text-[#8B96AA] text-[12px] sm:text-[13px] leading-[1.5]"
                >
                  <span className="text-[12px] mt-[2px] shrink-0">
                    {item.icono}
                  </span>
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nota inferior */}
        <div className="bg-[#F8F1DE] border border-[#F4B400] border-l-[3px] rounded-[14px] px-[16px] sm:px-[22px] py-[16px] sm:py-[18px]">
          <p className="text-[12px] sm:text-[13px] leading-[1.6] text-[#D79B00]">
            <span className="font-semibold">
              Una nota importante sobre los tiempos:
            </span>{" "}
            Los tiempos de resolución ante las entidades migratorias de cada
            país son ajenos a Colraices y varían por país, categoría y carga
            operativa de los consulados. Recibirás esta información en tu hoja
            de ruta para planear con realismo desde el inicio.
          </p>
        </div>

      </div>
    </section>
  );
}