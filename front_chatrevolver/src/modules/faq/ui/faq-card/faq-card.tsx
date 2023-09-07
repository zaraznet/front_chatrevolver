import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./faq-card.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { Modals } from "shared/ui";
import { SupportHelpModal } from "modules/faq/actions";
import { useIntl } from "react-intl";
import { LocaleContext } from "contexts/LocaleContext";

export interface IFaqCard {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const menu = [
  { slug: "what-is", titleId: "faq.titles.what-is" },
  { slug: "register", titleId: "faq.titles.register" },
  { slug: "rating", titleId: "faq.titles.rating" },
  { slug: "privacy", titleId: "faq.titles.privacy" },
  { slug: "help", titleId: "faq.titles.help" },
  { slug: "terms-of-use", titleId: "faq.titles.terms-of-use" },
  { slug: "privacy-policy", titleId: "faq.titles.privacy-policy" },
];

export const FaqCard = (props: IFaqCard) => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const onSupportHelp = Modals.prepare(SupportHelpModal);

  const intl = useIntl();

  return (
    <div className={cx(styles.faq_card, props.className)} style={props.style}>
      <div className={styles.header}>
        <p className={styles.title}>
          {intl.formatMessage({
            id: "menu.faq",
            defaultMessage: "FAQ",
          })}
        </p>
        <a className={styles.support_link} onClick={onSupportHelp}>
          {intl.formatMessage({
            id: "faq.support_modal.title",
            defaultMessage: "Support help",
          })}
        </a>
      </div>
      <div className={styles.content}>
        <LocaleContext.Consumer>
          {({ currentLocale, toggleLocale }) => {
            let lang: string;

            if (router.asPath.includes("?lang")) {
              const position = router.asPath.indexOf("?lang");
              lang = router.asPath.slice(position);
            } else {
              lang = "";
            }

            return menu.map((it, ind) => (
              <Link href={`/faq/${it.slug}${lang}`} key={ind}>
                <a className={cx(styles.link, it.slug === slug && styles.active)}>
                  {intl.formatMessage({
                    id: `${it.titleId}`,
                  })}
                </a>
              </Link>
            ));
          }}
        </LocaleContext.Consumer>
      </div>
    </div>
  );
};

FaqCard.defaultProps = {};
