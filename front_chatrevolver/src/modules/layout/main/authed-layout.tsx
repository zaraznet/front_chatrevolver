import React, { useEffect, useState } from "react";
import { Sidebar } from "modules/sidebar/sidebar";
import { NextRouter } from "next/router";
import { Header } from "modules/user";
import { api } from "shared/api";

import styles from "./main-layout.module.scss";

export interface IAuthedLayout {
  router: NextRouter;
  children?: React.ReactNode;
}

export const AuthedLayout = (props: IAuthedLayout) => {
  const profile = api.user.useGetMe({ refreshInterval: 3000 });
  const deleted = profile.data?.deleted;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarToggle = () => setSidebarOpen((value) => !value);
  const sidebarClose = () => setSidebarOpen(false);

  useEffect(() => {
    props.router.events.on("routeChangeStart", sidebarClose);

    return () => {
      props.router.events.off("routeChangeStart", sidebarClose);
    };
  }, []);

  useEffect(() => {
    if (deleted && ["/rating", "/profile/", "/dating"].find((it) => props.router.pathname.startsWith(it))) {
      props.router.replace("/profile");
    }
  }, [deleted, props.router.pathname]);

  return (
    <div className={styles.main_layout}>
      {!deleted && <Sidebar router={props.router} open={sidebarOpen} onClose={sidebarClose} />}

      <section className={styles.main}>
        <Header router={props.router} onToggleSidebar={sidebarToggle} />
        <div className={styles.main__content}>{props.children}</div>
      </section>
    </div>
  );
};

AuthedLayout.defaultProps = {};
