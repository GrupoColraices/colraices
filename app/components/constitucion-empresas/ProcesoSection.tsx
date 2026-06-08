type Fase = {
  fase: string;
  titulo: string;
  descripcion: string;
  items: string[];
};

const fases: Fase[] = [
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

export default function ProcesoSection() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f4ee] py-10 sm:py-12">
      <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <div className="h-[1px] w-4 bg-[#FFC107]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#0F2D5C]">
              El proceso
            </span>
          </div>

          <h2 className="text-[1.55rem] font-bold leading-tight tracking-[-0.02em] text-[#0F2D5C] sm:text-[1.75rem] lg:text-[1.9rem]">
            Tres fases.{" "}
            <em className="font-semibold not-italic text-[#FFC107]">
              16 meses.
            </em>
          </h2>

          <p className="mx-auto mt-2.5 max-w-none text-[0.75rem] leading-relaxed text-[#64748B] sm:whitespace-nowrap sm:text-[0.8rem]">
            El servicio no termina en el lanzamiento. Está presente desde la
            validación de la idea hasta el cierre del primer año de operación.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-8">
          {/* CENTER LINE */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#FFC107] via-[#FFD54F] to-transparent lg:block" />

          {/* TOP CARDS */}
          <div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {fases.map((fase, faseIndex) => (
              <div
                key={fase.fase}
                className="rounded-[12px] border border-[rgba(15,45,92,0.07)] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,45,92,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,45,92,0.12)]"
              >
                <div className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#F0B429]">
                  {fase.fase}
                </div>

                <h3 className="mb-1.5 text-[0.95rem] font-bold leading-tight text-[#0F2D5C] sm:text-[1rem]">
                  {fase.titulo}
                </h3>

                <p className="mb-3.5 text-[0.73rem] leading-relaxed text-[#64748B] sm:text-[0.75rem]">
                  {fase.descripcion}
                </p>

                <div className="space-y-2.5">
                  {fase.items.map((item, itemIndex) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-[0.71rem] leading-relaxed text-[#475569] sm:text-[0.73rem]"
                    >
                      <div className="mt-0.5 flex h-[17px] w-[17px] flex-shrink-0 items-center justify-center rounded-full bg-[#FFC107] text-[9px] font-bold text-[#0F2D5C]">
                        {itemIndex + 1 + faseIndex * 3}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PHASE 3 */}
          <div className="relative z-20 mt-5">
            <div className="relative overflow-hidden rounded-[16px] border border-[rgba(255,193,7,0.15)] bg-gradient-to-br from-[#0A2452] via-[#0F2D5C] to-[#163E76] shadow-[0_20px_50px_rgba(15,45,92,0.22)]">
              {/* GLOW */}
              <div className="absolute right-0 top-0 h-[180px] w-[180px] bg-[radial-gradient(circle,rgba(255,193,7,0.15),transparent_70%)]" />

              <div className="relative px-5 py-5 sm:px-6 sm:py-6">
                {/* HEADER */}
                <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-[#FFC107]">
                      FASE 3 · 12 MESES DESDE EL LANZAMIENTO
                    </div>
                    <h3 className="text-[1.15rem] font-bold leading-tight text-white sm:text-[1.3rem] lg:text-[1.4rem]">
                      Acompañamiento en el Primer Año
                    </h3>
                  </div>

                  <div className="inline-flex self-start whitespace-nowrap rounded-full border border-[rgba(255,193,7,0.28)] bg-[rgba(255,193,7,0.06)] px-3 py-1.5 text-[7.5px] font-bold uppercase tracking-[0.16em] text-[#FFD54F]">
                    La fase que nos diferencia
                  </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-4 py-3.5 backdrop-blur-sm">
                    <div className="mb-1.5 text-[7.5px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                      Meses 1–3 y 4–6:
                    </div>
                    <h4 className="mb-1.5 text-[0.82rem] font-bold text-white sm:text-[0.88rem]">
                      Sesión mensual
                    </h4>
                    <p className="text-[0.71rem] leading-relaxed text-[#D6E0F0] sm:text-[0.75rem]">
                      Seguimiento para revisar resultados, detectar problemas
                      tempranos y ajustar la operación.
                    </p>
                  </div>

                  <div className="rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-4 py-3.5 backdrop-blur-sm">
                    <div className="mb-1.5 text-[7.5px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                      Meses 7–12 desde lanzamiento
                    </div>
                    <h4 className="mb-1.5 text-[0.82rem] font-bold text-white sm:text-[0.88rem]">
                      Sesión bimestral
                    </h4>
                    <p className="text-[0.71rem] leading-relaxed text-[#D6E0F0] sm:text-[0.75rem]">
                      Enfocadas en consolidación, eficiencia operativa y
                      proyección al segundo año.
                    </p>
                  </div>
                </div>

                {/* CHANNEL */}
                <div className="mt-3 flex flex-col items-start gap-2 rounded-[10px] border border-[rgba(255,193,7,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-3 sm:flex-row">
                  <div className="mt-0.5 text-[0.85rem]">📲</div>
                  <p className="text-[0.69rem] leading-relaxed text-[#DCE6F5] sm:text-[0.73rem]">
                    <strong className="text-[#FFD54F]">
                      Canal de consulta directa todo el año
                    </strong>{" "}
                    — El cliente y el ejecutor tienen un punto de contacto
                    directo con su asesor para dudas urgentes entre sesiones.
                    Respuesta garantizada en 48 horas hábiles. Más{" "}
                    <strong className="text-[#FFD54F]">
                      reporte trimestral
                    </strong>{" "}
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