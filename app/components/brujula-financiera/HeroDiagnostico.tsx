"use client";

export default function HeroDiagnostico() {
  return (
    <section className="relative w-full bg-[#091D3E] overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-[1180px] mx-auto px-6 md:px-8 pt-[80px] pb-[40px] flex flex-col lg:flex-row gap-[64px]">

        {/* LEFT SIDE */}
        <div className="flex flex-col max-w-[640px]">

          {/* TAG */}
          <div className="flex items-center gap-[8px] mb-[16px]">
            <div className="w-[24px] h-[2px] bg-[#FFC107]" />
            <span className="text-[#FFC107] text-[11.2px] font-semibold tracking-[1.57px] uppercase leading-[16.8px]">
              Diagnóstico financiero personalizado
            </span>
          </div>

          {/* TITLE */}
          <h1 className="font-semibold text-white leading-[54px] text-[32px] sm:text-[40px] md:text-[47.8px] tracking-[0px]">
            Tu salud financiera <br />
            <span className="text-[#FFD54F]">también se cuida.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-[24px] text-white/50 text-[16px] leading-[28px] max-w-[460px]">
            No sabes cómo está tu historial en Colombia. No sabes por dónde
            empezar. Brújula Financiera te da claridad con un informe y un plan
            de acción en 3 días.
          </p>

          {/* BUTTON */}
          <div className="mt-[32px]">
            <button className="bg-[#FFC107] text-white text-[14.4px] font-semibold px-[24px] py-[13px] rounded-full leading-[21.6px] tracking-[0px] shadow-[0_10px_30px_rgba(255,193,7,0.35)] hover:scale-[1.03] transition">
              Contratar →
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full max-w-[380px]">

          <div className="bg-white/[0.04] border border-white/[0.07] rounded-[16px_0px_16px_0px] p-[28.8px] backdrop-blur-md">

            {/* TITLE */}
            <h3 className="text-white text-[16px] leading-[24px] font-semibold mb-[24px]">
              ¿Qué obtienes?
            </h3>

            {/* ROW */}
            <div className="flex justify-between items-center border-b border-white/[0.07] pb-[16px] mb-[16px]">
              <span className="text-white/[0.42] text-[12.48px] leading-[18.7px]">
                Precio único
              </span>
              <span className="text-[#FFD54F] text-[19.2px] leading-[28.8px] font-semibold">
                USD $45
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/[0.07] pb-[16px] mb-[16px]">
              <span className="text-white/[0.42] text-[12.48px]">
                Entrega en
              </span>
              <span className="text-[#4ADE80] text-[14.08px] font-semibold">
                3 días calendario
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/[0.07] pb-[16px] mb-[24px]">
              <span className="text-white/[0.42] text-[12.48px]">
                Incluye
              </span>
              <span className="text-white text-[14.08px] font-semibold">
                Sesión de asesoría
              </span>
            </div>

            {/* LIST */}
            <div>
              <p className="text-white/[0.35] text-[10.4px] tracking-[2px] uppercase mb-[12px] font-bold">
                El servicio incluye
              </p>

              <ul className="flex flex-col gap-[12px]">
                {[
                  "Diagnóstico del historial crediticio",
                  "Informe personalizado con score",
                  "Plan de acción priorizado",
                  "Sesión de asesoría incluida",
                  "Seguimiento posterior",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-[10px]">
                    <div className="w-[18px] h-[18px] rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/15 flex items-center justify-center">
                      <span className="text-[#4ADE80] text-[10px] leading-none">
                        ✓
                      </span>
                    </div>
                    <span className="text-white/[0.60] text-[13.12px] leading-[19.7px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}