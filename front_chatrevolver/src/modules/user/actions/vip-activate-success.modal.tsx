import React from "react";
import { IModal } from "shared/lib/forms/IModal";
import { Modal } from "shared/ui";
import { useIntl } from "react-intl";

export const VipActivateSuccess = (props: IModal) => {
  const intl = useIntl();

  return (
    <Modal
      title={intl.formatMessage({
        id: "user.vip_activate_modal.success",
        defaultMessage: "VIP activated",
      })}
    />
  );
};

VipActivateSuccess.defaultProps = {};
