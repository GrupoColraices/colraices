export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F2D5C] px-6 py-20 md:px-16">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-6 text-center">
        <div className="mb-1 text-5xl font-semibold leading-none text-white/20 md:text-6xl">"</div>

        <p className="w-full text-[1.6rem] font-normal italic leading-[1.45] tracking-[0.005em] text-white md:text-[1.75rem]">
          La escritura no espera. Tú no tienes que viajar. Colraices firma en tu nombre con un poder especial que solo aplica para ese acto — y se vence automáticamente al ejecutarse.
        </p>

        <div className="mt-[18px] text-xs font-medium uppercase tracking-[0.14em] text-[#94A3B8] md:tracking-[0.2em]">
          Representación Legal · Colraices
        </div>
      </div>
    </section>
  );
}