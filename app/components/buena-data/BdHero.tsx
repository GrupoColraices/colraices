export default function BdHero() {
  const includes = [
    "Diagnóstico y análisis profundo del caso",
    "Representación legal formal",
    "Gestión y negociación de deudas",
    "Trámite de paz y salvos y peticiones",
    "Acompañamiento hasta el cierre",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&display=swap');

        .bd-hero {
          background: #091D3E;
          padding: 72px 0;
          position: relative;
          overflow: hidden;
          font-family: 'Montserrat', system-ui, sans-serif;
          box-sizing: border-box;
        }
        .bd-hero::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(26,79,158,0.45) 0%, transparent 70%);
          pointer-events: none;
        }
        .bd-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 40px;
          box-sizing: border-box;
        }
        .bd-hero-inner {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 56px;
          align-items: center;
        }
        .bd-hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .bd-hero-eyebrow-line {
          width: 28px;
          height: 2px;
          background: #FFC107;
          flex-shrink: 0;
        }
        .bd-hero-eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FFC107;
        }
        .bd-hero-heading {
          font-size: 42px;
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }
        .bd-hero-heading em {
          font-style: italic;
          color: #FFC107;
          display: block;
        }
        .bd-hero-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          margin: 0 0 32px;
          max-width: 480px;
        }
        .btn-gold {
          display: inline-block;
          background: #FFC107;
          color: #091D3E;
          font-family: 'Montserrat', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.2s;
        }
        .btn-gold:hover { background: #FFD54F; }
        .bd-hero-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 28px 28px 24px;
        }
        .bd-hero-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .bd-hero-card-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .bd-hero-card-key {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }
        .bd-hero-card-val {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
        }
        .bd-hero-card-val.gold { color: #FFC107; }
        .bd-hero-card-val.green { color: #10B981; }
        .hero-includes {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .hero-includes-title {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 12px;
        }
        .hi-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.75);
          padding: 5px 0;
          line-height: 1.5;
        }
        .hi-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(16,185,129,0.2);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        @media (max-width: 768px) {
          .bd-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .bd-hero-heading { font-size: 30px; }
        }
      `}</style>

      <section className="bd-hero">
        <div className="bd-container">
          <div className="bd-hero-inner">

            <div>
              <div className="bd-hero-eyebrow">
                <div className="bd-hero-eyebrow-line" />
                <span className="bd-hero-eyebrow-text">Resolución activa de reportes y deudas</span>
              </div>
              <h1 className="bd-hero-heading">
                Soluciones claras para<br />
                <em>un mejor futuro financiero.</em>
              </h1>
              <p className="bd-hero-sub">
                Tienes reportes negativos, deudas en mora o un caso de fraude en Colombia.
                Desde el exterior no puedes resolverlo solo. Colraices se hace cargo
                directamente — gestiona, negocia y cierra el problema por ti.
              </p>
              <a href="#precio" className="btn-gold">Contratar →</a>
            </div>

            <div className="bd-hero-card">
              <div className="bd-hero-card-title">¿Qué obtienes?</div>
              <div className="bd-hero-card-row">
                <span className="bd-hero-card-key">Precio único</span>
                <span className="bd-hero-card-val gold">USD $290</span>
              </div>
              <div className="bd-hero-card-row">
                <span className="bd-hero-card-key">Primera entrega</span>
                <span className="bd-hero-card-val green">Máx. 3 días</span>
              </div>
              <div className="bd-hero-card-row">
                <span className="bd-hero-card-key">Ejecución completa</span>
                <span className="bd-hero-card-val">30–90 días</span>
              </div>
              <div className="bd-hero-card-row">
                <span className="bd-hero-card-key">¿Colraices actúa por ti?</span>
                <span className="bd-hero-card-val green">✓ Sí, directamente</span>
              </div>
              <div className="hero-includes">
                <div className="hero-includes-title">El servicio incluye</div>
                {includes.map((item) => (
                  <div className="hi-item" key={item}>
                    <div className="hi-check">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}