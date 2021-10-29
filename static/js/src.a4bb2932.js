parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    IxO8: [
      function (require, module, exports) {
        function e(e, o, r) {
          return (
            o in e
              ? Object.defineProperty(e, o, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[o] = r),
            e
          );
        }
        (module.exports = e),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    agGE: [
      function (require, module, exports) {
        function e(e, o, t, n, r, u, i) {
          try {
            var d = e[u](i),
              l = d.value;
          } catch (s) {
            return void t(s);
          }
          d.done ? o(l) : Promise.resolve(l).then(n, r);
        }
        function o(o) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, u) {
              var i = o.apply(t, n);
              function d(o) {
                e(i, r, u, d, l, "next", o);
              }
              function l(o) {
                e(i, r, u, d, l, "throw", o);
              }
              d(void 0);
            });
          };
        }
        (module.exports = o),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    QVnC: [
      function (require, module, exports) {
        var define;
        var t,
          r = (function (t) {
            "use strict";
            var r,
              e = Object.prototype,
              n = e.hasOwnProperty,
              o = "function" == typeof Symbol ? Symbol : {},
              i = o.iterator || "@@iterator",
              a = o.asyncIterator || "@@asyncIterator",
              c = o.toStringTag || "@@toStringTag";
            function u(t, r, e) {
              return (
                Object.defineProperty(t, r, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[r]
              );
            }
            try {
              u({}, "");
            } catch (P) {
              u = function (t, r, e) {
                return (t[r] = e);
              };
            }
            function h(t, r, e, n) {
              var o = r && r.prototype instanceof d ? r : d,
                i = Object.create(o.prototype),
                a = new G(n || []);
              return (
                (i._invoke = (function (t, r, e) {
                  var n = l;
                  return function (o, i) {
                    if (n === p)
                      throw new Error("Generator is already running");
                    if (n === y) {
                      if ("throw" === o) throw i;
                      return F();
                    }
                    for (e.method = o, e.arg = i; ; ) {
                      var a = e.delegate;
                      if (a) {
                        var c = j(a, e);
                        if (c) {
                          if (c === v) continue;
                          return c;
                        }
                      }
                      if ("next" === e.method) e.sent = e._sent = e.arg;
                      else if ("throw" === e.method) {
                        if (n === l) throw ((n = y), e.arg);
                        e.dispatchException(e.arg);
                      } else "return" === e.method && e.abrupt("return", e.arg);
                      n = p;
                      var u = f(t, r, e);
                      if ("normal" === u.type) {
                        if (((n = e.done ? y : s), u.arg === v)) continue;
                        return { value: u.arg, done: e.done };
                      }
                      "throw" === u.type &&
                        ((n = y), (e.method = "throw"), (e.arg = u.arg));
                    }
                  };
                })(t, e, a)),
                i
              );
            }
            function f(t, r, e) {
              try {
                return { type: "normal", arg: t.call(r, e) };
              } catch (P) {
                return { type: "throw", arg: P };
              }
            }
            t.wrap = h;
            var l = "suspendedStart",
              s = "suspendedYield",
              p = "executing",
              y = "completed",
              v = {};
            function d() {}
            function g() {}
            function m() {}
            var w = {};
            w[i] = function () {
              return this;
            };
            var L = Object.getPrototypeOf,
              x = L && L(L(N([])));
            x && x !== e && n.call(x, i) && (w = x);
            var b = (m.prototype = d.prototype = Object.create(w));
            function E(t) {
              ["next", "throw", "return"].forEach(function (r) {
                u(t, r, function (t) {
                  return this._invoke(r, t);
                });
              });
            }
            function _(t, r) {
              var e;
              this._invoke = function (o, i) {
                function a() {
                  return new r(function (e, a) {
                    !(function e(o, i, a, c) {
                      var u = f(t[o], t, i);
                      if ("throw" !== u.type) {
                        var h = u.arg,
                          l = h.value;
                        return l && "object" == typeof l && n.call(l, "__await")
                          ? r.resolve(l.__await).then(
                              function (t) {
                                e("next", t, a, c);
                              },
                              function (t) {
                                e("throw", t, a, c);
                              }
                            )
                          : r.resolve(l).then(
                              function (t) {
                                (h.value = t), a(h);
                              },
                              function (t) {
                                return e("throw", t, a, c);
                              }
                            );
                      }
                      c(u.arg);
                    })(o, i, e, a);
                  });
                }
                return (e = e ? e.then(a, a) : a());
              };
            }
            function j(t, e) {
              var n = t.iterator[e.method];
              if (n === r) {
                if (((e.delegate = null), "throw" === e.method)) {
                  if (
                    t.iterator.return &&
                    ((e.method = "return"),
                    (e.arg = r),
                    j(t, e),
                    "throw" === e.method)
                  )
                    return v;
                  (e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return v;
              }
              var o = f(n, t.iterator, e.arg);
              if ("throw" === o.type)
                return (
                  (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), v
                );
              var i = o.arg;
              return i
                ? i.done
                  ? ((e[t.resultName] = i.value),
                    (e.next = t.nextLoc),
                    "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                    (e.delegate = null),
                    v)
                  : i
                : ((e.method = "throw"),
                  (e.arg = new TypeError("iterator result is not an object")),
                  (e.delegate = null),
                  v);
            }
            function O(t) {
              var r = { tryLoc: t[0] };
              1 in t && (r.catchLoc = t[1]),
                2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                this.tryEntries.push(r);
            }
            function k(t) {
              var r = t.completion || {};
              (r.type = "normal"), delete r.arg, (t.completion = r);
            }
            function G(t) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                t.forEach(O, this),
                this.reset(!0);
            }
            function N(t) {
              if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var o = -1,
                    a = function e() {
                      for (; ++o < t.length; )
                        if (n.call(t, o))
                          return (e.value = t[o]), (e.done = !1), e;
                      return (e.value = r), (e.done = !0), e;
                    };
                  return (a.next = a);
                }
              }
              return { next: F };
            }
            function F() {
              return { value: r, done: !0 };
            }
            return (
              (g.prototype = b.constructor = m),
              (m.constructor = g),
              (g.displayName = u(m, c, "GeneratorFunction")),
              (t.isGeneratorFunction = function (t) {
                var r = "function" == typeof t && t.constructor;
                return (
                  !!r &&
                  (r === g || "GeneratorFunction" === (r.displayName || r.name))
                );
              }),
              (t.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, m)
                    : ((t.__proto__ = m), u(t, c, "GeneratorFunction")),
                  (t.prototype = Object.create(b)),
                  t
                );
              }),
              (t.awrap = function (t) {
                return { __await: t };
              }),
              E(_.prototype),
              (_.prototype[a] = function () {
                return this;
              }),
              (t.AsyncIterator = _),
              (t.async = function (r, e, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new _(h(r, e, n, o), i);
                return t.isGeneratorFunction(e)
                  ? a
                  : a.next().then(function (t) {
                      return t.done ? t.value : a.next();
                    });
              }),
              E(b),
              u(b, c, "Generator"),
              (b[i] = function () {
                return this;
              }),
              (b.toString = function () {
                return "[object Generator]";
              }),
              (t.keys = function (t) {
                var r = [];
                for (var e in t) r.push(e);
                return (
                  r.reverse(),
                  function e() {
                    for (; r.length; ) {
                      var n = r.pop();
                      if (n in t) return (e.value = n), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (t.values = N),
              (G.prototype = {
                constructor: G,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = r),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = r),
                    this.tryEntries.forEach(k),
                    !t)
                  )
                    for (var e in this)
                      "t" === e.charAt(0) &&
                        n.call(this, e) &&
                        !isNaN(+e.slice(1)) &&
                        (this[e] = r);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var e = this;
                  function o(n, o) {
                    return (
                      (c.type = "throw"),
                      (c.arg = t),
                      (e.next = n),
                      o && ((e.method = "next"), (e.arg = r)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                      var u = n.call(a, "catchLoc"),
                        h = n.call(a, "finallyLoc");
                      if (u && h) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      } else if (u) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      } else {
                        if (!h)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, r) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var o = this.tryEntries[e];
                    if (
                      o.tryLoc <= this.prev &&
                      n.call(o, "finallyLoc") &&
                      this.prev < o.finallyLoc
                    ) {
                      var i = o;
                      break;
                    }
                  }
                  i &&
                    ("break" === t || "continue" === t) &&
                    i.tryLoc <= r &&
                    r <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = t),
                    (a.arg = r),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                      : this.complete(a)
                  );
                },
                complete: function (t, r) {
                  if ("throw" === t.type) throw t.arg;
                  return (
                    "break" === t.type || "continue" === t.type
                      ? (this.next = t.arg)
                      : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && r && (this.next = r),
                    v
                  );
                },
                finish: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t)
                      return this.complete(e.completion, e.afterLoc), k(e), v;
                  }
                },
                catch: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                      var n = e.completion;
                      if ("throw" === n.type) {
                        var o = n.arg;
                        k(e);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (t, e, n) {
                  return (
                    (this.delegate = {
                      iterator: N(t),
                      resultName: e,
                      nextLoc: n,
                    }),
                    "next" === this.method && (this.arg = r),
                    v
                  );
                },
              }),
              t
            );
          })("object" == typeof module ? module.exports : {});
        try {
          regeneratorRuntime = r;
        } catch (e) {
          Function("r", "regeneratorRuntime = r")(r);
        }
      },
      {},
    ],
    PMvg: [
      function (require, module, exports) {
        module.exports = require("regenerator-runtime");
      },
      { "regenerator-runtime": "QVnC" },
    ],
    pBGv: [
      function (require, module, exports) {
        var t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : r;
          } catch (n) {
            t = r;
          }
          try {
            e = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (n) {
            e = o;
          }
        })();
        var c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            var t = i(f);
            l = !0;
            for (var e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), 1 !== s.length || l || i(h);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      {},
    ],
    juYr: [
      function (require, module, exports) {
        var global = arguments[3];
        var process = require("process");
        var define;
        var e,
          t = arguments[3],
          n = require("process");
        !(function (e, t) {
          "use strict";
          "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = e.document
                ? t(e, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return t(e);
                  })
            : t(e);
        })("undefined" != typeof window ? window : this, function (t, n) {
          "use strict";
          var r = [],
            i = Object.getPrototypeOf,
            o = r.slice,
            a = r.flat
              ? function (e) {
                  return r.flat.call(e);
                }
              : function (e) {
                  return r.concat.apply([], e);
                },
            s = r.push,
            u = r.indexOf,
            l = {},
            c = l.toString,
            f = l.hasOwnProperty,
            p = f.toString,
            d = p.call(Object),
            h = {},
            g = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            v = function (e) {
              return null != e && e === e.window;
            },
            y = t.document,
            m = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var r,
              i,
              o = (n = n || y).createElement("script");
            if (((o.text = e), t))
              for (r in m)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function b(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? l[c.call(e)] || "object"
              : typeof e;
          }
          var w = function (e, t) {
            return new w.fn.init(e, t);
          };
          function T(e) {
            var t = !!e && "length" in e && e.length,
              n = b(e);
            return (
              !g(e) &&
              !v(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (w.fn = w.prototype =
            {
              jquery: "3.6.0",
              constructor: w,
              length: 0,
              toArray: function () {
                return o.call(this);
              },
              get: function (e) {
                return null == e
                  ? o.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = w.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return w.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  w.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(o.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  w.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  w.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: s,
              sort: r.sort,
              splice: r.splice,
            }),
            (w.extend = w.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || g(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l &&
                          r &&
                          (w.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || w.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = w.extend(l, o, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            w.extend({
              expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== c.call(e)) &&
                  (!(t = i(e)) ||
                    ("function" ==
                      typeof (n = f.call(t, "constructor") && t.constructor) &&
                      p.call(n) === d))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (T(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (T(Object(e))
                      ? w.merge(n, "string" == typeof e ? [e] : e)
                      : s.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  s = [];
                if (T(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a(s);
              },
              guid: 1,
              support: h,
            }),
            "function" == typeof Symbol &&
              (w.fn[Symbol.iterator] = r[Symbol.iterator]),
            w.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                l["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var C = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v,
              y,
              m,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              C = 0,
              E = ue(),
              S = ue(),
              k = ue(),
              A = ue(),
              N = function (e, t) {
                return e === t && (f = !0), 0;
              },
              j = {}.hasOwnProperty,
              D = [],
              q = D.pop,
              L = D.push,
              H = D.push,
              O = D.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M = "[\\x20\\t\\r\\n\\f]",
              I =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                M +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              W =
                "\\[" +
                M +
                "*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
              F =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
              B = new RegExp(M + "+", "g"),
              $ = new RegExp(
                "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                "g"
              ),
              _ = new RegExp("^" + M + "*," + M + "*"),
              z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
              U = new RegExp(M + "|>"),
              X = new RegExp(F),
              V = new RegExp("^" + I + "$"),
              G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    M +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    M +
                    "*(?:([+-]|)" +
                    M +
                    "*(\\d+)|))" +
                    M +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    M +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    M +
                    "*((?:-\\d)?\\d*)" +
                    M +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                p();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              H.apply((D = O.call(w.childNodes)), w.childNodes),
                D[w.childNodes.length].nodeType;
            } catch (Se) {
              H = {
                apply: D.length
                  ? function (e, t) {
                      L.apply(e, O.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, i) {
              var o,
                s,
                l,
                c,
                f,
                h,
                y,
                m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!i && (p(t), (t = t || d), g)) {
                if (11 !== w && (f = Z.exec(e)))
                  if ((o = f[1])) {
                    if (9 === w) {
                      if (!(l = t.getElementById(o))) return r;
                      if (l.id === o) return r.push(l), r;
                    } else if (
                      m &&
                      (l = m.getElementById(o)) &&
                      x(t, l) &&
                      l.id === o
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return H.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!v || !v.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (m = t), 1 === w && (U.test(e) || z.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, ie))
                          : t.setAttribute("id", (c = b))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                    y = h.join(",");
                  }
                  try {
                    return H.apply(r, m.querySelectorAll(y)), r;
                  } catch (T) {
                    A(e, !0);
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace($, "$1"), t, r, i);
            }
            function ue() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function le(e) {
              return (e[b] = !0), e;
            }
            function ce(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (Se) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function de(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ve(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ye(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (o = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = se.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : w;
                return a != d && 9 === a.nodeType && a.documentElement
                  ? ((h = (d = a).documentElement),
                    (g = !o(d)),
                    w != d &&
                      (i = d.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", oe, !1)
                        : i.attachEvent && i.attachEvent("onunload", oe)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(d.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(d.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      d.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !d.getElementsByName || !d.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (y = []),
                    (v = []),
                    (n.qsa = K.test(d.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push("[*^$]=" + M + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            v.push("\\[" + M + "*(?:value|" + R + ")"),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            v.push("~="),
                          (t = d.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            v.push(
                              "\\[" +
                                M +
                                "*name" +
                                M +
                                "*=" +
                                M +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            v.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            v.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          v.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            v.push("name" + M + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            v.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            v.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          v.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = m.call(e, "*")),
                          m.call(e, "[s!='']:x"),
                          y.push("!=", F);
                      }),
                    (v = v.length && new RegExp(v.join("|"))),
                    (y = y.length && new RegExp(y.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (x =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (N = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == d || (e.ownerDocument == w && x(w, e))
                                ? -1
                                : t == d || (t.ownerDocument == w && x(w, t))
                                ? 1
                                : c
                                ? P(c, e) - P(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!i || !o)
                            return e == d
                              ? -1
                              : t == d
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0;
                          if (i === o) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? pe(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    d)
                  : d;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !A[t + " "] &&
                  (!y || !y.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (Se) {
                  A(t, !0);
                }
              return se(t, d, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), x(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && j.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(N),
                f)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            ((r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            X.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = E[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + M + ")" + e + "(" + M + "|$)"
                      )) &&
                        E(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = se.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                          if (v) {
                            if (o) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === y
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? v.firstChild : v.lastChild]), a && m)
                            ) {
                              for (
                                x =
                                  (d =
                                    (l =
                                      (c =
                                        (f = (p = v)[b] || (p[b] = {}))[
                                          p.uniqueID
                                        ] || (f[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]) && l[2],
                                  p = d && v.childNodes[d];
                                (p =
                                  (++d && p && p[g]) || (x = d = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++x && p === t) {
                                  c[e] = [T, d, x];
                                  break;
                                }
                            } else if (
                              (m &&
                                (x = d =
                                  (l =
                                    (c =
                                      (f = (p = t)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (p =
                                  (++d && p && p[g]) ||
                                  (x = d = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? p.nodeName.toLowerCase() !== y
                                  : 1 !== p.nodeType) ||
                                  !++x ||
                                  (m &&
                                    ((c =
                                      (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                      (f[p.uniqueID] = {}))[e] = [T, x]),
                                  p !== t));

                              );
                            return (x -= i) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return i[b]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? le(function (e, n) {
                              for (var r, o = i(e, t), a = o.length; a--; )
                                e[(r = P(e, o[a]))] = !(n[r] = o[a]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: le(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace($, "$1"));
                    return r[b]
                      ? le(function (e, t, n, i) {
                          for (
                            var o, a = r(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: le(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: le(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: le(function (e) {
                    return (
                      V.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === d.activeElement &&
                      (!d.hasFocus || d.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ve(function () {
                    return [0];
                  }),
                  last: ve(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = de(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function me() {}
            function xe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function be(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[o]) && l[0] === T && l[1] === s)
                              return (p[2] = l[2]);
                            if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
              return a;
            }
            function Ce(e, t, n, r, i, o) {
              return (
                r && !r[b] && (r = Ce(r)),
                i && !i[b] && (i = Ce(i, o)),
                le(function (o, a, s, u) {
                  var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || (!o && t) ? g : Te(g, p, e, s, u),
                    y = n ? (i || (o ? e : h || r) ? [] : a) : v;
                  if ((n && n(v, y, s, u), r))
                    for (l = Te(y, d), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (l = [], c = y.length; c--; )
                          (f = y[c]) && l.push((v[c] = f));
                        i(null, (y = []), l, u);
                      }
                      for (c = y.length; c--; )
                        (f = y[c]) &&
                          (l = i ? P(o, f) : p[c]) > -1 &&
                          (o[l] = !(a[l] = f));
                    }
                  } else (y = Te(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : H.apply(a, y);
                })
              );
            }
            function Ee(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = be(
                    function (e) {
                      return P(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  p = [
                    function (e, n, r) {
                      var i =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), i;
                    },
                  ];
                u < o;
                u++
              )
                if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                    return Ce(
                      u > 1 && we(p),
                      u > 1 &&
                        xe(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace($, "$1"),
                      n,
                      u < i && Ee(e.slice(u, i)),
                      i < o && Ee((e = e.slice(i))),
                      i < o && xe(e)
                    );
                  }
                  p.push(n);
                }
              return we(p);
            }
            return (
              (me.prototype = r.filters = r.pseudos),
              (r.setFilters = new me()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = S[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, u = [], l = r.preFilter; s; ) {
                    for (a in ((n && !(i = _.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                    (n = !1),
                    (i = z.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace($, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(i = G[a].exec(s)) ||
                        (l[a] && !(i = l[a](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    s = k[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                    (s = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          o = function (o, a, s, u, c) {
                            var f,
                              h,
                              v,
                              y = 0,
                              m = "0",
                              x = o && [],
                              b = [],
                              w = l,
                              C = o || (i && r.find.TAG("*", c)),
                              E = (T += null == w ? 1 : Math.random() || 0.1),
                              S = C.length;
                            for (
                              c && (l = a == d || a || c);
                              m !== S && null != (f = C[m]);
                              m++
                            ) {
                              if (i && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == d ||
                                      (p(f), (s = !g));
                                  (v = e[h++]);

                                )
                                  if (v(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                  }
                                c && (T = E);
                              }
                              n && ((f = !v && f) && y--, o && x.push(f));
                            }
                            if (((y += m), n && m !== y)) {
                              for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                              if (o) {
                                if (y > 0)
                                  for (; m--; )
                                    x[m] || b[m] || (b[m] = q.call(u));
                                b = Te(b);
                              }
                              H.apply(u, b),
                                c &&
                                  !o &&
                                  b.length > 0 &&
                                  y + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return c && ((T = E), (l = w)), x;
                          };
                        return n ? le(o) : o;
                      })(o, i)
                    )).selector = e;
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, i) {
                  var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                  if (((n = n || []), 1 === d.length)) {
                    if (
                      (u = d[0] = d[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      o = G.needsContext.test(e) ? 0 : u.length;
                      o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (i = f(
                          l.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ye(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(o, 1), !(e = i.length && xe(u))))
                          return H.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (p || s(e, d))(
                      i,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ye(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(N).join("") === b),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(t);
          (w.find = C),
            (w.expr = C.selectors),
            (w.expr[":"] = w.expr.pseudos),
            (w.uniqueSort = w.unique = C.uniqueSort),
            (w.text = C.getText),
            (w.isXMLDoc = C.isXML),
            (w.contains = C.contains),
            (w.escapeSelector = C.escape);
          var E = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && w(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            S = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            k = w.expr.match.needsContext;
          function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var N =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function j(e, t, n) {
            return g(t)
              ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? w.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : w.filter(t, e, n);
          }
          (w.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : w.find.matches(
                    e,
                    w.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            w.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    w(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (w.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(j(this, e || [], !0));
              },
              is: function (e) {
                return !!j(
                  this,
                  "string" == typeof e && k.test(e) ? w(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((w.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || D), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : q.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof w ? t[0] : t),
                  w.merge(
                    this,
                    w.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : y,
                      !0
                    )
                  ),
                  N.test(r[1]) && w.isPlainObject(t))
                )
                  for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = y.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : g(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(w)
              : w.makeArray(e, this);
          }).prototype = w.fn),
            (D = w(y));
          var L = /^(?:parents|prev(?:Until|All))/,
            H = { children: !0, contents: !0, next: !0, prev: !0 };
          function O(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          w.fn.extend({
            has: function (e) {
              var t = w(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (w.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
              if (!k.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && w.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(w(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            w.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return E(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return E(e, "parentNode", n);
                },
                next: function (e) {
                  return O(e, "nextSibling");
                },
                prev: function (e) {
                  return O(e, "previousSibling");
                },
                nextAll: function (e) {
                  return E(e, "nextSibling");
                },
                prevAll: function (e) {
                  return E(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return E(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return E(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return S((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return S(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && i(e.contentDocument)
                    ? e.contentDocument
                    : (A(e, "template") && (e = e.content || e),
                      w.merge([], e.childNodes));
                },
              },
              function (e, t) {
                w.fn[e] = function (n, r) {
                  var i = w.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = w.filter(r, i)),
                    this.length > 1 &&
                      (H[e] || w.uniqueSort(i), L.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var P = /[^\x20\t\r\n\f]+/g;
          function R(e) {
            return e;
          }
          function M(e) {
            throw e;
          }
          function I(e, t, n, r) {
            var i;
            try {
              e && g((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && g((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (w.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      w.each(e.match(P) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : w.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        w.each(n, function (n, r) {
                          g(r)
                            ? (e.unique && l.has(r)) || o.push(r)
                            : r && r.length && "string" !== b(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    w.each(arguments, function (e, t) {
                      for (var n; (n = w.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            w.extend({
              Deferred: function (e) {
                var n = [
                    [
                      "notify",
                      "progress",
                      w.Callbacks("memory"),
                      w.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      w.Callbacks("once memory"),
                      w.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      w.Callbacks("once memory"),
                      w.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  r = "pending",
                  i = {
                    state: function () {
                      return r;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return w
                        .Deferred(function (t) {
                          w.each(n, function (n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                              var e = i && i.apply(this, arguments);
                              e && g(e.promise)
                                ? e
                                    .promise()
                                    .progress(t.notify)
                                    .done(t.resolve)
                                    .fail(t.reject)
                                : t[r[0] + "With"](this, i ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (e, r, i) {
                      var o = 0;
                      function a(e, n, r, i) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var t, l;
                              if (!(e < o)) {
                                if ((t = r.apply(s, u)) === n.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (l =
                                  t &&
                                  ("object" == typeof t ||
                                    "function" == typeof t) &&
                                  t.then),
                                  g(l)
                                    ? i
                                      ? l.call(t, a(o, n, R, i), a(o, n, M, i))
                                      : (o++,
                                        l.call(
                                          t,
                                          a(o, n, R, i),
                                          a(o, n, M, i),
                                          a(o, n, R, n.notifyWith)
                                        ))
                                    : (r !== R && ((s = void 0), (u = [t])),
                                      (i || n.resolveWith)(s, u));
                              }
                            },
                            c = i
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (t) {
                                    w.Deferred.exceptionHook &&
                                      w.Deferred.exceptionHook(t, c.stackTrace),
                                      e + 1 >= o &&
                                        (r !== M && ((s = void 0), (u = [t])),
                                        n.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (w.Deferred.getStackHook &&
                                (c.stackTrace = w.Deferred.getStackHook()),
                              t.setTimeout(c));
                        };
                      }
                      return w
                        .Deferred(function (t) {
                          n[0][3].add(a(0, t, g(i) ? i : R, t.notifyWith)),
                            n[1][3].add(a(0, t, g(e) ? e : R)),
                            n[2][3].add(a(0, t, g(r) ? r : M));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? w.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  w.each(n, function (e, t) {
                    var a = t[2],
                      s = t[5];
                    (i[t[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            r = s;
                          },
                          n[3 - e][2].disable,
                          n[3 - e][3].disable,
                          n[0][2].lock,
                          n[0][3].lock
                        ),
                      a.add(t[3].fire),
                      (o[t[0]] = function () {
                        return (
                          o[t[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[t[0] + "With"] = a.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = o.call(arguments),
                  a = w.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? o.call(arguments) : n),
                        --t || a.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (I(e, a.done(s(n)).resolve, a.reject, !t),
                  "pending" === a.state() || g(i[n] && i[n].then))
                )
                  return a.then();
                for (; n--; ) I(i[n], s(n), a.reject);
                return a.promise();
              },
            });
          var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (w.Deferred.exceptionHook = function (e, n) {
            t.console &&
              t.console.warn &&
              e &&
              W.test(e.name) &&
              t.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                n
              );
          }),
            (w.readyException = function (e) {
              t.setTimeout(function () {
                throw e;
              });
            });
          var F = w.Deferred();
          function B() {
            y.removeEventListener("DOMContentLoaded", B),
              t.removeEventListener("load", B),
              w.ready();
          }
          (w.fn.ready = function (e) {
            return (
              F.then(e).catch(function (e) {
                w.readyException(e);
              }),
              this
            );
          }),
            w.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) ||
                  ((w.isReady = !0),
                  (!0 !== e && --w.readyWait > 0) || F.resolveWith(y, [w]));
              },
            }),
            (w.ready.then = F.then),
            "complete" === y.readyState ||
            ("loading" !== y.readyState && !y.documentElement.doScroll)
              ? t.setTimeout(w.ready)
              : (y.addEventListener("DOMContentLoaded", B),
                t.addEventListener("load", B));
          var $ = function (e, t, n, r, i, o, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === b(n))
                for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(w(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            _ = /^-ms-/,
            z = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(_, "ms-").replace(z, U);
          }
          var V = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function G() {
            this.expando = w.expando + G.uid++;
          }
          (G.uid = 1),
            (G.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    V(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][X(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(X)
                      : (t = X(t)) in r
                      ? [t]
                      : t.match(P) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || w.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
              },
            });
          var Y = new G(),
            Q = new G(),
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            K = /[A-Z]/g;
          function Z(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : J.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (i) {}
                Q.set(e, t, n);
              } else n = void 0;
            return n;
          }
          w.extend({
            hasData: function (e) {
              return Q.hasData(e) || Y.hasData(e);
            },
            data: function (e, t, n) {
              return Q.access(e, t, n);
            },
            removeData: function (e, t) {
              Q.remove(e, t);
            },
            _data: function (e, t, n) {
              return Y.access(e, t, n);
            },
            _removeData: function (e, t) {
              Y.remove(e, t);
            },
          }),
            w.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Q.get(o)),
                    1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = X(r.slice(5))), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Q.set(this, e);
                    })
                  : $(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Q.get(o, e))
                            ? n
                            : void 0 !== (n = Z(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Q.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Q.remove(this, e);
                });
              },
            }),
            w.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = Y.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = Y.access(e, t, w.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = w._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        w.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Y.get(e, n) ||
                  Y.access(e, n, {
                    empty: w.Callbacks("once memory").add(function () {
                      Y.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            w.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? w.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            w.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  w.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = w.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = Y.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
            ne = ["Top", "Right", "Bottom", "Left"],
            re = y.documentElement,
            ie = function (e) {
              return w.contains(e.ownerDocument, e);
            },
            oe = { composed: !0 };
          re.getRootNode &&
            (ie = function (e) {
              return (
                w.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
              );
            });
          var ae = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ie(e) &&
                "none" === w.css(e, "display"))
            );
          };
          function se(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return w.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (w.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(w.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                w.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), w.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          var ue = {};
          function le(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = ue[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = w.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (ue[r] = i),
              i)
            );
          }
          function ce(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = Y.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && ae(r) && (i[o] = le(r)))
                  : "none" !== n && ((i[o] = "none"), Y.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          w.fn.extend({
            show: function () {
              return ce(this, !0);
            },
            hide: function () {
              return ce(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ae(this) ? w(this).show() : w(this).hide();
                  });
            },
          });
          var fe,
            pe,
            de = /^(?:checkbox|radio)$/i,
            he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ge = /^$|^module$|\/(?:java|ecma)script/i;
          (fe = y.createDocumentFragment().appendChild(y.createElement("div"))),
            (pe = y.createElement("input")).setAttribute("type", "radio"),
            pe.setAttribute("checked", "checked"),
            pe.setAttribute("name", "t"),
            fe.appendChild(pe),
            (h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (fe.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
            (fe.innerHTML = "<option></option>"),
            (h.option = !!fe.lastChild);
          var ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function ye(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
            );
          }
          function me(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
          }
          (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
            (ve.th = ve.td),
            h.option ||
              (ve.optgroup = ve.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var xe = /<|&#?\w+;/;
          function be(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((o = e[d]) || 0 === o)
                if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (xe.test(o)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (he.exec(o) || ["", ""])[1].toLowerCase(),
                      u = ve[s] || ve._default,
                      a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  w.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            for (f.textContent = "", d = 0; (o = p[d++]); )
              if (r && w.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((l = ie(o)),
                (a = ye(f.appendChild(o), "script")),
                l && me(a),
                n)
              )
                for (c = 0; (o = a[c++]); ) ge.test(o.type || "") && n.push(o);
            return f;
          }
          var we = /^([^.]*)(?:\.(.+)|)/;
          function Te() {
            return !0;
          }
          function Ce() {
            return !1;
          }
          function Ee(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return y.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Se(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Se(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = Ce;
            else if (!i) return e;
            return (
              1 === o &&
                ((a = i),
                ((i = function (e) {
                  return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
              e.each(function () {
                w.event.add(this, t, i, r, n);
              })
            );
          }
          function ke(e, t, n) {
            n
              ? (Y.set(e, t, !1),
                w.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      a = Y.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (a.length)
                        (w.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((a = o.call(arguments)),
                        Y.set(this, t, a),
                        (r = n(this, t)),
                        this[t](),
                        a !== (i = Y.get(this, t)) || r
                          ? Y.set(this, t, !1)
                          : (i = {}),
                        a !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      a.length &&
                        (Y.set(this, t, {
                          value: w.event.trigger(
                            w.extend(a[0], w.Event.prototype),
                            a.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Y.get(e, t) && w.event.add(e, t, Te);
          }
          (w.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(e);
              if (V(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(re, i),
                    n.guid || (n.guid = w.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                      (a = v.handle =
                        function (t) {
                          return void 0 !== w && w.event.triggered !== t.type
                            ? w.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match(P) || [""]).length;
                  l--;

                )
                  (d = g = (s = we.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = w.event.special[d] || {}),
                      (d = (i ? f.delegateType : f.bindType) || d),
                      (f = w.event.special[d] || {}),
                      (c = w.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && w.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (w.event.global[d] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--; )
                  if (
                    ((d = g = (s = we.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = w.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = p.length;
                      o--;

                    )
                      (c = p[o]),
                        (!i && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (p.splice(o, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                        w.removeEvent(e, d, v.handle),
                      delete u[d]);
                  } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && Y.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = w.event.fix(e),
                l =
                  (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = w.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = w.event.handlers.call(this, u, l), t = 0;
                  (i = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== o.namespace &&
                      !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                        (r = (
                          (w.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(i = (r = t[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? w(i, this).index(l) > -1
                          : w.find(i, this, null, [l]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: l, handlers: o });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[w.expando] ? e : new w.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    de.test(t.type) &&
                      t.click &&
                      A(t, "input") &&
                      ke(t, "click", Te),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    de.test(t.type) &&
                      t.click &&
                      A(t, "input") &&
                      ke(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (de.test(t.type) &&
                      t.click &&
                      A(t, "input") &&
                      Y.get(t, "click")) ||
                    A(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (w.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (w.Event = function (e, t) {
              if (!(this instanceof w.Event)) return new w.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Te
                      : Ce),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
            }),
            (w.Event.prototype = {
              constructor: w.Event,
              isDefaultPrevented: Ce,
              isPropagationStopped: Ce,
              isImmediatePropagationStopped: Ce,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Te),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Te),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Te),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            w.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              w.event.addProp
            ),
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              w.event.special[e] = {
                setup: function () {
                  return ke(this, e, Ee), !1;
                },
                trigger: function () {
                  return ke(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            w.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                w.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || w.contains(this, r))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            w.fn.extend({
              on: function (e, t, n, r) {
                return Se(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Se(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    w(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ce),
                  this.each(function () {
                    w.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Ae = /<script|<style|<link/i,
            Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function De(e, t) {
            return (
              (A(e, "table") &&
                A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                w(e).children("tbody")[0]) ||
              e
            );
          }
          function qe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Le(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function He(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
              if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), s))
                  for (n = 0, r = s[i].length; n < r; n++)
                    w.event.add(t, i, s[i][n]);
              Q.hasData(e) &&
                ((o = Q.access(e)), (a = w.extend({}, o)), Q.set(t, a));
            }
          }
          function Oe(e, t, n, r) {
            t = a(t);
            var i,
              o,
              s,
              u,
              l,
              c,
              f = 0,
              p = e.length,
              d = p - 1,
              v = t[0],
              y = g(v);
            if (
              y ||
              (p > 1 && "string" == typeof v && !h.checkClone && Ne.test(v))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                y && (t[0] = v.call(this, i, o.html())), Oe(o, t, n, r);
              });
            if (
              p &&
              ((o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (u = (s = w.map(ye(i, "script"), qe)).length; f < p; f++)
                (l = i),
                  f !== d &&
                    ((l = w.clone(l, !0, !0)),
                    u && w.merge(s, ye(l, "script"))),
                  n.call(e[f], l, f);
              if (u)
                for (
                  c = s[s.length - 1].ownerDocument, w.map(s, Le), f = 0;
                  f < u;
                  f++
                )
                  (l = s[f]),
                    ge.test(l.type || "") &&
                      !Y.access(l, "globalEval") &&
                      w.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? w._evalUrl &&
                          !l.noModule &&
                          w._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                          )
                        : x(l.textContent.replace(je, ""), l, c));
            }
            return e;
          }
          function Pe(e, t, n) {
            for (
              var r, i = t ? w.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || w.cleanData(ye(r)),
                r.parentNode &&
                  (n && ie(r) && me(ye(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          w.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
              if (
                !(
                  h.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  w.isXMLDoc(e)
                )
              )
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
                  (s = o[r]),
                    (u = a[r]),
                    (l = void 0),
                    "input" === (l = u.nodeName.toLowerCase()) &&
                    de.test(s.type)
                      ? (u.checked = s.checked)
                      : ("input" !== l && "textarea" !== l) ||
                        (u.defaultValue = s.defaultValue);
              if (t)
                if (n)
                  for (
                    o = o || ye(e), a = a || ye(c), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    He(o[r], a[r]);
                else He(e, c);
              return (
                (a = ye(c, "script")).length > 0 &&
                  me(a, !f && ye(e, "script")),
                c
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = w.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (V(n)) {
                  if ((t = n[Y.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? w.event.remove(n, r)
                          : w.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0;
                  }
                  n[Q.expando] && (n[Q.expando] = void 0);
                }
            },
          }),
            w.fn.extend({
              detach: function (e) {
                return Pe(this, e, !0);
              },
              remove: function (e) {
                return Pe(this, e);
              },
              text: function (e) {
                return $(
                  this,
                  function (e) {
                    return void 0 === e
                      ? w.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Oe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    De(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Oe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Oe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Oe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return w.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return $(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Ae.test(e) &&
                      !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = w.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (i) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Oe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    w.inArray(this, e) < 0 &&
                      (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            w.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                w.fn[e] = function (e) {
                  for (
                    var n, r = [], i = w(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      w(i[a])[t](n),
                      s.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
            Me = function (e) {
              var n = e.ownerDocument.defaultView;
              return (n && n.opener) || (n = t), n.getComputedStyle(e);
            },
            Ie = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            We = new RegExp(ne.join("|"), "i");
          function Fe(e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.style;
            return (
              (n = n || Me(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  ie(e) ||
                  (a = w.style(e, t)),
                !h.pixelBoxStyles() &&
                  Re.test(a) &&
                  We.test(t) &&
                  ((r = s.width),
                  (i = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = i),
                  (s.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function Be(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  re.appendChild(l).appendChild(c);
                var e = t.getComputedStyle(c);
                (r = "1%" !== e.top),
                  (u = 12 === n(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === n(e.right)),
                  (i = 36 === n(e.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === n(c.offsetWidth / 3)),
                  re.removeChild(l),
                  (c = null);
              }
            }
            function n(e) {
              return Math.round(parseFloat(e));
            }
            var r,
              i,
              o,
              a,
              s,
              u,
              l = y.createElement("div"),
              c = y.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
              w.extend(h, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), r;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, n, r, i;
                  return (
                    null == s &&
                      ((e = y.createElement("table")),
                      (n = y.createElement("tr")),
                      (r = y.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (n.style.cssText = "border:1px solid"),
                      (n.style.height = "1px"),
                      (r.style.height = "9px"),
                      (r.style.display = "block"),
                      re.appendChild(e).appendChild(n).appendChild(r),
                      (i = t.getComputedStyle(n)),
                      (s =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        n.offsetHeight),
                      re.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var $e = ["Webkit", "Moz", "ms"],
            _e = y.createElement("div").style,
            ze = {};
          function Ue(e) {
            var t = w.cssProps[e] || ze[e];
            return (
              t ||
              (e in _e
                ? e
                : (ze[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = $e.length;
                        n--;

                      )
                        if ((e = $e[n] + t) in _e) return e;
                    })(e) || e))
            );
          }
          var Xe = /^(none|table(?!-c[ea]).+)/,
            Ve = /^--/,
            Ge = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ye = { letterSpacing: "0", fontWeight: "400" };
          function Qe(e, t, n) {
            var r = te.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function Je(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += w.css(e, n + ne[a], !0, i)),
                r
                  ? ("content" === n &&
                      (u -= w.css(e, "padding" + ne[a], !0, i)),
                    "margin" !== n &&
                      (u -= w.css(e, "border" + ne[a] + "Width", !0, i)))
                  : ((u += w.css(e, "padding" + ne[a], !0, i)),
                    "padding" !== n
                      ? (u += w.css(e, "border" + ne[a] + "Width", !0, i))
                      : (s += w.css(e, "border" + ne[a] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function Ke(e, t, n) {
            var r = Me(e),
              i =
                (!h.boxSizingReliable() || n) &&
                "border-box" === w.css(e, "boxSizing", !1, r),
              o = i,
              a = Fe(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Re.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!h.boxSizingReliable() && i) ||
                (!h.reliableTrDimensions() && A(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === w.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === w.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                Je(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function Ze(e, t, n, r, i) {
            return new Ze.prototype.init(e, t, n, r, i);
          }
          w.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Fe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  s = X(t),
                  u = Ve.test(t),
                  l = e.style;
                if (
                  (u || (t = Ue(s)),
                  (a = w.cssHooks[t] || w.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : l[t];
                "string" === (o = typeof n) &&
                  (i = te.exec(n)) &&
                  i[1] &&
                  ((n = se(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      u ||
                      (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                    h.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                s = X(t);
              return (
                Ve.test(t) || (t = Ue(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ye && (i = Ye[t]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            w.each(["height", "width"], function (e, t) {
              w.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Xe.test(w.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? Ke(e, t, r)
                      : Ie(e, Ge, function () {
                          return Ke(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = Me(e),
                    a = !h.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                    u = r ? Je(e, t, r, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          Je(e, t, "border", !1, o) -
                          0.5
                      )),
                    u &&
                      (i = te.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = w.css(e, t))),
                    Qe(0, n, u)
                  );
                },
              };
            }),
            (w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Fe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Ie(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            w.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (w.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== e && (w.cssHooks[e + t].set = Qe);
              }
            ),
            w.fn.extend({
              css: function (e, t) {
                return $(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Me(e), i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (w.Tween = Ze),
            (Ze.prototype = {
              constructor: Ze,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || w.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (w.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = Ze.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : Ze.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = Ze.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        w.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
                  this
                );
              },
            }),
            (Ze.prototype.init.prototype = Ze.prototype),
            (Ze.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  w.fx.step[e.prop]
                    ? w.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!w.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : w.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (w.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (w.fx = Ze.prototype.init),
            (w.fx.step = {});
          var et,
            tt,
            nt = /^(?:toggle|show|hide)$/,
            rt = /queueHooks$/;
          function it() {
            tt &&
              (!1 === y.hidden && t.requestAnimationFrame
                ? t.requestAnimationFrame(it)
                : t.setTimeout(it, w.fx.interval),
              w.fx.tick());
          }
          function ot() {
            return (
              t.setTimeout(function () {
                et = void 0;
              }),
              (et = Date.now())
            );
          }
          function at(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = ne[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function st(e, t, n) {
            for (
              var r,
                i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ut(e, t, n) {
            var r,
              i,
              o = 0,
              a = ut.prefilters.length,
              s = w.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = et || ot(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    o = 0,
                    a = l.tweens.length;
                  o < a;
                  o++
                )
                  l.tweens[o].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(
                  !0,
                  { specialEasing: {}, easing: w.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: et || ot(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = w.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = X(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = w.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = ut.prefilters[o].call(l, e, c, l.opts)))
                return (
                  g(r.stop) &&
                    (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              w.map(c, st, l),
              g(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              w.fx.timer(
                w.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
            );
          }
          (w.Animation = w.extend(ut, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return se(n.elem, e, te.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              g(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (ut.tweeners[n] = ut.tweeners[n] || []),
                  ut.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && ae(e),
                  v = Y.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = w._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), nt.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !v || void 0 === v[r]) continue;
                      g = !0;
                    }
                    d[r] = (v && v[r]) || w.style(e, r);
                  }
                if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = v && v.display) && (l = Y.get(e, "display")),
                    "none" === (c = w.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (ce([e], !0),
                          (l = e.style.display || l),
                          (c = w.css(e, "display")),
                          ce([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === w.css(e, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = Y.access(e, "fxshow", { display: l })),
                      o && (v.hidden = !g),
                      g && ce([e], !0),
                      p.done(function () {
                        for (r in (g || ce([e]), Y.remove(e, "fxshow"), d))
                          w.style(e, r, d[r]);
                      })),
                      (u = st(g ? v[r] : 0, r, p)),
                      r in v ||
                        ((v[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
            },
          })),
            (w.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? w.extend({}, e)
                  : {
                      complete: n || (!n && t) || (g(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !g(t) && t),
                    };
              return (
                w.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in w.fx.speeds
                      ? (r.duration = w.fx.speeds[r.duration])
                      : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  g(r.old) && r.old.call(this),
                    r.queue && w.dequeue(this, r.queue);
                }),
                r
              );
            }),
            w.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                  o = w.speed(t, n, r),
                  a = function () {
                    var t = ut(this, w.extend({}, e), o);
                    (i || Y.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = w.timers,
                      a = Y.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && rt.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || w.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Y.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = w.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        w.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            w.each(["toggle", "show", "hide"], function (e, t) {
              var n = w.fn[t];
              w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(at(t, !0), e, r, i);
              };
            }),
            w.each(
              {
                slideDown: at("show"),
                slideUp: at("hide"),
                slideToggle: at("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                w.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (w.timers = []),
            (w.fx.tick = function () {
              var e,
                t = 0,
                n = w.timers;
              for (et = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || w.fx.stop(), (et = void 0);
            }),
            (w.fx.timer = function (e) {
              w.timers.push(e), w.fx.start();
            }),
            (w.fx.interval = 13),
            (w.fx.start = function () {
              tt || ((tt = !0), it());
            }),
            (w.fx.stop = function () {
              tt = null;
            }),
            (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (w.fn.delay = function (e, n) {
              return (
                (e = (w.fx && w.fx.speeds[e]) || e),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                  var i = t.setTimeout(n, e);
                  r.stop = function () {
                    t.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = y.createElement("input"),
                t = y
                  .createElement("select")
                  .appendChild(y.createElement("option"));
              (e.type = "checkbox"),
                (h.checkOn = "" !== e.value),
                (h.optSelected = t.selected),
                ((e = y.createElement("input")).value = "t"),
                (e.type = "radio"),
                (h.radioValue = "t" === e.value);
            })();
          var lt,
            ct = w.expr.attrHandle;
          w.fn.extend({
            attr: function (e, t) {
              return $(this, w.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                w.removeAttr(this, e);
              });
            },
          }),
            w.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? w.prop(e, t, n)
                    : ((1 === o && w.isXMLDoc(e)) ||
                        (i =
                          w.attrHooks[t.toLowerCase()] ||
                          (w.expr.match.bool.test(t) ? lt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void w.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = w.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!h.radioValue && "radio" === t && A(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(P);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (lt = {
              set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ct[t] || w.find.attr;
              ct[t] = function (e, t, r) {
                var i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = ct[a]),
                    (ct[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (ct[a] = o)),
                  i
                );
              };
            });
          var ft = /^(?:input|select|textarea|button)$/i,
            pt = /^(?:a|area)$/i;
          function dt(e) {
            return (e.match(P) || []).join(" ");
          }
          function ht(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function gt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(P)) || [];
          }
          w.fn.extend({
            prop: function (e, t) {
              return $(this, w.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[w.propFix[e] || e];
              });
            },
          }),
            w.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && w.isXMLDoc(e)) ||
                      ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : ft.test(e.nodeName) || (pt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            h.optSelected ||
              (w.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            w.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                w.propFix[this.toLowerCase()] = this;
              }
            ),
            w.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (g(e))
                  return this.each(function (t) {
                    w(this).addClass(e.call(this, t, ht(this)));
                  });
                if ((t = gt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = ht(n)), (r = 1 === n.nodeType && " " + dt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = dt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (g(e))
                  return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, ht(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = gt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = ht(n)), (r = 1 === n.nodeType && " " + dt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        for (; r.indexOf(" " + o + " ") > -1; )
                          r = r.replace(" " + o + " ", " ");
                      i !== (s = dt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : g(e)
                  ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, ht(this), t), t);
                    })
                  : this.each(function () {
                      var t, i, o, a;
                      if (r)
                        for (i = 0, o = w(this), a = gt(e); (t = a[i++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = ht(this)) && Y.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Y.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + dt(ht(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var vt = /\r/g;
          w.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = g(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, w(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = w.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        w.valHooks[this.type] ||
                        w.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    w.valHooks[i.type] ||
                    w.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(vt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            w.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : dt(w.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                      ) {
                        if (((t = w(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        w.inArray(w.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            w.each(["radio", "checkbox"], function () {
              (w.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
              }),
                h.checkOn ||
                  (w.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (h.focusin = "onfocusin" in t);
          var yt = /^(?:focusinfocus|focusoutblur)$/,
            mt = function (e) {
              e.stopPropagation();
            };
          w.extend(w.event, {
            trigger: function (e, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                p,
                d,
                h = [r || y],
                m = f.call(e, "type") ? e.type : e,
                x = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = d = s = r = r || y),
                3 !== r.nodeType &&
                  8 !== r.nodeType &&
                  !yt.test(m + w.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((x = m.split(".")), (m = x.shift()), x.sort()),
                  (l = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[w.expando]
                    ? e
                    : new w.Event(m, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = x.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = r),
                  (n = null == n ? [e] : w.makeArray(n, [e])),
                  (p = w.event.special[m] || {}),
                  i || !p.trigger || !1 !== p.trigger.apply(r, n)))
              ) {
                if (!i && !p.noBubble && !v(r)) {
                  for (
                    u = p.delegateType || m,
                      yt.test(u + m) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (r.ownerDocument || y) &&
                    h.push(s.defaultView || s.parentWindow || t);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (d = a),
                    (e.type = o > 1 ? u : p.bindType || m),
                    (c =
                      (Y.get(a, "events") || Object.create(null))[e.type] &&
                      Y.get(a, "handle")) && c.apply(a, n),
                    (c = l && a[l]) &&
                      c.apply &&
                      V(a) &&
                      ((e.result = c.apply(a, n)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  i ||
                    e.isDefaultPrevented() ||
                    (p._default && !1 !== p._default.apply(h.pop(), n)) ||
                    !V(r) ||
                    (l &&
                      g(r[m]) &&
                      !v(r) &&
                      ((s = r[l]) && (r[l] = null),
                      (w.event.triggered = m),
                      e.isPropagationStopped() && d.addEventListener(m, mt),
                      r[m](),
                      e.isPropagationStopped() && d.removeEventListener(m, mt),
                      (w.event.triggered = void 0),
                      s && (r[l] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
              w.event.trigger(r, null, t);
            },
          }),
            w.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  w.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
              },
            }),
            h.focusin ||
              w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Y.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      Y.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Y.access(r, t) - 1;
                    i
                      ? Y.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), Y.remove(r, t));
                  },
                };
              });
          var xt = t.location,
            bt = { guid: Date.now() },
            wt = /\?/;
          w.parseXML = function (e) {
            var n, r;
            if (!e || "string" != typeof e) return null;
            try {
              n = new t.DOMParser().parseFromString(e, "text/xml");
            } catch (i) {}
            return (
              (r = n && n.getElementsByTagName("parsererror")[0]),
              (n && !r) ||
                w.error(
                  "Invalid XML: " +
                    (r
                      ? w
                          .map(r.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : e)
                ),
              n
            );
          };
          var Tt = /\[\]$/,
            Ct = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            St = /^(?:input|select|textarea|keygen)/i;
          function kt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              w.each(t, function (t, i) {
                n || Tt.test(e)
                  ? r(e, i)
                  : kt(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== b(t)) r(e, t);
            else for (i in t) kt(e + "[" + i + "]", t[i], n, r);
          }
          (w.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
              w.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) kt(n, e[n], t, i);
            return r.join("&");
          }),
            w.fn.extend({
              serialize: function () {
                return w.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = w.prop(this, "elements");
                  return e ? w.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !w(this).is(":disabled") &&
                      St.test(this.nodeName) &&
                      !Et.test(e) &&
                      (this.checked || !de.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = w(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? w.map(n, function (e) {
                          return { name: t.name, value: e.replace(Ct, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Ct, "\r\n") };
                  })
                  .get();
              },
            });
          var At = /%20/g,
            Nt = /#.*$/,
            jt = /([?&])_=[^&]*/,
            Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qt = /^(?:GET|HEAD)$/,
            Lt = /^\/\//,
            Ht = {},
            Ot = {},
            Pt = "*/".concat("*"),
            Rt = y.createElement("a");
          function Mt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(P) || [];
              if (g(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function It(e, t, n, r) {
            var i = {},
              o = e === Ot;
            function a(s) {
              var u;
              return (
                (i[s] = !0),
                w.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || o || i[l]
                    ? o
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function Wt(e, t) {
            var n,
              r,
              i = w.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && w.extend(!0, e, r), e;
          }
          (Rt.href = xt.href),
            w.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    xt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Pt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": w.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e);
              },
              ajaxPrefilter: Mt(Ht),
              ajaxTransport: Mt(Ot),
              ajax: function (e, n) {
                "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d = w.ajaxSetup({}, n),
                  h = d.context || d,
                  g = d.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                  v = w.Deferred(),
                  m = w.Callbacks("once memory"),
                  x = d.statusCode || {},
                  b = {},
                  T = {},
                  C = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = Dt.exec(o)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) E.always(e[E.status]);
                        else for (t in e) x[t] = [x[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || C;
                      return r && r.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (v.promise(E),
                  (d.url = ((e || d.url || xt.href) + "").replace(
                    Lt,
                    xt.protocol + "//"
                  )),
                  (d.type = n.method || n.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = y.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        Rt.protocol + "//" + Rt.host !=
                        u.protocol + "//" + u.host);
                  } catch (k) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = w.param(d.data, d.traditional)),
                  It(Ht, d, n, E),
                  l)
                )
                  return E;
                for (f in ((c = w.event && d.global) &&
                  0 == w.active++ &&
                  w.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !qt.test(d.type)),
                (i = d.url.replace(Nt, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(At, "+"))
                  : ((p = d.url.slice(i.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((i += (wt.test(i) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((i = i.replace(jt, "$1")),
                      (p = (wt.test(i) ? "&" : "?") + "_=" + bt.guid++ + p)),
                    (d.url = i + p)),
                d.ifModified &&
                  (w.lastModified[i] &&
                    E.setRequestHeader("If-Modified-Since", w.lastModified[i]),
                  w.etag[i] && E.setRequestHeader("If-None-Match", w.etag[i])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  n.contentType) &&
                  E.setRequestHeader("Content-Type", d.contentType),
                E.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  E.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || l))
                  return E.abort();
                if (
                  ((C = "abort"),
                  m.add(d.complete),
                  E.done(d.success),
                  E.fail(d.error),
                  (r = It(Ot, d, n, E)))
                ) {
                  if (
                    ((E.readyState = 1), c && g.trigger("ajaxSend", [E, d]), l)
                  )
                    return E;
                  d.async &&
                    d.timeout > 0 &&
                    (s = t.setTimeout(function () {
                      E.abort("timeout");
                    }, d.timeout));
                  try {
                    (l = !1), r.send(b, S);
                  } catch (k) {
                    if (l) throw k;
                    S(-1, k);
                  }
                } else S(-1, "No Transport");
                function S(e, n, a, u) {
                  var f,
                    p,
                    y,
                    b,
                    T,
                    C = n;
                  l ||
                    ((l = !0),
                    s && t.clearTimeout(s),
                    (r = void 0),
                    (o = u || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(d, E, a)),
                    !f &&
                      w.inArray("script", d.dataTypes) > -1 &&
                      w.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                              for (i in l)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (k) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? k
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(d, b, E, f)),
                    f
                      ? (d.ifModified &&
                          ((T = E.getResponseHeader("Last-Modified")) &&
                            (w.lastModified[i] = T),
                          (T = E.getResponseHeader("etag")) && (w.etag[i] = T)),
                        204 === e || "HEAD" === d.type
                          ? (C = "nocontent")
                          : 304 === e
                          ? (C = "notmodified")
                          : ((C = b.state), (p = b.data), (f = !(y = b.error))))
                      : ((y = C),
                        (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = (n || C) + ""),
                    f
                      ? v.resolveWith(h, [p, C, E])
                      : v.rejectWith(h, [E, C, y]),
                    E.statusCode(x),
                    (x = void 0),
                    c &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        E,
                        d,
                        f ? p : y,
                      ]),
                    m.fireWith(h, [E, C]),
                    c &&
                      (g.trigger("ajaxComplete", [E, d]),
                      --w.active || w.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON: function (e, t, n) {
                return w.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
              },
            }),
            w.each(["get", "post"], function (e, t) {
              w[t] = function (e, n, r, i) {
                return (
                  g(n) && ((i = i || r), (r = n), (n = void 0)),
                  w.ajax(
                    w.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      w.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            w.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (w._evalUrl = function (e, t, n) {
              return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  w.globalEval(e, t, n);
                },
              });
            }),
            w.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (g(e) && (e = e.call(this[0])),
                    (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return g(e)
                  ? this.each(function (t) {
                      w(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = w(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                  w(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      w(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (w.expr.pseudos.hidden = function (e) {
              return !w.expr.pseudos.visible(e);
            }),
            (w.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (w.ajaxSettings.xhr = function () {
              try {
                return new t.XMLHttpRequest();
              } catch (e) {}
            });
          var Ft = { 0: 200, 1223: 204 },
            Bt = w.ajaxSettings.xhr();
          (h.cors = !!Bt && "withCredentials" in Bt),
            (h.ajax = Bt = !!Bt),
            w.ajaxTransport(function (e) {
              var n, r;
              if (h.cors || (Bt && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (n = function (e) {
                      return function () {
                        n &&
                          ((n =
                            r =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                Ft[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = n()),
                      (r = s.onerror = s.ontimeout = n("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = r)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              t.setTimeout(function () {
                                n && r();
                              });
                          }),
                      (n = n("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (u) {
                      if (n) throw u;
                    }
                  },
                  abort: function () {
                    n && n();
                  },
                };
            }),
            w.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            w.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return w.globalEval(e), e;
                },
              },
            }),
            w.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            w.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = w("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      y.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var $t,
            _t = [],
            zt = /(=)\?(?=&|$)|\?\?/;
          w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = _t.pop() || w.expando + "_" + bt.guid++;
              return (this[e] = !0), e;
            },
          }),
            w.ajaxPrefilter("json jsonp", function (e, n, r) {
              var i,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (zt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      zt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(zt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return a || w.error(i + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = t[i]),
                  (t[i] = function () {
                    a = arguments;
                  }),
                  r.always(function () {
                    void 0 === o ? w(t).removeProp(i) : (t[i] = o),
                      e[i] && ((e.jsonpCallback = n.jsonpCallback), _t.push(i)),
                      a && g(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (h.createHTMLDocument =
              ((($t = y.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === $t.childNodes.length)),
            (w.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (h.createHTMLDocument
                      ? (((r = (t =
                          y.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = y.location.href),
                        t.head.appendChild(r))
                      : (t = y)),
                  (o = !n && []),
                  (i = N.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = be([e], t, o)),
                      o && o.length && w(o).remove(),
                      w.merge([], i.childNodes)));
              var r, i, o;
            }),
            (w.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = dt(e.slice(s))), (e = e.slice(0, s))),
                g(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                  w
                    .ajax({
                      url: e,
                      type: i || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          r ? w("<div>").append(w.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (w.expr.pseudos.animated = function (e) {
              return w.grep(w.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (w.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = w.css(e, "position"),
                  c = w(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (o = w.css(e, "top")),
                  (u = w.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (o + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  g(t) && (t = t.call(e, n, w.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            w.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        w.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === w.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = w(e).offset()).top += w.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += w.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === w.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || re;
                });
              },
            }),
            w.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function (r) {
                  return $(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (v(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            w.each(["top", "left"], function (e, t) {
              w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Fe(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n
                  );
              });
            }),
            w.each({ Height: "height", Width: "width" }, function (e, t) {
              w.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  w.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return $(
                      this,
                      function (t, n, i) {
                        var o;
                        return v(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === i
                          ? w.css(t, n, s)
                          : w.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            w.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                w.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            w.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            w.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                w.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
              return (
                (r = o.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(o.call(arguments)));
                }).guid = e.guid =
                  e.guid || w.guid++),
                i
              );
          }),
            (w.holdReady = function (e) {
              e ? w.readyWait++ : w.ready(!0);
            }),
            (w.isArray = Array.isArray),
            (w.parseJSON = JSON.parse),
            (w.nodeName = A),
            (w.isFunction = g),
            (w.isWindow = v),
            (w.camelCase = X),
            (w.type = b),
            (w.now = Date.now),
            (w.isNumeric = function (e) {
              var t = w.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (w.trim = function (e) {
              return null == e ? "" : (e + "").replace(Ut, "");
            }),
            "function" == typeof e &&
              e.amd &&
              e("jquery", [], function () {
                return w;
              });
          var Xt = t.jQuery,
            Vt = t.$;
          return (
            (w.noConflict = function (e) {
              return (
                t.$ === w && (t.$ = Vt),
                e && t.jQuery === w && (t.jQuery = Xt),
                w
              );
            }),
            void 0 === n && (t.jQuery = t.$ = w),
            w
          );
        });
      },
      { process: "pBGv" },
    ],
    ut45: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.MAXSIZE =
            exports.THRESHOLD_DEFAULT =
            exports.INFO_URL =
            exports.baseUrlFactory =
            exports.isProd =
            exports.MODEL_TYPES =
              void 0);
        var e,
          t = o(require("@babel/runtime/helpers/defineProperty"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = {
          IMG_CLS: 1,
          OBJ_DCT: 2,
          SOUND_CLS: 3,
          SEGMENT: 6,
          VIDEO_TRACKING: 12,
          FACE_RECOGNITION: 401,
        };
        exports.MODEL_TYPES = r;
        var d = "http://cfeg.baidu-int.com/mock/edge_demo",
          s =
            ((e = {}),
            (0, t.default)(e, r.IMG_CLS, "?method=sdk/demo/classify"),
            (0, t.default)(e, r.OBJ_DCT, "?method=sdk/demo/detection"),
            (0, t.default)(e, r.SOUND_CLS, "?method=sdk/demo/sound"),
            (0, t.default)(e, r.SEGMENT, "?method=sdk/demo/segment"),
            (0, t.default)(e, r.VIDEO_TRACKING, "?method=sdk/demo/video"),
            (0, t.default)(e, r.FACE_RECOGNITION, "?method=sdk/demo/face"),
            e),
          a = !0;
        exports.isProd = a;
        var u = a
          ? function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { threshold: 0 };
              return "/?threshold=".concat(e.threshold);
            }
          : function (e) {
              var t = e.type;
              return d + s[t];
            };
        exports.baseUrlFactory = u;
        var _ = a ? "/api/info" : d + "?method=sdk/demo/info";
        exports.INFO_URL = _;
        var i = 0.3;
        exports.THRESHOLD_DEFAULT = i;
        var n = 800;
        exports.MAXSIZE = n;
      },
      { "@babel/runtime/helpers/defineProperty": "IxO8" },
    ],
    JJlS: [
      function (require, module, exports) {
        "use strict";
        var e = Object.prototype.hasOwnProperty,
          t = "~";
        function n() {}
        function r(e, t, n) {
          (this.fn = e), (this.context = t), (this.once = n || !1);
        }
        function o(e, n, o, s, i) {
          if ("function" != typeof o)
            throw new TypeError("The listener must be a function");
          var c = new r(o, s || e, i),
            f = t ? t + n : n;
          return (
            e._events[f]
              ? e._events[f].fn
                ? (e._events[f] = [e._events[f], c])
                : e._events[f].push(c)
              : ((e._events[f] = c), e._eventsCount++),
            e
          );
        }
        function s(e, t) {
          0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
        }
        function i() {
          (this._events = new n()), (this._eventsCount = 0);
        }
        Object.create &&
          ((n.prototype = Object.create(null)), new n().__proto__ || (t = !1)),
          (i.prototype.eventNames = function () {
            var n,
              r,
              o = [];
            if (0 === this._eventsCount) return o;
            for (r in (n = this._events))
              e.call(n, r) && o.push(t ? r.slice(1) : r);
            return Object.getOwnPropertySymbols
              ? o.concat(Object.getOwnPropertySymbols(n))
              : o;
          }),
          (i.prototype.listeners = function (e) {
            var n = t ? t + e : e,
              r = this._events[n];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var o = 0, s = r.length, i = new Array(s); o < s; o++)
              i[o] = r[o].fn;
            return i;
          }),
          (i.prototype.listenerCount = function (e) {
            var n = t ? t + e : e,
              r = this._events[n];
            return r ? (r.fn ? 1 : r.length) : 0;
          }),
          (i.prototype.emit = function (e, n, r, o, s, i) {
            var c = t ? t + e : e;
            if (!this._events[c]) return !1;
            var f,
              u,
              a = this._events[c],
              l = arguments.length;
            if (a.fn) {
              switch ((a.once && this.removeListener(e, a.fn, void 0, !0), l)) {
                case 1:
                  return a.fn.call(a.context), !0;
                case 2:
                  return a.fn.call(a.context, n), !0;
                case 3:
                  return a.fn.call(a.context, n, r), !0;
                case 4:
                  return a.fn.call(a.context, n, r, o), !0;
                case 5:
                  return a.fn.call(a.context, n, r, o, s), !0;
                case 6:
                  return a.fn.call(a.context, n, r, o, s, i), !0;
              }
              for (u = 1, f = new Array(l - 1); u < l; u++)
                f[u - 1] = arguments[u];
              a.fn.apply(a.context, f);
            } else {
              var v,
                h = a.length;
              for (u = 0; u < h; u++)
                switch (
                  (a[u].once && this.removeListener(e, a[u].fn, void 0, !0), l)
                ) {
                  case 1:
                    a[u].fn.call(a[u].context);
                    break;
                  case 2:
                    a[u].fn.call(a[u].context, n);
                    break;
                  case 3:
                    a[u].fn.call(a[u].context, n, r);
                    break;
                  case 4:
                    a[u].fn.call(a[u].context, n, r, o);
                    break;
                  default:
                    if (!f)
                      for (v = 1, f = new Array(l - 1); v < l; v++)
                        f[v - 1] = arguments[v];
                    a[u].fn.apply(a[u].context, f);
                }
            }
            return !0;
          }),
          (i.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (i.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (i.prototype.removeListener = function (e, n, r, o) {
            var i = t ? t + e : e;
            if (!this._events[i]) return this;
            if (!n) return s(this, i), this;
            var c = this._events[i];
            if (c.fn)
              c.fn !== n ||
                (o && !c.once) ||
                (r && c.context !== r) ||
                s(this, i);
            else {
              for (var f = 0, u = [], a = c.length; f < a; f++)
                (c[f].fn !== n ||
                  (o && !c[f].once) ||
                  (r && c[f].context !== r)) &&
                  u.push(c[f]);
              u.length
                ? (this._events[i] = 1 === u.length ? u[0] : u)
                : s(this, i);
            }
            return this;
          }),
          (i.prototype.removeAllListeners = function (e) {
            var r;
            return (
              e
                ? ((r = t ? t + e : e), this._events[r] && s(this, r))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (i.prototype.off = i.prototype.removeListener),
          (i.prototype.addListener = i.prototype.on),
          (i.prefixed = t),
          (i.EventEmitter = i),
          "undefined" != typeof module && (module.exports = i);
      },
      {},
    ],
    vqB5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.is = pt),
          (exports.fromJS = Bn),
          (exports.hash = yt),
          (exports.isImmutable = A),
          (exports.isCollection = d),
          (exports.isKeyed = w),
          (exports.isIndexed = S),
          (exports.isAssociative = z),
          (exports.isOrdered = k),
          (exports.isValueObject = ht),
          (exports.get = _r),
          (exports.getIn = un),
          (exports.has = pr),
          (exports.hasIn = an),
          (exports.merge = qr),
          (exports.mergeDeep = Ar),
          (exports.mergeWith = Dr),
          (exports.mergeDeepWith = jr),
          (exports.remove = vr),
          (exports.removeIn = Sr),
          (exports.set = yr),
          (exports.setIn = wr),
          (exports.update = Ir),
          (exports.updateIn = dr),
          (exports.Repeat =
            exports.Range =
            exports.Record =
            exports.OrderedSet =
            exports.Set =
            exports.Stack =
            exports.List =
            exports.OrderedMap =
            exports.Map =
            exports.Seq =
            exports.Iterable =
            exports.Collection =
            exports.version =
            exports.default =
              void 0);
        var t = "delete",
          r = 5,
          e = 1 << r,
          n = e - 1,
          i = {};
        function o() {
          return { value: !1 };
        }
        function u(t) {
          t && (t.value = !0);
        }
        function s() {}
        function a(t) {
          return void 0 === t.size && (t.size = t.__iterate(f)), t.size;
        }
        function c(t, r) {
          if ("number" != typeof r) {
            var e = r >>> 0;
            if ("" + e !== r || 4294967295 === e) return NaN;
            r = e;
          }
          return r < 0 ? a(t) + r : r;
        }
        function f() {
          return !0;
        }
        function h(t, r, e) {
          return (
            ((0 === t && !v(t)) || (void 0 !== e && t <= -e)) &&
            (void 0 === r || (void 0 !== e && r >= e))
          );
        }
        function p(t, r) {
          return l(t, r, 0);
        }
        function _(t, r) {
          return l(t, r, r);
        }
        function l(t, r, e) {
          return void 0 === t
            ? e
            : v(t)
            ? r === 1 / 0
              ? r
              : 0 | Math.max(0, r + t)
            : void 0 === r || r === t
            ? t
            : 0 | Math.min(r, t);
        }
        function v(t) {
          return t < 0 || (0 === t && 1 / t == -1 / 0);
        }
        var y = "@@__IMMUTABLE_ITERABLE__@@";
        function d(t) {
          return Boolean(t && t[y]);
        }
        var g = "@@__IMMUTABLE_KEYED__@@";
        function w(t) {
          return Boolean(t && t[g]);
        }
        var m = "@@__IMMUTABLE_INDEXED__@@";
        function S(t) {
          return Boolean(t && t[m]);
        }
        function z(t) {
          return w(t) || S(t);
        }
        var I = function (t) {
          return d(t) ? t : X(t);
        };
        exports.Collection = I;
        var b = (function (t) {
            function r(t) {
              return w(t) ? t : F(t);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              r
            );
          })(I),
          x = (function (t) {
            function r(t) {
              return S(t) ? t : G(t);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              r
            );
          })(I),
          O = (function (t) {
            function r(t) {
              return d(t) && !z(t) ? t : Z(t);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              r
            );
          })(I);
        (I.Keyed = b), (I.Indexed = x), (I.Set = O);
        var E = "@@__IMMUTABLE_SEQ__@@";
        function M(t) {
          return Boolean(t && t[E]);
        }
        var q = "@@__IMMUTABLE_RECORD__@@";
        function D(t) {
          return Boolean(t && t[q]);
        }
        function A(t) {
          return d(t) || D(t);
        }
        var j = "@@__IMMUTABLE_ORDERED__@@";
        function k(t) {
          return Boolean(t && t[j]);
        }
        var R = 0,
          U = 1,
          K = 2,
          B = "function" == typeof Symbol && Symbol.iterator,
          T = "@@iterator",
          L = B || T,
          C = function (t) {
            this.next = t;
          };
        function W(t, r, e, n) {
          var i = 0 === t ? r : 1 === t ? e : [r, e];
          return n ? (n.value = i) : (n = { value: i, done: !1 }), n;
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        function P(t) {
          return !!V(t);
        }
        function H(t) {
          return t && "function" == typeof t.next;
        }
        function J(t) {
          var r = V(t);
          return r && r.call(t);
        }
        function V(t) {
          var r = t && ((B && t[B]) || t[T]);
          if ("function" == typeof r) return r;
        }
        (C.prototype.toString = function () {
          return "[Iterator]";
        }),
          (C.KEYS = R),
          (C.VALUES = U),
          (C.ENTRIES = K),
          (C.prototype.inspect = C.prototype.toSource =
            function () {
              return this.toString();
            }),
          (C.prototype[L] = function () {
            return this;
          });
        var Y = Object.prototype.hasOwnProperty;
        function Q(t) {
          return (
            !(!Array.isArray(t) && "string" != typeof t) ||
            (t &&
              "object" == typeof t &&
              Number.isInteger(t.length) &&
              t.length >= 0 &&
              (0 === t.length
                ? 1 === Object.keys(t).length
                : t.hasOwnProperty(t.length - 1)))
          );
        }
        var X = (function (t) {
          function r(t) {
            return null == t ? nt() : A(t) ? t.toSeq() : ut(t);
          }
          return (
            t && (r.__proto__ = t),
            (r.prototype = Object.create(t && t.prototype)),
            (r.prototype.constructor = r),
            (r.prototype.toSeq = function () {
              return this;
            }),
            (r.prototype.toString = function () {
              return this.__toString("Seq {", "}");
            }),
            (r.prototype.cacheResult = function () {
              return (
                !this._cache &&
                  this.__iterateUncached &&
                  ((this._cache = this.entrySeq().toArray()),
                  (this.size = this._cache.length)),
                this
              );
            }),
            (r.prototype.__iterate = function (t, r) {
              var e = this._cache;
              if (e) {
                for (var n = e.length, i = 0; i !== n; ) {
                  var o = e[r ? n - ++i : i++];
                  if (!1 === t(o[1], o[0], this)) break;
                }
                return i;
              }
              return this.__iterateUncached(t, r);
            }),
            (r.prototype.__iterator = function (t, r) {
              var e = this._cache;
              if (e) {
                var n = e.length,
                  i = 0;
                return new C(function () {
                  if (i === n) return N();
                  var o = e[r ? n - ++i : i++];
                  return W(t, o[0], o[1]);
                });
              }
              return this.__iteratorUncached(t, r);
            }),
            r
          );
        })(I);
        exports.Seq = X;
        var F = (function (t) {
            function r(t) {
              return null == t
                ? nt().toKeyedSeq()
                : d(t)
                ? w(t)
                  ? t.toSeq()
                  : t.fromEntrySeq()
                : D(t)
                ? t.toSeq()
                : it(t);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.toKeyedSeq = function () {
                return this;
              }),
              r
            );
          })(X),
          G = (function (t) {
            function r(t) {
              return null == t
                ? nt()
                : d(t)
                ? w(t)
                  ? t.entrySeq()
                  : t.toIndexedSeq()
                : D(t)
                ? t.toSeq().entrySeq()
                : ot(t);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.of = function () {
                return r(arguments);
              }),
              (r.prototype.toIndexedSeq = function () {
                return this;
              }),
              (r.prototype.toString = function () {
                return this.__toString("Seq [", "]");
              }),
              r
            );
          })(X),
          Z = (function (t) {
            function r(t) {
              return (d(t) && !z(t) ? t : G(t)).toSetSeq();
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.of = function () {
                return r(arguments);
              }),
              (r.prototype.toSetSeq = function () {
                return this;
              }),
              r
            );
          })(X);
        (X.isSeq = M),
          (X.Keyed = F),
          (X.Set = Z),
          (X.Indexed = G),
          (X.prototype[E] = !0);
        var $ = (function (t) {
            function r(t) {
              (this._array = t), (this.size = t.length);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.get = function (t, r) {
                return this.has(t) ? this._array[c(this, t)] : r;
              }),
              (r.prototype.__iterate = function (t, r) {
                for (var e = this._array, n = e.length, i = 0; i !== n; ) {
                  var o = r ? n - ++i : i++;
                  if (!1 === t(e[o], o, this)) break;
                }
                return i;
              }),
              (r.prototype.__iterator = function (t, r) {
                var e = this._array,
                  n = e.length,
                  i = 0;
                return new C(function () {
                  if (i === n) return N();
                  var o = r ? n - ++i : i++;
                  return W(t, o, e[o]);
                });
              }),
              r
            );
          })(G),
          tt = (function (t) {
            function r(t) {
              var r = Object.keys(t);
              (this._object = t), (this._keys = r), (this.size = r.length);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.get = function (t, r) {
                return void 0 === r || this.has(t) ? this._object[t] : r;
              }),
              (r.prototype.has = function (t) {
                return Y.call(this._object, t);
              }),
              (r.prototype.__iterate = function (t, r) {
                for (
                  var e = this._object, n = this._keys, i = n.length, o = 0;
                  o !== i;

                ) {
                  var u = n[r ? i - ++o : o++];
                  if (!1 === t(e[u], u, this)) break;
                }
                return o;
              }),
              (r.prototype.__iterator = function (t, r) {
                var e = this._object,
                  n = this._keys,
                  i = n.length,
                  o = 0;
                return new C(function () {
                  if (o === i) return N();
                  var u = n[r ? i - ++o : o++];
                  return W(t, u, e[u]);
                });
              }),
              r
            );
          })(F);
        tt.prototype[j] = !0;
        var rt,
          et = (function (t) {
            function r(t) {
              (this._collection = t), (this.size = t.length || t.size);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.__iterateUncached = function (t, r) {
                if (r) return this.cacheResult().__iterate(t, r);
                var e = J(this._collection),
                  n = 0;
                if (H(e))
                  for (
                    var i;
                    !(i = e.next()).done && !1 !== t(i.value, n++, this);

                  );
                return n;
              }),
              (r.prototype.__iteratorUncached = function (t, r) {
                if (r) return this.cacheResult().__iterator(t, r);
                var e = J(this._collection);
                if (!H(e)) return new C(N);
                var n = 0;
                return new C(function () {
                  var r = e.next();
                  return r.done ? r : W(t, n++, r.value);
                });
              }),
              r
            );
          })(G);
        function nt() {
          return rt || (rt = new $([]));
        }
        function it(t) {
          var r = Array.isArray(t) ? new $(t) : P(t) ? new et(t) : void 0;
          if (r) return r.fromEntrySeq();
          if ("object" == typeof t) return new tt(t);
          throw new TypeError(
            "Expected Array or collection object of [k, v] entries, or keyed object: " +
              t
          );
        }
        function ot(t) {
          var r = st(t);
          if (r) return r;
          throw new TypeError(
            "Expected Array or collection object of values: " + t
          );
        }
        function ut(t) {
          var r = st(t);
          if (r) return r;
          if ("object" == typeof t) return new tt(t);
          throw new TypeError(
            "Expected Array or collection object of values, or keyed object: " +
              t
          );
        }
        function st(t) {
          return Q(t) ? new $(t) : P(t) ? new et(t) : void 0;
        }
        var at = "@@__IMMUTABLE_MAP__@@";
        function ct(t) {
          return Boolean(t && t[at]);
        }
        function ft(t) {
          return ct(t) && k(t);
        }
        function ht(t) {
          return Boolean(
            t &&
              "function" == typeof t.equals &&
              "function" == typeof t.hashCode
          );
        }
        function pt(t, r) {
          if (t === r || (t != t && r != r)) return !0;
          if (!t || !r) return !1;
          if (
            "function" == typeof t.valueOf &&
            "function" == typeof r.valueOf
          ) {
            if ((t = t.valueOf()) === (r = r.valueOf()) || (t != t && r != r))
              return !0;
            if (!t || !r) return !1;
          }
          return !!(ht(t) && ht(r) && t.equals(r));
        }
        var _t =
          "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function (t, r) {
                var e = 65535 & (t |= 0),
                  n = 65535 & (r |= 0);
                return (
                  (e * n + ((((t >>> 16) * n + e * (r >>> 16)) << 16) >>> 0)) |
                  0
                );
              };
        function lt(t) {
          return ((t >>> 1) & 1073741824) | (3221225471 & t);
        }
        var vt = Object.prototype.valueOf;
        function yt(t) {
          switch (typeof t) {
            case "boolean":
              return t ? 1108378657 : 1108378656;
            case "number":
              return dt(t);
            case "string":
              return t.length > Mt ? gt(t) : wt(t);
            case "object":
            case "function":
              return null === t
                ? 1108378658
                : "function" == typeof t.hashCode
                ? lt(t.hashCode(t))
                : (t.valueOf !== vt &&
                    "function" == typeof t.valueOf &&
                    (t = t.valueOf(t)),
                  mt(t));
            case "undefined":
              return 1108378659;
            default:
              if ("function" == typeof t.toString) return wt(t.toString());
              throw new Error("Value type " + typeof t + " cannot be hashed.");
          }
        }
        function dt(t) {
          if (t != t || t === 1 / 0) return 0;
          var r = 0 | t;
          for (r !== t && (r ^= 4294967295 * t); t > 4294967295; )
            r ^= t /= 4294967295;
          return lt(r);
        }
        function gt(t) {
          var r = At[t];
          return (
            void 0 === r &&
              ((r = wt(t)),
              Dt === qt && ((Dt = 0), (At = {})),
              Dt++,
              (At[t] = r)),
            r
          );
        }
        function wt(t) {
          for (var r = 0, e = 0; e < t.length; e++)
            r = (31 * r + t.charCodeAt(e)) | 0;
          return lt(r);
        }
        function mt(t) {
          var r;
          if (xt && void 0 !== (r = bt.get(t))) return r;
          if (void 0 !== (r = t[Et])) return r;
          if (!zt) {
            if (
              void 0 !==
              (r = t.propertyIsEnumerable && t.propertyIsEnumerable[Et])
            )
              return r;
            if (void 0 !== (r = It(t))) return r;
          }
          if (((r = ++Ot), 1073741824 & Ot && (Ot = 0), xt)) bt.set(t, r);
          else {
            if (void 0 !== St && !1 === St(t))
              throw new Error(
                "Non-extensible objects are not allowed as keys."
              );
            if (zt)
              Object.defineProperty(t, Et, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: r,
              });
            else if (
              void 0 !== t.propertyIsEnumerable &&
              t.propertyIsEnumerable ===
                t.constructor.prototype.propertyIsEnumerable
            )
              (t.propertyIsEnumerable = function () {
                return this.constructor.prototype.propertyIsEnumerable.apply(
                  this,
                  arguments
                );
              }),
                (t.propertyIsEnumerable[Et] = r);
            else {
              if (void 0 === t.nodeType)
                throw new Error(
                  "Unable to set a non-enumerable property on object."
                );
              t[Et] = r;
            }
          }
          return r;
        }
        var St = Object.isExtensible,
          zt = (function () {
            try {
              return Object.defineProperty({}, "@", {}), !0;
            } catch (t) {
              return !1;
            }
          })();
        function It(t) {
          if (t && t.nodeType > 0)
            switch (t.nodeType) {
              case 1:
                return t.uniqueID;
              case 9:
                return t.documentElement && t.documentElement.uniqueID;
            }
        }
        var bt,
          xt = "function" == typeof WeakMap;
        xt && (bt = new WeakMap());
        var Ot = 0,
          Et = "__immutablehash__";
        "function" == typeof Symbol && (Et = Symbol(Et));
        var Mt = 16,
          qt = 255,
          Dt = 0,
          At = {},
          jt = (function (t) {
            function r(t, r) {
              (this._iter = t), (this._useKeys = r), (this.size = t.size);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.get = function (t, r) {
                return this._iter.get(t, r);
              }),
              (r.prototype.has = function (t) {
                return this._iter.has(t);
              }),
              (r.prototype.valueSeq = function () {
                return this._iter.valueSeq();
              }),
              (r.prototype.reverse = function () {
                var t = this,
                  r = Tt(this, !0);
                return (
                  this._useKeys ||
                    (r.valueSeq = function () {
                      return t._iter.toSeq().reverse();
                    }),
                  r
                );
              }),
              (r.prototype.map = function (t, r) {
                var e = this,
                  n = Bt(this, t, r);
                return (
                  this._useKeys ||
                    (n.valueSeq = function () {
                      return e._iter.toSeq().map(t, r);
                    }),
                  n
                );
              }),
              (r.prototype.__iterate = function (t, r) {
                var e = this;
                return this._iter.__iterate(function (r, n) {
                  return t(r, n, e);
                }, r);
              }),
              (r.prototype.__iterator = function (t, r) {
                return this._iter.__iterator(t, r);
              }),
              r
            );
          })(F);
        jt.prototype[j] = !0;
        var kt = (function (t) {
            function r(t) {
              (this._iter = t), (this.size = t.size);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.includes = function (t) {
                return this._iter.includes(t);
              }),
              (r.prototype.__iterate = function (t, r) {
                var e = this,
                  n = 0;
                return (
                  r && a(this),
                  this._iter.__iterate(function (i) {
                    return t(i, r ? e.size - ++n : n++, e);
                  }, r)
                );
              }),
              (r.prototype.__iterator = function (t, r) {
                var e = this,
                  n = this._iter.__iterator(U, r),
                  i = 0;
                return (
                  r && a(this),
                  new C(function () {
                    var o = n.next();
                    return o.done
                      ? o
                      : W(t, r ? e.size - ++i : i++, o.value, o);
                  })
                );
              }),
              r
            );
          })(G),
          Rt = (function (t) {
            function r(t) {
              (this._iter = t), (this.size = t.size);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.has = function (t) {
                return this._iter.includes(t);
              }),
              (r.prototype.__iterate = function (t, r) {
                var e = this;
                return this._iter.__iterate(function (r) {
                  return t(r, r, e);
                }, r);
              }),
              (r.prototype.__iterator = function (t, r) {
                var e = this._iter.__iterator(U, r);
                return new C(function () {
                  var r = e.next();
                  return r.done ? r : W(t, r.value, r.value, r);
                });
              }),
              r
            );
          })(Z),
          Ut = (function (t) {
            function r(t) {
              (this._iter = t), (this.size = t.size);
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.entrySeq = function () {
                return this._iter.toSeq();
              }),
              (r.prototype.__iterate = function (t, r) {
                var e = this;
                return this._iter.__iterate(function (r) {
                  if (r) {
                    tr(r);
                    var n = d(r);
                    return t(n ? r.get(1) : r[1], n ? r.get(0) : r[0], e);
                  }
                }, r);
              }),
              (r.prototype.__iterator = function (t, r) {
                var e = this._iter.__iterator(U, r);
                return new C(function () {
                  for (;;) {
                    var r = e.next();
                    if (r.done) return r;
                    var n = r.value;
                    if (n) {
                      tr(n);
                      var i = d(n);
                      return W(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], r);
                    }
                  }
                });
              }),
              r
            );
          })(F);
        function Kt(t) {
          var r = er(t);
          return (
            (r._iter = t),
            (r.size = t.size),
            (r.flip = function () {
              return t;
            }),
            (r.reverse = function () {
              var r = t.reverse.apply(this);
              return (
                (r.flip = function () {
                  return t.reverse();
                }),
                r
              );
            }),
            (r.has = function (r) {
              return t.includes(r);
            }),
            (r.includes = function (r) {
              return t.has(r);
            }),
            (r.cacheResult = nr),
            (r.__iterateUncached = function (r, e) {
              var n = this;
              return t.__iterate(function (t, e) {
                return !1 !== r(e, t, n);
              }, e);
            }),
            (r.__iteratorUncached = function (r, e) {
              if (r === K) {
                var n = t.__iterator(r, e);
                return new C(function () {
                  var t = n.next();
                  if (!t.done) {
                    var r = t.value[0];
                    (t.value[0] = t.value[1]), (t.value[1] = r);
                  }
                  return t;
                });
              }
              return t.__iterator(r === U ? R : U, e);
            }),
            r
          );
        }
        function Bt(t, r, e) {
          var n = er(t);
          return (
            (n.size = t.size),
            (n.has = function (r) {
              return t.has(r);
            }),
            (n.get = function (n, o) {
              var u = t.get(n, i);
              return u === i ? o : r.call(e, u, n, t);
            }),
            (n.__iterateUncached = function (n, i) {
              var o = this;
              return t.__iterate(function (t, i, u) {
                return !1 !== n(r.call(e, t, i, u), i, o);
              }, i);
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = t.__iterator(K, i);
              return new C(function () {
                var i = o.next();
                if (i.done) return i;
                var u = i.value,
                  s = u[0];
                return W(n, s, r.call(e, u[1], s, t), i);
              });
            }),
            n
          );
        }
        function Tt(t, r) {
          var e = this,
            n = er(t);
          return (
            (n._iter = t),
            (n.size = t.size),
            (n.reverse = function () {
              return t;
            }),
            t.flip &&
              (n.flip = function () {
                var r = Kt(t);
                return (
                  (r.reverse = function () {
                    return t.flip();
                  }),
                  r
                );
              }),
            (n.get = function (e, n) {
              return t.get(r ? e : -1 - e, n);
            }),
            (n.has = function (e) {
              return t.has(r ? e : -1 - e);
            }),
            (n.includes = function (r) {
              return t.includes(r);
            }),
            (n.cacheResult = nr),
            (n.__iterate = function (e, n) {
              var i = this,
                o = 0;
              return (
                n && a(t),
                t.__iterate(function (t, u) {
                  return e(t, r ? u : n ? i.size - ++o : o++, i);
                }, !n)
              );
            }),
            (n.__iterator = function (n, i) {
              var o = 0;
              i && a(t);
              var u = t.__iterator(K, !i);
              return new C(function () {
                var t = u.next();
                if (t.done) return t;
                var s = t.value;
                return W(n, r ? s[0] : i ? e.size - ++o : o++, s[1], t);
              });
            }),
            n
          );
        }
        function Lt(t, r, e, n) {
          var o = er(t);
          return (
            n &&
              ((o.has = function (n) {
                var o = t.get(n, i);
                return o !== i && !!r.call(e, o, n, t);
              }),
              (o.get = function (n, o) {
                var u = t.get(n, i);
                return u !== i && r.call(e, u, n, t) ? u : o;
              })),
            (o.__iterateUncached = function (i, o) {
              var u = this,
                s = 0;
              return (
                t.__iterate(function (t, o, a) {
                  if (r.call(e, t, o, a)) return s++, i(t, n ? o : s - 1, u);
                }, o),
                s
              );
            }),
            (o.__iteratorUncached = function (i, o) {
              var u = t.__iterator(K, o),
                s = 0;
              return new C(function () {
                for (;;) {
                  var o = u.next();
                  if (o.done) return o;
                  var a = o.value,
                    c = a[0],
                    f = a[1];
                  if (r.call(e, f, c, t)) return W(i, n ? c : s++, f, o);
                }
              });
            }),
            o
          );
        }
        function Ct(t, r, e) {
          var n = Hr().asMutable();
          return (
            t.__iterate(function (i, o) {
              n.update(r.call(e, i, o, t), 0, function (t) {
                return t + 1;
              });
            }),
            n.asImmutable()
          );
        }
        function Wt(t, r, e) {
          var n = w(t),
            i = (k(t) ? Re() : Hr()).asMutable();
          t.__iterate(function (o, u) {
            i.update(r.call(e, o, u, t), function (t) {
              return (t = t || []).push(n ? [u, o] : o), t;
            });
          });
          var o = rr(t);
          return i
            .map(function (r) {
              return $t(t, o(r));
            })
            .asImmutable();
        }
        function Nt(t, r, e, n) {
          var i = t.size;
          if (h(r, e, i)) return t;
          var o = p(r, i),
            u = _(e, i);
          if (o != o || u != u) return Nt(t.toSeq().cacheResult(), r, e, n);
          var s,
            a = u - o;
          a == a && (s = a < 0 ? 0 : a);
          var f = er(t);
          return (
            (f.size = 0 === s ? s : (t.size && s) || void 0),
            !n &&
              M(t) &&
              s >= 0 &&
              (f.get = function (r, e) {
                return (r = c(this, r)) >= 0 && r < s ? t.get(r + o, e) : e;
              }),
            (f.__iterateUncached = function (r, e) {
              var i = this;
              if (0 === s) return 0;
              if (e) return this.cacheResult().__iterate(r, e);
              var u = 0,
                a = !0,
                c = 0;
              return (
                t.__iterate(function (t, e) {
                  if (!a || !(a = u++ < o))
                    return c++, !1 !== r(t, n ? e : c - 1, i) && c !== s;
                }),
                c
              );
            }),
            (f.__iteratorUncached = function (r, e) {
              if (0 !== s && e) return this.cacheResult().__iterator(r, e);
              if (0 === s) return new C(N);
              var i = t.__iterator(r, e),
                u = 0,
                a = 0;
              return new C(function () {
                for (; u++ < o; ) i.next();
                if (++a > s) return N();
                var t = i.next();
                return n || r === U || t.done
                  ? t
                  : W(r, a - 1, r === R ? void 0 : t.value[1], t);
              });
            }),
            f
          );
        }
        function Pt(t, r, e) {
          var n = er(t);
          return (
            (n.__iterateUncached = function (n, i) {
              var o = this;
              if (i) return this.cacheResult().__iterate(n, i);
              var u = 0;
              return (
                t.__iterate(function (t, i, s) {
                  return r.call(e, t, i, s) && ++u && n(t, i, o);
                }),
                u
              );
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = this;
              if (i) return this.cacheResult().__iterator(n, i);
              var u = t.__iterator(K, i),
                s = !0;
              return new C(function () {
                if (!s) return N();
                var t = u.next();
                if (t.done) return t;
                var i = t.value,
                  a = i[0],
                  c = i[1];
                return r.call(e, c, a, o)
                  ? n === K
                    ? t
                    : W(n, a, c, t)
                  : ((s = !1), N());
              });
            }),
            n
          );
        }
        function Ht(t, r, e, n) {
          var i = er(t);
          return (
            (i.__iterateUncached = function (i, o) {
              var u = this;
              if (o) return this.cacheResult().__iterate(i, o);
              var s = !0,
                a = 0;
              return (
                t.__iterate(function (t, o, c) {
                  if (!s || !(s = r.call(e, t, o, c)))
                    return a++, i(t, n ? o : a - 1, u);
                }),
                a
              );
            }),
            (i.__iteratorUncached = function (i, o) {
              var u = this;
              if (o) return this.cacheResult().__iterator(i, o);
              var s = t.__iterator(K, o),
                a = !0,
                c = 0;
              return new C(function () {
                var t, o, f;
                do {
                  if ((t = s.next()).done)
                    return n || i === U
                      ? t
                      : W(i, c++, i === R ? void 0 : t.value[1], t);
                  var h = t.value;
                  (o = h[0]), (f = h[1]), a && (a = r.call(e, f, o, u));
                } while (a);
                return i === K ? t : W(i, o, f, t);
              });
            }),
            i
          );
        }
        function Jt(t, r) {
          var e = w(t),
            n = [t]
              .concat(r)
              .map(function (t) {
                return (
                  d(t)
                    ? e && (t = b(t))
                    : (t = e ? it(t) : ot(Array.isArray(t) ? t : [t])),
                  t
                );
              })
              .filter(function (t) {
                return 0 !== t.size;
              });
          if (0 === n.length) return t;
          if (1 === n.length) {
            var i = n[0];
            if (i === t || (e && w(i)) || (S(t) && S(i))) return i;
          }
          var o = new $(n);
          return (
            e ? (o = o.toKeyedSeq()) : S(t) || (o = o.toSetSeq()),
            ((o = o.flatten(!0)).size = n.reduce(function (t, r) {
              if (void 0 !== t) {
                var e = r.size;
                if (void 0 !== e) return t + e;
              }
            }, 0)),
            o
          );
        }
        function Vt(t, r, e) {
          var n = er(t);
          return (
            (n.__iterateUncached = function (i, o) {
              if (o) return this.cacheResult().__iterate(i, o);
              var u = 0,
                s = !1;
              return (
                (function t(a, c) {
                  a.__iterate(function (o, a) {
                    return (
                      (!r || c < r) && d(o)
                        ? t(o, c + 1)
                        : (u++, !1 === i(o, e ? a : u - 1, n) && (s = !0)),
                      !s
                    );
                  }, o);
                })(t, 0),
                u
              );
            }),
            (n.__iteratorUncached = function (n, i) {
              if (i) return this.cacheResult().__iterator(n, i);
              var o = t.__iterator(n, i),
                u = [],
                s = 0;
              return new C(function () {
                for (; o; ) {
                  var t = o.next();
                  if (!1 === t.done) {
                    var a = t.value;
                    if (
                      (n === K && (a = a[1]), (r && !(u.length < r)) || !d(a))
                    )
                      return e ? t : W(n, s++, a, t);
                    u.push(o), (o = a.__iterator(n, i));
                  } else o = u.pop();
                }
                return N();
              });
            }),
            n
          );
        }
        function Yt(t, r, e) {
          var n = rr(t);
          return t
            .toSeq()
            .map(function (i, o) {
              return n(r.call(e, i, o, t));
            })
            .flatten(!0);
        }
        function Qt(t, r) {
          var e = er(t);
          return (
            (e.size = t.size && 2 * t.size - 1),
            (e.__iterateUncached = function (e, n) {
              var i = this,
                o = 0;
              return (
                t.__iterate(function (t) {
                  return (!o || !1 !== e(r, o++, i)) && !1 !== e(t, o++, i);
                }, n),
                o
              );
            }),
            (e.__iteratorUncached = function (e, n) {
              var i,
                o = t.__iterator(U, n),
                u = 0;
              return new C(function () {
                return (!i || u % 2) && (i = o.next()).done
                  ? i
                  : u % 2
                  ? W(e, u++, r)
                  : W(e, u++, i.value, i);
              });
            }),
            e
          );
        }
        function Xt(t, r, e) {
          r || (r = ir);
          var n = w(t),
            i = 0,
            o = t
              .toSeq()
              .map(function (r, n) {
                return [n, r, i++, e ? e(r, n, t) : r];
              })
              .valueSeq()
              .toArray();
          return (
            o
              .sort(function (t, e) {
                return r(t[3], e[3]) || t[2] - e[2];
              })
              .forEach(
                n
                  ? function (t, r) {
                      o[r].length = 2;
                    }
                  : function (t, r) {
                      o[r] = t[1];
                    }
              ),
            n ? F(o) : S(t) ? G(o) : Z(o)
          );
        }
        function Ft(t, r, e) {
          if ((r || (r = ir), e)) {
            var n = t
              .toSeq()
              .map(function (r, n) {
                return [r, e(r, n, t)];
              })
              .reduce(function (t, e) {
                return Gt(r, t[1], e[1]) ? e : t;
              });
            return n && n[0];
          }
          return t.reduce(function (t, e) {
            return Gt(r, t, e) ? e : t;
          });
        }
        function Gt(t, r, e) {
          var n = t(e, r);
          return (0 === n && e !== r && (null == e || e != e)) || n > 0;
        }
        function Zt(t, r, e, n) {
          var i = er(t),
            o = new $(e).map(function (t) {
              return t.size;
            });
          return (
            (i.size = n ? o.max() : o.min()),
            (i.__iterate = function (t, r) {
              for (
                var e, n = this.__iterator(U, r), i = 0;
                !(e = n.next()).done && !1 !== t(e.value, i++, this);

              );
              return i;
            }),
            (i.__iteratorUncached = function (t, i) {
              var o = e.map(function (t) {
                  return (t = I(t)), J(i ? t.reverse() : t);
                }),
                u = 0,
                s = !1;
              return new C(function () {
                var e;
                return (
                  s ||
                    ((e = o.map(function (t) {
                      return t.next();
                    })),
                    (s = n
                      ? e.every(function (t) {
                          return t.done;
                        })
                      : e.some(function (t) {
                          return t.done;
                        }))),
                  s
                    ? N()
                    : W(
                        t,
                        u++,
                        r.apply(
                          null,
                          e.map(function (t) {
                            return t.value;
                          })
                        )
                      )
                );
              });
            }),
            i
          );
        }
        function $t(t, r) {
          return t === r ? t : M(t) ? r : t.constructor(r);
        }
        function tr(t) {
          if (t !== Object(t))
            throw new TypeError("Expected [K, V] tuple: " + t);
        }
        function rr(t) {
          return w(t) ? b : S(t) ? x : O;
        }
        function er(t) {
          return Object.create((w(t) ? F : S(t) ? G : Z).prototype);
        }
        function nr() {
          return this._iter.cacheResult
            ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
            : X.prototype.cacheResult.call(this);
        }
        function ir(t, r) {
          return void 0 === t && void 0 === r
            ? 0
            : void 0 === t
            ? 1
            : void 0 === r
            ? -1
            : t > r
            ? 1
            : t < r
            ? -1
            : 0;
        }
        function or(t, r) {
          r = r || 0;
          for (
            var e = Math.max(0, t.length - r), n = new Array(e), i = 0;
            i < e;
            i++
          )
            n[i] = t[i + r];
          return n;
        }
        function ur(t, r) {
          if (!t) throw new Error(r);
        }
        function sr(t) {
          ur(t !== 1 / 0, "Cannot perform this action with an infinite size.");
        }
        function ar(t) {
          if (Q(t) && "string" != typeof t) return t;
          if (k(t)) return t.toArray();
          throw new TypeError(
            "Invalid keyPath: expected Ordered Collection or Array: " + t
          );
        }
        function cr(t) {
          return (
            t &&
            ("function" != typeof t.constructor ||
              "Object" === t.constructor.name)
          );
        }
        function fr(t) {
          return "object" == typeof t && (A(t) || Array.isArray(t) || cr(t));
        }
        function hr(t) {
          try {
            return "string" == typeof t ? JSON.stringify(t) : String(t);
          } catch (r) {
            return JSON.stringify(t);
          }
        }
        function pr(t, r) {
          return A(t) ? t.has(r) : fr(t) && Y.call(t, r);
        }
        function _r(t, r, e) {
          return A(t)
            ? t.get(r, e)
            : pr(t, r)
            ? "function" == typeof t.get
              ? t.get(r)
              : t[r]
            : e;
        }
        function lr(t) {
          if (Array.isArray(t)) return or(t);
          var r = {};
          for (var e in t) Y.call(t, e) && (r[e] = t[e]);
          return r;
        }
        function vr(t, r) {
          if (!fr(t))
            throw new TypeError("Cannot update non-data-structure value: " + t);
          if (A(t)) {
            if (!t.remove)
              throw new TypeError(
                "Cannot update immutable value without .remove() method: " + t
              );
            return t.remove(r);
          }
          if (!Y.call(t, r)) return t;
          var e = lr(t);
          return Array.isArray(e) ? e.splice(r, 1) : delete e[r], e;
        }
        function yr(t, r, e) {
          if (!fr(t))
            throw new TypeError("Cannot update non-data-structure value: " + t);
          if (A(t)) {
            if (!t.set)
              throw new TypeError(
                "Cannot update immutable value without .set() method: " + t
              );
            return t.set(r, e);
          }
          if (Y.call(t, r) && e === t[r]) return t;
          var n = lr(t);
          return (n[r] = e), n;
        }
        function dr(t, r, e, n) {
          n || ((n = e), (e = void 0));
          var o = gr(A(t), t, ar(r), 0, e, n);
          return o === i ? e : o;
        }
        function gr(t, r, e, n, o, u) {
          var s = r === i;
          if (n === e.length) {
            var a = s ? o : r,
              c = u(a);
            return c === a ? r : c;
          }
          if (!s && !fr(r))
            throw new TypeError(
              "Cannot update within non-data-structure value in path [" +
                e.slice(0, n).map(hr) +
                "]: " +
                r
            );
          var f = e[n],
            h = s ? i : _r(r, f, i),
            p = gr(h === i ? t : A(h), h, e, n + 1, o, u);
          return p === h
            ? r
            : p === i
            ? vr(r, f)
            : yr(s ? (t ? ee() : {}) : r, f, p);
        }
        function wr(t, r, e) {
          return dr(t, r, i, function () {
            return e;
          });
        }
        function mr(t, r) {
          return wr(this, t, r);
        }
        function Sr(t, r) {
          return dr(t, r, function () {
            return i;
          });
        }
        function zr(t) {
          return Sr(this, t);
        }
        function Ir(t, r, e, n) {
          return dr(t, [r], e, n);
        }
        function br(t, r, e) {
          return 1 === arguments.length ? t(this) : Ir(this, t, r, e);
        }
        function xr(t, r, e) {
          return dr(this, t, r, e);
        }
        function Or() {
          for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
          return Mr(this, t);
        }
        function Er(t) {
          for (var r = [], e = arguments.length - 1; e-- > 0; )
            r[e] = arguments[e + 1];
          if ("function" != typeof t)
            throw new TypeError("Invalid merger function: " + t);
          return Mr(this, r, t);
        }
        function Mr(t, r, e) {
          for (var n = [], o = 0; o < r.length; o++) {
            var u = b(r[o]);
            0 !== u.size && n.push(u);
          }
          return 0 === n.length
            ? t
            : 0 !== t.toSeq().size || t.__ownerID || 1 !== n.length
            ? t.withMutations(function (t) {
                for (
                  var r = e
                      ? function (r, n) {
                          Ir(t, n, i, function (t) {
                            return t === i ? r : e(t, r, n);
                          });
                        }
                      : function (r, e) {
                          t.set(e, r);
                        },
                    o = 0;
                  o < n.length;
                  o++
                )
                  n[o].forEach(r);
              })
            : t.constructor(n[0]);
        }
        function qr(t) {
          for (var r = [], e = arguments.length - 1; e-- > 0; )
            r[e] = arguments[e + 1];
          return Rr(t, r);
        }
        function Dr(t, r) {
          for (var e = [], n = arguments.length - 2; n-- > 0; )
            e[n] = arguments[n + 2];
          return Rr(r, e, t);
        }
        function Ar(t) {
          for (var r = [], e = arguments.length - 1; e-- > 0; )
            r[e] = arguments[e + 1];
          return kr(t, r);
        }
        function jr(t, r) {
          for (var e = [], n = arguments.length - 2; n-- > 0; )
            e[n] = arguments[n + 2];
          return kr(r, e, t);
        }
        function kr(t, r, e) {
          return Rr(t, r, Ur(e));
        }
        function Rr(t, r, e) {
          if (!fr(t))
            throw new TypeError(
              "Cannot merge into non-data-structure value: " + t
            );
          if (A(t))
            return "function" == typeof e && t.mergeWith
              ? t.mergeWith.apply(t, [e].concat(r))
              : t.merge
              ? t.merge.apply(t, r)
              : t.concat.apply(t, r);
          for (
            var n = Array.isArray(t),
              i = t,
              o = n ? x : b,
              u = n
                ? function (r) {
                    i === t && (i = lr(i)), i.push(r);
                  }
                : function (r, n) {
                    var o = Y.call(i, n),
                      u = o && e ? e(i[n], r, n) : r;
                    (o && u === i[n]) || (i === t && (i = lr(i)), (i[n] = u));
                  },
              s = 0;
            s < r.length;
            s++
          )
            o(r[s]).forEach(u);
          return i;
        }
        function Ur(t) {
          return function r(e, n, i) {
            return fr(e) && fr(n) ? Rr(e, [n], r) : t ? t(e, n, i) : n;
          };
        }
        function Kr() {
          for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
          return kr(this, t);
        }
        function Br(t) {
          for (var r = [], e = arguments.length - 1; e-- > 0; )
            r[e] = arguments[e + 1];
          return kr(this, r, t);
        }
        function Tr(t) {
          for (var r = [], e = arguments.length - 1; e-- > 0; )
            r[e] = arguments[e + 1];
          return dr(this, t, ee(), function (t) {
            return Rr(t, r);
          });
        }
        function Lr(t) {
          for (var r = [], e = arguments.length - 1; e-- > 0; )
            r[e] = arguments[e + 1];
          return dr(this, t, ee(), function (t) {
            return kr(t, r);
          });
        }
        function Cr(t) {
          var r = this.asMutable();
          return t(r), r.wasAltered() ? r.__ensureOwner(this.__ownerID) : this;
        }
        function Wr() {
          return this.__ownerID ? this : this.__ensureOwner(new s());
        }
        function Nr() {
          return this.__ensureOwner();
        }
        function Pr() {
          return this.__altered;
        }
        kt.prototype.cacheResult =
          jt.prototype.cacheResult =
          Rt.prototype.cacheResult =
          Ut.prototype.cacheResult =
            nr;
        var Hr = (function (t) {
          function r(r) {
            return null == r
              ? ee()
              : ct(r) && !k(r)
              ? r
              : ee().withMutations(function (e) {
                  var n = t(r);
                  sr(n.size),
                    n.forEach(function (t, r) {
                      return e.set(r, t);
                    });
                });
          }
          return (
            t && (r.__proto__ = t),
            (r.prototype = Object.create(t && t.prototype)),
            (r.prototype.constructor = r),
            (r.of = function () {
              for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
              return ee().withMutations(function (r) {
                for (var e = 0; e < t.length; e += 2) {
                  if (e + 1 >= t.length)
                    throw new Error("Missing value for key: " + t[e]);
                  r.set(t[e], t[e + 1]);
                }
              });
            }),
            (r.prototype.toString = function () {
              return this.__toString("Map {", "}");
            }),
            (r.prototype.get = function (t, r) {
              return this._root ? this._root.get(0, void 0, t, r) : r;
            }),
            (r.prototype.set = function (t, r) {
              return ne(this, t, r);
            }),
            (r.prototype.remove = function (t) {
              return ne(this, t, i);
            }),
            (r.prototype.deleteAll = function (t) {
              var r = I(t);
              return 0 === r.size
                ? this
                : this.withMutations(function (t) {
                    r.forEach(function (r) {
                      return t.remove(r);
                    });
                  });
            }),
            (r.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                ? ((this.size = 0),
                  (this._root = null),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : ee();
            }),
            (r.prototype.sort = function (t) {
              return Re(Xt(this, t));
            }),
            (r.prototype.sortBy = function (t, r) {
              return Re(Xt(this, r, t));
            }),
            (r.prototype.map = function (t, r) {
              return this.withMutations(function (e) {
                e.forEach(function (n, i) {
                  e.set(i, t.call(r, n, i, e));
                });
              });
            }),
            (r.prototype.__iterator = function (t, r) {
              return new Zr(this, t, r);
            }),
            (r.prototype.__iterate = function (t, r) {
              var e = this,
                n = 0;
              return (
                this._root &&
                  this._root.iterate(function (r) {
                    return n++, t(r[1], r[0], e);
                  }, r),
                n
              );
            }),
            (r.prototype.__ensureOwner = function (t) {
              return t === this.__ownerID
                ? this
                : t
                ? re(this.size, this._root, t, this.__hash)
                : 0 === this.size
                ? ee()
                : ((this.__ownerID = t), (this.__altered = !1), this);
            }),
            r
          );
        })(b);
        (exports.Map = Hr), (Hr.isMap = ct);
        var Jr = Hr.prototype;
        (Jr[at] = !0),
          (Jr[t] = Jr.remove),
          (Jr.removeAll = Jr.deleteAll),
          (Jr.setIn = mr),
          (Jr.removeIn = Jr.deleteIn = zr),
          (Jr.update = br),
          (Jr.updateIn = xr),
          (Jr.merge = Jr.concat = Or),
          (Jr.mergeWith = Er),
          (Jr.mergeDeep = Kr),
          (Jr.mergeDeepWith = Br),
          (Jr.mergeIn = Tr),
          (Jr.mergeDeepIn = Lr),
          (Jr.withMutations = Cr),
          (Jr.wasAltered = Pr),
          (Jr.asImmutable = Nr),
          (Jr["@@transducer/init"] = Jr.asMutable = Wr),
          (Jr["@@transducer/step"] = function (t, r) {
            return t.set(r[0], r[1]);
          }),
          (Jr["@@transducer/result"] = function (t) {
            return t.asImmutable();
          });
        var Vr = function (t, r) {
          (this.ownerID = t), (this.entries = r);
        };
        (Vr.prototype.get = function (t, r, e, n) {
          for (var i = this.entries, o = 0, u = i.length; o < u; o++)
            if (pt(e, i[o][0])) return i[o][1];
          return n;
        }),
          (Vr.prototype.update = function (t, r, e, n, o, s, a) {
            for (
              var c = o === i, f = this.entries, h = 0, p = f.length;
              h < p && !pt(n, f[h][0]);
              h++
            );
            var _ = h < p;
            if (_ ? f[h][1] === o : c) return this;
            if ((u(a), (c || !_) && u(s), !c || 1 !== f.length)) {
              if (!_ && !c && f.length >= le) return se(t, f, n, o);
              var l = t && t === this.ownerID,
                v = l ? f : or(f);
              return (
                _
                  ? c
                    ? h === p - 1
                      ? v.pop()
                      : (v[h] = v.pop())
                    : (v[h] = [n, o])
                  : v.push([n, o]),
                l ? ((this.entries = v), this) : new Vr(t, v)
              );
            }
          });
        var Yr = function (t, r, e) {
          (this.ownerID = t), (this.bitmap = r), (this.nodes = e);
        };
        (Yr.prototype.get = function (t, e, i, o) {
          void 0 === e && (e = yt(i));
          var u = 1 << ((0 === t ? e : e >>> t) & n),
            s = this.bitmap;
          return 0 == (s & u)
            ? o
            : this.nodes[fe(s & (u - 1))].get(t + r, e, i, o);
        }),
          (Yr.prototype.update = function (t, e, o, u, s, a, c) {
            void 0 === o && (o = yt(u));
            var f = (0 === e ? o : o >>> e) & n,
              h = 1 << f,
              p = this.bitmap,
              _ = 0 != (p & h);
            if (!_ && s === i) return this;
            var l = fe(p & (h - 1)),
              v = this.nodes,
              y = _ ? v[l] : void 0,
              d = ie(y, t, e + r, o, u, s, a, c);
            if (d === y) return this;
            if (!_ && d && v.length >= ve) return ce(t, v, p, f, d);
            if (_ && !d && 2 === v.length && oe(v[1 ^ l])) return v[1 ^ l];
            if (_ && d && 1 === v.length && oe(d)) return d;
            var g = t && t === this.ownerID,
              w = _ ? (d ? p : p ^ h) : p | h,
              m = _ ? (d ? he(v, l, d, g) : _e(v, l, g)) : pe(v, l, d, g);
            return g
              ? ((this.bitmap = w), (this.nodes = m), this)
              : new Yr(t, w, m);
          });
        var Qr = function (t, r, e) {
          (this.ownerID = t), (this.count = r), (this.nodes = e);
        };
        (Qr.prototype.get = function (t, e, i, o) {
          void 0 === e && (e = yt(i));
          var u = (0 === t ? e : e >>> t) & n,
            s = this.nodes[u];
          return s ? s.get(t + r, e, i, o) : o;
        }),
          (Qr.prototype.update = function (t, e, o, u, s, a, c) {
            void 0 === o && (o = yt(u));
            var f = (0 === e ? o : o >>> e) & n,
              h = s === i,
              p = this.nodes,
              _ = p[f];
            if (h && !_) return this;
            var l = ie(_, t, e + r, o, u, s, a, c);
            if (l === _) return this;
            var v = this.count;
            if (_) {
              if (!l && --v < ye) return ae(t, p, v, f);
            } else v++;
            var y = t && t === this.ownerID,
              d = he(p, f, l, y);
            return y
              ? ((this.count = v), (this.nodes = d), this)
              : new Qr(t, v, d);
          });
        var Xr = function (t, r, e) {
          (this.ownerID = t), (this.keyHash = r), (this.entries = e);
        };
        (Xr.prototype.get = function (t, r, e, n) {
          for (var i = this.entries, o = 0, u = i.length; o < u; o++)
            if (pt(e, i[o][0])) return i[o][1];
          return n;
        }),
          (Xr.prototype.update = function (t, r, e, n, o, s, a) {
            void 0 === e && (e = yt(n));
            var c = o === i;
            if (e !== this.keyHash)
              return c ? this : (u(a), u(s), ue(this, t, r, e, [n, o]));
            for (
              var f = this.entries, h = 0, p = f.length;
              h < p && !pt(n, f[h][0]);
              h++
            );
            var _ = h < p;
            if (_ ? f[h][1] === o : c) return this;
            if ((u(a), (c || !_) && u(s), c && 2 === p))
              return new Fr(t, this.keyHash, f[1 ^ h]);
            var l = t && t === this.ownerID,
              v = l ? f : or(f);
            return (
              _
                ? c
                  ? h === p - 1
                    ? v.pop()
                    : (v[h] = v.pop())
                  : (v[h] = [n, o])
                : v.push([n, o]),
              l ? ((this.entries = v), this) : new Xr(t, this.keyHash, v)
            );
          });
        var Fr = function (t, r, e) {
          (this.ownerID = t), (this.keyHash = r), (this.entry = e);
        };
        (Fr.prototype.get = function (t, r, e, n) {
          return pt(e, this.entry[0]) ? this.entry[1] : n;
        }),
          (Fr.prototype.update = function (t, r, e, n, o, s, a) {
            var c = o === i,
              f = pt(n, this.entry[0]);
            return (f ? o === this.entry[1] : c)
              ? this
              : (u(a),
                c
                  ? void u(s)
                  : f
                  ? t && t === this.ownerID
                    ? ((this.entry[1] = o), this)
                    : new Fr(t, this.keyHash, [n, o])
                  : (u(s), ue(this, t, r, yt(n), [n, o])));
          }),
          (Vr.prototype.iterate = Xr.prototype.iterate =
            function (t, r) {
              for (var e = this.entries, n = 0, i = e.length - 1; n <= i; n++)
                if (!1 === t(e[r ? i - n : n])) return !1;
            }),
          (Yr.prototype.iterate = Qr.prototype.iterate =
            function (t, r) {
              for (var e = this.nodes, n = 0, i = e.length - 1; n <= i; n++) {
                var o = e[r ? i - n : n];
                if (o && !1 === o.iterate(t, r)) return !1;
              }
            }),
          (Fr.prototype.iterate = function (t, r) {
            return t(this.entry);
          });
        var Gr,
          Zr = (function (t) {
            function r(t, r, e) {
              (this._type = r),
                (this._reverse = e),
                (this._stack = t._root && te(t._root));
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.next = function () {
                for (var t = this._type, r = this._stack; r; ) {
                  var e = r.node,
                    n = r.index++,
                    i = void 0;
                  if (e.entry) {
                    if (0 === n) return $r(t, e.entry);
                  } else if (e.entries) {
                    if (n <= (i = e.entries.length - 1))
                      return $r(t, e.entries[this._reverse ? i - n : n]);
                  } else if (n <= (i = e.nodes.length - 1)) {
                    var o = e.nodes[this._reverse ? i - n : n];
                    if (o) {
                      if (o.entry) return $r(t, o.entry);
                      r = this._stack = te(o, r);
                    }
                    continue;
                  }
                  r = this._stack = this._stack.__prev;
                }
                return N();
              }),
              r
            );
          })(C);
        function $r(t, r) {
          return W(t, r[0], r[1]);
        }
        function te(t, r) {
          return { node: t, index: 0, __prev: r };
        }
        function re(t, r, e, n) {
          var i = Object.create(Jr);
          return (
            (i.size = t),
            (i._root = r),
            (i.__ownerID = e),
            (i.__hash = n),
            (i.__altered = !1),
            i
          );
        }
        function ee() {
          return Gr || (Gr = re(0));
        }
        function ne(t, r, e) {
          var n, u;
          if (t._root) {
            var s = o(),
              a = o();
            if (
              ((n = ie(t._root, t.__ownerID, 0, void 0, r, e, s, a)), !a.value)
            )
              return t;
            u = t.size + (s.value ? (e === i ? -1 : 1) : 0);
          } else {
            if (e === i) return t;
            (u = 1), (n = new Vr(t.__ownerID, [[r, e]]));
          }
          return t.__ownerID
            ? ((t.size = u),
              (t._root = n),
              (t.__hash = void 0),
              (t.__altered = !0),
              t)
            : n
            ? re(u, n)
            : ee();
        }
        function ie(t, r, e, n, o, s, a, c) {
          return t
            ? t.update(r, e, n, o, s, a, c)
            : s === i
            ? t
            : (u(c), u(a), new Fr(r, n, [o, s]));
        }
        function oe(t) {
          return t.constructor === Fr || t.constructor === Xr;
        }
        function ue(t, e, i, o, u) {
          if (t.keyHash === o) return new Xr(e, o, [t.entry, u]);
          var s,
            a = (0 === i ? t.keyHash : t.keyHash >>> i) & n,
            c = (0 === i ? o : o >>> i) & n,
            f =
              a === c
                ? [ue(t, e, i + r, o, u)]
                : ((s = new Fr(e, o, u)), a < c ? [t, s] : [s, t]);
          return new Yr(e, (1 << a) | (1 << c), f);
        }
        function se(t, r, e, n) {
          t || (t = new s());
          for (var i = new Fr(t, yt(e), [e, n]), o = 0; o < r.length; o++) {
            var u = r[o];
            i = i.update(t, 0, void 0, u[0], u[1]);
          }
          return i;
        }
        function ae(t, r, e, n) {
          for (
            var i = 0, o = 0, u = new Array(e), s = 0, a = 1, c = r.length;
            s < c;
            s++, a <<= 1
          ) {
            var f = r[s];
            void 0 !== f && s !== n && ((i |= a), (u[o++] = f));
          }
          return new Yr(t, i, u);
        }
        function ce(t, r, n, i, o) {
          for (var u = 0, s = new Array(e), a = 0; 0 !== n; a++, n >>>= 1)
            s[a] = 1 & n ? r[u++] : void 0;
          return (s[i] = o), new Qr(t, u + 1, s);
        }
        function fe(t) {
          return (
            (t =
              ((t =
                (858993459 & (t -= (t >> 1) & 1431655765)) +
                ((t >> 2) & 858993459)) +
                (t >> 4)) &
              252645135),
            (t += t >> 8),
            127 & (t += t >> 16)
          );
        }
        function he(t, r, e, n) {
          var i = n ? t : or(t);
          return (i[r] = e), i;
        }
        function pe(t, r, e, n) {
          var i = t.length + 1;
          if (n && r + 1 === i) return (t[r] = e), t;
          for (var o = new Array(i), u = 0, s = 0; s < i; s++)
            s === r ? ((o[s] = e), (u = -1)) : (o[s] = t[s + u]);
          return o;
        }
        function _e(t, r, e) {
          var n = t.length - 1;
          if (e && r === n) return t.pop(), t;
          for (var i = new Array(n), o = 0, u = 0; u < n; u++)
            u === r && (o = 1), (i[u] = t[u + o]);
          return i;
        }
        var le = e / 4,
          ve = e / 2,
          ye = e / 4,
          de = "@@__IMMUTABLE_LIST__@@";
        function ge(t) {
          return Boolean(t && t[de]);
        }
        var we = (function (t) {
          function i(n) {
            var i = Oe();
            if (null == n) return i;
            if (ge(n)) return n;
            var o = t(n),
              u = o.size;
            return 0 === u
              ? i
              : (sr(u),
                u > 0 && u < e
                  ? xe(0, u, r, null, new Se(o.toArray()))
                  : i.withMutations(function (t) {
                      t.setSize(u),
                        o.forEach(function (r, e) {
                          return t.set(e, r);
                        });
                    }));
          }
          return (
            t && (i.__proto__ = t),
            (i.prototype = Object.create(t && t.prototype)),
            (i.prototype.constructor = i),
            (i.of = function () {
              return this(arguments);
            }),
            (i.prototype.toString = function () {
              return this.__toString("List [", "]");
            }),
            (i.prototype.get = function (t, r) {
              if ((t = c(this, t)) >= 0 && t < this.size) {
                var e = De(this, (t += this._origin));
                return e && e.array[t & n];
              }
              return r;
            }),
            (i.prototype.set = function (t, r) {
              return Ee(this, t, r);
            }),
            (i.prototype.remove = function (t) {
              return this.has(t)
                ? 0 === t
                  ? this.shift()
                  : t === this.size - 1
                  ? this.pop()
                  : this.splice(t, 1)
                : this;
            }),
            (i.prototype.insert = function (t, r) {
              return this.splice(t, 0, r);
            }),
            (i.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                ? ((this.size = this._origin = this._capacity = 0),
                  (this._level = r),
                  (this._root = this._tail = null),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : Oe();
            }),
            (i.prototype.push = function () {
              var t = arguments,
                r = this.size;
              return this.withMutations(function (e) {
                Ae(e, 0, r + t.length);
                for (var n = 0; n < t.length; n++) e.set(r + n, t[n]);
              });
            }),
            (i.prototype.pop = function () {
              return Ae(this, 0, -1);
            }),
            (i.prototype.unshift = function () {
              var t = arguments;
              return this.withMutations(function (r) {
                Ae(r, -t.length);
                for (var e = 0; e < t.length; e++) r.set(e, t[e]);
              });
            }),
            (i.prototype.shift = function () {
              return Ae(this, 1);
            }),
            (i.prototype.concat = function () {
              for (
                var r = arguments, e = [], n = 0;
                n < arguments.length;
                n++
              ) {
                var i = r[n],
                  o = t("string" != typeof i && P(i) ? i : [i]);
                0 !== o.size && e.push(o);
              }
              return 0 === e.length
                ? this
                : 0 !== this.size || this.__ownerID || 1 !== e.length
                ? this.withMutations(function (t) {
                    e.forEach(function (r) {
                      return r.forEach(function (r) {
                        return t.push(r);
                      });
                    });
                  })
                : this.constructor(e[0]);
            }),
            (i.prototype.setSize = function (t) {
              return Ae(this, 0, t);
            }),
            (i.prototype.map = function (t, r) {
              var e = this;
              return this.withMutations(function (n) {
                for (var i = 0; i < e.size; i++)
                  n.set(i, t.call(r, n.get(i), i, n));
              });
            }),
            (i.prototype.slice = function (t, r) {
              var e = this.size;
              return h(t, r, e) ? this : Ae(this, p(t, e), _(r, e));
            }),
            (i.prototype.__iterator = function (t, r) {
              var e = r ? this.size : 0,
                n = be(this, r);
              return new C(function () {
                var i = n();
                return i === Ie ? N() : W(t, r ? --e : e++, i);
              });
            }),
            (i.prototype.__iterate = function (t, r) {
              for (
                var e, n = r ? this.size : 0, i = be(this, r);
                (e = i()) !== Ie && !1 !== t(e, r ? --n : n++, this);

              );
              return n;
            }),
            (i.prototype.__ensureOwner = function (t) {
              return t === this.__ownerID
                ? this
                : t
                ? xe(
                    this._origin,
                    this._capacity,
                    this._level,
                    this._root,
                    this._tail,
                    t,
                    this.__hash
                  )
                : 0 === this.size
                ? Oe()
                : ((this.__ownerID = t), (this.__altered = !1), this);
            }),
            i
          );
        })(x);
        (exports.List = we), (we.isList = ge);
        var me = we.prototype;
        (me[de] = !0),
          (me[t] = me.remove),
          (me.merge = me.concat),
          (me.setIn = mr),
          (me.deleteIn = me.removeIn = zr),
          (me.update = br),
          (me.updateIn = xr),
          (me.mergeIn = Tr),
          (me.mergeDeepIn = Lr),
          (me.withMutations = Cr),
          (me.wasAltered = Pr),
          (me.asImmutable = Nr),
          (me["@@transducer/init"] = me.asMutable = Wr),
          (me["@@transducer/step"] = function (t, r) {
            return t.push(r);
          }),
          (me["@@transducer/result"] = function (t) {
            return t.asImmutable();
          });
        var Se = function (t, r) {
          (this.array = t), (this.ownerID = r);
        };
        (Se.prototype.removeBefore = function (t, e, i) {
          if (i === e ? 1 << e : 0 === this.array.length) return this;
          var o = (i >>> e) & n;
          if (o >= this.array.length) return new Se([], t);
          var u,
            s = 0 === o;
          if (e > 0) {
            var a = this.array[o];
            if ((u = a && a.removeBefore(t, e - r, i)) === a && s) return this;
          }
          if (s && !u) return this;
          var c = qe(this, t);
          if (!s) for (var f = 0; f < o; f++) c.array[f] = void 0;
          return u && (c.array[o] = u), c;
        }),
          (Se.prototype.removeAfter = function (t, e, i) {
            if (i === (e ? 1 << e : 0) || 0 === this.array.length) return this;
            var o,
              u = ((i - 1) >>> e) & n;
            if (u >= this.array.length) return this;
            if (e > 0) {
              var s = this.array[u];
              if (
                (o = s && s.removeAfter(t, e - r, i)) === s &&
                u === this.array.length - 1
              )
                return this;
            }
            var a = qe(this, t);
            return a.array.splice(u + 1), o && (a.array[u] = o), a;
          });
        var ze,
          Ie = {};
        function be(t, n) {
          var i = t._origin,
            o = t._capacity,
            u = je(o),
            s = t._tail;
          return a(t._root, t._level, 0);
          function a(t, c, f) {
            return 0 === c
              ? (function (t, r) {
                  var a = r === u ? s && s.array : t && t.array,
                    c = r > i ? 0 : i - r,
                    f = o - r;
                  f > e && (f = e);
                  return function () {
                    if (c === f) return Ie;
                    var t = n ? --f : c++;
                    return a && a[t];
                  };
                })(t, f)
              : (function (t, u, s) {
                  var c,
                    f = t && t.array,
                    h = s > i ? 0 : (i - s) >> u,
                    p = 1 + ((o - s) >> u);
                  p > e && (p = e);
                  return function () {
                    for (;;) {
                      if (c) {
                        var t = c();
                        if (t !== Ie) return t;
                        c = null;
                      }
                      if (h === p) return Ie;
                      var e = n ? --p : h++;
                      c = a(f && f[e], u - r, s + (e << u));
                    }
                  };
                })(t, c, f);
          }
        }
        function xe(t, r, e, n, i, o, u) {
          var s = Object.create(me);
          return (
            (s.size = r - t),
            (s._origin = t),
            (s._capacity = r),
            (s._level = e),
            (s._root = n),
            (s._tail = i),
            (s.__ownerID = o),
            (s.__hash = u),
            (s.__altered = !1),
            s
          );
        }
        function Oe() {
          return ze || (ze = xe(0, 0, r));
        }
        function Ee(t, r, e) {
          if ((r = c(t, r)) != r) return t;
          if (r >= t.size || r < 0)
            return t.withMutations(function (t) {
              r < 0 ? Ae(t, r).set(0, e) : Ae(t, 0, r + 1).set(r, e);
            });
          r += t._origin;
          var n = t._tail,
            i = t._root,
            u = o();
          return (
            r >= je(t._capacity)
              ? (n = Me(n, t.__ownerID, 0, r, e, u))
              : (i = Me(i, t.__ownerID, t._level, r, e, u)),
            u.value
              ? t.__ownerID
                ? ((t._root = i),
                  (t._tail = n),
                  (t.__hash = void 0),
                  (t.__altered = !0),
                  t)
                : xe(t._origin, t._capacity, t._level, i, n)
              : t
          );
        }
        function Me(t, e, i, o, s, a) {
          var c,
            f = (o >>> i) & n,
            h = t && f < t.array.length;
          if (!h && void 0 === s) return t;
          if (i > 0) {
            var p = t && t.array[f],
              _ = Me(p, e, i - r, o, s, a);
            return _ === p ? t : (((c = qe(t, e)).array[f] = _), c);
          }
          return h && t.array[f] === s
            ? t
            : (a && u(a),
              (c = qe(t, e)),
              void 0 === s && f === c.array.length - 1
                ? c.array.pop()
                : (c.array[f] = s),
              c);
        }
        function qe(t, r) {
          return r && t && r === t.ownerID
            ? t
            : new Se(t ? t.array.slice() : [], r);
        }
        function De(t, e) {
          if (e >= je(t._capacity)) return t._tail;
          if (e < 1 << (t._level + r)) {
            for (var i = t._root, o = t._level; i && o > 0; )
              (i = i.array[(e >>> o) & n]), (o -= r);
            return i;
          }
        }
        function Ae(t, e, i) {
          void 0 !== e && (e |= 0), void 0 !== i && (i |= 0);
          var o = t.__ownerID || new s(),
            u = t._origin,
            a = t._capacity,
            c = u + e,
            f = void 0 === i ? a : i < 0 ? a + i : u + i;
          if (c === u && f === a) return t;
          if (c >= f) return t.clear();
          for (var h = t._level, p = t._root, _ = 0; c + _ < 0; )
            (p = new Se(p && p.array.length ? [void 0, p] : [], o)),
              (_ += 1 << (h += r));
          _ && ((c += _), (u += _), (f += _), (a += _));
          for (var l = je(a), v = je(f); v >= 1 << (h + r); )
            (p = new Se(p && p.array.length ? [p] : [], o)), (h += r);
          var y = t._tail,
            d = v < l ? De(t, f - 1) : v > l ? new Se([], o) : y;
          if (y && v > l && c < a && y.array.length) {
            for (var g = (p = qe(p, o)), w = h; w > r; w -= r) {
              var m = (l >>> w) & n;
              g = g.array[m] = qe(g.array[m], o);
            }
            g.array[(l >>> r) & n] = y;
          }
          if ((f < a && (d = d && d.removeAfter(o, 0, f)), c >= v))
            (c -= v),
              (f -= v),
              (h = r),
              (p = null),
              (d = d && d.removeBefore(o, 0, c));
          else if (c > u || v < l) {
            for (_ = 0; p; ) {
              var S = (c >>> h) & n;
              if ((S !== v >>> h) & n) break;
              S && (_ += (1 << h) * S), (h -= r), (p = p.array[S]);
            }
            p && c > u && (p = p.removeBefore(o, h, c - _)),
              p && v < l && (p = p.removeAfter(o, h, v - _)),
              _ && ((c -= _), (f -= _));
          }
          return t.__ownerID
            ? ((t.size = f - c),
              (t._origin = c),
              (t._capacity = f),
              (t._level = h),
              (t._root = p),
              (t._tail = d),
              (t.__hash = void 0),
              (t.__altered = !0),
              t)
            : xe(c, f, h, p, d);
        }
        function je(t) {
          return t < e ? 0 : ((t - 1) >>> r) << r;
        }
        var ke,
          Re = (function (t) {
            function r(t) {
              return null == t
                ? Ke()
                : ft(t)
                ? t
                : Ke().withMutations(function (r) {
                    var e = b(t);
                    sr(e.size),
                      e.forEach(function (t, e) {
                        return r.set(e, t);
                      });
                  });
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.of = function () {
                return this(arguments);
              }),
              (r.prototype.toString = function () {
                return this.__toString("OrderedMap {", "}");
              }),
              (r.prototype.get = function (t, r) {
                var e = this._map.get(t);
                return void 0 !== e ? this._list.get(e)[1] : r;
              }),
              (r.prototype.clear = function () {
                return 0 === this.size
                  ? this
                  : this.__ownerID
                  ? ((this.size = 0),
                    this._map.clear(),
                    this._list.clear(),
                    this)
                  : Ke();
              }),
              (r.prototype.set = function (t, r) {
                return Be(this, t, r);
              }),
              (r.prototype.remove = function (t) {
                return Be(this, t, i);
              }),
              (r.prototype.wasAltered = function () {
                return this._map.wasAltered() || this._list.wasAltered();
              }),
              (r.prototype.__iterate = function (t, r) {
                var e = this;
                return this._list.__iterate(function (r) {
                  return r && t(r[1], r[0], e);
                }, r);
              }),
              (r.prototype.__iterator = function (t, r) {
                return this._list.fromEntrySeq().__iterator(t, r);
              }),
              (r.prototype.__ensureOwner = function (t) {
                if (t === this.__ownerID) return this;
                var r = this._map.__ensureOwner(t),
                  e = this._list.__ensureOwner(t);
                return t
                  ? Ue(r, e, t, this.__hash)
                  : 0 === this.size
                  ? Ke()
                  : ((this.__ownerID = t),
                    (this._map = r),
                    (this._list = e),
                    this);
              }),
              r
            );
          })(Hr);
        function Ue(t, r, e, n) {
          var i = Object.create(Re.prototype);
          return (
            (i.size = t ? t.size : 0),
            (i._map = t),
            (i._list = r),
            (i.__ownerID = e),
            (i.__hash = n),
            i
          );
        }
        function Ke() {
          return ke || (ke = Ue(ee(), Oe()));
        }
        function Be(t, r, n) {
          var o,
            u,
            s = t._map,
            a = t._list,
            c = s.get(r),
            f = void 0 !== c;
          if (n === i) {
            if (!f) return t;
            a.size >= e && a.size >= 2 * s.size
              ? ((o = (u = a.filter(function (t, r) {
                  return void 0 !== t && c !== r;
                }))
                  .toKeyedSeq()
                  .map(function (t) {
                    return t[0];
                  })
                  .flip()
                  .toMap()),
                t.__ownerID && (o.__ownerID = u.__ownerID = t.__ownerID))
              : ((o = s.remove(r)),
                (u = c === a.size - 1 ? a.pop() : a.set(c, void 0)));
          } else if (f) {
            if (n === a.get(c)[1]) return t;
            (o = s), (u = a.set(c, [r, n]));
          } else (o = s.set(r, a.size)), (u = a.set(a.size, [r, n]));
          return t.__ownerID
            ? ((t.size = o.size),
              (t._map = o),
              (t._list = u),
              (t.__hash = void 0),
              t)
            : Ue(o, u);
        }
        (exports.OrderedMap = Re),
          (Re.isOrderedMap = ft),
          (Re.prototype[j] = !0),
          (Re.prototype[t] = Re.prototype.remove);
        var Te = "@@__IMMUTABLE_STACK__@@";
        function Le(t) {
          return Boolean(t && t[Te]);
        }
        var Ce = (function (t) {
          function r(t) {
            return null == t ? He() : Le(t) ? t : He().pushAll(t);
          }
          return (
            t && (r.__proto__ = t),
            (r.prototype = Object.create(t && t.prototype)),
            (r.prototype.constructor = r),
            (r.of = function () {
              return this(arguments);
            }),
            (r.prototype.toString = function () {
              return this.__toString("Stack [", "]");
            }),
            (r.prototype.get = function (t, r) {
              var e = this._head;
              for (t = c(this, t); e && t--; ) e = e.next;
              return e ? e.value : r;
            }),
            (r.prototype.peek = function () {
              return this._head && this._head.value;
            }),
            (r.prototype.push = function () {
              var t = arguments;
              if (0 === arguments.length) return this;
              for (
                var r = this.size + arguments.length,
                  e = this._head,
                  n = arguments.length - 1;
                n >= 0;
                n--
              )
                e = { value: t[n], next: e };
              return this.__ownerID
                ? ((this.size = r),
                  (this._head = e),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : Pe(r, e);
            }),
            (r.prototype.pushAll = function (r) {
              if (0 === (r = t(r)).size) return this;
              if (0 === this.size && Le(r)) return r;
              sr(r.size);
              var e = this.size,
                n = this._head;
              return (
                r.__iterate(function (t) {
                  e++, (n = { value: t, next: n });
                }, !0),
                this.__ownerID
                  ? ((this.size = e),
                    (this._head = n),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : Pe(e, n)
              );
            }),
            (r.prototype.pop = function () {
              return this.slice(1);
            }),
            (r.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                ? ((this.size = 0),
                  (this._head = void 0),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : He();
            }),
            (r.prototype.slice = function (r, e) {
              if (h(r, e, this.size)) return this;
              var n = p(r, this.size);
              if (_(e, this.size) !== this.size)
                return t.prototype.slice.call(this, r, e);
              for (var i = this.size - n, o = this._head; n--; ) o = o.next;
              return this.__ownerID
                ? ((this.size = i),
                  (this._head = o),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : Pe(i, o);
            }),
            (r.prototype.__ensureOwner = function (t) {
              return t === this.__ownerID
                ? this
                : t
                ? Pe(this.size, this._head, t, this.__hash)
                : 0 === this.size
                ? He()
                : ((this.__ownerID = t), (this.__altered = !1), this);
            }),
            (r.prototype.__iterate = function (t, r) {
              var e = this;
              if (r)
                return new $(this.toArray()).__iterate(function (r, n) {
                  return t(r, n, e);
                }, r);
              for (
                var n = 0, i = this._head;
                i && !1 !== t(i.value, n++, this);

              )
                i = i.next;
              return n;
            }),
            (r.prototype.__iterator = function (t, r) {
              if (r) return new $(this.toArray()).__iterator(t, r);
              var e = 0,
                n = this._head;
              return new C(function () {
                if (n) {
                  var r = n.value;
                  return (n = n.next), W(t, e++, r);
                }
                return N();
              });
            }),
            r
          );
        })(x);
        (exports.Stack = Ce), (Ce.isStack = Le);
        var We,
          Ne = Ce.prototype;
        function Pe(t, r, e, n) {
          var i = Object.create(Ne);
          return (
            (i.size = t),
            (i._head = r),
            (i.__ownerID = e),
            (i.__hash = n),
            (i.__altered = !1),
            i
          );
        }
        function He() {
          return We || (We = Pe(0));
        }
        (Ne[Te] = !0),
          (Ne.shift = Ne.pop),
          (Ne.unshift = Ne.push),
          (Ne.unshiftAll = Ne.pushAll),
          (Ne.withMutations = Cr),
          (Ne.wasAltered = Pr),
          (Ne.asImmutable = Nr),
          (Ne["@@transducer/init"] = Ne.asMutable = Wr),
          (Ne["@@transducer/step"] = function (t, r) {
            return t.unshift(r);
          }),
          (Ne["@@transducer/result"] = function (t) {
            return t.asImmutable();
          });
        var Je = "@@__IMMUTABLE_SET__@@";
        function Ve(t) {
          return Boolean(t && t[Je]);
        }
        function Ye(t) {
          return Ve(t) && k(t);
        }
        function Qe(t, r) {
          if (t === r) return !0;
          if (
            !d(r) ||
            (void 0 !== t.size && void 0 !== r.size && t.size !== r.size) ||
            (void 0 !== t.__hash &&
              void 0 !== r.__hash &&
              t.__hash !== r.__hash) ||
            w(t) !== w(r) ||
            S(t) !== S(r) ||
            k(t) !== k(r)
          )
            return !1;
          if (0 === t.size && 0 === r.size) return !0;
          var e = !z(t);
          if (k(t)) {
            var n = t.entries();
            return (
              r.every(function (t, r) {
                var i = n.next().value;
                return i && pt(i[1], t) && (e || pt(i[0], r));
              }) && n.next().done
            );
          }
          var o = !1;
          if (void 0 === t.size)
            if (void 0 === r.size)
              "function" == typeof t.cacheResult && t.cacheResult();
            else {
              o = !0;
              var u = t;
              (t = r), (r = u);
            }
          var s = !0,
            a = r.__iterate(function (r, n) {
              if (e ? !t.has(r) : o ? !pt(r, t.get(n, i)) : !pt(t.get(n, i), r))
                return (s = !1), !1;
            });
          return s && t.size === a;
        }
        function Xe(t, r) {
          var e = function (e) {
            t.prototype[e] = r[e];
          };
          return (
            Object.keys(r).forEach(e),
            Object.getOwnPropertySymbols &&
              Object.getOwnPropertySymbols(r).forEach(e),
            t
          );
        }
        function Fe(t) {
          if (!t || "object" != typeof t) return t;
          if (!d(t)) {
            if (!fr(t)) return t;
            t = X(t);
          }
          if (w(t)) {
            var r = {};
            return (
              t.__iterate(function (t, e) {
                r[e] = Fe(t);
              }),
              r
            );
          }
          var e = [];
          return (
            t.__iterate(function (t) {
              e.push(Fe(t));
            }),
            e
          );
        }
        var Ge = (function (t) {
          function r(r) {
            return null == r
              ? en()
              : Ve(r) && !k(r)
              ? r
              : en().withMutations(function (e) {
                  var n = t(r);
                  sr(n.size),
                    n.forEach(function (t) {
                      return e.add(t);
                    });
                });
          }
          return (
            t && (r.__proto__ = t),
            (r.prototype = Object.create(t && t.prototype)),
            (r.prototype.constructor = r),
            (r.of = function () {
              return this(arguments);
            }),
            (r.fromKeys = function (t) {
              return this(b(t).keySeq());
            }),
            (r.intersect = function (t) {
              return (t = I(t).toArray()).length
                ? $e.intersect.apply(r(t.pop()), t)
                : en();
            }),
            (r.union = function (t) {
              return (t = I(t).toArray()).length
                ? $e.union.apply(r(t.pop()), t)
                : en();
            }),
            (r.prototype.toString = function () {
              return this.__toString("Set {", "}");
            }),
            (r.prototype.has = function (t) {
              return this._map.has(t);
            }),
            (r.prototype.add = function (t) {
              return tn(this, this._map.set(t, t));
            }),
            (r.prototype.remove = function (t) {
              return tn(this, this._map.remove(t));
            }),
            (r.prototype.clear = function () {
              return tn(this, this._map.clear());
            }),
            (r.prototype.map = function (t, r) {
              var e = this,
                n = [],
                i = [];
              return (
                this.forEach(function (o) {
                  var u = t.call(r, o, o, e);
                  u !== o && (n.push(o), i.push(u));
                }),
                this.withMutations(function (t) {
                  n.forEach(function (r) {
                    return t.remove(r);
                  }),
                    i.forEach(function (r) {
                      return t.add(r);
                    });
                })
              );
            }),
            (r.prototype.union = function () {
              for (var r = [], e = arguments.length; e--; ) r[e] = arguments[e];
              return 0 ===
                (r = r.filter(function (t) {
                  return 0 !== t.size;
                })).length
                ? this
                : 0 !== this.size || this.__ownerID || 1 !== r.length
                ? this.withMutations(function (e) {
                    for (var n = 0; n < r.length; n++)
                      t(r[n]).forEach(function (t) {
                        return e.add(t);
                      });
                  })
                : this.constructor(r[0]);
            }),
            (r.prototype.intersect = function () {
              for (var r = [], e = arguments.length; e--; ) r[e] = arguments[e];
              if (0 === r.length) return this;
              r = r.map(function (r) {
                return t(r);
              });
              var n = [];
              return (
                this.forEach(function (t) {
                  r.every(function (r) {
                    return r.includes(t);
                  }) || n.push(t);
                }),
                this.withMutations(function (t) {
                  n.forEach(function (r) {
                    t.remove(r);
                  });
                })
              );
            }),
            (r.prototype.subtract = function () {
              for (var r = [], e = arguments.length; e--; ) r[e] = arguments[e];
              if (0 === r.length) return this;
              r = r.map(function (r) {
                return t(r);
              });
              var n = [];
              return (
                this.forEach(function (t) {
                  r.some(function (r) {
                    return r.includes(t);
                  }) && n.push(t);
                }),
                this.withMutations(function (t) {
                  n.forEach(function (r) {
                    t.remove(r);
                  });
                })
              );
            }),
            (r.prototype.sort = function (t) {
              return bn(Xt(this, t));
            }),
            (r.prototype.sortBy = function (t, r) {
              return bn(Xt(this, r, t));
            }),
            (r.prototype.wasAltered = function () {
              return this._map.wasAltered();
            }),
            (r.prototype.__iterate = function (t, r) {
              var e = this;
              return this._map.__iterate(function (r) {
                return t(r, r, e);
              }, r);
            }),
            (r.prototype.__iterator = function (t, r) {
              return this._map.__iterator(t, r);
            }),
            (r.prototype.__ensureOwner = function (t) {
              if (t === this.__ownerID) return this;
              var r = this._map.__ensureOwner(t);
              return t
                ? this.__make(r, t)
                : 0 === this.size
                ? this.__empty()
                : ((this.__ownerID = t), (this._map = r), this);
            }),
            r
          );
        })(O);
        (exports.Set = Ge), (Ge.isSet = Ve);
        var Ze,
          $e = Ge.prototype;
        function tn(t, r) {
          return t.__ownerID
            ? ((t.size = r.size), (t._map = r), t)
            : r === t._map
            ? t
            : 0 === r.size
            ? t.__empty()
            : t.__make(r);
        }
        function rn(t, r) {
          var e = Object.create($e);
          return (e.size = t ? t.size : 0), (e._map = t), (e.__ownerID = r), e;
        }
        function en() {
          return Ze || (Ze = rn(ee()));
        }
        ($e[Je] = !0),
          ($e[t] = $e.remove),
          ($e.merge = $e.concat = $e.union),
          ($e.withMutations = Cr),
          ($e.asImmutable = Nr),
          ($e["@@transducer/init"] = $e.asMutable = Wr),
          ($e["@@transducer/step"] = function (t, r) {
            return t.add(r);
          }),
          ($e["@@transducer/result"] = function (t) {
            return t.asImmutable();
          }),
          ($e.__empty = en),
          ($e.__make = rn);
        var nn,
          on = (function (t) {
            function r(t, e, n) {
              if (!(this instanceof r)) return new r(t, e, n);
              if (
                (ur(0 !== n, "Cannot step a Range by 0"),
                (t = t || 0),
                void 0 === e && (e = 1 / 0),
                (n = void 0 === n ? 1 : Math.abs(n)),
                e < t && (n = -n),
                (this._start = t),
                (this._end = e),
                (this._step = n),
                (this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1)),
                0 === this.size)
              ) {
                if (nn) return nn;
                nn = this;
              }
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.toString = function () {
                return 0 === this.size
                  ? "Range []"
                  : "Range [ " +
                      this._start +
                      "..." +
                      this._end +
                      (1 !== this._step ? " by " + this._step : "") +
                      " ]";
              }),
              (r.prototype.get = function (t, r) {
                return this.has(t) ? this._start + c(this, t) * this._step : r;
              }),
              (r.prototype.includes = function (t) {
                var r = (t - this._start) / this._step;
                return r >= 0 && r < this.size && r === Math.floor(r);
              }),
              (r.prototype.slice = function (t, e) {
                return h(t, e, this.size)
                  ? this
                  : ((t = p(t, this.size)),
                    (e = _(e, this.size)) <= t
                      ? new r(0, 0)
                      : new r(
                          this.get(t, this._end),
                          this.get(e, this._end),
                          this._step
                        ));
              }),
              (r.prototype.indexOf = function (t) {
                var r = t - this._start;
                if (r % this._step == 0) {
                  var e = r / this._step;
                  if (e >= 0 && e < this.size) return e;
                }
                return -1;
              }),
              (r.prototype.lastIndexOf = function (t) {
                return this.indexOf(t);
              }),
              (r.prototype.__iterate = function (t, r) {
                for (
                  var e = this.size,
                    n = this._step,
                    i = r ? this._start + (e - 1) * n : this._start,
                    o = 0;
                  o !== e && !1 !== t(i, r ? e - ++o : o++, this);

                )
                  i += r ? -n : n;
                return o;
              }),
              (r.prototype.__iterator = function (t, r) {
                var e = this.size,
                  n = this._step,
                  i = r ? this._start + (e - 1) * n : this._start,
                  o = 0;
                return new C(function () {
                  if (o === e) return N();
                  var u = i;
                  return (i += r ? -n : n), W(t, r ? e - ++o : o++, u);
                });
              }),
              (r.prototype.equals = function (t) {
                return t instanceof r
                  ? this._start === t._start &&
                      this._end === t._end &&
                      this._step === t._step
                  : Qe(this, t);
              }),
              r
            );
          })(G);
        function un(t, r, e) {
          for (var n = ar(r), o = 0; o !== n.length; )
            if ((t = _r(t, n[o++], i)) === i) return e;
          return t;
        }
        function sn(t, r) {
          return un(this, t, r);
        }
        function an(t, r) {
          return un(t, r, i) !== i;
        }
        function cn(t) {
          return an(this, t);
        }
        function fn() {
          sr(this.size);
          var t = {};
          return (
            this.__iterate(function (r, e) {
              t[e] = r;
            }),
            t
          );
        }
        (exports.Range = on),
          (I.isIterable = d),
          (I.isKeyed = w),
          (I.isIndexed = S),
          (I.isAssociative = z),
          (I.isOrdered = k),
          (I.Iterator = C),
          Xe(I, {
            toArray: function () {
              sr(this.size);
              var t = new Array(this.size || 0),
                r = w(this),
                e = 0;
              return (
                this.__iterate(function (n, i) {
                  t[e++] = r ? [i, n] : n;
                }),
                t
              );
            },
            toIndexedSeq: function () {
              return new kt(this);
            },
            toJS: function () {
              return Fe(this);
            },
            toKeyedSeq: function () {
              return new jt(this, !0);
            },
            toMap: function () {
              return Hr(this.toKeyedSeq());
            },
            toObject: fn,
            toOrderedMap: function () {
              return Re(this.toKeyedSeq());
            },
            toOrderedSet: function () {
              return bn(w(this) ? this.valueSeq() : this);
            },
            toSet: function () {
              return Ge(w(this) ? this.valueSeq() : this);
            },
            toSetSeq: function () {
              return new Rt(this);
            },
            toSeq: function () {
              return S(this)
                ? this.toIndexedSeq()
                : w(this)
                ? this.toKeyedSeq()
                : this.toSetSeq();
            },
            toStack: function () {
              return Ce(w(this) ? this.valueSeq() : this);
            },
            toList: function () {
              return we(w(this) ? this.valueSeq() : this);
            },
            toString: function () {
              return "[Collection]";
            },
            __toString: function (t, r) {
              return 0 === this.size
                ? t + r
                : t +
                    " " +
                    this.toSeq().map(this.__toStringMapper).join(", ") +
                    " " +
                    r;
            },
            concat: function () {
              for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
              return $t(this, Jt(this, t));
            },
            includes: function (t) {
              return this.some(function (r) {
                return pt(r, t);
              });
            },
            entries: function () {
              return this.__iterator(K);
            },
            every: function (t, r) {
              sr(this.size);
              var e = !0;
              return (
                this.__iterate(function (n, i, o) {
                  if (!t.call(r, n, i, o)) return (e = !1), !1;
                }),
                e
              );
            },
            filter: function (t, r) {
              return $t(this, Lt(this, t, r, !0));
            },
            find: function (t, r, e) {
              var n = this.findEntry(t, r);
              return n ? n[1] : e;
            },
            forEach: function (t, r) {
              return sr(this.size), this.__iterate(r ? t.bind(r) : t);
            },
            join: function (t) {
              sr(this.size), (t = void 0 !== t ? "" + t : ",");
              var r = "",
                e = !0;
              return (
                this.__iterate(function (n) {
                  e ? (e = !1) : (r += t), (r += null != n ? n.toString() : "");
                }),
                r
              );
            },
            keys: function () {
              return this.__iterator(R);
            },
            map: function (t, r) {
              return $t(this, Bt(this, t, r));
            },
            reduce: function (t, r, e) {
              return ln(this, t, r, e, arguments.length < 2, !1);
            },
            reduceRight: function (t, r, e) {
              return ln(this, t, r, e, arguments.length < 2, !0);
            },
            reverse: function () {
              return $t(this, Tt(this, !0));
            },
            slice: function (t, r) {
              return $t(this, Nt(this, t, r, !0));
            },
            some: function (t, r) {
              return !this.every(dn(t), r);
            },
            sort: function (t) {
              return $t(this, Xt(this, t));
            },
            values: function () {
              return this.__iterator(U);
            },
            butLast: function () {
              return this.slice(0, -1);
            },
            isEmpty: function () {
              return void 0 !== this.size
                ? 0 === this.size
                : !this.some(function () {
                    return !0;
                  });
            },
            count: function (t, r) {
              return a(t ? this.toSeq().filter(t, r) : this);
            },
            countBy: function (t, r) {
              return Ct(this, t, r);
            },
            equals: function (t) {
              return Qe(this, t);
            },
            entrySeq: function () {
              var t = this;
              if (t._cache) return new $(t._cache);
              var r = t.toSeq().map(yn).toIndexedSeq();
              return (
                (r.fromEntrySeq = function () {
                  return t.toSeq();
                }),
                r
              );
            },
            filterNot: function (t, r) {
              return this.filter(dn(t), r);
            },
            findEntry: function (t, r, e) {
              var n = e;
              return (
                this.__iterate(function (e, i, o) {
                  if (t.call(r, e, i, o)) return (n = [i, e]), !1;
                }),
                n
              );
            },
            findKey: function (t, r) {
              var e = this.findEntry(t, r);
              return e && e[0];
            },
            findLast: function (t, r, e) {
              return this.toKeyedSeq().reverse().find(t, r, e);
            },
            findLastEntry: function (t, r, e) {
              return this.toKeyedSeq().reverse().findEntry(t, r, e);
            },
            findLastKey: function (t, r) {
              return this.toKeyedSeq().reverse().findKey(t, r);
            },
            first: function (t) {
              return this.find(f, null, t);
            },
            flatMap: function (t, r) {
              return $t(this, Yt(this, t, r));
            },
            flatten: function (t) {
              return $t(this, Vt(this, t, !0));
            },
            fromEntrySeq: function () {
              return new Ut(this);
            },
            get: function (t, r) {
              return this.find(
                function (r, e) {
                  return pt(e, t);
                },
                void 0,
                r
              );
            },
            getIn: sn,
            groupBy: function (t, r) {
              return Wt(this, t, r);
            },
            has: function (t) {
              return this.get(t, i) !== i;
            },
            hasIn: cn,
            isSubset: function (t) {
              return (
                (t = "function" == typeof t.includes ? t : I(t)),
                this.every(function (r) {
                  return t.includes(r);
                })
              );
            },
            isSuperset: function (t) {
              return (t = "function" == typeof t.isSubset ? t : I(t)).isSubset(
                this
              );
            },
            keyOf: function (t) {
              return this.findKey(function (r) {
                return pt(r, t);
              });
            },
            keySeq: function () {
              return this.toSeq().map(vn).toIndexedSeq();
            },
            last: function (t) {
              return this.toSeq().reverse().first(t);
            },
            lastKeyOf: function (t) {
              return this.toKeyedSeq().reverse().keyOf(t);
            },
            max: function (t) {
              return Ft(this, t);
            },
            maxBy: function (t, r) {
              return Ft(this, r, t);
            },
            min: function (t) {
              return Ft(this, t ? gn(t) : mn);
            },
            minBy: function (t, r) {
              return Ft(this, r ? gn(r) : mn, t);
            },
            rest: function () {
              return this.slice(1);
            },
            skip: function (t) {
              return 0 === t ? this : this.slice(Math.max(0, t));
            },
            skipLast: function (t) {
              return 0 === t ? this : this.slice(0, -Math.max(0, t));
            },
            skipWhile: function (t, r) {
              return $t(this, Ht(this, t, r, !0));
            },
            skipUntil: function (t, r) {
              return this.skipWhile(dn(t), r);
            },
            sortBy: function (t, r) {
              return $t(this, Xt(this, r, t));
            },
            take: function (t) {
              return this.slice(0, Math.max(0, t));
            },
            takeLast: function (t) {
              return this.slice(-Math.max(0, t));
            },
            takeWhile: function (t, r) {
              return $t(this, Pt(this, t, r));
            },
            takeUntil: function (t, r) {
              return this.takeWhile(dn(t), r);
            },
            update: function (t) {
              return t(this);
            },
            valueSeq: function () {
              return this.toIndexedSeq();
            },
            hashCode: function () {
              return this.__hash || (this.__hash = Sn(this));
            },
          });
        var hn = I.prototype;
        (hn[y] = !0),
          (hn[L] = hn.values),
          (hn.toJSON = hn.toArray),
          (hn.__toStringMapper = hr),
          (hn.inspect = hn.toSource =
            function () {
              return this.toString();
            }),
          (hn.chain = hn.flatMap),
          (hn.contains = hn.includes),
          Xe(b, {
            flip: function () {
              return $t(this, Kt(this));
            },
            mapEntries: function (t, r) {
              var e = this,
                n = 0;
              return $t(
                this,
                this.toSeq()
                  .map(function (i, o) {
                    return t.call(r, [o, i], n++, e);
                  })
                  .fromEntrySeq()
              );
            },
            mapKeys: function (t, r) {
              var e = this;
              return $t(
                this,
                this.toSeq()
                  .flip()
                  .map(function (n, i) {
                    return t.call(r, n, i, e);
                  })
                  .flip()
              );
            },
          });
        var pn = b.prototype;
        (pn[g] = !0),
          (pn[L] = hn.entries),
          (pn.toJSON = fn),
          (pn.__toStringMapper = function (t, r) {
            return hr(r) + ": " + hr(t);
          }),
          Xe(x, {
            toKeyedSeq: function () {
              return new jt(this, !1);
            },
            filter: function (t, r) {
              return $t(this, Lt(this, t, r, !1));
            },
            findIndex: function (t, r) {
              var e = this.findEntry(t, r);
              return e ? e[0] : -1;
            },
            indexOf: function (t) {
              var r = this.keyOf(t);
              return void 0 === r ? -1 : r;
            },
            lastIndexOf: function (t) {
              var r = this.lastKeyOf(t);
              return void 0 === r ? -1 : r;
            },
            reverse: function () {
              return $t(this, Tt(this, !1));
            },
            slice: function (t, r) {
              return $t(this, Nt(this, t, r, !1));
            },
            splice: function (t, r) {
              var e = arguments.length;
              if (((r = Math.max(r || 0, 0)), 0 === e || (2 === e && !r)))
                return this;
              t = p(t, t < 0 ? this.count() : this.size);
              var n = this.slice(0, t);
              return $t(
                this,
                1 === e ? n : n.concat(or(arguments, 2), this.slice(t + r))
              );
            },
            findLastIndex: function (t, r) {
              var e = this.findLastEntry(t, r);
              return e ? e[0] : -1;
            },
            first: function (t) {
              return this.get(0, t);
            },
            flatten: function (t) {
              return $t(this, Vt(this, t, !1));
            },
            get: function (t, r) {
              return (t = c(this, t)) < 0 ||
                this.size === 1 / 0 ||
                (void 0 !== this.size && t > this.size)
                ? r
                : this.find(
                    function (r, e) {
                      return e === t;
                    },
                    void 0,
                    r
                  );
            },
            has: function (t) {
              return (
                (t = c(this, t)) >= 0 &&
                (void 0 !== this.size
                  ? this.size === 1 / 0 || t < this.size
                  : -1 !== this.indexOf(t))
              );
            },
            interpose: function (t) {
              return $t(this, Qt(this, t));
            },
            interleave: function () {
              var t = [this].concat(or(arguments)),
                r = Zt(this.toSeq(), G.of, t),
                e = r.flatten(!0);
              return r.size && (e.size = r.size * t.length), $t(this, e);
            },
            keySeq: function () {
              return on(0, this.size);
            },
            last: function (t) {
              return this.get(-1, t);
            },
            skipWhile: function (t, r) {
              return $t(this, Ht(this, t, r, !1));
            },
            zip: function () {
              return $t(this, Zt(this, wn, [this].concat(or(arguments))));
            },
            zipAll: function () {
              return $t(this, Zt(this, wn, [this].concat(or(arguments)), !0));
            },
            zipWith: function (t) {
              var r = or(arguments);
              return (r[0] = this), $t(this, Zt(this, t, r));
            },
          });
        var _n = x.prototype;
        function ln(t, r, e, n, i, o) {
          return (
            sr(t.size),
            t.__iterate(function (t, o, u) {
              i ? ((i = !1), (e = t)) : (e = r.call(n, e, t, o, u));
            }, o),
            e
          );
        }
        function vn(t, r) {
          return r;
        }
        function yn(t, r) {
          return [r, t];
        }
        function dn(t) {
          return function () {
            return !t.apply(this, arguments);
          };
        }
        function gn(t) {
          return function () {
            return -t.apply(this, arguments);
          };
        }
        function wn() {
          return or(arguments);
        }
        function mn(t, r) {
          return t < r ? 1 : t > r ? -1 : 0;
        }
        function Sn(t) {
          if (t.size === 1 / 0) return 0;
          var r = k(t),
            e = w(t),
            n = r ? 1 : 0;
          return zn(
            t.__iterate(
              e
                ? r
                  ? function (t, r) {
                      n = (31 * n + In(yt(t), yt(r))) | 0;
                    }
                  : function (t, r) {
                      n = (n + In(yt(t), yt(r))) | 0;
                    }
                : r
                ? function (t) {
                    n = (31 * n + yt(t)) | 0;
                  }
                : function (t) {
                    n = (n + yt(t)) | 0;
                  }
            ),
            n
          );
        }
        function zn(t, r) {
          return (
            (r = _t(r, 3432918353)),
            (r = _t((r << 15) | (r >>> -15), 461845907)),
            (r = _t((r << 13) | (r >>> -13), 5)),
            (r = _t((r = ((r + 3864292196) | 0) ^ t) ^ (r >>> 16), 2246822507)),
            (r = lt((r = _t(r ^ (r >>> 13), 3266489909)) ^ (r >>> 16)))
          );
        }
        function In(t, r) {
          return (t ^ (r + 2654435769 + (t << 6) + (t >> 2))) | 0;
        }
        (_n[m] = !0),
          (_n[j] = !0),
          Xe(O, {
            get: function (t, r) {
              return this.has(t) ? t : r;
            },
            includes: function (t) {
              return this.has(t);
            },
            keySeq: function () {
              return this.valueSeq();
            },
          }),
          (O.prototype.has = hn.includes),
          (O.prototype.contains = O.prototype.includes),
          Xe(F, b.prototype),
          Xe(G, x.prototype),
          Xe(Z, O.prototype);
        var bn = (function (t) {
          function r(t) {
            return null == t
              ? Mn()
              : Ye(t)
              ? t
              : Mn().withMutations(function (r) {
                  var e = O(t);
                  sr(e.size),
                    e.forEach(function (t) {
                      return r.add(t);
                    });
                });
          }
          return (
            t && (r.__proto__ = t),
            (r.prototype = Object.create(t && t.prototype)),
            (r.prototype.constructor = r),
            (r.of = function () {
              return this(arguments);
            }),
            (r.fromKeys = function (t) {
              return this(b(t).keySeq());
            }),
            (r.prototype.toString = function () {
              return this.__toString("OrderedSet {", "}");
            }),
            r
          );
        })(Ge);
        (exports.OrderedSet = bn), (bn.isOrderedSet = Ye);
        var xn,
          On = bn.prototype;
        function En(t, r) {
          var e = Object.create(On);
          return (e.size = t ? t.size : 0), (e._map = t), (e.__ownerID = r), e;
        }
        function Mn() {
          return xn || (xn = En(Ke()));
        }
        (On[j] = !0),
          (On.zip = _n.zip),
          (On.zipWith = _n.zipWith),
          (On.__empty = Mn),
          (On.__make = En);
        var qn = function (t, r) {
          var e,
            n = function (o) {
              var u = this;
              if (o instanceof n) return o;
              if (!(this instanceof n)) return new n(o);
              if (!e) {
                e = !0;
                var s = Object.keys(t),
                  a = (i._indices = {});
                (i._name = r), (i._keys = s), (i._defaultValues = t);
                for (var c = 0; c < s.length; c++) {
                  var f = s[c];
                  (a[f] = c),
                    i[f]
                      ? "object" == typeof console &&
                        console.warn &&
                        console.warn(
                          "Cannot define " +
                            jn(this) +
                            ' with property "' +
                            f +
                            '" since that property name is part of the Record API.'
                        )
                      : Rn(i, f);
                }
              }
              (this.__ownerID = void 0),
                (this._values = we().withMutations(function (t) {
                  t.setSize(u._keys.length),
                    b(o).forEach(function (r, e) {
                      t.set(
                        u._indices[e],
                        r === u._defaultValues[e] ? void 0 : r
                      );
                    });
                }));
            },
            i = (n.prototype = Object.create(Dn));
          return (i.constructor = n), r && (n.displayName = r), n;
        };
        (exports.Record = qn),
          (qn.prototype.toString = function () {
            for (
              var t, r = jn(this) + " { ", e = this._keys, n = 0, i = e.length;
              n !== i;
              n++
            )
              r += (n ? ", " : "") + (t = e[n]) + ": " + hr(this.get(t));
            return r + " }";
          }),
          (qn.prototype.equals = function (t) {
            return (
              this === t ||
              (t && this._keys === t._keys && kn(this).equals(kn(t)))
            );
          }),
          (qn.prototype.hashCode = function () {
            return kn(this).hashCode();
          }),
          (qn.prototype.has = function (t) {
            return this._indices.hasOwnProperty(t);
          }),
          (qn.prototype.get = function (t, r) {
            if (!this.has(t)) return r;
            var e = this._indices[t],
              n = this._values.get(e);
            return void 0 === n ? this._defaultValues[t] : n;
          }),
          (qn.prototype.set = function (t, r) {
            if (this.has(t)) {
              var e = this._values.set(
                this._indices[t],
                r === this._defaultValues[t] ? void 0 : r
              );
              if (e !== this._values && !this.__ownerID) return An(this, e);
            }
            return this;
          }),
          (qn.prototype.remove = function (t) {
            return this.set(t);
          }),
          (qn.prototype.clear = function () {
            var t = this._values.clear().setSize(this._keys.length);
            return this.__ownerID ? this : An(this, t);
          }),
          (qn.prototype.wasAltered = function () {
            return this._values.wasAltered();
          }),
          (qn.prototype.toSeq = function () {
            return kn(this);
          }),
          (qn.prototype.toJS = function () {
            return Fe(this);
          }),
          (qn.prototype.entries = function () {
            return this.__iterator(K);
          }),
          (qn.prototype.__iterator = function (t, r) {
            return kn(this).__iterator(t, r);
          }),
          (qn.prototype.__iterate = function (t, r) {
            return kn(this).__iterate(t, r);
          }),
          (qn.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var r = this._values.__ensureOwner(t);
            return t
              ? An(this, r, t)
              : ((this.__ownerID = t), (this._values = r), this);
          }),
          (qn.isRecord = D),
          (qn.getDescriptiveName = jn);
        var Dn = qn.prototype;
        function An(t, r, e) {
          var n = Object.create(Object.getPrototypeOf(t));
          return (n._values = r), (n.__ownerID = e), n;
        }
        function jn(t) {
          return t.constructor.displayName || t.constructor.name || "Record";
        }
        function kn(t) {
          return it(
            t._keys.map(function (r) {
              return [r, t.get(r)];
            })
          );
        }
        function Rn(t, r) {
          try {
            Object.defineProperty(t, r, {
              get: function () {
                return this.get(r);
              },
              set: function (t) {
                ur(this.__ownerID, "Cannot set on an immutable record."),
                  this.set(r, t);
              },
            });
          } catch (e) {}
        }
        (Dn[q] = !0),
          (Dn[t] = Dn.remove),
          (Dn.deleteIn = Dn.removeIn = zr),
          (Dn.getIn = sn),
          (Dn.hasIn = hn.hasIn),
          (Dn.merge = Or),
          (Dn.mergeWith = Er),
          (Dn.mergeIn = Tr),
          (Dn.mergeDeep = Kr),
          (Dn.mergeDeepWith = Br),
          (Dn.mergeDeepIn = Lr),
          (Dn.setIn = mr),
          (Dn.update = br),
          (Dn.updateIn = xr),
          (Dn.withMutations = Cr),
          (Dn.asMutable = Wr),
          (Dn.asImmutable = Nr),
          (Dn[L] = Dn.entries),
          (Dn.toJSON = Dn.toObject = hn.toObject),
          (Dn.inspect = Dn.toSource =
            function () {
              return this.toString();
            });
        var Un,
          Kn = (function (t) {
            function r(t, e) {
              if (!(this instanceof r)) return new r(t, e);
              if (
                ((this._value = t),
                (this.size = void 0 === e ? 1 / 0 : Math.max(0, e)),
                0 === this.size)
              ) {
                if (Un) return Un;
                Un = this;
              }
            }
            return (
              t && (r.__proto__ = t),
              (r.prototype = Object.create(t && t.prototype)),
              (r.prototype.constructor = r),
              (r.prototype.toString = function () {
                return 0 === this.size
                  ? "Repeat []"
                  : "Repeat [ " + this._value + " " + this.size + " times ]";
              }),
              (r.prototype.get = function (t, r) {
                return this.has(t) ? this._value : r;
              }),
              (r.prototype.includes = function (t) {
                return pt(this._value, t);
              }),
              (r.prototype.slice = function (t, e) {
                var n = this.size;
                return h(t, e, n)
                  ? this
                  : new r(this._value, _(e, n) - p(t, n));
              }),
              (r.prototype.reverse = function () {
                return this;
              }),
              (r.prototype.indexOf = function (t) {
                return pt(this._value, t) ? 0 : -1;
              }),
              (r.prototype.lastIndexOf = function (t) {
                return pt(this._value, t) ? this.size : -1;
              }),
              (r.prototype.__iterate = function (t, r) {
                for (
                  var e = this.size, n = 0;
                  n !== e && !1 !== t(this._value, r ? e - ++n : n++, this);

                );
                return n;
              }),
              (r.prototype.__iterator = function (t, r) {
                var e = this,
                  n = this.size,
                  i = 0;
                return new C(function () {
                  return i === n ? N() : W(t, r ? n - ++i : i++, e._value);
                });
              }),
              (r.prototype.equals = function (t) {
                return t instanceof r ? pt(this._value, t._value) : Qe(t);
              }),
              r
            );
          })(G);
        function Bn(t, r) {
          return Tn([], r || Ln, t, "", r && r.length > 2 ? [] : void 0, {
            "": t,
          });
        }
        function Tn(t, r, e, n, i, o) {
          var u = Array.isArray(e) ? G : cr(e) ? F : null;
          if (u) {
            if (~t.indexOf(e))
              throw new TypeError(
                "Cannot convert circular structure to Immutable"
              );
            t.push(e), i && "" !== n && i.push(n);
            var s = r.call(
              o,
              n,
              u(e).map(function (n, o) {
                return Tn(t, r, n, o, i, e);
              }),
              i && i.slice()
            );
            return t.pop(), i && i.pop(), s;
          }
          return e;
        }
        function Ln(t, r) {
          return w(r) ? r.toMap() : r.toList();
        }
        exports.Repeat = Kn;
        var Cn = "4.0.0-rc.11";
        exports.version = Cn;
        var Wn = {
            version: Cn,
            Collection: I,
            Iterable: I,
            Seq: X,
            Map: Hr,
            OrderedMap: Re,
            List: we,
            Stack: Ce,
            Set: Ge,
            OrderedSet: bn,
            Record: qn,
            Range: on,
            Repeat: Kn,
            is: pt,
            fromJS: Bn,
            hash: yt,
            isImmutable: A,
            isCollection: d,
            isKeyed: w,
            isIndexed: S,
            isAssociative: z,
            isOrdered: k,
            isValueObject: ht,
            isSeq: M,
            isList: ge,
            isMap: ct,
            isOrderedMap: ft,
            isStack: Le,
            isSet: Ve,
            isOrderedSet: Ye,
            isRecord: D,
            get: _r,
            getIn: un,
            has: pr,
            hasIn: an,
            merge: qr,
            mergeDeep: Ar,
            mergeWith: Dr,
            mergeDeepWith: jr,
            remove: vr,
            removeIn: Sr,
            set: yr,
            setIn: wr,
            update: Ir,
            updateIn: dr,
          },
          Nn = I;
        exports.Iterable = Nn;
        var Pn = Wn;
        exports.default = Pn;
      },
      {},
    ],
    me0G: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.eq =
            exports.multiply =
            exports.multiplyScalar =
            exports.identity =
              void 0);
        var t = [1, 1, 1];
        exports.identity = t;
        var e = function (t, e) {
          return [t[0] * e, t[1] * e, t[2] * e];
        };
        exports.multiplyScalar = e;
        var r = function (t, e) {
          return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
        };
        exports.multiply = r;
        var o = function (t, e) {
          return [0, 1, 2].reduce(function (r, o) {
            return r && t[o] === e[o];
          }, !0);
        };
        exports.eq = o;
      },
      {},
    ],
    ZIjE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.eq =
            exports.multiplyVector =
            exports.inverse =
            exports.multiply =
            exports.multiplyScalar =
            exports.column =
            exports.identity =
              void 0);
        var t = e(require("./v3"));
        function r(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            l = new WeakMap();
          return (r = function (t) {
            return t ? l : e;
          })(t);
        }
        function e(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var l = r(e);
          if (l && l.has(t)) return l.get(t);
          var u = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in t)
            if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
              var p = i ? Object.getOwnPropertyDescriptor(t, n) : null;
              p && (p.get || p.set)
                ? Object.defineProperty(u, n, p)
                : (u[n] = t[n]);
            }
          return (u.default = t), l && l.set(t, u), u;
        }
        var l = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ];
        exports.identity = l;
        var u = function (t, r) {
          return [t[0][r], t[1][r], t[2][r]];
        };
        exports.column = u;
        var i = function (r, e) {
          return [
            t.multiplyScalar(r[0], e),
            t.multiplyScalar(r[1], e),
            t.multiplyScalar(r[2], e),
          ];
        };
        exports.multiplyScalar = i;
        var n = function (r, e) {
          return [
            [
              t.multiply(r[0], u(e, 0)),
              t.multiply(r[0], u(e, 1)),
              t.multiply(r[0], u(e, 2)),
            ],
            [
              t.multiply(r[1], u(e, 0)),
              t.multiply(r[1], u(e, 1)),
              t.multiply(r[1], u(e, 2)),
            ],
            [
              t.multiply(r[2], u(e, 0)),
              t.multiply(r[2], u(e, 1)),
              t.multiply(r[2], u(e, 2)),
            ],
          ];
        };
        exports.multiply = n;
        var p = function (r) {
          return [
            t.multiplyScalar([1, -r[0][1], -r[0][2]], 1 / r[0][0]),
            t.multiplyScalar([-r[1][0], 1, -r[1][2]], 1 / r[1][1]),
            t.multiplyScalar([-r[2][0], -r[2][1], 1], 1 / r[2][2]),
          ];
        };
        exports.inverse = p;
        var o = function (r, e) {
          return [
            t.multiply(e, r[0]),
            t.multiply(e, r[1]),
            t.multiply(e, r[2]),
          ];
        };
        exports.multiplyVector = o;
        var a = function (r, e) {
          return [0, 1, 2].reduce(function (l, u) {
            return l && t.eq(r[u], e[u]);
          }, !0);
        };
        exports.eq = a;
      },
      { "./v3": "me0G" },
    ],
    YrAe: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.mapBBox = a),
          (exports.mapPoint = u),
          (exports.mapScalar = i),
          (exports.move = exports.zoom = void 0);
        var r = e(require("../infrastructure/m3"));
        function t(r) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            n = new WeakMap();
          return (t = function (r) {
            return r ? n : e;
          })(r);
        }
        function e(r, e) {
          if (!e && r && r.__esModule) return r;
          if (null === r || ("object" != typeof r && "function" != typeof r))
            return { default: r };
          var n = t(e);
          if (n && n.has(r)) return n.get(r);
          var o = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in r)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(r, u)) {
              var i = a ? Object.getOwnPropertyDescriptor(r, u) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(o, u, i)
                : (o[u] = r[u]);
            }
          return (o.default = r), n && n.set(r, o), o;
        }
        var n = function (r, t) {
            var e = "function" == typeof Symbol && r[Symbol.iterator];
            if (!e) return r;
            var n,
              o,
              a = e.call(r),
              u = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                u.push(n.value);
            } catch (i) {
              o = { error: i };
            } finally {
              try {
                n && !n.done && (e = a.return) && e.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
            return u;
          },
          o = function () {
            for (var r = [], t = 0; t < arguments.length; t++)
              r = r.concat(n(arguments[t]));
            return r;
          };
        function a(r, t, e) {
          var a = Math.max,
            i = Math.min,
            p = r.map(function (r) {
              return r.x;
            }),
            f = r.map(function (r) {
              return r.y;
            }),
            c = n(
              [
                i.apply(void 0, o(p)),
                i.apply(void 0, o(f)),
                a.apply(void 0, o(p)),
                a.apply(void 0, o(f)),
              ],
              4
            ),
            l = c[0],
            y = c[1],
            v = c[2],
            s = c[3],
            x = n([(v - l) / 2 + l, (s - y) / 2 + y], 2),
            d = x[0],
            m = x[1],
            b = u({ x: d, y: m }, t, e),
            O = n([b.x - d, b.y - m], 2),
            h = O[0],
            j = O[1];
          return r.map(function (r) {
            var t = r.x,
              e = r.y;
            return { x: t + h, y: e + j };
          });
        }
        function u(t, e, o) {
          if (!o) {
            var a = e;
            return u(t, r.identity, a);
          }
          var i = t.x,
            p = t.y,
            f = r.multiply(o, r.inverse(e)),
            c = n(r.multiplyVector(f, [i, p, 1]), 2);
          return { x: c[0], y: c[1] };
        }
        function i(t, e, n) {
          if (!n) {
            var o = e;
            return i(t, r.identity, o);
          }
          return (t * n[0][0]) / e[0][0];
        }
        var p = function (r, t, e) {
          var n = e ? e.x : -r[0][2],
            o = e ? e.y : -r[1][2];
          return [
            [r[0][0] * t, r[0][1] * t, r[0][2] * t - (t - 1) * n],
            [r[1][0] * t, r[1][1] * t, r[1][2] * t - (t - 1) * o],
            [0, 0, 1],
          ];
        };
        exports.zoom = p;
        var f = function (r, t) {
          return [
            [r[0][0], r[0][1], r[0][2] + t.x],
            [r[1][0], r[1][1], r[1][2] + t.y],
            [0, 0, 1],
          ];
        };
        exports.move = f;
      },
      { "../infrastructure/m3": "ZIjE" },
    ],
    jqwk: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.assert = n),
          (exports.except =
            exports.angle =
            exports.sortBy =
            exports.minBy =
            exports.flatten =
            exports.parseRGBA =
            exports.debounce =
            exports.distanceToSeg =
            exports.clamp =
            exports.distance =
            exports.dumbPoint =
            exports.identity =
              void 0);
        var r = function (r, t) {
            var n = "function" == typeof Symbol && r[Symbol.iterator];
            if (!n) return r;
            var e,
              o,
              a = n.call(r),
              u = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(e = a.next()).done; )
                u.push(e.value);
            } catch (i) {
              o = { error: i };
            } finally {
              try {
                e && !e.done && (n = a.return) && n.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
            return u;
          },
          t = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t = t.concat(r(arguments[n]));
            return t;
          };
        function n(r, t) {
          if (!r) throw new Error(t);
        }
        var e = function (r) {
          return r;
        };
        exports.identity = e;
        var o = { x: 0, y: 0 };
        exports.dumbPoint = o;
        var a = function (r, t) {
          return Math.sqrt(Math.pow(r.x - t.x, 2) + Math.pow(r.y - t.y, 2));
        };
        exports.distance = a;
        var u = function (r, t, n) {
          return Math.max(t, Math.min(n, r));
        };
        exports.clamp = u;
        var i = function (r, t, n) {
          var e = Math.pow(r.x - t.x, 2) + Math.pow(r.y - t.y, 2);
          if (0 === e) return a(n, r);
          var o = u(
            ((n.x - r.x) * (t.x - r.x) + (n.y - r.y) * (t.y - r.y)) / e,
            0,
            1
          );
          return a(n, { x: r.x + o * (t.x - r.x), y: r.y + o * (t.y - r.y) });
        };
        exports.distanceToSeg = i;
        var c = function (r, t) {
          var n;
          return function () {
            clearTimeout(n), (n = setTimeout(r, t));
          };
        };
        exports.debounce = c;
        var s = function (t) {
          if (t) {
            var n = t.match(/[\.\d]+/g);
            if (n && !(n.length < 4)) {
              var e = r(
                n.map(function (r) {
                  return +r;
                }),
                4
              );
              return [e[0], e[1], e[2], 255 * e[3]];
            }
          }
        };
        exports.parseRGBA = s;
        var x = function (r) {
          var n;
          return (n = []).concat.apply(n, t(r));
        };
        exports.flatten = x;
        var f = function (r, t) {
          var n, e;
          return (
            r.forEach(function (r) {
              if (null != n) {
                var o = t(r);
                e > o && ((e = o), (n = r));
              } else n = r;
            }),
            n
          );
        };
        exports.minBy = f;
        var p = function (r, t) {
          return r
            .map(function (r, n) {
              return { score: t(r), i: n };
            })
            .sort(function (r, t) {
              return r.score > t.score ? 1 : -1;
            })
            .map(function (t) {
              return r[t.i];
            });
        };
        exports.sortBy = p;
        var v = [
            function (r, t) {
              return r >= 0 && t >= 0;
            },
            function (r, t) {
              return r <= 0 && t >= 0;
            },
            function (r, t) {
              return r <= 0 && t <= 0;
            },
            function (r, t) {
              return r <= 0 && t <= 0;
            },
          ],
          y = function (r, t) {
            var n = v.findIndex(function (n) {
              return n(r, t);
            });
            return n < 0 && (n = 0), n + 1;
          },
          l = function (r, t) {
            var n = t.x - r.x,
              e = t.y - r.y;
            switch (y(n, e)) {
              case 1:
                return Math.atan(e / n);
              case 2:
              case 3:
                return Math.atan(e / n) + Math.PI;
              case 4:
                return Math.atan(e / n) + 2 * Math.PI;
            }
          };
        exports.angle = l;
        var h = function (r, n) {
          var e = r.indexOf(n);
          return e < 0 ? r : t(r.slice(0, e), r.slice(e + 1));
        };
        exports.except = h;
      },
      {},
    ],
    IT9q: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.setup = void 0);
        var t = require("immutable"),
          e = function (t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var o,
              i,
              r = n.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                a.push(o.value);
            } catch (s) {
              i = { error: s };
            } finally {
              try {
                o && !o.done && (n = r.return) && n.call(r);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          },
          n = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t = t.concat(e(arguments[n]));
            return t;
          },
          o = ["sync-video", "hover", "wheel"],
          i = ["drag", "dragEnd", "click"],
          r = { kind: "dumb", once: !1 },
          a = 0,
          s = function (t, e) {
            var n = Math.abs(t.x - e.x),
              o = Math.abs(t.y - e.y);
            return n > a && o > a;
          },
          c = [
            {
              seq: (0, t.List)([0, 1]),
              createAction: function (t) {
                return { kind: "click", once: !0, point: { x: t.x, y: t.y } };
              },
            },
            {
              seq: (0, t.List)([0, 2]),
              createAction: function (t, e) {
                return s(e, t)
                  ? {
                      kind: "drag",
                      once: !1,
                      start: t,
                      current: e,
                      delta: { x: e.x - t.x, y: e.y - t.y },
                    }
                  : r;
              },
            },
            {
              seq: (0, t.List)([0, 2, 1]),
              createAction: function (t, e, n) {
                return s(n, t)
                  ? {
                      kind: "dragEnd",
                      once: !0,
                      start: t,
                      current: n,
                      delta: { x: n.x - t.x, y: n.y - t.y },
                    }
                  : { kind: "click", once: !0, point: { x: t.x, y: t.y } };
              },
            },
            {
              seq: (0, t.List)([3]),
              createAction: function (t) {
                var e, n;
                return {
                  kind: "wheel",
                  once: !0,
                  point: { x: t.x, y: t.y },
                  delta: {
                    x: null !== (e = t.deltaX) && void 0 !== e ? e : 0,
                    y: null !== (n = t.deltaY) && void 0 !== n ? n : 0,
                  },
                };
              },
            },
            {
              seq: (0, t.List)([2]),
              createAction: function (t) {
                return { kind: "hover", once: !1, point: t };
              },
            },
          ],
          u = [
            {
              seq: (0, t.List)([4, 5]),
              createAction: function (t) {
                return { kind: "press", once: !0, value: t.value };
              },
            },
            {
              seq: (0, t.List)([4]),
              createAction: function (t) {
                return { kind: "hold", once: !1, value: t.value };
              },
            },
          ],
          d = (function () {
            function e(e, n) {
              (this.dom = e),
                (this.mouseQ = (0, t.List)()),
                (this.keyboardQ = (0, t.List)()),
                (this.listenersQ = []),
                (this.dom = e),
                (this.videoControl = n),
                this.listen();
            }
            return (
              (e.prototype.teardown = function () {
                var t = this;
                this.listenersQ.forEach(function (e) {
                  t.dom.removeEventListener(e.eventName, e.callback);
                });
              }),
              (e.prototype.listen = function () {
                var t = this;
                this.dom.setAttribute("tabindex", "0"),
                  this.addEventListener("wheel", function (e) {
                    (e.metaKey || e.ctrlKey) &&
                      (e.stopPropagation(),
                      e.preventDefault(),
                      t.handleMouseEvent({
                        type: 3,
                        payload: {
                          x: e.offsetX,
                          y: e.offsetY,
                          deltaX: e.deltaX,
                          deltaY: e.deltaY,
                        },
                      }));
                  }),
                  this.addEventListener("mousedown", function (e) {
                    0 === e.button &&
                      t.handleMouseEvent({
                        type: 0,
                        payload: { x: e.offsetX, y: e.offsetY },
                      });
                  }),
                  this.addEventListener("mouseup", function (e) {
                    0 === e.button &&
                      t.handleMouseEvent({
                        type: 1,
                        payload: { x: e.offsetX, y: e.offsetY },
                      });
                  }),
                  this.addEventListener("mousemove", function (e) {
                    t.handleMouseEvent({
                      type: 2,
                      payload: { x: e.offsetX, y: e.offsetY },
                    });
                  }),
                  this.addEventListener("keydown", function (e) {
                    t.handleKeyboardEvent({
                      type: 4,
                      payload: { value: e.key },
                    });
                  }),
                  this.addEventListener("keyup", function (e) {
                    t.handleKeyboardEvent({
                      type: 5,
                      payload: { value: e.key },
                    });
                  }),
                  this.syncVideoFrame();
              }),
              (e.prototype.syncVideoFrame = function () {
                this.videoControl &&
                  (this.emit({
                    kind: "sync-video",
                    frame: this.videoControl.currentFrame,
                  }),
                  requestAnimationFrame(this.syncVideoFrame.bind(this)));
              }),
              (e.prototype.createQ = function (t, e) {
                if (!e.size) return e.push(t);
                var n = e.size - 1,
                  o = e.get(n);
                return o && o.type === t.type ? e.splice(n, 1, t) : e.push(t);
              }),
              (e.prototype.createAction = function (t, e) {
                var o = t.map(function (t) {
                    return t.type;
                  }),
                  i = e.find(function (t) {
                    return t.seq.equals(o);
                  });
                return i
                  ? i.createAction.apply(
                      i,
                      n(
                        t
                          .map(function (t) {
                            return t.payload;
                          })
                          .toJS()
                      )
                    )
                  : void 0;
              }),
              (e.prototype.createNextMouseQ = function (t) {
                return this.createQ(t, this.mouseQ);
              }),
              (e.prototype.createMouseAction = function (t) {
                return this.createAction(t, c);
              }),
              (e.prototype.handleMouseEvent = function (e) {
                var n = this.createNextMouseQ(e),
                  o = this.createMouseAction(n);
                o
                  ? ((this.mouseQ = o.once ? (0, t.List)() : n), this.emit(o))
                  : (this.mouseQ = (0, t.List)([e]));
              }),
              (e.prototype.createNextKeyboardQ = function (t) {
                return this.createQ(t, this.keyboardQ);
              }),
              (e.prototype.createKeyboardAction = function (t) {
                return this.createAction(t, u);
              }),
              (e.prototype.handleKeyboardEvent = function (e) {
                var n = this.createNextKeyboardQ(e),
                  o = this.createKeyboardAction(n);
                o
                  ? ((this.keyboardQ = o.once ? (0, t.List)() : n),
                    this.emit(o))
                  : (this.keyboardQ = (0, t.List)([e]));
              }),
              (e.prototype.emit = function (t) {
                if (this.onChange) {
                  var e = this.videoControl && this.videoControl.playing;
                  e && i.includes(t.kind) && this.videoControl.stop(),
                    (e && !o.includes(t.kind)) || this.onChange(t);
                }
              }),
              (e.prototype.addEventListener = function (t, e) {
                this.dom.addEventListener(t, e),
                  this.listenersQ.push({ eventName: t, callback: e });
              }),
              e
            );
          })(),
          y = function (t, e, n) {
            var o = new d(t, n);
            return (
              (o.onChange = e),
              function () {
                return o.teardown();
              }
            );
          };
        exports.setup = y;
      },
      { immutable: "vqB5" },
    ],
    ZEUt: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.SnapshotManager = void 0);
        var t = o(require("eventemitter3")),
          e = require("immutable");
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function r() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((r.prototype = o.prototype), new r()));
            };
          })(),
          i = 10,
          n = (function (t) {
            function o() {
              var o = (null !== t && t.apply(this, arguments)) || this;
              return (o.undoQ = (0, e.List)()), (o.redoQ = (0, e.List)()), o;
            }
            return (
              r(o, t),
              (o.prototype.push = function (t) {
                (this.undoQ = this.undoQ.push(t).slice(-i)),
                  (this.redoQ = (0, e.List)()),
                  this.emit("add:undo"),
                  this.emit("clear:redo");
              }),
              (o.prototype.undo = function (t) {
                var e = this.undoQ.last();
                if (e)
                  return (
                    (this.undoQ = this.undoQ.pop()),
                    (this.redoQ = this.redoQ.push(t).slice(-i)),
                    this.emit("add:redo"),
                    0 === this.undoQ.size && this.emit("clear:undo"),
                    e
                  );
              }),
              (o.prototype.redo = function (t) {
                var e = this.redoQ.last();
                if (e)
                  return (
                    (this.undoQ = this.undoQ.push(t).slice(-i)),
                    (this.redoQ = this.redoQ.pop()),
                    this.emit("add:undo"),
                    0 === this.redoQ.size && this.emit("clear:redo"),
                    e
                  );
              }),
              (o.prototype.clear = function () {
                (this.undoQ = (0, e.List)()), (this.redoQ = (0, e.List)());
              }),
              o
            );
          })(t.default);
        exports.SnapshotManager = n;
      },
      { eventemitter3: "JJlS", immutable: "vqB5" },
    ],
    Ayhy: [
      function (require, module, exports) {
        var process = require("process");
        var t = require("process");
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Editor = void 0);
        var e = l(require("eventemitter3")),
          r = require("immutable"),
          n = c(require("../infrastructure/m3")),
          o = require("../utils/coord"),
          i = require("../utils/misc"),
          a = require("./domEventWatcher"),
          s = require("./snapshotManager");
        function u(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            r = new WeakMap();
          return (u = function (t) {
            return t ? r : e;
          })(t);
        }
        function c(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var r = u(e);
          if (r && r.has(t)) return r.get(t);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in t)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = t[i]);
            }
          return (n.default = t), r && r.set(t, n), n;
        }
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var f = (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })(),
          h = function (t, e, r, n) {
            return new (r || (r = Promise))(function (o, i) {
              function a(t) {
                try {
                  u(n.next(t));
                } catch (e) {
                  i(e);
                }
              }
              function s(t) {
                try {
                  u(n.throw(t));
                } catch (e) {
                  i(e);
                }
              }
              function u(t) {
                var e;
                t.done
                  ? o(t.value)
                  : ((e = t.value),
                    e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })).then(a, s);
              }
              u((n = n.apply(t, e || [])).next());
            });
          },
          p = function (t, e) {
            var r,
              n,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (o =
                            2 & i[0]
                              ? n.return
                              : i[0]
                              ? n.throw || ((o = n.return) && o.call(n), 0)
                              : n.next) &&
                          !(o = o.call(n, i[1])).done)
                      )
                        return o;
                      switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (n = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = e.call(t, a);
                    } catch (s) {
                      (i = [6, s]), (n = 0);
                    } finally {
                      r = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          y = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              o,
              i = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                a.push(n.value);
            } catch (s) {
              o = { error: s };
            } finally {
              try {
                n && !n.done && (r = i.return) && r.call(i);
              } finally {
                if (o) throw o.error;
              }
            }
            return a;
          },
          d = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length)
              return {
                next: function () {
                  return (
                    t && n >= t.length && (t = void 0),
                    { value: t && t[n++], done: !t }
                  );
                },
              };
            throw new TypeError(
              e ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          },
          v = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(y(arguments[e]));
            return t;
          },
          b = "annotate",
          g = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return f(e, t), e;
          })(
            (0, r.Record)({
              cursor: b,
              jobs: (0, r.List)(),
              mountPoints: (0, r.List)(),
              coord: { res: n.identity, dom: n.identity, canvas: n.identity },
            })
          ),
          m = function (t, e) {
            var r = t.frame;
            switch (t.kind) {
              case "dragEnd":
              case "drag":
                var n = (0, o.mapPoint)(t.start, e),
                  i = (0, o.mapPoint)(t.current, e);
                return {
                  kind: t.kind,
                  start: n,
                  current: i,
                  frame: r,
                  delta: { x: i.x - n.x, y: i.y - n.y },
                };
              case "click":
                return {
                  kind: "click",
                  frame: r,
                  point: { x: (i = (0, o.mapPoint)(t.point, e)).x, y: i.y },
                };
              case "hover":
                return {
                  kind: "hover",
                  frame: r,
                  point: { x: (i = (0, o.mapPoint)(t.point, e)).x, y: i.y },
                };
              default:
                return t;
            }
          },
          T = (function (t) {
            function e(e, r) {
              var n = t.call(this) || this;
              return (
                (n.cursor = b),
                (n.snapshotManager = new s.SnapshotManager()),
                (n.stateTree = e),
                (n.tools = r),
                n
              );
            }
            return (
              f(e, t),
              (e.prototype.watch = function (t, e) {
                return (0, a.setup)(t, this.handleInteractions.bind(this), e);
              }),
              (e.prototype.undo = function () {
                var t = this,
                  e = this.snapshotManager.undo(this.stateTree);
                e &&
                  ((this.stateTree = e),
                  this.tools.forEach(function (e) {
                    return e.sync && e.sync(t.stateTree);
                  }));
              }),
              (e.prototype.redo = function () {
                var t = this,
                  e = this.snapshotManager.redo(this.stateTree);
                e &&
                  ((this.stateTree = e),
                  this.tools.forEach(function (e) {
                    return e.sync && e.sync(t.stateTree);
                  }));
              }),
              Object.defineProperty(e.prototype, "category", {
                get: function () {
                  return this.stateTree.category;
                },
                set: function (t) {
                  this.stateTree = this.stateTree.set("category", t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.updateCategory = function (t) {
                if (t) {
                  var e = this.getPatch(function (e) {
                    return e.updateCategory && e.updateCategory(t);
                  });
                  this.applyPatch(e);
                }
              }),
              (e.prototype.mutateStateTree = function (t) {
                var e = this;
                (this.stateTree = t(this.stateTree)),
                  this.tools.forEach(function (t) {
                    return t.sync && t.sync(e.stateTree);
                  });
              }),
              Object.defineProperty(e.prototype, "renderTree", {
                get: function () {
                  var t = this,
                    e = this.tools.reduce(function (e, r) {
                      return r.getRenderJobs
                        ? r.getRenderJobs(t.stateTree).concat(e)
                        : e;
                    }, (0, r.List)()),
                    n = this.tools.reduce(function (t, e) {
                      return e.getMountPoints
                        ? e.getMountPoints().concat(t)
                        : t;
                    }, (0, r.List)());
                  return new g({
                    cursor: this.cursor,
                    jobs: e,
                    mountPoints: n,
                    coord: this.stateTree.coord,
                  });
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.exec = function (t, e) {
                var r = e;
                switch (t) {
                  case "setTool":
                    return void this.setTool(r);
                  case "zoomIn":
                  case "zoomOut":
                    var n = this.stateTree,
                      o = n.width,
                      i = n.height;
                    r = { x: o / 2, y: i / 2 };
                }
                var a = this.getPatch(function (e) {
                  return e.exec && e.exec(t, r);
                });
                this.applyPatch(a);
              }),
              (e.prototype.serialize = function (t) {
                return h(this, void 0, void 0, function () {
                  var e, r, n;
                  return p(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (e = {
                            width: this.stateTree.width,
                            height: this.stateTree.height,
                          }),
                          (r = Object.entries(this.stateTree.annotations).map(
                            function (r) {
                              var n = y(r, 2),
                                o = n[0],
                                i = n[1];
                              return t(e, o, i.toJS());
                            }
                          )),
                          (n = i.flatten),
                          [4, Promise.all(r)]
                        );
                      case 1:
                        return [2, n.apply(void 0, [o.sent()])];
                    }
                  });
                });
              }),
              (e.prototype.restore = function (t) {
                var e = this,
                  n = {};
                this.tools.forEach(function (t) {
                  t.restore && t.restore([], e.stateTree);
                }),
                  Object.entries(t).forEach(function (t) {
                    var o = y(t, 2),
                      i = o[0],
                      a = o[1],
                      s = e.tools.find(function (t) {
                        return t.name === i;
                      }),
                      u =
                        (s && s.restore && s.restore(a, e.stateTree)) ||
                        (0, r.List)();
                    n[i] = u;
                  }),
                  (this.stateTree = this.stateTree.set("annotations", n)),
                  this.snapshotManager.clear();
              }),
              (e.prototype.handleInteractions = function (t) {
                var e = this,
                  r = m(t, this.stateTree.coord.res),
                  n = this.getPatch(function (t) {
                    return t.respond(r, e.stateTree);
                  });
                this.applyPatch(n);
              }),
              (e.prototype.getPatch = function (t) {
                var e, r, n, o;
                try {
                  for (
                    var i = d(this.tools), a = i.next();
                    !a.done;
                    a = i.next()
                  ) {
                    var s = a.value;
                    if (!this.isExclusivePatch(n)) {
                      var u = t(s);
                      u &&
                        ((n && !this.isExclusivePatch(u)) ||
                          ((n = u), (o = s.name)));
                    }
                  }
                } catch (c) {
                  e = { error: c };
                } finally {
                  try {
                    a && !a.done && (r = i.return) && r.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return (
                  o &&
                    (Array.isArray(n) ? n : [n]).some(function (t) {
                      return !!t && (!("trivial" in t) || !t.trivial);
                    }) &&
                    this.setTool(o),
                  n
                );
              }),
              (e.prototype.isExclusivePatch = function (t) {
                return !!t && (!("lazy" in t) || !t.lazy);
              }),
              (e.prototype.applyPatch = function (t) {
                var e = this;
                if (t) {
                  var r = Array.isArray(t) ? t : [t];
                  if (r.length) {
                    var n = b;
                    (this.stateTree = r.reduce(function (t, r) {
                      if (!("key" in r && "updater" in r)) return t;
                      if ("cursor" === r.key) return (n = r.updater("")), t;
                      if ("hover" === r.key)
                        return e.emit("hover", r.updater(null)), t;
                      if (!r.key) return r.updater(""), t;
                      var o = t.annotations,
                        i = t.update(r.key, r.updater);
                      return (
                        t !== i &&
                          "annotations" === r.key &&
                          (e.emit("change", i.annotations, o),
                          e.snapshotManager.push(t)),
                        i
                      );
                    }, this.stateTree)),
                      (this.cursor = this.tools[0].cursor || n);
                  }
                } else this.cursor = this.tools[0].cursor || b;
              }),
              (e.prototype.setTool = function (t) {
                var e = this,
                  r = 0;
                this.tools.forEach(function (n, o) {
                  n.name === t
                    ? (n.activate && n.activate(e.stateTree), (r = o))
                    : n.deactivate && n.deactivate(e.stateTree);
                }),
                  r <= 0 ||
                    ((this.tools = v(
                      [this.tools[r]],
                      this.tools.slice(0, r),
                      this.tools.slice(r + 1)
                    )),
                    this.emit("setTool", t));
              }),
              e
            );
          })(e.default);
        exports.Editor = T;
      },
      {
        eventemitter3: "JJlS",
        immutable: "vqB5",
        "../infrastructure/m3": "ZIjE",
        "../utils/coord": "YrAe",
        "../utils/misc": "jqwk",
        "./domEventWatcher": "IT9q",
        "./snapshotManager": "ZEUt",
        process: "pBGv",
      },
    ],
    BmKp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.from = exports.StateTree = void 0);
        var t = o(require("../infrastructure/m3")),
          e = require("immutable");
        function r(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            o = new WeakMap();
          return (r = function (t) {
            return t ? o : e;
          })(t);
        }
        function o(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var o = r(e);
          if (o && o.has(t)) return o.get(t);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in t)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
              var c = i ? Object.getOwnPropertyDescriptor(t, u) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(n, u, c)
                : (n[u] = t[u]);
            }
          return (n.default = t), o && o.set(t, n), n;
        }
        var n = (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              function o() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((o.prototype = r.prototype), new o()));
            };
          })(),
          i = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              Object.defineProperty(e.prototype, "interactionFactor", {
                get: function () {
                  return this.coord.res[0][0] / this.coord.dom[0][0];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "renderFactor", {
                get: function () {
                  return this.coord.canvas[0][0] / this.coord.dom[0][0];
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })(
            (0, e.Record)({
              category: void 0,
              src: "",
              width: 1,
              height: 1,
              annotations: {},
              coord: { dom: t.identity, res: t.identity, canvas: t.identity },
            })
          );
        exports.StateTree = i;
        var u = function (t) {
          return new i(t);
        };
        exports.from = u;
      },
      { "../infrastructure/m3": "ZIjE", immutable: "vqB5" },
    ],
    TKQ9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.exec = void 0);
        var r = require("../utils/coord"),
          e = function () {
            return (e =
              Object.assign ||
              function (r) {
                for (var e, a = 1, o = arguments.length; a < o; a++)
                  for (var t in (e = arguments[a]))
                    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                return r;
              }).apply(this, arguments);
          },
          a = {
            background: "rgba(71, 118, 241, 0.4)",
            border: {
              width: 1,
              color: "rgba(71, 118, 241, 1)",
              isRes: !1,
              lineCap: "butt",
            },
          },
          o = function (o, t, i, n) {
            var l = e(e({}, a), i),
              s = (0, r.mapPoint)(t.topLeft, n.res, n.canvas),
              c = s.x,
              d = s.y,
              p = (0, r.mapPoint)(t.bottomRight, n.res, n.canvas),
              u = p.x,
              v = p.y;
            o.rect(c, d, u - c, v - d),
              (o.lineWidth = (0, r.mapScalar)(l.border.width, n.dom, n.canvas)),
              (o.strokeStyle = l.border.color),
              o.stroke(),
              (o.fillStyle = l.background),
              o.fill();
          },
          t = function (o, t, i, n) {
            var l = e(e({}, a), i),
              s = (0, r.mapPoint)(t.c, n.res, n.canvas),
              c = s.x,
              d = s.y,
              p = (null == t ? void 0 : t.isResizer)
                ? (0, r.mapScalar)(t.r, n.dom, n.canvas)
                : (0, r.mapScalar)(t.r, n.res, n.canvas);
            o.arc(c, d, p, 0, 2 * Math.PI),
              (o.lineWidth = (0, r.mapScalar)(l.border.width, n.dom, n.canvas)),
              (o.strokeStyle = l.border.color),
              o.stroke(),
              (o.fillStyle = l.background),
              o.fill();
          },
          i = function (o, t, i, n) {
            var l, s;
            if (t.points.length) {
              var c = t.isResizer
                  ? (0, r.mapBBox)(t.points, n.res, n.canvas)
                  : t.points.map(function (e) {
                      return (0, r.mapPoint)(e, n.res, n.canvas);
                    }),
                d = e(e({}, a), i);
              (o.lineWidth = (
                null === (l = d.border) || void 0 === l ? void 0 : l.isRes
              )
                ? (0, r.mapScalar)(d.border.width, n.res, n.canvas)
                : (0, r.mapScalar)(d.border.width, n.dom, n.canvas)),
                (o.lineCap =
                  (null === (s = d.border) || void 0 === s
                    ? void 0
                    : s.lineCap) || "butt"),
                (o.lineJoin = "round" === o.lineCap ? "round" : "miter"),
                (o.strokeStyle = d.border.color);
              var p = c[0];
              o.moveTo(p.x, p.y),
                c.forEach(function (r) {
                  o.lineTo(r.x, r.y);
                }),
                t.closed && o.lineTo(p.x, p.y),
                o.stroke(),
                (o.fillStyle = d.background),
                o.fill();
            }
          },
          n = function (r, e, a) {
            switch ((r.beginPath(), e.type)) {
              case "rect":
                o(r, e.data, e.style || {}, a);
                break;
              case "polygon":
                i(r, e.data, e.style || {}, a);
                break;
              case "circle":
                t(r, e.data, e.style || {}, a);
            }
            r.closePath();
          };
        exports.exec = n;
      },
      { "../utils/coord": "YrAe" },
    ],
    WQKF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.rgbaToRgb =
            exports.LITE_ORANGE =
            exports.ORANGE =
            exports.BLUE =
            exports.DEEP_BLUE =
            exports.LITE_BLUE =
            exports.RED =
            exports.LITE_WHITE =
            exports.WHITE =
              void 0);
        var r = function (r, t) {
            var e = "function" == typeof Symbol && r[Symbol.iterator];
            if (!e) return r;
            var o,
              a,
              s = e.call(r),
              E = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(o = s.next()).done; )
                E.push(o.value);
            } catch (p) {
              a = { error: p };
            } finally {
              try {
                o && !o.done && (e = s.return) && e.call(s);
              } finally {
                if (a) throw a.error;
              }
            }
            return E;
          },
          t = "rgba(255, 255, 255, 1)";
        exports.WHITE = t;
        var e = "rgba(255, 255, 255, 0.4)";
        exports.LITE_WHITE = e;
        var o = "rgba(255, 0, 0, 1)";
        exports.RED = o;
        var a = "rgba(71, 118, 241, 0.4)";
        exports.LITE_BLUE = a;
        var s = "rgba(71, 118, 241, 0.6)";
        exports.DEEP_BLUE = s;
        var E = "rgba(71, 118, 241, 1)";
        exports.BLUE = E;
        var p = "rgba(245, 166, 35, 1)";
        exports.ORANGE = p;
        var n = "rgba(245, 166, 35, 0.2)";
        exports.LITE_ORANGE = n;
        var x = function (t) {
          if (!t.startsWith("rgba")) return t;
          var e = t.match(/rgba\((.*)\)/);
          if (!e || !e[1]) return t;
          var o = r(
              e[1].split(",").map(function (r) {
                return r.trim();
              }),
              4
            ),
            a = o[0],
            s = o[1],
            E = o[2];
          return 0 == +o[3] ? t : "rgb(" + a + ", " + s + ", " + E + ")";
        };
        exports.rgbaToRgb = x;
      },
      {},
    ],
    tTbS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Renderer = void 0);
        var t = a(require("../infrastructure/m3")),
          e = require("../utils/misc"),
          r = require("../utils/coord"),
          o = require("./builtinShape"),
          n = require("../utils/colors");
        function i(t) {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap(),
            r = new WeakMap();
          return (i = function (t) {
            return t ? r : e;
          })(t);
        }
        function a(t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var r = i(e);
          if (r && r.has(t)) return r.get(t);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(o, a, s)
                : (o[a] = t[a]);
            }
          return (o.default = t), r && r.set(t, o), o;
        }
        var s = function () {
            return (s =
              Object.assign ||
              function (t) {
                for (var e, r = 1, o = arguments.length; r < o; r++)
                  for (var n in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
              }).apply(this, arguments);
          },
          c = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o,
              n,
              i = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                a.push(o.value);
            } catch (s) {
              n = { error: s };
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            return a;
          },
          h = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(c(arguments[e]));
            return t;
          },
          u = function (t) {
            if (!t.style) return t;
            var e = t.style.border
                ? s(s({}, t.style.border), {
                    color: (0, n.rgbaToRgb)(t.style.border.color || ""),
                  })
                : void 0,
              r = s(s({}, t.style), {
                background: (0, n.rgbaToRgb)(t.style.background || ""),
                border: e,
              });
            return s(s({}, t), { style: r });
          },
          d = function (t) {
            return "cursor-" + t;
          },
          p = (function () {
            function n(t, r, o) {
              var n = this;
              (this.forced = !1),
                (this.stopped = !1),
                (this.canvas = t),
                (this.bgResource = r);
              var i = t.getContext("2d");
              (0, e.assert)(null != i, "Failed to setup render engine"),
                (this.ctx = i),
                (this.videoControl = o),
                o &&
                  o.resource.dom.addEventListener("seeked", function () {
                    n.forced = !0;
                  });
            }
            return (
              (n.prototype.start = function (t) {
                this.tiktokRender(t);
              }),
              (n.prototype.stop = function () {
                (this.stopped = !0),
                  this.ctx.clearRect(
                    0,
                    0,
                    this.ctx.canvas.width + 1,
                    this.ctx.canvas.height + 1
                  ),
                  this.renderMountPoints && this.renderMountPoints([]);
              }),
              Object.defineProperty(n.prototype, "mountPointRenderer", {
                set: function (t) {
                  (this.renderMountPoints = t), (this.forced = !0);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (n.prototype.tiktokRender = function (t) {
                if (
                  !this.stopped &&
                  document.body.contains(this.canvas) &&
                  this.canvas.width &&
                  this.canvas.height
                ) {
                  var e = t();
                  this.setCursor(e.cursor),
                    this.renderOnce(e),
                    this.mount(e),
                    requestAnimationFrame(this.tiktokRender.bind(this, t));
                }
              }),
              (n.prototype.mount = function (t) {
                if (this.renderMountPoints) {
                  var o = t.coord,
                    n = o.res,
                    i = o.dom,
                    a = t.mountPoints
                      .map(function (t) {
                        return (
                          (0, e.assert)("domMountPoint" === t.type),
                          s(s({}, t.data), (0, r.mapPoint)(t.data, n, i))
                        );
                      })
                      .toJS();
                  this.renderMountPoints(a);
                }
              }),
              (n.prototype.renderOnce = function (t) {
                if (this.forced || !this.canSkipRender(t)) {
                  (this.forced = !1),
                    this.ctx.clearRect(
                      0,
                      0,
                      this.ctx.canvas.width + 1,
                      this.ctx.canvas.height + 1
                    );
                  var e = this.collectBgFacts(t.coord.canvas, t.coord.res);
                  this.renderBg(e),
                    this.runEngine(t.jobs, t.coord),
                    this.renderMask(t.jobs, e),
                    this.runGroupedJobs(t.jobs, t.coord);
                }
              }),
              (n.prototype.runEngine = function (t, e) {
                var r = this;
                t.forEach(function (t) {
                  (0, o.exec)(r.ctx, t, e);
                });
              }),
              (n.prototype.runGroupedJobs = function (t, e) {
                var r = this;
                t.forEach(function (t) {
                  if ("group" === t.type) {
                    var n = document.createElement("canvas"),
                      i = n.getContext("2d");
                    i &&
                      ((n.width = r.canvas.width * e.canvas[0][0]),
                      (n.height = r.canvas.height * e.canvas[0][0]),
                      t.data.children.forEach(function (t) {
                        (i.globalCompositeOperation = t.reversed
                          ? "destination-out"
                          : "source-over"),
                          (0, o.exec)(i, u(t), e);
                      }),
                      (r.ctx.globalAlpha = t.data.alpha),
                      r.ctx.drawImage(n, 0, 0),
                      (r.ctx.globalAlpha = 1));
                  }
                });
              }),
              (n.prototype.renderMask = function (t, e) {
                var r = this;
                t.forEach(function (t) {
                  var o;
                  if ("imageData" === t.type) {
                    var n = document.createElement("canvas"),
                      i = n.getContext("2d");
                    if (i) {
                      var a = t.data,
                        s = a.width,
                        c = a.height,
                        u = a.image,
                        d = new ImageData(u, s, c);
                      (n.width = d.width),
                        (n.height = d.height),
                        i.putImageData(d, 0, 0),
                        (o = r.ctx).drawImage.apply(o, h([n], e));
                    }
                  }
                });
              }),
              (n.prototype.renderBg = function (t) {
                var e;
                (e = this.ctx).drawImage.apply(e, h([this.bgResource.dom], t));
              }),
              (n.prototype.collectBgFacts = function (t, o) {
                var n = this.bgResource,
                  i = {
                    topLeft: (0, r.mapPoint)({ x: 0, y: 0 }, t, o),
                    bottomRight: (0, r.mapPoint)(
                      { x: this.canvas.width, y: this.canvas.height },
                      t,
                      o
                    ),
                  },
                  a = {
                    topLeft: (0, r.mapPoint)({ x: 0, y: 0 }, o, t),
                    bottomRight: (0, r.mapPoint)(
                      { x: n.width, y: n.height },
                      o,
                      t
                    ),
                  };
                return [
                  (0, e.clamp)(i.topLeft.x, 0, n.width),
                  (0, e.clamp)(i.topLeft.y, 0, n.height),
                  (0, e.clamp)(i.bottomRight.x - i.topLeft.x, 0, n.width),
                  (0, e.clamp)(i.bottomRight.y - i.topLeft.y, 0, n.height),
                  (0, e.clamp)(a.topLeft.x, 0, this.canvas.width),
                  (0, e.clamp)(a.topLeft.y, 0, this.canvas.height),
                  (0, e.clamp)(
                    a.bottomRight.x - a.topLeft.x,
                    0,
                    this.canvas.width
                  ),
                  (0, e.clamp)(
                    a.bottomRight.y - a.topLeft.y,
                    0,
                    this.canvas.height
                  ),
                ];
              }),
              (n.prototype.canSkipRender = function (t) {
                var e,
                  r = this.isRenderUnchanged(t);
                return (
                  (this.lastFrame =
                    null === (e = this.videoControl) || void 0 === e
                      ? void 0
                      : e.currentFrame),
                  (this.lastStateTree = t),
                  r
                );
              }),
              (n.prototype.isRenderUnchanged = function (t) {
                var e;
                return (
                  !!this.lastStateTree &&
                  (!this.videoControl || !this.videoControl.playing) &&
                  (null === (e = this.videoControl) || void 0 === e
                    ? void 0
                    : e.currentFrame) === this.lastFrame &&
                  this.isCoordUnchanged(t) &&
                  t.jobs.equals(this.lastStateTree.jobs)
                );
              }),
              (n.prototype.isCoordUnchanged = function (e) {
                return (
                  !!this.lastStateTree &&
                  t.eq(e.coord.canvas, this.lastStateTree.coord.canvas) &&
                  t.eq(e.coord.res, this.lastStateTree.coord.res)
                );
              }),
              (n.prototype.setCursor = function (t) {
                this.lastCursor !== t &&
                  (this.lastCursor
                    ? this.canvas.classList.replace(d(this.lastCursor), d(t))
                    : this.canvas.classList.add(d(t)),
                  (this.lastCursor = t));
              }),
              n
            );
          })();
        exports.Renderer = p;
      },
      {
        "../infrastructure/m3": "ZIjE",
        "../utils/misc": "jqwk",
        "../utils/coord": "YrAe",
        "./builtinShape": "TKQ9",
        "../utils/colors": "WQKF",
      },
    ],
    zLWd: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getDomRect = exports.getAbsPoint = void 0);
        var t = function (t) {
          for (var e = t.offsetLeft, o = t.offsetTop; (t = t.offsetParent); )
            (e += t.offsetLeft), (o += t.offsetTop);
          return { left: e, top: o };
        };
        exports.getAbsPoint = t;
        var e = function (t) {
          return { width: t.offsetWidth, height: t.offsetHeight };
        };
        exports.getDomRect = e;
      },
      {},
    ],
    ycf9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.startResizeObserver = void 0);
        var e = function (e, r) {
          if (window.ResizeObserver) {
            var n = new window.ResizeObserver(function () {
              window.requestAnimationFrame(function () {
                r();
              });
            });
            return (
              n.observe(e),
              function () {
                return n.disconnect();
              }
            );
          }
          console.error("not find ResizeObserver，use setTimeout instead");
          var t = !1,
            i = function () {
              t ||
                (r(),
                setTimeout(function () {
                  return i();
                }, 200));
            };
          return (
            i(),
            function () {
              t = !0;
            }
          );
        };
        exports.startResizeObserver = e;
      },
      {},
    ],
    vXlT: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.ConstraintValue = void 0);
        var e = (function () {
          function e(e, t) {
            (this.internalValue = t), (this.normalize = e);
          }
          return (
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.internalValue;
              },
              set: function (e) {
                this.internalValue = this.normalize(e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
        exports.ConstraintValue = e;
      },
      {},
    ],
    OebA: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Zoomer = void 0);
        var t = require("../utils/misc"),
          r = require("../utils/constraintValue"),
          o = require("../utils/coord"),
          e = n(require("eventemitter3"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var i = (function () {
            var t = function (r, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o]);
                })(r, o);
            };
            return function (r, o) {
              function e() {
                this.constructor = r;
              }
              t(r, o),
                (r.prototype =
                  null === o
                    ? Object.create(o)
                    : ((e.prototype = o.prototype), new e()));
            };
          })(),
          u = function () {
            return (u =
              Object.assign ||
              function (t) {
                for (var r, o = 1, e = arguments.length; o < e; o++)
                  for (var n in (r = arguments[o]))
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                return t;
              }).apply(this, arguments);
          },
          a = 1.08,
          c = (function (e) {
            function n(o) {
              var n = e.call(this) || this;
              return (
                (n.name = "zoomer"),
                (n.factor = new r.ConstraintValue(function (r) {
                  return (0, t.clamp)(r, 1, 3);
                }, 1)),
                (n.initialCoord = o),
                n
              );
            }
            return (
              i(n, e),
              (n.prototype.reset = function (t) {
                return (this.initialCoord = t), (this.factor.value = 1), this;
              }),
              (n.prototype.respond = function (t) {
                var r = this;
                switch (t.kind) {
                  case "wheel":
                    return {
                      key: "coord",
                      trivial: !0,
                      updater: function (o) {
                        return u(u({}, o), { res: r.mouseZoom(o.res, t) });
                      },
                    };
                }
              }),
              (n.prototype.exec = function (t, r) {
                var o = this;
                if (r) {
                  var e = 0;
                  switch (t) {
                    case "zoomIn":
                      e = a;
                      break;
                    case "zoomOut":
                      e = 1 / a;
                  }
                  if (e)
                    return {
                      key: "coord",
                      updater: function (t) {
                        return u(u({}, t), {
                          res: o.zoom({ delta: e, center: r }),
                        });
                      },
                    };
                }
              }),
              (n.prototype.mouseZoom = function (t, r) {
                var e = r.delta.y < 0 ? 1 / a : a,
                  n = (0, o.mapPoint)(r.point, t);
                return this.zoom({ delta: e, center: n });
              }),
              (n.prototype.zoom = function (t) {
                var r = t.delta,
                  e = t.center;
                return (
                  (this.factor.value = this.factor.value * r),
                  this.callHook(),
                  (0, o.zoom)(this.initialCoord, 1 / this.factor.value, e)
                );
              }),
              (n.prototype.callHook = function () {
                var t = 1 === this.factor.value ? "reset" : "scale";
                this.emit(t);
              }),
              n
            );
          })(e.default);
        exports.Zoomer = c;
      },
      {
        "../utils/misc": "jqwk",
        "../utils/constraintValue": "vXlT",
        "../utils/coord": "YrAe",
        eventemitter3: "JJlS",
      },
    ],
    ZKPV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Mover = void 0);
        var r = require("../utils/coord"),
          e = function () {
            return (e =
              Object.assign ||
              function (r) {
                for (var e, o = 1, t = arguments.length; o < t; o++)
                  for (var n in (e = arguments[o]))
                    Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r;
              }).apply(this, arguments);
          },
          o = (function () {
            function o() {
              (this.name = "mover"), (this.cursor = "grab");
            }
            return (
              (o.prototype.respond = function (o) {
                var t = this;
                switch (o.kind) {
                  case "drag":
                    return {
                      key: "coord",
                      updater: function (n) {
                        t.movingFrom || (t.movingFrom = n.res);
                        var i = o.delta,
                          s = i.x,
                          u = i.y;
                        return e(e({}, n), {
                          res: (0, r.move)(t.movingFrom, { x: -s, y: -u }),
                        });
                      },
                    };
                  case "dragEnd":
                    return (this.movingFrom = void 0), {};
                }
              }),
              o
            );
          })();
        exports.Mover = o;
      },
      { "../utils/coord": "YrAe" },
    ],
    IvKX: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.VideoControl = void 0);
        var t = (function () {
          function t(t) {
            var e = this;
            (this.resource = t),
              (this.frameRate = t.frameRate),
              (this.duration = t.dom.duration),
              (this.playing = !1),
              (this.loading = !1),
              t.dom.addEventListener("ended", function () {
                e.stop();
              });
          }
          return (
            Object.defineProperty(t.prototype, "currentTime", {
              get: function () {
                return this.resource.dom.currentTime;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "currentFrame", {
              get: function () {
                var t = this.frameRate * this.duration;
                return Math.floor(
                  (this.resource.dom.currentTime / this.resource.dom.duration) *
                    t
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.stop = function () {
              (this.playing = !1), this.resource.dom.pause();
            }),
            (t.prototype.start = function () {
              (this.playing = !0), this.resource.dom.play();
            }),
            (t.prototype.controlPause = function () {
              this.playing ? this.stop() : this.start();
            }),
            (t.prototype.setCurrentTime = function (t) {
              var e = this;
              (this.resource.dom.currentTime = t),
                (this.loading = !0),
                (this.resource.dom.oncanplay = function () {
                  e.loading = !1;
                });
            }),
            t
          );
        })();
        exports.VideoControl = t;
      },
      {},
    ],
    ce9k: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.setup = void 0);
        var e = require("./core/editor"),
          r = l(require("./core/stateTree")),
          t = l(require("./infrastructure/m3")),
          n = l(require("./infrastructure/v3")),
          o = require("./renderers/2d"),
          i = require("./utils/position"),
          u = require("./utils/resizeObserver"),
          a = require("./tools/zoomer"),
          c = require("./tools/mover"),
          s = require("./video/VideoControl");
        function d(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (d = function (e) {
            return e ? t : r;
          })(e);
        }
        function l(e, r) {
          if (!r && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = d(r);
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(n, i, u)
                : (n[i] = e[i]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
        var f = function (e, r, t, n) {
            return new (t || (t = Promise))(function (o, i) {
              function u(e) {
                try {
                  c(n.next(e));
                } catch (r) {
                  i(r);
                }
              }
              function a(e) {
                try {
                  c(n.throw(e));
                } catch (r) {
                  i(r);
                }
              }
              function c(e) {
                var r;
                e.done
                  ? o(e.value)
                  : ((r = e.value),
                    r instanceof t
                      ? r
                      : new t(function (e) {
                          e(r);
                        })).then(u, a);
              }
              c((n = n.apply(e, r || [])).next());
            });
          },
          h = function (e, r) {
            var t,
              n,
              o,
              i,
              u = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function a(i) {
              return function (a) {
                return (function (i) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; u; )
                    try {
                      if (
                        ((t = 1),
                        n &&
                          (o =
                            2 & i[0]
                              ? n.return
                              : i[0]
                              ? n.throw || ((o = n.return) && o.call(n), 0)
                              : n.next) &&
                          !(o = o.call(n, i[1])).done)
                      )
                        return o;
                      switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return u.label++, { value: i[1], done: !1 };
                        case 5:
                          u.label++, (n = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = u.ops.pop()), u.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            u = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            u.label = i[1];
                            break;
                          }
                          if (6 === i[0] && u.label < o[1]) {
                            (u.label = o[1]), (o = i);
                            break;
                          }
                          if (o && u.label < o[2]) {
                            (u.label = o[2]), u.ops.push(i);
                            break;
                          }
                          o[2] && u.ops.pop(), u.trys.pop();
                          continue;
                      }
                      i = r.call(e, u);
                    } catch (a) {
                      (i = [6, a]), (n = 0);
                    } finally {
                      t = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, a]);
              };
            }
          },
          v = function (e, r) {
            var t = "function" == typeof Symbol && e[Symbol.iterator];
            if (!t) return e;
            var n,
              o,
              i = t.call(e),
              u = [];
            try {
              for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; )
                u.push(n.value);
            } catch (a) {
              o = { error: a };
            } finally {
              try {
                n && !n.done && (t = i.return) && t.call(i);
              } finally {
                if (o) throw o.error;
              }
            }
            return u;
          },
          p = function () {
            for (var e = [], r = 0; r < arguments.length; r++)
              e = e.concat(v(arguments[r]));
            return e;
          },
          w = function (e) {
            var r = new Image();
            return new Promise(function (t) {
              (r.onload = function () {
                return t({ w: r.width, h: r.height, img: r });
              }),
                (r.onerror = function () {
                  return t({ w: 0, h: 0, img: r });
                }),
                (r.src = e);
            });
          },
          y = function (e) {
            var r = document.createElement("video");
            return (
              r.setAttribute("preload", "auto"),
              (r.autoplay = !1),
              new Promise(function (t) {
                r.addEventListener("canplay", function () {
                  t({ w: r.videoWidth, h: r.videoHeight, video: r });
                }),
                  (r.onerror = function () {
                    return t({ w: 0, h: 0, video: r });
                  }),
                  (r.src = e);
              })
            );
          },
          m = function (e) {
            return f(void 0, void 0, void 0, function () {
              var r, t, n, o, i, u, a, c, s;
              return h(this, function (d) {
                switch (d.label) {
                  case 0:
                    return (r = e.src), "image" !== e.type ? [3, 2] : [4, w(r)];
                  case 1:
                    return (
                      (t = d.sent()),
                      (n = t.w),
                      (o = t.h),
                      (i = t.img),
                      [
                        2,
                        {
                          kind: e.type,
                          src: r,
                          dom: i,
                          width: n,
                          height: o,
                          ratio: n / o,
                        },
                      ]
                    );
                  case 2:
                    return [4, y(r)];
                  case 3:
                    return (
                      (u = d.sent()),
                      (a = u.w),
                      (c = u.h),
                      (s = u.video),
                      [
                        2,
                        {
                          kind: e.type,
                          src: r,
                          dom: s,
                          frameRate: e.frameRate,
                          width: a,
                          height: c,
                          ratio: a / c,
                        },
                      ]
                    );
                }
              });
            });
          },
          g = function (e, r) {
            var t = Math.min(r.width / e.width, r.height / e.height);
            return [
              [1 / t, 0, -((r.width - e.width * t) / 2) / t],
              [0, 1 / t, -((r.height - e.height * t) / 2) / t],
              [0, 0, 1],
            ];
          },
          b = function (e, r) {
            var t = (0, i.getDomRect)(e),
              o = [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
              ],
              u = g(r, t),
              a = r.width > t.width || r.height > t.height ? 2 : 1;
            return {
              coord: {
                res: u,
                canvas: [
                  n.multiplyScalar(o[0], a),
                  n.multiplyScalar(o[1], a),
                  o[2],
                ],
                dom: o,
              },
              renderPrecisionFactor: a,
              rect: t,
            };
          },
          q = function (n, i, d) {
            return f(void 0, void 0, void 0, function () {
              var l, f, v, w, y, g, q, P, O, k, x, C, j, M, S;
              return h(this, function (h) {
                switch (h.label) {
                  case 0:
                    return (n.dataset.src = i.src), [4, m(i)];
                  case 1:
                    if ((l = h.sent()).src !== n.dataset.src) return [2];
                    for (
                      f = b(n, l),
                        v = f.coord,
                        w = f.renderPrecisionFactor,
                        y = f.rect,
                        (g = document.createElement("canvas")).width =
                          w * y.width,
                        g.height = w * y.height,
                        g.style.width = "100%",
                        g.style.height = "100%";
                      n.firstChild;

                    )
                      n.removeChild(n.firstChild);
                    return (
                      n.appendChild(g),
                      (q = r.from({
                        src: l.src,
                        width: l.width,
                        height: l.height,
                        coord: v,
                      })),
                      (P = new a.Zoomer(v.res)),
                      (O = new c.Mover()),
                      (k = "video" === i.type ? new s.VideoControl(l) : void 0),
                      (x = new o.Renderer(g, l, k)),
                      (C = new e.Editor(q, p([P], d, [O]))),
                      (j = C.watch(g, k)),
                      (M = function () {
                        var e = b(n, l),
                          r = e.coord,
                          o = e.rect,
                          i = e.renderPrecisionFactor;
                        if (
                          ["dom", "canvas"].reduce(function (e, n) {
                            return e || !t.eq(r[n], C.stateTree.coord[n]);
                          }, !t.eq(r.res, P.initialCoord))
                        ) {
                          var u = C.stateTree.set("coord", r);
                          P.reset(r.res), (C.stateTree = u);
                          var a = i * o.width,
                            c = i * o.height;
                          (a === g.width && c === g.height) ||
                            ((g.width = a), (g.height = c), (x.forced = !0));
                        }
                      }),
                      (S = (function () {
                        if (document.body.contains(g))
                          return (0, u.startResizeObserver)(n, M);
                      })()),
                      x.start(function () {
                        return C.renderTree;
                      }),
                      [
                        2,
                        {
                          editor: C,
                          teardown: function () {
                            x.stop(), S && S(), j();
                          },
                          zoomer: P,
                          renderer: x,
                          videoControl: k,
                          fit: M,
                        },
                      ]
                    );
                }
              });
            });
          };
        exports.setup = q;
      },
      {
        "./core/editor": "Ayhy",
        "./core/stateTree": "BmKp",
        "./infrastructure/m3": "ZIjE",
        "./infrastructure/v3": "me0G",
        "./renderers/2d": "tTbS",
        "./utils/position": "zLWd",
        "./utils/resizeObserver": "ycf9",
        "./tools/zoomer": "OebA",
        "./tools/mover": "ZKPV",
        "./video/VideoControl": "IvKX",
      },
    ],
    J0Ma: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.PainterSkeleton = void 0);
        var t = require("immutable"),
          e = function () {
            return (e =
              Object.assign ||
              function (t) {
                for (var e, i = 1, r = arguments.length; i < r; i++)
                  for (var s in (e = arguments[i]))
                    Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                return t;
              }).apply(this, arguments);
          },
          i = 4,
          r = (function () {
            function r(e) {
              var r = this;
              void 0 === e && (e = {}),
                (this.name = ""),
                (this.handleSize = i),
                (this.responded = {}),
                (this.activeIdx = -1),
                (this.shapes = (0, t.List)()),
                (this.creatable = !1),
                (this.memo = {}),
                (this.id = 0),
                (this.on = {}),
                (this.nextID = function () {
                  return r.name + "-" + r.id++;
                }),
                (this.on.active = e.onActive);
            }
            return (
              (r.prototype.sync = function (e) {
                this.shapes = e.annotations[this.name] || (0, t.List)();
              }),
              (r.prototype.activate = function () {
                this.creatable = !0;
              }),
              (r.prototype.deactivate = function () {
                (this.creatable = !1), (this.active = void 0);
              }),
              (r.prototype.updateCategory = function (t) {
                var i = this;
                if (this.active)
                  return {
                    key: "annotations",
                    updater: function (r) {
                      var s;
                      return i.active
                        ? ((i.active = i.active.set("category", t)),
                          e(e({}, r), (((s = {})[i.name] = i.output), s)))
                        : r;
                    },
                  };
              }),
              (r.prototype.exec = function (t, i) {
                var r = this;
                switch (t) {
                  case "delete":
                    var s = this.shapes.filter(function (t) {
                      return t.id !== i;
                    });
                    if (s.size === this.shapes.size) return;
                    return {
                      key: "annotations",
                      updater: function (t) {
                        var i;
                        return (
                          (r.shapes = s),
                          (r.active = void 0),
                          (r.hover = void 0),
                          e(e({}, t), (((i = {})[r.name] = r.output), i))
                        );
                      },
                    };
                }
              }),
              (r.prototype.respond = function (t, i) {
                var r,
                  s = this;
                switch (t.kind) {
                  case "press":
                    if (
                      !["Delete", "Backspace"].includes(t.value) ||
                      !this.active
                    )
                      break;
                    r = {
                      key: "annotations",
                      updater: function (t) {
                        var i;
                        return (
                          (s.shapes = s.shapes.remove(s.activeIdx)),
                          (s.active = void 0),
                          e(e({}, t), (((i = {})[s.name] = s.output), i))
                        );
                      },
                    };
                    break;
                  case "hover":
                    r = this.generateCursorPatch(t.point, i);
                    break;
                  case "click":
                    if (!this.tryActivateShape(t.point)) break;
                    r = this.cursorPatch("move");
                    break;
                  case "drag":
                    r = this.handleDrag(t, i);
                    break;
                  case "dragEnd":
                    (this.movingFrom || this.resizer) &&
                      (r = {
                        key: "annotations",
                        updater: function (t) {
                          var i;
                          return e(
                            e({}, t),
                            (((i = {})[s.name] = s.output), i)
                          );
                        },
                      }),
                      (this.movingFrom = void 0),
                      (this.resizer = void 0);
                }
                return r;
              }),
              (r.prototype.getRenderJobs = function () {
                return this.cacheable(this.doGetRenderJobs.bind(this));
              }),
              (r.prototype.getMountPoints = function () {
                var i = this;
                if (this.draft) {
                  var r = this.doGetMountPoint(this.draft),
                    s = r.className ? r.className + " draft" : "draft";
                  return (0, t.List)([
                    {
                      type: "domMountPoint",
                      data: e(e({ id: this.draft.id }, r), { className: s }),
                    },
                  ]);
                }
                var o = (0, t.List)();
                return (
                  this.shapes.forEach(function (t, r) {
                    var s, a;
                    (i.hover === t ||
                      (i.activeIdx === r && !i.resizer && !i.movingFrom) ||
                      (null ===
                        (a =
                          null === (s = t.get("category")) || void 0 === s
                            ? void 0
                            : s.meta) || void 0 === a
                        ? void 0
                        : a.showing)) &&
                      (o = o.push({
                        type: "domMountPoint",
                        data: e({ id: t.id }, i.doGetMountPoint(t)),
                      }));
                  }),
                  o
                );
              }),
              (r.prototype.handleDrag = function (t, e) {
                return this.active && this.resizer
                  ? ((this.active = this.active.merge(
                      this.resizer.exec(t.current)
                    )),
                    this.responded)
                  : this.active && this.movingFrom
                  ? (this.move(t), this.responded)
                  : ((this.resizer = this.createResizer(t.start, e)),
                    this.active && this.resizer
                      ? ((this.active = this.active.merge(
                          this.resizer.exec(t.current)
                        )),
                        this.responded)
                      : this.active && this.hitTest(this.active, t.current)
                      ? (this.move(t), this.responded)
                      : void 0);
              }),
              (r.prototype.move = function (t) {
                this.active &&
                  ((this.movingFrom = this.movingFrom || this.active),
                  (this.active = this.active.merge(
                    this.doMove(this.movingFrom, t.delta)
                  )));
              }),
              (r.prototype.tryActivateShape = function (t) {
                if (this.draft) return !1;
                var e = this.getShapeUnderCursor(t);
                return (this.active = e), (this.resizer = void 0), !!e;
              }),
              (r.prototype.getShapeUnderCursor = function (t) {
                var e = this;
                return this.shapes.findLast(function (i) {
                  return e.hitTest(i, t);
                });
              }),
              Object.defineProperty(r.prototype, "output", {
                get: function () {
                  return this.draft
                    ? this.shapes.push(this.draft)
                    : this.shapes;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(r.prototype, "active", {
                get: function () {
                  return this.activeIdx > -1
                    ? this.shapes.get(this.activeIdx)
                    : void 0;
                },
                set: function (t) {
                  if (t) {
                    this.activate();
                    var e = this.shapes.indexOf(t);
                    if (e > -1) {
                      if (this.activeIdx === e) return;
                      return (
                        (this.activeIdx = e),
                        void (
                          this.on.active &&
                          this.on.active(
                            this.active ? [this.active.toJS()] : []
                          )
                        )
                      );
                    }
                    this.activeIdx < 0 ||
                      (this.shapes = this.shapes.splice(this.activeIdx, 1, t));
                  } else this.activeIdx = -1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (r.prototype.cacheable = function (t, e) {
                return (
                  void 0 === e && (e = !1),
                  e ||
                  this.memo.activeIdx !== this.activeIdx ||
                  this.memo.draft !== this.draft ||
                  this.memo.shapes !== this.shapes ||
                  this.memo.resizer !== this.resizer
                    ? ((this.memo.activeIdx = this.activeIdx),
                      (this.memo.draft = this.draft),
                      (this.memo.shapes = this.shapes),
                      (this.memo.jobs = t()),
                      (this.memo.resizer = this.resizer),
                      this.memo.jobs)
                    : this.memo.jobs
                );
              }),
              (r.prototype.generateCursorPatch = function (t, e) {
                if (this.active && this.createResizer(t, e))
                  return this.cursorPatch("pointer");
                var i = this.getShapeUnderCursor(t);
                return (
                  (this.hover = i),
                  i
                    ? i === this.active
                      ? this.trivialCursorPatch("move")
                      : this.trivialCursorPatch("activate")
                    : void 0
                );
              }),
              (r.prototype.cursorPatch = function (t) {
                return {
                  key: "cursor",
                  updater: function (e) {
                    return t;
                  },
                };
              }),
              (r.prototype.trivialCursorPatch = function (t) {
                return {
                  key: "cursor",
                  trivial: !0,
                  updater: function (e) {
                    return t;
                  },
                };
              }),
              (r.prototype.movePoint = function (t, e) {
                return { x: t.x + e.x, y: t.y + e.y };
              }),
              (r.prototype.createHandle = function (t) {
                return {
                  type: "circle",
                  data: { c: t, r: this.handleSize, isResizer: !0 },
                  style: {
                    background: "#fff",
                    border: { width: 1, color: "rgba(71, 118, 241, 1)" },
                  },
                };
              }),
              (r.prototype.createResizer = function (t, e) {
                throw new Error("please implement createResizer");
              }),
              (r.prototype.doGetRenderJobs = function () {
                throw new Error("please implement doGetRenderJobs");
              }),
              (r.prototype.hitTest = function (t, e) {
                throw new Error("please implement hitTest");
              }),
              (r.prototype.doMove = function (t, e) {
                throw new Error("please implement doMove");
              }),
              (r.prototype.doGetMountPoint = function (t) {
                throw new Error("please implement doGetMountPoint");
              }),
              r
            );
          })();
        exports.PainterSkeleton = r;
      },
      { immutable: "vqB5" },
    ],
    J2o0: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.DragPainter = void 0);
        var t = require("./skeleton"),
          r = (function () {
            var t = function (r, e) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
                })(r, e);
            };
            return function (r, e) {
              function n() {
                this.constructor = r;
              }
              t(r, e),
                (r.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            };
          })(),
          e = function () {
            return (e =
              Object.assign ||
              function (t) {
                for (var r, e = 1, n = arguments.length; e < n; e++)
                  for (var o in (r = arguments[e]))
                    Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                return t;
              }).apply(this, arguments);
          },
          n = (function (t) {
            function n() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              r(n, t),
              (n.prototype.respond = function (r, n) {
                var o = this,
                  i = t.prototype.respond.call(this, r, n);
                if (i) return i;
                switch (r.kind) {
                  case "drag":
                    return {
                      key: "",
                      updater: function () {
                        o.drag(r, n);
                      },
                    };
                  case "dragEnd":
                    return {
                      key: "annotations",
                      updater: function (t) {
                        var r;
                        return (
                          o.dragEnd(n.category),
                          e(e({}, t), (((r = {})[o.name] = o.output), r))
                        );
                      },
                    };
                  case "click":
                    return { lazy: !0 };
                }
              }),
              (n.prototype.drag = function (t, r) {
                this.creatable
                  ? ((this.active = void 0), (this.draft = this.doCreate(t, r)))
                  : (this.draft = void 0);
              }),
              (n.prototype.dragEnd = function (t) {
                if (this.draft)
                  return this.draft
                    ? ((this.draft = this.draft.set("category", t)),
                      (this.shapes = this.shapes.push(this.draft)),
                      (this.active = this.draft),
                      (this.draft = void 0),
                      !0)
                    : void 0;
              }),
              (n.prototype.doCreate = function (t, r) {
                throw new Error("please implement doCreate");
              }),
              n
            );
          })(t.PainterSkeleton);
        exports.DragPainter = n;
      },
      { "./skeleton": "J0Ma" },
    ],
    OCtS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.CirclePainter = exports.CircleShape = void 0);
        var t = require("./dragPainter"),
          r = require("immutable"),
          e = require("../utils/misc"),
          n = (function () {
            var t = function (r, e) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
                })(r, e);
            };
            return function (r, e) {
              function n() {
                this.constructor = r;
              }
              t(r, e),
                (r.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            };
          })(),
          i = function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var r, e = 1, n = arguments.length; e < n; e++)
                  for (var i in (r = arguments[e]))
                    Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
                return t;
              }).apply(this, arguments);
          },
          o = 6,
          c = function (t, r) {
            return {
              c: { x: (t.x + r.x) / 2, y: (t.y + r.y) / 2 },
              r: (0, e.distance)(t, r) / 2,
            };
          },
          a = (function (t) {
            function r() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return n(r, t), r;
          })((0, r.Record)({ id: "", c: e.dumbPoint, r: 0, category: void 0 }));
        exports.CircleShape = a;
        var u = (function () {
            function t(t) {
              this.fixed = t;
            }
            return (
              (t.prototype.exec = function (t) {
                var r = {
                  x: (t.x + this.fixed.x) / 2,
                  y: (t.y + this.fixed.y) / 2,
                };
                return { r: (0, e.distance)(t, this.fixed) / 2, c: r };
              }),
              t
            );
          })(),
          s = (function (t) {
            function s() {
              var r = (null !== t && t.apply(this, arguments)) || this;
              return (r.name = "circle"), r;
            }
            return (
              n(s, t),
              (s.prototype.restore = function (t) {
                var e = this;
                return (
                  (this.shapes = (0, r.List)(
                    t.map(function (t) {
                      return new a(t).set("id", e.nextID());
                    })
                  )),
                  this.shapes
                );
              }),
              (s.prototype.doCreate = function (t, r) {
                if (
                  !(
                    Math.min(Math.abs(t.delta.x), Math.abs(t.delta.y)) <
                    o * r.interactionFactor
                  )
                ) {
                  var e = c(t.start, t.current),
                    n = e.c,
                    i = e.r;
                  return new a({ c: n, r: i }).set("id", this.nextID());
                }
              }),
              (s.prototype.hitTest = function (t, r) {
                return (0, e.distance)(t.c, r) <= t.r;
              }),
              (s.prototype.doMove = function (t, r) {
                return { c: this.movePoint(t.c, r), r: t.r };
              }),
              (s.prototype.createResizer = function (t, r) {
                if (this.active) {
                  var n = (0, e.distance)(this.active.c, t),
                    i =
                      Math.abs(n - this.active.r) <
                      (o / 2) * r.interactionFactor,
                    c = {
                      x: 2 * this.active.c.x - t.x,
                      y: 2 * this.active.c.y - t.y,
                    };
                  return i ? new u(c) : void 0;
                }
              }),
              (s.prototype.doGetRenderJobs = function () {
                var t = this.draft || this.active;
                return this.output.reduce(function (r, e) {
                  var n,
                    o = t === e,
                    c = o
                      ? "rgba(71, 118, 241, 0.6)"
                      : "rgba(71, 118, 241, 0.4)",
                    a = o
                      ? "#fff"
                      : e.category
                      ? "rgba(71, 118, 241, 0.6)"
                      : "rgba(255,0, 0,255)";
                  return r.push({
                    type: "circle",
                    data: { c: e.c, r: e.r },
                    style: i(
                      { background: c, border: { width: 1, color: a } },
                      (null === (n = e.category) || void 0 === n
                        ? void 0
                        : n.style) || {}
                    ),
                  });
                }, (0, r.List)());
              }),
              (s.prototype.doGetMountPoint = function (t) {
                var r;
                return {
                  name:
                    null === (r = t.category) || void 0 === r ? void 0 : r.name,
                  className: "circle",
                  x: t.c.x,
                  y: t.c.y,
                };
              }),
              s
            );
          })(t.DragPainter);
        exports.CirclePainter = s;
      },
      { "./dragPainter": "J2o0", immutable: "vqB5", "../utils/misc": "jqwk" },
    ],
    Ar0y: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.EMPTY_LIST = exports.PATCH = exports.CURSOR = void 0);
        var e = require("immutable"),
          r = { MOVE: "move", ACTIVATE: "activate", POINTER: "pointer" };
        exports.CURSOR = r;
        var t = { NOOP: [], LAZY: { lazy: !0 }, ACTIVE: [{}] };
        exports.PATCH = t;
        var o = (0, e.List)();
        exports.EMPTY_LIST = o;
      },
      { immutable: "vqB5" },
    ],
    aa56: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.decode = exports.encode = void 0);
        const { fromCharCode: e } = String,
          o = (o) => {
            const t = [];
            for (let r = 0, { length: s } = o; r < s; r++) t.push(e(o[r]));
            return btoa(t.join(""));
          };
        exports.encode = o;
        const t = (e) => e.charCodeAt(0),
          r = (e) => Uint8Array.from(atob(e), t);
        exports.decode = r;
      },
      {},
    ],
    pDct: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Bitmap = void 0);
        var t = require("uint8-to-base64"),
          i = 3,
          e = (function () {
            function e(t) {
              (this.cols = 8), (this.rows = 1 + (t >> i));
              var e = new ArrayBuffer(this.rows);
              (this.bin = new Uint8Array(e)), (this.size = t);
            }
            return (
              (e.fromJS = function (i) {
                var r = new e(i.size);
                return (r.bin = (0, t.decode)(i.bin)), r;
              }),
              (e.prototype.set = function (t, e) {
                var r = t >> i,
                  n = 1 << t % this.cols;
                e ? (this.bin[r] |= n) : ((n ^= 255), (this.bin[r] &= n));
              }),
              (e.prototype.get = function (t) {
                var e = t >> i,
                  r = 1 << t % this.cols;
                return (this.bin[e] & r) > 0;
              }),
              (e.prototype.toJS = function () {
                return { size: this.size, bin: (0, t.encode)(this.bin) };
              }),
              e
            );
          })();
        exports.Bitmap = e;
      },
      { "uint8-to-base64": "aa56" },
    ],
    B6jF: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.rayCast = i),
          (exports.lineToPoints = s),
          (exports.testPolygon = u),
          (exports.testComposition = a),
          (exports.testLine = c),
          (exports.testCircle = x),
          (exports.testJob = f),
          (exports.factoryHitTest = void 0);
        var t = require("./misc"),
          e = require("../serializers/bitmap"),
          r = function (t, e) {
            return e
              ? [
                  { x: t.x - e, y: t.y - e },
                  { x: t.x - e, y: t.y + e },
                  { x: t.x + e, y: t.y - e },
                  { x: t.x + e, y: t.y + e },
                ]
              : [t];
          },
          n = function (t) {
            var r = e.Bitmap.fromJS(t),
              n = t.height;
            return function (t) {
              return r.get(Math.round(t.x) * n + Math.round(t.y));
            };
          };
        function i(t, e, r, n, i) {
          var o = !1,
            s = 0,
            u = 0;
          for (s = 0, u = t - 1; s < t; u = s++)
            r[s] > i != r[u] > i &&
              n < ((e[u] - e[s]) * (i - r[s])) / (r[u] - r[s]) + e[s] &&
              (o = !o);
          return o;
        }
        function o(t, e) {
          for (var r = e.x, n = e.y, i = 0, o = 0; o < t.length; o++) {
            var s = t[o],
              u = t[(o + 1) % t.length];
            if (!((s.y < n && u.y < n) || (s.y >= n && u.y >= n)))
              ((n - s.y) / (u.y - s.y)) * (u.x - s.x) + s.x >= r && i++;
          }
          return i % 2 == 0;
        }
        function s(e, r) {
          var n = e[0],
            i = n.x,
            o = n.y,
            s = e[1],
            u = s.x,
            a = s.y,
            c = (0, t.distance)(e[0], e[1]) || 1,
            x = (r * (a - o)) / c / 2,
            y = (r * (u - i)) / c / 2;
          return [
            { x: i + x, y: o - y },
            { x: i - x, y: o + y },
            { x: u - x, y: a + y },
            { x: u + x, y: a - y },
          ];
        }
        function u(t, e) {
          return !o(t, e);
        }
        function a(e, i) {
          e.forEach(function (t) {
            !t.hitTest && t.hitTestJS && (t.hitTest = n(t.hitTestJS));
          });
          var o = { minX: i.x, maxX: i.x, minY: i.y, maxY: i.y },
            s = function (e) {
              var n = e.segments,
                s = e.width,
                u = e.hitTest;
              return u
                ? r(i, s / 2).some(function (t) {
                    return u(t);
                  })
                : n.search(o).some(function (e) {
                    return (0, t.distanceToSeg)(e.a, e.b, i) <= s / 2;
                  });
            };
          return e.reduce(function (t, e) {
            switch (e.mode) {
              case "base":
                if (t) return !0;
                var n = e.width / 2;
                return r(i, n).some(function (t) {
                  return e.hitTest ? e.hitTest(t) : u(e.points, t);
                });
              case "add":
                return !!t || s(e);
              case "del":
                return !!t && !s(e);
            }
          }, !1);
        }
        function c(t, e, r) {
          return u(s(t, e), r);
        }
        function x(e, r) {
          return (0, t.distance)(e.c, r) <= e.r;
        }
        function y(t, e, r) {
          return u([t, { x: t.x, y: e.y }, e, { x: e.x, y: t.y }], r);
        }
        function f(t, e) {
          switch (t.type) {
            case "rect":
              return y(t.data.topLeft, t.data.bottomRight, e);
            case "circle":
              return x(t.data, e);
            case "polygon":
              return u(t.data.points, e);
          }
          return !1;
        }
        exports.factoryHitTest = n;
      },
      { "./misc": "jqwk", "../serializers/bitmap": "pDct" },
    ],
    AMSF: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          var r,
            n = void 0;
          return function () {
            var i = e(this);
            return n &&
              n.length === i.length &&
              i.every(function (e, t) {
                return n && n[t] === e;
              })
              ? r
              : ((n = i), (r = t.call(this)));
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.memoize = e);
      },
      {},
    ],
    urDp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.calcRect = exports.movePoint = void 0);
        var t = function (t, e) {
          return { x: t.x + e.x, y: t.y + e.y };
        };
        exports.movePoint = t;
        var e = function (t, e) {
          return [
            { x: Math.min(t.x, e.x), y: Math.min(t.y, e.y) },
            { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) },
          ];
        };
        exports.calcRect = e;
      },
      {},
    ],
    sOPl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.RangeSelector =
            exports.HandleManager =
            exports.CursorManager =
            exports.Mover =
            exports.Resizer =
              void 0);
        var t = require("immutable"),
          e = require("../../utils/colors"),
          r = require("../../utils/freeze"),
          i = require("../../utils/methodHelper"),
          o = require("../../utils/misc"),
          n = require("../../utils/shape"),
          s = (function () {
            function t(t) {
              this.doResize = t;
            }
            return (
              Object.defineProperty(t.prototype, "doing", {
                get: function () {
                  return !!this.fixed;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.start = function (t, e) {
                (this.beforeResize = t), (this.fixed = e);
              }),
              (t.prototype.stop = function () {
                (this.fixed = void 0), (this.beforeResize = void 0);
              }),
              (t.prototype.resize = function (t, e) {
                return this.fixed && this.beforeResize
                  ? this.beforeResize.every(function (e) {
                      return e.id !== t.id;
                    })
                    ? t
                    : t.merge(this.doResize(this.fixed, e))
                  : t;
              }),
              (t.prototype.finish = function () {
                this.stop();
              }),
              t
            );
          })();
        exports.Resizer = s;
        var u = (function () {
          function t(t, e) {
            (this.hitTest = t), (this.mutate = e);
          }
          return (
            Object.defineProperty(t.prototype, "doing", {
              get: function () {
                return !!this.beforeMove;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.start = function (t, e) {
              var r = this;
              return t.every(function (t) {
                return !r.hitTest(t, e);
              })
                ? ((this.beforeMove = void 0), !1)
                : ((this.beforeMove = t), !0);
            }),
            (t.prototype.move = function (t, e) {
              if (!this.beforeMove) return t;
              var r = this.beforeMove.find(function (e) {
                return e.id === t.id;
              });
              return r && r ? this.mutate(r, e) : t;
            }),
            (t.prototype.finish = function () {
              this.stop();
            }),
            (t.prototype.stop = function () {
              this.beforeMove = void 0;
            }),
            t
          );
        })();
        exports.Mover = u;
        var c = (function () {
          function t(t, e, r, i) {
            (this.getActiveList = t),
              (this.getShapes = e),
              (this.hitHandle = r),
              (this.hitTest = i);
          }
          return (
            (t.prototype.generatePatch = function (t, e) {
              var i = this;
              return this.hitHandle(t, e)
                ? this.trivialCursorPatch(r.CURSOR.POINTER)
                : this.getShapes().find(function (e) {
                    return i.hitTest(e, t);
                  })
                ? this.getActiveList().some(function (e) {
                    return i.hitTest(e, t);
                  })
                  ? this.trivialCursorPatch(r.CURSOR.MOVE)
                  : this.trivialCursorPatch(r.CURSOR.ACTIVATE)
                : void 0;
            }),
            (t.prototype.cursorPatch = function (t) {
              return {
                key: "cursor",
                updater: function (e) {
                  return t;
                },
              };
            }),
            (t.prototype.trivialCursorPatch = function (t) {
              return {
                key: "cursor",
                trivial: !0,
                updater: function (e) {
                  return t;
                },
              };
            }),
            t
          );
        })();
        exports.CursorManager = c;
        var h = (function () {
          function t(t) {
            var r = this;
            (this.getAll = t),
              (this.size = 4),
              (this.getSingleRenderJob = function (t) {
                return {
                  type: "circle",
                  data: { c: t, r: r.size, isResizer: !0 },
                  style: {
                    background: e.WHITE,
                    border: { width: 1, color: e.BLUE },
                  },
                };
              }),
              (this.getRenderJobs = (0, i.memoize)(
                function () {
                  return [r.getAll()];
                },
                function () {
                  return r.getAll().map(r.getSingleRenderJob);
                }
              ));
          }
          return (
            (t.prototype.hitTest = function (t, e) {
              var r = this;
              return this.getAll().find(function (i) {
                return (0, o.distance)(i, t) <= r.size * e.interactionFactor;
              });
            }),
            t
          );
        })();
        exports.HandleManager = h;
        var a = (function () {
          function e(t, e) {
            (this.getShapes = t), (this.inRange = e);
          }
          return (
            Object.defineProperty(e.prototype, "doing", {
              get: function () {
                return !!this.startPoint;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.start = function (t) {
              this.startPoint = t;
            }),
            (e.prototype.stop = function () {
              this.startPoint = void 0;
            }),
            (e.prototype.getCandidate = function (t) {
              if (this.doing && this.startPoint)
                return (0, n.calcRect)(this.startPoint, t);
            }),
            (e.prototype.finish = function (e) {
              var r = this;
              if (!this.startPoint) return (0, t.List)();
              var i = (0, n.calcRect)(this.startPoint, e);
              return (
                this.stop(),
                this.getShapes().reduce(function (t, e) {
                  return r.inRange(e, i) ? t.push(e.id) : t;
                }, (0, t.List)())
              );
            }),
            e
          );
        })();
        exports.RangeSelector = a;
      },
      {
        immutable: "vqB5",
        "../../utils/colors": "WQKF",
        "../../utils/freeze": "Ar0y",
        "../../utils/methodHelper": "AMSF",
        "../../utils/misc": "jqwk",
        "../../utils/shape": "urDp",
      },
    ],
    wwZz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Skeleton = void 0);
        var e = require("immutable"),
          t = require("../../utils/colors"),
          r = require("../../utils/freeze"),
          n = require("../../utils/methodHelper"),
          i = require("./commonAction"),
          o = function () {
            return (o =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          a = function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (s) {
              i = { error: s };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          },
          s = (function () {
            function s(t) {
              var a = this;
              void 0 === t && (t = {}),
                (this.id = 0),
                (this.name = ""),
                (this.shapes = r.EMPTY_LIST),
                (this.readonly = !1),
                (this.internalActiveIdList = r.EMPTY_LIST),
                (this.hoverId = ""),
                (this.foreground = !1),
                (this.on = {}),
                (this.getActiveList = (0, n.memoize)(
                  function () {
                    return [a.activeIdList, a.getShapesOfFrame()];
                  },
                  function () {
                    return a.activeIdList.reduce(function (e, t) {
                      var r = a.getShapesOfFrame().find(function (e) {
                        return e.id === t;
                      });
                      return r ? e.push(r) : e;
                    }, (0, e.List)());
                  }
                )),
                (this.getFrameShapeAccessor = (0, n.memoize)(
                  function () {
                    return [a.shapes];
                  },
                  function () {
                    return a.shapes.reduce(function (t, n) {
                      return null == n.frame
                        ? t
                        : (t[n.frame] || (t[n.frame] = r.EMPTY_LIST),
                          (t[n.frame] = t[n.frame]
                            ? t[n.frame].push(n)
                            : (0, e.List)([n])),
                          t);
                    }, {});
                  }
                )),
                (this.getShapesOfFrame = (0, n.memoize)(
                  function () {
                    return [a.shapes, a.frame];
                  },
                  function () {
                    return null == a.frame
                      ? a.shapes
                      : a.getFrameShapeAccessor()[a.frame] || r.EMPTY_LIST;
                  }
                )),
                (this.nextID = function () {
                  return a.name + "-" + a.id++;
                }),
                (this.cursorManager = new i.CursorManager(
                  this.getActiveList,
                  this.getShapesOfFrame,
                  function (e, t) {
                    return a.handleManager.hitTest(e, t);
                  },
                  this.hitTest
                )),
                (this.updateCategory = function (e) {
                  if (a.activeIdList.size)
                    return {
                      key: "annotations",
                      trivial: !0,
                      updater: function (t) {
                        var r;
                        return a.activeIdList.size
                          ? ((a.shapes = a.shapes.map(function (t) {
                              return a.activeIdList.includes(t.id)
                                ? t.set("category", e)
                                : t;
                            })),
                            o(o({}, t), (((r = {})[a.name] = a.shapes), r)))
                          : t;
                      },
                    };
                }),
                (this.exec = function (e, t) {
                  switch (e) {
                    case "delete":
                      var r = a.shapes.filter(function (e) {
                        return e.id !== t;
                      });
                      if (r.size === a.shapes.size) return;
                      return {
                        key: "annotations",
                        updater: function (e) {
                          var t;
                          return (
                            (a.shapes = r),
                            o(o({}, e), (((t = {})[a.name] = r), t))
                          );
                        },
                      };
                  }
                }),
                (this.restore = function (e) {
                  return (
                    (a.shapes = a.creator.restore(e, a.nextID, a.readonly)),
                    a.shapes
                  );
                }),
                (this.sync = function (e) {
                  a.shapes = e.annotations[a.name] || r.EMPTY_LIST;
                }),
                (this.respond = function (e, t) {
                  var n;
                  switch (e.kind) {
                    case "sync-video":
                      return (a.frame = e.frame), r.PATCH.NOOP;
                    case "click":
                      return a.handleClick(e, t);
                    case "hover":
                      var i = a.handleHover(e, t);
                      return (
                        (a.hoverId =
                          (null === (n = a.getShapeUnderPoint(e.point)) ||
                          void 0 === n
                            ? void 0
                            : n.id) || ""),
                        i
                          ? [
                              i,
                              a.cursorManager.trivialCursorPatch(
                                r.CURSOR.ACTIVATE
                              ),
                            ]
                          : a.cursorManager.generatePatch(e.point, t)
                      );
                    case "drag":
                      return a.handleDrag(e, t);
                    case "dragEnd":
                      return a.handleDragEnd(e, t);
                    case "press":
                      return a.handlePress(e, t);
                    case "hold":
                      return a.handleHold(e, t);
                  }
                }),
                (this.getRenderJobs = (0, n.memoize)(
                  function () {
                    return [
                      a.draft,
                      a.getShapesOfFrame(),
                      a.activeIdList,
                      a.handleManager.getRenderJobs(),
                      a.dragSelection,
                    ];
                  },
                  function () {
                    var t,
                      r,
                      n,
                      i = (
                        a.draft
                          ? a.getShapesOfFrame().push(a.draft)
                          : a.getShapesOfFrame()
                      ).reduce(function (e, t) {
                        var r = a.collectStyle(t),
                          n = a.getSingleRenderJob(t, r);
                        return e.concat(
                          null == t.frame
                            ? n
                            : n.map(function (e) {
                                return o(o({}, e), { frame: t.frame });
                              })
                        );
                      }, (0, e.List)()),
                      s = a.activeIdList.get(0),
                      u = a.shapes.find(function (e) {
                        return e.id === s;
                      }),
                      c = a.getSelectionRenderJob();
                    if (
                      null ===
                        (n =
                          null ===
                            (r =
                              null === (t = null == u ? void 0 : u.category) ||
                              void 0 === t
                                ? void 0
                                : t.style) || void 0 === r
                            ? void 0
                            : r.handlerShapes) || void 0 === n
                        ? void 0
                        : n.length
                    )
                      return i.concat(c);
                    var d = a.handleManager.getRenderJobs();
                    return i.concat(d).concat(c);
                  }
                )),
                (this.getMountPoints = (0, n.memoize)(
                  function () {
                    return [
                      a.mover.doing && a.resizer.doing,
                      a.activeIdList,
                      a.hoverId,
                      a.getShapesOfFrame(),
                    ];
                  },
                  function () {
                    if (a.draft) {
                      var t = a.getSingleShapeMountPoint(a.draft),
                        n = t.className ? t.className + " draft" : "draft";
                      return (0, e.List)([
                        {
                          type: "domMountPoint",
                          data: o(o({ id: a.draft.id }, t), { className: n }),
                        },
                      ]);
                    }
                    if (a.resizer.doing || a.mover.doing) return r.EMPTY_LIST;
                    var i = a.getShapesOfFrame(),
                      s = i.find(function (e) {
                        return e.id === a.hoverId;
                      }),
                      u = s ? (0, e.List)([s]) : r.EMPTY_LIST;
                    return (
                      a.activeIdList.size <= 1 &&
                        (u = i.reduce(function (e, t) {
                          var r, n;
                          return t &&
                            ((null ===
                              (n =
                                null === (r = t.category) || void 0 === r
                                  ? void 0
                                  : r.meta) || void 0 === n
                              ? void 0
                              : n.showing) ||
                              a.activeIdList.some(function (e) {
                                return e === t.id;
                              }))
                            ? e.push(t)
                            : e;
                        }, u)),
                      u.map(function (e) {
                        return {
                          type: "domMountPoint",
                          data: o({ id: e.id }, a.getSingleShapeMountPoint(e)),
                        };
                      })
                    );
                  }
                )),
                (this.readonly = !!t.readonly),
                (this.on.active = t.onActive);
            }
            return (
              Object.defineProperty(s.prototype, "activeIdList", {
                get: function () {
                  return this.internalActiveIdList;
                },
                set: function (e) {
                  if (
                    e !== this.internalActiveIdList &&
                    ((this.internalActiveIdList = e), this.on.active)
                  ) {
                    var t = this.getActiveList();
                    this.on.active(t.toJS());
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              (s.prototype.activate = function (e) {
                this.foreground = !0;
              }),
              (s.prototype.deactivate = function (e) {
                this.foreground &&
                  ((this.activeIdList = r.EMPTY_LIST), (this.foreground = !1));
              }),
              (s.prototype.propogateChanges = function () {
                var e = this;
                return {
                  key: "annotations",
                  updater: function (t) {
                    var r;
                    return o(o({}, t), (((r = {})[e.name] = e.shapes), r));
                  },
                };
              }),
              (s.prototype.getSelectionRenderJob = function () {
                if (!this.dragSelection) return r.EMPTY_LIST;
                var n = a(this.dragSelection, 2),
                  i = n[0],
                  o = n[1];
                return (0, e.List)([
                  {
                    type: "rect",
                    data: { topLeft: i, bottomRight: o },
                    style: {
                      background: t.LITE_WHITE,
                      border: { width: 1, color: t.WHITE },
                    },
                  },
                ]);
              }),
              (s.prototype.handleClick = function (e, t) {
                return r.PATCH.NOOP;
              }),
              (s.prototype.handleDrag = function (e, t) {
                return r.PATCH.NOOP;
              }),
              (s.prototype.handleDragEnd = function (e, t) {
                return r.PATCH.NOOP;
              }),
              (s.prototype.handlePress = function (e, t) {}),
              (s.prototype.handleHold = function (e, t) {}),
              (s.prototype.handleHover = function (e, t) {}),
              (s.prototype.hitTest = function (e, t) {
                throw new Error("please implement hitTest");
              }),
              (s.prototype.getSingleRenderJob = function (e, t) {
                throw new Error("please implement getSingleRenderJob");
              }),
              (s.prototype.getShapeUnderPoint = function (e) {
                var t = this;
                return this.getShapesOfFrame().find(function (r) {
                  return t.hitTest(r, e);
                });
              }),
              (s.prototype.collectStyle = function (e) {
                var r,
                  n = this.activeIdList.some(function (t) {
                    return e.id === t;
                  }),
                  i = n ? t.DEEP_BLUE : t.LITE_BLUE,
                  a = o(
                    { background: i, border: { width: 2, color: i } },
                    (null === (r = e.category) || void 0 === r
                      ? void 0
                      : r.style) || {}
                  );
                return (
                  (a.border = o(o({}, a.border), {
                    color: n
                      ? t.WHITE
                      : e === this.draft || e.category
                      ? a.border.color
                      : t.RED,
                  })),
                  a
                );
              }),
              (s.prototype.getSingleShapeMountPoint = function (e) {
                throw new Error("please implement hitTest");
              }),
              s
            );
          })();
        exports.Skeleton = s;
      },
      {
        immutable: "vqB5",
        "../../utils/colors": "WQKF",
        "../../utils/freeze": "Ar0y",
        "../../utils/methodHelper": "AMSF",
        "./commonAction": "sOPl",
      },
    ],
    D1q9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.PolygonPainter =
            exports.PolygonCreator =
            exports.PolygonShape =
              void 0);
        var t = require("immutable"),
          e = require("../../utils/freeze"),
          r = require("../../utils/hitTest"),
          n = require("../../utils/methodHelper"),
          i = require("../../utils/misc"),
          o = require("./commonAction"),
          s = require("./skeleton"),
          a = (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })(),
          c = function () {
            return (c =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          },
          u = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              s = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                s.push(n.value);
            } catch (a) {
              i = { error: a };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return s;
          },
          p = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(u(arguments[e]));
            return t;
          },
          h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return a(e, t), e;
          })(
            (0, t.Record)({
              id: "",
              category: void 0,
              tmpEndPoint: void 0,
              frame: void 0,
              points: [],
            })
          );
        exports.PolygonShape = h;
        var f = function (t, e) {
            return (0, r.testPolygon)(t.points, e);
          },
          d = (function () {
            function e() {}
            return (
              Object.defineProperty(e.prototype, "doing", {
                get: function () {
                  return null != this.points && !!this.points.length;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.start = function (t) {
                this.points = [t];
              }),
              (e.prototype.stop = function () {
                this.points = void 0;
              }),
              (e.prototype.finish = function (t) {
                var e = t.id,
                  r = t.point,
                  n = t.category,
                  i = t.frame,
                  o = t.interactionFactor;
                if (this.points && this.doing)
                  if (this.points.length < 3) r && this.points.push(r);
                  else {
                    if (!r) {
                      var s = new h({
                        id: e,
                        frame: i,
                        points: this.points,
                        category: n,
                      });
                      return this.stop(), s;
                    }
                    if (this.readyToClose(r, o)) {
                      var a = new h({
                        id: e,
                        frame: i,
                        points: this.points,
                        category: n,
                      });
                      return this.stop(), a;
                    }
                    this.points.push(r);
                  }
              }),
              (e.prototype.getCandidate = function (t, e) {
                if (this.doing) {
                  var r = this.readyToClose(t, e)
                    ? this.points
                    : this.points.concat(t);
                  return new h({ points: r });
                }
              }),
              (e.prototype.restore = function (e, r, n) {
                var i = e.map(function (t) {
                  return c(c({}, t), { id: r() });
                });
                return n
                  ? (0, t.List)(i)
                  : (0, t.List)(
                      i.map(function (t) {
                        return new h(t);
                      })
                    );
              }),
              (e.prototype.readyToClose = function (t, e) {
                if (!this.points) return !1;
                var r = this.points[0];
                return (0, i.distance)(r, t) < 20 * e;
              }),
              e
            );
          })();
        exports.PolygonCreator = d;
        var l = (function (r) {
          function i() {
            var i = (null !== r && r.apply(this, arguments)) || this;
            return (
              (i.name = "polygon"),
              (i.creator = new d()),
              (i.mover = new o.Mover(i.hitTest, function (t, e) {
                var r = t.points.map(function (t) {
                  return { x: t.x + e.x, y: t.y + e.y };
                });
                return t.set("points", r);
              })),
              (i.resizer = new o.Resizer(function (t, e) {
                var r = t.points,
                  n = t.index;
                return { points: p(r.slice(0, n), [e], r.slice(n + 1)) };
              })),
              (i.getHandles = (0, n.memoize)(
                function () {
                  return [i.activeIdList, i.getShapesOfFrame()];
                },
                function () {
                  var e = i.activeIdList.get(0),
                    r = i.getShapesOfFrame().find(function (t) {
                      return t.id === e;
                    });
                  return r ? (0, t.List)(r.points) : (0, t.List)();
                }
              )),
              (i.handleManager = new o.HandleManager(i.getHandles)),
              (i.getSingleRenderJob = function (e, r) {
                var n = e.points,
                  o = e.category,
                  s =
                    i.draft === e
                      ? i.handleManager.getSingleRenderJob(n[0])
                      : void 0,
                  a = {
                    type: "polygon",
                    data: { points: n.concat(n[0]) },
                    style: c(c({}, r), (null == o ? void 0 : o.style) || {}),
                  };
                return (0, t.List)(s ? [a, s] : [a]);
              }),
              (i.getSingleShapeMountPoint = function (t) {
                var e;
                return c(
                  {
                    name:
                      null === (e = t.category) || void 0 === e
                        ? void 0
                        : e.name,
                  },
                  t.points[0] || { x: 0, y: 0 }
                );
              }),
              (i.confirmDraft = function (r) {
                return r
                  ? ((i.draft = void 0),
                    (i.shapes = i.shapes.push(r)),
                    (i.activeIdList = (0, t.List)([r.id])),
                    {
                      key: "annotations",
                      updater: function (t) {
                        var e;
                        return c(c({}, t), (((e = {})[i.name] = i.shapes), e));
                      },
                    })
                  : e.PATCH.NOOP;
              }),
              i
            );
          }
          return (
            a(i, r),
            (i.prototype.handleDrag = function (r, n) {
              var i = this;
              if (this.resizer.doing)
                return (
                  (this.shapes = this.shapes.map(function (t) {
                    return i.resizer.resize(t, r.current);
                  })),
                  e.PATCH.NOOP
                );
              if (this.mover.doing)
                return (
                  (this.shapes = this.shapes.map(function (t) {
                    return i.mover.move(t, r.delta);
                  })),
                  e.PATCH.NOOP
                );
              var o = this.handleManager.hitTest(r.start, n);
              if (o) {
                var s = this.getHandles().toJS(),
                  a = this.getHandles().indexOf(o);
                return (
                  this.resizer.start(this.getActiveList(), {
                    points: s,
                    index: a,
                  }),
                  e.PATCH.NOOP
                );
              }
              return (
                this.mover.start(this.getActiveList(), r.start) ||
                  (this.activeIdList = (0, t.List)()),
                e.PATCH.NOOP
              );
            }),
            (i.prototype.handleDragEnd = function (t, r) {
              return this.mover.doing
                ? (this.mover.finish(), this.propogateChanges())
                : this.resizer.doing
                ? (this.resizer.finish(), this.propogateChanges())
                : e.PATCH.NOOP;
            }),
            (i.prototype.handlePress = function (t, r) {
              var n = this;
              switch (t.value) {
                case "Enter":
                  return this.confirmDraft(
                    this.creator.finish({
                      id: this.nextID(),
                      interactionFactor: r.interactionFactor,
                      category: r.category,
                      frame: this.frame,
                    })
                  );
                case "Escape":
                  return (
                    this.creator.stop(), (this.draft = void 0), e.PATCH.NOOP
                  );
                case "Backspace":
                case "Delete":
                  return (
                    this.creator.stop(),
                    {
                      key: "annotations",
                      updater: function (t) {
                        var e,
                          r = n.activeIdList.reduce(function (t, e) {
                            return t.filter(function (t) {
                              return t.id !== e;
                            });
                          }, n.shapes);
                        return (
                          (n.shapes = r),
                          c(c({}, t), (((e = {})[n.name] = r), e))
                        );
                      },
                    }
                  );
              }
            }),
            (i.prototype.handleHold = function (t) {
              switch (t.value) {
                case "Meta":
                case "Control":
                  return e.PATCH.NOOP;
              }
            }),
            (i.prototype.handleClick = function (r, n) {
              var i = this,
                o = r.point,
                s = n.interactionFactor;
              if (this.creator.doing) {
                var a = this.creator.finish({
                  id: this.nextID(),
                  point: o,
                  interactionFactor: s,
                  category: n.category,
                  frame: this.frame,
                });
                return this.confirmDraft(a);
              }
              this.mover.stop();
              var c = this.getShapeUnderPoint(o);
              return c
                ? ((this.activeIdList = (0, t.List)([c.id])), e.PATCH.ACTIVE)
                : ((this.activeIdList = (0, t.List)()),
                  this.foreground && this.activeIdList.size < 1
                    ? {
                        lazy: !0,
                        key: "annotations",
                        updater: function (t) {
                          return (
                            i.creator.start(o),
                            (i.draft = i.creator.getCandidate(o, s)),
                            t
                          );
                        },
                      }
                    : e.PATCH.LAZY);
            }),
            (i.prototype.handleHover = function (t, e) {
              if (this.draft && this.creator.doing) {
                var r = t.point;
                this.draft = this.creator.getCandidate(r, e.interactionFactor);
              }
            }),
            (i.prototype.hitTest = function (t, e) {
              return f(t, e);
            }),
            i
          );
        })(s.Skeleton);
        exports.PolygonPainter = l;
      },
      {
        immutable: "vqB5",
        "../../utils/freeze": "Ar0y",
        "../../utils/hitTest": "B6jF",
        "../../utils/methodHelper": "AMSF",
        "../../utils/misc": "jqwk",
        "./commonAction": "sOPl",
        "./skeleton": "wwZz",
      },
    ],
    hdPK: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.ClickPainter = void 0);
        var t = require("./skeleton"),
          e = require("../utils/misc"),
          r = (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })(),
          n = function () {
            return (n =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          },
          i = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              s = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                s.push(n.value);
            } catch (a) {
              i = { error: a };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return s;
          },
          o = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(i(arguments[e]));
            return t;
          },
          s = (function () {
            function t(t, e) {
              (this.points = t), (this.index = e);
            }
            return (
              (t.prototype.exec = function (t) {
                return {
                  points: o(
                    this.points.slice(0, this.index),
                    [t],
                    this.points.slice(this.index + 1)
                  ),
                };
              }),
              t
            );
          })(),
          a = (function (t) {
            function i() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              r(i, t),
              (i.prototype.respond = function (e, r) {
                var i = this,
                  o = t.prototype.respond.call(this, e, r);
                if (o) return o;
                switch (e.kind) {
                  case "press":
                    return this.handleKeyPress(e.value, r);
                  case "hover":
                    return this.appendDraft(e.point, r);
                  case "click":
                    return {
                      key: "annotations",
                      lazy: !this.draft,
                      updater: function (t) {
                        var o,
                          s = i.shapes.size;
                        return (
                          i.handleClick(e.point, r),
                          i.shapes.size === s
                            ? t
                            : n(n({}, t), (((o = {})[i.name] = i.output), o))
                        );
                      },
                    };
                  case "drag":
                  case "dragEnd":
                    return this.responded;
                }
              }),
              (i.prototype.handleKeyPress = function (t, e) {
                var r = this;
                switch (t) {
                  case "Escape":
                    return (this.draft = void 0), this.responded;
                  case "Enter":
                    return (
                      this.confirmDraft(e.category),
                      {
                        key: "annotations",
                        lazy: !this.draft,
                        updater: function (t) {
                          var e;
                          return n(
                            n({}, t),
                            (((e = {})[r.name] = r.output), e)
                          );
                        },
                      }
                    );
                }
              }),
              (i.prototype.appendDraft = function (t, e) {
                if (this.draft) {
                  var r = this.readyToClose(t, e.renderFactor)
                    ? this.draft.points[0]
                    : t;
                  return (
                    (this.draft = this.draft.set("tmpEndPoint", r)),
                    this.responded
                  );
                }
              }),
              (i.prototype.confirmDraft = function (t) {
                this.draft &&
                  ((this.draft = this.draft
                    .set("id", this.nextID())
                    .set("category", t)),
                  (this.shapes = this.shapes.push(this.draft)),
                  (this.active = this.draft),
                  (this.draft = void 0));
              }),
              (i.prototype.createResizer = function (t, r) {
                var n = this;
                if (this.active) {
                  var i = this.getHandles().findIndex(function (i) {
                    return (
                      (0, e.distance)(i, t) < n.handleSize * r.interactionFactor
                    );
                  });
                  return i > -1 ? new s(this.active.points, i) : void 0;
                }
              }),
              (i.prototype.doMove = function (t, e) {
                var r = this;
                return {
                  points: t.points.map(function (t) {
                    return r.movePoint(t, e);
                  }),
                };
              }),
              (i.prototype.getHandles = function () {
                return this.active ? this.active.points : [];
              }),
              (i.prototype.readyToClose = function (t, e) {
                throw new Error("please implement readyToClose");
              }),
              (i.prototype.handleClick = function (t, e) {
                throw new Error("please implement handleClick");
              }),
              i
            );
          })(t.PainterSkeleton);
        exports.ClickPainter = a;
      },
      { "./skeleton": "J0Ma", "../utils/misc": "jqwk" },
    ],
    fLXt: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.LinePainter = exports.LineShape = void 0);
        var t = require("./clickPainter"),
          r = require("immutable"),
          n = require("../utils/misc"),
          e = require("../utils/hitTest"),
          o = (function () {
            var t = function (r, n) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n]);
                })(r, n);
            };
            return function (r, n) {
              function e() {
                this.constructor = r;
              }
              t(r, n),
                (r.prototype =
                  null === n
                    ? Object.create(n)
                    : ((e.prototype = n.prototype), new e()));
            };
          })(),
          i = function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var r, n = 1, e = arguments.length; n < e; n++)
                  for (var o in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                return t;
              }).apply(this, arguments);
          },
          a = function (t, r) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var e,
              o,
              i = n.call(t),
              a = [];
            try {
              for (; (void 0 === r || r-- > 0) && !(e = i.next()).done; )
                a.push(e.value);
            } catch (s) {
              o = { error: s };
            } finally {
              try {
                e && !e.done && (n = i.return) && n.call(i);
              } finally {
                if (o) throw o.error;
              }
            }
            return a;
          },
          s = function () {
            for (var t = [], r = 0; r < arguments.length; r++)
              t = t.concat(a(arguments[r]));
            return t;
          },
          u = 5,
          p = 10,
          c = (function (t) {
            function r() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return o(r, t), r;
          })(
            (0, r.Record)({
              id: "",
              points: [n.dumbPoint, n.dumbPoint],
              tmpEndPoint: void 0,
              category: void 0,
            })
          );
        exports.LineShape = c;
        var f = (function (t) {
          function a() {
            var r = (null !== t && t.apply(this, arguments)) || this;
            return (r.name = "line"), r;
          }
          return (
            o(a, t),
            (a.prototype.restore = function (t) {
              var n = this;
              return (
                (this.shapes = (0, r.List)(
                  t.map(function (t) {
                    return new c(t).set("id", n.nextID());
                  })
                )),
                this.shapes
              );
            }),
            (a.prototype.appendDraft = function (t) {
              if (this.draft)
                return (
                  (this.draft = this.draft.set("tmpEndPoint", t)),
                  this.responded
                );
            }),
            (a.prototype.handleClick = function (t, r) {
              if (this.draft && this.draft.points.length) {
                var e = this.draft.points[0];
                (0, n.distance)(e, t) < u * r.interactionFactor
                  ? (this.draft = void 0)
                  : ((this.draft = new c({ points: [e, t] })),
                    this.confirmDraft(r.category));
              } else this.draft = new c({ points: [t, t] });
            }),
            (a.prototype.hitTest = function (t, r) {
              return (0, e.testLine)(t.points, u, r);
            }),
            (a.prototype.doGetRenderJobs = function () {
              var t = this,
                n = this.draft || this.active,
                o = this.output.reduce(function (r, o) {
                  var a,
                    s,
                    u = n === o,
                    c = u
                      ? "rgba(71, 118, 241, 0.6)"
                      : "rgba(71, 118, 241, 0.4)";
                  if (t.draft === o && t.draft.tmpEndPoint) {
                    var f = t.draft.points[0],
                      d = (0, e.lineToPoints)([f, t.draft.tmpEndPoint], p);
                    return r.push(
                      {
                        type: "polygon",
                        data: { closed: !0, points: d },
                        style: i(
                          {
                            background: c,
                            border: { width: 0, color: "#fff" },
                          },
                          (null === (a = o.category) || void 0 === a
                            ? void 0
                            : a.style) || {}
                        ),
                      },
                      t.createHandle(f)
                    );
                  }
                  return r.push({
                    type: "polygon",
                    data: {
                      closed: !0,
                      points: (0, e.lineToPoints)(o.points, p),
                    },
                    style: i(
                      {
                        background: c,
                        border: {
                          width: 0,
                          color: u
                            ? "#fff"
                            : o.category
                            ? "rgba(71, 118, 241, 1)"
                            : "rgba(255,0, 0,255)",
                        },
                      },
                      (null === (s = o.category) || void 0 === s
                        ? void 0
                        : s.style) || {}
                    ),
                  });
                }, (0, r.List)()),
                a = this.getHandles().map(function (r) {
                  return t.createHandle(r);
                });
              return o.push.apply(o, s(a));
            }),
            (a.prototype.doGetMountPoint = function (t) {
              var r;
              return i(
                {
                  name:
                    null === (r = t.category) || void 0 === r ? void 0 : r.name,
                },
                t.points[0] || { x: 0, y: 0 }
              );
            }),
            a
          );
        })(t.ClickPainter);
        exports.LinePainter = f;
      },
      {
        "./clickPainter": "hdPK",
        immutable: "vqB5",
        "../utils/misc": "jqwk",
        "../utils/hitTest": "B6jF",
      },
    ],
    zTQQ: [
      function (require, module, exports) {
        var define;
        var global = arguments[3];
        var t,
          o = arguments[3];
        !(function (o, n) {
          "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = n())
            : "function" == typeof t && t.amd
            ? t(n)
            : (o.quickselect = n());
        })(this, function () {
          "use strict";
          function t(t, o, n) {
            var r = t[o];
            (t[o] = t[n]), (t[n] = r);
          }
          function o(t, o) {
            return t < o ? -1 : t > o ? 1 : 0;
          }
          return function (n, r, e, f, u) {
            !(function o(n, r, e, f, u) {
              for (; f > e; ) {
                if (f - e > 600) {
                  var a = f - e + 1,
                    i = r - e + 1,
                    c = Math.log(a),
                    h = 0.5 * Math.exp((2 * c) / 3),
                    s =
                      0.5 *
                      Math.sqrt((c * h * (a - h)) / a) *
                      (i - a / 2 < 0 ? -1 : 1),
                    l = Math.max(e, Math.floor(r - (i * h) / a + s)),
                    M = Math.min(f, Math.floor(r + ((a - i) * h) / a + s));
                  o(n, r, l, M, u);
                }
                var m = n[r],
                  p = e,
                  d = f;
                for (t(n, e, r), u(n[f], m) > 0 && t(n, e, f); p < d; ) {
                  for (t(n, p, d), p++, d--; u(n[p], m) < 0; ) p++;
                  for (; u(n[d], m) > 0; ) d--;
                }
                0 === u(n[e], m) ? t(n, e, d) : t(n, ++d, f),
                  d <= r && (e = d + 1),
                  r <= d && (f = d - 1);
              }
            })(n, r, e || 0, f || n.length - 1, u || o);
          };
        });
      },
      {},
    ],
    Ajng: [
      function (require, module, exports) {
        "use strict";
        (module.exports = i), (module.exports.default = i);
        var t = require("quickselect");
        function i(t, n) {
          if (!(this instanceof i)) return new i(t, n);
          (this._maxEntries = Math.max(4, t || 9)),
            (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
            n && this._initFormat(n),
            this.clear();
        }
        function n(t, i, n) {
          if (!n) return i.indexOf(t);
          for (var a = 0; a < i.length; a++) if (n(t, i[a])) return a;
          return -1;
        }
        function a(t, i) {
          h(t, 0, t.children.length, i, t);
        }
        function h(t, i, n, a, h) {
          h || (h = x(null)),
            (h.minX = 1 / 0),
            (h.minY = 1 / 0),
            (h.maxX = -1 / 0),
            (h.maxY = -1 / 0);
          for (var r, o = i; o < n; o++)
            (r = t.children[o]), e(h, t.leaf ? a(r) : r);
          return h;
        }
        function e(t, i) {
          return (
            (t.minX = Math.min(t.minX, i.minX)),
            (t.minY = Math.min(t.minY, i.minY)),
            (t.maxX = Math.max(t.maxX, i.maxX)),
            (t.maxY = Math.max(t.maxY, i.maxY)),
            t
          );
        }
        function r(t, i) {
          return t.minX - i.minX;
        }
        function o(t, i) {
          return t.minY - i.minY;
        }
        function s(t) {
          return (t.maxX - t.minX) * (t.maxY - t.minY);
        }
        function l(t) {
          return t.maxX - t.minX + (t.maxY - t.minY);
        }
        function u(t, i) {
          return (
            (Math.max(i.maxX, t.maxX) - Math.min(i.minX, t.minX)) *
            (Math.max(i.maxY, t.maxY) - Math.min(i.minY, t.minY))
          );
        }
        function m(t, i) {
          var n = Math.max(t.minX, i.minX),
            a = Math.max(t.minY, i.minY),
            h = Math.min(t.maxX, i.maxX),
            e = Math.min(t.maxY, i.maxY);
          return Math.max(0, h - n) * Math.max(0, e - a);
        }
        function c(t, i) {
          return (
            t.minX <= i.minX &&
            t.minY <= i.minY &&
            i.maxX <= t.maxX &&
            i.maxY <= t.maxY
          );
        }
        function f(t, i) {
          return (
            i.minX <= t.maxX &&
            i.minY <= t.maxY &&
            i.maxX >= t.minX &&
            i.maxY >= t.minY
          );
        }
        function x(t) {
          return {
            children: t,
            height: 1,
            leaf: !0,
            minX: 1 / 0,
            minY: 1 / 0,
            maxX: -1 / 0,
            maxY: -1 / 0,
          };
        }
        function d(i, n, a, h, e) {
          for (var r, o = [n, a]; o.length; )
            (a = o.pop()) - (n = o.pop()) <= h ||
              ((r = n + Math.ceil((a - n) / h / 2) * h),
              t(i, r, n, a, e),
              o.push(n, r, r, a));
        }
        i.prototype = {
          all: function () {
            return this._all(this.data, []);
          },
          search: function (t) {
            var i = this.data,
              n = [],
              a = this.toBBox;
            if (!f(t, i)) return n;
            for (var h, e, r, o, s = []; i; ) {
              for (h = 0, e = i.children.length; h < e; h++)
                (r = i.children[h]),
                  f(t, (o = i.leaf ? a(r) : r)) &&
                    (i.leaf
                      ? n.push(r)
                      : c(t, o)
                      ? this._all(r, n)
                      : s.push(r));
              i = s.pop();
            }
            return n;
          },
          collides: function (t) {
            var i = this.data,
              n = this.toBBox;
            if (!f(t, i)) return !1;
            for (var a, h, e, r, o = []; i; ) {
              for (a = 0, h = i.children.length; a < h; a++)
                if (((e = i.children[a]), f(t, (r = i.leaf ? n(e) : e)))) {
                  if (i.leaf || c(t, r)) return !0;
                  o.push(e);
                }
              i = o.pop();
            }
            return !1;
          },
          load: function (t) {
            if (!t || !t.length) return this;
            if (t.length < this._minEntries) {
              for (var i = 0, n = t.length; i < n; i++) this.insert(t[i]);
              return this;
            }
            var a = this._build(t.slice(), 0, t.length - 1, 0);
            if (this.data.children.length)
              if (this.data.height === a.height) this._splitRoot(this.data, a);
              else {
                if (this.data.height < a.height) {
                  var h = this.data;
                  (this.data = a), (a = h);
                }
                this._insert(a, this.data.height - a.height - 1, !0);
              }
            else this.data = a;
            return this;
          },
          insert: function (t) {
            return t && this._insert(t, this.data.height - 1), this;
          },
          clear: function () {
            return (this.data = x([])), this;
          },
          remove: function (t, i) {
            if (!t) return this;
            for (
              var a, h, e, r, o = this.data, s = this.toBBox(t), l = [], u = [];
              o || l.length;

            ) {
              if (
                (o ||
                  ((o = l.pop()),
                  (h = l[l.length - 1]),
                  (a = u.pop()),
                  (r = !0)),
                o.leaf && -1 !== (e = n(t, o.children, i)))
              )
                return (
                  o.children.splice(e, 1), l.push(o), this._condense(l), this
                );
              r || o.leaf || !c(o, s)
                ? h
                  ? (a++, (o = h.children[a]), (r = !1))
                  : (o = null)
                : (l.push(o), u.push(a), (a = 0), (h = o), (o = o.children[0]));
            }
            return this;
          },
          toBBox: function (t) {
            return t;
          },
          compareMinX: r,
          compareMinY: o,
          toJSON: function () {
            return this.data;
          },
          fromJSON: function (t) {
            return (this.data = t), this;
          },
          _all: function (t, i) {
            for (var n = []; t; )
              t.leaf
                ? i.push.apply(i, t.children)
                : n.push.apply(n, t.children),
                (t = n.pop());
            return i;
          },
          _build: function (t, i, n, h) {
            var e,
              r = n - i + 1,
              o = this._maxEntries;
            if (r <= o) return a((e = x(t.slice(i, n + 1))), this.toBBox), e;
            h ||
              ((h = Math.ceil(Math.log(r) / Math.log(o))),
              (o = Math.ceil(r / Math.pow(o, h - 1)))),
              ((e = x([])).leaf = !1),
              (e.height = h);
            var s,
              l,
              u,
              m,
              c = Math.ceil(r / o),
              f = c * Math.ceil(Math.sqrt(o));
            for (d(t, i, n, f, this.compareMinX), s = i; s <= n; s += f)
              for (
                d(t, s, (u = Math.min(s + f - 1, n)), c, this.compareMinY),
                  l = s;
                l <= u;
                l += c
              )
                (m = Math.min(l + c - 1, u)),
                  e.children.push(this._build(t, l, m, h - 1));
            return a(e, this.toBBox), e;
          },
          _chooseSubtree: function (t, i, n, a) {
            for (
              var h, e, r, o, l, m, c, f;
              a.push(i), !i.leaf && a.length - 1 !== n;

            ) {
              for (c = f = 1 / 0, h = 0, e = i.children.length; h < e; h++)
                (l = s((r = i.children[h]))),
                  (m = u(t, r) - l) < f
                    ? ((f = m), (c = l < c ? l : c), (o = r))
                    : m === f && l < c && ((c = l), (o = r));
              i = o || i.children[0];
            }
            return i;
          },
          _insert: function (t, i, n) {
            var a = this.toBBox,
              h = n ? t : a(t),
              r = [],
              o = this._chooseSubtree(h, this.data, i, r);
            for (
              o.children.push(t), e(o, h);
              i >= 0 && r[i].children.length > this._maxEntries;

            )
              this._split(r, i), i--;
            this._adjustParentBBoxes(h, r, i);
          },
          _split: function (t, i) {
            var n = t[i],
              h = n.children.length,
              e = this._minEntries;
            this._chooseSplitAxis(n, e, h);
            var r = this._chooseSplitIndex(n, e, h),
              o = x(n.children.splice(r, n.children.length - r));
            (o.height = n.height),
              (o.leaf = n.leaf),
              a(n, this.toBBox),
              a(o, this.toBBox),
              i ? t[i - 1].children.push(o) : this._splitRoot(n, o);
          },
          _splitRoot: function (t, i) {
            (this.data = x([t, i])),
              (this.data.height = t.height + 1),
              (this.data.leaf = !1),
              a(this.data, this.toBBox);
          },
          _chooseSplitIndex: function (t, i, n) {
            var a, e, r, o, l, u, c, f;
            for (u = c = 1 / 0, a = i; a <= n - i; a++)
              (o = m(
                (e = h(t, 0, a, this.toBBox)),
                (r = h(t, a, n, this.toBBox))
              )),
                (l = s(e) + s(r)),
                o < u
                  ? ((u = o), (f = a), (c = l < c ? l : c))
                  : o === u && l < c && ((c = l), (f = a));
            return f;
          },
          _chooseSplitAxis: function (t, i, n) {
            var a = t.leaf ? this.compareMinX : r,
              h = t.leaf ? this.compareMinY : o;
            this._allDistMargin(t, i, n, a) < this._allDistMargin(t, i, n, h) &&
              t.children.sort(a);
          },
          _allDistMargin: function (t, i, n, a) {
            t.children.sort(a);
            var r,
              o,
              s = this.toBBox,
              u = h(t, 0, i, s),
              m = h(t, n - i, n, s),
              c = l(u) + l(m);
            for (r = i; r < n - i; r++)
              (o = t.children[r]), e(u, t.leaf ? s(o) : o), (c += l(u));
            for (r = n - i - 1; r >= i; r--)
              (o = t.children[r]), e(m, t.leaf ? s(o) : o), (c += l(m));
            return c;
          },
          _adjustParentBBoxes: function (t, i, n) {
            for (var a = n; a >= 0; a--) e(i[a], t);
          },
          _condense: function (t) {
            for (var i, n = t.length - 1; n >= 0; n--)
              0 === t[n].children.length
                ? n > 0
                  ? (i = t[n - 1].children).splice(i.indexOf(t[n]), 1)
                  : this.clear()
                : a(t[n], this.toBBox);
          },
          _initFormat: function (t) {
            var i = ["return a", " - b", ";"];
            (this.compareMinX = new Function("a", "b", i.join(t[0]))),
              (this.compareMinY = new Function("a", "b", i.join(t[1]))),
              (this.toBBox = new Function(
                "a",
                "return {minX: a" +
                  t[0] +
                  ", minY: a" +
                  t[1] +
                  ", maxX: a" +
                  t[2] +
                  ", maxY: a" +
                  t[3] +
                  "};"
              ));
          },
        };
      },
      { quickselect: "zTQQ" },
    ],
    MnnT: [
      function (require, module, exports) {
        "use strict";
        module.exports = t;
        var r = +(Math.pow(2, 27) + 1);
        function t(t, e, o) {
          var u = t * e,
            a = r * t,
            n = a - (a - t),
            s = t - n,
            c = r * e,
            i = c - (c - e),
            p = e - i,
            v = s * p - (u - n * i - s * i - n * p);
          return o ? ((o[0] = v), (o[1] = u), o) : [v, u];
        }
      },
      {},
    ],
    Q8bh: [
      function (require, module, exports) {
        "use strict";
        function r(r, t) {
          var n = r + t,
            e = n - r,
            a = r - (n - e) + (t - e);
          return a ? [a, n] : [n];
        }
        function t(t, n) {
          var e = 0 | t.length,
            a = 0 | n.length;
          if (1 === e && 1 === a) return r(t[0], n[0]);
          var o,
            u,
            f = new Array(e + a),
            h = 0,
            i = 0,
            l = 0,
            s = Math.abs,
            v = t[i],
            c = s(v),
            g = n[l],
            b = s(g);
          c < b
            ? ((u = v), (i += 1) < e && (c = s((v = t[i]))))
            : ((u = g), (l += 1) < a && (b = s((g = n[l])))),
            (i < e && c < b) || l >= a
              ? ((o = v), (i += 1) < e && (c = s((v = t[i]))))
              : ((o = g), (l += 1) < a && (b = s((g = n[l]))));
          for (
            var d, m, p = o + u, w = p - o, x = u - w, y = x, A = p;
            i < e && l < a;

          )
            c < b
              ? ((o = v), (i += 1) < e && (c = s((v = t[i]))))
              : ((o = g), (l += 1) < a && (b = s((g = n[l])))),
              (x = (u = y) - (w = (p = o + u) - o)) && (f[h++] = x),
              (y = A - ((d = A + p) - (m = d - A)) + (p - m)),
              (A = d);
          for (; i < e; )
            (x = (u = y) - (w = (p = (o = v) + u) - o)) && (f[h++] = x),
              (y = A - ((d = A + p) - (m = d - A)) + (p - m)),
              (A = d),
              (i += 1) < e && (v = t[i]);
          for (; l < a; )
            (x = (u = y) - (w = (p = (o = g) + u) - o)) && (f[h++] = x),
              (y = A - ((d = A + p) - (m = d - A)) + (p - m)),
              (A = d),
              (l += 1) < a && (g = n[l]);
          return (
            y && (f[h++] = y),
            A && (f[h++] = A),
            h || (f[h++] = 0),
            (f.length = h),
            f
          );
        }
        module.exports = t;
      },
      {},
    ],
    cdAY: [
      function (require, module, exports) {
        "use strict";
        function r(r, t, e) {
          var u = r + t,
            n = u - r,
            o = t - n,
            s = r - (u - n);
          return e ? ((e[0] = s + o), (e[1] = u), e) : [s + o, u];
        }
        module.exports = r;
      },
      {},
    ],
    jbtT: [
      function (require, module, exports) {
        "use strict";
        var r = require("two-product"),
          e = require("two-sum");
        function t(t, u) {
          var a = t.length;
          if (1 === a) {
            var n = r(t[0], u);
            return n[0] ? n : [n[1]];
          }
          var o = new Array(2 * a),
            v = [0.1, 0.1],
            i = [0.1, 0.1],
            s = 0;
          r(t[0], u, v), v[0] && (o[s++] = v[0]);
          for (var c = 1; c < a; ++c) {
            r(t[c], u, i);
            var f = v[1];
            e(f, i[0], v), v[0] && (o[s++] = v[0]);
            var l = i[1],
              w = v[1],
              d = l + w,
              g = w - (d - l);
            (v[1] = d), g && (o[s++] = g);
          }
          return (
            v[1] && (o[s++] = v[1]), 0 === s && (o[s++] = 0), (o.length = s), o
          );
        }
        module.exports = t;
      },
      { "two-product": "MnnT", "two-sum": "cdAY" },
    ],
    fBvs: [
      function (require, module, exports) {
        "use strict";
        function r(r, t) {
          var n = r + t,
            e = n - r,
            a = r - (n - e) + (t - e);
          return a ? [a, n] : [n];
        }
        function t(t, n) {
          var e = 0 | t.length,
            a = 0 | n.length;
          if (1 === e && 1 === a) return r(t[0], -n[0]);
          var o,
            u,
            f = new Array(e + a),
            h = 0,
            i = 0,
            l = 0,
            s = Math.abs,
            v = t[i],
            c = s(v),
            g = -n[l],
            b = s(g);
          c < b
            ? ((u = v), (i += 1) < e && (c = s((v = t[i]))))
            : ((u = g), (l += 1) < a && (b = s((g = -n[l])))),
            (i < e && c < b) || l >= a
              ? ((o = v), (i += 1) < e && (c = s((v = t[i]))))
              : ((o = g), (l += 1) < a && (b = s((g = -n[l]))));
          for (
            var d, m, p = o + u, w = p - o, x = u - w, y = x, A = p;
            i < e && l < a;

          )
            c < b
              ? ((o = v), (i += 1) < e && (c = s((v = t[i]))))
              : ((o = g), (l += 1) < a && (b = s((g = -n[l])))),
              (x = (u = y) - (w = (p = o + u) - o)) && (f[h++] = x),
              (y = A - ((d = A + p) - (m = d - A)) + (p - m)),
              (A = d);
          for (; i < e; )
            (x = (u = y) - (w = (p = (o = v) + u) - o)) && (f[h++] = x),
              (y = A - ((d = A + p) - (m = d - A)) + (p - m)),
              (A = d),
              (i += 1) < e && (v = t[i]);
          for (; l < a; )
            (x = (u = y) - (w = (p = (o = g) + u) - o)) && (f[h++] = x),
              (y = A - ((d = A + p) - (m = d - A)) + (p - m)),
              (A = d),
              (l += 1) < a && (g = -n[l]);
          return (
            y && (f[h++] = y),
            A && (f[h++] = A),
            h || (f[h++] = 0),
            (f.length = h),
            f
          );
        }
        module.exports = t;
      },
      {},
    ],
    GDiG: [
      function (require, module, exports) {
        "use strict";
        var r = require("two-product"),
          n = require("robust-sum"),
          t = require("robust-scale"),
          e = require("robust-subtract"),
          u = 5,
          a = 1.1102230246251565e-16,
          o = (3 + 16 * a) * a,
          i = (7 + 56 * a) * a;
        function s(r, n) {
          for (var t = new Array(r.length - 1), e = 1; e < r.length; ++e)
            for (
              var u = (t[e - 1] = new Array(r.length - 1)), a = 0, o = 0;
              a < r.length;
              ++a
            )
              a !== n && (u[o++] = r[e][a]);
          return t;
        }
        function h(r) {
          for (var n = new Array(r), t = 0; t < r; ++t) {
            n[t] = new Array(r);
            for (var e = 0; e < r; ++e)
              n[t][e] = ["m", e, "[", r - t - 1, "]"].join("");
          }
          return n;
        }
        function l(r) {
          return 1 & r ? "-" : "";
        }
        function c(r) {
          if (1 === r.length) return r[0];
          if (2 === r.length) return ["sum(", r[0], ",", r[1], ")"].join("");
          var n = r.length >> 1;
          return ["sum(", c(r.slice(0, n)), ",", c(r.slice(n)), ")"].join("");
        }
        function f(r) {
          if (2 === r.length)
            return [
              [
                "sum(prod(",
                r[0][0],
                ",",
                r[1][1],
                "),prod(-",
                r[0][1],
                ",",
                r[1][0],
                "))",
              ].join(""),
            ];
          for (var n = [], t = 0; t < r.length; ++t)
            n.push(["scale(", c(f(s(r, t))), ",", l(t), r[0][t], ")"].join(""));
          return n;
        }
        function p(u) {
          for (var a = [], o = [], i = h(u), l = [], p = 0; p < u; ++p)
            0 == (1 & p)
              ? a.push.apply(a, f(s(i, p)))
              : o.push.apply(o, f(s(i, p))),
              l.push("m" + p);
          var g = c(a),
            v = c(o),
            b = "orientation" + u + "Exact",
            m = [
              "function ",
              b,
              "(",
              l.join(),
              "){var p=",
              g,
              ",n=",
              v,
              ",d=sub(p,n);return d[d.length-1];};return ",
              b,
            ].join("");
          return new Function("sum", "prod", "scale", "sub", m)(n, r, t, e);
        }
        var g = p(3),
          v = p(4),
          b = [
            function () {
              return 0;
            },
            function () {
              return 0;
            },
            function (r, n) {
              return n[0] - r[0];
            },
            function (r, n, t) {
              var e,
                u = (r[1] - t[1]) * (n[0] - t[0]),
                a = (r[0] - t[0]) * (n[1] - t[1]),
                i = u - a;
              if (u > 0) {
                if (a <= 0) return i;
                e = u + a;
              } else {
                if (!(u < 0)) return i;
                if (a >= 0) return i;
                e = -(u + a);
              }
              var s = o * e;
              return i >= s || i <= -s ? i : g(r, n, t);
            },
            function (r, n, t, e) {
              var u = r[0] - e[0],
                a = n[0] - e[0],
                o = t[0] - e[0],
                s = r[1] - e[1],
                h = n[1] - e[1],
                l = t[1] - e[1],
                c = r[2] - e[2],
                f = n[2] - e[2],
                p = t[2] - e[2],
                g = a * l,
                b = o * h,
                m = o * s,
                d = u * l,
                j = u * h,
                w = a * s,
                y = c * (g - b) + f * (m - d) + p * (j - w),
                M =
                  (Math.abs(g) + Math.abs(b)) * Math.abs(c) +
                  (Math.abs(m) + Math.abs(d)) * Math.abs(f) +
                  (Math.abs(j) + Math.abs(w)) * Math.abs(p),
                A = i * M;
              return y > A || -y > A ? y : v(r, n, t, e);
            },
          ];
        function m(r) {
          var n = b[r.length];
          return n || (n = b[r.length] = p(r.length)), n.apply(void 0, r);
        }
        function d() {
          for (; b.length <= u; ) b.push(p(b.length));
          for (var r = [], n = ["slow"], t = 0; t <= u; ++t)
            r.push("a" + t), n.push("o" + t);
          var e = [
            "function getOrientation(",
            r.join(),
            "){switch(arguments.length){case 0:case 1:return 0;",
          ];
          for (t = 2; t <= u; ++t)
            e.push("case ", t, ":return o", t, "(", r.slice(0, t).join(), ");");
          e.push(
            "}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"
          ),
            n.push(e.join(""));
          var a = Function.apply(void 0, n);
          module.exports = a.apply(void 0, [m].concat(b));
          for (t = 0; t <= u; ++t) module.exports[t] = b[t];
        }
        d();
      },
      {
        "two-product": "MnnT",
        "robust-sum": "Q8bh",
        "robust-scale": "jbtT",
        "robust-subtract": "fBvs",
      },
    ],
    nEKu: [
      function (require, module, exports) {
        "use strict";
        module.exports = e;
        var r = require("robust-orientation")[3];
        function e(e) {
          var n = e.length;
          if (n < 3) {
            for (var t = new Array(n), o = 0; o < n; ++o) t[o] = o;
            return 2 === n && e[0][0] === e[1][0] && e[0][1] === e[1][1]
              ? [0]
              : t;
          }
          var a = new Array(n);
          for (o = 0; o < n; ++o) a[o] = o;
          a.sort(function (r, n) {
            var t = e[r][0] - e[n][0];
            return t || e[r][1] - e[n][1];
          });
          var u = [a[0], a[1]],
            f = [a[0], a[1]];
          for (o = 2; o < n; ++o) {
            for (
              var h = a[o], v = e[h], l = u.length;
              l > 1 && r(e[u[l - 2]], e[u[l - 1]], v) <= 0;

            )
              (l -= 1), u.pop();
            for (
              u.push(h), l = f.length;
              l > 1 && r(e[f[l - 2]], e[f[l - 1]], v) >= 0;

            )
              (l -= 1), f.pop();
            f.push(h);
          }
          t = new Array(f.length + u.length - 2);
          for (var g = 0, i = ((o = 0), u.length); o < i; ++o) t[g++] = u[o];
          for (var p = f.length - 2; p > 0; --p) t[g++] = f[p];
          return t;
        }
      },
      { "robust-orientation": "GDiG" },
    ],
    i9dF: [
      function (require, module, exports) {
        "use strict";
        function t(i, n) {
          if (!(this instanceof t)) return new t(i, n);
          if (
            ((this.data = i || []),
            (this.length = this.data.length),
            (this.compare = n || h),
            this.length > 0)
          )
            for (var s = (this.length >> 1) - 1; s >= 0; s--) this._down(s);
        }
        function h(t, h) {
          return t < h ? -1 : t > h ? 1 : 0;
        }
        (module.exports = t),
          (module.exports.default = t),
          (t.prototype = {
            push: function (t) {
              this.data.push(t), this.length++, this._up(this.length - 1);
            },
            pop: function () {
              if (0 !== this.length) {
                var t = this.data[0];
                return (
                  this.length--,
                  this.length > 0 &&
                    ((this.data[0] = this.data[this.length]), this._down(0)),
                  this.data.pop(),
                  t
                );
              }
            },
            peek: function () {
              return this.data[0];
            },
            _up: function (t) {
              for (var h = this.data, i = this.compare, n = h[t]; t > 0; ) {
                var s = (t - 1) >> 1,
                  a = h[s];
                if (i(n, a) >= 0) break;
                (h[t] = a), (t = s);
              }
              h[t] = n;
            },
            _down: function (t) {
              for (
                var h = this.data,
                  i = this.compare,
                  n = this.length >> 1,
                  s = h[t];
                t < n;

              ) {
                var a = 1 + (t << 1),
                  e = a + 1,
                  r = h[a];
                if (
                  (e < this.length && i(h[e], r) < 0 && ((a = e), (r = h[e])),
                  i(r, s) >= 0)
                )
                  break;
                (h[t] = r), (t = a);
              }
              h[t] = s;
            },
          });
      },
      {},
    ],
    UTeA: [
      function (require, module, exports) {
        module.exports = function (r, e) {
          for (
            var n = r[0], t = r[1], o = !1, l = 0, u = e.length - 1;
            l < e.length;
            u = l++
          ) {
            var a = e[l][0],
              f = e[l][1],
              g = e[u][0],
              h = e[u][1];
            f > t != h > t && n < ((g - a) * (t - f)) / (h - f) + a && (o = !o);
          }
          return o;
        };
      },
      {},
    ],
    JDhI: [
      function (require, module, exports) {
        "use strict";
        var n = require("rbush"),
          r = require("monotone-convex-hull-2d"),
          e = require("tinyqueue"),
          t = require("point-in-polygon"),
          i = require("robust-orientation")[3];
        function a(r, e, t) {
          (e = Math.max(0, void 0 === e ? 2 : e)), (t = t || 0);
          for (
            var i,
              a = p(r),
              m = n(16, ["[0]", "[1]", "[0]", "[1]"]).load(r),
              o = [],
              v = 0;
            v < a.length;
            v++
          ) {
            var x = a[v];
            m.remove(x), (i = l(x, i)), o.push(i);
          }
          var h = n(16);
          for (v = 0; v < o.length; v++) h.insert(f(o[v]));
          for (var c = e * e, d = t * t; o.length; ) {
            var X = o.shift(),
              Y = X.p,
              M = X.next.p,
              g = s(Y, M);
            if (!(g < d)) {
              var q = g / c;
              (x = u(m, X.prev.p, Y, M, X.next.next.p, q, h)) &&
                Math.min(s(x, Y), s(x, M)) <= q &&
                (o.push(X),
                o.push(l(x, X)),
                m.remove(x),
                h.remove(X),
                h.insert(f(X)),
                h.insert(f(X.next)));
            }
          }
          X = i;
          var b = [];
          do {
            b.push(X.p), (X = X.next);
          } while (X !== i);
          return b.push(X.p), b;
        }
        function u(n, r, t, i, a, u, v) {
          for (var h = new e(null, m), f = n.data; f; ) {
            for (var p = 0; p < f.children.length; p++) {
              var l = f.children[p],
                s = f.leaf ? c(l, t, i) : o(t, i, l);
              s > u || h.push({ node: l, dist: s });
            }
            for (; h.length && !h.peek().node.children; ) {
              var d = h.pop(),
                X = d.node,
                Y = c(X, r, t),
                M = c(X, i, a);
              if (d.dist < Y && d.dist < M && x(t, X, v) && x(i, X, v))
                return X;
            }
            (f = h.pop()) && (f = f.node);
          }
          return null;
        }
        function m(n, r) {
          return n.dist - r.dist;
        }
        function o(n, r, e) {
          if (v(n, e) || v(r, e)) return 0;
          var t = d(n[0], n[1], r[0], r[1], e.minX, e.minY, e.maxX, e.minY);
          if (0 === t) return 0;
          var i = d(n[0], n[1], r[0], r[1], e.minX, e.minY, e.minX, e.maxY);
          if (0 === i) return 0;
          var a = d(n[0], n[1], r[0], r[1], e.maxX, e.minY, e.maxX, e.maxY);
          if (0 === a) return 0;
          var u = d(n[0], n[1], r[0], r[1], e.minX, e.maxY, e.maxX, e.maxY);
          return 0 === u ? 0 : Math.min(t, i, a, u);
        }
        function v(n, r) {
          return (
            n[0] >= r.minX && n[0] <= r.maxX && n[1] >= r.minY && n[1] <= r.maxY
          );
        }
        function x(n, r, e) {
          for (
            var t = Math.min(n[0], r[0]),
              i = Math.min(n[1], r[1]),
              a = Math.max(n[0], r[0]),
              u = Math.max(n[1], r[1]),
              m = e.search({ minX: t, minY: i, maxX: a, maxY: u }),
              o = 0;
            o < m.length;
            o++
          )
            if (h(m[o].p, m[o].next.p, n, r)) return !1;
          return !0;
        }
        function h(n, r, e, t) {
          return (
            n !== t &&
            r !== e &&
            i(n, r, e) > 0 != i(n, r, t) > 0 &&
            i(e, t, n) > 0 != i(e, t, r) > 0
          );
        }
        function f(n) {
          var r = n.p,
            e = n.next.p;
          return (
            (n.minX = Math.min(r[0], e[0])),
            (n.minY = Math.min(r[1], e[1])),
            (n.maxX = Math.max(r[0], e[0])),
            (n.maxY = Math.max(r[1], e[1])),
            n
          );
        }
        function p(n) {
          for (
            var e = n[0], i = n[0], a = n[0], u = n[0], m = 0;
            m < n.length;
            m++
          ) {
            var o = n[m];
            o[0] < e[0] && (e = o),
              o[0] > a[0] && (a = o),
              o[1] < i[1] && (i = o),
              o[1] > u[1] && (u = o);
          }
          var v = [e, i, a, u],
            x = v.slice();
          for (m = 0; m < n.length; m++) t(n[m], v) || x.push(n[m]);
          var h = r(x),
            f = [];
          for (m = 0; m < h.length; m++) f.push(x[h[m]]);
          return f;
        }
        function l(n, r) {
          var e = {
            p: n,
            prev: null,
            next: null,
            minX: 0,
            minY: 0,
            maxX: 0,
            maxY: 0,
          };
          return (
            r
              ? ((e.next = r.next),
                (e.prev = r),
                (r.next.prev = e),
                (r.next = e))
              : ((e.prev = e), (e.next = e)),
            e
          );
        }
        function s(n, r) {
          var e = n[0] - r[0],
            t = n[1] - r[1];
          return e * e + t * t;
        }
        function c(n, r, e) {
          var t = r[0],
            i = r[1],
            a = e[0] - t,
            u = e[1] - i;
          if (0 !== a || 0 !== u) {
            var m = ((n[0] - t) * a + (n[1] - i) * u) / (a * a + u * u);
            m > 1
              ? ((t = e[0]), (i = e[1]))
              : m > 0 && ((t += a * m), (i += u * m));
          }
          return (a = n[0] - t) * a + (u = n[1] - i) * u;
        }
        function d(n, r, e, t, i, a, u, m) {
          var o,
            v,
            x,
            h,
            f = e - n,
            p = t - r,
            l = u - i,
            s = m - a,
            c = n - i,
            d = r - a,
            X = f * f + p * p,
            Y = f * l + p * s,
            M = l * l + s * s,
            g = f * c + p * d,
            q = l * c + s * d,
            b = X * M - Y * Y,
            w = b,
            y = b;
          0 === b
            ? ((v = 0), (w = 1), (h = q), (y = M))
            : ((h = X * q - Y * g),
              (v = Y * q - M * g) < 0
                ? ((v = 0), (h = q), (y = M))
                : v > w && ((v = w), (h = q + Y), (y = M))),
            h < 0
              ? ((h = 0),
                -g < 0 ? (v = 0) : -g > X ? (v = w) : ((v = -g), (w = X)))
              : h > y &&
                ((h = y),
                -g + Y < 0
                  ? (v = 0)
                  : -g + Y > X
                  ? (v = w)
                  : ((v = -g + Y), (w = X)));
          var k =
              (1 - (x = 0 === h ? 0 : h / y)) * i +
              x * u -
              ((1 - (o = 0 === v ? 0 : v / w)) * n + o * e),
            j = (1 - x) * a + x * m - ((1 - o) * r + o * t);
          return k * k + j * j;
        }
        (module.exports = a), (module.exports.default = a);
      },
      {
        rbush: "Ajng",
        "monotone-convex-hull-2d": "nEKu",
        tinyqueue: "i9dF",
        "point-in-polygon": "UTeA",
        "robust-orientation": "GDiG",
      },
    ],
    yRVq: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.unleb = e),
          (exports.unrle = t);
        var r = require("./bitmap");
        function e(r) {
          var e,
            t,
            o = 0,
            n = 0,
            u = !1,
            a = [];
          for (o = 0; r[n]; ) {
            for (t = 0, e = 0, u = !0; u; ) {
              var f = r[n].charCodeAt(0) - 48;
              (t |= (31 & f) << (5 * e)),
                n++,
                e++,
                !(u = !!(32 & f)) && 16 & f && (t |= -1 << (5 * e));
            }
            o > 2 && (t += a[o - 2]), (a[o++] = t);
          }
          return a;
        }
        function t(e, t) {
          var o,
            n,
            u = new r.Bitmap(e),
            a = !1,
            f = 0;
          for (o = 0; o < t.length; o++) {
            for (n = 0; n < t[o]; n++) a && u.set(f, a), f++;
            a = !a;
          }
          return u;
        }
      },
      { "./bitmap": "pDct" },
    ],
    r9Mk: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.pointsInBbox = e),
          (exports.size =
            exports.hasIntersection =
            exports.intersect =
            exports.union =
            exports.bbox =
              void 0);
        var t = function (t, e) {
          var o,
            r,
            n,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function u(a) {
            return function (u) {
              return (function (a) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((o = 1),
                      r &&
                        (n =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((n = r.return) && n.call(r), 0)
                            : r.next) &&
                        !(n = n.call(r, a[1])).done)
                    )
                      return n;
                    switch (((r = 0), n && (a = [2 & a[0], n.value]), a[0])) {
                      case 0:
                      case 1:
                        n = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(n = (n = i.trys).length > 0 && n[n.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!n || (a[1] > n[0] && a[1] < n[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < n[1]) {
                          (i.label = n[1]), (n = a);
                          break;
                        }
                        if (n && i.label < n[2]) {
                          (i.label = n[2]), i.ops.push(a);
                          break;
                        }
                        n[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = e.call(t, i);
                  } catch (u) {
                    (a = [6, u]), (r = 0);
                  } finally {
                    o = n = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, u]);
            };
          }
        };
        function e(e) {
          var o, r, n, a, i, u, l, s;
          return t(this, function (t) {
            switch (t.label) {
              case 0:
                (o = e.topLeft),
                  (r = o.x),
                  (n = o.y),
                  (a = e.bottomRight),
                  (i = a.x),
                  (u = a.y),
                  (l = r),
                  (t.label = 1);
              case 1:
                if (!(l <= i)) return [3, 6];
                (s = n), (t.label = 2);
              case 2:
                return s <= u ? [4, { x: l, y: s }] : [3, 5];
              case 3:
                t.sent(), (t.label = 4);
              case 4:
                return s++, [3, 2];
              case 5:
                return l++, [3, 1];
              case 6:
                return [2];
            }
          });
        }
        var o = function (t, e) {
          void 0 === e && (e = 0);
          var o = 1 / 0,
            r = 1 / 0,
            n = -1,
            a = -1;
          return (
            t.forEach(function (t) {
              (o = null == o ? t.x : Math.min(o, t.x)),
                (r = null == r ? t.y : Math.min(r, t.y)),
                (n = null == n ? t.x : Math.max(n, t.x)),
                (a = null == a ? t.y : Math.max(a, t.y));
            }),
            {
              topLeft: { x: Math.floor(o - e), y: Math.floor(r - e) },
              bottomRight: { x: Math.ceil(n + e), y: Math.ceil(a + e) },
            }
          );
        };
        exports.bbox = o;
        var r = function (t, e) {
          var o = t.topLeft,
            r = o.x,
            n = o.y,
            a = t.bottomRight,
            i = a.x,
            u = a.y,
            l = e.topLeft,
            s = l.x,
            x = l.y,
            c = e.bottomRight,
            h = c.x,
            f = c.y;
          return {
            topLeft: { x: Math.min(r, s), y: Math.min(n, x) },
            bottomRight: { x: Math.max(i, h), y: Math.max(u, f) },
          };
        };
        exports.union = r;
        var n = function (t, e) {
          var o = t.topLeft,
            r = o.x,
            n = o.y,
            a = t.bottomRight,
            i = a.x,
            u = a.y,
            l = e.topLeft,
            s = l.x,
            x = l.y,
            c = e.bottomRight,
            h = c.x,
            f = c.y;
          return {
            topLeft: { x: Math.max(r, s), y: Math.max(n, x) },
            bottomRight: { x: Math.min(i, h), y: Math.min(u, f) },
          };
        };
        exports.intersect = n;
        var a = function (t, e) {
          var o = n(t, e),
            r = o.topLeft,
            a = r.x,
            i = r.y,
            u = o.bottomRight,
            l = u.x,
            s = u.y;
          return l - a > 1 && s - i > 1;
        };
        exports.hasIntersection = a;
        var i = function (t) {
          var e = t.topLeft,
            o = e.x,
            r = e.y,
            n = t.bottomRight;
          return { width: n.x - o + 1, height: n.y - r + 1 };
        };
        exports.size = i;
      },
      {},
    ],
    CzwG: [
      function (require, module, exports) {
        var define;
        var t;
        !(function (i, n) {
          "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = n())
            : "function" == typeof t && t.amd
            ? t(n)
            : ((i = i || self).RBush = n());
        })(this, function () {
          "use strict";
          function t(t, r, e, a, h) {
            !(function t(n, r, e, a, h) {
              for (; a > e; ) {
                if (a - e > 600) {
                  var o = a - e + 1,
                    s = r - e + 1,
                    l = Math.log(o),
                    f = 0.5 * Math.exp((2 * l) / 3),
                    u =
                      0.5 *
                      Math.sqrt((l * f * (o - f)) / o) *
                      (s - o / 2 < 0 ? -1 : 1);
                  t(
                    n,
                    r,
                    Math.max(e, Math.floor(r - (s * f) / o + u)),
                    Math.min(a, Math.floor(r + ((o - s) * f) / o + u)),
                    h
                  );
                }
                var m = n[r],
                  c = e,
                  p = a;
                for (i(n, e, r), h(n[a], m) > 0 && i(n, e, a); c < p; ) {
                  for (i(n, c, p), c++, p--; h(n[c], m) < 0; ) c++;
                  for (; h(n[p], m) > 0; ) p--;
                }
                0 === h(n[e], m) ? i(n, e, p) : i(n, ++p, a),
                  p <= r && (e = p + 1),
                  r <= p && (a = p - 1);
              }
            })(t, r, e || 0, a || t.length - 1, h || n);
          }
          function i(t, i, n) {
            var r = t[i];
            (t[i] = t[n]), (t[n] = r);
          }
          function n(t, i) {
            return t < i ? -1 : t > i ? 1 : 0;
          }
          var r = function (t) {
            void 0 === t && (t = 9),
              (this._maxEntries = Math.max(4, t)),
              (this._minEntries = Math.max(
                2,
                Math.ceil(0.4 * this._maxEntries)
              )),
              this.clear();
          };
          function e(t, i, n) {
            if (!n) return i.indexOf(t);
            for (var r = 0; r < i.length; r++) if (n(t, i[r])) return r;
            return -1;
          }
          function a(t, i) {
            h(t, 0, t.children.length, i, t);
          }
          function h(t, i, n, r, e) {
            e || (e = p(null)),
              (e.minX = 1 / 0),
              (e.minY = 1 / 0),
              (e.maxX = -1 / 0),
              (e.maxY = -1 / 0);
            for (var a = i; a < n; a++) {
              var h = t.children[a];
              o(e, t.leaf ? r(h) : h);
            }
            return e;
          }
          function o(t, i) {
            return (
              (t.minX = Math.min(t.minX, i.minX)),
              (t.minY = Math.min(t.minY, i.minY)),
              (t.maxX = Math.max(t.maxX, i.maxX)),
              (t.maxY = Math.max(t.maxY, i.maxY)),
              t
            );
          }
          function s(t, i) {
            return t.minX - i.minX;
          }
          function l(t, i) {
            return t.minY - i.minY;
          }
          function f(t) {
            return (t.maxX - t.minX) * (t.maxY - t.minY);
          }
          function u(t) {
            return t.maxX - t.minX + (t.maxY - t.minY);
          }
          function m(t, i) {
            return (
              t.minX <= i.minX &&
              t.minY <= i.minY &&
              i.maxX <= t.maxX &&
              i.maxY <= t.maxY
            );
          }
          function c(t, i) {
            return (
              i.minX <= t.maxX &&
              i.minY <= t.maxY &&
              i.maxX >= t.minX &&
              i.maxY >= t.minY
            );
          }
          function p(t) {
            return {
              children: t,
              height: 1,
              leaf: !0,
              minX: 1 / 0,
              minY: 1 / 0,
              maxX: -1 / 0,
              maxY: -1 / 0,
            };
          }
          function d(i, n, r, e, a) {
            for (var h = [n, r]; h.length; )
              if (!((r = h.pop()) - (n = h.pop()) <= e)) {
                var o = n + Math.ceil((r - n) / e / 2) * e;
                t(i, o, n, r, a), h.push(n, o, o, r);
              }
          }
          return (
            (r.prototype.all = function () {
              return this._all(this.data, []);
            }),
            (r.prototype.search = function (t) {
              var i = this.data,
                n = [];
              if (!c(t, i)) return n;
              for (var r = this.toBBox, e = []; i; ) {
                for (var a = 0; a < i.children.length; a++) {
                  var h = i.children[a],
                    o = i.leaf ? r(h) : h;
                  c(t, o) &&
                    (i.leaf
                      ? n.push(h)
                      : m(t, o)
                      ? this._all(h, n)
                      : e.push(h));
                }
                i = e.pop();
              }
              return n;
            }),
            (r.prototype.collides = function (t) {
              var i = this.data;
              if (!c(t, i)) return !1;
              for (var n = []; i; ) {
                for (var r = 0; r < i.children.length; r++) {
                  var e = i.children[r],
                    a = i.leaf ? this.toBBox(e) : e;
                  if (c(t, a)) {
                    if (i.leaf || m(t, a)) return !0;
                    n.push(e);
                  }
                }
                i = n.pop();
              }
              return !1;
            }),
            (r.prototype.load = function (t) {
              if (!t || !t.length) return this;
              if (t.length < this._minEntries) {
                for (var i = 0; i < t.length; i++) this.insert(t[i]);
                return this;
              }
              var n = this._build(t.slice(), 0, t.length - 1, 0);
              if (this.data.children.length)
                if (this.data.height === n.height)
                  this._splitRoot(this.data, n);
                else {
                  if (this.data.height < n.height) {
                    var r = this.data;
                    (this.data = n), (n = r);
                  }
                  this._insert(n, this.data.height - n.height - 1, !0);
                }
              else this.data = n;
              return this;
            }),
            (r.prototype.insert = function (t) {
              return t && this._insert(t, this.data.height - 1), this;
            }),
            (r.prototype.clear = function () {
              return (this.data = p([])), this;
            }),
            (r.prototype.remove = function (t, i) {
              if (!t) return this;
              for (
                var n, r, a, h = this.data, o = this.toBBox(t), s = [], l = [];
                h || s.length;

              ) {
                if (
                  (h ||
                    ((h = s.pop()),
                    (r = s[s.length - 1]),
                    (n = l.pop()),
                    (a = !0)),
                  h.leaf)
                ) {
                  var f = e(t, h.children, i);
                  if (-1 !== f)
                    return (
                      h.children.splice(f, 1),
                      s.push(h),
                      this._condense(s),
                      this
                    );
                }
                a || h.leaf || !m(h, o)
                  ? r
                    ? (n++, (h = r.children[n]), (a = !1))
                    : (h = null)
                  : (s.push(h),
                    l.push(n),
                    (n = 0),
                    (r = h),
                    (h = h.children[0]));
              }
              return this;
            }),
            (r.prototype.toBBox = function (t) {
              return t;
            }),
            (r.prototype.compareMinX = function (t, i) {
              return t.minX - i.minX;
            }),
            (r.prototype.compareMinY = function (t, i) {
              return t.minY - i.minY;
            }),
            (r.prototype.toJSON = function () {
              return this.data;
            }),
            (r.prototype.fromJSON = function (t) {
              return (this.data = t), this;
            }),
            (r.prototype._all = function (t, i) {
              for (var n = []; t; )
                t.leaf
                  ? i.push.apply(i, t.children)
                  : n.push.apply(n, t.children),
                  (t = n.pop());
              return i;
            }),
            (r.prototype._build = function (t, i, n, r) {
              var e,
                h = n - i + 1,
                o = this._maxEntries;
              if (h <= o) return a((e = p(t.slice(i, n + 1))), this.toBBox), e;
              r ||
                ((r = Math.ceil(Math.log(h) / Math.log(o))),
                (o = Math.ceil(h / Math.pow(o, r - 1)))),
                ((e = p([])).leaf = !1),
                (e.height = r);
              var s = Math.ceil(h / o),
                l = s * Math.ceil(Math.sqrt(o));
              d(t, i, n, l, this.compareMinX);
              for (var f = i; f <= n; f += l) {
                var u = Math.min(f + l - 1, n);
                d(t, f, u, s, this.compareMinY);
                for (var m = f; m <= u; m += s) {
                  var c = Math.min(m + s - 1, u);
                  e.children.push(this._build(t, m, c, r - 1));
                }
              }
              return a(e, this.toBBox), e;
            }),
            (r.prototype._chooseSubtree = function (t, i, n, r) {
              for (; r.push(i), !i.leaf && r.length - 1 !== n; ) {
                for (
                  var e = 1 / 0, a = 1 / 0, h = void 0, o = 0;
                  o < i.children.length;
                  o++
                ) {
                  var s = i.children[o],
                    l = f(s),
                    u =
                      ((m = t),
                      (c = s),
                      (Math.max(c.maxX, m.maxX) - Math.min(c.minX, m.minX)) *
                        (Math.max(c.maxY, m.maxY) - Math.min(c.minY, m.minY)) -
                        l);
                  u < a
                    ? ((a = u), (e = l < e ? l : e), (h = s))
                    : u === a && l < e && ((e = l), (h = s));
                }
                i = h || i.children[0];
              }
              var m, c;
              return i;
            }),
            (r.prototype._insert = function (t, i, n) {
              var r = n ? t : this.toBBox(t),
                e = [],
                a = this._chooseSubtree(r, this.data, i, e);
              for (
                a.children.push(t), o(a, r);
                i >= 0 && e[i].children.length > this._maxEntries;

              )
                this._split(e, i), i--;
              this._adjustParentBBoxes(r, e, i);
            }),
            (r.prototype._split = function (t, i) {
              var n = t[i],
                r = n.children.length,
                e = this._minEntries;
              this._chooseSplitAxis(n, e, r);
              var h = this._chooseSplitIndex(n, e, r),
                o = p(n.children.splice(h, n.children.length - h));
              (o.height = n.height),
                (o.leaf = n.leaf),
                a(n, this.toBBox),
                a(o, this.toBBox),
                i ? t[i - 1].children.push(o) : this._splitRoot(n, o);
            }),
            (r.prototype._splitRoot = function (t, i) {
              (this.data = p([t, i])),
                (this.data.height = t.height + 1),
                (this.data.leaf = !1),
                a(this.data, this.toBBox);
            }),
            (r.prototype._chooseSplitIndex = function (t, i, n) {
              for (
                var r, e, a, o, s, l, u, m = 1 / 0, c = 1 / 0, p = i;
                p <= n - i;
                p++
              ) {
                var d = h(t, 0, p, this.toBBox),
                  x = h(t, p, n, this.toBBox),
                  v =
                    ((e = d),
                    (a = x),
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    (o = Math.max(e.minX, a.minX)),
                    (s = Math.max(e.minY, a.minY)),
                    (l = Math.min(e.maxX, a.maxX)),
                    (u = Math.min(e.maxY, a.maxY)),
                    Math.max(0, l - o) * Math.max(0, u - s)),
                  M = f(d) + f(x);
                v < m
                  ? ((m = v), (r = p), (c = M < c ? M : c))
                  : v === m && M < c && ((c = M), (r = p));
              }
              return r || n - i;
            }),
            (r.prototype._chooseSplitAxis = function (t, i, n) {
              var r = t.leaf ? this.compareMinX : s,
                e = t.leaf ? this.compareMinY : l;
              this._allDistMargin(t, i, n, r) <
                this._allDistMargin(t, i, n, e) && t.children.sort(r);
            }),
            (r.prototype._allDistMargin = function (t, i, n, r) {
              t.children.sort(r);
              for (
                var e = this.toBBox,
                  a = h(t, 0, i, e),
                  s = h(t, n - i, n, e),
                  l = u(a) + u(s),
                  f = i;
                f < n - i;
                f++
              ) {
                var m = t.children[f];
                o(a, t.leaf ? e(m) : m), (l += u(a));
              }
              for (var c = n - i - 1; c >= i; c--) {
                var p = t.children[c];
                o(s, t.leaf ? e(p) : p), (l += u(s));
              }
              return l;
            }),
            (r.prototype._adjustParentBBoxes = function (t, i, n) {
              for (var r = n; r >= 0; r--) o(i[r], t);
            }),
            (r.prototype._condense = function (t) {
              for (var i = t.length - 1, n = void 0; i >= 0; i--)
                0 === t[i].children.length
                  ? i > 0
                    ? (n = t[i - 1].children).splice(n.indexOf(t[i]), 1)
                    : this.clear()
                  : a(t[i], this.toBBox);
            }),
            r
          );
        });
      },
      {},
    ],
    VuPX: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.BrushPainter = exports.BrushShape = void 0);
        var t = u(require("concaveman")),
          e = require("immutable"),
          r = require("../serializers/helper"),
          i = require("../utils/coord"),
          o = require("../utils/hitTest"),
          n = require("../utils/bbox"),
          s = require("./dragPainter"),
          a = u(require("rbush"));
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var h = (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              function i() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((i.prototype = r.prototype), new i()));
            };
          })(),
          d = function () {
            return (d =
              Object.assign ||
              function (t) {
                for (var e, r = 1, i = arguments.length; r < i; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          },
          c = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var i,
              o,
              n = r.call(t),
              s = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(i = n.next()).done; )
                s.push(i.value);
            } catch (a) {
              o = { error: a };
            } finally {
              try {
                i && !i.done && (r = n.return) && r.call(n);
              } finally {
                if (o) throw o.error;
              }
            }
            return s;
          },
          p = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(c(arguments[e]));
            return t;
          },
          f = 40,
          l = function (t, e, r) {
            var i = (0, n.bbox)([t, e], r / 2),
              o = i.topLeft,
              s = i.bottomRight;
            return {
              a: t,
              b: e,
              width: r,
              minX: o.x,
              minY: o.y,
              maxX: s.x,
              maxY: s.y,
            };
          },
          v = function (t, e) {
            for (var r = [], i = 0; i < t.length - 1; i++)
              r.push(l(t[i], t[i + 1], e));
            return r;
          },
          y = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return h(e, t), e;
          })((0, e.Record)({ id: "", actions: [], category: void 0 }));
        exports.BrushShape = y;
        var m = function (t, e) {
            var r = e.width / 2,
              i = t.map(function (t) {
                if ("base" === t.mode) return d(d({}, t), { width: e.width });
                var i = t.segments.all().map(function (t) {
                    return d(d({}, t), {
                      minX: t.minX - r,
                      maxX: t.maxX + r,
                      minY: t.minY - r,
                      maxY: t.maxY + r,
                    });
                  }),
                  o = new a.default(),
                  n = "add" === t.mode ? e.width + t.width : t.width;
                return d(d({}, t), { width: n, segments: o.load(i) });
              });
            return e.points.some(function (t) {
              return (0, o.testComposition)(i, t);
            });
          },
          b = function (e, i, s, u) {
            void 0 === u && (u = 2);
            for (
              var h = (0, n.bbox)([
                  { x: e.bbox.x1, y: e.bbox.y1 },
                  { x: e.bbox.x2, y: e.bbox.y2 },
                ]),
                p = h.topLeft,
                f = p.x,
                l = p.y,
                y = h.bottomRight,
                m = y.x,
                b = y.y,
                g = (0, r.unrle)(i * s, (0, r.unleb)(e.mask)),
                x = [],
                w = f;
              w < m;
              w++
            )
              for (var _ = l; _ < b; _++) g.get(s * w + _) && x.push([w, _]);
            if (!x.length) return [];
            var A = (0, t.default)(x, 2, u).map(function (t) {
                var e = c(t, 2);
                return { x: e[0], y: e[1] };
              }),
              P = new a.default();
            P.load(v(A, 0));
            var S = d(d({}, g.toJS()), { height: s });
            return [
              {
                mode: "base",
                width: 0,
                segments: P,
                hitTestJS: S,
                hitTest: (0, o.factoryHitTest)(S),
                points: A,
              },
            ];
          },
          g = (function (t) {
            function r() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.name = "brush"),
                (e.brushWidth = f),
                (e.oldBrushWidth = f),
                (e.mode = "add"),
                e
              );
            }
            return (
              h(r, t),
              (r.prototype.restore = function (t, r) {
                var i = this,
                  o = t.map(function (t) {
                    var e = b(
                      t,
                      r.width,
                      r.height,
                      4 * Math.round(r.interactionFactor)
                    );
                    return new y({
                      id: i.nextID(),
                      actions: e,
                      category: t.category.id ? t.category : void 0,
                    });
                  });
                return (this.shapes = (0, e.List)(o)), this.shapes;
              }),
              (r.prototype.exec = function (e, r) {
                var i = t.prototype.exec.call(this, e, r);
                if (i) return i;
                switch (e) {
                  case "SET_BRUSH_WIDTH":
                    return (this.brushWidth = +r), this.responded;
                  case "ERASE":
                    return (this.mode = "del"), this.responded;
                  case "ADD":
                    return (this.mode = "add"), this.responded;
                }
              }),
              (r.prototype.activate = function () {
                this.creatable = !0;
              }),
              (r.prototype.respond = function (e, r) {
                var i = this;
                switch (e.kind) {
                  case "drag":
                    return {
                      key: "",
                      updater: function () {
                        i.drag(e, r);
                      },
                    };
                  case "hover":
                    var o = this.getShapeUnderCursor(e.point);
                    if (((this.hover = o), o))
                      return this.trivialCursorPatch("pointer");
                    if (!this.creatable) break;
                    return this.trivialCursorPatch(
                      "add" === this.mode ? "brush" : "erase"
                    );
                  case "press":
                    switch (e.value) {
                      case "Escape":
                        return (this.draft = void 0), this.responded;
                    }
                }
                return t.prototype.respond.call(this, e, r);
              }),
              (r.prototype.doCreate = function (t, e) {
                if (!this.draft)
                  return new y({
                    id: this.nextID(),
                    actions: [
                      {
                        mode: "add",
                        width: (0, i.mapScalar)(
                          this.brushWidth,
                          e.coord.dom,
                          e.coord.res
                        ),
                        points: [t.start],
                        segments: new a.default(),
                      },
                    ],
                  });
                var r = this.draft.actions[0],
                  o = r.points,
                  n = r.width,
                  s = r.segments,
                  u = o[o.length - 1],
                  h = t.current.x - u.x,
                  d = t.current.y - u.y;
                if (Math.max(Math.abs(h), Math.abs(d)) < 2) return this.draft;
                return this.draft.set("actions", [
                  {
                    mode: "add",
                    width: n,
                    segments: s,
                    points: p(o, [], [t.current]),
                  },
                ]);
              }),
              (r.prototype.createResizer = function () {}),
              (r.prototype.hitTest = function (t, e) {
                return (0, o.testComposition)(t.actions, e);
              }),
              (r.prototype.doGetRenderJobs = function () {
                var t = this;
                return this.output.reduce(function (e, r) {
                  var i = t.draft === r ? 0.3 : r === t.active ? 0.8 : 0.6,
                    o = !(t.lastActive !== r || !t.draft),
                    n = function (t) {
                      var e, i;
                      return (
                        (null ===
                          (i =
                            null === (e = r.category) || void 0 === e
                              ? void 0
                              : e.style) || void 0 === i
                          ? void 0
                          : i.background) || t
                      );
                    },
                    s = o ? "rgb(255, 0, 0)" : n("rgb(71, 118, 241)");
                  return e.push({
                    type: "group",
                    data: {
                      alpha: i,
                      children: r.actions.map(function (t) {
                        return {
                          type: "polygon",
                          reversed: "del" === t.mode,
                          data: { closed: !1, points: t.points },
                          style: {
                            background:
                              "base" === t.mode
                                ? o
                                  ? s
                                  : n("rgb(71, 118, 241)")
                                : "rgba(0, 0, 0, 0)",
                            border: {
                              isRes: !0,
                              width: t.width,
                              lineCap: "round",
                              color: s,
                            },
                          },
                        };
                      }),
                    },
                  });
                }, (0, e.List)());
              }),
              (r.prototype.doGetMountPoint = function (t) {
                var e,
                  r = t.actions[0].points[0],
                  i = r.x,
                  o = r.y;
                return {
                  name:
                    null === (e = t.category) || void 0 === e ? void 0 : e.name,
                  className: "arbitary",
                  x: i,
                  y: o,
                };
              }),
              (r.prototype.getHandles = function () {
                return [];
              }),
              (r.prototype.cacheable = function (e) {
                return this.brushWidth !== this.oldBrushWidth
                  ? ((this.oldBrushWidth = this.brushWidth),
                    t.prototype.cacheable.call(this, e, !0))
                  : t.prototype.cacheable.call(this, e);
              }),
              (r.prototype.drag = function (t, e) {
                this.creatable
                  ? (this.draft || (this.lastActive = this.active),
                    (this.active = void 0),
                    (this.draft = this.doCreate(t, e)))
                  : (this.draft = void 0);
              }),
              (r.prototype.dragEnd = function (t) {
                var e = this;
                if (this.draft) {
                  var r = function (t) {
                      if (e.lastActive) {
                        var r = e.shapes.indexOf(e.lastActive);
                        (e.shapes = e.shapes.set(r, t(e.lastActive))),
                          (e.active = e.shapes.get(r));
                      }
                    },
                    i = function () {
                      return (e.draft = void 0), !0;
                    },
                    o = this.draft.actions[0],
                    n = o.points,
                    s = o.width,
                    a = o.segments;
                  switch ((a.load(v(n, s)), this.mode)) {
                    case "add":
                      return (
                        this.lastActive &&
                        m(this.lastActive.actions, this.draft.actions[0])
                          ? r(function (t) {
                              return t.set(
                                "actions",
                                p(t.actions, [
                                  {
                                    mode: "add",
                                    width: s,
                                    segments: a,
                                    points: n,
                                  },
                                ])
                              );
                            })
                          : ((this.draft = this.draft.set("category", t)),
                            (this.shapes = this.shapes.push(this.draft)),
                            (this.lastActive = void 0),
                            (this.active = this.draft)),
                        i()
                      );
                    case "del":
                      return this.lastActive
                        ? (r(function (t) {
                            return t.set(
                              "actions",
                              p(t.actions, [
                                {
                                  mode: "del",
                                  points: n,
                                  width: s,
                                  segments: a,
                                },
                              ])
                            );
                          }),
                          i())
                        : i();
                  }
                }
              }),
              r
            );
          })(s.DragPainter);
        exports.BrushPainter = g;
      },
      {
        concaveman: "JDhI",
        immutable: "vqB5",
        "../serializers/helper": "yRVq",
        "../utils/coord": "YrAe",
        "../utils/hitTest": "B6jF",
        "../utils/bbox": "r9Mk",
        "./dragPainter": "J2o0",
        rbush: "CzwG",
      },
    ],
    wcYU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.MaskPainter = void 0);
        var t = require("immutable"),
          e = require("../serializers/helper"),
          r = require("../utils/misc"),
          i = function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, r = 1, i = arguments.length; r < i; r++)
                  for (var n in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
              }).apply(this, arguments);
          },
          n = [71, 118, 241, 102],
          o = (function () {
            function o() {
              (this.name = "mask"),
                (this.cursor = "normal"),
                (this.shapes = []);
            }
            return (
              (o.prototype.restore = function (r, i) {
                var n = i.width * i.height;
                return (
                  (this.shapes = r.map(function (t) {
                    var r = (0, e.unrle)(n, (0, e.unleb)(t.maskStr)),
                      i = t.bbox;
                    return {
                      bitmap: r,
                      center: { x: (i.x1 + i.x2) / 2, y: (i.y1 + i.y2) / 2 },
                      category: t.category,
                    };
                  })),
                  (this.cachedJobs = void 0),
                  (0, t.List)()
                );
              }),
              (o.prototype.respond = function (t) {}),
              (o.prototype.getMountPoints = function () {
                return (0, t.List)(
                  this.shapes.map(function (t) {
                    var e;
                    return {
                      type: "domMountPoint",
                      data: i(i({}, t.center), {
                        name:
                          null === (e = t.category) || void 0 === e
                            ? void 0
                            : e.name,
                      }),
                    };
                  })
                );
              }),
              (o.prototype.getRenderJobs = function (e) {
                var i, o;
                if (!this.shapes.length) return (0, t.List)();
                if (this.cachedJobs) return this.cachedJobs;
                for (
                  var a = e.width,
                    s = e.height,
                    u = new Uint8ClampedArray(a * s * 4),
                    h = 0;
                  h < a;
                  h++
                )
                  for (var p = 0; p < s; p++) {
                    var c = this.findShape(p + h * s);
                    if (c) {
                      var d =
                        (0, r.parseRGBA)(
                          null ===
                            (o =
                              null === (i = c.category) || void 0 === i
                                ? void 0
                                : i.style) || void 0 === o
                            ? void 0
                            : o.background
                        ) || n;
                      u.set(d, 4 * h + p * a * 4);
                    }
                  }
                var f = (0, t.List)([
                  {
                    type: "imageData",
                    data: { image: u, width: a, height: s },
                  },
                ]);
                return (this.cachedJobs = f), f;
              }),
              (o.prototype.findShape = function (t) {
                return this.shapes.find(function (e) {
                  return e.bitmap.get(t);
                });
              }),
              o
            );
          })();
        exports.MaskPainter = o;
      },
      {
        immutable: "vqB5",
        "../serializers/helper": "yRVq",
        "../utils/misc": "jqwk",
      },
    ],
    bf0R: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.QuadPainter = void 0);
        var t = require("./polygon"),
          n = (function () {
            var t = function (n, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, n) {
                    t.__proto__ = n;
                  }) ||
                function (t, n) {
                  for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o]);
                })(n, o);
            };
            return function (n, o) {
              function r() {
                this.constructor = n;
              }
              t(n, o),
                (n.prototype =
                  null === o
                    ? Object.create(o)
                    : ((r.prototype = o.prototype), new r()));
            };
          })(),
          o = 4,
          r = (function (r) {
            function e() {
              return (null !== r && r.apply(this, arguments)) || this;
            }
            return (
              n(e, r),
              (e.prototype.finish = function (n) {
                var e = n.id,
                  i = n.point,
                  p = n.category,
                  u = n.frame;
                if (this.points && this.doing && i) {
                  if (this.points.length === o - 1) {
                    var a = new t.PolygonShape({
                      id: e,
                      frame: u,
                      points: this.points.concat(i),
                      category: p,
                    });
                    return this.stop(), a;
                  }
                  return r.prototype.finish.call(this, n);
                }
              }),
              (e.prototype.readyToClose = function () {
                return !1;
              }),
              e
            );
          })(t.PolygonCreator),
          e = (function (t) {
            function o() {
              var n = (null !== t && t.apply(this, arguments)) || this;
              return (n.name = "quad"), (n.creator = new r()), n;
            }
            return n(o, t), o;
          })(t.PolygonPainter);
        exports.QuadPainter = e;
      },
      { "./polygon": "D1q9" },
    ],
    zXJB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.RectPolygonPainter = exports.RectPolygonCreator = void 0);
        var t = require("immutable"),
          r = require("../../utils/freeze"),
          o = require("./polygon"),
          n = (function () {
            var t = function (r, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o]);
                })(r, o);
            };
            return function (r, o) {
              function n() {
                this.constructor = r;
              }
              t(r, o),
                (r.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          e = function () {
            return (e =
              Object.assign ||
              function (t) {
                for (var r, o = 1, n = arguments.length; o < n; o++)
                  for (var e in (r = arguments[o]))
                    Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
                return t;
              }).apply(this, arguments);
          },
          i = function (t, r) {
            var o = "function" == typeof Symbol && t[Symbol.iterator];
            if (!o) return t;
            var n,
              e,
              i = o.call(t),
              a = [];
            try {
              for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; )
                a.push(n.value);
            } catch (s) {
              e = { error: s };
            } finally {
              try {
                n && !n.done && (o = i.return) && o.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            return a;
          },
          a = function () {
            for (var t = [], r = 0; r < arguments.length; r++)
              t = t.concat(i(arguments[r]));
            return t;
          },
          s = function (t, r) {
            var o = Math.max,
              n = Math.min,
              e = [t, r].map(function (t) {
                return t.x;
              }),
              s = [t, r].map(function (t) {
                return t.y;
              }),
              p = i(
                [
                  n.apply(void 0, a(e)),
                  n.apply(void 0, a(s)),
                  o.apply(void 0, a(e)),
                  o.apply(void 0, a(s)),
                ],
                4
              ),
              u = p[0],
              c = p[1],
              h = p[2],
              f = p[3];
            return [
              { x: u, y: c },
              { x: u, y: f },
              { x: h, y: f },
              { x: h, y: c },
            ];
          },
          p = (function (r) {
            function i() {
              var t = (null !== r && r.apply(this, arguments)) || this;
              return (t.points = []), t;
            }
            return (
              n(i, r),
              Object.defineProperty(i.prototype, "doing", {
                get: function () {
                  return !!this.startPoint;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (i.prototype.start = function (t) {
                this.startPoint = t;
              }),
              (i.prototype.stop = function () {
                (this.startPoint = void 0), (this.endPoint = void 0);
              }),
              (i.prototype.push = function (t) {
                return (this.endPoint = t), this.getCandidate(t);
              }),
              (i.prototype.finish = function (t) {
                var r = t.id,
                  n = t.point,
                  e = t.category;
                if (this.startPoint && this.doing && n) {
                  var i = new o.PolygonShape({
                    id: r,
                    points: s(this.startPoint, n),
                    category: e,
                  });
                  return this.stop(), i;
                }
              }),
              (i.prototype.getCandidate = function (t) {
                if (this.startPoint)
                  return new o.PolygonShape({ points: s(t, this.startPoint) });
              }),
              (i.prototype.restore = function (r, n, i) {
                var a = r.map(function (t) {
                  return e(e({}, t), { id: n() });
                });
                return i
                  ? (0, t.List)(a)
                  : (0, t.List)(
                      a.map(function (t) {
                        return new o.PolygonShape(t);
                      })
                    );
              }),
              (i.prototype.readyToClose = function () {
                return !1;
              }),
              i
            );
          })(o.PolygonCreator);
        exports.RectPolygonCreator = p;
        var u = (function (o) {
          function e() {
            var t = (null !== o && o.apply(this, arguments)) || this;
            return (t.name = "rect-polygon"), (t.creator = new p()), t;
          }
          return (
            n(e, o),
            (e.prototype.handleClick = function (o) {
              this.creator.stop(), this.mover.stop();
              var n = o.point,
                e = this.getShapeUnderPoint(n);
              return e
                ? ((this.activeIdList = (0, t.List)([e.id])), r.PATCH.ACTIVE)
                : ((this.activeIdList = (0, t.List)()), r.PATCH.LAZY);
            }),
            (e.prototype.handleDrag = function (t, n) {
              var e = t.start,
                i = t.current;
              return this.creator.doing
                ? ((this.draft = this.creator.push(t.current)), r.PATCH.NOOP)
                : 0 === this.activeIdList.size
                ? (this.creator.start(e),
                  (this.draft = this.creator.getCandidate(i)),
                  r.PATCH.NOOP)
                : o.prototype.handleDrag.call(this, t, n);
            }),
            (e.prototype.handleDragEnd = function (t, o) {
              return this.creator.doing
                ? this.confirmDraft(
                    this.creator.finish({
                      id: this.nextID(),
                      point: t.current,
                      category: o.category,
                    })
                  )
                : this.mover.doing
                ? (this.mover.finish(), this.propogateChanges())
                : this.resizer.doing
                ? (this.resizer.finish(), this.propogateChanges())
                : r.PATCH.NOOP;
            }),
            e
          );
        })(o.PolygonPainter);
        exports.RectPolygonPainter = u;
      },
      { immutable: "vqB5", "../../utils/freeze": "Ar0y", "./polygon": "D1q9" },
    ],
    FB7D: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.inRange = void 0);
        var e = function (e, r, t) {
          return e >= r && e <= t;
        };
        exports.inRange = e;
      },
      {},
    ],
    KBuq: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.RectCreator =
            exports.RectShape =
            exports.getSingleRenderJob =
            exports.getSingleShapeMountPoint =
            exports.getHandles =
            exports.hitTest =
              void 0);
        var t = require("immutable"),
          r = require("../../../infrastructure/math"),
          e = require("../../../utils/misc"),
          o = require("../../../utils/shape"),
          n = (function () {
            var t = function (r, e) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
                })(r, e);
            };
            return function (r, e) {
              function o() {
                this.constructor = r;
              }
              t(r, e),
                (r.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            };
          })(),
          i = function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var r, e = 1, o = arguments.length; e < o; e++)
                  for (var n in (r = arguments[e]))
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                return t;
              }).apply(this, arguments);
          },
          u = function (t, r) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e) return t;
            var o,
              n,
              i = e.call(t),
              u = [];
            try {
              for (; (void 0 === r || r-- > 0) && !(o = i.next()).done; )
                u.push(o.value);
            } catch (a) {
              n = { error: a };
            } finally {
              try {
                o && !o.done && (e = i.return) && e.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            return u;
          },
          a = function () {
            for (var t = [], r = 0; r < arguments.length; r++)
              t = t.concat(u(arguments[r]));
            return t;
          },
          s = function (t, e) {
            var o = e.x,
              n = e.y,
              i = t.topLeft,
              u = i.x,
              a = i.y,
              s = t.bottomRight,
              c = s.x,
              p = s.y;
            return (0, r.inRange)(o, u, c) && (0, r.inRange)(n, a, p);
          };
        exports.hitTest = s;
        var c = function (t) {
            return function (r) {
              return { x: r.x + t.x, y: r.y + t.y };
            };
          },
          p = function (t, r, e) {
            var o = [];
            if (0 === ((null == t ? void 0 : t.length) || 0)) return o;
            var n = function (t, r) {
                return "r" in t
                  ? {
                      type: "circle",
                      data: { c: r, r: t.r, isResizer: !0 },
                      style: { background: t.color },
                    }
                  : {
                      type: "polygon",
                      data: {
                        closed: !0,
                        points: t.points.map(c(r)),
                        isResizer: !0,
                      },
                      style: { background: t.color },
                    };
              },
              i = function (r) {
                return t[r] || i(r - 1);
              },
              u = { y: r.y, x: e.x },
              a = { x: r.x, y: e.y };
            return (
              o.push(n(i(0), r)),
              o.push(n(i(1), e)),
              o.push(n(i(2), u)),
              o.push(n(i(3), a)),
              o
            );
          },
          f = function (r, e) {
            if (1 !== r.size) return (0, t.List)();
            var o = r.get(0),
              n = e.find(function (t) {
                return t.id === o;
              });
            if (!n) return (0, t.List)();
            var i = n.topLeft,
              u = n.bottomRight;
            return (0, t.List)([
              { x: i.x, y: i.y, fixed: u },
              { x: u.x, y: i.y, fixed: { x: i.x, y: u.y } },
              { x: i.x, y: u.y, fixed: { x: u.x, y: i.y } },
              { x: u.x, y: u.y, fixed: i },
            ]);
          };
        exports.getHandles = f;
        var y = function (t) {
          var r;
          return {
            name: null === (r = t.category) || void 0 === r ? void 0 : r.name,
            x: t.topLeft.x,
            y: t.bottomRight.y,
          };
        };
        exports.getSingleShapeMountPoint = y;
        var l = function (r, e) {
          var o,
            n,
            i = r.topLeft,
            u = r.bottomRight,
            s = r.category;
          return (0, t.List)(
            a(
              [
                {
                  type: "rect",
                  data: { topLeft: i, bottomRight: u },
                  style: e,
                },
              ],
              (
                null === (o = null == s ? void 0 : s.style) || void 0 === o
                  ? void 0
                  : o.handlerShapes
              )
                ? p(
                    null === (n = s.style) || void 0 === n
                      ? void 0
                      : n.handlerShapes,
                    i,
                    u
                  )
                : []
            )
          );
        };
        exports.getSingleRenderJob = l;
        var d = (function (t) {
          function r() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(r, t), r;
        })(
          (0, t.Record)({
            id: "",
            topLeft: e.dumbPoint,
            bottomRight: e.dumbPoint,
            frame: void 0,
            category: void 0,
          })
        );
        exports.RectShape = d;
        var h = (function () {
          function r() {
            this.name = "dual-click-rect";
          }
          return (
            Object.defineProperty(r.prototype, "doing", {
              get: function () {
                return !!this.startPoint;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (r.prototype.getCandidate = function (t) {
              if (this.doing)
                return new d({ topLeft: this.startPoint, bottomRight: t });
            }),
            (r.prototype.restore = function (r, e, o) {
              void 0 === o && (o = !1);
              var n = o
                ? r.map(function (t) {
                    return i(i({}, t), { id: e() });
                  })
                : r.map(function (t) {
                    return new d(i(i({}, t), { id: e() }));
                  });
              return (0, t.List)(n);
            }),
            (r.prototype.start = function (t) {
              this.startPoint = t;
            }),
            (r.prototype.stop = function () {
              this.startPoint = void 0;
            }),
            (r.prototype.finish = function (t) {
              if (
                this.startPoint &&
                !((0, e.distance)(this.startPoint, t.point) < 6)
              ) {
                var r = t.id,
                  n = t.point,
                  i = t.category,
                  a = t.frame,
                  s = u((0, o.calcRect)(this.startPoint, n), 2),
                  c = s[0],
                  p = s[1];
                return (
                  this.stop(),
                  new d({
                    id: r,
                    frame: a,
                    topLeft: c,
                    bottomRight: p,
                    category: i,
                  })
                );
              }
            }),
            r
          );
        })();
        exports.RectCreator = h;
      },
      {
        immutable: "vqB5",
        "../../../infrastructure/math": "FB7D",
        "../../../utils/misc": "jqwk",
        "../../../utils/shape": "urDp",
      },
    ],
    yFbf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.DragRect = void 0);
        var t = require("immutable"),
          e = require("../../../utils/freeze"),
          r = require("../../../utils/methodHelper"),
          i = require("../../../utils/shape"),
          n = require("../commonAction"),
          o = require("../skeleton"),
          s = require("./shared"),
          a = (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              function i() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((i.prototype = r.prototype), new i()));
            };
          })(),
          u = function () {
            return (u =
              Object.assign ||
              function (t) {
                for (var e, r = 1, i = arguments.length; r < i; r++)
                  for (var n in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
              }).apply(this, arguments);
          },
          h = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var i,
              n,
              o = r.call(t),
              s = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
                s.push(i.value);
            } catch (a) {
              n = { error: a };
            } finally {
              try {
                i && !i.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return s;
          },
          c = (function (o) {
            function c() {
              var e = (null !== o && o.apply(this, arguments)) || this;
              return (
                (e.name = "rect"),
                (e.beingProxied = !1),
                (e.creator = new s.RectCreator()),
                (e.mover = new n.Mover(e.hitTest, function (t, e) {
                  return t.merge({
                    topLeft: (0, i.movePoint)(t.topLeft, e),
                    bottomRight: (0, i.movePoint)(t.bottomRight, e),
                  });
                })),
                (e.resizer = new n.Resizer(function (t, e) {
                  var r = h((0, i.calcRect)(t, e), 2);
                  return { topLeft: r[0], bottomRight: r[1] };
                })),
                (e.getHandles = (0, r.memoize)(
                  function () {
                    return [
                      e.beingProxied,
                      e.foreground,
                      e.activeIdList,
                      e.getShapesOfFrame(),
                    ];
                  },
                  function () {
                    return e.beingProxied || e.foreground
                      ? (0, s.getHandles)(e.activeIdList, e.getShapesOfFrame())
                      : (0, t.List)();
                  }
                )),
                (e.handleManager = new n.HandleManager(e.getHandles)),
                (e.getSingleRenderJob = s.getSingleRenderJob),
                (e.getSingleShapeMountPoint = s.getSingleShapeMountPoint),
                e
              );
            }
            return (
              a(c, o),
              (c.prototype.handleDrag = function (r, i) {
                var n = this;
                if (
                  ((this.draft = this.creator.getCandidate(r.current)),
                  this.draft)
                )
                  return e.PATCH.NOOP;
                if (this.resizer.doing)
                  return (
                    (this.shapes = this.shapes.map(function (t) {
                      return n.resizer.resize(t, r.current);
                    })),
                    e.PATCH.NOOP
                  );
                if (this.mover.doing)
                  return (
                    (this.shapes = this.shapes.map(function (t) {
                      return n.mover.move(t, r.delta);
                    })),
                    e.PATCH.NOOP
                  );
                if (this.foreground && !this.activeIdList.size)
                  return this.creator.start(r.start), e.PATCH.NOOP;
                var o = this.handleManager.hitTest(r.start, i);
                return o
                  ? (this.resizer.start(this.getActiveList(), o.fixed),
                    e.PATCH.NOOP)
                  : (this.mover.start(this.getActiveList(), r.start) ||
                      (this.activeIdList = (0, t.List)()),
                    e.PATCH.NOOP);
              }),
              (c.prototype.handleDragEnd = function (r, i) {
                var n = this;
                if (this.creator.doing) {
                  var o = this.creator.finish({
                    id: this.nextID(),
                    point: r.current,
                    frame: this.frame,
                    category: i.category,
                  });
                  return (
                    (this.draft = void 0),
                    o
                      ? ((this.shapes = this.shapes.push(o)),
                        (this.activeIdList = (0, t.List)([o.id])),
                        {
                          key: "annotations",
                          updater: function (t) {
                            var e;
                            return u(
                              u({}, t),
                              (((e = {})[n.name] = n.shapes), e)
                            );
                          },
                        })
                      : e.PATCH.NOOP
                  );
                }
                return this.resizer.doing
                  ? (this.resizer.finish(), this.propogateChanges())
                  : this.mover.doing
                  ? (this.mover.finish(), this.propogateChanges())
                  : e.PATCH.NOOP;
              }),
              (c.prototype.handlePress = function (t) {
                var r = this;
                switch (t.value) {
                  case "Escape":
                    return this.creator.stop(), e.PATCH.NOOP;
                  case "Backspace":
                  case "Delete":
                    return (
                      this.creator.stop(),
                      {
                        key: "annotations",
                        updater: function (t) {
                          var e,
                            i = r.activeIdList.reduce(function (t, e) {
                              return t.filter(function (t) {
                                return t.id !== e;
                              });
                            }, r.shapes);
                          return (
                            (r.shapes = i),
                            u(u({}, t), (((e = {})[r.name] = i), e))
                          );
                        },
                      }
                    );
                }
              }),
              (c.prototype.handleClick = function (r) {
                var i = r.point,
                  n = this.getShapeUnderPoint(i);
                return n
                  ? ((this.activeIdList = (0, t.List)([n.id])), e.PATCH.ACTIVE)
                  : ((this.activeIdList = (0, t.List)()),
                    this.mover.stop(),
                    e.PATCH.LAZY);
              }),
              (c.prototype.handleHover = function (t) {
                var e = t.point,
                  r = this.getShapeUnderPoint(e);
                if (r) {
                  var i = r.id;
                  return {
                    key: "hover",
                    trivial: !0,
                    updater: function () {
                      return i;
                    },
                  };
                }
              }),
              (c.prototype.hitTest = function (t, e) {
                return (0, s.hitTest)(t, e);
              }),
              c
            );
          })(o.Skeleton);
        exports.DragRect = c;
      },
      {
        immutable: "vqB5",
        "../../../utils/freeze": "Ar0y",
        "../../../utils/methodHelper": "AMSF",
        "../../../utils/shape": "urDp",
        "../commonAction": "sOPl",
        "../skeleton": "wwZz",
        "./shared": "KBuq",
      },
    ],
    bMew: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.DualClickRect = void 0);
        var t = require("immutable"),
          e = require("../../../utils/freeze"),
          r = require("../../../utils/methodHelper"),
          i = require("../../../utils/shape"),
          n = require("../commonAction"),
          o = require("../skeleton"),
          s = require("./shared"),
          a = (function () {
            var t = function (e, r) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(e, r);
            };
            return function (e, r) {
              function i() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((i.prototype = r.prototype), new i()));
            };
          })(),
          h = function () {
            return (h =
              Object.assign ||
              function (t) {
                for (var e, r = 1, i = arguments.length; r < i; r++)
                  for (var n in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
              }).apply(this, arguments);
          },
          c = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var i,
              n,
              o = r.call(t),
              s = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
                s.push(i.value);
            } catch (a) {
              n = { error: a };
            } finally {
              try {
                i && !i.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return s;
          },
          u = (function (o) {
            function u() {
              var t = (null !== o && o.apply(this, arguments)) || this;
              return (
                (t.name = "dual-click-rect"),
                (t.creator = new s.RectCreator()),
                (t.mover = new n.Mover(t.hitTest, function (t, e) {
                  return t.merge({
                    topLeft: (0, i.movePoint)(t.topLeft, e),
                    bottomRight: (0, i.movePoint)(t.bottomRight, e),
                  });
                })),
                (t.resizer = new n.Resizer(function (t, e) {
                  var r = c((0, i.calcRect)(t, e), 2);
                  return { topLeft: r[0], bottomRight: r[1] };
                })),
                (t.rangeSelector = new n.RangeSelector(
                  t.getShapesOfFrame,
                  function (t, e) {
                    var r = c(e, 2),
                      i = r[0],
                      n = r[1];
                    return (
                      t.topLeft.x > i.x &&
                      t.bottomRight.x < n.x &&
                      t.topLeft.y > i.y &&
                      t.bottomRight.y < n.y
                    );
                  }
                )),
                (t.multiSelecting = !1),
                (t.getHandles = (0, r.memoize)(
                  function () {
                    return [t.activeIdList, t.getShapesOfFrame()];
                  },
                  function () {
                    return (0, s.getHandles)(
                      t.activeIdList,
                      t.getShapesOfFrame()
                    );
                  }
                )),
                (t.handleManager = new n.HandleManager(t.getHandles)),
                (t.getSingleRenderJob = s.getSingleRenderJob),
                (t.getSingleShapeMountPoint = s.getSingleShapeMountPoint),
                t
              );
            }
            return (
              a(u, o),
              (u.prototype.handleDrag = function (r, i) {
                var n = this;
                if (this.rangeSelector.doing)
                  return (
                    (this.dragSelection = this.rangeSelector.getCandidate(
                      r.current
                    )),
                    e.PATCH.NOOP
                  );
                if (this.foreground && !this.activeIdList.size)
                  return this.rangeSelector.start(r.start), e.PATCH.NOOP;
                if (this.resizer.doing)
                  return (
                    (this.shapes = this.shapes.map(function (t) {
                      return n.resizer.resize(t, r.current);
                    })),
                    e.PATCH.NOOP
                  );
                if (this.mover.doing)
                  return (
                    (this.shapes = this.shapes.map(function (t) {
                      return n.mover.move(t, r.delta);
                    })),
                    e.PATCH.NOOP
                  );
                var o = this.handleManager.hitTest(r.start, i);
                return o
                  ? (this.resizer.start(this.getActiveList(), o.fixed),
                    e.PATCH.NOOP)
                  : (this.mover.start(this.getActiveList(), r.start) ||
                      (this.activeIdList = (0, t.List)()),
                    e.PATCH.NOOP);
              }),
              (u.prototype.handleDragEnd = function (t) {
                return this.rangeSelector.doing
                  ? ((this.activeIdList = this.rangeSelector.finish(t.current)),
                    (this.dragSelection = void 0),
                    e.PATCH.NOOP)
                  : this.resizer.doing
                  ? (this.resizer.finish(), this.propogateChanges())
                  : this.mover.doing
                  ? (this.mover.finish(), this.propogateChanges())
                  : e.PATCH.NOOP;
              }),
              (u.prototype.handlePress = function (t) {
                var r = this,
                  i = t.value;
                switch (((this.multiSelecting = !1), i)) {
                  case "Escape":
                    return this.creator.stop(), e.PATCH.NOOP;
                  case "Backspace":
                  case "Delete":
                    return (
                      this.creator.stop(),
                      {
                        key: "annotations",
                        updater: function (t) {
                          var e,
                            i = r.activeIdList.reduce(function (t, e) {
                              return t.filter(function (t) {
                                return t.id !== e;
                              });
                            }, r.shapes);
                          return (
                            (r.shapes = i),
                            h(h({}, t), (((e = {})[r.name] = i), e))
                          );
                        },
                      }
                    );
                }
              }),
              (u.prototype.handleHold = function (t) {
                switch (t.value) {
                  case "Meta":
                  case "Control":
                    return (this.multiSelecting = !0), e.PATCH.NOOP;
                }
              }),
              (u.prototype.handleClick = function (r, i) {
                var n = this,
                  o = r.point;
                if (this.creator.doing) {
                  var s = this.creator.finish({
                    id: this.nextID(),
                    point: o,
                    category: i.category,
                    frame: this.frame,
                  });
                  return (
                    (this.draft = void 0),
                    s
                      ? ((this.shapes = this.shapes.push(s)),
                        (this.activeIdList = (0, t.List)([s.id])),
                        {
                          key: "annotations",
                          updater: function (t) {
                            var e;
                            return h(
                              h({}, t),
                              (((e = {})[n.name] = n.shapes), e)
                            );
                          },
                        })
                      : e.PATCH.NOOP
                  );
                }
                if (this.multiSelecting) {
                  var a = this.getShapeUnderPoint(o);
                  return (
                    a && (this.activeIdList = this.activeIdList.push(a.id)),
                    e.PATCH.NOOP
                  );
                }
                this.mover.stop();
                var c = this.getShapeUnderPoint(o);
                return c
                  ? ((this.activeIdList = (0, t.List)([c.id])), e.PATCH.ACTIVE)
                  : ((this.activeIdList = (0, t.List)()),
                    this.foreground && this.activeIdList.size <= 1
                      ? {
                          lazy: !0,
                          key: "annotations",
                          updater: function (t) {
                            return n.creator.start(o), t;
                          },
                        }
                      : e.PATCH.LAZY);
              }),
              (u.prototype.handleHover = function (t, r) {
                var i = t.point;
                return (
                  (this.draft = this.creator.getCandidate(i)),
                  this.draft
                    ? e.PATCH.NOOP
                    : this.cursorManager.generatePatch(i, r)
                );
              }),
              (u.prototype.hitTest = function (t, e) {
                return (0, s.hitTest)(t, e);
              }),
              u
            );
          })(o.Skeleton);
        exports.DualClickRect = u;
      },
      {
        immutable: "vqB5",
        "../../../utils/freeze": "Ar0y",
        "../../../utils/methodHelper": "AMSF",
        "../../../utils/shape": "urDp",
        "../commonAction": "sOPl",
        "../skeleton": "wwZz",
        "./shared": "KBuq",
      },
    ],
    IYzl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.toggle = void 0);
        var e = function (e, t) {
          return ~e.indexOf(t)
            ? e.filter(function (e) {
                return e !== t;
              })
            : e.push(t);
        };
        exports.toggle = e;
      },
      {},
    ],
    abzS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.MultiRectSelector = void 0);
        var t = require("immutable"),
          e = require("../utils/collection"),
          i = require("../utils/freeze"),
          s = (function () {
            function s(e) {
              (this.name = "multi-rect-selector"),
                (this.active = !1),
                (this.getRenderJobs = function () {
                  return (0, t.List)();
                }),
                (this.srcTool = e);
            }
            return (
              (s.prototype.activate = function () {
                this.active ||
                  ((this.srcTool.beingProxied = !0),
                  (this.active = !0),
                  (this.srcTool.activeIdList = (0, t.List)()));
              }),
              (s.prototype.deactivate = function () {
                this.active &&
                  ((this.srcTool.beingProxied = !1),
                  (this.active = !1),
                  (this.srcTool.activeIdList = (0, t.List)()));
              }),
              (s.prototype.respond = function (s, o) {
                if (this.active) {
                  switch (s.kind) {
                    case "press":
                      return this.handlePress(s, o);
                    case "click":
                      var r = this.srcTool.getShapeUnderPoint(s.point);
                      return r
                        ? ((this.srcTool.activeIdList = (0, e.toggle)(
                            this.srcTool.activeIdList,
                            r.id
                          )),
                          i.PATCH.NOOP)
                        : ((this.srcTool.activeIdList = (0, t.List)()),
                          i.PATCH.NOOP);
                  }
                  return this.srcTool.respond.call(this.srcTool, s, o);
                }
              }),
              (s.prototype.exec = function (t, e) {
                return this.srcTool.exec(t, e);
              }),
              (s.prototype.handlePress = function (e, s) {
                return "Escape" !== e.value
                  ? this.srcTool.respond(e, s)
                  : ((this.srcTool.activeIdList = (0, t.List)()), i.PATCH.NOOP);
              }),
              s
            );
          })();
        exports.MultiRectSelector = s;
      },
      {
        immutable: "vqB5",
        "../utils/collection": "IYzl",
        "../utils/freeze": "Ar0y",
      },
    ],
    OCFG: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.enableAddon = void 0);
        var e = function (e, o) {
          return { tool: e, addon: new o(e) };
        };
        exports.enableAddon = e;
      },
      {},
    ],
    pbXJ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "enableAddon", {
            enumerable: !0,
            get: function () {
              return e.enableAddon;
            },
          });
        var e = require("./addon");
      },
      { "./addon": "OCFG" },
    ],
    OawS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.all = exports.seg = exports.obj = void 0);
        var e = require("./setup"),
          r = require("./tools/circle"),
          t = require("./tools/v2/polygon"),
          o = require("./tools/line"),
          n = require("./tools/brush"),
          i = require("./tools/mask"),
          l = require("./tools/v2/quad"),
          u = require("./tools/v2/rectPolygon"),
          s = require("./tools/v2/rect/dragRect"),
          a = require("./tools/v2/rect/dualClickRect"),
          c = require("./addons/multiRectSelector"),
          P = require("./addons"),
          d = function (r, t) {
            return (0, e.setup)(r, t, [new s.DragRect()]);
          };
        exports.obj = d;
        var w = function (i, l) {
          return (0, e.setup)(i, l, [
            new r.CirclePainter(),
            new t.PolygonPainter(),
            new o.LinePainter(),
            new n.BrushPainter(),
          ]);
        };
        exports.seg = w;
        var p = function (d, w) {
          var p = (0, P.enableAddon)(new s.DragRect(), c.MultiRectSelector),
            q = p.tool,
            v = p.addon;
          return (0, e.setup)(d, w, [
            v,
            q,
            new l.QuadPainter(),
            new n.BrushPainter(),
            new r.CirclePainter(),
            new t.PolygonPainter(),
            new o.LinePainter(),
            new a.DualClickRect(),
            new u.RectPolygonPainter(),
            new i.MaskPainter(),
          ]);
        };
        exports.all = p;
      },
      {
        "./setup": "ce9k",
        "./tools/circle": "OCtS",
        "./tools/v2/polygon": "D1q9",
        "./tools/line": "fLXt",
        "./tools/brush": "VuPX",
        "./tools/mask": "wcYU",
        "./tools/v2/quad": "bf0R",
        "./tools/v2/rectPolygon": "zXJB",
        "./tools/v2/rect/dragRect": "yFbf",
        "./tools/v2/rect/dualClickRect": "bMew",
        "./addons/multiRectSelector": "abzS",
        "./addons": "pbXJ",
      },
    ],
    bhZg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.restore = exports.connect = void 0);
        var e = require("@baidu/tianzhi-annotator"),
          t = function (t, r) {
            return (0, e.obj)(t, { type: "image", src: r });
          };
        exports.connect = t;
        var r = function (e, t) {
          var r = t.map(function (e) {
            return {
              category: {
                id: e.index,
                name: e.label,
                meta: e.meta ? e.meta : {},
                style: e.category ? e.category.style : {},
              },
              topLeft: { x: e.x1, y: e.y1 },
              bottomRight: { x: e.x2, y: e.y2 },
            };
          });
          e.restore({ rect: r });
        };
        exports.restore = r;
      },
      { "@baidu/tianzhi-annotator": "OawS" },
    ],
    Ql12: [
      function (require, module, exports) {
        "use strict";
        function t() {
          var t = (Math.random() * Math.pow(2, 32)).toString(36),
            e = new Date().getTime();
          return "u-".concat(e, "-").concat(t);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.uuid = t);
      },
      {},
    ],
    OUZ9: [
      function (require, module, exports) {
        function e(e) {
          if (Array.isArray(e)) return e;
        }
        (module.exports = e),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    vKPt: [
      function (require, module, exports) {
        function l(l, e) {
          var r =
            null == l
              ? null
              : ("undefined" != typeof Symbol && l[Symbol.iterator]) ||
                l["@@iterator"];
          if (null != r) {
            var t,
              o,
              u = [],
              n = !0,
              a = !1;
            try {
              for (
                r = r.call(l);
                !(n = (t = r.next()).done) &&
                (u.push(t.value), !e || u.length !== e);
                n = !0
              );
            } catch (d) {
              (a = !0), (o = d);
            } finally {
              try {
                n || null == r.return || r.return();
              } finally {
                if (a) throw o;
              }
            }
            return u;
          }
        }
        (module.exports = l),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    NVR6: [
      function (require, module, exports) {
        function e(e, o) {
          (null == o || o > e.length) && (o = e.length);
          for (var l = 0, r = new Array(o); l < o; l++) r[l] = e[l];
          return r;
        }
        (module.exports = e),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    UyFj: [
      function (require, module, exports) {
        var r = require("./arrayLikeToArray.js");
        function e(e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === o && e.constructor && (o = e.constructor.name),
              "Map" === o || "Set" === o
                ? Array.from(e)
                : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? r(e, t)
                : void 0
            );
          }
        }
        (module.exports = e),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      { "./arrayLikeToArray.js": "NVR6" },
    ],
    Rom6: [
      function (require, module, exports) {
        function e() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        (module.exports = e),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    HETk: [
      function (require, module, exports) {
        var e = require("./arrayWithHoles.js"),
          r = require("./iterableToArrayLimit.js"),
          o = require("./unsupportedIterableToArray.js"),
          t = require("./nonIterableRest.js");
        function u(u, s) {
          return e(u) || r(u, s) || o(u, s) || t();
        }
        (module.exports = u),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {
        "./arrayWithHoles.js": "OUZ9",
        "./iterableToArrayLimit.js": "vKPt",
        "./unsupportedIterableToArray.js": "UyFj",
        "./nonIterableRest.js": "Rom6",
      },
    ],
    fcMS: [
      function (require, module, exports) {
        function o(o, e) {
          if (!(o instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        (module.exports = o),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    P8NW: [
      function (require, module, exports) {
        function e(e, o) {
          for (var r = 0; r < o.length; r++) {
            var t = o[r];
            (t.enumerable = t.enumerable || !1),
              (t.configurable = !0),
              "value" in t && (t.writable = !0),
              Object.defineProperty(e, t.key, t);
          }
        }
        function o(o, r, t) {
          return r && e(o.prototype, r), t && e(o, t), o;
        }
        (module.exports = o),
          (module.exports.default = module.exports),
          (module.exports.__esModule = !0);
      },
      {},
    ],
    qPSJ: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.encode = void 0);
        var r = require("./bitmap"),
          t = require("../utils/misc"),
          e = o(require("rbush")),
          n = require("../utils/hitTest");
        function o(r) {
          return r && r.__esModule ? r : { default: r };
        }
        var a = function () {
            return (a =
              Object.assign ||
              function (r) {
                for (var t, e = 1, n = arguments.length; e < n; e++)
                  for (var o in (t = arguments[e]))
                    Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
                return r;
              }).apply(this, arguments);
          },
          i = function (r) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              e = t && r[t],
              n = 0;
            if (e) return e.call(r);
            if (r && "number" == typeof r.length)
              return {
                next: function () {
                  return (
                    r && n >= r.length && (r = void 0),
                    { value: r && r[n++], done: !r }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          },
          c = function (r, t) {
            var e = "function" == typeof Symbol && r[Symbol.iterator];
            if (!e) return r;
            var n,
              o,
              a = e.call(r),
              i = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                i.push(n.value);
            } catch (c) {
              o = { error: c };
            } finally {
              try {
                n && !n.done && (e = a.return) && e.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
            return i;
          },
          u = function () {
            for (var r = [], t = 0; t < arguments.length; t++)
              r = r.concat(c(arguments[t]));
            return r;
          },
          f = function (r, t) {
            for (var e = [], n = r.x, o = r.y, a = 0; a < t; a++)
              for (var i = 0; i < t; i++) e.push({ x: n + a, y: o + i });
            return e;
          };
        function s(r) {
          for (var t, e, n, o = 0, a = [], i = 0; i < r.length; i++)
            for (t = r[i], i > 2 && (t -= r[i - 2]), n = !0; n; )
              (e = 31 & t),
                (t >>= 5),
                (n = 16 & e ? -1 !== t : 0 !== t) && (e |= 32),
                (e += 48),
                (a[o++] = e);
          return a.reduce(function (r, t) {
            return r + String.fromCharCode(t);
          }, "");
        }
        function h(r) {
          for (var t = !1, e = 0, n = [], o = 0; o < r.size; o++)
            r.get(o) === t ? e++ : (n.push(e), (e = 1), (t = !t));
          return n.push(e), n;
        }
        var l = function (r) {
            var e = r.width,
              n = r.height,
              o = e - 1,
              a = n - 1;
            return function (r, e) {
              return Math.round((0, t.clamp)(e, 0, "width" === r ? o : a));
            };
          },
          y = function (r, t, e) {
            var n,
              o,
              a = l(r),
              c = 1 / 0,
              f = 1 / 0,
              s = 0,
              h = 0;
            switch (t) {
              case "dual-click-rect":
              case "rect":
                (c = (M = e).topLeft.x),
                  (f = M.topLeft.y),
                  (s = M.bottomRight.x),
                  (h = M.bottomRight.y);
                break;
              case "circle":
                var y = e,
                  p = y.c,
                  m = y.r;
                (c = p.x - m), (f = p.y - m), (s = p.x + m), (h = p.y + m);
                break;
              case "quad":
              case "rect-polygon":
              case "polygon":
                var v = e.points,
                  x = [],
                  g = [];
                try {
                  for (var d = i(v), b = d.next(); !b.done; b = d.next()) {
                    var w = b.value;
                    x.push(w.x), g.push(w.y);
                  }
                } catch (k) {
                  n = { error: k };
                } finally {
                  try {
                    b && !b.done && (o = d.return) && o.call(d);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                (c = Math.min.apply(Math, u(x))),
                  (f = Math.min.apply(Math, u(g))),
                  (s = Math.max.apply(Math, u(x))),
                  (h = Math.max.apply(Math, u(g)));
                break;
              case "brush":
                var M;
                (M = e).actions.forEach(function (r) {
                  var t = "base" === r.mode ? 0 : r.width / 2;
                  r.points.forEach(function (r) {
                    (c = Math.min(r.x - t, c)),
                      (s = Math.max(r.x + t, s)),
                      (f = Math.min(r.y - t, f)),
                      (h = Math.max(r.y + t, h));
                  });
                }, []);
                break;
              default:
                throw new Error("unknown shape " + t);
            }
            return {
              x1: a("width", c),
              y1: a("height", f),
              x2: a("width", s),
              y2: a("height", h),
            };
          },
          p = function (t, e) {
            for (
              var n = t.width,
                o = t.height,
                a = new r.Bitmap(n * o),
                i = y(t, "rect", e),
                c = i.x1;
              c <= i.x2;
              c++
            )
              for (var u = i.y1; u <= i.y2; u++) a.set(c * o + u, !0);
            return {
              bbox: i,
              shape: "rect",
              category: e.category,
              mask: s(h(a)),
              meta: { topLeft: e.topLeft, bottomRight: e.bottomRight },
            };
          },
          m = function (t, e) {
            var o,
              a,
              c = t.width,
              u = t.height,
              f = y(t, "polygon", e),
              l = e.points,
              p = [],
              m = [];
            try {
              for (var v = i(l), x = v.next(); !x.done; x = v.next()) {
                var g = x.value;
                p.push(g.x), m.push(g.y);
              }
            } catch (M) {
              o = { error: M };
            } finally {
              try {
                x && !x.done && (a = v.return) && a.call(v);
              } finally {
                if (o) throw o.error;
              }
            }
            for (var d = new r.Bitmap(c * u), b = f.x1; b <= f.x2; b++)
              for (var w = f.y1; w <= f.y2; w++)
                d.set(b * u + w, (0, n.rayCast)(l.length, p, m, b, w));
            return {
              bbox: f,
              shape: "polygon",
              category: e.category,
              mask: s(h(d)),
              meta: { points: e.points },
            };
          },
          v = function (t, e) {
            for (
              var o = t.width,
                a = t.height,
                i = y(t, "circle", e),
                c = new r.Bitmap(o * a),
                u = i.x1;
              u <= i.x2;
              u++
            )
              for (var f = i.y1; f <= i.y2; f++)
                c.set(u * a + f, (0, n.testCircle)(e, { x: u, y: f }));
            return {
              bbox: i,
              shape: "circle",
              category: e.category,
              mask: s(h(c)),
              meta: { center: e.c, radius: e.r },
            };
          },
          x = function (t, e) {
            for (
              var o = t.width,
                a = t.height,
                i = (0, n.lineToPoints)(e.points, 10),
                c = y(t, "polygon", { points: i }),
                u = new r.Bitmap(o * a),
                f = c.x1;
              f <= c.x2;
              f++
            )
              for (var l = c.y1; l <= c.y2; l++)
                u.set(f * a + l, (0, n.testPolygon)(i, { x: f, y: l }));
            return {
              bbox: c,
              shape: "line",
              category: e.category,
              mask: s(h(u)),
              meta: { points: e.points },
            };
          },
          g = function (t, o) {
            for (
              var i = t.width,
                c = t.height,
                u = t.compressionStep,
                l = y(t, "brush", o),
                p = Math.floor(u || 1),
                m = o.actions.map(function (r) {
                  if (("data" in r.segments)) return r;
                  var t = new e.default();
                  return a(a({}, r), { segments: t.fromJSON(r.segments) });
                }),
                v = new r.Bitmap(i * c),
                x = l.x1;
              x <= l.x2;
              x += p
            )
              for (
                var g = function (r) {
                    var t = (0, n.testComposition)(m, { x: x, y: r });
                    f({ x: x, y: r }, p).forEach(function (r) {
                      v.set(r.x * c + r.y, t);
                    });
                  },
                  d = l.y1;
                d <= l.y2;
                d += p
              )
                g(d);
            var b = h(v);
            if (!(b.length < 3))
              return {
                bbox: l,
                shape: "brush",
                category: o.category,
                mask: s(b),
                meta: { actions: "" },
              };
          },
          d = function (r, t, e) {
            var n = function (r, t) {
              return r ? ((r.frame = t), r) : r;
            };
            switch (t) {
              case "rect":
              case "dual-click-rect":
                return e.map(function (t) {
                  return n(p(r, t), t.frame);
                });
              case "quad":
              case "rect-polygon":
              case "polygon":
                return e.map(function (t) {
                  return n(m(r, t), t.frame);
                });
              case "circle":
                return e.map(function (t) {
                  return n(v(r, t), t.frame);
                });
              case "line":
                return e.map(function (t) {
                  return n(x(r, t), t.frame);
                });
              case "brush":
                return e.map(function (t) {
                  return n(g(r, t), t.frame);
                });
            }
            return [];
          };
        exports.encode = d;
      },
      {
        "./bitmap": "pDct",
        "../utils/misc": "jqwk",
        rbush: "CzwG",
        "../utils/hitTest": "B6jF",
      },
    ],
    AbTd: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.encode = s),
          (exports.decode = l);
        var e = a(require("@babel/runtime/helpers/defineProperty")),
          r = a(require("@babel/runtime/helpers/asyncToGenerator")),
          t = a(require("@babel/runtime/regenerator")),
          n = require("@baidu/tianzhi-annotator/es/serializers/mask");
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, r) {
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
        function i(r) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  (0, e.default)(r, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    r,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return r;
        }
        var c = function (e) {
          var r = e.x1,
            t = e.x2,
            n = e.y1,
            a = e.y2,
            o = [r, t].sort(function (e, r) {
              return e < r ? -1 : 1;
            }),
            i = [n, a].sort(function (e, r) {
              return e < r ? -1 : 1;
            });
          return { x1: o[0], x2: o[1], y1: i[0], y2: i[1] };
        };
        function s(e, r, t) {
          return u.apply(this, arguments);
        }
        function u() {
          return (u = (0, r.default)(
            t.default.mark(function e(r, a, o) {
              var c, s;
              return t.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), (0, n.encode)(r, a, o);
                    case 2:
                      return (
                        (c = e.sent),
                        (s = c.map(function (e) {
                          var r = e.category || {},
                            t = r.id,
                            n = r.name;
                          return i(
                            i({}, e.bbox),
                            {},
                            {
                              mask: e.mask,
                              meta: e.meta,
                              shape: a,
                              name: n,
                              id: t,
                              label_id: t,
                            }
                          );
                        })),
                        e.abrupt("return", s)
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function l(e) {
          var r = { mask: [], brush: [], circle: [], polygon: [], line: [] };
          return (
            e.forEach(function (e) {
              var t = e.meta ? e.shape : "brush";
              switch (
                ((r[t] = r[t] || []),
                (e.label_id = e.label),
                (e.name = e.label),
                t)
              ) {
                case "brush":
                  var n = e.category || {};
                  r.brush.push({
                    mask: e.mask || "",
                    actions: e.meta ? e.meta.actions : void 0,
                    bbox: c(e),
                    category: i({ id: e.label_id, name: e.name }, n),
                  });
                  break;
                case "circle":
                  r.circle.push({
                    c: e.meta.center,
                    r: e.meta.radius,
                    category: { id: e.label_id, name: e.name },
                  });
                  break;
                case "polygon":
                  r.polygon.push({
                    points: e.meta.points,
                    category: { id: e.label_id, name: e.name },
                  });
                  break;
                case "line":
                  r.line.push({
                    points: e.meta.points,
                    category: { id: e.label_id, name: e.name },
                  });
              }
            }),
            r
          );
        }
      },
      {
        "@babel/runtime/helpers/defineProperty": "IxO8",
        "@babel/runtime/helpers/asyncToGenerator": "agGE",
        "@babel/runtime/regenerator": "PMvg",
        "@baidu/tianzhi-annotator/es/serializers/mask": "qPSJ",
      },
    ],
    f1pv: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = l);
        var e = i(require("@babel/runtime/helpers/slicedToArray")),
          t = i(require("@babel/runtime/helpers/asyncToGenerator")),
          r = i(require("@babel/runtime/helpers/classCallCheck")),
          n = i(require("@babel/runtime/helpers/createClass")),
          a = i(require("@babel/runtime/regenerator")),
          s = require("./decodeMask-v2");
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (function () {
          function i() {
            (0, r.default)(this, i), (this.listeners = {});
          }
          return (
            (0, n.default)(i, [
              {
                key: "terminate",
                value: function () {
                  this.listeners = {};
                },
              },
              {
                key: "dispatchEvent",
                value: function (e, t) {
                  var r = this.listeners[e] || [];
                  r.length &&
                    r.forEach(function (e) {
                      return e({ data: t });
                    });
                },
              },
              {
                key: "postMessage",
                value: (function () {
                  var r = (0, t.default)(
                    a.default.mark(function t(r) {
                      var n, i, u, l, c, o, d, f;
                      return a.default.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = (0, e.default)(r, 3)),
                                  (i = n[0]),
                                  (u = n[1]),
                                  (l = n[2]),
                                  (t.t0 = i),
                                  (t.next =
                                    "encode" === t.t0
                                      ? 4
                                      : "decode" === t.t0
                                      ? 13
                                      : 15);
                                break;
                              case 4:
                                return (
                                  (c = JSON.parse(l)),
                                  (o = c.meta),
                                  (d = c.name),
                                  (f = c.annotations),
                                  (t.t1 = this),
                                  (t.t2 = u),
                                  (t.next = 9),
                                  (0, s.encode)(o, d, f)
                                );
                              case 9:
                                return (
                                  (t.t3 = t.sent),
                                  (t.t4 = { id: t.t2, payload: t.t3 }),
                                  t.t1.dispatchEvent.call(
                                    t.t1,
                                    "message",
                                    t.t4
                                  ),
                                  t.abrupt("break", 15)
                                );
                              case 13:
                                return (
                                  this.dispatchEvent("message", {
                                    id: u,
                                    payload: (0, s.decode)(JSON.parse(l)),
                                  }),
                                  t.abrupt("break", 15)
                                );
                              case 15:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addEventListener",
                value: function (e, t) {
                  this.listeners[e]
                    ? this.listeners[e].push(t)
                    : (this.listeners[e] = [t]);
                },
              },
              {
                key: "removeEventListener",
                value: function (e, t) {
                  delete this.listeners[e];
                },
              },
            ]),
            i
          );
        })();
        function l() {
          return new u();
        }
      },
      {
        "@babel/runtime/helpers/slicedToArray": "HETk",
        "@babel/runtime/helpers/asyncToGenerator": "agGE",
        "@babel/runtime/helpers/classCallCheck": "fcMS",
        "@babel/runtime/helpers/createClass": "P8NW",
        "@babel/runtime/regenerator": "PMvg",
        "./decodeMask-v2": "AbTd",
      },
    ],
    w9p3: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.serialize = exports.restore = exports.connect = void 0);
        var e,
          t = require("@baidu/tianzhi-annotator"),
          r = require("../../../utils/uuid"),
          n = a(require("../../../utils/fakeWorker"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s() {
          return new Worker("public/segmentSerializer.worker.ee98eaf5.js");
        }
        var i = function (r, n) {
          return (
            e && e.terminate(),
            (e = s()),
            (0, t.seg)(r, { type: "image", src: n })
          );
        };
        exports.connect = i;
        var o = function (t, n) {
          return new Promise(function (a) {
            var s = (0, r.uuid)();
            e.addEventListener("message", function r(n) {
              n.data.id === s &&
                (e.removeEventListener("message", r),
                t.restore(n.data.payload),
                a());
            }),
              e.postMessage(["decode", s, JSON.stringify(n)]);
          });
        };
        exports.restore = o;
        var u = function (t, n, a) {
          return new Promise(function (s) {
            var i = (0, r.uuid)();
            e.postMessage([
              "encode",
              i,
              JSON.stringify({ meta: t, name: n, annotations: a }),
            ]);
            e.addEventListener("message", function t(r) {
              r.data.id === i &&
                (e.removeEventListener("message", t), s(r.data.payload));
            });
          });
        };
        exports.serialize = u;
      },
      {
        "@baidu/tianzhi-annotator": "OawS",
        "../../../utils/uuid": "Ql12",
        "../../../utils/fakeWorker": "f1pv",
        "./segmentSerializer.worker.js": [
          ["segmentSerializer.worker.ee98eaf5.js", "qJHQ"],
          "qJHQ",
        ],
      },
    ],
    m9W7: [
      function (require, module, exports) {
        "use strict";
        function t(t, e, n) {
          return e > n ? n : t < e ? e : t > n ? n : t;
        }
        function e(t, e = 2) {
          return `${(100 * +t).toFixed(e)}%`;
        }
        function n(t, e = 4, n = 3) {
          if (null == t) return null;
          const o = `${t}`.split(".")[0];
          let r = "";
          return (r =
            o.length > e
              ? `${o[0]}.${o.slice(1, 4)}×10^${o.length - 1}`
              : t.toFixed(n));
        }
        function o(t, e) {
          const n = new RegExp(`^-?\\d+(?:\\.\\d{0,${e}})?`),
            o = t.toString().match(n);
          return (o ? Number.parseFloat(o[0]) : 0).toFixed(e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.clamp = t),
          (exports.percent = e),
          (exports.numTooLong = n),
          (exports.toFixedWithoutRounding = o);
      },
      {},
    ],
    BCnp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.maskPhone = o),
          (exports.copy =
            exports.calcSimilarity =
            exports.repeat =
            exports.template =
              void 0);
        var e = require("./number"),
          t = function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, c) {
              function i(e) {
                try {
                  l(r.next(e));
                } catch (t) {
                  c(t);
                }
              }
              function a(e) {
                try {
                  l(r.throw(e));
                } catch (t) {
                  c(t);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(i, a);
              }
              l((r = r.apply(e, t || [])).next());
            });
          };
        const n = (e, t) => {
          let n = e;
          for (const [r, o] of Object.entries(t))
            n = n.replace(new RegExp(`{{${r}}}`, "g"), o);
          return n;
        };
        exports.template = n;
        const r = (e, t) => new Array(t).fill(e).join("");
        function o(t) {
          if (!t) return t;
          const n = (0, e.clamp)(Math.floor(t.length / 2), 1, 5),
            o = r("*", n),
            c = Math.floor((t.length - n) / 2);
          return `${t.slice(0, c)}${o}${t.slice(n + c)}`;
        }
        exports.repeat = r;
        const c = (e, t) => {
          const n = Math.max(e.length, t.length);
          let r = 0;
          for (let o = 0; o < n; o++) {
            if (null == e[o] || null == t[o]) return r;
            if (e[o] !== t[o]) break;
            r++;
          }
          return r;
        };
        exports.calcSimilarity = c;
        const i = (e) =>
          t(void 0, void 0, void 0, function* () {
            if (!e) return !0;
            try {
              if (
                navigator &&
                navigator.clipboard &&
                navigator.clipboard.writeText
              )
                return yield navigator.clipboard.writeText(e), !0;
              const n = document.createElement("input");
              return (
                (n.value = e),
                (n.style.opacity = "0"),
                document.body.appendChild(n),
                n.select(),
                document.execCommand("Copy"),
                document.body.removeChild(n),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
        exports.copy = i;
      },
      { "./number": "m9W7" },
    ],
    Q6T1: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.compareOrder =
            exports.compareKey =
            exports.compareLiteral =
              void 0);
        const e = (e, r) => e === r;
        exports.compareLiteral = e;
        const r = (e) => (r, o) => r[e] === o[e];
        exports.compareKey = r;
        const o = (e) => {
          const r = "desc" === e ? -1 : 1;
          return (e, o) => (e > o ? r : -r);
        };
        exports.compareOrder = o;
      },
      {},
    ],
    BuVN: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.count = o),
          (exports.fromRange =
            exports.dedup =
            exports.appendOrReplace =
            exports.sort =
            exports.flattenMap =
            exports.presenceReduce =
            exports.subtract =
            exports.findLast =
            exports.chunk =
            exports.flatten =
              void 0);
        var e = require("./compare");
        const t = (e) =>
          e.reduce((e, r) => e.concat(Array.isArray(r) ? t(r) : r), []);
        exports.flatten = t;
        const r = (e, t) => {
          if (!t) return [e];
          const r = [];
          let o = [];
          for (const s of e) o.length < t ? o.push(s) : (r.push(o), (o = [s]));
          return r.push(o), r;
        };
        function o(e, t) {
          return e.reduce((e, r) => (t(r) ? e + 1 : e), 0);
        }
        exports.chunk = r;
        const s = (e, t) => {
          let r;
          for (let o = e.length - 1; o >= 0; o--) r || (t(e[o]) && (r = e[o]));
          return r;
        };
        exports.findLast = s;
        const n = (e, t, r) =>
          e.reduce((e, o) => (t.some((e) => r(o, e)) ? e : e.concat(o)), []);
        exports.subtract = n;
        const c = (e, t) =>
          e.reduce((e, r) => {
            const o = t(r);
            return o ? e.concat(o) : e;
          }, []);
        exports.presenceReduce = c;
        const p = c;
        exports.flattenMap = p;
        const a = (t, r, o = "desc") => {
          const s = t.map((e, t) => ({ score: r(e), index: t })),
            n = (0, e.compareOrder)(o);
          return (
            s.sort((e, t) => n(e.score, t.score)), s.map(({ index: e }) => t[e])
          );
        };
        exports.sort = a;
        const u = (t, r, o) => {
          const s = null == o ? e.compareLiteral : o,
            n = t.filter((e) => !s(e, r));
          return n.length === t.length ? t.concat(r) : n.concat(r);
        };
        exports.appendOrReplace = u;
        const x = (e, t) => {
          const r = {};
          return (
            e.forEach((e) => {
              r[t(e)] = e;
            }),
            Object.values(r)
          );
        };
        exports.dedup = x;
        const d = (e, t, r = 1) => {
          const o = t > e ? r : -r,
            s = o > 0 ? (e, t) => e <= t : (e, t) => e >= t,
            n = [];
          for (let c = e; s(c, t); c += o) n.push(c);
          return n;
        };
        exports.fromRange = d;
      },
      { "./compare": "Q6T1" },
    ],
    VAxH: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.generateRandomHEXRange =
            exports.generateHEXRange =
            exports.hsbToHEX =
            exports.hexToRGBA =
            exports.rgbToRGBA =
            exports.rgbToHEX =
            exports.hexToRGB =
              void 0);
        var e = require("./number"),
          t = require("./string"),
          r = require("./collection");
        const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
          o = (e) => {
            const t = n.exec(e);
            if (!t) throw new Error("invalid hex");
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
          };
        exports.hexToRGB = o;
        const s = (e, r, n) => `${(0, t.repeat)(n, r - e.length)}${e}`,
          a = (e) => {
            const [t, r, n] = o(e),
              s = Math.max(t, r, n),
              a = Math.min(t, r, n),
              p = 100 * (0 === s ? 0 : (s - a) / s),
              c = (s / 255) * 100;
            if (a === s) return [0, p, c];
            const i = s - a;
            return [
              ((s === t
                ? ((r - n) / i) * 60
                : s === r
                ? (60 * (n - t)) / i + 120
                : s === n
                ? (60 * (t - r)) / i + 240
                : 0) +
                360) %
                360,
              p,
              c,
            ];
          },
          p = (e) => {
            const t = e[0],
              r = e[1],
              n = e[2],
              o = (n / 100) * (r / 100),
              s = o * (1 - Math.abs(((t / 60) % 2) - 1)),
              a = n / 100 - o;
            return (
              0 <= t && t <= 60
                ? [o, s, 0]
                : 60 < t && t <= 120
                ? [s, o, 0]
                : 120 < t && t <= 180
                ? [0, o, s]
                : 180 < t && t <= 240
                ? [0, s, o]
                : 240 < t && t <= 300
                ? [s, 0, o]
                : 300 < t && t <= 360
                ? [o, 0, s]
                : [0, 0, 0]
            ).map((e) => Math.round(255 * (e + a)));
          },
          c = (e) => `#${e.map((e) => s(e.toString(16), 2, "0")).join("")}`;
        exports.rgbToHEX = c;
        const i = (e, t) => {
          const [r, n, o] = e;
          return `rgba(${r}, ${n}, ${o}, ${t})`;
        };
        exports.rgbToRGBA = i;
        const l = (e, t) => i(o(e), t);
        exports.hexToRGBA = l;
        const h = (e) => c(p(e));
        exports.hsbToHEX = h;
        const u = (t) => {
            const [r, n, o] = t;
            return [r % 360, (0, e.clamp)(n, 5, 100), (0, e.clamp)(o, 0, 100)];
          },
          g = (e, t = 10) => {
            const [n, o, s] = e,
              a = o / 5,
              p = Math.ceil(t / 2),
              c = t - 1 - p,
              i = Math.ceil(t / 2) - p;
            return [
              ...(0, r.fromRange)(p, 1).map((e) =>
                u([n + 1 * e, o - a * e, s + 5 * e])
              ),
              e,
              ...(0, r.fromRange)(1, c).map((e) =>
                u([n - 1 * e, o + 5 * e, s - 15 * e])
              ),
            ].slice(i, t);
          },
          x = (e) => {
            const t = a(e);
            return g(t).map(h);
          };
        function* m(e) {
          let t = 0;
          const r = [60],
            n = [30];
          for (yield 0, t++; r.length && t <= e; ) {
            const e = r.shift(),
              o = n.shift();
            if ((yield e, t++, !o || null == e)) return;
            const s = [e - o, e + o].filter((e) => e > 0);
            r.push(...s);
            const a = Math.max(Math.round(o / 2), 1);
            n.push(...Array.from({ length: s.length }).fill(a));
          }
        }
        exports.generateHEXRange = x;
        const f = (e, t = 5) => {
          const n = m(Math.ceil(e / t / 3));
          let o = [];
          for (const a of n)
            null != a &&
              o.push(
                ...(0, r.fromRange)(a, 240 + a, 120).map((e) => [e, 80, 80])
              );
          const s = o.map((e) => {
            return g(e, t).map(p);
          });
          return (0, r.flattenMap)(
            [...(0, r.fromRange)(t - 2, 0), t - 1],
            (e) => s.map((t) => t[e])
          );
        };
        exports.generateRandomHEXRange = f;
      },
      { "./number": "m9W7", "./string": "BCnp", "./collection": "BuVN" },
    ],
    yMQg: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.restore = exports.connect = void 0);
        var e = require("@baidu/tianzhi-annotator/es/setup"),
          t = require("@baidu/tianzhi-annotator/es/tools/v2/rect/dragRect"),
          r = require("@baidu/tianzhi.afe-toolbox/color"),
          o = 30,
          a = function (r, a) {
            return (0, e.setup)(r, { type: "video", src: a, frameRate: o }, [
              new t.DragRect(),
            ]);
          };
        exports.connect = a;
        var n = [255, 255, 255],
          c = function (e, t) {
            var o = t.reduce(function (e, t) {
                return (e[t.trackId] = n), e;
              }, {}),
              a = (0, r.generateRandomHEXRange)(Object.keys(o).length);
            Object.keys(o).forEach(function (e, t) {
              o[e] = a[t];
            });
            var c = t.map(function (e) {
              return {
                category: {
                  id: e.index,
                  name: e.label,
                  meta: e.meta ? e.meta : {},
                  style: e.category
                    ? e.category.style
                    : {
                        background: (0, r.rgbToRGBA)(o[e.trackId], 0.6),
                        border: o[e.trackId],
                      },
                },
                frame: e.frame,
                topLeft: { x: e.x1, y: e.y1 },
                bottomRight: { x: e.x2, y: e.y2 },
              };
            });
            e.restore({ rect: c });
          };
        exports.restore = c;
      },
      {
        "@baidu/tianzhi-annotator/es/setup": "ce9k",
        "@baidu/tianzhi-annotator/es/tools/v2/rect/dragRect": "yFbf",
        "@baidu/tianzhi.afe-toolbox/color": "VAxH",
      },
    ],
    pRA2: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.restore = exports.connect = void 0);
        var e = require("./obj"),
          r = require("./seg"),
          t = require("./video"),
          s = require("../../../utils/constant"),
          c = function (c) {
            switch (c) {
              case s.MODEL_TYPES.VIDEO_TRACKING:
                return t.connect;
              case s.MODEL_TYPES.OBJ_DCT:
                return e.connect;
              case s.MODEL_TYPES.SEGMENT:
                return r.connect;
            }
          };
        exports.connect = c;
        var n = function (c) {
          switch (c) {
            case s.MODEL_TYPES.VIDEO_TRACKING:
              return t.restore;
            case s.MODEL_TYPES.OBJ_DCT:
              return e.restore;
            case s.MODEL_TYPES.SEGMENT:
              return r.restore;
          }
        };
        exports.restore = n;
      },
      {
        "./obj": "bhZg",
        "./seg": "w9p3",
        "./video": "yMQg",
        "../../../utils/constant": "ut45",
      },
    ],
    K8tx: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.installVideoController = void 0);
        var o = function (o) {
            return o >= 10 ? o : "0".concat(o);
          },
          e = function (e) {
            var n = Math.ceil(e),
              t = Math.floor(n / 60),
              i = n % 60;
            return "".concat(o(t), ":").concat(o(i));
          },
          n = function () {
            var o = document.querySelector("#time");
            o.addEventListener("click", function (e) {
              if ((e.stopPropagation(), window.videoControl)) {
                var n = window.videoControl.duration;
                window.videoControl.setCurrentTime((o.value / 100) * n);
              }
            }),
              document
                .getElementById("pause")
                .addEventListener("click", function (o) {
                  o.stopPropagation(),
                    window.videoControl && window.videoControl.controlPause();
                });
            var n = document.querySelector("#time_now"),
              t = document.querySelector("#time_duration"),
              i = document.querySelector("#pause");
            !(function r() {
              setTimeout(function () {
                if (window.videoControl) {
                  var d = e(window.videoControl.duration);
                  ("00:00" !== t.innerText && d === t.innerText) ||
                    (t.innerText = d),
                    i.classList.toggle("playing", window.videoControl.playing),
                    (o.value =
                      (window.videoControl.currentTime /
                        window.videoControl.duration) *
                      100),
                    (n.innerText = e(window.videoControl.currentTime));
                }
                r();
              }, 500);
            })();
          };
        exports.installVideoController = n;
      },
      {},
    ],
    jIsv: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = a(require("@babel/runtime/helpers/asyncToGenerator")),
          r = a(require("@babel/runtime/helpers/defineProperty")),
          t = a(require("@babel/runtime/regenerator")),
          n = require("../../utils/constant"),
          o = require("./bridge"),
          c = a(require("jquery")),
          u = require("./video");
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e, r) {
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
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(n), !0).forEach(function (t) {
                  (0, r.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(n, r)
                  );
                });
          }
          return e;
        }
        function l(e) {
          return e.map(function (e) {
            return s(
              s({}, e),
              {},
              {
                label: ""
                  .concat(e.label, ": ")
                  .concat(e.name || "--", " ")
                  .concat(e.score ? e.score.toFixed(4) : ""),
              }
            );
          });
        }
        var f = (function () {
          var r = (0, e.default)(
            t.default.mark(function e(r, u, a) {
              var i, s, l, f, d, y, b, O;
              return t.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = u.some(function (e) {
                          return !e.mask;
                        })),
                        (s =
                          r === n.MODEL_TYPES.SEGMENT && i
                            ? n.MODEL_TYPES.OBJ_DCT
                            : r),
                        (l = (0, o.connect)(s)),
                        (f = (0, c.default)(".canvas-container")[0]),
                        (e.next = 6),
                        l(f, a)
                      );
                    case 6:
                      return (
                        (d = e.sent),
                        (window.$_annotator = d),
                        (y = d.editor),
                        (b = d.renderer),
                        (O = d.videoControl),
                        (window.videoControl = O),
                        (e.next = 12),
                        (0, o.restore)(s)(y, u)
                      );
                    case 12:
                      b.renderMountPoints = function (e) {
                        return p(f, e);
                      };
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e, t, n) {
            return r.apply(this, arguments);
          };
        })();
        function p(e, r) {
          Array.from(e.querySelectorAll(".mount-point")).forEach(function (e) {
            return e.remove();
          }),
            r.forEach(function (r) {
              var t = document.createElement("div");
              (t.className = "mount-point"),
                (t.style.opacity = "0.6"),
                (t.style.background = "#fff"),
                (t.style.padding = "0 5px"),
                (t.style.position = "absolute"),
                (t.style.left = "".concat(r.x, "px")),
                (t.style.top = "".concat(r.y, "px")),
                (t.style.pointerEvents = "none"),
                r.name && ((t.innerHTML = r.name), e.appendChild(t));
            });
        }
        exports.default = f;
      },
      {
        "@babel/runtime/helpers/asyncToGenerator": "agGE",
        "@babel/runtime/helpers/defineProperty": "IxO8",
        "@babel/runtime/regenerator": "PMvg",
        "../../utils/constant": "ut45",
        "./bridge": "pRA2",
        jquery: "juYr",
        "./video": "K8tx",
      },
    ],
    zJsB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = r);
        var e = u(require("./dct")),
          t = require("../../utils/constant");
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(u, r, s) {
          switch (u) {
            case t.MODEL_TYPES.IMG_CLS:
              break;
            default:
              (0, e.default)(u, r, s);
          }
        }
      },
      { "./dct": "jIsv", "../../utils/constant": "ut45" },
    ],
    Focm: [
      function (require, module, exports) {
        "use strict";
        var e = c(require("@babel/runtime/helpers/defineProperty")),
          t = c(require("@babel/runtime/helpers/asyncToGenerator")),
          r = c(require("@babel/runtime/regenerator")),
          n = c(require("jquery")),
          a = require("../utils/constant"),
          u = c(require("./annotator")),
          o = require("./annotator/video");
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
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
        function i(t) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? l(Object(n), !0).forEach(function (r) {
                  (0, e.default)(t, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var d = null,
          f = a.THRESHOLD_DEFAULT,
          s = null,
          p = [],
          h = "";
        function E(e) {
          alert(e || "请求失败！");
        }
        function v(e, t, r) {
          return b.apply(this, arguments);
        }
        function b() {
          return (b = (0, t.default)(
            r.default.mark(function e(t, a, u) {
              var o, c, l;
              return r.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), L(a, t);
                    case 2:
                      if (((o = e.sent), (c = o.results), (l = o.error), c)) {
                        e.next = 8;
                        break;
                      }
                      return E(l), e.abrupt("return");
                    case 8:
                      I(c),
                        C(t, c, u),
                        (0, n.default)(".range-wrapper").show(),
                        (0, n.default)(".threshold").text(f),
                        (0, n.default)("#range").val(100 * f),
                        M(f);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function O(e, t, r) {
          return m.apply(this, arguments);
        }
        function m() {
          return (m = (0, t.default)(
            r.default.mark(function e(t, a, u) {
              var o, c, l;
              return r.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), L(a, t);
                    case 2:
                      if (((o = e.sent), (c = o.results), (l = o.error), c)) {
                        e.next = 8;
                        break;
                      }
                      return E(l), e.abrupt("return");
                    case 8:
                      I(c),
                        C(t, c, u),
                        (0, n.default)(".range-wrapper").show(),
                        (0, n.default)(".threshold").text(f),
                        (0, n.default)("#range").val(100 * f),
                        M(f);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function g(e, t, r) {
          return x.apply(this, arguments);
        }
        function x() {
          return (x = (0, t.default)(
            r.default.mark(function e(t, a, u) {
              var o, c, l, i;
              return r.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), L(a, t);
                    case 2:
                      if (((o = e.sent), (c = o.results), (l = o.error), c)) {
                        e.next = 8;
                        break;
                      }
                      return E(l), e.abrupt("return");
                    case 8:
                      (i = {}),
                        I(
                          c.reduce(function (e, t) {
                            return (
                              i[t.trackId] || e.push(t), (i[t.trackId] = !0), e
                            );
                          }, [])
                        ),
                        (0, n.default)(".range-wrapper").hide(),
                        C(t, c, u),
                        (0, n.default)(".threshold").text(f),
                        (0, n.default)(".threshold-text").show();
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function w(e, t) {
          return y.apply(this, arguments);
        }
        function y() {
          return (y = (0, t.default)(
            r.default.mark(function e(t, a) {
              var u, o, c;
              return r.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), L(a, t);
                    case 2:
                      if (((u = e.sent), (o = u.results), (c = u.error), o)) {
                        e.next = 8;
                        break;
                      }
                      return E(c), e.abrupt("return");
                    case 8:
                      I(o), (0, n.default)(".range-wrapper").hide();
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function D(e, t, r) {
          return _.apply(this, arguments);
        }
        function _() {
          return (_ = (0, t.default)(
            r.default.mark(function e(t, a, u) {
              var o, c, l;
              return r.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), L(a, t);
                    case 2:
                      if (((o = e.sent), (c = o.results), (l = o.error), c)) {
                        e.next = 8;
                        break;
                      }
                      return E(l), e.abrupt("return");
                    case 8:
                      I(c),
                        (0, n.default)(".range-wrapper").hide(),
                        (0, n.default)(".img-container").html(
                          "<audio id='audio' controls src='".concat(u, "'/>")
                        );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function T() {
          return S.apply(this, arguments);
        }
        function S() {
          return (S = (0, t.default)(
            r.default.mark(function t() {
              var u, c, l, i, s, p, h, E;
              return r.default.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), n.default.get(a.INFO_URL);
                    case 2:
                      (c = t.sent),
                        (l = c.id),
                        (i = c.kind),
                        (s = c.name),
                        (p = c.thresholdRec),
                        (h = c.title),
                        (d = i),
                        (f = p ? p.toFixed(2) : a.THRESHOLD_DEFAULT),
                        (document.title = null != h ? h : "百度EasyEdge"),
                        (u = {}),
                        (0, e.default)(u, a.MODEL_TYPES.IMG_CLS, "图像分类"),
                        (0, e.default)(u, a.MODEL_TYPES.OBJ_DCT, "物体检测"),
                        (0, e.default)(u, a.MODEL_TYPES.SOUND_CLS, "声音分类"),
                        (0, e.default)(u, a.MODEL_TYPES.SEGMENT, "图像分割"),
                        (0, e.default)(
                          u,
                          a.MODEL_TYPES.VIDEO_TRACKING,
                          "目标追踪"
                        ),
                        (0, e.default)(
                          u,
                          a.MODEL_TYPES.FACE_RECOGNITION,
                          "人脸识别"
                        ),
                        (E = u),
                        i === a.MODEL_TYPES.SOUND_CLS &&
                          ((0, n.default)("#upload").attr("accept", "audio/*"),
                          (0, n.default)(".tip-upload").text("点击此上传音频"),
                          (0, n.default)(".upload-logo").hide()),
                        i === a.MODEL_TYPES.VIDEO_TRACKING &&
                          ((0, n.default)("#upload").attr(
                            "accept",
                            "video/mp4,video/mov"
                          ),
                          (0, n.default)(".tip-upload").text("点击此上传视频"),
                          (0, n.default)(".upload-logo").hide(),
                          (0, o.installVideoController)()),
                        (document.getElementById("info").innerHTML = "【"
                          .concat(E[i], '】<span style="margin-right: 8px">')
                          .concat(l, "</span>")
                          .concat(s));
                    case 15:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function P(e) {
          return new Promise(function (t, r) {
            var n = new FileReader();
            (n.onload = function () {
              return t(n.result);
            }),
              (n.onerror = function (e) {
                return r(e);
              }),
              n.readAsDataURL(e);
          });
        }
        function k(e, t) {
          if (t === a.MODEL_TYPES.VIDEO_TRACKING) {
            var r = document.createElement("video");
            return (
              (r.preload = "metadata"),
              (r.src = e),
              new Promise(function (e) {
                (r.onloadedmetadata = function () {
                  return e({ width: r.videoWidth, height: r.videoHeight });
                }),
                  (r.onerror = function () {
                    return e(void 0);
                  });
              })
            );
          }
          var n = new Image();
          return new Promise(function (t) {
            (n.onload = function () {
              return t({ width: n.width, height: n.height });
            }),
              (n.onerror = function () {
                return t(void 0);
              }),
              (n.src = e);
          });
        }
        function L(e, t) {
          var r = t === a.MODEL_TYPES.VIDEO_TRACKING ? f : 0;
          return new Promise(function (u) {
            n.default
              .ajax({
                url: (0, a.baseUrlFactory)({ type: t, threshold: r }),
                type: "POST",
                data: a.isProd ? e : e.name,
                processData: !1,
                contentType: !1,
              })
              .done(function (e) {
                var t = e.error_code
                  ? "请求失败，请查看日志。ErrorCode: ".concat(e.error_code)
                  : "";
                u(i(i({}, e), {}, { error: t })), (p = e.results);
              })
              .fail(function (e) {
                return u({ error: e.responseText || e.statusText });
              });
          });
        }
        function I(e) {
          var t = e.reduce(function (e, t) {
            var r = t.label,
              n = t.index,
              a = t.trackId,
              u = void 0 === a ? "" : a,
              o = t.confidence;
            return (e +=
              '<li><span class="label-name"\n            data-label="'
                .concat(r, '"\n            data-index="')
                .concat(n, '"\n            data-track-id="')
                .concat(u, '"\n            data-confi="')
                .concat(o, '"\n        >')
                .concat(r, "</span><span>")
                .concat(o.toFixed(3), "</span></li>"));
          }, "");
          (0, n.default)(".content ul").html(t),
            (0, n.default)(".content-tip").hide();
        }
        function M(e) {
          (f = +e),
            (0, n.default)(".content li").length &&
              ((0, n.default)(".content li").each(function (t, r) {
                (0, n.default)(r).find(".label-name").data("confi") < e
                  ? (0, n.default)(r).addClass("disabled")
                  : (0, n.default)(r).removeClass("disabled");
              }),
              C(d, A(), h));
        }
        function C(e, t, r) {
          return Y.apply(this, arguments);
        }
        function Y() {
          return (Y = (0, t.default)(
            r.default.mark(function e(t, o, c) {
              var l, d, f, s;
              return r.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (![a.MODEL_TYPES.SOUND_CLS].includes(t)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), k(c, t);
                    case 4:
                      return (
                        (l = e.sent),
                        (d = l.width),
                        (f = l.height),
                        (s = o.map(function (e) {
                          return i(
                            i({}, e),
                            {},
                            {
                              x1: e.x1 * d,
                              x2: e.x2 * d,
                              y1: e.y1 * f,
                              y2: e.y2 * f,
                            }
                          );
                        })),
                        (e.next = 10),
                        (0, u.default)(t, s, c)
                      );
                    case 10:
                      if (t !== a.MODEL_TYPES.VIDEO_TRACKING) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (0, n.default)("#video-controller").show()
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function N() {
          (0, n.default)(".canvas-container").empty(),
            (0, n.default)(".img-container").empty();
        }
        function G(e, t, r) {
          return R.apply(this, arguments);
        }
        function R() {
          return (R = (0, t.default)(
            r.default.mark(function e(t, n, u) {
              return r.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (e.t0 = t),
                        (e.next =
                          e.t0 === a.MODEL_TYPES.IMG_CLS
                            ? 3
                            : e.t0 === a.MODEL_TYPES.OBJ_DCT
                            ? 4
                            : e.t0 === a.MODEL_TYPES.FACE_RECOGNITION
                            ? 4
                            : e.t0 === a.MODEL_TYPES.SOUND_CLS
                            ? 5
                            : e.t0 === a.MODEL_TYPES.SEGMENT
                            ? 6
                            : e.t0 === a.MODEL_TYPES.VIDEO_TRACKING
                            ? 7
                            : 8);
                      break;
                    case 3:
                      return e.abrupt("return", w(t, n));
                    case 4:
                      return e.abrupt("return", O(t, n, u));
                    case 5:
                      return e.abrupt("return", D(t, n, u));
                    case 6:
                      return e.abrupt("return", v(t, n, u));
                    case 7:
                      return e.abrupt("return", g(t, n, u));
                    case 8:
                      throw new Error("undefined  MODEL_TYPES");
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function A() {
          var e = (0, n.default)(".label-name.label-cls"),
            t = e.data("index"),
            r = e.data("trackId"),
            u = p.filter(function (e) {
              return e.confidence >= +f;
            });
          return null == t
            ? u
            : u.map(function (e) {
                return d === a.MODEL_TYPES.VIDEO_TRACKING && e.trackId === r
                  ? i(
                      i({}, e),
                      {},
                      {
                        category: {
                          style: {
                            background: "rgba(255, 57, 18, 1)",
                            stroke: "rgba(255, 57, 18)",
                          },
                        },
                      }
                    )
                  : d !== a.MODEL_TYPES.VIDEO_TRACKING && e.index === t
                  ? i(
                      i({}, e),
                      {},
                      {
                        category: {
                          style: {
                            background: "rgba(255, 57, 18, 0.4)",
                            stroke: "rgba(255, 57, 18)",
                          },
                        },
                      }
                    )
                  : e;
              });
        }
        (0, n.default)(function () {
          T(),
            (0, n.default)("#upload").change(
              (0, t.default)(
                r.default.mark(function e() {
                  var t;
                  return r.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (0, n.default)(".loading")
                                .show()
                                .find("p")
                                .text("图片载入中"),
                              N(),
                              (t = (0, n.default)(this)[0].files[0]),
                              (e.next = 5),
                              P(t)
                            );
                          case 5:
                            if (((h = e.sent), d !== a.MODEL_TYPES.IMG_CLS)) {
                              e.next = 9;
                              break;
                            }
                            return (
                              (e.next = 9),
                              (0, n.default)(".img-container").html(
                                "<img src='".concat(h, "'/>")
                              )
                            );
                          case 9:
                            return (
                              (0, n.default)(".loading .tip").text(
                                "计算结果中"
                              ),
                              (e.next = 12),
                              G(d, t, h)
                            );
                          case 12:
                            (0, n.default)(".loading").hide(),
                              ((0, n.default)("#upload")[0].value = "");
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )
            ),
            (0, n.default)(document).on("click", ".label-name", function () {
              1 === d ||
                (0, n.default)(this).parent().hasClass("disabled") ||
                ((0, n.default)(".label-name").removeClass("label-cls"),
                (0, n.default)(this).addClass("label-cls"),
                C(d, A(), h));
            }),
            (0, n.default)("#range").on("input", function () {
              var e = (0, n.default)(this).val() / 100;
              (0, n.default)(".threshold").text(e), M(e);
            }),
            (0, n.default)(".update").click(function () {
              var e = (0, n.default)("#range").val() / 100;
              (0, n.default)(".cover").show().find("input").val(e);
            }),
            (0, n.default)(".cancel").click(function () {
              (0, n.default)(".cover").hide().find("input").val("");
            }),
            (0, n.default)(".confirm").click(function () {
              var e = (0, n.default)(".cover input").val();
              (0, n.default)(".cover").hide(),
                (0, n.default)(".threshold").text(e),
                (0, n.default)("#range").val(100 * e),
                M(e);
            }),
            (0, n.default)(".cover input").on("input", function () {
              var e = (0, n.default)(this).val();
              e < 0
                ? (0, n.default)(this).val(0)
                : e > 1
                ? (0, n.default)(this).val(1)
                : (0, n.default)(this).val(
                    e.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, "$1")
                  );
            }),
            (0, n.default)(document).on("click", ".img-wrapper", function (e) {
              (0, n.default)(this).find("input").click();
            }),
            (0, n.default)(document).on(
              "click",
              ".img-wrapper input",
              function (e) {
                e.stopPropagation();
              }
            ),
            (0, n.default)(document).on(
              "click",
              ".img-wrapper #video-controller",
              function (e) {
                e.stopPropagation();
              }
            ),
            document
              .querySelectorAll(".canvas-container")
              .forEach(function (e) {
                return e.addEventListener(
                  "mousedown",
                  function (e) {
                    e.preventDefault(), e.stopPropagation();
                  },
                  !0
                );
              });
        });
      },
      {
        "@babel/runtime/helpers/defineProperty": "IxO8",
        "@babel/runtime/helpers/asyncToGenerator": "agGE",
        "@babel/runtime/regenerator": "PMvg",
        jquery: "juYr",
        "../utils/constant": "ut45",
        "./annotator": "zJsB",
        "./annotator/video": "K8tx",
      },
    ],
  },
  {},
  ["Focm"],
  null
);
