import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
  return (
    <div className={styles.nav}>
      <img className={styles.burger} src="/burgerMenu.svg" alt="" />
    </div>
  );
}
