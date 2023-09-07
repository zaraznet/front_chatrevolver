import React from "react";
import { Avatar, SidebarListItem, SidebarPanel, SidebarPanelEmpty } from "shared/ui";
import { api } from "shared/api";
import { formatNameAndAge } from "shared/lib/format/name-and-age";
import Router from "next/router";

import styles from "./chat-list-panel.module.scss";
import { useIntl } from "react-intl";

export interface IChatListPanel {
  onClose: () => void;
}

export const ChatListPanel = (props: IChatListPanel) => {
  const chatList = api.chat.useGetChats({ refreshInterval: 1000 });

  const intl = useIntl();

  if (chatList.data?.length === 0) {
    return (
      <SidebarPanel onClose={props.onClose}>
        <SidebarPanelEmpty>
          {intl.formatMessage({
            id: "sidebar.chat_list.empty",
            defaultMessage: "No chats",
          })}
        </SidebarPanelEmpty>
      </SidebarPanel>
    );
  }

  return (
    <SidebarPanel onClose={props.onClose}>
      {chatList.data?.map((it) => (
        <SidebarListItem
          avatar={<Avatar src={it.user.image} online={it.user.online} />}
          title={formatNameAndAge(it.user)}
          body={
            it.message ? (
              <>
                {it.message?.mine && (
                  <span className={styles.message_prefix}>
                    {intl.formatMessage({
                      id: "sidebar.chat_list.item.mine",
                      defaultMessage: "You",
                    })}
                    {": "}
                  </span>
                )}{" "}
                {it.message?.content}
              </>
            ) : (
              <>
                <span className={styles.message_prefix}>
                  {intl.formatMessage({
                    id: "sidebar.chat_list.item.empty",
                    defaultMessage: "No messages",
                  })}
                </span>
              </>
            )
          }
          badge={it.unreadMessages}
          time={it.message?.time}
          read={it.message?.read && it.message?.mine}
          onClick={() => Router.push(Router.asPath.split("?")[0] + "?chat=" + it.chatID)}
        />
      ))}
    </SidebarPanel>
  );
};

ChatListPanel.defaultProps = {};
