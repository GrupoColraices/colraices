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
    <footer className="w-full bg-[#091D3E] text-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col px-12 pt-16 pb-0">
        {/* Top Section */}
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[376px_188px_188px_188px] lg:justify-between">
          {/* Column 1 */}
          <div className="flex flex-col">
            {/* Logo */}
            <Link href="/" className="relative block h-[40px] w-[271px] max-w-full">
              <Image
                src="/logo-foote.png"
                alt="Colraices Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Description */}
            <div className="mt-[12px] max-w-[240px] text-[13.12px] font-normal leading-[21px] tracking-[0px] text-white/40">
              <p>El ecosistema de soluciones para colombianos en el exterior.</p>
              <p className="mt-2">
                <Link
                  href="tel:+576013288939"
                  className="hover:text-white transition-colors"
                >
                  Teléfono: (57) 601 328 8939
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  href="mailto:info@colraices.co"
                  className="hover:text-white transition-colors"
                >
                  info@colraices.co
                </Link>
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-[24px] flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"
              >
                <FaFacebookF size={14} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"
              >
                <FaInstagram size={14} />
              </Link>

              <Link
                href="https://wa.me/576013288939"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"
              >
                <FaWhatsapp size={14} />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"
              >
                <FaYoutube size={14} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[#091D3E] transition-all hover:opacity-80"
              >
                <FaLinkedinIn size={14} />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h3 className="text-[11.52px] font-bold uppercase tracking-[1.38px] text-white">
              Servicios
            </h3>
            <div className="mt-[18px] flex flex-col gap-[14px] text-[13.12px] font-normal leading-[19.7px] text-white/45">
              <Link href="/finanzas" className="hover:text-white transition-colors">
                Finanzas
              </Link>
              <Link href="/inmuebles" className="hover:text-white transition-colors">
                Inmuebles
              </Link>
              <Link
                href="/legal-migracion"
                className="hover:text-white transition-colors"
              >
                Legal y Migración
              </Link>
              <Link
                href="/tour-vivienda"
                className="hover:text-white transition-colors"
              >
                Tour de la Vivienda
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="text-[11.52px] font-bold uppercase tracking-[1.38px] text-white">
              Empresa
            </h3>
            <div className="mt-[18px] flex flex-col gap-[14px] text-[13.12px] font-normal leading-[19.7px] text-white/45">
              <Link href="/quienes-somos" className="hover:text-white transition-colors">
                Quiénes somos
              </Link>
              <Link
                href="/trabaja-con-nosotros"
                className="hover:text-white transition-colors"
              >
                Trabaja con nosotros
              </Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h3 className="text-[11.52px] font-bold uppercase tracking-[1.38px] text-white">
              Recursos
            </h3>
            <div className="mt-[18px] flex flex-col gap-[14px] text-[13.12px] font-normal leading-[19.7px] text-white/45">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-[56px] w-full border-t border-white/7">
          <div className="flex flex-col items-start justify-between gap-6 py-5 md:flex-row md:items-center">
            {/* Copyright */}
            <p className="text-[12.48px] font-normal leading-[18.7px] text-white/28">
              © 2026 Colraices. Colombia y España. Todos los derechos reservados.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-5 text-[12.48px] font-normal leading-[18.7px] text-white/28">
              <Link
                href="/politica-de-privacidad"
                className="hover:text-white transition-colors"
              >
                Política de privacidad
              </Link>
              <Link
                href="/terminos-de-uso"
                className="hover:text-white transition-colors"
              >
                Términos de uso
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}