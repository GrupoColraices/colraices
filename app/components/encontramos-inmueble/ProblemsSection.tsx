const problems = [
  {
    icon: "👁️",
    title: "No puedes ver lo que estás comprando",
    desc: "Desde el exterior es difícil evaluar un inmueble, su estado real y el entorno sin poder visitarlo personalmente.",
  },
  {
    icon: "🤝",
    title: "No sabes en quién confiar",
    desc: "Muchos intermediarios tienen interés en vender, no necesariamente en ayudarte a comprar bien.",
  },
  {
    icon: "🏘️",
    title: "No conoces el mercado local",
    desc: "Precios, zonas con potencial y riesgos del mercado cambian constantemente y es difícil entenderlos desde afuera.",
  },
  {
    icon: "⏱️",
    title: "El proceso consume demasiado tiempo",
    desc: "Buscar opciones, hablar con agentes, coordinar visitas y comparar inmuebles puede tomar semanas sin garantías de encontrar algo.",
  },
  {
    icon: "⚖️",
    title: "Existen riesgos legales que no se ven",
    desc: "Un inmueble puede tener deudas, gravámenes o problemas de titularidad que no son evidentes para quien está fuera del país.",
  },
  {
    icon: "🎯",
    title: "No sabes qué tipo de inmueble te conviene",
    desc: "Entre usado, nuevo o sobre planos, elegir la mejor opción depende de tus objetivos y no siempre es fácil decidir desde la distancia.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="w-full overflow-hidden border-t-[6px] border-[#0F2D5C] bg-[#FDF6EE] font-['Montserrat',system-ui,sans-serif]">
      <div className="mx-auto w-full max-w-[1152px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-[48px] lg:py-[100px]">
        {/* Encabezado */}
        <div className="mx-auto w-full max-w-[1056px] text-center">
          <div className="mb-[18px] flex items-center justify-center gap-[10px] text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9900C] sm:text-[11px]">
            <span className="h-px w-[20px] shrink-0 bg-[#C9900C]" />
            <span>Por qué existe este producto</span>
          </div>

          <h2 className="mx-auto max-w-[1056px] text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0F2D5C] sm:text-[38px] md:text-[44px] lg:text-[46px]">
            Comprar desde lejos{" "}
            <em className="font-bold italic text-[#C9900C]">
              tiene sus obstáculos
            </em>
          </h2>

          <p className="mx-auto mt-[22px] max-w-[800px] text-[15px] font-normal leading-[1.75] text-[#475569] sm:text-[16px] md:text-[18px]">
            Cuando vives fuera de Colombia y quieres invertir en propiedad raíz,
            los problemas son siempre los mismos. Llave Inmobiliaria los
            resuelve todos.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-[52px] grid w-full max-w-[1056px] grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="group relative flex min-h-[220px] w-full flex-col overflow-hidden rounded-[20px] border-[0.8px] border-[#0F2D5C]/10 bg-white px-[28px] py-[28px] shadow-[0_2px_10px_rgba(15,45,92,0.04)] transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[8px] hover:border-[#0F2D5C]/15 hover:shadow-[0_18px_36px_rgba(15,45,92,0.14),0_8px_22px_rgba(240,180,41,0.14)] sm:min-h-[236.9px] lg:min-h-[236.9px]"
            >
              {/* Línea inferior premium */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transform-gpu bg-gradient-to-r from-[#0F2D5C] via-[#0F2D5C] to-[#F0B429] transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

              {/* Ícono */}
              <div className="mb-[21px] flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[#0F2D5C] text-[20px] shadow-[0_8px_18px_rgba(15,45,92,0.22)] transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:shadow-[0_12px_24px_rgba(15,45,92,0.28)]">
                {problem.icon}
              </div>

              {/* Título */}
              <h3 className="max-w-[290px] text-[17px] font-bold leading-[1.42] tracking-[-0.01em] text-[#0F2D5C]">
                {problem.title}
              </h3>

              {/* Texto */}
              <p className="mt-[11px] text-[15px] font-normal leading-[1.65] text-[#475569]">
                {problem.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}