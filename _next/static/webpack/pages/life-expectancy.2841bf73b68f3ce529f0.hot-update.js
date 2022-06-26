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
/* harmony import */ var _lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifeExpectancyLegend */ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyContainer.tsx",
    _widthByBreakpoint,
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
var widthByBreakpoint = (_widthByBreakpoint = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall, 280), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Small, 520), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Medium, 720), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Large, 930), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraLarge, 1100), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraExtraLarge, 1100), _widthByBreakpoint);

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
  var availableLegendWidth = breakpoint === _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall ? widthByBreakpoint[_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall] : undefined;
  var availableChartWidth = widthByBreakpoint[breakpoint];
  var fullscreenContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var fullscreenButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isFullscreen = _useState2[0],
      setFullscreen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(availableChartWidth),
      chartWidth = _useState3[0],
      setChartWidth = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return setChartWidth(isFullscreen && document.fullscreenElement ? document.documentElement.clientWidth : availableChartWidth);
  }, [isFullscreen]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isFullscreen && !document.fullscreenElement) {
      fullscreenContainerRef.current.requestFullscreen()["catch"](function (err) {
        alert("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isFullscreen]);
  var toggleFullscreen = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setFullscreen(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("section", {
    ref: fullscreenContainerRef,
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
      ref: fullscreenButtonRef,
      onClick: toggleFullscreen,
      children: "Fullscreen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Age (years)",
        color: color,
        width: availableLegendWidth
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
            lineNumber: 86,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: chartWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "Gc4NbP5h1Pb18Y9HZyOylGd/0bc=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGhCeUJyZWFrcG9pbnQiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVMZWdlbmRXaWR0aCIsInVuZGVmaW5lZCIsImF2YWlsYWJsZUNoYXJ0V2lkdGgiLCJmdWxsc2NyZWVuQ29udGFpbmVyUmVmIiwidXNlUmVmIiwiZnVsbHNjcmVlbkJ1dHRvblJlZiIsImlzRnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJjaGFydFdpZHRoIiwic2V0Q2hhcnRXaWR0aCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImN1cnJlbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIm5hbWUiLCJleGl0RnVsbHNjcmVlbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwcmV2Iiwic3R5bGVzIiwi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QURGLGVBRUU7QUFBSyxlQUFTLEVBQUVFLHVFQUFNLENBQUNFLEtBQXZCO0FBQUEsOEJBQ0Usc0VBQUMsNkRBQUQ7QUFBc0IsYUFBSyxFQUFDLGFBQTVCO0FBQTBDLGFBQUssRUFBRXJDLEtBQWpEO0FBQXdELGFBQUssRUFBRVc7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsc0VBQUMsc0RBQUQ7QUFBQSwrQkFDRSxzRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBTSxNQUFsQjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsc0VBQUMsMERBQUQ7QUFDRSxpQkFBSyxFQUFFekIsR0FEVDtBQUVFLG9CQUFRLEVBQUVFLFFBRlo7QUFHRSxtQkFBTyxFQUFFcEIsVUFIWDtBQUlFLHVCQUFXLEVBQUMsWUFKZDtBQUtFLG1CQUFPLE1BTFQ7QUFNRSxxQkFBUztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBa0JFLHNFQUFDLDREQUFEO0FBQXFCLFVBQUksRUFBRXVCLElBQTNCO0FBQWlDLFdBQUssRUFBRVMsS0FBeEM7QUFBK0MsV0FBSyxFQUFFbUI7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXJFRDs7R0FBTW5DLHVCO1VBb0IyQjBCLDREOzs7S0FwQjNCMUIsdUI7QUF1RVNBLHNGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS4yODQxYmY3M2I2OGYzY2U1MjlmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERyb3Bkb3duLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsaWZlRXhwZWN0YW5jeSBmcm9tICcuLi8uLi9zdG9yZS9saWZlLWV4cGVjdGFuY3kuanNvbidcclxuaW1wb3J0IHsgQXZlcmFnZUxpZmVZZWFycyB9IGZyb20gJy4uLy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uLy4uL3R5cGVzL3NleCdcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQsIHsgQnJlYWtwb2ludCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUJyZWFrcG9pbnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUNoYXJ0IGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5TGVnZW5kIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lMZWdlbmQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgc2V4T3B0aW9ucyA9IFtcclxuICB7IGtleTogMCwgdmFsdWU6IFNleC5Cb3RoLCB0ZXh0OiAnQm90aCcgfSxcclxuICB7IGtleTogMSwgdmFsdWU6IFNleC5NYW4sIHRleHQ6ICdNYW4nIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBTZXguV29tYW4sIHRleHQ6ICdXb21hbicgfSxcclxuXVxyXG5cclxudHlwZSBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBba2V5IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XT86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCB3aWR0aEJ5QnJlYWtwb2ludDogQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW0JyZWFrcG9pbnQuWFNtYWxsXTogMjgwLFxyXG4gIFtCcmVha3BvaW50LlNtYWxsXTogNTIwLFxyXG4gIFtCcmVha3BvaW50Lk1lZGl1bV06IDcyMCxcclxuICBbQnJlYWtwb2ludC5MYXJnZV06IDkzMCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUxhcmdlXTogMTEwMCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUV4dHJhTGFyZ2VdOiAxMTAwLFxyXG59XHJcblxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGU8U2V4PihTZXguQm90aClcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCB7IHZhbHVlIH0pID0+IHNldFNleCh2YWx1ZSksIFtdKVxyXG5cclxuICBjb25zdCBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihcclxuICAgIGxpZmVFeHBlY3RhbmN5LnJlZHVjZSgoYWNjOiBbc3RyaW5nLCBudW1iZXJdW10sIGN1cjogQXZlcmFnZUxpZmVZZWFycykgPT4ge1xyXG4gICAgICBhY2MucHVzaChbY3VyLmNvZGUsIGN1cltzZXhdXSlcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pXHJcbiAgKSwgW3NleF0pXHJcblxyXG4gIGNvbnN0IGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBkb21haW5CeSA9IGQzLmV4dGVudChBcnJheS5mcm9tKGRhdGEudmFsdWVzKCkpKVxyXG5cclxuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbkJ5IGFzIFtudW1iZXIsIG51bWJlcl0pXHJcbiAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSZEJ1KVxyXG4gICAgICAudW5rbm93bignI2YyZjJmMicpXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBjb25zdCBicmVha3BvaW50OiBCcmVha3BvaW50ID0gdXNlQnJlYWtwb2ludCgpXHJcbiAgY29uc3QgYXZhaWxhYmxlTGVnZW5kV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCA9IGJyZWFrcG9pbnQgPT09IEJyZWFrcG9pbnQuWFNtYWxsID8gd2lkdGhCeUJyZWFrcG9pbnRbQnJlYWtwb2ludC5YU21hbGxdIDogdW5kZWZpbmVkXHJcbiAgY29uc3QgYXZhaWxhYmxlQ2hhcnRXaWR0aDogbnVtYmVyID0gd2lkdGhCeUJyZWFrcG9pbnRbYnJlYWtwb2ludF0hXHJcblxyXG4gIGNvbnN0IGZ1bGxzY3JlZW5Db250YWluZXJSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgZnVsbHNjcmVlbkJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbClcclxuICBjb25zdCBbaXNGdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCBbY2hhcnRXaWR0aCwgc2V0Q2hhcnRXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KGF2YWlsYWJsZUNoYXJ0V2lkdGgpXHJcbiAgdXNlRWZmZWN0KCgpID0+IChcclxuICAgIHNldENoYXJ0V2lkdGgoaXNGdWxsc2NyZWVuICYmIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogYXZhaWxhYmxlQ2hhcnRXaWR0aClcclxuICApLCBbaXNGdWxsc2NyZWVuXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0Z1bGxzY3JlZW4gJiYgIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgIGZ1bGxzY3JlZW5Db250YWluZXJSZWYuY3VycmVudCEucmVxdWVzdEZ1bGxzY3JlZW4oKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGBFcnJvciBhdHRlbXB0aW5nIHRvIGVuYWJsZSBmdWxsLXNjcmVlbiBtb2RlOiAke2Vyci5tZXNzYWdlfSAoJHtlcnIubmFtZX0pYCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0Z1bGxzY3JlZW5dKVxyXG5cclxuICBjb25zdCB0b2dnbGVGdWxsc2NyZWVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RnVsbHNjcmVlbihwcmV2ID0+ICFwcmV2KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gcmVmPXtmdWxsc2NyZWVuQ29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8YnV0dG9uIHJlZj17ZnVsbHNjcmVlbkJ1dHRvblJlZn0gb25DbGljaz17dG9nZ2xlRnVsbHNjcmVlbn0+RnVsbHNjcmVlbjwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhbmVsfT5cclxuICAgICAgICA8TGlmZUV4cGVjdGFuY3lMZWdlbmQgdGl0bGU9XCJBZ2UgKHllYXJzKVwiIGNvbG9yPXtjb2xvcn0gd2lkdGg9e2F2YWlsYWJsZUxlZ2VuZFdpZHRofSAvPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHNleDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXh9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NleE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBzZXgnXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaWZlRXhwZWN0YW5jeUNoYXJ0IGRhdGE9e2RhdGF9IGNvbG9yPXtjb2xvcn0gd2lkdGg9e2NoYXJ0V2lkdGh9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=