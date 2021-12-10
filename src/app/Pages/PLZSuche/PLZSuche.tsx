import React from 'react';
import styles from './PLZSuche.module.css';
import PLZInput from '../../components/Input/Zipcode';
import Button from '../../components/Button/Button';

export default function PLZSuche(): JSX.Element {
  return (
    <div className={styles.landing}>
      <div className={styles.nav}>
        <img className={styles.burger} src="/burgerMenu.svg" alt="" />
      </div>
      <div className={styles.PLZSuche}>
        <span className={styles.span1}>Wo möchten Sie bauen?</span>
        <p className={styles.parag}>
          Damit wir Ihnen eine genauere Preisübersicht zeigen und einen direkten
          Ansprechpartner nennen können, benötigen wir Ihre Postleitzahl. Wo
          möchten Sie bauen?
        </p>
        <span className={styles.span2}>Postleitzahl</span>
        <div className={styles.input}>
          <PLZInput />
        </div>
        <span className={styles.span3}>Auswahl: 21337, Lüneburg</span>
        <div className={styles.button}>
          <Button children={'Weiter zum Haustyp'} />
        </div>
      </div>
    </div>
  );
}
