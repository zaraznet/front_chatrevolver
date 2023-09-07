import { PublicUserProfileDTO } from "shared/api";

export interface EnterRoomEvent {
  initiator: boolean;
  myId: string;
  companionId: string;
  profile: PublicUserProfileDTO;
  roomID: number;
}
