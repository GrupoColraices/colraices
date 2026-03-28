import Link from "next/link";

export default function QuizSection() {
  return (
    <section className="bg-brand-gold-pale py-8">
      <div className="max-w-[1416px] mx-auto px-6 lg:px-[156px] flex justify-between items-center flex-col lg:flex-row gap-6">
        
        <div>
          <h2 className="text-brand-dark text-xl font-semibold italic">
            ¿Qué necesitas hoy?
          </h2>
          <p className="text-sm text-brand-slate-text">
            Cuéntanos dónde estás y qué tienes en mente.
          </p>
        </div>

        <Link href="/camino" className="px-6 py-2 rounded-full bg-white">
          Ver mi camino →
        </Link>
      </div>
    </section>
  );
}