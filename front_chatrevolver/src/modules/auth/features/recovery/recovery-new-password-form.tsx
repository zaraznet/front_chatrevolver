import React from "react";
import { api, SetNewPasswordDTO } from "shared/api";
import { useAppForm } from "shared/lib";
import { AuthForm, PasswordInput } from "modules/auth";
import { Button } from "shared/ui";
import { useIntl } from "react-intl";

export interface IRecoveryNewPasswordForm {
  code: string;
}

export const RecoveryNewPasswordForm = (props: IRecoveryNewPasswordForm) => {
  const form = useAppForm<SetNewPasswordDTO>({
    onSubmit: (values) => api.auth.setNewPassword({ ...values, code: props.code }),
  });

  const { loading } = form.submitProps;

  const intl = useIntl();

  return (
    <AuthForm onSubmit={form.onSubmit}>
      <h1>{intl.formatMessage({ id: "auth.recovery.new_password.title", defaultMessage: "New password" })}</h1>

      <PasswordInput
        label={intl.formatMessage({
          id: "input.new_password",
          defaultMessage: "Password (Latin, number, min 6 symbols)",
        })}
        autoFocus
        {...form.register("password1")}
      />
      <PasswordInput
        label={intl.formatMessage({
          id: "input.new_password_repeat",
          defaultMessage: "Repeat the password",
        })}
        autoFocus
        {...form.register("password2")}
      />

      {form.globalError}

      <Button type="primary" htmlType="submit" loading={loading} style={{ marginTop: 10 }}>
        {intl.formatMessage({ id: "auth.recovery.new_password.submit", defaultMessage: "Sign in" })}
      </Button>
    </AuthForm>
  );
};
