import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import YandexMetrika from "@yoldi/integrations/yandex-metrika";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="/img/fav.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <>
            <YandexMetrika />
          </>
        </body>
      </Html>
    );
  }
}
