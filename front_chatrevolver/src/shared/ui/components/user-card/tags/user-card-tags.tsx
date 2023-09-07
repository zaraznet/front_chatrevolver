import React from "react";
import styles from "./user-card-tags.module.scss";
import { useIntl } from "react-intl";

export interface IUserCardTags {
  tags?: string[];
}

export const UserCardTags = (props: IUserCardTags) => {
  const intl = useIntl();

  if (!props.tags) return null;

  return (
    <div className={styles.user_card_tags}>
      <span className={styles.label}>
        {intl.formatMessage({
          id: "shared.user_card.tags",
          defaultMessage: "Tags",
        })}{" "}
      </span>

      {props.tags.map((it, key) => (
        <span key={key} className={styles.item}>
          {it}
        </span>
      ))}
    </div>
  );
};

UserCardTags.defaultProps = {};
