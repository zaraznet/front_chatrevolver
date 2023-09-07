(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [311],
  {
    760: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return m;
        },
      });
      n(7294);
      var r = n(4184),
        s = n.n(r),
        a = n(5474),
        o = n.n(a),
        i = n(7277),
        c = n(7105),
        d = n.n(c),
        l = n(5893),
        u = function (e) {
          return (0, l.jsx)("div", {
            className: s()(d().chat_skeleton, e.className),
            style: e.style,
            children: (0, l.jsxs)("div", {
              className: "chat chat--disabled",
              children: [
                (0, l.jsxs)("div", {
                  className: "chat-disabled-top",
                  children: [
                    (0, l.jsx)("div", { className: "chat-disabled-top__ava" }),
                    (0, l.jsxs)("div", {
                      className: "chat-disabled-top__content",
                      children: [
                        (0, l.jsx)("span", { className: "chat-disabled-top__line" }),
                        (0, l.jsx)("span", { className: "chat-disabled-top__line" }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "chat__block chat__block--disabled",
                  children: (0, l.jsxs)("div", {
                    className: "chat-messages",
                    children: [
                      (0, l.jsx)("div", { className: "chat-message" }),
                      (0, l.jsx)("div", { className: "chat-message chat-message--my" }),
                      (0, l.jsx)("div", { className: "chat-message" }),
                      (0, l.jsx)("div", { className: "chat-message chat-message--my" }),
                    ],
                  }),
                }),
                (0, l.jsxs)("form", {
                  className: "chat__bottom",
                  children: [
                    (0, l.jsx)("textarea", { className: "chat__textarea", placeholder: "Write a message ..." }),
                    (0, l.jsx)("button", { className: "chat__send-button" }),
                  ],
                }),
              ],
            }),
          });
        };
      u.defaultProps = {};
      var m = function (e) {
        return e.id
          ? (0, l.jsx)("div", {
              className: s()(o().chat_card, e.className),
              style: e.style,
              children: (0, l.jsx)(i.e, { id: e.id, temporary: e.temporary }),
            })
          : (0, l.jsx)("div", {
              className: s()(o().chat_card, e.className),
              style: e.style,
              children: (0, l.jsx)(u, {}),
            });
      };
      m.defaultProps = {};
    },
    5124: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return i;
        },
        n: function () {
          return c;
        },
      });
      n(7294);
      var r = n(2153),
        s = n.n(r),
        a = n(7100),
        o = n(5893),
        i = function (e) {
          var t = (0, a.Z)();
          return (0, o.jsxs)("div", {
            className: s().profile_deleted,
            children: [
              (0, o.jsx)("img", { src: "/img/deleted-icon.svg" }),
              (0, o.jsx)("p", {
                className: s().title,
                children: t.formatMessage({
                  id: "user.profile_deleted.title",
                  defaultMessage:
                    "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0431\u044b\u043b \u0443\u0434\u0430\u043b\u0435\u043d",
                }),
              }),
            ],
          });
        },
        c = function (e) {
          var t = (0, a.Z)();
          return (0, o.jsxs)("div", {
            className: s().profile_deleted,
            children: [
              (0, o.jsx)("img", { src: "/img/deleted-icon.svg" }),
              (0, o.jsx)("p", {
                className: s().title,
                children: t.formatMessage({
                  id: "user.profile_blocked.title",
                  defaultMessage:
                    "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d",
                }),
              }),
            ],
          });
        };
      i.defaultProps = {};
    },
    5699: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return v;
        },
      });
      var r = n(4942),
        s = (n(7294), n(7537)),
        a = n(4844),
        o = n(8864),
        i = n(5604),
        c = n(4965),
        d = n(7100),
        l = n(5893),
        u = function (e) {
          var t = (0, d.Z)();
          return void 0 === e.value
            ? null
            : e.value < 1
            ? (0, l.jsx)("div", {
                className: e.className,
                style: e.style,
                children: t.formatMessage(
                  { id: "shared.distance.meters", defaultMessage: "{dist} m from you" },
                  { dist: Math.floor(1e3 * e.value) }
                ),
              })
            : (0, l.jsx)("div", {
                className: e.className,
                style: e.style,
                children: t.formatMessage(
                  { id: "shared.distance.km", defaultMessage: "{dist} km from you" },
                  { dist: (0, c.ZP)(e.value, 1) }
                ),
              });
        };
      u.defaultProps = {};
      var m = n(5124);
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = function (e) {
        var t, n;
        return e.data
          ? e.data.deleted
            ? (0, l.jsx)(m.c, {})
            : e.data.blocked
            ? (0, l.jsx)(m.n, {})
            : (0, l.jsxs)(s.O, {
                children: [
                  (0, l.jsx)(s.O.Header, p({}, e.data)),
                  (0, l.jsxs)(s.O.Description, {
                    children: [
                      (0, l.jsxs)(s.O.Description.Item, {
                        children: [(0, l.jsx)(a.U, { country: e.data.country }), (0, i.u)(e.data)],
                      }),
                      (0, l.jsx)(s.O.Description.Item, { children: (0, l.jsx)(u, { value: e.data.distance }) }),
                      (0, l.jsx)(s.O.Description.Item, { children: (0, l.jsx)(o.Y, { gender: e.data.sex }) }),
                    ],
                  }),
                  (e.data.status || !(null === (t = e.data.tags) || void 0 === t || !t.length)) &&
                    (0, l.jsx)(s.O.Divider, {}),
                  e.data.status && (0, l.jsx)(s.O.Status, { children: e.data.status }),
                  !(null === (n = e.data.tags) || void 0 === n || !n.length) &&
                    (0, l.jsx)(s.O.Tags, { tags: e.data.tags }),
                  e.data.description &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(s.O.Divider, {}), (0, l.jsx)(s.O.About, { data: e.data.description })],
                    }),
                ],
              })
          : (0, l.jsx)(s.O.Skeleton, {});
      };
      v.defaultProps = {};
    },
    8935: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return l;
        },
      });
      var r = n(5861),
        s = n(5671),
        a = n(3144),
        o = n(4942),
        i = n(7757),
        c = n.n(i),
        d = {
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
        l = (function () {
          function e() {
            (0, s.Z)(this, e), (0, o.Z)(this, "peer", void 0);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "initialize",
                value: (function () {
                  var e = (0, r.Z)(
                    c().mark(function e(t) {
                      var r,
                        s,
                        a = this;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Promise.all([n.e(783), n.e(784)]).then(n.t.bind(n, 5391, 23));
                            case 2:
                              return (
                                (r = e.sent),
                                (s = r.default),
                                e.abrupt(
                                  "return",
                                  new Promise(function (e, n) {
                                    (a.peer = new s(t, {
                                      host: "rev.yoldi.agency",
                                      path: "/peerjs/myapp",
                                      secure: !0,
                                      port: 443,
                                      debug: 1,
                                      config: d,
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
                  var e = (0, r.Z)(
                    c().mark(function e(t, n) {
                      var r = this;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, s) {
                                  r.peer.call(t, n).on("stream", e);
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
                  var e = (0, r.Z)(
                    c().mark(function e(t) {
                      var n = this;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, s) {
                                  n.peer.on(
                                    "call",
                                    (function () {
                                      var n = (0, r.Z)(
                                        c().mark(function n(r) {
                                          return c().wrap(function (n) {
                                            for (;;)
                                              switch ((n.prev = n.next)) {
                                                case 0:
                                                  r.answer(t), r.on("stream", e);
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
          return i;
        },
      });
      n(7294);
      var r = n(1460),
        s = n(6176),
        a = n.n(s),
        o = n(5893),
        i = function (e) {
          return (0, o.jsxs)("div", {
            className: a().main_video,
            children: [
              "loading" === e.state && (0, o.jsx)("img", { className: a().loader, src: "/img/loader.svg" }),
              "active" === e.state && (0, o.jsx)(r.h, { className: a().video, src: e.incomeStream }),
              "init" === e.state &&
                (0, o.jsx)("div", {
                  className: a().placeholder,
                  children: (0, o.jsx)("img", {
                    src: "/img/spin4luck.svg",
                    alt: "",
                    style: { display: "block", width: "100%", height: "100%", objectFit: "cover" },
                  }),
                }),
              (0, o.jsx)("div", {
                className: a().mobile,
                children: (0, o.jsx)(r.h, { src: e.outcomeStream, muted: !0 }),
              }),
            ],
          });
        };
      i.defaultProps = {};
    },
    7711: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(7294),
        s = n(4353),
        a = n.n(s),
        o = n(1460),
        i = n(4184),
        c = n.n(i),
        d = n(7100),
        l = n(5893),
        u = function (e) {
          var t,
            n = (0, r.useState)(null === (t = e.src) || void 0 === t ? void 0 : t.getAudioTracks()[0].enabled),
            s = n[0],
            i = n[1];
          (0, r.useEffect)(
            function () {
              var t,
                n = null === (t = e.src) || void 0 === t ? void 0 : t.getAudioTracks()[0].enabled;
              i(n);
            },
            [e.src]
          );
          var u = (0, d.Z)();
          return e.src
            ? (0, l.jsxs)("div", {
                className: a().my_video,
                children: [
                  (0, l.jsx)(o.h, { className: a().video, src: e.src, muted: !0 }),
                  (0, l.jsxs)("div", {
                    className: a().cover,
                    children: [
                      s &&
                        (0, l.jsx)("span", {
                          className: c()(a().audio_control, a().on),
                          onClick: function () {
                            e.src && ((e.src.getAudioTracks()[0].enabled = !1), i(!1));
                          },
                          children: (0, l.jsx)("span", {
                            className: a().hover,
                            children: u.formatMessage({
                              id: "video_chat.my_video.micro_off",
                              defaultMessage: "Turn off the microphone",
                            }),
                          }),
                        }),
                      !s &&
                        (0, l.jsx)("span", {
                          className: c()(a().audio_control, a().off),
                          onClick: function () {
                            e.src && ((e.src.getAudioTracks()[0].enabled = !0), i(!0));
                          },
                          children: (0, l.jsx)("span", {
                            className: a().hover,
                            children: u.formatMessage({
                              id: "video_chat.my_video.micro_on",
                              defaultMessage: "Turn on the microphone",
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              })
            : (0, l.jsx)("div", {
                className: a().my_video,
                children: (0, l.jsxs)("div", {
                  className: a().need_access,
                  children: [
                    (0, l.jsx)("img", { src: "/img/camera-icon.svg" }),
                    (0, l.jsx)("p", {
                      children: u.formatMessage({
                        id: "video_chat.my_video.no_stream",
                        defaultMessage: "your video will appear here",
                      }),
                    }),
                  ],
                }),
              });
        };
      u.defaultProps = {};
    },
    2014: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return o;
        },
      });
      n(7294);
      var r = n(3748),
        s = n.n(r),
        a = n(5893),
        o = function (e) {
          return (0, a.jsxs)("div", {
            className: s().video_chat_body,
            children: [
              (0, a.jsx)("div", { className: s().main, children: e.children }),
              (0, a.jsx)("div", { className: s().right, children: e.controls }),
            ],
          });
        };
      o.defaultProps = {};
    },
    1460: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var r = n(7294),
        s = n(5893),
        a = function (e) {
          var t = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(
              function () {
                var n = t.current;
                n && ((n.srcObject = e.src || null), n.play());
              },
              [t, e.src]
            ),
            (0, s.jsx)("video", { ref: t, className: e.className, playsInline: !0, muted: e.muted, autoPlay: !0 })
          );
        };
      a.defaultProps = {};
    },
    6352: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return _;
        },
      });
      var r = n(4942),
        s = (n(7294), n(1230)),
        a = n(8064),
        o = n(1664),
        i = n(3325),
        c = n(2786),
        d = n.n(c),
        l = n(4176),
        u = n(6661),
        m = n(7100),
        f = n(5893);
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var _ = function (e) {
        var t = u.h.user.useGetMe(),
          n = s.n.prepare(l.d),
          r = (0, m.Z)();
        return t.data
          ? t.data.vip
            ? null
            : (0, f.jsxs)("div", {
                className: d().vip_promo_card,
                children: [
                  (0, f.jsx)("img", { src: "/img/vip-promo.svg" }),
                  (0, f.jsx)("h3", {
                    children: r.formatMessage({
                      id: "vip.promo_card.title",
                      defaultMessage:
                        "\u041e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",
                    }),
                  }),
                  (0, f.jsx)("p", {
                    children: r.formatMessage(
                      {
                        id: "vip.promo_card.description",
                        defaultMessage:
                          "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441 VIP \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c \u043c\u043e\u0433\u0443\u0442 \u043f\u0438\u0441\u0430\u0442\u044c \u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u043c, \u043a\u043e\u0433\u043e \u043d\u0430\u0439\u0434\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 <a>\u043f\u043e\u0438\u0441\u043a \u0430\u043d\u043a\u0435\u0442</a>",
                      },
                      {
                        a: function (e) {
                          return (0, f.jsx)(
                            o.default,
                            v(v({}, i.Z.dating.link), {}, { children: (0, f.jsx)("a", { children: e }) })
                          );
                        },
                      }
                    ),
                  }),
                  (0, f.jsx)(a.z, {
                    type: "primary",
                    onClick: function () {
                      return n();
                    },
                    children: r.formatMessage({
                      id: "vip.promo_card.submit",
                      defaultMessage: "\u0421\u0442\u0430\u043d\u044c\u0442\u0435 VIP",
                    }),
                  }),
                ],
              })
          : null;
      };
      _.defaultProps = {};
    },
    6623: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var r = n(4942),
        s = n(7294),
        a = n(1163),
        o = n(6661),
        i = n(9955),
        c = n(940),
        d = n(1303),
        l = n(8064),
        u = n(6352),
        m = n(5699),
        f = n(6997),
        p = n(2014),
        v = n(7711),
        _ = n(9627),
        h = n(5861),
        g = n(885),
        j = n(7757),
        b = n.n(j),
        x = n(8935),
        y = function () {
          var e = (0, s.useState)(),
            t = e[0],
            n = e[1];
          return [
            t,
            function (e) {
              t &&
                t.getTracks().forEach(function (e) {
                  return e.stop();
                }),
                n(e);
            },
          ];
        },
        O = n(3325),
        N = new x.N(),
        w = n(760),
        k = n(5124),
        P = n(7100),
        M = n(5893);
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var S = (0, a.withRouter)(function (e) {
        var t,
          n,
          r,
          a,
          j,
          x = e.router.query,
          Z = parseInt(x.id),
          S = o.h.user.useGetUser(Z, { refreshInterval: 3e3 }),
          I = (function (e) {
            var t,
              n = (0, s.useState)(),
              r = n[0],
              a = n[1],
              i = y(),
              c = (0, g.Z)(i, 2),
              d = c[0],
              l = c[1],
              u = y(),
              m = (0, g.Z)(u, 2),
              f = m[0],
              p = m[1];
            return (
              (0, s.useEffect)(function () {
                return (
                  navigator.mediaDevices.getUserMedia({ video: !0, audio: !0 }).then(p),
                  function () {
                    return p(void 0);
                  }
                );
              }, []),
              (0, s.useEffect)(
                function () {
                  if (f) {
                    var t = (function () {
                        var e = (0, h.Z)(
                          b().mark(function e(t) {
                            var n, r;
                            return b().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return a(t), (e.next = 3), N.initialize(t.myId);
                                  case 3:
                                    if (!t.initiator) {
                                      e.next = 10;
                                      break;
                                    }
                                    return (e.next = 6), N.call(t.companionId, f);
                                  case 6:
                                    (n = e.sent), l(n), (e.next = 14);
                                    break;
                                  case 10:
                                    return (e.next = 12), N.answer(f);
                                  case 12:
                                    (r = e.sent), l(r);
                                  case 14:
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
                      n = O.Z.profile.id(e).open,
                      r = [
                        o.ws.videoChat.onEnterRoom(t),
                        o.ws.videoChat.onLeaveRoom(n),
                        o.ws.call.onCallExpired(n),
                        o.ws.call.onCallFinished(n),
                      ];
                    return (
                      o.ws.call.startCall(e),
                      function () {
                        o.ws.call.endCall(e),
                          r.forEach(function (e) {
                            return e();
                          }),
                          null === N || void 0 === N || N.disconnect(),
                          p(void 0),
                          l(void 0),
                          a(void 0);
                      }
                    );
                  }
                },
                [f, e]
              ),
              {
                state: r ? "active" : "loading",
                room: r,
                chatId:
                  (null === r || void 0 === r || null === (t = r.profile) || void 0 === t ? void 0 : t.chatId) ||
                  (null === r || void 0 === r ? void 0 : r.roomID),
                incomeStream: d,
                outcomeStream: f,
                stop: stop,
              }
            );
          })(Z),
          D = (0, P.Z)(),
          C = (0, M.jsxs)(i.d, {
            children: [
              (0, M.jsx)(v.Z, { src: I.outcomeStream }),
              (0, M.jsx)(c.Y, {}),
              (null === (t = S.data) || void 0 === t ? void 0 : t.chatId) &&
                (0, M.jsx)(w.I, { id: null === (n = S.data) || void 0 === n ? void 0 : n.chatId }),
              (0, M.jsx)(u.b, {}),
            ],
          });
        return null !== (r = S.data) && void 0 !== r && r.deleted
          ? (0, M.jsxs)(M.Fragment, { children: [(0, M.jsx)(d.V, { children: (0, M.jsx)(k.c, {}) }), C] })
          : null !== (a = S.data) && void 0 !== a && a.blocked
          ? (0, M.jsxs)(M.Fragment, { children: [(0, M.jsx)(d.V, { children: (0, M.jsx)(k.n, {}) }), C] })
          : (0, M.jsxs)(M.Fragment, {
              children: [
                (0, M.jsxs)(d.V, {
                  children: [
                    (0, M.jsx)(_.X, { state: I.state, incomeStream: I.incomeStream, outcomeStream: I.outcomeStream }),
                    (0, M.jsx)(p.P, {
                      controls: (0, M.jsx)(M.Fragment, {
                        children: (0, M.jsx)(l.z, {
                          type: "danger",
                          style: { marginBottom: 10 },
                          onClick: O.Z.profile.id(Z).open,
                          children: D.formatMessage({ id: "pages.call.end_call", defaultMessage: "Call" }),
                        }),
                      }),
                      children: (0, M.jsx)(m.I, E({}, S)),
                    }),
                    (0, M.jsx)(f.P, { data: null === (j = S.data) || void 0 === j ? void 0 : j.images }),
                  ],
                }),
                C,
              ],
            });
      });
    },
    8064: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return m;
        },
      });
      var r = n(5861),
        s = n(7757),
        a = n.n(s),
        o = n(7294),
        i = n(4184),
        c = n.n(i),
        d = n(4809),
        l = n.n(d),
        u = n(5893),
        m = function (e) {
          var t = (0, o.useState)(!1),
            n = t[0],
            s = t[1],
            i = e.loading || n,
            d = (function () {
              var t = (0, r.Z)(
                a().mark(function t(n) {
                  var r;
                  return a().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!i && !e.disabled) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              (t.prev = 2),
                              s(!0),
                              (t.next = 6),
                              null === (r = e.onClick) || void 0 === r ? void 0 : r.call(e, n)
                            );
                          case 6:
                            return (t.prev = 6), s(!1), t.finish(6);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, , 6, 9]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return (0, u.jsx)("button", {
            className: c()(
              l().button,
              "primary" === e.type && l().primary,
              "secondary" === e.type && l().secondary,
              "danger" === e.type && l().danger,
              i && l().loading,
              e.className
            ),
            style: e.style,
            onClick: d,
            type: e.htmlType,
            disabled: i || e.disabled,
            children: e.children,
          });
        };
      m.defaultProps = {};
    },
    7580: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile/[id]/call",
        function () {
          return n(6623);
        },
      ]);
    },
    5474: function (e) {
      e.exports = { chat_card: "chat-card_chat_card__3rLnu" };
    },
    7105: function (e) {
      e.exports = { chat_skeleton: "chat-skeleton_chat_skeleton__7lg09" };
    },
    2153: function (e) {
      e.exports = {
        profile_deleted: "profile-deleted_profile_deleted__e9q_p",
        title: "profile-deleted_title__7RoWX",
        text: "profile-deleted_text__1limz",
        button: "profile-deleted_button__14PWt",
        "button--disabled": "profile-deleted_button--disabled__1cq0b",
      };
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
    2786: function (e) {
      e.exports = { vip_promo_card: "vip-promo-card_vip_promo_card__2jIcy" };
    },
    4809: function (e) {
      e.exports = {
        button: "button_button__2sYlk",
        disabled: "button_disabled__1Vpbe",
        primary: "button_primary__3_MGe",
        black: "button_black__3TL-i",
        secondary: "button_secondary__31sKl",
        "button__hidden-xs": "button_button__hidden-xs__3EL4V",
        light: "button_light__govQT",
        loading: "button_loading__3FlsY",
        slide: "button_slide__1aFDe",
        danger: "button_danger__19Fs7",
      };
    },
  },
  function (e) {
    e.O(0, [391, 524, 774, 888, 179], function () {
      return (t = 7580), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
