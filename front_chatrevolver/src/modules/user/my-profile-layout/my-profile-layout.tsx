import React from "react";
import styles from "./my-profile-layout.module.scss";
import { MyPhoto } from "modules/user/my-photo";

export interface IMyProfileLayout {
  extra?: React.ReactNode;
  children?: React.ReactNode;
}

export const MyProfileLayout = (props: IMyProfileLayout) => {
  return (
    <div className={styles.my_profile_layout}>
      <div className={styles.left}>
        <MyPhoto />
        {props.extra}
      </div>

      <div className={styles.right}>{props.children}</div>
    </div>
  );
};

MyProfileLayout.defaultProps = {};
