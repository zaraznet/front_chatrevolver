(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [344],
  {
    6600: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return c;
        },
      });
      r(7294);
      var n = r(8416),
        a = r(7227),
        o = r.n(a),
        i = r(7100),
        s = r(5893),
        c = function (e) {
          var t = (0, i.Z)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("p", {
                className: o().divider,
                children: t.formatMessage({ id: "auth.social_login.or_with", defaultMessage: "or with" }),
              }),
              (0, s.jsxs)("div", {
                className: o().socials,
                children: [
                  (0, s.jsx)("a", {
                    href: "".concat("https://api.testchatrevolver.space", "/api/vk"),
                    children: (0, s.jsx)(n.J, { name: "vk" }),
                  }),
                  (0, s.jsx)("a", {
                    href: "".concat("https://api.testchatrevolver.space", "/api/google"),
                    children: (0, s.jsx)(n.J, { name: "google" }),
                  }),
                  (0, s.jsx)("a", {
                    href: "".concat("https://api.testchatrevolver.space", "/api/apple"),
                    children: (0, s.jsx)(n.J, { name: "apple" }),
                  }),
                ],
              }),
            ],
          });
        };
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
        o = r.n(a),
        i = r(5834),
        s = r.n(i),
        c = r(8416),
        u = r(5893),
        l = (0, n.forwardRef)(function (e, t) {
          var r = (0, n.useState)(!1),
            a = r[0],
            i = r[1];
          return (0, u.jsxs)("div", {
            className: o()(s().text_input, e.error && s().error),
            children: [
              (0, u.jsx)("label", { className: s().label, children: e.label }),
              (0, u.jsx)("input", {
                type: a ? "text" : "password",
                ref: t,
                name: e.name,
                autoFocus: e.autoFocus,
                onChange: e.onChange,
                onBlur: e.onBlur,
                value: e.value,
              }),
              (0, u.jsxs)("div", {
                className: s().help,
                children: [
                  (0, u.jsx)("a", {
                    className: o()(s().icon, s().clickable),
                    onClick: function () {
                      return i(!a);
                    },
                    children: (0, u.jsx)(c.J, { name: a ? "password-hide" : "password-show", className: s().eye_icon }),
                  }),
                  (0, u.jsx)("span", { className: s().error_text, children: e.error }),
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
        o = r.n(a),
        i = r(5834),
        s = r.n(i),
        c = r(8416),
        u = r(5893),
        l = (0, n.forwardRef)(function (e, t) {
          return (0,
          u.jsxs)("div", { className: o()(s().text_input, e.error && s().error, e.disabled && s().disabled), children: [(0, u.jsx)("label", { className: s().label, children: e.label }), (0, u.jsx)("input", { type: "text", ref: t, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled }), (0, u.jsxs)("div", { className: s().help, children: [e.error && (0, u.jsx)(c.J, { name: "input-error", overrideColor: !1, className: s().icon }), (0, u.jsx)("span", { className: s().error_text, children: e.error })] })] });
        });
      l.defaultProps = {};
    },
    765: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return f;
        },
      });
      var n = r(4942),
        a = r(1664),
        o = (r(7294), r(658)),
        i = r.n(o),
        s = r(3325),
        c = r(1163),
        u = r(7100),
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
      function _(e) {
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
      var f = function (e) {
        var t = (0, u.Z)(),
          r = (0, c.useRouter)();
        return (0, d.jsxs)("div", {
          className: i().auth_layout,
          children: [
            (0, d.jsxs)("div", {
              className: i().header,
              children: [
                (0, d.jsx)(
                  a.default,
                  _(
                    _({}, s.Z.index.link),
                    {},
                    {
                      children: (0, d.jsxs)("div", {
                        className: i().logo,
                        children: [
                          (0, d.jsx)("div", { className: i().logo__img }),
                          (0, d.jsx)("div", { className: i().logo__text }),
                        ],
                      }),
                    }
                  )
                ),
                (0, d.jsxs)("div", {
                  className: i().menu,
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
                  className: i().header__right,
                  children: (0, d.jsx)(l.R.Consumer, {
                    children: function (e) {
                      var t = e.currentLocale,
                        n = e.toggleLocale;
                      return (0, d.jsx)("button", {
                        className: i().language,
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
            (0, d.jsx)("div", {
              className: i().background,
              children: (0, d.jsxs)("picture", {
                children: [
                  (0, d.jsx)("source", { srcSet: "/img/sign-bg_mobile.jpg", media: "(max-width: 767px)" }),
                  (0, d.jsx)("source", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x" }),
                  (0, d.jsx)("img", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x", alt: "" }),
                ],
              }),
            }),
            (0, d.jsx)("div", { className: i().container, children: e.children }),
          ],
        });
      };
      f.defaultProps = {};
    },
    8352: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return f;
        },
      });
      var n = r(4942),
        a = (r(7294), r(4911)),
        o = r.n(a),
        i = r(4184),
        s = r.n(i),
        c = r(1664),
        u = r(3325),
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
      function _(e) {
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
      var f = function (e) {
        var t = u.Z.auth,
          r = (0, l.Z)();
        return (0, d.jsxs)("div", {
          className: o().auth_tabs,
          children: [
            (0, d.jsx)(
              c.default,
              _(
                _({}, t.signup.link),
                {},
                {
                  children: (0, d.jsx)("div", {
                    className: s()(o().item, "sign-up" === e.active && o().active),
                    children: r.formatMessage({ id: "auth.tabs.sign_up", defaultMessage: "Sign up" }),
                  }),
                }
              )
            ),
            (0, d.jsx)(
              c.default,
              _(
                _({}, t.login.link),
                {},
                {
                  children: (0, d.jsxs)("div", {
                    className: s()(o().item, "login" === e.active && o().active),
                    children: [" ", r.formatMessage({ id: "auth.tabs.sign_in", defaultMessage: "Sign in" })],
                  }),
                }
              )
            ),
          ],
        });
      };
      f.defaultProps = {};
    },
    2260: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return k;
          },
        });
      r(7294);
      var n = r(4942),
        a = r(6661),
        o = r(7189),
        i = r(9717),
        s = r(9414),
        c = r(8064),
        u = r(1664),
        l = r(3325),
        d = r(512),
        p = r.n(d),
        _ = r(4184),
        f = r.n(_),
        b = r(5893);
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
      function h(e) {
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
      var m = function (e) {
        return (0, b.jsx)(
          "a",
          h(h({}, e), {}, { className: f()(p().recovery_link, e.className), children: e.children })
        );
      };
      m.defaultProps = {};
      var v = r(7100);
      function j(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var x = function (e) {
          var t = (0, o.h)({ onSubmit: a.h.auth.login }),
            r = t.submitProps.loading,
            n = (0, v.Z)();
          return (0, b.jsxs)("form", {
            onSubmit: t.onSubmit,
            children: [
              (0, b.jsx)(
                i.o,
                y({ label: n.formatMessage({ id: "input.email", defaultMessage: "Email" }) }, t.register("email"))
              ),
              (0, b.jsx)(
                s.W,
                y(
                  { label: n.formatMessage({ id: "input.password", defaultMessage: "Password" }) },
                  t.register("password")
                )
              ),
              (0, b.jsx)(
                u.default,
                y(
                  y({}, l.Z.auth.recovery.link),
                  {},
                  {
                    children: (0, b.jsx)(m, {
                      children: n.formatMessage({
                        id: "auth.login.recovery_link",
                        defaultMessage: "I forgot my password",
                      }),
                    }),
                  }
                )
              ),
              t.globalError,
              (0, b.jsx)(c.z, {
                type: "primary",
                htmlType: "submit",
                loading: r,
                style: { marginTop: 24 },
                children: n.formatMessage({ id: "auth.login.submit", defaultMessage: "Sign in" }),
              }),
            ],
          });
        },
        O = r(765),
        w = r(8352),
        P = r(6600),
        k = function () {
          return (0, b.jsxs)(O.g, {
            children: [(0, b.jsx)(w.D, { active: "login" }), (0, b.jsx)(x, {}), (0, b.jsx)(P.G, {})],
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
        o = r(7757),
        i = r.n(o),
        s = r(7294),
        c = r(2283),
        u = r(5363);
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
        var t = (0, c.cI)(e),
          r = (0, s.useState)(),
          n = r[0],
          o = r[1],
          l = function () {
            return o(void 0);
          },
          p = t.handleSubmit(
            (function () {
              var r = (0, a.Z)(
                i().mark(function r(n) {
                  var a, s, c;
                  return i().wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.prev = 0), (r.next = 3), e.onSubmit(n);
                          case 3:
                            return (
                              (s = r.sent),
                              (r.next = 6),
                              null === (a = e.onSuccess) || void 0 === a ? void 0 : a.call(e, s, n)
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
                            null !== (c = r.sent) &&
                              void 0 !== c &&
                              c.fields &&
                              (0, u.Z)(null === c || void 0 === c ? void 0 : c.fields, t.setError),
                              null !== c &&
                                void 0 !== c &&
                                c.message &&
                                o(null === c || void 0 === c ? void 0 : c.message),
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
          _ = { loading: t.formState.isSubmitting, disabled: !t.formState.isValid };
        return d(
          d({}, t),
          {},
          {
            onSubmit: p,
            globalError: n,
            setGlobalError: o,
            cleanGlobalError: l,
            submitProps: _,
            register: function (e, r) {
              var n, a, o, i;
              return d(
                d({}, t.register(e, d({ required: !0 }, r))),
                {},
                {
                  error:
                    (null === (n = t.formState.errors) || void 0 === n || null === (a = n[e]) || void 0 === a
                      ? void 0
                      : a.message) ||
                    (null === (o = t.formState.errors) || void 0 === o || null === (i = o[e]) || void 0 === i
                      ? void 0
                      : i.type),
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
        o = r.n(a),
        i = r(7294),
        s = r(4184),
        c = r.n(s),
        u = r(4809),
        l = r.n(u),
        d = r(5893),
        p = function (e) {
          var t = (0, i.useState)(!1),
            r = t[0],
            a = t[1],
            s = e.loading || r,
            u = (function () {
              var t = (0, n.Z)(
                o().mark(function t(r) {
                  var n;
                  return o().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!s && !e.disabled) {
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
            className: c()(
              l().button,
              "primary" === e.type && l().primary,
              "secondary" === e.type && l().secondary,
              "danger" === e.type && l().danger,
              s && l().loading,
              e.className
            ),
            style: e.style,
            onClick: u,
            type: e.htmlType,
            disabled: s || e.disabled,
            children: e.children,
          });
        };
      p.defaultProps = {};
    },
    4895: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/login",
        function () {
          return r(2260);
        },
      ]);
    },
    512: function (e) {
      e.exports = {
        recovery_link: "recovery-link_recovery_link__3USCq",
        "recovery_link--disabled": "recovery-link_recovery_link--disabled__AM_1i",
      };
    },
    7227: function (e) {
      e.exports = { divider: "socials-login_divider__391Y0", socials: "socials-login_socials__72ZI4" };
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
      return (t = 4895), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
