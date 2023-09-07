import { createEvent, createStore, sample } from "effector";
import { ws } from "shared/api";
import Router from "next/router";

// Events

const onCall = createEvent<{ userId: number }>();
const onCallExpired = createEvent();
const onCallAccepted = createEvent();
export const declineCall = createEvent();

// Store

export const $incomingCall = createStore<{ userId: number } | null>(null)
  .on(onCall, (_, value) => value)
  .on(onCallExpired, () => null)
  .on(onCallAccepted, () => null);

// Subscribe on events

ws.call.onCall((data) => onCall({ userId: data.profile.id }));
ws.call.onCallExpired(onCallExpired);

const callDeclined = sample({
  clock: declineCall,
  source: $incomingCall,
  fn: (source) => source?.userId,
});

$incomingCall.on(callDeclined, () => null);
callDeclined.watch((userId) => userId && ws.call.endCall(userId));

Router.events.on("routeChangeStart", (url) => {
  const userId = $incomingCall.getState()?.userId;
  if (!userId) return;

  if (url === `/profile/${userId}/call`) {
    onCallAccepted();
  }
});
