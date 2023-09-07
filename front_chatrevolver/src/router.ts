import { page } from "@yoldi/utils/router";

const AppRouter = {
  index: page("/"),

  dating: page("/dating"),
  rating: page("/rating"),
  vip: page("/vip"),
  faq: page("/faq"),

  auth: {
    login: page("/auth/login"),
    signup: page("/auth/sign-up"),
    recovery: page("/auth/recovery"),
  },

  profile: {
    ...page("/profile"),
    edit: page("/profile/edit"),
    id: (id: number) => ({
      ...page(`/profile/${id}`),
      call: page(`/profile/${id}/call`),
    }),
  },

  // to delete
  // modal: {
  //   support: modal("support", []),
  //   report: modal<{ uid: number }>("report", ["uid"]),
  //   changeEmail: modal("change-email"),
  //   confirmEmailSent: modal("confirmation-sent"),
  //   changePassword: modal("change-password"),
  //   passwordChanged: modal("password-changed"),
  //   deleteProfile: modal("delete-profile"),
  //   deleteChat: modal<{ cid: number }>("delete-chat", ["cid"]),
  //   chatWith: modal<{ id: number }>("chat", ["id"]),
  //
  //   vipInfo: modal("vip-info"),
  //   vipStatus: modal("vip-status"),
  //   buyVip: modal<{ pid?: number }>("buy-vip", ["pid"]),
  // },
};

export default AppRouter;
