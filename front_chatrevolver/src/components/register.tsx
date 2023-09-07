import { useIntl } from "react-intl";

export default function Register() {
  const intl = useIntl();

  return (
    <>
      <p>
        {intl.formatMessage({
          id: "faq.articles.register.text1",
        })}
      </p>
      <p>
        {intl.formatMessage({
          id: "faq.articles.register.text2",
        })}
      </p>

      <ul>
        <li>
          {intl.formatMessage({
            id: "faq.articles.register.li1",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.register.li2",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.register.li3",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.register.li4",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.register.li5",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.register.li6",
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: "faq.articles.register.li7",
          })}
        </li>
      </ul>

      <p>
        {intl.formatMessage({
          id: "faq.articles.register.text3",
        })}
      </p>
    </>
  );
}
