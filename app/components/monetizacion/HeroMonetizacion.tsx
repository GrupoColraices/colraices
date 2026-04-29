"use client";

export default function HeroMonetizacion() {
  const beneficios = [
    {
      label: "Costo del servicio",
      value: "1% del monto",
      valueColor: "text-[#FFD54F]",
      large: true,
    },
    {
      label: "Monto mínimo",
      value: "USD $10.000",
      valueColor: "text-[#FFD54F]",
    },
    {
      label: "Monto máximo",
      value: "Sin límite",
      valueColor: "text-white",
    },
    {
      label: "Entrega en destino",
      value: "Máx. 5 días hábiles",
      valueColor: "text-[#4ADE80]",
    },
  ];

  return (
    <section className="relative w-full bg-[#091D3E] overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* GLOW LEFT */}
      <div className="absolute left-[-120px] top-[60px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,_rgba(255,193,7,0.12)_0%,_rgba(0,0,0,0)_65%)] pointer-events-none" />

      {/* GLOW RIGHT */}
      <div className="absolute right-[-120px] bottom-[20px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,_rgba(255,193,7,0.10)_0%,_rgba(0,0,0,0)_65%)] pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-[1180px] mx-auto px-[48px] pt-[80px] pb-[72px]">
        <div className="flex flex-col lg:flex-row justify-between gap-[64px]">
          
          {/* LEFT SIDE */}
          <div className="w-full max-w-[640px] flex flex-col pt-[41px]">
            
            {/* TOP BADGE */}
            <div className="w-fit h-[40px] rounded-full border border-[#FFC107]/30 bg-[#FFC107]/12 px-[16px] flex items-center">
              <span className="text-[16px] leading-[24px] mr-[10px]">💱</span>

              <span className="text-[#FFD54F] text-[12.48px] font-semibold leading-[18.7px]">
                Monetización
              </span>

              <div className="ml-[10px] rounded-full bg-[#FFC107] px-[14px] py-[4px] flex items-center justify-center">
                <span className="text-white text-[11.52px] font-bold leading-[17.3px] whitespace-nowrap">
                  1% del monto · Mín. USD $10.000
                </span>
              </div>
            </div>

            {/* TITLE */}
            <div className="mt-[36px]">
              <h1 className="text-white font-bold text-[42px] leading-[47.5px] tracking-[0px]">
                Trae tu dinero a Colombia
              </h1>
              <h2 className="text-white italic font-normal text-[42px] leading-[47.5px] tracking-[0px]">
                con seguridad y buena tasa.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-[32px] max-w-[602px] text-white/52 text-[16px] font-light leading-[28px]">
              Tienes más de USD $10.000 que quieres traer a Colombia.
              Un giro bancario no basta — necesitas legalización
              correcta ante el Banco de la República y negociación en
              mesa de dinero. Colraices gestiona todo el proceso.
            </p>

            {/* CTA BUTTON */}
            <div className="mt-[42px]">
              <button className="h-[47.6px] px-[28px] rounded-full bg-[#FFC107] hover:brightness-110 transition-all duration-300 shadow-[0_0_24px_rgba(255,193,7,0.35)]">
                <span className="text-white text-[14.4px] font-semibold leading-[21.6px]">
                  Contratar ahora →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="w-full max-w-[380px] rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur-[2px] px-[28.8px] pt-[28.8px] pb-[28px]">
            
            {/* HEADER */}
            <h3 className="text-white text-[16px] font-semibold leading-[24px]">
              ¿Qué obtienes?
            </h3>

            {/* BENEFITS TABLE */}
            <div className="mt-[16px] flex flex-col">
              {beneficios.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[51.6px] flex items-center justify-between border-b border-white/7"
                >
                  <span className="text-white/42 text-[12.48px] font-normal leading-[18.7px]">
                    {item.label}
                  </span>

                  <span
                    className={`font-semibold ${
                      item.large
                        ? "text-[19.2px] leading-[28.8px]"
                        : "text-[14.08px] leading-[21.1px]"
                    } ${item.valueColor}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* MONEY FLOW */}
            <div className="mt-[28px] rounded-[14px] border border-[#FFC107]/20 bg-[#FFC107]/10 px-[16.8px] pt-[16.8px] pb-[16px]">
              
              <p className="text-white/35 uppercase font-bold text-[9.92px] tracking-[0.99px] leading-[14.9px]">
                Flujo del dinero
              </p>

              <div className="mt-[12px] flex items-center justify-between gap-[6px]">
                
                {/* STEP 1 */}
                <div className="w-[80px] h-[89px] rounded-[10px] border border-white/10 bg-white/7 flex flex-col items-center justify-center">
                  <span className="text-[14px]">🏦</span>
                  <span className="mt-[10px] text-center text-white/50 text-[10.4px] leading-[13.5px]">
                    Banco
                    <br />
                    exterior
                  </span>
                </div>

                {/* ARROW */}
                <span className="text-white/25 text-[18px]">→</span>

                {/* STEP 2 */}
                <div className="w-[80px] h-[89px] rounded-[10px] border border-white/10 bg-white/7 flex flex-col items-center justify-center">
                  <span className="text-[14px]">⚖️</span>
                  <span className="mt-[10px] text-center text-white/50 text-[10.4px] leading-[13.5px]">
                    Colraices
                    <br />
                    gestiona
                  </span>
                </div>

                {/* ARROW */}
                <span className="text-white/25 text-[18px]">→</span>

                {/* STEP 3 */}
                <div className="w-[80px] h-[89px] rounded-[10px] border border-[#FFC107]/30 bg-[#FFC107]/10 flex flex-col items-center justify-center">
                  <span className="text-[14px] text-[#FFD54F]">CO</span>
                  <span className="mt-[10px] text-center text-[#FFD54F] text-[10.4px] leading-[13.5px] font-medium">
                    Destino en
                    <br />
                    Colombia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}