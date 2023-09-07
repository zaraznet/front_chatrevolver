import React from "react";
import { AuthForm, TextInput } from "modules/auth";
import { useIntl } from "react-intl";

export interface IRecoverySuccess {
  email: string;
}

export const RecoverySuccess = (props: IRecoverySuccess) => {
  const intl = useIntl();

  return (
    <AuthForm>
      <h1>{intl.formatMessage({ id: "auth.recovery.sent.title", defaultMessage: "Recover the password" })}</h1>

      <p>
        {intl.formatMessage({
          id: "auth.recovery.sent.description",
          defaultMessage: "We sent an email to your address. Click the link in the letter to recover the password.",
        })}
      </p>

      <TextInput
        label={intl.formatMessage({ id: "input.email", defaultMessage: "Email" })}
        value={props.email}
        disabled
      />
    </AuthForm>
  );
};

RecoverySuccess.defaultProps = {};
