import React from "react";
import styles from "./my-profile-deleted.module.scss";
import { api } from "shared/api";
import { useIntl } from "react-intl";

export interface IMyProfileDeleted {
  onRestore: () => void;
}

export const MyProfileDeleted = (props: IMyProfileDeleted) => {
  const profile = api.user.useGetMe();

  const onRestore = async () => {
    await api.user.restoreProfile();
    profile.mutate();
  };

  const intl = useIntl();

  return (
    <div className={styles.my_profile_deleted}>
      <img src="/img/deleted-icon.svg" />
      <p className={styles.title}>
        {intl.formatMessage({
          id: "user.my_profile_deleted.title",
          defaultMessage: "Ваш профиль был удален",
        })}
      </p>
      <p className={styles.text}>
        {intl.formatMessage({
          id: "user.my_profile_deleted.description",
          defaultMessage: "Вы можете восстановить свой профиль",
        })}
      </p>
      <button onClick={onRestore} className={styles.button}>
        {intl.formatMessage({
          id: "user.my_profile_deleted.restore",
          defaultMessage: "Восстановить",
        })}
      </button>
    </div>
  );
};

MyProfileDeleted.defaultProps = {};
