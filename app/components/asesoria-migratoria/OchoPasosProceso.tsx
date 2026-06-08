"use client";

const pasosProceso = [
  {
    numero: "1",
    icono: "🤝",
    titulo: "Contacto y contratación",
    descripcion: "Eliges la modalidad que corresponde a tu momento.",
  },
  {
    numero: "2",
    icono: "📄",
    titulo: "Recolección de información",
    descripcion: "Perfil laboral, educativo, familiar y financiero.",
  },
  {
    numero: "3",
    icono: "🔍",
    titulo: "Diagnóstico y análisis",
    descripcion: "Evaluación de opciones por país y tipo de visa.",
  },
  {
    numero: "4",
    icono: "🗺️",
    titulo: "Entrega de la hoja de ruta",
    descripcion: "Tu proceso completo, documentado y personalizado.",
  },
  {
    numero: "5",
    icono: "💬",
    titulo: "Sesión de orientación",
    descripcion: "Explicación de la hoja de ruta y primeros pasos concretos.",
  },
  {
    numero: "6",
    icono: "📁",
    titulo: "Revisión documental",
    descripcion: "Colraíces revisa y orienta cada documento antes de radicar.",
  },
  {
    numero: "7",
    icono: "📬",
    titulo: "Radicación y seguimiento",
    descripcion: "Acompañamiento activo desde la solicitud hasta la respuesta.",
  },
  {
    numero: "8",
    icono: "✈️",
    titulo: "Resolución y orientación final",
    descripcion:
      "Recibes la respuesta. Colraíces te orienta sobre los próximos pasos sea cual sea el resultado.",
  },
];

export default function OchoPasosProceso() {
  return (
    <section className="relative w-full bg-[#091D3E] overflow-hidden">
      {/* Fondo grid exacto */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Contenedora principal */}
      <div className="relative w-full max-w-[1375.37px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[60px] xl:px-[107.69px] pt-[70px] sm:pt-[85px] lg:pt-[99.98px] pb-[70px] sm:pb-[85px] lg:pb-[99.98px]">
        {/* Contenedor interno */}
        <div className="w-full max-w-[1159.99px] mx-auto flex flex-col items-center px-0 sm:px-4 lg:px-[48px]">
          {/* Label */}
          <div className="flex items-center gap-[10px] mb-[20px] sm:mb-[23px]">
            <div className="w-[18px] h-[2px] bg-[#F0B429]" />
            <span
              className="text-white font-semibold uppercase"
              style={{
                fontSize: "clamp(13px, 2vw, 16px)",
                letterSpacing: "1.74px",
                lineHeight: "1",
              }}
            >
              El proceso
            </span>
          </div>

          {/* Título */}
          <h2
            className="text-center mb-[18px] sm:mb-[20px]"
            style={{
              lineHeight: "1.2",
              fontSize: "clamp(30px, 5vw, 41.6px)",
            }}
          >
            <span className="text-white font-semibold">
              Ocho pasos.{" "}
            </span>
            <span className="text-[#F0B429] italic font-semibold">
              Cero improvisación.
            </span>
          </h2>

          {/* Subtítulo */}
          <p
            className="text-center text-white/60 max-w-[800px] mb-[40px] sm:mb-[52px] px-2"
            style={{
              fontSize: "clamp(14px, 2vw, 16.8px)",
              lineHeight: "1.7",
            }}
          >
            Desde el primer contacto hasta la resolución, cada etapa está
            definida y acompañada.
          </p>

          {/* Grid tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] sm:gap-[24px] w-full max-w-[1063.99px] justify-items-center">
            {pasosProceso.map((paso) => (
              <div
                key={paso.numero}
                className="w-full max-w-[247.98px] min-h-[198.49px] rounded-[20px] border border-white/[0.08] bg-white/[0.04] flex flex-col items-center text-center pt-[25.27px] px-[21.27px] pb-[22px] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#F0B429]/30 hover:bg-white/[0.06]"
              >
                {/* Número */}
                <div className="w-[31.99px] h-[31.99px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#F0B429] flex items-center justify-center text-white text-[11.52px] font-bold leading-[17.3px] mb-[12px]">
                  {paso.numero}
                </div>

                {/* Ícono */}
                <div className="text-[22.4px] leading-[33.6px] mb-[10px]">
                  {paso.icono}
                </div>

                {/* Título */}
                <h3
                  className="text-white font-semibold mb-[8px] max-w-[205.44px] min-h-[38px] flex items-center justify-center"
                  style={{
                    fontSize: "clamp(13px, 1.8vw, 13.6px)",
                    lineHeight: "1.35",
                  }}
                >
                  {paso.titulo}
                </h3>

                {/* Descripción */}
                <p
                  className="text-white/50 font-semibold max-w-[205.44px]"
                  style={{
                    fontSize: "clamp(11px, 1.7vw, 12px)",
                    lineHeight: "1.5",
                  }}
                >
                  {paso.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}