import React from "react";
import { ModalForm } from "shared/ui";
import { api } from "shared/api";
import { useModalForm } from "shared/lib";
import { IModal } from "shared/lib/forms/IModal";
import { useIntl } from "react-intl";

export interface IFriendRemoveModal extends IModal {
  id: number;
}

export const FriendRemoveModal = (props: IFriendRemoveModal) => {
  const form = useModalForm(props, {
    onSubmit: () => api.user.unfollowUser(props.id),
  });

  const intl = useIntl();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: "user.friend_remove_modal.title",
        defaultMessage: "Remove friend?",
      })}
      okText={intl.formatMessage({
        id: "user.friend_remove_modal.ok",
        defaultMessage: "Yes, remove",
      })}
      cancelText={intl.formatMessage({
        id: "user.friend_remove_modal.cancel",
        defaultMessage: "No",
      })}
    />
  );
};

FriendRemoveModal.defaultProps = {};
