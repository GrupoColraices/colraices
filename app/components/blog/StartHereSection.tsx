type StartGuide = {
  number: number;
  category: string;
  title: string;
  time: string;
  emoji: string;
  href: string;
  theme: "credit" | "inmob" | "migra";
};

const guides: StartGuide[] = [
  {
    number: 1,
    category: "Crédito y finanzas",
    title: "¿Quieres saber si eres viable para crédito desde el exterior?",
    time: "7 min de lectura",
    emoji: "💳",
    href: "#",
    theme: "credit",
  },
  {
    number: 2,
    category: "Crédito y finanzas",
    title: "Cómo consultar tu historial crediticio desde el exterior",
    time: "5 min de lectura",
    emoji: "📊",
    href: "#",
    theme: "credit",
  },
  {
    number: 3,
    category: "Inversión inmobiliaria",
    title: "Guía para comprar vivienda en Colombia desde el exterior",
    time: "10 min de lectura",
    emoji: "🏡",
    href: "#",
    theme: "inmob",
  },
  {
    number: 4,
    category: "Migración",
    title: "Qué visa necesitas para vivir o invertir en Colombia",
    time: "8 min de lectura",
    emoji: "✈️",
    href: "#",
    theme: "migra",
  },
];

const themeClasses = {
  credit: {
    image: "bg-[linear-gradient(135deg,#1A2A5E_0%,#2A3F77_100%)]",
    badge: "bg-[#EEF2FF] text-[#2A3F77]",
    icon: "bottom-[10px] right-[10px] -rotate-[10deg]",
  },
  inmob: {
    image: "bg-[linear-gradient(135deg,#1E3A2F_0%,#2D6A4F_100%)]",
    badge: "bg-[#ECFDF5] text-[#065F46]",
    icon: "bottom-[10px] right-[10px] -rotate-[10deg]",
  },
  migra: {
    image: "bg-[linear-gradient(135deg,#1A2A5E_0%,#2A3F77_100%)]",
    badge: "bg-[#EEF2FF] text-[#1D4ED8]",
    icon: "bottom-[10px] right-[10px] -rotate-[10deg]",
  },
};

export default function StartHereSection() {
  return (
    <section id="empieza" className="bg-[#F8F9FB] py-[88px]">
      <div className="mx-auto max-w-[1104px] px-6 xl:px-0">
        <div className="mx-auto mb-[56px] max-w-[546px] text-center">
          <h2 className="font-['Montserrat'] text-[34px] font-extrabold leading-[40.8px] tracking-[-0.5px] text-[#192440]">
            Empieza por aquí
          </h2>

          <p className="mt-[28px] font-['Montserrat'] text-[15px] font-normal leading-[22.5px] text-[#4B5563]">
            Si no sabes por dónde empezar, aquí encontrarás algunos de los temas
            más importantes para entender tu situación y avanzar con más
            claridad.
          </p>
        </div>

        <div className="grid justify-center gap-6 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((guide) => {
            const theme = themeClasses[guide.theme];

            return (
              <article
                key={guide.number}
                className="group flex h-[372px] w-[256px] flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_8px_28px_rgba(42,63,119,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(42,63,119,0.14)]"
              >
                <div
                  className={`relative h-[160px] w-full shrink-0 overflow-hidden ${theme.image}`}
                >
                  <div className="absolute left-[14px] top-[14px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/15 font-['Montserrat'] text-[13px] font-bold leading-none text-white">
                    {guide.number}
                  </div>

                  <span
                    className={`absolute inline-block text-[52px] leading-none opacity-25 transition-all duration-300 group-hover:scale-110 group-hover:opacity-35 ${theme.icon}`}
                  >
                    {guide.emoji}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-[18px] pt-[24px]">
                  <span
                    className={`inline-flex h-[21px] w-fit items-center rounded-full px-[10px] font-['Montserrat'] text-[10px] font-bold uppercase leading-[15px] tracking-[0.7px] ${theme.badge}`}
                  >
                    {guide.category}
                  </span>

                  <h3 className="mt-[14px] w-[217px] font-['Montserrat'] text-[14px] font-bold leading-[19.6px] text-[#1A2340]">
                    {guide.title}
                  </h3>

                  <div className="mt-[12px] flex h-[18px] items-center gap-[6px] font-['Montserrat'] text-[11.5px] font-medium leading-[17.3px] text-[#B0B8C1]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[12px] w-[12px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>

                    {guide.time}
                  </div>

                  <a
                    href={guide.href}
                    className="group/cta mt-auto flex h-[33px] w-full items-end justify-between border-t border-[#EDEDED] font-['Montserrat'] text-[12px] font-semibold leading-[18px] text-[#2A3F77] transition-colors duration-300 hover:text-[#FFC107]"
                  >
                    <span>Leer guía</span>

                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}