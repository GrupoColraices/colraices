import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px]">
        
        <h2 className="text-center text-2xl font-bold mb-10">
          Todo lo que necesitas, en un solo ecosistema.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold">Finanzas inteligentes</h3>
            <p className="text-sm mt-2">Organizamos tu dinero.</p>
            <Link href="/finanzas">Ver más →</Link>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold">Tu propiedad en Colombia</h3>
            <p className="text-sm mt-2">Compra sin viajar.</p>
            <Link href="/inmuebles">Ver más →</Link>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold">Trámites</h3>
            <p className="text-sm mt-2">Legal y migración.</p>
            <Link href="/legal">Ver más →</Link>
          </div>

        </div>
      </div>
    </section>
  );
}