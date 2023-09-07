import React from "react";
import { FullUserProfileDTO } from "shared/api";
import { FlagIcon, Gender, UpdateLocation, UserCard } from "shared/ui";
import { MyProfileNew } from "./my-profile-new";
import { formatCountryAndCity, formatNameAndAge } from "shared/lib";

export interface IMyProfile {
  data?: FullUserProfileDTO;
}

export const MyProfile = (props: IMyProfile) => {
  const data = props.data;

  const isNewProfile =
    data && (!data.country || !data.name || !data.image || !data.sex || !data.birthday || !data.description);

  return (
    <>
      <UserCard>
        <UserCard.HeaderMy>{formatNameAndAge(data)}</UserCard.HeaderMy>

        <UserCard.Description>
          {data?.country && (
            <UserCard.Description.Item>
              <FlagIcon country={data?.country} />
              {formatCountryAndCity(data)}
            </UserCard.Description.Item>
          )}

          <UserCard.Description.Item>
            <UpdateLocation />
          </UserCard.Description.Item>

          {data?.sex && data?.sex !== "UNDEF" && (
            <UserCard.Description.Item>
              <Gender gender={data?.sex} />
            </UserCard.Description.Item>
          )}
        </UserCard.Description>

        <UserCard.Divider />
        <UserCard.StatusMy />
        {!!data?.tags?.length && <UserCard.Tags tags={data?.tags} />}

        {data?.description && (
          <>
            <UserCard.Divider />
            <UserCard.About data={data?.description} />
          </>
        )}
      </UserCard>

      {isNewProfile && <MyProfileNew />}
    </>
  );
};

MyProfile.defaultProps = {};
