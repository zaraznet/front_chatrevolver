(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    1255: function (t, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return v;
          },
        });
      var e = r(5861),
        u = r(5671),
        o = r(3144),
        c = r(136),
        f = r(2963),
        i = r(1120),
        a = r(7757),
        s = r.n(a),
        l = r(7294),
        p = r(1163);
      function h(t) {
        var n = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            e = (0, i.Z)(t);
          if (n) {
            var u = (0, i.Z)(this).constructor;
            r = Reflect.construct(e, arguments, u);
          } else r = e.apply(this, arguments);
          return (0, f.Z)(this, r);
        };
      }
      var v = (function (t) {
        return (function (n) {
          (0, c.Z)(f, n);
          var r = h(f);
          function f() {
            return (0, u.Z)(this, f), r.apply(this, arguments);
          }
          return (
            (0, o.Z)(f, null, [
              {
                key: "getInitialProps",
                value: (function () {
                  var n = (0, e.Z)(
                    s().mark(function n(r) {
                      var e, u;
                      return s().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (e = r.req),
                                (u = r.res)
                                  ? (u.writeHead(302, {
                                      Location:
                                        "function" === typeof t ? t(null === e || void 0 === e ? void 0 : e.url) : t,
                                    }),
                                    u.end())
                                  : p.default.push("function" === typeof t ? t(p.default.asPath) : t),
                                n.abrupt("return", {})
                              );
                            case 3:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
              },
            ]),
            f
          );
        })(l.Component);
      })("/faq/what-is");
    },
    4307: function (t, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faq",
        function () {
          return r(1255);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return (n = 4307), t((t.s = n));
      var n;
    });
    var n = t.O();
    _N_E = n;
  },
]);
