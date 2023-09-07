import React from "react";
import { ModalForm, Modals } from "shared/ui";
import { api } from "shared/api";
import { useModalForm } from "shared/lib";
import { IModal } from "shared/lib/forms/IModal";
import { VipActivateSuccess } from "./vip-activate-success.modal";
import { useIntl } from "react-intl";

export const VipActivateModal = (props: IModal) => {
  const profile = api.user.useGetMe();

  const onSuccess = Modals.prepare(VipActivateSuccess);

  const form = useModalForm(props, {
    onSubmit: api.vip.enableVip,
    onSuccess: () => {
      profile.mutate();
      onSuccess();
    },
  });

  const intl = useIntl();

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: "user.vip_activate_modal.title",
        defaultMessage: "Activate VIP?",
      })}
      okText={intl.formatMessage({
        id: "user.vip_activate_modal.ok",
        defaultMessage: "Yes, activate",
      })}
      cancelText={intl.formatMessage({
        id: "user.vip_activate_modal.cancel",
        defaultMessage: "No",
      })}
    >
      <p>
        {intl.formatMessage({
          id: "user.vip_activate_modal.description",
          defaultMessage:
            "Дарим VIP статус всем пользователям на 100 дней. VIP статус дает возможность писать сообщения всем найденным через поиск анкетам без ограничения.",
        })}
      </p>
    </ModalForm>
  );
};
