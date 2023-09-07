import React from "react";
import styles from "./auth-tabs.module.scss";
import cx from "classnames";
import Link from "next/link";
import AppRouter from "router";
import { useIntl } from "react-intl";

export interface IAuthTabs {
  active: "login" | "sign-up";
}

export const AuthTabs = (props: IAuthTabs) => {
  const route = AppRouter.auth;

  const intl = useIntl();

  return (
    <div className={styles.auth_tabs}>
      <Link {...route.signup.link}>
        <div className={cx(styles.item, props.active === "sign-up" && styles.active)}>
          {intl.formatMessage({
            id: "auth.tabs.sign_up",
            defaultMessage: "Sign up",
          })}
        </div>
      </Link>
      <Link {...route.login.link}>
        <div className={cx(styles.item, props.active === "login" && styles.active)}>
          {" "}
          {intl.formatMessage({
            id: "auth.tabs.sign_in",
            defaultMessage: "Sign in",
          })}
        </div>
      </Link>
    </div>
  );
};

AuthTabs.defaultProps = {};
