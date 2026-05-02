"use client";

const fasesPago = [
  {
    porcentaje: "40%",
    etapa: "Al contratar",
    valor: "US$1.280",
    descripcion: "Diagnóstico y formulación",
  },
  {
    porcentaje: "30%",
    etapa: "Al lanzar el negocio",
    valor: "US$960",
    descripcion: "Estructuración lista",
  },
  {
    porcentaje: "30%",
    etapa: "Al mes 6 de operación",
    valor: "US$960",
    descripcion: "Negocio en marcha",
  },
];

export default function AsesoriaEmprendimiento() {
  return (
    <section className="relative w-full overflow-hidden bg-[#081D3F] border-b-[3px] border-[#FFC107]">
      
      {/* Fondo grid premium */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Amber glow superior izquierdo */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "clamp(220px, 30vw, 380px)",
          height: "clamp(220px, 30vw, 380px)",
          top: "60px",
          left: "-80px",
          background:
            "radial-gradient(circle, rgba(240,180,41,0.18) 0%, rgba(240,180,41,0.06) 50%, transparent 70%)",
          animation: "amberPulse 4s ease-in-out infinite",
        }}
      />

      {/* Amber glow inferior derecho */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "clamp(180px, 22vw, 260px)",
          height: "clamp(180px, 22vw, 260px)",
          bottom: "120px",
          right: "60px",
          background:
            "radial-gradient(circle, rgba(240,180,41,0.18) 0%, rgba(240,180,41,0.06) 50%, transparent 70%)",
          animation: "amberPulse 4s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* Glow azul profundo */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#1A4F9E]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#1A4F9E]/15 blur-[160px]" />

      <style>{`
        @keyframes amberPulse {
          0%, 100% {
            opacity: 0;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>

      {/* Círculo grande derecho */}
      <div className="absolute top-[30px] right-[4%] hidden xl:block pointer-events-none">
        <div className="relative w-[360px] h-[360px] rounded-full border border-[#FFC107]/10">
          <div className="absolute inset-[28px] rounded-full border border-[#FFC107]/8" />
          <div className="absolute inset-[58px] rounded-full border border-[#1A4F9E]/15" />
        </div>
      </div>

      {/* Main container */}
      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-[90px] sm:pt-[120px] lg:pt-[150px] pb-[90px] sm:pb-[120px] lg:pb-[130px]">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-[60px] xl:gap-[80px]">
          
          {/* LEFT SIDE */}
          <div className="w-full max-w-[531px] text-center xl:text-left">
            
            {/* Heading */}
            <div className="leading-none">
              <h2
                className="text-white font-black"
                style={{
                  fontSize: "clamp(42px, 7vw, 59.76px)",
                  lineHeight: "1.05",
                }}
              >
                Asesoría de
              </h2>

              <h2
                className="text-[#FFC107] font-black italic"
                style={{
                  fontSize: "clamp(42px, 7vw, 59.76px)",
                  lineHeight: "1.05",
                }}
              >
                Emprendimiento
              </h2>
            </div>

            {/* Accent line */}
            <div className="w-[56px] h-[3px] bg-gradient-to-r from-[#FFC107] to-[#FFD54F] mt-[26px] mb-[30px] mx-auto xl:mx-0 rounded-full" />

            {/* Description */}
            <p
              className="text-white/70 max-w-[520px] mx-auto xl:mx-0"
              style={{
                fontSize: "clamp(15px, 2vw, 16.96px)",
                lineHeight: "1.78",
              }}
            >
              Muchos colombianos en el exterior quieren crear un negocio en
              Colombia, pero hacerlo bien desde lejos no es fácil. Colraices te
              acompaña desde la idea hasta el primer año de operación.
            </p>

            {/* Role badges */}
            <div className="flex flex-col sm:flex-row gap-[16px] mt-[38px] justify-center xl:justify-start">
              
              <div className="flex items-center gap-[12px] px-[18px] py-[12px] rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm min-h-[56px]">
                <span className="text-[19px]">🌍</span>
                <div className="text-left">
                  <p className="text-white/35 uppercase tracking-[1.2px] text-[9.92px]">
                    Quien financia
                  </p>
                  <p className="text-white font-semibold text-[13.12px]">
                    Colombiano en el exterior
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px] px-[18px] py-[12px] rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm min-h-[56px]">
                <span className="text-[18px] font-semibold text-white/70">
                  CO
                </span>
                <div className="text-left">
                  <p className="text-white/35 uppercase tracking-[1.2px] text-[9.92px]">
                    Quien ejecuta
                  </p>
                  <p className="text-white font-semibold text-[13.12px]">
                    Familiar en Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-[14px] mt-[40px] justify-center xl:justify-start">
              
              <button className="w-full sm:w-auto min-w-[225px] h-[52px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-[#2A3F77] font-semibold text-[14.4px] tracking-[0.43px] shadow-[0_0_30px_rgba(255,193,7,0.35)] transition-all duration-300 hover:scale-[1.02]">
                Empezar mi negocio
              </button>

              <button className="w-full sm:w-auto min-w-[203px] h-[52px] rounded-full border border-white/20 text-white font-medium text-[14.4px] bg-transparent hover:bg-white/5 transition-all duration-300">
                Conocer el proceso
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full max-w-[420px]">
            <div
              className="rounded-[28px] border border-white/10 backdrop-blur-[18px] px-[24px] sm:px-[32px] pt-[28px] sm:pt-[32px] pb-[18px]"
              style={{
                background: `
                  radial-gradient(ellipse 160% 170% at -10% -5%, rgba(255,193,7,0.18) 0%, rgba(255,193,7,0.08) 35%, transparent 55%),
                  radial-gradient(ellipse 150% 160% at 110% 105%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 60%),
                  rgba(255,255,255,0.04)
                `,
              }}
            >
              
              {/* Header */}
              <p className="text-white/35 uppercase tracking-[1.39px] text-[9.92px]">
                Inversión total del servicio
              </p>

              {/* Price block */}
              <div className="mt-[32px] text-center">
                <p className="text-white/40 uppercase tracking-[1.15px] text-[11.52px]">
                  Precio único · 16 meses de acompañamiento
                </p>

                <div className="flex justify-center items-start mt-[18px]">
                  <span className="text-[#FFC107] font-black text-[25.6px] leading-none mt-[7px]">
                    US$
                  </span>
                  <span className="text-white font-black text-[clamp(48px,7vw,57.6px)] leading-none">
                    3.200
                  </span>
                </div>

                <p className="text-white/40 text-[12px] mt-[14px]">
                  Tres pagos alineados al avance real del proceso
                </p>
              </div>

              {/* Payment phases */}
              <div className="mt-[26px]">
                {fasesPago.map((fase, index) => (
                  <div
                    key={index}
                    className={`py-[15px] ${
                      index !== fasesPago.length - 1
                        ? "border-b border-white/6"
                        : ""
                    }`}
                  >
                    <p className="text-white/40 text-[10.88px]">
                      {fase.etapa} · {fase.porcentaje}
                    </p>

                    <p className="text-[14.08px] font-semibold mt-[4px]">
                      <span className="text-[#FFC107]">{fase.valor}</span>
                      <span className="text-white">
                        {" "}
                        — {fase.descripcion}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-[18px] rounded-[12px] border border-[#FFC107]/20 bg-[#FFC107]/12 px-[16px] py-[13px] text-center">
                <p className="text-[#FFC107] text-[11.84px] leading-[1.5] font-medium">
                  🗓️ Desde la validación de la idea hasta el cierre del primer
                  año — todo incluido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}