import React from "react";
import styles from "./header-logo.module.scss";

export interface IHeaderLogo {
  children?: React.ReactNode;
}

export const HeaderLogo = (props: IHeaderLogo) => (
  <div className={styles.logo}>
    <div className={styles.logo_img} />
    <div className={styles.logo_text} />
  </div>
);

HeaderLogo.defaultProps = {};
