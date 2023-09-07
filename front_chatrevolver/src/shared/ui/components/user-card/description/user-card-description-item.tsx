import React from "react";
import styles from "./user-card-description-item.module.scss";

export interface IUserCardDescriptionItem {
  children?: React.ReactNode;
}

export const UserCardDescriptionItem = (props: IUserCardDescriptionItem) => {
  return <div className={styles.user_card_description_item}>{props.children}</div>;
};

UserCardDescriptionItem.defaultProps = {};
