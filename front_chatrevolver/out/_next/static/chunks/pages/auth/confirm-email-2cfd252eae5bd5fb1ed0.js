(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [830],
  {
    1014: function (e, t, r) {
      "use strict";
      r.d(t, {
        x: function () {
          return f;
        },
      });
      var n = r(4942),
        a = (r(7294), r(4184)),
        o = r.n(a),
        u = r(7044),
        c = r.n(u),
        i = r(7100),
        s = r(5893);
      function l(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var f = function (e) {
        var t = (0, i.Z)();
        return (0, s.jsx)(
          "span",
          h(
            h({}, e),
            {},
            {
              className: o()(c().back_button, e.className),
              children: e.children || t.formatMessage({ id: "shared.back", defaultMessage: "Back" }),
            }
          )
        );
      };
    },
    5609: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return u;
        },
      });
      r(7294);
      var n = r(2612),
        a = r.n(n),
        o = r(5893),
        u = function (e) {
          return (0, o.jsx)("form", { className: a().auth_form, onSubmit: e.onSubmit, children: e.children });
        };
      u.defaultProps = {};
    },
    765: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return g;
        },
      });
      var n = r(4942),
        a = r(1664),
        o = (r(7294), r(658)),
        u = r.n(o),
        c = r(3325),
        i = r(1163),
        s = r(7100),
        l = r(5265),
        h = r(5893);
      function f(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var g = function (e) {
        var t = (0, s.Z)(),
          r = (0, i.useRouter)();
        return (0, h.jsxs)("div", {
          className: u().auth_layout,
          children: [
            (0, h.jsxs)("div", {
              className: u().header,
              children: [
                (0, h.jsx)(
                  a.default,
                  _(
                    _({}, c.Z.index.link),
                    {},
                    {
                      children: (0, h.jsxs)("div", {
                        className: u().logo,
                        children: [
                          (0, h.jsx)("div", { className: u().logo__img }),
                          (0, h.jsx)("div", { className: u().logo__text }),
                        ],
                      }),
                    }
                  )
                ),
                (0, h.jsxs)("div", {
                  className: u().menu,
                  children: [
                    (0, h.jsx)("a", {
                      href: "https://about.testchatrevolver.space",
                      target: "_blank",
                      children: t.formatMessage({ id: "menu.about", defaultMessage: "About" }),
                    }),
                    (0, h.jsx)(a.default, {
                      href: "/faq/what-is",
                      children: (0, h.jsx)("a", {
                        children: t.formatMessage({ id: "menu.faq", defaultMessage: "FAQ" }),
                      }),
                    }),
                  ],
                }),
                (0, h.jsx)("div", {
                  className: u().header__right,
                  children: (0, h.jsx)(l.R.Consumer, {
                    children: function (e) {
                      var t = e.currentLocale,
                        n = e.toggleLocale;
                      return (0, h.jsx)("button", {
                        className: u().language,
                        onClick: function () {
                          n("ru" === t ? "en" : "ru"),
                            r.push({
                              pathname: r.pathname,
                              query: _(_({}, r.query), {}, { lang: "ru" === t ? "en" : "ru" }),
                            });
                        },
                        children: "ru" === t ? "en" : "ru",
                      });
                    },
                  }),
                }),
              ],
            }),
            (0, h.jsx)("div", {
              className: u().background,
              children: (0, h.jsxs)("picture", {
                children: [
                  (0, h.jsx)("source", { srcSet: "/img/sign-bg_mobile.jpg", media: "(max-width: 767px)" }),
                  (0, h.jsx)("source", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x" }),
                  (0, h.jsx)("img", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x", alt: "" }),
                ],
              }),
            }),
            (0, h.jsx)("div", { className: u().container, children: e.children }),
          ],
        });
      };
      g.defaultProps = {};
    },
    1439: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return p;
          },
        });
      var n = r(7294),
        a = r(1163),
        o = r(5861),
        u = r(7757),
        c = r.n(u),
        i = r(5609),
        s = r(6661),
        l = r(2058),
        h = r(7100),
        f = r(5893),
        _ = function (e) {
          var t = (0, n.useState)(!1),
            r = t[0],
            a = t[1];
          (0, l.Hd)(
            (0, o.Z)(
              c().mark(function t() {
                return c().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), s.h.auth.activateEmail(e.code);
                        case 3:
                          t.next = 9;
                          break;
                        case 5:
                          (t.prev = 5), (t.t0 = t.catch(0)), a(!0), console.error(t.t0);
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 5]]
                );
              })
            )
          );
          var u = (0, h.Z)();
          return (0, f.jsxs)(i.B, {
            children: [
              (0, f.jsx)("h1", {
                children: u.formatMessage({ id: "auth.confirm-email.title", defaultMessage: "Email Confirmation" }),
              }),
              !r &&
                (0, f.jsx)("p", {
                  children: u.formatMessage({
                    id: "auth.confirm-email.loading",
                    defaultMessage: "Wait while we confirm your email...",
                  }),
                }),
              r &&
                (0, f.jsx)("p", {
                  children: u.formatMessage({
                    id: "auth.confirm-email.error",
                    defaultMessage: "Something went wrong. Try to follow the link from the letter again.",
                  }),
                }),
            ],
          });
        };
      _.defaultProps = {};
      var g = r(765),
        d = r(1014),
        m = r(3325),
        p = (0, a.withRouter)(function (e) {
          var t = e.router.query.code;
          return t
            ? (0, f.jsxs)(g.g, {
                children: [
                  (0, f.jsx)(d.x, {
                    onClick: function () {
                      return m.Z.auth.signup.open();
                    },
                  }),
                  (0, f.jsx)(_, { code: t }),
                ],
              })
            : null;
        });
    },
    1291: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/confirm-email",
        function () {
          return r(1439);
        },
      ]);
    },
    7044: function (e) {
      e.exports = { back_button: "back-button_back_button__pNHkN" };
    },
    2612: function (e) {
      e.exports = { auth_form: "auth-form_auth_form__3lJqN" };
    },
    658: function (e) {
      e.exports = {
        menu: "auth-layout_menu__F48JU",
        language: "auth-layout_language__1_mum",
        container__back: "auth-layout_container__back__34J1k",
        auth_layout: "auth-layout_auth_layout__3bI3b",
        background: "auth-layout_background__1YqO2",
        header: "auth-layout_header__2dLZ-",
        logo__img: "auth-layout_logo__img__1uHCY",
        logo__text: "auth-layout_logo__text__1ps1F",
        logo: "auth-layout_logo__1XmXO",
        header__right: "auth-layout_header__right__1UabV",
        container: "auth-layout_container__5ztYF",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 1291), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
