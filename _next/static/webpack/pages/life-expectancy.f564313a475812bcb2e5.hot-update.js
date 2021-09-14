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
var width = (_width = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall, 280), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Small, 520), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Medium, 720), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Large, 950), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraLarge, 1160), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraExtraLarge, 1360), _width);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("section", {
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Age (years)",
        color: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
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
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: availableWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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

/***/ "./hooks/useBreakpoint.ts":
/*!********************************!*\
  !*** ./hooks/useBreakpoint.ts ***!
  \********************************/
/*! exports provided: Breakpoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var Breakpoint;

(function (Breakpoint) {
  Breakpoint[Breakpoint["XSmall"] = 0] = "XSmall";
  Breakpoint[Breakpoint["Small"] = 576] = "Small";
  Breakpoint[Breakpoint["Medium"] = 768] = "Medium";
  Breakpoint[Breakpoint["Large"] = 992] = "Large";
  Breakpoint[Breakpoint["ExtraLarge"] = 1200] = "ExtraLarge";
  Breakpoint[Breakpoint["ExtraExtraLarge"] = 1400] = "ExtraExtraLarge";
})(Breakpoint || (Breakpoint = {}));

var useBreakpoint = function useBreakpoint() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Breakpoint.Large),
      breakpoint = _useState[0],
      setBreakpoint = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var onResize = function onResize() {
      var clientWidth = document.documentElement.clientWidth;

      if (clientWidth < Breakpoint.Small) {
        setBreakpoint(Breakpoint.XSmall);
      } else if (clientWidth < Breakpoint.Medium) {
        setBreakpoint(Breakpoint.Small);
      } else if (clientWidth < Breakpoint.Large) {
        setBreakpoint(Breakpoint.Medium);
      } else if (clientWidth < Breakpoint.ExtraLarge) {
        setBreakpoint(Breakpoint.Large);
      } else if (clientWidth < Breakpoint.ExtraExtraLarge) {
        setBreakpoint(Breakpoint.ExtraLarge);
      } else {
        setBreakpoint(Breakpoint.ExtraExtraLarge);
      }
    };

    onResize();
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return breakpoint;
};

_s(useBreakpoint, "FeVwbSLohS5KVtd0W8+P4yJ9tGU=");

/* harmony default export */ __webpack_exports__["default"] = (useBreakpoint);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQnJlYWtwb2ludC50cyJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGgiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVXaWR0aCIsInN0eWxlcyIsImNvbnRhaW5lciIsInBhbmVsIiwic2V0QnJlYWtwb2ludCIsInVzZUVmZmVjdCIsIm9uUmVzaXplIiwiY2xpZW50V2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFB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QyxVQUFVLENBQUNHLE1BQTdCLEVBQXFDO0FBQzFDbUMscUJBQWEsQ0FBQ3RDLFVBQVUsQ0FBQ0UsS0FBWixDQUFiO0FBQ0QsT0FGTSxNQUVBLElBQUl1QyxXQUFXLEdBQUd6QyxVQUFVLENBQUNJLEtBQTdCLEVBQW9DO0FBQ3pDa0MscUJBQWEsQ0FBQ3RDLFVBQVUsQ0FBQ0csTUFBWixDQUFiO0FBQ0QsT0FGTSxNQUVBLElBQUlzQyxXQUFXLEdBQUd6QyxVQUFVLENBQUNLLFVBQTdCLEVBQXlDO0FBQzlDaUMscUJBQWEsQ0FBQ3RDLFVBQVUsQ0FBQ0ksS0FBWixDQUFiO0FBQ0QsT0FGTSxNQUVBLElBQUlxQyxXQUFXLEdBQUd6QyxVQUFVLENBQUNNLGVBQTdCLEVBQThDO0FBQ25EZ0MscUJBQWEsQ0FBQ3RDLFVBQVUsQ0FBQ0ssVUFBWixDQUFiO0FBQ0QsT0FGTSxNQUVBO0FBQ0xpQyxxQkFBYSxDQUFDdEMsVUFBVSxDQUFDTSxlQUFaLENBQWI7QUFDRDtBQUNGLEtBaEJEOztBQWtCQWtDLFlBQVE7QUFDUkksVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0wsUUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDWEksWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ04sUUFBckM7QUFDRCxLQUZEO0FBR0QsR0F6QlEsRUF5Qk4sRUF6Qk0sQ0FBVDtBQTJCQSxTQUFPUixVQUFQO0FBQ0QsQ0EvQkQ7O0dBQU1DLGE7O0FBaUNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuZjU2NDMxM2E0NzU4MTJiY2IyZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERyb3Bkb3duLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsaWZlRXhwZWN0YW5jeSBmcm9tICcuLi8uLi9zdG9yZS9saWZlLWV4cGVjdGFuY3kuanNvbidcclxuaW1wb3J0IHsgQXZlcmFnZUxpZmVZZWFycyB9IGZyb20gJy4uLy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uLy4uL3R5cGVzL3NleCdcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQsIHsgQnJlYWtwb2ludCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUJyZWFrcG9pbnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUNoYXJ0IGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUxlZ2VuZCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5TGVnZW5kJ1xyXG5cclxuY29uc3Qgc2V4T3B0aW9ucyA9IFtcclxuICB7IGtleTogMCwgdmFsdWU6IFNleC5Cb3RoLCB0ZXh0OiAnQm90aCcgfSxcclxuICB7IGtleTogMSwgdmFsdWU6IFNleC5NYW4sIHRleHQ6ICdNYW4nIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBTZXguV29tYW4sIHRleHQ6ICdXb21hbicgfSxcclxuXVxyXG5cclxudHlwZSBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBba2V5IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XT86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCB3aWR0aDogQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW0JyZWFrcG9pbnQuWFNtYWxsXTogMjgwLFxyXG4gIFtCcmVha3BvaW50LlNtYWxsXTogNTIwLFxyXG4gIFtCcmVha3BvaW50Lk1lZGl1bV06IDcyMCxcclxuICBbQnJlYWtwb2ludC5MYXJnZV06IDk1MCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUxhcmdlXTogMTE2MCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUV4dHJhTGFyZ2VdOiAxMzYwLFxyXG59XHJcblxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGU8U2V4PihTZXguQm90aClcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCB7IHZhbHVlIH0pID0+IHNldFNleCh2YWx1ZSksIFtdKVxyXG5cclxuICBjb25zdCBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihcclxuICAgIGxpZmVFeHBlY3RhbmN5LnJlZHVjZSgoYWNjOiBbc3RyaW5nLCBudW1iZXJdW10sIGN1cjogQXZlcmFnZUxpZmVZZWFycykgPT4ge1xyXG4gICAgICBhY2MucHVzaChbY3VyLmNvZGUsIGN1cltzZXhdXSlcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pXHJcbiAgKSwgW3NleF0pXHJcblxyXG4gIGNvbnN0IGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBkb21haW5CeSA9IGQzLmV4dGVudChBcnJheS5mcm9tKGRhdGEudmFsdWVzKCkpKVxyXG5cclxuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbkJ5IGFzIFtudW1iZXIsIG51bWJlcl0pXHJcbiAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSZEJ1KVxyXG4gICAgICAudW5rbm93bignI2YyZjJmMicpXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBjb25zdCBicmVha3BvaW50ID0gdXNlQnJlYWtwb2ludCgpXHJcblxyXG4gIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gd2lkdGhbYnJlYWtwb2ludF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFuZWx9PlxyXG4gICAgICAgIDxMaWZlRXhwZWN0YW5jeUxlZ2VuZCB0aXRsZT1cIkFnZSAoeWVhcnMpXCIgY29sb3I9e2NvbG9yfSAvPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHNleDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXh9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NleE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBzZXgnXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaWZlRXhwZWN0YW5jeUNoYXJ0IGRhdGE9e2RhdGF9IGNvbG9yPXtjb2xvcn0gd2lkdGg9e2F2YWlsYWJsZVdpZHRofSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDb250YWluZXIiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZW51bSBCcmVha3BvaW50IHtcclxuICBYU21hbGwsXHJcbiAgU21hbGwgPSA1NzYsXHJcbiAgTWVkaXVtID0gNzY4LFxyXG4gIExhcmdlID0gOTkyLFxyXG4gIEV4dHJhTGFyZ2UgPSAxMjAwLFxyXG4gIEV4dHJhRXh0cmFMYXJnZSA9IDE0MDAsXHJcbn1cclxuXHJcbmNvbnN0IHVzZUJyZWFrcG9pbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JyZWFrcG9pbnQsIHNldEJyZWFrcG9pbnRdID0gdXNlU3RhdGU8QnJlYWtwb2ludD4oQnJlYWtwb2ludC5MYXJnZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGNsaWVudFdpZHRoIH0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuXHJcbiAgICAgIGlmIChjbGllbnRXaWR0aCA8IEJyZWFrcG9pbnQuU21hbGwpIHtcclxuICAgICAgICBzZXRCcmVha3BvaW50KEJyZWFrcG9pbnQuWFNtYWxsKVxyXG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFdpZHRoIDwgQnJlYWtwb2ludC5NZWRpdW0pIHtcclxuICAgICAgICBzZXRCcmVha3BvaW50KEJyZWFrcG9pbnQuU21hbGwpXHJcbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50V2lkdGggPCBCcmVha3BvaW50LkxhcmdlKSB7XHJcbiAgICAgICAgc2V0QnJlYWtwb2ludChCcmVha3BvaW50Lk1lZGl1bSlcclxuICAgICAgfSBlbHNlIGlmIChjbGllbnRXaWR0aCA8IEJyZWFrcG9pbnQuRXh0cmFMYXJnZSkge1xyXG4gICAgICAgIHNldEJyZWFrcG9pbnQoQnJlYWtwb2ludC5MYXJnZSlcclxuICAgICAgfSBlbHNlIGlmIChjbGllbnRXaWR0aCA8IEJyZWFrcG9pbnQuRXh0cmFFeHRyYUxhcmdlKSB7XHJcbiAgICAgICAgc2V0QnJlYWtwb2ludChCcmVha3BvaW50LkV4dHJhTGFyZ2UpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0QnJlYWtwb2ludChCcmVha3BvaW50LkV4dHJhRXh0cmFMYXJnZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIGJyZWFrcG9pbnRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUJyZWFrcG9pbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=