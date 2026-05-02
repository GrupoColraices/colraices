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

export default function AsesoriaEmprendimiento() 
{
  return (
    <section className="relative w-full bg-[#081D3F] overflow-hidden border-b-4 border-[#FFC107]">
      {/* Fondo grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow izquierdo */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#1A4F9E]/20 blur-[120px]" />

      {/* Glow derecho */}
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#1A4F9E]/15 blur-[160px]" />

      {/* Círculos decorativos */}
      <div className="absolute top-[30px] right-[4%] hidden xl:block">
        <div className="relative w-[360px] h-[360px] rounded-full border border-[#FFC107]/10">
          <div className="absolute inset-[28px] rounded-full border border-[#FFC107]/8" />
          <div className="absolute inset-[58px] rounded-full border border-[#1A4F9E]/15" />
        </div>
      </div>

      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-[70px] md:py-[90px]">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-14 xl:gap-20">
          
          {/* LADO IZQUIERDO */}
          <div className="w-full max-w-[531px] text-center xl:text-left">
            {/* Título */}
            <div className="leading-[1.05]">
              <h2 className="text-white font-black font-montserrat text-[42px] sm:text-[52px] lg:text-[59.76px]">
                Asesoría de
              </h2>
              <h2 className="text-[#FFC107] italic font-black font-montserrat text-[42px] sm:text-[52px] lg:text-[59.76px]">
                Emprendimiento
              </h2>
            </div>

            {/* Línea */}
            <div className="w-[56px] h-[3px] bg-[#FFC107] mt-8 mb-8 mx-auto xl:mx-0" />

            {/* Descripción */}
            <p className="text-white/68 font-montserrat text-[15px] sm:text-[16.96px] leading-[2] max-w-[520px] mx-auto xl:mx-0">
              Muchos colombianos en el exterior quieren crear un negocio en
              Colombia, pero hacerlo bien desde lejos no es fácil. Colraices te
              acompaña desde la idea hasta el primer año de operación.
            </p>

            {/* Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center xl:justify-start">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.05] min-h-[56px]">
                <span className="text-[20px]">🌍</span>
                <div className="text-left">
                  <p className="text-white/35 uppercase tracking-[1.2px] text-[9.92px] font-montserrat">
                    Quien financia
                  </p>
                  <p className="text-white font-semibold text-[13.12px] font-montserrat">
                    Colombiano en el exterior
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.05] min-h-[56px]">
                <span className="text-[20px]">CO</span>
                <div className="text-left">
                  <p className="text-white/35 uppercase tracking-[1.2px] text-[9.92px] font-montserrat">
                    Quien ejecuta
                  </p>
                  <p className="text-white font-semibold text-[13.12px] font-montserrat">
                    Familiar en Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center xl:justify-start">
              <button className="h-[51px] px-9 rounded-full bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-[#2A3F77] font-semibold text-[14.4px] tracking-[0.43px] shadow-[0_0_30px_rgba(255,193,7,0.35)] hover:scale-[1.02] transition-all duration-300">
                Empezar mi negocio
              </button>

              <button className="h-[51px] px-9 rounded-full border border-white/20 text-white font-semibold text-[14.4px] tracking-[0.43px] bg-transparent hover:bg-white/5 transition-all duration-300">
                Conocer el proceso
              </button>
            </div>
          </div>

          {/* LADO DERECHO */}
          <div className="w-full max-w-[420px]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm px-[32px] pt-[32px] pb-[18px]">
              
              {/* Header */}
              <p className="text-white/35 uppercase tracking-[1.4px] text-[9.92px] font-montserrat">
                Inversión total del servicio
              </p>

              {/* Precio */}
              <div className="mt-8 text-center">
                <p className="text-white/40 uppercase tracking-[1.15px] text-[11.52px] font-montserrat">
                  Precio único · 16 meses de acompañamiento
                </p>

                <div className="flex justify-center items-start mt-4">
                  <span className="text-[#FFC107] font-black text-[25.6px] leading-none mt-2">
                    US$
                  </span>
                  <span className="text-white font-black text-[57.6px] leading-none">
                    3.200
                  </span>
                </div>

                <p className="text-white/40 text-[12px] mt-4 font-montserrat">
                  Tres pagos alineados al avance real del proceso
                </p>
              </div>

              {/* Fases */}
              <div className="mt-8 space-y-0">
                {fasesPago.map((fase, index) => (
                  <div
                    key={index}
                    className={`py-4 ${
                      index !== fasesPago.length - 1
                        ? "border-b border-white/6"
                        : ""
                    }`}
                  >
                    <p className="text-white/40 text-[10.88px] font-montserrat">
                      {fase.etapa} · {fase.porcentaje}
                    </p>

                    <p className="text-[14.08px] font-semibold font-montserrat mt-1">
                      <span className="text-[#FFC107]">{fase.valor}</span>
                      <span className="text-white">
                        {" "}
                        — {fase.descripcion}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Nota */}
              <div className="mt-6 rounded-[12px] border border-[#FFC107]/20 bg-[#FFC107]/12 px-4 py-4 text-center">
                <p className="text-[#FFC107] text-[11.84px] leading-[1.5] font-medium font-montserrat">
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