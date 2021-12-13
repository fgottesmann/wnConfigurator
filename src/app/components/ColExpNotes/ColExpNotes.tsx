import React, { useState } from 'react';
import styles from './ColExpNotes.module.css';

export default function ColExpNotes(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.content}>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.span}>Notiz hinzufügen</span>
        <img className={styles.arrowDown} src="/arrowDown.svg" alt="" />
      </button>
      {isOpen && (
        <div>
          <input className={styles.input} type="text" />
        </div>
      )}
    </div>
  );
}
