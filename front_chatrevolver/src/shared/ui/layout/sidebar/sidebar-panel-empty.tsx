import React from "react";
import styles from "./sidebar-panel-empty.module.scss";

export interface ISidebarPanelEmpty {
  children?: React.ReactNode;
}

export const SidebarPanelEmpty = (props: ISidebarPanelEmpty) => {
  return <div className={styles.sidebar_panel_empty}>{props.children}</div>;
};

SidebarPanelEmpty.defaultProps = {};
