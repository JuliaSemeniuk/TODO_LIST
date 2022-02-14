(() => {
  "use strict";
  var r = {
      771: (r, e, n) => {
        n.d(e, { Z: () => s });
        var t = n(81),
          o = n.n(t),
          a = n(645),
          i = n.n(a)()(o());
        i.push([
          r.id,
          ':root {\r\n  --bg-header: #273c75;\r\n  --bg-tasks: #f5f6fa;\r\n  --text-header: #f5f6fa;\r\n  --text-tasks: #2f3640;\r\n  --white: #fff;\r\n  --button-tasks: #487eb0;\r\n  --button-hover: #fbc531;\r\n  --button-done: #4cd137;\r\n  --button-done-hover: #44bd32;\r\n  --button-delete: #e84c3d;\r\n  --button-delete-hover: #c23616;\r\n  --input: #fff;\r\n  --border: 1px solid #dcdde1;\r\n  --box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n  --shadow-hover: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\r\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  line-height: 1;\r\n  font-size: 16px;\r\n  font-family: "Montserrat", sans-serif;\r\n  background-color: var(--bg-tasks);\r\n}\r\n\r\ninput,\r\nbutton {\r\n  font-family: inherit;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  max-width: 650px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  background: var(--bg-header);\r\n  min-height: 80px;\r\n}\r\n\r\n.body {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 30px 15px;\r\n}\r\n\r\n.header__title {\r\n  font-size: 34px;\r\n  line-height: 42px;\r\n  letter-spacing: 1px;\r\n  color: var(--text-header);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.input {\r\n  flex: 1 1 auto;\r\n  background-color: var(--input);\r\n  border: var(--border);\r\n  border-radius: 5px;\r\n  width: 250px;\r\n  height: 35px;\r\n  padding: 5px 20px;\r\n  font-size: 14px;\r\n  line-height: 28px;\r\n  letter-spacing: 0.5px;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n.input:focus {\r\n  outline: none;\r\n  box-shadow: var(--shadow-hover);\r\n}\r\n\r\n.tasks__body {\r\n  padding: 30px 0px;\r\n}\r\n\r\n.tasks__container {\r\n  margin-top: 30px;\r\n  border-radius: 5px;\r\n  border: var(--border);\r\n  padding: 15px;\r\n}\r\n\r\n.tasks__form-title {\r\n  font-size: 26px;\r\n  line-height: 36px;\r\n  color: var(--text-tasks);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n\r\n.tasks__form-input {\r\n  border-radius: 5px 0px 0px 5px;\r\n  border: var(--border);\r\n  height: 23px;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.tasks__form-button {\r\n  background-color: var(--button-tasks);\r\n  border: var(--border);\r\n  border-radius: 0px 5px 5px 0px;\r\n  width: 100px;\r\n  height: 36px;\r\n  color: var(--white);\r\n  font-size: 24px;\r\n  line-height: 26px;\r\n  letter-spacing: 0.5px;\r\n  box-shadow: var(--box-shadow);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n.tasks__form-button:hover,\r\n.tasks__form-button:active {\r\n  border: var(--border);\r\n  background: var(--button-hover);\r\n  /* color: var(--button-hover); */\r\n  cursor: pointer;\r\n  box-shadow: var(--shadow-hover);\r\n}\r\n\r\n.tasks-content__title {\r\n  font-size: 24px;\r\n  line-height: 36px;\r\n  color: var(--text-tasks);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n.tasks-list__item {\r\n  margin: 2px 0px;\r\n  background-color: var(--input);\r\n  border: var(--border);\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 36px;\r\n  color: var(--input);\r\n  font-size: 16px;\r\n  line-height: 26px;\r\n  letter-spacing: 0.5px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.item__text {\r\n  color: var(--text-tasks);\r\n  padding: 0px 5px;\r\n}\r\n\r\n.item__button {\r\n  border-radius: 5px;\r\n  background-color: var(--input);\r\n  font-size: 16px;\r\n  line-height: 26px;\r\n  padding: 0 5px;\r\n}\r\n.button__done {\r\n  color: var(--button-done);\r\n  font-size: 30px;\r\n  border: none;\r\n}\r\n\r\n.button__done:hover,\r\n.button__done:active {\r\n  color: var(--button-done-hover);\r\n  cursor: pointer;\r\n}\r\n\r\n.button__delete {\r\n  color: var(--button-delete);\r\n  font-size: 30px;\r\n  border: none;\r\n}\r\n\r\n.button__delete:hover,\r\n.button__delete:active {\r\n  color: var(--button-delete-hover);\r\n  cursor: pointer;\r\n}\r\n',
          "",
        ]);
        const s = i;
      },
      645: (r) => {
        r.exports = function (r) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  t = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  t &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += r(e)),
                  t && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (r, n, t, o, a) {
              "string" == typeof r && (r = [[null, r, void 0]]);
              var i = {};
              if (t)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < r.length; l++) {
                var d = [].concat(r[l]);
                (t && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      81: (r) => {
        r.exports = function (r) {
          return r[1];
        };
      },
      91: (r) => {
        r.exports = function (r, e) {
          return (
            e || (e = {}),
            r
              ? ((r = String(r.__esModule ? r.default : r)),
                e.hash && (r += e.hash),
                e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(r)
                  ? '"'.concat(r, '"')
                  : r)
              : r
          );
        };
      },
      470: (r) => {
        function e(r) {
          if ("string" != typeof r)
            throw new TypeError(
              "Path must be a string. Received " + JSON.stringify(r)
            );
        }
        function n(r, e) {
          for (var n, t = "", o = 0, a = -1, i = 0, s = 0; s <= r.length; ++s) {
            if (s < r.length) n = r.charCodeAt(s);
            else {
              if (47 === n) break;
              n = 47;
            }
            if (47 === n) {
              if (a === s - 1 || 1 === i);
              else if (a !== s - 1 && 2 === i) {
                if (
                  t.length < 2 ||
                  2 !== o ||
                  46 !== t.charCodeAt(t.length - 1) ||
                  46 !== t.charCodeAt(t.length - 2)
                )
                  if (t.length > 2) {
                    var c = t.lastIndexOf("/");
                    if (c !== t.length - 1) {
                      -1 === c
                        ? ((t = ""), (o = 0))
                        : (o =
                            (t = t.slice(0, c)).length -
                            1 -
                            t.lastIndexOf("/")),
                        (a = s),
                        (i = 0);
                      continue;
                    }
                  } else if (2 === t.length || 1 === t.length) {
                    (t = ""), (o = 0), (a = s), (i = 0);
                    continue;
                  }
                e && (t.length > 0 ? (t += "/..") : (t = ".."), (o = 2));
              } else
                t.length > 0
                  ? (t += "/" + r.slice(a + 1, s))
                  : (t = r.slice(a + 1, s)),
                  (o = s - a - 1);
              (a = s), (i = 0);
            } else 46 === n && -1 !== i ? ++i : (i = -1);
          }
          return t;
        }
        var t = {
          resolve: function () {
            for (
              var r, t = "", o = !1, a = arguments.length - 1;
              a >= -1 && !o;
              a--
            ) {
              var i;
              a >= 0
                ? (i = arguments[a])
                : (void 0 === r && (r = process.cwd()), (i = r)),
                e(i),
                0 !== i.length &&
                  ((t = i + "/" + t), (o = 47 === i.charCodeAt(0)));
            }
            return (
              (t = n(t, !o)),
              o ? (t.length > 0 ? "/" + t : "/") : t.length > 0 ? t : "."
            );
          },
          normalize: function (r) {
            if ((e(r), 0 === r.length)) return ".";
            var t = 47 === r.charCodeAt(0),
              o = 47 === r.charCodeAt(r.length - 1);
            return (
              0 !== (r = n(r, !t)).length || t || (r = "."),
              r.length > 0 && o && (r += "/"),
              t ? "/" + r : r
            );
          },
          isAbsolute: function (r) {
            return e(r), r.length > 0 && 47 === r.charCodeAt(0);
          },
          join: function () {
            if (0 === arguments.length) return ".";
            for (var r, n = 0; n < arguments.length; ++n) {
              var o = arguments[n];
              e(o), o.length > 0 && (void 0 === r ? (r = o) : (r += "/" + o));
            }
            return void 0 === r ? "." : t.normalize(r);
          },
          relative: function (r, n) {
            if ((e(r), e(n), r === n)) return "";
            if ((r = t.resolve(r)) === (n = t.resolve(n))) return "";
            for (var o = 1; o < r.length && 47 === r.charCodeAt(o); ++o);
            for (
              var a = r.length, i = a - o, s = 1;
              s < n.length && 47 === n.charCodeAt(s);
              ++s
            );
            for (
              var c = n.length - s, l = i < c ? i : c, d = -1, u = 0;
              u <= l;
              ++u
            ) {
              if (u === l) {
                if (c > l) {
                  if (47 === n.charCodeAt(s + u)) return n.slice(s + u + 1);
                  if (0 === u) return n.slice(s + u);
                } else
                  i > l &&
                    (47 === r.charCodeAt(o + u) ? (d = u) : 0 === u && (d = 0));
                break;
              }
              var p = r.charCodeAt(o + u);
              if (p !== n.charCodeAt(s + u)) break;
              47 === p && (d = u);
            }
            var f = "";
            for (u = o + d + 1; u <= a; ++u)
              (u !== a && 47 !== r.charCodeAt(u)) ||
                (0 === f.length ? (f += "..") : (f += "/.."));
            return f.length > 0
              ? f + n.slice(s + d)
              : ((s += d), 47 === n.charCodeAt(s) && ++s, n.slice(s));
          },
          _makeLong: function (r) {
            return r;
          },
          dirname: function (r) {
            if ((e(r), 0 === r.length)) return ".";
            for (
              var n = r.charCodeAt(0),
                t = 47 === n,
                o = -1,
                a = !0,
                i = r.length - 1;
              i >= 1;
              --i
            )
              if (47 === (n = r.charCodeAt(i))) {
                if (!a) {
                  o = i;
                  break;
                }
              } else a = !1;
            return -1 === o
              ? t
                ? "/"
                : "."
              : t && 1 === o
              ? "//"
              : r.slice(0, o);
          },
          basename: function (r, n) {
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError('"ext" argument must be a string');
            e(r);
            var t,
              o = 0,
              a = -1,
              i = !0;
            if (void 0 !== n && n.length > 0 && n.length <= r.length) {
              if (n.length === r.length && n === r) return "";
              var s = n.length - 1,
                c = -1;
              for (t = r.length - 1; t >= 0; --t) {
                var l = r.charCodeAt(t);
                if (47 === l) {
                  if (!i) {
                    o = t + 1;
                    break;
                  }
                } else
                  -1 === c && ((i = !1), (c = t + 1)),
                    s >= 0 &&
                      (l === n.charCodeAt(s)
                        ? -1 == --s && (a = t)
                        : ((s = -1), (a = c)));
              }
              return (
                o === a ? (a = c) : -1 === a && (a = r.length), r.slice(o, a)
              );
            }
            for (t = r.length - 1; t >= 0; --t)
              if (47 === r.charCodeAt(t)) {
                if (!i) {
                  o = t + 1;
                  break;
                }
              } else -1 === a && ((i = !1), (a = t + 1));
            return -1 === a ? "" : r.slice(o, a);
          },
          extname: function (r) {
            e(r);
            for (
              var n = -1, t = 0, o = -1, a = !0, i = 0, s = r.length - 1;
              s >= 0;
              --s
            ) {
              var c = r.charCodeAt(s);
              if (47 !== c)
                -1 === o && ((a = !1), (o = s + 1)),
                  46 === c
                    ? -1 === n
                      ? (n = s)
                      : 1 !== i && (i = 1)
                    : -1 !== n && (i = -1);
              else if (!a) {
                t = s + 1;
                break;
              }
            }
            return -1 === n ||
              -1 === o ||
              0 === i ||
              (1 === i && n === o - 1 && n === t + 1)
              ? ""
              : r.slice(n, o);
          },
          format: function (r) {
            if (null === r || "object" != typeof r)
              throw new TypeError(
                'The "pathObject" argument must be of type Object. Received type ' +
                  typeof r
              );
            return (function (r, e) {
              var n = e.dir || e.root,
                t = e.base || (e.name || "") + (e.ext || "");
              return n ? (n === e.root ? n + t : n + "/" + t) : t;
            })(0, r);
          },
          parse: function (r) {
            e(r);
            var n = { root: "", dir: "", base: "", ext: "", name: "" };
            if (0 === r.length) return n;
            var t,
              o = r.charCodeAt(0),
              a = 47 === o;
            a ? ((n.root = "/"), (t = 1)) : (t = 0);
            for (
              var i = -1, s = 0, c = -1, l = !0, d = r.length - 1, u = 0;
              d >= t;
              --d
            )
              if (47 !== (o = r.charCodeAt(d)))
                -1 === c && ((l = !1), (c = d + 1)),
                  46 === o
                    ? -1 === i
                      ? (i = d)
                      : 1 !== u && (u = 1)
                    : -1 !== i && (u = -1);
              else if (!l) {
                s = d + 1;
                break;
              }
            return (
              -1 === i ||
              -1 === c ||
              0 === u ||
              (1 === u && i === c - 1 && i === s + 1)
                ? -1 !== c &&
                  (n.base = n.name =
                    0 === s && a ? r.slice(1, c) : r.slice(s, c))
                : (0 === s && a
                    ? ((n.name = r.slice(1, i)), (n.base = r.slice(1, c)))
                    : ((n.name = r.slice(s, i)), (n.base = r.slice(s, c))),
                  (n.ext = r.slice(i, c))),
              s > 0 ? (n.dir = r.slice(0, s - 1)) : a && (n.dir = "/"),
              n
            );
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null,
        };
        (t.posix = t), (r.exports = t);
      },
      379: (r) => {
        var e = [];
        function n(r) {
          for (var n = -1, t = 0; t < e.length; t++)
            if (e[t].identifier === r) {
              n = t;
              break;
            }
          return n;
        }
        function t(r, t) {
          for (var a = {}, i = [], s = 0; s < r.length; s++) {
            var c = r[s],
              l = t.base ? c[0] + t.base : c[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var p = n(u),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var h = o(f, t);
              (t.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: h, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(r, e) {
          var n = e.domAPI(e);
          return (
            n.update(r),
            function (e) {
              if (e) {
                if (
                  e.css === r.css &&
                  e.media === r.media &&
                  e.sourceMap === r.sourceMap &&
                  e.supports === r.supports &&
                  e.layer === r.layer
                )
                  return;
                n.update((r = e));
              } else n.remove();
            }
          );
        }
        r.exports = function (r, o) {
          var a = t((r = r || []), (o = o || {}));
          return function (r) {
            r = r || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              e[s].references--;
            }
            for (var c = t(r, o), l = 0; l < a.length; l++) {
              var d = n(a[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = c;
          };
        };
      },
      569: (r) => {
        var e = {};
        r.exports = function (r, n) {
          var t = (function (r) {
            if (void 0 === e[r]) {
              var n = document.querySelector(r);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (r) {
                  n = null;
                }
              e[r] = n;
            }
            return e[r];
          })(r);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(n);
        };
      },
      216: (r) => {
        r.exports = function (r) {
          var e = document.createElement("style");
          return r.setAttributes(e, r.attributes), r.insert(e, r.options), e;
        };
      },
      817: (r) => {
        r.exports = function (r, e, n) {
          if ((!r && e) || (r && !e)) return !1;
          var t;
          for (t in r) if ((!n || "default" !== t) && r[t] !== e[t]) return !1;
          for (t in e) if (!((n && "default" === t) || r[t])) return !1;
          return !0;
        };
      },
      565: (r, e, n) => {
        r.exports = function (r) {
          var e = n.nc;
          e && r.setAttribute("nonce", e);
        };
      },
      795: (r) => {
        r.exports = function (r) {
          var e = r.insertStyleElement(r);
          return {
            update: function (n) {
              !(function (r, e, n) {
                var t = "";
                n.supports && (t += "@supports (".concat(n.supports, ") {")),
                  n.media && (t += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (t += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (t += n.css),
                  o && (t += "}"),
                  n.media && (t += "}"),
                  n.supports && (t += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(t, r, e.options);
              })(e, r, n);
            },
            remove: function () {
              !(function (r) {
                if (null === r.parentNode) return !1;
                r.parentNode.removeChild(r);
              })(e);
            },
          };
        };
      },
      589: (r) => {
        r.exports = function (r, e) {
          if (e.styleSheet) e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        };
      },
      410: (r, e, n) => {
        t(n(470)), t(n(817));
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
      },
      468: (r, e, n) => {
        r.exports = n.p + "4266803847f104d5025c.js";
      },
      605: (r, e, n) => {
        r.exports = n.p + "4c0e0b543ea9141d53d9.css";
      },
    },
    e = {};
  function n(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var a = (e[t] = { id: t, exports: {} });
    return r[t](a, a.exports, n), a.exports;
  }
  (n.m = r),
    (n.n = (r) => {
      var e = r && r.__esModule ? () => r.default : () => r;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (r, e) => {
      for (var t in e)
        n.o(e, t) &&
          !n.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (() => {
      var r;
      n.g.importScripts && (r = n.g.location + "");
      var e = n.g.document;
      if (!r && e && (e.currentScript && (r = e.currentScript.src), !r)) {
        var t = e.getElementsByTagName("script");
        t.length && (r = t[t.length - 1].src);
      }
      if (!r)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (r = r
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = r);
    })(),
    (n.b = document.baseURI || self.location.href),
    (() => {
      var r = n(379),
        e = n.n(r),
        t = n(795),
        o = n.n(t),
        a = n(569),
        i = n.n(a),
        s = n(565),
        c = n.n(s),
        l = n(216),
        d = n.n(l),
        u = n(589),
        p = n.n(u),
        f = n(771),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = c()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = d()),
        e()(f.Z, h),
        f.Z && f.Z.locals && f.Z.locals;
      var v = n(91),
        b = n.n(v),
        x = new URL(n(605), n.b),
        g = new URL(n(468), n.b);
      b()(x), b()(g), n(410);
      var m = document.querySelector(".tasks__form-input"),
        w = document.querySelector(".tasks__form-button"),
        _ = document.querySelector(".tasks-content__list");
      console.dir(m),
        console.dir(w),
        console.dir(_),
        w.addEventListener("click", function (r) {
          if ((r.preventDefault(), console.log("add task"), "" !== m.value)) {
            var e = document.createElement("li");
            e.classList.add("tasks-list__item");
            var n = document.createElement("p");
            n.classList.add("item__text"),
              (n.innerText = m.value),
              e.appendChild(n);
            var t = document.createElement("div");
            t.classList.add("item__buttons"), e.appendChild(t);
            var o,
              a = document.createElement("button");
            a.classList.add("item__button", "button__delete"),
              (a.innerHTML = '<i class="fas fa-window-close"></i>'),
              t.appendChild(a),
              a.addEventListener(
                "click",
                ((o = e),
                function () {
                  confirm("Are you sure?") && o.remove();
                })
              ),
              _.appendChild(e),
              (m.value = "");
          } else alert("Input is empty");
        });
    })();
})();
