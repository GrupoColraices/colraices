"use client";

const preparacion = [
  {
    tag: "DIAGNÓSTICO FINANCIERO",
    title: "Brújula Financiera",
    subtitle: '"Tu salud financiera también se cuida"',
    desc: "No sabes cómo está tu historial crediticio en Colombia. No sabes por dónde empezar. La Brújula Financiera te entrega un diagnóstico claro, un informe personalizado y un plan de acción concreto.",
    price: "USD $45",
    duration: "3 días",
    color: "bg-[#1A4F9E]",
    icon: "🧭",
  },
  {
    tag: "VIABILIDAD CREDITICIA",
    title: "Brújula Crediticia",
    subtitle: '"Planificar hoy para comprar bien mañana"',
    desc: "Quieres pedir crédito en Colombia pero no sabes si hoy calificas. La Brújula Crediticia analiza tu perfil, lo marca con el banco y te dice con precisión si estás listo —y si no, qué ajustar y en cuánto tiempo.",
    price: "USD $180",
    duration: "3 días",
    color: "bg-[#FFC107]",
    icon: "📊",
  },
  {
    tag: "RESOLUCIÓN ACTIVA",
    title: "Buena Data",
    subtitle: '"Soluciones claras para un mejor futuro financiero"',
    desc: "Tienes reportes negativos, una deuda en mora o un caso de suplantación. Desde el exterior no puedes resolverlo solo. Colraices se hace cargo directamente — gestiona, negocia y cierra el problema por ti.",
    price: "USD $290",
    duration: "30–90 días",
    color: "bg-[#DC2626]",
    icon: "🔧",
  },
];

const ejecucion = [
  {
    tag: "BANCO DAVIVIENDA",
    title: "Crédito hipotecario",
    subtitle: "Para comprar vivienda en Colombia",
    desc: "Hasta el 80% de financiación con bancos aliados en Colombia.",
    extra1: "Hasta 80%",
    extra2: "30 años",
    color: "bg-[#1A4F9E]",
    icon: "🏠",
    button: "Ver página de crédito →",
    filled: true,
  },
  {
    tag: "BANCO UNIÓN",
    title: "Crédito libre inversión",
    subtitle: "Capitaliza tu inmueble en Colombia",
    desc: "Puedes usar tu propiedad en Colombia como respaldo para obtener liquidez.",
    extra1: "Hasta 70%",
    extra2: "15 años",
    color: "bg-[#1A4F9E]",
    icon: "💼",
    button: "Ver página de crédito →",
  },
  {
    tag: "TRANSFERENCIA DE DIVISAS",
    title: "Monetización",
    subtitle: '"Trae tu dinero a Colombia"',
    desc: "Proceso legal para traer dinero desde el exterior con respaldo y cumplimiento.",
    extra1: "1%",
    extra2: "USD 10.000",
    color: "bg-[#059669]",
    icon: "💱",
    button: "Ver producto →",
  },
];

function Card({ item, index }: any) {
  const tagColors = [
    "text-[#0F2D5C]",
    "text-[#FFC107]",
    "text-[#DC2626]",
  ];

  return (
    <div className="relative w-[348px] h-[507.94px] bg-white border border-[#0F2D5C]/10 rounded-tl-[16px] rounded-br-[16px] px-[28.8px] pt-[28.8px]">

      {/* TOP LINE */}
      <div className={`absolute top-0 left-0 w-full h-[2px] ${item.color}`} />

      {/* TAG */}
      <p className={`${tagColors[index]} text-[9.92px] font-bold tracking-[0.99px] leading-[14.9px] uppercase`}>
        {item.tag}
      </p>

      {/* ICON */}
      <div className="text-[24px] leading-[42px] mt-[13px] opacity-80">
        {item.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-[#0F2D5C] text-[18.4px] font-semibold leading-[27.6px] mt-[12px]">
        {item.title}
      </h3>

      {/* SUBTITLE */}
      <p className="text-[#94A3B8] italic text-[12.48px] leading-[18.7px] mt-[4px]">
        {item.subtitle}
      </p>

      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-[#0F2D5C]/10 mt-[18px]" />

      {/* DESC */}
      <p className="text-[#475569] text-[13.6px] leading-[22.4px] mt-[12px]">
        {item.desc}
      </p>

      {/* INFO */}
      <div className="absolute bottom-[86px] left-[28.8px] right-[28.8px] border-t border-[#0F2D5C]/10 pt-[14px] flex justify-between">

        <div>
          <p className="text-[#94A3B8] text-[10.4px] font-bold tracking-[0.83px] uppercase">
            {item.price ? "PRECIO" : "FINANCIACIÓN"}
          </p>
          <p className="text-[#0F2D5C] text-[14.08px] font-bold">
            {item.price || item.extra1}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[#94A3B8] text-[10.4px] font-bold tracking-[0.83px] uppercase">
            {item.duration ? "DURACIÓN" : "PLAZO MÁX."}
          </p>
          <p className="text-[#475569] text-[13.12px] font-medium">
            {item.duration || item.extra2}
          </p>
        </div>

      </div>

      {/* BUTTON */}
      <button className="absolute bottom-[28.8px] left-[28.8px] right-[28.8px] h-[41.29px] rounded-full border border-[#CCCCCC]/20 text-[#0F2D5C] text-[13.12px] font-semibold">
        {item.button || "Ver producto"}
      </button>
    </div>
  );
}

export default function ProductosSection() {
  return (
    <section className="w-full bg-white pt-[88px] pb-[143px]">

      <div className="w-[1084px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-[57px]">
          <p className="text-[#FFC107] text-[20px] italic font-bold leading-[30px]">
            Nuestros productos financieros
          </p>

          <h2 className="text-[#0F2D5C] text-[35.86px] font-bold leading-[43px] mt-[8px]">
            Seis herramientas. Un solo objetivo:
          </h2>

          <p className="text-[#0F2D5C] italic text-[35.86px] leading-[43px] mt-[4px]">
            que tu dinero trabaje en Colombia.
          </p>
        </div>

        {/* BLOQUE 1 */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <p className="text-[#94A3B8] text-[9.92px] font-bold tracking-[1.19px] uppercase">
            PREPARACIÓN — ANTES DE COMPRAR
          </p>
          <div className="flex-1 h-[1px] bg-[#94A3B8]" />
        </div>

        <div className="flex gap-[20px] mb-[60px]">
          {preparacion.map((item, i) => (
            <Card key={i} item={item} index={i} />
          ))}
        </div>

        {/* BLOQUE 2 */}
        <div className="flex items-center gap-[10px] mb-[30px]">
          <p className="text-[#94A3B8] text-[9.92px] font-bold tracking-[1.19px] uppercase">
            EJECUCIÓN — CUANDO ESTÁS LISTO PARA ACTUAR
          </p>
          <div className="flex-1 h-[1px] bg-[#94A3B8]" />
        </div>

        <div className="flex gap-[20px]">
          {ejecucion.map((item, i) => (
            <Card key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}