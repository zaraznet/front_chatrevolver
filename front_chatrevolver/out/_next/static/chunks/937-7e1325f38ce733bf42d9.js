(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [937],
  {
    760: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return m;
        },
      });
      n(7294);
      var s = n(4184),
        o = n.n(s),
        a = n(5474),
        r = n.n(a),
        c = n(7277),
        i = n(7105),
        u = n.n(i),
        d = n(5893),
        l = function (e) {
          return (0, d.jsx)("div", {
            className: o()(u().chat_skeleton, e.className),
            style: e.style,
            children: (0, d.jsxs)("div", {
              className: "chat chat--disabled",
              children: [
                (0, d.jsxs)("div", {
                  className: "chat-disabled-top",
                  children: [
                    (0, d.jsx)("div", { className: "chat-disabled-top__ava" }),
                    (0, d.jsxs)("div", {
                      className: "chat-disabled-top__content",
                      children: [
                        (0, d.jsx)("span", { className: "chat-disabled-top__line" }),
                        (0, d.jsx)("span", { className: "chat-disabled-top__line" }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: "chat__block chat__block--disabled",
                  children: (0, d.jsxs)("div", {
                    className: "chat-messages",
                    children: [
                      (0, d.jsx)("div", { className: "chat-message" }),
                      (0, d.jsx)("div", { className: "chat-message chat-message--my" }),
                      (0, d.jsx)("div", { className: "chat-message" }),
                      (0, d.jsx)("div", { className: "chat-message chat-message--my" }),
                    ],
                  }),
                }),
                (0, d.jsxs)("form", {
                  className: "chat__bottom",
                  children: [
                    (0, d.jsx)("textarea", { className: "chat__textarea", placeholder: "Write a message ..." }),
                    (0, d.jsx)("button", { className: "chat__send-button" }),
                  ],
                }),
              ],
            }),
          });
        };
      l.defaultProps = {};
      var m = function (e) {
        return e.id
          ? (0, d.jsx)("div", {
              className: o()(r().chat_card, e.className),
              style: e.style,
              children: (0, d.jsx)(c.e, { id: e.id, temporary: e.temporary }),
            })
          : (0, d.jsx)("div", {
              className: o()(r().chat_card, e.className),
              style: e.style,
              children: (0, d.jsx)(l, {}),
            });
      };
      m.defaultProps = {};
    },
    8956: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return u;
        },
      });
      var s = n(5861),
        o = n(7757),
        a = n.n(o),
        r = n(7294),
        c = n(6661),
        i = new (n(8935).N)(),
        u = function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = (0, r.useState)(),
            o = n[0],
            u = n[1],
            d = (0, r.useState)(),
            l = d[0],
            m = d[1],
            v = (0, r.useState)(),
            h = v[0],
            _ = v[1],
            f = (0, r.useState)(!1),
            p = f[0],
            g = f[1],
            x = function (e) {
              l &&
                l.getTracks().forEach(function (e) {
                  return e.stop();
                }),
                m(e);
            },
            y = function (e) {
              h &&
                h.getTracks().forEach(function (e) {
                  return e.stop();
                }),
                _(e);
            },
            b = (function () {
              var e = (0, s.Z)(
                a().mark(function e() {
                  var t;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), navigator.mediaDevices.getUserMedia({ video: !0, audio: !0 });
                        case 2:
                          (t = e.sent), y(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            j = (function () {
              var e = (0, s.Z)(
                a().mark(function e() {
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), b();
                        case 2:
                          g(!0), c.ws.videoChat.enterQueue({ rating: t.rating });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            N = function () {
              i.disconnect(), c.ws.videoChat.leaveRoom();
            },
            k = function () {
              y(void 0), g(!1), u(void 0), i.disconnect(), c.ws.videoChat.leaveQueue();
            },
            w = (function () {
              var e = (0, s.Z)(
                a().mark(function e(t) {
                  var n;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return u(t), (e.next = 3), i.initialize(t.myId);
                        case 3:
                          if ((console.log("enterRoom", { initiator: t.initiator }), !t.initiator)) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 7), i.call(t.companionId, h);
                        case 7:
                          (n = e.sent), (e.next = 13);
                          break;
                        case 10:
                          return (e.next = 12), i.answer(h);
                        case 12:
                          n = e.sent;
                        case 13:
                          console.log("get income stream"), x(n);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = function () {
              u(void 0), x(void 0), i.disconnect();
            };
          (0, r.useEffect)(
            function () {
              if (h) {
                var e = [c.ws.videoChat.onEnterRoom(w), c.ws.videoChat.onLeaveRoom(P)];
                return function () {
                  k(),
                    e.forEach(function (e) {
                      return e();
                    });
                };
              }
            },
            [h]
          );
          var M = p ? (o ? "active" : "loading") : "init";
          return {
            state: M,
            room: o,
            chatId: t.rating
              ? null === o || void 0 === o || null === (e = o.profile) || void 0 === e
                ? void 0
                : e.chatId
              : null === o || void 0 === o
              ? void 0
              : o.roomID,
            incomeStream: l,
            outcomeStream: h,
            next: N,
            stop: k,
            start: j,
          };
        };
    },
    8935: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return d;
        },
      });
      var s = n(5861),
        o = n(5671),
        a = n(3144),
        r = n(4942),
        c = n(7757),
        i = n.n(c),
        u = {
          iceServers: [
            {
              urls: [
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun3.l.google.com:19302",
                "stun:stun4.l.google.com:19302",
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun3.l.google.com:19302",
                "stun:stun4.l.google.com:19302",
                "stun:stun.ekiga.net",
                "stun:stun.ideasip.com",
                "stun:stun.rixtelecom.se",
                "stun:stun.schlund.de",
                "stun:stun.stunprotocol.org:3478",
                "stun:stun.voiparound.com",
                "stun:stun.voipbuster.com",
                "stun:stun.voipstunt.com",
                "stun:stun.voxgratia.org",
              ],
            },
            { urls: ["turn:numb.viagenie.ca"], credential: "muazkh", username: "webrtc@live.com" },
            {
              urls: ["turn:192.158.29.39:3478?transport=udp"],
              credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
              username: "28224511:1379330808",
            },
            {
              urls: ["turn:192.158.29.39:3478?transport=tcp"],
              credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
              username: "28224511:1379330808",
            },
            { urls: ["turn:turn.bistri.com:80"], credential: "homeo", username: "homeo" },
            { urls: ["turn:turn.anyfirewall.com:443?transport=tcp"], credential: "webrtc", username: "webrtc" },
          ],
        },
        d = (function () {
          function e() {
            (0, o.Z)(this, e), (0, r.Z)(this, "peer", void 0);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "initialize",
                value: (function () {
                  var e = (0, s.Z)(
                    i().mark(function e(t) {
                      var s,
                        o,
                        a = this;
                      return i().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Promise.all([n.e(783), n.e(784)]).then(n.t.bind(n, 5391, 23));
                            case 2:
                              return (
                                (s = e.sent),
                                (o = s.default),
                                e.abrupt(
                                  "return",
                                  new Promise(function (e, n) {
                                    (a.peer = new o(t, {
                                      host: "rev.yoldi.agency",
                                      path: "/peerjs/myapp",
                                      secure: !0,
                                      port: 443,
                                      debug: 1,
                                      config: u,
                                    })),
                                      a.peer.on("open", function () {
                                        return e(void 0);
                                      });
                                  })
                                )
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "call",
                value: (function () {
                  var e = (0, s.Z)(
                    i().mark(function e(t, n) {
                      var s = this;
                      return i().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, o) {
                                  s.peer.call(t, n).on("stream", e);
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "answer",
                value: (function () {
                  var e = (0, s.Z)(
                    i().mark(function e(t) {
                      var n = this;
                      return i().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, o) {
                                  n.peer.on(
                                    "call",
                                    (function () {
                                      var n = (0, s.Z)(
                                        i().mark(function n(s) {
                                          return i().wrap(function (n) {
                                            for (;;)
                                              switch ((n.prev = n.next)) {
                                                case 0:
                                                  s.answer(t), s.on("stream", e);
                                                case 2:
                                                case "end":
                                                  return n.stop();
                                              }
                                          }, n);
                                        })
                                      );
                                      return function (e) {
                                        return n.apply(this, arguments);
                                      };
                                    })()
                                  );
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "disconnect",
                value: function () {
                  var e, t;
                  null === (e = this.peer) || void 0 === e || e.disconnect(),
                    null === (t = this.peer) || void 0 === t || t.destroy();
                },
              },
            ]),
            e
          );
        })();
    },
    9627: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return c;
        },
      });
      n(7294);
      var s = n(1460),
        o = n(6176),
        a = n.n(o),
        r = n(5893),
        c = function (e) {
          return (0, r.jsxs)("div", {
            className: a().main_video,
            children: [
              "loading" === e.state && (0, r.jsx)("img", { className: a().loader, src: "/img/loader.svg" }),
              "active" === e.state && (0, r.jsx)(s.h, { className: a().video, src: e.incomeStream }),
              "init" === e.state &&
                (0, r.jsx)("div", {
                  className: a().placeholder,
                  children: (0, r.jsx)("img", {
                    src: "/img/spin4luck.svg",
                    alt: "",
                    style: { display: "block", width: "100%", height: "100%", objectFit: "cover" },
                  }),
                }),
              (0, r.jsx)("div", {
                className: a().mobile,
                children: (0, r.jsx)(s.h, { src: e.outcomeStream, muted: !0 }),
              }),
            ],
          });
        };
      c.defaultProps = {};
    },
    7711: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(7294),
        o = n(4353),
        a = n.n(o),
        r = n(1460),
        c = n(4184),
        i = n.n(c),
        u = n(7100),
        d = n(5893),
        l = function (e) {
          var t,
            n = (0, s.useState)(null === (t = e.src) || void 0 === t ? void 0 : t.getAudioTracks()[0].enabled),
            o = n[0],
            c = n[1];
          (0, s.useEffect)(
            function () {
              var t,
                n = null === (t = e.src) || void 0 === t ? void 0 : t.getAudioTracks()[0].enabled;
              c(n);
            },
            [e.src]
          );
          var l = (0, u.Z)();
          return e.src
            ? (0, d.jsxs)("div", {
                className: a().my_video,
                children: [
                  (0, d.jsx)(r.h, { className: a().video, src: e.src, muted: !0 }),
                  (0, d.jsxs)("div", {
                    className: a().cover,
                    children: [
                      o &&
                        (0, d.jsx)("span", {
                          className: i()(a().audio_control, a().on),
                          onClick: function () {
                            e.src && ((e.src.getAudioTracks()[0].enabled = !1), c(!1));
                          },
                          children: (0, d.jsx)("span", {
                            className: a().hover,
                            children: l.formatMessage({
                              id: "video_chat.my_video.micro_off",
                              defaultMessage: "Turn off the microphone",
                            }),
                          }),
                        }),
                      !o &&
                        (0, d.jsx)("span", {
                          className: i()(a().audio_control, a().off),
                          onClick: function () {
                            e.src && ((e.src.getAudioTracks()[0].enabled = !0), c(!0));
                          },
                          children: (0, d.jsx)("span", {
                            className: a().hover,
                            children: l.formatMessage({
                              id: "video_chat.my_video.micro_on",
                              defaultMessage: "Turn on the microphone",
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              })
            : (0, d.jsx)("div", {
                className: a().my_video,
                children: (0, d.jsxs)("div", {
                  className: a().need_access,
                  children: [
                    (0, d.jsx)("img", { src: "/img/camera-icon.svg" }),
                    (0, d.jsx)("p", {
                      children: l.formatMessage({
                        id: "video_chat.my_video.no_stream",
                        defaultMessage: "your video will appear here",
                      }),
                    }),
                  ],
                }),
              });
        };
      l.defaultProps = {};
    },
    2014: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return r;
        },
      });
      n(7294);
      var s = n(3748),
        o = n.n(s),
        a = n(5893),
        r = function (e) {
          return (0, a.jsxs)("div", {
            className: o().video_chat_body,
            children: [
              (0, a.jsx)("div", { className: o().main, children: e.children }),
              (0, a.jsx)("div", { className: o().right, children: e.controls }),
            ],
          });
        };
      r.defaultProps = {};
    },
    3987: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return c;
        },
      });
      n(7294);
      var s = n(8345),
        o = n.n(s),
        a = n(7100),
        r = n(5893),
        c = function (e) {
          var t = (0, a.Z)();
          return "init" === e.state
            ? (0, r.jsx)("div", {
                className: o().video_chat_controls,
                children: (0, r.jsx)("button", {
                  className: o().button,
                  onClick: e.onStart,
                  children: t.formatMessage({ id: "video_chat.controls.start", defaultMessage: "Start" }),
                }),
              })
            : (0, r.jsxs)("div", {
                className: o().video_chat_controls,
                children: [
                  (0, r.jsx)("button", {
                    className: o().stop,
                    onClick: e.onStop,
                    children: t.formatMessage({ id: "video_chat.controls.stop", defaultMessage: "Stop" }),
                  }),
                  (0, r.jsx)("button", {
                    className: o().button,
                    onClick: e.onNext,
                    disabled: "loading" === e.state,
                    children: t.formatMessage({ id: "video_chat.controls.next", defaultMessage: "Next User" }),
                  }),
                ],
              });
        };
      c.defaultProps = {};
    },
    1460: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var s = n(7294),
        o = n(5893),
        a = function (e) {
          var t = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(
              function () {
                var n = t.current;
                n && ((n.srcObject = e.src || null), n.play());
              },
              [t, e.src]
            ),
            (0, o.jsx)("video", { ref: t, className: e.className, playsInline: !0, muted: e.muted, autoPlay: !0 })
          );
        };
      a.defaultProps = {};
    },
    5474: function (e) {
      e.exports = { chat_card: "chat-card_chat_card__3rLnu" };
    },
    7105: function (e) {
      e.exports = { chat_skeleton: "chat-skeleton_chat_skeleton__7lg09" };
    },
    6176: function (e) {
      e.exports = {
        main_video: "main-video_main_video__3Stee",
        loader: "main-video_loader__12Bij",
        video: "main-video_video__1kbP_",
        placeholder: "main-video_placeholder__2MMIc",
        mobile: "main-video_mobile__5an07",
      };
    },
    4353: function (e) {
      e.exports = {
        need_access: "my-video_need_access__2N1g-",
        my_video: "my-video_my_video__3pUBX",
        audio_control: "my-video_audio_control__1RWmK",
        "my_video__no-video": "my-video_my_video__no-video__2bJ70",
        video: "my-video_video__3URdK",
        cover: "my-video_cover__1r2Bo",
        hover: "my-video_hover__3EjAX",
        off: "my-video_off__1Uo2g",
        on: "my-video_on__1a2bo",
      };
    },
    3748: function (e) {
      e.exports = {
        video_chat_body: "video-chat-body_video_chat_body__25yQ7",
        main: "video-chat-body_main__3LIsW",
        right: "video-chat-body_right__1r1B0",
      };
    },
    8345: function (e) {
      e.exports = {
        video_chat_controls: "video-chat-controls_video_chat_controls__2Y9Vv",
        button: "video-chat-controls_button__aUV-n",
        stop: "video-chat-controls_stop__1yFl1",
      };
    },
  },
]);
