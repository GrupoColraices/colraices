import Link from "next/link";

export default function TourSection() {
  return (
    <section className="bg-brand-cream py-16">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-brand-gold italic mb-2">
            Evento estrella
          </p>

          <h2 className="text-3xl font-bold mb-6">
            El tour de la Vivienda llega a tu país
          </h2>

          <p className="text-gray-600 mb-6">
            Conoce proyectos inmobiliarios en Colombia sin intermediarios.
          </p>

          <Link
            href="/tour"
            className="px-6 py-3 border border-brand-blue rounded-full"
          >
            Conocer más
          </Link>
        </div>

        <div className="bg-brand-dark text-white p-10 rounded-3xl text-center">
          <div className="text-5xl mb-4">🎪</div>
          <p>Galería del evento</p>
        </div>

      </div>
    </section>
  );
}