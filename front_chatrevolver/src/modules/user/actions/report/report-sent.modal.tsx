import React from "react";
import { IModal } from "shared/lib/forms/IModal";
import { Modal } from "shared/ui";
import { useIntl } from "react-intl";

export const ReportSentModal = (props: IModal) => {
  const intl = useIntl();

  return (
    <Modal
      title={intl.formatMessage({
        id: "user.report_modal.success",
        defaultMessage: "Report sent",
      })}
    />
  );
};

ReportSentModal.defaultProps = {};
