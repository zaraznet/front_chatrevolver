import React, { useState } from "react";
import { IModal } from "shared/lib/forms/IModal";
import { ModalForm, Modals, Radio, TextArea } from "shared/ui";
import { api } from "shared/api";
import { useModalForm } from "shared/lib";
import { ReportSentModal } from "modules/user/actions/report/report-sent.modal";
import { useIntl } from "react-intl";

export interface IReportModal extends IModal {
  id: number;
}

export const ReportModal = (props: IReportModal) => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const intl = useIntl();

  const reportReasons = [
    intl.formatMessage({
      id: "user.report_modal.reason.0",
      defaultMessage: "Harassment and cyberbullying",
    }),
    intl.formatMessage({
      id: "user.report_modal.reason.1",
      defaultMessage: "Violent threats",
    }),
    intl.formatMessage({
      id: "user.report_modal.reason.2",
      defaultMessage: "Child endangerment",
    }),
    intl.formatMessage({
      id: "user.report_modal.reason.3",
      defaultMessage: "Hate speech against a protected group",
    }),
    intl.formatMessage({
      id: "user.report_modal.reason.4",
      defaultMessage: "Spam and Scams",
    }),
    intl.formatMessage({
      id: "user.report_modal.reason.5",
      defaultMessage: "Privacy",
    }),
    intl.formatMessage({
      id: "user.report_modal.reason.other",
      defaultMessage: "None of these are your issue",
    }),
  ];

  const isOther = value === reportReasons[reportReasons.length - 1];
  const onSuccess = Modals.prepare(ReportSentModal);

  const form = useModalForm(props, {
    onSubmit: () => api.user.report(props.id, { text: isOther ? text : value }),
    onSuccess: () => onSuccess(),
  });

  const disabled = !value || (isOther && !text);

  return (
    <ModalForm
      title={intl.formatMessage({
        id: "user.report_modal.title",
        defaultMessage: "Report user",
      })}
      form={form}
      okProps={{ disabled }}
    >
      <h3>
        {intl.formatMessage({
          id: "user.report_modal.reason",
          defaultMessage: "What is the issue?",
        })}
      </h3>
      <Radio value={value} onChange={setValue} options={reportReasons.map((it) => ({ value: it, label: it }))} />
      {value === reportReasons[reportReasons.length - 1] && (
        <TextArea autoFocus value={text} onChange={(e) => setText(e.target.value)} />
      )}
    </ModalForm>
  );
};

ReportModal.defaultProps = {};
