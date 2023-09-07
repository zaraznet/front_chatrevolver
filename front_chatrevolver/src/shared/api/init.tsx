import { BackApi } from "./back";
import { WebSocketApi } from "./websocket";

export const api: BackApi = new BackApi();
export const ws = new WebSocketApi();
