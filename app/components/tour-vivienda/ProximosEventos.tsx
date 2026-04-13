"use client";

export default function ProximosEventos() {
  const cards = [
    
    {
      city: "Barcelona",
      country: "ES",
      type: "☕ CAFÉ DEL TOUR",
      date: "Viernes, 20 de febrero 2026 · 7:00 PM CET",
      title: "Café del Tour · Gracia · Espacio colombiano",
      desc: "Proyectos de Cartagena y Barranquilla en un formato de conversación sin presión. Aperitivos y expertos disponibles.",
      tags: ["Costa colombiana", "Invertir a distancia", "Gratuito"],
      warning: "Quedan 14 lugares",
    },
    {
      city: "Miami",
      country: "US",
      type: "🏛️ MUESTRA INMOBILIARIA",
      date: "Sábado, 1 de marzo 2026 · 11:00 AM EST",
      title: "Muestra Inmobiliaria · Miami Beach Convention",
      desc: "El evento del Tour en Miami con proyectos de toda Colombia. Charla especial sobre retorno de inversión en arrendamiento turístico.",
      tags: ["Todo Colombia", "Inversión turística", "Gratuito"],
      warning: "Quedan 156 lugares disponibles",
    },
    {
      city: "Frankfurt",
      country: "DE",
      type: "☕ CAFÉ DEL TOUR",
      date: "Domingo, 22 de febrero 2026 · 3:00 PM CET",
      title: "Café del Tour · Sachsenhausen · Centro colombiano",
      desc: "Proyectos de Bogotá para colombianos en Alemania. Sesión de preguntas reales con asesor de crédito para no residentes en Europa.",
      tags: ["Bogotá", "No residentes EU", "Gratuito"],
      warning: "⚠ Solo quedan 3 lugares",
      danger: true,
    },
  ];

  return (
    <section className="w-full bg-[#FBF8F3] py-[80px] flex justify-center">
      <div className="w-[1180px]">

        {/* HEADER */}
        <div className="w-[1108px] mx-auto text-center">
          <p className="text-[16px] text-[#0A0A0A] leading-[24px]">
            Próximos eventos
          </p>

          <h2 className="mt-[4px] text-[36px] leading-[40px] font-bold">
            <span className="text-[#FF6B35]">El Tour </span>
            <span className="text-[#0F2D5C]">llega a tu ciudad.</span>
          </h2>

          <div className="flex justify-end mt-[12px]">
            <span className="text-[12.5px] font-semibold text-[#0F2D5C] opacity-50 cursor-pointer">
              Ver calendario completo →
            </span>
          </div>
        </div>

        {/* FILTROS */}
        <div className="w-[1108px] mx-auto mt-[32px] flex gap-[8px]">
          {[
            { label: "Todos los eventos", active: true },
            { label: "☕ Cafés del Tour" },
            { label: "🏛️ Muestras Inmobiliarias" },
            { label: "💻 Virtuales" },
            { label: "EE.UU." },
            { label: "España" },
            { label: "Alemania" },
            { label: "Perú" },
          ].map((item, i) => (
            <div
              key={i}
              className={`h-[32px] px-[14px] rounded-full flex items-center text-[12px] font-semibold ${
                item.active
                  ? "bg-[#0F2D5C] text-white"
                  : "bg-white border border-[#ECECF0] text-[#2A3F77]"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* CAROUSEL */}
        <div className="relative w-[1108px] mx-auto mt-[32px]">

          {/* LEFT BTN */}
          <button className="absolute left-[-72px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[#0F2D5C] flex items-center justify-center transition-all duration-300 ease hover:scale-110 hover:bg-[#1A4F9E]">

            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

          {/* RIGHT BTN */}
          <button className="absolute right-[-72px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[#0F2D5C] flex items-center justify-center transition-all duration-300 ease hover:scale-110 hover:bg-[#1A4F9E]">

            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

          {/* CARDS */}
          <div className="flex gap-[24px]">

            {cards.map((card, i) => (
              <div
                key={i}
                className="w-[324px] h-[520px] bg-white rounded-[18px] border border-[#0F2D5C]/10 overflow-hidden"
              >

                <div className="h-[140px] px-[24px] pt-[32px] bg-gradient-to-r from-[#0B2548] to-[#1D4580] text-white">

                  <p className="text-[10px] tracking-[1.2px] text-[#FF6B35] font-bold">
                    {card.type}
                  </p>

                  <h3 className="mt-[10px] text-[22px] font-bold">
                    {card.city}
                  </h3>

                  <p className="text-[12px] opacity-50 mt-[4px]">
                    {card.date}
                  </p>
                </div>


                <div className="px-[24px] pt-[20px]">

                  <p className="text-[14px] font-semibold text-[#0F2D5C]">
                    {card.title}
                  </p>

                  <p className="mt-[8px] text-[13px] text-[#2A3F77]/75 leading-[19px]">
                    {card.desc}
                  </p>

                  <div className="flex gap-[8px] mt-[14px] flex-wrap">
                    {card.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11px] px-[10px] py-[4px] rounded-full border border-[#0F2D5C]/10 bg-[#FBF8F3] text-[#2A3F77]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-[20px] w-full h-[42px] bg-[#0F2D5C] text-white text-[13px] font-semibold rounded-[10px]">
                    Inscribirme
                  </button>

                  <p
                    className={`mt-[18px] text-center text-[11px] font-semibold ${
                      card.danger
                        ? "text-[#E05470]"
                        : "text-[#2A3F77]/50"
                    }`}
                  >
                    {card.warning}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-[24px] gap-[8px]">
            {[0, 1, 2, 3, 4].map((d, i) => (
              <div
                key={i}
                className={`w-[6px] h-[6px] rounded-full ${
                  i === 3 ? "bg-[#FFB800]" : "bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}