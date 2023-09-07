import LocalStorage from "@yoldi/utils/LocalStorage";
import { ACCESS_TOKEN_KEY } from "../config";

export const logout = () => {
  LocalStorage.removeItem(ACCESS_TOKEN_KEY);
};
