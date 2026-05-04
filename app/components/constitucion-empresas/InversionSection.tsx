export default function InversionSection() {
  const paymentSteps = [
    {
      step: "1",
      title: "Al contratar el servicio — 40%",
      amount: "US$1.280",
      desc: "Cubre las fases de diagnóstico y formulación del negocio.",
    },
    {
      step: "2",
      title: "Al lanzar el negocio — 30%",
      amount: "US$960",
      desc: "Cuando la empresa está constituida y lista para operar.",
    },
    {
      step: "3",
      title: "Al mes 6 de operación — 30%",
      amount: "US$960",
      desc: "Cuando el negocio ha completado su primer semestre en marcha.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#081D3F] pt-[88px] pb-[96px]">
      {/* Glow superior + fondo amarillo ambiental */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow superior */}
        <div
          className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,193,7,0.07) 0%, rgba(255,193,7,0.03) 38%, rgba(255,193,7,0) 72%)",
          }}
        />

        {/* Glow central */}
        <div
          className="absolute left-1/2 top-[320px] h-[520px] w-[1180px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,193,7,0.16) 0%, rgba(255,193,7,0.11) 24%, rgba(255,193,7,0.07) 42%, rgba(255,193,7,0.035) 58%, rgba(255,193,7,0) 78%)",
            filter: "blur(95px)",
          }}
        />
      </div>

      {/* CONTENEDOR EXACTO */}
      <div className="relative mx-auto w-full max-w-[1084px] px-4 sm:px-6 lg:px-0">
        {/* HEADER */}
        <div className="mb-[58px] text-center">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[4px] text-[#FFDB58]">
            Inversión
          </p>

          <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.03em] text-white">
            El pago sigue{" "}
            <span className="italic text-[#FFD54F]">al avance</span>
          </h2>
        </div>

        {/* GRID EXACTO */}
        <div className="grid grid-cols-1 gap-[34px] lg:grid-cols-[518px_518px] lg:justify-center">
          {/* LEFT CARD */}
          <div
            className="relative w-full lg:w-[518px] min-h-[541px] rounded-[28px] px-[40px] py-[38px] overflow-hidden"
            style={{
              background: "rgba(255,193,7,0.10)",
              border: "0.8px solid rgba(255,193,7,0.30)",
              boxShadow:
                "0 18px 48px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="mb-7 text-[11px] uppercase tracking-[3px] text-white/35">
              Asesoría de Emprendimiento
            </p>

            <div className="mb-4 flex items-end leading-none flex-wrap">
              <span className="mr-1 text-[34px] font-bold text-[#FFC107]">
                US$
              </span>

              <span className="text-[64px] font-bold tracking-[-0.04em] text-white">
                3.200
              </span>
            </div>

            <p className="mb-12 max-w-[420px] text-[15px] leading-[1.65] text-white/38">
              Precio único para todo el servicio · 16 meses de acompañamiento
              completo
            </p>

            {/* PAYMENT STEPS */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-[36px] bottom-[36px] w-[1px] bg-[#FFC107]/30" />

              <div className="space-y-9">
                {paymentSteps.map((item, i) => (
                  <div key={i} className="relative flex gap-4">
                    <div className="z-10 mt-1 flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-full bg-[#FFC107] text-[14px] font-bold text-[#081D3F] shadow-[0_8px_20px_rgba(255,193,7,0.22)]">
                      {item.step}
                    </div>

                    <div>
                      <p className="mb-1 text-[14px] text-white/35">
                        {item.title}
                      </p>

                      <p className="mb-2 text-[28px] font-bold leading-none tracking-[-0.02em] text-white">
                        {item.amount}
                      </p>

                      <p className="max-w-[390px] text-[14px] leading-[1.6] text-white/34">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex w-full lg:w-[518px] flex-col gap-5">
            {/* CARD 1 */}
            <div
              className="rounded-[20px] w-full min-h-[142px] px-[24.8px] py-[24.8px]"
              style={{
                background: "rgba(255,193,7,0.12)",
                border: "0.8px solid rgba(255,193,7,0.22)",
                boxShadow:
                  "0 14px 38px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.02)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="mb-4 text-[20px] font-semibold text-[#FFD54F]">
                Compromiso alineado con resultados
              </h3>

              <p className="text-[14px] leading-[1.9] text-white/42">
                El esquema de pago está diseñado para que tu desembolso siga al
                avance real del negocio. No pagas todo al inicio ni asumes el
                riesgo completo desde el día uno — pagas a medida que el negocio
                avanza.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="rounded-[24px] w-full border border-white/6 px-[30px] py-[28px]"
              style={{
                background: "rgba(26,79,158,0.14)",
                boxShadow:
                  "0 14px 38px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.025)",
              }}
            >
              <h3 className="mb-4 text-[20px] font-semibold text-white">
                Qué no está incluido
              </h3>

              <p className="text-[14px] leading-[1.9] text-white/42">
                Los costos de constitución legal (tasas de Cámara de Comercio,
                notaría), el capital de trabajo del negocio y los gastos
                operativos iniciales. Estos montos varían por tipo de negocio y
                Colraices los proyecta con precisión en la Fase 1.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="rounded-[24px] w-full border border-white/6 px-[30px] py-[28px]"
              style={{
                background: "rgba(26,79,158,0.14)",
                boxShadow:
                  "0 14px 38px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.025)",
              }}
            >
              <h3 className="mb-4 text-[20px] font-semibold text-white">
                Duración total estimada
              </h3>

              <p className="mb-6 text-[14px] leading-[1.9] text-white/42">
                El servicio dura 16 meses desde el inicio hasta el cierre del
                primer año de operación.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-[#FFC107]/20 bg-[#FFC107]/18 px-4 py-2 text-[12px] font-semibold text-[#FFD54F]">
                  F1: 2 meses
                </div>

                <span className="text-[14px] text-white/30">→</span>

                <div className="rounded-full border border-[#FFC107]/20 bg-[#FFC107]/18 px-4 py-2 text-[12px] font-semibold text-[#FFD54F]">
                  F2: 2 meses
                </div>

                <span className="text-[14px] text-white/30">→</span>

                <div className="rounded-full border border-[#1A4F9E]/30 bg-[#1A4F9E]/35 px-4 py-2 text-[12px] font-semibold text-[#93C5FD]">
                  F3: 12 meses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}