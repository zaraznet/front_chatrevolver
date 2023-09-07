import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./dating-list.module.scss";
import { api } from "shared/api";
import { Avatar, Button, FlagIcon, Gender } from "shared/ui";
import { formatNameAndAge } from "shared/lib/format/name-and-age";
import { formatCountryAndCity } from "shared/lib";
import AppRouter from "router";
import { IDatingFilters } from "modules/dating/model";
import { useIntl } from "react-intl";

export interface IDatingList {
  state: Partial<IDatingFilters>;

  className?: string;
  style?: CSSProperties;
}

export const DatingList = (props: IDatingList) => {
  const value = props.state;

  const { data } = api.user.useUserSearch(
    1, // page
    value.withPhotos ? true : undefined, // withPhotos
    value.onlyVip ? true : undefined, // onlyVip
    value.online ? true : undefined, // online
    value.near ? true : undefined, // near
    value.ageTo, // ageEnd
    value.ageFrom, // ageStart
    value.highRating ? true : undefined, // highRating
    value.sex === "UNDEF" ? undefined : (value.sex as any), // sex
    value.country, // country
    1000 // perPage
  );

  const intl = useIntl();

  return (
    <div className={cx(styles.dating_list, props.className)} style={props.style}>
      {data?.map((it) => (
        <div className={styles.item} key={it.id}>
          <Avatar className={styles.photo} src={it.image} shape="square" gender={it.sex} />

          {it.vip && <span className={styles.vip}>VIP</span>}

          <div className={styles.info}>
            <p className={styles.name}>{formatNameAndAge(it)}</p>
            <div className={styles.location}>
              <FlagIcon country={it.country} size={32} />
              <span>{formatCountryAndCity(it)}</span>
            </div>
            <Gender gender={it.sex} className={styles.gender} />
          </div>

          <Button type="secondary" className={styles.button} onClick={AppRouter.profile.id(it.id).open}>
            {intl.formatMessage({
              id: "dating.list.open_profile",
              defaultMessage: "Open Profile",
            })}
          </Button>
        </div>
      ))}
    </div>
  );
};

DatingList.defaultProps = {};
