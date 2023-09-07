import React from "react";
import styles from "./field.module.scss";
import cx from "classnames";

export interface IField {
  label?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Field = (props: IField) => (
  <div className={cx(styles.field, props.disabled && styles.disabled)}>
    <label className={styles.label}>{props.label}</label>
    <div className={styles.content}>{props.children}</div>
  </div>
);

Field.defaultProps = {};
