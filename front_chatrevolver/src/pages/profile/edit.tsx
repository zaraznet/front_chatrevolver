import { VipPromoCard } from "modules/vip";
import React from "react";
import { AdCard, Content, RightContent } from "shared/ui";
import { MyProfileDeleted, MyProfileEdit, MyProfileLayout } from "modules/user";
import { api } from "shared/api";

const ProfileEditPage = () => {
  const profile = api.user.useGetMe();

  if (profile.data?.deleted) {
    const onRestore = async () => {
      await api.user.restoreProfile();
      await profile.mutate();
    };

    return (
      <Content>
        <MyProfileDeleted onRestore={onRestore} />
      </Content>
    );
  }

  return (
    <>
      <MyProfileLayout>
        <MyProfileEdit />
      </MyProfileLayout>

      <RightContent>
        <AdCard />
        <VipPromoCard />
      </RightContent>
    </>
  );
};

export default ProfileEditPage;
