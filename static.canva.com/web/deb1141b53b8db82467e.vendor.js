/*! For license information please see deb1141b53b8db82467e.vendor.js.LICENSE.txt */
(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([
    [39], {
        7495: t => {
            var e;
            window, e = function() {
                return function(t) {
                    var e = {};

                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var o = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, r) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
                        })
                    }, n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var o in t) n.d(r, o, function(e) {
                                return t[e]
                            }.bind(null, o));
                        return r
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return n.d(e, "a", e), e
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.p = "", n(n.s = 105)
                }([function(t, e, n) {
                    "use strict";
                    n.d(e, "c", (function() {
                        return w
                    })), n.d(e, "b", (function() {
                        return A
                    })), n.d(e, "d", (function() {
                        return S
                    })), n.d(e, "a", (function() {
                        return E
                    }));
                    var r = n(1),
                        o = n.n(r),
                        i = n(2),
                        a = n(7),
                        u = n.n(a),
                        l = n(5),
                        s = n(3),
                        c = n(10),
                        f = n(6),
                        p = n(26),
                        h = n(12),
                        d = n(20);

                    function y(t) {
                        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function v(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function b(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
                            if (null != n) {
                                var r, o, i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                                } catch (l) {
                                    u = !0, o = l
                                } finally {
                                    try {
                                        a || null == n.return || n.return()
                                    } finally {
                                        if (u) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return m(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function m(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function g(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function O(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var N = Object(h.a)("quill"),
                        w = new i.Registry;
                    i.ParentBlot.uiClass = "ql-ui";
                    var E = function() {
                        function t(e) {
                            var n = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (g(this, t), this.options = A(e, r), this.container = this.options.container, null == this.container) return N.error("Invalid Quill container", e);
                            this.options.debug && t.debug(this.options.debug);
                            var o = this.container.innerHTML.trim();
                            this.container.classList.add("ql-container"), this.container.innerHTML = "", p.a.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new s.a;
                            var a = this.options.registry.query(i.ScrollBlot.blotName);
                            this.scroll = new a(this.options.registry, this.root, {
                                emitter: this.emitter
                            }), this.editor = new l.a(this.scroll), this.selection = new f.b(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.init(), this.emitter.on(s.a.events.EDITOR_CHANGE, (function(t) {
                                t === s.a.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
                            })), this.emitter.on(s.a.events.SCROLL_UPDATE, (function(t, e, r) {
                                var o = n.selection.lastRange,
                                    i = b(n.selection.getRange(), 1)[0],
                                    a = o && i ? {
                                        oldRange: o,
                                        newRange: i
                                    } : void 0;
                                k.call(n, (function() {
                                    return n.editor.update(null, e, a)
                                }), t), null != r && Object.entries(r).forEach((function(t) {
                                    var e = b(t, 2),
                                        r = e[0],
                                        o = e[1];
                                    return n.selection.format(r, o)
                                }))
                            }));
                            var u = this.clipboard.convert({
                                html: "".concat(o, "<p><br></p>"),
                                text: "\n"
                            });
                            this.setContents(u), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1
                        }
                        var e, n, r;
                        return e = t, r = [{
                            key: "debug",
                            value: function(t) {
                                !0 === t && (t = "log"), h.a.level(t)
                            }
                        }, {
                            key: "find",
                            value: function(t) {
                                return p.a.get(t) || w.find(t)
                            }
                        }, {
                            key: "import",
                            value: function(t) {
                                return null == this.imports[t] && N.error("Cannot import ".concat(t, ". Are you sure it was registered?")), this.imports[t]
                            }
                        }, {
                            key: "register",
                            value: function(t, e) {
                                var n = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if ("string" != typeof t) {
                                    var o = t.attrName || t.blotName;
                                    "string" == typeof o ? this.register("formats/".concat(o), t, e) : Object.keys(t).forEach((function(r) {
                                        n.register(r, t[r], e)
                                    }))
                                } else null == this.imports[t] || r || N.warn("Overwriting ".concat(t, " with"), e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName && w.register(e), "function" == typeof e.register && e.register(w)
                            }
                        }], (n = [{
                            key: "addContainer",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if ("string" == typeof t) {
                                    var n = t;
                                    (t = document.createElement("div")).classList.add(n)
                                }
                                return this.container.insertBefore(t, e), t
                            }
                        }, {
                            key: "blur",
                            value: function() {
                                this.selection.setRange(null)
                            }
                        }, {
                            key: "deleteText",
                            value: function(t, e, n) {
                                var r = this,
                                    o = b(S(t, e, n), 4);
                                return t = o[0], e = o[1], n = o[3], k.call(this, (function() {
                                    return r.editor.deleteText(t, e)
                                }), n, t, -1 * e)
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                this.enable(!1)
                            }
                        }, {
                            key: "editReadOnly",
                            value: function(t) {
                                this.allowReadOnlyEdits = !0;
                                var e = t();
                                return this.allowReadOnlyEdits = !1, e
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
                            }
                        }, {
                            key: "focus",
                            value: function() {
                                var t = this.scrollingContainer.scrollTop;
                                this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
                            }
                        }, {
                            key: "format",
                            value: function(t, e) {
                                var n = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a.sources.API;
                                return k.call(this, (function() {
                                    var r = n.getSelection(!0),
                                        a = new o.a;
                                    if (null == r) return a;
                                    if (n.scroll.query(t, i.Scope.BLOCK)) a = n.editor.formatLine(r.index, r.length, v({}, t, e));
                                    else {
                                        if (0 === r.length) return n.selection.format(t, e), a;
                                        a = n.editor.formatText(r.index, r.length, v({}, t, e))
                                    }
                                    return n.setSelection(r, s.a.sources.SILENT), a
                                }), r)
                            }
                        }, {
                            key: "formatLine",
                            value: function(t, e, n, r, o) {
                                var i, a = this,
                                    u = b(S(t, e, n, r, o), 4);
                                return t = u[0], e = u[1], i = u[2], o = u[3], k.call(this, (function() {
                                    return a.editor.formatLine(t, e, i)
                                }), o, t, 0)
                            }
                        }, {
                            key: "formatText",
                            value: function(t, e, n, r, o) {
                                var i, a = this,
                                    u = b(S(t, e, n, r, o), 4);
                                return t = u[0], e = u[1], i = u[2], o = u[3], k.call(this, (function() {
                                    return a.editor.formatText(t, e, i)
                                }), o, t, 0)
                            }
                        }, {
                            key: "getBounds",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                e = "number" == typeof t ? this.selection.getBounds(t, n) : this.selection.getBounds(t.index, t.length);
                                var r = this.container.getBoundingClientRect();
                                return {
                                    bottom: e.bottom - r.top,
                                    height: e.height,
                                    left: e.left - r.left,
                                    right: e.right - r.left,
                                    top: e.top - r.top,
                                    width: e.width
                                }
                            }
                        }, {
                            key: "getContents",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                    n = S(t, e),
                                    r = b(n, 2);
                                return t = r[0], e = r[1], this.editor.getContents(t, e)
                            }
                        }, {
                            key: "getFormat",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
                            }
                        }, {
                            key: "getIndex",
                            value: function(t) {
                                return t.offset(this.scroll)
                            }
                        }, {
                            key: "getLength",
                            value: function() {
                                return this.scroll.length()
                            }
                        }, {
                            key: "getLeaf",
                            value: function(t) {
                                return this.scroll.leaf(t)
                            }
                        }, {
                            key: "getLine",
                            value: function(t) {
                                return this.scroll.line(t)
                            }
                        }, {
                            key: "getLines",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
                            }
                        }, {
                            key: "getModule",
                            value: function(t) {
                                return this.theme.modules[t]
                            }
                        }, {
                            key: "getSelection",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return t && this.focus(), this.update(), this.selection.getRange()[0]
                            }
                        }, {
                            key: "getSemanticHTML",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                    n = S(t, e),
                                    r = b(n, 2);
                                return t = r[0], e = r[1], this.editor.getHTML(t, e)
                            }
                        }, {
                            key: "getText",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                    n = S(t, e),
                                    r = b(n, 2);
                                return t = r[0], e = r[1], this.editor.getText(t, e)
                            }
                        }, {
                            key: "hasFocus",
                            value: function() {
                                return this.selection.hasFocus()
                            }
                        }, {
                            key: "insertEmbed",
                            value: function(e, n, r) {
                                var o = this,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
                                return k.call(this, (function() {
                                    return o.editor.insertEmbed(e, n, r)
                                }), i, e)
                            }
                        }, {
                            key: "insertText",
                            value: function(t, e, n, r, o) {
                                var i, a = this,
                                    u = b(S(t, 0, n, r, o), 4);
                                return t = u[0], i = u[2], o = u[3], k.call(this, (function() {
                                    return a.editor.insertText(t, e, i)
                                }), o, t, e.length)
                            }
                        }, {
                            key: "isEnabled",
                            value: function() {
                                return this.scroll.isEnabled()
                            }
                        }, {
                            key: "off",
                            value: function() {
                                var t;
                                return (t = this.emitter).off.apply(t, arguments)
                            }
                        }, {
                            key: "on",
                            value: function() {
                                var t;
                                return (t = this.emitter).on.apply(t, arguments)
                            }
                        }, {
                            key: "once",
                            value: function() {
                                var t;
                                return (t = this.emitter).once.apply(t, arguments)
                            }
                        }, {
                            key: "removeFormat",
                            value: function(t, e, n) {
                                var r = this,
                                    o = b(S(t, e, n), 4);
                                return t = o[0], e = o[1], n = o[3], k.call(this, (function() {
                                    return r.editor.removeFormat(t, e)
                                }), n, t)
                            }
                        }, {
                            key: "scrollIntoView",
                            value: function() {
                                this.selection.scrollIntoView(this.scrollingContainer)
                            }
                        }, {
                            key: "setContents",
                            value: function(t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.sources.API;
                                return k.call(this, (function() {
                                    t = new o.a(t);
                                    var n = e.getLength(),
                                        r = e.editor.deleteText(0, n),
                                        i = e.editor.applyDelta(t),
                                        a = i.ops[i.ops.length - 1];
                                    return null != a && "string" == typeof a.insert && "\n" === a.insert[a.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), i.delete(1)), r.compose(i)
                                }), n)
                            }
                        }, {
                            key: "setSelection",
                            value: function(e, n, r) {
                                if (null == e) this.selection.setRange(null, n || t.sources.API);
                                else {
                                    var o = b(S(e, n, r), 4);
                                    e = o[0], n = o[1], r = o[3], this.selection.setRange(new f.a(Math.max(0, e), n), r), r !== s.a.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
                                }
                            }
                        }, {
                            key: "setText",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.sources.API,
                                    n = (new o.a).insert(t);
                                return this.setContents(n, e)
                            }
                        }, {
                            key: "update",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a.sources.USER,
                                    e = this.scroll.update(t);
                                return this.selection.update(t), e
                            }
                        }, {
                            key: "updateContents",
                            value: function(t) {
                                var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.sources.API;
                                return k.call(this, (function() {
                                    return t = new o.a(t), e.editor.applyDelta(t, n)
                                }), n, !0)
                            }
                        }]) && O(e.prototype, n), r && O(e, r), t
                    }();

                    function A(t, e) {
                        if ((e = u()(!0, {
                                container: t,
                                modules: {
                                    clipboard: !0,
                                    keyboard: !0,
                                    history: !0,
                                    uploader: !0
                                }
                            }, e)).theme && e.theme !== E.DEFAULTS.theme) {
                            if (e.theme = E.import("themes/".concat(e.theme)), null == e.theme) throw new Error("Invalid theme ".concat(e.theme, ". Did you register it?"))
                        } else e.theme = d.a;
                        var n = u()(!0, {}, e.theme.DEFAULTS);
                        [n, e].forEach((function(t) {
                            t.modules = t.modules || {}, Object.keys(t.modules).forEach((function(e) {
                                !0 === t.modules[e] && (t.modules[e] = {})
                            }))
                        }));
                        var r = Object.keys(n.modules).concat(Object.keys(e.modules)).reduce((function(t, e) {
                            var n = E.import("modules/".concat(e));
                            return null == n ? N.error("Cannot load ".concat(e, " module. Are you sure you registered it?")) : t[e] = n.DEFAULTS || {}, t
                        }), {});
                        return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                            container: e.modules.toolbar
                        }), e = u()(!0, {}, E.DEFAULTS, {
                            modules: r
                        }, n, e), ["bounds", "container", "scrollingContainer"].forEach((function(t) {
                            "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        })), e.modules = Object.keys(e.modules).reduce((function(t, n) {
                            return e.modules[n] && (t[n] = e.modules[n]), t
                        }), {}), e
                    }

                    function k(t, e, n, r) {
                        if (!this.isEnabled() && e === s.a.sources.USER && !this.allowReadOnlyEdits) return new o.a;
                        var i = null == n ? null : this.getSelection(),
                            a = this.editor.delta,
                            u = t();
                        if (null != i && (!0 === n && (n = i.index), null == r ? i = x(i, u, e) : 0 !== r && (i = x(i, n, r, e)), this.setSelection(i, s.a.sources.SILENT)), u.length() > 0) {
                            var l, c, f = [s.a.events.TEXT_CHANGE, u, a, e];
                            (l = this.emitter).emit.apply(l, [s.a.events.EDITOR_CHANGE].concat(f)), e !== s.a.sources.SILENT && (c = this.emitter).emit.apply(c, f)
                        }
                        return u
                    }

                    function S(t, e, n, r, o) {
                        var i = {};
                        return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r = n, n = e, e = 0), "object" === y(n) ? (i = n, o = r) : "string" == typeof n && (null != r ? i[n] = r : o = n), [t, e, i, o = o || s.a.sources.API]
                    }

                    function x(t, e, n, r) {
                        if (null == t) return null;
                        var i, a;
                        if (e instanceof o.a) {
                            var u = b([t.index, t.index + t.length].map((function(t) {
                                return e.transformPosition(t, r !== s.a.sources.USER)
                            })), 2);
                            i = u[0], a = u[1]
                        } else {
                            var l = b([t.index, t.index + t.length].map((function(t) {
                                return t < e || t === e && r === s.a.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
                            })), 2);
                            i = l[0], a = l[1]
                        }
                        return new f.a(i, a - i)
                    }
                    E.DEFAULTS = {
                        bounds: null,
                        modules: {},
                        placeholder: "",
                        readOnly: !1,
                        registry: w,
                        scrollingContainer: null,
                        theme: "default"
                    }, E.events = s.a.events, E.sources = s.a.sources, E.version = "2.0.0-dev.29", E.imports = {
                        delta: o.a,
                        parchment: i,
                        "core/module": c.a,
                        "core/theme": d.a
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        },
                        o = r(n(18)),
                        i = r(n(7)),
                        a = r(n(70)),
                        u = r(n(71)),
                        l = r(n(51)),
                        s = String.fromCharCode(0),
                        c = function() {
                            function t(t) {
                                Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
                            }
                            return t.prototype.insert = function(t, e) {
                                var n = {};
                                return "string" == typeof t && 0 === t.length ? this : (n.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n))
                            }, t.prototype.delete = function(t) {
                                return t <= 0 ? this : this.push({
                                    delete: t
                                })
                            }, t.prototype.retain = function(t, e) {
                                if (t <= 0) return this;
                                var n = {
                                    retain: t
                                };
                                return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n)
                            }, t.prototype.push = function(t) {
                                var e = this.ops.length,
                                    n = this.ops[e - 1];
                                if (t = i.default(!0, {}, t), "object" == typeof n) {
                                    if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = {
                                        delete: n.delete + t.delete
                                    }, this;
                                    if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this;
                                    if (o.default(t.attributes, n.attributes)) {
                                        if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = {
                                            insert: n.insert + t.insert
                                        }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
                                        if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = {
                                            retain: n.retain + t.retain
                                        }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
                                    }
                                }
                                return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
                            }, t.prototype.chop = function() {
                                var t = this.ops[this.ops.length - 1];
                                return t && t.retain && !t.attributes && this.ops.pop(), this
                            }, t.prototype.filter = function(t) {
                                return this.ops.filter(t)
                            }, t.prototype.forEach = function(t) {
                                this.ops.forEach(t)
                            }, t.prototype.map = function(t) {
                                return this.ops.map(t)
                            }, t.prototype.partition = function(t) {
                                var e = [],
                                    n = [];
                                return this.forEach((function(r) {
                                    (t(r) ? e : n).push(r)
                                })), [e, n]
                            }, t.prototype.reduce = function(t, e) {
                                return this.ops.reduce(t, e)
                            }, t.prototype.changeLength = function() {
                                return this.reduce((function(t, e) {
                                    return e.insert ? t + l.default.length(e) : e.delete ? t - e.delete : t
                                }), 0)
                            }, t.prototype.length = function() {
                                return this.reduce((function(t, e) {
                                    return t + l.default.length(e)
                                }), 0)
                            }, t.prototype.slice = function(e, n) {
                                void 0 === e && (e = 0), void 0 === n && (n = 1 / 0);
                                for (var r = [], o = l.default.iterator(this.ops), i = 0; i < n && o.hasNext();) {
                                    var a = void 0;
                                    i < e ? a = o.next(e - i) : (a = o.next(n - i), r.push(a)), i += l.default.length(a)
                                }
                                return new t(r)
                            }, t.prototype.compose = function(e) {
                                var n = l.default.iterator(this.ops),
                                    r = l.default.iterator(e.ops),
                                    i = [],
                                    a = r.peek();
                                if (null != a && "number" == typeof a.retain && null == a.attributes) {
                                    for (var s = a.retain;
                                        "insert" === n.peekType() && n.peekLength() <= s;) s -= n.peekLength(), i.push(n.next());
                                    a.retain - s > 0 && r.next(a.retain - s)
                                }
                                for (var c = new t(i); n.hasNext() || r.hasNext();)
                                    if ("insert" === r.peekType()) c.push(r.next());
                                    else if ("delete" === n.peekType()) c.push(n.next());
                                else {
                                    var f = Math.min(n.peekLength(), r.peekLength()),
                                        p = n.next(f),
                                        h = r.next(f);
                                    if ("number" == typeof h.retain) {
                                        var d = {};
                                        "number" == typeof p.retain ? d.retain = f : d.insert = p.insert;
                                        var y = u.default.compose(p.attributes, h.attributes, "number" == typeof p.retain);
                                        if (y && (d.attributes = y), c.push(d), !r.hasNext() && o.default(c.ops[c.ops.length - 1], d)) {
                                            var v = new t(n.rest());
                                            return c.concat(v).chop()
                                        }
                                    } else "number" == typeof h.delete && "number" == typeof p.retain && c.push(h)
                                }
                                return c.chop()
                            }, t.prototype.concat = function(e) {
                                var n = new t(this.ops.slice());
                                return e.ops.length > 0 && (n.push(e.ops[0]), n.ops = n.ops.concat(e.ops.slice(1))), n
                            }, t.prototype.diff = function(e, n) {
                                if (this.ops === e.ops) return new t;
                                var r = [this, e].map((function(t) {
                                        return t.map((function(n) {
                                            if (null != n.insert) return "string" == typeof n.insert ? n.insert : s;
                                            throw new Error("diff() called " + (t === e ? "on" : "with") + " non-document")
                                        })).join("")
                                    })),
                                    i = new t,
                                    c = a.default(r[0], r[1], n),
                                    f = l.default.iterator(this.ops),
                                    p = l.default.iterator(e.ops);
                                return c.forEach((function(t) {
                                    for (var e = t[1].length; e > 0;) {
                                        var n = 0;
                                        switch (t[0]) {
                                            case a.default.INSERT:
                                                n = Math.min(p.peekLength(), e), i.push(p.next(n));
                                                break;
                                            case a.default.DELETE:
                                                n = Math.min(e, f.peekLength()), f.next(n), i.delete(n);
                                                break;
                                            case a.default.EQUAL:
                                                n = Math.min(f.peekLength(), p.peekLength(), e);
                                                var r = f.next(n),
                                                    l = p.next(n);
                                                o.default(r.insert, l.insert) ? i.retain(n, u.default.diff(r.attributes, l.attributes)) : i.push(l).delete(n)
                                        }
                                        e -= n
                                    }
                                })), i.chop()
                            }, t.prototype.eachLine = function(e, n) {
                                void 0 === n && (n = "\n");
                                for (var r = l.default.iterator(this.ops), o = new t, i = 0; r.hasNext();) {
                                    if ("insert" !== r.peekType()) return;
                                    var a = r.peek(),
                                        u = l.default.length(a) - r.peekLength(),
                                        s = "string" == typeof a.insert ? a.insert.indexOf(n, u) - u : -1;
                                    if (s < 0) o.push(r.next());
                                    else if (s > 0) o.push(r.next(s));
                                    else {
                                        if (!1 === e(o, r.next(1).attributes || {}, i)) return;
                                        i += 1, o = new t
                                    }
                                }
                                o.length() > 0 && e(o, {}, i)
                            }, t.prototype.invert = function(e) {
                                var n = new t;
                                return this.reduce((function(t, r) {
                                    if (r.insert) n.delete(l.default.length(r));
                                    else {
                                        if (r.retain && null == r.attributes) return n.retain(r.retain), t + r.retain;
                                        if (r.delete || r.retain && r.attributes) {
                                            var o = r.delete || r.retain;
                                            return e.slice(t, t + o).forEach((function(t) {
                                                r.delete ? n.push(t) : r.retain && r.attributes && n.retain(l.default.length(t), u.default.invert(r.attributes, t.attributes))
                                            })), t + o
                                        }
                                    }
                                    return t
                                }), 0), n.chop()
                            }, t.prototype.transform = function(e, n) {
                                if (void 0 === n && (n = !1), n = !!n, "number" == typeof e) return this.transformPosition(e, n);
                                for (var r = e, o = l.default.iterator(this.ops), i = l.default.iterator(r.ops), a = new t; o.hasNext() || i.hasNext();)
                                    if ("insert" !== o.peekType() || !n && "insert" === i.peekType())
                                        if ("insert" === i.peekType()) a.push(i.next());
                                        else {
                                            var s = Math.min(o.peekLength(), i.peekLength()),
                                                c = o.next(s),
                                                f = i.next(s);
                                            if (c.delete) continue;
                                            f.delete ? a.push(f) : a.retain(s, u.default.transform(c.attributes, f.attributes, n))
                                        }
                                else a.retain(l.default.length(o.next()));
                                return a.chop()
                            }, t.prototype.transformPosition = function(t, e) {
                                void 0 === e && (e = !1), e = !!e;
                                for (var n = l.default.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
                                    var o = n.peekLength(),
                                        i = n.peekType();
                                    n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r)
                                }
                                return t
                            }, t.Op = l.default, t.AttributeMap = u.default, t
                        }();
                    t.exports = c
                }, function(t, e, n) {
                    "use strict";
                    var r;
                    n.r(e), n.d(e, "ParentBlot", (function() {
                            return h
                        })), n.d(e, "ContainerBlot", (function() {
                            return y
                        })), n.d(e, "LeafBlot", (function() {
                            return b
                        })), n.d(e, "EmbedBlot", (function() {
                            return T
                        })), n.d(e, "ScrollBlot", (function() {
                            return L
                        })), n.d(e, "BlockBlot", (function() {
                            return _
                        })), n.d(e, "InlineBlot", (function() {
                            return x
                        })), n.d(e, "TextBlot", (function() {
                            return I
                        })), n.d(e, "Attributor", (function() {
                            return m
                        })), n.d(e, "ClassAttributor", (function() {
                            return N
                        })), n.d(e, "StyleAttributor", (function() {
                            return A
                        })), n.d(e, "AttributorStore", (function() {
                            return k
                        })), n.d(e, "Registry", (function() {
                            return s
                        })), n.d(e, "Scope", (function() {
                            return i
                        })),
                        function(t) {
                            t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
                        }(r || (r = {}));
                    var o, i = r,
                        a = function() {
                            function t() {
                                this.head = null, this.tail = null, this.length = 0
                            }
                            return t.prototype.append = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1))
                            }, t.prototype.at = function(t) {
                                for (var e = this.iterator(), n = e(); n && t > 0;) t -= 1, n = e();
                                return n
                            }, t.prototype.contains = function(t) {
                                for (var e = this.iterator(), n = e(); n;) {
                                    if (n === t) return !0;
                                    n = e()
                                }
                                return !1
                            }, t.prototype.indexOf = function(t) {
                                for (var e = this.iterator(), n = e(), r = 0; n;) {
                                    if (n === t) return r;
                                    r += 1, n = e()
                                }
                                return -1
                            }, t.prototype.insertBefore = function(t, e) {
                                null != t && t !== e && (this.remove(t), t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1)
                            }, t.prototype.offset = function(t) {
                                for (var e = 0, n = this.head; null != n;) {
                                    if (n === t) return e;
                                    e += n.length(), n = n.next
                                }
                                return -1
                            }, t.prototype.remove = function(t) {
                                this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
                            }, t.prototype.iterator = function(t) {
                                return void 0 === t && (t = this.head),
                                    function() {
                                        var e = t;
                                        return null != t && (t = t.next), e
                                    }
                            }, t.prototype.find = function(t, e) {
                                void 0 === e && (e = !1);
                                for (var n = this.iterator(), r = n(); r;) {
                                    var o = r.length();
                                    if (t < o || e && t === o && (null == r.next || 0 !== r.next.length())) return [r, t];
                                    t -= o, r = n()
                                }
                                return [null, 0]
                            }, t.prototype.forEach = function(t) {
                                for (var e = this.iterator(), n = e(); n;) t(n), n = e()
                            }, t.prototype.forEachAt = function(t, e, n) {
                                if (!(e <= 0))
                                    for (var r = this.find(t), o = r[0], i = t - r[1], a = this.iterator(o), u = a(); u && i < t + e;) {
                                        var l = u.length();
                                        t > i ? n(u, t - i, Math.min(e, i + l - t)) : n(u, 0, Math.min(l, t + e - i)), i += l, u = a()
                                    }
                            }, t.prototype.map = function(t) {
                                return this.reduce((function(e, n) {
                                    return e.push(t(n)), e
                                }), [])
                            }, t.prototype.reduce = function(t, e) {
                                for (var n = this.iterator(), r = n(); r;) e = t(e, r), r = n();
                                return e
                            }, t
                        }(),
                        u = (o = function(t, e) {
                            return (o = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                })(t, e)
                        }, function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                        }),
                        l = function(t) {
                            function e(e) {
                                var n = this;
                                return e = "[Parchment] " + e, (n = t.call(this, e) || this).message = e, n.name = n.constructor.name, n
                            }
                            return u(e, t), e
                        }(Error),
                        s = function() {
                            function t() {
                                this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {}
                            }
                            return t.find = function(t, e) {
                                return void 0 === e && (e = !1), null == t ? null : this.blots.has(t) ? this.blots.get(t) || null : e ? this.find(t.parentNode, e) : null
                            }, t.prototype.create = function(e, n, r) {
                                var o = this.query(n);
                                if (null == o) throw new l("Unable to create " + n + " blot");
                                var i = o,
                                    a = n instanceof Node || n.nodeType === Node.TEXT_NODE ? n : i.create(r),
                                    u = new i(e, a, r);
                                return t.blots.set(u.domNode, u), u
                            }, t.prototype.find = function(e, n) {
                                return void 0 === n && (n = !1), t.find(e, n)
                            }, t.prototype.query = function(t, e) {
                                var n, r = this;
                                return void 0 === e && (e = i.ANY), "string" == typeof t ? n = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? n = this.types.text : "number" == typeof t ? t & i.LEVEL & i.BLOCK ? n = this.types.block : t & i.LEVEL & i.INLINE && (n = this.types.inline) : t instanceof HTMLElement && ((t.getAttribute("class") || "").split(/\s+/).some((function(t) {
                                    return !!(n = r.classes[t])
                                })), n = n || this.tags[t.tagName]), null == n ? null : e & i.LEVEL & n.scope && e & i.TYPE & n.scope ? n : null
                            }, t.prototype.register = function() {
                                for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                if (e.length > 1) return e.map((function(e) {
                                    return t.register(e)
                                }));
                                var r = e[0];
                                if ("string" != typeof r.blotName && "string" != typeof r.attrName) throw new l("Invalid definition");
                                if ("abstract" === r.blotName) throw new l("Cannot register abstract class");
                                if (this.types[r.blotName || r.attrName] = r, "string" == typeof r.keyName) this.attributes[r.keyName] = r;
                                else if (null != r.className && (this.classes[r.className] = r), null != r.tagName) {
                                    Array.isArray(r.tagName) ? r.tagName = r.tagName.map((function(t) {
                                        return t.toUpperCase()
                                    })) : r.tagName = r.tagName.toUpperCase();
                                    var o = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
                                    o.forEach((function(e) {
                                        null != t.tags[e] && null != r.className || (t.tags[e] = r)
                                    }))
                                }
                                return r
                            }, t.blots = new WeakMap, t
                        }(),
                        c = function() {
                            function t(t, e) {
                                this.scroll = t, this.domNode = e, s.blots.set(e, this), this.prev = null, this.next = null
                            }
                            return t.create = function(t) {
                                if (null == this.tagName) throw new l("Blot definition missing tagName");
                                var e;
                                return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t, 10).toString() === t && (t = parseInt(t, 10))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
                            }, Object.defineProperty(t.prototype, "statics", {
                                get: function() {
                                    return this.constructor
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.attach = function() {}, t.prototype.clone = function() {
                                var t = this.domNode.cloneNode(!1);
                                return this.scroll.create(t)
                            }, t.prototype.detach = function() {
                                null != this.parent && this.parent.removeChild(this), s.blots.delete(this.domNode)
                            }, t.prototype.deleteAt = function(t, e) {
                                this.isolate(t, e).remove()
                            }, t.prototype.formatAt = function(t, e, n, r) {
                                var o = this.isolate(t, e);
                                if (null != this.scroll.query(n, i.BLOT) && r) o.wrap(n, r);
                                else if (null != this.scroll.query(n, i.ATTRIBUTE)) {
                                    var a = this.scroll.create(this.statics.scope);
                                    o.wrap(a), a.format(n, r)
                                }
                            }, t.prototype.insertAt = function(t, e, n) {
                                var r = null == n ? this.scroll.create("text", e) : this.scroll.create(e, n),
                                    o = this.split(t);
                                this.parent.insertBefore(r, o || void 0)
                            }, t.prototype.isolate = function(t, e) {
                                var n = this.split(t);
                                if (null == n) throw new Error("Attempt to isolate at end");
                                return n.split(e), n
                            }, t.prototype.length = function() {
                                return 1
                            }, t.prototype.offset = function(t) {
                                return void 0 === t && (t = this.parent), null == this.parent || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                            }, t.prototype.optimize = function(t) {
                                !this.statics.requiredContainer || this.parent instanceof this.statics.requiredContainer || this.wrap(this.statics.requiredContainer.blotName)
                            }, t.prototype.remove = function() {
                                null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
                            }, t.prototype.replaceWith = function(t, e) {
                                var n = "string" == typeof t ? this.scroll.create(t, e) : t;
                                return null != this.parent && (this.parent.insertBefore(n, this.next || void 0), this.remove()), n
                            }, t.prototype.split = function(t, e) {
                                return 0 === t ? this : this.next
                            }, t.prototype.update = function(t, e) {}, t.prototype.wrap = function(t, e) {
                                var n = "string" == typeof t ? this.scroll.create(t, e) : t;
                                if (null != this.parent && this.parent.insertBefore(n, this.next || void 0), "function" != typeof n.appendChild) throw new l("Cannot wrap " + t);
                                return n.appendChild(this), n
                            }, t.blotName = "abstract", t
                        }(),
                        f = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }();

                    function p(t, e) {
                        var n = e.find(t);
                        if (null == n) try {
                            n = e.create(t)
                        } catch (r) {
                            n = e.create(i.INLINE), Array.from(t.childNodes).forEach((function(t) {
                                n.domNode.appendChild(t)
                            })), t.parentNode && t.parentNode.replaceChild(n.domNode, t), n.attach()
                        }
                        return n
                    }
                    var h = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.uiNode = null, r.build(), r
                            }
                            return f(e, t), e.prototype.appendChild = function(t) {
                                this.insertBefore(t)
                            }, e.prototype.attach = function() {
                                t.prototype.attach.call(this), this.children.forEach((function(t) {
                                    t.attach()
                                }))
                            }, e.prototype.attachUI = function(t) {
                                null != this.uiNode && this.uiNode.remove(), this.uiNode = t, e.uiClass && this.uiNode.classList.add(e.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild)
                            }, e.prototype.build = function() {
                                var t = this;
                                this.children = new a, Array.from(this.domNode.childNodes).filter((function(e) {
                                    return e !== t.uiNode
                                })).reverse().forEach((function(e) {
                                    try {
                                        var n = p(e, t.scroll);
                                        t.insertBefore(n, t.children.head || void 0)
                                    } catch (r) {
                                        if (r instanceof l) return;
                                        throw r
                                    }
                                }))
                            }, e.prototype.deleteAt = function(t, e) {
                                if (0 === t && e === this.length()) return this.remove();
                                this.children.forEachAt(t, e, (function(t, e, n) {
                                    t.deleteAt(e, n)
                                }))
                            }, e.prototype.descendant = function(t, n) {
                                void 0 === n && (n = 0);
                                var r = this.children.find(n),
                                    o = r[0],
                                    i = r[1];
                                return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
                            }, e.prototype.descendants = function(t, n, r) {
                                void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
                                var o = [],
                                    i = r;
                                return this.children.forEachAt(n, r, (function(n, r, a) {
                                    (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= a
                                })), o
                            }, e.prototype.detach = function() {
                                this.children.forEach((function(t) {
                                    t.detach()
                                })), t.prototype.detach.call(this)
                            }, e.prototype.enforceAllowedChildren = function() {
                                var t = this,
                                    n = !1;
                                this.children.forEach((function(r) {
                                    n || t.statics.allowedChildren.some((function(t) {
                                        return r instanceof t
                                    })) || (r.statics.scope === i.BLOCK_BLOT ? (null != r.next && t.splitAfter(r), null != r.prev && t.splitAfter(r.prev), r.parent.unwrap(), n = !0) : r instanceof e ? r.unwrap() : r.remove())
                                }))
                            }, e.prototype.formatAt = function(t, e, n, r) {
                                this.children.forEachAt(t, e, (function(t, e, o) {
                                    t.formatAt(e, o, n, r)
                                }))
                            }, e.prototype.insertAt = function(t, e, n) {
                                var r = this.children.find(t),
                                    o = r[0],
                                    i = r[1];
                                if (o) o.insertAt(i, e, n);
                                else {
                                    var a = null == n ? this.scroll.create("text", e) : this.scroll.create(e, n);
                                    this.appendChild(a)
                                }
                            }, e.prototype.insertBefore = function(t, e) {
                                if (t !== e) {
                                    null != t.parent && t.parent.children.remove(t);
                                    var n = null;
                                    this.children.insertBefore(t, e || null), null != e && (n = e.domNode), t.domNode.parentNode === this.domNode && t.domNode.nextSibling === n || this.domNode.insertBefore(t.domNode, n), t.parent = this, t.attach()
                                }
                            }, e.prototype.length = function() {
                                return this.children.reduce((function(t, e) {
                                    return t + e.length()
                                }), 0)
                            }, e.prototype.moveChildren = function(t, e) {
                                this.children.forEach((function(n) {
                                    t.insertBefore(n, e)
                                }))
                            }, e.prototype.optimize = function(e) {
                                if (t.prototype.optimize.call(this, e), this.enforceAllowedChildren(), null != this.uiNode && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), 0 === this.children.length)
                                    if (null != this.statics.defaultChild) {
                                        var n = this.scroll.create(this.statics.defaultChild.blotName);
                                        this.appendChild(n)
                                    } else this.remove()
                            }, e.prototype.path = function(t, n) {
                                void 0 === n && (n = !1);
                                var r = this.children.find(t, n),
                                    o = r[0],
                                    i = r[1],
                                    a = [
                                        [this, t]
                                    ];
                                return o instanceof e ? a.concat(o.path(i, n)) : (null != o && a.push([o, i]), a)
                            }, e.prototype.removeChild = function(t) {
                                this.children.remove(t)
                            }, e.prototype.replaceWith = function(n, r) {
                                var o = "string" == typeof n ? this.scroll.create(n, r) : n;
                                return o instanceof e && this.moveChildren(o), t.prototype.replaceWith.call(this, o)
                            }, e.prototype.split = function(t, e) {
                                if (void 0 === e && (e = !1), !e) {
                                    if (0 === t) return this;
                                    if (t === this.length()) return this.next
                                }
                                var n = this.clone();
                                return this.parent && this.parent.insertBefore(n, this.next || void 0), this.children.forEachAt(t, this.length(), (function(t, r, o) {
                                    var i = t.split(r, e);
                                    null != i && n.appendChild(i)
                                })), n
                            }, e.prototype.splitAfter = function(t) {
                                for (var e = this.clone(); null != t.next;) e.appendChild(t.next);
                                return this.parent && this.parent.insertBefore(e, this.next || void 0), e
                            }, e.prototype.unwrap = function() {
                                this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove()
                            }, e.prototype.update = function(t, e) {
                                var n = this,
                                    r = [],
                                    o = [];
                                t.forEach((function(t) {
                                    t.target === n.domNode && "childList" === t.type && (r.push.apply(r, t.addedNodes), o.push.apply(o, t.removedNodes))
                                })), o.forEach((function(t) {
                                    if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                                        var e = n.scroll.find(t);
                                        null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
                                    }
                                })), r.filter((function(t) {
                                    return t.parentNode === n.domNode || t === n.uiNode
                                })).sort((function(t, e) {
                                    return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                                })).forEach((function(t) {
                                    var e = null;
                                    null != t.nextSibling && (e = n.scroll.find(t.nextSibling));
                                    var r = p(t, n.scroll);
                                    r.next === e && null != r.next || (null != r.parent && r.parent.removeChild(n), n.insertBefore(r, e || void 0))
                                })), this.enforceAllowedChildren()
                            }, e.uiClass = "", e
                        }(c),
                        d = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        y = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return d(e, t), e.prototype.checkMerge = function() {
                                return null !== this.next && this.next.statics.blotName === this.statics.blotName
                            }, e.prototype.deleteAt = function(e, n) {
                                t.prototype.deleteAt.call(this, e, n), this.enforceAllowedChildren()
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                t.prototype.formatAt.call(this, e, n, r, o), this.enforceAllowedChildren()
                            }, e.prototype.insertAt = function(e, n, r) {
                                t.prototype.insertAt.call(this, e, n, r), this.enforceAllowedChildren()
                            }, e.prototype.optimize = function(e) {
                                t.prototype.optimize.call(this, e), this.children.length > 0 && null != this.next && this.checkMerge() && (this.next.moveChildren(this), this.next.remove())
                            }, e.blotName = "container", e.scope = i.BLOCK_BLOT, e
                        }(h),
                        v = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        b = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return v(e, t), e.value = function(t) {
                                return !0
                            }, e.prototype.index = function(t, e) {
                                return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
                            }, e.prototype.position = function(t, e) {
                                var n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
                                return t > 0 && (n += 1), [this.parent.domNode, n]
                            }, e.prototype.value = function() {
                                var t;
                                return (t = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0, t
                            }, e.scope = i.INLINE_BLOT, e
                        }(c),
                        m = function() {
                            function t(t, e, n) {
                                void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
                                var r = i.TYPE & i.ATTRIBUTE;
                                this.scope = null != n.scope ? n.scope & i.LEVEL | r : i.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
                            }
                            return t.keys = function(t) {
                                return Array.from(t.attributes).map((function(t) {
                                    return t.name
                                }))
                            }, t.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
                            }, t.prototype.canAdd = function(t, e) {
                                return null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1)
                            }, t.prototype.remove = function(t) {
                                t.removeAttribute(this.keyName)
                            }, t.prototype.value = function(t) {
                                var e = t.getAttribute(this.keyName);
                                return this.canAdd(t, e) && e ? e : ""
                            }, t
                        }(),
                        g = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }();

                    function O(t, e) {
                        return (t.getAttribute("class") || "").split(/\s+/).filter((function(t) {
                            return 0 === t.indexOf(e + "-")
                        }))
                    }
                    var N = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return g(e, t), e.keys = function(t) {
                                return (t.getAttribute("class") || "").split(/\s+/).map((function(t) {
                                    return t.split("-").slice(0, -1).join("-")
                                }))
                            }, e.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
                            }, e.prototype.remove = function(t) {
                                O(t, this.keyName).forEach((function(e) {
                                    t.classList.remove(e)
                                })), 0 === t.classList.length && t.removeAttribute("class")
                            }, e.prototype.value = function(t) {
                                var e = (O(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
                                return this.canAdd(t, e) ? e : ""
                            }, e
                        }(m),
                        w = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }();

                    function E(t) {
                        var e = t.split("-"),
                            n = e.slice(1).map((function(t) {
                                return t[0].toUpperCase() + t.slice(1)
                            })).join("");
                        return e[0] + n
                    }
                    var A = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return w(e, t), e.keys = function(t) {
                                return (t.getAttribute("style") || "").split(";").map((function(t) {
                                    return t.split(":")[0].trim()
                                }))
                            }, e.prototype.add = function(t, e) {
                                return !!this.canAdd(t, e) && (t.style[E(this.keyName)] = e, !0)
                            }, e.prototype.remove = function(t) {
                                t.style[E(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style")
                            }, e.prototype.value = function(t) {
                                var e = t.style[E(this.keyName)];
                                return this.canAdd(t, e) ? e : ""
                            }, e
                        }(m),
                        k = function() {
                            function t(t) {
                                this.attributes = {}, this.domNode = t, this.build()
                            }
                            return t.prototype.attribute = function(t, e) {
                                e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
                            }, t.prototype.build = function() {
                                var t = this;
                                this.attributes = {};
                                var e = s.find(this.domNode);
                                if (null != e) {
                                    var n = m.keys(this.domNode),
                                        r = N.keys(this.domNode),
                                        o = A.keys(this.domNode);
                                    n.concat(r).concat(o).forEach((function(n) {
                                        var r = e.scroll.query(n, i.ATTRIBUTE);
                                        r instanceof m && (t.attributes[r.attrName] = r)
                                    }))
                                }
                            }, t.prototype.copy = function(t) {
                                var e = this;
                                Object.keys(this.attributes).forEach((function(n) {
                                    var r = e.attributes[n].value(e.domNode);
                                    t.format(n, r)
                                }))
                            }, t.prototype.move = function(t) {
                                var e = this;
                                this.copy(t), Object.keys(this.attributes).forEach((function(t) {
                                    e.attributes[t].remove(e.domNode)
                                })), this.attributes = {}
                            }, t.prototype.values = function() {
                                var t = this;
                                return Object.keys(this.attributes).reduce((function(e, n) {
                                    return e[n] = t.attributes[n].value(t.domNode), e
                                }), {})
                            }, t
                        }(),
                        S = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        x = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.attributes = new k(r.domNode), r
                            }
                            return S(e, t), e.formats = function(t, n) {
                                var r = n.query(e.blotName);
                                if (null == r || t.tagName !== r.tagName) return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                            }, e.prototype.format = function(t, n) {
                                var r = this;
                                if (t !== this.statics.blotName || n) {
                                    var o = this.scroll.query(t, i.INLINE);
                                    if (null == o) return;
                                    o instanceof m ? this.attributes.attribute(o, n) : !n || t === this.statics.blotName && this.formats()[t] === n || this.replaceWith(t, n)
                                } else this.children.forEach((function(t) {
                                    t instanceof e || (t = t.wrap(e.blotName, !0)), r.attributes.copy(t)
                                })), this.unwrap()
                            }, e.prototype.formats = function() {
                                var t = this.attributes.values(),
                                    e = this.statics.formats(this.domNode, this.scroll);
                                return null != e && (t[this.statics.blotName] = e), t
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                null != this.formats()[r] || this.scroll.query(r, i.ATTRIBUTE) ? this.isolate(e, n).format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.optimize = function(n) {
                                t.prototype.optimize.call(this, n);
                                var r = this.formats();
                                if (0 === Object.keys(r).length) return this.unwrap();
                                var o = this.next;
                                o instanceof e && o.prev === this && function(t, e) {
                                    if (Object.keys(t).length !== Object.keys(e).length) return !1;
                                    for (var n in t)
                                        if (t[n] !== e[n]) return !1;
                                    return !0
                                }(r, o.formats()) && (o.moveChildren(this), o.remove())
                            }, e.prototype.replaceWith = function(e, n) {
                                var r = t.prototype.replaceWith.call(this, e, n);
                                return this.attributes.copy(r), r
                            }, e.prototype.update = function(e, n) {
                                var r = this;
                                t.prototype.update.call(this, e, n), e.some((function(t) {
                                    return t.target === r.domNode && "attributes" === t.type
                                })) && this.attributes.build()
                            }, e.prototype.wrap = function(n, r) {
                                var o = t.prototype.wrap.call(this, n, r);
                                return o instanceof e && this.attributes.move(o), o
                            }, e.allowedChildren = [e, b], e.blotName = "inline", e.scope = i.INLINE_BLOT, e.tagName = "SPAN", e
                        }(h),
                        j = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        _ = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.attributes = new k(r.domNode), r
                            }
                            return j(e, t), e.formats = function(t, n) {
                                var r = n.query(e.blotName);
                                if (null == r || t.tagName !== r.tagName) return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                            }, e.prototype.format = function(t, n) {
                                var r = this.scroll.query(t, i.BLOCK);
                                null != r && (r instanceof m ? this.attributes.attribute(r, n) : t !== this.statics.blotName || n ? !n || t === this.statics.blotName && this.formats()[t] === n || this.replaceWith(t, n) : this.replaceWith(e.blotName))
                            }, e.prototype.formats = function() {
                                var t = this.attributes.values(),
                                    e = this.statics.formats(this.domNode, this.scroll);
                                return null != e && (t[this.statics.blotName] = e), t
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                null != this.scroll.query(r, i.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.insertAt = function(e, n, r) {
                                if (null == r || null != this.scroll.query(n, i.INLINE)) t.prototype.insertAt.call(this, e, n, r);
                                else {
                                    var o = this.split(e);
                                    if (null == o) throw new Error("Attempt to insertAt after block boundaries");
                                    var a = this.scroll.create(n, r);
                                    o.parent.insertBefore(a, o)
                                }
                            }, e.prototype.replaceWith = function(e, n) {
                                var r = t.prototype.replaceWith.call(this, e, n);
                                return this.attributes.copy(r), r
                            }, e.prototype.update = function(e, n) {
                                var r = this;
                                t.prototype.update.call(this, e, n), e.some((function(t) {
                                    return t.target === r.domNode && "attributes" === t.type
                                })) && this.attributes.build()
                            }, e.blotName = "block", e.scope = i.BLOCK_BLOT, e.tagName = "P", e.allowedChildren = [x, e, b], e
                        }(h),
                        R = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        T = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return R(e, t), e.formats = function(t, e) {}, e.prototype.format = function(e, n) {
                                t.prototype.formatAt.call(this, 0, this.length(), e, n)
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.formats = function() {
                                return this.statics.formats(this.domNode, this.scroll)
                            }, e
                        }(b),
                        P = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        C = {
                            attributes: !0,
                            characterData: !0,
                            characterDataOldValue: !0,
                            childList: !0,
                            subtree: !0
                        },
                        L = function(t) {
                            function e(e, n) {
                                var r = t.call(this, null, n) || this;
                                return r.registry = e, r.scroll = r, r.build(), r.observer = new MutationObserver((function(t) {
                                    r.update(t)
                                })), r.observer.observe(r.domNode, C), r.attach(), r
                            }
                            return P(e, t), e.prototype.create = function(t, e) {
                                return this.registry.create(this, t, e)
                            }, e.prototype.find = function(t, e) {
                                return void 0 === e && (e = !1), this.registry.find(t, e)
                            }, e.prototype.query = function(t, e) {
                                return void 0 === e && (e = i.ANY), this.registry.query(t, e)
                            }, e.prototype.register = function() {
                                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                return (t = this.registry).register.apply(t, e)
                            }, e.prototype.build = function() {
                                null != this.scroll && t.prototype.build.call(this)
                            }, e.prototype.detach = function() {
                                t.prototype.detach.call(this), this.observer.disconnect()
                            }, e.prototype.deleteAt = function(e, n) {
                                this.update(), 0 === e && n === this.length() ? this.children.forEach((function(t) {
                                    t.remove()
                                })) : t.prototype.deleteAt.call(this, e, n)
                            }, e.prototype.formatAt = function(e, n, r, o) {
                                this.update(), t.prototype.formatAt.call(this, e, n, r, o)
                            }, e.prototype.insertAt = function(e, n, r) {
                                this.update(), t.prototype.insertAt.call(this, e, n, r)
                            }, e.prototype.optimize = function(e, n) {
                                var r = this;
                                void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);
                                for (var o = n.mutationsMap || new WeakMap, i = Array.from(this.observer.takeRecords()); i.length > 0;) e.push(i.pop());
                                for (var a = function(t, e) {
                                        void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (o.has(t.domNode) || o.set(t.domNode, []), e && a(t.parent))
                                    }, u = function(t) {
                                        o.has(t.domNode) && (t instanceof h && t.children.forEach(u), o.delete(t.domNode), t.optimize(n))
                                    }, l = e, s = 0; l.length > 0; s += 1) {
                                    if (s >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
                                    for (l.forEach((function(t) {
                                            var e = r.find(t.target, !0);
                                            null != e && (e.domNode === t.target && ("childList" === t.type ? (a(r.find(t.previousSibling, !1)), Array.from(t.addedNodes).forEach((function(t) {
                                                var e = r.find(t, !1);
                                                a(e, !1), e instanceof h && e.children.forEach((function(t) {
                                                    a(t, !1)
                                                }))
                                            }))) : "attributes" === t.type && a(e.prev)), a(e))
                                        })), this.children.forEach(u), i = (l = Array.from(this.observer.takeRecords())).slice(); i.length > 0;) e.push(i.pop())
                                }
                            }, e.prototype.update = function(e, n) {
                                var r = this;
                                void 0 === n && (n = {}), e = e || this.observer.takeRecords();
                                var o = new WeakMap;
                                e.map((function(t) {
                                    var e = s.find(t.target, !0);
                                    return null == e ? null : o.has(e.domNode) ? (o.get(e.domNode).push(t), null) : (o.set(e.domNode, [t]), e)
                                })).forEach((function(t) {
                                    null != t && t !== r && o.has(t.domNode) && t.update(o.get(t.domNode) || [], n)
                                })), n.mutationsMap = o, o.has(this.domNode) && t.prototype.update.call(this, o.get(this.domNode), n), this.optimize(e, n)
                            }, e.blotName = "scroll", e.defaultChild = _, e.allowedChildren = [_, y], e.scope = i.BLOCK_BLOT, e.tagName = "DIV", e
                        }(h),
                        B = function() {
                            var t = function(e, n) {
                                return (t = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(t, e) {
                                        t.__proto__ = e
                                    } || function(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                    })(e, n)
                            };
                            return function(e, n) {
                                function r() {
                                    this.constructor = e
                                }
                                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                            }
                        }(),
                        I = function(t) {
                            function e(e, n) {
                                var r = t.call(this, e, n) || this;
                                return r.text = r.statics.value(r.domNode), r
                            }
                            return B(e, t), e.create = function(t) {
                                return document.createTextNode(t)
                            }, e.value = function(t) {
                                return t.data
                            }, e.prototype.deleteAt = function(t, e) {
                                this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                            }, e.prototype.index = function(t, e) {
                                return this.domNode === t ? e : -1
                            }, e.prototype.insertAt = function(e, n, r) {
                                null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r)
                            }, e.prototype.length = function() {
                                return this.text.length
                            }, e.prototype.optimize = function(n) {
                                t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
                            }, e.prototype.position = function(t, e) {
                                return void 0 === e && (e = !1), [this.domNode, t]
                            }, e.prototype.split = function(t, e) {
                                if (void 0 === e && (e = !1), !e) {
                                    if (0 === t) return this;
                                    if (t === this.length()) return this.next
                                }
                                var n = this.scroll.create(this.domNode.splitText(t));
                                return this.parent.insertBefore(n, this.next || void 0), this.text = this.statics.value(this.domNode), n
                            }, e.prototype.update = function(t, e) {
                                var n = this;
                                t.some((function(t) {
                                    return "characterData" === t.type && t.target === n.domNode
                                })) && (this.text = this.statics.value(this.domNode))
                            }, e.prototype.value = function() {
                                return this.text
                            }, e.blotName = "text", e.scope = i.INLINE_BLOT, e
                        }(b)
                }, function(t, e, n) {
                    "use strict";
                    var r = n(52),
                        o = n.n(r),
                        i = n(26),
                        a = n(12);

                    function u(t) {
                        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function l(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function s(t, e, n) {
                        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function c(t, e) {
                        return (c = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function f(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = h(t);
                            if (e) {
                                var o = h(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return p(this, n)
                        }
                    }

                    function p(t, e) {
                        return !e || "object" !== u(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function h(t) {
                        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var d = Object(a.a)("quill:events");
                    ["selectionchange", "mousedown", "mouseup", "click"].forEach((function(t) {
                        document.addEventListener(t, (function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            Array.from(document.querySelectorAll(".ql-container")).forEach((function(t) {
                                var n, r = i.a.get(t);
                                r && r.emitter && (n = r.emitter).handleDOM.apply(n, e)
                            }))
                        }))
                    }));
                    var y = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && c(t, e)
                        }(i, t);
                        var e, n, r, o = f(i);

                        function i() {
                            var t;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, i), (t = o.call(this)).listeners = {}, t.on("error", d.error), t
                        }
                        return e = i, (n = [{
                            key: "emit",
                            value: function() {
                                for (var t, e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                                (t = d.log).call.apply(t, [d].concat(r)), (e = s(h(i.prototype), "emit", this)).call.apply(e, [this].concat(r))
                            }
                        }, {
                            key: "handleDOM",
                            value: function(t) {
                                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                                (this.listeners[t.type] || []).forEach((function(e) {
                                    var r = e.node,
                                        o = e.handler;
                                    (t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n))
                                }))
                            }
                        }, {
                            key: "listenDOM",
                            value: function(t, e, n) {
                                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                                    node: e,
                                    handler: n
                                })
                            }
                        }]) && l(e.prototype, n), r && l(e, r), i
                    }(o.a);
                    y.events = {
                        EDITOR_CHANGE: "editor-change",
                        SCROLL_BEFORE_UPDATE: "scroll-before-update",
                        SCROLL_BLOT_MOUNT: "scroll-blot-mount",
                        SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
                        SCROLL_OPTIMIZE: "scroll-optimize",
                        SCROLL_UPDATE: "scroll-update",
                        SELECTION_CHANGE: "selection-change",
                        TEXT_CHANGE: "text-change"
                    }, y.sources = {
                        API: "api",
                        SILENT: "silent",
                        USER: "user"
                    }, e.a = y
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "b", (function() {
                        return E
                    })), n.d(e, "c", (function() {
                        return A
                    })), n.d(e, "a", (function() {
                        return w
                    })), n.d(e, "d", (function() {
                        return N
                    }));
                    var r = n(7),
                        o = n.n(r),
                        i = n(1),
                        a = n.n(i),
                        u = n(2),
                        l = n(9),
                        s = n(11),
                        c = n(8);

                    function f(t) {
                        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function p(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function h(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function d(t, e, n) {
                        return e && h(t.prototype, e), n && h(t, n), t
                    }

                    function y(t, e, n) {
                        return (y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = O(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function v(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && b(t, e)
                    }

                    function b(t, e) {
                        return (b = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function m(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = O(t);
                            if (e) {
                                var o = O(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return g(this, n)
                        }
                    }

                    function g(t, e) {
                        return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function O(t) {
                        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var N = function(t) {
                        v(n, t);
                        var e = m(n);

                        function n(t, r) {
                            var o;
                            return p(this, n), (o = e.call(this, t, r)).cache = {}, o
                        }
                        return d(n, [{
                            key: "delta",
                            value: function() {
                                return null == this.cache.delta && (this.cache.delta = E(this)), this.cache.delta
                            }
                        }, {
                            key: "deleteAt",
                            value: function(t, e) {
                                y(O(n.prototype), "deleteAt", this).call(this, t, e), this.cache = {}
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, e, r, o) {
                                e <= 0 || (this.scroll.query(r, u.Scope.BLOCK) ? t + e === this.length() && this.format(r, o) : y(O(n.prototype), "formatAt", this).call(this, t, Math.min(e, this.length() - t - 1), r, o), this.cache = {})
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, r) {
                                if (null != r) return y(O(n.prototype), "insertAt", this).call(this, t, e, r), void(this.cache = {});
                                if (0 !== e.length) {
                                    var o = e.split("\n"),
                                        i = o.shift();
                                    i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? y(O(n.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
                                    var a = this;
                                    o.reduce((function(t, e) {
                                        return (a = a.split(t, !0)).insertAt(0, e), e.length
                                    }), t + i.length)
                                }
                            }
                        }, {
                            key: "insertBefore",
                            value: function(t, e) {
                                var r = this.children.head;
                                y(O(n.prototype), "insertBefore", this).call(this, t, e), r instanceof l.a && r.remove(), this.cache = {}
                            }
                        }, {
                            key: "length",
                            value: function() {
                                return null == this.cache.length && (this.cache.length = y(O(n.prototype), "length", this).call(this) + 1), this.cache.length
                            }
                        }, {
                            key: "moveChildren",
                            value: function(t, e) {
                                y(O(n.prototype), "moveChildren", this).call(this, t, e), this.cache = {}
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                y(O(n.prototype), "optimize", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "path",
                            value: function(t) {
                                return y(O(n.prototype), "path", this).call(this, t, !0)
                            }
                        }, {
                            key: "removeChild",
                            value: function(t) {
                                y(O(n.prototype), "removeChild", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "split",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (e && (0 === t || t >= this.length() - 1)) {
                                    var r = this.clone();
                                    return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r)
                                }
                                var o = y(O(n.prototype), "split", this).call(this, t, e);
                                return this.cache = {}, o
                            }
                        }]), n
                    }(u.BlockBlot);
                    N.blotName = "block", N.tagName = "P", N.defaultChild = l.a, N.allowedChildren = [l.a, s.a, u.EmbedBlot, c.a];
                    var w = function(t) {
                        v(n, t);
                        var e = m(n);

                        function n() {
                            return p(this, n), e.apply(this, arguments)
                        }
                        return d(n, [{
                            key: "attach",
                            value: function() {
                                y(O(n.prototype), "attach", this).call(this), this.attributes = new u.AttributorStore(this.domNode)
                            }
                        }, {
                            key: "delta",
                            value: function() {
                                return (new a.a).insert(this.value(), o()(this.formats(), this.attributes.values()))
                            }
                        }, {
                            key: "format",
                            value: function(t, e) {
                                var n = this.scroll.query(t, u.Scope.BLOCK_ATTRIBUTE);
                                null != n && this.attributes.attribute(n, e)
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, e, n, r) {
                                this.format(n, r)
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, r) {
                                if ("string" == typeof e && e.endsWith("\n")) {
                                    var o = this.scroll.create(N.blotName);
                                    this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, e.slice(0, -1))
                                } else y(O(n.prototype), "insertAt", this).call(this, t, e, r)
                            }
                        }]), n
                    }(u.EmbedBlot);

                    function E(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return t.descendants(u.LeafBlot).reduce((function(t, n) {
                            return 0 === n.length() ? t : t.insert(n.value(), A(n, {}, e))
                        }), new a.a).insert("\n", A(t))
                    }

                    function A(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return null == t ? e : ("function" == typeof t.formats && (e = o()(e, t.formats()), n && delete e["code-token"]), null == t.parent || "scroll" === t.parent.statics.blotName || t.parent.statics.scope !== t.statics.scope ? e : A(t.parent, e, n))
                    }
                    w.scope = u.Scope.BLOCK_BLOT
                }, function(t, e, n) {
                    "use strict";
                    var r = n(17),
                        o = n.n(r),
                        i = n(18),
                        a = n.n(i),
                        u = n(7),
                        l = n.n(u),
                        s = n(1),
                        c = n.n(s),
                        f = n(2),
                        p = n(6),
                        h = n(16),
                        d = n(4),
                        y = n(9),
                        v = n(8);

                    function b(t) {
                        return E(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || N(t) || O()
                    }

                    function m(t) {
                        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function g(t, e) {
                        return E(t) || function(t, e) {
                            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
                            if (null != n) {
                                var r, o, i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                                } catch (l) {
                                    u = !0, o = l
                                } finally {
                                    try {
                                        a || null == n.return || n.return()
                                    } finally {
                                        if (u) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || N(t, e) || O()
                    }

                    function O() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }

                    function N(t, e) {
                        if (t) {
                            if ("string" == typeof t) return w(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(t, e) : void 0
                        }
                    }

                    function w(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function E(t) {
                        if (Array.isArray(t)) return t
                    }

                    function A(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var k = /^[ -~]*$/,
                        S = function() {
                            function t(e) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.scroll = e, this.delta = this.getDelta()
                            }
                            var e, n, r;
                            return e = t, (n = [{
                                key: "applyDelta",
                                value: function(t) {
                                    var e = this,
                                        n = !1;
                                    this.scroll.update();
                                    var r = this.scroll.length();
                                    this.scroll.batchStart();
                                    var o = function(t) {
                                        return t.reduce((function(t, e) {
                                            if ("string" == typeof e.insert) {
                                                var n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                                return t.insert(n, e.attributes)
                                            }
                                            return t.push(e)
                                        }), new c.a)
                                    }(t);
                                    return o.reduce((function(t, o) {
                                        var i = o.retain || o.delete || o.insert.length || 1,
                                            a = o.attributes || {};
                                        if (null != o.insert) {
                                            if ("string" == typeof o.insert) {
                                                var u = o.insert;
                                                u.endsWith("\n") && n && (n = !1, u = u.slice(0, -1)), (t >= r || e.scroll.descendant(d.a, t)[0]) && !u.endsWith("\n") && (n = !0), e.scroll.insertAt(t, u);
                                                var c = g(e.scroll.line(t), 2),
                                                    p = c[0],
                                                    h = c[1],
                                                    y = l()({}, Object(d.c)(p));
                                                if (p instanceof d.d) {
                                                    var v = g(p.descendant(f.LeafBlot, h), 1)[0];
                                                    y = l()(y, Object(d.c)(v))
                                                }
                                                a = s.AttributeMap.diff(y, a) || {}
                                            } else if ("object" === m(o.insert)) {
                                                var b = Object.keys(o.insert)[0];
                                                if (null == b) return t;
                                                e.scroll.insertAt(t, b, o.insert[b])
                                            }
                                            r += i
                                        }
                                        return Object.keys(a).forEach((function(n) {
                                            e.scroll.formatAt(t, i, n, a[n])
                                        })), t + i
                                    }), 0), o.reduce((function(t, n) {
                                        return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1)
                                    }), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(o)
                                }
                            }, {
                                key: "deleteText",
                                value: function(t, e) {
                                    return this.scroll.deleteAt(t, e), this.update((new c.a).retain(t).delete(e))
                                }
                            }, {
                                key: "formatLine",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    this.scroll.update(), Object.keys(r).forEach((function(o) {
                                        n.scroll.lines(t, Math.max(e, 1)).forEach((function(t) {
                                            t.format(o, r[o])
                                        }))
                                    })), this.scroll.optimize();
                                    var i = (new c.a).retain(t).retain(e, o()(r));
                                    return this.update(i)
                                }
                            }, {
                                key: "formatText",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    Object.keys(r).forEach((function(o) {
                                        n.scroll.formatAt(t, e, o, r[o])
                                    }));
                                    var i = (new c.a).retain(t).retain(e, o()(r));
                                    return this.update(i)
                                }
                            }, {
                                key: "getContents",
                                value: function(t, e) {
                                    return this.delta.slice(t, t + e)
                                }
                            }, {
                                key: "getDelta",
                                value: function() {
                                    return this.scroll.lines().reduce((function(t, e) {
                                        return t.concat(e.delta())
                                    }), new c.a)
                                }
                            }, {
                                key: "getFormat",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = [],
                                        r = [];
                                    0 === e ? this.scroll.path(t).forEach((function(t) {
                                        var e = g(t, 1)[0];
                                        e instanceof d.d ? n.push(e) : e instanceof f.LeafBlot && r.push(e)
                                    })) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(f.LeafBlot, t, e));
                                    var o = [n, r].map((function(t) {
                                        if (0 === t.length) return {};
                                        for (var e = Object(d.c)(t.shift()); Object.keys(e).length > 0;) {
                                            var n = t.shift();
                                            if (null == n) return e;
                                            e = _(Object(d.c)(n), e)
                                        }
                                        return e
                                    }));
                                    return l.a.apply(l.a, o)
                                }
                            }, {
                                key: "getHTML",
                                value: function(t, e) {
                                    var n = g(this.scroll.line(t), 2),
                                        r = n[0],
                                        o = n[1];
                                    return r.length() >= o + e ? j(r, o, e, !0) : j(this.scroll, t, e, !0)
                                }
                            }, {
                                key: "getText",
                                value: function(t, e) {
                                    return this.getContents(t, e).filter((function(t) {
                                        return "string" == typeof t.insert
                                    })).map((function(t) {
                                        return t.insert
                                    })).join("")
                                }
                            }, {
                                key: "insertEmbed",
                                value: function(t, e, n) {
                                    return this.scroll.insertAt(t, e, n), this.update((new c.a).retain(t).insert(function(t, e, n) {
                                        return e in t ? Object.defineProperty(t, e, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[e] = n, t
                                    }({}, e, n)))
                                }
                            }, {
                                key: "insertText",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach((function(o) {
                                        n.scroll.formatAt(t, e.length, o, r[o])
                                    })), this.update((new c.a).retain(t).insert(e, o()(r)))
                                }
                            }, {
                                key: "isBlank",
                                value: function() {
                                    if (0 === this.scroll.children.length) return !0;
                                    if (this.scroll.children.length > 1) return !1;
                                    var t = this.scroll.children.head;
                                    return t.statics.blotName === d.d.blotName && !(t.children.length > 1) && t.children.head instanceof y.a
                                }
                            }, {
                                key: "removeFormat",
                                value: function(t, e) {
                                    var n = this.getText(t, e),
                                        r = g(this.scroll.line(t + e), 2),
                                        o = r[0],
                                        i = r[1],
                                        a = 0,
                                        u = new c.a;
                                    null != o && (a = o.length() - i, u = o.delta().slice(i, i + a - 1).insert("\n"));
                                    var l = this.getContents(t, e + a).diff((new c.a).insert(n).concat(u)),
                                        s = (new c.a).retain(t).concat(l);
                                    return this.applyDelta(s)
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                        r = this.delta;
                                    if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(k) && this.scroll.find(e[0].target)) {
                                        var o = this.scroll.find(e[0].target),
                                            i = Object(d.c)(o),
                                            u = o.offset(this.scroll),
                                            l = e[0].oldValue.replace(h.a.CONTENTS, ""),
                                            s = (new c.a).insert(l),
                                            f = (new c.a).insert(o.value()),
                                            p = n && {
                                                oldRange: T(n.oldRange, -u),
                                                newRange: T(n.newRange, -u)
                                            },
                                            y = (new c.a).retain(u).concat(s.diff(f, p));
                                        t = y.reduce((function(t, e) {
                                            return e.insert ? t.insert(e.insert, i) : t.push(e)
                                        }), new c.a), this.delta = r.compose(t)
                                    } else this.delta = this.getDelta(), t && a()(r.compose(t), this.delta) || (t = r.diff(this.delta, n));
                                    return t
                                }
                            }]) && A(e.prototype, n), r && A(e, r), t
                        }();

                    function x(t, e, n) {
                        if (0 === t.length) {
                            var r = g(R(n.pop()), 1)[0];
                            return e <= 0 ? "</li></".concat(r, ">") : "</li></".concat(r, ">").concat(x([], e - 1, n))
                        }
                        var o = b(t),
                            i = o[0],
                            a = i.child,
                            u = i.offset,
                            l = i.length,
                            s = i.indent,
                            c = i.type,
                            f = o.slice(1),
                            p = g(R(c), 2),
                            h = p[0],
                            d = p[1];
                        if (s > e) return n.push(c), s === e + 1 ? "<".concat(h, "><li").concat(d, ">").concat(j(a, u, l)).concat(x(f, s, n)) : "<".concat(h, "><li>").concat(x(t, e + 1, n));
                        var y = n[n.length - 1];
                        if (s === e && c === y) return "</li><li".concat(d, ">").concat(j(a, u, l)).concat(x(f, s, n));
                        var v = g(R(n.pop()), 1)[0];
                        return "</li></".concat(v, ">").concat(x(t, e - 1, n))
                    }

                    function j(t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if ("function" == typeof t.html) return t.html(e, n);
                        if (t instanceof v.a) return Object(v.b)(t.value().slice(e, e + n));
                        if (t.children) {
                            if ("list-container" === t.statics.blotName) {
                                var o = [];
                                return t.children.forEachAt(e, n, (function(t, e, n) {
                                    var r = t.formats();
                                    o.push({
                                        child: t,
                                        offset: e,
                                        length: n,
                                        indent: r.indent || (r["list-level"] ? r["list-level"] - 1 : 0),
                                        type: r.list
                                    })
                                })), x(o, -1, [])
                            }
                            var i = [];
                            if (t.children.forEachAt(e, n, (function(t, e, n) {
                                    i.push(j(t, e, n))
                                })), r || "list" === t.statics.blotName) return i.join("");
                            var a = t.domNode,
                                u = a.outerHTML,
                                l = a.innerHTML,
                                s = u.split(">".concat(l, "<")),
                                c = g(s, 2),
                                f = c[0],
                                p = c[1];
                            return "<table" === f ? '<table style="border: 1px solid #000;">'.concat(i.join(""), "<").concat(p) : "".concat(f, ">").concat(i.join(""), "<").concat(p)
                        }
                        return t.domNode.outerHTML
                    }

                    function _(t, e) {
                        return Object.keys(e).reduce((function(n, r) {
                            return null == t[r] || (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]]), n
                        }), {})
                    }

                    function R(t) {
                        var e = "ordered" === t ? "ol" : "ul";
                        switch (t) {
                            case "checked":
                                return [e, ' data-list="checked"'];
                            case "unchecked":
                                return [e, ' data-list="unchecked"'];
                            default:
                                return [e, ""]
                        }
                    }

                    function T(t, e) {
                        var n = t.index,
                            r = t.length;
                        return new p.a(n + e, r)
                    }
                    e.a = S
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return b
                    })), n.d(e, "b", (function() {
                        return m
                    }));
                    var r = n(2),
                        o = n(17),
                        i = n.n(o),
                        a = n(18),
                        u = n.n(a),
                        l = n(3),
                        s = n(12);

                    function c(t) {
                        return function(t) {
                            if (Array.isArray(t)) return h(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || p(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function f(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
                            if (null != n) {
                                var r, o, i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                                } catch (l) {
                                    u = !0, o = l
                                } finally {
                                    try {
                                        a || null == n.return || n.return()
                                    } finally {
                                        if (u) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || p(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function p(t, e) {
                        if (t) {
                            if ("string" == typeof t) return h(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0
                        }
                    }

                    function h(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function d(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function y(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var v = Object(s.a)("quill:selection"),
                        b = function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            y(this, t), this.index = e, this.length = n
                        },
                        m = function() {
                            function t(e, n) {
                                var r = this;
                                y(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new b(0, 0), this.lastRange = this.savedRange, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, (function() {
                                    r.mouseDown || setTimeout(r.update.bind(r, l.a.sources.USER), 1)
                                })), this.emitter.on(l.a.events.SCROLL_BEFORE_UPDATE, (function() {
                                    if (r.hasFocus()) {
                                        var t = r.getNativeRange();
                                        null != t && t.start.node !== r.cursor.textNode && r.emitter.once(l.a.events.SCROLL_UPDATE, (function() {
                                            try {
                                                r.root.contains(t.start.node) && r.root.contains(t.end.node) && r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset), r.update(l.a.sources.SILENT)
                                            } catch (e) {}
                                        }))
                                    }
                                })), this.emitter.on(l.a.events.SCROLL_OPTIMIZE, (function(t, e) {
                                    if (e.range) {
                                        var n = e.range,
                                            o = n.startNode,
                                            i = n.startOffset,
                                            a = n.endNode,
                                            u = n.endOffset;
                                        r.setNativeRange(o, i, a, u), r.update(l.a.sources.SILENT)
                                    }
                                })), this.update(l.a.sources.SILENT)
                            }
                            var e, n, o;
                            return e = t, (n = [{
                                key: "handleComposition",
                                value: function() {
                                    var t = this;
                                    this.root.addEventListener("compositionstart", (function() {
                                        t.composing = !0
                                    })), this.root.addEventListener("compositionend", (function() {
                                        if (t.composing = !1, t.cursor.parent) {
                                            var e = t.cursor.restore();
                                            if (!e) return;
                                            setTimeout((function() {
                                                t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
                                            }), 1)
                                        }
                                    }))
                                }
                            }, {
                                key: "handleDragging",
                                value: function() {
                                    var t = this;
                                    this.emitter.listenDOM("mousedown", document.body, (function() {
                                        t.mouseDown = !0
                                    })), this.emitter.listenDOM("mouseup", document.body, (function() {
                                        t.mouseDown = !1, t.update(l.a.sources.USER)
                                    }))
                                }
                            }, {
                                key: "focus",
                                value: function() {
                                    this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    this.scroll.update();
                                    var n = this.getNativeRange();
                                    if (null != n && n.native.collapsed && !this.scroll.query(t, r.Scope.BLOCK)) {
                                        if (n.start.node !== this.cursor.textNode) {
                                            var o = this.scroll.find(n.start.node, !1);
                                            if (null == o) return;
                                            if (o instanceof r.LeafBlot) {
                                                var i = o.split(n.start.offset);
                                                o.parent.insertBefore(this.cursor, i)
                                            } else o.insertBefore(this.cursor, n.start.node);
                                            this.cursor.attach()
                                        }
                                        this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
                                    }
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        r = this.scroll.length();
                                    t = Math.min(t, r - 1), n = Math.min(t + n, r - 1) - t;
                                    var o = this.scroll.leaf(t),
                                        i = f(o, 2),
                                        a = i[0],
                                        u = i[1];
                                    if (null == a) return null;
                                    var l = a.position(u, !0),
                                        s = f(l, 2);
                                    e = s[0], u = s[1];
                                    var c = document.createRange();
                                    if (n > 0) {
                                        c.setStart(e, u);
                                        var p = this.scroll.leaf(t + n),
                                            h = f(p, 2);
                                        if (a = h[0], u = h[1], null == a) return null;
                                        var d = a.position(u, !0),
                                            y = f(d, 2);
                                        return e = y[0], u = y[1], c.setEnd(e, u), c.getBoundingClientRect()
                                    }
                                    var v, b = "left";
                                    return e instanceof Text ? (u < e.data.length ? (c.setStart(e, u), c.setEnd(e, u + 1)) : (c.setStart(e, u - 1), c.setEnd(e, u), b = "right"), v = c.getBoundingClientRect()) : (v = a.domNode.getBoundingClientRect(), u > 0 && (b = "right")), {
                                        bottom: v.top + v.height,
                                        height: v.height,
                                        left: v[b],
                                        right: v[b],
                                        top: v.top,
                                        width: 0
                                    }
                                }
                            }, {
                                key: "getNativeRange",
                                value: function() {
                                    var t, e = document.getSelection();
                                    if (null == e || e.rangeCount <= 0) return null;
                                    try {
                                        t = e.getRangeAt(0)
                                    } catch (r) {
                                        return null
                                    }
                                    if (null == t) return null;
                                    var n = this.normalizeNative(t);
                                    return v.info("getNativeRange", n), n
                                }
                            }, {
                                key: "getRange",
                                value: function() {
                                    var t = this.getNativeRange();
                                    return null == t ? [null, null] : [this.normalizedToRange(t), t]
                                }
                            }, {
                                key: "hasFocus",
                                value: function() {
                                    return document.activeElement === this.root || g(this.root, document.activeElement)
                                }
                            }, {
                                key: "normalizedToRange",
                                value: function(t) {
                                    var e = this,
                                        n = [
                                            [t.start.node, t.start.offset]
                                        ];
                                    t.native.collapsed || n.push([t.end.node, t.end.offset]);
                                    var o = n.map((function(t) {
                                            var n = f(t, 2),
                                                o = n[0],
                                                i = n[1],
                                                a = e.scroll.find(o, !0),
                                                u = a.offset(e.scroll);
                                            return 0 === i ? u : a instanceof r.ContainerBlot ? u + a.length() : u + a.index(o, i)
                                        })),
                                        i = Math.min(Math.max.apply(Math, c(o)), this.scroll.length() - 1),
                                        a = Math.min.apply(Math, [i].concat(c(o)));
                                    return new b(a, i - a)
                                }
                            }, {
                                key: "normalizeNative",
                                value: function(t) {
                                    if (!g(this.root, t.startContainer) || !t.collapsed && !g(this.root, t.endContainer)) return null;
                                    var e = {
                                        start: {
                                            node: t.startContainer,
                                            offset: t.startOffset
                                        },
                                        end: {
                                            node: t.endContainer,
                                            offset: t.endOffset
                                        },
                                        native: t
                                    };
                                    return [e.start, e.end].forEach((function(t) {
                                        for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
                                            if (e.childNodes.length > n) e = e.childNodes[n], n = 0;
                                            else {
                                                if (e.childNodes.length !== n) break;
                                                n = (e = e.lastChild) instanceof Text ? e.data.length : e.childNodes.length > 0 ? e.childNodes.length : e.childNodes.length + 1
                                            }
                                        t.node = e, t.offset = n
                                    })), e
                                }
                            }, {
                                key: "rangeToNative",
                                value: function(t) {
                                    var e = this,
                                        n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                                        r = [],
                                        o = this.scroll.length();
                                    return n.forEach((function(t, n) {
                                        t = Math.min(o - 1, t);
                                        var i = f(e.scroll.leaf(t), 2),
                                            a = i[0],
                                            u = i[1],
                                            l = f(a.position(u, 0 !== n), 2),
                                            s = l[0],
                                            c = l[1];
                                        r.push(s, c)
                                    })), r.length < 2 ? r.concat(r) : r
                                }
                            }, {
                                key: "scrollIntoView",
                                value: function(t) {
                                    var e = this.lastRange;
                                    if (null != e) {
                                        var n = this.getBounds(e.index, e.length);
                                        if (null != n) {
                                            var r = this.scroll.length() - 1,
                                                o = f(this.scroll.line(Math.min(e.index, r)), 1)[0],
                                                i = o;
                                            if (e.length > 0 && (i = f(this.scroll.line(Math.min(e.index + e.length, r)), 1)[0]), null != o && null != i) {
                                                var a = t.getBoundingClientRect();
                                                n.top < a.top ? t.scrollTop -= a.top - n.top : n.bottom > a.bottom && (t.scrollTop += n.bottom - a.bottom)
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "setNativeRange",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
                                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                    if (v.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                                        var i = document.getSelection();
                                        if (null != i)
                                            if (null != t) {
                                                this.hasFocus() || this.root.focus();
                                                var a = this.getNativeRange() || {},
                                                    u = a.native;
                                                if (null == u || o || t !== u.startContainer || e !== u.startOffset || n !== u.endContainer || r !== u.endOffset) {
                                                    "BR" === t.tagName && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), "BR" === n.tagName && (r = Array.from(n.parentNode.childNodes).indexOf(n), n = n.parentNode);
                                                    var l = document.createRange();
                                                    l.setStart(t, e), l.setEnd(n, r), i.removeAllRanges(), i.addRange(l)
                                                }
                                            } else i.removeAllRanges(), this.root.blur()
                                    }
                                }
                            }, {
                                key: "setRange",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.a.sources.API;
                                    if ("string" == typeof e && (n = e, e = !1), v.info("setRange", t), null != t) {
                                        var r = this.rangeToNative(t);
                                        this.setNativeRange.apply(this, c(r).concat([e]))
                                    } else this.setNativeRange(null);
                                    this.update(n)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.a.sources.USER,
                                        e = this.lastRange,
                                        n = this.getRange(),
                                        r = f(n, 2),
                                        o = r[0],
                                        a = r[1];
                                    if (this.lastRange = o, null != this.lastRange && (this.savedRange = this.lastRange), !u()(e, this.lastRange)) {
                                        var s;
                                        if (!this.composing && null != a && a.native.collapsed && a.start.node !== this.cursor.textNode) {
                                            var c = this.cursor.restore();
                                            c && this.setNativeRange(c.startNode, c.startOffset, c.endNode, c.endOffset)
                                        }
                                        var p, h = [l.a.events.SELECTION_CHANGE, i()(this.lastRange), i()(e), t];
                                        (s = this.emitter).emit.apply(s, [l.a.events.EDITOR_CHANGE].concat(h)), t !== l.a.sources.SILENT && (p = this.emitter).emit.apply(p, h)
                                    }
                                }
                            }]) && d(e.prototype, n), o && d(e, o), t
                        }();

                    function g(t, e) {
                        try {
                            e.parentNode
                        } catch (n) {
                            return !1
                        }
                        return t.contains(e)
                    }
                }, function(t, e) {
                    "use strict";
                    var n = Object.prototype.hasOwnProperty,
                        r = Object.prototype.toString,
                        o = Object.defineProperty,
                        i = Object.getOwnPropertyDescriptor,
                        a = function(t) {
                            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t)
                        },
                        u = function(t) {
                            if (!t || "[object Object]" !== r.call(t)) return !1;
                            var e, o = n.call(t, "constructor"),
                                i = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                            if (t.constructor && !o && !i) return !1;
                            for (e in t);
                            return void 0 === e || n.call(t, e)
                        },
                        l = function(t, e) {
                            o && "__proto__" === e.name ? o(t, e.name, {
                                enumerable: !0,
                                configurable: !0,
                                value: e.newValue,
                                writable: !0
                            }) : t[e.name] = e.newValue
                        },
                        s = function(t, e) {
                            if ("__proto__" === e) {
                                if (!n.call(t, e)) return;
                                if (i) return i(t, e).value
                            }
                            return t[e]
                        };
                    t.exports = function t() {
                        var e, n, r, o, i, c, f = arguments[0],
                            p = 1,
                            h = arguments.length,
                            d = !1;
                        for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < h; ++p)
                            if (null != (e = arguments[p]))
                                for (n in e) r = s(f, n), f !== (o = s(e, n)) && (d && o && (u(o) || (i = a(o))) ? (i ? (i = !1, c = r && a(r) ? r : []) : c = r && u(r) ? r : {}, l(f, {
                                    name: n,
                                    newValue: t(d, c, o)
                                })) : void 0 !== o && l(f, {
                                    name: n,
                                    newValue: o
                                }));
                        return f
                    }
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        return (i = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function a(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = l(t);
                            if (e) {
                                var o = l(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return u(this, n)
                        }
                    }

                    function u(t, e) {
                        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function l(t) {
                        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    n.d(e, "a", (function() {
                        return s
                    })), n.d(e, "b", (function() {
                        return c
                    }));
                    var s = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && i(t, e)
                        }(n, t);
                        var e = a(n);

                        function n() {
                            return o(this, n), e.apply(this, arguments)
                        }
                        return n
                    }(n(2).TextBlot);

                    function c(t) {
                        return t.replace(/[&<>"']/g, (function(t) {
                            return {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;"
                            }[t]
                        }))
                    }
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function a(t, e) {
                        return (a = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function u(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = s(t);
                            if (e) {
                                var o = s(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return l(this, n)
                        }
                    }

                    function l(t, e) {
                        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function s(t) {
                        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var c = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && a(t, e)
                        }(s, t);
                        var e, n, r, l = u(s);

                        function s() {
                            return o(this, s), l.apply(this, arguments)
                        }
                        return e = s, r = [{
                            key: "value",
                            value: function() {}
                        }], (n = [{
                            key: "optimize",
                            value: function() {
                                (this.prev || this.next) && this.remove()
                            }
                        }, {
                            key: "length",
                            value: function() {
                                return 0
                            }
                        }, {
                            key: "value",
                            value: function() {
                                return ""
                            }
                        }]) && i(e.prototype, n), r && i(e, r), s
                    }(n(2).EmbedBlot);
                    c.blotName = "break", c.tagName = "BR", e.a = c
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var o = function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        r(this, t), this.quill = e, this.options = n
                    };
                    o.DEFAULTS = {}, e.a = o
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(9),
                        i = n(8);

                    function a(t) {
                        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function u(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function s(t, e, n) {
                        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function c(t, e) {
                        return (c = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function f(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = h(t);
                            if (e) {
                                var o = h(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return p(this, n)
                        }
                    }

                    function p(t, e) {
                        return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function h(t) {
                        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var d = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && c(t, e)
                        }(a, t);
                        var e, n, o, i = f(a);

                        function a() {
                            return u(this, a), i.apply(this, arguments)
                        }
                        return e = a, o = [{
                            key: "compare",
                            value: function(t, e) {
                                var n = a.order.indexOf(t),
                                    r = a.order.indexOf(e);
                                return n >= 0 || r >= 0 ? n - r : t === e ? 0 : t < e ? -1 : 1
                            }
                        }], (n = [{
                            key: "formatAt",
                            value: function(t, e, n, o) {
                                if (a.compare(this.statics.blotName, n) < 0 && this.scroll.query(n, r.Scope.BLOT)) {
                                    var i = this.isolate(t, e);
                                    o && i.wrap(n, o)
                                } else s(h(a.prototype), "formatAt", this).call(this, t, e, n, o)
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                if (s(h(a.prototype), "optimize", this).call(this, t), this.parent instanceof a && a.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                                    var e = this.parent.isolate(this.offset(), this.length());
                                    this.moveChildren(e), e.wrap(this)
                                }
                            }
                        }]) && l(e.prototype, n), o && l(e, o), a
                    }(r.InlineBlot);
                    d.allowedChildren = [d, o.a, r.EmbedBlot, i.a], d.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.a = d
                }, function(t, e, n) {
                    "use strict";
                    var r = ["error", "warn", "log", "info"],
                        o = "warn";

                    function i(t) {
                        if (r.indexOf(t) <= r.indexOf(o)) {
                            for (var e, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            (e = console)[t].apply(e, i)
                        }
                    }

                    function a(t) {
                        return r.reduce((function(e, n) {
                            return e[n] = i.bind(console, n, t), e
                        }), {})
                    }
                    a.level = function(t) {
                        o = t
                    }, i.level = a.level, e.a = a
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return w
                    })), n.d(e, "b", (function() {
                        return O
                    })), n.d(e, "c", (function() {
                        return N
                    }));
                    var r = n(4),
                        o = n(9),
                        i = n(16),
                        a = n(11),
                        u = n(8),
                        l = n(15),
                        s = n(0);

                    function c(t) {
                        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function f(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function p(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function h(t, e, n) {
                        return e && p(t.prototype, e), n && p(t, n), t
                    }

                    function d(t, e, n) {
                        return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = g(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function y(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && v(t, e)
                    }

                    function v(t, e) {
                        return (v = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function b(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = g(t);
                            if (e) {
                                var o = g(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return m(this, n)
                        }
                    }

                    function m(t, e) {
                        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function g(t) {
                        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var O = function(t) {
                            y(n, t);
                            var e = b(n);

                            function n() {
                                return f(this, n), e.apply(this, arguments)
                            }
                            return h(n, [{
                                key: "html",
                                value: function(t, e) {
                                    var n = this.children.map((function(t) {
                                        return t.domNode.innerText
                                    })).join("\n").slice(t, t + e);
                                    return "<pre>".concat(Object(u.b)(n), "</pre>")
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var e = d(g(n), "create", this).call(this, t);
                                    return e.setAttribute("spellcheck", !1), e
                                }
                            }]), n
                        }(l.a),
                        N = function(t) {
                            y(n, t);
                            var e = b(n);

                            function n() {
                                return f(this, n), e.apply(this, arguments)
                            }
                            return h(n, null, [{
                                key: "register",
                                value: function() {
                                    s.a.register(O)
                                }
                            }]), n
                        }(r.d),
                        w = function(t) {
                            y(n, t);
                            var e = b(n);

                            function n() {
                                return f(this, n), e.apply(this, arguments)
                            }
                            return n
                        }(a.a);
                    w.blotName = "code", w.tagName = "CODE", N.blotName = "code-block", N.className = "ql-code-block", N.tagName = "DIV", O.blotName = "code-block-container", O.className = "ql-code-block-container", O.tagName = "DIV", O.allowedChildren = [N], N.allowedChildren = [u.a, o.a, i.a], N.requiredContainer = O, N.TAB = "  "
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(3),
                        i = n(4),
                        a = n(9),
                        u = n(15),
                        l = n(33);

                    function s(t) {
                        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function c(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
                            if (null != n) {
                                var r, o, i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                                } catch (l) {
                                    u = !0, o = l
                                } finally {
                                    try {
                                        a || null == n.return || n.return()
                                    } finally {
                                        if (u) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return f(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function f(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function p(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function h(t, e, n) {
                        return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = b(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function d(t, e) {
                        return (d = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function y(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = b(t);
                            if (e) {
                                var o = b(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return v(this, n)
                        }
                    }

                    function v(t, e) {
                        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function b(t) {
                        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }

                    function m(t) {
                        return t instanceof i.d || t instanceof i.a
                    }
                    var g = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && d(t, e)
                        }(f, t);
                        var e, n, u, s = y(f);

                        function f(t, e, n) {
                            var r, o = n.emitter;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, f), (r = s.call(this, t, e)).defaultUpdateAttributes = void 0, r.emitter = o, r.optimize(), r.enable(), r.domNode.addEventListener("dragstart", (function(t) {
                                return r.handleDragStart(t)
                            })), r
                        }
                        return e = f, (n = [{
                            key: "batchStart",
                            value: function() {
                                this.batch = !0
                            }
                        }, {
                            key: "batchEnd",
                            value: function() {
                                this.batch = !1, this.optimize()
                            }
                        }, {
                            key: "emitMount",
                            value: function(t) {
                                this.emitter.emit(o.a.events.SCROLL_BLOT_MOUNT, t)
                            }
                        }, {
                            key: "emitUnmount",
                            value: function(t) {
                                this.emitter.emit(o.a.events.SCROLL_BLOT_UNMOUNT, t)
                            }
                        }, {
                            key: "deleteAt",
                            value: function(t, e) {
                                var n = c(this.line(t), 2),
                                    r = n[0],
                                    o = n[1],
                                    u = c(this.line(t + e), 1)[0];
                                if (h(b(f.prototype), "deleteAt", this).call(this, t, e), null != u && r !== u && o > 0) {
                                    if (r instanceof i.a || u instanceof i.a) return void this.optimize();
                                    var l = u.children.head instanceof a.a ? null : u.children.head;
                                    r.moveChildren(u, l), r.remove()
                                }
                                this.optimize()
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                this.domNode.setAttribute("contenteditable", t)
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, e, n, r) {
                                h(b(f.prototype), "formatAt", this).call(this, t, e, n, r), this.optimize()
                            }
                        }, {
                            key: "handleDragStart",
                            value: function(t) {
                                t.preventDefault()
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, n) {
                                if (t >= this.length())
                                    if (null == n || null == this.scroll.query(e, r.Scope.BLOCK)) {
                                        var o = this.scroll.create(this.statics.defaultChild.blotName);
                                        this.appendChild(o), null == n && e.endsWith("\n") ? o.insertAt(0, e.slice(0, -1), n) : o.insertAt(0, e, n)
                                    } else {
                                        var i = this.scroll.create(e, n);
                                        this.appendChild(i)
                                    }
                                else h(b(f.prototype), "insertAt", this).call(this, t, e, n);
                                this.optimize()
                            }
                        }, {
                            key: "insertBefore",
                            value: function(t, e) {
                                if (t.statics.scope === r.Scope.INLINE_BLOT) {
                                    var n = this.scroll.create(this.statics.defaultChild.blotName);
                                    if (n.appendChild(t), h(b(f.prototype), "insertBefore", this).call(this, n, e), null == this.defaultUpdateAttributes) return;
                                    var o = this.defaultUpdateAttributes,
                                        i = o.paraAttributes,
                                        a = o.charAttributes,
                                        u = t.domNode;
                                    u.nodeType === Node.TEXT_NODE && Object.entries(a).forEach((function(t) {
                                        var e = c(t, 2),
                                            r = e[0],
                                            o = e[1];
                                        return n.formatAt(0, u.length, r, o)
                                    })), Object.entries(i).forEach((function(t) {
                                        var e = c(t, 2),
                                            r = e[0],
                                            o = e[1];
                                        return n.format(r, o)
                                    }))
                                } else h(b(f.prototype), "insertBefore", this).call(this, t, e)
                            }
                        }, {
                            key: "isEnabled",
                            value: function() {
                                return "true" === this.domNode.getAttribute("contenteditable")
                            }
                        }, {
                            key: "leaf",
                            value: function(t) {
                                return this.path(t).pop() || [null, -1]
                            }
                        }, {
                            key: "line",
                            value: function(t) {
                                return t === this.length() ? this.line(t - 1) : this.descendant(m, t)
                            }
                        }, {
                            key: "lines",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                                    n = function t(e, n, o) {
                                        var i = [],
                                            a = o;
                                        return e.children.forEachAt(n, o, (function(e, n, o) {
                                            m(e) ? i.push(e) : e instanceof r.ContainerBlot && (i = i.concat(t(e, n, a))), a -= o
                                        })), i
                                    };
                                return n(this, t, e)
                            }
                        }, {
                            key: "optimize",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                !0 !== this.batch && (h(b(f.prototype), "optimize", this).call(this, t, e), t.length > 0 && this.emitter.emit(o.a.events.SCROLL_OPTIMIZE, t, e))
                            }
                        }, {
                            key: "path",
                            value: function(t) {
                                return h(b(f.prototype), "path", this).call(this, t).slice(1)
                            }
                        }, {
                            key: "remove",
                            value: function() {}
                        }, {
                            key: "update",
                            value: function(t) {
                                var e = this;
                                if (!0 !== this.batch) {
                                    var n = o.a.sources.USER;
                                    if ("string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), 1 === t.length && "childList" === t[0].type && 1 === t[0].removedNodes.length && t[0].removedNodes[0].tagName === l.b.tagName && 0 === t[0].target.childElementCount) {
                                        var r = t[0],
                                            a = this.registry.find(r.target);
                                        if (a instanceof l.a) {
                                            var u = r.removedNodes[0].cloneNode(!1),
                                                s = this.scroll.create(u);
                                            return a.appendChild(s), void a.deleteAt(0, s.length())
                                        }
                                    }
                                    t.length > 0 && this.emitter.emit(o.a.events.SCROLL_BEFORE_UPDATE, n, t);
                                    var c, p = 0 === this.domNode.childElementCount,
                                        d = 1 === this.domNode.childElementCount && "BR" === this.domNode.firstElementChild.tagName;
                                    if ((p || d) && (c = t.find((function(t) {
                                            return "childList" === t.type && t.target === e.domNode && t.removedNodes.length > 0
                                        }))), c) {
                                        var y, v = c.removedNodes[0],
                                            m = this.registry.find(v);
                                        m && (m instanceof i.d ? y = m.delta() : m.children && m.children.head instanceof i.d && (y = m.children.head.delta()), y && y.eachLine((function(t, n) {
                                            var r = t.ops.length > 0 && t.ops[0].attributes || {};
                                            return e.defaultUpdateAttributes = {
                                                charAttributes: r,
                                                paraAttributes: n
                                            }, !1
                                        })))
                                    }
                                    h(b(f.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(o.a.events.SCROLL_UPDATE, n, t, d && this.defaultUpdateAttributes ? this.defaultUpdateAttributes.charAttributes : null), this.defaultUpdateAttributes && (this.defaultUpdateAttributes = void 0)
                                }
                            }
                        }]) && p(e.prototype, n), u && p(e, u), f
                    }(r.ScrollBlot);
                    g.blotName = "scroll", g.className = "ql-editor", g.tagName = "DIV", g.defaultChild = i.d, g.allowedChildren = [i.d, i.a, u.a], e.a = g
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function o(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        return (i = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function a(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = l(t);
                            if (e) {
                                var o = l(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return u(this, n)
                        }
                    }

                    function u(t, e) {
                        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function l(t) {
                        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var s = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && i(t, e)
                        }(n, t);
                        var e = a(n);

                        function n() {
                            return o(this, n), e.apply(this, arguments)
                        }
                        return n
                    }(n(2).ContainerBlot);
                    e.a = s
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(8);

                    function i(t) {
                        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function a(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function u(t, e, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function l(t, e) {
                        return (l = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function s(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = f(t);
                            if (e) {
                                var o = f(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return c(this, n)
                        }
                    }

                    function c(t, e) {
                        return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function f(t) {
                        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var p = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && l(t, e)
                        }(p, t);
                        var e, n, i, c = s(p);

                        function p(t, e, n) {
                            var r;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, p), (r = c.call(this, t, e)).selection = n, r.textNode = document.createTextNode(p.CONTENTS), r.domNode.appendChild(r.textNode), r.savedLength = 0, r
                        }
                        return e = p, i = [{
                            key: "value",
                            value: function() {}
                        }], (n = [{
                            key: "detach",
                            value: function() {
                                null != this.parent && this.parent.removeChild(this)
                            }
                        }, {
                            key: "format",
                            value: function(t, e) {
                                if (0 === this.savedLength) {
                                    for (var n = this, o = 0; null != n && n.statics.scope !== r.Scope.BLOCK_BLOT;) o += n.offset(n.parent), n = n.parent;
                                    null != n && (this.savedLength = p.CONTENTS.length, n.optimize(), n.formatAt(o, p.CONTENTS.length, t, e), this.savedLength = 0)
                                } else u(f(p.prototype), "format", this).call(this, t, e)
                            }
                        }, {
                            key: "index",
                            value: function(t, e) {
                                return t === this.textNode ? 0 : u(f(p.prototype), "index", this).call(this, t, e)
                            }
                        }, {
                            key: "length",
                            value: function() {
                                return this.savedLength
                            }
                        }, {
                            key: "position",
                            value: function() {
                                return [this.textNode, this.textNode.data.length]
                            }
                        }, {
                            key: "remove",
                            value: function() {
                                u(f(p.prototype), "remove", this).call(this), this.parent = null
                            }
                        }, {
                            key: "restore",
                            value: function() {
                                if (this.selection.composing || null == this.parent) return null;
                                for (var t = this.selection.getNativeRange(); null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                                var e, n = this.prev instanceof o.a ? this.prev : null,
                                    r = n ? n.length() : 0,
                                    i = this.next instanceof o.a ? this.next : null,
                                    a = i ? i.text : "",
                                    u = this.textNode,
                                    l = u.data.split(p.CONTENTS).join("");
                                u.data = p.CONTENTS;
                                var s = !1;
                                if (n) e = n, (l || i) && (n.insertAt(n.length(), l + a), i && i.remove());
                                else if (i) e = i, i.insertAt(0, l);
                                else {
                                    var c = document.createTextNode(l);
                                    e = this.scroll.create(c), this.parent.insertBefore(e, this), s = !0
                                }
                                if (this.remove(), t) {
                                    var f = function(t, e) {
                                            return n && t === n.domNode ? e : t === u ? r + e - 1 : i && t === i.domNode ? r + l.length + e : null
                                        },
                                        h = f(t.start.node, t.start.offset),
                                        d = f(t.end.node, t.end.offset);
                                    if (s && h === d && 0 === h && t.start.node === t.end.node && t.start.node === u && (d = h = e.domNode.data.length), null !== h && null !== d) return {
                                        startNode: e.domNode,
                                        startOffset: h,
                                        endNode: e.domNode,
                                        endOffset: d
                                    }
                                }
                                return null
                            }
                        }, {
                            key: "update",
                            value: function(t, e) {
                                var n = this,
                                    r = !1;
                                if (t.forEach((function(t) {
                                        t.target === n.textNode && "characterData" === t.type ? r = !0 : t.target === n.domNode && "childList" === t.type && t.addedNodes.forEach((function(t) {
                                            t.nodeType === Node.ELEMENT_NODE && "BR" === t.tagName && n.domNode.removeChild(t)
                                        }))
                                    })), r) {
                                    var o = this.restore();
                                    o && (e.range = o)
                                }
                            }
                        }, {
                            key: "value",
                            value: function() {
                                return ""
                            }
                        }]) && a(e.prototype, n), i && a(e, i), p
                    }(r.EmbedBlot);
                    p.blotName = "cursor", p.className = "ql-cursor", p.tagName = "span", p.CONTENTS = "\ufeff", e.a = p
                }, function(t, e) {
                    var n = function() {
                        "use strict";

                        function t(t, e) {
                            return null != e && t instanceof e
                        }
                        var e, n, r;
                        try {
                            e = Map
                        } catch (u) {
                            e = function() {}
                        }
                        try {
                            n = Set
                        } catch (u) {
                            n = function() {}
                        }
                        try {
                            r = Promise
                        } catch (u) {
                            r = function() {}
                        }

                        function o(i, u, l, s, c) {
                            "object" == typeof u && (l = u.depth, s = u.prototype, c = u.includeNonEnumerable, u = u.circular);
                            var f = [],
                                p = [],
                                h = "undefined" != typeof Buffer;
                            return void 0 === u && (u = !0), void 0 === l && (l = 1 / 0),
                                function i(l, d) {
                                    if (null === l) return null;
                                    if (0 === d) return l;
                                    var y, v;
                                    if ("object" != typeof l) return l;
                                    if (t(l, e)) y = new e;
                                    else if (t(l, n)) y = new n;
                                    else if (t(l, r)) y = new r((function(t, e) {
                                        l.then((function(e) {
                                            t(i(e, d - 1))
                                        }), (function(t) {
                                            e(i(t, d - 1))
                                        }))
                                    }));
                                    else if (o.__isArray(l)) y = [];
                                    else if (o.__isRegExp(l)) y = new RegExp(l.source, a(l)), l.lastIndex && (y.lastIndex = l.lastIndex);
                                    else if (o.__isDate(l)) y = new Date(l.getTime());
                                    else {
                                        if (h && Buffer.isBuffer(l)) return y = Buffer.allocUnsafe ? Buffer.allocUnsafe(l.length) : new Buffer(l.length), l.copy(y), y;
                                        t(l, Error) ? y = Object.create(l) : void 0 === s ? (v = Object.getPrototypeOf(l), y = Object.create(v)) : (y = Object.create(s), v = s)
                                    }
                                    if (u) {
                                        var b = f.indexOf(l);
                                        if (-1 != b) return p[b];
                                        f.push(l), p.push(y)
                                    }
                                    for (var m in t(l, e) && l.forEach((function(t, e) {
                                            var n = i(e, d - 1),
                                                r = i(t, d - 1);
                                            y.set(n, r)
                                        })), t(l, n) && l.forEach((function(t) {
                                            var e = i(t, d - 1);
                                            y.add(e)
                                        })), l) {
                                        var g;
                                        v && (g = Object.getOwnPropertyDescriptor(v, m)), g && null == g.set || (y[m] = i(l[m], d - 1))
                                    }
                                    if (Object.getOwnPropertySymbols) {
                                        var O = Object.getOwnPropertySymbols(l);
                                        for (m = 0; m < O.length; m++) {
                                            var N = O[m];
                                            (!(E = Object.getOwnPropertyDescriptor(l, N)) || E.enumerable || c) && (y[N] = i(l[N], d - 1), E.enumerable || Object.defineProperty(y, N, {
                                                enumerable: !1
                                            }))
                                        }
                                    }
                                    if (c) {
                                        var w = Object.getOwnPropertyNames(l);
                                        for (m = 0; m < w.length; m++) {
                                            var E, A = w[m];
                                            (E = Object.getOwnPropertyDescriptor(l, A)) && E.enumerable || (y[A] = i(l[A], d - 1), Object.defineProperty(y, A, {
                                                enumerable: !1
                                            }))
                                        }
                                    }
                                    return y
                                }(i, l)
                        }

                        function i(t) {
                            return Object.prototype.toString.call(t)
                        }

                        function a(t) {
                            var e = "";
                            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
                        }
                        return o.clonePrototype = function(t) {
                            if (null === t) return null;
                            var e = function() {};
                            return e.prototype = t, new e
                        }, o.__objToStr = i, o.__isDate = function(t) {
                            return "object" == typeof t && "[object Date]" === i(t)
                        }, o.__isArray = function(t) {
                            return "object" == typeof t && "[object Array]" === i(t)
                        }, o.__isRegExp = function(t) {
                            return "object" == typeof t && "[object RegExp]" === i(t)
                        }, o.__getRegExpFlags = a, o
                    }();
                    "object" == typeof t && t.exports && (t.exports = n)
                }, function(t, e, n) {
                    var r = n(42),
                        o = n(60),
                        i = n(64),
                        a = n(66),
                        u = n(67),
                        l = n(69),
                        s = Date.prototype.getTime;

                    function c(t, e, n) {
                        var h = n || {};
                        return !!(h.strict ? i(t, e) : t === e) || (!t || !e || "object" != typeof t && "object" != typeof e ? h.strict ? i(t, e) : t == e : function(t, e, n) {
                            var i, h;
                            if (typeof t != typeof e) return !1;
                            if (f(t) || f(e)) return !1;
                            if (t.prototype !== e.prototype) return !1;
                            if (o(t) !== o(e)) return !1;
                            var d = a(t),
                                y = a(e);
                            if (d !== y) return !1;
                            if (d || y) return t.source === e.source && u(t) === u(e);
                            if (l(t) && l(e)) return s.call(t) === s.call(e);
                            var v = p(t),
                                b = p(e);
                            if (v !== b) return !1;
                            if (v || b) {
                                if (t.length !== e.length) return !1;
                                for (i = 0; i < t.length; i++)
                                    if (t[i] !== e[i]) return !1;
                                return !0
                            }
                            if (typeof t != typeof e) return !1;
                            try {
                                var m = r(t),
                                    g = r(e)
                            } catch (O) {
                                return !1
                            }
                            if (m.length !== g.length) return !1;
                            for (m.sort(), g.sort(), i = m.length - 1; i >= 0; i--)
                                if (m[i] != g[i]) return !1;
                            for (i = m.length - 1; i >= 0; i--)
                                if (!c(t[h = m[i]], e[h], n)) return !1;
                            return !0
                        }(t, e, h))
                    }

                    function f(t) {
                        return null == t
                    }

                    function p(t) {
                        return !(!t || "object" != typeof t || "number" != typeof t.length || "function" != typeof t.copy || "function" != typeof t.slice || t.length > 0 && "number" != typeof t[0])
                    }
                    t.exports = c
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "b", (function() {
                        return S
                    })), n.d(e, "a", (function() {
                        return k
                    })), n.d(e, "d", (function() {
                        return T
                    })), n.d(e, "c", (function() {
                        return P
                    }));
                    var r = n(17),
                        o = n.n(r),
                        i = n(18),
                        a = n.n(i),
                        u = n(7),
                        l = n.n(u),
                        s = n(1),
                        c = n.n(s),
                        f = n(2),
                        p = n(0),
                        h = n(12),
                        d = n(10);

                    function y(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function v(t) {
                        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function b(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
                            if (null != n) {
                                var r, o, i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                                } catch (l) {
                                    u = !0, o = l
                                } finally {
                                    try {
                                        a || null == n.return || n.return()
                                    } finally {
                                        if (u) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return m(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function m(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function g(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function O(t, e) {
                        return (O = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function N(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = E(t);
                            if (e) {
                                var o = E(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return w(this, n)
                        }
                    }

                    function w(t, e) {
                        return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function E(t) {
                        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var A = Object(h.a)("quill:keyboard"),
                        k = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
                        S = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && O(t, e)
                            }(i, t);
                            var e, n, r, o = N(i);

                            function i(t, e) {
                                var n;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, i), (n = o.call(this, t, e)).bindings = {}, Object.keys(n.options.bindings).forEach((function(t) {
                                    n.options.bindings[t] && n.addBinding(n.options.bindings[t])
                                })), n.addBinding({
                                    key: "Enter",
                                    shiftKey: null
                                }, n.handleEnter), n.addBinding({
                                    key: "Enter",
                                    metaKey: null,
                                    ctrlKey: null,
                                    altKey: null
                                }, (function() {})), /Firefox/i.test(navigator.userAgent) ? (n.addBinding({
                                    key: "Backspace"
                                }, {
                                    collapsed: !0
                                }, n.handleBackspace), n.addBinding({
                                    key: "Delete"
                                }, {
                                    collapsed: !0
                                }, n.handleDelete)) : (n.addBinding({
                                    key: "Backspace"
                                }, {
                                    collapsed: !0,
                                    prefix: /^.?$/
                                }, n.handleBackspace), n.addBinding({
                                    key: "Delete"
                                }, {
                                    collapsed: !0,
                                    suffix: /^.?$/
                                }, n.handleDelete)), n.addBinding({
                                    key: "Backspace"
                                }, {
                                    collapsed: !1
                                }, n.handleDeleteRange), n.addBinding({
                                    key: "Delete"
                                }, {
                                    collapsed: !1
                                }, n.handleDeleteRange), n.addBinding({
                                    key: "Backspace",
                                    altKey: null,
                                    ctrlKey: null,
                                    metaKey: null,
                                    shiftKey: null
                                }, {
                                    collapsed: !0,
                                    offset: 0
                                }, n.handleBackspace), n.listen(), n
                            }
                            return e = i, r = [{
                                key: "match",
                                value: function(t, e) {
                                    return !["altKey", "ctrlKey", "metaKey", "shiftKey"].some((function(n) {
                                        return !!e[n] !== t[n] && null !== e[n]
                                    })) && (e.key === t.key || e.key === t.which)
                                }
                            }], (n = [{
                                key: "addBinding",
                                value: function(t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        o = T(t);
                                    if (null != o) {
                                        "function" == typeof n && (n = {
                                            handler: n
                                        }), "function" == typeof r && (r = {
                                            handler: r
                                        });
                                        var i = Array.isArray(o.key) ? o.key : [o.key];
                                        i.forEach((function(t) {
                                            var i = l()({}, o, {
                                                key: t
                                            }, n, r);
                                            e.bindings[i.key] = e.bindings[i.key] || [], e.bindings[i.key].push(i)
                                        }))
                                    } else A.warn("Attempted to add invalid keyboard binding", o)
                                }
                            }, {
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    this.quill.root.addEventListener("keydown", (function(e) {
                                        var n = "Enter" === e.key && 229 === e.which,
                                            r = e.isComposing || n;
                                        if (!e.defaultPrevented && !r) {
                                            var o = (t.bindings[e.key] || []).concat(t.bindings[e.which] || []).filter((function(t) {
                                                return i.match(e, t)
                                            }));
                                            if (0 !== o.length) {
                                                var u = t.quill.getSelection();
                                                if (null != u && t.quill.hasFocus()) {
                                                    var l = b(t.quill.getLine(u.index), 2),
                                                        s = l[0],
                                                        c = l[1],
                                                        p = b(t.quill.getLeaf(u.index), 2),
                                                        h = p[0],
                                                        d = p[1],
                                                        y = b(0 === u.length ? [h, d] : t.quill.getLeaf(u.index + u.length), 2),
                                                        m = y[0],
                                                        g = y[1],
                                                        O = h instanceof f.TextBlot ? h.value().slice(0, d) : "",
                                                        N = m instanceof f.TextBlot ? m.value().slice(g) : "",
                                                        w = {
                                                            collapsed: 0 === u.length,
                                                            empty: 0 === u.length && s.length() <= 1,
                                                            format: t.quill.getFormat(u),
                                                            line: s,
                                                            offset: c,
                                                            prefix: O,
                                                            suffix: N,
                                                            event: e
                                                        };
                                                    o.some((function(e) {
                                                        if (null != e.collapsed && e.collapsed !== w.collapsed) return !1;
                                                        if (null != e.empty && e.empty !== w.empty) return !1;
                                                        if (null != e.offset && e.offset !== w.offset) return !1;
                                                        if (Array.isArray(e.format)) {
                                                            if (e.format.every((function(t) {
                                                                    return null == w.format[t]
                                                                }))) return !1
                                                        } else if ("object" === v(e.format) && !Object.keys(e.format).every((function(t) {
                                                                return !0 === e.format[t] ? null != w.format[t] : !1 === e.format[t] ? null == w.format[t] : a()(e.format[t], w.format[t])
                                                            }))) return !1;
                                                        return !(null != e.prefix && !e.prefix.test(w.prefix) || null != e.suffix && !e.suffix.test(w.suffix) || !0 === e.handler.call(t, u, w, e))
                                                    })) && e.preventDefault()
                                                }
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "handleBackspace",
                                value: function(t, e) {
                                    var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                                    if (!(0 === t.index || this.quill.getLength() <= 1)) {
                                        var r = {},
                                            o = b(this.quill.getLine(t.index), 1)[0],
                                            i = (new c.a).retain(t.index - n).delete(n);
                                        if (0 === e.offset && b(this.quill.getLine(t.index - 1), 1)[0]) {
                                            var a = o.formats(),
                                                u = this.quill.getFormat(t.index - 1, 1);
                                            if (r = s.AttributeMap.diff(a, u) || {}, Object.keys(r).length > 0) {
                                                var l = (new c.a).retain(t.index + o.length() - 2).retain(1, r);
                                                i = i.compose(l)
                                            }
                                        }
                                        this.quill.updateContents(i, p.a.sources.USER), this.quill.focus()
                                    }
                                }
                            }, {
                                key: "handleDelete",
                                value: function(t, e) {
                                    var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
                                    if (!(t.index >= this.quill.getLength() - n)) {
                                        var r = {},
                                            o = b(this.quill.getLine(t.index), 1)[0],
                                            i = (new c.a).retain(t.index).delete(n);
                                        if (e.offset >= o.length() - 1) {
                                            var a = b(this.quill.getLine(t.index + 1), 1)[0];
                                            if (a) {
                                                var u = o.formats(),
                                                    l = this.quill.getFormat(t.index, 1);
                                                r = s.AttributeMap.diff(u, l) || {}, Object.keys(r).length > 0 && (i = i.retain(a.length() - 1).retain(1, r))
                                            }
                                        }
                                        this.quill.updateContents(i, p.a.sources.USER), this.quill.focus()
                                    }
                                }
                            }, {
                                key: "handleDeleteRange",
                                value: function(t) {
                                    P({
                                        range: t,
                                        quill: this.quill
                                    }), this.quill.focus()
                                }
                            }, {
                                key: "handleEnter",
                                value: function(t, e) {
                                    var n = this,
                                        r = Object.keys(e.format).reduce((function(t, r) {
                                            return n.quill.scroll.query(r, f.Scope.BLOCK) && !Array.isArray(e.format[r]) && (t[r] = e.format[r]), t
                                        }), {}),
                                        o = (new c.a).retain(t.index).delete(t.length).insert("\n", r);
                                    this.quill.updateContents(o, p.a.sources.USER), this.quill.setSelection(t.index + 1, p.a.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach((function(t) {
                                        null == r[t] && (Array.isArray(e.format[t]) || "code" !== t && "link" !== t && n.quill.format(t, e.format[t], p.a.sources.USER))
                                    }))
                                }
                            }]) && g(e.prototype, n), r && g(e, r), i
                        }(d.a);

                    function x(t) {
                        return {
                            key: "Tab",
                            shiftKey: !t,
                            format: {
                                "code-block": !0
                            },
                            handler: function(e) {
                                var n = this.quill.scroll.query("code-block"),
                                    r = 0 === e.length ? this.quill.getLines(e.index, 1) : this.quill.getLines(e),
                                    o = e.index,
                                    i = e.length;
                                r.forEach((function(e, r) {
                                    t ? (e.insertAt(0, n.TAB), 0 === r ? o += n.TAB.length : i += n.TAB.length) : e.domNode.textContent.startsWith(n.TAB) && (e.deleteAt(0, n.TAB.length), 0 === r ? o -= n.TAB.length : i -= n.TAB.length)
                                })), this.quill.update(p.a.sources.USER), this.quill.setSelection(o, i, p.a.sources.SILENT)
                            }
                        }
                    }

                    function j(t, e) {
                        var n;
                        return y(n = {
                            key: t,
                            shiftKey: e,
                            altKey: null
                        }, "ArrowLeft" === t ? "prefix" : "suffix", /^$/), y(n, "handler", (function(n) {
                            var r = n.index;
                            return "ArrowRight" === t && (r += n.length + 1), !(b(this.quill.getLeaf(r), 1)[0] instanceof f.EmbedBlot && ("ArrowLeft" === t ? e ? this.quill.setSelection(n.index - 1, n.length + 1, p.a.sources.USER) : this.quill.setSelection(n.index - 1, p.a.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, p.a.sources.USER) : this.quill.setSelection(n.index + n.length + 1, p.a.sources.USER), 1))
                        })), n
                    }

                    function _(t) {
                        return {
                            key: t[0],
                            shortKey: !0,
                            handler: function(e, n) {
                                this.quill.format(t, !n.format[t], p.a.sources.USER)
                            }
                        }
                    }

                    function R(t) {
                        return {
                            key: t ? "ArrowUp" : "ArrowDown",
                            collapsed: !0,
                            format: ["table"],
                            handler: function(e, n) {
                                var r = t ? "prev" : "next",
                                    o = n.line,
                                    i = o.parent[r];
                                if (null != i) {
                                    if ("table-row" === i.statics.blotName) {
                                        for (var a = i.children.head, u = o; null != u.prev;) u = u.prev, a = a.next;
                                        var l = a.offset(this.quill.scroll) + Math.min(n.offset, a.length() - 1);
                                        this.quill.setSelection(l, 0, p.a.sources.USER)
                                    }
                                } else {
                                    var s = o.table()[r];
                                    null != s && (t ? this.quill.setSelection(s.offset(this.quill.scroll) + s.length() - 1, 0, p.a.sources.USER) : this.quill.setSelection(s.offset(this.quill.scroll), 0, p.a.sources.USER))
                                }
                                return !1
                            }
                        }
                    }

                    function T(t) {
                        if ("string" == typeof t || "number" == typeof t) t = {
                            key: t
                        };
                        else {
                            if ("object" !== v(t)) return null;
                            t = o()(t, !1)
                        }
                        return t.shortKey && (t[k] = t.shortKey, delete t.shortKey), t
                    }

                    function P(t) {
                        var e = t.quill,
                            n = t.range,
                            r = e.getLines(n),
                            o = {};
                        if (r.length > 1) {
                            var i = r[0].formats(),
                                a = r[r.length - 1].formats();
                            o = s.AttributeMap.diff(a, i) || {}
                        }
                        e.deleteText(n, p.a.sources.USER), Object.keys(o).length > 0 && e.formatLine(n.index, 1, o, p.a.sources.USER), e.setSelection(n.index, p.a.sources.SILENT)
                    }
                    S.DEFAULTS = {
                        bindings: {
                            bold: _("bold"),
                            italic: _("italic"),
                            underline: _("underline"),
                            indent: {
                                key: "Tab",
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "+1", p.a.sources.USER), !1)
                                }
                            },
                            outdent: {
                                key: "Tab",
                                shiftKey: !0,
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "-1", p.a.sources.USER), !1)
                                }
                            },
                            "outdent backspace": {
                                key: "Backspace",
                                collapsed: !0,
                                shiftKey: null,
                                metaKey: null,
                                ctrlKey: null,
                                altKey: null,
                                format: ["indent", "list"],
                                offset: 0,
                                handler: function(t, e) {
                                    null != e.format.indent ? this.quill.format("indent", "-1", p.a.sources.USER) : null != e.format.list && this.quill.format("list", !1, p.a.sources.USER)
                                }
                            },
                            "indent code-block": x(!0),
                            "outdent code-block": x(!1),
                            "remove tab": {
                                key: "Tab",
                                shiftKey: !0,
                                collapsed: !0,
                                prefix: /\t$/,
                                handler: function(t) {
                                    this.quill.deleteText(t.index - 1, 1, p.a.sources.USER)
                                }
                            },
                            tab: {
                                key: "Tab",
                                handler: function(t, e) {
                                    if (e.format.table) return !0;
                                    this.quill.history.cutoff();
                                    var n = (new c.a).retain(t.index).delete(t.length).insert("\t");
                                    return this.quill.updateContents(n, p.a.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, p.a.sources.SILENT), !1
                                }
                            },
                            "blockquote empty enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["blockquote"],
                                empty: !0,
                                handler: function() {
                                    this.quill.format("blockquote", !1, p.a.sources.USER)
                                }
                            },
                            "list empty enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["list"],
                                empty: !0,
                                handler: function(t, e) {
                                    var n = {
                                        list: !1
                                    };
                                    e.format.indent && (n.indent = !1), this.quill.formatLine(t.index, t.length, n, p.a.sources.USER)
                                }
                            },
                            "checklist enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: {
                                    list: "checked"
                                },
                                handler: function(t) {
                                    var e = b(this.quill.getLine(t.index), 2),
                                        n = e[0],
                                        r = e[1],
                                        o = l()({}, n.formats(), {
                                            list: "checked"
                                        }),
                                        i = (new c.a).retain(t.index).insert("\n", o).retain(n.length() - r - 1).retain(1, {
                                            list: "unchecked"
                                        });
                                    this.quill.updateContents(i, p.a.sources.USER), this.quill.setSelection(t.index + 1, p.a.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "header enter": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["header"],
                                suffix: /^$/,
                                handler: function(t, e) {
                                    var n = b(this.quill.getLine(t.index), 2),
                                        r = n[0],
                                        o = n[1],
                                        i = (new c.a).retain(t.index).insert("\n", e.format).retain(r.length() - o - 1).retain(1, {
                                            header: null
                                        });
                                    this.quill.updateContents(i, p.a.sources.USER), this.quill.setSelection(t.index + 1, p.a.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "table backspace": {
                                key: "Backspace",
                                format: ["table"],
                                collapsed: !0,
                                offset: 0,
                                handler: function() {}
                            },
                            "table delete": {
                                key: "Delete",
                                format: ["table"],
                                collapsed: !0,
                                suffix: /^$/,
                                handler: function() {}
                            },
                            "table enter": {
                                key: "Enter",
                                shiftKey: null,
                                format: ["table"],
                                handler: function(t) {
                                    var e = this.quill.getModule("table");
                                    if (e) {
                                        var n = b(e.getTable(t), 4),
                                            r = n[0],
                                            o = function(t, e, n, r) {
                                                return null == e.prev && null == e.next ? null == n.prev && null == n.next ? 0 === r ? -1 : 1 : null == n.prev ? -1 : 1 : null == e.prev ? -1 : null == e.next ? 1 : null
                                            }(0, n[1], n[2], n[3]);
                                        if (null == o) return;
                                        var i = r.offset();
                                        if (o < 0) {
                                            var a = (new c.a).retain(i).insert("\n");
                                            this.quill.updateContents(a, p.a.sources.USER), this.quill.setSelection(t.index + 1, t.length, p.a.sources.SILENT)
                                        } else if (o > 0) {
                                            i += r.length();
                                            var u = (new c.a).retain(i).insert("\n");
                                            this.quill.updateContents(u, p.a.sources.USER), this.quill.setSelection(i, p.a.sources.USER)
                                        }
                                    }
                                }
                            },
                            "table tab": {
                                key: "Tab",
                                shiftKey: null,
                                format: ["table"],
                                handler: function(t, e) {
                                    var n = e.event,
                                        r = e.line,
                                        o = r.offset(this.quill.scroll);
                                    n.shiftKey ? this.quill.setSelection(o - 1, p.a.sources.USER) : this.quill.setSelection(o + r.length(), p.a.sources.USER)
                                }
                            },
                            "list autofill": {
                                key: " ",
                                shiftKey: null,
                                collapsed: !0,
                                format: {
                                    list: !1,
                                    "code-block": !1,
                                    blockquote: !1,
                                    header: !1,
                                    table: !1
                                },
                                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                                handler: function(t, e) {
                                    if (null == this.quill.scroll.query("list")) return !0;
                                    var n, r = e.prefix.length,
                                        o = b(this.quill.getLine(t.index), 2),
                                        i = o[0],
                                        a = o[1];
                                    if (a > r) return !0;
                                    switch (e.prefix.trim()) {
                                        case "[]":
                                        case "[ ]":
                                            n = "unchecked";
                                            break;
                                        case "[x]":
                                            n = "checked";
                                            break;
                                        case "-":
                                        case "*":
                                            n = "bullet";
                                            break;
                                        default:
                                            n = "ordered"
                                    }
                                    this.quill.insertText(t.index, " ", p.a.sources.USER), this.quill.history.cutoff();
                                    var u = (new c.a).retain(t.index - a).delete(r + 1).retain(i.length() - 2 - a).retain(1, {
                                        list: n
                                    });
                                    return this.quill.updateContents(u, p.a.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - r, p.a.sources.SILENT), !1
                                }
                            },
                            "code exit": {
                                key: "Enter",
                                collapsed: !0,
                                format: ["code-block"],
                                prefix: /^$/,
                                suffix: /^\s*$/,
                                handler: function(t) {
                                    for (var e = b(this.quill.getLine(t.index), 2), n = e[0], r = e[1], o = 2, i = n; null != i && i.length() <= 1 && i.formats()["code-block"];)
                                        if (i = i.prev, (o -= 1) <= 0) {
                                            var a = (new c.a).retain(t.index + n.length() - r - 2).retain(1, {
                                                "code-block": null
                                            }).delete(1);
                                            return this.quill.updateContents(a, p.a.sources.USER), this.quill.setSelection(t.index - 1, p.a.sources.SILENT), !1
                                        }
                                    return !0
                                }
                            },
                            "embed left": j("ArrowLeft", !1),
                            "embed left shift": j("ArrowLeft", !0),
                            "embed right": j("ArrowRight", !1),
                            "embed right shift": j("ArrowRight", !0),
                            "table down": R(!1),
                            "table up": R(!0)
                        }
                    }
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var o = function() {
                        function t(e, n) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.quill = e, this.options = n, this.modules = {}
                        }
                        var e, n, o;
                        return e = t, (n = [{
                            key: "init",
                            value: function() {
                                var t = this;
                                Object.keys(this.options.modules).forEach((function(e) {
                                    null == t.modules[e] && t.addModule(e)
                                }))
                            }
                        }, {
                            key: "addModule",
                            value: function(t) {
                                var e = this.quill.constructor.import("modules/".concat(t));
                                return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
                            }
                        }]) && r(e.prototype, n), o && r(e, o), t
                    }();
                    o.DEFAULTS = {
                        modules: {}
                    }, o.themes = {
                        default: o
                    }, e.a = o
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return p
                    })), n.d(e, "b", (function() {
                        return h
                    })), n.d(e, "c", (function() {
                        return d
                    }));
                    var r = n(2);

                    function o(t) {
                        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function a(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function u(t, e, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function l(t, e) {
                        return (l = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function s(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = f(t);
                            if (e) {
                                var o = f(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return c(this, n)
                        }
                    }

                    function c(t, e) {
                        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function f(t) {
                        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var p = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && l(t, e)
                            }(c, t);
                            var e, n, r, o = s(c);

                            function c() {
                                return i(this, c), o.apply(this, arguments)
                            }
                            return e = c, (n = [{
                                key: "value",
                                value: function(t) {
                                    var e = u(f(c.prototype), "value", this).call(this, t);
                                    if (!e.startsWith("rgb(")) return e;
                                    e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
                                    var n = e.split(",").map((function(t) {
                                        return "00".concat(parseInt(t, 10).toString(16)).slice(-2)
                                    })).join("");
                                    return "#".concat(n)
                                }
                            }]) && a(e.prototype, n), r && a(e, r), c
                        }(r.StyleAttributor),
                        h = new r.ClassAttributor("color", "ql-color", {
                            scope: r.Scope.INLINE
                        }),
                        d = new p("color", "color", {
                            scope: r.Scope.INLINE
                        })
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return i
                    })), n.d(e, "b", (function() {
                        return a
                    })), n.d(e, "c", (function() {
                        return u
                    }));
                    var r = n(2),
                        o = {
                            scope: r.Scope.BLOCK,
                            whitelist: ["rtl"]
                        },
                        i = new r.Attributor("direction", "dir", o),
                        a = new r.ClassAttributor("direction", "ql-direction", o),
                        u = new r.StyleAttributor("direction", "direction", o)
                }, , function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return i
                    })), n.d(e, "b", (function() {
                        return a
                    })), n.d(e, "c", (function() {
                        return u
                    }));
                    var r = n(2),
                        o = {
                            scope: r.Scope.BLOCK,
                            whitelist: ["right", "center", "justify"]
                        },
                        i = new r.Attributor("align", "align", o),
                        a = new r.ClassAttributor("align", "ql-align", o),
                        u = new r.StyleAttributor("align", "text-align", o)
                }, function(t, e, n) {
                    "use strict";
                    var r = n(42),
                        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                        i = Object.prototype.toString,
                        a = Array.prototype.concat,
                        u = Object.defineProperty,
                        l = u && function() {
                            var t = {};
                            try {
                                for (var e in u(t, "x", {
                                        enumerable: !1,
                                        value: t
                                    }), t) return !1;
                                return t.x === t
                            } catch (n) {
                                return !1
                            }
                        }(),
                        s = function(t, e, n, r) {
                            var o;
                            (!(e in t) || "function" == typeof(o = r) && "[object Function]" === i.call(o) && r()) && (l ? u(t, e, {
                                configurable: !0,
                                enumerable: !1,
                                value: n,
                                writable: !0
                            }) : t[e] = n)
                        },
                        c = function(t, e) {
                            var n = arguments.length > 2 ? arguments[2] : {},
                                i = r(e);
                            o && (i = a.call(i, Object.getOwnPropertySymbols(e)));
                            for (var u = 0; u < i.length; u += 1) s(t, i[u], e[i[u]], n[i[u]])
                        };
                    c.supportsDescriptors = !!l, t.exports = c
                }, function(t, e, n) {
                    "use strict";
                    e.a = new WeakMap
                }, , , function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return i
                    })), n.d(e, "b", (function() {
                        return a
                    }));
                    var r = n(2),
                        o = n(21),
                        i = new r.ClassAttributor("background", "ql-bg", {
                            scope: r.Scope.INLINE
                        }),
                        a = new o.a("background", "background-color", {
                            scope: r.Scope.INLINE
                        })
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "b", (function() {
                        return d
                    })), n.d(e, "a", (function() {
                        return h
                    }));
                    var r = n(2);

                    function o(t) {
                        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function i(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function a(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function u(t, e, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function l(t, e) {
                        return (l = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function s(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = f(t);
                            if (e) {
                                var o = f(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return c(this, n)
                        }
                    }

                    function c(t, e) {
                        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function f(t) {
                        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var p = {
                            scope: r.Scope.INLINE,
                            whitelist: ["serif", "monospace"]
                        },
                        h = new r.ClassAttributor("font", "ql-font", p),
                        d = new(function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && l(t, e)
                            }(c, t);
                            var e, n, r, o = s(c);

                            function c() {
                                return i(this, c), o.apply(this, arguments)
                            }
                            return e = c, (n = [{
                                key: "value",
                                value: function(t) {
                                    return u(f(c.prototype), "value", this).call(this, t).replace(/["']/g, "")
                                }
                            }]) && a(e.prototype, n), r && a(e, r), c
                        }(r.StyleAttributor))("font", "font-family", p)
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return o
                    })), n.d(e, "b", (function() {
                        return i
                    }));
                    var r = n(2),
                        o = new r.ClassAttributor("size", "ql-size", {
                            scope: r.Scope.INLINE,
                            whitelist: ["small", "large", "huge"]
                        }),
                        i = new r.StyleAttributor("size", "font-size", {
                            scope: r.Scope.INLINE,
                            whitelist: ["10px", "18px", "32px"]
                        })
                }, , function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return y
                    })), n.d(e, "b", (function() {
                        return v
                    }));
                    var r = n(4),
                        o = n(15),
                        i = n(0);

                    function a(t) {
                        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function u(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function l(t, e, n) {
                        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function s(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function c(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && f(t, e)
                    }

                    function f(t, e) {
                        return (f = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function p(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = d(t);
                            if (e) {
                                var o = d(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return h(this, n)
                        }
                    }

                    function h(t, e) {
                        return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function d(t) {
                        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var y = function(t) {
                        c(n, t);
                        var e = p(n);

                        function n() {
                            return s(this, n), e.apply(this, arguments)
                        }
                        return n
                    }(o.a);
                    y.blotName = "list-container", y.tagName = "OL";
                    var v = function(t) {
                        c(a, t);
                        var e, n, r, o = p(a);

                        function a(t, e) {
                            var n;
                            s(this, a), n = o.call(this, t, e);
                            var r = e.ownerDocument.createElement("span"),
                                i = function(r) {
                                    if (t.isEnabled()) {
                                        var o = n.statics.formats(e, t);
                                        "checked" === o ? (n.format("list", "unchecked"), r.preventDefault()) : "unchecked" === o && (n.format("list", "checked"), r.preventDefault())
                                    }
                                };
                            return r.addEventListener("mousedown", i), r.addEventListener("touchstart", i), n.attachUI(r), n
                        }
                        return e = a, r = [{
                            key: "create",
                            value: function(t) {
                                var e = l(d(a), "create", this).call(this);
                                return e.setAttribute("data-list", t), e
                            }
                        }, {
                            key: "formats",
                            value: function(t) {
                                return t.getAttribute("data-list") || void 0
                            }
                        }, {
                            key: "register",
                            value: function() {
                                i.a.register(y)
                            }
                        }], (n = [{
                            key: "format",
                            value: function(t, e) {
                                t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : l(d(a.prototype), "format", this).call(this, t, e)
                            }
                        }]) && u(e.prototype, n), r && u(e, r), a
                    }(r.d);
                    v.blotName = "list", v.tagName = "LI", y.allowedChildren = [v], v.requiredContainer = y
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return p
                    })), n.d(e, "b", (function() {
                        return d
                    }));
                    var r = n(2),
                        o = n(0);

                    function i(t) {
                        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function a(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function u(t, e) {
                        return (u = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function l(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = f(t);
                            if (e) {
                                var o = f(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return s(this, n)
                        }
                    }

                    function s(t, e) {
                        return !e || "object" !== i(e) && "function" != typeof e ? c(t) : e
                    }

                    function c(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }

                    function f(t) {
                        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var p = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && u(t, e)
                        }(s, t);
                        var e, n, r, i = l(s);

                        function s(t, e) {
                            var n;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, s), (n = i.call(this, t, e)).lastRecorded = 0, n.ignoreChange = !1, n.clear(), n.quill.on(o.a.events.EDITOR_CHANGE, (function(t, e, r, i) {
                                t !== o.a.events.TEXT_CHANGE || n.ignoreChange || (n.options.userOnly && i !== o.a.sources.USER ? n.transform(e) : n.record(e, r))
                            })), n.quill.keyboard.addBinding({
                                key: "z",
                                shortKey: !0
                            }, n.undo.bind(c(n))), n.quill.keyboard.addBinding({
                                key: "z",
                                shortKey: !0,
                                shiftKey: !0
                            }, n.redo.bind(c(n))), /Win/i.test(navigator.platform) && n.quill.keyboard.addBinding({
                                key: "y",
                                shortKey: !0
                            }, n.redo.bind(c(n))), n.quill.root.addEventListener("beforeinput", (function(t) {
                                "historyUndo" === t.inputType ? (n.undo(), t.preventDefault()) : "historyRedo" === t.inputType && (n.redo(), t.preventDefault())
                            })), n
                        }
                        return e = s, (n = [{
                            key: "change",
                            value: function(t, e) {
                                if (0 !== this.stack[t].length) {
                                    var n = this.stack[t].pop(),
                                        r = this.quill.getContents(),
                                        i = n.invert(r);
                                    this.stack[e].push(i), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n, o.a.sources.USER), this.ignoreChange = !1;
                                    var a = d(this.quill.scroll, n);
                                    this.quill.setSelection(a)
                                }
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                this.stack = {
                                    undo: [],
                                    redo: []
                                }
                            }
                        }, {
                            key: "cutoff",
                            value: function() {
                                this.lastRecorded = 0
                            }
                        }, {
                            key: "record",
                            value: function(t, e) {
                                if (0 !== t.ops.length) {
                                    this.stack.redo = [];
                                    var n = t.invert(e),
                                        r = Date.now();
                                    if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                                        var o = this.stack.undo.pop();
                                        n = n.compose(o)
                                    } else this.lastRecorded = r;
                                    0 !== n.length() && (this.stack.undo.push(n), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift())
                                }
                            }
                        }, {
                            key: "redo",
                            value: function() {
                                this.change("redo", "undo")
                            }
                        }, {
                            key: "transform",
                            value: function(t) {
                                h(this.stack.undo, t), h(this.stack.redo, t)
                            }
                        }, {
                            key: "undo",
                            value: function() {
                                this.change("undo", "redo")
                            }
                        }]) && a(e.prototype, n), r && a(e, r), s
                    }(n(10).a);

                    function h(t, e) {
                        for (var n = e, r = t.length - 1; r >= 0; r -= 1) {
                            var o = t[r];
                            t[r] = n.transform(o, !0), n = o.transform(n), 0 === t[r].length() && t.splice(r, 1)
                        }
                    }

                    function d(t, e) {
                        var n = e.reduce((function(t, e) {
                                return t + (e.delete || 0)
                            }), 0),
                            o = e.length() - n;
                        return function(t, e) {
                            var n = e.ops[e.ops.length - 1];
                            return null != n && (null != n.insert ? "string" == typeof n.insert && n.insert.endsWith("\n") : null != n.attributes && Object.keys(n.attributes).some((function(e) {
                                return null != t.query(e, r.Scope.BLOCK)
                            })))
                        }(t, e) && (o -= 1), o
                    }
                    p.DEFAULTS = {
                        delay: 1e3,
                        maxStack: 100,
                        userOnly: !1
                    }
                }, , function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var r = n(0),
                        o = n(4),
                        i = n(9),
                        a = n(15),
                        u = n(16),
                        l = n(37),
                        s = n(11),
                        c = n(14),
                        f = n(8),
                        p = n(38),
                        h = n(34),
                        d = n(19),
                        y = n(1),
                        v = n.n(y),
                        b = n(3);

                    function m(t) {
                        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function g(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function O(t, e) {
                        return (O = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function N(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = E(t);
                            if (e) {
                                var o = E(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return w(this, n)
                        }
                    }

                    function w(t, e) {
                        return !e || "object" !== m(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function E(t) {
                        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var A = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && O(t, e)
                        }(i, t);
                        var e, n, r, o = N(i);

                        function i(t, e) {
                            var n;
                            return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, i), n = o.call(this, t, e), t.root.addEventListener("drop", (function(e) {
                                var r;
                                if (e.preventDefault(), document.caretRangeFromPoint) r = document.caretRangeFromPoint(e.clientX, e.clientY);
                                else {
                                    if (!document.caretPositionFromPoint) return;
                                    var o = document.caretPositionFromPoint(e.clientX, e.clientY);
                                    (r = document.createRange()).setStart(o.offsetNode, o.offset), r.setEnd(o.offsetNode, o.offset)
                                }
                                var i = t.selection.normalizeNative(r),
                                    a = t.selection.normalizedToRange(i);
                                n.upload(a, e.dataTransfer.files)
                            })), n
                        }
                        return e = i, (n = [{
                            key: "upload",
                            value: function(t, e) {
                                var n = this,
                                    r = [];
                                Array.from(e).forEach((function(t) {
                                    t && n.options.mimetypes.includes(t.type) && r.push(t)
                                })), r.length > 0 && this.options.handler.call(this, t, r)
                            }
                        }]) && g(e.prototype, n), r && g(e, r), i
                    }(n(10).a);
                    A.DEFAULTS = {
                        mimetypes: ["image/png", "image/jpeg"],
                        handler: function(t, e) {
                            var n = this,
                                r = e.map((function(t) {
                                    return new Promise((function(e) {
                                        var n = new FileReader;
                                        n.onload = function(t) {
                                            e(t.target.result)
                                        }, n.readAsDataURL(t)
                                    }))
                                }));
                            Promise.all(r).then((function(e) {
                                var r = e.reduce((function(t, e) {
                                    return t.insert({
                                        image: e
                                    })
                                }), (new v.a).retain(t.index).delete(t.length));
                                n.quill.updateContents(r, b.a.sources.USER), n.quill.setSelection(t.index + e.length, b.a.sources.SILENT)
                            }))
                        }
                    };
                    var k = A;
                    r.a.register({
                        "blots/block": o.d,
                        "blots/block/embed": o.a,
                        "blots/break": i.a,
                        "blots/container": a.a,
                        "blots/cursor": u.a,
                        "blots/embed": l.a,
                        "blots/inline": s.a,
                        "blots/scroll": c.a,
                        "blots/text": f.a,
                        "modules/clipboard": p.a,
                        "modules/history": h.a,
                        "modules/keyboard": d.b,
                        "modules/uploader": k
                    }), e.default = {
                        Quill: r.a
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        o = n(8);

                    function i(t) {
                        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function a(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function u(t, e, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                            var r = function(t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
                                return t
                            }(t, e);
                            if (r) {
                                var o = Object.getOwnPropertyDescriptor(r, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        })(t, e, n || t)
                    }

                    function l(t, e) {
                        return (l = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function s(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = f(t);
                            if (e) {
                                var o = f(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return c(this, n)
                        }
                    }

                    function c(t, e) {
                        return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t) : e
                    }

                    function f(t) {
                        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var p = "\ufeff",
                        h = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && l(t, e)
                            }(c, t);
                            var e, n, r, i = s(c);

                            function c(t, e) {
                                var n;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, c), (n = i.call(this, t, e)).contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), Array.from(n.domNode.childNodes).forEach((function(t) {
                                    n.contentNode.appendChild(t)
                                })), n.leftGuard = document.createTextNode(p), n.rightGuard = document.createTextNode(p), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n
                            }
                            return e = c, (n = [{
                                key: "index",
                                value: function(t, e) {
                                    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : u(f(c.prototype), "index", this).call(this, t, e)
                                }
                            }, {
                                key: "restore",
                                value: function(t) {
                                    var e, n, r = t.data.split(p).join("");
                                    if (t === this.leftGuard)
                                        if (this.prev instanceof o.a) {
                                            var i = this.prev.length();
                                            this.prev.insertAt(i, r), e = {
                                                startNode: this.prev.domNode,
                                                startOffset: i + r.length
                                            }
                                        } else n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this), e = {
                                            startNode: n,
                                            startOffset: r.length
                                        };
                                    else t === this.rightGuard && (this.next instanceof o.a ? (this.next.insertAt(0, r), e = {
                                        startNode: this.next.domNode,
                                        startOffset: r.length
                                    }) : (n = document.createTextNode(r), this.parent.insertBefore(this.scroll.create(n), this.next), e = {
                                        startNode: n,
                                        startOffset: r.length
                                    }));
                                    return t.data = p, e
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    t.forEach((function(t) {
                                        if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
                                            var r = n.restore(t.target);
                                            r && (e.range = r)
                                        }
                                    }))
                                }
                            }]) && a(e.prototype, n), r && a(e, r), c
                        }(r.EmbedBlot);
                    e.a = h
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return B
                    })), n.d(e, "b", (function() {
                        return F
                    }));
                    var r = n(7),
                        o = n.n(r),
                        i = n(1),
                        a = n.n(i),
                        u = n(2),
                        l = n(4),
                        s = n(0),
                        c = n(12),
                        f = n(10),
                        p = n(24),
                        h = n(29),
                        d = n(13),
                        y = n(21),
                        v = n(22),
                        b = n(30),
                        m = n(31),
                        g = n(19);

                    function O(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function N(t) {
                        return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function w(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function E(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
                            if (null != n) {
                                var r, o, i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                                } catch (l) {
                                    u = !0, o = l
                                } finally {
                                    try {
                                        a || null == n.return || n.return()
                                    } finally {
                                        if (u) throw o
                                    }
                                }
                                return i
                            }
                        }(t, e) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return A(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(t, e) : void 0
                            }
                        }(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function A(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }

                    function k(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function S(t, e) {
                        return (S = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }

                    function x(t) {
                        var e = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = R(t);
                            if (e) {
                                var o = R(this).constructor;
                                n = Reflect.construct(r, arguments, o)
                            } else n = r.apply(this, arguments);
                            return j(this, n)
                        }
                    }

                    function j(t, e) {
                        return !e || "object" !== N(e) && "function" != typeof e ? _(t) : e
                    }

                    function _(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }

                    function R(t) {
                        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    var T = Object(c.a)("quill:clipboard"),
                        P = [
                            [Node.TEXT_NODE, function(t, e) {
                                var n = t.data;
                                if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
                                if (0 === n.trim().length && n.includes("\n")) return e;
                                if (!M(t)) {
                                    var r = function(t, e) {
                                        var n = e.replace(/[^\u00a0]/g, "");
                                        return n.length < 1 && t ? " " : n
                                    };
                                    n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && D(t.parentNode) || null != t.previousSibling && D(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && D(t.parentNode) || null != t.nextSibling && D(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
                                }
                                return e.insert(n)
                            }],
                            [Node.TEXT_NODE, z],
                            ["br", function(t, e) {
                                return q(e, "\n") || e.insert("\n"), e
                            }],
                            [Node.ELEMENT_NODE, z],
                            [Node.ELEMENT_NODE, function(t, e, n) {
                                var r = n.query(t);
                                if (null == r) return e;
                                if (r.prototype instanceof u.EmbedBlot) {
                                    var o = {},
                                        i = r.value(t);
                                    if (null != i) return o[r.blotName] = i, (new a.a).insert(o, r.formats(t, n))
                                } else if (r.prototype instanceof u.BlockBlot && !q(e, "\n") && e.insert("\n"), "function" == typeof r.formats) return I(e, r.blotName, r.formats(t, n));
                                return e
                            }],
                            [Node.ELEMENT_NODE, function(t, e, n) {
                                var r = u.Attributor.keys(t),
                                    o = u.ClassAttributor.keys(t),
                                    i = u.StyleAttributor.keys(t),
                                    a = {};
                                return r.concat(o).concat(i).forEach((function(e) {
                                    var r = n.query(e, u.Scope.ATTRIBUTE);
                                    null != r && (a[r.attrName] = r.value(t), a[r.attrName]) || (null == (r = C[e]) || r.attrName !== e && r.keyName !== e || (a[r.attrName] = r.value(t) || void 0), null == (r = L[e]) || r.attrName !== e && r.keyName !== e || (r = L[e], a[r.attrName] = r.value(t) || void 0))
                                })), Object.keys(a).length > 0 ? I(e, a) : e
                            }],
                            [Node.ELEMENT_NODE, function(t, e) {
                                var n = {},
                                    r = t.style || {};
                                return "italic" === r.fontStyle && (n.italic = !0), (r.fontWeight.startsWith("bold") || parseInt(r.fontWeight, 10) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = I(e, n)), parseFloat(r.textIndent || 0) > 0 ? (new a.a).insert("\t").concat(e) : e
                            }],
                            ["li", function(t, e, n) {
                                var r = n.query(t);
                                if (null == r || "list" !== r.blotName || !q(e, "\n")) return e;
                                for (var o = -1, i = t.parentNode; null != i;)["OL", "UL"].includes(i.tagName) && (o += 1), i = i.parentNode;
                                return o <= 0 ? e : e.reduce((function(t, e) {
                                    return e.attributes && "number" == typeof e.attributes.indent ? t.push(e) : t.insert(e.insert, function(t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = null != arguments[e] ? arguments[e] : {};
                                            e % 2 ? O(Object(n), !0).forEach((function(e) {
                                                w(t, e, n[e])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                            }))
                                        }
                                        return t
                                    }({
                                        indent: o
                                    }, e.attributes || {}))
                                }), new a.a)
                            }],
                            ["ol, ul", function(t, e) {
                                var n = "OL" === t.tagName ? "ordered" : "bullet";
                                return I(e, "list", n)
                            }],
                            ["pre", function(t, e, n) {
                                var r = n.query("code-block"),
                                    o = !r || r.formats(t, n);
                                return I(e, "code-block", o)
                            }],
                            ["tr", function(t, e) {
                                var n = "TABLE" === t.parentNode.tagName ? t.parentNode : t.parentNode.parentNode,
                                    r = Array.from(n.querySelectorAll("tr")).indexOf(t) + 1;
                                return I(e, "table", r)
                            }],
                            ["b", K.bind(K, "bold")],
                            ["i", K.bind(K, "italic")],
                            ["style", function() {
                                return new a.a
                            }]
                        ],
                        C = [p.a, v.a].reduce((function(t, e) {
                            return t[e.keyName] = e, t
                        }), {}),
                        L = [p.c, h.b, y.c, v.c, b.b, m.b].reduce((function(t, e) {
                            return t[e.keyName] = e, t
                        }), {}),
                        B = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && S(t, e)
                            }(i, t);
                            var e, n, r, o = x(i);

                            function i(t, e) {
                                var n;
                                return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, i), (n = o.call(this, t, e)).quill.root.addEventListener("copy", (function(t) {
                                    return n.onCaptureCopy(t, !1)
                                })), n.quill.root.addEventListener("cut", (function(t) {
                                    return n.onCaptureCopy(t, !0)
                                })), n.quill.root.addEventListener("paste", n.onCapturePaste.bind(_(n))), n.matchers = [], P.concat(n.options.matchers).forEach((function(t) {
                                    var e = E(t, 2),
                                        r = e[0],
                                        o = e[1];
                                    n.addMatcher(r, o)
                                })), n
                            }
                            return e = i, (n = [{
                                key: "addMatcher",
                                value: function(t, e) {
                                    this.matchers.push([t, e])
                                }
                            }, {
                                key: "convert",
                                value: function(t) {
                                    var e = t.html,
                                        n = t.text,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (r[d.c.blotName]) return (new a.a).insert(n, w({}, d.c.blotName, r[d.c.blotName]));
                                    if (!e) return (new a.a).insert(n || "");
                                    var o = (new DOMParser).parseFromString(e, "text/html"),
                                        i = o.body,
                                        u = new WeakMap,
                                        l = this.prepareMatching(i, u),
                                        s = E(l, 2),
                                        c = s[0],
                                        f = s[1],
                                        p = F(this.quill.scroll, i, c, f, u);
                                    return q(p, "\n") && (null == p.ops[p.ops.length - 1].attributes || r.table) ? p.compose((new a.a).retain(p.length() - 1).delete(1)) : p
                                }
                            }, {
                                key: "dangerouslyPasteHTML",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a.sources.API;
                                    if ("string" == typeof t) {
                                        var r = this.convert({
                                            html: t,
                                            text: ""
                                        });
                                        this.quill.setContents(r, e), this.quill.setSelection(0, s.a.sources.SILENT)
                                    } else {
                                        var o = this.convert({
                                            html: e,
                                            text: ""
                                        });
                                        this.quill.updateContents((new a.a).retain(t).concat(o), n), this.quill.setSelection(t + o.length(), s.a.sources.SILENT)
                                    }
                                }
                            }, {
                                key: "onCaptureCopy",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (!t.defaultPrevented) {
                                        t.preventDefault();
                                        var n = this.quill.selection.getRange(),
                                            r = E(n, 1),
                                            o = r[0];
                                        if (null != o) {
                                            var i = this.onCopy(o, e),
                                                a = i.html,
                                                u = i.text;
                                            t.clipboardData.setData("text/plain", u), t.clipboardData.setData("text/html", a), e && Object(g.c)({
                                                range: o,
                                                quill: this.quill
                                            })
                                        }
                                    }
                                }
                            }, {
                                key: "onCapturePaste",
                                value: function(t) {
                                    if (!t.defaultPrevented && this.quill.isEnabled()) {
                                        t.preventDefault();
                                        var e = this.quill.getSelection(!0);
                                        if (null != e) {
                                            var n = t.clipboardData.getData("text/html"),
                                                r = t.clipboardData.getData("text/plain"),
                                                o = Array.from(t.clipboardData.files || []);
                                            !n && o.length > 0 ? this.quill.uploader.upload(e, o) : this.onPaste(e, {
                                                html: n,
                                                text: r
                                            })
                                        }
                                    }
                                }
                            }, {
                                key: "onCopy",
                                value: function(t) {
                                    var e = this.quill.getText(t);
                                    return {
                                        html: this.quill.getSemanticHTML(t),
                                        text: e
                                    }
                                }
                            }, {
                                key: "onPaste",
                                value: function(t, e) {
                                    var n = e.text,
                                        r = e.html,
                                        o = this.quill.getFormat(t.index),
                                        i = this.convert({
                                            text: n,
                                            html: r
                                        }, o);
                                    T.log("onPaste", i, {
                                        text: n,
                                        html: r
                                    });
                                    var u = (new a.a).retain(t.index).delete(t.length).concat(i);
                                    this.quill.updateContents(u, s.a.sources.USER), this.quill.setSelection(u.length() - t.length, s.a.sources.SILENT), this.quill.scrollIntoView()
                                }
                            }, {
                                key: "prepareMatching",
                                value: function(t, e) {
                                    var n = [],
                                        r = [];
                                    return this.matchers.forEach((function(o) {
                                        var i = E(o, 2),
                                            a = i[0],
                                            u = i[1];
                                        switch (a) {
                                            case Node.TEXT_NODE:
                                                r.push(u);
                                                break;
                                            case Node.ELEMENT_NODE:
                                                n.push(u);
                                                break;
                                            default:
                                                Array.from(t.querySelectorAll(a)).forEach((function(t) {
                                                    e.has(t) ? e.get(t).push(u) : e.set(t, [u])
                                                }))
                                        }
                                    })), [n, r]
                                }
                            }]) && k(e.prototype, n), r && k(e, r), i
                        }(f.a);

                    function I(t, e, n) {
                        return "object" === N(e) ? Object.keys(e).reduce((function(t, n) {
                            return I(t, n, e[n])
                        }), t) : t.reduce((function(t, r) {
                            return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, o()({}, w({}, e, n), r.attributes))
                        }), new a.a)
                    }

                    function q(t, e) {
                        for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
                            var o = t.ops[r];
                            if ("string" != typeof o.insert) break;
                            n = o.insert + n
                        }
                        return n.slice(-1 * e.length) === e
                    }

                    function D(t) {
                        return 0 !== t.childNodes.length && ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(t.tagName.toLowerCase())
                    }
                    B.DEFAULTS = {
                        matchers: []
                    };
                    var U = new WeakMap;

                    function M(t) {
                        return null != t && (U.has(t) || ("PRE" === t.tagName ? U.set(t, !0) : U.set(t, M(t.parentNode))), U.get(t))
                    }

                    function F(t, e, n, r, o) {
                        return e.nodeType === e.TEXT_NODE ? r.reduce((function(n, r) {
                            return r(e, n, t)
                        }), new a.a) : e.nodeType === e.ELEMENT_NODE ? Array.from(e.childNodes || []).reduce((function(i, a) {
                            var u = F(t, a, n, r, o);
                            return a.nodeType === e.ELEMENT_NODE && (u = n.reduce((function(e, n) {
                                return n(a, e, t)
                            }), u), u = (o.get(a) || []).reduce((function(e, n) {
                                return n(a, e, t)
                            }), u)), i.concat(u)
                        }), new a.a) : new a.a
                    }

                    function K(t, e, n) {
                        return I(n, t, !0)
                    }

                    function z(t, e, n) {
                        if (!q(e, "\n")) {
                            if (D(t)) return e.insert("\n");
                            if (e.length() > 0 && t.nextSibling)
                                for (var r = t.nextSibling; null != r;) {
                                    if (D(r)) return e.insert("\n");
                                    var o = n.query(r);
                                    if (o && o.prototype instanceof l.a) return e.insert("\n");
                                    r = r.firstChild
                                }
                        }
                        return e
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(62);
                    t.exports = Function.prototype.bind || r
                }, function(t, e, n) {
                    "use strict";
                    var r = n(39),
                        o = n(45),
                        i = o("%Function.prototype.apply%"),
                        a = o("%Function.prototype.call%"),
                        u = o("%Reflect.apply%", !0) || r.call(a, i),
                        l = o("%Object.getOwnPropertyDescriptor%", !0),
                        s = o("%Object.defineProperty%", !0),
                        c = o("%Math.max%");
                    if (s) try {
                        s({}, "a", {
                            value: 1
                        })
                    } catch (p) {
                        s = null
                    }
                    t.exports = function(t) {
                        var e = u(r, a, arguments);
                        if (l && s) {
                            var n = l(e, "length");
                            n.configurable && s(e, "length", {
                                value: 1 + c(0, t.length - (arguments.length - 1))
                            })
                        }
                        return e
                    };
                    var f = function() {
                        return u(r, i, arguments)
                    };
                    s ? s(t.exports, "apply", {
                        value: f
                    }) : t.exports.apply = f
                }, , function(t, e, n) {
                    "use strict";
                    var r = Array.prototype.slice,
                        o = n(43),
                        i = Object.keys,
                        a = i ? function(t) {
                            return i(t)
                        } : n(59),
                        u = Object.keys;
                    a.shim = function() {
                        return Object.keys ? function() {
                            var t = Object.keys(arguments);
                            return t && t.length === arguments.length
                        }(1, 2) || (Object.keys = function(t) {
                            return o(t) ? u(r.call(t)) : u(t)
                        }) : Object.keys = a, Object.keys || a
                    }, t.exports = a
                }, function(t, e, n) {
                    "use strict";
                    var r = Object.prototype.toString;
                    t.exports = function(t) {
                        var e = r.call(t),
                            n = "[object Arguments]" === e;
                        return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(45),
                        o = n(40),
                        i = o(r("String.prototype.indexOf"));
                    t.exports = function(t, e) {
                        var n = r(t, !!e);
                        return "function" == typeof n && i(t, ".prototype.") > -1 ? o(n) : n
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r, o = SyntaxError,
                        i = Function,
                        a = TypeError,
                        u = function(t) {
                            try {
                                return i('"use strict"; return (' + t + ").constructor;")()
                            } catch (e) {}
                        },
                        l = Object.getOwnPropertyDescriptor;
                    if (l) try {
                        l({}, "")
                    } catch (j) {
                        l = null
                    }
                    var s = function() {
                            throw new a
                        },
                        c = l ? function() {
                            try {
                                return s
                            } catch (t) {
                                try {
                                    return l(arguments, "callee").get
                                } catch (e) {
                                    return s
                                }
                            }
                        }() : s,
                        f = n(61)(),
                        p = Object.getPrototypeOf || function(t) {
                            return t.__proto__
                        },
                        h = {},
                        d = "undefined" == typeof Uint8Array ? r : p(Uint8Array),
                        y = {
                            "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                            "%Array%": Array,
                            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                            "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
                            "%AsyncFromSyncIteratorPrototype%": r,
                            "%AsyncFunction%": h,
                            "%AsyncGenerator%": h,
                            "%AsyncGeneratorFunction%": h,
                            "%AsyncIteratorPrototype%": h,
                            "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                            "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                            "%Boolean%": Boolean,
                            "%DataView%": "undefined" == typeof DataView ? r : DataView,
                            "%Date%": Date,
                            "%decodeURI%": decodeURI,
                            "%decodeURIComponent%": decodeURIComponent,
                            "%encodeURI%": encodeURI,
                            "%encodeURIComponent%": encodeURIComponent,
                            "%Error%": Error,
                            "%eval%": eval,
                            "%EvalError%": EvalError,
                            "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                            "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                            "%Function%": i,
                            "%GeneratorFunction%": h,
                            "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                            "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                            "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                            "%isFinite%": isFinite,
                            "%isNaN%": isNaN,
                            "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
                            "%JSON%": "object" == typeof JSON ? JSON : r,
                            "%Map%": "undefined" == typeof Map ? r : Map,
                            "%MapIteratorPrototype%": "undefined" != typeof Map && f ? p((new Map)[Symbol.iterator]()) : r,
                            "%Math%": Math,
                            "%Number%": Number,
                            "%Object%": Object,
                            "%parseFloat%": parseFloat,
                            "%parseInt%": parseInt,
                            "%Promise%": "undefined" == typeof Promise ? r : Promise,
                            "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                            "%RangeError%": RangeError,
                            "%ReferenceError%": ReferenceError,
                            "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                            "%RegExp%": RegExp,
                            "%Set%": "undefined" == typeof Set ? r : Set,
                            "%SetIteratorPrototype%": "undefined" != typeof Set && f ? p((new Set)[Symbol.iterator]()) : r,
                            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                            "%String%": String,
                            "%StringIteratorPrototype%": f ? p("" [Symbol.iterator]()) : r,
                            "%Symbol%": f ? Symbol : r,
                            "%SyntaxError%": o,
                            "%ThrowTypeError%": c,
                            "%TypedArray%": d,
                            "%TypeError%": a,
                            "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                            "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                            "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                            "%URIError%": URIError,
                            "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                            "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                            "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
                        },
                        v = function t(e) {
                            var n;
                            if ("%AsyncFunction%" === e) n = u("async function () {}");
                            else if ("%GeneratorFunction%" === e) n = u("function* () {}");
                            else if ("%AsyncGeneratorFunction%" === e) n = u("async function* () {}");
                            else if ("%AsyncGenerator%" === e) {
                                var r = t("%AsyncGeneratorFunction%");
                                r && (n = r.prototype)
                            } else if ("%AsyncIteratorPrototype%" === e) {
                                var o = t("%AsyncGenerator%");
                                o && (n = p(o.prototype))
                            }
                            return y[e] = n, n
                        },
                        b = {
                            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                            "%ArrayPrototype%": ["Array", "prototype"],
                            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                            "%ArrayProto_values%": ["Array", "prototype", "values"],
                            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                            "%BooleanPrototype%": ["Boolean", "prototype"],
                            "%DataViewPrototype%": ["DataView", "prototype"],
                            "%DatePrototype%": ["Date", "prototype"],
                            "%ErrorPrototype%": ["Error", "prototype"],
                            "%EvalErrorPrototype%": ["EvalError", "prototype"],
                            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                            "%FunctionPrototype%": ["Function", "prototype"],
                            "%Generator%": ["GeneratorFunction", "prototype"],
                            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                            "%JSONParse%": ["JSON", "parse"],
                            "%JSONStringify%": ["JSON", "stringify"],
                            "%MapPrototype%": ["Map", "prototype"],
                            "%NumberPrototype%": ["Number", "prototype"],
                            "%ObjectPrototype%": ["Object", "prototype"],
                            "%ObjProto_toString%": ["Object", "prototype", "toString"],
                            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                            "%PromisePrototype%": ["Promise", "prototype"],
                            "%PromiseProto_then%": ["Promise", "prototype", "then"],
                            "%Promise_all%": ["Promise", "all"],
                            "%Promise_reject%": ["Promise", "reject"],
                            "%Promise_resolve%": ["Promise", "resolve"],
                            "%RangeErrorPrototype%": ["RangeError", "prototype"],
                            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                            "%RegExpPrototype%": ["RegExp", "prototype"],
                            "%SetPrototype%": ["Set", "prototype"],
                            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                            "%StringPrototype%": ["String", "prototype"],
                            "%SymbolPrototype%": ["Symbol", "prototype"],
                            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                            "%TypeErrorPrototype%": ["TypeError", "prototype"],
                            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                            "%URIErrorPrototype%": ["URIError", "prototype"],
                            "%WeakMapPrototype%": ["WeakMap", "prototype"],
                            "%WeakSetPrototype%": ["WeakSet", "prototype"]
                        },
                        m = n(39),
                        g = n(63),
                        O = m.call(Function.call, Array.prototype.concat),
                        N = m.call(Function.apply, Array.prototype.splice),
                        w = m.call(Function.call, String.prototype.replace),
                        E = m.call(Function.call, String.prototype.slice),
                        A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        k = /\\(\\)?/g,
                        S = function(t) {
                            var e = E(t, 0, 1),
                                n = E(t, -1);
                            if ("%" === e && "%" !== n) throw new o("invalid intrinsic syntax, expected closing `%`");
                            if ("%" === n && "%" !== e) throw new o("invalid intrinsic syntax, expected opening `%`");
                            var r = [];
                            return w(t, A, (function(t, e, n, o) {
                                r[r.length] = n ? w(o, k, "$1") : e || t
                            })), r
                        },
                        x = function(t, e) {
                            var n, r = t;
                            if (g(b, r) && (r = "%" + (n = b[r])[0] + "%"), g(y, r)) {
                                var i = y[r];
                                if (i === h && (i = v(r)), void 0 === i && !e) throw new a("intrinsic " + t + " exists, but is not available. Please file an issue!");
                                return {
                                    alias: n,
                                    name: r,
                                    value: i
                                }
                            }
                            throw new o("intrinsic " + t + " does not exist!")
                        };
                    t.exports = function(t, e) {
                        if ("string" != typeof t || 0 === t.length) throw new a("intrinsic name must be a non-empty string");
                        if (arguments.length > 1 && "boolean" != typeof e) throw new a('"allowMissing" argument must be a boolean');
                        var n = S(t),
                            r = n.length > 0 ? n[0] : "",
                            i = x("%" + r + "%", e),
                            u = i.name,
                            s = i.value,
                            c = !1,
                            f = i.alias;
                        f && (r = f[0], N(n, O([0, 1], f)));
                        for (var p = 1, h = !0; p < n.length; p += 1) {
                            var d = n[p],
                                v = E(d, 0, 1),
                                b = E(d, -1);
                            if (('"' === v || "'" === v || "`" === v || '"' === b || "'" === b || "`" === b) && v !== b) throw new o("property names with quotes must have matching quotes");
                            if ("constructor" !== d && h || (c = !0), g(y, u = "%" + (r += "." + d) + "%")) s = y[u];
                            else if (null != s) {
                                if (!(d in s)) {
                                    if (!e) throw new a("base intrinsic for " + t + " exists, but the property is not available.");
                                    return
                                }
                                if (l && p + 1 >= n.length) {
                                    var m = l(s, d);
                                    s = (h = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : s[d]
                                } else h = g(s, d), s = s[d];
                                h && !c && (y[u] = s)
                            }
                        }
                        return s
                    }
                }, function(t, e, n) {
                    "use strict";
                    t.exports = function() {
                        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                        if ("symbol" == typeof Symbol.iterator) return !0;
                        var t = {},
                            e = Symbol("test"),
                            n = Object(e);
                        if ("string" == typeof e) return !1;
                        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
                        for (e in t[e] = 42, t) return !1;
                        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                        var r = Object.getOwnPropertySymbols(t);
                        if (1 !== r.length || r[0] !== e) return !1;
                        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                        if ("function" == typeof Object.getOwnPropertyDescriptor) {
                            var o = Object.getOwnPropertyDescriptor(t, e);
                            if (42 !== o.value || !0 !== o.enumerable) return !1
                        }
                        return !0
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t) {
                        return t != t
                    };
                    t.exports = function(t, e) {
                        return 0 === t && 0 === e ? 1 / t == 1 / e : t === e || !(!r(t) || !r(e))
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(47);
                    t.exports = function() {
                        return "function" == typeof Object.is ? Object.is : r
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = Object,
                        o = TypeError;
                    t.exports = function() {
                        if (null != this && this !== r(this)) throw new o("RegExp.prototype.flags getter called on non-object");
                        var t = "";
                        return this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.sticky && (t += "y"), t
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(49),
                        o = n(25).supportsDescriptors,
                        i = Object.getOwnPropertyDescriptor,
                        a = TypeError;
                    t.exports = function() {
                        if (!o) throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
                        if ("gim" === /a/gim.flags) {
                            var t = i(RegExp.prototype, "flags");
                            if (t && "function" == typeof t.get && "boolean" == typeof /a/.dotAll) return t.get
                        }
                        return r
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o, i = r(n(72));
                    ! function(t) {
                        t.iterator = function(t) {
                            return new i.default(t)
                        }, t.length = function(t) {
                            return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
                        }
                    }(o || (o = {})), e.default = o
                }, function(t, e) {
                    "use strict";
                    var n = Object.prototype.hasOwnProperty,
                        r = "~";

                    function o() {}

                    function i(t, e, n) {
                        this.fn = t, this.context = e, this.once = n || !1
                    }

                    function a(t, e, n, o, a) {
                        if ("function" != typeof n) throw new TypeError("The listener must be a function");
                        var u = new i(n, o || t, a),
                            l = r ? r + e : e;
                        return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], u] : t._events[l].push(u) : (t._events[l] = u, t._eventsCount++), t
                    }

                    function u(t, e) {
                        0 == --t._eventsCount ? t._events = new o : delete t._events[e]
                    }

                    function l() {
                        this._events = new o, this._eventsCount = 0
                    }
                    Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), l.prototype.eventNames = function() {
                        var t, e, o = [];
                        if (0 === this._eventsCount) return o;
                        for (e in t = this._events) n.call(t, e) && o.push(r ? e.slice(1) : e);
                        return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o
                    }, l.prototype.listeners = function(t) {
                        var e = r ? r + t : t,
                            n = this._events[e];
                        if (!n) return [];
                        if (n.fn) return [n.fn];
                        for (var o = 0, i = n.length, a = new Array(i); o < i; o++) a[o] = n[o].fn;
                        return a
                    }, l.prototype.listenerCount = function(t) {
                        var e = r ? r + t : t,
                            n = this._events[e];
                        return n ? n.fn ? 1 : n.length : 0
                    }, l.prototype.emit = function(t, e, n, o, i, a) {
                        var u = r ? r + t : t;
                        if (!this._events[u]) return !1;
                        var l, s, c = this._events[u],
                            f = arguments.length;
                        if (c.fn) {
                            switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
                                case 1:
                                    return c.fn.call(c.context), !0;
                                case 2:
                                    return c.fn.call(c.context, e), !0;
                                case 3:
                                    return c.fn.call(c.context, e, n), !0;
                                case 4:
                                    return c.fn.call(c.context, e, n, o), !0;
                                case 5:
                                    return c.fn.call(c.context, e, n, o, i), !0;
                                case 6:
                                    return c.fn.call(c.context, e, n, o, i, a), !0
                            }
                            for (s = 1, l = new Array(f - 1); s < f; s++) l[s - 1] = arguments[s];
                            c.fn.apply(c.context, l)
                        } else {
                            var p, h = c.length;
                            for (s = 0; s < h; s++) switch (c[s].once && this.removeListener(t, c[s].fn, void 0, !0), f) {
                                case 1:
                                    c[s].fn.call(c[s].context);
                                    break;
                                case 2:
                                    c[s].fn.call(c[s].context, e);
                                    break;
                                case 3:
                                    c[s].fn.call(c[s].context, e, n);
                                    break;
                                case 4:
                                    c[s].fn.call(c[s].context, e, n, o);
                                    break;
                                default:
                                    if (!l)
                                        for (p = 1, l = new Array(f - 1); p < f; p++) l[p - 1] = arguments[p];
                                    c[s].fn.apply(c[s].context, l)
                            }
                        }
                        return !0
                    }, l.prototype.on = function(t, e, n) {
                        return a(this, t, e, n, !1)
                    }, l.prototype.once = function(t, e, n) {
                        return a(this, t, e, n, !0)
                    }, l.prototype.removeListener = function(t, e, n, o) {
                        var i = r ? r + t : t;
                        if (!this._events[i]) return this;
                        if (!e) return u(this, i), this;
                        var a = this._events[i];
                        if (a.fn) a.fn !== e || o && !a.once || n && a.context !== n || u(this, i);
                        else {
                            for (var l = 0, s = [], c = a.length; l < c; l++)(a[l].fn !== e || o && !a[l].once || n && a[l].context !== n) && s.push(a[l]);
                            s.length ? this._events[i] = 1 === s.length ? s[0] : s : u(this, i)
                        }
                        return this
                    }, l.prototype.removeAllListeners = function(t) {
                        var e;
                        return t ? (e = r ? r + t : t, this._events[e] && u(this, e)) : (this._events = new o, this._eventsCount = 0), this
                    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, void 0 !== t && (t.exports = l)
                }, , , , , , , function(t, e, n) {
                    "use strict";
                    var r;
                    if (!Object.keys) {
                        var o = Object.prototype.hasOwnProperty,
                            i = Object.prototype.toString,
                            a = n(43),
                            u = Object.prototype.propertyIsEnumerable,
                            l = !u.call({
                                toString: null
                            }, "toString"),
                            s = u.call((function() {}), "prototype"),
                            c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                            f = function(t) {
                                var e = t.constructor;
                                return e && e.prototype === t
                            },
                            p = {
                                $applicationCache: !0,
                                $console: !0,
                                $external: !0,
                                $frame: !0,
                                $frameElement: !0,
                                $frames: !0,
                                $innerHeight: !0,
                                $innerWidth: !0,
                                $onmozfullscreenchange: !0,
                                $onmozfullscreenerror: !0,
                                $outerHeight: !0,
                                $outerWidth: !0,
                                $pageXOffset: !0,
                                $pageYOffset: !0,
                                $parent: !0,
                                $scrollLeft: !0,
                                $scrollTop: !0,
                                $scrollX: !0,
                                $scrollY: !0,
                                $self: !0,
                                $webkitIndexedDB: !0,
                                $webkitStorageInfo: !0,
                                $window: !0
                            },
                            h = function() {
                                if ("undefined" == typeof window) return !1;
                                for (var t in window) try {
                                    if (!p["$" + t] && o.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                                        f(window[t])
                                    } catch (e) {
                                        return !0
                                    }
                                } catch (e) {
                                    return !0
                                }
                                return !1
                            }();
                        r = function(t) {
                            var e = null !== t && "object" == typeof t,
                                n = "[object Function]" === i.call(t),
                                r = a(t),
                                u = e && "[object String]" === i.call(t),
                                p = [];
                            if (!e && !n && !r) throw new TypeError("Object.keys called on a non-object");
                            var d = s && n;
                            if (u && t.length > 0 && !o.call(t, 0))
                                for (var y = 0; y < t.length; ++y) p.push(String(y));
                            if (r && t.length > 0)
                                for (var v = 0; v < t.length; ++v) p.push(String(v));
                            else
                                for (var b in t) d && "prototype" === b || !o.call(t, b) || p.push(String(b));
                            if (l)
                                for (var m = function(t) {
                                        if ("undefined" == typeof window || !h) return f(t);
                                        try {
                                            return f(t)
                                        } catch (e) {
                                            return !1
                                        }
                                    }(t), g = 0; g < c.length; ++g) m && "constructor" === c[g] || !o.call(t, c[g]) || p.push(c[g]);
                            return p
                        }
                    }
                    t.exports = r
                }, function(t, e, n) {
                    "use strict";
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                        o = n(44)("Object.prototype.toString"),
                        i = function(t) {
                            return !(r && t && "object" == typeof t && Symbol.toStringTag in t) && "[object Arguments]" === o(t)
                        },
                        a = function(t) {
                            return !!i(t) || null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Array]" !== o(t) && "[object Function]" === o(t.callee)
                        },
                        u = function() {
                            return i(arguments)
                        }();
                    i.isLegacyArguments = a, t.exports = u ? i : a
                }, function(t, e, n) {
                    "use strict";
                    var r = "undefined" != typeof Symbol && Symbol,
                        o = n(46);
                    t.exports = function() {
                        return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && o()
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = "Function.prototype.bind called on incompatible ",
                        o = Array.prototype.slice,
                        i = Object.prototype.toString,
                        a = "[object Function]";
                    t.exports = function(t) {
                        var e = this;
                        if ("function" != typeof e || i.call(e) !== a) throw new TypeError(r + e);
                        for (var n, u = o.call(arguments, 1), l = function() {
                                if (this instanceof n) {
                                    var r = e.apply(this, u.concat(o.call(arguments)));
                                    return Object(r) === r ? r : this
                                }
                                return e.apply(t, u.concat(o.call(arguments)))
                            }, s = Math.max(0, e.length - u.length), c = [], f = 0; f < s; f++) c.push("$" + f);
                        if (n = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(l), e.prototype) {
                            var p = function() {};
                            p.prototype = e.prototype, n.prototype = new p, p.prototype = null
                        }
                        return n
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(39);
                    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
                }, function(t, e, n) {
                    "use strict";
                    var r = n(25),
                        o = n(40),
                        i = n(47),
                        a = n(48),
                        u = n(65),
                        l = o(a(), Object);
                    r(l, {
                        getPolyfill: a,
                        implementation: i,
                        shim: u
                    }), t.exports = l
                }, function(t, e, n) {
                    "use strict";
                    var r = n(48),
                        o = n(25);
                    t.exports = function() {
                        var t = r();
                        return o(Object, {
                            is: t
                        }, {
                            is: function() {
                                return Object.is !== t
                            }
                        }), t
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r, o, i, a, u = n(44),
                        l = n(46)() && !!Symbol.toStringTag;
                    if (l) {
                        r = u("Object.prototype.hasOwnProperty"), o = u("RegExp.prototype.exec"), i = {};
                        var s = function() {
                            throw i
                        };
                        a = {
                            toString: s,
                            valueOf: s
                        }, "symbol" == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = s)
                    }
                    var c = u("Object.prototype.toString"),
                        f = Object.getOwnPropertyDescriptor;
                    t.exports = l ? function(t) {
                        if (!t || "object" != typeof t) return !1;
                        var e = f(t, "lastIndex");
                        if (!e || !r(e, "value")) return !1;
                        try {
                            o(t, a)
                        } catch (n) {
                            return n === i
                        }
                    } : function(t) {
                        return !(!t || "object" != typeof t && "function" != typeof t) && "[object RegExp]" === c(t)
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(25),
                        o = n(40),
                        i = n(49),
                        a = n(50),
                        u = n(68),
                        l = o(i);
                    r(l, {
                        getPolyfill: a,
                        implementation: i,
                        shim: u
                    }), t.exports = l
                }, function(t, e, n) {
                    "use strict";
                    var r = n(25).supportsDescriptors,
                        o = n(50),
                        i = Object.getOwnPropertyDescriptor,
                        a = Object.defineProperty,
                        u = TypeError,
                        l = Object.getPrototypeOf,
                        s = /a/;
                    t.exports = function() {
                        if (!r || !l) throw new u("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
                        var t = o(),
                            e = l(s),
                            n = i(e, "flags");
                        return n && n.get === t || a(e, "flags", {
                            configurable: !0,
                            enumerable: !1,
                            get: t
                        }), t
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = Date.prototype.getDay,
                        o = Object.prototype.toString,
                        i = "function" == typeof Symbol && !!Symbol.toStringTag;
                    t.exports = function(t) {
                        return "object" == typeof t && null !== t && (i ? function(t) {
                            try {
                                return r.call(t), !0
                            } catch (e) {
                                return !1
                            }
                        }(t) : "[object Date]" === o.call(t))
                    }
                }, function(t, e) {
                    var n = -1;

                    function r(t, e, l, s) {
                        if (t === e) return t ? [
                            [0, t]
                        ] : [];
                        if (null != l) {
                            var c = function(t, e, n) {
                                var r = "number" == typeof n ? {
                                        index: n,
                                        length: 0
                                    } : n.oldRange,
                                    o = "number" == typeof n ? null : n.newRange,
                                    i = t.length,
                                    a = e.length;
                                if (0 === r.length && (null === o || 0 === o.length)) {
                                    var u = r.index,
                                        l = t.slice(0, u),
                                        s = t.slice(u),
                                        c = o ? o.index : null,
                                        f = u + a - i;
                                    if ((null === c || c === f) && !(f < 0 || f > a)) {
                                        var h = e.slice(0, f);
                                        if ((v = e.slice(f)) === s) {
                                            var d = Math.min(u, f);
                                            if ((m = l.slice(0, d)) === (O = h.slice(0, d))) return p(m, l.slice(d), h.slice(d), s)
                                        }
                                    }
                                    if (null === c || c === u) {
                                        var y = u,
                                            v = (h = e.slice(0, y), e.slice(y));
                                        if (h === l) {
                                            var b = Math.min(i - y, a - y);
                                            if ((g = s.slice(s.length - b)) === (N = v.slice(v.length - b))) return p(l, s.slice(0, s.length - b), v.slice(0, v.length - b), g)
                                        }
                                    }
                                }
                                if (r.length > 0 && o && 0 === o.length) {
                                    var m = t.slice(0, r.index),
                                        g = t.slice(r.index + r.length);
                                    if (!(a < (d = m.length) + (b = g.length))) {
                                        var O = e.slice(0, d),
                                            N = e.slice(a - b);
                                        if (m === O && g === N) return p(m, t.slice(d, i - b), e.slice(d, a - b), g)
                                    }
                                }
                                return null
                            }(t, e, l);
                            if (c) return c
                        }
                        var f = i(t, e),
                            h = t.substring(0, f);
                        f = a(t = t.substring(f), e = e.substring(f));
                        var d = t.substring(t.length - f),
                            y = function(t, e) {
                                var u;
                                if (!t) return [
                                    [1, e]
                                ];
                                if (!e) return [
                                    [n, t]
                                ];
                                var l = t.length > e.length ? t : e,
                                    s = t.length > e.length ? e : t,
                                    c = l.indexOf(s);
                                if (-1 !== c) return u = [
                                    [1, l.substring(0, c)],
                                    [0, s],
                                    [1, l.substring(c + s.length)]
                                ], t.length > e.length && (u[0][0] = u[2][0] = n), u;
                                if (1 === s.length) return [
                                    [n, t],
                                    [1, e]
                                ];
                                var f = function(t, e) {
                                    var n = t.length > e.length ? t : e,
                                        r = t.length > e.length ? e : t;
                                    if (n.length < 4 || 2 * r.length < n.length) return null;

                                    function o(t, e, n) {
                                        for (var r, o, u, l, s = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; - 1 !== (c = e.indexOf(s, c + 1));) {
                                            var p = i(t.substring(n), e.substring(c)),
                                                h = a(t.substring(0, n), e.substring(0, c));
                                            f.length < h + p && (f = e.substring(c - h, c) + e.substring(c, c + p), r = t.substring(0, n - h), o = t.substring(n + p), u = e.substring(0, c - h), l = e.substring(c + p))
                                        }
                                        return 2 * f.length >= t.length ? [r, o, u, l, f] : null
                                    }
                                    var u, l, s, c, f, p = o(n, r, Math.ceil(n.length / 4)),
                                        h = o(n, r, Math.ceil(n.length / 2));
                                    if (!p && !h) return null;
                                    u = h ? p && p[4].length > h[4].length ? p : h : p, t.length > e.length ? (l = u[0], s = u[1], c = u[2], f = u[3]) : (c = u[0], f = u[1], l = u[2], s = u[3]);
                                    var d = u[4];
                                    return [l, s, c, f, d]
                                }(t, e);
                                if (f) {
                                    var p = f[0],
                                        h = f[1],
                                        d = f[2],
                                        y = f[3],
                                        v = f[4],
                                        b = r(p, d),
                                        m = r(h, y);
                                    return b.concat([
                                        [0, v]
                                    ], m)
                                }
                                return function(t, e) {
                                    for (var r = t.length, i = e.length, a = Math.ceil((r + i) / 2), u = a, l = 2 * a, s = new Array(l), c = new Array(l), f = 0; f < l; f++) s[f] = -1, c[f] = -1;
                                    s[u + 1] = 0, c[u + 1] = 0;
                                    for (var p = r - i, h = p % 2 != 0, d = 0, y = 0, v = 0, b = 0, m = 0; m < a; m++) {
                                        for (var g = -m + d; g <= m - y; g += 2) {
                                            for (var O = u + g, N = (S = g === -m || g !== m && s[O - 1] < s[O + 1] ? s[O + 1] : s[O - 1] + 1) - g; S < r && N < i && t.charAt(S) === e.charAt(N);) S++, N++;
                                            if (s[O] = S, S > r) y += 2;
                                            else if (N > i) d += 2;
                                            else if (h && (A = u + p - g) >= 0 && A < l && -1 !== c[A] && S >= (E = r - c[A])) return o(t, e, S, N)
                                        }
                                        for (var w = -m + v; w <= m - b; w += 2) {
                                            for (var E, A = u + w, k = (E = w === -m || w !== m && c[A - 1] < c[A + 1] ? c[A + 1] : c[A - 1] + 1) - w; E < r && k < i && t.charAt(r - E - 1) === e.charAt(i - k - 1);) E++, k++;
                                            if (c[A] = E, E > r) b += 2;
                                            else if (k > i) v += 2;
                                            else if (!h) {
                                                var S;
                                                if ((O = u + p - w) >= 0 && O < l && -1 !== s[O])
                                                    if (N = u + (S = s[O]) - O, S >= (E = r - E)) return o(t, e, S, N)
                                            }
                                        }
                                    }
                                    return [
                                        [n, t],
                                        [1, e]
                                    ]
                                }(t, e)
                            }(t = t.substring(0, t.length - f), e = e.substring(0, e.length - f));
                        return h && y.unshift([0, h]), d && y.push([0, d]), u(y, s), y
                    }

                    function o(t, e, n, o) {
                        var i = t.substring(0, n),
                            a = e.substring(0, o),
                            u = t.substring(n),
                            l = e.substring(o),
                            s = r(i, a),
                            c = r(u, l);
                        return s.concat(c)
                    }

                    function i(t, e) {
                        if (!t || !e || t.charAt(0) !== e.charAt(0)) return 0;
                        for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(i, o) == e.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
                        return l(t.charCodeAt(o - 1)) && o--, o
                    }

                    function a(t, e) {
                        if (!t || !e || t.slice(-1) !== e.slice(-1)) return 0;
                        for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
                        return s(t.charCodeAt(t.length - o)) && o--, o
                    }

                    function u(t, e) {
                        t.push([0, ""]);
                        for (var r, o = 0, l = 0, s = 0, p = "", h = ""; o < t.length;)
                            if (o < t.length - 1 && !t[o][1]) t.splice(o, 1);
                            else switch (t[o][0]) {
                                case 1:
                                    s++, h += t[o][1], o++;
                                    break;
                                case n:
                                    l++, p += t[o][1], o++;
                                    break;
                                case 0:
                                    var d = o - s - l - 1;
                                    if (e) {
                                        if (d >= 0 && f(t[d][1])) {
                                            var y = t[d][1].slice(-1);
                                            if (t[d][1] = t[d][1].slice(0, -1), p = y + p, h = y + h, !t[d][1]) {
                                                t.splice(d, 1), o--;
                                                var v = d - 1;
                                                t[v] && 1 === t[v][0] && (s++, h = t[v][1] + h, v--), t[v] && t[v][0] === n && (l++, p = t[v][1] + p, v--), d = v
                                            }
                                        }
                                        c(t[o][1]) && (y = t[o][1].charAt(0), t[o][1] = t[o][1].slice(1), p += y, h += y)
                                    }
                                    if (o < t.length - 1 && !t[o][1]) {
                                        t.splice(o, 1);
                                        break
                                    }
                                    if (p.length > 0 || h.length > 0) {
                                        p.length > 0 && h.length > 0 && (0 !== (r = i(h, p)) && (d >= 0 ? t[d][1] += h.substring(0, r) : (t.splice(0, 0, [0, h.substring(0, r)]), o++), h = h.substring(r), p = p.substring(r)), 0 !== (r = a(h, p)) && (t[o][1] = h.substring(h.length - r) + t[o][1], h = h.substring(0, h.length - r), p = p.substring(0, p.length - r)));
                                        var b = s + l;
                                        0 === p.length && 0 === h.length ? (t.splice(o - b, b), o -= b) : 0 === p.length ? (t.splice(o - b, b, [1, h]), o = o - b + 1) : 0 === h.length ? (t.splice(o - b, b, [n, p]), o = o - b + 1) : (t.splice(o - b, b, [n, p], [1, h]), o = o - b + 2)
                                    }
                                    0 !== o && 0 === t[o - 1][0] ? (t[o - 1][1] += t[o][1], t.splice(o, 1)) : o++, s = 0, l = 0, p = "", h = ""
                            }
                        "" === t[t.length - 1][1] && t.pop();
                        var m = !1;
                        for (o = 1; o < t.length - 1;) 0 === t[o - 1][0] && 0 === t[o + 1][0] && (t[o][1].substring(t[o][1].length - t[o - 1][1].length) === t[o - 1][1] ? (t[o][1] = t[o - 1][1] + t[o][1].substring(0, t[o][1].length - t[o - 1][1].length), t[o + 1][1] = t[o - 1][1] + t[o + 1][1], t.splice(o - 1, 1), m = !0) : t[o][1].substring(0, t[o + 1][1].length) == t[o + 1][1] && (t[o - 1][1] += t[o + 1][1], t[o][1] = t[o][1].substring(t[o + 1][1].length) + t[o + 1][1], t.splice(o + 1, 1), m = !0)), o++;
                        m && u(t, e)
                    }

                    function l(t) {
                        return t >= 55296 && t <= 56319
                    }

                    function s(t) {
                        return t >= 56320 && t <= 57343
                    }

                    function c(t) {
                        return s(t.charCodeAt(0))
                    }

                    function f(t) {
                        return l(t.charCodeAt(t.length - 1))
                    }

                    function p(t, e, r, o) {
                        return f(t) || c(o) ? null : function(t) {
                            for (var e = [], n = 0; n < t.length; n++) t[n][1].length > 0 && e.push(t[n]);
                            return e
                        }([
                            [0, t],
                            [n, e],
                            [1, r],
                            [0, o]
                        ])
                    }

                    function h(t, e, n) {
                        return r(t, e, n, !0)
                    }
                    h.INSERT = 1, h.DELETE = n, h.EQUAL = 0, t.exports = h
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o, i = r(n(18)),
                        a = r(n(7));
                    ! function(t) {
                        t.compose = function(t, e, n) {
                            void 0 === t && (t = {}), void 0 === e && (e = {}), "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                            var r = a.default(!0, {}, e);
                            for (var o in n || (r = Object.keys(r).reduce((function(t, e) {
                                    return null != r[e] && (t[e] = r[e]), t
                                }), {})), t) void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
                            return Object.keys(r).length > 0 ? r : void 0
                        }, t.diff = function(t, e) {
                            void 0 === t && (t = {}), void 0 === e && (e = {}), "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                            var n = Object.keys(t).concat(Object.keys(e)).reduce((function(n, r) {
                                return i.default(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
                            }), {});
                            return Object.keys(n).length > 0 ? n : void 0
                        }, t.invert = function(t, e) {
                            void 0 === t && (t = {}), void 0 === e && (e = {}), t = t || {};
                            var n = Object.keys(e).reduce((function(n, r) {
                                return e[r] !== t[r] && void 0 !== t[r] && (n[r] = e[r]), n
                            }), {});
                            return Object.keys(t).reduce((function(n, r) {
                                return t[r] !== e[r] && void 0 === e[r] && (n[r] = null), n
                            }), n)
                        }, t.transform = function(t, e, n) {
                            if (void 0 === n && (n = !1), "object" != typeof t) return e;
                            if ("object" == typeof e) {
                                if (!n) return e;
                                var r = Object.keys(e).reduce((function(n, r) {
                                    return void 0 === t[r] && (n[r] = e[r]), n
                                }), {});
                                return Object.keys(r).length > 0 ? r : void 0
                            }
                        }
                    }(o || (o = {})), e.default = o
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = r(n(51)),
                        i = function() {
                            function t(t) {
                                this.ops = t, this.index = 0, this.offset = 0
                            }
                            return t.prototype.hasNext = function() {
                                return this.peekLength() < 1 / 0
                            }, t.prototype.next = function(t) {
                                t || (t = 1 / 0);
                                var e = this.ops[this.index];
                                if (e) {
                                    var n = this.offset,
                                        r = o.default.length(e);
                                    if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return {
                                        delete: t
                                    };
                                    var i = {};
                                    return e.attributes && (i.attributes = e.attributes), "number" == typeof e.retain ? i.retain = t : "string" == typeof e.insert ? i.insert = e.insert.substr(n, t) : i.insert = e.insert, i
                                }
                                return {
                                    retain: 1 / 0
                                }
                            }, t.prototype.peek = function() {
                                return this.ops[this.index]
                            }, t.prototype.peekLength = function() {
                                return this.ops[this.index] ? o.default.length(this.ops[this.index]) - this.offset : 1 / 0
                            }, t.prototype.peekType = function() {
                                return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
                            }, t.prototype.rest = function() {
                                if (this.hasNext()) {
                                    if (0 === this.offset) return this.ops.slice(this.index);
                                    var t = this.offset,
                                        e = this.index,
                                        n = this.next(),
                                        r = this.ops.slice(this.index);
                                    return this.offset = t, this.index = e, [n].concat(r)
                                }
                                return []
                            }, t
                        }();
                    e.default = i
                }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
                    t.exports = n(36)
                }]).default
            }, t.exports = e()
        }
    }
]);
//# sourceMappingURL=sourcemaps/deb1141b53b8db82467e.vendor.js.map