/**
 * almond 0.2.6 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/*
  Markup.js v1.5.16: http://github.com/adammark/Markup.js
  MIT License
  (c) 2011 - 2013 Adam Mark
*/

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS 180-1
 * Version 2.2 Copyright Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * JavaScript implementation of Password-Based Key Derivation Function 2
 * (PBKDF2) as defined in RFC 2898.
 * Version 1.5
 * Copyright (c) 2007, 2008, 2009, 2010, 2011, 2012, 2013 Parvez Anandam
 * parvez@anandam.com
 * http://anandam.com/pbkdf2
 *
 * Distributed under the BSD license
 *
 * Uses Paul Johnston's excellent SHA-1 JavaScript library sha1.js:
 * http://pajhome.org.uk/crypt/md5/sha1.html
 * (uses the binb_sha1(), rstr2binb(), binb2str(), rstr2hex() functions from that libary)
 *
 * Thanks to Felix Gartsman for pointing out a bug in version 1.0
 * Thanks to Thijs Van der Schaeghe for pointing out a bug in version 1.1
 * Thanks to Richard Gautier for asking to clarify dependencies in version 1.2
 * Updated contact information from version 1.3
 * Thanks to Stuart Heinrich for pointing out updates to PAJ's SHA-1 library in version 1.4
 */

/*
 * Copyright 2013, Martin Zimmermann <info@posativ.org>. All rights reserved.
 * Distributed under the MIT license
 */

(function() {
    var e, t, n;
    (function(r) {
        function d(e, t) {
            return h.call(e, t)
        }

        function v(e, t) {
            var n, r, i, s, o, u, a, f, c, h, p = t && t.split("/"),
                d = l.map,
                v = d && d["*"] || {};
            if (e && e.charAt(0) === ".")
                if (t) {
                    p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                    for (f = 0; f < e.length; f += 1) {
                        h = e[f];
                        if (h === ".") e.splice(f, 1), f -= 1;
                        else if (h === "..") {
                            if (f === 1 && (e[2] === ".." || e[0] === "..")) break;
                            f > 0 && (e.splice(f - 1, 2), f -= 2)
                        }
                    }
                    e = e.join("/")
                } else e.indexOf("./") === 0 && (e = e.substring(2));
            if ((p || v) && d) {
                n = e.split("/");
                for (f = n.length; f > 0; f -= 1) {
                    r = n.slice(0, f).join("/");
                    if (p)
                        for (c = p.length; c > 0; c -= 1) {
                            i = d[p.slice(0, c).join("/")];
                            if (i) {
                                i = i[r];
                                if (i) {
                                    s = i, o = f;
                                    break
                                }
                            }
                        }
                    if (s) break;
                    !u && v && v[r] && (u = v[r], a = f)
                }!s && u && (s = u, o = a), s && (n.splice(0, o, s), e = n.join("/"))
            }
            return e
        }

        function m(e, t) {
            return function() {
                return s.apply(r, p.call(arguments, 0).concat([e, t]))
            }
        }

        function g(e) {
            return function(t) {
                return v(t, e)
            }
        }

        function y(e) {
            return function(t) {
                a[e] = t
            }
        }

        function b(e) {
            if (d(f, e)) {
                var t = f[e];
                delete f[e], c[e] = !0, i.apply(r, t)
            }
            if (!d(a, e) && !d(c, e)) throw new Error("No " + e);
            return a[e]
        }

        function w(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function E(e) {
            return function() {
                return l && l.config && l.config[e] || {}
            }
        }
        var i, s, o, u, a = {}, f = {}, l = {}, c = {}, h = Object.prototype.hasOwnProperty,
            p = [].slice;
        o = function(e, t) {
            var n, r = w(e),
                i = r[0];
            return e = r[1], i && (i = v(i, t), n = b(i)), i ? n && n.normalize ? e = n.normalize(e, g(t)) : e = v(e, t) : (e = v(e, t), r = w(e), i = r[0], e = r[1], i && (n = b(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, u = {
            require: function(e) {
                return m(e)
            },
            exports: function(e) {
                var t = a[e];
                return typeof t != "undefined" ? t : a[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: a[e],
                    config: E(e)
                }
            }
        }, i = function(e, t, n, i) {
            var s, l, h, p, v, g = [],
                w;
            i = i || e;
            if (typeof n == "function") {
                t = !t.length && n.length ? ["require", "exports", "module"] : t;
                for (v = 0; v < t.length; v += 1) {
                    p = o(t[v], i), l = p.f;
                    if (l === "require") g[v] = u.require(e);
                    else if (l === "exports") g[v] = u.exports(e), w = !0;
                    else if (l === "module") s = g[v] = u.module(e);
                    else if (d(a, l) || d(f, l) || d(c, l)) g[v] = b(l);
                    else {
                        if (!p.p) throw new Error(e + " missing " + l);
                        p.p.load(p.n, m(i, !0), y(l), {}), g[v] = a[l]
                    }
                }
                h = n.apply(a[e], g);
                if (e)
                    if (s && s.exports !== r && s.exports !== a[e]) a[e] = s.exports;
                    else
                if (h !== r || !w) a[e] = h
            } else e && (a[e] = n)
        }, e = t = s = function(e, t, n, a, f) {
            return typeof e == "string" ? u[e] ? u[e](t) : b(o(e, t).f) : (e.splice || (l = e, t.splice ? (e = t, t = n, n = null) : e = r), t = t || function() {}, typeof n == "function" && (n = a, a = f), a ? i(r, e, t, n) : setTimeout(function() {
                i(r, e, t, n)
            }, 4), s)
        }, s.config = function(e) {
            return l = e, l.deps && s(l.deps, l.callback), s
        }, e._defined = a, n = function(e, t, n) {
            t.splice || (n = t, t = []), !d(a, e) && !d(f, e) && (f[e] = [e, t, n])
        }, n.amd = {
            jQuery: !0
        }
    })(), n("components/almond/almond", function() {}), n("ready", [], function() {
        function u(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t](s)
        }

        function a() {
            var e = o;
            i && e.length && (o = [], u(e))
        }

        function f() {
            i || (i = !0, n && clearInterval(n), a())
        }

        function c(e) {
            return i ? e(s) : o.push(e), c
        }
        var e, t, n, r = typeof window != "undefined" && window.document,
            i = !r,
            s = r ? document : null,
            o = [];
        if (r) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, !1), window.addEventListener("load", f, !1);
            else if (window.attachEvent) {
                window.attachEvent("onload", f), t = document.createElement("div");
                try {
                    e = window.frameElement === null
                } catch (l) {}
                t.doScroll && e && window.external && (n = setInterval(function() {
                    try {
                        t.doScroll(), f()
                    } catch (e) {}
                }, 30))
            }
            document.readyState === "complete" && f()
        }
        return c.version = "2.0.1", c.load = function(e, t, n, r) {
            r.isBuild ? n(null) : c(n)
        }, c
    }), n("app/config", [], function() {
        var e = {
            css: !0,
            lang: (navigator.language || navigator.userLanguage).split("-")[0],
            "reply-to-self": !1
        }, t = document.getElementsByTagName("script");
        for (var n = 0; n < t.length; n++)[].forEach.call(t[n].attributes, function(t) {
            if (/^data-isso-/.test(t.name)) try {
                e[t.name.substring(10)] = JSON.parse(t.value)
            } catch (n) {
                e[t.name.substring(10)] = t.value
            }
        });
        return e
    }),
    function(e) {
        if (typeof bootstrap == "function") bootstrap("promise", e);
        else if (typeof exports == "object") module.exports = e();
        else if (typeof n == "function" && n.amd) n("q", e);
        else if (typeof ses != "undefined") {
            if (!ses.ok()) return;
            ses.makeQ = e
        } else Q = e()
    }(function() {
        function u(e) {
            return function() {
                return o.apply(e, arguments)
            }
        }

        function m(e) {
            return e === Object(e)
        }

        function g(e) {
            return v(e) === "[object StopIteration]" || e instanceof y
        }

        function E(t, n) {
            if (e && n.stack && typeof t == "object" && t !== null && t.stack && t.stack.indexOf(w) === -1) {
                var r = [];
                for (var i = n; !! i; i = i.source) i.stack && r.unshift(i.stack);
                r.unshift(t.stack);
                var s = r.join("\n" + w + "\n");
                t.stack = S(s)
            }
        }

        function S(e) {
            var t = e.split("\n"),
                n = [];
            for (var r = 0; r < t.length; ++r) {
                var i = t[r];
                !N(i) && !x(i) && i && n.push(i)
            }
            return n.join("\n")
        }

        function x(e) {
            return e.indexOf("(module.js:") !== -1 || e.indexOf("(node.js:") !== -1
        }

        function T(e) {
            var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
            if (t) return [t[1], Number(t[2])];
            var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
            if (n) return [n[1], Number(n[2])];
            var r = /.*@(.+):(\d+)$/.exec(e);
            if (r) return [r[1], Number(r[2])]
        }

        function N(e) {
            var t = T(e);
            if (!t) return !1;
            var i = t[0],
                s = t[1];
            return i === r && s >= n && s <= lt
        }

        function C() {
            if (!e) return;
            try {
                throw new Error
            } catch (t) {
                var n = t.stack.split("\n"),
                    i = n[0].indexOf("@") > 0 ? n[1] : n[2],
                    s = T(i);
                if (!s) return;
                return r = s[0], s[1]
            }
        }

        function k(e, t, n) {
            return function() {
                return typeof console != "undefined" && typeof console.warn == "function" && console.warn(t + " is deprecated, use " + n + " instead.", (new Error("")).stack), e.apply(e, arguments)
            }
        }

        function L(e) {
            return H(e) ? e : B(e) ? G(e) : Q(e)
        }

        function A() {
            function l(e) {
                r = e, o.source = e, f(t, function(t, n) {
                    s(function() {
                        e.promiseDispatch.apply(e, n)
                    })
                }, void 0), t = void 0, n = void 0
            }
            var t = [],
                n = [],
                r, i = h(A.prototype),
                o = h(_.prototype);
            o.promiseDispatch = function(e, i, o) {
                var u = a(arguments);
                t ? (t.push(u), i === "when" && o[1] && n.push(o[1])) : s(function() {
                    r.promiseDispatch.apply(r, u)
                })
            }, o.valueOf = function() {
                if (t) return o;
                var e = P(r);
                return H(e) && (r = e), e
            }, o.inspect = function() {
                return r ? r.inspect() : {
                    state: "pending"
                }
            };
            if (L.longStackSupport && e) try {
                throw new Error
            } catch (u) {
                o.stack = u.stack.substring(u.stack.indexOf("\n") + 1)
            }
            return i.promise = o, i.resolve = function(e) {
                if (r) return;
                l(L(e))
            }, i.fulfill = function(e) {
                if (r) return;
                l(Q(e))
            }, i.reject = function(e) {
                if (r) return;
                l(K(e))
            }, i.notify = function(e) {
                if (r) return;
                f(n, function(t, n) {
                    s(function() {
                        n(e)
                    })
                }, void 0)
            }, i
        }

        function O(e) {
            if (typeof e != "function") throw new TypeError("resolver must be a function.");
            var t = A();
            try {
                e(t.resolve, t.reject, t.notify)
            } catch (n) {
                t.reject(n)
            }
            return t.promise
        }

        function M(e) {
            return O(function(t, n) {
                for (var r = 0, i = e.length; r < i; r++) L(e[r]).then(t, n)
            })
        }

        function _(e, t, n) {
            t === void 0 && (t = function(e) {
                return K(new Error("Promise does not support operation: " + e))
            }), n === void 0 && (n = function() {
                return {
                    state: "unknown"
                }
            });
            var r = h(_.prototype);
            r.promiseDispatch = function(n, i, s) {
                var o;
                try {
                    e[i] ? o = e[i].apply(r, s) : o = t.call(r, i, s)
                } catch (u) {
                    o = K(u)
                }
                n && n(o)
            }, r.inspect = n;
            if (n) {
                var i = n();
                i.state === "rejected" && (r.exception = i.reason), r.valueOf = function() {
                    var e = n();
                    return e.state === "pending" || e.state === "rejected" ? r : e.value
                }
            }
            return r
        }

        function D(e, t, n, r) {
            return L(e).then(t, n, r)
        }

        function P(e) {
            if (H(e)) {
                var t = e.inspect();
                if (t.state === "fulfilled") return t.value
            }
            return e
        }

        function H(e) {
            return m(e) && typeof e.promiseDispatch == "function" && typeof e.inspect == "function"
        }

        function B(e) {
            return m(e) && typeof e.then == "function"
        }

        function j(e) {
            return H(e) && e.inspect().state === "pending"
        }

        function F(e) {
            return !H(e) || e.inspect().state === "fulfilled"
        }

        function I(e) {
            return H(e) && e.inspect().state === "rejected"
        }

        function W() {
            !U && typeof window != "undefined" && window.console && console.warn("[Q] Unhandled rejection reasons (should be empty):", q), U = !0
        }

        function X() {
            for (var e = 0; e < q.length; e++) {
                var t = q[e];
                console.warn("Unhandled rejection reason:", t)
            }
        }

        function V() {
            q.length = 0, R.length = 0, U = !1, z || (z = !0, typeof process != "undefined" && process.on && process.on("exit", X))
        }

        function $(e, t) {
            if (!z) return;
            R.push(e), t && typeof t.stack != "undefined" ? q.push(t.stack) : q.push("(no stack) " + t), W()
        }

        function J(e) {
            if (!z) return;
            var t = l(R, e);
            t !== -1 && (R.splice(t, 1), q.splice(t, 1))
        }

        function K(e) {
            var t = _({
                when: function(t) {
                    return t && J(this), t ? t(e) : this
                }
            }, function() {
                return this
            }, function() {
                return {
                    state: "rejected",
                    reason: e
                }
            });
            return $(t, e), t
        }

        function Q(e) {
            return _({
                when: function() {
                    return e
                },
                get: function(t) {
                    return e[t]
                },
                set: function(t, n) {
                    e[t] = n
                },
                "delete": function(t) {
                    delete e[t]
                },
                post: function(t, n) {
                    return t === null || t === void 0 ? e.apply(void 0, n) : e[t].apply(e, n)
                },
                apply: function(t, n) {
                    return e.apply(t, n)
                },
                keys: function() {
                    return d(e)
                }
            }, void 0, function() {
                return {
                    state: "fulfilled",
                    value: e
                }
            })
        }

        function G(e) {
            var t = A();
            return s(function() {
                try {
                    e.then(t.resolve, t.reject, t.notify)
                } catch (n) {
                    t.reject(n)
                }
            }), t.promise
        }

        function Y(e) {
            return _({
                isDef: function() {}
            }, function(n, r) {
                return it(e, n, r)
            }, function() {
                return L(e).inspect()
            })
        }

        function Z(e, t, n) {
            return L(e).spread(t, n)
        }

        function et(e) {
            return function() {
                function t(e, t) {
                    var s;
                    if (b) {
                        try {
                            s = n[e](t)
                        } catch (o) {
                            return K(o)
                        }
                        return s.done ? s.value : D(s.value, r, i)
                    }
                    try {
                        s = n[e](t)
                    } catch (o) {
                        return g(o) ? o.value : K(o)
                    }
                    return D(s, r, i)
                }
                var n = e.apply(this, arguments),
                    r = t.bind(t, "next"),
                    i = t.bind(t, "throw");
                return r()
            }
        }

        function tt(e) {
            L.done(L.async(e)())
        }

        function nt(e) {
            throw new y(e)
        }

        function rt(e) {
            return function() {
                return Z([this, st(arguments)], function(t, n) {
                    return e.apply(t, n)
                })
            }
        }

        function it(e, t, n) {
            return L(e).dispatch(t, n)
        }

        function st(e) {
            return D(e, function(e) {
                var t = 0,
                    n = A();
                return f(e, function(r, i, s) {
                    var o;
                    H(i) && (o = i.inspect()).state === "fulfilled" ? e[s] = o.value : (++t, D(i, function(r) {
                        e[s] = r, --t === 0 && n.resolve(e)
                    }, n.reject, function(e) {
                        n.notify({
                            index: s,
                            value: e
                        })
                    }))
                }, void 0), t === 0 && n.resolve(e), n.promise
            })
        }

        function ot(e) {
            return D(e, function(e) {
                return e = c(e, L), D(st(c(e, function(e) {
                    return D(e, i, i)
                })), function() {
                    return e
                })
            })
        }

        function ut(e) {
            return L(e).allSettled()
        }

        function at(e, t) {
            return L(e).then(void 0, void 0, t)
        }

        function ft(e, t) {
            return L(e).nodeify(t)
        }
        var e = !1;
        try {
            throw new Error
        } catch (t) {
            e = !! t.stack
        }
        var n = C(),
            r, i = function() {}, s = function() {
                function o() {
                    while (e.next) {
                        e = e.next;
                        var t = e.task;
                        e.task = void 0;
                        var r = e.domain;
                        r && (e.domain = void 0, r.enter());
                        try {
                            t()
                        } catch (s) {
                            if (i) throw r && r.exit(), setTimeout(o, 0), r && r.enter(), s;
                            setTimeout(function() {
                                throw s
                            }, 0)
                        }
                        r && r.exit()
                    }
                    n = !1
                }
                var e = {
                    task: void 0,
                    next: null
                }, t = e,
                    n = !1,
                    r = void 0,
                    i = !1;
                s = function(e) {
                    t = t.next = {
                        task: e,
                        domain: i && process.domain,
                        next: null
                    }, n || (n = !0, r())
                };
                if (typeof process != "undefined" && process.nextTick) i = !0, r = function() {
                    process.nextTick(o)
                };
                else if (typeof setImmediate == "function") typeof window != "undefined" ? r = setImmediate.bind(window, o) : r = function() {
                    setImmediate(o)
                };
                else if (typeof MessageChannel != "undefined") {
                    var u = new MessageChannel;
                    u.port1.onmessage = function() {
                        r = a, u.port1.onmessage = o, o()
                    };
                    var a = function() {
                        u.port2.postMessage(0)
                    };
                    r = function() {
                        setTimeout(o, 0), a()
                    }
                } else r = function() {
                    setTimeout(o, 0)
                };
                return s
            }(),
            o = Function.call,
            a = u(Array.prototype.slice),
            f = u(Array.prototype.reduce || function(e, t) {
                var n = 0,
                    r = this.length;
                if (arguments.length === 1)
                    do {
                        if (n in this) {
                            t = this[n++];
                            break
                        }
                        if (++n >= r) throw new TypeError
                    } while (1);
                for (; n < r; n++) n in this && (t = e(t, this[n], n));
                return t
            }),
            l = u(Array.prototype.indexOf || function(e) {
                for (var t = 0; t < this.length; t++)
                    if (this[t] === e) return t;
                return -1
            }),
            c = u(Array.prototype.map || function(e, t) {
                var n = this,
                    r = [];
                return f(n, function(i, s, o) {
                    r.push(e.call(t, s, o, n))
                }, void 0), r
            }),
            h = Object.create || function(e) {
                function t() {}
                return t.prototype = e, new t
            }, p = u(Object.prototype.hasOwnProperty),
            d = Object.keys || function(e) {
                var t = [];
                for (var n in e) p(e, n) && t.push(n);
                return t
            }, v = u(Object.prototype.toString),
            y;
        typeof ReturnValue != "undefined" ? y = ReturnValue : y = function(e) {
            this.value = e
        };
        var b;
        try {
            new Function("(function* (){ yield 1; })"), b = !0
        } catch (t) {
            b = !1
        }
        var w = "From previous event:";
        L.resolve = L, L.nextTick = s, L.longStackSupport = !1, L.defer = A, A.prototype.makeNodeResolver = function() {
            var e = this;
            return function(t, n) {
                t ? e.reject(t) : arguments.length > 2 ? e.resolve(a(arguments, 1)) : e.resolve(n)
            }
        }, L.promise = O, L.passByCopy = function(e) {
            return e
        }, _.prototype.passByCopy = function() {
            return this
        }, L.join = function(e, t) {
            return L(e).join(t)
        }, _.prototype.join = function(e) {
            return L([this, e]).spread(function(e, t) {
                if (e === t) return e;
                throw new Error("Can't join: not the same: " + e + " " + t)
            })
        }, L.race = M, _.prototype.race = function() {
            return this.then(L.race)
        }, L.makePromise = _, _.prototype.toString = function() {
            return "[object Promise]"
        }, _.prototype.then = function(e, t, n) {
            function u(t) {
                try {
                    return typeof e == "function" ? e(t) : t
                } catch (n) {
                    return K(n)
                }
            }

            function a(e) {
                if (typeof t == "function") {
                    E(e, r);
                    try {
                        return t(e)
                    } catch (n) {
                        return K(n)
                    }
                }
                return K(e)
            }

            function f(e) {
                return typeof n == "function" ? n(e) : e
            }
            var r = this,
                i = A(),
                o = !1;
            return s(function() {
                r.promiseDispatch(function(e) {
                    if (o) return;
                    o = !0, i.resolve(u(e))
                }, "when", [
                    function(e) {
                        if (o) return;
                        o = !0, i.resolve(a(e))
                    }
                ])
            }), r.promiseDispatch(void 0, "when", [void 0,
                function(e) {
                    var t, n = !1;
                    try {
                        t = f(e)
                    } catch (r) {
                        n = !0;
                        if (!L.onerror) throw r;
                        L.onerror(r)
                    }
                    n || i.notify(t)
                }
            ]), i.promise
        }, L.when = D, _.prototype.thenResolve = function(e) {
            return this.then(function() {
                return e
            })
        }, L.thenResolve = function(e, t) {
            return L(e).thenResolve(t)
        }, _.prototype.thenReject = function(e) {
            return this.then(function() {
                throw e
            })
        }, L.thenReject = function(e, t) {
            return L(e).thenReject(t)
        }, L.nearer = P, L.isPromise = H, L.isPromiseAlike = B, L.isPending = j, _.prototype.isPending = function() {
            return this.inspect().state === "pending"
        }, L.isFulfilled = F, _.prototype.isFulfilled = function() {
            return this.inspect().state === "fulfilled"
        }, L.isRejected = I, _.prototype.isRejected = function() {
            return this.inspect().state === "rejected"
        };
        var q = [],
            R = [],
            U = !1,
            z = !0;
        L.resetUnhandledRejections = V, L.getUnhandledReasons = function() {
            return q.slice()
        }, L.stopUnhandledRejectionTracking = function() {
            V(), typeof process != "undefined" && process.on && process.removeListener("exit", X), z = !1
        }, V(), L.reject = K, L.fulfill = Q, L.master = Y, L.spread = Z, _.prototype.spread = function(e, t) {
            return this.all().then(function(t) {
                return e.apply(void 0, t)
            }, t)
        }, L.async = et, L.spawn = tt, L["return"] = nt, L.promised = rt, L.dispatch = it, _.prototype.dispatch = function(e, t) {
            var n = this,
                r = A();
            return s(function() {
                n.promiseDispatch(r.resolve, e, t)
            }), r.promise
        }, L.get = function(e, t) {
            return L(e).dispatch("get", [t])
        }, _.prototype.get = function(e) {
            return this.dispatch("get", [e])
        }, L.set = function(e, t, n) {
            return L(e).dispatch("set", [t, n])
        }, _.prototype.set = function(e, t) {
            return this.dispatch("set", [e, t])
        }, L.del = L["delete"] = function(e, t) {
            return L(e).dispatch("delete", [t])
        }, _.prototype.del = _.prototype["delete"] = function(e) {
            return this.dispatch("delete", [e])
        }, L.mapply = L.post = function(e, t, n) {
            return L(e).dispatch("post", [t, n])
        }, _.prototype.mapply = _.prototype.post = function(e, t) {
            return this.dispatch("post", [e, t])
        }, L.send = L.mcall = L.invoke = function(e, t) {
            return L(e).dispatch("post", [t, a(arguments, 2)])
        }, _.prototype.send = _.prototype.mcall = _.prototype.invoke = function(e) {
            return this.dispatch("post", [e, a(arguments, 1)])
        }, L.fapply = function(e, t) {
            return L(e).dispatch("apply", [void 0, t])
        }, _.prototype.fapply = function(e) {
            return this.dispatch("apply", [void 0, e])
        }, L["try"] = L.fcall = function(e) {
            return L(e).dispatch("apply", [void 0, a(arguments, 1)])
        }, _.prototype.fcall = function() {
            return this.dispatch("apply", [void 0, a(arguments)])
        }, L.fbind = function(e) {
            var t = L(e),
                n = a(arguments, 1);
            return function() {
                return t.dispatch("apply", [this, n.concat(a(arguments))])
            }
        }, _.prototype.fbind = function() {
            var e = this,
                t = a(arguments);
            return function() {
                return e.dispatch("apply", [this, t.concat(a(arguments))])
            }
        }, L.keys = function(e) {
            return L(e).dispatch("keys", [])
        }, _.prototype.keys = function() {
            return this.dispatch("keys", [])
        }, L.all = st, _.prototype.all = function() {
            return st(this)
        }, L.allResolved = k(ot, "allResolved", "allSettled"), _.prototype.allResolved = function() {
            return ot(this)
        }, L.allSettled = ut, _.prototype.allSettled = function() {
            return this.then(function(e) {
                return st(c(e, function(e) {
                    function t() {
                        return e.inspect()
                    }
                    return e = L(e), e.then(t, t)
                }))
            })
        }, L.fail = L["catch"] = function(e, t) {
            return L(e).then(void 0, t)
        }, _.prototype.fail = _.prototype["catch"] = function(e) {
            return this.then(void 0, e)
        }, L.progress = at, _.prototype.progress = function(e) {
            return this.then(void 0, void 0, e)
        }, L.fin = L["finally"] = function(e, t) {
            return L(e)["finally"](t)
        }, _.prototype.fin = _.prototype["finally"] = function(e) {
            return e = L(e), this.then(function(t) {
                return e.fcall().then(function() {
                    return t
                })
            }, function(t) {
                return e.fcall().then(function() {
                    throw t
                })
            })
        }, L.done = function(e, t, n, r) {
            return L(e).done(t, n, r)
        }, _.prototype.done = function(e, t, n) {
            var r = function(e) {
                s(function() {
                    E(e, i);
                    if (!L.onerror) throw e;
                    L.onerror(e)
                })
            }, i = e || t || n ? this.then(e, t, n) : this;
            typeof process == "object" && process && process.domain && (r = process.domain.bind(r)), i.then(void 0, r)
        }, L.timeout = function(e, t, n) {
            return L(e).timeout(t, n)
        }, _.prototype.timeout = function(e, t) {
            var n = A(),
                r = setTimeout(function() {
                    n.reject(new Error(t || "Timed out after " + e + " ms"))
                }, e);
            return this.then(function(e) {
                clearTimeout(r), n.resolve(e)
            }, function(e) {
                clearTimeout(r), n.reject(e)
            }, n.notify), n.promise
        }, L.delay = function(e, t) {
            return t === void 0 && (t = e, e = void 0), L(e).delay(t)
        }, _.prototype.delay = function(e) {
            return this.then(function(t) {
                var n = A();
                return setTimeout(function() {
                    n.resolve(t)
                }, e), n.promise
            })
        }, L.nfapply = function(e, t) {
            return L(e).nfapply(t)
        }, _.prototype.nfapply = function(e) {
            var t = A(),
                n = a(e);
            return n.push(t.makeNodeResolver()), this.fapply(n).fail(t.reject), t.promise
        }, L.nfcall = function(e) {
            var t = a(arguments, 1);
            return L(e).nfapply(t)
        }, _.prototype.nfcall = function() {
            var e = a(arguments),
                t = A();
            return e.push(t.makeNodeResolver()), this.fapply(e).fail(t.reject), t.promise
        }, L.nfbind = L.denodeify = function(e) {
            var t = a(arguments, 1);
            return function() {
                var n = t.concat(a(arguments)),
                    r = A();
                return n.push(r.makeNodeResolver()), L(e).fapply(n).fail(r.reject), r.promise
            }
        }, _.prototype.nfbind = _.prototype.denodeify = function() {
            var e = a(arguments);
            return e.unshift(this), L.denodeify.apply(void 0, e)
        }, L.nbind = function(e, t) {
            var n = a(arguments, 2);
            return function() {
                function s() {
                    return e.apply(t, arguments)
                }
                var r = n.concat(a(arguments)),
                    i = A();
                return r.push(i.makeNodeResolver()), L(s).fapply(r).fail(i.reject), i.promise
            }
        }, _.prototype.nbind = function() {
            var e = a(arguments, 0);
            return e.unshift(this), L.nbind.apply(void 0, e)
        }, L.nmapply = L.npost = function(e, t, n) {
            return L(e).npost(t, n)
        }, _.prototype.nmapply = _.prototype.npost = function(e, t) {
            var n = a(t || []),
                r = A();
            return n.push(r.makeNodeResolver()), this.dispatch("post", [e, n]).fail(r.reject), r.promise
        }, L.nsend = L.nmcall = L.ninvoke = function(e, t) {
            var n = a(arguments, 2),
                r = A();
            return n.push(r.makeNodeResolver()), L(e).dispatch("post", [t, n]).fail(r.reject), r.promise
        }, _.prototype.nsend = _.prototype.nmcall = _.prototype.ninvoke = function(e) {
            var t = a(arguments, 1),
                n = A();
            return t.push(n.makeNodeResolver()), this.dispatch("post", [e, t]).fail(n.reject), n.promise
        }, L.nodeify = ft, _.prototype.nodeify = function(e) {
            if (!e) return this;
            this.then(function(t) {
                s(function() {
                    e(null, t)
                })
            }, function(t) {
                s(function() {
                    e(t)
                })
            })
        };
        var lt = C();
        return L
    }), n("app/api", ["q"], function(e) {
        e.stopUnhandledRejectionTracking(), e.longStackSupport = !0;
        var t = "Eech7co8Ohloopo9Ol6baimi",
            n = window.location.pathname,
            r = {
                "/": [200, 404],
                "/new": [201, 202],
                "/id/\\d+": [200, 403, 404],
                "/id/\\d+/(like/dislike)": [200],
                "/count": [200]
            }, i, s, o = document.getElementsByTagName("script");
        for (var u = 0; u < o.length; u++)
            if (o[u].hasAttribute("data-isso")) {
                s = o[u].getAttribute("data-isso");
                break
            }
        if (!s) {
            for (u = 0; u < o.length; u++)
                if (o[u].getAttribute("async") || o[u].getAttribute("defer")) throw "Isso's automatic configuration detection failed, please refer to https://github.com/posativ/isso#client-configuration and add a custom `data-isso` attribute.";
            i = o[o.length - 1], s = i.src.substring(0, i.src.length - "/js/embed.min.js".length)
        }
        s[s.length - 1] === "/" && (s = s.substring(0, s.length - 1));
        var a = function(t, n, i) {
            function a() {
                var e = n.replace(s, "").split("?", 1)[0],
                    t = o.getResponseHeader("X-Set-Cookie");
                t && t.match(/^isso-/) && (document.cookie = t), e in r && r[e].indexOf(o.status) === -1 ? u.reject(o.responseText) : u.resolve({
                    status: o.status,
                    body: o.responseText
                })
            }
            var o = new XMLHttpRequest,
                u = e.defer();
            try {
                o.open(t, n, !0), o.withCredentials = !0, o.setRequestHeader("Content-Type", "application/json"), o.onreadystatechange = function() {
                    o.readyState === 4 && a()
                }
            } catch (f) {
                u.reject(f.message)
            }
            return o.send(i), u.promise
        }, f = function(e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && e[n] && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                return t.substring(0, t.length - 1)
            }, l = function(e, t) {
                return a("POST", s + "/new?" + f({
                    uri: e || n
                }), JSON.stringify(t)).then(function(e) {
                    return JSON.parse(e.body)
                })
            }, c = function(e, t) {
                return a("PUT", s + "/id/" + e, JSON.stringify(t)).then(function(e) {
                    return JSON.parse(e.body)
                })
            }, h = function(e) {
                return a("DELETE", s + "/id/" + e, null).then(function(e) {
                    if (e.status === 403) throw "Not authorized to remove this comment!";
                    return JSON.parse(e.body) === null
                })
            }, p = function(e, t) {
                return a("GET", s + "/id/" + e + "?" + f({
                    plain: t
                }), null).then(function(e) {
                    return JSON.parse(e.body)
                })
            }, d = function(e) {
                return a("GET", s + "/?" + f({
                    uri: e || n
                }), null).then(function(e) {
                    return e.status === 200 ? JSON.parse(e.body) : []
                })
            }, v = function(e) {
                return a("GET", s + "/count?" + f({
                    uri: e || n
                }), null).then(function(e) {
                    return JSON.parse(e.body)
                })
            }, m = function(e) {
                return a("POST", s + "/id/" + e + "/like", null).then(function(e) {
                    return JSON.parse(e.body)
                })
            }, g = function(e) {
                return a("POST", s + "/id/" + e + "/dislike", null).then(function(e) {
                    return JSON.parse(e.body)
                })
            }, y = function() {
                return a("GET", s + "/check-ip", null).then(function(e) {
                    return e.body
                })
            };
        return {
            endpoint: s,
            salt: t,
            remote_addr: y,
            create: l,
            modify: c,
            remove: h,
            view: p,
            fetch: d,
            count: v,
            like: m,
            dislike: g
        }
    }), n("text", ["module"], function(e) {
        var n, r, i, s, o, u = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            f = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            l = typeof location != "undefined" && location.href,
            c = l && location.protocol && location.protocol.replace(/\:/, ""),
            h = l && location.hostname,
            p = l && (location.port || undefined),
            d = {}, v = e.config && e.config() || {};
        n = {
            version: "2.0.10",
            strip: function(e) {
                if (e) {
                    e = e.replace(a, "");
                    var t = e.match(f);
                    t && (e = t[1])
                } else e = "";
                return e
            },
            jsEscape: function(e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: v.createXhr || function() {
                var e, t, n;
                if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
                if (typeof ActiveXObject != "undefined")
                    for (t = 0; t < 3; t += 1) {
                        n = u[t];
                        try {
                            e = new ActiveXObject(n)
                        } catch (r) {}
                        if (e) {
                            u = [n];
                            break
                        }
                    }
                return e
            },
            parseName: function(e) {
                var t, n, r, i = !1,
                    s = e.indexOf("."),
                    o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
                return s !== -1 && (!o || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1, e.length)) : t = e, r = n || t, s = r.indexOf("!"), s !== -1 && (i = r.substring(s + 1) === "strip", r = r.substring(0, s), n ? n = r : t = r), {
                    moduleName: t,
                    ext: n,
                    strip: i
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function(e, t, r, i) {
                var s, o, u, a = n.xdRegExp.exec(e);
                return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === t) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || u === i)) : !0
            },
            finishLoad: function(e, t, r, i) {
                r = t ? n.strip(r) : r, v.isBuild && (d[e] = r), i(r)
            },
            load: function(e, t, r, i) {
                if (i.isBuild && !i.inlineText) {
                    r();
                    return
                }
                v.isBuild = i.isBuild;
                var s = n.parseName(e),
                    o = s.moduleName + (s.ext ? "." + s.ext : ""),
                    u = t.toUrl(o),
                    a = v.useXhr || n.useXhr;
                if (u.indexOf("empty:") === 0) {
                    r();
                    return
                }!l || a(u, c, h, p) ? n.get(u, function(t) {
                    n.finishLoad(e, s.strip, t, r)
                }, function(e) {
                    r.error && r.error(e)
                }) : t([o], function(e) {
                    n.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
                })
            },
            write: function(e, t, r, i) {
                if (d.hasOwnProperty(t)) {
                    var s = n.jsEscape(d[t]);
                    r.asModule(e + "!" + t, "define(function () { return '" + s + "';});\n")
                }
            },
            writeFile: function(e, t, r, i, s) {
                var o = n.parseName(t),
                    u = o.ext ? "." + o.ext : "",
                    a = o.moduleName + u,
                    f = r.toUrl(o.moduleName + u) + ".js";
                n.load(a, r, function(t) {
                    var r = function(e) {
                        return i(f, e)
                    };
                    r.asModule = function(e, t) {
                        return i.asModule(e, f, t)
                    }, n.write(e, a, r, s)
                }, s)
            }
        };
        if (v.env === "node" || !v.env && typeof process != "undefined" && process.versions && !! process.versions.node && !process.versions["node-webkit"]) r = t.nodeRequire("fs"), n.get = function(e, t, n) {
            try {
                var i = r.readFileSync(e, "utf8");
                i.indexOf("﻿") === 0 && (i = i.substring(1)), t(i)
            } catch (s) {
                n(s)
            }
        };
        else if (v.env === "xhr" || !v.env && n.createXhr()) n.get = function(e, t, r, i) {
            var s = n.createXhr(),
                o;
            s.open("GET", e, !0);
            if (i)
                for (o in i) i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
            v.onXhr && v.onXhr(s, e), s.onreadystatechange = function(n) {
                var i, o;
                s.readyState === 4 && (i = s.status, i > 399 && i < 600 ? (o = new Error(e + " HTTP status: " + i), o.xhr = s, r(o)) : t(s.responseText), v.onXhrComplete && v.onXhrComplete(s, e))
            }, s.send(null)
        };
        else if (v.env === "rhino" || !v.env && typeof Packages != "undefined" && typeof java != "undefined") n.get = function(e, t) {
            var n, r, i = "utf-8",
                s = new java.io.File(e),
                o = java.lang.System.getProperty("line.separator"),
                u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)),
                a = "";
            try {
                n = new java.lang.StringBuffer, r = u.readLine(), r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)), r !== null && n.append(r);
                while ((r = u.readLine()) !== null) n.append(o), n.append(r);
                a = String(n.toString())
            } finally {
                u.close()
            }
            t(a)
        };
        else if (v.env === "xpconnect" || !v.env && typeof Components != "undefined" && Components.classes && Components.interfaces) i = Components.classes, s = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1" in i, n.get = function(e, t) {
            var n, r, u, a = {};
            o && (e = e.replace(/\//g, "\\")), u = new FileUtils.File(e);
            try {
                n = i["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream), n.init(u, 1, 0, !1), r = i["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream), r.init(n, "utf-8", n.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), r.readString(n.available(), a), r.close(), n.close(), t(a.value)
            } catch (f) {
                throw new Error((u && u.path || "") + ": " + f)
            }
        };
        return n
    }), n("text!app/text/postbox.html", [], function() {
        return '<div class="postbox">\n    <div class="avatar">\n        <svg class="blank" data-hash="{{ hash }}"></svg>\n    </div>\n    <div class="form-wrapper">\n        <div class="textarea-wrapper">\n            <textarea name="text" rows="2" placeholder="{{ i18n-postbox-text }}"></textarea>\n        </div>\n        <section class="auth-section">\n            <p class="input-wrapper">\n                <input type="text" name="author" placeholder="{{ i18n-postbox-author }}"/>\n            </p>\n            <p class="input-wrapper">\n                <input type="email" name="email" placeholder="{{ i18n-postbox-email }}"/>\n            </p>\n            <p class="post-action">\n                <input type="submit" value="{{ i18n-postbox-submit }}"/>\n            </p>\n        </section>\n    </div>\n</div>'
    }), n("text!app/text/comment.html", [], function() {
        return '<div class="isso-comment" id="isso-{{ id | blank }}">\n    <div class="avatar">\n        <svg data-hash="{{ hash }}"></svg>\n    </div>\n    <div class="text-wrapper">\n        <div class="isso-comment-header" role="meta">\n            {{ if bool(website) }}\n            <a class="author" href="{{ website }}" rel="nofollow">\n                {{ author | blank : `i18n-comment-anonymous` }}\n            </a>\n            {{ else }}\n                <span class="author">\n                    {{ author | blank : `i18n-comment-anonymous` }}\n                </span>\n            {{ /if }}\n\n            {{ if parent }}\n            <span class="spacer">•</span>\n            <a class="parent" href="#isso-{{ parent }}">\n                <i>{{ svg-forward }}</i>{{ replyto | blank: `i18n-comment-anonymous` }}\n            </a>\n            {{ /if }}\n\n            <span class="spacer">•</span>\n\n            <a class="permalink" href="#isso-{{ id }}">\n                <date datetime="{{ created | datetime }}"></date>\n            </a>\n\n            <span class="note">\n            {{ if mode | equals : 2 }}\n                {{ i18n-comment-queued }}\n            {{ /if }}\n            {{ if mode | equals : 4 }}\n                {{ i18n-comment-deleted }}\n            {{ /if }}\n            </span>\n\n        </div>\n        <div class="text">\n            {{ if mode | equals : 4 }}\n                <p>&nbsp;</p>\n            {{ else }}\n                {{ text }}\n            {{ /if }}\n        </div>\n        <div class="isso-comment-footer">\n            {{ if likes | substract : `dislikes` | notequals : 0 }}\n                <span class="votes">{{ likes | substract : `dislikes` }}</span>\n            {{ /if }}\n            <a class="upvote" href="#"><i>{{ svg-arrow-up}}</i></a>\n            <span class="spacer">|</span>\n            <a class="downvote" href="#"><i>{{ svg-arrow-down}}</i></a>\n\n            <a class="reply" href="#">{{ i18n-comment-reply }}</a>\n            <a class="edit" href="#">{{ i18n-comment-edit }}</a>\n            <a class="delete" href="#">{{ i18n-comment-delete }}</a>\n        </div>\n        <div class="isso-follow-up">\n        </div>\n    </div>\n</div>'
    }), n("app/text/html", ["text!./postbox.html", "text!./comment.html"], function(e, t) {
        return {
            postbox: e,
            comment: t
        }
    }), n("app/dom", [], function() {
        window.Element.prototype.replace = function(t) {
            var n = e.htmlify(t);
            return this.parentNode.replaceChild(n, this), n
        }, window.Element.prototype.prepend = function(t) {
            var n = e.htmlify(t);
            return this.insertBefore(n, this.firstChild), n
        }, window.Element.prototype.append = function(t) {
            var n = e.htmlify(t);
            return this.appendChild(n), n
        }, window.Element.prototype.insertAfter = function(t) {
            var n = e.htmlify(t);
            return this.parentNode.insertBefore(n, this.nextSibling), n
        }, window.Element.prototype.on = function(e, t, n) {
            this.addEventListener(e, function(e) {
                t(), (n === undefined || n) && e.preventDefault()
            })
        }, window.Element.prototype.toggle = function(e, t, n) {
            function r(e, t, n) {
                this.state = !1, this.el = e, this.on = t, this.off = n
            }
            r.prototype.next = function() {
                this.state ? (this.state = !1, this.off(this)) : (this.state = !0, this.on(this))
            }, r.prototype.wait = function() {
                this.state = !this.state
            };
            var i = new r(this, t, n);
            this.on(e, function() {
                i.next()
            })
        }, window.Element.prototype.detach = function() {
            return this.parentNode.removeChild(this), this
        }, window.Element.prototype.remove = function() {
            this.parentNode.removeChild(this)
        };
        var e = function(e, t) {
            t || (t = window.document);
            var n = t.querySelectorAll(e);
            return n.length === 0 ? null : n.length === 1 ? n[0] : n
        };
        return e.htmlify = function(t) {
            if (t instanceof window.Element) return t;
            var n = e.new("div");
            return n.innerHTML = t, n.firstChild
        }, e.new = function(e, t) {
            var n = document.createElement(e.split(".")[0]);
            return e.split(".").slice(1).forEach(function(e) {
                n.classList.add(e)
            }), ["A", "LINK"].indexOf(n.nodeName) > -1 && (n.href = "#"), ["TEXTAREA", "INPUT"].indexOf(n.nodeName) > -1 ? n.value = t || "" : n.textContent = t || "", n
        }, e.each = function(e, t) {
            Array.prototype.forEach.call(document.getElementsByTagName(e), t)
        }, e
    });
    var r = {
        includes: {},
        globals: {},
        delimiter: ">",
        compact: !1,
        _copy: function(e, t) {
            t = t || [];
            for (var n in e) t[n] = e[n];
            return t
        },
        _size: function(e) {
            return e instanceof Array ? e.length : e || 0
        },
        _iter: function(e, t) {
            this.idx = e, this.size = t, this.length = t, this.sign = "#", this.toString = function() {
                return this.idx + this.sign.length - 1
            }
        },
        _pipe: function(e, t) {
            var n, i, s, o;
            if (n = t.shift()) {
                i = n.split(this.delimiter), s = i.shift().trim();
                try {
                    o = r.pipes[s].apply(null, [e].concat(i)), e = this._pipe(o, t)
                } catch (u) {}
            }
            return e
        },
        _eval: function(e, t, n) {
            var i = this._pipe(e, t),
                s = i,
                o = -1,
                u, a;
            if (i instanceof Array) {
                i = "", u = s.length;
                while (++o < u) a = {
                    iter: new this._iter(o, u)
                }, i += n ? r.up(n, s[o], a) : s[o]
            } else i instanceof Object && (i = r.up(n, s));
            return i
        },
        _test: function(e, t, n, i) {
            var s = r.up(t, n, i).split(/\{\{\s*else\s*\}\}/);
            return (e === !1 ? s[1] : s[0]) || ""
        },
        _bridge: function(e, t) {
            var n = "{{\\s*" + t + "([^/}]+\\w*)?}}|{{/" + t + "\\s*}}",
                r = new RegExp(n, "g"),
                i = e.match(r) || [],
                s, o, u = 0,
                a = 0,
                f = -1,
                l = 0;
            for (o = 0; o < i.length; o++) {
                s = o, f = e.indexOf(i[s], f + 1), i[s].indexOf("{{/") > -1 ? a++ : u++;
                if (u === a) break
            }
            return u = e.indexOf(i[0]), a = u + i[0].length, l = f + i[s].length, [e.substring(u, l), e.substring(a, f)]
        }
    };
    r.up = function(e, t, n) {
        t = t || {}, n = n || {};
        var i = /\{\{(.+?)\}\}/g,
            s = e.match(i) || [],
            o, u, a, f = [],
            l, c, h, p, d, v, m, g = 0,
            y = 0;
        n.pipes && this._copy(n.pipes, this.pipes), n.includes && this._copy(n.includes, this.includes), n.globals && this._copy(n.globals, this.globals), n.delimiter && (this.delimiter = n.delimiter), n.compact !== undefined && (this.compact = n.compact);
        while (o = s[g++]) {
            p = undefined, h = "", l = o.indexOf("/}}") > -1, u = o.substr(2, o.length - (l ? 5 : 4)), u = u.replace(/`(.+?)`/g, function(e, n) {
                return r.up("{{" + n + "}}", t)
            }), c = u.trim().indexOf("if ") === 0, f = u.split("|"), f.shift(), u = u.replace(/^\s*if/, "").split("|").shift().trim(), a = c ? "if" : u.split("|")[0], m = t[u], c && !f.length && (f = ["notempty"]), !l && e.indexOf("{{/" + a) > -1 && (p = this._bridge(e, a), o = p[0], h = p[1], g += o.match(i).length - 1);
            if (/^\{\{\s*else\s*\}\}$/.test(o)) continue;
            if ((d = this.globals[u]) !== undefined) p = this._eval(d, f, h);
            else if (v = this.includes[u]) v instanceof Function && (v = v()), p = this._pipe(r.up(v, t), f);
            else if (u.indexOf("#") > -1) n.iter.sign = u, p = this._pipe(n.iter, f);
            else if (u === ".") p = this._pipe(t, f);
            else if (u.indexOf(".") > -1) {
                u = u.split("."), m = r.globals[u[0]], m ? y = 1 : (y = 0, m = t);
                while (m && y < u.length) m = m[u[y++]];
                p = this._eval(m, f, h)
            } else c ? p = this._pipe(m, f) : m instanceof Array ? p = this._eval(m, f, h) : h ? p = m ? r.up(h, m) : undefined : t.hasOwnProperty(u) && (p = this._pipe(m, f));
            c && (p = this._test(p, h, t, n)), e = e.replace(o, p === undefined ? "???" : p)
        }
        return this.compact ? e.replace(/>\s+</g, "><") : e
    }, r.pipes = {
        empty: function(e) {
            return !e || (e + "").trim().length === 0 ? e : !1
        },
        notempty: function(e) {
            return e && (e + "").trim().length ? e : !1
        },
        blank: function(e, t) {
            return !e && e !== 0 ? t : e
        },
        more: function(e, t) {
            return r._size(e) > t ? e : !1
        },
        less: function(e, t) {
            return r._size(e) < t ? e : !1
        },
        ormore: function(e, t) {
            return r._size(e) >= t ? e : !1
        },
        orless: function(e, t) {
            return r._size(e) <= t ? e : !1
        },
        between: function(e, t, n) {
            return e = r._size(e), e >= t && e <= n ? e : !1
        },
        equals: function(e, t) {
            return e == t ? e : !1
        },
        notequals: function(e, t) {
            return e != t ? e : !1
        },
        like: function(e, t) {
            return (new RegExp(t, "i")).test(e) ? e : !1
        },
        notlike: function(e, t) {
            return r.pipes.like(e, t) ? !1 : e
        },
        upcase: function(e) {
            return String(e).toUpperCase()
        },
        downcase: function(e) {
            return String(e).toLowerCase()
        },
        capcase: function(e) {
            return e.replace(/\b\w/g, function(e) {
                return e.toUpperCase()
            })
        },
        chop: function(e, t) {
            return e.length > t ? e.substr(0, t) + "..." : e
        },
        tease: function(e, t) {
            var n = e.split(/\s+/);
            return n.slice(0, t).join(" ") + (n.length > t ? "..." : "")
        },
        trim: function(e) {
            return e.trim()
        },
        pack: function(e) {
            return e.trim().replace(/\s{2,}/g, " ")
        },
        round: function(e) {
            return Math.round(+e)
        },
        clean: function(e) {
            return String(e).replace(/<\/?[^>]+>/gi, "")
        },
        size: function(e) {
            return e.length
        },
        length: function(e) {
            return e.length
        },
        reverse: function(e) {
            return r._copy(e).reverse()
        },
        join: function(e, t) {
            return e.join(t)
        },
        limit: function(e, t, n) {
            return e.slice(+n || 0, +t + (+n || 0))
        },
        split: function(e, t) {
            return e.split(t || ",")
        },
        choose: function(e, t, n) {
            return e ? t : n || ""
        },
        toggle: function(e, t, n, r) {
            return n.split(",")[t.match(/\w+/g).indexOf(e + "")] || r
        },
        sort: function(e, t) {
            var n = function(e, n) {
                return e[t] > n[t] ? 1 : -1
            };
            return r._copy(e).sort(t ? n : undefined)
        },
        fix: function(e, t) {
            return (+e).toFixed(t)
        },
        mod: function(e, t) {
            return +e % +t
        },
        divisible: function(e, t) {
            return e && +e % t === 0 ? e : !1
        },
        even: function(e) {
            return e && (+e & 1) === 0 ? e : !1
        },
        odd: function(e) {
            return e && (+e & 1) === 1 ? e : !1
        },
        number: function(e) {
            return parseFloat(e.replace(/[^\-\d\.]/g, ""))
        },
        url: function(e) {
            return encodeURI(e)
        },
        bool: function(e) {
            return !!e
        },
        falsy: function(e) {
            return !e
        },
        first: function(e) {
            return e.idx === 0
        },
        last: function(e) {
            return e.idx === e.size - 1
        },
        call: function(e, t) {
            return e[t].apply(e, [].slice.call(arguments, 2))
        },
        set: function(e, t) {
            return r.globals[t] = e, ""
        },
        log: function(e) {
            return console.log(e), e
        }
    }, typeof String.prototype.trim != "function" && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }), typeof module != "undefined" && module.exports ? module.exports = r : typeof n == "function" && n.amd && n("vendor/markup", [], function() {
        return r
    }), n("app/i18n/de", {
        "postbox-text": "Kommentar hier eintippen (mindestens 3 Zeichen)",
        "postbox-author": "Name (optional)",
        "postbox-email": "Email (optional)",
        "postbox-submit": "Abschicken",
        "num-comments": "1 Kommentar\n{{ n }} Kommentare",
        "no-comments": "Keine Kommentare bis jetzt",
        "comment-reply": "Antworten",
        "comment-edit": "Bearbeiten",
        "comment-save": "Speichern",
        "comment-delete": "Löschen",
        "comment-confirm": "Bestätigen",
        "comment-close": "Schließen",
        "comment-cancel": "Abbrechen",
        "comment-deleted": "Kommentar gelöscht.",
        "comment-queued": "Kommentar muss noch freigeschaltet werden.",
        "comment-anonymous": "Anonym",
        "date-now": "eben jetzt",
        "date-minute": "vor einer Minute\nvor {{ n }} Minuten",
        "date-hour": "vor einer Stunde\nvor {{ n }} Stunden",
        "date-day": "Gestern\nvor {{ n }} Tagen",
        "date-week": "letzte Woche\nvor {{ n }} Wochen",
        "date-month": "letzten Monat\nvor {{ n }} Monaten",
        "date-year": "letztes Jahr\nvor {{ n }} Jahren"
    }), n("app/i18n/en", {
        "postbox-text": "Type Comment Here (at least 3 chars)",
        "postbox-author": "Name (optional)",
        "postbox-email": "E-mail (optional)",
        "postbox-submit": "Submit",
        "num-comments": "One Comment\n{{ n }} Comments",
        "no-comments": "No Comments Yet",
        "comment-reply": "Reply",
        "comment-edit": "Edit",
        "comment-save": "Save",
        "comment-delete": "Delete",
        "comment-confirm": "Confirm",
        "comment-close": "Close",
        "comment-cancel": "Cancel",
        "comment-deleted": "Comment deleted.",
        "comment-queued": "Comment in queue for moderation.",
        "comment-anonymous": "Anonymous",
        "date-now": "right now",
        "date-minute": "a minute ago\n{{ n }} minutes ago",
        "date-hour": "an hour ago\n{{ n }} hours ago",
        "date-day": "Yesterday\n{{ n }} days ago",
        "date-week": "last week\n{{ n }} weeks ago",
        "date-month": "last month\n{{ n }} months ago",
        "date-year": "last year\n{{ n }} years ago"
    }), n("app/i18n/fr", {
        "postbox-text": "Insérez votre commentaire ici (au moins 3 lettres)",
        "postbox-author": "Nom (optionel)",
        "postbox-email": "Courriel (optionel)",
        "postbox-submit": "Soumettre",
        "num-comments": "Un commentaire\n{{ n }} commentaires",
        "no-comments": "Aucun commentaire pour l'instant",
        "comment-reply": "Répondre",
        "comment-edit": "Éditer",
        "comment-save": "Enregistrer",
        "comment-delete": "Supprimer",
        "comment-confirm": "Confirmer",
        "comment-close": "Fermer",
        "comment-cancel": "Annuler",
        "comment-deleted": "Commentaire supprimé.",
        "comment-queued": "Commentaire en attente de modération.",
        "comment-anonymous": "Anonyme",
        "date-now": "À l'instant'",
        "date-minute": "Il y a une minute \n{{ n }} minutes",
        "date-hour": "Il y a une heure\n{{ n }} heures ",
        "date-day": "Hier\n{{ n }} jours auparavant",
        "date-week": "Il y a une semaine\n{{ n }} semaines",
        "date-month": "Il y a un mois\n{{ n }} mois",
        "date-year": "Il y a un an\n{{ n }} ans"
    }), n("app/i18n/ru", {
        "postbox-text": "Комментировать здесь  (миниум 3 символа)",
        "postbox-author": "Имя (необязательно)",
        "postbox-email": "Email (необязательно)",
        "postbox-submit": "Отправить",
        "num-comments": "1 Комментарий\n{{ n }} Комментарии",
        "no-comments": "Нет Комментарев",
        "comment-reply": "Ответить",
        "comment-edit": "Правка",
        "comment-save": "Сохранить",
        "comment-delete": "Удалить",
        "comment-confirm": "Подтвердить",
        "comment-close": "Закрыть",
        "comment-cancel": "Отменить",
        "comment-deleted": "Удалить комментарий",
        "comment-queued": "Комментарий должен быть разблокирован",
        "comment-anonymous": "Аномимый",
        "date-now": "Сейчас",
        "date-minute": "Минут назад\n{{ n }} минут",
        "date-hour": "Час назад\n{{ n }} часов",
        "date-day": "Вчера\n{{ n }} дней",
        "date-week": "на прошлой недели\n{{ n }} недель",
        "date-month": "в прошоим месяце\n{{ n }} месяцов",
        "date-year": "в прошлом году\n{{ n }} года\n{{ n }} лет"
    }), n("app/i18n/it", {
        "postbox-text": "Scrivi un commento qui (minimo 3 caratteri)",
        "postbox-author": "Nome (opzionale)",
        "postbox-email": "E-mail (opzionale)",
        "postbox-submit": "Invia",
        "num-comments": "Un Commento\n{{ n }} Commenti",
        "no-comments": "Ancora Nessun Commento",
        "comment-reply": "Rispondi",
        "comment-edit": "Modifica",
        "comment-save": "Salva",
        "comment-delete": "Elimina",
        "comment-confirm": "Conferma",
        "comment-close": "Chiudi",
        "comment-cancel": "Cancella",
        "comment-deleted": "Commento eliminato.",
        "comment-queued": "Commento in coda per moderazione.",
        "comment-anonymous": "Anonimo",
        "date-now": "poco fa",
        "date-minute": "un minuto fa\n{{ n }} minuti fa",
        "date-hour": "un ora fa\n{{ n }} ore fa",
        "date-day": "Ieri\n{{ n }} giorni fa",
        "date-week": "questa settimana\n{{ n }} settimane fa",
        "date-month": "questo mese\n{{ n }} mesi fa",
        "date-year": "quest'anno\n{{ n }} anni fa"
    }), n("app/i18n", ["app/config", "app/i18n/de", "app/i18n/en", "app/i18n/fr", "app/i18n/ru", "app/i18n/it"], function(e, t, n, r, i, s) {
        var o = {
            en: function(e, t) {
                return e[t === 1 ? 0 : 1]
            },
            fr: function(e, t) {
                return e[t > 1 ? 0 : 1]
            },
            ru: function(e, t) {
                return t % 10 === 1 && t % 100 !== 11 ? e[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? e[1] : e[2] !== undefined ? e[2] : e[1]
            }
        };
        o.de = o.en, o.it = o.en;
        var u = e.lang;
        return o[u] || (u = "en"), {
            plurals: o,
            lang: u,
            de: t,
            en: n,
            fr: r,
            ru: i,
            it: s
        }
    }), n("text!app/text/forward.svg", [], function() {
        return '<!-- Generator: IcoMoon.io --><svg width="10" height="10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="gray">\n  <g>\n    <path d="M 17.961,11.954L 17.961,2 L 32,16L 17.961,30L 17.961,19.958 C 10.826,19.958, 3.784,21.2,0,27.094 C 0.394,16.353, 8.43,13.796, 17.961,11.954z">\n    </path>\n  </g>\n</svg>\n'
    }), n("text!app/text/arrow-down.svg", [], function() {
        return '<!-- Generator: IcoMoon.io --><svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="gray">\n  <g>\n    <path d="M 24.773,13.701c-0.651,0.669-7.512,7.205-7.512,7.205C 16.912,21.262, 16.456,21.44, 16,21.44c-0.458,0-0.914-0.178-1.261-0.534 c0,0-6.861-6.536-7.514-7.205c-0.651-0.669-0.696-1.87,0-2.586c 0.698-0.714, 1.669-0.77, 2.522,0L 16,17.112l 6.251-5.995 c 0.854-0.77, 1.827-0.714, 2.522,0C 25.47,11.83, 25.427,13.034, 24.773,13.701z">\n    </path>\n  </g>\n</svg>\n'
    }), n("text!app/text/arrow-up.svg", [], function() {
        return '<!-- Generator: IcoMoon.io --><svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="gray">\n  <g>\n    <path d="M 24.773,18.299c-0.651-0.669-7.512-7.203-7.512-7.203C 16.912,10.739, 16.456,10.56, 16,10.56c-0.458,0-0.914,0.179-1.261,0.536 c0,0-6.861,6.534-7.514,7.203c-0.651,0.669-0.696,1.872,0,2.586c 0.698,0.712, 1.669,0.77, 2.522,0L 16,14.89l 6.251,5.995 c 0.854,0.77, 1.827,0.712, 2.522,0C 25.47,20.17, 25.427,18.966, 24.773,18.299z">\n    </path>\n  </g>\n</svg>\n'
    }), n("app/text/svg", ["text!./forward.svg", "text!./arrow-down.svg", "text!./arrow-up.svg"], function(e, t, n) {
        return {
            forward: e,
            "arrow-down": t,
            "arrow-up": n
        }
    }), n("app/markup", ["vendor/markup", "app/i18n", "app/text/svg"], function(e, t, n) {
        function i(e) {
            var t = {};
            for (var n in e)
                for (var r in e[n]) t[n + "-" + r] = e[n][r];
            return t
        }
        var r = function(e, t, n) {
            return n = n || "0", e += "", e.length >= t ? e : (new Array(t - e.length + 1)).join(n) + e
        };
        e.delimiter = ":", e.includes = i({
            i18n: t[t.lang],
            svg: n
        }), e.pipes.datetime = function(e) {
            return typeof e != "object" && (e = new Date(parseInt(e, 10) * 1e3)), [e.getUTCFullYear(), r(e.getUTCMonth(), 2), r(e.getUTCDay(), 2)].join("-")
        }, e.pipes.substract = function(e, t) {
            return parseInt(e, 10) - parseInt(t, 10)
        }, e.pipes.pluralize = function(e, n) {
            return t.plurals[t.lang](e.split("\n"), +n).trim()
        };
        var s = function(e) {
            return e.replace(/\{\{\s*(.+?)\s*\}\}/g, function(e, t) {
                return ("{{" + t + "}}").replace(/\s*\|\s*/g, "|").replace(/\s*\:\s*/g, ":")
            })
        };
        return {
            up: function(t, n) {
                return e.up(s(t), n)
            }
        }
    }), n("app/utils", ["app/markup"], function(e) {
        var t = function(e) {
            return (document.cookie.match("(^|; )" + e + "=([^;]*)") || 0)[2]
        }, n = function(t) {
                var n = ((new Date).getTime() - t.getTime()) / 1e3,
                    r = Math.floor(n / 86400);
                if (isNaN(r) || r < 0) return;
                var i = function(t, n) {
                    return n ? e.up("{{ i18n-" + t + " | pluralize : `n` }}", {
                        n: n
                    }) : e.up("{{ i18n-" + t + " }}")
                };
                return r === 0 && (n < 60 && i("date-now") || n < 3600 && i("date-minute", Math.floor(n / 60)) || n < 86400 && i("date-hour", Math.floor(n / 3600))) || r < 7 && i("date-day", r) || r < 31 && i("date-week", Math.ceil(r / 7)) || r < 365 && i("date-month", Math.ceil(r / 30)) || i("date-year", Math.ceil(r / 365.25))
            };
        return {
            cookie: t,
            ago: n
        }
    }), n("app/lib/fancy", [], function() {
        var e = function(e, t) {
            var n = window.opera ? e.offsetHeight + parseInt(window.getComputedStyle(e, null).getPropertyValue("border-top-width")) : e.offsetHeight - e.clientHeight;
            ["keyup", "focus"].forEach(function(r) {
                e.on(r, function() {
                    e.scrollHeight + n > t && (e.style.height = "auto", e.style.height = e.scrollHeight + n + "px")
                })
            })
        };
        return {
            autoresize: e
        }
    }), n("app/lib/identicons", ["q"], function(e) {
        var t = 8,
            n = 5,
            r = function(e, t) {
                return e.length >= t ? e : (new Array(t - e.length + 1)).join("0") + e
            }, i = function(e, t, n, r, i, s) {
                var o = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                o.setAttribute("x", r + t * i), o.setAttribute("y", r + n * i), o.setAttribute("width", i), o.setAttribute("height", i), o.setAttribute("style", "fill: " + s), e.appendChild(o)
            }, s = function(t, s, o) {
                var u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return u.setAttribute("version", "1.1"), u.setAttribute("viewBox", "0 0 " + o + " " + o), u.setAttribute("preserveAspectRatio", "xMinYMin meet"), u.setAttribute("shape-rendering", "crispEdges"), i(u, 0, 0, 0, o + 2 * s, "#F0F0F0"), typeof t === null ? u : (e.when(t, function(e) {
                    var t = r((parseInt(e, 16) % Math.pow(2, 18)).toString(2), 18),
                        o = 0,
                        a = null;
                    u.setAttribute("data-hash", e);
                    switch (t.substring(t.length - 3, t.length)) {
                        case "000":
                            a = "#9abf88";
                            break;
                        case "001":
                            a = "#5698c4";
                            break;
                        case "010":
                            a = "#e279a3";
                            break;
                        case "011":
                            a = "#9163b6";
                            break;
                        case "100":
                            a = "#be5168";
                            break;
                        case "101":
                            a = "#f19670";
                            break;
                        case "110":
                            a = "#e4bf80";
                            break;
                        case "111":
                            a = "#447c69"
                    }
                    for (var f = 0; f < Math.ceil(n / 2); f++)
                        for (var l = 0; l < n; l++) t.charAt(o) === "1" && (i(u, f, l, s, 8, a), f < Math.floor(n / 2) && i(u, n - 1 - f, l, s, 8, a)), o++
                }), u)
            }, o = function(e, t) {
                var n = parseInt([0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0].join(""), 2).toString(16),
                    r = s(n, e, t);
                return r.setAttribute("className", "blank"), r
            };
        return {
            generate: s,
            blank: o
        }
    }), n("app/lib/sha1", [], function() {
        function n(e) {
            return c(f(d(e)))
        }

        function r(e) {
            return h(f(d(e)))
        }

        function i(e, t) {
            return p(f(d(e)), t)
        }

        function s(e, t) {
            return c(l(d(e), d(t)))
        }

        function o(e, t) {
            return h(l(d(e), d(t)))
        }

        function u(e, t, n) {
            return p(l(d(e), d(t)), n)
        }

        function a() {
            return n("abc").toLowerCase() == "a9993e364706816aba3e25717850c26c9cd0d89d"
        }

        function f(e) {
            return y(b(g(e), e.length * 8))
        }

        function l(e, t) {
            var n = g(e);
            n.length > 16 && (n = b(n, e.length * 8));
            var r = Array(16),
                i = Array(16);
            for (var s = 0; s < 16; s++) r[s] = n[s] ^ 909522486, i[s] = n[s] ^ 1549556828;
            var o = b(r.concat(g(t)), 512 + t.length * 8);
            return y(b(i.concat(o), 672))
        }

        function c(t) {
            try {
                e
            } catch (n) {
                e = 0
            }
            var r = e ? "0123456789ABCDEF" : "0123456789abcdef",
                i = "",
                s;
            for (var o = 0; o < t.length; o++) s = t.charCodeAt(o), i += r.charAt(s >>> 4 & 15) + r.charAt(s & 15);
            return i
        }

        function h(e) {
            try {
                t
            } catch (n) {
                t = ""
            }
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                i = "",
                s = e.length;
            for (var o = 0; o < s; o += 3) {
                var u = e.charCodeAt(o) << 16 | (o + 1 < s ? e.charCodeAt(o + 1) << 8 : 0) | (o + 2 < s ? e.charCodeAt(o + 2) : 0);
                for (var a = 0; a < 4; a++) o * 8 + a * 6 > e.length * 8 ? i += t : i += r.charAt(u >>> 6 * (3 - a) & 63)
            }
            return i
        }

        function p(e, t) {
            var n = t.length,
                r = Array(),
                i, s, o, u, a = Array(Math.ceil(e.length / 2));
            for (i = 0; i < a.length; i++) a[i] = e.charCodeAt(i * 2) << 8 | e.charCodeAt(i * 2 + 1);
            while (a.length > 0) {
                u = Array(), o = 0;
                for (i = 0; i < a.length; i++) {
                    o = (o << 16) + a[i], s = Math.floor(o / n), o -= s * n;
                    if (u.length > 0 || s > 0) u[u.length] = s
                }
                r[r.length] = o, a = u
            }
            var f = "";
            for (i = r.length - 1; i >= 0; i--) f += t.charAt(r[i]);
            var l = Math.ceil(e.length * 8 / (Math.log(t.length) / Math.log(2)));
            for (i = f.length; i < l; i++) f = t[0] + f;
            return f
        }

        function d(e) {
            var t = "",
                n = -1,
                r, i;
            while (++n < e.length) r = e.charCodeAt(n), i = n + 1 < e.length ? e.charCodeAt(n + 1) : 0, 55296 <= r && r <= 56319 && 56320 <= i && i <= 57343 && (r = 65536 + ((r & 1023) << 10) + (i & 1023), n++), r <= 127 ? t += String.fromCharCode(r) : r <= 2047 ? t += String.fromCharCode(192 | r >>> 6 & 31, 128 | r & 63) : r <= 65535 ? t += String.fromCharCode(224 | r >>> 12 & 15, 128 | r >>> 6 & 63, 128 | r & 63) : r <= 2097151 && (t += String.fromCharCode(240 | r >>> 18 & 7, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | r & 63));
            return t
        }

        function v(e) {
            var t = "";
            for (var n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) & 255, e.charCodeAt(n) >>> 8 & 255);
            return t
        }

        function m(e) {
            var t = "";
            for (var n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) >>> 8 & 255, e.charCodeAt(n) & 255);
            return t
        }

        function g(e) {
            var t = Array(e.length >> 2);
            for (var n = 0; n < t.length; n++) t[n] = 0;
            for (var n = 0; n < e.length * 8; n += 8) t[n >> 5] |= (e.charCodeAt(n / 8) & 255) << 24 - n % 32;
            return t
        }

        function y(e) {
            var t = "";
            for (var n = 0; n < e.length * 32; n += 8) t += String.fromCharCode(e[n >> 5] >>> 24 - n % 32 & 255);
            return t
        }

        function b(e, t) {
            e[t >> 5] |= 128 << 24 - t % 32, e[(t + 64 >> 9 << 4) + 15] = t;
            var n = Array(80),
                r = 1732584193,
                i = -271733879,
                s = -1732584194,
                o = 271733878,
                u = -1009589776;
            for (var a = 0; a < e.length; a += 16) {
                var f = r,
                    l = i,
                    c = s,
                    h = o,
                    p = u;
                for (var d = 0; d < 80; d++) {
                    d < 16 ? n[d] = e[a + d] : n[d] = x(n[d - 3] ^ n[d - 8] ^ n[d - 14] ^ n[d - 16], 1);
                    var v = S(S(x(r, 5), w(d, i, s, o)), S(S(u, n[d]), E(d)));
                    u = o, o = s, s = x(i, 30), i = r, r = v
                }
                r = S(r, f), i = S(i, l), s = S(s, c), o = S(o, h), u = S(u, p)
            }
            return Array(r, i, s, o, u)
        }

        function w(e, t, n, r) {
            return e < 20 ? t & n | ~t & r : e < 40 ? t ^ n ^ r : e < 60 ? t & n | t & r | n & r : t ^ n ^ r
        }

        function E(e) {
            return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
        }

        function S(e, t) {
            var n = (e & 65535) + (t & 65535),
                r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | n & 65535
        }

        function x(e, t) {
            return e << t | e >>> 32 - t
        }
        var e = 0,
            t = "";
        return {
            rstr2hex: c,
            binb2rstr: y,
            binb_sha1: b,
            rstr2binb: g
        }
    }), n("app/lib/pbkdf2", ["q", "app/lib/sha1"], function(e, t) {
        var n = function(e, n, r, i) {
            var s = t.rstr2binb(e),
                o = n,
                u = r,
                a = 10,
                f = 0,
                l = i,
                c = null,
                h = 20,
                p = Math.ceil(l / h),
                d = 1,
                v = new Array(16),
                m = new Array(16),
                g = new Array(0, 0, 0, 0, 0),
                y = "",
                b = this,
                w, E;
            s.length > 16 && (s = t.binb_sha1(s, e.length * chrsz));
            for (var S = 0; S < 16; ++S) v[S] = s[S] ^ 909522486, m[S] = s[S] ^ 1549556828;
            this.deriveKey = function(e, t) {
                E = e, w = t, setTimeout(function() {
                    b.do_PBKDF2_iterations()
                }, 0)
            }, this.do_PBKDF2_iterations = function() {
                var e = a;
                u - f < a && (e = u - f);
                for (var n = 0; n < e; ++n) {
                    if (f == 0) {
                        var r = o + String.fromCharCode(d >> 24 & 15) + String.fromCharCode(d >> 16 & 15) + String.fromCharCode(d >> 8 & 15) + String.fromCharCode(d & 15);
                        c = t.binb_sha1(v.concat(t.rstr2binb(r)), 512 + r.length * 8), c = t.binb_sha1(m.concat(c), 672)
                    } else c = t.binb_sha1(v.concat(c), 512 + c.length * 32), c = t.binb_sha1(m.concat(c), 672);
                    for (var i = 0; i < c.length; ++i) g[i] ^= c[i];
                    f++
                }
                E((d - 1 + f / u) / p * 100);
                if (f < u) setTimeout(function() {
                    b.do_PBKDF2_iterations()
                }, 0);
                else if (d < p) y += t.rstr2hex(t.binb2rstr(g)), d++, g = new Array(0, 0, 0, 0, 0), f = 0, setTimeout(function() {
                    b.do_PBKDF2_iterations()
                }, 0);
                else {
                    var s = t.rstr2hex(t.binb2rstr(g));
                    y += s.substr(0, (l - (p - 1) * h) * 2), w(y)
                }
            }
        };
        return function(t, r, i, s) {
            var o = e.defer();
            return e.when(t, function(e) {
                var t = new n(e, r, i, s);
                t.deriveKey(function(e) {}, function(e) {
                    o.resolve(e)
                })
            }), o.promise
        }
    }), n("app/lib", ["require", "app/lib/fancy", "app/lib/identicons", "app/lib/pbkdf2", "app/lib/sha1"], function(e) {
        return {
            fancy: e("app/lib/fancy"),
            identicons: e("app/lib/identicons"),
            pbkdf2: e("app/lib/pbkdf2"),
            sha1: e("app/lib/sha1")
        }
    }), n("app/isso", ["app/text/html", "app/dom", "app/utils", "app/config", "app/api", "app/markup", "app/i18n", "app/lib"], function(e, t, n, r, i, s, o, u) {
        var a = o[o.lang],
            f = function(n) {
                var r = t.htmlify(s.up(e.postbox));
                t(".avatar > svg", r).replace(u.identicons.blank(4, 48)), t(".textarea-wrapper > textarea", r).on("focus", function() {
                    t(".avatar svg", r).getAttribute("className") === "blank" && t(".avatar svg", r).replace(u.identicons.generate(u.pbkdf2(i.remote_addr(), i.salt, 1e3, 6), 4, 48))
                });
                var o;
                return t(".input-wrapper > [type=email]", r).on("keyup", function() {
                    o && clearTimeout(o), o = setTimeout(function() {
                        u.pbkdf2(t(".input-wrapper > [type=email]", r).value || i.remote_addr(), i.salt, 1e3, 6).then(function(e) {
                            t(".avatar svg", r).replace(u.identicons.generate(e, 4, 48))
                        })
                    }, 200)
                }, !1), t(".input-wrapper > [type=email]", r).on("keydown", function() {
                    clearTimeout(o)
                }, !1), r.onsuccess = function() {}, r.validate = function() {
                    return t("textarea", this).value.length < 3 ? (t("textarea", this).focus(), !1) : !0
                }, t("[type=submit]", r).on("click", function() {
                    if (!r.validate()) return;
                    i.create(t("#isso-thread").getAttribute("data-isso-id"), {
                        author: t("[name=author]", r).value || null,
                        email: t("[name=email]", r).value || null,
                        text: t("textarea", r).value,
                        parent: n || null
                    }).then(function(e) {
                        t("[name=author]", r).value = "", t("[name=email]", r).value = "", t("textarea", r).value = "", t("textarea", r).rows = 2, t("textarea", r).blur(), c(e, !0), n !== null && (r.onsuccess(), r.remove())
                    })
                }), u.fancy.autoresize(t("textarea", r), 48), r
            }, l = {
                id: {},
                name: {}
            }, c = function(o, c) {
                l.name[o.id] = o.author, o.parent && (o.replyto = l.name[o.parent]);
                var h = t.htmlify(s.up(e.comment, o)),
                    p = function() {
                        t(".permalink > date", h).textContent = n.ago(new Date(parseInt(o.created, 10) * 1e3)), setTimeout(p, 6e4)
                    };
                p(), t("div.avatar > svg", h).replace(u.identicons.generate(o.hash, 4, 48));
                var d;
                if (o.parent === null) d = t("#isso-root");
                else {
                    var v = o.parent;
                    while (v in l.id) v = l.id[v];
                    l.id[o.id] = o.parent, d = t("#isso-" + v + " > .text-wrapper > .isso-follow-up")
                }
                d.append(h), c && h.scrollIntoView();
                var m = t("#isso-" + o.id + " > .text-wrapper > .isso-comment-footer"),
                    g = t("#isso-" + o.id + " > .text-wrapper > .isso-comment-header"),
                    y = t("#isso-" + o.id + " > .text-wrapper > .text"),
                    b = null;
                t("a.reply", m).toggle("click", function(e) {
                    b = m.insertAfter(new f(o.id)), b.onsuccess = function() {
                        e.next()
                    }, t("textarea", b).focus(), t("a.reply", m).textContent = a["comment-close"]
                }, function() {
                    b.remove(), t("a.reply", m).textContent = a["comment-reply"]
                }), o.parent !== null && (t("a.parent", g).on("mouseover", function() {
                    t("#isso-" + o.parent).classList.add("parent-highlight")
                }), t("a.parent", g).on("mouseout", function() {
                    t("#isso-" + o.parent).classList.remove("parent-highlight")
                }));
                var w = function(e) {
                    var n = t("span.votes", m);
                    n === null ? e === 0 ? n.remove() : m.prepend(t.new("span.votes", e)) : e === 0 ? n.remove() : n.textContent = e
                };
                t("a.upvote", m).on("click", function() {
                    i.like(o.id).then(function(e) {
                        w(e.likes - e.dislikes)
                    })
                }), t("a.downvote", m).on("click", function() {
                    i.dislike(o.id).then(function(e) {
                        w(e.likes - e.dislikes)
                    })
                }), t("a.edit", m).toggle("click", function(e) {
                    var n = t("a.edit", m);
                    n.textContent = a["comment-save"], n.insertAfter(t.new("a.cancel", a["comment-cancel"])).on("click", function() {
                        y.textContent = "", y.className = "text", y.append(o.text), e.next()
                    }), i.view(o.id, 1).then(function(e) {
                        var n = t.new("textarea", e.text);
                        u.fancy.autoresize(n, 48), y.className = "textarea-wrapper", y.textContent = "", y.append(n), n.focus()
                    })
                }, function(e) {
                    var n = t("textarea", y);
                    if (n && n.value.length < 3) {
                        n.focus(), e.wait();
                        return
                    }
                    n && i.modify(o.id, {
                        text: n.value
                    }).then(function(e) {
                        y.innerHTML = e.text, y.className = "text", o.text = e.text
                    }), t("a.cancel", m).remove(), t("a.edit", m).textContent = a["comment-edit"]
                }), t("a.delete", m).toggle("click", function(e) {
                    var n = t("a.delete", m),
                        r = !e.state;
                    n.textContent = a["comment-confirm"], n.on("mouseout", function() {
                        n.textContent = a["comment-delete"], e.state = r, n.onmouseout = null
                    })
                }, function() {
                    var e = t("a.delete", m);
                    i.remove(o.id).then(function(n) {
                        n ? h.remove() : (t("span.note", g).textContent = a["comment-deleted"], y.innerHTML = "<p>&nbsp;</p>", t("a.edit", m).remove(), t("a.delete", m).remove()), e.textContent = a["comment-delete"]
                    })
                });
                var E = function(e) {
                    n.cookie("isso-" + o.id) ? setTimeout(function() {
                        E(e)
                    }, 15e3) : t(e, m) !== null && t(e, m).remove()
                };
                E("a.edit"), E("a.delete");
                var S = function(e) {
                    n.cookie("isso-" + o.id) ? setTimeout(function() {
                        S(e)
                    }, 15e3) : m.append(e)
                };
                !r["reply-to-self"] && n.cookie("isso-" + o.id) && S(t("a.reply", m).detach())
            };
        return {
            insert: c,
            Postbox: f
        }
    }), n("app/count", ["app/api", "app/dom", "app/markup"], function(e, t, n) {
        return function() {
            t.each("a", function(t) {
                if (!t.href.match("#isso-thread$")) return;
                var r = t.getAttribute("data-isso-id") || t.href.match("^(.+)#isso-thread$")[1].replace(/^.*\/\/[^\/]+/, "");
                e.count(r).then(function(e) {
                    t.textContent = n.up("{{ i18n-num-comments | pluralize : `n` }}", {
                        n: e
                    })
                })
            })
        }
    }), n("text!app/../../css/isso.css", [], function() {
        return '* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\na {\n  text-decoration: none; }\n\n#isso-thread {\n  padding: 0;\n  margin: 0; }\n  #isso-thread > h4 {\n    color: #555;\n    font-weight: bold;\n    font-family: "Helvetica", Arial, sans-serif; }\n\n.parent-highlight {\n  background-color: #EFEFEF; }\n\n.isso-comment {\n  *zoom: 1;\n  max-width: 68em;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 0.95em 0px; }\n  .isso-comment:before, .isso-comment:after {\n    content: " ";\n    display: table; }\n  .isso-comment:after {\n    clear: both; }\n  .isso-comment > div.avatar {\n    display: block;\n    float: left;\n    margin-right: 2.57751%;\n    width: 6.74772%; }\n    .isso-comment > div.avatar:last-child {\n      margin-right: 0; }\n    .isso-comment > div.avatar > svg {\n      border: 1px solid #f0f0f0;\n      border-radius: 2px;\n      box-shadow: 0px 0px 2px #888;\n      max-height: 48px; }\n  .isso-comment > div.text-wrapper {\n    display: block;\n    float: left;\n    margin-right: 2.57751%;\n    width: 90.67477%; }\n    .isso-comment > div.text-wrapper:last-child {\n      margin-right: 0; }\n    .isso-comment > div.text-wrapper > .isso-comment-header, .isso-comment > div.text-wrapper > .isso-comment-footer {\n      font-size: 0.95em; }\n    .isso-comment > div.text-wrapper > .isso-comment-header {\n      font-family: "Helvetica", Arial, sans-serif;\n      font-size: 0.85em; }\n      .isso-comment > div.text-wrapper > .isso-comment-header .spacer {\n        padding-left: 6px;\n        padding-right: 6px; }\n      .isso-comment > div.text-wrapper > .isso-comment-header .spacer, .isso-comment > div.text-wrapper > .isso-comment-header a.permalink, .isso-comment > div.text-wrapper > .isso-comment-header .note, .isso-comment > div.text-wrapper > .isso-comment-header a.parent {\n        color: gray !important;\n        font-weight: normal;\n        text-shadow: none !important; }\n        .isso-comment > div.text-wrapper > .isso-comment-header .spacer:hover, .isso-comment > div.text-wrapper > .isso-comment-header a.permalink:hover, .isso-comment > div.text-wrapper > .isso-comment-header .note:hover, .isso-comment > div.text-wrapper > .isso-comment-header a.parent:hover {\n          color: #606060 !important; }\n      .isso-comment > div.text-wrapper > .isso-comment-header .note {\n        float: right; }\n      .isso-comment > div.text-wrapper > .isso-comment-header .author {\n        font-weight: bold;\n        color: #555; }\n    .isso-comment > div.text-wrapper > div.text p {\n      margin-top: 0.2em; }\n      .isso-comment > div.text-wrapper > div.text p:last-child {\n        margin-bottom: 0.2em; }\n    .isso-comment > div.text-wrapper > div.text h1, .isso-comment > div.text-wrapper > div.text h2, .isso-comment > div.text-wrapper > div.text h3, .isso-comment > div.text-wrapper > div.text h4, .isso-comment > div.text-wrapper > div.text h5, .isso-comment > div.text-wrapper > div.text h6 {\n      font-size: 100%; }\n    .isso-comment > div.text-wrapper > div.textarea-wrapper textarea {\n      width: 100%;\n      border: 1px solid #f0f0f0;\n      border-radius: 2px;\n      box-shadow: 0px 0px 2px #888;\n      font: inherit; }\n    .isso-comment > div.text-wrapper > .isso-comment-footer {\n      font-family: "Helvetica", Arial, sans-serif;\n      font-size: 0.80em;\n      color: gray !important; }\n      .isso-comment > div.text-wrapper > .isso-comment-footer a {\n        font-weight: bold;\n        text-decoration: none; }\n        .isso-comment > div.text-wrapper > .isso-comment-footer a:hover {\n          color: #111111 !important;\n          text-shadow: #aaaaaa 0px 0px 1px !important; }\n      .isso-comment > div.text-wrapper > .isso-comment-footer a.reply, .isso-comment > div.text-wrapper > .isso-comment-footer a.edit, .isso-comment > div.text-wrapper > .isso-comment-footer a.cancel, .isso-comment > div.text-wrapper > .isso-comment-footer a.delete {\n        padding-left: 1em; }\n      .isso-comment > div.text-wrapper > .isso-comment-footer .votes {\n        color: gray; }\n      .isso-comment > div.text-wrapper > .isso-comment-footer .upvote svg, .isso-comment > div.text-wrapper > .isso-comment-footer .downvote svg {\n        position: relative;\n        top: 0.2em; }\n  .isso-comment .postbox {\n    margin-top: 0.8em; }\n\n.postbox {\n  *zoom: 1;\n  max-width: 68em;\n  margin-left: auto;\n  margin-right: auto; }\n  .postbox:before, .postbox:after {\n    content: " ";\n    display: table; }\n  .postbox:after {\n    clear: both; }\n  .postbox > .avatar {\n    display: block;\n    float: left;\n    margin-right: 2.57751%;\n    width: 6.74772%; }\n    .postbox > .avatar:last-child {\n      margin-right: 0; }\n    .postbox > .avatar > svg {\n      border: 1px solid #f0f0f0;\n      border-radius: 2px;\n      box-shadow: 0px 0px 2px #888;\n      max-height: 48px; }\n  .postbox > .form-wrapper {\n    display: block;\n    float: left;\n    margin-right: 2.57751%;\n    width: 90.67477%; }\n    .postbox > .form-wrapper:last-child {\n      margin-right: 0; }\n    .postbox > .form-wrapper textarea {\n      width: 100%;\n      border: 1px solid #f0f0f0;\n      border-radius: 2px;\n      box-shadow: 0px 0px 2px #888;\n      min-height: 48px;\n      font: inherit; }\n      .postbox > .form-wrapper textarea::-webkit-input-placeholder {\n        color: #AAA; }\n      .postbox > .form-wrapper textarea:-moz-placeholder {\n        color: #AAA; }\n      .postbox > .form-wrapper textarea::-moz-placeholder {\n        color: #AAA; }\n      .postbox > .form-wrapper textarea:-ms-input-placeholder {\n        color: #AAA; }\n    .postbox > .form-wrapper > .textarea-wrapper {\n      margin-bottom: 0.2em; }\n    .postbox > .form-wrapper > .auth-section {\n      *zoom: 1;\n      max-width: 68em;\n      margin-left: auto;\n      margin-right: auto; }\n      .postbox > .form-wrapper > .auth-section:before, .postbox > .form-wrapper > .auth-section:after {\n        content: " ";\n        display: table; }\n      .postbox > .form-wrapper > .auth-section:after {\n        clear: both; }\n      .postbox > .form-wrapper > .auth-section .input-wrapper {\n        display: block;\n        float: left;\n        margin-right: 5.85151%;\n        width: 36.4891%;\n        margin-top: 0.1em; }\n        .postbox > .form-wrapper > .auth-section .input-wrapper:last-child {\n          margin-right: 0; }\n        .postbox > .form-wrapper > .auth-section .input-wrapper input {\n          width: 100%;\n          border: 1px solid #f0f0f0;\n          border-radius: 2px;\n          box-shadow: 0px 0px 2px #888;\n          padding: 0.2em;\n          font: inherit; }\n          .postbox > .form-wrapper > .auth-section .input-wrapper input::-webkit-input-placeholder {\n            color: #AAA; }\n          .postbox > .form-wrapper > .auth-section .input-wrapper input:-moz-placeholder {\n            color: #AAA; }\n          .postbox > .form-wrapper > .auth-section .input-wrapper input::-moz-placeholder {\n            color: #AAA; }\n          .postbox > .form-wrapper > .auth-section .input-wrapper input:-ms-input-placeholder {\n            color: #AAA; }\n      .postbox > .form-wrapper > .auth-section .post-action {\n        display: block;\n        float: left;\n        margin-right: 5.85151%;\n        width: 15.3188%;\n        margin-top: 0.1em; }\n        .postbox > .form-wrapper > .auth-section .post-action:last-child {\n          margin-right: 0; }\n        .postbox > .form-wrapper > .auth-section .post-action > input {\n          width: 100%;\n          padding: 0.4em 1em;\n          border-radius: 2px;\n          border: #CCC solid 1px;\n          background-color: #DDD;\n          cursor: pointer; }\n          .postbox > .form-wrapper > .auth-section .post-action > input:hover {\n            background-color: #CCC; }\n          .postbox > .form-wrapper > .auth-section .post-action > input:active {\n            background-color: #BBB; }\n'
    }), n("app/text/css", ["text!../../../css/isso.css"], function(e) {
        return {
            inline: e
        }
    }), t(["ready", "app/config", "app/api", "app/isso", "app/count", "app/dom", "app/markup", "app/text/css"], function(e, t, n, r, i, s, o, u) {
        e(function() {
            if (t.css) {
                var e = s.new("style");
                e.type = "text/css", e.textContent = u.inline, s("head").append(e)
            }
            i();
            if (s("#isso-thread") === null) return console.log("abort, #isso-thread is missing");
            s("#isso-thread").append(s.new("h4")), s("#isso-thread").append(new r.Postbox(null)), s("#isso-thread").append('<div id="isso-root"></div>'), n.fetch(s("#isso-thread").getAttribute("data-isso-id")).then(function(e) {
                if (!e.length) {
                    s("#isso-thread > h4").textContent = o.up("{{ i18n-no-comments }}");
                    return
                }
                s("#isso-thread > h4").textContent = o.up("{{ i18n-num-comments | pluralize : `n` }}", {
                    n: e.length
                });
                for (var t = 0; t < e.length; t++) r.insert(e[t], !1)
            }).fail(function(e) {
                console.log(e)
            }).done(function() {
                window.location.hash.length > 0 && s(window.location.hash).scrollIntoView()
            })
        })
    }), n("embed", function() {})
})();