import React from 'react';
import ColExpMulti from '../../components/ColExpMulti/ColExpMulti';
import Heading from '../../components/GenericHeading/GenericHeading';
import SubText from '../../components/GenericSubText/GenericSubText';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Outside.module.css';

export default function Outside(): JSX.Element {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.tabContainer}>
          <span className={styles.grundriss}>
            Grundriss&emsp;&emsp;&emsp;&ensp;{' '}
          </span>
          <span className={styles.außen}>Haus außen </span>
          <span className={styles.innen}> &emsp;&emsp;&ensp;Haus innen</span>
        </div>
        <div className={styles.barContainer}>
          <div className={styles.bar}></div>
          <div className={styles.bar2}></div>
        </div>

        <div className={styles.bottomContent}>
          <Heading children={'Wie soll Ihr Haus aussehen?'} />
          <SubText children={'Wählen Sie die äußeren Merkmale Ihres Hauses.'} />
          <span className={styles.price}>Preis: 240.000,- €</span>
          <div className={styles.emptyContainer}></div>
          <div className={styles.bottom}>
            <div className={styles.fassade}>
              <ColExpMulti children={'Fassade wählen'} />
            </div>
            <div className={styles.fassade}>
              <ColExpMulti children={'Dachziegel wählen'} />
            </div>
            <div className={styles.fassade}>
              <ColExpMulti children={'Fensterfarbe wählen'} />
            </div>
            <div className={styles.fassade}>
              <ColExpMulti children={'Haustür wählen'} />
            </div>
            <div className={styles.fassade}>
              <ColExpMulti children={'Seitenteile wählen'} />
            </div>
            <div className={styles.fassade}>
              <ColExpMulti children={'Weitere Ausstattung'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
