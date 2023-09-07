import React from "react";
import styles from "./sidebar-list-item.module.scss";
import cx from "classnames";
import { useIntl } from "react-intl";

export interface ISidebarListItem {
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  body?: React.ReactNode;
  buttons?: React.ReactNode;
  time?: number;
  read?: boolean;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const SidebarListItem = (props: ISidebarListItem) => {
  const intl = useIntl();

  return (
    <div className={styles.sidebar_list_item} onClick={props.onClick}>
      {props.avatar}

      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.body}>
          <div className={styles.body_text}>{props.body}</div>
          {!!props.badge && <span className={styles.badge}>{props.badge}</span>}
        </div>
      </div>

      {props.time && <div className={cx(styles.time, props.read && styles.sent)}>{intl.formatTime(props.time)}</div>}
      {props.buttons && (
        <div className={styles.buttons} onClick={(e) => e.stopPropagation()}>
          {props.buttons}
        </div>
      )}

      {props.children}
    </div>
  );
};

SidebarListItem.defaultProps = {};
