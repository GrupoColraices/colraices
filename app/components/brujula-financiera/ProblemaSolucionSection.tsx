"use client";

export default function ProblemaSolucionSection() {
  return (
    <section className="w-full bg-[#FBF8F3] flex justify-center px-4 md:px-8 py-[80px]">
      <div className="w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[48px] items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-[24px]">

          {/* SMALL TEXT */}
          <p className="text-[14px] md:text-[16px] text-[#0A0A0A]">
            ¿Te suena familiar?
          </p>

          {/* TITLE */}
          <h2 className="text-[28px] md:text-[36px] leading-[1.2] text-[#0F2D5C]">
            <span className="italic font-medium">
              Muchos colombianos en
            </span>{" "}
            <span className="italic font-bold">
              el exterior están en este mismo punto.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#475569] max-w-[510px]">
            La distancia hace que el historial financiero en Colombia
            quede en el olvido. Hasta que necesitas actuar sobre él.
          </p>

          {/* CARDS */}
          <div className="flex flex-col gap-[12px] max-w-[510px]">

            {[
              {
                icon: "🔍",
                text: "No sé cómo está mi historial crediticio en Colombia — hace años que no lo reviso.",
              },
              {
                icon: "⚠️",
                text: "Sé que tengo reportes negativos pero no sé cómo están ni qué puedo hacer desde el exterior.",
              },
              {
                icon: "🧩",
                text: "Tengo información dispersa e incompleta. No sé qué acción priorizar primero.",
              },
              {
                icon: "🏠",
                text: "Quiero comprar o invertir en Colombia, pero no sé si mi situación financiera me lo permite.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-[12px] border border-[#0F2D5C]/10 
                rounded-tr-[0px] rounded-br-[16px] rounded-tl-[16px] rounded-bl-[0px] 
                p-[16px] bg-white"
              >
                <span className="text-[20px]">{item.icon}</span>
                <p className="text-[14px] leading-[1.6] text-[#1E293B]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[510px] h-auto bg-[#0F2D5C] rounded-[20px] p-[32px] text-white flex flex-col gap-[20px]">

          {/* LABEL */}
          <p className="text-[10px] tracking-[1.2px] uppercase text-white/40 font-bold">
            La solución
          </p>

          {/* TITLE */}
          <h3 className="text-[18px] md:text-[19px] leading-[1.4] font-bold">
            Claridad antes de comprometer tiempo o dinero en algo que no sabes si es viable.
          </h3>

          {/* TEXT */}
          <p className="text-[14px] leading-[1.7] text-white/60">
            Brújula financiera te entrega un diagnóstico honesto de tu
            situación real y un plan concreto para mejorarla.
          </p>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-white/10" />

          {/* INFO ROWS */}
          <div className="flex flex-col gap-[14px]">

            <div className="flex justify-between items-center">
              <span className="text-white/50 text-[13px]">
                ¿Ejecuta por ti?
              </span>
              <span className="text-white text-[14px] font-semibold">
                No — solo orienta
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-white/50 text-[13px]">
                ¿Requiere documentación?
              </span>
              <span className="text-white text-[14px] font-semibold">
                Mínima
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-white/50 text-[13px]">
                Precio único
              </span>
              <span className="text-[#FFD54F] text-[16px] font-semibold">
                USD $45
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-white/50 text-[13px]">
                Entrega
              </span>
              <span className="text-white text-[14px] font-semibold">
                3 días calendario
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}