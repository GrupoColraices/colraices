"use client";

import Image from "next/image";
import Link from "next/link";
import PrivacyPolicy from "./PrivacyPolicy";
import {
  OFFICIAL_WHATSAPP_URL,
  TOUR_VIVIENDA_URL,
  officialPaths,
} from "@/app/lib/officialUrls";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden bg-[#091D3E] text-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-0 pt-10 sm:px-8 sm:pt-12 lg:px-12">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[396px_188px_188px_130px] lg:justify-between lg:gap-0">
          <div className="flex flex-col">
            <Link
              href="/"
              className="relative -ml-[15px] block h-[40px] w-[230px] max-w-full sm:h-[46px] sm:w-[260px] lg:h-[48px] lg:w-[280px]"
            >
              <Image
                src="/logo-foote.png"
                alt="Colraices Logo"
                fill
                sizes="(max-width: 640px) 230px, (max-width: 1024px) 260px, 280px"
                className="object-contain object-left"
                priority
              />
            </Link>

            <div className="mt-2 max-w-[396px] text-[15px] leading-[22px] text-white/40 sm:text-[17px] sm:leading-[27px] lg:mt-1 lg:text-[13.12px] lg:leading-[21px] lg:tracking-[0px]">
              <p>El ecosistema de soluciones para colombianos en el exterior.</p>

              <p className="mt-5">
                <Link
                  href="tel:+19293228886"
                  className="transition-colors hover:text-white"
                >
                  Línea Comercial: (+1) 929 322 8886
                </Link>
              </p>

              <p>
                <Link
                  href="tel:+576019176737"
                  className="transition-colors hover:text-white"
                >
                  Línea Casa Matriz: (+57) 601 917 6737
                </Link>
              </p>

              <p className="mt-5">
                <Link
                  href="mailto:info@colraices.co"
                  className="transition-colors hover:text-white"
                >
                  info@colraices.co
                </Link>
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="https://www.facebook.com/colraices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80 lg:h-[30px] lg:w-[30px]"
              >
                <FaFacebookF size={12} />
              </Link>

              <Link
                href="https://www.instagram.com/colraices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80 lg:h-[30px] lg:w-[30px]"
              >
                <FaInstagram size={12} />
              </Link>

              <Link
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80 lg:h-[30px] lg:w-[30px]"
              >
                <FaWhatsapp size={12} />
              </Link>

              <Link
                href="https://www.youtube.com/@colraices_canal_oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80 lg:h-[30px] lg:w-[30px]"
              >
                <FaYoutube size={12} />
              </Link>

              <Link
                href="https://www.linkedin.com/company/colraices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80 lg:h-[30px] lg:w-[30px]"
              >
                <FaLinkedinIn size={12} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[17px] font-bold uppercase tracking-[1.38px] text-white sm:text-[19px] lg:text-[11.52px]">
              Servicios
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[16px] leading-[24px] text-white/55 sm:text-[17px] sm:leading-[27px] lg:mt-[18px] lg:gap-[14px] lg:text-[13.12px] lg:leading-[19.7px] lg:text-white/45">
              <Link
                href={officialPaths.finanzasHub}
                className="transition-colors hover:text-white"
              >
                Finanzas
              </Link>

              <Link
                href={officialPaths.inmuebleHub}
                className="transition-colors hover:text-white"
              >
                Inmuebles
              </Link>

              <Link
                href={officialPaths.legalHub}
                className="transition-colors hover:text-white"
              >
                Legal y Migración
              </Link>

              <Link
                href={TOUR_VIVIENDA_URL}
                className="transition-colors hover:text-white"
              >
                Tour de la Vivienda
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[17px] font-bold uppercase tracking-[1.38px] text-white sm:text-[19px] lg:text-[11.52px]">
              Empresa
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[16px] leading-[24px] text-white/55 sm:text-[17px] sm:leading-[27px] lg:mt-[18px] lg:gap-[14px] lg:text-[13.12px] lg:leading-[19.7px] lg:text-white/45">
              <Link
                href={officialPaths.nosotros}
                className="transition-colors hover:text-white"
              >
                Quiénes somos
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[17px] font-bold uppercase tracking-[1.38px] text-white sm:text-[19px] lg:text-[11.52px]">
              Recursos
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[16px] leading-[24px] text-white/55 sm:text-[17px] sm:leading-[27px] lg:mt-[18px] lg:gap-[14px] lg:text-[13.12px] lg:leading-[19.7px] lg:text-white/45">
              <Link
                href={officialPaths.blog}
                className="transition-colors hover:text-white"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full border-t border-white/10 sm:mt-12 lg:mt-6 lg:border-white/[0.07]">
          <div className="flex flex-col items-start justify-between gap-4 py-5 sm:gap-6 md:flex-row md:items-center">
            <p className="text-sm leading-6 text-white/35 lg:text-[12.48px] lg:leading-[18.7px] lg:text-white/[0.28]">
              © 2026 Colraices. Colombia y España. Todos los derechos
              reservados.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 text-sm leading-6 text-white/35 sm:gap-5 md:ml-auto md:justify-end md:text-right lg:text-[12.48px] lg:leading-[18.7px] lg:text-white/[0.28]">
              <PrivacyPolicy className="transition-colors hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
