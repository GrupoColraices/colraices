"use client";

import Link from "next/link";

const cities = ["Bogotá", "Medellín", "Cartagena", "Cali", "y más ciudades"];

export default function TourSection() {
  return (
    <section className="w-full bg-[#F8F6F2] py-[100px]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px] grid md:grid-cols-2 gap-[80px] items-center">

        {/* IZQUIERDA */}
        <div className="max-w-[520px]">

          {/* EYEBROW */}
          <p className="text-[#FFC107] text-[18px] italic font-bold mb-4">
            Evento estrella del ecosistema
          </p>

          {/* TITULO */}
          <h2 className="text-[#2A3F77] text-[42px] leading-[1.15] mb-6">

            <span className="font-bold italic">
              El tour de la Vivienda
            </span>

            <br />

            <span className="font-normal not-italic">
              llega a tu país
            </span>

          </h2>

          {/* DESC */}
          <p className="text-[#475569] text-[15px] leading-[28px] mb-8 max-w-[460px]">
            El evento donde colombianos en el exterior conocen los proyectos inmobiliarios más importantes de Colombia. Sin intermediarios. Con expertos que responden.
          </p>

          {/* BOTON */}
          <Link
            href="/tour"
            className="inline-flex items-center justify-center h-[48px] px-6 rounded-full border-2 border-[#2A3F77] text-[#2A3F77] font-semibold text-[14px] hover:bg-[#2A3F77]/5 transition"
          >
            Conocer más
          </Link>

          {/* CIUDADES */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8 text-[14px]">

            {cities.map((city, i) => (
              <div key={i} className="flex items-center gap-2">

                {/* DOT */}
                <div className="w-[6px] h-[6px] rounded-full bg-[#FFC107]" />

                {/* TEXTO */}
                <span className={i === cities.length - 1 ? "italic text-[#94A3B8]" : "text-[#475569]"}>
                  {city}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* DERECHA (CARD) */}
        <div className="w-full max-w-[520px] ml-auto">

          <div className="
            bg-[#16325C]
            rounded-[32px]
            shadow-[0_24px_64px_rgba(42,63,119,0.25)]
            overflow-hidden
            flex flex-col
            min-h-[420px]
          ">

            {/* HEADER */}
            <div className="flex justify-end p-6">
              <span className="px-4 py-[6px] rounded-full bg-[#FFC107] text-[#2A3F77] text-[11px] font-bold uppercase tracking-wide">
                Próximas fechas
              </span>
            </div>

            {/* CONTENIDO */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-8">

              <div className="text-[42px] mb-4">🎪</div>

              <p className="text-white/40 text-[14px] italic">
                Galería / video del evento
              </p>

            </div>

            {/* STATS */}
            <div className="bg-[#0F254A] px-8 py-5 grid grid-cols-3 text-center">

              <Stat value="+50" label="proyectos" />
              <Stat value="+3.000" label="asistentes / edición" />
              <Stat value="8" label="ciudades" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-white text-[20px] font-bold mb-1">{value}</p>
      <p className="text-white/50 text-[11px]">{label}</p>
    </div>
  );
}