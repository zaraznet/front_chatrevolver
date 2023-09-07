import React, { CSSProperties, useRef } from "react";
import cx from "classnames";
import styles from "./modal.module.scss";
import { Modals } from "shared/ui/modals/modals";
import { KeyName, useClickOutside, useKeyDown } from "@yoldi/utils/hooks";

export interface IModalProps {
  title?: React.ReactNode;

  children?: React.ReactNode;
  className?: string;

  style?: CSSProperties;
}

const close = () => Modals.close();

export const Modal = (props: IModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useClickOutside(contentRef, close);
  useKeyDown(KeyName.ESC, close);

  const titleCenter = props.children === undefined;

  return (
    <div className={cx(styles.modal, props.className)} style={props.style}>
      <div className={styles.content} ref={contentRef}>
        <button className={styles.close} onClick={close} />
        <div className={cx(styles.title, titleCenter && styles.center)}>{props.title}</div>
        {props.children}
      </div>
    </div>
  );
};

Modal.defaultProps = {};
