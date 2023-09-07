import React from "react";
import cx from "classnames";
import styles from "./sidebar-panel.module.scss";

export interface ISidebarPanel {
  children?: React.ReactNode;
  showLogo: boolean;
  className?: string;
  contentClassName?: string;
  onClose?: () => void;
}

export const SidebarPanel = (props: ISidebarPanel) => (
  <div className={cx(styles.sidebar_panel, props.className)}>
    {props.showLogo && (
      <div className={styles.logo}>
        <img src="/img/logo-name-white.svg" height={40} />
      </div>
    )}
    {props.onClose && <button className={styles.mobile_close} onClick={props.onClose} />}
    <div className={cx(styles.content, props.contentClassName)}>{props.children}</div>
  </div>
);

SidebarPanel.defaultProps = {
  showLogo: true,
};
