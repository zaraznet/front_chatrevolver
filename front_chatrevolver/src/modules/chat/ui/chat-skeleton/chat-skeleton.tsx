import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./chat-skeleton.module.scss";

export interface IChatSkeleton {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const ChatSkeleton = (props: IChatSkeleton) => {
  return (
    <div className={cx(styles.chat_skeleton, props.className)} style={props.style}>
      <div className="chat chat--disabled">
        <div className="chat-disabled-top">
          <div className="chat-disabled-top__ava" />
          <div className="chat-disabled-top__content">
            <span className="chat-disabled-top__line" />
            <span className="chat-disabled-top__line" />
          </div>
        </div>

        <div className="chat__block chat__block--disabled">
          <div className="chat-messages">
            <div className="chat-message" />
            <div className="chat-message chat-message--my" />
            <div className="chat-message" />
            <div className="chat-message chat-message--my" />
          </div>
        </div>

        <form className="chat__bottom">
          <textarea className="chat__textarea" placeholder="Write a message ..." />
          <button className="chat__send-button" />
        </form>
      </div>
    </div>
  );
};

ChatSkeleton.defaultProps = {};
