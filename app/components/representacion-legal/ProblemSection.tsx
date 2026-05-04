export default function ProblemSection() {
  const options = [
    {
      icon: "👨‍👩‍👧",
      label: "OPCIÓN 1",
      title: "Pedirle el favor a un familiar",
      desc: "Tu familiar firma algo que no entiende completamente. Si hay una cláusula rara o un error en la escritura, no tiene cómo detectarlo ni sabe qué hacer.",
    },
    {
      icon: "🤝",
      label: "OPCIÓN 2",
      title: "Buscar un conocido de confianza",
      desc: "Mismo problema. La confianza personal no reemplaza el conocimiento jurídico. Y si algo sale mal, la responsabilidad es tuya.",
    },
    {
      icon: "⏳",
      label: "OPCIÓN 3",
      title: "Aplazar hasta poder viajar",
      desc: "Retrasar la escrituración puede costar el precio pactado, la financiación aprobada o directamente la operación. Las fechas en un cierre inmobiliario no son sugerencias.",
    },
  ];

  return (
    <section className="w-full bg-[#091D3E] py-[88px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[56px]">
        
        {/* LEFT CONTENT */}
        <div className="w-full max-w-[510px] flex flex-col items-center text-center">
        
        {/* EYEBROW */}
        <div className="mb-5 w-full flex justify-center">
            <span className="block text-[#F0B429] uppercase tracking-[1.57px] text-[16px] font-semibold leading-[16.8px] whitespace-nowrap">
            POR QUÉ EXISTE ESTE SERVICIO
            </span>
        </div>

        {/* TITLE */}
        <h2 className="mb-6 flex flex-col gap-[8px] items-center w-full">
            <span className="block text-white font-semibold text-[35.86px] leading-[43px] whitespace-nowrap tracking-[-0.03em]">
            Cuando no puedes viajar,
            </span>

            <span className="block text-[#F0B429] italic font-semibold text-[35.86px] leading-[43px] whitespace-nowrap tracking-[-0.03em]">
            las opciones se complican.
            </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-white/58 font-normal text-[15.2px] leading-[26.6px] max-w-[484px] text-center">
            Hasta ahora había tres caminos. Ninguno funciona bien cuando
            hay una fecha de escritura que no se puede mover.
        </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-[510px] flex flex-col gap-[14px]">
          
          {options.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-[20px] border border-white/[0.07] bg-white/[0.04] px-8 py-7 flex gap-5"
            >
              {/* ICON */}
              <div className="w-[32px] h-[32px] rounded-[8px] bg-[rgba(252,165,165,0.08)] border border-[rgba(252,165,165,0.12)] flex items-center justify-center text-[16px] flex-shrink-0 mt-1">
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <div className="text-[#FCA5A5] uppercase tracking-[1.09px] text-[9.92px] font-semibold leading-[14.9px] mb-1">
                  {item.label}
                </div>

                <h3 className="text-white font-semibold text-[14.08px] leading-[21.1px] mb-2">
                  {item.title}
                </h3>

                <p className="text-white/50 font-normal text-[12.64px] leading-[20.2px] max-w-[392px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* FINAL CARD */}
          <div className="w-full rounded-[20px] border border-[#F0B429]/20 bg-[#C9900C]/12 px-8 py-7 flex gap-5">
            
            {/* ICON */}
            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#16A34A]/18 border border-[#16A34A]/25 flex items-center justify-center text-[16px] flex-shrink-0 mt-1">
              ✅
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <div className="text-[#F0B429] uppercase tracking-[1.09px] text-[9.92px] font-semibold leading-[14.9px] mb-1">
                LA CUARTA OPCIÓN
              </div>

              <h3 className="text-white font-semibold text-[14.08px] leading-[21.1px] mb-2">
                Colraices firma en tu nombre
              </h3>

              <p className="text-white/50 font-normal text-[12.64px] leading-[20.2px] max-w-[392px]">
                Un profesional jurídico que revisa la escritura antes de firmar,
                entiende lo que está autorizando, y solo actúa dentro de lo que
                tú has aprobado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}