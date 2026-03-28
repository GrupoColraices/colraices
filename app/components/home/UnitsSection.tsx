"use client";

import Link from "next/link";

export default function UnitsSection() {
  return (
    <section id="servicios" className="w-full bg-[#F8FAFC] pt-[80px] pb-[120px]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px]">

        {/* HEADER */}
        <div className="text-center max-w-[1000px] mx-auto mb-[60px]">

          <p className="text-[#FFC107] text-[20px] font-bold italic mb-2">
            Nuestros servicios
          </p>

          <h2 className="text-[#0F2D5C] text-[34px] md:text-[40px] font-semibold leading-[1.15] mb-4 whitespace-nowrap">
            Todo lo que necesitas, en un solo ecosistema.
          </h2>

          <p className="text-[#475569] text-[15px] leading-[24px] max-w-[720px] mx-auto">
            No tienes que buscar en cinco lugares distintos ni explicarle tu historia a desconocidos cada vez. Aquí está todo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white border border-[#E2E8F0] p-7 
            rounded-tl-[16px] rounded-tr-none rounded-bl-none rounded-br-[16px] 
            flex flex-col justify-between transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >

            <div>

              <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-5">
                💰
              </div>

              <h3 className="text-[#0F2D5C] text-[18px] font-semibold mb-2">
                Finanzas inteligentes
              </h3>

              <p className="text-[#475569] text-[14px] leading-[22px] mb-5">
                Ponemos orden en tu historial, tu crédito y tu capacidad de inversión. Para que el dinero que trabajaste tanto no se quede quieto.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Buena Data", "Brújula Financiera", "Brújula Crediticia", "Monetización", "Crédito"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] px-3 py-[6px] rounded-full border border-[#CBD5E1] text-[#1A4F9E] bg-[#F1F5F9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <Link href="/finanzas" className="text-[#1A4F9E] font-medium text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
              Ver servicios financieros →
            </Link>

          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#E2E8F0] p-7 
            rounded-tl-[16px] rounded-tr-none rounded-bl-none rounded-br-[16px] 
            flex flex-col justify-between transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >

            <div>

              <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-5">
                🏠
              </div>

              <h3 className="text-[#0F2D5C] text-[18px] font-semibold mb-2">
                Tu propiedad en Colombia
              </h3>

              <p className="text-[#475569] text-[14px] leading-[22px] mb-5">
                Encontramos el inmueble ideal para lo que tienes y lo que sueñas. Sin que tengas que viajar a resolver nada.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Brújula Inmobiliaria", "Llave inmobiliaria"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] px-3 py-[6px] rounded-full border border-[#CBD5E1] text-[#1A4F9E] bg-[#F1F5F9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <Link href="/inmuebles" className="text-[#1A4F9E] font-medium text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
              Ver servicios inmobiliarios →
            </Link>

          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-[#E2E8F0] p-7 
            rounded-tl-[16px] rounded-tr-none rounded-bl-none rounded-br-[16px] 
            flex flex-col justify-between transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >

            <div>

              <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-5">
                ⚖️
              </div>

              <h3 className="text-[#0F2D5C] text-[18px] font-semibold mb-2">
                Trámites
              </h3>

              <p className="text-[#475569] text-[14px] leading-[22px] mb-5">
                Desde migrar ordenadamente hasta emprender en Colombia. Asesoría legal con gente que habla tu idioma.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Asesoría migratoria",
                  "Emprendimiento",
                  "Pensiones",
                  "Representación legal",
                  "Servicios fiscales",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] px-3 py-[6px] rounded-full border border-[#CBD5E1] text-[#1A4F9E] bg-[#F1F5F9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <Link href="/legal-y-migracion" className="text-[#1A4F9E] font-medium text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
              Ver servicios legales →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}