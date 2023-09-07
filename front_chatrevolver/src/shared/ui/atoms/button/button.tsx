import React, { CSSProperties, useState } from "react";
import cx from "classnames";
import styles from "./button.module.scss";

export interface IButton {
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "secondary" | "danger";
  htmlType?: "submit" | "reset" | "button";
  className?: string;
  style?: CSSProperties;
}

export const Button = (props: IButton) => {
  const [_loading, setLoading] = useState(false);
  const loading = props.loading || _loading;

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || props.disabled) return;
    try {
      setLoading(true);
      await props.onClick?.(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={cx(
        styles.button,
        props.type === "primary" && styles.primary,
        props.type === "secondary" && styles.secondary,
        props.type === "danger" && styles.danger,
        loading && styles.loading,
        props.className
      )}
      style={props.style}
      onClick={onClick}
      type={props.htmlType}
      disabled={loading || props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {};
