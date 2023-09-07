import React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "shared/lib/backend-errors.i18n";

export function apiError<Values>(errorCode: string) {
  return <FormattedMessage {...(messages as any)[errorCode]} />;
}
