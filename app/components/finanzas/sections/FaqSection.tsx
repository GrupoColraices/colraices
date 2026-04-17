'use client';
 
import React, { useState } from 'react';
 
type FaqItem = {
  question: string;
  answer: string;
};
 
const faqItems: FaqItem[] = [
  {
    question: '¿Tengo que viajar a Colombia para contratar alguno de estos servicios?',
    answer:
      'No. Todo el proceso es 100% remoto. Desde la contratación hasta la entrega final, gestionamos todo desde Colombia por ti.',
  },
  {
    question: '¿Puedo contratar varios productos a la vez?',
    answer:
      'Sí. Muchos clientes empiezan con Brújula Financiera o Buena Data, y luego avanzan a Brújula Crediticia o Monetización. Puedes armar tu propio camino.',
  },
  {
    question: '¿Cómo funciona el pago?',
    answer:
      'El pago depende del servicio elegido. Te explicamos costos y pasos desde el inicio, sin cargos ocultos, para que tomes una decisión con claridad.',
  },
  {
    question: '¿Qué pasa si no califico para crédito después de la Brújula Crediticia?',
    answer:
      'Si no calificas aún, te damos un plan de acción con recomendaciones concretas para mejorar tu perfil y volver a intentarlo con más probabilidad de aprobación.',
  },
  {
    question: '¿Colraices es un banco o una entidad financiera?',
    answer:
      'No. Somos una empresa de acompañamiento y estrategia financiera. Te guiamos durante el proceso con aliados según tu necesidad.',
  },
  {
    question: '¿Cuánto tiempo toma cada servicio?',
    answer:
      'Depende del producto: Brújula Financiera y Crediticia toman 3 días. Buena Data entre 30 y 90 días. Monetización y créditos dependen del monto y del banco, pero siempre te damos tiempos claros al inicio.',
  },
];
 
export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
 
  const toggleItem = (index: number) => {
    setOpenIndexes((currentOpenIndexes) =>
      currentOpenIndexes.includes(index)
        ? currentOpenIndexes.filter((openIndex) => openIndex !== index)
        : [...currentOpenIndexes, index],
    );
  };
 
  return (
    <section className="faq-section">
      <style>{`
        /* ════════════════════════════════════════
           BASE — valores originales 100% intactos
           ════════════════════════════════════════ */
 
        .faq-section {
          width: 100%;
          background-color: #fbf8f3;
          padding: 88px 96px;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
        }
 
        .faq-content {
          width: 100%;
          max-width: 1180px;
          display: grid;
          grid-template-columns: minmax(0, 612px) 320px;
          gap: 72px;
          align-items: start;
        }
 
        .faq-eyebrow {
          margin: 0;
          color: #ffc107;
          font-size: 20px;
          line-height: 30px;
          font-style: italic;
          font-weight: 700;
          font-family: Montserrat, sans-serif;
        }
 
        .faq-title {
          margin: 0;
          color: #0f2d5c;
          font-size: 35.86px;
          line-height: 43px;
          font-weight: 600;
          font-family: Montserrat, sans-serif;
        }
 
        .faq-list {
          margin-top: 52px;
        }
 
        .faq-item {
          border-bottom: 0.8px solid rgba(15, 45, 92, 0.1);
        }
 
        .faq-item-header {
          width: 100%;
          min-height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 0;
          background-color: transparent;
          cursor: pointer;
          padding: 0;
          text-align: left;
        }
 
        .faq-question {
          color: #0f2d5c;
          font-size: 15.2px;
          line-height: 21.3px;
          font-weight: 500;
          font-family: Montserrat, sans-serif;
          padding-right: 12px;
        }
 
        .faq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 13px;
          border: 0.8px solid rgba(15, 45, 92, 0.1);
          color: #0f2d5c;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13.6px;
          line-height: 20.4px;
          font-weight: 400;
          font-family: Montserrat, sans-serif;
          background-color: #fbf8f3;
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
 
        .faq-item-header:hover .faq-icon {
          background-color: #ffc107;
          color: #ffffff;
          border-color: #ffc107;
        }
 
        .faq-icon-open {
          background-color: #ffc107;
          border-color: #ffc107;
          color: #ffffff;
        }
 
        .faq-answer-wrap {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(-4px);
          transition: max-height 0.28s ease, opacity 0.22s ease, transform 0.22s ease;
        }
 
        .faq-answer-wrap-open {
          max-height: 180px;
          opacity: 1;
          transform: translateY(0);
          padding: 0 0 18px;
        }
 
        .faq-answer {
          margin: 0;
          color: #475569;
          font-size: 13.12px;
          line-height: 21px;
          font-weight: 400;
          font-family: Montserrat, sans-serif;
          max-width: 612px;
        }
 
        .faq-card {
          width: 320px;
          min-height: 507.81px;
          border-radius: 20px;
          border: 0.8px solid #e2e8f0;
          background-color: #fbf8f3;
          padding: 146.66px 28.8px 20px;
          box-sizing: border-box;
          text-align: center;
        }
 
        .faq-card-title {
          margin: 0;
          color: #0f2d5c;
          font-size: 16px;
          line-height: 21.6px;
          font-weight: 600;
          font-family: Montserrat, sans-serif;
        }
 
        .faq-card-text {
          margin: 28px 0 18px;
          color: #475569;
          font-size: 13.12px;
          line-height: 21px;
          font-weight: 400;
          font-family: Montserrat, sans-serif;
        }
 
        .faq-card-button {
          width: 262.4px;
          height: 45px;
          border-radius: 100px;
          border: 0;
          background-color: #0f2d5c;
          color: #ffffff;
          font-size: 14px;
          line-height: 21px;
          font-weight: 600;
          font-family: Montserrat, sans-serif;
          box-shadow: 0 8px 16px rgba(15, 45, 92, 0.14);
          cursor: pointer;
          transform: translateY(0);
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
 
        .faq-card-button:hover {
          background-color: #163d79;
          transform: translateY(-2px);
          box-shadow: 0 12px 20px rgba(15, 45, 92, 0.2);
        }
 
        .faq-card-note {
          margin: 20px 0 0;
          color: #94a3b8;
          font-size: 11.52px;
          line-height: 17.3px;
          font-weight: 400;
          font-family: Montserrat, sans-serif;
        }
 
        /* ════════════════════════════════════════
           TABLET ≤ 1024px
           Ajusta padding y gap; la grid mantiene
           2 columnas pero más compactas
           ════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .faq-section {
            padding: 88px 48px;
          }
          .faq-content {
            grid-template-columns: 1fr 280px;
            gap: 48px;
          }
          .faq-card {
            width: 100%;
            min-height: auto;
            padding: 48px 28px 28px;
          }
          .faq-card-button {
            width: 100%;
          }
        }
 
        /* ════════════════════════════════════════
           MÓVIL ≤ 768px
           Una sola columna; la card cae debajo
           ════════════════════════════════════════ */
        @media (max-width: 768px) {
          .faq-section {
            padding: 56px 20px;
          }
          .faq-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .faq-card {
            width: 100%;
            min-height: auto;
            padding: 40px 24px 28px;
          }
          .faq-card-button {
            width: 100%;
          }
        }
 
        /* ════════════════════════════════════════
           MÓVIL PEQUEÑO ≤ 400px
           Solo reduce padding lateral al mínimo
           ════════════════════════════════════════ */
        @media (max-width: 400px) {
          .faq-section {
            padding: 48px 16px;
          }
        }
      `}</style>
 
      <div className="faq-content">
        <div>
          <p className="faq-eyebrow">Preguntas frecuentes</p>
          <h2 className="faq-title">Todo lo que necesitas saber.</h2>
 
          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndexes.includes(index);
 
              return (
                <div key={item.question} className="faq-item">
                  <button
                    type="button"
                    className="faq-item-header"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className={`faq-icon ${isOpen ? 'faq-icon-open' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
 
                  <div
                    id={`faq-answer-${index}`}
                    className={`faq-answer-wrap ${isOpen ? 'faq-answer-wrap-open' : ''}`}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        <aside className="faq-card">
          <h3 className="faq-card-title">
            Habla directamente
            <br />
            con un asesor
          </h3>
          <p className="faq-card-text">
            Te ayudamos a entender qué producto
            <br />
            necesitas y cómo empezar. 100%
            <br />
            remoto. Sin compromiso.
          </p>
          <button type="button" className="faq-card-button">
            Agendar llamada
          </button>
          <p className="faq-card-note">Respuesta en menos de 24 horas</p>
        </aside>
      </div>
    </section>
  );
}