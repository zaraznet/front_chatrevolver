(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [181],
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
        i = r(7044),
        s = r.n(i),
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
      var _ = function (e) {
        var t = (0, u.Z)();
        return (0, c.jsx)(
          "span",
          d(
            d({}, e),
            {},
            {
              className: a()(s().back_button, e.className),
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
          return i;
        },
      });
      r(7294);
      var n = r(2612),
        o = r.n(n),
        a = r(5893),
        i = function (e) {
          return (0, a.jsx)("form", { className: o().auth_form, onSubmit: e.onSubmit, children: e.children });
        };
      i.defaultProps = {};
    },
    9717: function (e, t, r) {
      "use strict";
      r.d(t, {
        o: function () {
          return l;
        },
      });
      var n = r(7294),
        o = r(4184),
        a = r.n(o),
        i = r(5834),
        s = r.n(i),
        u = r(8416),
        c = r(5893),
        l = (0, n.forwardRef)(function (e, t) {
          return (0,
          c.jsxs)("div", { className: a()(s().text_input, e.error && s().error, e.disabled && s().disabled), children: [(0, c.jsx)("label", { className: s().label, children: e.label }), (0, c.jsx)("input", { type: "text", ref: t, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled }), (0, c.jsxs)("div", { className: s().help, children: [e.error && (0, c.jsx)(u.J, { name: "input-error", overrideColor: !1, className: s().icon }), (0, c.jsx)("span", { className: s().error_text, children: e.error })] })] });
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
        i = r.n(a),
        s = r(3325),
        u = r(1163),
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
          r = (0, u.useRouter)();
        return (0, d.jsxs)("div", {
          className: i().auth_layout,
          children: [
            (0, d.jsxs)("div", {
              className: i().header,
              children: [
                (0, d.jsx)(
                  o.default,
                  p(
                    p({}, s.Z.index.link),
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
                    (0, d.jsx)(o.default, {
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
      b.defaultProps = {};
    },
    2002: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return v;
          },
        });
      var n = r(7294),
        o = r(5609),
        a = r(9717),
        i = r(7100),
        s = r(5893),
        u = function (e) {
          var t = (0, i.Z)();
          return (0, s.jsxs)(o.B, {
            children: [
              (0, s.jsx)("h1", {
                children: t.formatMessage({ id: "auth.recovery.sent.title", defaultMessage: "Recover the password" }),
              }),
              (0, s.jsx)("p", {
                children: t.formatMessage({
                  id: "auth.recovery.sent.description",
                  defaultMessage:
                    "We sent an email to your address. Click the link in the letter to recover the password.",
                }),
              }),
              (0, s.jsx)(a.o, {
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
        _ = r(8064);
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
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
          var t = (0, d.h)({
              onSubmit: l.h.auth.initRecoverPassword,
              onSuccess: function (t, r) {
                return e.onSuccess(r.email);
              },
            }),
            r = t.submitProps.loading,
            n = (0, i.Z)();
          return (0, s.jsxs)(o.B, {
            onSubmit: t.onSubmit,
            children: [
              (0, s.jsx)("h1", {
                children: n.formatMessage({ id: "auth.recovery.title", defaultMessage: "Recover the password" }),
              }),
              (0, s.jsx)(
                a.o,
                b(
                  { label: n.formatMessage({ id: "input.email", defaultMessage: "Email" }), autoFocus: !0 },
                  t.register("email")
                )
              ),
              t.globalError,
              (0, s.jsx)(_.z, {
                type: "primary",
                htmlType: "submit",
                loading: r,
                style: { marginTop: 10 },
                children: n.formatMessage({ id: "auth.recovery.submit", defaultMessage: "Send" }),
              }),
            ],
          });
        },
        h = r(765),
        g = r(1014),
        m = r(3325),
        v = function () {
          var e = (0, n.useState)(),
            t = e[0],
            r = e[1];
          return t
            ? (0, s.jsxs)(h.g, {
                children: [
                  (0, s.jsx)(g.x, {
                    onClick: function () {
                      return r(void 0);
                    },
                    children: "Back",
                  }),
                  (0, s.jsx)(u, { email: t }),
                ],
              })
            : (0, s.jsxs)(h.g, {
                children: [
                  (0, s.jsx)(g.x, {
                    onClick: function () {
                      return m.Z.auth.login.open();
                    },
                    children: "Back",
                  }),
                  (0, s.jsx)(f, { onSuccess: r }),
                ],
              });
        };
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
        i = r.n(a),
        s = r(7294),
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
      var _ = function (e) {
        var t = (0, u.cI)(e),
          r = (0, s.useState)(),
          n = r[0],
          a = r[1],
          l = function () {
            return a(void 0);
          },
          _ = t.handleSubmit(
            (function () {
              var r = (0, o.Z)(
                i().mark(function r(n) {
                  var o, s, u;
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
                              null === (o = e.onSuccess) || void 0 === o ? void 0 : o.call(e, s, n)
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
                                a(null === u || void 0 === u ? void 0 : u.message),
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
              var n, o, a, i;
              return d(
                d({}, t.register(e, d({ required: !0 }, r))),
                {},
                {
                  error:
                    (null === (n = t.formState.errors) || void 0 === n || null === (o = n[e]) || void 0 === o
                      ? void 0
                      : o.message) ||
                    (null === (a = t.formState.errors) || void 0 === a || null === (i = a[e]) || void 0 === i
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
          return _;
        },
      });
      var n = r(5861),
        o = r(7757),
        a = r.n(o),
        i = r(7294),
        s = r(4184),
        u = r.n(s),
        c = r(4809),
        l = r.n(c),
        d = r(5893),
        _ = function (e) {
          var t = (0, i.useState)(!1),
            r = t[0],
            o = t[1],
            s = e.loading || r,
            c = (function () {
              var t = (0, n.Z)(
                a().mark(function t(r) {
                  var n;
                  return a().wrap(
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
            className: u()(
              l().button,
              "primary" === e.type && l().primary,
              "secondary" === e.type && l().secondary,
              "danger" === e.type && l().danger,
              s && l().loading,
              e.className
            ),
            style: e.style,
            onClick: c,
            type: e.htmlType,
            disabled: s || e.disabled,
            children: e.children,
          });
        };
      _.defaultProps = {};
    },
    3654: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/recovery",
        function () {
          return r(2002);
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
      return (t = 3654), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
