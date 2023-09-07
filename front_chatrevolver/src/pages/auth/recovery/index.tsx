import React, { useState } from "react";
import { AuthLayout, BackButton, RecoveryForm, RecoverySuccess } from "modules/auth";
import AppRouter from "router";

const RecoveryPage = () => {
  const [emailSent, setEmailSent] = useState<string>();

  if (emailSent) {
    return (
      <AuthLayout>
        <BackButton onClick={() => setEmailSent(undefined)}>Back</BackButton>
        <RecoverySuccess email={emailSent} />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <BackButton onClick={() => AppRouter.auth.login.open()}>Back</BackButton>
      <RecoveryForm onSuccess={setEmailSent} />
    </AuthLayout>
  );
};

export default RecoveryPage;
