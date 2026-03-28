import Link from "next/link";

export default function CreditSection() {
  return (
    <section className="bg-brand-blue py-16 lg:py-24">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-brand-gold text-sm uppercase mb-3">
            Crédito hipotecario
          </p>

          <h2 className="text-white text-3xl font-bold mb-6">
            ¿Tienes ingresos en el exterior?
          </h2>

          <p className="text-white/70 mb-8">
            Accede a crédito para vivienda o libre inversión desde cualquier país.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href="/credito" className="px-5 py-2 rounded-full bg-white/10 text-white">
              Crédito vivienda
            </Link>

            <Link href="/contacto" className="px-5 py-2 rounded-full bg-brand-gold text-brand-blue">
              Contacto
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl">
          <h3 className="font-semibold mb-4">Viabilidad de crédito</h3>

          <p className="text-3xl font-bold">$___.____</p>
          <p className="text-sm text-gray-500 mb-6">COP</p>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Plazo</span>
              <span>__ años</span>
            </div>
            <div className="flex justify-between">
              <span>Tasa</span>
              <span>__ %</span>
            </div>
          </div>

          <Link
            href="/contacto"
            className="block mt-6 text-center bg-brand-dark text-white py-3 rounded-full"
          >
            Verificar →
          </Link>
        </div>

      </div>
    </section>
  );
}