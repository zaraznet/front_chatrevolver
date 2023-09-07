import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from "react";
import cx from "classnames";
import styles from "./text-input.module.scss";
import { Icon } from "shared/ui";

export interface ITextInput {
  label?: React.ReactNode;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler;
}

export const TextInput = forwardRef<HTMLInputElement, ITextInput>((props: ITextInput, ref) => {
  return (
    <div className={cx(styles.text_input, props.error && styles.error, props.disabled && styles.disabled)}>
      <label className={styles.label}>{props.label}</label>
      <input
        type="text"
        ref={ref}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.disabled}
      />
      <div className={styles.help}>
        {props.error && <Icon name="input-error" overrideColor={false} className={styles.icon} />}
        <span className={styles.error_text}>{props.error}</span>
      </div>
    </div>
  );
});

TextInput.defaultProps = {};
