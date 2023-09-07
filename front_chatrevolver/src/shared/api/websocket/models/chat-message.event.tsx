export interface ChatMessageEvent {
  chatId: number;
  content: string;
  fromId: number;
  id: number;
  mine: boolean;
  read: boolean;
  temporary: boolean;
  time: number;
}
