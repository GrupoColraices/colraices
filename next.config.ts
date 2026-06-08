import type { NextConfig } from "next";

const TOUR_VIVIENDA_URL =
  process.env.NEXT_PUBLIC_TOUR_VIVIENDA_URL ||
  "https://colraices.com/casas-apartamentos-colombia-desde-el-exterior";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.colraices.com",
        pathname: "/storage/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/tour-vivienda",
        destination: TOUR_VIVIENDA_URL,
        permanent: true,
      },
      {
        source: "/tour",
        destination: TOUR_VIVIENDA_URL,
        permanent: true,
      },
      {
        source: "/finanzas",
        destination: "/finanzas-y-credito",
        permanent: true,
      },
      {
        source: "/finanzas/brujula-financiera",
        destination: "/brujula-financiera",
        permanent: true,
      },
      {
        source: "/finanzas/brujula-crediticia",
        destination: "/brujula-crediticia",
        permanent: true,
      },
      {
        source: "/finanzas/buena-data",
        destination: "/buena-data",
        permanent: true,
      },
      {
        source: "/finanzas/monetizacion",
        destination: "/monetizacion",
        permanent: true,
      },
      {
        source: "/finanzas/credito-hipotecario",
        destination: "/credito-para-colombianos-en-el-exterior",
        permanent: true,
      },
      {
        source: "/inmuebles",
        destination: "/inversion-inmobiliaria",
        permanent: true,
      },
      {
        source: "/servicios-inmobiliarios",
        destination: "/inversion-inmobiliaria",
        permanent: true,
      },
      {
        source: "/inmuebles/encontramos-inmueble",
        destination: "/llave-inmobiliaria",
        permanent: true,
      },
      {
        source: "/encontramos-tu-inmueble",
        destination: "/llave-inmobiliaria",
        permanent: true,
      },
      {
        source: "/inmuebles/brujula-inmobiliaria",
        destination: "/brujula-inmobiliaria",
        permanent: true,
      },
      {
        source: "/legal-migracion",
        destination: "/legal-y-migratorio",
        permanent: true,
      },
      {
        source: "/legal-migracion/asesoria-migratoria",
        destination: "/asesoria-migratoria",
        permanent: true,
      },
      {
        source: "/legal-migracion/constitucion-empresas",
        destination: "/emprender-en-colombia",
        permanent: true,
      },
      {
        source: "/constitucion-empresas",
        destination: "/emprender-en-colombia",
        permanent: true,
      },
      {
        source: "/legal-migracion/pensiones",
        destination: "/pensiones",
        permanent: true,
      },
      {
        source: "/legal-migracion/representacion-legal",
        destination: "/representacion-legal-en-colombia",
        permanent: true,
      },
      {
        source: "/representacion-legal",
        destination: "/representacion-legal-en-colombia",
        permanent: true,
      },
      {
        source: "/legal-migracion/servicios-fiscales",
        destination: "/servicios-fiscales",
        permanent: true,
      },
      {
        source: "/credito",
        destination: "/credito-para-colombianos-en-el-exterior",
        permanent: true,
      },
      {
        source: "/quienes-somos",
        destination: "/nosotros",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
