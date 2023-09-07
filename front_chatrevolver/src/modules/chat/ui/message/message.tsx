import React from "react";
import { useIntl } from "react-intl";
import { Icon } from "shared/ui";
import cx from "classnames";
import styles from "./message.module.scss";

export interface IMessage {
  mine: boolean;
  read: boolean;
  time: number;
  content: string;
}

export const Message = (props: IMessage) => {
  const intl = useIntl();

  return (
    <div className={cx(styles.message, props.mine && styles.my)}>
      <p className={styles.content}>
        {props.content
          ?.trim()
          ?.split("\n")
          .map((it, key) => (
            <React.Fragment key={key}>
              {it} <br />
            </React.Fragment>
          ))}
      </p>
      <div className={cx(styles.time, props.read && props.mine && styles.read)}>
        <Icon name="read" className={styles.icon} />
        {intl.formatTime(props.time)}
      </div>
    </div>
  );
};

Message.defaultProps = {};
