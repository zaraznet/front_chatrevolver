import React, { useEffect, useState } from "react";
import styles from "./my-video.module.scss";
import { VideoStream } from "modules/video-chat";
import cx from "classnames";
import { useIntl } from "react-intl";

export interface IMyVideo {
  src?: MediaStream;
}

export const MyVideo = (props: IMyVideo) => {
  const [enabled, setEnabled] = useState<boolean | undefined>(props.src?.getAudioTracks()[0].enabled);

  useEffect(() => {
    const enabled = props.src?.getAudioTracks()[0].enabled;
    setEnabled(enabled);
  }, [props.src]);

  const enable = () => {
    if (props.src) {
      props.src.getAudioTracks()[0].enabled = true;
      setEnabled(true);
    }
  };

  const disable = () => {
    if (props.src) {
      props.src.getAudioTracks()[0].enabled = false;
      setEnabled(false);
    }
  };

  const intl = useIntl();

  if (!props.src) {
    return (
      <div className={styles.my_video}>
        <div className={styles.need_access}>
          <img src="/img/camera-icon.svg" />
          <p>
            {intl.formatMessage({
              id: "video_chat.my_video.no_stream",
              defaultMessage: "your video will appear here",
            })}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.my_video}>
      <VideoStream className={styles.video} src={props.src} muted />

      <div className={styles.cover}>
        {enabled && (
          <span className={cx(styles.audio_control, styles.on)} onClick={disable}>
            <span className={styles.hover}>
              {intl.formatMessage({
                id: "video_chat.my_video.micro_off",
                defaultMessage: "Turn off the microphone",
              })}
            </span>
          </span>
        )}

        {!enabled && (
          <span className={cx(styles.audio_control, styles.off)} onClick={enable}>
            <span className={styles.hover}>
              {intl.formatMessage({
                id: "video_chat.my_video.micro_on",
                defaultMessage: "Turn on the microphone",
              })}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

MyVideo.defaultProps = {};
