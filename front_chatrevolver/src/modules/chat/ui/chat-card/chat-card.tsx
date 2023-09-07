import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./chat-card.module.scss";
import { Chat } from "modules/chat/ui/chat";
import { ChatSkeleton } from "modules/chat/ui/chat-skeleton";

export interface IChatCard {
  id?: number;
  temporary?: boolean;

  className?: string;
  style?: CSSProperties;
}

export const ChatCard = (props: IChatCard) => {
  if (!props.id) {
    return (
      <div className={cx(styles.chat_card, props.className)} style={props.style}>
        <ChatSkeleton />
      </div>
    );
  }

  return (
    <div className={cx(styles.chat_card, props.className)} style={props.style}>
      <Chat id={props.id} temporary={props.temporary} />
    </div>
  );
};

ChatCard.defaultProps = {};
