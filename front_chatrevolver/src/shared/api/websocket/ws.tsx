import io from "socket.io-client";
import { MessageReceiveType, MessageSentType } from "./messages";
import { getAccessToken, onAccessTokenChange } from "../back";
import { isServer } from "@yoldi/utils/helpers";
import { CallEvent, ChatMessageEvent, ChatReadEvent, ChatTypingEvent, EnterRoomEvent, OnlineNowEvent } from "./models";

export class WebSocketApi {
  protected socket = io(process.env.WS_API_URL!, {
    transports: ["websocket"],
    autoConnect: false,
  });

  constructor() {
    if (isServer()) return;

    this.socket.on("connect", this.auth);
    onAccessTokenChange(this.auth);

    this.socket.connect();
  }

  private auth = () => {
    this.socket?.emit(MessageReceiveType.AUTHENTICATION_MESSAGE, {
      token: getAccessToken(),
    });
  };

  private subscribe = (event: string, handler: (data: any) => void) => {
    this.socket.on(event, handler);
    return () => {
      this.socket.off(event, handler);
    };
  };

  videoChat = {
    enterQueue: (params: { rating?: boolean } = {}) => {
      this.socket.emit(MessageReceiveType.ENTER_QUEUE, { forceClassic: !params.rating });
    },

    leaveQueue: () => {
      this.socket.emit(MessageReceiveType.LEAVE_QUEUE);
    },

    leaveRoom: () => {
      this.socket.emit(MessageReceiveType.LEAVE_ROOM);
    },

    onEnterRoom: (handler: (msg: EnterRoomEvent) => void) => {
      return this.subscribe(MessageSentType.ENTER_ROOM, handler);
    },

    onLeaveRoom: (handler: () => void) => {
      return this.subscribe(MessageSentType.LEAVE_ROOM, handler);
    },
  };

  call = {
    startCall: (userId: number) => {
      this.socket.emit(MessageReceiveType.CALL, { userID: userId });
    },
    endCall: (userId: number) => {
      this.socket.emit(MessageReceiveType.END_CALL, { userID: userId });
    },
    onCall: (handler: (data: CallEvent) => void) => {
      return this.subscribe(MessageSentType.CALL, handler);
    },
    onCallFinished: (handler: () => void) => {
      return this.subscribe(MessageSentType.CALL_FINISHED, handler);
    },
    onCallExpired: (handler: () => void) => {
      return this.subscribe(MessageSentType.CALL_EXPIRED, handler);
    },
  };

  chat = {
    sendMessage: (chatId: number, message: string) => {
      this.socket.emit(MessageReceiveType.MESSAGE, { to: chatId, content: message });
    },

    onMessage: (handler: (data: ChatMessageEvent) => void) => {
      return this.subscribe(MessageSentType.MESSAGE, handler);
    },

    typing: (chatId: number) => {
      this.socket.emit(MessageReceiveType.TYPING, { chatID: chatId });
    },

    onTyping: (handler: (data: ChatTypingEvent) => void) => {
      return this.subscribe(MessageSentType.TYPING, handler);
    },

    onRead: (handler: (data: ChatReadEvent) => void) => {
      return this.subscribe(MessageSentType.MESSAGES_READ, handler);
    },
  };

  online = {
    onUpdate: (handler: (data: OnlineNowEvent) => void) => {
      return this.subscribe(MessageSentType.ONLINE_NOW, handler);
    },
  };
}
