import React, { CSSProperties, useState } from "react";
import { api } from "shared/api";
import { Avatar, FollowButton } from "shared/ui";
import { StarsInput } from "./stars-input";
import cx from "classnames";
import AppRouter from "router";

import styles from "./reviews-card.module.scss";
import { useIntl } from "react-intl";

export interface IReviewsCard {
  className?: string;
  style?: CSSProperties;
}

export const ReviewsCard = (props: IReviewsCard) => {
  const reviewList = api.user.usePendingReviews({ refreshInterval: 3000 });
  const length = reviewList.data?.length || 0;

  const two = length === 2;
  const many = length > 2;

  const review = reviewList.data?.[0];
  const user = review?.companion;

  const [loading, setLoading] = useState(false);

  const onRate = async (value: number) => {
    if (!review || loading) return;

    setLoading(true);
    try {
      await api.user.postReview(review.id, { rating: value });
      await reviewList.mutate();
    } finally {
      setLoading(false);
    }
  };

  const intl = useIntl();

  if (length === 0) return null;

  const openProfile = AppRouter.profile.id(user?.id!).open;

  return (
    <div
      className={cx(
        styles.reviews_card,
        two && styles.two,
        many && styles.many,
        loading && styles.loading,
        props.className
      )}
      style={props.style}
    >
      <div className={styles.content}>
        <Avatar
          className={styles.ava}
          src={user?.image}
          gender={user?.sex}
          online={user?.online}
          onClick={openProfile}
        />

        <div className={styles.info}>
          <p className={styles.name} onClick={openProfile}>
            {user?.name}
          </p>
          <p className={styles.text}>
            {intl.formatMessage({
              id: "video_chat.review",
              defaultMessage: "How do you rate me?",
            })}
          </p>
        </div>

        {user && <FollowButton id={user.id} size="small" className={styles.follow} />}
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <StarsInput onClick={onRate} />
      </div>
    </div>
  );
};

ReviewsCard.defaultProps = {};
