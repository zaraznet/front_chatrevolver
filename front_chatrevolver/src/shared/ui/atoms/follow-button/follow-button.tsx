import React, { useState } from "react";
import cx from "classnames";
import { api, UserRelationDTO } from "shared/api";
import { useIntl } from "react-intl";

import styles from "./follow-button.module.scss";
import { Modals } from "shared/ui/modals";
import { FriendRemoveModal } from "modules/user";

export interface IFollowButton {
  id: number;
  size: "small" | "default";
  onUpdate?: () => void;

  relation?: UserRelationDTO;

  className?: string;
}

export const FollowButton = (props: IFollowButton) => {
  const profile = api.user.useGetUser(props.id, {
    fallbackData: props.relation ? ({ relation: props.relation } as any) : undefined,
  });

  const [loading, setLoading] = useState(false);

  if (!profile.data) return null;

  const { friends, following, followsMe } = profile.data.relation || {};

  const intl = useIntl();

  const onFriendRemove = Modals.prepare(FriendRemoveModal, {
    id: props.id,
    onSuccess: async () => {
      await profile.mutate();
      await props.onUpdate?.();
    },
  });

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) return;

    if (friends) {
      onFriendRemove();
      return;
    }

    try {
      setLoading(true);
      if (following) {
        await api.user.unfollowUser(props.id);
      } else {
        await api.user.followUser(props.id);
      }
      await profile.mutate();
      await props.onUpdate?.();
    } finally {
      setLoading(false);
    }
  };
  //shared.user_card.follow
  const className = cx(
    styles.follow_button,
    props.size === "small" && styles.small,
    loading && styles.loading,
    friends && styles.unfollow,
    following && styles.cancel,
    !(friends || following) && styles.follow,
    props.className
  );

  const classNameRu = cx(
    styles.follow_button_ru,
    props.size === "small" && styles.small,
    loading && styles.loading,
    friends && styles.unfollow,
    following && styles.cancel,
    !(friends || following) && styles.follow,
    props.className
  );

  return <button className={intl.locale === "ru" ? classNameRu : className} onClick={onClick} disabled={loading} />;
};

FollowButton.defaultProps = {
  size: "default",
};
