import React from 'react';
import styles from '';

export default function ColorPicker() {
  const redColor = () => {
    // eslint-disable-next-line no-console
    console.log('red');
  };

  const yellowColor = () => {
    // eslint-disable-next-line no-console
    console.log('yellow');
  };

  const blueColor = () => {
    // eslint-disable-next-line no-console
    console.log('blue');
  };
  
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={redColor}>Red</button>
      <button className={styles.yellow} onClick={yellowColor}>Yellow</button>
      <button className={styles.blue} onClick={blueColor}>Blue</button>
    </section>
  );
}
  
