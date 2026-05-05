const features = [
  "9 componentes del servicio incluidos",
  "Monetización para arras incluida",
  "Sin límite de inmuebles analizados",
  "Sin límite de tiempo del servicio",
  "Respaldo jurídico completo",
  "Cierre hasta escrituración",
];

export default function BrujulaPrecioSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#091D3E] px-4 py-[96px] font-['Montserrat',system-ui,sans-serif] sm:px-6 lg:px-8 lg:py-[100px]">
      {/* Animaciones locales - sin styled-jsx */}
      <style>
        {`
          @keyframes biFadeUp {
            from {
              opacity: 0;
              transform: translateY(26px);
              filter: blur(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes biScaleIn {
            from {
              opacity: 0;
              transform: translateY(22px) scale(0.975);
              filter: blur(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes biGlowFloat {
            0%, 100% {
              transform: translate3d(-50%, 0, 0) scale(1);
              opacity: 0.75;
            }
            50% {
              transform: translate3d(-50%, 18px, 0) scale(1.05);
              opacity: 1;
            }
          }

          @keyframes biGoldFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.55;
            }
            50% {
              transform: translate3d(-24px, -18px, 0) scale(1.08);
              opacity: 0.85;
            }
          }

          @keyframes biBorderSweep {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateX(120%);
              opacity: 0;
            }
          }

          @keyframes biBadgePulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(240, 180, 41, 0.22);
            }
            50% {
              box-shadow: 0 0 0 8px rgba(240, 180, 41, 0);
            }
          }

          @keyframes biCheckPop {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes biSoftShine {
            from {
              transform: translateX(-130%) skewX(-18deg);
              opacity: 0;
            }
            20% {
              opacity: 0.35;
            }
            70% {
              opacity: 0.18;
            }
            to {
              transform: translateX(130%) skewX(-18deg);
              opacity: 0;
            }
          }

          .bi-anim-fade-up {
            opacity: 0;
            animation: biFadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .bi-anim-scale-in {
            opacity: 0;
            animation: biScaleIn 1000ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .bi-anim-check {
            opacity: 0;
            animation: biCheckPop 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .bi-anim-fade-up,
            .bi-anim-scale-in,
            .bi-anim-check {
              opacity: 1;
              animation: none;
              transform: none;
              filter: none;
            }
          }
        `}
      </style>

      {/* Fondo premium sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-40px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#1A4F9E]/10 blur-[120px] [animation:biGlowFloat_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#F0B429]/[0.045] blur-[120px] [animation:biGoldFloat_9s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(26,79,158,0.10),transparent_42%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1080px]">
        {/* Header */}
        <div className="text-center">
          <div className="bi-anim-fade-up inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-[#F0B429] [animation-delay:80ms]">
            INVERSIÓN
          </div>

          <h2 className="bi-anim-fade-up mt-[18px] text-[34px] font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-[40px] md:text-[42px] [animation-delay:170ms]">
            Precio único.{" "}
            <em className="font-bold italic text-[#F0B429]">
              Todo incluido.
            </em>
          </h2>
        </div>

        {/* Contenido */}
        <div className="mt-[58px] flex w-full flex-col gap-8">
          {/* Card principal */}
          <article className="bi-anim-scale-in group relative w-full overflow-hidden rounded-[28px] border border-[#C9900C]/45 bg-[#15243A] px-6 pb-[34px] pt-[36px] shadow-[0_24px_64px_rgba(0,0,0,0.10)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:border-[#F0B429]/55 hover:bg-[#172942] hover:shadow-[0_34px_90px_rgba(0,0,0,0.22)] sm:px-[40px] sm:pb-[38px] sm:pt-[38px] [animation-delay:300ms]">
            {/* Brillo que cruza la tarjeta */}
            <div className="pointer-events-none absolute inset-y-0 left-[-40%] w-[42%] bg-gradient-to-r from-transparent via-white/[0.075] to-transparent opacity-0 group-hover:[animation:biSoftShine_1300ms_cubic-bezier(0.16,1,0.3,1)_forwards]" />

            {/* Línea superior premium */}
            <div className="pointer-events-none absolute left-8 right-8 top-0 h-px overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-[#F0B429]/65 to-transparent [animation:biBorderSweep_4.8s_ease-in-out_infinite]" />
            </div>

            {/* Halo interno sutil */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_82%_16%,rgba(240,180,41,0.07),transparent_30%),radial-gradient(circle_at_16%_12%,rgba(26,79,158,0.16),transparent_34%)] opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Badge */}
            <div className="absolute right-[20px] top-[18px] z-10 rounded-full bg-[#C9900C] px-[16px] py-[7px] text-[10px] font-extrabold uppercase leading-none tracking-[0.22em] text-[#091D3E] [animation:biBadgePulse_2.8s_ease-in-out_infinite]">
              PRECIO ÚNICO
            </div>

            <div className="relative z-10 max-w-full pr-0 sm:pr-[170px]">
              <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#7085A3]">
                BRÚJULA INMOBILIARIA
              </div>

              <div className="mt-[12px] flex items-end leading-none">
                <span className="mb-[7px] text-[31px] font-extrabold tracking-[-0.04em] text-[#F0B429] sm:text-[32px]">
                  US$
                </span>
                <span className="ml-[3px] text-[58px] font-extrabold tracking-[-0.055em] text-white/70 transition-colors duration-500 group-hover:text-white/78 sm:text-[60px]">
                  380
                </span>
              </div>

              <p className="mt-[8px] text-[14px] font-medium leading-relaxed text-white/45 sm:text-[15px]">
                Pago único · Sin cuotas adicionales · 4 inmuebles - Durante 12
                meses
              </p>
            </div>

            <ul className="relative z-10 mt-[28px] grid grid-cols-1 gap-x-[88px] gap-y-[18px] md:grid-cols-2">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="bi-anim-check flex items-center gap-[10px] text-[14.5px] font-medium leading-[1.4] text-white/80 transition-all duration-500 ease-out group-hover:text-white/90 sm:text-[15px]"
                  style={{ animationDelay: `${460 + index * 90}ms` }}
                >
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border border-[#C9900C]/80 bg-[#C9900C]/10 text-[12px] font-bold leading-none text-[#F0B429] transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-[#F0B429] group-hover:bg-[#F0B429]/15">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Card contextual */}
          <article className="bi-anim-scale-in group relative w-full overflow-hidden rounded-[18px] border border-[#C9900C]/30 bg-[#142846]/55 px-6 py-[22px] shadow-[0_16px_45px_rgba(0,0,0,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[5px] hover:border-[#F0B429]/45 hover:bg-[#152B4A]/75 hover:shadow-[0_26px_70px_rgba(0,0,0,0.18)] sm:px-[22px] sm:py-[23px] [animation-delay:520ms]">
            <div className="pointer-events-none absolute inset-y-0 left-[-35%] w-[35%] bg-gradient-to-r from-transparent via-white/[0.055] to-transparent opacity-0 group-hover:[animation:biSoftShine_1200ms_cubic-bezier(0.16,1,0.3,1)_forwards]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(240,180,41,0.055),transparent_34%)] opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

            <h3 className="relative z-10 text-[15px] font-extrabold leading-none text-[#F0B429]">
              Un solo punto de contacto
            </h3>

            <p className="relative z-10 mt-[15px] text-[13.5px] font-medium leading-[1.65] text-white/45 transition-colors duration-500 group-hover:text-white/55 sm:text-[14px]">
              Colraices gestiona cada conversación: con el vendedor, el abogado,
              la notaría y la entidad bancaria. Tú solo necesitas hablar con
              nosotros.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}