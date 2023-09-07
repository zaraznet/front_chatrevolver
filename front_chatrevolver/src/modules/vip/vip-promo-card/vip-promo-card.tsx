import React from "react";
import { Button, Modals } from "shared/ui";
import Link from "next/link";
import AppRouter from "router";

import styles from "./vip-promo-card.module.scss";
import { VipActivateModal } from "modules/user";
import { api } from "shared/api";
import { useIntl } from "react-intl";

export interface IVipPromoCard {
  children?: React.ReactNode;
}

export const VipPromoCard = (props: IVipPromoCard) => {
  const profile = api.user.useGetMe();

  const onVipActivate = Modals.prepare(VipActivateModal);

  const intl = useIntl();

  if (!profile.data) return null;
  if (profile.data.vip) return null;

  return (
    <div className={styles.vip_promo_card}>
      <img src="/img/vip-promo.svg" />

      <h3>
        {intl.formatMessage({
          id: "vip.promo_card.title",
          defaultMessage: "Общение без ограничений",
        })}
      </h3>
      <p>
      {intl.formatMessage({
        id: "vip.promo_card.description",
        defaultMessage: "Пользователи с VIP статусом могут писать личные сообщения всем, кого найдет через",
        })}{" "}
            
              <Link {...AppRouter.dating.link}>
                <a>{intl.formatMessage({ id: "vip.promo_card.search_profiles" })}</a>
              </Link>
          
      </p>

      <Button type="primary" onClick={() => onVipActivate()}>
        {intl.formatMessage({
          id: "vip.promo_card.submit",
          defaultMessage: "Станьте VIP",
        })}
      </Button>
    </div>
  );
};

VipPromoCard.defaultProps = {};
