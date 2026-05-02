"use client";

import { useState } from "react";

const causas = [
  {
    icono: "💡",
    numero: "CAUSA 1",
    titulo: "Ideas sin validación real",
    descripcion:
      "El entusiasmo no reemplaza al análisis. Muchos negocios arrancan sin entender si el mercado los necesita, si el precio es viable o si ya existe competencia consolidada. Colraices valida la idea antes de comprometer un peso.",
  },
  {
    icono: "📄",
    numero: "CAUSA 2",
    titulo: "Negocios informales que no crecen",
    descripcion:
      "La informalidad bloquea el acceso a crédito, proveedores formales y mercados institucionales. También expone al dueño a riesgos legales y tributarios. Colraices acompaña la constitución legal desde el inicio.",
  },
  {
    icono: "🧩",
    numero: "CAUSA 3",
    titulo: "Ejecutores sin formación empresarial",
    descripcion:
      "El familiar puede tener toda la disposición del mundo, pero si no entiende costos, márgenes, flujo de caja ni manejo de clientes, el negocio no prospera. Colraices incluye formación práctica para quien opera.",
  },
  {
    icono: "📡",
    numero: "CAUSA 4",
    titulo: "Desconexión entre quien financia y quien ejecuta",
    descripcion:
      "El colombiano en el exterior no tiene visibilidad. El familiar toma decisiones sin rendir cuentas con estructura. Esa brecha destruye negocios y relaciones familiares. Colraices mantiene a ambas partes alineadas.",
  },
  {
    icono: "🚨",
    numero: "CAUSA 5",
    titulo: "Nadie acompaña después del arranque",
    descripcion:
      "El primer año es el más crítico. Las crisis de liquidez, los problemas con proveedores y los errores de precio ocurren en ese período. Sin un acompañante, muchos negocios cierran cuando todavía tenían posibilidades reales de funcionar.",
  },
];

export default function ProblemaDineroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? causas.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === causas.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const prev = activeIndex === 0 ? causas.length - 1 : activeIndex - 1;
    const next = activeIndex === causas.length - 1 ? 0 : activeIndex + 1;

    return {
      left: causas[prev],
      center: causas[activeIndex],
      right: causas[next],
    };
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="w-full bg-[#081D3F] relative overflow-hidden border-t-[2px] border-[#FFC107]">
      {/* Fondo cuadriculado */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto min-h-[913px] pt-[96px] pb-[96px] px-4 lg:px-0">
        {/* Header */}
        <div className="max-w-[1076px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-5 h-[2px] bg-[#FFC107]" />
            <span className="text-[#FFC107] uppercase tracking-[1.77px] text-[12px] md:text-[16px] font-semibold">
              Por qué fracasan los negocios familiares
            </span>
          </div>

          <h2 className="text-white font-bold text-[34px] md:text-[58px] leading-[1.15]">
            El problema no es el{" "}
            <span className="text-[#FFC107] italic">dinero</span>
          </h2>

          <p className="mt-5 text-white/60 max-w-[640px] mx-auto text-[15px] md:text-[16.32px] leading-[28px]">
            Los recursos enviados desde el exterior se diluyen por cinco razones
            concretas. Asesoría de Emprendimiento responde a cada una.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-[70px] max-w-[1076px] mx-auto h-[430px] flex items-center justify-center">
          {/* Flecha izquierda */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 w-[38px] h-[38px] rounded-full border border-[#FFC107] text-[#FFC107] flex items-center justify-center hover:bg-[#FFC107]/10 transition"
          >
            ←
          </button>

          {/* Cards */}
          <div className="relative w-full flex items-center justify-center">
            {/* Left */}
            <div className="hidden md:block absolute left-[110px] w-[260px] h-[332px] opacity-40 scale-95 transition-all duration-500">
              <Card causa={visibleCards.left} />
            </div>

            {/* Center */}
            <div className="relative z-10 w-[274px] h-[370px] scale-100 transition-all duration-500">
              <Card causa={visibleCards.center} featured />
            </div>

            {/* Right */}
            <div className="hidden md:block absolute right-[110px] w-[260px] h-[332px] opacity-40 scale-95 transition-all duration-500">
              <Card causa={visibleCards.right} />
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 w-[38px] h-[38px] rounded-full border border-[#FFC107] text-[#FFC107] flex items-center justify-center hover:bg-[#FFC107]/10 transition"
          >
            →
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-10">
          {causas.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-[8px] rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-[18px] bg-[#FFD54F]"
                  : "w-[8px] bg-[#FFC107]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  causa,
  featured = false,
}: {
  causa: (typeof causas)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`
        group
        relative
        w-full h-full
        rounded-[20px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-[2px]
        px-6 py-6
        overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-3
        hover:border-[#FFC107]/40
        hover:bg-white/[0.07]
        hover:shadow-[0_14px_35px_rgba(0,0,0,0.35)]
        ${featured ? "shadow-[0_0_0_1px_rgba(255,255,255,0.07)]" : ""}
      `}
    >
      {/* Línea base */}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FFC107]/25" />

      {/* ✅ Línea animada corregida: entra izq→der, sale der→izq */}
      <span
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[2px]
          bg-[#FFC107]
          transform
          scale-x-0
          origin-left
          transition-all
          duration-500
          ease-out
          group-hover:scale-x-100
        "
      />

      {/* Contenido */}
      <div className="relative z-10">
        <div className="text-[25px] mb-4 transition-transform duration-300 group-hover:scale-105">
          {causa.icono}
        </div>

        <p className="text-[#FFC107]/70 uppercase font-semibold tracking-[1.19px] text-[10px] mb-3">
          {causa.numero}
        </p>

        <h3
          className={`text-white font-semibold leading-[1.4] mb-4 transition-colors duration-300 ${
            featured ? "text-[15.5px]" : "text-[14px]"
          } group-hover:text-white`}
        >
          {causa.titulo}
        </h3>

        <p
          className={`text-white/48 leading-[1.65] transition-colors duration-300 ${
            featured ? "text-[13.2px]" : "text-[12px]"
          } group-hover:text-white/60`}
        >
          {causa.descripcion}
        </p>
      </div>
    </div>
  );
}