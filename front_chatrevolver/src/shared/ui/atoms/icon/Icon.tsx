import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./icon.module.scss";

export type IconName =
  | "apple"
  | "arrow-left"
  | "chats"
  | "contacts"
  | "dating"
  | "filters"
  | "google"
  | "input-error"
  | "location"
  | "logout"
  | "message"
  | "more"
  | "password-hide"
  | "password-show"
  | "read"
  | "send"
  | "settings"
  | "trash"
  | "unfollow"
  | "video"
  | "cancel"
  | "vk";

interface IIcon {
  name: IconName;
  onClick?: () => void;

  className?: string;
  style?: CSSProperties;

  overrideColor: boolean;
}

const loadIcon = (name: IconName, overrideColor: boolean): string => {
  const { default: svg } = require(`!raw-loader!./svg/${name}.svg`);

  if (!overrideColor) return svg;

  return svg
    .replace(/fill="(?!none)([^\"]*)"/g, `fill="currentColor"`)
    .replace(/stroke="(?!none)([^\"]*)"/g, `stroke="currentColor"`);
};

export const Icon = (props: IIcon) => (
  <span
    className={cx(styles.icon_wrap, props.className, "app-icon")}
    style={props.style}
    dangerouslySetInnerHTML={{ __html: loadIcon(props.name, props.overrideColor) }}
    onClick={props.onClick}
  />
);

Icon.defaultProps = {
  overrideColor: true,
};
