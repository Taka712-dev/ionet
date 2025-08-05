! function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0039de8c-5bd7-4c04-9c1f-bd31ca26b66d", e._sentryDebugIdIdentifier = "sentry-dbid-0039de8c-5bd7-4c04-9c1f-bd31ca26b66d")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [941], {
        50941: function (e, t, n) {
            n.r(t);
            var a = n(57437),
                s = n(87600),
                r = n(65461),
                d = n(30190),
                i = n(6432),
                l = n(87138);
            t.default = () => (0, a.jsx)("div", {
                className: "absolute top-4 z-10 flex w-full flex-row items-center justify-center overflow-hidden px-4",
                children: (0, a.jsx)("div", {
                })
            })
        }
    }
]);