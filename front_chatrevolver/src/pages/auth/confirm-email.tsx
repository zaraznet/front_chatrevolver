import React from "react";
import { NextRouter, withRouter } from "next/router";
import { AuthLayout, BackButton, ConfirmEmailForm } from "modules/auth";
import AppRouter from "router";

const ConfirmEmailPage = (props: { router: NextRouter }) => {
  const query = props.router.query;
  const code = query.code as string;

  if (!code) return null;

  return (
    <AuthLayout>
      <BackButton onClick={() => AppRouter.auth.signup.open()} />
      <ConfirmEmailForm code={code} />
    </AuthLayout>
  );
};

export default withRouter(ConfirmEmailPage);
