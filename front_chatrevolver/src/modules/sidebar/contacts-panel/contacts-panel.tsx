import React, { useState } from "react";
import { SidebarPanel } from "shared/ui";
import { api } from "shared/api";
import { ContactsTab } from "./tab";
import { FriendList } from "./friend-list";
import { FriendRequestList } from "./friend-request-list";
import { useIntl } from "react-intl";

export interface IContactsPanel {
  onClose: () => void;
}

export const ContactsPanel = (props: IContactsPanel) => {
  const friendRequestList = api.user.useIncomingFriendshipRequests();

  const [activeKey, setActiveKey] = useState<"friends" | "requests">("friends");

  const intl = useIntl();

  return (
    <SidebarPanel onClose={props.onClose}>
      <ContactsTab
        activeKey={activeKey}
        onChangeActiveKey={setActiveKey}
        tabs={[
          {
            key: "friends",
            label: intl.formatMessage({
              id: "sidebar.contacts.friends",
              defaultMessage: "Friends",
            }),
          },
          {
            key: "requests",
            label: intl.formatMessage({
              id: "sidebar.contacts.requests",
              defaultMessage: "Requests",
            }),
            badge: friendRequestList.data?.length,
          },
        ]}
      />

      {activeKey === "friends" && <FriendList />}
      {activeKey === "requests" && <FriendRequestList />}
    </SidebarPanel>
  );
};

ContactsPanel.defaultProps = {};
