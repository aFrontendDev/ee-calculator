import React, { useState } from "react";

import styles from "./Calculator.module.scss";
import Logo from "../../elements/Logo.jsx";
import Result from "../Result/Result.jsx";
import Ticker from "../Ticker/Ticker.jsx";
import Keypad from "../Keypad/Keypad.jsx";

import { calc } from "./Calculator.helpers";

const Calculator = () => {
  const [currentNum, setCurrentNum] = useState("");
  const [currentResultText, setCurrentResultText] = useState("0");
  const [calcText, setCalcText] = useState("-");
  const [calcArr, setCalcArr] = useState([]);
  const [startOfCalc, setStartOfCalc] = useState(true);

  const handleCalculate = () => {
    const calcArrCopy = [...calcArr];

    if (currentNum) {
      const currentNumInt = parseFloat(currentNum);
      calcArrCopy.push(currentNumInt);
    }

    const result = calc(calcArrCopy);
    setCalcText(calcArrCopy.join(" "));
    setCurrentNum(result);
    setCurrentResultText(result);
    setCalcArr([result]);
    setStartOfCalc(true);
  };

  const handleOp = key => {
    const calcArrCopy = [...calcArr];
    if (!currentNum) {
      setCalcText(calcArrCopy.join(" "));
      return;
    }

    const currentNumInt = parseFloat(currentNum);
    if (!startOfCalc) {
      calcArrCopy.push(currentNumInt);
    }

    calcArrCopy.push(key);
    setCurrentNum("");
    setCalcText(calcArrCopy.join(" "));
    setStartOfCalc(false);
    setCalcArr(calcArrCopy);
  };

  const handleDigit = digit => {
    let result = null;
    if (startOfCalc) {
      setCalcArr([]);
      result = digit;
    } else {
      result = currentNum + digit;
    }

    const calcArrCopy = [...calcArr];
    const updatedCalcText = `${calcArrCopy.join(" ")} ${result}`;
    setCurrentNum(result);
    setCurrentResultText(result);
    setCalcText(updatedCalcText);
    setStartOfCalc(false);
  };

  const handleClear = () => {
    setCalcArr([]);
    setStartOfCalc(true);
    setCurrentNum("0");
    setCurrentResultText("0");
    setCalcText("-");
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className="visually-hidden">Calculator</h2>
        <Logo />
      </header>
      <div>
        <Result res={currentResultText} />
        <Ticker text={calcText} />
        <Keypad
          handleCalculate={handleCalculate}
          handleOp={handleOp}
          handleDigit={handleDigit}
          handleClear={handleClear}
        />
      </div>
    </section>
  );
};

export default Calculator;
