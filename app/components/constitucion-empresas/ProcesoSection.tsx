"use client";
 
export default function ProcesoSection() {
  const fases = [
    {
      fase: "FASE 1 · MESES 1–2",
      titulo: "Diagnóstico y Formulación",
      descripcion:
        "Definimos si la idea tiene viabilidad real antes de invertir.",
      items: [
        "Sesión de levantamiento con el colombiano en el exterior y, cuando aplica, con el familiar ejecutor en Colombia.",
        "Análisis de viabilidad del negocio: demanda, competencia, márgenes estimados y riesgos principales.",
        "Modelo de negocio y plan financiero básico: estructura de operación, punto de equilibrio y proyección de flujo de caja.",
      ],
    },
    {
      fase: "FASE 2 · MESES 2–4",
      titulo: "Estructuración y Lanzamiento",
      descripcion:
        "Una vez validada la idea, esta fase convierte el plan en una empresa real y prepara al ejecutor para operar con método.",
      items: [
        "Acompañamiento en la constitución legal: Cámara de Comercio, RUT e inscripción en el régimen tributario correspondiente.",
        "Diseño operativo básico: procesos mínimos, proveedores clave, estructura de precios y políticas de cobro.",
        "Formación y herramientas para el ejecutor: gestión básica del negocio, control de ventas y seguimiento de resultados.",
      ],
    },
  ];
 
  return (
    <section className="w-full bg-[#f7f4ee] py-10 sm:py-12 overflow-hidden">
      <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8">
 
        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-4 h-[1px] bg-[#FFC107]" />
            <span className="text-[9px] uppercase tracking-[0.28em] font-bold text-[#C9900C]">
              El proceso
            </span>
          </div>
 
          <h2 className="font-bold tracking-[-0.02em] leading-tight text-[#0F2D5C] text-[1.55rem] sm:text-[1.75rem] lg:text-[1.9rem]">
            Tres fases.{" "}
            <em className="text-[#F0B429] not-italic font-semibold">16 meses.</em>
          </h2>
 
          <p className="mt-2.5 text-[#64748B] text-[0.75rem] sm:text-[0.8rem] leading-relaxed max-w-xl mx-auto">
            El servicio no termina en el lanzamiento. Está presente desde la
            validación de la idea hasta el cierre del primer año de operación.
          </p>
        </div>
 
        {/* TIMELINE */}
        <div className="relative mt-8">
          {/* center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFC107] via-[#FFD54F] to-transparent -translate-x-1/2" />
 
          {/* TOP CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
            {fases.map((fase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] border border-[rgba(15,45,92,0.07)] shadow-[0_4px_18px_rgba(15,45,92,0.08)] px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,45,92,0.12)]"
              >
                <div className="text-[8px] uppercase tracking-[0.18em] font-bold text-[#F0B429] mb-1.5">
                  {fase.fase}
                </div>
 
                <h3 className="text-[#0F2D5C] font-bold leading-tight text-[0.95rem] sm:text-[1rem] mb-1.5">
                  {fase.titulo}
                </h3>
 
                <p className="text-[#64748B] leading-relaxed text-[0.73rem] sm:text-[0.75rem] mb-3.5">
                  {fase.descripcion}
                </p>
 
                <div className="space-y-2.5">
                  {fase.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[#475569] leading-relaxed text-[0.71rem] sm:text-[0.73rem]"
                    >
                      <div className="flex-shrink-0 w-[17px] h-[17px] rounded-full bg-[#FFC107] text-[#0F2D5C] font-bold flex items-center justify-center text-[9px] mt-0.5">
                        {i + 1 + idx * 3}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
 
          {/* PHASE 3 */}
          <div className="mt-5 relative z-20">
            <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-[#0A2452] via-[#0F2D5C] to-[#163E76] border border-[rgba(255,193,7,0.15)] shadow-[0_20px_50px_rgba(15,45,92,0.22)]">
              {/* glow */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(255,193,7,0.15),transparent_70%)]" />
 
              <div className="relative px-5 py-5 sm:px-6 sm:py-6">
                {/* HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
                  <div>
                    <div className="text-[8px] uppercase tracking-[0.22em] font-bold text-[#FFC107] mb-1.5">
                      FASE 3 · 12 MESES DESDE EL LANZAMIENTO
                    </div>
                    <h3 className="text-white font-bold text-[1.15rem] sm:text-[1.3rem] lg:text-[1.4rem] leading-tight">
                      Acompañamiento en el Primer Año
                    </h3>
                  </div>
 
                  <div className="inline-flex self-start px-3 py-1.5 rounded-full border border-[rgba(255,193,7,0.28)] bg-[rgba(255,193,7,0.06)] text-[#FFD54F] text-[7.5px] uppercase tracking-[0.16em] font-bold whitespace-nowrap">
                    La fase que nos diferencia
                  </div>
                </div>
 
                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm px-4 py-3.5">
                    <div className="text-[7.5px] uppercase tracking-[0.18em] text-[#94A3B8] font-semibold mb-1.5">
                      Meses 1–3 y 4–6:
                    </div>
                    <h4 className="text-white font-bold text-[0.82rem] sm:text-[0.88rem] mb-1.5">
                      Sesión mensual
                    </h4>
                    <p className="text-[#D6E0F0] text-[0.71rem] sm:text-[0.75rem] leading-relaxed">
                      Seguimiento para revisar resultados, detectar problemas
                      tempranos y ajustar la operación.
                    </p>
                  </div>
 
                  <div className="rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm px-4 py-3.5">
                    <div className="text-[7.5px] uppercase tracking-[0.18em] text-[#94A3B8] font-semibold mb-1.5">
                      Meses 7–12 desde lanzamiento
                    </div>
                    <h4 className="text-white font-bold text-[0.82rem] sm:text-[0.88rem] mb-1.5">
                      Sesión bimestral
                    </h4>
                    <p className="text-[#D6E0F0] text-[0.71rem] sm:text-[0.75rem] leading-relaxed">
                      Enfocadas en consolidación, eficiencia operativa y
                      proyección al segundo año.
                    </p>
                  </div>
                </div>
 
                {/* CHANNEL */}
                <div className="mt-3 rounded-[10px] border border-[rgba(255,193,7,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-3 flex flex-col sm:flex-row items-start gap-2">
                  <div className="text-[0.85rem] mt-0.5">📲</div>
                  <p className="text-[#DCE6F5] leading-relaxed text-[0.69rem] sm:text-[0.73rem]">
                    <strong className="text-[#FFD54F]">
                      Canal de consulta directa todo el año
                    </strong>{" "}
                    — El cliente y el ejecutor tienen un punto de contacto
                    directo con su asesor para dudas urgentes entre sesiones.
                    Respuesta garantizada en 48 horas hábiles. Más{" "}
                    <strong className="text-[#FFD54F]">reporte trimestral</strong>{" "}
                    de situación para el colombiano en el exterior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}