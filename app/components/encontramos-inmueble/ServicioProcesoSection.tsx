const steps = [
  {
    icon: "🎯",
    number: "1",
    label: "Defines criterios y objetivos de inversión",
  },
  {
    icon: "🔍",
    number: "2",
    label: "Búsqueda y preselección con filtro comercial y legal",
  },
  {
    icon: "📋",
    number: "3",
    label: "Recibes un registro comparativo con opciones verificadas",
  },
  {
    icon: "🏠",
    number: "4",
    label: "Colraices coordina visitas presenciales o virtuales",
  },
  {
    icon: "📊",
    number: "5",
    label: "Análisis comparativo y recomendación final",
  },
  {
    icon: "🗝️",
    number: "6",
    label: "Tú decides. El siguiente paso está listo cuando quieras",
  },
];

export default function ServicioProcesoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#091D3E] py-[90px] font-['Montserrat',system-ui,sans-serif] sm:py-[100px]">
      {/* Fondo con grilla */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,79,158,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,79,158,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Brillos suaves */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#1A4F9E]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#F0B429]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-5 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F0B429]">
            <span className="h-[2px] w-5 rounded-full bg-[#F0B429]" />
            Proceso
          </div>

          <h2 className="text-[32px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[40px] lg:text-[44px]">
            Así funciona{" "}
            <em className="font-bold italic text-[#F0B429]">el servicio</em>
          </h2>

          <p className="mx-auto mt-5 max-w-none text-center text-[15px] font-medium leading-relaxed text-white/60 sm:text-[17px] md:whitespace-nowrap">
            Seis pasos estructurados. Tú defines tus objetivos al inicio y
            Colraices gestiona todo lo demás.
          </p>
        </div>

        {/* Pasos */}
        <div className="mt-[56px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Conector desktop */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-[28px] hidden h-px w-full bg-[#C9900C]/70 lg:block" />
              )}

              {/* Conector tablet */}
              {index < steps.length - 1 && (
                <div className="absolute top-[58px] hidden h-6 w-px bg-[#C9900C]/50 sm:block lg:hidden" />
              )}

              <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-[#C9900C]/70 bg-[#1A4F9E]/55 text-[22px] shadow-[0_0_0_6px_rgba(26,79,158,0.14)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-[#F0B429] group-hover:bg-[#1A4F9E]/80 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                <span className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  {step.icon}
                </span>

                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C9900C] px-1 text-[10px] font-bold leading-none text-[#091D3E] transition-all duration-500 group-hover:bg-[#F0B429]">
                  {step.number}
                </span>
              </div>

              <p className="mt-4 max-w-[170px] text-[12.5px] font-bold leading-snug text-white/65 transition-colors duration-300 group-hover:text-white sm:text-[13px]">
                {step.label}
              </p>
            </div>
          ))}
        </div>

        {/* Caja inferior */}
        <div className="mt-10 mr-auto w-full max-w-[710px] rounded-[20px] border border-[#F0B429]/20 bg-[#C9900C]/10 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 hover:border-[#F0B429]/35 hover:bg-[#C9900C]/15 sm:px-6">
          <p className="max-w-[631px] text-left text-[13.44px] font-normal leading-[22.2px] tracking-[0px] text-white/65">
            <strong className="whitespace-nowrap font-bold text-[#F0B429]">
              Cuando decides avanzar:
            </strong>{" "}
            Si eliges un inmueble usado, Colraices activa el acompañamiento
            completo de la compra para que el proceso sea seguro de principio a
            fin.
          </p>
        </div>
      </div>
    </section>
  );
}