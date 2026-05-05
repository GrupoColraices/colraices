"use client";

export default function FiscalConfusionSection() {
  const rows = [
    {
      leftTitle: "Residencia migratoria",
      leftText:
        "Estás en España con residencia legal. Llevas 5 años fuera. Tu visa está en regla.",
      center: "≠",
      rightTitle: "Residencia fiscal",
      rightText:
        "Si tu familia, tu inmueble o la mayoría de tu patrimonio está en Colombia, la DIAN puede considerarte residente fiscal colombiano.",
    },
    {
      leftTitle: "Lo que crees",
      leftText: '"Yo ya no tengo nada que ver con el fisco colombiano."',
      center: "≠",
      rightTitle: "Lo que puede pasar",
      rightText:
        "Años de declaraciones pendientes acumulando sanciones e intereses que en algún momento se vuelven concretos.",
    },
    {
      leftTitle: "El riesgo de ignorarlo",
      leftText:
        "La DIAN cruza datos con entidades financieras, notarías y registros públicos — y cada vez más con sistemas internacionales.",
      center: "→",
      rightTitle: "Lo que resuelve esto",
      rightText:
        "Un diagnóstico que confirma si tienes obligaciones activas — o que te da la tranquilidad documentada de que no las tienes.",
    },
  ];

  return (
    <section className="w-full bg-[#091D3E] py-12 sm:py-16 lg:py-[72px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 xl:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[514px] flex flex-col lg:pt-[64px]">

            {/* Top label */}
            <div className="flex items-center gap-2 mb-7">
              <div className="w-[22px] h-[2px] bg-[#FFC107]" />
              <span className="text-[#FFC107] text-[11.2px] font-semibold leading-[16.8px] tracking-[1.57px] uppercase font-[Montserrat,sans-serif]">
                La confusión más común
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white text-[26px] sm:text-[30px] lg:text-[32px] font-semibold leading-[1.35] mb-7">
              Vivir afuera no es lo mismo que salir del fisco colombiano
            </h2>

            {/* Description */}
            <p className="text-white/60 text-[15.2px] leading-[26.6px] mb-10">
              La DIAN no pregunta dónde vives. Pregunta si eres residente fiscal.
              Y ese cálculo depende de reglas que poco tienen que ver con tu
              pasaporte o tu visa.
            </p>

            {/* Bottom green box */}
            <div className="w-full rounded-[20px] px-6 py-5 bg-[#059669]/12 border border-[#10B981]/20">
              <p className="text-white/70 text-[14.08px] leading-[23.9px]">
                <span className="text-[#FFC107] font-bold">
                  Mientras seas residente fiscal en Colombia,
                </span>{" "}
                mantienes obligaciones tributarias, sin importar cuántos años
                lleves fuera o dónde trabajes. El diagnóstico gratuito te ayuda a
                resolver esta duda en minutos.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[514px] flex flex-col lg:pt-[16px]">

            {/* Subtitle */}
            <p className="text-white/35 text-[10.88px] font-semibold leading-[16.3px] tracking-[1.41px] uppercase mb-6">
              Cómo lo ven el consulado y cómo lo ve la DIAN
            </p>

            {/* Comparison rows */}
            <div className="flex flex-col">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_40px_1fr]"
                >
                  {/* Left cell */}
                  <div
                    className="p-5 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(220,38,38,0.10)",
                      border: "1px solid rgba(220,38,38,0.15)",
                      borderTopLeftRadius:  i === 0 ? "12px" : "0",
                      borderTopRightRadius: i === 0 ? "12px" : "0",
                      borderBottomLeftRadius:  i === rows.length - 1 ? "0" : "0",
                      borderBottomRightRadius: i === rows.length - 1 ? "0" : "0",
                    }}
                  >
                    <h3 className="text-[rgba(252,165,165,0.85)] text-[10.88px] font-bold leading-[17.4px] tracking-[1.09px] uppercase mb-3">
                      {row.leftTitle}
                    </h3>
                    <p className="text-white/55 text-[13.12px] leading-[21px]">
                      {row.leftText}
                    </p>
                  </div>

                  {/* Center symbol */}
                  <div
                    className="flex items-center justify-center py-3 lg:py-0 text-[18px] text-white/25"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderTop: i === 0 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {row.center}
                  </div>

                  {/* Right cell */}
                  <div
                    className="p-5 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(5,150,105,0.10)",
                      border: "1px solid rgba(16,185,129,0.18)",
                      borderTopLeftRadius:  i === 0 ? "0" : "0",
                      borderTopRightRadius: i === 0 ? "0" : "0",
                      borderBottomLeftRadius:  i === rows.length - 1 ? "12px" : "0",
                      borderBottomRightRadius: i === rows.length - 1 ? "12px" : "0",
                    }}
                  >
                    <h3 className="text-[#FFC107] text-[10.88px] font-bold leading-[17.4px] tracking-[1.09px] uppercase mb-3">
                      {row.rightTitle}
                    </h3>
                    <p className="text-white/55 text-[13.12px] leading-[21px]">
                      {row.rightText}
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