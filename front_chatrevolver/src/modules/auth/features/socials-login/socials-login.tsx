import React from "react";
import { Icon } from "shared/ui";
import styles from "./socials-login.module.scss";
import { useIntl } from "react-intl";

export interface ISocialsLogin {}

export const SocialsLogin = (props: ISocialsLogin) => {
  const intl = useIntl();

  return (
    <>
      <p className={styles.divider}>
        {intl.formatMessage({
          id: "auth.social_login.or_with",
          defaultMessage: "or with",
        })}
      </p>

      <div className={styles.socials}>
        <a href={`${process.env.API_URL}/api/vk`}>
          <Icon name="vk" />
        </a>
        <a href={`${process.env.API_URL}/api/google`}>
          <Icon name="google" />
        </a>
        {/* <a href={`${process.env.API_URL}/api/apple`}>
          <Icon name="apple" />
        </a> */}
      </div>
    </>
  );
};

SocialsLogin.defaultProps = {};
