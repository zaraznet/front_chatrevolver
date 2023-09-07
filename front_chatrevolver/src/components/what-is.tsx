import { useIntl } from "react-intl";

export default function WhatIs() {
  const intl = useIntl();

  return (
    <>
      <h3>
        {intl.formatMessage({
          id: "faq.articles.what-is.title1",
        })}
      </h3>

      <p>
        {intl.formatMessage({
          id: "faq.articles.what-is.text1",
        })}
      </p>

      <h3>
        {intl.formatMessage({
          id: "faq.articles.what-is.title2",
        })}
      </h3>

      <p>
        {intl.formatMessage({
          id: "faq.articles.what-is.text2",
        })}
      </p>

      <h3>
        {intl.formatMessage({
          id: "faq.articles.what-is.title3",
        })}
      </h3>

      <ul>
        <li>
          {intl.formatMessage({
            id: "faq.articles.what-is.li1",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.what-is.li2",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.what-is.li3",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.what-is.li4",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.what-is.li5",
          })}
        </li>
      </ul>

      <h3>
        {intl.formatMessage({
          id: "faq.articles.what-is.title4",
        })}
      </h3>

      <p>
        {intl.formatMessage({
          id: "faq.articles.what-is.text3",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.what-is.text4",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.what-is.text5",
        })}
      </p>
    </>
  );
}
