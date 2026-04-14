"use client";

import { useMemo, useState } from "react";

const cards = [
  {
    id: "nyc-cafe",
    city: "Nueva York",
    flag: "🇺🇸",
    type: "☕ CAFÉ DEL TOUR",
    date: "Sábado, 8 de febrero 2026 · 2:00 PM EST",
    title: "Café del Tour · Queens · Jackson Heights",
    desc: "Encuentra proyectos de Bogotá y Medellín en un espacio íntimo de tu barrio. Expertos de Colraices responden en persona.",
    tags: ["Vivienda nueva", "Crédito exterior"],
    warning: "⚠ Solo quedan 6 lugares",
    danger: true,
  },
  {
    id: "mia-show",
    city: "Miami",
    flag: "🇺🇸",
    type: "🏛️ MUESTRA INMOBILIARIA",
    date: "Sábado, 1 de marzo 2026 · 11:00 AM EST",
    title: "Muestra Inmobiliaria · Miami Beach Convention",
    desc: "El evento del Tour en Miami con proyectos de toda Colombia. Charla especial sobre retorno de inversión en arrendamiento turístico.",
    tags: ["Todo Colombia", "Inversión turística", "Gratuito"],
    warning: "Quedan 156 lugares disponibles",
  },
  {
    id: "fra-cafe",
    city: "Frankfurt",
    flag: "🇩🇪",
    type: "☕ CAFÉ DEL TOUR",
    date: "Domingo, 22 de febrero 2026 · 3:00 PM CET",
    title: "Café del Tour · Sachsenhausen · Centro colombiano",
    desc: "Proyectos de Bogotá para colombianos en Alemania. Sesión de preguntas reales con asesor de crédito para no residentes en Europa.",
    tags: ["Bogotá", "No residentes EU", "Gratuito"],
    warning: "⚠ Solo quedan 3 lugares",
    danger: true,
  },
  {
    id: "bar-cafe",
    city: "Barcelona",
    flag: "🇪🇸",
    type: "☕ CAFÉ DEL TOUR",
    date: "Viernes, 20 de febrero 2026 · 7:00 PM CET",
    title: "Café del Tour · Gracia · Espacio colombiano",
    desc: "Proyectos de Cartagena y Barranquilla en un formato de conversación sin presión. Aperitivos y expertos disponibles.",
    tags: ["Costa colombiana", "Invertir a distancia", "Gratuito"],
    warning: "Quedan 14 lugares",
  },
  {
    id: "lim-virtual",
    city: "Lima",
    flag: "🇵🇪",
    type: "💻 EVENTO VIRTUAL",
    date: "Miércoles, 12 de marzo 2026 · 6:00 PM PET",
    title: "Sesión Virtual · Compra desde el exterior",
    desc: "Clase práctica sobre inversión remota en Colombia para peruanos que quieren diversificar en vivienda y renta corta.",
    tags: ["Virtual", "Desde Perú", "Gratuito"],
    warning: "Quedan 42 lugares",
  },
  {
    id: "mad-show",
    city: "Madrid",
    flag: "🇪🇸",
    type: "🏛️ MUESTRA INMOBILIARIA",
    date: "Sábado, 28 de marzo 2026 · 10:30 AM CET",
    title: "Muestra Inmobiliaria · Chamberí",
    desc: "Proyectos premium en Bogotá, Medellín y Costa Caribe para inversionistas en España con asesoría de financiación.",
    tags: ["Premium", "Rentabilidad", "Cupos limitados"],
    warning: "⚠ Solo quedan 9 lugares",
    danger: true,
  },
];

// ✏️ CAMBIO 1: se eliminó "active: true" del primer item
const filters = [
  { label: "Todos los eventos", width: "w-[139.61px]" },
  { label: "☕ Cafés del Tour", width: "w-[137.5px]" },
  { label: "🏛️ Muestras Inmobiliarias", width: "w-[189.6px]" },
  { label: "💻 Virtuales", width: "w-[105.78px]" },
  { label: "EE.UU.", width: "w-[86.89px]" },
  { label: "España", width: "w-[89.72px]" },
  { label: "Alemania", width: "w-[104.75px]" },
  { label: "Perú", width: "w-[74.54px]" },
];

const STEP = 342;

export default function ProximosEventos() {
  const [page, setPage] = useState(0);
  const [translateX, setTranslateX] = useState(-STEP);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animating, setAnimating] = useState(false);
  // ✏️ CAMBIO 2: nuevo estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState("Todos los eventos");

  const getCard = (index: number) =>
    cards[((index % cards.length) + cards.length) % cards.length];

  const visibleCards = useMemo(
    () => [
      getCard(page - 1),
      getCard(page),
      getCard(page + 1),
      getCard(page + 2),
      getCard(page + 3),
    ],
    [page]
  );

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setIsTransitioning(true);
    setTranslateX(-STEP * 2);

    setTimeout(() => {
      setIsTransitioning(false);
      setPage((prev) => (prev + 1) % cards.length);
      setTranslateX(-STEP);
      setTimeout(() => setAnimating(false), 20);
    }, 500);
  };

  const goPrev = () => {
    if (animating) return;
    setAnimating(true);
    setIsTransitioning(true);
    setTranslateX(0);

    setTimeout(() => {
      setIsTransitioning(false);
      setPage((prev) => (prev - 1 + cards.length) % cards.length);
      setTranslateX(-STEP);
      setTimeout(() => setAnimating(false), 20);
    }, 500);
  };

  return (
    <section className="flex w-full justify-center bg-[#FBF8F3] py-[80px]">
      <div className="w-[1180px] bg-[#FBF8F3] pb-[24px]">
        <div className="mx-auto h-[98.14px] w-[1108px] pt-0 text-center">
          <p className="text-[16px] font-normal leading-[24px] text-[#0A0A0A]">Próximos eventos</p>

          <h2 className="mt-0 text-[35.86px] font-bold leading-[39.4px] tracking-[0px]">
            <span className="text-[#FF6B35]">El Tour </span>
            <span className="text-[#0F2D5C]">llega a tu ciudad.</span>
          </h2>

          <div className="mt-[16px] flex h-[18.71px] w-[1108px] items-center justify-end gap-[6px] opacity-50">
            <span className="text-[12.48px] font-semibold leading-[18.7px] text-[#0F2D5C]">
              Ver calendario completo →
            </span>
          </div>
        </div>

        {/* ✏️ CAMBIO 3: div → button, activeFilter como condición, colores corregidos */}
        <div className="mx-auto mt-[56px] flex h-[31.75px] w-[1108px] gap-[6px]">
          {filters.map((item) => {
            const isActive = activeFilter === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveFilter(item.label)}
                className={`${item.width} flex h-[31.75px] items-center rounded-[100px] px-[14px] text-left text-[11.84px] font-semibold leading-[17.8px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#0F2D5C] text-white"
                    : "border border-[#D1D5DB] bg-white text-[#2A3F77]/60 hover:border-[#0F2D5C]/40 hover:text-[#0F2D5C]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto mt-[28px] w-[1108px]">
          <button
            onClick={goPrev}
            aria-label="Eventos anteriores"
            className="absolute left-[-44px] top-[236px] z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0F2D5C]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={goNext}
            aria-label="Siguientes eventos"
            className="absolute right-[-44px] top-[236px] z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0F2D5C]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mx-auto h-[520px] w-[1008px] overflow-hidden">
            <div
              className="flex h-[520px] gap-[18px]"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
              }}
            >
              {visibleCards.map((card, i) => (
                <article
                  key={`${card.id}-${i}`}
                  className="h-[520px] w-[324px] shrink-0 overflow-hidden rounded-[18px] border border-[#0F2D5C]/10 bg-white"
                >
                  <div className="h-[142.69px] w-full bg-gradient-to-r from-[#0B2548] to-[#1D4580] px-[24px] pt-[37.65px] text-white">
                    <p className="text-[9.6px] font-bold leading-[14.4px] tracking-[1.15px] text-[#FF6B35]">{card.type}</p>
                    <div className="mt-[14px] flex h-[32.4px] items-start gap-[6px]">
                      <span className="text-[14.4px] font-bold leading-[21.6px]">{card.flag}</span>
                      <h3 className="text-[21.6px] font-bold leading-[32.4px]">{card.city}</h3>
                    </div>
                    <p className="mt-[4px] text-[12.16px] font-normal leading-[18.2px] text-white/50">{card.date}</p>
                  </div>

                  <div className="flex h-[375.71px] flex-col px-[24px] pt-[20px]">
                    <h4 className="text-[14.4px] font-semibold leading-[21.6px] text-[#0F2D5C]">{card.title}</h4>
                    <p className="mt-[4px] text-[12.84px] font-normal leading-[19.3px] text-[#2A3F77]/75">{card.desc}</p>

                    <div className="mt-[16px] flex flex-wrap gap-[8px]">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[100px] border border-[#0F2D5C]/10 bg-[#FBF8F3] px-[10px] py-[4px] text-[10.4px] font-semibold leading-[15.6px] text-[#2A3F77]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="mt-[16px] h-[41.2px] w-[274px] self-center rounded-[10px] bg-[#0F2D5C] text-[12.8px] font-semibold leading-[19.2px] text-white">
                      Inscribirme
                    </button>

                    <p
                      className={`mt-auto pb-[24px] text-center text-[10.72px] font-semibold leading-[16.1px] ${
                        card.danger ? "text-[#E05470]" : "text-[#2A3F77]/65"
                      }`}
                    >
                      {card.warning}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-[24px] flex justify-center gap-[12px]">
            {cards.map((_, dot) => (
              <button
                key={dot}
                onClick={() => !animating && setPage(dot)}
                aria-label={`Ir a evento ${dot + 1}`}
                className={`h-[8px] w-[8px] rounded-full transition-colors ${
                  dot === page ? "bg-[#FFB800]" : "bg-[#C6CEDB]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}