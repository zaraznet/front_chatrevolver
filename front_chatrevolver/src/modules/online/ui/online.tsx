import React, { CSSProperties } from "react";
import { useStore } from "effector-react";
import { onlineStore } from "modules/online/model";
import { formatOnline } from "modules/online/lib";
import { useIntl } from "react-intl";

export interface IOnline {
  className?: string;
  style?: CSSProperties;
}

export const Online = (props: IOnline) => {
  const online = useStore(onlineStore);
  const intl = useIntl();

  return (
    <span className={props.className} style={props.style}>
      {intl.formatMessage(
        {
          id: "shared.online",
          defaultMessage: "{value} online",
        },
        {
          value: formatOnline(online),
        }
      )}
    </span>
  );
};

Online.defaultProps = {};
