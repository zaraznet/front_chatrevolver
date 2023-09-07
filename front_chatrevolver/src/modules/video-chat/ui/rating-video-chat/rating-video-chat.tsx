import React from "react";
import { ReviewsCard, useVideoChat, VideoChatControls } from "modules/video-chat";
import { AdCard, Content, RightContent } from "shared/ui";
import { MainVideo } from "../main-video";
import { VideoChatBody } from "../video-chat-body";
import { MyVideo } from "../my-video";
import { api } from "shared/api";
import { PhotoList, UserProfile } from "modules/user";
import { ChatCard } from "modules/chat";

export interface IRatingVideoChat {}

export const RatingVideoChat = () => {
  const { incomeStream, outcomeStream, ...videoChat } = useVideoChat({ rating: true });
  const profile = api.user.useGetUser(videoChat.room?.profile?.id!, { refreshInterval: 3000 });

  const controls = (
    <>
      <VideoChatControls
        state={videoChat.state}
        onStart={videoChat.start}
        onStop={videoChat.stop}
        onNext={videoChat.next}
      />
      <ReviewsCard />
    </>
  );

  return (
    <>
      <Content>
        <MainVideo state={videoChat.state} incomeStream={incomeStream} outcomeStream={outcomeStream} />

        <VideoChatBody controls={controls}>
          <UserProfile {...profile} />
        </VideoChatBody>

        <PhotoList data={profile.data?.images} />
      </Content>

      <RightContent>
        <MyVideo src={outcomeStream} />
        <AdCard />
        <ChatCard id={videoChat.chatId} />
      </RightContent>
    </>
  );
};

RatingVideoChat.defaultProps = {};
