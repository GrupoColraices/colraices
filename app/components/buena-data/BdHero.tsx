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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap');

        .bdh-section {
          background: #091D3E;
          width: 100%;
          padding: clamp(48px, 6vw, 80px) 0 clamp(48px, 6vw, 80px);
          font-family: 'Montserrat', system-ui, sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .bdh-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
          box-sizing: border-box;
        }

        .bdh-inner {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(32px, 5vw, 64px);
          align-items: flex-start;
        }

        /* ── LEFT ── */
        .bdh-left {
          flex: 1 1 320px;
          display: flex;
          flex-direction: column;
        }

        .bdh-eyebrow {
          font-weight: 600;
          font-size: clamp(9px, 0.9vw, 11.2px);
          letter-spacing: 1.5px;
          color: #FFC107;
          text-transform: uppercase;
          margin: 0 0 14px;
        }

        .bdh-h1-regular {
          font-weight: 700;
          font-size: clamp(28px, 4vw, 47.81px);
          line-height: 1.13;
          color: #fff;
          margin: 0;
          display: block;
        }

        .bdh-h1-italic {
          font-weight: 700;
          font-style: italic;
          font-size: clamp(23px, 3.3vw, 40px);
          line-height: 1.2;
          color: #FFD54F;
          margin: 0 0 18px;
          display: block;
        }

        .bdh-sub {
          font-weight: 300;
          font-size: clamp(13px, 1.1vw, 16px);
          line-height: 1.75;
          color: rgba(255,255,255,.52);
          margin: 0 0 28px;
          max-width: 460px;
        }

        .bdh-btn {
          display: inline-flex;
          align-items: center;
          background: #FFC107;
          color: #091D3E;
          font-family: inherit;
          font-weight: 700;
          font-size: clamp(13px, 1vw, 14.4px);
          padding: 13px 26px;
          border-radius: 100px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background .2s;
          width: fit-content;
        }
        .bdh-btn:hover { background: #FFD54F; }

        /* ── CARD ── */
        .bdh-card {
          flex: 0 0 clamp(300px, 30vw, 380px);
          background: rgba(255,255,255,.06);
          border: 0.8px solid rgba(255,255,255,.10);
          border-radius: 16px 0 16px 0;
          padding: clamp(20px, 2.5vw, 28.8px);
          box-sizing: border-box;
        }

        .bdh-card-title {
          font-weight: 600;
          font-size: clamp(14px, 1.2vw, 16px);
          color: #fff;
          margin-bottom: 14px;
        }

        .bdh-card-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 50px;
          border-bottom: 0.8px solid rgba(255,255,255,.07);
          gap: 8px;
        }
        .bdh-card-row:last-of-type { border-bottom: none; }

        .bdh-row-key {
          font-size: clamp(11px, 0.9vw, 12.48px);
          color: rgba(255,255,255,.42);
        }

        .bdh-row-val {
          font-weight: 600;
          font-size: clamp(12px, 1vw, 14.08px);
          color: #fff;
          text-align: right;
        }
        .bdh-row-val.gold  { font-size: clamp(15px, 1.4vw, 19.2px); color: #FFC107; }
        .bdh-row-val.green { color: #4ADE80; }
        .bdh-row-val.muted { color: rgba(255,255,255,.65); }

        .bdh-includes {
          padding-top: 14px;
          border-top: 0.8px solid rgba(255,255,255,.07);
        }

        .bdh-includes-title {
          font-weight: 700;
          font-size: clamp(9px, 0.75vw, 10.4px);
          letter-spacing: 1.04px;
          color: rgba(255,255,255,.35);
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .bdh-hi-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 3px 0;
          font-size: clamp(11.5px, 0.95vw, 13.12px);
          line-height: 1.6;
          color: rgba(255,255,255,.65);
        }

        .bdh-hi-check {
          width: 15px;
          height: 15px;
          min-width: 15px;
          border-radius: 50%;
          background: rgba(74,222,128,.25);
          color: #4ADE80;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          font-weight: 700;
        }
      `}</style>

      <section className="bdh-section">
        <div className="bdh-container">
          <div className="bdh-inner">

            <div className="bdh-left">
              <p className="bdh-eyebrow">Resolución activa de reportes y deudas</p>
              <div>
                <span className="bdh-h1-regular">Soluciones claras para</span>
                <span className="bdh-h1-italic">un mejor futuro financiero.</span>
              </div>
              <p className="bdh-sub">
                Tienes reportes negativos, deudas en mora o un caso de fraude en Colombia.
                Desde el exterior no puedes resolverlo solo. Colraices se hace cargo
                directamente — gestiona, negocia y cierra el problema por ti.
              </p>
              <a href="#precio" className="bdh-btn">Contratar →</a>
            </div>

            <div className="bdh-card">
              <div className="bdh-card-title">¿Qué obtienes?</div>
              <div className="bdh-card-row">
                <span className="bdh-row-key">Precio único</span>
                <span className="bdh-row-val gold">USD $290</span>
              </div>
              <div className="bdh-card-row">
                <span className="bdh-row-key">Primera entrega</span>
                <span className="bdh-row-val green">Máx. 3 días</span>
              </div>
              <div className="bdh-card-row">
                <span className="bdh-row-key">Ejecución completa</span>
                <span className="bdh-row-val muted">30–90 días</span>
              </div>
              <div className="bdh-card-row">
                <span className="bdh-row-key">¿Colraices actúa por ti?</span>
                <span className="bdh-row-val green">✓ Sí, directamente</span>
              </div>
              <div className="bdh-includes">
                <div className="bdh-includes-title">El servicio incluye</div>
                {includes.map((item) => (
                  <div className="bdh-hi-item" key={item}>
                    <div className="bdh-hi-check">✓</div>
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