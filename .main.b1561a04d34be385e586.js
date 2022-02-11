(() => {
  "use strict";
  var r = {
      771: (r, n, e) => {
        e.d(n, { Z: () => s });
        var t = e(81),
          o = e.n(t),
          a = e(645),
          i = e.n(a)()(o());
        i.push([
          r.id,
          ':root {\r\n  --bg-header: #273c75;\r\n  --bg-tasks: #f5f6fa;\r\n  --text-header: #f5f6fa;\r\n  --text-tasks: #2f3640;\r\n  --white: #fff;\r\n  --button-tasks: #487eb0;\r\n  --button-hover: #fbc531;\r\n  --button-done: #4cd137;\r\n  --button-done-hover: #44bd32;\r\n  --button-delete: #e84c3d;\r\n  --button-delete-hover: #c23616;\r\n  --input: #fff;\r\n  --border: 1px solid #dcdde1;\r\n  --box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n  --shadow-hover: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\r\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  line-height: 1;\r\n  font-size: 16px;\r\n  font-family: "Montserrat", sans-serif;\r\n  background-color: var(--bg-tasks);\r\n}\r\n\r\ninput,\r\nbutton {\r\n  font-family: inherit;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  max-width: 650px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  background: var(--bg-header);\r\n  min-height: 80px;\r\n}\r\n\r\n.body {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 30px 15px;\r\n}\r\n\r\n.header__title {\r\n  font-size: 34px;\r\n  line-height: 42px;\r\n  letter-spacing: 1px;\r\n  color: var(--text-header);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.input {\r\n  flex: 1 1 auto;\r\n  background-color: var(--input);\r\n  border: var(--border);\r\n  border-radius: 5px;\r\n  width: 250px;\r\n  height: 35px;\r\n  padding: 5px 20px;\r\n  font-size: 14px;\r\n  line-height: 28px;\r\n  letter-spacing: 0.5px;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n.input:focus {\r\n  outline: none;\r\n  box-shadow: var(--shadow-hover);\r\n}\r\n\r\n.tasks__body {\r\n  padding: 30px 0px;\r\n}\r\n\r\n.tasks__container {\r\n  margin-top: 30px;\r\n  border-radius: 5px;\r\n  border: var(--border);\r\n  padding: 15px;\r\n}\r\n\r\n.tasks__form-title {\r\n  font-size: 26px;\r\n  line-height: 36px;\r\n  color: var(--text-tasks);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n\r\n.tasks__form-input {\r\n  border-radius: 5px 0px 0px 5px;\r\n  border: var(--border);\r\n  height: 23px;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.tasks__form-button {\r\n  background-color: var(--button-tasks);\r\n  border: var(--border);\r\n  border-radius: 0px 5px 5px 0px;\r\n  width: 100px;\r\n  height: 36px;\r\n  color: var(--white);\r\n  font-size: 24px;\r\n  line-height: 26px;\r\n  letter-spacing: 0.5px;\r\n  box-shadow: var(--box-shadow);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n.tasks__form-button:hover,\r\n.tasks__form-button:active {\r\n  border: var(--border);\r\n  background: var(--button-hover);\r\n  /* color: var(--button-hover); */\r\n  cursor: pointer;\r\n  box-shadow: var(--shadow-hover);\r\n}\r\n\r\n.tasks-content__title {\r\n  font-size: 24px;\r\n  line-height: 36px;\r\n  color: var(--text-tasks);\r\n  text-shadow: var(--box-shadow);\r\n}\r\n.tasks-list__item {\r\n  margin: 2px 0px;\r\n  background-color: var(--input);\r\n  border: var(--border);\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 36px;\r\n  color: var(--input);\r\n  font-size: 16px;\r\n  line-height: 26px;\r\n  letter-spacing: 0.5px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.item__text {\r\n  color: var(--text-tasks);\r\n  padding: 0px 5px;\r\n}\r\n\r\n.item__button {\r\n  border-radius: 5px;\r\n  background-color: var(--input);\r\n  font-size: 16px;\r\n  line-height: 26px;\r\n  padding: 0 5px;\r\n}\r\n.button__done {\r\n  color: var(--button-done);\r\n  font-size: 30px;\r\n  border: none;\r\n}\r\n\r\n.button__done:hover,\r\n.button__done:active {\r\n  color: var(--button-done-hover);\r\n  cursor: pointer;\r\n}\r\n\r\n.button__delete {\r\n  color: var(--button-delete);\r\n  font-size: 30px;\r\n  border: none;\r\n}\r\n\r\n.button__delete:hover,\r\n.button__delete:active {\r\n  color: var(--button-delete-hover);\r\n  cursor: pointer;\r\n}\r\n',
          "",
        ]);
        const s = i;
      },
      645: (r) => {
        r.exports = function (r) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  t = void 0 !== n[5];
                return (
                  n[4] && (e += "@supports (".concat(n[4], ") {")),
                  n[2] && (e += "@media ".concat(n[2], " {")),
                  t &&
                    (e += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (e += r(n)),
                  t && (e += "}"),
                  n[2] && (e += "}"),
                  n[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (n.i = function (r, e, t, o, a) {
              "string" == typeof r && (r = [[null, r, void 0]]);
              var i = {};
              if (t)
                for (var s = 0; s < this.length; s++) {
                  var d = this[s][0];
                  null != d && (i[d] = !0);
                }
              for (var c = 0; c < r.length; c++) {
                var p = [].concat(r[c]);
                (t && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = a)),
                  e &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = e))
                      : (p[2] = e)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  n.push(p));
              }
            }),
            n
          );
        };
      },
      81: (r) => {
        r.exports = function (r) {
          return r[1];
        };
      },
      379: (r) => {
        var n = [];
        function e(r) {
          for (var e = -1, t = 0; t < n.length; t++)
            if (n[t].identifier === r) {
              e = t;
              break;
            }
          return e;
        }
        function t(r, t) {
          for (var a = {}, i = [], s = 0; s < r.length; s++) {
            var d = r[s],
              c = t.base ? d[0] + t.base : d[0],
              p = a[c] || 0,
              u = "".concat(c, " ").concat(p);
            a[c] = p + 1;
            var l = e(u),
              h = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== l) n[l].references++, n[l].updater(h);
            else {
              var x = o(h, t);
              (t.byIndex = s),
                n.splice(s, 0, { identifier: u, updater: x, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(r, n) {
          var e = n.domAPI(n);
          return (
            e.update(r),
            function (n) {
              if (n) {
                if (
                  n.css === r.css &&
                  n.media === r.media &&
                  n.sourceMap === r.sourceMap &&
                  n.supports === r.supports &&
                  n.layer === r.layer
                )
                  return;
                e.update((r = n));
              } else e.remove();
            }
          );
        }
        r.exports = function (r, o) {
          var a = t((r = r || []), (o = o || {}));
          return function (r) {
            r = r || [];
            for (var i = 0; i < a.length; i++) {
              var s = e(a[i]);
              n[s].references--;
            }
            for (var d = t(r, o), c = 0; c < a.length; c++) {
              var p = e(a[c]);
              0 === n[p].references && (n[p].updater(), n.splice(p, 1));
            }
            a = d;
          };
        };
      },
      569: (r) => {
        var n = {};
        r.exports = function (r, e) {
          var t = (function (r) {
            if (void 0 === n[r]) {
              var e = document.querySelector(r);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (r) {
                  e = null;
                }
              n[r] = e;
            }
            return n[r];
          })(r);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(e);
        };
      },
      216: (r) => {
        r.exports = function (r) {
          var n = document.createElement("style");
          return r.setAttributes(n, r.attributes), r.insert(n, r.options), n;
        };
      },
      565: (r, n, e) => {
        r.exports = function (r) {
          var n = e.nc;
          n && r.setAttribute("nonce", n);
        };
      },
      795: (r) => {
        r.exports = function (r) {
          var n = r.insertStyleElement(r);
          return {
            update: function (e) {
              !(function (r, n, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")),
                  e.media && (t += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (t += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (t += e.css),
                  o && (t += "}"),
                  e.media && (t += "}"),
                  e.supports && (t += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(t, r, n.options);
              })(n, r, e);
            },
            remove: function () {
              !(function (r) {
                if (null === r.parentNode) return !1;
                r.parentNode.removeChild(r);
              })(n);
            },
          };
        };
      },
      589: (r) => {
        r.exports = function (r, n) {
          if (n.styleSheet) n.styleSheet.cssText = r;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(r));
          }
        };
      },
    },
    n = {};
  function e(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var a = (n[t] = { id: t, exports: {} });
    return r[t](a, a.exports, e), a.exports;
  }
  (e.n = (r) => {
    var n = r && r.__esModule ? () => r.default : () => r;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (r, n) => {
      for (var t in n)
        e.o(n, t) &&
          !e.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: n[t] });
    }),
    (e.o = (r, n) => Object.prototype.hasOwnProperty.call(r, n)),
    (() => {
      var r = e(379),
        n = e.n(r),
        t = e(795),
        o = e.n(t),
        a = e(569),
        i = e.n(a),
        s = e(565),
        d = e.n(s),
        c = e(216),
        p = e.n(c),
        u = e(589),
        l = e.n(u),
        h = e(771),
        x = {};
      (x.styleTagTransform = l()),
        (x.setAttributes = d()),
        (x.insert = i().bind(null, "head")),
        (x.domAPI = o()),
        (x.insertStyleElement = p()),
        n()(h.Z, x),
        h.Z && h.Z.locals && h.Z.locals;
      var f = document.querySelector(".tasks__form-input"),
        v = document.querySelector(".tasks__form-button"),
        b = document.querySelector(".tasks-content__list");
      console.dir(f),
        console.dir(v),
        console.dir(b),
        v.addEventListener("click", function (r) {
          r.preventDefault(), console.log("add task");
          var n = document.createElement("li");
          n.classList.add("tasks-list__item");
          var e = document.createElement("p");
          e.classList.add("item__text"),
            (e.innerText = f.value),
            n.appendChild(e);
          var t = document.createElement("div");
          t.classList.add("item__buttons"), n.appendChild(t);
          var o = document.createElement("button");
          o.classList.add("item__button"),
            o.classList.add("button__done"),
            (o.innerHTML = '<i class="far fa-check-circle"></i>'),
            t.appendChild(o);
          var a = document.createElement("button");
          a.classList.add("item__button"),
            a.classList.add("button__delete"),
            (a.innerHTML = '<i class="fas fa-window-close"></i>'),
            t.appendChild(a),
            b.appendChild(n);
        });
    })();
})();
