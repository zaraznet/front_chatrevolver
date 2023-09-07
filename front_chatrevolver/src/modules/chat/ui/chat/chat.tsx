import React, { useEffect, useState } from "react";
import { ChatEmpty, Day, InputToolbar, Message, MessageContainer, TypingIndicator, useChat } from "modules/chat";
import cx from "classnames";
import styles from "./chat.module.scss";
import { api } from "../../../../shared/api";
import BlockUser from "../block-user/block-user";

export interface IChat {
  id: number;
  temporary?: boolean;
  className?: string;
  theme: "dark" | "white";
}

export const Chat = (props: IChat) => {
  const chat = useChat(props.id, props.temporary);
  // const userId = chat.user?.id;
  // const profileMe = api.user.useGetMe();
  //
  // const [loading, setLoading] = useState(false);
  // const [blockedMe, setBlockedMe] = useState(false);
  // const [iBlocked, setIBlocked] = useState(false);
  //
  // useEffect(() => {
  //   const userBlocks = chat?.user?.blocks;
  //   if (profileMe?.data?.id && userBlocks && userBlocks?.length > 0) {
  //     setBlockedMe(!!userBlocks.includes(profileMe?.data.id));
  //   } else {
  //     setBlockedMe(false);
  //   }
  // }, [chat?.user, userId]);
  //
  // useEffect(() => {
  //   const userBlocks = profileMe?.data?.blocks;
  //   if (userId && userBlocks && userBlocks?.length > 0) {
  //     setIBlocked(!!userBlocks.includes(userId));
  //   } else {
  //     setIBlocked(false);
  //   }
  // }, [profileMe, userId]);
  //
  // const onPressBlock = async () => {
  //   if (loading) return;
  //
  //   const userBlocks = profileMe?.data?.blocks;
  //   setLoading(true);
  //
  //   try {
  //     if (userId && userBlocks && userBlocks.includes(userId)) {
  //       await api.blocks.unBlockUser(userId);
  //     } else {
  //       userId && (await api.blocks.blockUser(userId));
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const iBlocked = () => {
  //   if (profileMe?.data?.blocks && chat.user?.id) {
  //     return profileMe?.data?.blocks.includes(chat.user?.id);
  //   }
  //   return false;
  // };
  //
  // const blockedMe = () => {
  //   if (profileMe?.data?.id && chat.user?.blocks) {
  //     return chat.user?.blocks.includes(profileMe?.data?.id);
  //   }
  //   return false;
  // };

  if (chat.loading) {
    return (
      <div className={cx(styles.chat, props.theme === "dark" && styles.dark, props.className)}>
        <div className={styles.loading}>
          {props.theme === "dark" ? <img src="/img/loader.svg" /> : <img src="/img/loader-black.svg" />}
        </div>

        <InputToolbar onSend={chat.onSend} onTyping={chat.onTyping} />
      </div>
    );
  }

  if (chat.empty) {
    return (
      <div className={cx(styles.chat, props.theme === "dark" && styles.dark, props.className)}>
        <ChatEmpty image={chat.user?.image} onSend={chat.onSend} />
        <InputToolbar onSend={chat.onSend} onTyping={chat.onTyping} />
      </div>
    );
  }

  return (
    <div className={cx(styles.chat, props.theme === "dark" && styles.dark, props.className)}>
      <MessageContainer>
        <TypingIndicator hide={!chat.typing} />

        {chat.messagesByDay.map((it) => (
          <React.Fragment key={it.day}>
            {it.messages.map((it) => (
              <Message key={it.id} {...it} />
            ))}
            <Day>{it.day}</Day>
          </React.Fragment>
        ))}
      </MessageContainer>

      <InputToolbar onSend={chat.onSend} onTyping={chat.onTyping} />
      {/*{blockedMe || iBlocked ? (*/}
      {/*  <BlockUser disabledPress={blockedMe} onPress={() => onPressBlock()} iBlocked={iBlocked} />*/}
      {/*) : (*/}
      {/*  <InputToolbar onSend={chat.onSend} onTyping={chat.onTyping} />*/}
      {/*)}*/}
    </div>
  );
};

Chat.defaultProps = {
  theme: "white",
};
