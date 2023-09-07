import React from "react";
import styles from "./user-card-skeleton.module.scss";

export interface IUserCardSkeleton {}

export const UserCardSkeleton = (props: IUserCardSkeleton) => {
  return (
    <div className={styles.user_card_skeleton}>
      <div className={styles.top}>
        <div className={styles.ava} />
        <div className={styles.main}>
          <div className={styles.name} />
          <div className={styles.about}>
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <p className={styles.status} />
        <div className={styles.tags}>
          <span className={styles.tags_item} />
          <span className={styles.tags_item} />
          <span className={styles.tags_item} />
          <span className={styles.tags_item} />
        </div>
      </div>
    </div>
  );
};

UserCardSkeleton.defaultProps = {};
