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
var width = (_width = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall, 280), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Small, 520), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Medium, 720), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Large, 930), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraLarge, 1100), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraExtraLarge, 1100), _width);

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
  var availableLegendWidth = breakpoint === _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall ? width[_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall] : undefined;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("section", {
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Age (years)",
        color: color,
        width: availableLegendWidth
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

_s(LifeExpectancyContainer, "L8587R/CVxwtWMSFga5RxljPaNU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGgiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVXaWR0aCIsImF2YWlsYWJsZUxlZ2VuZFdpZHRoIiwidW5kZWZpbmVkIiwic3R5bGVzIiwiY29udGFpbmVyIiwicGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDQyxJQUFyQjtBQUEyQkMsTUFBSSxFQUFFO0FBQWpDLENBRGlCLEVBRWpCO0FBQUVKLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFBRUMsOENBQUcsQ0FBQ0csR0FBckI7QUFBMEJELE1BQUksRUFBRTtBQUFoQyxDQUZp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QUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWlCRSxzRUFBQyw0REFBRDtBQUFxQixVQUFJLEVBQUV1QixJQUEzQjtBQUFpQyxXQUFLLEVBQUVTLEtBQXhDO0FBQStDLFdBQUssRUFBRVc7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQTdDRDs7R0FBTTNCLHVCO1VBb0IyQjBCLDREOzs7S0FwQjNCMUIsdUI7QUErQ1NBLHNGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS4xMGM5ZGJlN2YxM2I0MmEyZGVjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRHJvcGRvd24sIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGxpZmVFeHBlY3RhbmN5IGZyb20gJy4uLy4uL3N0b3JlL2xpZmUtZXhwZWN0YW5jeS5qc29uJ1xyXG5pbXBvcnQgeyBBdmVyYWdlTGlmZVllYXJzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYXZlcmFnZUxpZmVZZWFycydcclxuaW1wb3J0IHsgU2V4IH0gZnJvbSAnLi4vLi4vdHlwZXMvc2V4J1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludCwgeyBCcmVha3BvaW50IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQnJlYWtwb2ludCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5Q2hhcnQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lMZWdlbmQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUxlZ2VuZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBzZXhPcHRpb25zID0gW1xyXG4gIHsga2V5OiAwLCB2YWx1ZTogU2V4LkJvdGgsIHRleHQ6ICdCb3RoJyB9LFxyXG4gIHsga2V5OiAxLCB2YWx1ZTogU2V4Lk1hbiwgdGV4dDogJ01hbicgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IFNleC5Xb21hbiwgdGV4dDogJ1dvbWFuJyB9LFxyXG5dXHJcblxyXG50eXBlIEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtrZXkgaW4ga2V5b2YgdHlwZW9mIEJyZWFrcG9pbnRdPzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHdpZHRoOiBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBbQnJlYWtwb2ludC5YU21hbGxdOiAyODAsXHJcbiAgW0JyZWFrcG9pbnQuU21hbGxdOiA1MjAsXHJcbiAgW0JyZWFrcG9pbnQuTWVkaXVtXTogNzIwLFxyXG4gIFtCcmVha3BvaW50LkxhcmdlXTogOTMwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhTGFyZ2VdOiAxMTAwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhRXh0cmFMYXJnZV06IDExMDAsXHJcbn1cclxuXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZXgsIHNldFNleF0gPSB1c2VTdGF0ZTxTZXg+KFNleC5Cb3RoKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUsIHsgdmFsdWUgfSkgPT4gc2V0U2V4KHZhbHVlKSwgW10pXHJcblxyXG4gIGNvbnN0IGRhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSB1c2VNZW1vKCgpID0+IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFxyXG4gICAgbGlmZUV4cGVjdGFuY3kucmVkdWNlKChhY2M6IFtzdHJpbmcsIG51bWJlcl1bXSwgY3VyOiBBdmVyYWdlTGlmZVllYXJzKSA9PiB7XHJcbiAgICAgIGFjYy5wdXNoKFtjdXIuY29kZSwgY3VyW3NleF1dKVxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCBbXSlcclxuICApLCBbc2V4XSlcclxuXHJcbiAgY29uc3QgY29sb3I6IGQzLlNjYWxlU2VxdWVudGlhbDxzdHJpbmcsICcjZjJmMmYyJz4gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGRvbWFpbkJ5ID0gZDMuZXh0ZW50KEFycmF5LmZyb20oZGF0YS52YWx1ZXMoKSkpXHJcblxyXG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpXHJcbiAgICAgIC5kb21haW4oZG9tYWluQnkgYXMgW251bWJlciwgbnVtYmVyXSlcclxuICAgICAgLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJkQnUpXHJcbiAgICAgIC51bmtub3duKCcjZjJmMmYyJylcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGNvbnN0IGJyZWFrcG9pbnQ6IEJyZWFrcG9pbnQgPSB1c2VCcmVha3BvaW50KClcclxuICBjb25zdCBhdmFpbGFibGVXaWR0aDogbnVtYmVyID0gd2lkdGhbYnJlYWtwb2ludF0hXHJcbiAgY29uc3QgYXZhaWxhYmxlTGVnZW5kV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCA9IGJyZWFrcG9pbnQgPT09IEJyZWFrcG9pbnQuWFNtYWxsICA/IHdpZHRoW0JyZWFrcG9pbnQuWFNtYWxsXSA6IHVuZGVmaW5lZFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IHdpZHRoPXthdmFpbGFibGVMZWdlbmRXaWR0aH0gLz5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkIGlubGluZT5cclxuICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBzZXg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICB2YWx1ZT17c2V4fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtzZXhPcHRpb25zfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWxlY3Qgc2V4J1xyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBzZWxlY3Rpb25cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGlmZUV4cGVjdGFuY3lDaGFydCBkYXRhPXtkYXRhfSBjb2xvcj17Y29sb3J9IHdpZHRoPXthdmFpbGFibGVXaWR0aH0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==