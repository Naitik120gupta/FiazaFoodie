(() => {
    "use strict";
    var e, t, r, n, o, a = {},
        i = {};

    function s(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return a[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
    }
    s.m = a, s.amdD = function() {
            throw new Error("define cannot be used indirect")
        }, s.amdO = {}, e = [], s.O = (t, r, n, o) => {
            if (!r) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [r, n, o] = e[c], i = !0, d = 0; d < r.length; d++)(!1 & o || a >= o) && Object.keys(s.O).every((e => s.O[e](r[d]))) ? r.splice(d--, 1) : (i = !1, o < a && (a = o));
                    i && (e.splice(c--, 1), t = n())
                }
                return t
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [r, n, o]
        }, s.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return s.d(t, {
                a: t
            }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(e, n) {
            if (1 & n && (e = this(e)), 8 & n) return e;
            if ("object" == typeof e && e) {
                if (4 & n && e.__esModule) return e;
                if (16 & n && "function" == typeof e.then) return e
            }
            var o = Object.create(null);
            s.r(o);
            var a = {};
            t = t || [null, r({}), r([]), r(r)];
            for (var i = 2 & n && e;
                "object" == typeof i && !~t.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((t => a[t] = () => e[t]));
            return a.default = () => e, s.d(o, a), o
        }, s.d = (e, t) => {
            for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, r) => (s.f[r](e, t), t)), [])), s.u = e => 149 === e ? "3b8af7f9a0640c2f65c2.vendor.js" : 501 === e ? "7952457620f6aade2447.vendor.js" : 830 === e ? "8065c4dc254873cd320af831f61fe2c3.js" : 582 === e ? "fec68e81b30525b0cca19165ba370b82.js" : 311 === e ? "7ccf7926c3369a92734f.vendor.js" : 848 === e ? "9d22c732fcab0b0344959139d51e965f.js" : 507 === e ? "a56ac5a69105dc6ec3e7a88cc3ef0d86.js" : 456 === e ? "9a48271f286dca1b0e6c.vendor.js" : 24 === e ? "946c0c3a5440b77dacbc.vendor.js" : void 0, s.miniCssF = e => 922 === e ? "f50ed613096007304ce2.vendor.css" : 45 === e ? "0fa9f8c9589e29d29a25.css" : 582 === e ? "8c38901f5da68eb8b127.css" : void 0, s.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), s.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, o = "@canva/web:", s.l = (e, t, r, a) => {
            if (n[e]) n[e].push(t);
            else {
                var i, d;
                if (void 0 !== r)
                    for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                        var u = c[l];
                        if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == o + r) {
                            i = u;
                            break
                        }
                    }
                i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", o + r), i.src = e, i.async = !1), n[e] = [t];
                var f = (t, r) => {
                        i.onerror = i.onload = null, clearTimeout(p);
                        var o = n[e];
                        if (delete n[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(r))), t) return t(r)
                    },
                    p = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: i
                    }), 12e4);
                i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), d && document.head.appendChild(i)
            }
        }, s.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
            const e = s.e,
                t = function e(t, r, n) {
                    return t().catch((function(o) {
                        return 0 === n ? Promise.reject(o) : (a = r, new Promise((function(e) {
                            setTimeout(e, a)
                        }))).then((function() {
                            return e(t, r, n - 1)
                        }));
                        var a
                    }))
                };
            s.e = function(r) {
                return t((function() {
                    return e(r)
                }), 1e3, 5)
            }
        })(), s.p = "",
        function() {
            let e = s.miniCssF,
                t = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
            "ltr" !== t && "rtl" !== t && (console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), t = "ltr"), s.miniCssF = function() {
                const r = e.apply(this, arguments);
                return "string" == typeof r && r.endsWith(".css") ? r.replace(/\.css$/, "." + t + ".css") : r
            }
        }();
    var d, c, l = {};
    s.f.compat = (e, t) => {
        ! function(e, t, r) {
            if (null == t[e]) {
                let r, o;
                try {
                    r = window.cmsg.locale || "en", o = window.cmsg.assets[r][e].js || []
                } catch (n) {
                    return
                }
                t[e] = Promise.all(o.map((r => new Promise(((n, o) => {
                    const a = document.createElement("script");
                    a.async = !1, a.onerror = () => {
                        delete t[e], o(new Error(`Fail to load message files@${r}`))
                    }, a.onload = () => {
                        t[e] = 0, n()
                    }, a.src = s.p + r, document.head.appendChild(a)
                })))))
            }
            t[e] && r.push(t[e])
        }(e, l, t)
    }, d = e => new Promise(((t, r) => {
        var n = s.miniCssF(e),
            o = s.p + n;
        if (((e, t) => {
                for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                    var o = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                    if ("stylesheet" === i.rel && (o === e || o === t)) return i
                }
                var a = document.getElementsByTagName("style");
                for (n = 0; n < a.length; n++) {
                    var i;
                    if ((o = (i = a[n]).getAttribute("data-href")) === e || o === t) return i
                }
            })(n, o)) return t();
        ((e, t, r, n) => {
            var o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = a => {
                if (o.onerror = o.onload = null, "load" === a.type) r();
                else {
                    var i = a && ("load" === a.type ? "missing" : a.type),
                        s = a && a.target && a.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                    d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode.removeChild(o), n(d)
                }
            }, o.href = t, document.head.appendChild(o)
        })(e, o, t, r)
    })), c = {
        810: 0
    }, s.f.miniCss = (e, t) => {
        c[e] ? t.push(c[e]) : 0 !== c[e] && {
            582: 1
        }[e] && t.push(c[e] = d(e).then((() => {
            c[e] = 0
        }), (t => {
            throw delete c[e], t
        })))
    }, (() => {
        var e = {
            810: 0
        };
        s.f.j = (t, r) => {
            var n = s.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n) r.push(n[2]);
                else if (810 != t) {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var a = s.p + s.u(t),
                    i = new Error;
                s.l(a, (r => {
                    if (s.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                        var o = r && ("load" === r.type ? "missing" : r.type),
                            a = r && r.target && r.target.src;
                        i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                    }
                }), "chunk-" + t, t)
            } else e[t] = 0
        }, s.O.j = t => 0 === e[t];
        var t = (t, r) => {
                var n, o, [a, i, d] = r,
                    c = 0;
                for (n in i) s.o(i, n) && (s.m[n] = i[n]);
                if (d) var l = d(s);
                for (t && t(r); c < a.length; c++) o = a[c], s.o(e, o) && e[o] && e[o][0](), e[a[c]] = 0;
                return s.O(l)
            },
            r = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })()
})();
//# sourceMappingURL=sourcemaps/74e40fa1bb677336014c.runtime.js.map