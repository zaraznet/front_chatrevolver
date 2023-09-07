import React from "react";
import { Avatar, message, Upload } from "shared/ui";
import { api } from "shared/api";

import styles from "./my-photo.module.scss";
import { useIntl } from "react-intl";

export interface IMyPhoto {}

export const MyPhoto = (props: IMyPhoto) => {
  const profile = api.user.useGetMe();

  const intl = useIntl();

  const updateImage = async (image: { id: string }) => {
    await api.user.updateProfile({ image: image.id });
    await profile.mutate();
  };

  const onError = () => {
    message.error(
      intl.formatMessage({
        id: "user.my_photo.upload_error",
        defaultMessage: "Photo upload error",
      })
    );
  };

  return (
    <div className={styles.my_photo}>
      <Avatar shape="square" src={profile.data?.image} gender={profile.data?.sex} className={styles.avatar} />

      <Upload onSuccess={updateImage} onError={onError}>
        <button className={styles.photo_update}>
          {intl.formatMessage({
            id: "user.my_photo.update",
            defaultMessage: "Update Photo",
          })}
        </button>
      </Upload>
    </div>
  );
};

MyPhoto.defaultProps = {};
