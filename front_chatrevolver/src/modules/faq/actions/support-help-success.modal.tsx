import React from "react";
import { IModal } from "shared/lib/forms/IModal";
import { Modal } from "shared/ui";
import { useIntl } from "react-intl";

export const SupportHelpSuccessModal = (props: IModal) => {
  const intl = useIntl();

  return (
    <Modal
      title={intl.formatMessage({
        id: "faq.support_modal.success.title",
        defaultMessage: "Letter sent",
      })}
    />
  );
};

SupportHelpSuccessModal.defaultProps = {};
