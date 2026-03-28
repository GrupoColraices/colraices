import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="bg-brand-cream py-16">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px]">

        <h2 className="text-center text-xl font-bold mb-10">
          Aprende con nosotros
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1,2,3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Artículo {i}</h3>
              <p className="text-sm text-gray-500 mb-3">
                Contenido educativo
              </p>
              <Link href="/blog">Leer →</Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}