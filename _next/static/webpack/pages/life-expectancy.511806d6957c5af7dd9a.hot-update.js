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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(availableChartWidth),
      chartWidth = _useState2[0],
      setChartWidth = _useState2[1];

  var fullscreenContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isFullscreen = _useState3[0],
      setFullscreen = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isFullscreen && !document.fullscreenElement) {
      fullscreenContainerRef.current.requestFullscreen()["catch"](function (err) {
        alert("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isFullscreen]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleFullscreenchange = function handleFullscreenchange() {
      setChartWidth(document.fullscreenElement ? document.documentElement.clientWidth : availableChartWidth);
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenchange);
    return function () {
      document.removeEventListener('fullscreenchange', handleFullscreenchange);
    };
  }, []);
  var toggleFullscreen = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setFullscreen(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("section", {
    ref: fullscreenContainerRef,
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Age (years)",
        color: color,
        width: availableLegendWidth
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
              children: "Select sex"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
              value: sex,
              onChange: onChange,
              options: sexOptions,
              placeholder: "Select sex",
              compact: true,
              selection: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              onClick: toggleFullscreen,
              children: "Fullscreen"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: chartWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "tIeR54I9hl7uGtq/QF0awQTZHGU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGhCeUJyZWFrcG9pbnQiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVMZWdlbmRXaWR0aCIsInVuZGVmaW5lZCIsImF2YWlsYWJsZUNoYXJ0V2lkdGgiLCJjaGFydFdpZHRoIiwic2V0Q2hhcnRXaWR0aCIsImZ1bGxzY3JlZW5Db250YWluZXJSZWYiLCJ1c2VSZWYiLCJpc0Z1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuRWxlbWVudCIsImN1cnJlbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIm5hbWUiLCJleGl0RnVsbHNjcmVlbiIsImhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExp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QXhDO0FBQStDLFdBQUssRUFBRWM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQW5GRDs7R0FBTTlCLHVCO1VBb0IyQjBCLDREOzs7S0FwQjNCMUIsdUI7QUFxRlNBLHNGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS41MTE4MDZkNjk1N2M1YWY3ZGQ5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERyb3Bkb3duLCBGb3JtLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGxpZmVFeHBlY3RhbmN5IGZyb20gJy4uLy4uL3N0b3JlL2xpZmUtZXhwZWN0YW5jeS5qc29uJ1xyXG5pbXBvcnQgeyBBdmVyYWdlTGlmZVllYXJzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYXZlcmFnZUxpZmVZZWFycydcclxuaW1wb3J0IHsgU2V4IH0gZnJvbSAnLi4vLi4vdHlwZXMvc2V4J1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludCwgeyBCcmVha3BvaW50IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQnJlYWtwb2ludCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5Q2hhcnQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lMZWdlbmQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUxlZ2VuZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBzZXhPcHRpb25zID0gW1xyXG4gIHsga2V5OiAwLCB2YWx1ZTogU2V4LkJvdGgsIHRleHQ6ICdCb3RoJyB9LFxyXG4gIHsga2V5OiAxLCB2YWx1ZTogU2V4Lk1hbiwgdGV4dDogJ01hbicgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IFNleC5Xb21hbiwgdGV4dDogJ1dvbWFuJyB9LFxyXG5dXHJcblxyXG50eXBlIEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtrZXkgaW4ga2V5b2YgdHlwZW9mIEJyZWFrcG9pbnRdPzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHdpZHRoQnlCcmVha3BvaW50OiBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBbQnJlYWtwb2ludC5YU21hbGxdOiAyODAsXHJcbiAgW0JyZWFrcG9pbnQuU21hbGxdOiA1MjAsXHJcbiAgW0JyZWFrcG9pbnQuTWVkaXVtXTogNzIwLFxyXG4gIFtCcmVha3BvaW50LkxhcmdlXTogOTMwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhTGFyZ2VdOiAxMTAwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhRXh0cmFMYXJnZV06IDExMDAsXHJcbn1cclxuXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZXgsIHNldFNleF0gPSB1c2VTdGF0ZTxTZXg+KFNleC5Cb3RoKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUsIHsgdmFsdWUgfSkgPT4gc2V0U2V4KHZhbHVlKSwgW10pXHJcblxyXG4gIGNvbnN0IGRhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSB1c2VNZW1vKCgpID0+IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFxyXG4gICAgbGlmZUV4cGVjdGFuY3kucmVkdWNlKChhY2M6IFtzdHJpbmcsIG51bWJlcl1bXSwgY3VyOiBBdmVyYWdlTGlmZVllYXJzKSA9PiB7XHJcbiAgICAgIGFjYy5wdXNoKFtjdXIuY29kZSwgY3VyW3NleF1dKVxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCBbXSlcclxuICApLCBbc2V4XSlcclxuXHJcbiAgY29uc3QgY29sb3I6IGQzLlNjYWxlU2VxdWVudGlhbDxzdHJpbmcsICcjZjJmMmYyJz4gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGRvbWFpbkJ5ID0gZDMuZXh0ZW50KEFycmF5LmZyb20oZGF0YS52YWx1ZXMoKSkpXHJcblxyXG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpXHJcbiAgICAgIC5kb21haW4oZG9tYWluQnkgYXMgW251bWJlciwgbnVtYmVyXSlcclxuICAgICAgLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJkQnUpXHJcbiAgICAgIC51bmtub3duKCcjZjJmMmYyJylcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGNvbnN0IGJyZWFrcG9pbnQ6IEJyZWFrcG9pbnQgPSB1c2VCcmVha3BvaW50KClcclxuICBjb25zdCBhdmFpbGFibGVMZWdlbmRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkID0gYnJlYWtwb2ludCA9PT0gQnJlYWtwb2ludC5YU21hbGwgPyB3aWR0aEJ5QnJlYWtwb2ludFtCcmVha3BvaW50LlhTbWFsbF0gOiB1bmRlZmluZWRcclxuICBjb25zdCBhdmFpbGFibGVDaGFydFdpZHRoOiBudW1iZXIgPSB3aWR0aEJ5QnJlYWtwb2ludFticmVha3BvaW50XSFcclxuICBjb25zdCBbY2hhcnRXaWR0aCwgc2V0Q2hhcnRXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KGF2YWlsYWJsZUNoYXJ0V2lkdGgpXHJcblxyXG4gIGNvbnN0IGZ1bGxzY3JlZW5Db250YWluZXJSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgW2lzRnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0Z1bGxzY3JlZW4gJiYgIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgIGZ1bGxzY3JlZW5Db250YWluZXJSZWYuY3VycmVudCFcclxuICAgICAgICAucmVxdWVzdEZ1bGxzY3JlZW4oKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoYEVycm9yIGF0dGVtcHRpbmcgdG8gZW5hYmxlIGZ1bGwtc2NyZWVuIG1vZGU6ICR7ZXJyLm1lc3NhZ2V9ICgke2Vyci5uYW1lfSlgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9LCBbaXNGdWxsc2NyZWVuXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldENoYXJ0V2lkdGgoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBhdmFpbGFibGVDaGFydFdpZHRoKVxyXG4gICAgICBzZXRGdWxsc2NyZWVuKCEhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBoYW5kbGVGdWxsc2NyZWVuY2hhbmdlKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlRnVsbHNjcmVlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZ1bGxzY3JlZW4ocHJldiA9PiAhcHJldilcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHJlZj17ZnVsbHNjcmVlbkNvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IHdpZHRoPXthdmFpbGFibGVMZWdlbmRXaWR0aH0gLz5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGlubGluZT5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBzZXg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NleH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NleE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IHNleCdcclxuICAgICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQgPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlRnVsbHNjcmVlbn0+RnVsbHNjcmVlbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpZmVFeHBlY3RhbmN5Q2hhcnQgZGF0YT17ZGF0YX0gY29sb3I9e2NvbG9yfSB3aWR0aD17Y2hhcnRXaWR0aH0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==