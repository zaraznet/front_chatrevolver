import React from "react";
import { VideoChatState, VideoStream } from "modules/video-chat";
import styles from "./main-video.module.scss";

export interface IMainVideo {
  state: VideoChatState;

  incomeStream?: MediaStream;
  outcomeStream?: MediaStream;
}

export const MainVideo = (props: IMainVideo) => {
  return (
    <div className={styles.main_video}>
      {props.state === "loading" && <img className={styles.loader} src="/img/loader.svg" />}
      {props.state === "active" && <VideoStream className={styles.video} src={props.incomeStream} />}
      {props.state === "init" && (
        <div className={styles.placeholder}>
          <img
            src="/img/spin4luck.svg"
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <div className={styles.mobile}>
        <VideoStream src={props.outcomeStream} muted />
      </div>
    </div>
  );
};

MainVideo.defaultProps = {};
