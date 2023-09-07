import React, { CSSProperties } from "react";
import formatNumber from "@yoldi/utils/format/number";
import { useIntl } from "react-intl";

export interface IDistance {
  value?: number;
  className?: string;
  style?: CSSProperties;
}

export const Distance = (props: IDistance) => {
  const intl = useIntl();

  if (props.value === undefined) return null;

  if (props.value < 1) {
    return (
      <div className={props.className} style={props.style}>
        {intl.formatMessage(
          {
            id: "shared.distance.meters",
            defaultMessage: "{dist} m from you",
          },
          {
            dist: Math.floor(props.value * 1000),
          }
        )}
      </div>
    );
  }

  return (
    <div className={props.className} style={props.style}>
      {intl.formatMessage(
        {
          id: "shared.distance.km",
          defaultMessage: "{dist} km from you",
        },
        {
          dist: formatNumber(props.value, 1),
        }
      )}
    </div>
  );
};

Distance.defaultProps = {};
