export default function CEQuoteSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #081D3F 0%, #2C1A04 50%, #081D3F 100%)",
      }}
    >
      {/* Ambient glow left */}
      <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#FF7A00]/12 blur-[150px] pointer-events-none" />

      {/* Ambient glow right */}
      <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#FF7A00]/10 blur-[160px] pointer-events-none" />

      {/* Main container */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1180px]
          min-h-[415.73px]
          mx-auto
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          sm:px-10
          lg:px-16
          py-[88px]
        "
      >
        {/* Quote Mark */}
        <div
          className="
            text-[rgba(255,193,7,0.25)]
            text-[56px]
            sm:text-[68px]
            md:text-[80px]
            leading-[56px]
            mb-[18px]
          "
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            letterSpacing: "0px",
          }}
        >
          "
        </div>

        {/* Quote Text */}
        <p
          className="
            text-white
            italic
            font-normal
            mx-auto
            text-center
            max-w-[1060px]
            text-[20px]
            sm:text-[24px]
            md:text-[29.88px]
            leading-[34px]
            md:leading-[44.8px]
            tracking-[0px]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
            textRendering: "geometricPrecision",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          El colombiano que se fue no dejó de ser emprendedor. Migrar también
          es emprender. Ese impulso no desaparece con la distancia. A veces
          solo necesita método para volver a hacerse realidad.
        </p>

        {/* Source */}
        <div
          className="
            mt-[34px]
            text-center
            text-white/40
            font-normal
            uppercase
            text-[11.52px]
            leading-[17.3px]
            tracking-[1.73px]
          "
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Propósito · Asesoría de Emprendimiento · Colraices
        </div>
      </div>
    </section>
  );
}