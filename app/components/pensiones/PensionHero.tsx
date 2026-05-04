export default function PensionHero() {
  return (
    <section className="relative w-full bg-[#FBF8F3] pt-[72px] sm:pt-[88px] lg:pt-[96px] pb-[40px] overflow-hidden">
      <div className="max-w-[1180px] mx-auto w-full min-h-screen lg:min-h-0 relative px-4 sm:px-6 md:px-8 lg:px-6 xl:px-0">

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-[592px] pt-2 sm:pt-4 lg:pt-[34px]">

            {/* TITULAR */}
            <div>
              <h1 className="text-[#0F2D5C] font-semibold leading-[1.08] tracking-[0px] text-[clamp(34px,7vw,48px)]">
                Tu pensión
                <br />
                colombiana
              </h1>

              <h1 className="text-[#1A4F9E] italic font-semibold leading-[1.08] tracking-[0px] text-[clamp(38px,7.8vw,54px)]">
                no se fue contigo.
              </h1>
            </div>

            {/* DESCRIPCIÓN */}
            <div className="mt-6 sm:mt-7 lg:mt-[30px] max-w-[577px]">
              <p className="text-[#475569] font-light text-[clamp(15px,2.4vw,16.8px)] leading-[1.75]">
                Vivir fuera del país no significa perder tu pensión en
                Colombia. Colraices revisa tu situación, te explica qué
                derechos tienes y te acompaña si necesitas reclamarlos.
              </p>
            </div>

            {/* BADGES */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3">

              <div className="flex items-center gap-2 px-4 min-h-[42px] rounded-full border border-[rgba(15,45,92,0.10)] bg-white shadow-sm w-fit max-w-full">
                <div className="w-6 h-6 rounded-full bg-[#0F2D5C] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
                  !
                </div>
                <span className="text-[#0F2D5C] font-medium text-[clamp(12px,2vw,12.8px)] leading-[1.4]">
                  Asesoría y Planificación Pensional
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 min-h-[42px] rounded-full border border-[rgba(15,45,92,0.10)] bg-white shadow-sm w-fit max-w-full">
                <div className="w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
                  II
                </div>
                <span className="text-[#0F2D5C] font-medium text-[clamp(12px,2vw,12.8px)] leading-[1.4]">
                  Representación Legal (si procede)
                </span>
              </div>
            </div>

            {/* BOTÓN */}
            <div className="mt-10 sm:mt-12 lg:mt-[50px]">
              <button className="w-full sm:w-auto min-h-[52px] px-7 rounded-full bg-[#FFC107] text-[#2A3F77] font-semibold text-[clamp(14px,2vw,14.4px)] leading-[21.6px] shadow-[0_10px_24px_rgba(255,193,7,0.35)] hover:scale-[1.02] transition-all duration-300">
                Revisar mi situación pensional
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="relative w-full max-w-[420px] mx-auto lg:mx-0 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] px-5 sm:px-7 lg:px-[36px] pt-6 sm:pt-8 lg:pt-[36px] pb-6 sm:pb-8 lg:pb-[36px] shadow-[0_32px_60px_rgba(15,45,92,0.20)] overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at top right,
                  rgba(240,180,41,0.18) 0%,
                  rgba(240,180,41,0.10) 18%,
                  rgba(240,180,41,0.04) 32%,
                  transparent 48%
                ),
                radial-gradient(circle at bottom left,
                  rgba(59,130,246,0.20) 0%,
                  rgba(59,130,246,0.10) 22%,
                  rgba(59,130,246,0.04) 38%,
                  transparent 54%
                ),
                linear-gradient(180deg,
                  #163F7A 0%,
                  #12356B 38%,
                  #0F2D5C 100%
                )
              `,
              border: "0.8px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            {/* GLOW AMARILLO */}
            <div
              className="absolute top-[-110px] right-[-110px] w-[280px] h-[280px] rounded-full pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle,
                    rgba(240,180,41,0.22) 0%,
                    rgba(240,180,41,0.12) 24%,
                    rgba(240,180,41,0.05) 42%,
                    transparent 74%
                  )
                `,
              }}
            />

            {/* GLOW AZUL */}
            <div
              className="absolute bottom-[-130px] left-[-130px] w-[320px] h-[320px] rounded-full pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle,
                    rgba(59,130,246,0.22) 0%,
                    rgba(59,130,246,0.12) 26%,
                    rgba(59,130,246,0.05) 44%,
                    transparent 76%
                  )
                `,
              }}
            />

            {/* BRILLO GENERAL */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,0.04) 0%,
                    rgba(255,255,255,0.015) 42%,
                    rgba(255,255,255,0.005) 100%
                  )
                `,
              }}
            />

            <div className="relative z-10">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 min-h-[30px] rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.10)]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#FFC107]" />
                <span className="text-[clamp(10px,2vw,11.2px)] uppercase tracking-[1.12px] text-[rgba(255,255,255,0.70)] font-semibold">
                  Módulo 1 · Precio fijo
                </span>
              </div>

              {/* PRECIO */}
              <div className="mt-5 sm:mt-6 flex items-end">
                <span className="text-white font-bold text-[clamp(18px,4vw,20.8px)] leading-none mr-1">
                  US$
                </span>
                <span className="text-white font-bold text-[clamp(38px,9vw,44.8px)] leading-none">
                  370
                </span>
              </div>

              {/* SUBTEXTO */}
              <p className="mt-3 text-[clamp(12px,2vw,12.48px)] text-[rgba(255,255,255,0.50)] leading-[1.6]">
                Diagnóstico, plan de acción y acompañamiento inicial
              </p>

              {/* BENEFICIOS */}
              <div className="mt-6 space-y-3">
                {[
                  "Diagnóstico pensional completo",
                  "Plan de acción personalizado",
                  "Orientación sobre convenios bilaterales",
                  "Sesión de asesoría individual",
                  "Acompañamiento en trámites iniciales",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-[18px] h-[18px] rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FFC107] text-[11px] flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-[rgba(255,255,255,0.68)] text-[clamp(12px,2vw,12.8px)] leading-[1.5]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-[rgba(255,255,255,0.08)] my-6" />

              {/* MODULO 2 */}
              <div className="w-full rounded-[12px] border border-[rgba(240,180,41,0.22)] bg-[rgba(201,144,12,0.12)] p-4 sm:p-5">
                <h3 className="text-[#FFC107] font-semibold text-[clamp(12px,2vw,12.8px)] leading-[1.5]">
                  Módulo 2 · Representación Legal
                </h3>

                <p className="mt-2 text-[rgba(255,255,255,0.50)] text-[clamp(11px,2vw,12.16px)] leading-[1.5]">
                  Incluido cuando procede. Sin cobro anticipado.
                </p>

                <div className="mt-4 flex items-start gap-3">
                  <span className="text-[#FFC107] font-bold text-[clamp(24px,5vw,25.6px)] leading-none">
                    1%
                  </span>

                  <div className="flex flex-col leading-[1.4] pt-[2px]">
                    <span className="text-[rgba(255,255,255,0.45)] text-[clamp(11px,2vw,11.68px)]">
                      del valor reconocido
                    </span>
                    <span className="text-[#FFC107] font-bold text-[clamp(11px,2vw,11.68px)]">
                      Solo si es exitoso
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}