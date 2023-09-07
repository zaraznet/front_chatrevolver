import React, { CSSProperties } from "react";
import { useIntl } from "react-intl";

export interface IGender {
  gender?: "MALE" | "FEMALE" | "UNDEF";
  className?: string;
  style?: CSSProperties;
}

export const Gender = (props: IGender) => {
  const intl = useIntl();

  return (
    <span className={props.className} style={props.style}>
      {props.gender === "MALE" &&
        intl.formatMessage({
          id: "gender.male",
          defaultMessage: "Man",
        })}
      {props.gender === "FEMALE" &&
        intl.formatMessage({
          id: "gender.female",
          defaultMessage: "Woman",
        })}
    </span>
  );
};

Gender.defaultProps = {};
