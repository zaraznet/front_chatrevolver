import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./dating-filter-field.module.scss";

export interface IDatingFilterField {
  label?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const DatingFilterField = (props: IDatingFilterField) => (
  <div className={cx(styles.dating_filter_field, props.className)} style={props.style}>
    <label>{props.label}</label>
    {props.children}
  </div>
);

DatingFilterField.defaultProps = {};
