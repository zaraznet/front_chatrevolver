import React from "react";
import { PublicUserProfileDTO } from "shared/api";
import { UserCardSkeleton } from "./skeleton";
import { UserCardHeader } from "./header";
import { UserCardHeaderMy } from "./header-my";
import { UserCardDescription } from "./description";
import { UserCardStatus } from "./status";
import { UserCardTags } from "./tags";
import { UserCardAbout } from "./about";
import { UserCardDivider } from "./divider";
import { StatusMy } from "./status-my";

import styles from "./user-card.module.scss";

export interface IUserCard {
  children?: React.ReactNode;
}

export const UserCard = (props: IUserCard) => {
  return <div className={styles.user_card}>{props.children}</div>;
};

UserCard.Skeleton = UserCardSkeleton;
UserCard.Header = UserCardHeader;
UserCard.HeaderMy = UserCardHeaderMy;
UserCard.Description = UserCardDescription;
UserCard.Status = UserCardStatus;
UserCard.StatusMy = StatusMy;
UserCard.Tags = UserCardTags;
UserCard.About = UserCardAbout;
UserCard.Divider = UserCardDivider;
