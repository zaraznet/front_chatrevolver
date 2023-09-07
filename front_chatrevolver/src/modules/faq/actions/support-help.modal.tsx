import React from "react";
import { ModalForm, Modals, TextArea, TextInput } from "shared/ui";
import { useModalForm } from "shared/lib";
import { api, useAuthed } from "shared/api";
import { IModal } from "shared/lib/forms/IModal";
import { SupportHelpSuccessModal } from "./support-help-success.modal";
import { useIntl } from "react-intl";

export const SupportHelpModal = (props: IModal) => {
  const onSuccess = Modals.prepare(SupportHelpSuccessModal);

  const form = useModalForm(props, {
    onSubmit: api.common.support,
    onSuccess: () => onSuccess(),
  });

  const authed = useAuthed();
  const intl = useIntl();

  return (
    <ModalForm
      title={intl.formatMessage({
        id: "faq.support_modal.title",
        defaultMessage: "Support help",
      })}
      form={form}
    >
      {!authed && (
        <>
          <h4>
            {intl.formatMessage({
              id: "input.email",
              defaultMessage: "Email",
            })}
          </h4>
          <TextInput {...form.register("email", { shouldUnregister: true })} />
        </>
      )}

      <h4>
        {intl.formatMessage({
          id: "faq.support_modal.type",
          defaultMessage: "Type of the issue",
        })}
      </h4>
      <TextInput {...form.register("type")} />

      <h4>
        {intl.formatMessage({
          id: "faq.support_modal.text",
          defaultMessage: "What is the issue?",
        })}
      </h4>
      <TextArea {...form.register("text")} />
    </ModalForm>
  );
};

SupportHelpModal.defaultProps = {};
