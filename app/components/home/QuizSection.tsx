export default function TrustStripSection() {
  return (
    <section className="w-full bg-[#FEF3C7] border-b-[3px] border-[#FFC107]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px] py-10 md:pt-[42px] md:pb-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* TEXTO */}
          <div className="max-w-[420px]">

            <h2 className="text-[#0B1F3A] text-[24px] md:text-[28px] font-semibold mb-2">
              ¿Qué necesitas hoy?
            </h2>

            <p className="text-[#0B1F3A]/70 text-[13px] md:text-[14px] leading-[20px]">
              Cuéntanos dónde estás y qué tienes en mente. <br />
              En dos clics te mostramos por dónde empezar.
            </p>

          </div>

          {/* INPUT + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">

            {/* INPUT FAKE */}
            <div className="w-full sm:w-[300px] h-[48px] rounded-full border border-[#CBD5E1] bg-white flex items-center px-4">
              <span className="text-[#0B1F3A]/50 text-sm">✓</span>
            </div>

            {/* BOTÓN */}
            <button className="text-[#0B1F3A] font-semibold text-[14px]">
              Ver mi camino →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}