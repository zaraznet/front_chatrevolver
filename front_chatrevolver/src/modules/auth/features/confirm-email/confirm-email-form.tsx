import { AuthForm } from "modules/auth";
import React, { useState } from "react";
import { api } from "shared/api";
import { useDidMount } from "@yoldi/utils/hooks";
import { useIntl } from "react-intl";

export interface IConfirmEmailForm {
  code: string;
}

export const ConfirmEmailForm = (props: IConfirmEmailForm) => {
  const [error, setError] = useState(false);

  useDidMount(async () => {
    try {
      await api.auth.activateEmail(props.code);
    } catch (e) {
      setError(true);
      console.error(e);
    }
  });

  const intl = useIntl();

  return (
    <AuthForm>
      <h1>{intl.formatMessage({ id: "auth.confirm-email.title", defaultMessage: "Email Confirmation" })}</h1>

      {!error && (
        <p>
          {intl.formatMessage({
            id: "auth.confirm-email.loading",
            defaultMessage: "Wait while we confirm your email...",
          })}
        </p>
      )}

      {error && (
        <p>
          {intl.formatMessage({
            id: "auth.confirm-email.error",
            defaultMessage: "Something went wrong. Try to follow the link from the letter again.",
          })}
        </p>
      )}
    </AuthForm>
  );
};

ConfirmEmailForm.defaultProps = {};
