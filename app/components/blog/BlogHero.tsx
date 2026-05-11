import { Search } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-68px)] w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#192440_0%,#2A3F77_60%,#3B5298_100%)] px-4 py-16 font-[Montserrat,system-ui,sans-serif] sm:px-6 sm:py-20 md:px-8 lg:px-10">
      {/* Grid con máscara radial: visible al centro, suave en esquinas */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.34] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(circle_at_center,black_0%,black_48%,transparent_88%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_0%,black_48%,transparent_88%)] sm:[background-size:56px_56px] lg:[background-size:64px_64px]" />

      {/* Difuminado circular claro del centro */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.055] blur-3xl sm:h-[680px] sm:w-[680px] lg:h-[780px] lg:w-[780px]" />

      {/* Viñeta suave para oscurecer bordes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(10,24,55,.22)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
        {/* Tag */}
        <div className="mb-10 inline-flex h-auto items-center justify-center gap-2 rounded-full border border-[#FFC107]/35 bg-[#FFC107]/10 px-4 py-2 text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-[#FFC107] sm:mb-12 sm:text-xs md:mb-14">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFC107] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFC107]" />
          </span>
          Blog Colraices
        </div>

        {/* Título */}
        <h1 className="mx-auto max-w-[980px] text-balance text-[clamp(2.15rem,7vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
          Resuelve tus dudas sobre{" "}
          <span className="text-[#FFC107]">
            inversión en Colombia desde el exterior
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto mt-6 max-w-[880px] text-pretty text-sm font-medium leading-relaxed text-white/70 sm:mt-7 sm:text-base md:mt-8">
          Entiende mejor tus opciones en Colombia: crédito, vivienda, migración,
          impuestos y decisiones patrimoniales.
        </p>

        {/* Buscador */}
        <form className="mt-10 flex w-full max-w-[600px] items-center rounded-xl border border-white/15 bg-white/10 p-2 shadow-[0_16px_48px_rgba(15,45,92,.14)] backdrop-blur-sm transition focus-within:border-[#FFC107]/50 focus-within:bg-white/[0.13] sm:mt-12">
          <input
            type="text"
            placeholder="Busca tu duda: crédito, Datacrédito, vivienda, impuestos..."
            className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm font-medium text-white outline-none placeholder:text-white/45 sm:h-12 sm:px-4"
          />

          <button
            type="submit"
            aria-label="Buscar"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFC107] text-[#192440] transition hover:bg-[#FFD54F] active:scale-95 sm:h-12 sm:w-12"
          >
            <Search size={22} strokeWidth={2.5} />
          </button>
        </form>
      </div>
    </section>
  );
}