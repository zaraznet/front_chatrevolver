import React from "react";
import { useVideoChat, VideoChatControls } from "modules/video-chat";
import { AdCard, Content, RightContent } from "shared/ui";
import { MainVideo } from "../main-video";
import { VideoChatBody } from "../video-chat-body";
import { MyVideo } from "../my-video";
import { VideoChatTitle } from "./title";
import { VideoChatAdvantages } from "./advantages";
import { ChatCard } from "modules/chat";
import Link from "next/link";
import { useIntl } from "react-intl";
import { FormattedMessage } from 'react-intl';

export interface IClassicVideoChat {}

export const ClassicVideoChat = () => {
  const { incomeStream, outcomeStream, ...videoChat } = useVideoChat();

  const intl = useIntl();

  const controls = (
    <VideoChatControls
      state={videoChat.state}
      onStart={videoChat.start}
      onStop={videoChat.stop}
      onNext={videoChat.next}
    />
  );

  return (
    <>
      <Content>
        <MainVideo state={videoChat.state} incomeStream={incomeStream} outcomeStream={outcomeStream} />

        <VideoChatBody controls={controls}>
  <VideoChatTitle>
    <FormattedMessage
      id="video_chat.classic.title"
      defaultMessage={`Join us and get access to more features / {link}`}
      values={{
        link: (
          <Link href="/faq/rating">
            <a>{intl.formatMessage({ id: "video_chat.classic.learn_more" })}</a>
          </Link>
        ),
      }}
    />
  </VideoChatTitle>
</VideoChatBody>

        <VideoChatAdvantages />
      </Content>

      <RightContent>
        <MyVideo src={outcomeStream} />
        <AdCard />
        <ChatCard id={videoChat.chatId} temporary />
      </RightContent>
    </>
  );
};

ClassicVideoChat.defaultProps = {};
