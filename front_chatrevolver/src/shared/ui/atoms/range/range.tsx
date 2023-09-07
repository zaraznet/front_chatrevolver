import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./range.module.scss";
import { useIntl } from "react-intl";

export interface IRange {
  value?: { from?: number; to?: number };
  onChange?: (value?: { from?: number; to?: number }) => void;

  className?: string;
  style?: CSSProperties;
}

export const Range = (props: IRange) => {
  const intl = useIntl();

  return (
    <div className={cx(styles.range, props.className)} style={props.style}>
      <input
        type="number"
        placeholder={intl.formatMessage(
          {
            id: "input.range.from",
            defaultMessage: "From {value}",
          },
          {
            value: 18,
          }
        )}
        value={props.value?.from}
        onChange={(e) => {
          props.onChange?.({ ...props.value, from: e.target.valueAsNumber || undefined });
        }}
        min={18}
        max={props.value?.to}
      />
      <span />
      <input
        type="number"
        placeholder={intl.formatMessage({
          id: "input.range.to",
          defaultMessage: "To",
        })}
        value={props.value?.to}
        onChange={(e) => {
          props.onChange?.({ ...props.value, to: e.target.valueAsNumber || undefined });
        }}
        min={props?.value?.from}
        max={120}
      />
    </div>
  );
};

Range.defaultProps = {};
