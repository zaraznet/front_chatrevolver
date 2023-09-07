import React, { ChangeEventHandler, CSSProperties, FocusEventHandler, forwardRef } from "react";
import cx from "classnames";
import styles from "./checkbox.module.scss";

export interface ICheckbox {
  autoFocus?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  name?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler;

  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>((props: ICheckbox, ref) => {
  return (
    <label className={cx(styles.checkbox, props.className)} style={props.style}>
      <input
        type="checkbox"
        ref={ref}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
        checked={props.checked}
        disabled={props.disabled}
      />
      <p>{props.children}</p>
    </label>
  );
});

Checkbox.defaultProps = {};
