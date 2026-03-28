export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] text-center">

        <h2 className="text-2xl font-bold mb-10">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1,2,3].map((i) => (
            <div key={i} className="p-6 border rounded-xl">
              <p className="italic mb-4">
                Excelente servicio, totalmente recomendado.
              </p>
              <strong>Cliente {i}</strong>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}