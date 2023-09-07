import React from "react";
import { api } from "shared/api";
import { Avatar, FollowButton, Icon, SidebarListItem, SidebarPanelEmpty } from "shared/ui";
import styles from "./friend-request-list.module.scss";
import { formatNameAndAge } from "shared/lib/format/name-and-age";
import { useIntl } from "react-intl";

export interface IFriendRequestList {}

export const FriendRequestList = (props: IFriendRequestList) => {
  const friendRequestList = api.user.useIncomingFriendshipRequests();

  const intl = useIntl();

  const onAccept = async (id: number) => {
    await api.user.submitIncomingFriendshipRequest({ uid: id, accept: true });
    await friendRequestList.mutate();
  };

  const onDeny = async (id: number) => {
    await api.user.submitIncomingFriendshipRequest({ uid: id, accept: false });
    await friendRequestList.mutate();
  };

  if (friendRequestList.data?.length === 0) {
    return (
      <SidebarPanelEmpty>
        {intl.formatMessage({
          id: "sidebar.contacts.requests.empty",
          defaultMessage: "No friend requests",
        })}
      </SidebarPanelEmpty>
    );
  }

  return (
    <div className={styles.friend_request_list}>
      {friendRequestList.data?.map((it) => (
        <SidebarListItem
          avatar={<Avatar src={it.from.image} gender={it.from.sex} online={it.from.online} />}
          title={formatNameAndAge(it.from)}
          body={<FollowButton id={it.from.id} relation={it.from.relation} onUpdate={friendRequestList.mutate} />}
          buttons={
            <>
              <button onClick={() => onDeny(it.from.id)}>
                <Icon name="trash" />
              </button>
            </>
          }
        />
      ))}
    </div>
  );
};

FriendRequestList.defaultProps = {};
