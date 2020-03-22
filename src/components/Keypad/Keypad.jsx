import React from "react";
import styles from "./Keypad.module.scss";

import Btn from "../../elements/Button.jsx";

const Keypad = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Btn className={styles.btnClear}>C</Btn>
        <Btn className={styles.btnDigit}>9</Btn>
        <Btn className={styles.btnDigit}>8</Btn>
        <Btn className={styles.btnDigit}>7</Btn>
        <Btn className={styles.btnDigit}>6</Btn>
        <Btn className={styles.btnDigit}>5</Btn>
        <Btn className={styles.btnDigit}>4</Btn>
        <Btn className={styles.btnDigit}>3</Btn>
        <Btn className={styles.btnDigit}>2</Btn>
        <Btn className={styles.btnDigit}>1</Btn>
        <Btn className={styles.btnDigitZero}>0</Btn>
        <Btn className={styles.btnDigit}>.</Btn>
      </div>
      <div className={styles.ops}>
        <Btn className={styles.btnOps}>/</Btn>
        <Btn className={styles.btnOps}>X</Btn>
        <Btn className={styles.btnOps}>-</Btn>
        <Btn className={styles.btnOps}>+</Btn>
        <Btn className={styles.btnOps}>=</Btn>
      </div>
    </div>
  );
};

export default Keypad;
