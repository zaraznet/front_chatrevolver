import React from "react";
import { Modal, ModalForm, Modals, TextInput } from "shared/ui";
import { api } from "shared/api";
import { useModalForm } from "shared/lib";
import { IModal } from "shared/lib/forms/IModal";
import { useIntl } from "react-intl";

export const EmailChangeModal = (props: IModal) => {
  const onSuccess = Modals.prepare(SuccessModal);

  const form = useModalForm(props, {
    onSubmit: api.auth.changeEmail,
    onSuccess: () => onSuccess(),
  });

  const intl = useIntl();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: "user.email_change_modal.title",
        defaultMessage: "Change email",
      })}
      hideCancel
    >
      <h4>
        {intl.formatMessage({
          id: "input.new_email",
          defaultMessage: "New email",
        })}
      </h4>
      <TextInput autoFocus {...form.register("newEmail")} />

      <h4>
        {intl.formatMessage({
          id: "input.password",
          defaultMessage: "Password",
        })}
      </h4>
      <TextInput type="password" {...form.register("password")} />
    </ModalForm>
  );
};

const SuccessModal = (props: IModal) => {
  const intl = useIntl();

  return (
    <Modal
      title={intl.formatMessage({
        id: "user.email_change_modal.success.title",
        defaultMessage: "Confirm new Email",
      })}
    >
      <p>
        {intl.formatMessage({
          id: "user.email_change_modal.success.description",
          defaultMessage: "We sent an email to your address. Click the link in the letter to confirm your email.",
        })}
      </p>
    </Modal>
  );
};
