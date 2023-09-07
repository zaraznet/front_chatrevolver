import React from "react";
import styles from "./user-card-header-my.module.scss";

export interface IUserCardHeaderMy {
  children?: React.ReactNode;
}

export const UserCardHeaderMy = (props: IUserCardHeaderMy) => {
  return <div className={styles.user_card_header_my}>{props.children}</div>;
};

UserCardHeaderMy.defaultProps = {};
