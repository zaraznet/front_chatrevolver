import React from "react";
import cx from "classnames";

import styles from "./avatar.module.scss";

export interface IAvatar {
  src?: string;
  gender?: "MALE" | "FEMALE" | "UNDEF";
  online?: boolean;
  size: number;
  shape: "circle" | "square";
  className?: string;
  onClick?: () => void;
}

export const Avatar = (props: IAvatar) => {
  let src = "/img/avatar_male.jpg";

  if (props.gender === "FEMALE") {
    src = "/img/avatar_female.jpg";
  }

  if (props.src) {
    if (props.src.includes("/")) {
      src = props.src;
    } else {
      src = `${process.env.API_URL}/static/${props.src}`;
    }
  }

  return (
    <div
      className={cx(
        styles.avatar,
        props.shape === "circle" && styles.circle,
        props.onClick && styles.clickable,
        props.className
      )}
      style={{ width: props.size, height: props.size }}
      onClick={props.onClick}
    >
      <img src={src} alt="" />
      {props.online && <span className={styles.online} />}
    </div>
  );
};

Avatar.defaultProps = {
  size: 44,
  shape: "circle",
};
