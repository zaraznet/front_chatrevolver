import LocalStorage from "@yoldi/utils/LocalStorage";
import { ResponseContext } from "../_generated";

const baseUrl = process.env.API_URL;

export const successAuthMiddleware = (accessTokenKey: string, paths: string[]) => {
  return async (context: ResponseContext): Promise<Response | void> => {
    const url = context.url.substring(baseUrl!.length);
    if (context.response.ok && paths.find((it) => url.startsWith(it))) {
      const response = await context.response.json();
      LocalStorage.setItem(accessTokenKey, response.token);
    }
  };
};
