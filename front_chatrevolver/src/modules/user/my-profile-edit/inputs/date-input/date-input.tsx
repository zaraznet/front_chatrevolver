import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from "react";
import styles from "./date-input.module.scss";
import cx from "classnames";

export interface IDateInput {
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
}

export const DateInput = forwardRef<HTMLInputElement, IDateInput>((props: IDateInput, ref) => {
  return (
    <div className={cx(styles.date_input, props.error && styles.error)}>
      <input
        type="date"
        ref={ref}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.disabled}
      />
      {props.error && <div className={styles.error_text}>{props.error}</div>}
    </div>
  );
});

DateInput.defaultProps = {};
