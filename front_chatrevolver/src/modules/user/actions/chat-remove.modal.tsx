import React from "react";
import { ModalForm } from "shared/ui";
import { api } from "shared/api";
import { useModalForm } from "shared/lib";
import { IModal } from "shared/lib/forms/IModal";
import { useIntl } from "react-intl";

export interface IChatRemoveModal extends IModal {
  id: number;
}

export const ChatRemoveModal = (props: IChatRemoveModal) => {
  const form = useModalForm(props, {
    onSubmit: () => api.chat.deleteChat(props.id),
  });

  const intl = useIntl();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: "user.chat_remove_modal.title",
        defaultMessage: "Delete chat forever?",
      })}
      okText={intl.formatMessage({
        id: "user.chat_remove_modal.ok",
        defaultMessage: "Yes, delete",
      })}
      cancelText={intl.formatMessage({
        id: "user.chat_remove_modal.cancel",
        defaultMessage: "No",
      })}
    />
  );
};

ChatRemoveModal.defaultProps = {};
