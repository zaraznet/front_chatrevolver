import React, { CSSProperties } from "react";
import { IUseModalForm } from "shared/lib/forms/useModalForm";
import { Modal } from "shared/ui/modals/modal";

import styles from "./modal-form.module.scss";
import { Modals } from "shared/ui/modals/modals";
import { useIntl } from "react-intl";

interface IModalForm {
  children?: React.ReactNode;
  form: IUseModalForm<any>;
  title?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;

  okProps?: {
    disabled?: boolean;
  };

  hideCancel?: boolean;

  className?: string;
  style?: CSSProperties;
}

export const ModalForm = (props: IModalForm) => {
  const intl = useIntl();

  return (
    <Modal title={props.title} className={props.className} style={props.style}>
      <form onSubmit={props.form.onSubmit} className={styles.modal_form}>
        {props.children}

        <p className="form-error">{props.form.globalError}</p>

        <div className={styles.buttons}>
          {!props.hideCancel && (
            <button className={styles.cancel} onClick={() => Modals.close()}>
              {props.cancelText ||
                intl.formatMessage({
                  id: "modal.cancel",
                  defaultMessage: "Cancel",
                })}
            </button>
          )}
          <button type="submit" disabled={props.form.submitProps.disabled} {...props.okProps}>
            {props.okText ||
              intl.formatMessage({
                id: "modal.ok",
                defaultMessage: "OK",
              })}
          </button>
        </div>
      </form>
    </Modal>
  );
};
