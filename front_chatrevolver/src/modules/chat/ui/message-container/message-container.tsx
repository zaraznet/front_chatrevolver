import React from "react";
import styles from "./message-container.module.scss";

export interface IMessageContainer {
  children?: React.ReactNode;
}

export const MessageContainer = (props: IMessageContainer) => {
  return <div className={styles.message_container}>{props.children}</div>;
};

MessageContainer.defaultProps = {};
