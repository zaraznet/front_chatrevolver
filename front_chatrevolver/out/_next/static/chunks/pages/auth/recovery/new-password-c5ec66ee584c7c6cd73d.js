(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [250],
  {
    1014: function (e, t, r) {
      "use strict";
      r.d(t, {
        x: function () {
          return _;
        },
      });
      var n = r(4942),
        o = (r(7294), r(4184)),
        a = r.n(o),
        s = r(7044),
        u = r.n(s),
        i = r(7100),
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
      var _ = function (e) {
        var t = (0, i.Z)();
        return (0, c.jsx)(
          "span",
          d(
            d({}, e),
            {},
            {
              className: a()(u().back_button, e.className),
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
          return s;
        },
      });
      r(7294);
      var n = r(2612),
        o = r.n(n),
        a = r(5893),
        s = function (e) {
          return (0, a.jsx)("form", { className: o().auth_form, onSubmit: e.onSubmit, children: e.children });
        };
      s.defaultProps = {};
    },
    9414: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return l;
        },
      });
      var n = r(7294),
        o = r(4184),
        a = r.n(o),
        s = r(5834),
        u = r.n(s),
        i = r(8416),
        c = r(5893),
        l = (0, n.forwardRef)(function (e, t) {
          var r = (0, n.useState)(!1),
            o = r[0],
            s = r[1];
          return (0, c.jsxs)("div", {
            className: a()(u().text_input, e.error && u().error),
            children: [
              (0, c.jsx)("label", { className: u().label, children: e.label }),
              (0, c.jsx)("input", {
                type: o ? "text" : "password",
                ref: t,
                name: e.name,
                autoFocus: e.autoFocus,
                onChange: e.onChange,
                onBlur: e.onBlur,
                value: e.value,
              }),
              (0, c.jsxs)("div", {
                className: u().help,
                children: [
                  (0, c.jsx)("a", {
                    className: a()(u().icon, u().clickable),
                    onClick: function () {
                      return s(!o);
                    },
                    children: (0, c.jsx)(i.J, { name: o ? "password-hide" : "password-show", className: u().eye_icon }),
                  }),
                  (0, c.jsx)("span", { className: u().error_text, children: e.error }),
                ],
              }),
            ],
          });
        });
      l.defaultProps = {};
    },
    765: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return b;
        },
      });
      var n = r(4942),
        o = r(1664),
        a = (r(7294), r(658)),
        s = r.n(a),
        u = r(3325),
        i = r(1163),
        c = r(7100),
        l = r(5265),
        d = r(5893);
      function _(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var b = function (e) {
        var t = (0, c.Z)(),
          r = (0, i.useRouter)();
        return (0, d.jsxs)("div", {
          className: s().auth_layout,
          children: [
            (0, d.jsxs)("div", {
              className: s().header,
              children: [
                (0, d.jsx)(
                  o.default,
                  p(
                    p({}, u.Z.index.link),
                    {},
                    {
                      children: (0, d.jsxs)("div", {
                        className: s().logo,
                        children: [
                          (0, d.jsx)("div", { className: s().logo__img }),
                          (0, d.jsx)("div", { className: s().logo__text }),
                        ],
                      }),
                    }
                  )
                ),
                (0, d.jsxs)("div", {
                  className: s().menu,
                  children: [
                    (0, d.jsx)("a", {
                      href: "https://about.testchatrevolver.space",
                      target: "_blank",
                      children: t.formatMessage({ id: "menu.about", defaultMessage: "About" }),
                    }),
                    (0, d.jsx)(o.default, {
                      href: "/faq/what-is",
                      children: (0, d.jsx)("a", {
                        children: t.formatMessage({ id: "menu.faq", defaultMessage: "FAQ" }),
                      }),
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: s().header__right,
                  children: (0, d.jsx)(l.R.Consumer, {
                    children: function (e) {
                      var t = e.currentLocale,
                        n = e.toggleLocale;
                      return (0, d.jsx)("button", {
                        className: s().language,
                        onClick: function () {
                          n("ru" === t ? "en" : "ru"),
                            r.push({
                              pathname: r.pathname,
                              query: p(p({}, r.query), {}, { lang: "ru" === t ? "en" : "ru" }),
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
              className: s().background,
              children: (0, d.jsxs)("picture", {
                children: [
                  (0, d.jsx)("source", { srcSet: "/img/sign-bg_mobile.jpg", media: "(max-width: 767px)" }),
                  (0, d.jsx)("source", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x" }),
                  (0, d.jsx)("img", { srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x", alt: "" }),
                ],
              }),
            }),
            (0, d.jsx)("div", { className: s().container, children: e.children }),
          ],
        });
      };
      b.defaultProps = {};
    },
    8256: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return m;
          },
        });
      r(7294);
      var n = r(1163),
        o = r(4942),
        a = r(6661),
        s = r(7189),
        u = r(5609),
        i = r(9414),
        c = r(8064),
        l = r(7100),
        d = r(5893);
      function _(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var b = function (e) {
          var t = (0, s.h)({
              onSubmit: function (t) {
                return a.h.auth.setNewPassword(p(p({}, t), {}, { code: e.code }));
              },
            }),
            r = t.submitProps.loading,
            n = (0, l.Z)();
          return (0, d.jsxs)(u.B, {
            onSubmit: t.onSubmit,
            children: [
              (0, d.jsx)("h1", {
                children: n.formatMessage({ id: "auth.recovery.new_password.title", defaultMessage: "New password" }),
              }),
              (0, d.jsx)(
                i.W,
                p(
                  {
                    label: n.formatMessage({
                      id: "input.new_password",
                      defaultMessage: "Password (Latin, number, min 6 symbols)",
                    }),
                    autoFocus: !0,
                  },
                  t.register("password1")
                )
              ),
              (0, d.jsx)(
                i.W,
                p(
                  {
                    label: n.formatMessage({ id: "input.new_password_repeat", defaultMessage: "Repeat the password" }),
                    autoFocus: !0,
                  },
                  t.register("password2")
                )
              ),
              t.globalError,
              (0, d.jsx)(c.z, {
                type: "primary",
                htmlType: "submit",
                loading: r,
                style: { marginTop: 10 },
                children: n.formatMessage({ id: "auth.recovery.new_password.submit", defaultMessage: "Sign in" }),
              }),
            ],
          });
        },
        f = r(765),
        g = r(1014),
        h = r(3325),
        m = (0, n.withRouter)(function (e) {
          var t = e.router.query.code;
          return t
            ? (0, d.jsxs)(f.g, {
                children: [
                  (0, d.jsx)(g.x, {
                    onClick: function () {
                      return h.Z.auth.login.open();
                    },
                  }),
                  (0, d.jsx)(b, { code: t }),
                ],
              })
            : null;
        });
    },
    7189: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return _;
        },
      });
      var n = r(4942),
        o = r(5861),
        a = r(7757),
        s = r.n(a),
        u = r(7294),
        i = r(2283),
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
      var _ = function (e) {
        var t = (0, i.cI)(e),
          r = (0, u.useState)(),
          n = r[0],
          a = r[1],
          l = function () {
            return a(void 0);
          },
          _ = t.handleSubmit(
            (function () {
              var r = (0, o.Z)(
                s().mark(function r(n) {
                  var o, u, i;
                  return s().wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.prev = 0), (r.next = 3), e.onSubmit(n);
                          case 3:
                            return (
                              (u = r.sent),
                              (r.next = 6),
                              null === (o = e.onSuccess) || void 0 === o ? void 0 : o.call(e, u, n)
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
                            null !== (i = r.sent) &&
                              void 0 !== i &&
                              i.fields &&
                              (0, c.Z)(null === i || void 0 === i ? void 0 : i.fields, t.setError),
                              null !== i &&
                                void 0 !== i &&
                                i.message &&
                                a(null === i || void 0 === i ? void 0 : i.message),
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
          p = { loading: t.formState.isSubmitting, disabled: !t.formState.isValid };
        return d(
          d({}, t),
          {},
          {
            onSubmit: _,
            globalError: n,
            setGlobalError: a,
            cleanGlobalError: l,
            submitProps: p,
            register: function (e, r) {
              var n, o, a, s;
              return d(
                d({}, t.register(e, d({ required: !0 }, r))),
                {},
                {
                  error:
                    (null === (n = t.formState.errors) || void 0 === n || null === (o = n[e]) || void 0 === o
                      ? void 0
                      : o.message) ||
                    (null === (a = t.formState.errors) || void 0 === a || null === (s = a[e]) || void 0 === s
                      ? void 0
                      : s.type),
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
          return _;
        },
      });
      var n = r(5861),
        o = r(7757),
        a = r.n(o),
        s = r(7294),
        u = r(4184),
        i = r.n(u),
        c = r(4809),
        l = r.n(c),
        d = r(5893),
        _ = function (e) {
          var t = (0, s.useState)(!1),
            r = t[0],
            o = t[1],
            u = e.loading || r,
            c = (function () {
              var t = (0, n.Z)(
                a().mark(function t(r) {
                  var n;
                  return a().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!u && !e.disabled) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              (t.prev = 2),
                              o(!0),
                              (t.next = 6),
                              null === (n = e.onClick) || void 0 === n ? void 0 : n.call(e, r)
                            );
                          case 6:
                            return (t.prev = 6), o(!1), t.finish(6);
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
            className: i()(
              l().button,
              "primary" === e.type && l().primary,
              "secondary" === e.type && l().secondary,
              "danger" === e.type && l().danger,
              u && l().loading,
              e.className
            ),
            style: e.style,
            onClick: c,
            type: e.htmlType,
            disabled: u || e.disabled,
            children: e.children,
          });
        };
      _.defaultProps = {};
    },
    4369: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/recovery/new-password",
        function () {
          return r(8256);
        },
      ]);
    },
    7044: function (e) {
      e.exports = { back_button: "back-button_back_button__pNHkN" };
    },
    2612: function (e) {
      e.exports = { auth_form: "auth-form_auth_form__3lJqN" };
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
      return (t = 4369), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
