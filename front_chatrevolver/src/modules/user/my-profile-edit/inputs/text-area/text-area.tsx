import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from "react";
import styles from "./text-area.module.scss";
import cx from "classnames";

export interface ITextArea {
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  rows?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>((props: ITextArea, ref) => {
  return (
    <div className={cx(styles.text_area, props.error && styles.error)}>
      <textarea
        ref={ref}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.disabled}
        rows={props.rows}
      />
      {props.error && <div className={styles.error_text}>{props.error}</div>}
    </div>
  );
});

TextArea.defaultProps = {};
