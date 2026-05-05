"use client";

import Image from "next/image";
import Link from "next/link";
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
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-0 pt-10 sm:px-6 sm:pt-12 md:px-8 lg:px-12 lg:pt-16">
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[376px_188px_188px_188px] lg:justify-between">
          <div className="flex flex-col">
            <Link
              href="/"
              className="relative -ml-[15px] block h-[34px] w-[190px] max-w-full sm:h-[40px] sm:w-[240px] md:w-[271px]"
            >
              <Image
                src="/logo-foote.png"
                alt="Colraices Logo"
                fill
                sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 271px"
                className="object-contain object-left"
                priority
              />
            </Link>

            <div className="mt-3 max-w-[300px] text-white/40 text-[15px] leading-[22px] sm:text-[17px] sm:leading-[27px] lg:mt-[12px] lg:max-w-[240px] lg:text-[13.12px] lg:leading-[21px] lg:tracking-[0px]">
              <p>El ecosistema de soluciones para colombianos en el exterior.</p>
              <p className="mt-2">
                <Link href="tel:+576013288939" className="transition-colors hover:text-white">
                  Teléfono: (57) 601 328 8939
                </Link>
              </p>
              <p className="mt-1">
                <Link href="mailto:info@colraices.co" className="transition-colors hover:text-white">
                  info@colraices.co
                </Link>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"><FaFacebookF size={14} /></Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"><FaInstagram size={14} /></Link>
              <Link href="https://wa.me/576013288939" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"><FaWhatsapp size={14} /></Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"><FaYoutube size={14} /></Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"><FaLinkedinIn size={14} /></Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[17px] font-bold uppercase tracking-[1.38px] text-white sm:text-[19px] lg:text-[11.52px]">Servicios</h3>
            <div className="mt-4 flex flex-col gap-3 text-[16px] leading-[24px] text-white/55 sm:text-[17px] sm:leading-[27px] lg:mt-[18px] lg:gap-[14px] lg:text-[13.12px] lg:leading-[19.7px] lg:text-white/45">
              <Link href="/finanzas" className="transition-colors hover:text-white">Finanzas</Link>
              <Link href="/inmuebles" className="transition-colors hover:text-white">Inmuebles</Link>
              <Link href="/legal-migracion" className="transition-colors hover:text-white">Legal y Migración</Link>
              <Link href="/tour-vivienda" className="transition-colors hover:text-white">Tour de la Vivienda</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[17px] font-bold uppercase tracking-[1.38px] text-white sm:text-[19px] lg:text-[11.52px]">Empresa</h3>
            <div className="mt-4 flex flex-col gap-3 text-[16px] leading-[24px] text-white/55 sm:text-[17px] sm:leading-[27px] lg:mt-[18px] lg:gap-[14px] lg:text-[13.12px] lg:leading-[19.7px] lg:text-white/45">
              <Link href="/quienes-somos" className="transition-colors hover:text-white">Quiénes somos</Link>
              <Link href="/trabaja-con-nosotros" className="transition-colors hover:text-white">Trabaja con nosotros</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[17px] font-bold uppercase tracking-[1.38px] text-white sm:text-[19px] lg:text-[11.52px]">Recursos</h3>
            <div className="mt-4 flex flex-col gap-3 text-[16px] leading-[24px] text-white/55 sm:text-[17px] sm:leading-[27px] lg:mt-[18px] lg:gap-[14px] lg:text-[13.12px] lg:leading-[19.7px] lg:text-white/45">
              <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full border-t border-white/10 sm:mt-12 lg:mt-[56px] lg:border-white/7">
          <div className="flex flex-col items-start justify-between gap-4 py-5 sm:gap-6 md:flex-row md:items-center">
            <p className="text-sm leading-6 text-white/35 lg:text-[12.48px] lg:leading-[18.7px] lg:text-white/28">
              © 2026 Colraices. Colombia y España. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm leading-6 text-white/35 sm:gap-5 lg:text-[12.48px] lg:leading-[18.7px] lg:text-white/28">
              <Link href="/politica-de-privacidad" className="transition-colors hover:text-white">Política de privacidad</Link>
              <Link href="/terminos-de-uso" className="transition-colors hover:text-white">Términos de uso</Link>
              <Link href="/cookies" className="transition-colors hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}