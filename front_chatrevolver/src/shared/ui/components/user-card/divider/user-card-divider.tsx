import React from "react";
import styles from "./user-card-divider.module.scss";

export interface IUserCardDivider {
  children?: React.ReactNode;
}

export const UserCardDivider = (props: IUserCardDivider) => {
  return <div className={styles.user_card_divider}>{props.children}</div>;
};

UserCardDivider.defaultProps = {};
