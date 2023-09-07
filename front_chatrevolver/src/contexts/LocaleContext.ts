import React from "react";

export const LocaleContext = React.createContext({
  currentLocale: "ru",
  toggleLocale: (lang: string) => {},
});
