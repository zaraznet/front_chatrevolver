import React from "react";
import styles from "./header-language.module.scss";
import { LocaleContext } from "contexts/LocaleContext";

export interface IHeaderLanguage {
  children?: React.ReactNode;
}

export const HeaderLanguage = () => {
  return (
    <div className={styles.header_language}>
      <LocaleContext.Consumer>
        {({ currentLocale, toggleLocale }) => (
          <button
            className={styles.language}
            onClick={() => {
              toggleLocale(currentLocale === "ru" ? "en" : "ru");
            }}
          >
            {currentLocale === "ru" ? "en" : "ru"}
          </button>
        )}
      </LocaleContext.Consumer>
    </div>
  );
};

HeaderLanguage.defaultProps = {};
