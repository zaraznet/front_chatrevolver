import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from "react";
import styles from "./select-input.module.scss";
import cx from "classnames";

export interface ISelectInput {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onBlur?: FocusEventHandler;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;

  options: { value: string; label: React.ReactNode }[];

  firstDefault?: boolean;
  allowEmpty?: boolean;
  className?: string;
}

export const SelectInput = forwardRef<HTMLSelectElement, ISelectInput>((props: ISelectInput, ref) => {
  return (
    <div className={cx(styles.select_input, props.error && styles.error, props.className)}>
      <select
        ref={ref}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.disabled}
      >
        {!props.firstDefault && (
          <option value="" disabled={!props.allowEmpty} selected hidden={!props.allowEmpty}>
            {props.placeholder}
          </option>
        )}
        {props.options.map((it) => (
          <option value={it.value}>{it.label}</option>
        ))}
      </select>
      {props.error && <div className={styles.error_text}>{props.error}</div>}
    </div>
  );
});

SelectInput.defaultProps = {};
