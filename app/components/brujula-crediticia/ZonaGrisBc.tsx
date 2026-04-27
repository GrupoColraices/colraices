"use client";

export default function ZonaGrisBc() {
  return (
    <section className="w-full bg-[#FFFBEB] flex justify-center pt-[80px] pb-[80px]">
      
      <div className="w-full max-w-[1180px] px-[48px] flex flex-col gap-[48px]">

        {/* HEADER */}
        <div className="w-full flex flex-col gap-[8px]">
          <span className="text-[20px] text-[#0A0A0A] leading-[24px]">
            La zona gris
          </span>

          <h2 className="text-[32px] font-semibold text-[#0F2D5C] leading-[43px]">
            Muchos clientes llegan en este punto.
          </h2>
        </div>

        {/* CONTENIDO */}
        <div className="w-full flex flex-col lg:flex-row gap-[64px]">

          {/* IZQUIERDA */}
          <div className="w-full max-w-[510px] flex flex-col gap-[10px]">

            {[
              {
                icon: "🏠",
                text: "Ya quiero comprar en Colombia — tengo ingresos y estabilidad. Pero no sé si hoy califico para crédito."
              },
              {
                icon: "⚠️",
                text: "Sospecho que tengo algún reporte negativo pero no sé exactamente cómo afecta mis posibilidades."
              },
              {
                icon: "❓",
                text: "No sé qué variables están jugando a favor o en contra de mi perfil crediticio."
              },
              {
                icon: "⏳",
                text: "He ido postergando la decisión indefinidamente porque no quiero ilusionarme sin base real."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-[12px] pl-[20px] pr-[16px] pt-[18px] pb-[18px] bg-white border border-[#FFC107]/15"
                style={{
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 16,
                  borderBottomLeftRadius: 0,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <span className="text-[20px] leading-[30px]">
                  {item.icon}
                </span>

                <p className="text-[14px] italic text-[#1E293B] leading-[21.7px]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          {/* DERECHA */}
          <div className="w-full max-w-[510px] flex flex-col">

            <span className="text-[13px] font-bold text-[#FFC107] tracking-[1.25px] uppercase">
              La Brújula Crediticia resuelve exactamente eso
            </span>

            <h3 className="mt-[12px] text-[20px] font-semibold text-[#0F2D5C] leading-[30px]">
              Convierte la incertidumbre en un plan accionable.
            </h3>

            <p className="mt-[16px] text-[14.4px] text-[#475569] leading-[25.2px]">
              Cuando quieres comprar o invertir en Colombia, pero no tienes claridad sobre tu viabilidad crediticia, es fácil quedarse en la duda o avanzar sin saber realmente si es el momento.
            </p>

            {/* CAJA AZUL */}
            <div className="mt-[24px] bg-[#0F2D5C] rounded-[14px] pl-[22px] pr-[16px] pt-[20px] pb-[20px]">

              <div className="flex items-center gap-[10px]">
                <span className="text-[22px]">🎯</span>

                <span className="text-[14px] font-bold text-white leading-[23px]">
                  Las dos preguntas que responde:
                </span>
              </div>

              <div className="mt-[12px] ml-[4px] flex flex-col gap-[6px] text-[14px] text-white/75 leading-[23px]">
                <p>
                  1. ¿Hoy podría acceder a crédito para comprar en Colombia?
                </p>
                <p>
                  2. Si no es el momento, qué debo ajustar y en cuánto tiempo podría lograrlo?
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}