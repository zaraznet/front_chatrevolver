import React from "react";
import { Sidebar as SidebarComponent } from "shared/ui";
import { NextRouter } from "next/router";
import { ChatPanel } from "./chat-panel";
import { ChatListPanel } from "./chat-list-panel";
import { ContactsPanel } from "./contacts-panel";
import { FiltersPanel } from "./filters-panel";
import { SettingsPanel } from "./settings-panel";
import { api } from "shared/api";
import AppRouter from "router";
import { useIntl } from "react-intl";

export interface ISidebar {
  router: NextRouter;
  open?: boolean;
  onClose?: () => void;
}

export const Sidebar = (props: ISidebar) => {
  const query = props.router.query;

  const isDating = props.router.pathname === "/dating";
  const pathname = props.router.asPath.split("?")[0];

  const keys = ["chat", "contacts", "filters", "settings"];
  let activeKey = keys.find((it) => query.hasOwnProperty(it));

  if (isDating && !activeKey) {
    activeKey = "dating";
  }

  const chatId = query.chat && parseInt(query.chat as string);

  const friendRequests = api.user.useIncomingFriendshipRequests({ refreshInterval: 1000 });
  const chatList = api.chat.useGetChats({ refreshInterval: 1000 });

  const unreadChats = chatList.data?.map((it) => (it.unreadMessages ? 1 : 0) as number).reduce((a, b) => a + b, 0);

  const panelOpened = !!activeKey && activeKey !== "dating";

  const onClosePanel = () => {
    if (!panelOpened) return;
    props.router.replace(pathname);
  };

  const intl = useIntl();

  return (
    <SidebarComponent
      menu={[
        {
          key: "dating",
          icon: "dating",
          label: intl.formatMessage({ id: "menu.dating", defaultMessage: "Dating" }),
        },
        {
          key: "chat",
          icon: "chats",
          label: intl.formatMessage({ id: "menu.chats", defaultMessage: "Chats" }),
          badge: unreadChats,
        },
        {
          key: "contacts",
          icon: "contacts",
          label: intl.formatMessage({ id: "menu.contacts", defaultMessage: "Contacts" }),
          badge: friendRequests.data?.length,
        },
        {
          key: "filters",
          icon: "filters",
          label: intl.formatMessage({ id: "menu.filters", defaultMessage: "Filters" }),
        },
        {
          key: "settings",
          icon: "settings",
          label: intl.formatMessage({ id: "menu.settings", defaultMessage: "Settings" }),
        },
      ]}
      activeKey={activeKey}
      onMenuClick={(key) => {
        if (key === "dating") {
          AppRouter.dating.open();
          return;
        }
        if (key === activeKey && !chatId) {
          props.router.replace(pathname);
        } else {
          props.router.replace(pathname + "?" + key);
        }
      }}
      panelOpened={panelOpened}
      onClosePanel={onClosePanel}
      open={props.open}
      onClose={props.onClose}
    >
      {activeKey === "chat" && !chatId && <ChatListPanel onClose={onClosePanel} />}
      {activeKey === "chat" && chatId && <ChatPanel chatId={chatId} />}

      {activeKey === "contacts" && <ContactsPanel onClose={onClosePanel} />}
      {activeKey === "filters" && <FiltersPanel onClose={onClosePanel} />}
      {activeKey === "settings" && <SettingsPanel onClose={onClosePanel} />}
    </SidebarComponent>
  );
};

Sidebar.defaultProps = {};
