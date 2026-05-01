"use client";
 
interface Problema {
  emoji: string;
  texto: string;
}
 
interface Beneficio {
  emoji: string;
  titulo: string;
  descripcion: string;
}
 
export default function ProblemaRealMo() {
  const problemas: Problema[] = [
    {
      emoji: "😰",
      texto: `\u201cNo sé el proceso correcto para legalizar estas divisas y temo que el dinero quede retenido.\u201d`,
    },
    {
      emoji: "📉",
      texto: `\u201cEl banco me ofrece una tasa muy baja. Siento que estoy perdiendo dinero en la conversión.\u201d`,
    },
    {
      emoji: "🤯",
      texto: `\u201cEl proceso es lento, fragmentado y nadie me da claridad sobre qué pasa con mi dinero en cada etapa.\u201d`,
    },
    {
      emoji: "⚠️",
      texto: `\u201cUn error en la legalización de divisas puede significar problemas legales o perder parte del capital.\u201d`,
    },
  ];
 
  const beneficios: Beneficio[] = [
    {
      emoji: "🔒",
      titulo: "Seguridad",
      descripcion:
        "Legalización correcta ante el Banco de la República. Sin riesgos de retención.",
    },
    {
      emoji: "📈",
      titulo: "Mejor tasa",
      descripcion:
        "Negociación directa en mesa de dinero para obtener el mejor diferencial posible.",
    },
    {
      emoji: "🤝",
      titulo: "Tranquilidad",
      descripcion:
        "Acompañamiento experto y comunicación en cada etapa. Tú sabes siempre dónde está tu dinero.",
    },
  ];
 
  return (
    <section className="w-full bg-[#FFF9E6] border-t border-[#FFC107]/10 flex justify-center pt-[80px] pb-[80px]">
      <div className="w-full max-w-[1180px] px-[48px]">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-[64px]">
 
          {/* LADO IZQUIERDO */}
          <div className="w-full lg:max-w-[510px] flex flex-col">
 
            <p className="text-[20px] leading-[24px] font-normal text-[#0A0A0A]">
              El problema real
            </p>
 
            <h2 className="mt-[24px] text-[35.86px] leading-[43px] font-semibold text-[#0F2D5C]">
              Traer más de USD $10.000
              <br />
              a Colombia no es un giro
              <br />
              bancario normal.
            </h2>
 
            <div className="mt-[24px] flex flex-col gap-[10px]">
              {problemas.map((item: Problema, index: number) => (
                <div
                  key={index}
                  className="
                    w-full min-h-[81px] rounded-[14px] bg-white
                    border border-[#E2E8F0]
                    flex gap-[12px] px-[20px] pt-[18px] pb-[18px]
                    cursor-pointer will-change-transform
                    transition-all duration-200 ease-out
                    hover:-translate-y-[3px]
                    hover:border-[#CBD5E1]
                    hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)]
                  "
                >
                  <div className="text-[20px] leading-[30px]">{item.emoji}</div>
                  <p className="text-[14px] italic leading-[21.7px] text-[#1E293B]">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
 
          {/* LADO DERECHO */}
          <div className="w-full lg:max-w-[510px] flex flex-col pt-[38px]">
 
            <p className="text-[10.4px] leading-[15.6px] tracking-[1.25px] uppercase font-bold text-[#FFC107]">
              Monetización responde a eso
            </p>
 
            <h3 className="mt-[12px] text-[24px] leading-[30px] font-semibold text-[#0F2D5C]">
              Seguridad, mejor tasa y tranquilidad —
              <br />
              en un solo servicio.
            </h3>
 
            <p className="mt-[14px] text-[14.4px] leading-[25.2px] text-[#475569]">
              Monetización es un servicio de acompañamiento experto en uno de los
              momentos más sensibles del proceso de inversión.
            </p>
 
            <div className="mt-[20px] flex flex-col gap-[10px]">
              {beneficios.map((item: Beneficio, index: number) => (
                <div
                  key={index}
                  className="
                    w-full min-h-[87px] rounded-[12px] bg-white
                    border border-[#E2E8F0]
                    flex gap-[14px] px-[16px] py-[14px]
                    cursor-pointer will-change-transform
                    transition-all duration-200 ease-out
                    hover:-translate-y-[3px]
                    hover:border-[#CBD5E1]
                    hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)]
                  "
                >
                  <div className="w-[36px] h-[36px] rounded-[10px] bg-[#FFF9C4] flex items-center justify-center text-[17px] shrink-0">
                    {item.emoji}
                  </div>
 
                  <div className="flex flex-col gap-[2px]">
                    <h4 className="text-[14.08px] leading-[21.1px] font-semibold text-[#0F2D5C]">
                      {item.titulo}
                    </h4>
                    <p className="text-[13.5px] leading-[19px] text-[#475569]">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}