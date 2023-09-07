import React from "react";
import { AuthForm, TextInput } from "modules/auth";
import { useIntl } from "react-intl";

export interface ISignUpSuccess {
  email: string;
}

export const SignUpSuccess = (props: ISignUpSuccess) => {
  const intl = useIntl();

  return (
    <AuthForm>
      <h1>
        {intl.formatMessage({
          id: "auth.sign_up.success.title",
          defaultMessage: "Sign up with email",
        })}
      </h1>

      <p>
        {intl.formatMessage({
          id: "auth.sign_up.success.description",
          defaultMessage: "We sent an email to your address. Click the link in the letter to confirm your email.",
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

SignUpSuccess.defaultProps = {};
