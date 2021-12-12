import React, { ReactNode } from 'react';
import styles from './GenericSubText.module.css';

type SubTextProps = {
  children: ReactNode;
};

function SubText({ children }: SubTextProps): JSX.Element {
  return <p className={styles.parag}>{children}</p>;
}
export default SubText;
