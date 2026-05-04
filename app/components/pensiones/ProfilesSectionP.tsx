export default function ProfilesSectionP() {
  const profiles = [
    {
      icon: "📁",
      module: "MÓDULO I",
      title: "Cotizaste en Colombia y emigraste",
      desc: `Crees que las semanas que cotizaste antes de salir "se perdieron". No se perdieron. Siguen registradas y tienen valor legal y económico.`,
      outcome: "→ Recuperación del historial. Orientación sobre conservar, retomar o proyectar hacia pensión.",
      mod2: false,
    },
    {
      icon: "✈️",
      module: "MÓDULO I",
      title: "Quieres seguir cotizando desde el exterior",
      desc: `Llevas años afuera y quieres mantener o construir pensión colombiana, además de la del país donde vives. Eso es posible y tiene una ruta específica.`,
      outcome: "→ Ruta de cotización voluntaria al sistema colombiano. Proyección de pensión doble.",
      mod2: false,
    },
    {
      icon: "🤝",
      module: "MÓDULO I",
      title: "Vives en país con convenio bilateral",
      desc: `Colombia tiene acuerdos con varios países que permiten sumar semanas cotizadas en ambos sistemas para acceder a pensión. Muy pocos colombianos afuera saben que esto existe.`,
      outcome: "→ Evaluación del convenio, documentación requerida y pasos para activarlo.",
      mod2: false,
    },
    {
      icon: "🏛️",
      module: "MÓDULO I",
      title: "Tienes edad de pensión pero no completaste semanas",
      desc: `Quien llega a la edad sin completar el tiempo requerido tiene derecho a la devolución de saldos o al bono pensional — uno de los derechos más desconocidos del sistema.`,
      outcome: "→ Orientación sobre el bono pensional y su posible uso en la compra de vivienda en Colombia.",
      mod2: false,
    },
    {
      icon: "⚖️",
      module: "MÓDULO II",
      title: "Te negaron una pensión que te corresponde",
      desc: `Colpensiones u otro ente ha negado o retardado injustificadamente una pensión a la que tienes derecho. Los caminos administrativos no han funcionado.`,
      outcome: "→ Evaluación del caso. Si procede: representación legal y eventual demanda contra el Estado.",
      mod2: true,
    },
  ];

  return (
    <section className="w-full bg-white border-t-[3px] border-[#0F2D5C] py-14 sm:py-20 lg:py-[88px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center max-w-[760px] mx-auto mb-10 sm:mb-14 lg:mb-[56px]">
          <p className="text-[#FFC107] uppercase tracking-[3px] text-[11px] sm:text-[13px] font-semibold mb-4 sm:mb-6">
            ¿PARA QUIÉN ES?
          </p>

          <h2 className="text-[#0F2D5C] font-bold leading-[1.08]
            text-[28px] xs:text-[32px] sm:text-[42px] lg:text-[56px]">
            Cinco perfiles,{" "}
            <br className="hidden sm:block" />
            <span className="italic font-semibold text-[#1A4F9E]">
              una misma garantía
            </span>
          </h2>

          <p className="mt-5 sm:mt-7 text-[#64748B]
            text-[15px] sm:text-[16px] lg:text-[18px]
            leading-[1.7] sm:leading-[1.75]">
            El servicio tiene una ruta distinta para cada situación. Lo que no
            cambia: Al final, el cliente entiende exactamente qué tiene, qué le
            corresponde y cómo ejercerlo.
          </p>
        </div>

        {/* ── GRID ── */}
        {/*
          móvil  (<640px)  → 1 columna
          tablet (640–1023px) → 2 columnas
          desktop (≥1024px) → 3 columnas
          La 5ª tarjeta en desktop queda centrada en la 2ª fila
          mediante el truco xl:col-start-2
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden
                bg-white rounded-[18px] sm:rounded-[20px]
                border border-[rgba(15,45,92,0.10)]
                px-5 sm:px-6 lg:px-7
                pt-5 sm:pt-6 lg:pt-7
                pb-5 sm:pb-6
                flex flex-col
                transition-[transform,box-shadow,border-color]
                duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-2
                hover:shadow-[0_20px_48px_rgba(15,45,92,0.13),0_4px_12px_rgba(15,45,92,0.07)]
                hover:border-[rgba(15,45,92,0.18)]
                ${index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
              `}
            >
              {/* Línea deslizante top */}
              <span
                className={`
                  absolute top-0 left-0 h-[3px] w-0 group-hover:w-full
                  rounded-t-[20px]
                  transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)]
                  ${profile.mod2 ? "bg-[#1A4F9E]" : "bg-[#FFC107]"}
                `}
              />

              {/* Emoji icon */}
              <div className="text-[20px] sm:text-[22px] leading-none mb-4 sm:mb-5">
                {profile.icon}
              </div>

              {/* Módulo badge */}
              <div
                className={`
                  inline-flex items-center justify-center w-fit
                  h-[22px] px-3 rounded-full mb-4
                  ${profile.mod2
                    ? "bg-[#EAF1FB] border border-[rgba(15,45,92,0.15)]"
                    : "bg-[#FEF3C7] border border-[rgba(255,193,7,0.35)]"}
                `}
              >
                <span
                  className={`font-bold uppercase tracking-[1.09px]
                    ${profile.mod2 ? "text-[#1A4F9E]" : "text-[#FFC107]"}`}
                  style={{ fontSize: "9.5px", lineHeight: "1" }}
                >
                  {profile.module}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-[#0F2D5C] font-bold leading-[1.3]
                text-[15px] sm:text-[16px]
                mb-3 sm:mb-[14px]">
                {profile.title}
              </h3>

              {/* Descripción */}
              <p className="text-[#64748B] leading-[1.65] flex-grow
                text-[14px] sm:text-[15px] lg:text-[16px]
                mb-4 sm:mb-[18px]">
                {profile.desc}
              </p>

              {/* Resultado */}
              <div
                className={`
                  rounded-[6px] px-3 sm:px-[14px] py-3 sm:py-[12px]
                  bg-[#FBF8F3] text-[#334155]
                  text-[13px] sm:text-[14px] leading-[1.45]
                  border-l-[2px]
                  ${profile.mod2 ? "border-[#0F2D5C]" : "border-[#FFC107]"}
                `}
              >
                {profile.outcome}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}