import React from "react";
import { ModalForm } from "shared/ui";
import { api } from "shared/api";
import { useModalForm } from "shared/lib";
import { IModal } from "shared/lib/forms/IModal";
import AppRouter from "router";
import { useIntl } from "react-intl";

export interface IProfileDeleteModal extends IModal {}

export const ProfileDeleteModal = (props: IProfileDeleteModal) => {
  const profile = api.user.useGetMe();

  const form = useModalForm(props, {
    onSubmit: () => api.user.deleteProfile(),
    onSuccess: async () => {
      await profile.mutate();
      await AppRouter.profile.open();
    },
  });

  const intl = useIntl();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: "user.profile_delete_modal.title",
        defaultMessage: "Delete your profile?",
      })}
      okText={intl.formatMessage({
        id: "user.profile_delete_modal.ok",
        defaultMessage: "Yes, delete",
      })}
      cancelText={intl.formatMessage({
        id: "user.profile_delete_modal.cancel",
        defaultMessage: "No",
      })}
    />
  );
};

ProfileDeleteModal.defaultProps = {};
