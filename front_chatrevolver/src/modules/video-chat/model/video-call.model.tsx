import { useEffect, useState } from "react";
import { EnterRoomEvent, ws } from "shared/api";
import { WebRtc } from "./web-rtc";
import { useStream } from "modules/video-chat/model/stream.model";
import { VideoChatState } from "modules/video-chat/model/video-chat-state";
import AppRouter from "router";

const webRtc = new WebRtc();

export const useVideoCall = (userId: number) => {
  const [room, setRoom] = useState<EnterRoomEvent>();
  const [incomeStream, setIncomeStream] = useStream();
  const [outcomeStream, setOutcomeStream] = useStream();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(setOutcomeStream);
    return () => setOutcomeStream(undefined);
  }, []);

  useEffect(() => {
    if (!outcomeStream) return;

    const onEnterRoom = async (room: EnterRoomEvent) => {
      setRoom(room);
      await webRtc.initialize(room.myId);

      if (room.initiator) {
        const stream = await webRtc.call(room.companionId, outcomeStream!);
        setIncomeStream(stream);
      } else {
        const stream = await webRtc.answer(outcomeStream!);
        setIncomeStream(stream);
      }
    };

    const finishCall = AppRouter.profile.id(userId).open;

    const unsubscribe = [
      ws.videoChat.onEnterRoom(onEnterRoom), //
      ws.videoChat.onLeaveRoom(finishCall),
      ws.call.onCallExpired(finishCall),
      ws.call.onCallFinished(finishCall),
    ];

    ws.call.startCall(userId);

    return () => {
      ws.call.endCall(userId);
      unsubscribe.forEach((it) => it());
      webRtc?.disconnect();
      setOutcomeStream(undefined);
      setIncomeStream(undefined);
      setRoom(undefined);
    };
  }, [outcomeStream, userId]);

  return {
    state: (room ? "active" : "loading") as VideoChatState,
    room,
    chatId: room?.profile?.chatId || room?.roomID,
    incomeStream,
    outcomeStream,
    stop,
  };
};
