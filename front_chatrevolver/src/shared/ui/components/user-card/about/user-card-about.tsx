import React from "react";
import styles from "./user-card-about.module.scss";
import { useIntl } from "react-intl";

export interface IUserCardAbout {
  data?: string;
}

export const UserCardAbout = (props: IUserCardAbout) => {
  const intl = useIntl();

  return (
    <div className={styles.user_card_about}>
      <div className={styles.title}>
        {intl.formatMessage({
          id: "shared.user_card.about_me",
          defaultMessage: "About me",
        })}
        :
      </div>
      {props.data?.split("\n").map((it, key) => (
        <p key={key}>{it}</p>
      ))}
    </div>
  );
};

UserCardAbout.defaultProps = {};
