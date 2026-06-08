"use client";

const servicios = [
  {
    icono: "📋",
    numero: "1",
    titulo: "Asesoría personalizada inicial",
    descripcion:
      "Análisis de tu situación y definición del mejor canal de transferencia según origen, destino y monto.",
    puntos: [
      "Revisión de la fuente de fondos",
      "Orientación sobre documentación necesaria",
      "Claridad sobre tiempos y proceso",
    ],
  },
  {
    icono: "📈",
    numero: "2",
    titulo: "Negociación en mesa de dinero",
    descripcion:
      "Colraices negocia directamente con entidades financieras colombianas para obtener la mejor tasa de cambio disponible.",
    puntos: [
      "Mejores tasas que las ofrecidas en ventanilla",
      "Transparencia total sobre el diferencial aplicado",
      "Tasa acordada y bloqueada antes de proceder",
    ],
  },
  {
    icono: "🔐",
    numero: "3",
    titulo: "Legalización ante el Banco de la República",
    descripcion:
      "Gestión completa de la declaración de cambio internacional (Formulario 4) y registro ante el Banco de la República.",
    puntos: [
      "Preparación y radicación del Formulario 4",
      "Seguimiento a la aprobación del trámite",
      "Certificación de legalización de divisas",
    ],
  },
  {
    icono: "🤝",
    numero: "4",
    titulo: "Acompañamiento en todo el proceso",
    descripcion:
      "Comunicación constante durante cada etapa para que siempre sepas dónde está tu dinero y qué sigue.",
    puntos: [
      "Coordinación con el banco emisor y receptor",
      "Notificaciones en tiempo real de cada paso",
      "Soporte directo con tu asesor asignado",
    ],
  },
];

export default function ServicioMo() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1180px] px-12 pt-[88px] pb-[88px] flex flex-col gap-12">

        {/* HEADER */}
        <div className="w-full flex flex-col items-center text-center">
          <p className="text-[20px] leading-6 font-normal text-[#0A0A0A]">
            Qué incluye el servicio
          </p>

          <div className="mt-0">
            <h2 className="text-[#0F2D5C] text-[35.86px] leading-[43px] font-bold italic tracking-[-1px]">
              Todo lo necesario para que tu dinero llegue
            </h2>
            <h3 className="text-[#0F2D5C] text-[35.86px] leading-[43px] font-light italic tracking-[-1px]">
              seguro, rápido y correctamente legalizado.
            </h3>
          </div>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="relative w-full min-h-[275.88px] rounded-[20px] border border-[#0F2D5C]/10 bg-white p-[28.8px] flex flex-col transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:border-[#D1D5DB]"
            >
              {/* Número decorativo */}
              <span className="absolute top-4 right-5 text-[52px] font-semibold text-[#0F2D5C]/4 select-none">
                {servicio.numero}
              </span>

              {/* Ícono */}
              <div className="text-[26px] leading-[39px] text-[#0A0A0A]">
                {servicio.icono}
              </div>

              {/* Título */}
              <h3 className="mt-[14px] text-[16px] leading-6 font-semibold text-[#0F2D5C]">
                {servicio.titulo}
              </h3>

              {/* Descripción */}
              <p className="mt-2 text-[14px] leading-[23.1px] text-[#475569]">
                {servicio.descripcion}
              </p>

              {/* Lista */}
              <div className="mt-[18px] flex flex-col gap-[6px]">
                {servicio.puntos.map((punto, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-[13.12px] leading-[19px] text-[#475569]"
                  >
                    <span className="text-[#FFC107] mt-[2px]">•</span>
                    <span>{punto}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ALERTA FINAL */}
        <div className="w-full rounded-[14px] bg-[#FEF2F2] border border-[#DC2626]/12 px-[26.8px] py-[24.8px] flex items-start gap-4">
          {/* Icono */}
          <div className="text-[20px] leading-[30px] text-[#0A0A0A]">
            ⚠️
          </div>

          {/* Contenido */}
          <div className="flex flex-col gap-[6px]">
            <h4 className="text-[14.08px] leading-[21.1px] font-bold text-[#DC2626]">
              Monetización NO incluye asesoría fiscal o tributaria
            </h4>

            <p className="text-[14px] leading-[23.1px] text-[#475569] max-w-[988px]">
              Este servicio se centra exclusivamente en la transferencia y
              legalización de divisas. Si necesitas asesoría sobre el
              tratamiento tributario de los fondos en Colombia (impuesto de
              renta, declaraciones, etc.), deberás consultar con un contador o
              asesor tributario independiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}