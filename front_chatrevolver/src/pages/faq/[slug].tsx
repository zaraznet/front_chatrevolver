import React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { FaqArticle, FaqLayout } from "modules/faq";
import { getFaqBySlug, getFaqSlugs } from "modules/faq/model/faq.model";

// interface IFaqPage {
//   title?: string;
//   slug: string;
//   content: string;
// }

const FaqPage = () => {
  return (
    <FaqLayout>
      <FaqArticle />
    </FaqLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
//   const faq = await getFaqBySlug((params?.slug as string) + (String(query.lang) === "en" ? "-en" : ""));

//   return { props: faq };
// };

export default FaqPage;
