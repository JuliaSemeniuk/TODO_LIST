/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js?5e13":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css?4e42");\n/* harmony import */ var _src_index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index.html */ "./src/index.html");\n\n\nvar tasksFormInput = document.querySelector(".tasks__form-input");\nvar tasksFormButton = document.querySelector(".tasks__form-button");\nvar tasksContentList = document.querySelector(".tasks-content__list");\nconsole.dir(tasksFormInput);\nconsole.dir(tasksFormButton);\nconsole.dir(tasksContentList);\ntasksFormButton.addEventListener("click", addTask); // ф-я виконується асинхронно, бо вона є колбеком і буде виконуватись після кліка\n\nfunction addTask(event) {\n  event.preventDefault(); //запобігає перезавантаженню сторінки по кліку\n\n  console.log("add task");\n  var tasksListItem = document.createElement("li");\n  tasksListItem.classList.add("tasks-list__item");\n  var itemText = document.createElement("p");\n  itemText.classList.add("item__text");\n  itemText.innerText = tasksFormInput.value;\n  tasksListItem.appendChild(itemText);\n  var itemButtons = document.createElement("div");\n  itemButtons.classList.add("item__buttons");\n  tasksListItem.appendChild(itemButtons);\n  var buttonDone = document.createElement("button");\n  buttonDone.classList.add("item__button");\n  buttonDone.classList.add("button__done");\n  buttonDone.innerHTML = \'<i class="far fa-check-circle"></i>\';\n  itemButtons.appendChild(buttonDone);\n  var buttonDelete = document.createElement("button");\n  buttonDelete.classList.add("item__button");\n  buttonDelete.classList.add("button__delete");\n  buttonDelete.innerHTML = \'<i class="fas fa-window-close"></i>\';\n  itemButtons.appendChild(buttonDelete);\n  tasksContentList.appendChild(tasksListItem);\n}\n\n//# sourceURL=webpack:///./src/index.js?'
        );

        /***/
      },

    /***/ "./src/index.html":
      /*!************************!*\
  !*** ./src/index.html ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css?4e3c"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js?0bf1"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = "<!DOCTYPE html>\\r\\n<html lang=\\"en\\">\\r\\n  <head>\\r\\n    <meta charset=\\"UTF-8\\" />\\r\\n    <meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\" />\\r\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\" />\\r\\n    <link\\r\\n      href=\\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap\\"\\r\\n      rel=\\"stylesheet\\"\\r\\n    />\\r\\n    <link rel=\\"stylesheet\\" href=\\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\\" />\\r\\n    <link\\r\\n      rel=\\"stylesheet\\"\\r\\n      href=\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css\\"\\r\\n      integrity=\\"sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==\\"\\r\\n      crossorigin=\\"anonymous\\"\\r\\n      referrerpolicy=\\"no-referrer\\"\\r\\n    />\\r\\n    <script defer src=\\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\\"></script>\\r\\n    <title>To Do List</title>\\r\\n  </head>\\r\\n  <body>\\r\\n    <header class=\\"header\\">\\r\\n      <div class=\\"head__container container\\">\\r\\n        <div class=\\"header__body body\\">\\r\\n          <h1 class=\\"header__title\\">to do</h1>\\r\\n          <form class=\\"header__form form\\">\\r\\n            <input\\r\\n              type=\\"search\\"\\r\\n              class=\\"header__form-input input\\"\\r\\n              placeholder=\\"search task\\"\\r\\n            />\\r\\n          </form>\\r\\n        </div>\\r\\n      </div>\\r\\n    </header>\\r\\n    <main class=\\"tasks\\">\\r\\n      <div class=\\"tasks__container container\\">\\r\\n        <div class=\\"tasks__body body\\">\\r\\n          <h2 class=\\"tasks__form-title\\">add task</h2>\\r\\n          <form class=\\"tasks__form form\\">\\r\\n            <input type=\\"text\\" class=\\"tasks__form-input input\\" />\\r\\n            <button class=\\"tasks__form-button\\">\\r\\n              <i class=\\"fas fa-plus\\"></i>\\r\\n            </button>\\r\\n          </form>\\r\\n        </div>\\r\\n        <div class=\\"tasks-content__body\\">\\r\\n          <h2 class=\\"tasks-content__title\\">tasks:</h2>\\r\\n          <ul class=\\"tasks-content__list\\">\\r\\n            <!-- <li class=\\"tasks-list__item\\">\\r\\n              <p class=\\"item__task\\">item</p>\\r\\n              <div class=\\"item__buttons\\">\\r\\n                <button class=\\"item__button button__done\\">\\r\\n                  <i class=\\"far fa-check-circle\\"></i>\\r\\n                </button>\\r\\n                <button class=\\"item__button button__delete\\">\\r\\n                  <i class=\\"fas fa-window-close\\"></i>\\r\\n                </button>\\r\\n              </div>\\r\\n            </li> -->\\r\\n          </ul>\\r\\n        </div>\\r\\n      </div>\\r\\n    </main>\\r\\n  </body>\\r\\n</html>\\r\\n";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/index.html?'
        );

        /***/
      },

    /***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
      /*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r "\'=<>`]/.test(url)) {\n    return "\\"".concat(url, "\\"");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ "./src/styles/index.css?4e42":
      /*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/index.css?"
        );

        /***/
      },

    /***/ "./src/index.js?0bf1":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "42966e9f77f588998913.js";\n\n//# sourceURL=webpack:///./src/index.js?'
        );

        /***/
      },

    /***/ "./src/styles/index.css?4e3c":
      /*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "b88d04fba731603756b1.css";\n\n//# sourceURL=webpack:///./src/styles/index.css?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js?5e13");
  /******/
  /******/
})();
