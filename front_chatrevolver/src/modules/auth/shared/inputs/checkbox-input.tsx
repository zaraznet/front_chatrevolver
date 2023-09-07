import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from "react";
import cx from "classnames";
import styles from "./checkbox-input.module.scss";

export interface ICheckboxInput {
  children?: React.ReactNode;
  name?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler;

  error?: React.ReactNode;

  className?: string;
}

export const CheckboxInput = forwardRef<HTMLInputElement, ICheckboxInput>((props: ICheckboxInput, ref) => {
  return (
    <>
      <label className={cx(styles.checkbox_input, props.className)}>
        <input
          type="checkbox"
          ref={ref}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        <p className={styles.text}>{props.children}</p>
      </label>
      {props.error && <div className={styles.error}>{props.error}</div>}
    </>
  );
});

CheckboxInput.defaultProps = {};
