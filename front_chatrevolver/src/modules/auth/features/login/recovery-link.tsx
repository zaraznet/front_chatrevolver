import React from "react";
import styles from "./recovery-link.module.scss";
import cx from "classnames";

export interface IRecoveryLink extends React.HTMLProps<HTMLAnchorElement> {}

export const RecoveryLink = (props: IRecoveryLink) => (
  <a {...props} className={cx(styles.recovery_link, props.className)}>
    {props.children}
  </a>
);

RecoveryLink.defaultProps = {};
