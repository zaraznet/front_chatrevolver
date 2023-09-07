import React, { CSSProperties } from "react";
import { FaqCard } from "modules/faq";
import cx from "classnames";

import styles from "./faq-layout.module.scss";

export interface IFaqLayout {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const FaqLayout = (props: IFaqLayout) => (
  <div className={cx(styles.faq_layout, props.className)} style={props.style}>
    <div className={styles.left}>
      <FaqCard />
    </div>
    {props.children}
  </div>
);

FaqLayout.defaultProps = {};
