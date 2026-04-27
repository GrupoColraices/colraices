"use client";

export default function CuatroComponentesBc() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="
        w-full max-w-[1180px] 
        px-[20px] sm:px-[32px] lg:px-[48px] 
        pt-[64px] sm:pt-[80px] lg:pt-[88px] 
        pb-[64px] sm:pb-[80px]
        flex flex-col
      ">

        {/* HEADER */}
        <div className="w-full flex flex-col items-center text-center">

          <p className="text-[#0A0A0A] text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px]">
            ¿Qué incluye exactamente?
          </p>

          <h2 className="
            mt-[8px] 
            text-[#0F2D5C] 
            text-[26px] sm:text-[30px] lg:text-[36px] 
            leading-[34px] sm:leading-[38px] lg:leading-[43px] 
            font-semibold 
            max-w-[800px]
          ">
            Cuatro componentes. Un diagnóstico que te dice la verdad.
          </h2>

          <p className="
            mt-[16px] 
            text-[#475569] 
            text-[14px] sm:text-[15px] lg:text-[15.2px] 
            leading-[22px] sm:leading-[24px] lg:leading-[25.8px] 
            max-w-[800px]
          ">
            Todo el análisis que necesitas para saber si calificas para crédito y qué hacer si aún no estás listo.
          </p>
        </div>

        {/* GRID */}
        <div className="
          mt-[48px] sm:mt-[64px] lg:mt-[88px] 
          grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px]
        ">

          <Card {...card1} />
          <Card {...card2} />
          <Card {...card3} />
          <Card {...card4} />

        </div>
      </div>
    </section>
  );
}


/* CARD RESPONSIVE */
function Card({ number, icon, title, desc, items }: any) {
  return (
    <div
      className="
      group relative w-full 
      min-h-[280px] sm:min-h-[300px] lg:h-[320px]

      rounded-tr-none rounded-bl-none rounded-tl-[16px] rounded-br-[16px] 
      p-[20px] sm:p-[24px] lg:p-[28.8px] 

      border border-[#0F2D5C]/10 

      transition-all duration-300 ease-out
      hover:-translate-y-[6px]
      hover:border-[#0F2D5C]/20
      hover:shadow-[0_10px_30px_rgba(15,45,92,0.08)]
      "
    >

      {/* número */}
      <span className="
        absolute 
        top-[12px] sm:top-[16px] 
        right-[16px] sm:right-[20px] 
        text-[36px] sm:text-[42px] lg:text-[48px] 
        leading-[48px] 
        font-bold text-[#0F2D5C]/[0.04]
      ">
        {number}
      </span>

      {/* icono */}
      <div className="
        text-[22px] sm:text-[24px] lg:text-[26px] 
        transition-transform duration-300 
        group-hover:scale-101
      ">
        {icon}
      </div>

      {/* título */}
      <h3 className="
        mt-[12px] 
        text-[#0F2D5C] 
        text-[15px] sm:text-[16px] 
        leading-[22px] sm:leading-[24px] 
        font-semibold
      ">
        {title}
      </h3>

      {/* descripción */}
      <p className="
        mt-[8px] 
        text-[#475569] 
        text-[13px] sm:text-[14px] 
        leading-[20px] sm:leading-[23px]
      ">
        {desc}
      </p>

      {/* bullets */}
      <ul className="mt-[12px] sm:mt-[16px] flex flex-col gap-[6px]">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-[8px]">
            <span className="mt-[6px] w-[5px] h-[5px] bg-[#FFC107] rounded-full"></span>
            <span className="text-[#475569] text-[12.5px] sm:text-[13.12px] leading-[18px] sm:leading-[19px]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


/* DATA (más limpio) */
const card1 = {
  number: "01",
  icon: "🔬",
  title: "Diagnóstico financiero enfocado en crédito",
  desc: "Análisis técnico de tu información financiera y crediticia con una lente específica: viabilidad para acceder a crédito bancario.",
  items: [
    "Análisis de la información financiera y crediticia",
    "Revisión del historial y principales factores de riesgo",
    "Evaluación de comportamientos crediticios",
    "Identificación de oportunidades de mejora",
  ],
};

const card2 = {
  number: "02",
  icon: "🏦",
  title: "Evaluación de viabilidad crediticia",
  desc: "El análisis se hace conforme a las políticas reales de los bancos aliados — no son estimaciones teóricas.",
  items: [
    "Análisis conforme a políticas de entidades financieras aliadas",
    "Consulta en centrales de riesgo (CIFIN / DataCrédito)",
    "Marcación interna bancaria con información recolectada",
    "Estimación de cupo de crédito aproximado",
  ],
};

const card3 = {
  number: "03",
  icon: "📄",
  title: "Informe claro y personalizado",
  desc: "Un documento que convierte datos técnicos en decisiones concretas. Escrito para que lo entiendas tú, no un banco.",
  items: [
    "Resultado del análisis financiero y crediticio",
    "Lectura del perfil crediticio actual",
    "Análisis y explicación del escenario actual",
    "Estimación del cupo potencial de crédito",
  ],
};

const card4 = {
  number: "04",
  icon: "🗺️",
  title: "Plan de acción crediticio + Sesión de asesoría",
  desc: "No solo sabes dónde estás — sabes exactamente qué hacer y cuándo actuar para llegar al crédito.",
  items: [
    "Recomendaciones concretas para mejorar la viabilidad",
    "Priorización de acciones con tiempos realistas",
    "Sesión de acompañamiento para explicar resultados",
    "Resolución de dudas y alineación de expectativas",
  ],
};