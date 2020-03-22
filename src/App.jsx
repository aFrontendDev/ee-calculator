import React from "react";
import styles from "./App.module.scss";
import Calculator from "./components/Calculator/Calculator.jsx";

function App() {
  return (
    <div className={`app ${styles.wrapper}`}>
      <Calculator />
    </div>
  );
}

export default App;
