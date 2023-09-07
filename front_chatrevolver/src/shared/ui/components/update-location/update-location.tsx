import React from "react";
import styles from "./update-location.module.scss";
import { Icon, message } from "shared/ui/atoms";
import { api, UpdateGeolocationDto } from "shared/api";
import { useIntl } from "react-intl";

export interface IUpdateLocation {
  onClick?: () => void;
}

export const UpdateLocation = (props: IUpdateLocation) => {
  const profile = api.user.useGetMe();

  const intl = useIntl();

  const updateGeolocation = async (data: UpdateGeolocationDto) => {
    try {
      await api.user.updateGeolocation(data);
      await profile.mutate();
      message.success(
        intl.formatMessage({
          id: "shared.update_location.success",
          defaultMessage: "Location updated",
        })
      );
    } catch (e) {
      message.error(
        intl.formatMessage({
          id: "shared.update_location.error",
          defaultMessage: "Location update error",
        })
      );
    }
  };

  const onClick = () => {
    const cancelLoading = message.loading(
      intl.formatMessage({
        id: "shared.update_location.loading",
        defaultMessage: "Update location",
      })
    );

    navigator.geolocation.getCurrentPosition(
      (data) => {
        cancelLoading();
        updateGeolocation({
          lat: data.coords.latitude,
          lon: data.coords.longitude,
        });
      },
      (error) => {
        cancelLoading();
        message.error(
          intl.formatMessage({
            id: "shared.update_location.error",
            defaultMessage: "Location update error",
          })
        );
        console.log(error);
      }
    );
  };

  return (
    <div className={styles.update_location} onClick={onClick}>
      <Icon name="location" />
      {intl.formatMessage({
        id: "shared.update_location",
        defaultMessage: "Update the location",
      })}
    </div>
  );
};

UpdateLocation.defaultProps = {};
