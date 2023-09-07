import { useIntl } from "react-intl";

export default function Privacy() {
  const intl = useIntl();

  return (
    <>
      <p>
        {intl.formatMessage({
          id: "faq.articles.privacy.text1",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.privacy.text2",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.privacy.text3",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.privacy.text4",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.privacy.text5",
        })}
      </p>
    </>
  );
}
