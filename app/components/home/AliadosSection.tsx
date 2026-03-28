export default function AliadosSection() {
  const aliados = [
    "Davivienda",
    "Bolívar",
    "Colpatria",
    "Prodesa",
    "Camú",
    "Londoño Gómez",
  ];

  return (
    <section className="bg-white py-16 border-t">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] text-center">

        <h2 className="text-lg font-bold text-brand-gold mb-2">
          Aliados estratégicos
        </h2>

        <p className="text-gray-600 mb-10">
          Respaldo de las mejores constructoras y entidades financieras
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {aliados.map((a) => (
            <div
              key={a}
              className="border rounded-xl p-4 text-sm text-gray-500"
            >
              {a}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}