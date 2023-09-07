import React from "react";
import { NextRouter } from "next/router";
import { GuestHeader } from "../guest-header";
import styles from "./main-layout.module.scss";

export interface IGuestLayout {
  router: NextRouter;
  children?: React.ReactNode;
}

export const GuestLayout = (props: IGuestLayout) => {
  return (
    <div className={styles.main_layout}>
      <section className={styles.main}>
        <GuestHeader router={props.router} />
        <div className={styles.main__content}>{props.children}</div>
      </section>
    </div>
  );
};

GuestLayout.defaultProps = {};
