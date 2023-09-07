(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7097: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      a(7294);
      var n = a(5987),
        s = a(8956),
        i = a(3987),
        r = a(1303),
        c = a(9955),
        d = a(940),
        o = a(9627),
        l = a(2014),
        u = a(7711),
        h = a(8849),
        v = a.n(h),
        _ = a(5893),
        f = function (e) {
          return (0, _.jsx)("div", { className: v().video_chat_title, children: e.children });
        };
      f.defaultProps = {};
      var g = a(7258),
        m = a.n(g),
        x = a(7100),
        j = function (e) {
          var t = (0, x.Z)();
          return (
            t.formatMessage({ id: "video_chat.advantages.0.title", defaultMessage: "Search Filter" }),
            t.formatMessage({
              id: "video_chat.advantages.0.description",
              defaultMessage: "Chat with only who are needed",
            }),
            (0, _.jsxs)("div", {
              className: m().video_chat_advantages,
              children: [
                (0, _.jsxs)("div", {
                  className: m().item,
                  children: [
                    (0, _.jsx)("img", { src: "/img/advantage1.svg" }),
                    (0, _.jsxs)("div", {
                      className: m().content,
                      children: [
                        (0, _.jsx)("p", {
                          className: m().title,
                          children: t.formatMessage({
                            id: "video_chat.advantages.0.title",
                            defaultMessage: "Search Filter",
                          }),
                        }),
                        (0, _.jsx)("p", {
                          className: m().text,
                          children: t.formatMessage({
                            id: "video_chat.advantages.0.description",
                            defaultMessage: "Chat with only who are needed",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: m().item,
                  children: [
                    (0, _.jsx)("img", { src: "/img/advantage2.svg" }),
                    (0, _.jsxs)("div", {
                      className: m().content,
                      children: [
                        (0, _.jsx)("p", {
                          className: m().title,
                          children: t.formatMessage({
                            id: "video_chat.advantages.1.title",
                            defaultMessage: "Contacts",
                          }),
                        }),
                        (0, _.jsx)("p", {
                          className: m().text,
                          children: t.formatMessage({
                            id: "video_chat.advantages.1.description",
                            defaultMessage: "You can chat with follow friends",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: m().item,
                  children: [
                    (0, _.jsx)("img", { src: "/img/advantage3.svg" }),
                    (0, _.jsxs)("div", {
                      className: m().content,
                      children: [
                        (0, _.jsx)("p", {
                          className: m().title,
                          children: t.formatMessage({ id: "video_chat.advantages.2.title", defaultMessage: "Chats" }),
                        }),
                        (0, _.jsx)("p", {
                          className: m().text,
                          children: t.formatMessage({
                            id: "video_chat.advantages.2.description",
                            defaultMessage: "You can follow friends",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      j.defaultProps = {};
      var p = a(760),
        N = a(1664),
        M = ["incomeStream", "outcomeStream"],
        w = function () {
          var e = (0, s.I)(),
            t = e.incomeStream,
            a = e.outcomeStream,
            h = (0, n.Z)(e, M),
            v = (0, x.Z)(),
            g = (0, _.jsx)(i.c, { state: h.state, onStart: h.start, onStop: h.stop, onNext: h.next });
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(r.V, {
                children: [
                  (0, _.jsx)(o.X, { state: h.state, incomeStream: t, outcomeStream: a }),
                  (0, _.jsx)(l.P, {
                    controls: g,
                    children: (0, _.jsx)(f, {
                      children: v.formatMessage(
                        {
                          id: "video_chat.classic.title",
                          defaultMessage: "Join us and get access to more features / <a>Learn more</a>",
                        },
                        {
                          a: function (e) {
                            return (0, _.jsx)(N.default, {
                              href: "/faq/rating",
                              children: (0, _.jsx)("a", { children: e }),
                            });
                          },
                        }
                      ),
                    }),
                  }),
                  (0, _.jsx)(j, {}),
                ],
              }),
              (0, _.jsxs)(c.d, {
                children: [
                  (0, _.jsx)(u.Z, { src: a }),
                  (0, _.jsx)(d.Y, {}),
                  (0, _.jsx)(p.I, { id: h.chatId, temporary: !0 }),
                ],
              }),
            ],
          });
        };
      w.defaultProps = {};
      var S = function () {
        return (0, _.jsx)(w, {});
      };
    },
    940: function (e, t, a) {
      "use strict";
      a.d(t, {
        Y: function () {
          return n;
        },
      });
      a(7294), a(6545), a(5893);
      var n = function (e) {
        return null;
      };
      n.defaultProps = {};
    },
    1303: function (e, t, a) {
      "use strict";
      a.d(t, {
        V: function () {
          return r;
        },
      });
      a(7294);
      var n = a(6414),
        s = a.n(n),
        i = a(5893),
        r = function (e) {
          return (0, i.jsx)("div", { className: s().content, children: e.children });
        };
      r.defaultProps = {};
    },
    9955: function (e, t, a) {
      "use strict";
      a.d(t, {
        d: function () {
          return r;
        },
      });
      a(7294);
      var n = a(3690),
        s = a.n(n),
        i = a(5893),
        r = function (e) {
          return (0, i.jsx)("div", { className: s().right_content, children: e.children });
        };
      r.defaultProps = {};
    },
    5301: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(7097);
        },
      ]);
    },
    7258: function (e) {
      e.exports = {
        video_chat_advantages: "video-chat-advantages_video_chat_advantages__tzCTe",
        title: "video-chat-advantages_title__30UFx",
        text: "video-chat-advantages_text__2vEdQ",
        item: "video-chat-advantages_item__15FIk",
        content: "video-chat-advantages_content__wmpWS",
      };
    },
    8849: function (e) {
      e.exports = {
        video_chat_title: "video-chat-title_video_chat_title__1yqfT",
        unauthorized: "video-chat-title_unauthorized__2E_dL",
      };
    },
    6545: function (e) {
      e.exports = { ad_card: "ad-card_ad_card__1oRup" };
    },
    6414: function (e) {
      e.exports = { content: "content_content__36IZk" };
    },
    3690: function (e) {
      e.exports = { right_content: "right-content_right_content__9FnFV" };
    },
    5987: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = a(3366);
      function s(e, t) {
        if (null == e) return {};
        var a,
          s,
          i = (0, n.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (s = 0; s < r.length; s++)
            (a = r[s]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]));
        }
        return i;
      }
    },
  },
  function (e) {
    e.O(0, [937, 774, 888, 179], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
