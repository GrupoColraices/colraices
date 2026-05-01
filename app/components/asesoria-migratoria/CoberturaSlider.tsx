"use client";

const paises = [
  { codigo: "ES", nombre: "España", bandera: "🇪🇸" },
  { codigo: "GB", nombre: "Reino Unido", bandera: "🇬🇧" },
  { codigo: "FR", nombre: "Francia", bandera: "🇫🇷" },
  { codigo: "DE", nombre: "Alemania", bandera: "🇩🇪" },
  { codigo: "AU", nombre: "Australia", bandera: "🇦🇺" },
  { codigo: "US", nombre: "Estados Unidos", bandera: "🇺🇸" },
  { codigo: "CA", nombre: "Canadá", bandera: "🇨🇦" },
];

export default function CoberturaSlider() {
  const sliderItems = [...paises, ...paises];

  return (
    <section className="relative w-full bg-[#091D3E] overflow-hidden border-t border-[#DFA428]">
      {/* Fondo grid */}
      <div
        className="absolute inset-0 opacity-[0.27]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 40px",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto py-[52px] flex flex-col items-center">
        {/* Título */}
        <h2
          className="text-white font-bold tracking-[-0.02em] mb-[38px]"
          style={{
            fontSize: "54px",
            lineHeight: "100%",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Cobertura en{" "}
          <span className="text-[#DFA428] italic font-semibold">
            7 países
          </span>
        </h2>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          {/* Fade izquierdo */}
          <div className="absolute left-0 top-0 h-full w-[140px] bg-gradient-to-r from-[#091D3E] to-transparent z-20 pointer-events-none" />

          {/* Fade derecho */}
          <div className="absolute right-0 top-0 h-full w-[140px] bg-gradient-to-l from-[#091D3E] to-transparent z-20 pointer-events-none" />

          {/* Track */}
          <div
            className="flex animate-infinite-slider w-max py-[8px]"
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {sliderItems.map((pais, index) => (
              <div
                key={index}
                className="group flex items-center justify-center h-[52px] px-[22px] mx-[12px] border border-white/[0.12] bg-white/[0.03] backdrop-blur-[8px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] rounded-tl-[16px] rounded-tr-none rounded-bl-none rounded-br-[16px] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#DFA428] hover:shadow-[0_8px_24px_rgba(223,164,40,0.18)] cursor-pointer"
              >
                {/* Bandera */}
                <span className="text-[20px] mr-[12px] leading-none">
                  {pais.bandera}
                </span>

                {/* Nombre */}
                <span
                  className="text-white font-semibold whitespace-nowrap"
                  style={{
                    fontSize: "15.8px",
                    lineHeight: "100%",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {pais.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animación */}
      <style jsx global>{`
        @keyframes infiniteSlider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-slider {
          animation: infiniteSlider 30s linear infinite;
        }
      `}</style>
    </section>
  );
}