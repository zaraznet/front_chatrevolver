import Link from "next/link";
import React from "react";
import styles from "./auth-layout.module.scss";
import AppRouter from "router";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { LocaleContext } from "contexts/LocaleContext";
export interface IAuthLayout {
  children?: React.ReactNode;
}

export const AuthLayout = (props: IAuthLayout) => {
  const intl = useIntl();
  const router = useRouter();

  return (
    <div className={styles.auth_layout}>
      <div className={styles.header}>
        <Link {...AppRouter.index.link}>
          <div className={styles.logo}>
            <div className={styles.logo__img} />
            <div className={styles.logo__text} />
          </div>
        </Link>

        <div className={styles.menu}>
          <Link href="/about">{intl.formatMessage({ id: "menu.about", defaultMessage: "About" })}</Link>

          <Link href="/faq/what-is">
            <a>{intl.formatMessage({ id: "menu.faq", defaultMessage: "FAQ" })}</a>
          </Link>
        </div>

        <div className={styles.header__right}>
          <LocaleContext.Consumer>
            {({ currentLocale, toggleLocale }) => (
              <button
                className={styles.language}
                onClick={() => {
                  toggleLocale(currentLocale === "ru" ? "en" : "ru");
                  // router.push({
                  //   pathname: router.pathname,
                  //   query: { ...router.query, lang: currentLocale === "ru" ? "en" : "ru" },
                  // });
                }}
              >
                {currentLocale === "ru" ? "en" : "ru"}
              </button>
            )}
          </LocaleContext.Consumer>
        </div>
      </div>

      <div className={styles.background}>
        <picture>
          <source srcSet="/img/sign-bg_mobile.jpg" media="(max-width: 767px)" />
          <source srcSet="/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x" />
          <img srcSet="/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x" alt="" />
        </picture>
      </div>

      <div className={styles.container}>{props.children}</div>
    </div>
  );
};

AuthLayout.defaultProps = {};
