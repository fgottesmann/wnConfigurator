import React, { useState } from 'react';
import styles from './PlusMinus.module.css';

export default function PlusMinus(): JSX.Element {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <button
      className={styles.plusMinus}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked && <img src="/plus.svg" alt="" />}
    </button>
  );
}
