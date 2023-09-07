import React from "react";
import styles from "./video-chat-title.module.scss";

export interface IVideoChatTitle {
  children?: React.ReactNode;
}

export const VideoChatTitle = (props: IVideoChatTitle) => {
  return <div className={styles.video_chat_title}>{props.children}</div>;
};

VideoChatTitle.defaultProps = {};
