import React from "react";
import { api } from "shared/api";
import { useAppForm } from "shared/lib";
import { PasswordInput, TextInput } from "modules/auth";
import { Button } from "shared/ui";
import Link from "next/link";
import AppRouter from "router";
import { RecoveryLink } from "./recovery-link";
import { useIntl } from "react-intl";

export interface ILoginForm {}

export const LoginForm = (props: ILoginForm) => {
  const form = useAppForm({ onSubmit: api.auth.login });

  const { loading } = form.submitProps;

  const intl = useIntl();

  return (
    <form onSubmit={form.onSubmit}>
      <TextInput
        label={intl.formatMessage({ id: "input.email", defaultMessage: "Email" })}
        {...form.register("email")}
      />
      <PasswordInput
        label={intl.formatMessage({ id: "input.password", defaultMessage: "Password" })}
        {...form.register("password")}
      />

      <Link {...AppRouter.auth.recovery.link}>
        <RecoveryLink>
          {intl.formatMessage({
            id: "auth.login.recovery_link",
            defaultMessage: "I forgot my password",
          })}
        </RecoveryLink>
      </Link>

      {form.globalError}

      <Button type="primary" htmlType="submit" loading={loading} style={{ marginTop: 24 }}>
        {intl.formatMessage({
          id: "auth.login.submit",
          defaultMessage: "Sign in",
        })}
      </Button>
    </form>
  );
};
