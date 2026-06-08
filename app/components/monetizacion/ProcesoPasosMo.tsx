"use client";

import { useState } from "react";

const pasos = [
  {
    numero: 1,
    titulo: "Consulta inicial",
    descripcion:
      "Agendas una llamada o videollamada con tu asesor. Define monto, origen, destino y fecha tentativa.",
    estado: "",
  },
  {
    numero: 2,
    titulo: "Cotización y tasa",
    descripcion:
      "Recibes una cotización formal con la tasa de cambio negociada, costo del servicio (1%) y tiempos estimados.",
    estado: "",
  },
  {
    numero: 3,
    titulo: "Documentación",
    descripcion:
      "Envías los documentos requeridos: identificación, certificación bancaria y origen de fondos.",
    estado: "",
  },
  {
    numero: 4,
    titulo: "Confirmación",
    descripcion:
      "Colraices valida la documentación y confirma la tasa bloqueada. Estás listo para transferir.",
    estado: "Tasa fijada",
    estadoColor: "text-[#DC2626]",
    estadoBg: "bg-[#FEF2F2]",
  },
  {
    numero: 5,
    titulo: "Transferencia",
    descripcion:
      "Realizas la transferencia desde tu banco en el exterior a la cuenta indicada por Colraices.",
    estado: "",
  },
  {
    numero: 6,
    titulo: "Recepción y cambio",
    descripcion:
      "Colraices recibe los fondos, ejecuta el cambio de divisa en mesa de dinero y prepara el giro a Colombia.",
    estado: "",
  },
  {
    numero: 7,
    titulo: "Legalización",
    descripcion:
      "Se radican los formularios ante el Banco de la República y se obtiene la declaración de cambio legalizada.",
    estado: "",
  },
  {
    numero: 8,
    titulo: "Entrega en Colombia",
    descripcion:
      "Los fondos llegan a la cuenta de destino en Colombia. Recibes confirmación y certificado de legalización.",
    estado: "Finalizado",
    estadoColor: "text-[#DC2626]",
    estadoBg: "bg-[#FEF2F2]",
    activo: true,
  },
];

export default function ProcesoPasosMo()

{
  const [pagina, setPagina] = useState(0);

  const pasosPorVista = 4;
  const totalPaginas = Math.ceil(pasos.length / pasosPorVista);

  const pasosVisibles = pasos.slice(
    pagina * pasosPorVista,
    pagina * pasosPorVista + pasosPorVista
  );

  const siguiente = () => {
    setPagina((prev) => (prev + 1) % totalPaginas);
  };

  const anterior = () => {
    setPagina((prev) => (prev - 1 + totalPaginas) % totalPaginas);
  };

  return (
    <section className="w-full flex justify-center bg-[#FBF8F3]">
      <div className="w-full max-w-[1180px] px-[48px] pt-[88px] pb-0 flex flex-col gap-[48px]">
        
        {/* HEADER */}
        <div className="w-full flex flex-col items-center">
          <p className="text-[20px] leading-[24px] font-normal text-[#0A0A0A] text-center">
            Cómo funciona
          </p>

          <h2 className="text-center text-[#0F2D5C] font-semibold text-[35.86px] leading-[43px] mt-0">
            Un proceso claro y estructurado en 8 pasos.
          </h2>
        </div>

        {/* SLIDER */}
        <div className="w-full flex flex-col gap-[32px]">
          
          {/* PASOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full min-h-[195px]">
            {pasosVisibles.map((paso) => (
              <div
                key={paso.numero}
                className="w-full max-w-[271px] flex flex-col"
              >
                {/* Número */}
                <div
                className={`w-[54px] h-[54px] rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                    paso.activo
                    ? "bg-[#059669] text-white border-[#059669] hover:bg-[#F4B400] hover:border-[#F4B400]"
                    : "bg-white text-[#0F2D5C] border-[#0F2D5C]/10 hover:bg-[#F4B400] hover:text-white hover:border-[#F4B400]"
                }`}
                >
                <span className="font-bold text-[18.4px] leading-[27.6px]">
                    {paso.numero}
                </span>
                </div>

                {/* Título */}
                <h3 className="mt-[18px] text-[#0F2D5C] font-semibold text-[15.2px] leading-[22.8px]">
                  {paso.titulo}
                </h3>

                {/* Descripción */}
                <p className="mt-[6px] text-[#475569] text-[15px] leading-[21px] font-normal">
                  {paso.descripcion}
                </p>

                {/* Estado opcional */}
                {paso.estado && (
                <span
                    className={`mt-[12px] inline-flex w-fit items-center justify-center px-[10px] py-[4px] rounded-[6px] text-[14px] font-semibold leading-[20px] ${paso.estadoColor} ${paso.estadoBg}`}
                >
                    {paso.estado}
                </span>
                )}
              </div>
            ))}
          </div>

          {/* BOTONES */}
          <div className="w-full flex justify-center gap-4">
            <button
              onClick={anterior}
              className="h-[48px] px-8 rounded-[8px] bg-[#2A3F77] text-white font-semibold text-[16px] leading-[24px] hover:opacity-90 transition"
            >
              ← Anterior
            </button>

            <button
              onClick={siguiente}
              className="h-[48px] px-8 rounded-[8px] bg-[#2A3F77] text-white font-semibold text-[16px] leading-[24px] hover:opacity-90 transition"
            >
              Siguiente →
            </button>
          </div>
        </div>

        {/* ESPACIO FINAL ANTES DE SIGUIENTE SECCIÓN */}
        <div className="h-[88px]" />
      </div>
    </section>
  );
}