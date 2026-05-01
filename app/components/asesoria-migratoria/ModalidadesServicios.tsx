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
    <section className="w-full bg-[#FBF8F3] pt-[99.98px] pb-[100px]">
      <div className="w-full max-w-[1375.37px] mx-auto px-[155.69px] flex flex-col gap-[51.98px]">
        {/* HEADER */}
        <div className="w-[1063.99px] mx-auto text-center">
          <p className="text-[#FFC107] text-[16px] font-semibold tracking-[1.74px] uppercase leading-[16.3px] mb-[23px]">
            Modalidades
          </p>

          <h2 className="text-[41.6px] leading-[49.9px] font-semibold text-[#0F2D5C] mb-[20px]">
            Dos servicios según{" "}
            <span className="text-[#FFC107] italic font-semibold">
              tu momento
            </span>
          </h2>

          <p className="text-[#475569] text-[16.8px] leading-[28.9px] max-w-[790px] mx-auto">
            No todos los colombianos están en el mismo punto del proceso.
            Colraices tiene una modalidad para cada situación.
          </p>
        </div>

        {/* CARDS */}
        <div className="w-[1063.99px] h-[657.51px] grid grid-cols-2 gap-[28px] mx-auto">
          {/* CARD 1 */}
          <div className="w-[517.99px] h-[657.51px] rounded-[32px] overflow-hidden bg-white border border-[#0F2D5C]/10 shadow-[0_14px_38px_rgba(15,45,92,0.10)] hover:-translate-y-[8px] hover:shadow-[0_24px_55px_rgba(15,45,92,0.16)] transition-all duration-500 ease-out">
            {/* TOP */}
            <div className="relative w-full h-[209.98px] rounded-t-[32px] overflow-hidden bg-gradient-to-r from-[#091D3E] to-[#FFC107]">
              {/* GRID */}
              <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:19px_19px]" />

              {/* RADIAL */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,180,41,0.18),transparent_60%)]" />

              {/* LIGHT OVERLAY */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)]" />

              <div className="relative z-10 px-[35.99px] pt-[35.99px]">
                <div className="flex justify-between items-start mb-[12px]">
                  <span className="text-[32px] leading-[48px]">🗺️</span>

                  <span className="h-[25.39px] px-[18px] rounded-full border border-[#F0B429]/35 bg-[#F0B429]/20 flex items-center text-[#F0B429] text-[9.92px] font-bold uppercase tracking-[0.99px] hover:bg-[#F0B429]/30 transition-all duration-300">
                    Más completo
                  </span>
                </div>

                <h3 className="text-white text-[24px] font-bold leading-[36px] mb-[4px]">
                  Asesoría Completa
                </h3>

                <p className="text-white/60 text-[14px] leading-[19px] max-w-[446px]">
                  Para quien empieza desde cero y quiere hacerlo bien desde el
                  primer paso.
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="h-[447.53px] px-[33.26px] pt-[27.98px] pb-0 bg-white border-t border-[#0F2D5C]/10">
              <p className="text-[#1E293B] text-[14.08px] leading-[23.9px] mb-[24px] max-w-[451.47px]">
                Desde el diagnóstico inicial hasta el acompañamiento en la
                solicitud y la resolución. Cubre todo el proceso migratorio sin
                excepción.
              </p>

              <ul className="space-y-[8.98px] mb-[23px]">
                {servicioCompleto.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#475569] text-[13.12px] leading-[20.3px]"
                  >
                    <span className="text-[#FFC107] mr-[10px] mt-[1px]">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#94A3B8]/30 pt-[20px] flex justify-between items-center">
                <div>
                  <p className="text-[#94A3B8] text-[10.4px] uppercase tracking-[1.25px] leading-[15.6px] mb-[4px]">
                    Inversión total
                  </p>

                  <p className="text-[#0F2D5C] text-[25.6px] font-bold leading-[38.4px]">
                    US$500
                  </p>

                  <p className="text-[#94A3B8] text-[11.2px] leading-[16.8px]">
                    Dividido en 2 pagos US$300 y US$200
                  </p>
                </div>

                <button className="w-[129.62px] h-[44.37px] rounded-full bg-gradient-to-r from-[#FFC107] to-[#F0B429] text-white text-[13.6px] font-semibold shadow-[0_10px_24px_rgba(240,180,41,0.35)] hover:scale-[1.04] transition-all duration-300">
                  Contratar →
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-[517.99px] h-[657.51px] rounded-[32px] overflow-hidden bg-white border border-[#0F2D5C]/10 shadow-[0_14px_38px_rgba(15,45,92,0.10)] hover:-translate-y-[8px] hover:shadow-[0_24px_55px_rgba(15,45,92,0.16)] transition-all duration-500 ease-out">
            {/* TOP */}
            <div className="relative w-full h-[209.98px] rounded-t-[32px] overflow-hidden bg-gradient-to-r from-[#2A3A5C] to-[#1A4F9E]">
              {/* GRID */}
              <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:19px_19px]" />

              {/* RADIAL */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />

              {/* LIGHT OVERLAY */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)]" />

              <div className="relative z-10 px-[35.99px] pt-[35.99px]">
                <div className="flex justify-between items-start mb-[12px]">
                  <span className="text-[32px] leading-[48px]">🔄</span>

                  <span className="h-[25.39px] px-[18px] rounded-full border border-white/20 bg-white/12 flex items-center text-white/70 text-[9.92px] font-bold uppercase tracking-[0.99px] hover:bg-white/20 transition-all duration-300">
                    Proceso estancado
                  </span>
                </div>

                <h3 className="text-white text-[24px] font-bold leading-[36px] mb-[4px]">
                  Asesoría de Retoma
                </h3>

                <p className="text-white/60 text-[14px] leading-[19px] max-w-[446px]">
                  Para quien ya empezó su proceso y se quedó bloqueado en algún
                  punto.
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="h-[447.53px] px-[33.26px] pt-[27.98px] pb-0 bg-white border-t border-[#0F2D5C]/10">
              <p className="text-[#1E293B] text-[14.08px] leading-[23.9px] mb-[24px] max-w-[451.47px]">
                Parte desde la revisión del estado actual de tu proceso.
                Identifica qué falló, qué sigue y cómo retomarlo con método y
                sin cometer los mismos errores.
              </p>

              <ul className="space-y-[8.98px] mb-[47px]">
                {servicioRetoma.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#475569] text-[13.12px] leading-[20.3px]"
                  >
                    <span className="text-[#FFC107] mr-[10px] mt-[1px]">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#94A3B8]/30 pt-[20px] flex justify-between items-center">
                <div>
                  <p className="text-[#94A3B8] text-[10.4px] uppercase tracking-[1.25px] leading-[15.6px] mb-[4px]">
                    Inversión
                  </p>

                  <p className="text-[#0F2D5C] text-[25.6px] font-bold leading-[38.4px]">
                    US$100
                  </p>

                  <p className="text-[#94A3B8] text-[11.2px] leading-[16.8px]">
                    Pago único
                  </p>
                </div>

                <button className="w-[129.62px] h-[44.37px] rounded-full bg-[#0F2D5C] text-white text-[13.6px] font-semibold shadow-[0_10px_24px_rgba(15,45,92,0.25)] hover:scale-[1.04] transition-all duration-300">
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