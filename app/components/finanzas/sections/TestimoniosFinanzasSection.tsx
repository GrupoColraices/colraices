"use client";

const testimonios = [
  {
    tag: "BUENA DATA",
    color: "#DC2626",
    bgTag: "#FEF2F2",
    quote: `"Tenía un reporte negativo que me bloqueaba para todo. Colraices lo gestionó directamente desde Colombia — en 45 días quedó limpio. Ahora puedo empezar a pensar en comprar."`,
    name: "María Alejandra R.",
    info: "Residente en Miami · USD $290",
    initials: "MA",
  },
  {
    tag: "BRÚJULA CREDITICIA",
    color: "#1A4F9E",
    bgTag: "#EFF6FF",
    quote: `"Me dijeron exactamente si calificaba o no para crédito — antes de moverme o viajar. Ajusté dos cosas, esperé 3 meses y volví. Aprobado. Sin sorpresas."`,
    name: "Carlos M.",
    info: "Residente en España · USD $180",
    initials: "CM",
  },
  {
    tag: "CRÉDITO HIPOTECARIO",
    color: "#FFC107",
    bgTag: "#FEF3C7",
    quote: `"Nunca pensé que podría comprar en Colombia desde el exterior. Colraices todo fue remoto, claro y rápido. Hoy tengo mi apartamento en Medellín."`,
    name: "Laura P.",
    info: "Residente en Nueva York · Davivienda",
    initials: "LP",
  },
];

export default function TestimoniosFinanzasSection() {
  return (
    <section className="w-full bg-white pt-0 pb-16 md:pb-[88px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-[60px]">
          <p className="text-[#FFC107] text-2xl md:text-[32px] italic font-bold leading-tight">
            Lo que dicen nuestros clientes
          </p>

          <h2 className="text-[#0F2D5C] text-2xl md:text-[35.86px] font-semibold leading-snug mt-2">
            Historias reales de colombianos que ya empezaron.
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-[20px]">
          {testimonios.map((item, i) => (
            <div
              key={i}
              className="
                group relative
                w-full sm:w-[320px] md:w-[348px]
                min-h-[300px] md:h-[332px]
                border border-[#0F2D5C]/10
                rounded-tl-[16px] rounded-br-[16px]
                p-5 md:p-[28.8px]
                overflow-hidden
                bg-white
                transition-all duration-300 ease-out
                hover:-translate-y-[6px] hover:shadow-[0_14px_30px_rgba(15,45,92,0.12)] hover:border-[#1A4F9E]/25
              "
            >

              {/* DECOR */}
              <span
                className="absolute text-[56px] md:text-[72px] font-bold opacity-[0.12] transition-all duration-300 group-hover:opacity-[0.2]"
                style={{
                  color: item.color,
                  top: "4px",
                  left: "16px",
                }}
              >
                \“
              </span>

              {/* TAG */}
              <div className="mt-1">
                <span
                  className="inline-flex px-2 py-1 md:px-[10px] md:py-[4px] rounded-full text-[9px] md:text-[10.4px] font-bold tracking-wider"
                  style={{
                    background: item.bgTag,
                    color: item.color,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* STARS */}
              <p className="text-[#FFC107] text-[12px] md:text-[13.6px] tracking-[2px] mt-2 md:mt-[12px]">
                ★★★★★
              </p>

              {/* TEXT */}
              <p className="text-[#1E293B] text-[13px] md:text-[14.4px] italic leading-relaxed mt-3 md:mt-[14px] group-hover:text-[#0F2D5C]">
                {item.quote}
              </p>

              {/* FOOTER */}
              <div className="mt-6 md:absolute md:bottom-[28px] md:left-[28.8px] md:right-[28.8px] border-t border-[#0F2D5C]/10 pt-3 md:pt-[14px] flex items-center gap-3">
                
                {/* AVATAR */}
                <div className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full bg-[#1A4F9E] flex items-center justify-center text-white text-[12px] md:text-[13.6px] font-bold">
                  {item.initials}
                </div>

                {/* INFO */}
                <div>
                  <p className="text-[#0F2D5C] text-[13px] md:text-[14px] font-semibold leading-tight">
                    {item.name}
                  </p>
                  <p className="text-[#94A3B8] text-[10px] md:text-[11.52px] leading-tight">
                    {item.info}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}