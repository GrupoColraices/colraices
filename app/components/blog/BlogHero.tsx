export default function BlogHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        height: "508px",
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
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1152px] px-[86px]">

        {/* Badge */}
        <div
          className="inline-flex items-center justify-center gap-[9px] rounded-full mb-[24px]"
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
          className="text-center text-white w-full"
          style={{
            fontSize: "46.69px",
            fontWeight: 800,
            lineHeight: "53.7px",
            letterSpacing: "-1px",
          }}
        >
          Resuelve tus dudas sobre
          <br />
          <span style={{ color: "#FFC107" }}>
            inversión en Colombia desde el exterior
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-center mt-[46px] max-w-[904px]"
          style={{
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "27.2px",
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