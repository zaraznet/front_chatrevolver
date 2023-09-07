import React from "react";
import styles from "./content.module.scss";

export interface IContent {
  children?: React.ReactNode;
}

export const Content = (props: IContent) => {
  return <div className={styles.content}>{props.children}</div>;
};

Content.defaultProps = {};
