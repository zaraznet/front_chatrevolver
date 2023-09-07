import React from "react";
import styles from "./profile-deleted.module.scss";
import { useIntl } from "react-intl";

export interface IProfileDeleted {}

export const ProfileDeleted = (props: IProfileDeleted) => {
  const intl = useIntl();

  return (
    <div className={styles.profile_deleted}>
      <img src="/img/deleted-icon.svg" />
      <p className={styles.title}>
        {intl.formatMessage({
          id: "user.profile_deleted.title",
          defaultMessage: "Профиль был удален",
        })}
      </p>
    </div>
  );
};
export const ProfileBlocked = (props: IProfileDeleted) => {
  const intl = useIntl();

  return (
    <div className={styles.profile_deleted}>
      <img src="/img/deleted-icon.svg" />
      <p className={styles.title}>
        {intl.formatMessage({
          id: "user.profile_blocked.title",
          defaultMessage: "Профиль заблокирован",
        })}
      </p>
    </div>
  );
};
export const YourProfileBlocked = (props: IProfileDeleted) => {
  const intl = useIntl();

  return (
    <div className={styles.profile_blocked}>
      <img src="/img/block-user.png" />
      <p className={styles.title}>
        {intl.formatMessage({
          id: "shared.user_card.blocked",
          defaultMessage: "ACCESS BLOCKED",
        })}
      </p>
      <p className={styles.description}>
        {intl.formatMessage({
          id: "shared.user_card.limintedaccess",
          defaultMessage: "A USER LIMITED YOUR ACCESS TO HIS PAGE",
        })}
      </p>
    </div>
  );
};

ProfileDeleted.defaultProps = {};
