import React from "react";
import { Modal, ModalForm, Modals, TextInput } from "shared/ui";
import { api } from "shared/api";
import { useModalForm } from "shared/lib";
import { IModal } from "shared/lib/forms/IModal";
import { useIntl } from "react-intl";

export const PasswordChangeModal = (props: IModal) => {
  const onSuccess = Modals.prepare(SuccessModal);

  const form = useModalForm(props, {
    onSubmit: api.auth.changePassword,
    onSuccess: () => onSuccess(),
  });

  const intl = useIntl();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: "user.password_change_modal.title",
        defaultMessage: "Change password",
      })}
      hideCancel
    >
      <h4>
        {intl.formatMessage({
          id: "user.password_change_modal.current_password",
          defaultMessage: "Current password",
        })}
      </h4>
      <TextInput type="password" autoFocus {...form.register("oldPassword")} />

      <h4>
        {intl.formatMessage({
          id: "user.password_change_modal.new_password",
          defaultMessage: "New password",
        })}
      </h4>
      <TextInput type="password" {...form.register("newPassword1")} />

      <h4>
        {intl.formatMessage({
          id: "user.password_change_modal.new_password_repeat",
          defaultMessage: "Repeat new password",
        })}
      </h4>
      <TextInput type="password" {...form.register("newPassword2")} />
    </ModalForm>
  );
};

const SuccessModal = (props: IModal) => {
  const intl = useIntl();

  return (
    <Modal
      title={intl.formatMessage({
        id: "user.password_change_modal.success",
        defaultMessage: "Password has been changed",
      })}
    />
  );
};
