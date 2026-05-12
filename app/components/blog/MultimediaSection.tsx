type VideoItem = {
  category: string;
  title: string;
  duration: string;
  emoji: string;
  gradient: string;
};

const videos: VideoItem[] = [
  {
    category: "Crédito y finanzas",
    title: "Cómo mejorar tu historial crediticio desde el exterior",
    duration: "4:32",
    emoji: "📊",
    gradient: "from-[#162039] to-[#3A5EA8]",
  },
  {
    category: "Inversión inmobiliaria",
    title: "Invertir en Colombia desde el exterior",
    duration: "6:15",
    emoji: "🏡",
    gradient: "from-[#0F2A1D] to-[#2A7A50]",
  },
  {
    category: "Legal y fiscal",
    title: "Impuestos para colombianos en el exterior",
    duration: "5:48",
    emoji: "💼",
    gradient: "from-[#2A1535] to-[#7A3A90]",
  },
  {
    category: "Migración",
    title: "Opciones de visa para invertir en Colombia",
    duration: "3:50",
    emoji: "✈️",
    gradient: "from-[#2A1800] to-[#C85C00]",
  },
];

export default function MultimediaSection() {
  return (
    <section id="videos" className="bg-[#F8F9FB] py-[88px]">
      <div className="mx-auto max-w-[1104px] px-6">
        <div className="mx-auto mb-[52px] max-w-[760px] text-center">
          <h2 className="font-['Montserrat'] text-[34px] font-extrabold leading-[40.8px] tracking-[-0.5px] text-[#192440]">
            Contenido Multimedia
          </h2>

          <p className="mt-[22px] font-['Montserrat'] text-[15px] font-normal leading-[22.5px] tracking-[0px] text-[#4B5563]">
            Videos cortos sobre crédito, vivienda, impuestos, migración y
            procesos desde el exterior.
          </p>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4 lg:pb-0">
          {videos.map((video) => (
            <article
              key={video.title}
              className="group w-[261px] shrink-0 overflow-hidden rounded-[14px] bg-white shadow-[0_8px_28px_rgba(15,45,92,0.08)] transition-all duration-300 ease-out hover:-translate-y-[8px] hover:shadow-[0_18px_42px_rgba(15,45,92,0.18)] md:w-full"
            >
              <div
                className={`relative h-[150px] overflow-hidden bg-gradient-to-br ${video.gradient}`}
              >
                <span className="absolute bottom-[18px] right-[32px] text-[52px] leading-none opacity-[0.18]">
                  {video.emoji}
                </span>

                <button
                  type="button"
                  aria-label={`Reproducir video: ${video.title}`}
                  className="absolute left-1/2 top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#192440] shadow-[0_10px_22px_rgba(0,0,0,0.24)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#FFC107] group-hover:text-[#192440]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="ml-[2px] h-[17px] w-[17px] fill-current"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </button>

                <span className="absolute bottom-[8px] left-[10px] rounded-[4px] bg-[#0A0A0A]/90 px-[7px] py-[3px] font-['Montserrat'] text-[10px] font-bold leading-none text-white">
                  {video.duration}
                </span>
              </div>

              <div className="h-[86px] px-[15px] pt-[13px]">
                <p className="mb-[8px] font-['Montserrat'] text-[10px] font-bold uppercase leading-[15px] tracking-[0.8px] text-[#2A3F77]">
                  {video.category}
                </p>

                <h4 className="font-['Montserrat'] text-[13px] font-bold leading-[18.2px] tracking-[0px] text-[#1A2340]">
                  {video.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}