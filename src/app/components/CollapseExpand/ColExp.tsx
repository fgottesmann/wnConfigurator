import React, { useState } from 'react';
import styles from './ColExp.module.css';

export default function ColExp(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.collapsible}>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.buttonText}>Raumaufteilung</span>

        <img className={styles.plus} src="/plus.svg" alt="" />
      </button>
      {isOpen && (
        <div className={styles.content}>
          <span className={styles.span}>Erdgeschoss</span>

          <div className={styles.list}>
            <span className={styles.left}>Küche</span>
            <span className={styles.right}>7,65m²</span>
            <br />
            <span className={styles.left}>Gästezimmer</span>
            <span className={styles.right}>8,79m²</span>
            <br />
            <span className={styles.left}>WC</span>
            <span className={styles.right}>3,86m²</span>
            <br />
            <span className={styles.left}>Diele</span>
            <span className={styles.right}>6,8m²</span>
            <br />
            <span className={styles.left}>Flur I</span>
            <span className={styles.right}>5,51m²</span>
            <br />
            <span className={styles.left}>Hausanschlussraum</span>
            <span className={styles.right}>6,64m²</span>
          </div>
          <span className={styles.span2}>Dachgeschoss</span>

          <div className={styles.list2}>
            <span className={styles.left}>Ankleidezimmer</span>
            <span className={styles.right}>5,1m²</span>
            <br />
            <span className={styles.left}>Bad</span>
            <span className={styles.right}>8,74m²</span>
            <br />
            <span className={styles.left}>Flur II</span>
            <span className={styles.right}>6,81m²</span>
          </div>
        </div>
      )}
    </div>
  );
}
