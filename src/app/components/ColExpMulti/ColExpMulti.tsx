import React, { useState, ReactNode } from 'react';
import ColExpNotes from '../ColExpNotes/ColExpNotes';
import styles from './ColExpMulti.module.css';

type ColExpProps = {
  children: ReactNode;
};

export default function ColExpMulti({ children }: ColExpProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.collapsible}>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.buttonText}>{children}</span>

        <img className={styles.plus} src="/plus.svg" alt="" />
      </button>
      {isOpen && (
        <>
          <div className={styles.content}>
            <div className={styles.quarter1}></div>
            <div className={styles.quarter2}></div>
            <div className={styles.quarter3}></div>
            <div className={styles.quarter4}></div>
            <div className={styles.quarter5}></div>
            <div className={styles.quarter6}></div>
          </div>
          <ColExpNotes />
        </>
      )}
    </div>
  );
}
