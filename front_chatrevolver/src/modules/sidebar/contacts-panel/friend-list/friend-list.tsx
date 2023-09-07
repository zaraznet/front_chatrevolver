import React from "react";
import styles from "./friend-list.module.scss";
import { api } from "shared/api";
import { Avatar, Icon, Modals, SidebarListItem, SidebarPanelEmpty } from "shared/ui";
import { formatNameAndAge } from "shared/lib/format/name-and-age";
import { formatCountryAndCity } from "shared/lib";
import Router from "next/router";
import AppRouter from "router";
import { FriendRemoveModal } from "modules/user";
import { useIntl } from "react-intl";

export interface IFriendList {}

export const FriendList = (props: IFriendList) => {
  const friendList = api.user.useFriendList();

  const intl = useIntl();

  const onVideo = (id: number) => {
    AppRouter.profile.id(id).call.open();
  };

  const onMessage = async (id?: number) => {
    if (!id) console.error("No chat id");
    await Router.push(Router.asPath.split("?")[0] + "?chat=" + id);
  };

  const onFriendRemove = Modals.prepare(FriendRemoveModal, {
    onSuccess: () => friendList.mutate(),
  });

  const onUnfollow = async (id: number, friends?: boolean) => {
    if (friends) {
      onFriendRemove({ id });
      return;
    }
    await api.user.unfollowUser(id);
    await friendList.mutate();
  };

  if (friendList.data?.length === 0) {
    return (
      <SidebarPanelEmpty>
        {intl.formatMessage({
          id: "sidebar.contacts.friends.empty",
          defaultMessage: "No friends",
        })}
      </SidebarPanelEmpty>
    );
  }

  return (
    <div className={styles.friend_list}>
      {friendList.data?.map((it) => (
        <SidebarListItem
          avatar={<Avatar src={it.user.image} gender={it.user.sex} online={it.user.online} />}
          title={formatNameAndAge(it.user)}
          body={formatCountryAndCity(it.user)}
          onClick={AppRouter.profile.id(it.user.id).open}
          buttons={
            <>
              <button onClick={() => onVideo(it.user.id)} disabled={!it.user.online}>
                <Icon name="video" />
              </button>
              <button onClick={() => onMessage(it.user.chatId)}>
                <Icon name="message" />
              </button>
              <button onClick={() => onUnfollow(it.user.id, it.user.relation?.friends)}>
                <Icon name="unfollow" />
              </button>
            </>
          }
        />
      ))}
    </div>
  );
};

FriendList.defaultProps = {};
