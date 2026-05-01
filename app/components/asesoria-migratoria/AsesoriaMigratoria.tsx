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
    <section className="relative w-full min-h-[916px] overflow-hidden bg-[#091D3E]">
      {/* Grid background — opacidad reducida al 70% */}
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

      {/* Amber glow 1 — aparece y desaparece */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "380px",
          height: "380px",
          top: "60px",
          left: "-80px",
          background:
            "radial-gradient(circle, rgba(240,180,41,0.18) 0%, rgba(240,180,41,0.06) 50%, transparent 70%)",
          animation: "amberPulse 4s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />

      {/* Amber glow 2 — desfasado */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "260px",
          height: "260px",
          bottom: "120px",
          right: "60px",
          background:
            "radial-gradient(circle, rgba(240,180,41,0.18) 0%, rgba(240,180,41,0.06) 50%, transparent 70%)",
          animation: "amberPulse 4s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* Keyframes inyectados inline */}
      <style>{`
        @keyframes amberPulse {
          0%, 100% { opacity: 0; transform: scale(0.85); }
          50%       { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      {/* Decorative circles */}
      <div className="absolute top-[78px] left-[140px] w-[58px] h-[58px] rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10" />
      <div className="absolute top-[468px] left-[90px] w-[38px] h-[38px] rounded-full border border-[#FFC107]/20 bg-[#FFC107]/5" />
      <div className="absolute top-[120px] right-[145px] w-[74px] h-[74px] rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10" />
      <div className="absolute bottom-[180px] right-[210px] w-[46px] h-[46px] rounded-full border border-[#FFC107]/20 bg-[#FFC107]/5" />

      {/* Main container */}
      <div className="relative max-w-[1375px] mx-auto pt-[255px] pb-[215px] px-6">
        <div className="flex justify-center items-start gap-[72px] max-w-[1160px] mx-auto">
          
          {/* LEFT SIDE */}
          <div className="w-[674px]">
            
            {/* Heading */}
            <div className="leading-none">
              <h1 className="text-white font-bold text-[67px] leading-[73.9px] tracking-[0]">
                Asesoría
              </h1>
              <h2 className="text-[#F0B429] font-bold italic text-[67px] leading-[73.9px] tracking-[0]">
                Migratoria
              </h2>
            </div>

            {/* Accent line */}
            <div className="w-[72px] h-[3px] rounded-full mt-[20px] bg-gradient-to-r from-[#FFC107] to-[#F0B429]" />

            {/* Description */}
            <p className="mt-[24px] max-w-[500px] text-white/70 text-[17.28px] leading-[30.2px] font-normal">
              Si estás en Colombia y quieres migrar, Colraices analiza tu caso y te
              guía con una ruta clara para iniciar o avanzar tu proceso con
              acompañamiento profesional.
            </p>

            {/* Countries */}
            <div className="flex flex-wrap gap-[6px] mt-[36px]">
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
            <div className="flex gap-[14px] mt-[36px]">
              <button className="w-[224px] h-[52px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#F0B429] text-white font-semibold text-[14.4px] tracking-[0.43px] shadow-[0_0_25px_rgba(255,193,7,0.35)] transition-all duration-300 hover:scale-[1.02]">
                Empezar mi proceso
              </button>

              <button className="w-[203px] h-[52px] rounded-full border border-white/25 text-white font-normal text-[14.4px] hover:bg-white/5 transition-all duration-300">
                Conocer el servicio
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="w-[400px] rounded-[32px] border border-white/10 flex-shrink-0 backdrop-blur-[18px] px-[33px] pt-[33px] pb-[24px]"
            style={{
              background: `radial-gradient(ellipse 160% 170% at -10% -5%, rgba(255,193,7,0.23) 0%, rgba(255,193,7,0.10) 35%, transparent 55%), radial-gradient(ellipse 150% 160% at 110% 105%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, transparent 60%), rgba(255,255,255,0.04)`,
            }}
          >
            
            {/* Title */}
            <p className="text-white/40 uppercase font-bold text-[9.92px] tracking-[1.39px] leading-[14.9px]">
              Modalidades disponibles
            </p>

            {/* Card 1 */}
            <div className="mt-[30px] rounded-[20px] border border-white/[0.09] bg-white/[0.05] p-[21px] transition-all duration-300 hover:bg-white/[0.10] hover:border-white/[0.16] cursor-default">
              <div className="flex justify-between items-start">
                <h3 className="text-white font-bold text-[14.72px] leading-[22px]">
                  Asesoría Completa
                </h3>
                <span className="text-[#F0B429] font-bold text-[19.2px] leading-[28.8px]">
                  US$500
                </span>
              </div>

              <p className="mt-[10px] text-white/50 text-[12.16px] leading-[18.2px]">
                Desde el diagnóstico inicial hasta el acompañamiento en la solicitud
                y resolución final.
              </p>

              <div className="mt-[16px] inline-flex px-[16px] h-[23px] rounded-full border border-[#FFC107]/30 bg-[#FFC107]/25 items-center text-[#FFC107] text-[9.92px] font-bold uppercase tracking-[0.99px]">
                Para quienes empiezan desde cero
              </div>
            </div>

            {/* Card 2 */}
            <div className="mt-[14px] rounded-[20px] border border-white/[0.09] bg-white/[0.05] p-[21px] transition-all duration-300 hover:bg-white/[0.10] hover:border-white/[0.16] cursor-default">
              <div className="flex justify-between items-start">
                <h3 className="text-white font-bold text-[14.72px] leading-[22px]">
                  Asesoría de Retoma
                </h3>
                <span className="text-[#F0B429] font-bold text-[19.2px] leading-[28.8px]">
                  US$100
                </span>
              </div>

              <p className="mt-[10px] text-white/50 text-[12.16px] leading-[18.2px]">
                Para quien ya inició un proceso y se encuentra bloqueado. Plan de
                acción para retomar con método.
              </p>

              <div className="mt-[16px] inline-flex px-[16px] h-[23px] rounded-full border border-[#FFC107]/30 bg-[#FFC107]/25 items-center text-[#FFC107] text-[9.92px] font-bold uppercase tracking-[0.99px]">
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