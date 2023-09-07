(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [524],
  {
    3826: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return d;
        },
      });
      var a = r(7294),
        s = r(4184),
        n = r.n(s),
        o = r(3428),
        i = r.n(o),
        c = r(2058),
        u = r(5893),
        d = function (e) {
          var t = (0, a.useState)(e.initial),
            r = t[0],
            s = t[1],
            o = function () {
              return s(function (t) {
                return (t + 1) % e.data.length;
              });
            },
            d = function () {
              return s(function (t) {
                return (e.data.length + t - 1) % e.data.length;
              });
            };
          return (
            (0, c.K7)(c.et.ESC, e.onClose),
            (0, c.K7)(c.et.ArrowLeft, d),
            (0, c.K7)(c.et.ArrowRight, o),
            (0, u.jsxs)("div", {
              className: n()(i().photo_gallery, e.className),
              style: e.style,
              children: [
                (0, u.jsx)("button", { className: i().close, onClick: e.onClose }),
                (0, u.jsx)("div", {
                  className: i().image,
                  children: (0, u.jsx)("img", {
                    src: "".concat("https://api.testchatrevolver.space", "/static/").concat(e.data[r].path),
                  }),
                }),
                e.data.length > 1 && (0, u.jsx)("button", { className: n()(i().button, i().prev), onClick: d }),
                e.data.length > 1 && (0, u.jsx)("button", { className: n()(i().button, i().next), onClick: o }),
              ],
            })
          );
        };
      d.defaultProps = { initial: 0 };
    },
    6997: function (e, t, r) {
      "use strict";
      r.d(t, {
        P: function () {
          return p;
        },
      });
      var a = r(7294),
        s = r(1294),
        n = r(9456),
        o = r(4184),
        i = r.n(o),
        c = r(7373),
        u = r.n(c),
        d = r(3826),
        l = r(7100),
        _ = r(5893),
        p = function (e) {
          var t,
            r,
            o,
            c = (0, a.useState)(),
            p = c[0],
            f = c[1],
            h = (0, l.Z)();
          return (null !== (t = e.data) && void 0 !== t && t.length) || e.onUpload
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  void 0 !== p &&
                    (0, _.jsx)(d.B, {
                      data: e.data,
                      initial: p,
                      onClose: function () {
                        return f(void 0);
                      },
                    }),
                  (0, _.jsxs)("div", {
                    className: i()(u().photo_list, e.className),
                    style: e.style,
                    children: [
                      (0, _.jsxs)("div", {
                        className: u().top,
                        children: [
                          (0, _.jsx)("p", {
                            className: u().title,
                            children: h.formatMessage({ id: "user.photo_list.title", defaultMessage: "Photos" }),
                          }),
                          e.onUpload &&
                            (0, _.jsx)(s.g, {
                              onSuccess: function (t) {
                                var r;
                                return null === (r = e.onUpload) || void 0 === r ? void 0 : r.call(e, t.id);
                              },
                              onError: function () {
                                return n.y.error(
                                  h.formatMessage({
                                    id: "user.photo_list.upload_error",
                                    defaultMessage: "Photo upload error",
                                  })
                                );
                              },
                              children: (0, _.jsx)("button", {
                                className: u().add,
                                children: h.formatMessage({ id: "user.photo_list.add", defaultMessage: "Add photos" }),
                              }),
                            }),
                        ],
                      }),
                      0 === (null === (r = e.data) || void 0 === r ? void 0 : r.length) &&
                        (0, _.jsxs)("div", {
                          className: i()(u().grid, u().empty),
                          children: [
                            (0, _.jsx)("div", {
                              className: u().item,
                              children: (0, _.jsx)("div", { className: u().photo }),
                            }),
                            (0, _.jsx)("div", {
                              className: u().item,
                              children: (0, _.jsx)("div", { className: u().photo }),
                            }),
                            (0, _.jsx)("div", {
                              className: u().item,
                              children: (0, _.jsx)("div", { className: u().photo }),
                            }),
                            (0, _.jsx)("div", {
                              className: u().item,
                              children: (0, _.jsx)("div", { className: u().photo }),
                            }),
                          ],
                        }),
                      (0, _.jsx)("div", {
                        className: u().grid,
                        children:
                          null === (o = e.data) || void 0 === o
                            ? void 0
                            : o.map(function (t, r) {
                                return (0, _.jsx)(
                                  "div",
                                  {
                                    className: u().item,
                                    children: (0, _.jsxs)("div", {
                                      className: u().photo,
                                      onClick: function () {
                                        return f(r);
                                      },
                                      children: [
                                        (0, _.jsx)("img", {
                                          src: "".concat("https://api.testchatrevolver.space", "/static/").concat(t.path),
                                        }),
                                        e.onDelete &&
                                          (0, _.jsx)("button", {
                                            className: u().delete,
                                            onClick: function (r) {
                                              var a;
                                              r.stopPropagation(),
                                                null === (a = e.onDelete) || void 0 === a || a.call(e, t.id);
                                            },
                                          }),
                                      ],
                                    }),
                                  },
                                  t.id
                                );
                              }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        };
      p.defaultProps = {};
    },
    9456: function (e, t, r) {
      "use strict";
      r.d(t, {
        y: function () {
          return o;
        },
      });
      var a = r(9662),
        s = r(4427),
        n = null;
      (0, s.jU)() &&
        a.Z.newInstance({ maxCount: 5, prefixCls: "message", style: { top: 10, left: "50%" } }, function (e) {
          return (n = e);
        });
      var o = {
        error: function (e) {
          var t,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          null === (t = n) || void 0 === t || t.notice({ className: "error", duration: r, content: e });
        },
        success: function (e) {
          var t,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          null === (t = n) || void 0 === t || t.notice({ className: "success", duration: r, content: e });
        },
        loading: function (e) {
          var t,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            a = Math.random();
          return (
            null === (t = n) || void 0 === t || t.notice({ className: "loading", duration: r, content: e, key: a }),
            function () {
              var e;
              return null === (e = n) || void 0 === e ? void 0 : e.removeNotice(a);
            }
          );
        },
      };
    },
    1761: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return u;
        },
      });
      var a = r(7294),
        s = r(5515),
        n = r.n(s),
        o = r(4184),
        i = r.n(o),
        c = r(5893),
        u = (0, a.forwardRef)(function (e, t) {
          return (0,
          c.jsxs)("div", { className: i()(n().text_area, e.error && n().error), children: [(0, c.jsx)("textarea", { ref: t, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled, rows: e.rows }), e.error && (0, c.jsx)("div", { className: n().error_text, children: e.error })] });
        });
      u.defaultProps = {};
    },
    1294: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return d;
        },
      });
      var a = r(4942),
        s = (r(7294), r(5679)),
        n = r(5713),
        o = r(5893);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var u = {
          get authorization() {
            return "Bearer ".concat((0, n.hP)());
          },
        },
        d = function (e) {
          return (0, o.jsx)(
            s.Z,
            c(
              c(
                {
                  action: "https://api.testchatrevolver.space/api/image/upload",
                  accept: "image/png, image/jpeg",
                  headers: u,
                  name: "image",
                },
                e
              ),
              {},
              { onSuccess: e.onSuccess, children: e.children }
            )
          );
        };
      d.defaultProps = {};
    },
    940: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return a;
        },
      });
      r(7294), r(6545), r(5893);
      var a = function (e) {
        return null;
      };
      a.defaultProps = {};
    },
    4844: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return s;
        },
      });
      r(7294);
      var a = r(5893),
        s = function (e) {
          return e.country
            ? (0, a.jsx)("img", {
                src: "https://countryflagsapi.com/svg/".concat(e.country),
                alt: e.country,
                style: { width: e.size, height: "auto" },
              })
            : null;
        };
      s.defaultProps = { size: 24 };
    },
    8864: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return n;
        },
      });
      r(7294);
      var a = r(7100),
        s = r(5893),
        n = function (e) {
          var t = (0, a.Z)();
          return (0, s.jsxs)("span", {
            className: e.className,
            style: e.style,
            children: [
              "MALE" === e.gender && t.formatMessage({ id: "gender.male", defaultMessage: "Man" }),
              "FEMALE" === e.gender && t.formatMessage({ id: "gender.female", defaultMessage: "Woman" }),
            ],
          });
        };
      n.defaultProps = {};
    },
    7537: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return oe;
        },
      });
      var a = r(7294),
        s = r(4698),
        n = r.n(s),
        o = r(5893),
        i = function (e) {
          return (0, o.jsxs)("div", {
            className: n().user_card_skeleton,
            children: [
              (0, o.jsxs)("div", {
                className: n().top,
                children: [
                  (0, o.jsx)("div", { className: n().ava }),
                  (0, o.jsxs)("div", {
                    className: n().main,
                    children: [
                      (0, o.jsx)("div", { className: n().name }),
                      (0, o.jsxs)("div", {
                        className: n().about,
                        children: [(0, o.jsx)("span", {}), (0, o.jsx)("span", {})],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: n().center,
                children: [
                  (0, o.jsx)("p", { className: n().status }),
                  (0, o.jsxs)("div", {
                    className: n().tags,
                    children: [
                      (0, o.jsx)("span", { className: n().tags_item }),
                      (0, o.jsx)("span", { className: n().tags_item }),
                      (0, o.jsx)("span", { className: n().tags_item }),
                      (0, o.jsx)("span", { className: n().tags_item }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      i.defaultProps = {};
      var c = r(3795),
        u = r(887),
        d = r(1230),
        l = r(2457),
        _ = r(7808),
        p = r(5564),
        f = r(3826),
        h = r(7646),
        m = r(4342),
        v = r(1761),
        g = r(6661),
        x = r(4910),
        j = r(8638),
        N = r(7100),
        y = function (e) {
          var t = (0, N.Z)();
          return (0, o.jsx)(j.u, {
            title: t.formatMessage({ id: "user.report_modal.success", defaultMessage: "Report sent" }),
          });
        };
      y.defaultProps = {};
      var b = function (e) {
        var t = (0, a.useState)(""),
          r = t[0],
          s = t[1],
          n = (0, a.useState)(""),
          i = n[0],
          c = n[1],
          u = (0, N.Z)(),
          l = [
            u.formatMessage({ id: "user.report_modal.reason.0", defaultMessage: "Harassment and cyberbullying" }),
            u.formatMessage({ id: "user.report_modal.reason.1", defaultMessage: "Violent threats" }),
            u.formatMessage({ id: "user.report_modal.reason.2", defaultMessage: "Child endangerment" }),
            u.formatMessage({
              id: "user.report_modal.reason.3",
              defaultMessage: "Hate speech against a protected group",
            }),
            u.formatMessage({ id: "user.report_modal.reason.4", defaultMessage: "Spam and Scams" }),
            u.formatMessage({ id: "user.report_modal.reason.5", defaultMessage: "Privacy" }),
            u.formatMessage({ id: "user.report_modal.reason.other", defaultMessage: "None of these are your issue" }),
          ],
          _ = r === l[l.length - 1],
          p = d.n.prepare(y),
          f = (0, x.v)(e, {
            onSubmit: function () {
              return g.h.user.report(e.id, { text: _ ? i : r });
            },
            onSuccess: function () {
              return p();
            },
          }),
          j = !r || (_ && !i);
        return (0, o.jsxs)(h.Y, {
          title: u.formatMessage({ id: "user.report_modal.title", defaultMessage: "Report user" }),
          form: f,
          okProps: { disabled: j },
          children: [
            (0, o.jsx)("h3", {
              children: u.formatMessage({ id: "user.report_modal.reason", defaultMessage: "What is the issue?" }),
            }),
            (0, o.jsx)(m.Y, {
              value: r,
              onChange: s,
              options: l.map(function (e) {
                return { value: e, label: e };
              }),
            }),
            r === l[l.length - 1] &&
              (0, o.jsx)(v.K, {
                autoFocus: !0,
                value: i,
                onChange: function (e) {
                  return c(e.target.value);
                },
              }),
          ],
        });
      };
      b.defaultProps = {};
      var M = r(2874),
        P = r.n(M),
        k = function (e) {
          var t = (0, a.useState)(!1),
            r = t[0],
            s = t[1],
            n = d.n.prepare(b, { id: e.id }),
            i = (0, p.p)(),
            h = (0, N.Z)();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              r &&
                e.image &&
                (0, o.jsx)(f.B, {
                  data: [{ id: "", path: e.image, absolutePath: "" }],
                  onClose: function () {
                    return s(!1);
                  },
                }),
              (0, o.jsx)("div", {
                className: P().user_card_header,
                children: (0, o.jsxs)("div", {
                  className: P().top,
                  children: [
                    (0, o.jsx)(l.q, {
                      className: P().ava,
                      src: e.image,
                      gender: e.sex,
                      online: e.online,
                      onClick: function () {
                        return s(!0);
                      },
                    }),
                    (0, o.jsxs)("div", {
                      className: P().main,
                      children: [
                        (0, o.jsx)("p", { className: P().name, children: (0, c.V)(e) }),
                        (0, o.jsx)(_.e, { id: e.id }),
                      ],
                    }),
                    e.vip && (0, o.jsx)("span", { className: P().vip, children: "VIP" }),
                    (0, o.jsxs)("div", {
                      className: P().right,
                      children: [
                        e.rating && (0, o.jsx)("span", { className: P().rate, children: (0, u.A)(e.rating) }),
                        (0, o.jsx)("div", {
                          className: P().header_controls,
                          children:
                            i &&
                            (0, o.jsx)("span", {
                              className: P().report,
                              onClick: n,
                              children: h.formatMessage({ id: "shared.user_card.report", defaultMessage: "Report" }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      k.defaultProps = {};
      var C = r(2614),
        S = r.n(C),
        w = function (e) {
          return (0, o.jsx)("div", { className: S().user_card_header_my, children: e.children });
        };
      w.defaultProps = {};
      var O = r(1259),
        E = r.n(O),
        Z = function (e) {
          return (0, o.jsx)("div", { className: E().user_card_description_item, children: e.children });
        };
      Z.defaultProps = {};
      var A = r(2615),
        D = r.n(A),
        F = function (e) {
          return (0, o.jsx)("div", { className: D().user_card_description, children: e.children });
        };
      (F.Item = Z), (F.defaultProps = {});
      var K = r(8817),
        R = r.n(K),
        U = r(4184),
        B = r.n(U),
        L = function (e) {
          return (0, o.jsx)("div", {
            className: B()(R().user_card_status, e.className),
            onClick: e.onClick,
            children: e.children,
          });
        };
      L.defaultProps = {};
      var T = r(1638),
        V = r.n(T),
        I = function (e) {
          var t = (0, N.Z)();
          return e.tags
            ? (0, o.jsxs)("div", {
                className: V().user_card_tags,
                children: [
                  (0, o.jsxs)("span", {
                    className: V().label,
                    children: [t.formatMessage({ id: "shared.user_card.tags", defaultMessage: "Tags" }), " "],
                  }),
                  e.tags.map(function (e, t) {
                    return (0, o.jsx)("span", { className: V().item, children: e }, t);
                  }),
                ],
              })
            : null;
        };
      I.defaultProps = {};
      var H = r(4727),
        Y = r.n(H),
        q = function (e) {
          var t,
            r = (0, N.Z)();
          return (0, o.jsxs)("div", {
            className: Y().user_card_about,
            children: [
              (0, o.jsxs)("div", {
                className: Y().title,
                children: [r.formatMessage({ id: "shared.user_card.about_me", defaultMessage: "About me" }), ":"],
              }),
              null === (t = e.data) || void 0 === t
                ? void 0
                : t.split("\n").map(function (e, t) {
                    return (0, o.jsx)("p", { children: e }, t);
                  }),
            ],
          });
        };
      q.defaultProps = {};
      var G = r(6319),
        J = r.n(G),
        Q = function (e) {
          return (0, o.jsx)("div", { className: J().user_card_divider, children: e.children });
        };
      Q.defaultProps = {};
      var W = r(5861),
        X = r(7757),
        z = r.n(X),
        $ = r(1441),
        ee = r.n($),
        te = r(2058),
        re = r(8514),
        ae = function (e) {
          var t,
            r,
            s = (0, a.useState)(!1),
            n = s[0],
            i = s[1],
            c = g.h.user.useGetMe(),
            u = (0, a.useState)(null === (t = c.data) || void 0 === t ? void 0 : t.status),
            d = u[0],
            l = u[1],
            _ = (0, a.useRef)(null),
            p = (0, a.useRef)(null);
          (0, a.useEffect)(
            function () {
              var e;
              l(null === (e = c.data) || void 0 === e ? void 0 : e.status);
            },
            [null === (r = c.data) || void 0 === r ? void 0 : r.status]
          );
          var f = (function () {
              var e = (0, W.Z)(
                z().mark(function e() {
                  return z().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), g.h.user.updateProfile({ status: d });
                        case 2:
                          return (e.next = 4), c.mutate();
                        case 4:
                          i(!1);
                        case 5:
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
            h = function () {
              var e;
              i(!1), l(null === (e = c.data) || void 0 === e ? void 0 : e.status);
            };
          (0, te.K7)(te.et.ESC, h), (0, te.O8)(_, h);
          var m = (0, N.Z)();
          if (!n) {
            var v,
              x = c.data && !c.data.status;
            return (0, o.jsx)(L, {
              className: B()(ee().status_with_hover, x && ee().empty),
              onClick: function () {
                return i(!0);
              },
              children: x
                ? m.formatMessage({ id: "shared.user_card.status.placeholder", defaultMessage: "Set status..." })
                : null === (v = c.data) || void 0 === v
                ? void 0
                : v.status,
            });
          }
          return (0, o.jsxs)("form", {
            ref: _,
            className: B()(ee().status_my, e.className),
            style: e.style,
            onSubmit: function (e) {
              e.preventDefault(), f();
            },
            children: [
              (0, o.jsx)(re.Z, {
                value: d,
                onChange: function (e) {
                  return l(e.target.value);
                },
                autoFocus: !0,
                ref: p,
                onKeyPress: function (e) {
                  "Enter" === e.key &&
                    (e.preventDefault(),
                    e.altKey || e.shiftKey
                      ? (function () {
                          var e = p.current;
                          if (e) {
                            var t = e.selectionStart,
                              r = e.selectionEnd;
                            (e.value = e.value.substring(0, t) + "\n" + e.value.substring(r)),
                              e.setSelectionRange(t + 1, t + 1),
                              l(e.value);
                          }
                        })()
                      : f());
                },
              }),
              (0, o.jsx)("button", {
                type: "submit",
                children: m.formatMessage({ id: "shared.user_card.status.save", defaultMessage: "Save" }),
              }),
            ],
          });
        };
      ae.defaultProps = {};
      var se = r(4578),
        ne = r.n(se),
        oe = function (e) {
          return (0, o.jsx)("div", { className: ne().user_card, children: e.children });
        };
      (oe.Skeleton = i),
        (oe.Header = k),
        (oe.HeaderMy = w),
        (oe.Description = F),
        (oe.Status = L),
        (oe.StatusMy = ae),
        (oe.Tags = I),
        (oe.About = q),
        (oe.Divider = Q);
    },
    1303: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return o;
        },
      });
      r(7294);
      var a = r(6414),
        s = r.n(a),
        n = r(5893),
        o = function (e) {
          return (0, n.jsx)("div", { className: s().content, children: e.children });
        };
      o.defaultProps = {};
    },
    9955: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return o;
        },
      });
      r(7294);
      var a = r(3690),
        s = r.n(a),
        n = r(5893),
        o = function (e) {
          return (0, n.jsx)("div", { className: s().right_content, children: e.children });
        };
      o.defaultProps = {};
    },
    3428: function (e) {
      e.exports = {
        photo_gallery: "photo-gallery_photo_gallery__20Hbu",
        close: "photo-gallery_close__17fEi",
        slider: "photo-gallery_slider__UfEgM",
        image: "photo-gallery_image__3hxpj",
        button: "photo-gallery_button__h7e5l",
        prev: "photo-gallery_prev__TVTJ0",
        next: "photo-gallery_next__3hj6n",
      };
    },
    7373: function (e) {
      e.exports = {
        photo_list: "photo-list_photo_list__3rWwA",
        title: "photo-list_title__YkPA0",
        add: "photo-list_add__2yslL",
        top: "photo-list_top__1XNkT",
        disabled: "photo-list_disabled__3aQcX",
        grid: "photo-list_grid__6WqUp",
        empty: "photo-list_empty__3LW7t",
        item: "photo-list_item__1NAr7",
        photo: "photo-list_photo__1yn0h",
        delete: "photo-list_delete__3r_n8",
      };
    },
    5515: function (e) {
      e.exports = {
        text_area: "text-area_text_area__cFe5A",
        error_text: "text-area_error_text__JJNLI",
        error: "text-area_error__12cx2",
      };
    },
    6545: function (e) {
      e.exports = { ad_card: "ad-card_ad_card__1oRup" };
    },
    4727: function (e) {
      e.exports = { user_card_about: "user-card-about_user_card_about__2viKS", title: "user-card-about_title__3oeE2" };
    },
    1259: function (e) {
      e.exports = { user_card_description_item: "user-card-description-item_user_card_description_item__QeUf8" };
    },
    2615: function (e) {
      e.exports = { user_card_description: "user-card-description_user_card_description__fNeEK" };
    },
    6319: function (e) {
      e.exports = { user_card_divider: "user-card-divider_user_card_divider__KbMGA" };
    },
    2614: function (e) {
      e.exports = { user_card_header_my: "user-card-header-my_user_card_header_my__J_AGe" };
    },
    2874: function (e) {
      e.exports = {
        user_card_header: "user-card-header_user_card_header__1jOPG",
        right: "user-card-header_right__30sP7",
        rate: "user-card-header_rate__3ysbG",
        name: "user-card-header_name__ck-qS",
        button: "user-card-header_button__3CgBH",
        report: "user-card-header_report__2R_Cc",
        cancel: "user-card-header_cancel__QCgxw",
        top: "user-card-header_top__2qIpF",
        "top--disabled": "user-card-header_top--disabled__3_TdS",
        ava: "user-card-header_ava___FtAO",
        "ava--disabled": "user-card-header_ava--disabled__3k8O-",
        main: "user-card-header_main__RaPwr",
        follow: "user-card-header_follow__SFFiB",
        unfollow: "user-card-header_unfollow__1PRLq",
        vip: "user-card-header_vip__3tZYC",
        header_controls: "user-card-header_header_controls__1_rss",
        cancel_icon: "user-card-header_cancel_icon__3V6mw",
        "report--disabled": "user-card-header_report--disabled__1xDxT",
      };
    },
    4698: function (e) {
      e.exports = {
        user_card_skeleton: "user-card-skeleton_user_card_skeleton__3XwP_",
        name: "user-card-skeleton_name__2fQcm",
        status: "user-card-skeleton_status__1ZeDv",
        tags: "user-card-skeleton_tags__11V7q",
        tags_label: "user-card-skeleton_tags_label__1QtVE",
        about: "user-card-skeleton_about__7-wdT",
        top: "user-card-skeleton_top__3dL3_",
        center: "user-card-skeleton_center__2IyUk",
        ava: "user-card-skeleton_ava__31dD9",
        main: "user-card-skeleton_main__Xd1-3",
        "user-info__flag": "user-card-skeleton_user-info__flag__b_3M4",
        tags_item: "user-card-skeleton_tags_item__2Mn8x",
      };
    },
    1441: function (e) {
      e.exports = {
        status_my: "status-my_status_my__3b1Jr",
        status_with_hover: "status-my_status_with_hover__2_SOu",
        empty: "status-my_empty__2sZ9T",
      };
    },
    8817: function (e) {
      e.exports = {
        user_card_status: "user-card-status_user_card_status__3uDIC",
        "user_card_status--empty": "user-card-status_user_card_status--empty__fYaEc",
      };
    },
    1638: function (e) {
      e.exports = {
        user_card_tags: "user-card-tags_user_card_tags__y71PK",
        label: "user-card-tags_label__9XxuP",
        item: "user-card-tags_item__HEc_U",
      };
    },
    4578: function (e) {
      e.exports = { user_card: "user-card_user_card__2E4BL" };
    },
    6414: function (e) {
      e.exports = { content: "content_content__36IZk" };
    },
    3690: function (e) {
      e.exports = { right_content: "right-content_right_content__9FnFV" };
    },
  },
]);
