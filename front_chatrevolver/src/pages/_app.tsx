import React, { useState } from "react";
import Head from "next/head";
import App from "next/app";
import { captureComponentException } from "@yoldi/integrations/sentry";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import { AppLayout } from "app";
import { ModalsRoot } from "shared/ui";
import { LocaleContext } from "../contexts/LocaleContext";

import "shared/ui/styles/style.scss";

const cache = createIntlCache();

const getMessages = (locale: string) => {
  return require(`../shared/lang/lang/${locale.split("-")[0]}.json`);
};

export default class MyApp extends App {
  constructor(props: any) {
    super(props);

    this.state = {
      currentLocale: "ru",
      toggleLocale: this.toggleLocale,
    };
  }

  toggleLocale = (lang: string) => {
    this.setState((state) => ({
      currentLocale: lang,
    }));
  };

  componentDidCatch(error: Error, errorInfo: any) {
    captureComponentException(error, errorInfo);
  }

  private static getIntl(locale: string) {
    const messages = getMessages(locale);
    return createIntl({ locale: locale, messages, defaultLocale: "ru" }, cache);
  }

  render() {
    let { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Revolver Video Chat</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        {/* @ts-ignore */}
        <LocaleContext.Provider value={this.state}>
          {/* @ts-ignore */}
          <RawIntlProvider value={MyApp.getIntl(this.state.currentLocale)}>
            <AppLayout router={this.props.router}>
              <Component {...pageProps} />
            </AppLayout>
            <ModalsRoot />
          </RawIntlProvider>
        </LocaleContext.Provider>
      </>
    );
  }
}
