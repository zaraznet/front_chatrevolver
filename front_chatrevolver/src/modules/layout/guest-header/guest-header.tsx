import React, { useRef, useState } from "react";
import router, { NextRouter, useRouter } from "next/router";
import styles from "./guest-header.module.scss";
import cx from "classnames";
import { Icon } from "shared/ui";
import Link from "next/link";
import AppRouter from "router";
import { Online } from "modules/online";
import { useClickOutside } from "@yoldi/utils/hooks";
import { useIntl } from "react-intl";
import { LocaleContext } from "contexts/LocaleContext";

export interface IGuestHeader {
  router: NextRouter;
}

export const GuestHeader = (props: IGuestHeader) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const profileRef = useRef<HTMLDivElement>(null);
  useClickOutside(profileRef, () => setMenuOpen(false));

  const intl = useIntl();

  return (
    <div className={styles.guest_header}>
      <Link {...AppRouter.index.link}>
        <div className={styles.logo}>
          <div className={styles.img} />
          <div className={styles.text} />
        </div>
      </Link>

      <div className={styles.logo_mobile}>
        <img src="/img/logo-white.svg" />
      </div>

      <div
        className={cx(styles.mobile_menu, menuOpen && styles.active)}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={profileRef}
      >
        <div className={styles.top}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.menu_list}>
          <div className={styles.list}>
            <Link href="/about">
              <a className={cx(styles.link, styles.textNoWrap)}>
                {intl.formatMessage({
                  id: "menu.about",
                  defaultMessage: "About",
                })}
              </a>
            </Link>
            <Link {...AppRouter.faq.link}>
              <a className={styles.link}>
                {intl.formatMessage({
                  id: "menu.faq",
                  defaultMessage: "FAQ",
                })}
              </a>
            </Link>

            <a className={cx(styles.link)}>EN</a>
          </div>
        </div>
      </div>
      <button className={styles.mobile_menu}></button>

      <div className={styles.menu}>
        <a className={styles.link}>
          {intl.formatMessage({
            id: "menu.classic",
            defaultMessage: "Classic",
          })}
        </a>
        <a className={styles.link}>
          {intl.formatMessage({
            id: "menu.rate",
            defaultMessage: "Rate chat",
          })}
        </a>
        <Link href="/about">
          <a className={cx(styles.link, styles.textNoWrap)}>
            {intl.formatMessage({
              id: "menu.about",
              // defaultMessage: "About",
            })}
          </a>
        </Link>
        <Link href="/faq/what-is">
          <a className={styles.link}>
            {intl.formatMessage({
              id: "menu.faq",
              defaultMessage: "FAQ",
            })}
          </a>
        </Link>
      </div>

      <div className={styles.loginBlock}>
        <Link {...AppRouter.auth.signup.link}>
          <a className={styles.sign_up}>
            {intl.formatMessage({
              id: "menu.sign_up_with_email",
              defaultMessage: "Sign up with email",
            })}
          </a>
        </Link>

        <div className={styles.socials}>
          <a className={styles.link} href={`${process.env.API_URL}/api/google`}>
            <Icon name="google" />
          </a>
          <a className={styles.link} href={`${process.env.API_URL}/api/vk`}>
            <Icon name="vk" />
          </a>
          {/* <a className={styles.link} href={`${process.env.API_URL}/api/apple`}>
            <Icon name="apple" />
          </a> */}
        </div>
      </div>

      <span className={styles.online}>
        <Online />
      </span>
      <div className={styles.right}>
        <Link {...AppRouter.auth.signup.link}>
          <a className={cx(styles.sign_up, styles.combined)}>
            {intl.formatMessage({
              id: "menu.sign_up_sign_in",
              defaultMessage: "Sign up / Sign in",
            })}
          </a>
        </Link>
        <Link {...AppRouter.auth.login.link}>
          <a className={styles.sign_in}>
            {intl.formatMessage({
              id: "menu.sign_in",
              defaultMessage: "Sign in",
            })}
          </a>
        </Link>
        <LocaleContext.Consumer>
          {({ currentLocale, toggleLocale }) => (
            <button
              className={styles.language}
              onClick={() => {
                toggleLocale(currentLocale === "ru" ? "en" : "ru");
              }}
            >
              {currentLocale === "ru" ? "en" : "ru"}
            </button>
          )}
        </LocaleContext.Consumer>
      </div>
    </div>
  );
};

GuestHeader.defaultProps = {};
