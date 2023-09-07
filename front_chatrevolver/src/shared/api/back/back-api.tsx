import { AuthApi, BlockApi, ChatApi, CommonApi, DefaultApi, SocialAuthApi, UserApi, VipApi } from "./_generated";
import { BackApiConfig } from "./config";

export class BackApi {
  private config = new BackApiConfig();

  readonly auth = new AuthApi(this.config);
  readonly chat = new ChatApi(this.config);
  readonly common = new CommonApi(this.config);
  readonly default = new DefaultApi(this.config);
  readonly socialAuth = new SocialAuthApi(this.config);
  readonly user = new UserApi(this.config);
  readonly vip = new VipApi(this.config);
  readonly blocks = new BlockApi(this.config);
}
