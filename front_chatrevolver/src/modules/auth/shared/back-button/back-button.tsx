import React from "react";
import cx from "classnames";
import styles from "./back-button.module.scss";
import { useIntl } from "react-intl";

export const BackButton = (props: React.HTMLProps<HTMLSpanElement>) => {
  const intl = useIntl();

  return (
    <span {...props} className={cx(styles.back_button, props.className)}>
      {props.children ||
        intl.formatMessage({
          id: "shared.back",
          defaultMessage: "Back",
        })}
    </span>
  );
};
