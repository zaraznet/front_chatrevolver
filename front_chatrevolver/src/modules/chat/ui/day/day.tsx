import React from "react";
import styles from "./day.module.scss";

export interface IDay {
  children?: React.ReactNode;
}

export const Day = (props: IDay) => {
  return <div className={styles.day}>{props.children}</div>;
};

Day.defaultProps = {};
