(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [869],
  {
    746: function (e, t, r) {
      "use strict";
      r.d(t, {
        b: function () {
          return P;
        },
      });
      r(7294);
      var a = r(4184),
        s = r.n(a),
        n = r(1118),
        l = r.n(n),
        i = r(1163),
        c = r(1664),
        o = r(1230),
        u = r(4942),
        f = r(7646),
        d = r(8404),
        _ = r(1761),
        p = r(4910),
        h = r(6661),
        g = r(5564),
        m = r(8638),
        x = r(7100),
        j = r(5893),
        q = function (e) {
          var t = (0, x.Z)();
          return (0, j.jsx)(m.u, {
            title: t.formatMessage({ id: "faq.support_modal.success.title", defaultMessage: "Letter sent" }),
          });
        };
      function v(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      q.defaultProps = {};
      var N = function (e) {
        var t = o.n.prepare(q),
          r = (0, p.v)(e, {
            onSubmit: h.h.common.support,
            onSuccess: function () {
              return t();
            },
          }),
          a = (0, g.p)(),
          s = (0, x.Z)();
        return (0, j.jsxs)(f.Y, {
          title: s.formatMessage({ id: "faq.support_modal.title", defaultMessage: "Support help" }),
          form: r,
          children: [
            !a &&
              (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)("h4", { children: s.formatMessage({ id: "input.email", defaultMessage: "Email" }) }),
                  (0, j.jsx)(d.o, y({}, r.register("email", { shouldUnregister: !0 }))),
                ],
              }),
            (0, j.jsx)("h4", {
              children: s.formatMessage({ id: "faq.support_modal.type", defaultMessage: "Type of the issue" }),
            }),
            (0, j.jsx)(d.o, y({}, r.register("type"))),
            (0, j.jsx)("h4", {
              children: s.formatMessage({ id: "faq.support_modal.text", defaultMessage: "What is the issue?" }),
            }),
            (0, j.jsx)(_.K, y({}, r.register("text"))),
          ],
        });
      };
      N.defaultProps = {};
      var b = r(5265),
        O = [
          { slug: "what-is", titleId: "faq.titles.what-is" },
          { slug: "register", titleId: "faq.titles.register" },
          { slug: "rating", titleId: "faq.titles.rating" },
          { slug: "privacy", titleId: "faq.titles.privacy" },
          { slug: "help", titleId: "faq.titles.help" },
          { slug: "terms-of-use", titleId: "faq.titles.terms-of-use" },
          { slug: "privacy-policy", titleId: "faq.titles.privacy-policy" },
        ],
        P = function (e) {
          var t = (0, i.useRouter)(),
            r = t.query.slug,
            a = o.n.prepare(N),
            n = (0, x.Z)();
          return (0, j.jsxs)("div", {
            className: s()(l().faq_card, e.className),
            style: e.style,
            children: [
              (0, j.jsxs)("div", {
                className: l().header,
                children: [
                  (0, j.jsx)("p", {
                    className: l().title,
                    children: n.formatMessage({ id: "menu.faq", defaultMessage: "FAQ" }),
                  }),
                  (0, j.jsx)("a", {
                    className: l().support_link,
                    onClick: a,
                    children: n.formatMessage({ id: "faq.support_modal.title", defaultMessage: "Support help" }),
                  }),
                ],
              }),
              (0, j.jsx)("div", {
                className: l().content,
                children: (0, j.jsx)(b.R.Consumer, {
                  children: function (e) {
                    var a;
                    e.currentLocale, e.toggleLocale;
                    if (t.asPath.includes("?lang")) {
                      var i = t.asPath.indexOf("?lang");
                      a = t.asPath.slice(i);
                    } else a = "";
                    return O.map(function (e, t) {
                      return (0,
                      j.jsx)(c.default, { href: "/faq/".concat(e.slug).concat(a), children: (0, j.jsx)("a", { className: s()(l().link, e.slug === r && l().active), children: n.formatMessage({ id: "".concat(e.titleId) }) }) }, t);
                    });
                  },
                }),
              }),
            ],
          });
        };
      P.defaultProps = {};
    },
    3227: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return _;
          },
          default: function () {
            return p;
          },
        });
      r(7294);
      var a = r(746),
        s = r(4184),
        n = r.n(s),
        l = r(4318),
        i = r.n(l),
        c = r(5893),
        o = function (e) {
          return (0, c.jsxs)("div", {
            className: n()(i().faq_layout, e.className),
            style: e.style,
            children: [(0, c.jsx)("div", { className: i().left, children: (0, c.jsx)(a.b, {}) }), e.children],
          });
        };
      o.defaultProps = {};
      var u = r(5181),
        f = r.n(u),
        d = function (e) {
          return (0, c.jsxs)("article", {
            className: n()(f().faq_article, e.className),
            style: e.style,
            children: [
              e.title && (0, c.jsx)("h1", { children: e.title }),
              e.content &&
                (0, c.jsx)("div", { className: f().content, dangerouslySetInnerHTML: { __html: e.content } }),
            ],
          });
        };
      d.defaultProps = {};
      var _ = !0,
        p = function (e) {
          return (0, c.jsx)(o, { children: (0, c.jsx)(d, { title: e.title, content: e.content }) }, e.slug);
        };
    },
    1761: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return o;
        },
      });
      var a = r(7294),
        s = r(5515),
        n = r.n(s),
        l = r(4184),
        i = r.n(l),
        c = r(5893),
        o = (0, a.forwardRef)(function (e, t) {
          return (0,
          c.jsxs)("div", { className: i()(n().text_area, e.error && n().error), children: [(0, c.jsx)("textarea", { ref: t, name: e.name, autoFocus: e.autoFocus, onChange: e.onChange, onBlur: e.onBlur, value: e.value, disabled: e.disabled, rows: e.rows }), e.error && (0, c.jsx)("div", { className: n().error_text, children: e.error })] });
        });
      o.defaultProps = {};
    },
    5576: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faq/[slug]",
        function () {
          return r(3227);
        },
      ]);
    },
    5181: function (e) {
      e.exports = {
        faq_article: "faq-article_faq_article__30owg",
        content: "faq-article_content__1ZcrH",
        "faq_article--hidden": "faq-article_faq_article--hidden__1y5R9",
      };
    },
    1118: function (e) {
      e.exports = {
        faq_card: "faq-card_faq_card__3vM1S",
        title: "faq-card_title__21OU5",
        link: "faq-card_link__3kCHy",
        support_link: "faq-card_support_link__YjdUT",
        header: "faq-card_header__QF6xz",
        content: "faq-card_content__3RG8e",
        active: "faq-card_active__2L6uo",
      };
    },
    4318: function (e) {
      e.exports = {
        faq_layout: "faq-layout_faq_layout__3sy7f",
        left: "faq-layout_left___8LZ9",
        "left--hidden": "faq-layout_left--hidden__1T2k4",
      };
    },
    5515: function (e) {
      e.exports = {
        text_area: "text-area_text_area__cFe5A",
        error_text: "text-area_error_text__JJNLI",
        error: "text-area_error__12cx2",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 5576), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
