import React from "react";

export interface IFlagIcon {
  country?: string;
  size: 24 | 32 | 64;
}

export const FlagIcon = (props: IFlagIcon) => {
  if (!props.country) return null;

  //return <img src={`https://www.countryflags.io/${props.country}/flat/${props.size}.png`} alt={props.country} />;

  return (
    <img
      //src={`https://countryflagsapi.com/svg/${props.country}`}
      src={`https://www.countryflagicons.com/FLAT/64/${props.country}.png`}
      alt={props.country}
      style={{ width: props.size, height: "auto" }}
    />
  );
};

FlagIcon.defaultProps = {
  size: 24,
};
