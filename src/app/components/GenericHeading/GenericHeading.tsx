import React, { ReactNode } from 'react';
import styles from './GenericHeading.module.css';

type HeadingProps = {
  children: ReactNode;
};
function Heading({ children }: HeadingProps): JSX.Element {
  return <span className={styles.heading}>{children}</span>;
}
export default Heading;
