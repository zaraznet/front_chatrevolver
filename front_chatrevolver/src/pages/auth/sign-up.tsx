import React, { useState } from "react";
import { AuthLayout, AuthTabs, BackButton, SignUpForm, SignUpSuccess, SocialsLogin } from "modules/auth";

const SignUpPage = () => {
  const [emailSent, setEmailSent] = useState<string>();

  if (emailSent) {
    return (
      <AuthLayout>
        <BackButton onClick={() => setEmailSent(undefined)} />
        <SignUpSuccess email={emailSent} />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <AuthTabs active="sign-up" />
      <SignUpForm onSuccess={setEmailSent} />
      <SocialsLogin />
    </AuthLayout>
  );
};

export default SignUpPage;
