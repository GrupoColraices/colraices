"use client";

const leftCards = [
  {
    icon: "✓",
    title: "Claridad inmediata",
    text: "Sabes en 3 días si tienes que declarar, pagar predial, o si estás completamente en regla.",
  },
  {
    icon: "💰",
    title: "Cotización exacta",
    text: "No es una estimación vaga. Es el precio final por lo que realmente tienes pendiente — nada más.",
  },
  {
    icon: "🎯",
    title: "Sin compromiso",
    text: "El diagnóstico es gratis. Solo contratas el servicio si decides actuar.",
  },
];

const steps = [
  {
    number: "1",
    title: "Respondes unas preguntas simples",
    text: "Dónde vives, cuánto tiempo llevas fuera, si tienes inmuebles en Colombia, tus ingresos aproximados.",
  },
  {
    number: "2",
    title: "El sistema analiza tu situación",
    text: "Cruza tus respuestas con las reglas de la DIAN y determina si eres residente fiscal colombiano.",
  },
  {
    number: "3",
    title: "Recibes tu diagnóstico personalizado",
    text: "Te decimos qué tienes pendiente (si es que tienes algo), cuánto costaría resolverlo, y qué pasa si no actúas.",
  },
];

export default function FiscalDiagnosticSection() {
  return (
    <>
      <section className="fds-section">
        <div className="fds-container">
          {/* LEFT */}
          <div className="fds-left">
            <div className="fds-kicker-wrap">
              <span className="fds-kicker">EL CENTRO DEL SERVICIO</span>
            </div>

            <h2 className="fds-title">
              El diagnóstico <br />
              <span>que lo resuelve todo</span>
            </h2>

            <p className="fds-description">
              El 80% de los colombianos en el exterior no sabe si tiene
              obligaciones fiscales activas en Colombia. Este diagnóstico
              gratuito te lo aclara en minutos, para que sepas con certeza
              dónde estás y qué hacer si hay algo pendiente.
            </p>

            <div className="fds-card-list">
              {leftCards.map((card, index) => (
                <div key={index} className="fds-info-card">
                  <div className="fds-icon-box">{card.icon}</div>
                  <div className="fds-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="fds-right-card">
            <div className="fds-right-header">
              <p className="fds-header-mini">DIAGNÓSTICO FISCAL GRATUITO</p>
              <h3>Cómo funciona</h3>
              <p className="fds-header-sub">Sin costo · Sin compromisos</p>
              <div className="fds-header-circle"></div>
            </div>

            <div className="fds-steps-container">
              {steps.map((step, index) => (
                <div key={index} className="fds-step-item">
                  <div className="fds-step-number">{step.number}</div>
                  <div className="fds-step-text">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="fds-cta-section">
              <button className="fds-cta-button">
                Empezar el diagnóstico ahora
              </button>
              <p className="fds-cta-sub">
                Sin costo · Sin compromisos · 3 días
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fds-section {
          width: 100%;
          background: #091d3e;
          padding: 88px 0;
          min-height: 786.84px;
          position: relative;
          overflow: hidden;
        }

        .fds-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 52px 52px;
          pointer-events: none;
        }

        .fds-container {
          max-width: 1180px;
          height: 610.84px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 56px;
          position: relative;
          z-index: 2;
        }

        .fds-left {
          width: 510px;
          height: 610.84px;
          margin-left: 52px;
        }

        .fds-kicker-wrap {
          margin-bottom: 28.8px;
        }

        .fds-kicker {
          font-size: 11.2px;
          font-weight: 600;
          letter-spacing: 1.57px;
          color: #ffc107;
          line-height: 16.8px;
        }

        .fds-title {
          font-size: 35.86px;
          line-height: 43px;
          font-weight: 600;
          color: white;
          margin-bottom: 40px;
        }

        .fds-title span {
          color: #ffc107;
          font-style: italic;
        }

        .fds-description {
          width: 510px;
          font-size: 16.8px;
          line-height: 29.4px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 32px;
          font-weight: 300;
        }

        .fds-card-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 510px;
        }

        .fds-info-card {
          width: 510px;
          min-height: 102.14px;
          display: flex;
          gap: 14px;
          padding: 22px 18px 22px 22px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 0.8px solid rgba(255, 255, 255, 0.08);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
          cursor: pointer;
        }

        .fds-info-card:hover {
          transform: translateY(-6px);
          box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.22);
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.16);
        }

        .fds-icon-box {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border-radius: 6px;
          background: rgba(5, 150, 105, 0.18);
          border: 0.8px solid rgba(16, 185, 129, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15.2px;
          color: white;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .fds-info-card:hover .fds-icon-box {
          background: rgba(5, 150, 105, 0.28);
          border-color: rgba(16, 185, 129, 0.4);
          transform: scale(1.05);
        }

        .fds-card-content h3 {
          font-size: 14.08px;
          line-height: 21.1px;
          color: white;
          font-weight: 600;
          margin-bottom: 3px;
          transition: color 0.3s ease;
        }

        .fds-card-content p {
          font-size: 12.64px;
          line-height: 20.2px;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
        }

        .fds-info-card:hover .fds-card-content p {
          color: rgba(255, 255, 255, 0.72);
        }

        .fds-right-card {
          width: 510px;
          height: 516.1px;
          background: white;
          border-radius: 32px;
          overflow: hidden;
        }

        .fds-right-header {
          height: 116.06px;
          background: #ffc107;
          padding: 28px 24px 0 28px;
          position: relative;
        }

        .fds-header-circle {
          position: absolute;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          top: -35px;
          right: -35px;
        }

        .fds-header-mini {
          font-size: 10.4px;
          line-height: 15.6px;
          letter-spacing: 1.35px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
        }

        .fds-right-header h3 {
          font-size: 22.4px;
          line-height: 25.8px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .fds-header-sub {
          font-size: 12.48px;
          line-height: 18.7px;
          color: rgba(255, 255, 255, 0.65);
        }

        .fds-steps-container {
          width: 454px;
          padding: 24px 28px;
        }

        .fds-step-item {
          display: flex;
          gap: 14px;
          min-height: 81.05px;
          padding-bottom: 18px;
        }

        .fds-step-number {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: #ffc107;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
        }

        .fds-step-text h4 {
          font-size: 13.6px;
          line-height: 20.4px;
          color: #0f2d5c;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .fds-step-text p {
          font-size: 12.48px;
          line-height: 19.3px;
          color: #475569;
        }

        .fds-cta-section {
          padding: 0 28px;
          margin-top: 6px;
        }

        .fds-cta-button {
          width: 454px;
          height: 49.6px;
          border-radius: 100px;
          border: none;
          background: #0f2d5c;
          color: white;
          font-size: 14.4px;
          line-height: 21.6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .fds-cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(15, 45, 92, 0.22);
        }

        .fds-cta-sub {
          margin-top: 10px;
          font-size: 11.52px;
          line-height: 17.3px;
          color: #94a3b8;
          text-align: center;
        }

        @media (max-width: 1200px) {
          .fds-container {
            flex-direction: column;
            height: auto;
            align-items: center;
          }

          .fds-left {
            margin-left: 0;
          }

          .fds-left,
          .fds-right-card {
            width: 100%;
            max-width: 700px;
          }

          .fds-info-card,
          .fds-card-list,
          .fds-description,
          .fds-cta-button {
            width: 100%;
          }

          .fds-steps-container {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}