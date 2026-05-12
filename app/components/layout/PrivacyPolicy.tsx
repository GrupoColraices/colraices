"use client";

import { useEffect, useState } from "react";

type PrivacyPolicyProps = {
  className?: string;
};

export default function PrivacyPolicy({ className = "" }: PrivacyPolicyProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`m-0 inline cursor-pointer border-0 bg-transparent p-0 [font:inherit] text-inherit [line-height:inherit] ${className}`}
      >
        Política de privacidad
      </button>

      {open && (
        <div
          className="
            fixed left-0 right-0 bottom-0
            top-[64px] sm:top-[72px] lg:top-[70px]
            z-[9999] flex items-start justify-center
            bg-black/55 px-0 sm:px-4
          "
          onClick={() => setOpen(false)}
        >
          <div
            className="
              relative h-full w-full overflow-auto bg-white
              max-h-[calc(100dvh-64px)]
              sm:h-auto sm:max-h-[calc(100dvh-72px)] sm:max-w-[800px]
              lg:max-h-[calc(100dvh-76px)]
              shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              rounded-none sm:rounded-tl-2xl sm:rounded-br-2xl
              font-[Montserrat,sans-serif]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="
                sticky top-0 z-10 flex items-center justify-between
                bg-[#2A3F77] text-white
                px-5 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8
                rounded-none sm:rounded-tl-2xl
              "
            >
              <h2 className="m-0 text-[22px] font-bold leading-tight sm:text-[26px] lg:text-[28px]">
                Política de Privacidad
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar política de privacidad"
                className="bg-transparent p-0 text-[30px] font-light leading-none text-[#FFC107] sm:text-[32px]"
              >
                ×
              </button>
            </div>

            <div className="px-5 py-6 text-[#2A3F77] leading-[1.8] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="mb-6 text-sm text-[#666666]">
                Última actualización: Abril 2026
              </p>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  1. Responsable del Tratamiento de Datos
                </h3>
                <p className="mb-3 text-[15px]">
                  COLRAICES es responsable del tratamiento de sus datos personales.
                  Nos comprometemos a proteger su privacidad y a cumplir con la
                  legislación aplicable en materia de protección de datos tanto en
                  Colombia como en España.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  2. Datos que Recopilamos
                </h3>
                <p className="mb-3 text-[15px]">
                  Recopilamos los siguientes tipos de datos personales:
                </p>
                <ul className="mb-3 ml-5 text-[15px]">
                  <li>Datos de identificación: nombre, apellidos, documento de identidad</li>
                  <li>Datos de contacto: dirección de correo electrónico, teléfono, dirección postal</li>
                  <li>Datos financieros: información sobre ingresos, historial crediticio cuando aplique</li>
                  <li>Datos de navegación: cookies, dirección IP, comportamiento en el sitio web</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  3. Finalidad del Tratamiento
                </h3>
                <p className="mb-3 text-[15px]">
                  Sus datos personales serán utilizados para:
                </p>
                <ul className="mb-3 ml-5 text-[15px]">
                  <li>Prestar los servicios financieros, inmobiliarios y legales solicitados</li>
                  <li>Procesar solicitudes de crédito hipotecario y evaluar viabilidad crediticia</li>
                  <li>Gestionar la compra, venta y arrendamiento de inmuebles</li>
                  <li>Enviar comunicaciones comerciales sobre nuestros servicios</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Mejorar nuestros servicios mediante análisis estadísticos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  4. Base Legal del Tratamiento
                </h3>
                <p className="mb-3 text-[15px]">
                  El tratamiento de sus datos se basa en:
                </p>
                <ul className="mb-3 ml-5 text-[15px]">
                  <li>Su consentimiento expreso</li>
                  <li>La ejecución de un contrato en el que usted es parte</li>
                  <li>El cumplimiento de obligaciones legales aplicables</li>
                  <li>Intereses legítimos de COLRAICES</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  5. Compartir Datos con Terceros
                </h3>
                <p className="mb-3 text-[15px]">
                  Sus datos pueden ser compartidos con:
                </p>
                <ul className="mb-3 ml-5 text-[15px]">
                  <li>Entidades bancarias Banco Davivienda, Banco Unión para procesamiento de créditos</li>
                  <li>Constructoras e inmobiliarias para gestión de proyectos</li>
                  <li>Proveedores de servicios legales y migratorios</li>
                  <li>Autoridades competentes cuando la ley lo requiera</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  6. Sus Derechos
                </h3>
                <p className="mb-3 text-[15px]">
                  Usted tiene derecho a:
                </p>
                <ul className="mb-3 ml-5 text-[15px]">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos o incompletos</li>
                  <li>Solicitar la supresión de sus datos</li>
                  <li>Oponerse al tratamiento de sus datos</li>
                  <li>Solicitar la limitación del tratamiento</li>
                  <li>Portabilidad de datos</li>
                  <li>Revocar su consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  7. Seguridad de los Datos
                </h3>
                <p className="mb-3 text-[15px]">
                  Implementamos medidas técnicas y organizativas apropiadas para
                  proteger sus datos personales contra acceso no autorizado,
                  pérdida, destrucción o alteración.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  8. Conservación de Datos
                </h3>
                <p className="mb-3 text-[15px]">
                  Sus datos personales serán conservados durante el tiempo
                  necesario para cumplir con las finalidades descritas y las
                  obligaciones legales aplicables.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  9. Contacto
                </h3>
                <p className="mb-3 text-[15px]">
                  Para ejercer sus derechos o resolver dudas sobre esta política,
                  puede contactarnos en:
                </p>
                <p className="mb-2 text-[15px]">
                  <strong>Email:</strong> info@colraices.co
                </p>
                <p className="mb-2 text-[15px]">
                  <strong>Teléfono:</strong> (57) 601 328 8939
                </p>
              </section>

              <div className="mt-10 border-t border-gray-200 pt-6 text-center">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg bg-[#FFC107] px-8 py-3.5
                    text-base font-semibold text-[#2A3F77]
                    transition duration-300 hover:bg-[#FFD54F]
                  "
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}