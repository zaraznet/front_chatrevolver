import React from "react";
import styles from "./video-chat-body.module.scss";

export interface IVideoChatBody {
  controls: React.ReactNode;
  children: React.ReactNode;
}

export const VideoChatBody = (props: IVideoChatBody) => (
  <div className={styles.video_chat_body}>
    <div className={styles.main}>{props.children}</div>
    <div className={styles.right}>{props.controls}</div>
  </div>
);

VideoChatBody.defaultProps = {};
