import React from "react";
import { api } from "shared/api";
import { useAppForm } from "shared/lib";
import { AuthForm, TextInput } from "modules/auth";
import { Button } from "shared/ui";
import { useIntl } from "react-intl";

export interface IRecoveryForm {
  onSuccess: (email: string) => void;
}

export const RecoveryForm = (props: IRecoveryForm) => {
  const form = useAppForm({
    onSubmit: api.auth.initRecoverPassword,
    onSuccess: (resp, values) => props.onSuccess(values.email),
  });

  const { loading } = form.submitProps;

  const intl = useIntl();

  return (
    <AuthForm onSubmit={form.onSubmit}>
      <h1>{intl.formatMessage({ id: "auth.recovery.title", defaultMessage: "Recover the password" })}</h1>

      <TextInput
        label={intl.formatMessage({ id: "input.email", defaultMessage: "Email" })}
        autoFocus
        {...form.register("email")}
      />

      {form.globalError}

      <Button type="primary" htmlType="submit" loading={loading} style={{ marginTop: 10 }}>
        {intl.formatMessage({ id: "auth.recovery.submit", defaultMessage: "Send" })}
      </Button>
    </AuthForm>
  );
};
