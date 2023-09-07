import React, { ChangeEventHandler, FocusEventHandler, forwardRef, useState } from "react";
import cx from "classnames";
import styles from "./text-input.module.scss";
import { Icon } from "shared/ui";

export interface IPasswordInput {
  label?: React.ReactNode;
  autoFocus?: boolean;
  error?: React.ReactNode;
  name?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler;
}

export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInput>((props: IPasswordInput, ref) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cx(styles.text_input, props.error && styles.error)}>
      <label className={styles.label}>{props.label}</label>
      <input
        type={visible ? "text" : "password"}
        ref={ref}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      <div className={styles.help}>
        <a className={cx(styles.icon, styles.clickable)} onClick={() => setVisible(!visible)}>
          <Icon name={visible ? "password-hide" : "password-show"} className={styles.eye_icon} />
        </a>
        <span className={styles.error_text}>{props.error}</span>
      </div>
    </div>
  );
});

PasswordInput.defaultProps = {};
