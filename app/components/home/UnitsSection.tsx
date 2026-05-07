import Link from "next/link";

type ServiceTag = {
  label: string;
  href: string;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  tags: ServiceTag[];
  cta: string;
  href: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: "💰",
    title: "Financiación en Colombia",
    description:
      "Accede a crédito para tu vivienda en Colombia o libre inversión. Si tienes reportes o dudas, te ayudamos a solucionarlo y a prepararte paso a paso.",
    tags: [
      { label: "Buena Data", href: "finanzas/buena-data" },
      { label: "Brújula Financiera", href: "finanzas/brujula-financiera" },
      { label: "Brújula Crediticia", href: "finanzas/brujula-crediticia" },
      { label: "Monetización", href: "finanzas/monetizacion" },
      { label: "Crédito", href: "finanzas/credito-hipotecario" },
    ],
    cta: "Ver servicios financieros",
    href: "/finanzas",
  },
  {
    icon: "🏠",
    title: "Tu propiedad en Colombia",
    description:
      "Te ayudamos a encontrar tu propiedad en Colombia o analizamos la que quieres comprar. Para que tomes la decisión con respaldo.",
    tags: [
      { label: "Brújula Inmobiliaria", href: "inmuebles/brujula-inmobiliaria" },
      { label: "Llave inmobiliaria", href: "inmuebles/encontramos-inmuebles" },
    ],
    cta: "Ver servicios inmobiliarios",
    href: "/inmuebles",
  },
  {
    icon: "⚖️",
    title: "Servicios legales y migratorios",
    description:
      "Desde migrar ordenadamente hasta emprender en Colombia. Asesoría legal con gente que habla tu idioma.",
    tags: [
      { label: "Asesoría migratoria", href: "legal-migracion/asesoria-migratoria" },
      { label: "Emprendimiento", href: "legal-migracion/constitucion-empresas" },
      { label: "Pensiones", href: "legal-migracion/pensiones" },
      { label: "Representación legal", href: "legal-migracion/representacion-legal" },
      { label: "Servicios fiscales", href: "legal-migracion/servicios-fiscales" },
    ],
    cta: "Ver servicios legales",
    href: "/legal-migracion",
  },
];

export default function UnitsSection() {
  return (
    <section
      id="units-section"
      className="relative z-10 w-full scroll-mt-24 bg-white py-[60px] md:py-[90px]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto mb-10 max-w-[900px] text-center md:mb-14">
          <p className="mb-2 text-[15px] font-bold italic text-[#FFC107] md:text-[18px]">
            Nuestros servicios
          </p>

          <h2 className="mb-3 text-[22px] font-semibold leading-tight text-[#0F2D5C] sm:text-[26px] md:mb-4 md:text-[32px] lg:text-[38px]">
            Todo lo que necesitas, en un solo ecosistema.
          </h2>

          <p className="mx-auto max-w-[690px] text-[14px] leading-[22px] text-[#475569] md:text-[15px]">
            No tienes que buscar en cinco lugares distintos ni explicarle tu
            historia a desconocidos cada vez. Aquí está todo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.title}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-tl-[16px] rounded-br-[16px] border border-[#E2E8F0] bg-white p-5 shadow-none transition-all duration-500 hover:-translate-y-[6px] hover:scale-[1.01] hover:border-[#0F2D5C]/20 hover:shadow-[0_25px_60px_rgba(15,45,92,0.16)] md:p-6"
            >
              <div className="absolute left-0 top-0 h-[3px] w-full overflow-hidden">
                <div className="h-full w-full -translate-x-full bg-[#FFC107] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              </div>

              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F5F9] text-[20px] transition-all duration-500 group-hover:-translate-y-[2px] group-hover:bg-[#FFF6D6] group-hover:shadow-[0_10px_25px_rgba(255,193,7,0.35)] md:h-11 md:w-11">
                  {card.icon}
                </div>

                <h3 className="mb-2 text-[16px] font-semibold text-[#0F2D5C] md:text-[18px]">
                  {card.title}
                </h3>

                <p className="mb-4 text-[13px] leading-[20px] text-[#475569] md:text-[14px]">
                  {card.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <Link
                      key={tag.label}
                      href={tag.href}
                      className="inline-flex rounded-full border border-[#1A4F9E]/[0.12] bg-[#1A4F9E]/[0.06] px-3 py-[5px] text-[11px] text-[#1A4F9E] transition-all duration-300 hover:border-[#1A4F9E] hover:bg-[#1A4F9E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4F9E] focus-visible:ring-offset-2 md:text-[12px]"
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={card.href}
                className="group/cta inline-flex w-fit items-center gap-1 text-[13px] font-medium text-[#1A4F9E] transition-colors duration-300 hover:text-[#0F2D5C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A4F9E] focus-visible:ring-offset-2 md:text-[14px]"
              >
                {card.cta}
                <span className="transition-transform duration-300 group-hover/cta:translate-x-[6px]">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}