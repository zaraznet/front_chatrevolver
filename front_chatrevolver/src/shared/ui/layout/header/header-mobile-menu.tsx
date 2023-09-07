import React from "react";
import styles from "./header-mobile-menu.module.scss";

export interface IHeaderMobileMenu {
  onClick?: () => void;
}

export const HeaderMobileMenu = (props: IHeaderMobileMenu) => {
  return (
    <button className={styles.header_mobile_menu} onClick={props.onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

HeaderMobileMenu.defaultProps = {};
