export default function HeroFiscal() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT */}
        <div className="hero-left">
          
          <div className="hero-title">
            <h1>Saliste de Colombia.</h1>
            <h2>Tus obligaciones fiscales, no.</h2>
          </div>

          <p className="hero-desc">
            Muchos colombianos en el exterior creen que al irse dejaron de tener cuentas con el fisco colombiano. 
            La mayoría se equivoca. En 3 días hábiles tendrás el resultado.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Hacer diagnóstico gratuito →
            </button>

            <button className="btn-secondary">
              Ver qué resolvemos
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-card">
          
          <div className="badge">
            Diagnóstico gratuito
          </div>

          <h3 className="card-title">
            ¿Tengo que hacer algo o no?
          </h3>

          <p className="card-time">
            3 días
          </p>

          <div className="steps">
            <div className="step">
              Respondes unas preguntas simples sobre tu situación
            </div>
            <div className="step">
              El sistema analiza si tienes obligaciones activas en Colombia
            </div>
            <div className="step">
              Recibes tu cotización exacta — solo pagas por lo que te corresponde
            </div>
          </div>

          <p className="diagnostic-title">
            El diagnóstico te dice
          </p>

          <div className="results">
            <div className="result">Si estás obligado a declarar renta en Colombia y por qué</div>
            <div className="result">Si tienes años pendientes y cuánto costaría ponerte al día</div>
            <div className="result">Si el predial de tus inmuebles está en orden</div>
            <div className="result">O si no tienes ninguna obligación activa</div>
          </div>

          <button className="btn-card">
            Empezar el diagnóstico →
          </button>
        </div>

      </div>
    </section>
  );
}