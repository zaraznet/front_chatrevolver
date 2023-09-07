import React from "react";
import styles from "./my-profile-new.module.scss";
import { useIntl } from "react-intl";

export interface IMyProfileNew {}

export const MyProfileNew = (props: IMyProfileNew) => {
  const intl = useIntl();

  return (
    <div className={styles.my_profile_new}>
      <div className={styles.content}>
        <p className={styles.title}>
          {intl.formatMessage({
            id: "user.new_profile.title",
            defaultMessage: "Let’s complete the profile",
          })}
        </p>
        <p className={styles.text}>
          {intl.formatMessage({
            id: "user.new_profile.description",
            defaultMessage: "You should add information into your profile for better experience in communication",
          })}
        </p>
      </div>
      <div className={styles.image}>
        <img src="/img/complete-profile.png" />
      </div>
    </div>
  );
};

MyProfileNew.defaultProps = {};
