import React from "react";
import { NextRouter, withRouter } from "next/router";
import { api } from "shared/api";
import { AdCard, Button, Content, RightContent } from "shared/ui";
import { VipPromoCard } from "modules/vip";
import { PhotoList, UserProfile } from "modules/user";
import { VideoChatBody } from "modules/video-chat/ui/video-chat-body";
import { MyVideo } from "modules/video-chat/ui/my-video";
import { MainVideo } from "modules/video-chat/ui/main-video";
import { useVideoCall } from "modules/video-chat";
import AppRouter from "router";
import { ChatCard } from "modules/chat";
import { ProfileBlocked, ProfileDeleted } from "modules/user/profile-deleted";
import { useIntl } from "react-intl";

const CallPage = (props: { router: NextRouter }) => {
  const query = props.router.query;
  const id = parseInt(query.id as string);

  const profile = api.user.useGetUser(id, { refreshInterval: 3000 });

  const videoCall = useVideoCall(id);

  const intl = useIntl();

  const right = (
    <RightContent>
      <MyVideo src={videoCall.outcomeStream} />
      <AdCard />
      {profile.data?.chatId && <ChatCard id={profile.data?.chatId} />}
      <VipPromoCard />
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
        <MainVideo
          state={videoCall.state}
          incomeStream={videoCall.incomeStream}
          outcomeStream={videoCall.outcomeStream}
        />
        <VideoChatBody
          controls={
            <>
              <Button type="danger" style={{ marginBottom: 10 }} onClick={AppRouter.profile.id(id).open}>
                {intl.formatMessage({
                  id: "pages.call.end_call",
                  defaultMessage: "Call",
                })}
              </Button>
            </>
          }
        >
          <UserProfile {...profile} />
        </VideoChatBody>

        <PhotoList data={profile.data?.images} />
      </Content>

      {right}
    </>
  );
};

export default withRouter(CallPage);
