import React, { useEffect } from "react";
import { NextRouter } from "next/dist/client/router";
import { getAccessToken, onAccessTokenChange } from "shared/api";
import { MainLayout } from "modules/layout";

interface IAppLayout {
  router: NextRouter;
  children: React.ReactNode;
}

const defaultRedirectTo = "/profile";
let redirectTo: string | undefined;

const authGuard = (router: NextRouter, accessToken?: string) => {
  // auth pages
  if (router.pathname.startsWith("/auth/")) {
    if (accessToken) {
      router.push(redirectTo || defaultRedirectTo);
      redirectTo = undefined;
    }

    return;
  }

  if (
    router.pathname.startsWith("/profile") || //
    router.pathname === "/rating" ||
    router.pathname == "/dating"
  ) {
    if (!accessToken) {
      router.push("/");
    }
  }
};

export const AppLayout = ({ router, children }: IAppLayout) => {
  useEffect(() => {
    const accessToken = getAccessToken();
    const unsubscribe = onAccessTokenChange((accessToken) => authGuard(router, accessToken));

    authGuard(router, accessToken);

    return unsubscribe;
  }, []);

  if (router.pathname.startsWith("/auth")) {
    return <>{children}</>;
  }

  return <MainLayout router={router}>{children}</MainLayout>;
};
