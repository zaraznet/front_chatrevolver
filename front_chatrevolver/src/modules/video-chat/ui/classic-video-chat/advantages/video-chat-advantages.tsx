import React from "react";
import styles from "./video-chat-advantages.module.scss";
import { useIntl } from "react-intl";

export interface IVideoChatAdvantages {
  children?: React.ReactNode;
}

export const VideoChatAdvantages = (props: IVideoChatAdvantages) => {
  const intl = useIntl();

  {
    intl.formatMessage({
      id: "video_chat.advantages.0.title",
      defaultMessage: "Search Filter",
    });
    intl.formatMessage({
      id: "video_chat.advantages.0.description",
      defaultMessage: "Chat with only who are needed",
    });
  }

  return (
    <div className={styles.video_chat_advantages}>
      <div className={styles.item}>
        <img src="/img/advantage1.svg" />
        <div className={styles.content}>
          <p className={styles.title}>
            {intl.formatMessage({
              id: "video_chat.advantages.0.title",
              defaultMessage: "Search Filter",
            })}
          </p>
          <p className={styles.text}>
            {intl.formatMessage({
              id: "video_chat.advantages.0.description",
              defaultMessage: "Chat with only who are needed",
            })}
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <img src="/img/advantage2.svg" />
        <div className={styles.content}>
          <p className={styles.title}>
            {intl.formatMessage({
              id: "video_chat.advantages.1.title",
              defaultMessage: "Contacts",
            })}
          </p>
          <p className={styles.text}>
            {intl.formatMessage({
              id: "video_chat.advantages.1.description",
              defaultMessage: "You can chat with follow friends",
            })}
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <img src="/img/advantage3.svg" />
        <div className={styles.content}>
          <p className={styles.title}>
            {intl.formatMessage({
              id: "video_chat.advantages.2.title",
              defaultMessage: "Chats",
            })}
          </p>
          <p className={styles.text}>
            {intl.formatMessage({
              id: "video_chat.advantages.2.description",
              defaultMessage: "You can follow friends",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

VideoChatAdvantages.defaultProps = {};
