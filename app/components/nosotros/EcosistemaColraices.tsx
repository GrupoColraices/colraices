import type { ComponentType, SVGProps } from "react";

type ProductLink = {
  label: string;
  href: string;
};

type EcosystemCard = {
  title: string;
  description: string;
  products: ProductLink[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function MonitorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

const ecosystemCards: EcosystemCard[] = [
  {
    title: "Financiera",
    description:
      "Te ayudamos a acceder al financiamiento para tu inversión en Colombia. Desde entender tu situación y resolver reportes hasta mejorar tu perfil y abrirte el camino para el crédito.",
    icon: MonitorIcon,
    products: [
      { label: "Buena Data", href: "/buena-data" },
      { label: "Brújula Financiera", href: "/brujula-financiera" },
      { label: "Brújula Crediticia", href: "/brujula-crediticia" },
      { label: "Monetización", href: "/monetizacion" },
      { label: "Crédito", href: "/credito" },
    ],
  },
  {
    title: "Inmobiliaria",
    description:
      "Te ayudamos a encontrar, evaluar y adquirir el inmueble correcto en Colombia, con orientación durante todo el proceso.",
    icon: HomeIcon,
    products: [
      { label: "Brújula Inmobiliaria", href: "/brujula-inmobiliaria" },
      { label: "Llave Inmobiliaria", href: "/encontramos-tu-inmueble" },
    ],
  },
  {
    title: "Legal y Migratoria",
    description:
      "Te orientamos en lo que necesitas resolver en Colombia, desde trámites y decisiones migratorias hasta representación, emprendimiento o pensión.",
    icon: DocumentIcon,
    products: [
      { label: "Asesoría Migratoria", href: "/asesoria-migratoria" },
      { label: "Emprendimiento", href: "/constitucion-empresas" },
      { label: "Pensiones", href: "/pensiones" },
      { label: "Representación Legal", href: "/representacion-legal" },
      { label: "Servicios Fiscales", href: "/servicios-fiscales" },
    ],
  },
  {
    title: "Tour de la Vivienda",
    description:
      "Llevamos constructoras y proyectos inmobiliarios en Colombia hasta las ciudades donde viven colombianos en el exterior que quieren invertir y construir patrimonio en su país.",
    icon: DownloadIcon,
    products: [{ label: "Tour de la Vivienda", href: "#" }],
  },
];

export default function EcosistemaColraices() {
  return (
    <section id="que-es" className="relative overflow-hidden bg-[#EDEDED] py-[112px]">
      <div className="mx-auto w-full max-w-[1152px] px-12">
        <div className="mx-auto mb-[56px] max-w-[800px] text-center">
          <span className="inline-flex h-[29px] w-[167px] items-center justify-center rounded-full bg-[#FFC107]/[0.12] text-[11.52px] font-bold uppercase leading-[19.6px] tracking-[1.38px] text-[#FFC107]">
            Qué es Colraices
          </span>

          <h2 className="mt-8 max-w-full whitespace-normal text-center text-[clamp(32px,4vw,41.6px)] font-extrabold leading-[1.2] tracking-normal text-[#2A3F77] xl:whitespace-nowrap">
            Todo un ecosistema pensado para ti
          </h2>

          <p className="mx-auto mt-7 max-w-[654px] text-center text-[16.8px] font-normal leading-[29.4px] text-[#6B7280]">
            Colraices conecta las áreas que el colombiano en el exterior necesita para construir en Colombia,
            sin tener que resolver cada parte por su cuenta.
          </p>
        </div>

        <div className="mx-auto grid max-w-[964px] grid-cols-1 gap-6 md:grid-cols-2">
          {ecosystemCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="relative flex min-h-[364px] flex-col overflow-hidden rounded-[14px] bg-white px-6 py-8 shadow-[0_4px_24px_rgba(42,63,119,0.10)] transition duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[14px] before:border-[2px] before:border-[#FFC107] before:opacity-0 before:[clip-path:inset(0_0_calc(100%-10px)_0)] before:[-webkit-mask:linear-gradient(90deg,transparent_0_1px,black_6px_calc(100%-6px),transparent_calc(100%-1px)_100%)] before:[mask:linear-gradient(90deg,transparent_0_1px,black_6px_calc(100%-6px),transparent_calc(100%-1px)_100%)] before:transition-opacity before:duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(42,63,119,0.16)] hover:before:opacity-100"
              >
                <div className="mb-[24px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#192440] text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-[17.6px] font-bold leading-[26.4px] text-[#2A3F77]">{card.title}</h3>

                <p className="mt-[10px] mb-4 text-[14.4px] font-normal leading-[24.5px] text-[#6B7280]">{card.description}</p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {card.products.map((product) => (
                    <a
                      key={product.label}
                      href={product.href}
                      className="inline-flex min-h-[22px] items-center rounded-full border border-[rgba(42,63,119,0.12)] bg-[#F5F7FB] px-3 py-[3px] text-[12.8px] font-semibold leading-[21.8px] text-[#2A3F77] no-underline transition hover:border-[#2A3F77]/30 hover:bg-white"
                    >
                      {product.label}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
