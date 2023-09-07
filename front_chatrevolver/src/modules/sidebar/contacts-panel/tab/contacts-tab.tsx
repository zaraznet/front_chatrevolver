import React from "react";
import cx from "classnames";

import styles from "./contacts-tab.module.scss";

export interface IContactsTab<T extends string> {
  children?: React.ReactNode;

  activeKey?: string;
  onChangeActiveKey: (value: T) => void;

  tabs: Array<{
    key: T;
    label: React.ReactNode;
    badge?: number;
  }>;
}

export const ContactsTab = <T extends string>(props: IContactsTab<T>) => (
  <div className={styles.contacts_tab}>
    {props.tabs.map((it) => (
      <div
        className={cx(styles.item, props.activeKey === it.key && styles.active)}
        onClick={() => props.onChangeActiveKey(it.key)}
      >
        {it.label}
        {!!it.badge && <span className={styles.badge}>{it.badge}</span>}
      </div>
    ))}
  </div>
);

ContactsTab.defaultProps = {};
