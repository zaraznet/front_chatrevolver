import React from "react";
import { NextRouter } from "next/router";
import { useAuthed } from "shared/api";
import { isServer } from "@yoldi/utils/helpers";
import { AuthedLayout } from "./authed-layout";
import { GuestLayout } from "./guest-layout";

export interface IMainLayout {
  router: NextRouter;
  children?: React.ReactNode;
}

export const MainLayout = (props: IMainLayout) => {
  const authed = useAuthed();

  if (isServer()) return null;

  if (authed) return <AuthedLayout {...props} />;

  return <GuestLayout {...props} />;
};

MainLayout.defaultProps = {};
