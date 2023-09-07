import React from "react";
import { Avatar } from "shared/ui";
import styles from "./chat-empty.module.scss";
import { useIntl } from "react-intl";

export interface IChatEmpty {
  children?: React.ReactNode;
  image?: string;
  onSend: (message: string) => void;
}

export const ChatEmpty = (props: IChatEmpty) => {
  const intl = useIntl();

  const helloMessage = intl.formatMessage({
    id: "chat.empty.hello_message",
    defaultMessage: "hello",
  });

  return (
    <div className={styles.chat_empty}>
      <Avatar src={props.image} size={64} />

      <div className={styles.text}>
        {intl.formatMessage({ id: "chat.empty.title", defaultMessage: "Let’s start to chat!" })}
        <br />
        <a onClick={() => props.onSend(helloMessage)}>
          {intl.formatMessage(
            {
              id: "chat.empty.say_hello",
              defaultMessage: "Just say ‘{hello_message}’",
            },
            {
              hello_message: helloMessage,
            }
          )}
        </a>
      </div>
    </div>
  );
};

ChatEmpty.defaultProps = {};
