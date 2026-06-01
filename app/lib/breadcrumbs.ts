export interface BreadcrumbNode {
  label: string;
  parent?: string;
}

export interface BreadcrumbItem {
  href: string;
  label: string;
}

export const BREADCRUMB_MAP: Record<string, BreadcrumbNode> = {
  "/": { label: "Inicio" },

  "/finanzas-y-credito": { label: "Finanzas", parent: "/" },
  "/brujula-financiera": {
    label: "Brújula Financiera",
    parent: "/finanzas-y-credito",
  },
  "/brujula-crediticia": {
    label: "Brújula Crediticia",
    parent: "/finanzas-y-credito",
  },
  "/buena-data": { label: "Buena Data", parent: "/finanzas-y-credito" },
  "/monetizacion": { label: "Monetización", parent: "/finanzas-y-credito" },
  "/credito-para-colombianos-en-el-exterior": {
    label: "Crédito",
    parent: "/finanzas-y-credito",
  },

  "/inversion-inmobiliaria": { label: "Inmuebles", parent: "/" },
  "/llave-inmobiliaria": {
    label: "Llave Inmobiliaria",
    parent: "/inversion-inmobiliaria",
  },
  "/brujula-inmobiliaria": {
    label: "Brújula Inmobiliaria",
    parent: "/inversion-inmobiliaria",
  },

  "/legal-y-migratorio": { label: "Legal y Migración", parent: "/" },
  "/asesoria-migratoria": {
    label: "Asesoría Migratoria",
    parent: "/legal-y-migratorio",
  },
  "/representacion-legal-en-colombia": {
    label: "Representación Legal",
    parent: "/legal-y-migratorio",
  },
  "/servicios-fiscales": {
    label: "Servicios Fiscales",
    parent: "/legal-y-migratorio",
  },
  "/pensiones": { label: "Pensiones", parent: "/legal-y-migratorio" },
  "/emprender-en-colombia": {
    label: "Asesoría de Emprendimiento",
    parent: "/legal-y-migratorio",
  },

  "/blog": { label: "Blog", parent: "/" },
  "/nosotros": { label: "Nosotros", parent: "/" },
  "/tour-de-la-vivienda": { label: "Tour de la Vivienda", parent: "/" },
};

function normalizePathname(pathname: string): string {
  if (!pathname) {
    return "/";
  }

  if (pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function formatFallbackLabel(value: string): string {
  const text = decodeURIComponent(value).replace(/-/g, " ").trim();

  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function resolveMappedTrail(pathname: string): BreadcrumbItem[] | null {
  const trail: BreadcrumbItem[] = [];
  const visited = new Set<string>();
  let current: string | undefined = pathname;

  while (current) {
    if (visited.has(current)) {
      break;
    }

    visited.add(current);

    const node: BreadcrumbNode | undefined = BREADCRUMB_MAP[current];

    if (!node) {
      return null;
    }

    trail.push({ href: current, label: node.label });
    current = node.parent;
  }

  return trail.reverse();
}

function resolveFallbackTrail(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return [{ href: "/", label: "Inicio" }];
  }

  const currentPath = `/${segments.join("/")}`;

  return [
    { href: "/", label: "Inicio" },
    {
      href: currentPath,
      label: formatFallbackLabel(segments[segments.length - 1]),
    },
  ];
}

export function resolveBreadcrumbs(pathname: string, customLabel?: string): BreadcrumbItem[] {
  const normalizedPathname = normalizePathname(pathname);

  const isBlogDetail = normalizedPathname.startsWith("/blog/");
  if (isBlogDetail) {
    const slug = normalizedPathname.split("/").filter(Boolean)[1] ?? "";
    return [
      { href: "/", label: "Inicio" },
      { href: "/blog", label: BREADCRUMB_MAP["/blog"]?.label ?? "Blog" },
      {
        href: normalizedPathname,
        label: customLabel?.trim() || formatFallbackLabel(slug),
      },
    ];
  }

  const mappedTrail = resolveMappedTrail(normalizedPathname);
  if (mappedTrail) {
    return mappedTrail;
  }

  return resolveFallbackTrail(normalizedPathname);
}
