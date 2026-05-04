"use client";

export default function AsesoriaMigratoria() {
  const paises = [
    "🇨🇦 Canadá",
    "🇲🇽 México",
    "🇪🇸 España",
    "🇬🇧 Reino Unido",
    "🇫🇷 Francia",
    "🇩🇪 Alemania",
    "🇦🇺 Australia",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#091D3E]">
      {/* Grid background */}
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

      {/* Amber glow 1 */}
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

      {/* Amber glow 2 */}
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

      <style>{`
        @keyframes amberPulse {
          0%, 100% { opacity: 0; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      {/* Decorative circles desktop only */}
      <div className="hidden md:block absolute top-[78px] left-[140px] w-[58px] h-[58px] rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10" />
      <div className="hidden md:block absolute top-[468px] left-[90px] w-[38px] h-[38px] rounded-full border border-[#FFC107]/20 bg-[#FFC107]/5" />
      <div className="hidden md:block absolute top-[120px] right-[145px] w-[74px] h-[74px] rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10" />
      <div className="hidden md:block absolute bottom-[180px] right-[210px] w-[46px] h-[46px] rounded-full border border-[#FFC107]/20 bg-[#FFC107]/5" />

      {/* Main container */}
      <div className="relative max-w-[1375px] mx-auto pt-[120px] sm:pt-[160px] lg:pt-[220px] pb-[120px] sm:pb-[160px] lg:pb-[215px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-[60px] xl:gap-[72px] max-w-[1160px] mx-auto">

          {/* LEFT SIDE */}
          <div className="w-full max-w-[674px] text-center xl:text-left">

            {/* Heading */}
            <div className="leading-none">
              <h1
                className="text-white font-bold"
                style={{
                  fontSize: "clamp(42px, 8vw, 67px)",
                  lineHeight: "1.05",
                }}
              >
                Asesoría
              </h1>
              <h2
                className="text-[#F0B429] font-bold italic"
                style={{
                  fontSize: "clamp(42px, 8vw, 67px)",
                  lineHeight: "1.05",
                }}
              >
                Migratoria
              </h2>
            </div>

            {/* Accent line */}
            <div className="w-[72px] h-[3px] rounded-full mt-[20px] bg-gradient-to-r from-[#FFC107] to-[#F0B429] mx-auto xl:mx-0" />

            {/* Description */}
            <p
              className="mt-[24px] max-w-[500px] text-white/70 font-normal mx-auto xl:mx-0"
              style={{
                fontSize: "clamp(15px, 2vw, 17.28px)",
                lineHeight: "1.75",
              }}
            >
              Si estás en Colombia y quieres migrar, Colraices analiza tu caso y te
              guía con una ruta clara para iniciar o avanzar tu proceso con
              acompañamiento profesional.
            </p>

            {/* Countries */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-[8px] mt-[36px]">
              {paises.map((pais, index) => (
                <div
                  key={index}
                  className="h-[36px] px-[14px] rounded-full border border-white/10 bg-white/[0.06] flex items-center justify-center text-white/70 text-[11.2px] font-semibold transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 cursor-default"
                >
                  {pais}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-[14px] mt-[36px] justify-center xl:justify-start">
              <button className="w-full sm:w-[224px] h-[52px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#F0B429] text-white font-semibold text-[14.4px] tracking-[0.43px] shadow-[0_0_25px_rgba(255,193,7,0.35)] transition-all duration-300 hover:scale-[1.02]">
                Empezar mi proceso
              </button>

              <button className="w-full sm:w-[203px] h-[52px] rounded-full border border-white/25 text-white font-normal text-[14.4px] hover:bg-white/5 transition-all duration-300">
                Conocer el servicio
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="w-full max-w-[400px] rounded-[32px] border border-white/10 backdrop-blur-[18px] px-[24px] sm:px-[33px] pt-[28px] sm:pt-[33px] pb-[24px]"
            style={{
              background: `radial-gradient(ellipse 160% 170% at -10% -5%, rgba(255,193,7,0.23) 0%, rgba(255,193,7,0.10) 35%, transparent 55%), radial-gradient(ellipse 150% 160% at 110% 105%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, transparent 60%), rgba(255,255,255,0.04)`,
            }}
          >

            <p className="text-white/40 uppercase font-bold text-[9.92px] tracking-[1.39px] leading-[14.9px]">
              Modalidades disponibles
            </p>

            {/* Card 1 */}
            <div className="mt-[30px] rounded-[20px] border border-white/[0.09] bg-white/[0.05] p-[21px] transition-all duration-300 hover:bg-white/[0.10] hover:border-white/[0.16]">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-white font-bold text-[14.72px] leading-[22px]">
                  Asesoría Completa
                </h3>
                <span className="text-[#F0B429] font-bold text-[19.2px] leading-[28.8px] whitespace-nowrap">
                  US$500
                </span>
              </div>

              <p className="mt-[10px] text-white/50 text-[12.16px] leading-[18.2px]">
                Desde el diagnóstico inicial hasta el acompañamiento en la solicitud
                y resolución final.
              </p>

              <div className="mt-[16px] inline-flex px-[16px] py-[6px] rounded-full border border-[#FFC107]/30 bg-[#FFC107]/25 items-center text-[#FFC107] text-[9.92px] font-bold uppercase tracking-[0.99px]">
                Para quienes empiezan desde cero
              </div>
            </div>

            {/* Card 2 */}
            <div className="mt-[14px] rounded-[20px] border border-white/[0.09] bg-white/[0.05] p-[21px] transition-all duration-300 hover:bg-white/[0.10] hover:border-white/[0.16]">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-white font-bold text-[14.72px] leading-[22px]">
                  Asesoría de Retoma
                </h3>
                <span className="text-[#F0B429] font-bold text-[19.2px] leading-[28.8px] whitespace-nowrap">
                  US$100
                </span>
              </div>

              <p className="mt-[10px] text-white/50 text-[12.16px] leading-[18.2px]">
                Para quien ya inició un proceso y se encuentra bloqueado. Plan de
                acción para retomar con método.
              </p>

              <div className="mt-[16px] inline-flex px-[16px] py-[6px] rounded-full border border-[#FFC107]/30 bg-[#FFC107]/25 items-center text-[#FFC107] text-[9.92px] font-bold uppercase tracking-[0.99px]">
                Para procesos estancados
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FFC107] to-[#F0B429]" />
    </section>
  );
}