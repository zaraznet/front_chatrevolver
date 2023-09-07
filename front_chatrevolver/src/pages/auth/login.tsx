import React from "react";
import { AuthLayout, AuthTabs, LoginForm, SocialsLogin } from "modules/auth";

const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthTabs active="login" />
      <LoginForm />
      <SocialsLogin />
    </AuthLayout>
  );
};

export default LoginPage;
