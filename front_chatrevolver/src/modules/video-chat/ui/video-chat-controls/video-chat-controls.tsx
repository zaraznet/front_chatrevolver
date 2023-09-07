import React from "react";
import { VideoChatState } from "modules/video-chat";

import styles from "./video-chat-controls.module.scss";
import { useIntl } from "react-intl";

export interface IVideoChatControls {
  state: VideoChatState;

  onStart: () => void;
  onStop: () => void;
  onNext: () => void;
}

export const VideoChatControls = (props: IVideoChatControls) => {
  const intl = useIntl();

  if (props.state === "init") {
    return (
      <div className={styles.video_chat_controls}>
        <button className={styles.button} onClick={props.onStart}>
          {intl.formatMessage({
            id: "video_chat.controls.start",
            defaultMessage: "Start",
          })}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.video_chat_controls}>
      <button className={styles.stop} onClick={props.onStop}>
        {intl.formatMessage({
          id: "video_chat.controls.stop",
          defaultMessage: "Stop",
        })}
      </button>
      <button className={styles.button} onClick={props.onNext} disabled={props.state === "loading"}>
        {intl.formatMessage({
          id: "video_chat.controls.next",
          defaultMessage: "Next User",
        })}
      </button>
    </div>
  );
};

VideoChatControls.defaultProps = {};
