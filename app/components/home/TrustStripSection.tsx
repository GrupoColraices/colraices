export default function TrustStripSection() {
  const stats = [
    { value: "23 años", label: "acompañando colombianos en el exterior", highlight: true },
    { value: "+83.000", label: "colombianos atendidos en el mundo" },
    { value: "+11.000", label: "negocios concretados en Colombia" },
    { value: "+15", label: "A los que hemos llegado" },
  ];

  return (
    <section className="bg-brand-dark py-10">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.value}>
            <p className={`text-3xl font-bold ${stat.highlight ? "text-brand-gold" : "text-white"}`}>
              {stat.value}
            </p>
            <p className="text-white/60 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}