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
      setChartWidth = _useState3[1]; // useEffect(() => (
  // setChartWidth(isFullscreen && document.fullscreenElement ? document.documentElement.clientWidth : availableChartWidth)
  // ), [isFullscreen])


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isFullscreen && !document.fullscreenElement) {
      fullscreenContainerRef.current.requestFullscreen().then(function () {
        setChartWidth(document.fullscreenElement ? document.documentElement.clientWidth : availableChartWidth);
      })["catch"](function (err) {
        alert("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
      });
    } else if (document.fullscreenElement) {
      setChartWidth(availableChartWidth);
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
      lineNumber: 86,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Age (years)",
        color: color,
        width: availableLegendWidth
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
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
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: chartWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "hFBKpfLJfgU28H1DjB3v6hkhId8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGhCeUJyZWFrcG9pbnQiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVMZWdlbmRXaWR0aCIsInVuZGVmaW5lZCIsImF2YWlsYWJsZUNoYXJ0V2lkdGgiLCJmdWxsc2NyZWVuQ29udGFpbmVyUmVmIiwidXNlUmVmIiwiZnVsbHNjcmVlbkJ1dHRvblJlZiIsImlzRnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJjaGFydFdpZHRoIiwic2V0Q2hhcnRXaWR0aCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJjdXJyZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJ0aGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJuYW1lIiwiZXhpdEZ1bGxzY3JlZW4iLCJ0b2dnbGVGdWxsc2NyZWVuIiwicHJldiIsInN0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QUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUUsdUVBQU0sQ0FBQ0UsS0FBdkI7QUFBQSw4QkFDRSxzRUFBQyw2REFBRDtBQUFzQixhQUFLLEVBQUMsYUFBNUI7QUFBMEMsYUFBSyxFQUFFdEMsS0FBakQ7QUFBd0QsYUFBSyxFQUFFVztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxzRUFBQyxzREFBRDtBQUFBLCtCQUNFLHNFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGdCQUFNLE1BQWxCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxzRUFBQywwREFBRDtBQUNFLGlCQUFLLEVBQUV6QixHQURUO0FBRUUsb0JBQVEsRUFBRUUsUUFGWjtBQUdFLG1CQUFPLEVBQUVwQixVQUhYO0FBSUUsdUJBQVcsRUFBQyxZQUpkO0FBS0UsbUJBQU8sTUFMVDtBQU1FLHFCQUFTO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFrQkUsc0VBQUMsNERBQUQ7QUFBcUIsVUFBSSxFQUFFdUIsSUFBM0I7QUFBaUMsV0FBSyxFQUFFUyxLQUF4QztBQUErQyxXQUFLLEVBQUVtQjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBM0VEOztHQUFNbkMsdUI7VUFvQjJCMEIsNEQ7OztLQXBCM0IxQix1QjtBQTZFU0Esc0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LmU0M2IyODgwNjlkYWEwNDQ3NWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRHJvcGRvd24sIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGxpZmVFeHBlY3RhbmN5IGZyb20gJy4uLy4uL3N0b3JlL2xpZmUtZXhwZWN0YW5jeS5qc29uJ1xyXG5pbXBvcnQgeyBBdmVyYWdlTGlmZVllYXJzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYXZlcmFnZUxpZmVZZWFycydcclxuaW1wb3J0IHsgU2V4IH0gZnJvbSAnLi4vLi4vdHlwZXMvc2V4J1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludCwgeyBCcmVha3BvaW50IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQnJlYWtwb2ludCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5Q2hhcnQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lMZWdlbmQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUxlZ2VuZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBzZXhPcHRpb25zID0gW1xyXG4gIHsga2V5OiAwLCB2YWx1ZTogU2V4LkJvdGgsIHRleHQ6ICdCb3RoJyB9LFxyXG4gIHsga2V5OiAxLCB2YWx1ZTogU2V4Lk1hbiwgdGV4dDogJ01hbicgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IFNleC5Xb21hbiwgdGV4dDogJ1dvbWFuJyB9LFxyXG5dXHJcblxyXG50eXBlIEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtrZXkgaW4ga2V5b2YgdHlwZW9mIEJyZWFrcG9pbnRdPzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHdpZHRoQnlCcmVha3BvaW50OiBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBbQnJlYWtwb2ludC5YU21hbGxdOiAyODAsXHJcbiAgW0JyZWFrcG9pbnQuU21hbGxdOiA1MjAsXHJcbiAgW0JyZWFrcG9pbnQuTWVkaXVtXTogNzIwLFxyXG4gIFtCcmVha3BvaW50LkxhcmdlXTogOTMwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhTGFyZ2VdOiAxMTAwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhRXh0cmFMYXJnZV06IDExMDAsXHJcbn1cclxuXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZXgsIHNldFNleF0gPSB1c2VTdGF0ZTxTZXg+KFNleC5Cb3RoKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUsIHsgdmFsdWUgfSkgPT4gc2V0U2V4KHZhbHVlKSwgW10pXHJcblxyXG4gIGNvbnN0IGRhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSB1c2VNZW1vKCgpID0+IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFxyXG4gICAgbGlmZUV4cGVjdGFuY3kucmVkdWNlKChhY2M6IFtzdHJpbmcsIG51bWJlcl1bXSwgY3VyOiBBdmVyYWdlTGlmZVllYXJzKSA9PiB7XHJcbiAgICAgIGFjYy5wdXNoKFtjdXIuY29kZSwgY3VyW3NleF1dKVxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCBbXSlcclxuICApLCBbc2V4XSlcclxuXHJcbiAgY29uc3QgY29sb3I6IGQzLlNjYWxlU2VxdWVudGlhbDxzdHJpbmcsICcjZjJmMmYyJz4gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGRvbWFpbkJ5ID0gZDMuZXh0ZW50KEFycmF5LmZyb20oZGF0YS52YWx1ZXMoKSkpXHJcblxyXG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpXHJcbiAgICAgIC5kb21haW4oZG9tYWluQnkgYXMgW251bWJlciwgbnVtYmVyXSlcclxuICAgICAgLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJkQnUpXHJcbiAgICAgIC51bmtub3duKCcjZjJmMmYyJylcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGNvbnN0IGJyZWFrcG9pbnQ6IEJyZWFrcG9pbnQgPSB1c2VCcmVha3BvaW50KClcclxuICBjb25zdCBhdmFpbGFibGVMZWdlbmRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkID0gYnJlYWtwb2ludCA9PT0gQnJlYWtwb2ludC5YU21hbGwgPyB3aWR0aEJ5QnJlYWtwb2ludFtCcmVha3BvaW50LlhTbWFsbF0gOiB1bmRlZmluZWRcclxuICBjb25zdCBhdmFpbGFibGVDaGFydFdpZHRoOiBudW1iZXIgPSB3aWR0aEJ5QnJlYWtwb2ludFticmVha3BvaW50XSFcclxuXHJcbiAgY29uc3QgZnVsbHNjcmVlbkNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcclxuICBjb25zdCBmdWxsc2NyZWVuQnV0dG9uUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtpc0Z1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtjaGFydFdpZHRoLCBzZXRDaGFydFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oYXZhaWxhYmxlQ2hhcnRXaWR0aClcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4gKFxyXG4gICAgLy8gc2V0Q2hhcnRXaWR0aChpc0Z1bGxzY3JlZW4gJiYgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBhdmFpbGFibGVDaGFydFdpZHRoKVxyXG4gIC8vICksIFtpc0Z1bGxzY3JlZW5dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzRnVsbHNjcmVlbiAmJiAhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgZnVsbHNjcmVlbkNvbnRhaW5lclJlZi5jdXJyZW50IVxyXG4gICAgICAgIC5yZXF1ZXN0RnVsbHNjcmVlbigpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc2V0Q2hhcnRXaWR0aChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IGF2YWlsYWJsZUNoYXJ0V2lkdGgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGFsZXJ0KGBFcnJvciBhdHRlbXB0aW5nIHRvIGVuYWJsZSBmdWxsLXNjcmVlbiBtb2RlOiAke2Vyci5tZXNzYWdlfSAoJHtlcnIubmFtZX0pYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgIHNldENoYXJ0V2lkdGgoYXZhaWxhYmxlQ2hhcnRXaWR0aClcclxuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9LCBbaXNGdWxsc2NyZWVuXSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlRnVsbHNjcmVlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZ1bGxzY3JlZW4ocHJldiA9PiAhcHJldilcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHJlZj17ZnVsbHNjcmVlbkNvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGJ1dHRvbiByZWY9e2Z1bGxzY3JlZW5CdXR0b25SZWZ9IG9uQ2xpY2s9e3RvZ2dsZUZ1bGxzY3JlZW59PkZ1bGxzY3JlZW48L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IHdpZHRoPXthdmFpbGFibGVMZWdlbmRXaWR0aH0gLz5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkIGlubGluZT5cclxuICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBzZXg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICB2YWx1ZT17c2V4fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtzZXhPcHRpb25zfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWxlY3Qgc2V4J1xyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBzZWxlY3Rpb25cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGlmZUV4cGVjdGFuY3lDaGFydCBkYXRhPXtkYXRhfSBjb2xvcj17Y29sb3J9IHdpZHRoPXtjaGFydFdpZHRofSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9