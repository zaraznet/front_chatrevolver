import { useIntl } from "react-intl";

export default function TermsOfUse() {
  const intl = useIntl();

  return (
    <>
      <h2>
        {intl.formatMessage({
          id: "faq.articles.terms-of-use.title",
        })}
      </h2>
      <p>
        {intl.formatMessage({
          id: "faq.articles.terms-of-use.text",
        })}
      </p>
    </>
  );
}
