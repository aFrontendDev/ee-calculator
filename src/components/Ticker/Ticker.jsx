import React from "react";
import styles from "./Ticker.module.scss";

const Ticker = props => {
  const { text = "-" } = props || props;

  return <div className={styles.container}>{text}</div>;
};

export default Ticker;
