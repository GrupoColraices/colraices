"use client";

export default function Garantias() {
  return (
    <section className="w-full bg-[#FBF8F3] flex justify-center px-4 md:px-8 pt-[88px] pb-[88px]">
      <div className="w-full max-w-[1180px] flex flex-col gap-12">

        {/* HEADER */}
        <div className="w-full text-center flex flex-col items-center gap-2">
          <span className="text-[20px] text-[#0A0A0A] font-normal">
            Garantías
          </span>

          <h2 className="text-[28px] md:text-[36px] leading-[1.2] font-semibold text-[#0F2D5C] max-w-[800px]">
            Qué garantiza Buena Data — y qué no.
          </h2>

          <p className="text-[14px] md:text-[15px] text-[#475569]">
            Claridad total sobre el alcance del servicio.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ✅ SÍ GARANTIZAMOS */}
          <div className="w-full rounded-[20px] bg-[#FFF9C4] p-6 md:p-8 flex flex-col gap-6">

            {/* TITLE */}
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-[#FFC107]/20 flex items-center justify-center text-[#0A0A0A]">
                ✓
              </div>

              <span className="text-[16px] font-bold text-[#FFC107]">
                Sí garantizamos
              </span>
            </div>

            {/* ITEMS */}
            <div className="flex flex-col gap-4">

              {[
                "Diagnóstico completo y profesional de tu caso en máximo 3 días hábiles.",
                "Representación legal formal con poder notarial debidamente registrado.",
                "Gestión activa y constante con las entidades involucradas hasta el cierre del caso.",
                "Actualizaciones periódicas (cada 7 días o antes si hay avances significativos).",
                "Informe final documentado con todas las gestiones realizadas.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#FFC107]/20 flex items-center justify-center text-[10px] text-[#FFC107] mt-[2px]">
                    ✓
                  </div>

                  <p className="text-[14px] leading-[1.6] text-[#1E293B]">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* ❌ NO GARANTIZAMOS */}
          <div className="w-full rounded-[20px] bg-[#FEF2F2] border border-[#DC2626]/20 p-6 md:p-8 flex flex-col gap-6">

            {/* TITLE */}
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-[#DC2626]/20 flex items-center justify-center text-[#0A0A0A]">
                ✕
              </div>

              <span className="text-[16px] font-semibold text-[#DC2626]">
                No garantizamos
              </span>
            </div>

            {/* ITEMS */}
            <div className="flex flex-col gap-4">

              {[
                "Eliminación automática de reportes legítimos (si la deuda es real y no hay error, el reporte puede mantenerse hasta su prescripción).",
                "Tiempos de respuesta de terceros (bancos, centrales de riesgo, juzgados).",
                "Aprobación de crédito posterior (limpiamos el historial, pero la decisión crediticia es del banco).",
                "Resolución de casos sin fundamento legal (si no hay base jurídica para actuar, te lo informamos antes).",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#DC2626]/20 flex items-center justify-center text-[10px] text-[#DC2626] mt-[2px]">
                    ✕
                  </div>

                  <p className="text-[14px] leading-[1.6] text-[#1E293B]">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* FOOTER INFO */}
        <div className="w-full rounded-tl-[16px] rounded-tr-none rounded-br-[16px] rounded-bl-none border border-[#0F2D5C]/10 bg-[#0F2D5C]/5 px-6 py-5 flex flex-col gap-3">

          <p className="text-[13px] font-bold text-[#0F2D5C] text-left">
            El resultado final del caso puede estar sujeto a:
          </p>

          <div className="flex flex-col md:flex-row md:justify-between text-[13px] text-[#475569]">

            {[
              "Disponibilidad de pruebas y documentos",
              "Disposición del acreedor a negociar",
              "Legalidad del reporte o deuda original",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-[5px] h-[5px] bg-[#94A3B8] rounded-full" />
                <span>{item}</span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}