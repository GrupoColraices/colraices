import type { NextConfig } from "next";

const tourViviendaUrl =
  process.env.NEXT_PUBLIC_TOUR_VIVIENDA_URL ||
  "https://www.colraices.com/tour-de-la-vivienda";

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
    ],
  },
  async redirects() {
    return [
      {
        source: "/tour-vivienda",
        destination: tourViviendaUrl,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
