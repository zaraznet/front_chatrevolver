(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [708],
  {
    5124: function (e, t, r) {
      "use strict";
      r.d(t, {
        c: function () {
          return o;
        },
        n: function () {
          return c;
        },
      });
      r(7294);
      var n = r(2153),
        s = r.n(n),
        i = r(7100),
        a = r(5893),
        o = function (e) {
          var t = (0, i.Z)();
          return (0, a.jsxs)("div", {
            className: s().profile_deleted,
            children: [
              (0, a.jsx)("img", { src: "/img/deleted-icon.svg" }),
              (0, a.jsx)("p", {
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
          var t = (0, i.Z)();
          return (0, a.jsxs)("div", {
            className: s().profile_deleted,
            children: [
              (0, a.jsx)("img", { src: "/img/deleted-icon.svg" }),
              (0, a.jsx)("p", {
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
      o.defaultProps = {};
    },
    5699: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return p;
        },
      });
      var n = r(4942),
        s = (r(7294), r(7537)),
        i = r(4844),
        a = r(8864),
        o = r(5604),
        c = r(4965),
        l = r(7100),
        d = r(5893),
        u = function (e) {
          var t = (0, l.Z)();
          return void 0 === e.value
            ? null
            : e.value < 1
            ? (0, d.jsx)("div", {
                className: e.className,
                style: e.style,
                children: t.formatMessage(
                  { id: "shared.distance.meters", defaultMessage: "{dist} m from you" },
                  { dist: Math.floor(1e3 * e.value) }
                ),
              })
            : (0, d.jsx)("div", {
                className: e.className,
                style: e.style,
                children: t.formatMessage(
                  { id: "shared.distance.km", defaultMessage: "{dist} km from you" },
                  { dist: (0, c.ZP)(e.value, 1) }
                ),
              });
        };
      u.defaultProps = {};
      var f = r(5124);
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var p = function (e) {
        var t, r;
        return e.data
          ? e.data.deleted
            ? (0, d.jsx)(f.c, {})
            : e.data.blocked
            ? (0, d.jsx)(f.n, {})
            : (0, d.jsxs)(s.O, {
                children: [
                  (0, d.jsx)(s.O.Header, m({}, e.data)),
                  (0, d.jsxs)(s.O.Description, {
                    children: [
                      (0, d.jsxs)(s.O.Description.Item, {
                        children: [(0, d.jsx)(i.U, { country: e.data.country }), (0, o.u)(e.data)],
                      }),
                      (0, d.jsx)(s.O.Description.Item, { children: (0, d.jsx)(u, { value: e.data.distance }) }),
                      (0, d.jsx)(s.O.Description.Item, { children: (0, d.jsx)(a.Y, { gender: e.data.sex }) }),
                    ],
                  }),
                  (e.data.status || !(null === (t = e.data.tags) || void 0 === t || !t.length)) &&
                    (0, d.jsx)(s.O.Divider, {}),
                  e.data.status && (0, d.jsx)(s.O.Status, { children: e.data.status }),
                  !(null === (r = e.data.tags) || void 0 === r || !r.length) &&
                    (0, d.jsx)(s.O.Tags, { tags: e.data.tags }),
                  e.data.description &&
                    (0, d.jsxs)(d.Fragment, {
                      children: [(0, d.jsx)(s.O.Divider, {}), (0, d.jsx)(s.O.About, { data: e.data.description })],
                    }),
                ],
              })
          : (0, d.jsx)(s.O.Skeleton, {});
      };
      p.defaultProps = {};
    },
    5155: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return g;
        },
      });
      var n = r(5861),
        s = r(7757),
        i = r.n(s),
        a = r(7294),
        o = r(6661),
        c = r(2457),
        l = r(7808),
        d = r(4184),
        u = r.n(d),
        f = r(9122),
        v = r.n(f),
        m = r(5893),
        p = function (e) {
          var t = (0, a.useState)(0),
            r = t[0],
            n = t[1];
          return (0, m.jsxs)("div", {
            className: u()(v().stars_input, e.className),
            style: e.style,
            children: [
              (0, m.jsx)("span", {
                className: u()(v().item, r >= 1 && v().hover),
                onMouseEnter: function () {
                  return n(1);
                },
                onMouseLeave: function () {
                  return n(0);
                },
                onClick: function () {
                  return e.onClick(1);
                },
              }),
              (0, m.jsx)("span", {
                className: u()(v().item, r >= 2 && v().hover),
                onMouseEnter: function () {
                  return n(2);
                },
                onMouseLeave: function () {
                  return n(0);
                },
                onClick: function () {
                  return e.onClick(2);
                },
              }),
              (0, m.jsx)("span", {
                className: u()(v().item, r >= 3 && v().hover),
                onMouseEnter: function () {
                  return n(3);
                },
                onMouseLeave: function () {
                  return n(0);
                },
                onClick: function () {
                  return e.onClick(3);
                },
              }),
              (0, m.jsx)("span", {
                className: u()(v().item, r >= 4 && v().hover),
                onMouseEnter: function () {
                  return n(4);
                },
                onMouseLeave: function () {
                  return n(0);
                },
                onClick: function () {
                  return e.onClick(4);
                },
              }),
              (0, m.jsx)("span", {
                className: u()(v().item, r >= 5 && v().hover),
                onMouseEnter: function () {
                  return n(5);
                },
                onMouseLeave: function () {
                  return n(0);
                },
                onClick: function () {
                  return e.onClick(5);
                },
              }),
            ],
          });
        };
      p.defaultProps = {};
      var _ = r(3325),
        j = r(9555),
        x = r.n(j),
        h = r(7100),
        g = function (e) {
          var t,
            r,
            s = o.h.user.usePendingReviews({ refreshInterval: 3e3 }),
            d = (null === (t = s.data) || void 0 === t ? void 0 : t.length) || 0,
            f = 2 === d,
            v = d > 2,
            j = null === (r = s.data) || void 0 === r ? void 0 : r[0],
            g = null === j || void 0 === j ? void 0 : j.companion,
            O = (0, a.useState)(!1),
            b = O[0],
            w = O[1],
            y = (function () {
              var e = (0, n.Z)(
                i().mark(function e(t) {
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (j && !b) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return w(!0), (e.prev = 3), (e.next = 6), o.h.user.postReview(j.id, { rating: t });
                          case 6:
                            return (e.next = 8), s.mutate();
                          case 8:
                            return (e.prev = 8), w(!1), e.finish(8);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, , 8, 11]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = (0, h.Z)();
          if (0 === d) return null;
          var N = _.Z.profile.id(null === g || void 0 === g ? void 0 : g.id).open;
          return (0, m.jsxs)("div", {
            className: u()(x().reviews_card, f && x().two, v && x().many, b && x().loading, e.className),
            style: e.style,
            children: [
              (0, m.jsxs)("div", {
                className: x().content,
                children: [
                  (0, m.jsx)(c.q, {
                    className: x().ava,
                    src: null === g || void 0 === g ? void 0 : g.image,
                    gender: null === g || void 0 === g ? void 0 : g.sex,
                    online: null === g || void 0 === g ? void 0 : g.online,
                    onClick: N,
                  }),
                  (0, m.jsxs)("div", {
                    className: x().info,
                    children: [
                      (0, m.jsx)("p", {
                        className: x().name,
                        onClick: N,
                        children: null === g || void 0 === g ? void 0 : g.name,
                      }),
                      (0, m.jsx)("p", {
                        className: x().text,
                        children: P.formatMessage({ id: "video_chat.review", defaultMessage: "How do you rate me?" }),
                      }),
                    ],
                  }),
                  g && (0, m.jsx)(l.e, { id: g.id, size: "small", className: x().follow }),
                ],
              }),
              (0, m.jsx)("div", { className: x().divider }),
              (0, m.jsx)("div", { className: x().bottom, children: (0, m.jsx)(p, { onClick: y }) }),
            ],
          });
        };
      g.defaultProps = {};
    },
    2435: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return w;
          },
        });
      r(7294);
      var n = r(4942),
        s = r(5987),
        i = r(8956),
        a = r(3987),
        o = r(5155),
        c = r(1303),
        l = r(9955),
        d = r(940),
        u = r(9627),
        f = r(2014),
        v = r(7711),
        m = r(6661),
        p = r(5699),
        _ = r(6997),
        j = r(760),
        x = r(5893),
        h = ["incomeStream", "outcomeStream"];
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var b = function () {
        var e,
          t,
          r,
          n = (0, i.I)({ rating: !0 }),
          g = n.incomeStream,
          b = n.outcomeStream,
          w = (0, s.Z)(n, h),
          y = m.h.user.useGetUser(
            null === (e = w.room) || void 0 === e || null === (t = e.profile) || void 0 === t ? void 0 : t.id,
            { refreshInterval: 3e3 }
          ),
          P = (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(a.c, { state: w.state, onStart: w.start, onStop: w.stop, onNext: w.next }),
              (0, x.jsx)(o.D, {}),
            ],
          });
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsxs)(c.V, {
              children: [
                (0, x.jsx)(u.X, { state: w.state, incomeStream: g, outcomeStream: b }),
                (0, x.jsx)(f.P, { controls: P, children: (0, x.jsx)(p.I, O({}, y)) }),
                (0, x.jsx)(_.P, { data: null === (r = y.data) || void 0 === r ? void 0 : r.images }),
              ],
            }),
            (0, x.jsxs)(l.d, {
              children: [(0, x.jsx)(v.Z, { src: b }), (0, x.jsx)(d.Y, {}), (0, x.jsx)(j.I, { id: w.chatId })],
            }),
          ],
        });
      };
      b.defaultProps = {};
      var w = function () {
        return (0, x.jsx)(b, {});
      };
    },
    5438: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/rating",
        function () {
          return r(2435);
        },
      ]);
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
    9555: function (e) {
      e.exports = {
        reviews_card: "reviews-card_reviews_card__1GApT",
        name: "reviews-card_name__1XPCH",
        text: "reviews-card_text__1V5b7",
        two: "reviews-card_two__qtlaz",
        many: "reviews-card_many__1VzKD",
        loading: "reviews-card_loading__2g0ZQ",
        content: "reviews-card_content__tzejP",
        ava: "reviews-card_ava__3xrx6",
        info: "reviews-card_info__2Yqmx",
        follow: "reviews-card_follow__2AsWM",
        divider: "reviews-card_divider__36dPR",
        bottom: "reviews-card_bottom__6dd7-",
        go: "reviews-card_go__2KQAO",
      };
    },
    9122: function (e) {
      e.exports = {
        stars_input: "stars-input_stars_input__2gPsU",
        item: "stars-input_item__2fbKm",
        hover: "stars-input_hover__3AAf5",
      };
    },
  },
  function (e) {
    e.O(0, [391, 524, 937, 774, 888, 179], function () {
      return (t = 5438), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
