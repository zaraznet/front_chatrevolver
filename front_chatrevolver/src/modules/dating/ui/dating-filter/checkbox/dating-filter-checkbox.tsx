import React, { forwardRef } from "react";
import cx from "classnames";
import styles from "./dating-filter-checkbox.module.scss";
import { CheckboxInput, ICheckboxInput } from "modules/auth";

export const DatingFilterCheckbox = forwardRef<HTMLInputElement, ICheckboxInput>((props: ICheckboxInput, ref) => (
  <CheckboxInput {...props} className={cx(styles.dating_filter_checkbox, props.className)} ref={ref}>
    {props.children}
  </CheckboxInput>
));

DatingFilterCheckbox.defaultProps = {};
