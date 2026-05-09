type TimelineItem = {
  title: string;
  description: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: "Todo empieza con una inquietud",
    description:
      "Querer invertir en Colombia, pero no saber por dónde empezar ni con quién hacerlo.",
  },
  {
    title: "Porque Colombia sigue siendo parte del plan",
    description:
      "No importa en qué país estés, la idea de construir en Colombia y pensar en el futuro sigue presente.",
  },
  {
    title: "Más de 20 años trabajando con colombianos en el exterior",
    description:
      "Construyendo caminos para invertir, crecer y transformar esfuerzo en patrimonio en Colombia.",
  },
  {
    title: "Por eso no podía ser una sola solución",
    description:
      "Hoy existe un ecosistema que entiende cada situación y responde a lo que cada persona necesita.",
  },
];

export default function HistoriaSection() {
  return (
    <section
      id="historia"
      className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-[112px]"
      style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 md:gap-16 lg:grid-cols-[minmax(0,420px)_minmax(0,442px)] lg:justify-center lg:gap-[90px]">
          {/* Visual */}
          <div className="relative order-2 mx-auto w-full max-w-[420px] pb-10 sm:pb-12 lg:order-1 lg:pb-0">
            <div className="flex aspect-[420/525] w-full items-center justify-center rounded-[20px] border border-[#D1D5DB] bg-[#EDEDED] text-center text-[#9CA3AF]">
              <div className="flex flex-col items-center gap-[18px] px-6">
                <svg
                  className="h-10 w-10 sm:h-11 sm:w-11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>

                <span className="text-[14px] font-medium leading-none sm:text-[15px]">
                  Foto de historia — placeholder
                </span>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute bottom-3 right-3 flex h-[86px] w-[148px] flex-col items-center justify-center rounded-[14px] bg-[#2A3F77] text-center shadow-[0_24px_64px_rgba(42,63,119,0.2)] sm:bottom-0 sm:right-[-20px] sm:h-[96px] sm:w-[166px] lg:bottom-[-17px] lg:right-[-42px] lg:h-[101px] lg:w-[175px]">
              <div className="text-[34px] font-black leading-none text-[#FFC107] sm:text-[38.4px] lg:text-[40px]">
                +20
              </div>

              <div className="mt-[10px] text-[12px] font-medium leading-none text-white/70 sm:text-[13px]">
                años de experiencia
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 mx-auto w-full max-w-[442px] text-left lg:order-2">
            <span className="inline-flex min-h-[29px] items-center justify-center rounded-full bg-[#FFC107]/10 px-4 text-[10.5px] font-bold uppercase leading-[19.6px] tracking-[1.38px] text-[#FFC107] sm:text-[11.52px]">
              Cómo empezó todo
            </span>

            <h2 className="mt-5 text-[clamp(34px,8vw,41.6px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-[#2A3F77] sm:leading-[49.9px]">
              Colraices nace de una experiencia compartida:
            </h2>

            <p className="mt-5 text-[15px] font-normal leading-[26.3px] text-[#6B7280]">
              La de colombianos que se fueron, que construyeron su vida en el
              exterior y que en algún momento buscaron cómo seguir construyendo
              en Colombia. De ahí nace una pregunta: ¿Cómo hacerlo sin estar
              allá?
            </p>

            {/* Timeline */}
            <div className="relative mt-10 border-l-[2.4px] border-[#FFC107] pl-6 sm:mt-[45px] sm:pl-[26px]">
              <div className="space-y-[25px]">
                {timelineItems.map((item) => (
                  <div key={item.title} className="relative">
                    <span className="absolute left-[-31.2px] top-[4px] h-3 w-3 rounded-full border-[2.4px] border-white bg-[#FFC107] sm:left-[-33.2px]" />

                    <h4 className="text-[15.2px] font-bold leading-[22.8px] text-[#2A3F77]">
                      {item.title}
                    </h4>

                    <p className="mt-[3.5px] text-[14.08px] font-normal leading-[23.2px] text-[#6B7280]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}