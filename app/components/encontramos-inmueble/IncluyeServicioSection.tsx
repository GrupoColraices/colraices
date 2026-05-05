const etapas = [
  {
    number: "01",
    title: "Criterios y orientación inicial",
    items: [
      "Definición de criterios con el cliente: ciudad, zona, presupuesto, uso y objetivos de inversión.",
      "Orientación sobre el tipo de inmueble más conveniente según tu perfil y metas.",
      "Identificación de zonas con potencial según el destino: uso familiar, alquiler, rentas cortas o valorización.",
    ],
  },
  {
    number: "02",
    title: "Búsqueda y preselección",
    items: [
      "Búsqueda activa en el mercado secundario, con constructoras aliadas y red de inmobiliarias.",
      "Filtro comercial inicial: precio vs. mercado, estado del inmueble, condiciones del vendedor.",
      "Filtro legal inicial: análisis del certificado de tradición para detectar alertas antes de presentar opciones.",
      "Registro comparativo claro de las opciones preseleccionadas.",
    ],
  },
  {
    number: "03",
    title: "Visitas y análisis comparativo",
    items: [
      "Coordinación de visitas presenciales o virtuales con propietarios, inmobiliarias o constructoras.",
      "Relación directa con todas las partes involucradas en tu nombre.",
      "Análisis comparativo de las opciones evaluadas con recomendaciones claras para tomar la decisión.",
    ],
  },
];

export default function IncluyeServicioSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F7F7F8] px-4 py-[100px] font-['Montserrat',sans-serif] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1110px]">
        {/* Header */}
        <div className="li-fade-up mx-auto text-center">
          <div className="mb-5 flex items-center justify-center gap-[10px]">
            <span className="li-line h-[2px] w-[21px] bg-[#C9900C]" />

            <span className="text-[10.88px] font-semibold uppercase leading-[16.3px] tracking-[1.74px] text-[#C9900C]">
              Qué incluye el servicio
            </span>
          </div>

          <h2 className="text-[35.02px] font-semibold leading-[42px] text-[#0F2D5C]">
            <span>Tres etapas. </span>
            <span className="li-title-accent italic text-[#C9900C]">
              Un solo aliado.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[800px] text-[16.8px] font-normal leading-[28.9px] text-[#475569]">
            Desde que defines tus objetivos hasta que recibes la recomendación
            final, Colraices gestiona cada paso por ti.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[56px] grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {etapas.map((etapa, index) => (
            <article
              key={etapa.number}
              style={{
                animationDelay: `${index * 140}ms`,
              }}
              className="li-card group overflow-hidden rounded-[28px] bg-white shadow-[0_4px_16px_rgba(15,45,92,0.10),0_2px_6px_rgba(15,45,92,0.06)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_24px_64px_rgba(15,45,92,0.20)]"
            >
              {/* Card head */}
              <div className="relative flex h-[134px] items-end overflow-hidden bg-[#0F2D5C] px-7 pb-8 pt-7 transition-all duration-500 group-hover:bg-[#0B254D]">
                <span className="absolute left-7 top-5 text-[48px] font-bold leading-none text-[#2E4F84]/55 transition-all duration-500 group-hover:scale-110 group-hover:text-white/15">
                  {etapa.number}
                </span>

                <span className="li-floating-circle absolute -right-4 bottom-[-16px] h-[76px] w-[76px] rounded-full bg-white/14 transition-all duration-500 group-hover:scale-125 group-hover:bg-[#C9900C]/20" />

                <h3 className="relative z-10 max-w-[280px] text-[17.6px] font-semibold leading-[22.9px] text-white transition-all duration-500 group-hover:translate-x-1">
                  {etapa.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="px-6 py-6">
                <div className="space-y-[10px]">
                  {etapa.items.map((item, itemIndex) => (
                    <div
                      key={item}
                      style={{
                        animationDelay: `${
                          260 + index * 120 + itemIndex * 70
                        }ms`,
                      }}
                      className="li-item flex items-start gap-3"
                    >
                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C9900C] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(201,144,12,0.55)]" />

                      <p className="text-[13.28px] font-normal leading-[21.2px] text-[#475569] transition-colors duration-300 group-hover:text-[#334155]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .li-fade-up {
          opacity: 0;
          transform: translateY(18px);
          animation: liFadeUp 800ms ease-out forwards;
        }

        .li-card {
          opacity: 0;
          transform: translateY(34px) scale(0.97);
          animation: liCardIn 760ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .li-item {
          opacity: 0;
          transform: translateX(-10px);
          animation: liItemIn 520ms ease-out forwards;
        }

        .li-line {
          transform-origin: right center;
          animation: liLineGrow 900ms ease-out forwards;
        }

        .li-title-accent {
          display: inline-block;
          animation: liAccentFloat 3.8s ease-in-out infinite;
        }

        .li-floating-circle {
          animation: liFloatCircle 4.5s ease-in-out infinite;
        }

        @keyframes liFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes liCardIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes liItemIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes liLineGrow {
          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes liAccentFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes liFloatCircle {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-5px, -4px) scale(1.06);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .li-fade-up,
          .li-card,
          .li-item,
          .li-line,
          .li-title-accent,
          .li-floating-circle {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}