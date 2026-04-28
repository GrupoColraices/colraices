"use client";

export default function DuracionProceso() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 pt-[88px] pb-[60px]">
      <div className="w-full max-w-[1180px] flex flex-col gap-12">

        {/* HEADER */}
        <div className="text-center flex flex-col gap-2">
          <p className="text-[14px] md:text-[16px] text-[#0A0A0A]">
            Duración del proceso
          </p>

          <h2 className="text-[24px] md:text-[36px] font-semibold text-[#0F2D5C] leading-tight">
            Entre 30 y 90 días desde el inicio hasta el cierre completo.
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* IZQUIERDA - FASES */}
          <div className="flex flex-col gap-10">

            {/* FASE 1 */}
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0F2D5C] text-white flex items-center justify-center">
                  📋
                </div>
                <div className="w-[1px] flex-1 bg-[#0F2D5C]/10 mt-2"></div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-widest font-bold text-[#94A3B8] uppercase">
                  Fase 1
                </span>

                <h3 className="text-[16px] font-semibold text-[#0F2D5C]">
                  Diagnóstico y análisis
                </h3>

                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Consulta inicial, revisión en centrales de riesgo, análisis jurídico del caso e informe ejecutivo con plan de acción específico.
                </p>

                <span className="inline-block w-fit px-3 py-1 rounded-full text-[12px] font-semibold bg-[#0F2D5C]/10 text-[#0F2D5C]">
                  3 días hábiles
                </span>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#DC2626] text-white flex items-center justify-center">
                  ⚖️
                </div>
                <div className="w-[1px] flex-1 bg-[#0F2D5C]/10 mt-2"></div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-widest font-bold text-[#94A3B8] uppercase">
                  Fase 2
                </span>

                <h3 className="text-[16px] font-semibold text-[#0F2D5C]">
                  Ejecución y gestión
                </h3>

                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Representación legal, negociación con acreedores, radicación de peticiones, coordinación de pagos y seguimiento a respuestas de entidades.
                </p>

                <span className="inline-block w-fit px-3 py-1 rounded-full text-[12px] font-semibold bg-[#FEF2F2] text-[#DC2626]">
                  20–80 días (variable según complejidad)
                </span>
              </div>
            </div>

            {/* FASE 3 */}
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center">
                  ✓
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-widest font-bold text-[#94A3B8] uppercase">
                  Fase 3
                </span>

                <h3 className="text-[16px] font-semibold text-[#0F2D5C]">
                  Cierre y entrega
                </h3>

                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Obtención de paz y salvos, validación de actualización en centrales de riesgo, informe final y entrega de certificaciones.
                </p>

                <span className="inline-block w-fit px-3 py-1 rounded-full text-[12px] font-semibold bg-[#ECFDF5] text-[#059669]">
                  5–7 días hábiles
                </span>
              </div>
            </div>

          </div>

          {/* DERECHA - TARJETA */}
          <div className="self-start bg-[#FEF3C7] border border-[#C9900C]/20 rounded-tl-[16px] rounded-br-[16px] p-6 flex flex-col">

            <h4 className="text-[16px] font-semibold text-[#0F2D5C] mb-3">
              ¿Por qué varía tanto el tiempo?
            </h4>

            <p className="text-[14px] font-medium text-[#475569] mb-4">
              La fase de ejecución depende de factores externos que Colraices no controla directamente:
            </p>

            <div className="flex flex-col">

              {/* ITEM 1 */}
              <div className="flex justify-between items-start py-3 border-b border-[#C9900C]/20">
                <span className="text-[13px] text-[#475569]">
                  Tiempo de respuesta de las entidades
                </span>
                <span className="text-[13px] font-semibold text-[#0F2D5C] whitespace-nowrap">
                  10–30 días
                </span>
              </div>

              {/* ITEM 2 */}
              <div className="flex justify-between items-start py-3 border-b border-[#C9900C]/20">
                <span className="text-[13px] text-[#475569]">
                  Complejidad del caso (fraude, suplantación)
                </span>
                <span className="text-[13px] font-semibold text-[#0F2D5C] whitespace-nowrap">
                  Hasta 60 días
                </span>
              </div>

              {/* ITEM 3 */}
              <div className="flex justify-between items-start py-3">
                <span className="text-[13px] text-[#475569]">
                  Cantidad de deudas o reportes a gestionar
                </span>
                <span className="text-[13px] font-semibold text-[#0F2D5C] whitespace-nowrap">
                  Variable
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}