import { api, ChatMessageEvent, ChatReadEvent, MessageDTO, ws } from "shared/api";
import { throttle } from "throttle-debounce";
import { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { SWRConfiguration } from "swr";

export const useChat = (chatId: number, temporary: boolean = false) => {
  const chat = api.chat.useGetChat(temporary ? undefined! : chatId);
  const config: SWRConfiguration<MessageDTO[]> | undefined = temporary
    ? {
        fallbackData: [],
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      }
    : undefined;

  const messageList = api.chat.useMessages(chatId, undefined, config);

  const onSend = async (text: string) => {
    const content = text.trim();
    ws.chat.sendMessage(chatId, content);
  };

  const onTyping = useCallback(
    throttle(1000, () => ws.chat.typing(chatId)),
    [chatId, temporary]
  );

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleTyping = (event: { chatID: number }) => {
      if (event.chatID !== chatId) return;
      setTyping(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setTyping(false), 2500);
    };

    const handleMessage = (event: ChatMessageEvent) => {
      if (event.chatId !== chatId) return;
      console.log(chatId, event);
      setTyping(false);
      clearTimeout(timeout);
      messageList.mutate((data) => [event, ...(Array.isArray(data) ? data : [])], !temporary);
    };

    const handleRead = (event: ChatReadEvent) => {
      if (event.chatId !== chatId) return;
      messageList.mutate((data: MessageDTO[] | undefined) => data?.map((it) => ({ ...it, read: true })), !temporary);  
    };

    const unsubscribe = [
      () => clearTimeout(timeout), //
      ws.chat.onTyping(handleTyping),
      ws.chat.onMessage(handleMessage),
      ws.chat.onRead(handleRead),
    ];

    return () => unsubscribe.forEach((it) => it());
  }, [chatId, temporary]);

  // group messages by date
  const intl = useIntl();
  const now = new Date();
  const messages = messageList.data?.map((it) => {
    const currentYear = new Date(it.time).getFullYear() === now.getFullYear();

    return {
      ...it,
      day: intl.formatDate(it.time, { day: "2-digit", month: "long", year: currentYear ? undefined : "numeric" }),
    };
  });

  const messagesGroupMap = messages?.reduce((it, x) => {
    (it[x.day] = it[x.day] || []).push(x);
    return it;
  }, {} as { [key: string]: MessageDTO[] });

  const messagesByDay = Object.entries(messagesGroupMap || {}).map(([day, messages]: [string, MessageDTO[]]) => ({
    day,
    messages,
  }));

  return {
    id: chatId,
    messagesByDay,
    user: chat.data?.user,
    loading: messageList.data === undefined && messageList.isValidating,
    empty: messageList.data?.length === 0,
    typing,
    onSend,
    onTyping: onTyping,
  };
};
