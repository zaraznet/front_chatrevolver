import React, { FormEventHandler } from "react";
import styles from "./auth-form.module.scss";

export interface IAuthForm {
  children?: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const AuthForm = (props: IAuthForm) => {
  return (
    <form className={styles.auth_form} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

AuthForm.defaultProps = {};
