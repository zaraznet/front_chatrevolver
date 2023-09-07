import React from "react";
import styles from "./header-online.module.scss";

export interface IHeaderOnline {
  children?: React.ReactNode;
}

export const HeaderOnline = (props: IHeaderOnline) => {
  return <div className={styles.header_online}>{props.children}</div>;
};

HeaderOnline.defaultProps = {};
