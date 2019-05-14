import React from 'react';
import styles from './ColorPicker.css';

export default function ColorPicker() {
  const redColor = () => {
    console.log('red');
  };

  const yellowColor = () => {
    console.log('yellow');
  };

  const blueColor = () => {
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
  
