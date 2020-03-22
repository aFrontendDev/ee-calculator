import React from "react";
import styles from "./Keypad.module.scss";

import Btn from "../../elements/Button.jsx";

const Keypad = props => {
  const { handleCalculate, handleOp, handleDigit, handleClear } = props || {};

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Btn className={`btn--clear ${styles.btnClear}`} onClick={handleClear}>
          C
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("9")}
        >
          9
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("8")}
        >
          8
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("7")}
        >
          7
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("6")}
        >
          6
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("5")}
        >
          5
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("4")}
        >
          4
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("3")}
        >
          3
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("2")}
        >
          2
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit("1")}
        >
          1
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigitZero}`}
          onClick={() => handleDigit("0")}
        >
          0
        </Btn>
        <Btn
          className={`btn--digit ${styles.btnDigit}`}
          onClick={() => handleDigit(".")}
        >
          .
        </Btn>
      </div>
      <div className={styles.ops}>
        <Btn
          className={`btn--divide ${styles.btnOps}`}
          onClick={() => handleOp("/")}
        >
          /
        </Btn>
        <Btn
          className={`btn--times ${styles.btnOps}`}
          onClick={() => handleOp("*")}
        >
          X
        </Btn>
        <Btn
          className={`btn--minus ${styles.btnOps}`}
          onClick={() => handleOp("-")}
        >
          -
        </Btn>
        <Btn
          className={`btn--plus ${styles.btnOps}`}
          onClick={() => handleOp("+")}
        >
          +
        </Btn>
        <Btn className={`btn--calc ${styles.btnOps}`} onClick={handleCalculate}>
          =
        </Btn>
      </div>
    </div>
  );
};

export default Keypad;
