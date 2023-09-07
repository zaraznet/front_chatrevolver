import { ResponseContext } from "../_generated";
import { logout } from "shared/api/back/lib";

export const logoutMiddleware = () => {
  return async (context: ResponseContext): Promise<Response | void> => {
    if (context.response.status === 401) {
      logout();
    }
  };
};
