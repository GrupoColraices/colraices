const BENEFITS = [
  "Análisis de mercado e inmueble completo",
  "Promesa de compraventa + mandato legal",
  "Monetización incluida para arras",
  "Interlocutor único con todas las partes",
  "4 inmuebles - Durante 12 meses",
];

const INFO_CARDS = [
  {
    label: "Producto",
    value: "Brújula Inmobiliaria",
    valueClass: "text-[22px] sm:text-[24px] tracking-[-0.02em]",
  },
  {
    label: "Pago único",
    value: "US$ 380",
    valueClass: "text-[20px]",
  },
  {
    label: "Inmuebles incluidos",
    value: "4 inmuebles - durante 12 meses",
    valueClass: "text-[19px] sm:text-[20px]",
  },
];

const infoCardClass =
  "rounded-[10px] border border-white/10 bg-white/[0.04] px-5 py-5";

const infoLabelClass =
  "text-[11px] font-medium uppercase tracking-[0.28em] text-white/35";

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern
            id="bi-grid-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(26,79,158,1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#bi-grid-pattern)"
          opacity="0.12"
        />
      </svg>

      <svg
        className="absolute right-[-140px] top-[-140px] h-[520px] w-[520px] sm:right-[-80px] sm:top-[-120px] sm:h-[600px] sm:w-[600px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bi-glow1">
            <stop offset="0%" stopColor="rgb(201,144,12)" stopOpacity="1" />
            <stop offset="70%" stopColor="rgb(201,144,12)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="300"
          cy="300"
          r="300"
          fill="url(#bi-glow1)"
          opacity="0.18"
        />
      </svg>

      <svg
        className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] sm:bottom-[-100px] sm:left-[-60px] sm:h-[500px] sm:w-[500px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bi-glow2">
            <stop offset="0%" stopColor="rgb(26,79,158)" stopOpacity="1" />
            <stop offset="70%" stopColor="rgb(26,79,158)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="250"
          cy="250"
          r="250"
          fill="url(#bi-glow2)"
          opacity="0.22"
        />
      </svg>
    </div>
  );
}

function CompassBackground() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 opacity-100 sm:h-[470px] sm:w-[470px] lg:h-[560px] lg:w-[560px]">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="h-full w-full"
        opacity="0.06"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" />

        <line x1="100" y1="5" x2="100" y2="195" stroke="white" strokeWidth="1" />
        <line x1="5" y1="100" x2="195" y2="100" stroke="white" strokeWidth="1" />
        <line x1="33" y1="33" x2="167" y2="167" stroke="white" strokeWidth=".7" />
        <line x1="167" y1="33" x2="33" y2="167" stroke="white" strokeWidth=".7" />

        <polygon points="100,10 108,95 100,80 92,95" fill="white" />
        <polygon
          points="100,190 108,105 100,120 92,105"
          fill="white"
          fillOpacity="0.3"
        />

        <text
          x="100"
          y="24"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="bold"
        >
          N
        </text>
        <text
          x="100"
          y="183"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fillOpacity="0.5"
        >
          S
        </text>
        <text
          x="184"
          y="104"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fillOpacity="0.5"
        >
          E
        </text>
        <text
          x="16"
          y="104"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fillOpacity="0.5"
        >
          O
        </text>
      </svg>
    </div>
  );
}

function InfoCard({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass: string;
}) {
  return (
    <div className={infoCardClass}>
      <div className={infoLabelClass}>{label}</div>
      <div className={`mt-3 font-bold text-white ${valueClass}`}>{value}</div>
    </div>
  );
}

export default function BrujulaHero() {
  return (
    <section className="relative min-h-[calc(100vh-68px)] overflow-hidden bg-[#091D3E] font-[Montserrat,system-ui,sans-serif] text-white">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-68px)] w-full max-w-[1120px] items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[470px_460px] lg:gap-[120px]">
          <div className="relative z-20 animate-[biFadeUp_0.85s_ease-out_both]">
            <h1 className="text-[46px] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-[62px] lg:text-[58px]">
              Brújula
              <span className="mt-1 block font-extrabold italic text-[#F0B429]">
                Inmobiliaria
              </span>
            </h1>

            <div className="mt-7 h-[3px] w-[72px] rounded-full bg-[#F0B429]" />

            <p className="mt-7 max-w-[510px] text-[16px] font-normal leading-[1.75] tracking-[0.01em] text-white/70 sm:text-[18px]">
              Brújula Inmobiliaria te acompaña en la compra de vivienda usada
              en Colombia cuando estás en el exterior. Analizamos el precio real
              del inmueble y su situación jurídica. Verificamos si es viable
              para crédito hipotecario. Y te representamos en la negociación y
              la promesa de compraventa.
            </p>

            <a
              href="#contacto"
              className="mt-9 inline-flex h-[50px] items-center justify-center rounded-full bg-[#F0B429] px-9 text-[14px] font-bold tracking-[0.02em] text-[#091D3E] shadow-[0_16px_34px_rgba(240,180,41,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(240,180,41,0.38)]"
            >
              Contratar ahora
            </a>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[460px] animate-[biFadeUp_0.95s_ease-out_0.12s_both] lg:mx-0">
            <CompassBackground />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.075] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:rounded-[32px] sm:p-9">
              <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#C9900C]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1A4F9E]/30 blur-3xl" />

              <div className="relative z-10 space-y-2">
                {INFO_CARDS.map((card) => (
                  <InfoCard key={card.label} {...card} />
                ))}

                <ul className="space-y-3 pt-4">
                  {BENEFITS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13.5px] leading-relaxed text-white/62"
                    >
                      <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#F0B429]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/15 lg:flex">
          <div className="h-6 w-px bg-white/15" />
          Descubrir
        </div>
      </div>

      <style>{`
        @keyframes biFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}