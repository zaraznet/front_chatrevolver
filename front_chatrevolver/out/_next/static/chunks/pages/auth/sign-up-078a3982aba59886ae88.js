(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [928],
  {
    6600: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return u;
        },
      });
      r(7294);
      var n = r(8416),
        a = r(7227),
        s = r.n(a),
        o = r(7100),
        i = r(5893),
        u = function (e) {
          var t = (0, o.Z)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("p", {
                className: s().divider,
                children: t.formatMessage({ id: "auth.social_login.or_with", defaultMessage: "or with" }),
              }),
              (0, i.jsxs)("div", {
                className: s().socials,
                children: [
                  (0, i.jsx)("a", {
                    href: "".concat("https://api.testchatrevolver.space", "/api/vk"),
                    children: (0, i.jsx)(n.J, { name: "vk" }),
                  }),
                  (0, i.jsx)("a", {
                    href: "".concat("https://api.testchatrevolver.space", "/api/google"),
                    children: (0, i.jsx)(n.J, { name: "google" }),
                  }),
                  (0, i.jsx)("a", {
                    href: "".concat("https://api.testchatrevolver.space", "/api/apple"),
                    children: (0, i.jsx)(n.J, { name: "apple" }),
                  }),
                ],
              }),
            ],
          });
        };
      u.defaultProps = {};
    },
    1014: function (e, t, r) {
      "use strict";
      r.d(t, {
        x: function () {
          return p;
        },
      });
      var n = r(4942),
        a = (r(7294), r(4184)),
        s = r.n(a),
        o = r(7044),
        i = r.n(o),
        u = r(7100),
        c = r(5893);
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
      function d(e) {
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
      var p = function (e) {
        var t = (0, u.Z)();
        return (0, c.jsx)(
          "span",
          d(
            d({}, e),
            {},
            {
              className: s()(i().back_button, e.className),
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
          return o;
        },
      });
      r(7294);
      var n = r(2612),
        a = r.n(n),
        s = r(5893),
        o = function (e) {
          return (0, s.jsx)("form", { className: a().auth_form, onSubmit: e.onSubmit, children: e.children });
        };
      o.defaultProps = {};
    },
    8412: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return c;
        },
      });
      var n = r(7294),
        a = r(4184),
        s = r.n(a),
        o = r(8458),
        i = r.n(o),
        u = r(5893),
        c = (0, n.forwardRef)(function (e, t) {
          return (0,
          u.jsxs)(u.Fragment, { children: [(0, u.jsxs)("label", { className: s()(i().checkbox_input, e.className), children: [(0, u.jsx)("input", { type: "checkbox", ref: t, name: e.name, checked: e.checked, onChange: e.onChange, onBlur: e.onBlur }), (0, u.jsx)("p", { className: i().text, children: e.children })] }), e.error && (0, u.jsx)("div", { className: i().error, children: e.error })] });
        });
      c.defaultProps = {};
    },
    9414: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return l;
        },
      });
      var n = r(7294),
        a = r(4184),
        s = r.n(a),
        o = r(5834),
        i = r.n(o),
        u = r(8416),
        c = r(5893),
        l = (0, n.forwardRef)(function (e, t) {
          var r = (0, n.useState)(!1),
            a = r[0],
            o = r[1];
          return (0, c.jsxs)("div", {
            className: s()(i().text_input, e.error && i().error),
            children: [
              (0, c.jsx)("label", { className: i().label, children: e.label }),
              (0, c.jsx)("input", {
                type: a ? "text" : "password",
                ref: t,
                name: e.name,
                autoFocus: e.autoFocus,
                onChange: e.onChange,
                onBlur: e.onBlur,
                value: e.value,
              }),
              (0, c.jsxs)("div", {
                className: i().help,
                children: [
                  (0, c.jsx)("a", {
                    className: s()(i().icon, i().clickable),
                    onClick: function () {
                      return o(!a);
                    },
                    children: (0, c.jsx)(u.J, { name: a ? "password-hide" : "password-show", className: i().eye_icon }),
                  }),
                  (0, c.jsx)("span", { className: i().error_text, children: e.error }),
                ],
              }),
            ],
          });
        });
      l.defaultProps = {};
    },
    9717: function (e, t, r) {
      "use strict";
      r.d(t, {
        o: function () {
          return l;
        },
      });
      var n = r(7294),
        a = r(4184),
        s = r.n(a),
        o = r(5834),
        i = r.n(o),
        u = r(8416),
        c = r(5893),
        l = (0, n.forwardRef)(function (e, t) {
          return (0,
          c.jsxs)("div", { className: s()(i().text_input, e.error && i().error, e.disabled && i().disabled), children: [(0, c.jsx)("label", { className: i().label, children: e.label }), (0, c.jsx)("input", { type: "text", ref: t, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled }), (0, c.jsxs)("div", { className: i().help, children: [e.error && (0, c.jsx)(u.J, { name: "input-error", overrideColor: !1, className: i().icon }), (0, c.jsx)("span", { className: i().error_text, children: e.error })] })] });
        });
      l.defaultProps = {};
    },
    765: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return _;
        },
      });
      var n = r(4942),
        a = r(1664),
        s = (r(7294), r(658)),
        o = r.n(s),
        i = r(3325),
        u = r(1163),
        c = r(7100),
        l = r(5265),
        d = r(5893);
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var _ = function (e) {
        var t = (0, c.Z)(),
          r = (0, u.useRouter)();
        return (0, d.jsxs)("div", {
          className: o().auth_layout,
          children: [
            (0, d.jsxs)("div", {
              className: o().header,
              children: [
                (0, d.jsx)(
                  a.default,
                  f(
                    f({}, i.Z.index.link),
                    {},
                    {
                      children: (0, d.jsxs)("div", {
                        className: o().logo,
                        children: [
                          (0, d.jsx)("div", { className: o().logo__img }),
                          (0, d.jsx)("div", { className: o().logo__text }),
                        ],
                      }),
                    }
                  )
                ),
                (0, d.jsxs)("div", {
                  className: o().menu,
                  children: [
                    (0, d.jsx)("a", {
                      href: "https://about.testchatrevolver.space",
                      target: "_blank",
                      children: t.formatMessage({ id: "menu.about", defaultMessage: "About" }),
                    }),
                    (0, d.jsx)(a.default, {
                      href: "/faq/what-is",
                      children: (0, d.jsx)("a", {
                        children: t.formatMessage({ id: "menu.faq", defaultMessage: "FAQ" }),
                      }),
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: o().header__right,
                  children: (0, d.jsx)(l.R.Consumer, {
                    children: function (e) {
                      var t = e.currentLocale,
                        n = e.toggleLocale;
                      return (0, d.jsx)("button", {
                        className: o().language,
                        onClick: function () {
                          n("ru" === t ? "en" : "ru"),
                            r.push({
                              pathname: r.pathname,
                              query: f(f({}, r.query), {}, { lang: "ru" === t ? "en" : "ru" }),
                            });
                        },
                        children: "ru" === t ? "en" : "ru",
                      });
                    },
                  }),
                }),
              ],
            }),
            (0, d.jsx)("div", {
              className: o().background,
              children: (0, d.jsxs)("picture", {
                children: [
                  (0, d.jsx)("source", { srcSet: "/img/sign-bg_mobile.jpg", media: "(max-width: 767px)" }),
                  (0, d.jsx)("source", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x" }),
                  (0, d.jsx)("img", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x", alt: "" }),
                ],
              }),
            }),
            (0, d.jsx)("div", { className: o().container, children: e.children }),
          ],
        });
      };
      _.defaultProps = {};
    },
    8352: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return _;
        },
      });
      var n = r(4942),
        a = (r(7294), r(4911)),
        s = r.n(a),
        o = r(4184),
        i = r.n(o),
        u = r(1664),
        c = r(3325),
        l = r(7100),
        d = r(5893);
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var _ = function (e) {
        var t = c.Z.auth,
          r = (0, l.Z)();
        return (0, d.jsxs)("div", {
          className: s().auth_tabs,
          children: [
            (0, d.jsx)(
              u.default,
              f(
                f({}, t.signup.link),
                {},
                {
                  children: (0, d.jsx)("div", {
                    className: i()(s().item, "sign-up" === e.active && s().active),
                    children: r.formatMessage({ id: "auth.tabs.sign_up", defaultMessage: "Sign up" }),
                  }),
                }
              )
            ),
            (0, d.jsx)(
              u.default,
              f(
                f({}, t.login.link),
                {},
                {
                  children: (0, d.jsxs)("div", {
                    className: i()(s().item, "login" === e.active && s().active),
                    children: [" ", r.formatMessage({ id: "auth.tabs.sign_in", defaultMessage: "Sign in" })],
                  }),
                }
              )
            ),
          ],
        });
      };
      _.defaultProps = {};
    },
    6415: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return w;
          },
        });
      var n = r(7294),
        a = r(5609),
        s = r(9717),
        o = r(7100),
        i = r(5893),
        u = function (e) {
          var t = (0, o.Z)();
          return (0, i.jsxs)(a.B, {
            children: [
              (0, i.jsx)("h1", {
                children: t.formatMessage({ id: "auth.sign_up.success.title", defaultMessage: "Sign up with email" }),
              }),
              (0, i.jsx)("p", {
                children: t.formatMessage({
                  id: "auth.sign_up.success.description",
                  defaultMessage:
                    "We sent an email to your address. Click the link in the letter to confirm your email.",
                }),
              }),
              (0, i.jsx)(s.o, {
                label: t.formatMessage({ id: "input.email", defaultMessage: "Email" }),
                value: e.email,
                disabled: !0,
              }),
            ],
          });
        };
      u.defaultProps = {};
      var c = r(4942),
        l = r(6661),
        d = r(7189),
        p = r(9414),
        f = r(8412),
        _ = r(8064),
        h = r(1664);
      function b(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var m = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        x = function (e) {
          var t = (0, d.h)({
              onSubmit: l.h.auth.register,
              onSuccess: function (t, r) {
                return e.onSuccess(r.email);
              },
            }),
            r = t.submitProps.loading,
            n = (0, o.Z)();
          return (0, i.jsxs)("form", {
            onSubmit: t.onSubmit,
            children: [
              (0, i.jsx)(
                s.o,
                g(
                  {
                    label: n.formatMessage({ id: "input.username", defaultMessage: "Username (Max 10 symbols)" }),
                    autoFocus: !0,
                  },
                  t.register("name", { maxLength: 10 })
                )
              ),
              (0, i.jsx)(
                s.o,
                g(
                  { label: n.formatMessage({ id: "input.email", defaultMessage: "Email" }) },
                  t.register("email", { pattern: m })
                )
              ),
              (0, i.jsx)(
                p.W,
                g(
                  {
                    label: n.formatMessage({
                      id: "input.new_password",
                      defaultMessage: "Password (Latin, number, min 6 symbols)",
                    }),
                  },
                  t.register("password", { minLength: 6 })
                )
              ),
              (0, i.jsx)(
                f.I,
                g(
                  g({}, t.register("agreement")),
                  {},
                  {
                    children: n.formatMessage(
                      {
                        id: "auth.sign_up.checkbox",
                        defaultMessage: "I\u2019m 18 y.o. I agree with <a>service rules</a>",
                      },
                      {
                        a: function (e) {
                          return (0, i.jsx)(h.default, {
                            href: "/faq/terms-of-use",
                            children: (0, i.jsx)("a", { children: e }),
                          });
                        },
                      }
                    ),
                  }
                )
              ),
              t.globalError,
              (0, i.jsx)(_.z, {
                type: "primary",
                htmlType: "submit",
                loading: r,
                style: { marginTop: 24 },
                children: n.formatMessage({ id: "auth.sign_up.submit", defaultMessage: "Sign up" }),
              }),
            ],
          });
        },
        j = r(765),
        v = r(1014),
        y = r(8352),
        O = r(6600),
        w = function () {
          var e = (0, n.useState)(),
            t = e[0],
            r = e[1];
          return t
            ? (0, i.jsxs)(j.g, {
                children: [
                  (0, i.jsx)(v.x, {
                    onClick: function () {
                      return r(void 0);
                    },
                  }),
                  (0, i.jsx)(u, { email: t }),
                ],
              })
            : (0, i.jsxs)(j.g, {
                children: [
                  (0, i.jsx)(y.D, { active: "sign-up" }),
                  (0, i.jsx)(x, { onSuccess: r }),
                  (0, i.jsx)(O.G, {}),
                ],
              });
        };
    },
    7189: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return p;
        },
      });
      var n = r(4942),
        a = r(5861),
        s = r(7757),
        o = r.n(s),
        i = r(7294),
        u = r(2283),
        c = r(5363);
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
      function d(e) {
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
      var p = function (e) {
        var t = (0, u.cI)(e),
          r = (0, i.useState)(),
          n = r[0],
          s = r[1],
          l = function () {
            return s(void 0);
          },
          p = t.handleSubmit(
            (function () {
              var r = (0, a.Z)(
                o().mark(function r(n) {
                  var a, i, u;
                  return o().wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.prev = 0), (r.next = 3), e.onSubmit(n);
                          case 3:
                            return (
                              (i = r.sent),
                              (r.next = 6),
                              null === (a = e.onSuccess) || void 0 === a ? void 0 : a.call(e, i, n)
                            );
                          case 6:
                            l(), (r.next = 23);
                            break;
                          case 9:
                            return (
                              (r.prev = 9),
                              (r.t0 = r.catch(0)),
                              (r.prev = 11),
                              console.error(r.t0),
                              (r.next = 15),
                              r.t0.json()
                            );
                          case 15:
                            null !== (u = r.sent) &&
                              void 0 !== u &&
                              u.fields &&
                              (0, c.Z)(null === u || void 0 === u ? void 0 : u.fields, t.setError),
                              null !== u &&
                                void 0 !== u &&
                                u.message &&
                                s(null === u || void 0 === u ? void 0 : u.message),
                              (r.next = 23);
                            break;
                          case 20:
                            (r.prev = 20), (r.t1 = r.catch(11)), console.error(r.t1);
                          case 23:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [
                      [0, 9],
                      [11, 20],
                    ]
                  );
                })
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })()
          ),
          f = { loading: t.formState.isSubmitting, disabled: !t.formState.isValid };
        return d(
          d({}, t),
          {},
          {
            onSubmit: p,
            globalError: n,
            setGlobalError: s,
            cleanGlobalError: l,
            submitProps: f,
            register: function (e, r) {
              var n, a, s, o;
              return d(
                d({}, t.register(e, d({ required: !0 }, r))),
                {},
                {
                  error:
                    (null === (n = t.formState.errors) || void 0 === n || null === (a = n[e]) || void 0 === a
                      ? void 0
                      : a.message) ||
                    (null === (s = t.formState.errors) || void 0 === s || null === (o = s[e]) || void 0 === o
                      ? void 0
                      : o.type),
                }
              );
            },
            regField: function (e, r) {
              return { name: e, control: t.control, rules: d({ required: !0 }, r) };
            },
          }
        );
      };
    },
    8064: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return p;
        },
      });
      var n = r(5861),
        a = r(7757),
        s = r.n(a),
        o = r(7294),
        i = r(4184),
        u = r.n(i),
        c = r(4809),
        l = r.n(c),
        d = r(5893),
        p = function (e) {
          var t = (0, o.useState)(!1),
            r = t[0],
            a = t[1],
            i = e.loading || r,
            c = (function () {
              var t = (0, n.Z)(
                s().mark(function t(r) {
                  var n;
                  return s().wrap(
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
                              a(!0),
                              (t.next = 6),
                              null === (n = e.onClick) || void 0 === n ? void 0 : n.call(e, r)
                            );
                          case 6:
                            return (t.prev = 6), a(!1), t.finish(6);
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
          return (0, d.jsx)("button", {
            className: u()(
              l().button,
              "primary" === e.type && l().primary,
              "secondary" === e.type && l().secondary,
              "danger" === e.type && l().danger,
              i && l().loading,
              e.className
            ),
            style: e.style,
            onClick: c,
            type: e.htmlType,
            disabled: i || e.disabled,
            children: e.children,
          });
        };
      p.defaultProps = {};
    },
    7725: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/sign-up",
        function () {
          return r(6415);
        },
      ]);
    },
    7227: function (e) {
      e.exports = { divider: "socials-login_divider__391Y0", socials: "socials-login_socials__72ZI4" };
    },
    7044: function (e) {
      e.exports = { back_button: "back-button_back_button__pNHkN" };
    },
    2612: function (e) {
      e.exports = { auth_form: "auth-form_auth_form__3lJqN" };
    },
    8458: function (e) {
      e.exports = {
        checkbox_input: "checkbox-input_checkbox_input__3wuxi",
        text: "checkbox-input_text__gpM6s",
        error: "checkbox-input_error__11Z1N",
      };
    },
    5834: function (e) {
      e.exports = {
        text_input: "text-input_text_input__2TPeM",
        label: "text-input_label__jEnAR",
        error_text: "text-input_error_text__2uspX",
        disabled: "text-input_disabled__3285C",
        error: "text-input_error__RarXE",
        help: "text-input_help__1sQW9",
        icon: "text-input_icon__2ksgP",
        clickable: "text-input_clickable__1F_o0",
        note: "text-input_note__nuzwl",
        eye_icon: "text-input_eye_icon__3quJu",
      };
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
    4911: function (e) {
      e.exports = {
        item: "auth-tabs_item__1m2Cu",
        auth_tabs: "auth-tabs_auth_tabs__3z0mb",
        active: "auth-tabs_active__3eK06",
      };
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
    e.O(0, [774, 888, 179], function () {
      return (t = 7725), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
