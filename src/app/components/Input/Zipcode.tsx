import React from 'react';
import styles from './Zipcode.module.css';

export default function PLZInput(): JSX.Element {
  return (
    <div className={styles.div}>
      <input
        className={styles.PLZInput}
        placeholder="z.B. 21335"
        type="text"
      ></input>
      <button className={styles.button}>Suchen</button>
      <img
        className={styles.arrowRight}
        src="/arrowRight.svg
      "
        alt=""
      />
    </div>
  );
}
