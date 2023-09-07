import { webRtcConfig } from "./web-rtc.config";
import Peer from "peerjs";

export class WebRtc {
  peer?: Peer;

  async initialize(id: string) {
    const peerjs = await import("peerjs");
    const Peer = peerjs.default;

    return new Promise((resolve, reject) => {
      this.peer = new Peer(id, {
        host: "chatrevolver.com",
        path: "/myapp",
        secure: true,
        port: 443,
        debug: 1,
        config: webRtcConfig,
        /* @ts-ignore */
        proxied: true,
      });
      this.peer.on("open", () => resolve(undefined));
    });
  }

  async call(id: string, outcomeStream: MediaStream) {
    return new Promise<MediaStream>((resolve, reject) => {
      const call = this.peer!.call(id, outcomeStream);
      call.on("stream", resolve);
    });
  }

  async answer(outcomeStream: MediaStream) {
    return new Promise<MediaStream>((resolve, reject) => {
      this.peer!.on("call", async (call) => {
        call.answer(outcomeStream);
        call.on("stream", resolve);
      });
    });
  }

  disconnect() {
    this.peer?.disconnect();
    this.peer?.destroy();
  }
}
