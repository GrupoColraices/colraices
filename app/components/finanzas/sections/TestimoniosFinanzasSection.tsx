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
    <section className="w-full bg-white py-[88px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="text-center mb-[60px]">
          <p className="text-[#FFC107] text-[32px] italic font-bold leading-[30px]">
            Lo que dicen nuestros clientes
          </p>

          <h2 className="text-[#0F2D5C] text-[35.86px] font-semibold leading-[46px] mt-[8px]">
            Historias reales de colombianos que ya empezaron.
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-[20px]">
          {testimonios.map((item, i) => (
            <div
              key={i}
              className="
                group relative w-[348px] h-[332px]
                border border-[#0F2D5C]/10
                rounded-tl-[16px] rounded-br-[16px]
                p-[28.8px]
                overflow-hidden
                bg-white
                transition-all duration-300 ease-out
                hover:-translate-y-[6px] hover:shadow-[0_14px_30px_rgba(15,45,92,0.12)] hover:border-[#1A4F9E]/25
              "
            >

              {/* DECOR NUMBER */}
              <span
                className="absolute text-[72px] font-bold opacity-[0.12] transition-all duration-300 group-hover:opacity-[0.2] group-hover:-translate-y-[2px]"
                style={{
                  color: item.color,
                  top: "2px",
                  left: "20.8px",
                }}
              >
                \“
              </span>

              {/* TAG */}
              <div className="mt-[6px]">
                <span
                  className="inline-flex px-[10px] py-[4px] rounded-full text-[10.4px] font-bold tracking-[0.83px] transition-all duration-300 group-hover:scale-[1.03]"
                  style={{
                    background: item.bgTag,
                    color: item.color,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* STARS */}
              <p className="text-[#FFC107] text-[13.6px] tracking-[2px] mt-[12px]">
                ★★★★★
              </p>

              {/* TEXT */}
              <p className="text-[#1E293B] text-[14.4px] italic leading-[25.2px] mt-[14px] transition-colors duration-300 group-hover:text-[#0F2D5C]">
                {item.quote}
              </p>

              {/* FOOTER */}
              <div className="absolute bottom-[28px] left-[28.8px] right-[28.8px] border-t border-[#0F2D5C]/10 pt-[14px] flex items-center gap-[12px]">
                
                {/* AVATAR */}
                <div className="w-[38px] h-[38px] rounded-full bg-[#1A4F9E] flex items-center justify-center text-white text-[13.6px] font-bold">
                  {item.initials}
                </div>

                {/* INFO */}
                <div>
                  <p className="text-[#0F2D5C] text-[14px] font-semibold leading-[21px]">
                    {item.name}
                  </p>
                  <p className="text-[#94A3B8] text-[11.52px] leading-[17.3px]">
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