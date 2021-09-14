webpackHotUpdate_N_E("pages/life-expectancy",{

/***/ "./components/lifeExpectancyChart/lifeExpectancyContainer.tsx":
/*!********************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json");
var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json", 1);
/* harmony import */ var _types_sex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/sex */ "./types/sex.ts");
/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useBreakpoint */ "./hooks/useBreakpoint.ts");
/* harmony import */ var _lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lifeExpectancyChart */ "./components/lifeExpectancyChart/lifeExpectancyChart.tsx");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifeExpectancyLegend */ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyContainer.tsx",
    _width,
    _this = undefined,
    _s = $RefreshSig$();











var sexOptions = [{
  key: 0,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Both,
  text: 'Both'
}, {
  key: 1,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Man,
  text: 'Man'
}, {
  key: 2,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Woman,
  text: 'Woman'
}];
var width = (_width = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall, 280), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Small, 520), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Medium, 720), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Large, 950), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraLarge, 1100), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraExtraLarge, 1100), _width);

var LifeExpectancyContainer = function LifeExpectancyContainer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Both),
      sex = _useState[0],
      setSex = _useState[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e, _ref) {
    var value = _ref.value;
    return setSex(value);
  }, []);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return new Map(_store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_4__.reduce(function (acc, cur) {
      acc.push([cur.code, cur[sex]]);
      return acc;
    }, []));
  }, [sex]);
  var color = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var domainBy = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](Array.from(data.values()));
    return d3__WEBPACK_IMPORTED_MODULE_1__["scaleSequential"]().domain(domainBy).interpolator(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRdBu"]).unknown('#f2f2f2');
  }, [data]);
  var breakpoint = Object(_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var availableWidth = width[breakpoint];
  console.log({
    breakpoint: breakpoint,
    availableWidth: availableWidth
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("section", {
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Age (years)",
        color: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
            value: sex,
            onChange: onChange,
            options: sexOptions,
            placeholder: "Select sex",
            compact: true,
            selection: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: availableWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "b2PT2pqGN2+5LsqJmxE2APDgi1Y=", false, function () {
  return [_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = LifeExpectancyContainer;
/* harmony default export */ __webpack_exports__["default"] = (LifeExpectancyContainer);

var _c;

$RefreshReg$(_c, "LifeExpectancyContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/lifeExpectancyChart/lifeExpectancyChart.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/lifeExpectancyChart/lifeExpectancyChart.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lifeExpectancyChart_container__1VY6X {\n  margin: 0 auto;\n}\n\n.lifeExpectancyChart_panel__23elq {\n  display: -moz-box;\n  display: flex;\n  width: 100%;\n}\n.lifeExpectancyChart_panel__23elq :first-child {\n  margin: 0 2em 0 0;\n}\n\n.lifeExpectancyChart_chart__uPak8 {\n  margin: 0.5em auto 1em;\n}", "",{"version":3,"sources":["webpack://lifeExpectancyChart.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;AACJ;;AAEA;EACI,iBAAA;EAAA,aAAA;EACA,WAAA;AACJ;AACI;EACI,iBAAA;AACR;;AAGA;EACI,sBAAA;AAAJ","sourcesContent":[".container {\r\n    margin: 0 auto;\r\n}\r\n\r\n.panel {\r\n    display: flex;\r\n    width: 100%;\r\n\r\n    :first-child {\r\n        margin: 0 2em 0 0;\r\n    }\r\n}\r\n\r\n.chart {\r\n    margin: .5em auto 1em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "lifeExpectancyChart_container__1VY6X",
	"panel": "lifeExpectancyChart_panel__23elq",
	"chart": "lifeExpectancyChart_chart__uPak8"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsic2V4T3B0aW9ucyIsImtleSIsInZhbHVlIiwiU2V4IiwiQm90aCIsInRleHQiLCJNYW4iLCJXb21hbiIsIndpZHRoIiwiQnJlYWtwb2ludCIsIlhTbWFsbCIsIlNtYWxsIiwiTWVkaXVtIiwiTGFyZ2UiLCJFeHRyYUxhcmdlIiwiRXh0cmFFeHRyYUxhcmdlIiwiTGlmZUV4cGVjdGFuY3lDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNleCIsInNldFNleCIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwiZGF0YSIsInVzZU1lbW8iLCJNYXAiLCJsaWZlRXhwZWN0YW5jeSIsInJlZHVjZSIsImFjYyIsImN1ciIsInB1c2giLCJjb2RlIiwiY29sb3IiLCJkb21haW5CeSIsImQzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwidW5rbm93biIsImJyZWFrcG9pbnQiLCJ1c2VCcmVha3BvaW50IiwiYXZhaWxhYmxlV2lkdGgiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY29udGFpbmVyIiwicGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDQyxJQUFyQjtBQUEyQkMsTUFBSSxFQUFFO0FBQWpDLENBRGlCLEVBRWpCO0FBQUVKLEtBQUcsRUFBRSxDQUFQ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QU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBaUJFLHNFQUFDLDREQUFEO0FBQXFCLFVBQUksRUFBRXVCLElBQTNCO0FBQWlDLFdBQUssRUFBRVMsS0FBeEM7QUFBK0MsV0FBSyxFQUFFVztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBL0NEOztHQUFNM0IsdUI7VUFvQmUwQiw0RDs7O0tBcEJmMUIsdUI7QUFpRFNBLHNGQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBDQUEwQyxtQkFBbUIsR0FBRyx1Q0FBdUMsc0JBQXNCLGtCQUFrQixnQkFBZ0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsdUNBQXVDLDJCQUEyQixHQUFHLE9BQU8sZ0dBQWdHLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLHFDQUFxQyx1QkFBdUIsS0FBSyxnQkFBZ0Isc0JBQXNCLG9CQUFvQiwwQkFBMEIsOEJBQThCLFNBQVMsS0FBSyxnQkFBZ0IsOEJBQThCLEtBQUssdUJBQXVCO0FBQzF5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuYjViYmQyZWQwMGQ1ZmYwZjI5YzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERyb3Bkb3duLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsaWZlRXhwZWN0YW5jeSBmcm9tICcuLi8uLi9zdG9yZS9saWZlLWV4cGVjdGFuY3kuanNvbidcclxuaW1wb3J0IHsgQXZlcmFnZUxpZmVZZWFycyB9IGZyb20gJy4uLy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uLy4uL3R5cGVzL3NleCdcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQsIHsgQnJlYWtwb2ludCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUJyZWFrcG9pbnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUNoYXJ0IGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUxlZ2VuZCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5TGVnZW5kJ1xyXG5cclxuY29uc3Qgc2V4T3B0aW9ucyA9IFtcclxuICB7IGtleTogMCwgdmFsdWU6IFNleC5Cb3RoLCB0ZXh0OiAnQm90aCcgfSxcclxuICB7IGtleTogMSwgdmFsdWU6IFNleC5NYW4sIHRleHQ6ICdNYW4nIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBTZXguV29tYW4sIHRleHQ6ICdXb21hbicgfSxcclxuXVxyXG5cclxudHlwZSBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBba2V5IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XT86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCB3aWR0aDogQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW0JyZWFrcG9pbnQuWFNtYWxsXTogMjgwLFxyXG4gIFtCcmVha3BvaW50LlNtYWxsXTogNTIwLFxyXG4gIFtCcmVha3BvaW50Lk1lZGl1bV06IDcyMCxcclxuICBbQnJlYWtwb2ludC5MYXJnZV06IDk1MCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUxhcmdlXTogMTEwMCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUV4dHJhTGFyZ2VdOiAxMTAwLFxyXG59XHJcblxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGU8U2V4PihTZXguQm90aClcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCB7IHZhbHVlIH0pID0+IHNldFNleCh2YWx1ZSksIFtdKVxyXG5cclxuICBjb25zdCBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihcclxuICAgIGxpZmVFeHBlY3RhbmN5LnJlZHVjZSgoYWNjOiBbc3RyaW5nLCBudW1iZXJdW10sIGN1cjogQXZlcmFnZUxpZmVZZWFycykgPT4ge1xyXG4gICAgICBhY2MucHVzaChbY3VyLmNvZGUsIGN1cltzZXhdXSlcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pXHJcbiAgKSwgW3NleF0pXHJcblxyXG4gIGNvbnN0IGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBkb21haW5CeSA9IGQzLmV4dGVudChBcnJheS5mcm9tKGRhdGEudmFsdWVzKCkpKVxyXG5cclxuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbkJ5IGFzIFtudW1iZXIsIG51bWJlcl0pXHJcbiAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSZEJ1KVxyXG4gICAgICAudW5rbm93bignI2YyZjJmMicpXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBjb25zdCBicmVha3BvaW50ID0gdXNlQnJlYWtwb2ludCgpXHJcblxyXG4gIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gd2lkdGhbYnJlYWtwb2ludF1cclxuICBjb25zb2xlLmxvZyh7IGJyZWFrcG9pbnQsIGF2YWlsYWJsZVdpZHRoIH0pO1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IC8+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc2V4PC9sYWJlbD5cclxuICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NleH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c2V4T3B0aW9uc31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IHNleCdcclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpZmVFeHBlY3RhbmN5Q2hhcnQgZGF0YT17ZGF0YX0gY29sb3I9e2NvbG9yfSB3aWR0aD17YXZhaWxhYmxlV2lkdGh9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5saWZlRXhwZWN0YW5jeUNoYXJ0X2NvbnRhaW5lcl9fMVZZNlgge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5saWZlRXhwZWN0YW5jeUNoYXJ0X3BhbmVsX18yM2VscSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxpZmVFeHBlY3RhbmN5Q2hhcnRfcGFuZWxfXzIzZWxxIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW46IDAgMmVtIDAgMDtcXG59XFxuXFxuLmxpZmVFeHBlY3RhbmN5Q2hhcnRfY2hhcnRfX3VQYWs4IHtcXG4gIG1hcmdpbjogMC41ZW0gYXV0byAxZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUdBO0VBQ0ksc0JBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wYW5lbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDJlbSAwIDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0IHtcXHJcXG4gICAgbWFyZ2luOiAuNWVtIGF1dG8gMWVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJsaWZlRXhwZWN0YW5jeUNoYXJ0X2NvbnRhaW5lcl9fMVZZNlhcIixcblx0XCJwYW5lbFwiOiBcImxpZmVFeHBlY3RhbmN5Q2hhcnRfcGFuZWxfXzIzZWxxXCIsXG5cdFwiY2hhcnRcIjogXCJsaWZlRXhwZWN0YW5jeUNoYXJ0X2NoYXJ0X191UGFrOFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=