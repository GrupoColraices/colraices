"use client";

export default function ProximosEventos() {
  const cards = [
    {
      city: "Nueva York",
      flag: "🇺🇸",
      type: "☕ Café del Tour",
      date: "Sábado, 8 de febrero 2026 · 2:00 PM EST",
      title: "Café del Tour · Queens · Jackson Heights",
      desc: "Encuentra proyectos de Bogotá y Medellín en un espacio íntimo de tu barrio. Expertos de Colraices responden en persona.",
      tags: ["Vivienda nueva", "Crédito exterior"],
      warning: "⚠ Solo quedan 6 lugares",
    },
    {
      city: "Barcelona",
      flag: "🇪🇸",
      type: "☕ Café del Tour",
      date: "Viernes, 20 de febrero 2026 · 7:00 PM CET",
      title: "Café del Tour · Gracia",
      desc: "Espacio para inversionistas con proyectos exclusivos y asesoría personalizada.",
      tags: ["Inversión", "Colombia"],
      warning: "⚠ Solo quedan 12 lugares",
    },
    {
      city: "Miami",
      flag: "🇺🇸",
      type: "🏛️ Muestra Inmobiliaria",
      date: "Sábado, 1 de marzo 2026 · 11:00 AM EST",
      title: "Miami Beach Convention",
      desc: "Evento con expertos en inversión inmobiliaria en Colombia.",
      tags: ["Turismo", "Inversión"],
      warning: "⚠ Solo quedan 3 lugares",
    },
    {
      city: "Madrid",
      flag: "🇪🇸",
      type: "☕ Café del Tour",
      date: "Domingo, 10 marzo 2026 · 5:00 PM CET",
      title: "Café del Tour · Centro",
      desc: "Conoce oportunidades en vivienda desde el exterior.",
      tags: ["Vivienda", "Europa"],
      warning: "⚠ Solo quedan 8 lugares",
    },
    {
      city: "Frankfurt",
      flag: "🇩🇪",
      type: "☕ Café del Tour",
      date: "Domingo, 22 febrero 2026 · 3:00 PM CET",
      title: "Café del Tour · Sachsenhausen",
      desc: "Asesoría financiera para colombianos en Alemania.",
      tags: ["Bogotá", "Europa"],
      warning: "⚠ Solo quedan 5 lugares",
    },
    {
      city: "Lima",
      flag: "🇵🇪",
      type: "💻 Virtual",
      date: "Viernes, 5 abril 2026 · 6:00 PM",
      title: "Evento virtual",
      desc: "Aprende a invertir desde cualquier parte del mundo.",
      tags: ["Virtual", "Latam"],
      warning: "⚠ Solo quedan 20 lugares",
    },
  ];

  return (
    <section className="w-full bg-[#FBF8F3] py-[80px] flex justify-center">
      <div className="w-[1180px]">

        {/* HEADER */}
        <div className="w-[1108px] mx-auto text-center">

          <p className="text-[16px] leading-[24px] text-[#0A0A0A]">
            Próximos eventos
          </p>

          <h2 className="mt-[4px] text-[35.86px] leading-[39.4px] font-bold">
            <span className="text-[#FF6B35]">El Tour </span>
            <span className="text-[#0F2D5C]">llega a tu ciudad.</span>
          </h2>

          <div className="flex justify-end mt-[12px]">
            <span className="text-[12.48px] font-semibold text-[#0F2D5C] opacity-50 cursor-pointer">
              Ver calendario completo →
            </span>
          </div>
        </div>

        {/* FILTROS */}
        <div className="w-[1108px] mx-auto mt-[40px] flex gap-[6px] flex-wrap">

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
              className={`h-[31.75px] px-[16px] rounded-full flex items-center text-[11.84px] font-semibold ${
                item.active
                  ? "bg-[#0F2D5C] text-white"
                  : "bg-white border border-[#ECECF0] text-[#2A3F77]/70"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* CARDS */}
        <div className="w-[1108px] mx-auto mt-[40px] overflow-hidden">
          <div className="flex gap-[20px] w-max">

            {cards.map((card, i) => (
              <div
                key={i}
                className="w-[324px] h-[520px] bg-white rounded-[18px] border border-[#0F2D5C]/10 overflow-hidden"
              >

                {/* HEADER CARD */}
                <div className="h-[142.69px] px-[24px] pt-[37px] bg-gradient-to-r from-[#0B2548] to-[#1D4580] text-white">

                  <p className="text-[9.6px] tracking-[1.15px] font-bold text-[#FF6B35]">
                    {card.type}
                  </p>

                  <h3 className="mt-[12px] text-[21.6px] font-bold flex items-center gap-[6px]">
                    <span>{card.flag}</span> {card.city}
                  </h3>

                  <p className="text-[12.16px] opacity-50 mt-[6px]">
                    {card.date}
                  </p>
                </div>

                {/* BODY */}
                <div className="px-[24px] pt-[20px]">

                  <p className="text-[14.4px] font-semibold text-[#0F2D5C] leading-[21.6px]">
                    {card.title}
                  </p>

                  <p className="mt-[10px] text-[12.84px] text-[#2A3F77]/75 leading-[19.3px]">
                    {card.desc}
                  </p>

                  {/* TAGS */}
                  <div className="flex gap-[8px] mt-[16px] flex-wrap">
                    {card.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10.4px] px-[12px] h-[25.2px] flex items-center rounded-full border border-[#0F2D5C]/10 bg-[#FBF8F3] text-[#2A3F77]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button className="mt-[24px] w-full h-[41.2px] bg-[#0F2D5C] text-white text-[12.8px] font-semibold rounded-[10px]">
                    Inscribirme
                  </button>

                  {/* WARNING */}
                  <p className="mt-[20px] text-center text-[10.72px] text-[#E05470] font-semibold">
                    {card.warning}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}