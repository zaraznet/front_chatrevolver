import React from "react";
import { UserCardDescriptionItem } from "./user-card-description-item";

import styles from "./user-card-description.module.scss";

export interface IUserCardDescription {
  children?: React.ReactNode;
}

export const UserCardDescription = (props: IUserCardDescription) => {
  return <div className={styles.user_card_description}>{props.children}</div>;
};

UserCardDescription.Item = UserCardDescriptionItem;

UserCardDescription.defaultProps = {};
