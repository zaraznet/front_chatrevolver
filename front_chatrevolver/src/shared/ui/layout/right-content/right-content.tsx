import React from "react";
import styles from "./right-content.module.scss";

export interface IRightContent {
  children?: React.ReactNode;
}

export const RightContent = (props: IRightContent) => {
  return <div className={styles.right_content}>{props.children}</div>;
};

RightContent.defaultProps = {};
