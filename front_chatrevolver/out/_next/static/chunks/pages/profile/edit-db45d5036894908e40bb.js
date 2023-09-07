(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [991],
  {
    8379: function (e, r, t) {
      "use strict";
      t.d(r, {
        W: function () {
          return d;
        },
      });
      var n = t(5861),
        o = t(7757),
        a = t.n(o),
        i = (t(7294), t(3902)),
        s = t.n(i),
        u = t(6661),
        l = t(7100),
        c = t(5893),
        d = function (e) {
          var r = u.h.user.useGetMe(),
            t = (function () {
              var e = (0, n.Z)(
                a().mark(function e() {
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), u.h.user.restoreProfile();
                        case 2:
                          r.mutate();
                        case 3:
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
            o = (0, l.Z)();
          return (0, c.jsxs)("div", {
            className: s().my_profile_deleted,
            children: [
              (0, c.jsx)("img", { src: "/img/deleted-icon.svg" }),
              (0, c.jsx)("p", {
                className: s().title,
                children: o.formatMessage({
                  id: "user.my_profile_deleted.title",
                  defaultMessage:
                    "\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0431\u044b\u043b \u0443\u0434\u0430\u043b\u0435\u043d",
                }),
              }),
              (0, c.jsx)("p", {
                className: s().text,
                children: o.formatMessage({
                  id: "user.my_profile_deleted.description",
                  defaultMessage:
                    "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",
                }),
              }),
              (0, c.jsx)("button", {
                onClick: t,
                className: s().button,
                children: o.formatMessage({
                  id: "user.my_profile_deleted.restore",
                  defaultMessage: "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                }),
              }),
            ],
          });
        };
      d.defaultProps = {};
    },
    1549: function (e, r, t) {
      "use strict";
      t.d(r, {
        l: function () {
          return l;
        },
      });
      var n = t(7294),
        o = t(1957),
        a = t.n(o),
        i = t(4184),
        s = t.n(i),
        u = t(5893),
        l = (0, n.forwardRef)(function (e, r) {
          return (0, u.jsxs)("div", {
            className: s()(a().select_input, e.error && a().error, e.className),
            children: [
              (0, u.jsxs)("select", {
                ref: r,
                name: e.name,
                autoFocus: e.autoFocus,
                onChange: e.onChange,
                onBlur: e.onBlur,
                value: e.value,
                disabled: e.disabled,
                children: [
                  !e.firstDefault &&
                    (0, u.jsx)("option", {
                      value: "",
                      disabled: !e.allowEmpty,
                      selected: !0,
                      hidden: !e.allowEmpty,
                      children: e.placeholder,
                    }),
                  e.options.map(function (e) {
                    return (0, u.jsx)("option", { value: e.value, children: e.label });
                  }),
                ],
              }),
              e.error && (0, u.jsx)("div", { className: a().error_text, children: e.error }),
            ],
          });
        });
      l.defaultProps = {};
    },
    9037: function (e, r, t) {
      "use strict";
      t.d(r, {
        a: function () {
          return h;
        },
      });
      t(7294);
      var n = t(5440),
        o = t.n(n),
        a = t(5861),
        i = t(7757),
        s = t.n(i),
        u = t(9456),
        l = t(2457),
        c = t(1294),
        d = t(6661),
        f = t(4158),
        p = t.n(f),
        _ = t(7100),
        m = t(5893),
        v = function (e) {
          var r,
            t,
            n = d.h.user.useGetMe(),
            o = (0, _.Z)(),
            i = (function () {
              var e = (0, a.Z)(
                s().mark(function e(r) {
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), d.h.user.updateProfile({ image: r.id });
                        case 2:
                          return (e.next = 4), n.mutate();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (r) {
                return e.apply(this, arguments);
              };
            })();
          return (0, m.jsxs)("div", {
            className: p().my_photo,
            children: [
              (0, m.jsx)(l.q, {
                shape: "square",
                src: null === (r = n.data) || void 0 === r ? void 0 : r.image,
                gender: null === (t = n.data) || void 0 === t ? void 0 : t.sex,
                className: p().avatar,
              }),
              (0, m.jsx)(c.g, {
                onSuccess: i,
                onError: function () {
                  u.y.error(
                    o.formatMessage({ id: "user.my_photo.upload_error", defaultMessage: "Photo upload error" })
                  );
                },
                children: (0, m.jsx)("button", {
                  className: p().photo_update,
                  children: o.formatMessage({ id: "user.my_photo.update", defaultMessage: "Update Photo" }),
                }),
              }),
            ],
          });
        };
      v.defaultProps = {};
      var h = function (e) {
        return (0, m.jsxs)("div", {
          className: o().my_profile_layout,
          children: [
            (0, m.jsxs)("div", { className: o().left, children: [(0, m.jsx)(v, {}), e.extra] }),
            (0, m.jsx)("div", { className: o().right, children: e.children }),
          ],
        });
      };
      h.defaultProps = {};
    },
    6352: function (e, r, t) {
      "use strict";
      t.d(r, {
        b: function () {
          return v;
        },
      });
      var n = t(4942),
        o = (t(7294), t(1230)),
        a = t(8064),
        i = t(1664),
        s = t(3325),
        u = t(2786),
        l = t.n(u),
        c = t(4176),
        d = t(6661),
        f = t(7100),
        p = t(5893);
      function _(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? _(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      var v = function (e) {
        var r = d.h.user.useGetMe(),
          t = o.n.prepare(c.d),
          n = (0, f.Z)();
        return r.data
          ? r.data.vip
            ? null
            : (0, p.jsxs)("div", {
                className: l().vip_promo_card,
                children: [
                  (0, p.jsx)("img", { src: "/img/vip-promo.svg" }),
                  (0, p.jsx)("h3", {
                    children: n.formatMessage({
                      id: "vip.promo_card.title",
                      defaultMessage:
                        "\u041e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",
                    }),
                  }),
                  (0, p.jsx)("p", {
                    children: n.formatMessage(
                      {
                        id: "vip.promo_card.description",
                        defaultMessage:
                          "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441 VIP \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c \u043c\u043e\u0433\u0443\u0442 \u043f\u0438\u0441\u0430\u0442\u044c \u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u043c, \u043a\u043e\u0433\u043e \u043d\u0430\u0439\u0434\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 <a>\u043f\u043e\u0438\u0441\u043a \u0430\u043d\u043a\u0435\u0442</a>",
                      },
                      {
                        a: function (e) {
                          return (0, p.jsx)(
                            i.default,
                            m(m({}, s.Z.dating.link), {}, { children: (0, p.jsx)("a", { children: e }) })
                          );
                        },
                      }
                    ),
                  }),
                  (0, p.jsx)(a.z, {
                    type: "primary",
                    onClick: function () {
                      return t();
                    },
                    children: n.formatMessage({
                      id: "vip.promo_card.submit",
                      defaultMessage: "\u0421\u0442\u0430\u043d\u044c\u0442\u0435 VIP",
                    }),
                  }),
                ],
              })
          : null;
      };
      v.defaultProps = {};
    },
    1241: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return R;
          },
        });
      var n = t(5861),
        o = t(7757),
        a = t.n(o),
        i = t(6352),
        s = t(7294),
        u = t(1303),
        l = t(9955),
        c = t(940),
        d = t(4942),
        f = t(981),
        p = t.n(f),
        _ = t(4184),
        m = t.n(_),
        v = t(5893),
        h = function (e) {
          return (0, v.jsxs)("div", {
            className: m()(p().field, e.disabled && p().disabled),
            children: [
              (0, v.jsx)("label", { className: p().label, children: e.label }),
              (0, v.jsx)("div", { className: p().content, children: e.children }),
            ],
          });
        };
      h.defaultProps = {};
      var g = t(9020),
        b = t.n(g),
        x = (0, s.forwardRef)(function (e, r) {
          return (0,
          v.jsxs)("div", { className: m()(b().text_input, e.error && b().error), children: [(0, v.jsx)("input", { type: "text", ref: r, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled }), e.error && (0, v.jsx)("div", { className: b().error_text, children: e.error })] });
        });
      x.defaultProps = {};
      var y = t(4223),
        j = t.n(y),
        O = (0, s.forwardRef)(function (e, r) {
          return (0,
          v.jsxs)("div", { className: m()(j().date_input, e.error && j().error), children: [(0, v.jsx)("input", { type: "date", ref: r, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled }), e.error && (0, v.jsx)("div", { className: j().error_text, children: e.error })] });
        });
      O.defaultProps = {};
      var P = t(1549),
        w = t(9734),
        M = t.n(w),
        N = (0, s.forwardRef)(function (e, r) {
          return (0,
          v.jsxs)("div", { className: m()(M().text_area, e.error && M().error), children: [(0, v.jsx)("textarea", { ref: r, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled, rows: e.rows }), e.error && (0, v.jsx)("div", { className: M().error_text, children: e.error })] });
        });
      N.defaultProps = {};
      var k = t(6570),
        S = t.n(k),
        E = t(7189),
        D = t(7190),
        C = t(6661),
        Z = t(8064),
        F = t(3325),
        V = t(7100);
      function q(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function B(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? q(Object(t), !0).forEach(function (r) {
                (0, d.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      var G = function (e) {
        var r = C.h.user.useGetMe(),
          t = (0, E.h)({
            onSubmit: function (e) {
              var r;
              return C.h.user.updateProfile(
                B(
                  B({}, e),
                  {},
                  {
                    birthday: null !== (r = e.birthday) && void 0 !== r && r.getTime() ? e.birthday : void 0,
                    tags: e.tags
                      .replace(/\s+/g, " ")
                      .split(" ")
                      .filter(function (e) {
                        return e;
                      }),
                  }
                )
              );
            },
            onSuccess: (function () {
              var e = (0, n.Z)(
                a().mark(function e() {
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r.mutate();
                        case 2:
                          return (e.next = 4), F.Z.profile.open();
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
          });
        (0, s.useEffect)(
          function () {
            var e,
              n,
              o = r.data;
            o &&
              (t.setValue("name", o.name),
              t.setValue(
                "birthday",
                null === (e = o.birthday) || void 0 === e ? void 0 : e.toISOString().substr(0, 10)
              ),
              t.setValue("sex", o.sex),
              t.setValue("country", o.country),
              t.setValue("city", o.city),
              t.setValue("tags", (null === (n = o.tags) || void 0 === n ? void 0 : n.join(" ")) || ""),
              t.setValue("description", o.description));
          },
          [r.data]
        );
        var o = (0, V.Z)();
        return (0, v.jsxs)("form", {
          className: S().my_profile_edit,
          onSubmit: t.onSubmit,
          children: [
            (0, v.jsx)("h1", {
              children: o.formatMessage({ id: "user.profile_edit.title", defaultMessage: "Profile editing" }),
            }),
            (0, v.jsx)(h, {
              label: o.formatMessage({ id: "input.username", defaultMessage: "Username (Max 10 symbols)" }),
              children: (0, v.jsx)(x, B({}, t.register("name"))),
            }),
            (0, v.jsx)("div", { className: S().divider }),
            (0, v.jsx)(h, {
              label: o.formatMessage({ id: "input.birthday", defaultMessage: "birthday" }),
              children: (0, v.jsx)(O, B({}, t.register("birthday", { valueAsDate: !0, required: !1 }))),
            }),
            (0, v.jsx)(h, {
              label: o.formatMessage({ id: "input.gender", defaultMessage: "Gender" }),
              children: (0, v.jsx)(
                P.l,
                B(
                  {
                    options: [
                      {
                        value: "MALE",
                        label: o.formatMessage({
                          id: "input.gender.male",
                          defaultMessage: "\u041c\u0443\u0436\u0447\u0438\u043d\u0430",
                        }),
                      },
                      {
                        value: "FEMALE",
                        label: o.formatMessage({
                          id: "input.gender.female",
                          defaultMessage: "\u0416\u0435\u043d\u0449\u0438\u043d\u0430",
                        }),
                      },
                      {
                        value: "UNDEF",
                        label: o.formatMessage({
                          id: "input.gender.undef",
                          defaultMessage: "\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",
                        }),
                      },
                    ],
                  },
                  t.register("sex", { required: !1 })
                )
              ),
            }),
            (0, v.jsx)("div", { className: S().divider }),
            (0, v.jsx)(h, {
              label: o.formatMessage({ id: "input.country", defaultMessage: "Country" }),
              children: (0, v.jsx)(P.l, B({ options: D.O }, t.register("country", { required: !1 }))),
            }),
            (0, v.jsx)(h, {
              label: o.formatMessage({ id: "input.city", defaultMessage: "City" }),
              children: (0, v.jsx)(x, B({}, t.register("city", { required: !1 }))),
            }),
            (0, v.jsx)("div", { className: S().divider }),
            (0, v.jsx)(h, {
              label: o.formatMessage({ id: "input.tags", defaultMessage: "Tags" }),
              children: (0, v.jsx)(N, B({ rows: 3 }, t.register("tags", { required: !1 }))),
            }),
            (0, v.jsx)(h, {
              label: o.formatMessage({ id: "input.about_me", defaultMessage: "About me" }),
              children: (0, v.jsx)(N, B({ rows: 6 }, t.register("description", { required: !1 }))),
            }),
            (0, v.jsx)("div", { className: S().divider }),
            (0, v.jsx)(h, {
              children: (0, v.jsx)(Z.z, {
                type: "primary",
                htmlType: "submit",
                loading: t.submitProps.loading,
                children: o.formatMessage({ id: "user.profile_edit.submit", defaultMessage: "Save" }),
              }),
            }),
          ],
        });
      };
      G.defaultProps = {};
      var T = t(8379),
        I = t(9037),
        R = function () {
          var e,
            r = C.h.user.useGetMe();
          if (null !== (e = r.data) && void 0 !== e && e.deleted) {
            var t = (function () {
              var e = (0, n.Z)(
                a().mark(function e() {
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), C.h.user.restoreProfile();
                        case 2:
                          return (e.next = 4), r.mutate();
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
            })();
            return (0, v.jsx)(u.V, { children: (0, v.jsx)(T.W, { onRestore: t }) });
          }
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(I.a, { children: (0, v.jsx)(G, {}) }),
              (0, v.jsxs)(l.d, { children: [(0, v.jsx)(c.Y, {}), (0, v.jsx)(i.b, {})] }),
            ],
          });
        };
    },
    7189: function (e, r, t) {
      "use strict";
      t.d(r, {
        h: function () {
          return f;
        },
      });
      var n = t(4942),
        o = t(5861),
        a = t(7757),
        i = t.n(a),
        s = t(7294),
        u = t(2283),
        l = t(5363);
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function d(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      var f = function (e) {
        var r = (0, u.cI)(e),
          t = (0, s.useState)(),
          n = t[0],
          a = t[1],
          c = function () {
            return a(void 0);
          },
          f = r.handleSubmit(
            (function () {
              var t = (0, o.Z)(
                i().mark(function t(n) {
                  var o, s, u;
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), e.onSubmit(n);
                          case 3:
                            return (
                              (s = t.sent),
                              (t.next = 6),
                              null === (o = e.onSuccess) || void 0 === o ? void 0 : o.call(e, s, n)
                            );
                          case 6:
                            c(), (t.next = 23);
                            break;
                          case 9:
                            return (
                              (t.prev = 9),
                              (t.t0 = t.catch(0)),
                              (t.prev = 11),
                              console.error(t.t0),
                              (t.next = 15),
                              t.t0.json()
                            );
                          case 15:
                            null !== (u = t.sent) &&
                              void 0 !== u &&
                              u.fields &&
                              (0, l.Z)(null === u || void 0 === u ? void 0 : u.fields, r.setError),
                              null !== u &&
                                void 0 !== u &&
                                u.message &&
                                a(null === u || void 0 === u ? void 0 : u.message),
                              (t.next = 23);
                            break;
                          case 20:
                            (t.prev = 20), (t.t1 = t.catch(11)), console.error(t.t1);
                          case 23:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [
                      [0, 9],
                      [11, 20],
                    ]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()
          ),
          p = { loading: r.formState.isSubmitting, disabled: !r.formState.isValid };
        return d(
          d({}, r),
          {},
          {
            onSubmit: f,
            globalError: n,
            setGlobalError: a,
            cleanGlobalError: c,
            submitProps: p,
            register: function (e, t) {
              var n, o, a, i;
              return d(
                d({}, r.register(e, d({ required: !0 }, t))),
                {},
                {
                  error:
                    (null === (n = r.formState.errors) || void 0 === n || null === (o = n[e]) || void 0 === o
                      ? void 0
                      : o.message) ||
                    (null === (a = r.formState.errors) || void 0 === a || null === (i = a[e]) || void 0 === i
                      ? void 0
                      : i.type),
                }
              );
            },
            regField: function (e, t) {
              return { name: e, control: r.control, rules: d({ required: !0 }, t) };
            },
          }
        );
      };
    },
    8064: function (e, r, t) {
      "use strict";
      t.d(r, {
        z: function () {
          return f;
        },
      });
      var n = t(5861),
        o = t(7757),
        a = t.n(o),
        i = t(7294),
        s = t(4184),
        u = t.n(s),
        l = t(4809),
        c = t.n(l),
        d = t(5893),
        f = function (e) {
          var r = (0, i.useState)(!1),
            t = r[0],
            o = r[1],
            s = e.loading || t,
            l = (function () {
              var r = (0, n.Z)(
                a().mark(function r(t) {
                  var n;
                  return a().wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (!s && !e.disabled) {
                              r.next = 2;
                              break;
                            }
                            return r.abrupt("return");
                          case 2:
                            return (
                              (r.prev = 2),
                              o(!0),
                              (r.next = 6),
                              null === (n = e.onClick) || void 0 === n ? void 0 : n.call(e, t)
                            );
                          case 6:
                            return (r.prev = 6), o(!1), r.finish(6);
                          case 9:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[2, , 6, 9]]
                  );
                })
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })();
          return (0, d.jsx)("button", {
            className: u()(
              c().button,
              "primary" === e.type && c().primary,
              "secondary" === e.type && c().secondary,
              "danger" === e.type && c().danger,
              s && c().loading,
              e.className
            ),
            style: e.style,
            onClick: l,
            type: e.htmlType,
            disabled: s || e.disabled,
            children: e.children,
          });
        };
      f.defaultProps = {};
    },
    9456: function (e, r, t) {
      "use strict";
      t.d(r, {
        y: function () {
          return i;
        },
      });
      var n = t(9662),
        o = t(4427),
        a = null;
      (0, o.jU)() &&
        n.Z.newInstance({ maxCount: 5, prefixCls: "message", style: { top: 10, left: "50%" } }, function (e) {
          return (a = e);
        });
      var i = {
        error: function (e) {
          var r,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          null === (r = a) || void 0 === r || r.notice({ className: "error", duration: t, content: e });
        },
        success: function (e) {
          var r,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          null === (r = a) || void 0 === r || r.notice({ className: "success", duration: t, content: e });
        },
        loading: function (e) {
          var r,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = Math.random();
          return (
            null === (r = a) || void 0 === r || r.notice({ className: "loading", duration: t, content: e, key: n }),
            function () {
              var e;
              return null === (e = a) || void 0 === e ? void 0 : e.removeNotice(n);
            }
          );
        },
      };
    },
    1294: function (e, r, t) {
      "use strict";
      t.d(r, {
        g: function () {
          return c;
        },
      });
      var n = t(4942),
        o = (t(7294), t(5679)),
        a = t(5713),
        i = t(5893);
      function s(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? s(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      var l = {
          get authorization() {
            return "Bearer ".concat((0, a.hP)());
          },
        },
        c = function (e) {
          return (0, i.jsx)(
            o.Z,
            u(
              u(
                {
                  action: "https://api.testchatrevolver.space/api/image/upload",
                  accept: "image/png, image/jpeg",
                  headers: l,
                  name: "image",
                },
                e
              ),
              {},
              { onSuccess: e.onSuccess, children: e.children }
            )
          );
        };
      c.defaultProps = {};
    },
    940: function (e, r, t) {
      "use strict";
      t.d(r, {
        Y: function () {
          return n;
        },
      });
      t(7294), t(6545), t(5893);
      var n = function (e) {
        return null;
      };
      n.defaultProps = {};
    },
    1303: function (e, r, t) {
      "use strict";
      t.d(r, {
        V: function () {
          return i;
        },
      });
      t(7294);
      var n = t(6414),
        o = t.n(n),
        a = t(5893),
        i = function (e) {
          return (0, a.jsx)("div", { className: o().content, children: e.children });
        };
      i.defaultProps = {};
    },
    9955: function (e, r, t) {
      "use strict";
      t.d(r, {
        d: function () {
          return i;
        },
      });
      t(7294);
      var n = t(3690),
        o = t.n(n),
        a = t(5893),
        i = function (e) {
          return (0, a.jsx)("div", { className: o().right_content, children: e.children });
        };
      i.defaultProps = {};
    },
    7567: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile/edit",
        function () {
          return t(1241);
        },
      ]);
    },
    4158: function (e) {
      e.exports = {
        photo_update: "my-photo_photo_update__Aa6_r",
        my_photo: "my-photo_my_photo__3HjEg",
        avatar: "my-photo_avatar__3qmTt",
      };
    },
    3902: function (e) {
      e.exports = {
        my_profile_deleted: "my-profile-deleted_my_profile_deleted__1zBR1",
        title: "my-profile-deleted_title__1QVs9",
        text: "my-profile-deleted_text__2fBXs",
        button: "my-profile-deleted_button__2Q8j6",
        "button--disabled": "my-profile-deleted_button--disabled__31qJ4",
      };
    },
    981: function (e) {
      e.exports = {
        label: "field_label__2_g-l",
        field: "field_field__1NuJI",
        disabled: "field_disabled__3zkHH",
        content: "field_content__2RQnB",
      };
    },
    4223: function (e) {
      e.exports = {
        date_input: "date-input_date_input__3lNC1",
        error_text: "date-input_error_text__3eNHR",
        error: "date-input_error__2iEa_",
      };
    },
    1957: function (e) {
      e.exports = {
        select_input: "select-input_select_input__2JLLt",
        error_text: "select-input_error_text__3IlCK",
        error: "select-input_error__eQqGj",
      };
    },
    9734: function (e) {
      e.exports = {
        text_area: "text-area_text_area__3O-P-",
        error_text: "text-area_error_text__3T9ew",
        error: "text-area_error__sJ68c",
      };
    },
    9020: function (e) {
      e.exports = {
        text_input: "text-input_text_input__dkMOc",
        error_text: "text-input_error_text__3XU-u",
        error: "text-input_error__3T7fN",
      };
    },
    6570: function (e) {
      e.exports = {
        my_profile_edit: "my-profile-edit_my_profile_edit__39Nj1",
        divider: "my-profile-edit_divider__1M2FY",
      };
    },
    5440: function (e) {
      e.exports = {
        my_profile_layout: "my-profile-layout_my_profile_layout__18cBD",
        left: "my-profile-layout_left__1Frhy",
        right: "my-profile-layout_right___gbdG",
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
    6545: function (e) {
      e.exports = { ad_card: "ad-card_ad_card__1oRup" };
    },
    6414: function (e) {
      e.exports = { content: "content_content__36IZk" };
    },
    3690: function (e) {
      e.exports = { right_content: "right-content_right_content__9FnFV" };
    },
  },
  function (e) {
    e.O(0, [391, 774, 888, 179], function () {
      return (r = 7567), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
