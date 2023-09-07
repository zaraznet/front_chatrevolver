import React from "react";
import Router, { NextRouter, withRouter } from "next/router";
import { api, useAuthed } from "shared/api";
import { AdCard, Button, Content, Modals, RightContent } from "shared/ui";
import { VipPromoCard } from "modules/vip";
import { PhotoList, UserProfile, VipActivateModal } from "modules/user";
import { ReviewsCard, VideoChatBody } from "modules/video-chat";
import AppRouter from "router";
import { FaqCard } from "modules/faq";
import { ProfileBlocked, ProfileDeleted } from "modules/user/profile-deleted";
import { useIntl } from "react-intl";

const ProfileByIdPage = (props: { router: NextRouter }) => {
  const query = props.router.query;
  const id = parseInt(query.id as string);

  const profile = api.user.useGetUser(id, { refreshInterval: 3000 });
  const myProfile = api.user.useGetMe();

  const onVipActivate = Modals.prepare(VipActivateModal);

  const onOpenChat = async () => {
    let chatId = profile.data?.chatId;

    if (!chatId) {
      if (myProfile.data?.vip) {
        const data = await api.chat.vipChatEntry(id);
        chatId = data.chatID;
      } else {
        onVipActivate();
      }
    }

    if (chatId) {
      await Router.push(Router.asPath.split("?")[0] + "?chat=" + chatId);
    }
  };

  const authed = useAuthed();

  const intl = useIntl();

  const blockedMe = myProfile?.data?.id && profile.data?.blocks?.includes(myProfile?.data?.id);

  const right = (
    <RightContent>
      <AdCard />
      <VipPromoCard />
      <FaqCard />
    </RightContent>
  );

  if (profile.data?.deleted) {
    return (
      <>
        <Content>
          <ProfileDeleted />
        </Content>

        {right}
      </>
    );
  }

  if (profile.data?.blocked) {
    return (
      <>
        <Content>
          <ProfileBlocked />
        </Content>

        {right}
      </>
    );
  }

  return (
    <>
      <Content>
        <VideoChatBody
          controls={
            <>
              {authed && profile.data && !blockedMe && (
                <Button type="primary" onClick={onOpenChat} style={{ marginBottom: 10 }}>
                  {intl.formatMessage({
                    id: "pages.profile.open_chat",
                    defaultMessage: "Open chat",
                  })}
                </Button>
              )}
              {profile.data?.relation?.friends && (
                <Button
                  type="primary"
                  onClick={AppRouter.profile.id(id).call.open}
                  style={{ marginBottom: 10 }}
                  disabled={!profile.data?.online}
                >
                  {intl.formatMessage({
                    id: "pages.profile.start_call",
                    defaultMessage: "Call",
                  })}
                </Button>
              )}
              <ReviewsCard />
            </>
          }
        >
          <UserProfile {...profile} />
        </VideoChatBody>

        {!blockedMe && <PhotoList data={profile.data?.images} />}
      </Content>

      {right}
    </>
  );
};

export default withRouter(ProfileByIdPage);
