import React from 'react';
import styles from './Homes.module.css';
import Button from '../Button/Button';

function HomeCards(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <img className={styles.burger} src="/burgerMenu.svg" alt="" />
      </div>
      <span className={styles.span}>Wie möchten sie wohnen?</span>
      <p className={styles.parag}>
        Wählen sie einen Haustyp aus, um mit der Konfiguration zu starten.
      </p>
      <div className={styles.card}>
        <img className={styles.image} src="/einfamilienhaus.jpg" alt="" />
        <div>
          <span className={styles.spanCard}>Einfamilienhaus</span>
          <p className={styles.paragCard}>
            Ein traditionelles Satteldach über einem modernen Grundriss.
          </p>
          <span className={styles.spanPrice}>ab 240.000,-€</span>
          <div className={styles.button}>
            <Button children={'Einfamilienhaus'} />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src="stadtvilla.jpg" alt="" />
        <div>
          <span className={styles.spanCard}>Stadtvilla</span>
          <p className={styles.paragCard}>
            Zwei lichtdurchflutete Vollgeschosse unter einem Dach.
          </p>
          <span className={styles.spanPrice}>ab 260.000,-€</span>
          <div className={styles.button}>
            <Button children={'Stadtvilla'} />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src="bungalow.jpg" alt="" />
        <div>
          <span className={styles.spanCard}>Bungalow</span>
          <p className={styles.paragCard}>
            Alle Vorteile vom Wohnen auf einer Ebene genießen.
          </p>
          <span className={styles.spanPrice}>ab 210.000,-€</span>
          <div className={styles.button}>
            <Button children={'Bungalow'} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeCards;
