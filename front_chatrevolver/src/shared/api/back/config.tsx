import { Configuration, ConfigurationParameters } from "./_generated";
import LocalStorage from "@yoldi/utils/LocalStorage";
import { logoutMiddleware, successAuthMiddleware } from "./middleware";

export const ACCESS_TOKEN_KEY = process.env.PROJECT_PREFIX + ":access-token";

export class BackApiConfig extends Configuration {
  constructor(params?: Omit<ConfigurationParameters, "accessToken">) {
    super({
      fetchApi: fetch,
      basePath: process.env.API_URL,
      ...params,
      get accessToken() {
        return LocalStorage.getItem(ACCESS_TOKEN_KEY);
      },
      middleware: [
        {
          post: successAuthMiddleware(ACCESS_TOKEN_KEY, [
            "/api/auth/login",
            "/api/auth/setNewPassword",
            "/api/auth/activateEmail",
          ]),
        },
        { post: logoutMiddleware() },
      ],
    });
  }
}
