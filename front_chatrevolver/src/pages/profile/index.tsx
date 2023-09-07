import { VipPromoCard } from "modules/vip";
import React from "react";
import { AdCard, Button, Content, RightContent } from "shared/ui";
import { MyProfile, MyProfileDeleted, MyProfileLayout, PhotoList } from "modules/user";
import { api } from "shared/api";
import AppRouter from "router";
import { FaqCard } from "modules/faq";
import { useIntl } from "react-intl";

const ProfilePage = () => {
  const profile = api.user.useGetMe();

  const intl = useIntl();

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

  const onUploadPhoto = async (id: string) => {
    if (!profile.data) return;

    await api.user.updateProfile({
      images: [...(profile.data.images?.map((it) => it.id) || []), id],
    });

    await profile.mutate();
  };

  const onDeletePhoto = async (id: string) => {
    if (!profile.data) return;

    await api.user.updateProfile({
      images: profile.data.images?.map((it) => it.id).filter((it) => it !== id),
    });

    await profile.mutate();
  };

  return (
    <>
      <Content>
        <MyProfileLayout
          extra={
            <Button type="primary" onClick={AppRouter.profile.edit.open}>
              {intl.formatMessage({
                id: "pages.my_profile.edit",
                defaultMessage: "Edit Profile",
              })}
            </Button>
          }
        >
          <MyProfile data={profile.data} />
        </MyProfileLayout>

        <PhotoList data={profile.data?.images} onUpload={onUploadPhoto} onDelete={onDeletePhoto} />
      </Content>

      <RightContent>
        <AdCard />
        <VipPromoCard />
        <FaqCard />
      </RightContent>
    </>
  );
};

export default ProfilePage;
