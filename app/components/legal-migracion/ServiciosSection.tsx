import React from 'react';

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  priceLabel: string;
  priceValue: string;
};

const services: ServiceItem[] = [
  {
    icon: '🛂',
    title: 'Asesoría Migratoria',
    description:
      'Orientación completa para visas, cédulas de extranjería, permisos especiales y nacionalización. Te ayudamos a elegir la mejor ruta migratoria según tu caso.',
    priceLabel: 'Desde',
    priceValue: 'US$100',
  },
  {
    icon: '🏢',
    title: 'Asesoría en emprendimiento',
    description:
      'Creación de SAS, registros mercantiles, RUT, cuentas bancarias empresariales. Todo el proceso legal para emprender en Colombia desde el exterior.',
    priceLabel: 'Desde',
    priceValue: 'US$3.200',
  },
  {
    icon: '📊',
    title: 'Trámites de Pensiones',
    description:
      'Solicitud de pensión por vejez, invalidez o sobrevivientes. Asesoría en convenios internacionales y gestión ante fondos colombianos.',
    priceLabel: 'Desde',
    priceValue: 'US$370',
  },
  {
    icon: '💼',
    title: 'Representación Legal',
    description:
      'Poder notarial, representación en trámites administrativos, gestión de documentos. Actuamos en tu nombre ante entidades colombianas.',
    priceLabel: 'Desde',
    priceValue: 'US$230',
  },
  {
    icon: '📄',
    title: 'Servicios Fiscales',
    description:
      'Declaraciones de renta, planificación fiscal, cumplimiento tributario. Asesoría para optimizar tus impuestos y cumplir con las obligaciones legales.',
    priceLabel: '',
    priceValue: 'Inicia Gratis',
  },
];

const ServiciosSection: React.FC = () => {
  return (
    <section className="servicios-bg">
      <div className="servicios-section">
        <div className="servicios-header">
          <p className="servicios-kicker">NUESTROS SERVICIOS</p>
          <h2 className="servicios-title">
            Todo lo que necesitas <span>para estar en regla</span>
          </h2>
          <p className="servicios-description">
            Desde vivir legalmente en Colombia hasta emprender o reclamar tus derechos. Acompañamiento
            profesional en cada paso.
          </p>
        </div>

        <div className="servicios-grid">
          {services.map((service) => (
            <article key={service.title} className="servicio-card">
              <div className="servicio-icon" aria-hidden="true">
                {service.icon}
              </div>

              <h3 className="servicio-title">{service.title}</h3>
              <p className="servicio-copy">{service.description}</p>

              <div className="servicio-price-wrap">
                {service.priceLabel ? (
                  <span className="servicio-price-label">{service.priceLabel}</span>
                ) : null}{' '}
                <strong className="servicio-price-value">{service.priceValue}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        html,
        body,
        #root {
          background: #fbf8f3;
        }

        .servicios-bg {
          width: 100%;
          background: #fbf8f3;
        }

        .servicios-section {
          width: 100%;
          max-width: 1180px;
          min-height: 1106.01px;
          margin: 0 auto;
          padding: 100px 58px 0;
          display: flex;
          flex-direction: column;
          gap: 52px;
          font-family: 'Montserrat', sans-serif;
        }

        .servicios-header {
          width: 1064px;
          min-height: 158.7px;
          text-align: center;
        }

        .servicios-kicker {
          margin: 0;
          color: #ffc107;
          font-size: 15px;
          line-height: 16.3px;
          letter-spacing: 1.74px;
          font-style: italic;
          font-weight: 700;
        }

        .servicios-title {
          margin: 21.6px 0 20.02px;
          color: #0f2d5c;
          font-size: 35.86px;
          line-height: 43px;
          font-weight: 600;
        }

        .servicios-title span {
          color: #ffc107;
          font-style: italic;
        }

        .servicios-description {
          width: 800px;
          margin: 0 auto;
          color: #475569;
          font-size: 16.8px;
          line-height: 28.9px;
          font-weight: 400;
        }

        .servicios-grid {
          width: 1064px;
          min-height: 695.31px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-content: start;
        }

        .servicio-card {
          position: relative;
          overflow: hidden;
          min-height: 347.26px;
          padding: 32.8px 28.8px;
          border-radius: 16px 0 16px 0;
          border: 0.8px solid rgba(15, 45, 92, 0.1);
          background: rgba(15, 45, 92, 0.03);
          display: flex;
          flex-direction: column;
          transition: transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease;
        }

        .servicio-card::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #0f2d5c 0%, #1a4f9e 55%, #ffc107 100%);
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 320ms ease;
        }

        .servicio-card:hover {
          transform: translateY(-8px);
          border-color: rgba(15, 45, 92, 0.18);
          box-shadow: 0 18px 38px rgba(10, 10, 10, 0.14), 0 0 0 1px rgba(15, 45, 92, 0.04);
        }

        .servicio-card:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .servicio-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(180deg, #0f2d5c 0%, #1a4f9e 100%);
          display: grid;
          place-items: center;
          color: #ffffff;
          font-size: 24px;
          line-height: 36px;
        }

        .servicio-title {
          margin: 18px 0 9px;
          color: #0f2d5c;
          font-size: 17.6px;
          line-height: 26.4px;
          font-weight: 600;
        }

        .servicio-copy {
          margin: 0;
          color: #475569;
          font-size: 14.08px;
          line-height: 23.2px;
          font-weight: 400;
        }

        .servicio-price-wrap {
          margin-top: auto;
          border-top: 1px solid rgba(15, 45, 92, 0.1);
          padding-top: 17.2px;
          color: #cccccc;
          font-size: 13.12px;
          line-height: 19.7px;
          font-weight: 400;
        }

        .servicio-price-value {
          color: #ffc107;
          font-size: 17.6px;
          line-height: 26.4px;
          font-weight: 700;
        }


        @media (prefers-reduced-motion: reduce) {
          .servicio-card,
          .servicio-card::after {
            transition: none;
          }
        }

        @media (max-width: 1220px) {
          .servicios-section {
            max-width: 100%;
            min-height: 0;
            padding: 72px 24px 32px;
          }

          .servicios-header,
          .servicios-description,
          .servicios-grid {
            width: 100%;
            min-height: 0;
          }
        }

        @media (max-width: 900px) {
          .servicios-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .servicios-title {
            font-size: 30px;
            line-height: 38px;
          }
        }

        @media (max-width: 640px) {
          .servicios-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiciosSection;