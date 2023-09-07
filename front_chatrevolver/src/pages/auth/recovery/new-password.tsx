import React from "react";
import { NextRouter, withRouter } from "next/router";
import { AuthLayout, BackButton, RecoveryNewPasswordForm } from "modules/auth";
import AppRouter from "router";

const NewPasswordPage = (props: { router: NextRouter }) => {
  const query = props.router.query;
  const code = query.code as string;

  if (!code) {
    return null;
  }

  return (
    <AuthLayout>
      <BackButton onClick={() => AppRouter.auth.login.open()} />
      <RecoveryNewPasswordForm code={code} />
    </AuthLayout>
  );
};

export default withRouter(NewPasswordPage);
