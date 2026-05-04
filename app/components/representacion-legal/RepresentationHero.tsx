export default function RepresentationHero() {
  const cities = [
    "Bogotá",
    "Medellín",
    "Cali",
    "Ibagué",
    "Armenia",
    "Cartagena",
    "Barranquilla",
  ];

  const benefits = [
    "Revisamos la escritura antes de firmar",
    "Te guiamos para obtener el poder desde tu país",
    "Nos presentamos en la notaría el día pactado",
    "Te enviamos la copia digital de la escritura",
  ];

  return (
    <section className="relative overflow-hidden bg-[#FBF8F3] pt-[88px] pb-[68px]">
      {/* Background Rings */}
      <div className="absolute right-[-260px] top-1/2 h-[760px] w-[760px] -translate-y-1/2 rounded-full border border-[#2A3F770D]" />
      <div className="absolute right-[-200px] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-[#2A3F770D]" />
      <div className="absolute right-[-140px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#2A3F770D]" />
      <div className="absolute right-[-80px] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#2A3F770D]" />

      <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:items-center">
        
        {/* LEFT CONTENT */}
        <div className="w-full max-w-[612px]">
          <h1 className="font-montserrat text-[58px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0F2D5C]">
            La escritura no espera.
            <br />
            <span className="italic font-semibold text-[#1A4F9E]">
              Tú no tienes que viajar.
            </span>
          </h1>

          <p className="mt-8 max-w-[560px] text-[18px] leading-[1.75] text-[#64748B]">
            Cuando la fecha de escritura ya está definida y tú estás fuera del país,
            encontrar quién te represente en la firma no siempre es sencillo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="h-[52px] rounded-full bg-[#D69A00] px-9 text-[16px] font-semibold text-white shadow-[0_8px_22px_rgba(214,154,0,0.28)] transition-all duration-300 hover:bg-[#E2A700]">
              Contratar representación →
            </button>

            <button className="h-[52px] rounded-full border border-[#CBD5E1] bg-transparent px-9 text-[16px] font-semibold text-[#0F2D5C] transition-all duration-300 hover:border-[#0F2D5C] hover:bg-white">
              Ver cómo funciona
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full max-w-[400px]">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0F2D5C] px-9 py-9 shadow-[0_24px_60px_rgba(15,45,92,0.22)]">
            
            {/* Top Glow */}
            <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-[#ffffff10] blur-3xl" />

            <div className="relative z-10">
              
              {/* Seal */}
              <div className="mb-8 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#D69A00] text-[24px] shadow-[0_8px_24px_rgba(214,154,0,0.35)]">
                📝
              </div>

              {/* PRICE LABEL */}
              <div className="text-[10.4px] font-semibold uppercase tracking-[0.135em] leading-[15.6px] text-white/40">
                Precio por escritura
              </div>

              {/* PRICE */}
              <div className="mt-1 flex items-start text-white leading-none">
                <span className="mr-1 pt-[6px] text-[19.2px] font-bold leading-none">
                  USD
                </span>
                <span className="text-[44.8px] font-bold tracking-[-0.03em] leading-[44.8px]">
                  230
                </span>
              </div>

              {/* PRICE SUBTEXT */}
              <p className="mt-2 max-w-[273px] text-[12.48px] leading-[18.7px] font-normal text-white/45">
                Por acto · Precio fijo sin importar el valor del inmueble
              </p>

              <div className="my-6 h-px w-full bg-white/10" />

              {/* BENEFITS */}
              <div className="space-y-[10px]">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[9px] text-[13.12px] leading-[19.7px] font-normal text-white/65"
                  >
                    <div className="mt-[2px] flex h-[16px] w-[16px] min-w-[16px] items-center justify-center rounded-full border border-[#D69A00] text-[9px] text-[#D69A00]">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="my-6 h-px w-full bg-white/10" />

              {/* CITIES LABEL */}
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Ciudades con cobertura
              </div>

              {/* CITIES */}
              <div className="flex flex-wrap gap-2">
                {cities.map((city, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}