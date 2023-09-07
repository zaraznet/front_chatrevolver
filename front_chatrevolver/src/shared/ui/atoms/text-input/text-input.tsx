import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from "react";
import cx from "classnames";
import styles from "./text-input.module.scss";

export interface ITextInput {
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  type?: "password";
}

export const TextInput = forwardRef<HTMLInputElement, ITextInput>((props: ITextInput, ref) => {
  return (
    <div className={cx(styles.text_input, props.error && styles.error)}>
      <input
        type={props.type}
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

TextInput.defaultProps = {};
