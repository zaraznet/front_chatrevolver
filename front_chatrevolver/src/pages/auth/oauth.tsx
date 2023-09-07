import React, { useEffect } from "react";
import { NextRouter, withRouter } from "next/router";
import { setAccessToken } from "shared/api";

const OauthPage = (props: { router: NextRouter }) => {
  const query = props.router.query;
  const token = query.token as string;

  useEffect(() => {
    if (!token) return;

    setAccessToken(token);
    props.router.replace("/profile");
  }, [token]);

  return null;
};

export default withRouter(OauthPage);
