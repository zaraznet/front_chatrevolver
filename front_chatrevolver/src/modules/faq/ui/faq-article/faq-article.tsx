import React, { CSSProperties } from "react";
import styles from "./faq-article.module.scss";
import { useRouter } from "next/router";

import WhatIs from "components/what-is";
import Register from "components/register";
import Rating from "components/rating";
import Privacy from "components/privacy";
import Help from "components/help";
import PrivacyPolicy from "components/privacy-policy";
import TermsOfUse from "components/terms-of-use";

// export interface IFaqArticle {
//   title?: string;
//   content?: string;

//   className?: string;
//   style?: CSSProperties;
// }

const articles = {
  "what-is": <WhatIs />,
  register: <Register />,
  rating: <Rating />,
  privacy: <Privacy />,
  help: <Help />,
  "terms-of-use": <TermsOfUse />,
  "privacy-policy": <PrivacyPolicy />,
};

export const FaqArticle = () => {
  const router = useRouter();

  return (
    <article className={styles.faq_article}>
      <div className={styles.content}>
        {/* @ts-ignore */}
        {articles[router.query.slug]}
      </div>
    </article>
  );
};

FaqArticle.defaultProps = {};
