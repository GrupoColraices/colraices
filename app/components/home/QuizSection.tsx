export default function TrustStripSection() {
  return (
    <section className="w-full bg-[#FEF3C7] border-b-[2.5px] border-[#FFC107]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px] pt-[42px] pb-[28px]">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* TEXTO */}
          <div className="max-w-[460px]">

            <h2 className="text-[#0B1F3A] text-[26px] md:text-[28px] font-semibold mb-2 leading-[1.2]">
              ¿Qué necesitas hoy?
            </h2>

            <p className="text-[#0B1F3A]/70 text-[14px] leading-[22px]">
              Cuéntanos dónde estás y qué tienes en mente. <br />
              En dos clics te mostramos por dónde empezar.
            </p>

          </div>

          {/* INPUT + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6">

            {/* INPUT PRO */}
            <div className="w-full sm:w-[320px] h-[48px] rounded-full border border-[#CBD5E1] bg-white flex items-center px-5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">

              {/* ICONO CHECK */}
              <div className="w-4 h-4 rounded-full border border-[#94A3B8] flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-[#94A3B8] rounded-full"></div>
              </div>

              <span className="text-[#94A3B8] text-[13px]">
                Selecciona una opción
              </span>

            </div>

            {/* BOTÓN */}
            <button className="text-[#0B1F3A] font-semibold text-[14px] flex items-center gap-1 hover:gap-2 transition-all">
              Ver mi camino →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}