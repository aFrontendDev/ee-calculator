import React from "react";
import styles from "./Calculator.module.scss";
import Logo from "../../elements/Logo.jsx";
import Result from "../Result/Result.jsx";
import Ticker from "../Ticker/Ticker.jsx";
import Keypad from "../Keypad/Keypad.jsx";

const Calculator = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className="visually-hidden">Calculator</h2>
        <Logo />
      </header>
      <div>
        <Result />
        <Ticker />
        <Keypad />
      </div>
    </section>
  );
};

export default Calculator;
