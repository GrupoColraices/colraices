export default function ServicesSection() 
{
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-[80px]">

      <div className="w-full max-w-[1416px] mx-auto px-6 md:px-[156px]">

        {/* HEADER */}
        <div className="text-center max-w-[900px] mx-auto mb-12">

          <p className="text-[#FFC107] text-[14px] italic mb-3">
            Nuestros servicios
          </p>

          <h2 className="text-[#0F2D5C] text-[28px] md:text-[40px] font-semibold leading-[1.2] mb-4">
            Todo lo que necesitas, en un solo ecosistema.
          </h2>

          <p className="text-[#475569] text-[14px] md:text-[16px]">
            No tienes que buscar en cinco lugares distintos ni explicarle tu historia a desconocidos cada vez. Aquí está todo.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-[16px] border border-[#E2E8F0] p-6 flex flex-col justify-between">

            <div>
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-4">
                💰
              </div>

              <h3 className="text-[#0F2D5C] text-[18px] font-semibold mb-2">
                Finanzas inteligentes
              </h3>

              <p className="text-[#475569] text-[14px] leading-[22px] mb-4">
                Ponemos orden en tu historial, tu crédito y tu capacidad de inversión. Para que el dinero que trabajaste tanto no se quede quieto.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["Buena Data", "Brújula Financiera", "Brújula Crediticia", "Monetización", "Crédito"].map((tag) => (
                  <span key={tag} className="text-[12px] px-3 py-1 rounded-full border border-[#CBD5E1] text-[#1A4F9E] bg-[#F1F5F9]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a className="text-[#1A4F9E] font-medium text-[14px]">
              Ver servicios financieros →
            </a>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-[16px] border border-[#E2E8F0] p-6 flex flex-col justify-between">

            <div>
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-4">
                🏠
              </div>

              <h3 className="text-[#0F2D5C] text-[18px] font-semibold mb-2">
                Tu propiedad en Colombia
              </h3>

              <p className="text-[#475569] text-[14px] leading-[22px] mb-4">
                Encontramos el inmueble ideal para lo que tienes y lo que sueñas. Sin que tengas que viajar a resolver nada.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Brújula Inmobiliaria", "Llave inmobiliaria"].map((tag) => (
                  <span key={tag} className="text-[12px] px-3 py-1 rounded-full border border-[#CBD5E1] text-[#1A4F9E] bg-[#F1F5F9]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a className="text-[#1A4F9E] font-medium text-[14px]">
              Ver servicios inmobiliarios →
            </a>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-[16px] border border-[#E2E8F0] p-6 flex flex-col justify-between">

            <div>
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-4">
                ⚖️
              </div>

              <h3 className="text-[#0F2D5C] text-[18px] font-semibold mb-2">
                Trámites
              </h3>

              <p className="text-[#475569] text-[14px] leading-[22px] mb-4">
                Desde migrar ordenadamente hasta emprender en Colombia. Asesoría legal con gente que habla tu idioma.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Asesoría migratoria",
                  "Emprendimiento",
                  "Pensiones",
                  "Representación legal",
                  "Servicios fiscales",
                ].map((tag) => (
                  <span key={tag} className="text-[12px] px-3 py-1 rounded-full border border-[#CBD5E1] text-[#1A4F9E] bg-[#F1F5F9]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a className="text-[#1A4F9E] font-medium text-[14px]">
              Ver servicios legales →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}