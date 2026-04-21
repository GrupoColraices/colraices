"use client";

import React, { useState } from "react";
import styles from "./HeroInmuebles.module.css";

export default function HeroInmuebles() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className={`${styles.titleMain} ${styles.fadeUp} ${styles.delay1}`}>
              Tu inversión en Colombia,
            </h1>
            <h2 className={`${styles.titleAccent} ${styles.fadeUp} ${styles.delay2}`}>
              acompañada en cada paso
            </h2>
            <div className={`${styles.underline} ${styles.fadeUp} ${styles.delay3}`} />
          </div>

          <p className={`${styles.subtitle} ${styles.fadeUp} ${styles.delay4}`}>
            Desde que decides invertir en propiedad raíz hasta que la llave está en tu mano,
            <br />
            <span>Colraices está contigo.</span> Sin importar en qué punto del proceso estés.
          </p>

          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay5}`}>
            <p className={styles.tag}>CUÉNTANOS TU SITUACIÓN</p>
            <h3 className={styles.question}>
              ¿Ya tienes un inmueble identificado o todavía estás buscando?
            </h3>

            <div className={styles.options}>
              <button
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}
                className={`${styles.option} ${styles.left} ${hovered === 1 ? styles.activeLeft : ""}`}
              >
                <span className={styles.icon}>🔎</span>

                <div className={styles.text}>
                  <span className={styles.titleOp}>Llave inmobiliaria</span>
                  <span className={styles.desc}>
                    Busco invertir en Colombia con asesoría para elegir y evaluar inmuebles.
                  </span>
                </div>

                <span className={styles.arrow}>→</span>
              </button>

              <button
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(null)}
                className={`${styles.option} ${styles.right} ${hovered === 2 ? styles.activeRight : ""}`}
              >
                <span className={styles.icon}>🏠</span>

                <div className={styles.text}>
                  <span className={styles.titleOp}>Brújula inmobiliaria</span>
                  <span className={styles.desc}>
                    Ya tengo opciones y necesito respaldo legal, negociación y cierre seguro.
                  </span>
                </div>

                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}