import React, { CSSProperties } from "react";
import cx from "classnames";
import { Avatar } from "shared/ui";
import { useStore } from "effector-react";
import { $incomingCall, declineCall } from "modules/video-chat";
import { api } from "shared/api";
import AppRouter from "router";
import { formatNameAndAge } from "shared/lib";

import styles from "./incoming-call.module.scss";
import { useIntl } from "react-intl";

export interface IVideoCallNotification {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const IncomingCall = (props: IVideoCallNotification) => {
  const incomingCall = useStore($incomingCall);
  const profile = api.user.useGetUser(incomingCall?.userId!);

  const intl = useIntl();

  const user = profile.data;
  if (!user) return null;

  return (
    <div className={cx(styles.incoming_call, props.className)} style={props.style}>
      <span className={styles.close} onClick={() => declineCall()} />

      <Avatar size={64} src={user?.image} gender={user?.sex} online={true} className={styles.avatar} />

      <div className={styles.info}>
        <p className={styles.name}>{formatNameAndAge(user)}</p>
        <p className={styles.type}>
          {intl.formatMessage({
            id: "video_chat.incoming_call",
            defaultMessage: "Incoming call",
          })}
        </p>
      </div>

      <audio src="/audio/ringer.mp3" autoPlay loop />

      <button className={styles.button} onClick={AppRouter.profile.id(user?.id!).call.open}>
        {intl.formatMessage({
          id: "video_chat.incoming_call.answer",
          defaultMessage: "Answer the call",
        })}
      </button>
    </div>
  );
};

IncomingCall.defaultProps = {};
