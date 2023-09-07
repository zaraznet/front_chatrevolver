import { useEffect, useState } from "react";
import { EnterRoomEvent, ws } from "shared/api";
import { WebRtc } from "./web-rtc";
import { VideoChatState } from "./video-chat-state";

const webRtc = new WebRtc();

export const useVideoChat = (params: { rating?: boolean } = {}) => {
  const [room, setRoom] = useState<EnterRoomEvent>();
  const [incomeStream, _setIncomeStream] = useState<MediaStream>();
  const [outcomeStream, _setOutcomeStream] = useState<MediaStream>();
  const [inQueue, _setInQueue] = useState<boolean>(false);

  const setIncomeStream = (stream: MediaStream | undefined) => {
    if (incomeStream) {
      incomeStream.getTracks().forEach((it) => it.stop());
    }
    _setIncomeStream(stream);
  };

  const setOutcomeStream = (stream: MediaStream | undefined) => {
    if (outcomeStream) {
      outcomeStream.getTracks().forEach((it) => it.stop());
    }
    _setOutcomeStream(stream);
  };

  const startWebCam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setOutcomeStream(stream);
  };

  const start = async () => {
    await startWebCam();
    _setInQueue(true);
    ws.videoChat.enterQueue({ rating: params.rating });
  };

  const next = () => {
    webRtc.disconnect();
    ws.videoChat.leaveRoom();
  };

  const stop = () => {
    setOutcomeStream(undefined);
    _setInQueue(false);
    setRoom(undefined);
    webRtc.disconnect();
    ws.videoChat.leaveQueue();
  };

  const onEnterRoom = async (room: EnterRoomEvent) => {
    setRoom(room);
    await webRtc.initialize(room.myId);

    let incomeStream: MediaStream;

    console.log("enterRoom", { initiator: room.initiator });
    if (room.initiator) {
      incomeStream = await webRtc.call(room.companionId, outcomeStream!);
    } else {
      incomeStream = await webRtc.answer(outcomeStream!);
    }

    console.log("get income stream");

    setIncomeStream(incomeStream);
  };

  const onLeaveRoom = () => {
    setRoom(undefined);
    setIncomeStream(undefined);
    webRtc.disconnect();
  };

  useEffect(() => {
    if (!outcomeStream) return;

    const unsubscribe = [
      ws.videoChat.onEnterRoom(onEnterRoom), //
      ws.videoChat.onLeaveRoom(onLeaveRoom),
    ];

    return () => {
      stop();
      unsubscribe.forEach((it) => it());
    };
  }, [outcomeStream]);

  const state: VideoChatState = !inQueue ? "init" : room ? "active" : "loading";

  return {
    state,
    room,
    chatId: params.rating ? room?.profile?.chatId : room?.roomID,
    incomeStream,
    outcomeStream,
    next,
    stop,
    start,
  };
};
