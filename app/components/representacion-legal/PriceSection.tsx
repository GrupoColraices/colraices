import React from "react";

const includedItems = [
  "Revisión jurídica de la escritura",
  "Guía para obtener y apostillar el poder",
  "Validación del poder antes de actuar",
  "Asistencia a la notaría el día pactado",
  "Confirmación y copia digital de la escritura",
  "Acompañamiento directo durante todo el proceso",
];

const excludedItems = [
  "Derechos notariales (los pagas directamente a la notaría)",
  "Costos de apostilla en tu país de residencia",
  "Envío físico del poder (si es requerido)",
];

const cities = ["Bogotá", "Medellín", "Cali", "Ibagué", "Armenia", "Cartagena", "Barranquilla"];

export default function PriceSection() {
  return (
    <section className="repl-section-pad relative overflow-hidden bg-[#091D3E] py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#1A4F9E]/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-4 lg:px-0">
        <div className="grid grid-cols-1 gap-10 rounded-none lg:grid-cols-[514px_514px] lg:gap-12">
          <article className="group h-fit rounded-[32px] border border-white/10 bg-[#0F2D5C]/95 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-baseline gap-2">
              <span className="bg-gradient-to-b from-white to-white/85 bg-clip-text text-[60.8px] font-bold leading-[60.8px] text-transparent">230</span>
              <span className="text-[17.6px] font-semibold leading-[26.4px] text-[#F0B429] transition-colors duration-300 group-hover:text-[#ffd166]">USD</span>
              <span className="text-[12.8px] leading-[19.2px] text-white/40">/ escritura</span>
            </div>

            <p className="mt-3 text-[13.12px] leading-[21.6px] text-white/55">
              Precio fijo por acto. <strong className="font-bold text-white/80">No depende del valor del inmueble ni de la complejidad del negocio.</strong>{" "}
              Una vez contratado, no hay cobros adicionales.
            </p>

            <div className="mt-4 space-y-2">
              {includedItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-[13.12px] leading-[19.7px] text-white/65 opacity-0 animate-[fadeIn_.5s_ease_forwards]"
                  style={{ animationDelay: `${120 + index * 70}ms` }}
                >
                  <span className="mt-[2px] text-[#FFC107]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[9.92px] font-semibold uppercase tracking-[1.19px] text-white/28">No incluye</p>

            <div className="mt-1.5 space-y-1.5">
              {excludedItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-[13.12px] leading-[19.7px] text-white/45">
                  <span>–</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="flex flex-col gap-4">
            <article className="rounded-[32px] border border-white/10 bg-white/[0.04] px-[22.8px] py-[18.8px] shadow-[0_16px_48px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
              <h3 className="text-[15.2px] font-semibold leading-[22.8px] text-white">Ciudades con cobertura</h3>
              <p className="mt-1 text-[12.48px] leading-[18.7px] text-white/40">Colraices tiene representantes en estas 7 ciudades</p>

              <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="flex h-[42px] items-center gap-2.5 rounded-[12px] border border-[#F0B429]/[0.16] bg-[#C9900C]/10 px-3 text-[13.28px] font-medium leading-[19.9px] text-white/75 transition-all duration-300 hover:border-[#FFC10780] hover:bg-white/[0.08]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#FFC107] shadow-[0_0_12px_rgba(255,193,7,0.8)]" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[20px] border border-white/10 bg-white/[0.03] px-[22.8px] py-[18.8px] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06]">
              <h4 className="text-[12.48px] font-semibold leading-[18.7px] text-white/40">¿Tu escritura es en otra ciudad?</h4>
              <p className="mt-1 text-[12.48px] leading-[19.3px] text-white/30">
                Contáctanos. Según el caso, podemos coordinar representación en otras ciudades principales de Colombia.
              </p>
            </article>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}