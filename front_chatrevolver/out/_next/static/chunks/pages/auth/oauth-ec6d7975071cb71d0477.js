(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [59],
  {
    970: function (u, n, t) {
      "use strict";
      t.r(n);
      var r = t(7294),
        e = t(1163),
        o = t(5713);
      n.default = (0, e.withRouter)(function (u) {
        var n = u.router.query.token;
        return (
          (0, r.useEffect)(
            function () {
              n && ((0, o.M8)(n), u.router.replace("/profile"));
            },
            [n]
          ),
          null
        );
      });
    },
    1952: function (u, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/oauth",
        function () {
          return t(970);
        },
      ]);
    },
  },
  function (u) {
    u.O(0, [774, 888, 179], function () {
      return (n = 1952), u((u.s = n));
      var n;
    });
    var n = u.O();
    _N_E = n;
  },
]);
