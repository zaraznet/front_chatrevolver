import React, { useRef, useState } from "react";
import { Avatar, Icon, Modals } from "shared/ui";
import { useClickOutside } from "@yoldi/utils/hooks";
import { api, logout } from "shared/api";
import Link from "next/link";
import AppRouter from "router";
import { IncomingCall } from "modules/video-chat";
import { formatName, formatRating } from "shared/lib";
import cx from "classnames";

import styles from "./header-user-info.module.scss";
import { VipActivateModal } from "modules/user/actions";
import { useIntl } from "react-intl";

export interface IHeaderUserInfo {
  children?: React.ReactNode;
}

export const HeaderUserInfo = (props: IHeaderUserInfo) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  useClickOutside(profileRef, () => setMenuOpen(false));

  const profile = api.user.useGetMe();
  const deleted = profile.data?.deleted;

  const onVipActivate = Modals.prepare(VipActivateModal);

  const intl = useIntl();

  return (
    <>
      {!deleted && (
        <>
          <IncomingCall />
          <span
            className={cx(styles.vip, profile.data?.vip && styles.active)}
            onClick={() => {
              if (!profile.data?.vip) {
                onVipActivate();
              }
            }}
          >
            VIP
          </span>
          <span className={styles.rate}>{formatRating(profile.data?.rating)}</span>
        </>
      )}

      <div
        className={cx(styles.profile, menuOpen && styles.active)}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={profileRef}
      >
        <div className={styles.top}>
          <Avatar src={profile.data?.image} gender={profile.data?.sex} size={36} className={styles.ava} />
          <span className={styles.arrow} />
        </div>
        <div className={styles.menu}>
          <div className={styles.name}>{formatName(profile.data)}</div>
          <div className={styles.list}>
            <Link {...AppRouter.profile.link}>
              <a className={styles.link}>
                {intl.formatMessage({
                  id: "menu.my_profile",
                  defaultMessage: "My Profile",
                })}
              </a>
            </Link>

            <Link {...AppRouter.faq.link}>
              <a className={styles.link}>
                {intl.formatMessage({
                  id: "menu.help",
                  defaultMessage: "Help",
                })}
              </a>
            </Link>

            <a className={cx(styles.link, styles.log_out)} onClick={logout}>
              <Icon name="logout" className={styles.icon} />
              <span className={styles.label}>
                {intl.formatMessage({
                  id: "menu.logout",
                  defaultMessage: "Log out",
                })}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

HeaderUserInfo.defaultProps = {};
