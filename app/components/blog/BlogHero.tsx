export default function BlogHero() {
  return (
    <section
      className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[508px] lg:px-8"
      style={{
        background: "linear-gradient(135deg, #192440 0%, #2A3F77 60%, #3B5298 100%)",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.34,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 48%, transparent 88%)",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 48%, transparent 88%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-[1152px] flex-col items-center text-center">

        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center justify-center gap-[9px] rounded-full"
          style={{
            padding: "7px 18px",
            border: "0.8px solid rgba(255,193,7,0.30)",
            background: "rgba(255,193,7,0.15)",
          }}
        >
          {/* Pulsing dot */}
          <span className="relative flex shrink-0" style={{ width: 7, height: 7 }}>
            <span
              className="absolute inline-flex rounded-full animate-ping"
              style={{
                width: 7,
                height: 7,
                background: "#FFC107",
                opacity: 0.75,
              }}
            />
            <span
              className="relative inline-flex rounded-full"
              style={{ width: 7, height: 7, background: "#FFC107" }}
            />
          </span>
          <span
            className="uppercase tracking-[0.13em]"
            style={{ fontSize: 12, fontWeight: 600, color: "#FFC107", lineHeight: "18px" }}
          >
            Blog Colraices
          </span>
        </div>

        {/* Title */}
        <h1
          className="w-full max-w-[980px] text-center text-[32px] font-extrabold leading-[38px] tracking-[-0.7px] text-white sm:text-[40px] sm:leading-[46px] lg:text-[46.69px] lg:leading-[53.7px] lg:tracking-[-1px]"
          style={{
            fontWeight: 800,
          }}
        >
          Resuelve tus dudas sobre
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span style={{ color: "#FFC107" }}>
            inversión en Colombia desde el exterior
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 max-w-[904px] text-center text-[14px] font-semibold leading-[23px] text-white/70 sm:mt-8 sm:text-[15px] sm:leading-[25px] lg:mt-[46px] lg:text-[16px] lg:leading-[27.2px]"
          style={{
            fontWeight: 600,
            color: "rgba(255,255,255,0.70)",
          }}
        >
          Entiende mejor tus opciones en Colombia: crédito, vivienda, migración,
          impuestos y decisiones patrimoniales.
        </p>
      </div>
    </section>
  );
}
