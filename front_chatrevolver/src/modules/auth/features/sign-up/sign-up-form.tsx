import React from "react";
import { api, RegisterDTO } from "shared/api";
import { useAppForm } from "shared/lib";
import { CheckboxInput, PasswordInput, TextInput } from "modules/auth";
import { Button } from "shared/ui";
import Link from "next/link";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";

export interface ISignUpForm {
  onSuccess: (email: string) => void;
}

const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const SignUpForm = (props: ISignUpForm) => {
  const form = useAppForm<RegisterDTO & { agreement: boolean }>({
    onSubmit: api.auth.register,
    onSuccess: (resp, values) => props.onSuccess(values.email),
  });

  const { loading } = form.submitProps;

  const intl = useIntl();

  return (
    <form onSubmit={form.onSubmit}>
      <TextInput
        label={intl.formatMessage({
          id: "input.username",
          defaultMessage: "Username (Max 10 symbols)",
        })}
        autoFocus
        {...form.register("name", { maxLength: 10 })}
      />
      <TextInput
        label={intl.formatMessage({
          id: "input.email",
          defaultMessage: "Email",
        })}
        {...form.register("email", { pattern: emailPattern })}
      />
      <PasswordInput
        label={intl.formatMessage({
          id: "input.new_password",
          defaultMessage: "Password (Latin, number, min 6 symbols)",
        })}
        {...form.register("password", { minLength: 6 })}
      />

<CheckboxInput {...form.register("agreement")}>
  <FormattedMessage
    id="auth.sign_up.checkbox"
    defaultMessage="I’m 18 y.o. I agree with {link}"
    values={{
      link: (text) => (
        <Link href="/faq/terms-of-use">
          <a>{text}</a>
        </Link>
      ),
    }}
  />
</CheckboxInput>

      {form.globalError}

      <Button type="primary" htmlType="submit" loading={loading} style={{ marginTop: 24 }}>
        {intl.formatMessage({
          id: "auth.sign_up.submit",
          defaultMessage: "Sign up",
        })}
      </Button>
    </form>
  );
};
