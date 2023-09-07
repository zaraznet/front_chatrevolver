import React from "react";
import { Modals, SidebarPanel } from "shared/ui";
import { Chat } from "modules/chat";
import { ChatPanelHeader } from "./chat-panel-header";

import styles from "./chat-panel.module.scss";
import { api } from "shared/api";
import Router from "next/router";
import { ChatRemoveModal } from "modules/user";

export interface IChatPanel {
  chatId: number;
}

export const ChatPanel = (props: IChatPanel) => {
  const chat = api.chat.useGetChat(props.chatId);
  const chatList = api.chat.useGetChats();

  const onBack = () => Router.push(Router.asPath.split("?")[0] + "?chat");

  const onDelete = Modals.prepare(ChatRemoveModal, {
    id: props.chatId,
    onSuccess: () => {
      chatList.mutate();
      onBack();
    },
  });

  return (
    <SidebarPanel showLogo={false} className={styles.chat_panel} contentClassName={styles.content}>
      <ChatPanelHeader user={chat.data?.user} onBack={onBack} onChatDelete={onDelete} />
      <Chat id={props.chatId} theme="dark" className={styles.chat} />
    </SidebarPanel>
  );
};

ChatPanel.defaultProps = {};
