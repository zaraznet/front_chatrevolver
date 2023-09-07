import React, { useEffect, useState } from "react";
import { api, PublicUserProfileDTO } from "shared/api";
import { FlagIcon, Gender, UserCard } from "shared/ui";
import { formatCountryAndCity } from "shared/lib";
import { Distance } from "shared/ui/components/distance";
import { ProfileBlocked, ProfileDeleted, YourProfileBlocked } from "modules/user/profile-deleted";

export interface IUserProfile {
  data?: PublicUserProfileDTO;
  isValidating?: boolean;
  error?: any;
}

export const UserProfile = (props: IUserProfile) => {
  const profileMe = api.user.useGetMe();
  const user = props?.data;

  const [blockMe, setBlockMe] = useState(false);

  useEffect(() => {
    if (profileMe?.data?.id && user?.blocks && user?.blocks.includes(profileMe?.data?.id)) {
      setBlockMe(true);
    } else {
      setBlockMe(false);
    }
  }, [user?.blocks, profileMe?.data?.id]);

  if (!props.data) return <UserCard.Skeleton />;
  if (props.data.deleted) return <ProfileDeleted />;
  if (props.data.blocked) return <ProfileBlocked />;
  if (blockMe) return <YourProfileBlocked />;

  return (
    <UserCard>
      <UserCard.Header {...props.data} />

      <UserCard.Description>
        <UserCard.Description.Item>
          <FlagIcon country={props.data.country} />
          {formatCountryAndCity(props.data)}
        </UserCard.Description.Item>

        <UserCard.Description.Item>
          <Distance value={props.data.distance} />
        </UserCard.Description.Item>

        <UserCard.Description.Item>
          <Gender gender={props.data.sex} />
        </UserCard.Description.Item>
      </UserCard.Description>

      {(props.data.status || !!props.data.tags?.length) && <UserCard.Divider />}

      {props.data.status && <UserCard.Status>{props.data.status}</UserCard.Status>}
      {!!props.data.tags?.length && <UserCard.Tags tags={props.data.tags} />}

      {props.data.description && (
        <>
          <UserCard.Divider />
          <UserCard.About data={props.data.description} />
        </>
      )}
    </UserCard>
  );
};

UserProfile.defaultProps = {};
