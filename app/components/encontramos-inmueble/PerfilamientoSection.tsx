export default function PerfilamientoSection() {
  const yesItems = [
    {
      icon: "🌍",
      text: "Quieres invertir en vivienda en Colombia pero no tienes un inmueble definido.",
    },
    {
      icon: "❓",
      text: "Tienes dudas sobre qué tipo de inmueble te conviene según tus objetivos.",
    },
    {
      icon: "🤝",
      text: "No tienes red de confianza en Colombia para gestionar la búsqueda.",
    },
    {
      icon: "⏱️",
      text: "Quieres delegar todo el proceso de búsqueda y recibir opciones ya filtradas y analizadas.",
    },
  ];

  const noItems = [
    {
      icon: "🏠",
      text: "Ya encontraste el inmueble por tu cuenta y quieres proteger la compra. En ese caso, lo que corresponde es una revisión legal y comercial del inmueble.",
    },
    {
      icon: "💳",
      text: "Tienes bloqueos financieros no resueltos. Primero hay que poner en orden las finanzas antes de comprometer recursos en una compra.",
    },
  ];

  return (
    <section className="w-full border-t-[4px] border-[#091D3E] bg-[#FBF8F3] px-4 py-[64px] font-['Montserrat'] sm:px-6 sm:py-[80px] lg:px-8">
      <div className="mx-auto w-full max-w-[1064px]">
        {/* Header */}
        <div className="text-center">
          <div
            className="mb-[14px] flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFC107] sm:text-[11px] sm:tracking-[0.22em]"
            style={{
              animation:
                "perfilFadeDown 850ms cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            <span
              className="h-[2px] w-[20px] bg-[#FFC107]"
              style={{
                animation:
                  "perfilLineReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both",
              }}
            />
            <span>Perfilamiento</span>
          </div>

          <h2
            className="mx-auto max-w-[680px] text-[30px] font-bold leading-[1.12] tracking-[-0.04em] text-[#0F2D5C] sm:text-[42px]"
            style={{
              animation:
                "perfilTitleReveal 950ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both",
            }}
          >
            ¿Es este producto{" "}
            <em className="font-semibold italic text-[#FFC107]">para ti?</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-[36px] grid grid-cols-1 gap-5 sm:mt-[44px] sm:gap-6 lg:grid-cols-2">
          {/* YES CARD */}
          <div
            className="group relative overflow-hidden rounded-[18px] border border-[rgba(15,45,92,0.14)] bg-white/55 px-5 py-6 shadow-[0_1px_3px_rgba(15,45,92,0.08)] backdrop-blur-sm transition-transform duration-700 ease-out hover:-translate-y-[4px] sm:rounded-[20px] sm:px-[30px] sm:py-[28px] lg:hover:-translate-y-[6px]"
            style={{
              animation:
                "perfilCardReveal 950ms cubic-bezier(0.22, 1, 0.36, 1) 260ms both",
            }}
          >
            
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute -left-[60%] top-0 h-full w-[45%] rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[370%]" />
            </div>

            <div className="relative z-10 mb-5 flex items-center gap-3 sm:mb-[22px]">
              <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#0F2D5C] text-[17px] font-bold leading-none text-white transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[8deg]">
                ✓
              </div>

              <h3 className="text-[15px] font-bold leading-snug text-[#0F2D5C] sm:text-[16px]">
                Llave Inmobiliaria es para ti si…
              </h3>
            </div>

            <ul className="relative z-10 space-y-4 sm:space-y-[14px]">
              {yesItems.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[14px] font-normal leading-[1.55] text-[#334155] transition-transform duration-500 ease-out group-hover:translate-x-[2px] sm:gap-[14px] sm:text-[14.5px]"
                  style={{
                    animation: `perfilItemReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) ${
                      420 + index * 90
                    }ms both`,
                  }}
                >
                  <span className="mt-[2px] w-[18px] shrink-0 text-[14px] leading-none transition-transform duration-500 ease-out group-hover:scale-125 sm:w-[14px] sm:text-[13px]">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO CARD */}
          <div
            className="group relative overflow-hidden rounded-[18px] border border-[rgba(15,45,92,0.10)] bg-[#F8FAFC]/65 px-5 py-6 shadow-[0_1px_3px_rgba(15,45,92,0.04)] backdrop-blur-sm transition-transform duration-700 ease-out hover:-translate-y-[4px] sm:rounded-[20px] sm:px-[30px] sm:py-[28px] lg:hover:-translate-y-[6px]"
            style={{
              animation:
                "perfilCardReveal 950ms cubic-bezier(0.22, 1, 0.36, 1) 360ms both",
            }}
          >

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute -left-[60%] top-0 h-full w-[45%] rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[370%]" />
            </div>

            <div className="relative z-10 mb-5 flex items-center gap-3 sm:mb-[22px]">
              <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#94A3B8] text-[17px] font-bold leading-none text-white transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-x-[2px]">
                →
              </div>

              <h3 className="text-[15px] font-bold leading-snug text-[#475569] sm:text-[16px]">
                Te recomendamos otro camino si…
              </h3>
            </div>

            <ul className="relative z-10 space-y-4 sm:space-y-[14px]">
              {noItems.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[14px] font-normal leading-[1.55] text-[#64748B] transition-transform duration-500 ease-out group-hover:translate-x-[2px] sm:gap-[14px] sm:text-[14.5px]"
                  style={{
                    animation: `perfilItemReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) ${
                      620 + index * 90
                    }ms both`,
                  }}
                >
                  <span className="mt-[2px] w-[18px] shrink-0 text-[14px] leading-none transition-transform duration-500 ease-out group-hover:scale-125 sm:w-[14px] sm:text-[13px]">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes perfilFadeDown {
            0% {
              opacity: 0;
              transform: translateY(-12px);
              filter: blur(8px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes perfilLineReveal {
            0% {
              opacity: 0;
              transform: scaleX(0);
              transform-origin: right;
            }
            100% {
              opacity: 1;
              transform: scaleX(1);
              transform-origin: right;
            }
          }

          @keyframes perfilTitleReveal {
            0% {
              opacity: 0;
              transform: translateY(18px) scale(0.985);
              filter: blur(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes perfilCardReveal {
            0% {
              opacity: 0;
              transform: translateY(32px) scale(0.975);
              filter: blur(12px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes perfilItemReveal {
            0% {
              opacity: 0;
              transform: translateY(10px);
              filter: blur(6px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </section>
  );
}