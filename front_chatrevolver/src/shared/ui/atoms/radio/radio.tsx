import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./radio.module.scss";

export interface IRadio<Value> {
  value?: Value;
  onChange?: (value: Value) => void;

  options: Array<{
    value: Value;
    label: React.ReactNode;
  }>;

  disabled?: boolean;
  name?: string;
  error?: React.ReactNode;

  className?: string;
  style?: CSSProperties;
}

export const Radio = <Value extends any>(props: IRadio<Value>) => {
  return (
    <>
      {props.options?.map((it, key) => (
        <label key={key} className={cx(styles.radio, props.className)} style={props.style}>
          <input
            type="radio"
            name={props.name}
            checked={props.value === it.value}
            onChange={() => props.onChange?.(it.value)}
            disabled={props.disabled}
          />
          <p>{it.label}</p>
        </label>
      ))}
    </>
  );
};

Radio.defaultProps = {};
