"use client";

export default function HeroBrujulaCrediticia() {
  return (
    <section className="relative w-full bg-[#091D3E] overflow-hidden pb-[40px]">

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
      <div className="relative z-10 w-full flex justify-center px-[24px] md:px-[48px] pt-[80px]">
        <div className="w-full max-w-[1180px] flex flex-col lg:flex-row gap-[64px]">

          {/* IZQUIERDA */}
          <div className="w-full lg:max-w-[640px] flex flex-col">

            <span className="text-[#FFC107] text-[11.2px] tracking-[1.57px] leading-[16.8px] font-semibold uppercase mb-[16px]">
              Evaluación de viabilidad crediticia
            </span>

            <h1 className="text-white font-semibold text-[36px] md:text-[47.81px] leading-[44px] md:leading-[54px]">
              Planificar hoy para{" "}
              <span className="text-[#FFD54F]">
                comprar bien mañana.
              </span>
            </h1>

            <p className="text-white/50 text-[16px] leading-[28px] mt-[24px] max-w-[460px]">
              ¿Quieres comprar o invertir en Colombia pero no sabes si hoy calificas para crédito? 
              Brújula Crediticia analiza tu perfil, valida tu viabilidad con el banco y te dice 
              con claridad si estás listo para acceder a crédito, y si no, qué ajustar y en cuánto tiempo.
            </p>

            <button className="mt-[32px] w-fit bg-[#FFC107] text-white text-[14.4px] font-semibold px-[24px] py-[13px] rounded-full hover:brightness-110 transition">
              Contratar →
            </button>
          </div>

          {/* DERECHA - CARD PRO */}
          <div className="relative w-full max-w-[380px] rounded-[0px] rounded-tl-[16px] rounded-br-[16px] overflow-hidden">

            {/* FONDO */}
            <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-md" />

            {/* STROKE INTERNO */}
            <div className="pointer-events-none absolute inset-0 rounded-[0px] rounded-tl-[16px] rounded-br-[16px] border border-white/[0.10]" />

            {/* HIGHLIGHT TOP */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-white/[0.15]" />

            {/* SOMBRA INTERNA ABAJO */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-black/20 to-transparent" />

            {/* CONTENIDO */}
            <div className="relative p-[28px]">

              <h3 className="text-white text-[16px] font-semibold mb-[24px]">
                ¿Qué obtienes?
              </h3>

              <div className="flex flex-col divide-y divide-white/10">

                <div className="flex justify-between items-center py-[12px]">
                  <span className="text-white/40 text-[12.48px]">
                    Precio único
                  </span>
                  <span className="text-[#FFD54F] font-semibold text-[19.2px]">
                    USD $180
                  </span>
                </div>

                <div className="flex justify-between items-center py-[12px]">
                  <span className="text-white/40 text-[12.48px]">
                    Entrega
                  </span>
                  <span className="text-[#4ADE80] font-semibold text-[14.08px]">
                    Máx. 3 días hábiles
                  </span>
                </div>

                <div className="flex justify-between items-center py-[12px]">
                  <span className="text-white/40 text-[12.48px]">
                    Incluye sesión de asesoría
                  </span>
                  <span className="text-[#4ADE80] font-semibold text-[14.08px]">
                    ✓ Sí
                  </span>
                </div>

                <div className="flex justify-between items-center py-[12px]">
                  <span className="text-white/40 text-[12.48px]">
                    ¿Emite carta bancaria?
                  </span>
                  <span className="text-[#FFD54F] font-semibold text-[14.08px]">
                    No — solo estimación
                  </span>
                </div>
              </div>

              <div className="mt-[24px]">
                <span className="text-white/35 text-[10.4px] tracking-[2px] font-bold uppercase">
                  El servicio incluye
                </span>

                <div className="flex flex-col gap-[12px] mt-[12px]">

                  {[
                    "Diagnóstico financiero y crediticio",
                    "Consulta en centrales de riesgo",
                    "Marcación bancaria interna",
                    "Estimación del cupo de crédito",
                    "Plan de acción crediticio",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-[10px]">
                      
                      <div className="w-[18px] h-[18px] rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/15 flex items-center justify-center">
                        <span className="text-[#4ADE80] text-[10px]">✓</span>
                      </div>

                      <span className="text-white/65 text-[13.12px]">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}