import { useIntl } from "react-intl";

export default function Rating() {
  const intl = useIntl();

  return (
    <>
      <p>
        {intl.formatMessage({
          id: "faq.articles.rating.text1",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.rating.text2",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.rating.text3",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.rating.text4",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.rating.text5",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.rating.text6",
        })}
      </p>
    </>
  );
}
