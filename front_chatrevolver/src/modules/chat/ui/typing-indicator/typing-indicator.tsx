import React from "react";
import cx from "classnames";
import styles from "./typing-indicator.module.scss";
import { useIntl } from "react-intl";

export interface ITypingIndicator {
  name?: string;
  hide?: boolean;
  children?: React.ReactNode;
}

export const TypingIndicator = (props: ITypingIndicator) => {
  const intl = useIntl();

  return (
    <div className={cx(styles.typing_indicator, props.hide && styles.hide)}>
      {props.name
        ? intl.formatMessage(
            {
              id: "chat.typing_indicator.user_typing",
              defaultMessage: "{name} typing",
            },
            {
              name: props.name,
            }
          )
        : intl.formatMessage({
            id: "chat.typing_indicator.noname_typing",
            defaultMessage: "Typing",
          })}
    </div>
  );
};

TypingIndicator.defaultProps = {};
