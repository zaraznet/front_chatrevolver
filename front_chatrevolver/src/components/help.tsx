import { useIntl } from "react-intl";

export default function Help() {
  const intl = useIntl();

  return (
    <>
      <p>
        {intl.formatMessage({
          id: "faq.articles.help.text1",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.help.text2",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.help.text3",
        })}
      </p>
    </>
  );
}
