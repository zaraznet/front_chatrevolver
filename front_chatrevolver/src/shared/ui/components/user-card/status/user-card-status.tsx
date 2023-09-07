import React from "react";
import styles from "./user-card-status.module.scss";
import cx from "classnames";

export interface IUserCardStatus {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const UserCardStatus = (props: IUserCardStatus) => {
  return (
    <div className={cx(styles.user_card_status, props.className)} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

UserCardStatus.defaultProps = {};
