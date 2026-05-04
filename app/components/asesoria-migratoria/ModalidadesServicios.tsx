"use client";

const servicioCompleto = [
  "Diagnóstico completo de perfil migratorio",
  "Análisis de viabilidad y comparación de rutas posibles",
  "Hoja de ruta personalizada paso a paso",
  "Sesión de orientación y resolución de dudas",
  "Revisión documental previa a la radicación",
  "Acompañamiento hasta la resolución final",
];

const servicioRetoma = [
  "Revisión del estado actual de tu proceso",
  "Identificación de bloqueos y errores previos",
  "Plan de acción para retomar con método",
  "Orientación sobre próximos pasos concretos",
];

export default function ModalidadesServicios() {
  return (
    <section className="w-full bg-[#FBF8F3] pt-[70px] sm:pt-[85px] lg:pt-[99.98px] pb-[75px] sm:pb-[90px] lg:pb-[100px]">
      <div className="w-full max-w-[1375.37px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[155.69px] flex flex-col gap-[40px] sm:gap-[48px] lg:gap-[51.98px]">
        
        {/* HEADER */}
        <div className="w-full max-w-[1063.99px] mx-auto text-center">
          <p
            className="text-[#FFC107] font-semibold uppercase mb-[20px] sm:mb-[23px]"
            style={{
              fontSize: "clamp(13px, 2vw, 16px)",
              letterSpacing: "1.74px",
              lineHeight: "1",
            }}
          >
            Modalidades
          </p>

          <h2
            className="font-semibold text-[#0F2D5C] mb-[18px] sm:mb-[20px]"
            style={{
              fontSize: "clamp(30px, 5vw, 41.6px)",
              lineHeight: "1.2",
            }}
          >
            Dos servicios según{" "}
            <span className="text-[#FFC107] italic font-semibold">
              tu momento
            </span>
          </h2>

          <p
            className="text-[#475569] max-w-[790px] mx-auto px-2"
            style={{
              fontSize: "clamp(14px, 2vw, 16.8px)",
              lineHeight: "1.7",
            }}
          >
            No todos los colombianos están en el mismo punto del proceso.
            Colraices tiene una modalidad para cada situación.
          </p>
        </div>

        {/* CARDS */}
        <div className="w-full max-w-[1063.99px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-[24px] lg:gap-[28px]">
          
          {/* CARD 1 */}
          <div className="w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-[#0F2D5C]/10 shadow-[0_14px_38px_rgba(15,45,92,0.10)] hover:-translate-y-[8px] hover:shadow-[0_24px_55px_rgba(15,45,92,0.16)] transition-all duration-500 ease-out">
            
            {/* TOP */}
            <div className="relative w-full min-h-[210px] sm:min-h-[230px] rounded-t-[28px] sm:rounded-t-[32px] overflow-hidden bg-gradient-to-r from-[#091D3E] to-[#FFC107]">
              <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:19px_19px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,180,41,0.18),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)]" />

              <div className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-9">
                <div className="flex justify-between items-start mb-3 gap-4 flex-wrap">
                  <span className="text-[30px] sm:text-[32px] leading-none">🗺️</span>

                  <span className="min-h-[25px] px-4 sm:px-[18px] rounded-full border border-[#F0B429]/35 bg-[#F0B429]/20 flex items-center text-[#F0B429] text-[9px] sm:text-[9.92px] font-bold uppercase tracking-[0.99px] hover:bg-[#F0B429]/30 transition-all duration-300 whitespace-nowrap">
                    Más completo
                  </span>
                </div>

                <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-[1.3] mb-1">
                  Asesoría Completa
                </h3>

                <p className="text-white/60 text-[13px] sm:text-[14px] leading-[1.5] max-w-[446px]">
                  Para quien empieza desde cero y quiere hacerlo bien desde el
                  primer paso.
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="px-6 sm:px-8 pt-7 pb-8 bg-white border-t border-[#0F2D5C]/10">
              <p className="text-[#1E293B] text-[13px] sm:text-[14.08px] leading-[1.7] mb-6">
                Desde el diagnóstico inicial hasta el acompañamiento en la
                solicitud y la resolución. Cubre todo el proceso migratorio sin
                excepción.
              </p>

              <ul className="space-y-3 mb-8">
                {servicioCompleto.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#475569] text-[13px] sm:text-[13.12px] leading-[1.6]"
                  >
                    <span className="text-[#FFC107] mr-[10px] mt-[1px]">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#94A3B8]/30 pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                <div>
                  <p className="text-[#94A3B8] text-[10px] uppercase tracking-[1.25px] mb-1">
                    Inversión total
                  </p>

                  <p className="text-[#0F2D5C] text-[24px] sm:text-[25.6px] font-bold leading-none">
                    US$500
                  </p>

                  <p className="text-[#94A3B8] text-[11px] leading-[1.5] mt-1">
                    Dividido en 2 pagos US$300 y US$200
                  </p>
                </div>

                <button className="w-full sm:w-[129.62px] h-[46px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#F0B429] text-white text-[13.6px] font-semibold shadow-[0_10px_24px_rgba(240,180,41,0.35)] hover:scale-[1.04] transition-all duration-300">
                  Contratar →
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-[#0F2D5C]/10 shadow-[0_14px_38px_rgba(15,45,92,0.10)] hover:-translate-y-[8px] hover:shadow-[0_24px_55px_rgba(15,45,92,0.16)] transition-all duration-500 ease-out">
            
            {/* TOP */}
            <div className="relative w-full min-h-[210px] sm:min-h-[230px] rounded-t-[28px] sm:rounded-t-[32px] overflow-hidden bg-gradient-to-r from-[#2A3A5C] to-[#1A4F9E]">
              <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:19px_19px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)]" />

              <div className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-9">
                <div className="flex justify-between items-start mb-3 gap-4 flex-wrap">
                  <span className="text-[30px] sm:text-[32px] leading-none">🔄</span>

                  <span className="min-h-[25px] px-4 sm:px-[18px] rounded-full border border-white/20 bg-white/12 flex items-center text-white/70 text-[9px] sm:text-[9.92px] font-bold uppercase tracking-[0.99px] hover:bg-white/20 transition-all duration-300 whitespace-nowrap">
                    Proceso estancado
                  </span>
                </div>

                <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-[1.3] mb-1">
                  Asesoría de Retoma
                </h3>

                <p className="text-white/60 text-[13px] sm:text-[14px] leading-[1.5] max-w-[446px]">
                  Para quien ya empezó su proceso y se quedó bloqueado en algún
                  punto.
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="px-6 sm:px-8 pt-7 pb-8 bg-white border-t border-[#0F2D5C]/10">
              <p className="text-[#1E293B] text-[13px] sm:text-[14.08px] leading-[1.7] mb-6">
                Parte desde la revisión del estado actual de tu proceso.
                Identifica qué falló, qué sigue y cómo retomarlo con método y
                sin cometer los mismos errores.
              </p>

              <ul className="space-y-3 mb-8">
                {servicioRetoma.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#475569] text-[13px] sm:text-[13.12px] leading-[1.6]"
                  >
                    <span className="text-[#FFC107] mr-[10px] mt-[1px]">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#94A3B8]/30 pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                <div>
                  <p className="text-[#94A3B8] text-[10px] uppercase tracking-[1.25px] mb-1">
                    Inversión
                  </p>

                  <p className="text-[#0F2D5C] text-[24px] sm:text-[25.6px] font-bold leading-none">
                    US$100
                  </p>

                  <p className="text-[#94A3B8] text-[11px] leading-[1.5] mt-1">
                    Pago único
                  </p>
                </div>

                <button className="w-full sm:w-[129.62px] h-[46px] rounded-full bg-[#0F2D5C] text-white text-[13.6px] font-semibold shadow-[0_10px_24px_rgba(15,45,92,0.25)] hover:scale-[1.04] transition-all duration-300">
                  Contratar →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}