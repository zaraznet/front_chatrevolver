import React from "react";
import { NextRouter } from "next/router";
import { HeaderUserInfo } from "modules/user";
import { HeaderLanguage, HeaderMobileMenu, HeaderOnline } from "shared/ui";
import AppRouter from "router";
import Link from "next/link";
import cx from "classnames";

import styles from "./header.module.scss";
import { Online } from "modules/online";
import { api } from "shared/api";
import { useIntl } from "react-intl";

export interface IHeader {
  router: NextRouter;
  onToggleSidebar: () => void;
}

export const Header = (props: IHeader) => {
  const profile = api.user.useGetMe();
  const deleted = profile.data?.deleted;

  const isClassic = props.router.pathname === "/";
  const isRating = props.router.pathname === "/rating";

  const intl = useIntl();

  return (
    <div className={styles.header}>
      {!deleted && <HeaderMobileMenu onClick={props.onToggleSidebar} />}

      <div className={styles.menu}>
        <Link {...AppRouter.index.link}>
          <a className={cx(styles.link, isClassic && styles.active)}>
            {intl.formatMessage({
              id: "menu.classic",
              defaultMessage: "Classic",
            })}
          </a>
        </Link>
        {!deleted && (
          <Link {...AppRouter.rating.link}>
            <a className={cx(styles.link, isRating && styles.active)}>
              {intl.formatMessage({
                id: "menu.rate",
                defaultMessage: "Rate chat",
              })}
            </a>
          </Link>
        )}
      </div>

      <HeaderOnline>
        <Online />
      </HeaderOnline>

      <div className={styles.right}>
        <HeaderUserInfo />

        <HeaderLanguage />
      </div>
    </div>
  );
};

Header.defaultProps = {};
