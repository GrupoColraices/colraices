import type { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Colraices",
  description:
    "Política de privacidad de Colraices para el tratamiento de datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar />

      <div className="pt-[68px]">
        <main className="min-h-screen bg-white font-[Montserrat,sans-serif] text-[#2A3F77]">
          <section className="bg-[#2A3F77] px-5 py-[66px] text-white sm:px-8 lg:px-10">
            <div className="mx-auto max-w-[720px]">
              <p className="mb-4 text-[13px] font-bold uppercase tracking-[2px] text-white">
                Colraices
              </p>

              <h1 className="m-0 text-[34px] font-extrabold leading-tight text-white sm:text-[42px] lg:text-[48px]">
                Política de Privacidad
              </h1>

              <p className="mt-4 text-[16px] font-bold text-[#FFC107]">
                Última actualización: Abril 2026
              </p>
            </div>
          </section>

          <article className="mx-auto max-w-[720px] px-5 py-[54px] sm:px-8 lg:px-0">
            <p className="mb-9 text-[18px] leading-[1.8] text-[#2A3F77]">
              Esta página reúne la información principal sobre privacidad,
              tratamiento de datos personales, derechos de los titulares y
              canales de contacto de Colraices.
            </p>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                1. Responsable del Tratamiento de Datos
              </h2>
              <p className="text-[16px] leading-[1.8] text-[#2A3F77]">
                COLRAICES es responsable del tratamiento de sus datos personales.
                Nos comprometemos a proteger su privacidad y a cumplir con la
                legislación aplicable en materia de protección de datos tanto en
                Colombia como en España.
              </p>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                2. Datos que Recopilamos
              </h2>
              <p className="mb-3 text-[16px] leading-[1.8] text-[#2A3F77]">
                Recopilamos los siguientes tipos de datos personales:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-[16px] leading-[1.7] text-[#2A3F77]">
                <li>
                  Datos de identificación: nombre, apellidos, documento de
                  identidad
                </li>
                <li>
                  Datos de contacto: dirección de correo electrónico, teléfono,
                  dirección postal
                </li>
                <li>
                  Datos financieros: información sobre ingresos, historial
                  crediticio cuando aplique
                </li>
                <li>
                  Datos de navegación: cookies, dirección IP, comportamiento en
                  el sitio web
                </li>
              </ul>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                3. Finalidad del Tratamiento
              </h2>
              <p className="mb-3 text-[16px] leading-[1.8] text-[#2A3F77]">
                Sus datos personales serán utilizados para:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-[16px] leading-[1.7] text-[#2A3F77]">
                <li>
                  Prestar los servicios financieros, inmobiliarios y legales
                  solicitados
                </li>
                <li>
                  Procesar solicitudes de crédito hipotecario y evaluar
                  viabilidad crediticia
                </li>
                <li>Gestionar la compra, venta y arrendamiento de inmuebles</li>
                <li>Enviar comunicaciones comerciales sobre nuestros servicios</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Mejorar nuestros servicios mediante análisis estadísticos</li>
              </ul>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                4. Base Legal del Tratamiento
              </h2>
              <p className="mb-3 text-[16px] leading-[1.8] text-[#2A3F77]">
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-[16px] leading-[1.7] text-[#2A3F77]">
                <li>Su consentimiento expreso</li>
                <li>La ejecución de un contrato en el que usted es parte</li>
                <li>El cumplimiento de obligaciones legales aplicables</li>
                <li>Intereses legítimos de COLRAICES</li>
              </ul>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                5. Compartir Datos con Terceros
              </h2>
              <p className="mb-3 text-[16px] leading-[1.8] text-[#2A3F77]">
                Sus datos pueden ser compartidos con:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-[16px] leading-[1.7] text-[#2A3F77]">
                <li>
                  Entidades bancarias Banco Davivienda, Banco Unión para
                  procesamiento de créditos
                </li>
                <li>Constructoras e inmobiliarias para gestión de proyectos</li>
                <li>Proveedores de servicios legales y migratorios</li>
                <li>Autoridades competentes cuando la ley lo requiera</li>
              </ul>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                6. Sus Derechos
              </h2>
              <p className="mb-3 text-[16px] leading-[1.8] text-[#2A3F77]">
                Usted tiene derecho a:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-[16px] leading-[1.7] text-[#2A3F77]">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la supresión de sus datos</li>
                <li>Oponerse al tratamiento de sus datos</li>
                <li>Solicitar la limitación del tratamiento</li>
                <li>Portabilidad de datos</li>
                <li>Revocar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                7. Seguridad de los Datos
              </h2>
              <p className="text-[16px] leading-[1.8] text-[#2A3F77]">
                Implementamos medidas técnicas y organizativas apropiadas para
                proteger sus datos personales contra acceso no autorizado,
                pérdida, destrucción o alteración.
              </p>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                8. Conservación de Datos
              </h2>
              <p className="text-[16px] leading-[1.8] text-[#2A3F77]">
                Sus datos personales serán conservados durante el tiempo
                necesario para cumplir con las finalidades descritas y las
                obligaciones legales aplicables.
              </p>
            </section>

            <section className="border-t border-[#2A3F77]/15 py-7">
              <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#2A3F77]">
                9. Contacto
              </h2>
              <p className="mb-3 text-[16px] leading-[1.8] text-[#2A3F77]">
                Para ejercer sus derechos o resolver dudas sobre esta política,
                puede contactarnos en:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-[16px] leading-[1.7] text-[#2A3F77]">
                <li>Email: info@colraices.co</li>
                <li>Teléfono: (+57) 601 917 6737</li>
              </ul>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}