import React from "react";
import styles from "./ad-card.module.scss";

export interface IAdCard {}

export const AdCard = (props: IAdCard) => {
  return null;

  return (
    <div className={styles.ad_card}>
      <img src="/img/uber-baner.png" />
    </div>
  );
};

AdCard.defaultProps = {};
