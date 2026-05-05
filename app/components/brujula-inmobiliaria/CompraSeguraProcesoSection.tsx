const steps = [
  {
    number: "1",
    icon: "🤝",
    label: "Contratación y pago del servicio",
  },
  {
    number: "2",
    icon: "📋",
    label: "Recepción de información del inmueble",
  },
  {
    number: "3",
    icon: "🔍",
    label: "Análisis completo del inmueble",
  },
  {
    number: "4",
    icon: "📑",
    label: "Entrega del diagnóstico y viabilidad",
  },
  {
    number: "5",
    icon: "⚖️",
    label: "Negociación y promesa de compraventa",
  },
  {
    number: "6",
    icon: "💸",
    label: "Gestión de Monetización y arras",
  },
  {
    number: "7",
    icon: "🏠",
    label: "Cierre y escrituración",
  },
];

export default function CompraSeguraProcesoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#091D3E] py-[100px] font-['Montserrat',system-ui,sans-serif]">
      {/* BORDE SUPERIOR */}
      <div className="absolute left-0 top-0 z-[2] h-[3px] w-full bg-gradient-to-r from-[#1A4F9E] via-[#F0B429] to-[#1A4F9E]" />

      {/* BORDE INFERIOR */}
      <div className="absolute bottom-0 left-0 z-[2] h-[3px] w-full bg-gradient-to-r from-[#C9900C] via-[#F0B429] to-[#1A4F9E]" />

      {/* GRID BACKGROUND */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-100"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="bi-flow-grid-pattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgb(26,79,158)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#bi-flow-grid-pattern)"
          opacity="0.1"
        />
      </svg>

      <div className="relative z-[1] mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[920px] text-center">
          <div className="mb-[18px] inline-block text-[12px] font-[800] uppercase leading-none tracking-[0.29em] text-[#F0B429]">
            Proceso paso a paso
          </div>

          <h2 className="mx-auto text-[31px] font-[800] leading-[1.13] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[46px]">
            El proceso detrás de{" "}
            <em className="font-[800] italic text-[#F0B429]">
              una compra segura
            </em>
          </h2>

          <p className="mx-auto mt-[24px] max-w-[800px] text-[15px] font-[500] leading-[1.65] tracking-[-0.01em] text-white/60 sm:text-[17px]">
            Un acompañamiento estructurado para analizar el inmueble y cerrar la
            compra correctamente.
          </p>
        </div>

        {/* DESKTOP FLOW */}
        <div className="relative mx-auto mt-[62px] hidden w-full max-w-[1010px] grid-cols-7 items-start lg:grid">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative flex min-w-0 flex-col items-center"
            >
              {/* CONNECTOR */}
              {index !== steps.length - 1 && (
                <div className="absolute left-1/2 top-[27px] z-0 h-px w-full translate-x-[28px] bg-[#C9900C]/60">
                  <div className="h-full w-0 bg-gradient-to-r from-[#F0B429] to-[#C9900C] transition-all duration-700 ease-out group-hover:w-full" />
                </div>
              )}

              {/* CIRCLE */}
              <div className="relative z-[2] flex h-[56px] w-[56px] items-center justify-center rounded-full border-[2px] border-[#C9900C]/70 bg-[#0F2D5C] text-[19px] leading-none shadow-[0_10px_24px_rgba(0,0,0,0.17)] transition-all duration-500 ease-out group-hover:-translate-y-[3px] group-hover:border-[#F0B429] group-hover:shadow-[0_16px_34px_rgba(240,180,41,0.15)]">
                <span className="block translate-y-[1px] transition-transform duration-500 ease-out group-hover:scale-110">
                  {step.icon}
                </span>

                <div className="absolute -right-[7px] -top-[7px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#C9900C] text-[10px] font-[900] leading-none text-[#091D3E] shadow-[0_5px_12px_rgba(0,0,0,0.22)] transition-colors duration-500 group-hover:bg-[#F0B429]">
                  {step.number}
                </div>
              </div>

              {/* LABEL */}
              <div className="mt-[15px] max-w-[140px] text-center text-[12.8px] font-[700] leading-[1.34] tracking-[-0.01em] text-white/68 transition-colors duration-500 group-hover:text-white">
                {step.label}
              </div>
            </div>
          ))}
        </div>

        {/* TABLET */}
        <div className="mx-auto mt-[58px] hidden max-w-[760px] grid-cols-2 gap-5 sm:grid lg:hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex items-center gap-4 rounded-[20px] border border-[#F0B429]/15 bg-white/[0.035] p-4 transition-all duration-500 ease-out hover:-translate-y-[3px] hover:border-[#F0B429]/35 hover:bg-white/[0.055]"
            >
              <div className="relative flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#C9900C]/70 bg-[#0F2D5C] text-[19px] leading-none shadow-[0_10px_24px_rgba(0,0,0,0.17)]">
                {step.icon}

                <div className="absolute -right-[7px] -top-[7px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#C9900C] text-[10px] font-[900] leading-none text-[#091D3E]">
                  {step.number}
                </div>
              </div>

              <div className="text-[13px] font-[700] leading-[1.38] tracking-[-0.01em] text-white/70 transition-colors duration-500 group-hover:text-white">
                {step.label}
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="mx-auto mt-[48px] grid max-w-[430px] gap-4 sm:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex items-start gap-4">
              {index !== steps.length - 1 && (
                <div className="absolute left-[28px] top-[56px] h-[calc(100%+16px)] w-px bg-[#C9900C]/50" />
              )}

              <div className="relative z-[2] flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#C9900C]/70 bg-[#0F2D5C] text-[19px] leading-none shadow-[0_10px_24px_rgba(0,0,0,0.17)]">
                {step.icon}

                <div className="absolute -right-[7px] -top-[7px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#C9900C] text-[10px] font-[900] leading-none text-[#091D3E]">
                  {step.number}
                </div>
              </div>

              <div className="min-h-[56px] flex-1 rounded-[18px] border border-[#F0B429]/15 bg-white/[0.035] px-4 py-[15px]">
                <p className="text-[13px] font-[700] leading-[1.4] tracking-[-0.01em] text-white/72">
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NOTE */}
        <div className="mx-auto mt-[40px] max-w-[680px] rounded-[20px] border border-[#F0B429]/20 bg-[#C9900C]/10 px-[24px] py-[20px] shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
          <p className="text-[13.5px] font-[500] leading-[1.65] tracking-[-0.01em] text-white/65">
            <strong className="font-[800] text-[#F0B429]">
              Nota importante:
            </strong>{" "}
            Si el inmueble analizado no es viable o conveniente, el proceso
            regresa al paso 2 con un nuevo inmueble{" "}
            <strong className="font-[800] text-white">
              sin costo adicional
            </strong>{" "}
            para el cliente.
          </p>
        </div>
      </div>
    </section>
  );
}