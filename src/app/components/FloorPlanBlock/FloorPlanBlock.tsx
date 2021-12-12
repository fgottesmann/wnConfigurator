import React from 'react';
import styles from './FloorPlanBlock.module.css';
import ColExp from '../CollapseExpand/ColExp';
import Button from '../Button/Button';

export default function FloorPlanBlock(): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.span}>1. Best Ager Grundriss</span>
      <p className={styles.parag}>
        Offen geschnittene Räume mit 2 Fluren und Rückzugsgelegenheiten.
      </p>
      <div className={styles.eg}>EG</div>
      <div className={styles.og}>OG</div>
      <div className={styles.colExp}>
        <ColExp />
      </div>
      <div className={styles.button}>
        <Button children={'Grundriss wählen'} />
      </div>
    </div>
  );
}
