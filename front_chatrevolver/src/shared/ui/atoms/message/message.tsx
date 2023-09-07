import React from "react";
import Notification from "rc-notification";
import { NotificationInstance } from "rc-notification/es/Notification";
import { isBrowser } from "@yoldi/utils/helpers";

let notification: NotificationInstance | null = null;

if (isBrowser()) {
  Notification.newInstance(
    {
      maxCount: 5,
      prefixCls: "message",
      style: { top: 10, left: "50%" },
    },
    (it) => (notification = it)
  );
}

export const message = {
  error: (content: React.ReactNode, duration: number = 3) => {
    notification?.notice({
      className: "error",
      duration,
      content,
    });
  },
  success: (content: React.ReactNode, duration: number = 3) => {
    notification?.notice({
      className: "success",
      duration,
      content,
    });
  },
  loading: (content: React.ReactNode, duration: number = 0) => {
    const key = Math.random();

    notification?.notice({
      className: "loading",
      duration,
      content,
      key: key,
    });

    return () => notification?.removeNotice(key);
  },
};
