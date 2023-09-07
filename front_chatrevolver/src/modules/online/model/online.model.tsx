import { createEvent, createStore } from "effector";
import { ws } from "shared/api";

const updateOnline = createEvent<number>();

export const onlineStore = createStore(0) //
  .on(updateOnline, (state, value) => value);

ws.online.onUpdate(({ count }) => updateOnline(count));
