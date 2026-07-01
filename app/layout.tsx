import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { Montserrat } from "next/font/google";
import FloatingContactButton from "./components/layout/FloatingContactButton";
import { SITE_URL, officialUrls } from "./lib/officialUrls";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const GA_MEASUREMENT_ID = "G-PLK1HSPN55";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Colraices | Crédito, inversión y patrimonio para colombianos en el exterior",
    template: "%s | Colraices",
  },
  description:
    "Ayudamos a colombianos en el exterior a acceder a crédito hipotecario, invertir en Colombia, comprar vivienda y resolver procesos financieros, legales y fiscales desde cualquier país.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: officialUrls.home,
  },
  openGraph: {
    url: officialUrls.home,
    siteName: "Colraices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
        <FloatingContactButton />

        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
