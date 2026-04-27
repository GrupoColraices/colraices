"use client";

export default function CuatroComponentesBc() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1180px] px-[48px] pt-[88px] pb-[80px] flex flex-col">

        {/* HEADER */}
        <div className="w-full flex flex-col items-center text-center">

          <p className="text-[#0A0A0A] text-[20px] leading-[24px] font-normal">
            ¿Qué incluye exactamente?
          </p>

          <h2 className="mt-[4px] text-[#0F2D5C] text-[36px] leading-[43px] font-semibold max-w-[800px]">
            Cuatro componentes. Un diagnóstico que te dice la verdad.
          </h2>

          <p className="mt-[16px] text-[#475569] text-[15.2px] leading-[25.8px] max-w-[800px]">
            Todo el análisis que necesitas para saber si calificas para crédito y qué hacer si aún no estás listo.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-[88px] grid grid-cols-2 gap-[20px]">

          {/* CARD 1 */}
          <div className="relative w-full h-[320px] border border-[#0F2D5C]/10 rounded-tr-none rounded-bl-none rounded-tl-[16px] rounded-br-[16px] p-[28.8px]">

            {/* número */}
            <span className="absolute top-[16.8px] right-[20px] text-[48px] leading-[48px] font-bold text-[#0F2D5C]/[0.04]">
              01
            </span>

            {/* icono */}
            <div className="text-[26px] leading-[39px]">🔬</div>

            {/* título */}
            <h3 className="mt-[12px] text-[#0F2D5C] text-[16px] leading-[24px] font-semibold">
              Diagnóstico financiero enfocado en crédito
            </h3>

            {/* descripción */}
            <p className="mt-[8px] text-[#475569] text-[14px] leading-[23.1px]">
              Análisis técnico de tu información financiera y crediticia con una lente específica: viabilidad para acceder a crédito bancario.
            </p>

            {/* bullets */}
            <ul className="mt-[16px] flex flex-col gap-[6px]">
              {[
                "Análisis de la información financiera y crediticia",
                "Revisión del historial y principales factores de riesgo",
                "Evaluación de comportamientos crediticios",
                "Identificación de oportunidades de mejora",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-[8px]">
                  <span className="mt-[6px] w-[5px] h-[5px] bg-[#FFC107] rounded-full"></span>
                  <span className="text-[#475569] text-[13.12px] leading-[19px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 2 */}
          <Card
            number="02"
            icon="🏦"
            title="Evaluación de viabilidad crediticia"
            desc="El análisis se hace conforme a las políticas reales de los bancos aliados — no son estimaciones teóricas."
            items={[
              "Análisis conforme a políticas de entidades financieras aliadas",
              "Consulta en centrales de riesgo (CIFIN / DataCrédito)",
              "Marcación interna bancaria con información recolectada",
              "Estimación de cupo de crédito aproximado",
            ]}
          />

          {/* CARD 3 */}
          <Card
            number="03"
            icon="📄"
            title="Informe claro y personalizado"
            desc="Un documento que convierte datos técnicos en decisiones concretas. Escrito para que lo entiendas tú, no un banco."
            items={[
              "Resultado del análisis financiero y crediticio",
              "Lectura del perfil crediticio actual",
              "Análisis y explicación del escenario actual",
              "Estimación del cupo potencial de crédito",
            ]}
          />

          {/* CARD 4 */}
          <Card
            number="04"
            icon="🗺️"
            title="Plan de acción crediticio + Sesión de asesoría"
            desc="No solo sabes dónde estás — sabes exactamente qué hacer y cuándo actuar para llegar al crédito."
            items={[
              "Recomendaciones concretas para mejorar la viabilidad",
              "Priorización de acciones con tiempos realistas",
              "Sesión de acompañamiento para explicar resultados",
              "Resolución de dudas y alineación de expectativas",
            ]}
          />

        </div>
      </div>
    </section>
  );
}


/* COMPONENTE REUTILIZABLE */
function Card({ number, icon, title, desc, items }: any) {
  return (
    <div className="relative w-full h-[320px] border border-[#0F2D5C]/10 rounded-tr-none rounded-bl-none rounded-tl-[16px] rounded-br-[16px] p-[28.8px]">

      <span className="absolute top-[16.8px] right-[20px] text-[48px] leading-[48px] font-bold text-[#0F2D5C]/[0.04]">
        {number}
      </span>

      <div className="text-[26px] leading-[39px]">{icon}</div>

      <h3 className="mt-[12px] text-[#0F2D5C] text-[16px] leading-[24px] font-semibold">
        {title}
      </h3>

      <p className="mt-[8px] text-[#475569] text-[14px] leading-[23.1px]">
        {desc}
      </p>

      <ul className="mt-[16px] flex flex-col gap-[6px]">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-[8px]">
            <span className="mt-[6px] w-[5px] h-[5px] bg-[#FFC107] rounded-full"></span>
            <span className="text-[#475569] text-[13.12px] leading-[19px]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}