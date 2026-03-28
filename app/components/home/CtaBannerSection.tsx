import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="bg-brand-dark py-16 lg:py-20 text-center">
      <div className="max-w-[900px] mx-auto px-6">

        <h2 className="text-white text-3xl font-bold mb-4">
          ¿Listo para que tu remesa haga más?
        </h2>

        <p className="text-white/70 mb-8">
          Empieza con una conversación. Sin compromisos, sin enredos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contacto"
            className="px-6 py-3 rounded-full bg-brand-gold text-brand-blue font-semibold"
          >
            Habla con un asesor →
          </Link>

          <Link
            href="/servicios"
            className="px-6 py-3 rounded-full border border-white text-white"
          >
            Explora los servicios
          </Link>
        </div>

      </div>
    </section>
  );
}