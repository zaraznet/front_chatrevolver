import React, { useCallback, useRef } from "react";
import cx from "classnames";
import Link from "next/link";
import { Icon, IconName, Modals } from "shared/ui";
import styles from "./sidebar.module.scss";
import { KeyName, useClickOutside, useKeyDown } from "@yoldi/utils/hooks";
import { useIntl } from "react-intl";

export interface ISidebar {
  children?: React.ReactNode;

  activeKey?: string;
  onMenuClick: (key: string) => void;

  menu: Array<{
    key: string;
    label: React.ReactNode;
    icon: IconName;
    badge?: number;
  }>;

  panelOpened?: boolean;
  onClosePanel: () => void;

  open?: boolean;
  onClose?: () => void;
}

export const Sidebar = (props: ISidebar) => {
  const ref = useRef<HTMLTableSectionElement>(null);

  const { modal } = Modals.useCurrent();

  const close = useCallback(() => {
    if (!modal) {
      props.onClosePanel();
      props.onClose?.();
    }
  }, [props.onClose, props.onClosePanel, modal]);

  useClickOutside(ref, close);
  useKeyDown(KeyName.ESC, close);

  const intl = useIntl();

  return (
    <section
      className={cx(
        styles.sidebar_wrap,
        // !authUseCase.authorized && "sidebar-wrap--unauthorized",
        // me?.deleted && "sidebar-wrap--unauthorized",
        props.panelOpened && styles.panel_opened,
        props.open && styles.mobile_opened
      )}
      ref={ref}
    >
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="/img/logo-white.svg" />
        </div>

        <button className={styles.mobile_close} onClick={props.onClose} />

        <div className={styles.menu}>
          {props.menu.map((it) => (
            <a
              key={it.key}
              className={cx(styles.link, it.key === props.activeKey && styles.active)}
              onClick={() => props.onMenuClick(it.key)}
            >
              <Icon name={it.icon} />
              <span className={styles.label}>{it.label}</span>
              {!!it.badge && <span className={styles.badge}>{it.badge}</span>}
            </a>
          ))}
        </div>

        <div className={styles.bottom_menu}>
          <Link href="/about">
            <a className={styles.link}>{intl.formatMessage({ id: "menu.about", defaultMessage: "About" })}</a>
          </Link>

          <Link href="/faq/what-is">
            <a className={styles.link}>{intl.formatMessage({ id: "menu.faq", defaultMessage: "FAQ" })}</a>
          </Link>

          <a className={cx(styles.link, styles.only_mobile)}>In Eng</a>
        </div>
      </div>
      {props.children}
    </section>
  );
};

Sidebar.defaultProps = {};
