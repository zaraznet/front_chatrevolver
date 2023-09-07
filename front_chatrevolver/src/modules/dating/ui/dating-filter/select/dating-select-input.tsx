import React, { forwardRef } from "react";
import { ISelectInput, SelectInput } from "modules/user/my-profile-edit/inputs";
import cx from "classnames";

import styles from "./dating-select-input.module.scss";

export const DatingSelectInput = forwardRef<HTMLSelectElement, ISelectInput>((props: ISelectInput, ref) => {
  return <SelectInput {...props} className={cx(styles.dating_select_input, props.className)} ref={ref} />;
});

DatingSelectInput.defaultProps = {};
