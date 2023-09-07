import { defineMessages } from "react-intl";

type BackendErrorsRecords = Record<string, { id: string; defaultMessage: string }>;

export const messages: BackendErrorsRecords = defineMessages({
  ACTIVATION_CODE_NOT_FOUND: {
    id: `errors.activation_code_not_found`,
    defaultMessage: "ACTIVATION CODE NOT FOUND",
  },
  USER_BLOCKED: {
    id: `errors.blocked`,
    defaultMessage: "blocked",
  },
  USER_LOCKED: {
    id: `errors.user_locked`,
    defaultMessage: "USER LOCKED",
  },
  EMAIL_INCORRECT_FORMAT: {
    id: `errors.email_incorrect_format`,
    defaultMessage: "Невалидный email",
  },
  BAD_OAUTH: {
    id: `errors.bad_oauth`,
    defaultMessage: "BAD OAUTH",
  },
  NEED_EMAIL: {
    id: `errors.need_email`,
    defaultMessage: "NEED EMAIL",
  },
  UNKNOWN: {
    id: `errors.unknown`,
    defaultMessage: "UNKNOWN",
  },
  USER_NOT_FOUND: {
    id: `errors.user_not_found`,
    defaultMessage: "Пользователь с таким email не существует",
  },
  RECOVERY_CODE_NOT_FOUND: {
    id: `errors.recovery_code_not_found`,
    defaultMessage: "Неверный код восстановления пароля",
  },
  USER_NOT_ACTIVATED: {
    id: `errors.user_not_activated`,
    defaultMessage: "Email не подтвержден",
  },
  WRONG_PASSWORD: {
    id: `errors.wrong_password`,
    defaultMessage: "Неверный пароль",
  },
  EMAIL_IN_USE: {
    id: `errors.email_in_use`,
    defaultMessage: "Этот Email уже существует. Попробуйте войти в аккаунт",
  },
  ILLEGAL_STATE_NO_RIGHTS: {
    id: `errors.ILLEGAL_STATE_NO_RIGHTS`,
    defaultMessage: "ILLEGAL_STATE_NO_RIGHTS",
  },
  [""]: {
    id: `errors._ignore_this_message`,
    defaultMessage: "..",
  },
});

export default defineMessages(messages);
