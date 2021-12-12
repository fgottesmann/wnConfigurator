import React from 'react';
import styles from './FloorPlan.module.css';
import Heading from '../../components/GenericHeading/GenericHeading';
import SubText from '../../components/GenericSubText/GenericSubText';
import FloorPlanBlock from '../../components/FloorPlanBlock/FloorPlanBlock';
import Navbar from '../../components/Navbar/Navbar';

function FloorPlan(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <span className={styles.mainHeading}>
        Welchen Grundriss wünschen Sie?
      </span>
      <p className={styles.parag}>
        Wahlen Sie einen Grundriss für Ihr Haus aus.
      </p>
      <span className={styles.span}>Preis: 240.000,- €</span>
      <Heading children={'1. Best Ager Grundriss'} />
      <SubText
        children={
          'Offen geschnittene Räume mit 2 Fluren und Rückzugsgelegenheiten'
        }
      />
      <FloorPlanBlock />
      <div className={styles.block}>
        <Heading children={'2. Junge Zielgruppe Grundriss'} />
        <SubText
          children={'Lichtdurchflutetes Wohnen mit 2 zusätzlichen Zimmern'}
        />
        <FloorPlanBlock />
      </div>
    </div>
  );
}
export default FloorPlan;
