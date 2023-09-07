import React from "react";
import styles from "./block-user.module.scss";
import { useIntl } from "react-intl";

export interface IBlockUser {
  iBlocked: boolean;
  onPress: () => void;
  disabledPress: boolean;
}

const BlockUser = (props: IBlockUser) => {
  const intl = useIntl();

  const textMessage = props.iBlocked
    ? intl.formatMessage({
        id: "revolver.blocks.i_blocked",
        defaultMessage: "You have blocked this contact. Click to unlock.",
      })
    : intl.formatMessage({
        id: "revolver.blocks.blocked_me",
        defaultMessage: "This contact blocked you",
      });

  return (
    <span className={styles.wrapper} onClick={() => props.disabledPress && props.onPress()}>
      <p className={styles.text}>{textMessage}</p>
    </span>
  );
};

export default BlockUser;
