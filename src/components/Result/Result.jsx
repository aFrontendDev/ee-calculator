import React from "react";
import styles from "./Result.module.scss";

const Result = props => {
  const { res = 0 } = props || props;

  return <div className={styles.container}>{res}</div>;
};

export default Result;
