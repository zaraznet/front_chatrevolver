import React, { CSSProperties, useState } from "react";
import cx from "classnames";
import styles from "./stars-input.module.scss";

export interface IStarsInput {
  onClick: (value: number) => void;
  className?: string;
  style?: CSSProperties;
}

export const StarsInput = (props: IStarsInput) => {
  const [value, setValue] = useState(0);

  return (
    <div className={cx(styles.stars_input, props.className)} style={props.style}>
      <span
        className={cx(styles.item, value >= 1 && styles.hover)}
        onMouseEnter={() => setValue(1)}
        onMouseLeave={() => setValue(0)}
        onClick={() => props.onClick(1)}
      />
      <span
        className={cx(styles.item, value >= 2 && styles.hover)}
        onMouseEnter={() => setValue(2)}
        onMouseLeave={() => setValue(0)}
        onClick={() => props.onClick(2)}
      />
      <span
        className={cx(styles.item, value >= 3 && styles.hover)}
        onMouseEnter={() => setValue(3)}
        onMouseLeave={() => setValue(0)}
        onClick={() => props.onClick(3)}
      />
      <span
        className={cx(styles.item, value >= 4 && styles.hover)}
        onMouseEnter={() => setValue(4)}
        onMouseLeave={() => setValue(0)}
        onClick={() => props.onClick(4)}
      />
      <span
        className={cx(styles.item, value >= 5 && styles.hover)}
        onMouseEnter={() => setValue(5)}
        onMouseLeave={() => setValue(0)}
        onClick={() => props.onClick(5)}
      />
    </div>
  );
};

StarsInput.defaultProps = {};
