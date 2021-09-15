webpackHotUpdate_N_E("pages/life-expectancy",{

/***/ "./components/lifeExpectancyChart/lifeExpectancyContainer.tsx":
/*!********************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json");
var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json", 1);
/* harmony import */ var _types_sex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/sex */ "./types/sex.ts");
/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useBreakpoint */ "./hooks/useBreakpoint.ts");
/* harmony import */ var _lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifeExpectancyChart */ "./components/lifeExpectancyChart/lifeExpectancyChart.tsx");
/* harmony import */ var _lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifeExpectancyLegend */ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyContainer.tsx",
    _widthByBreakpoint,
    _this = undefined,
    _s = $RefreshSig$();











var sexOptions = [{
  key: 0,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_6__["Sex"].Both,
  text: 'Both'
}, {
  key: 1,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_6__["Sex"].Man,
  text: 'Man'
}, {
  key: 2,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_6__["Sex"].Woman,
  text: 'Woman'
}];
var widthByBreakpoint = (_widthByBreakpoint = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].XSmall, 280), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].Small, 520), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].Medium, 720), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].Large, 930), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].ExtraLarge, 1100), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_widthByBreakpoint, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].ExtraExtraLarge, 1100), _widthByBreakpoint);

var LifeExpectancyContainer = function LifeExpectancyContainer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_types_sex__WEBPACK_IMPORTED_MODULE_6__["Sex"].Both),
      sex = _useState[0],
      setSex = _useState[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e, _ref) {
    var value = _ref.value;
    return setSex(value);
  }, []);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return new Map(_store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_5__.reduce(function (acc, cur) {
      acc.push([cur.code, cur[sex]]);
      return acc;
    }, []));
  }, [sex]);
  var color = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var domainBy = d3__WEBPACK_IMPORTED_MODULE_2__["extent"](Array.from(data.values()));
    return d3__WEBPACK_IMPORTED_MODULE_2__["scaleSequential"]().domain(domainBy).interpolator(d3__WEBPACK_IMPORTED_MODULE_2__["interpolateRdBu"]).unknown('#f2f2f2');
  }, [data]);
  var breakpoint = Object(_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var availableLegendWidth = breakpoint === _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].XSmall ? widthByBreakpoint[_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["Breakpoint"].XSmall] : undefined;
  var availableChartWidth = widthByBreakpoint[breakpoint];
  var fullscreenContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var fullscreenButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isFullscreen = _useState2[0],
      setFullscreen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(availableChartWidth)(function () {
    return document.fullscreenElement ? document.documentElement.clientWidth : availableChartWidth;
  }, [isFullscreen]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      chartWidth = _useState4[0],
      setChartWidth = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!document.fullscreenElement && isFullscreen) {
      fullscreenContainerRef.current.requestFullscreen()["catch"](function (err) {
        alert("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
      });
    } else {
      document.exitFullscreen();
    }
  }, [isFullscreen]);
  var toggleFullscreen = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    setFullscreen(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("section", {
    ref: fullscreenContainerRef,
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
      ref: fullscreenButtonRef,
      onClick: toggleFullscreen,
      children: "Fullscreen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Age (years)",
        color: color,
        width: availableLegendWidth
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
            value: sex,
            onChange: onChange,
            options: sexOptions,
            placeholder: "Select sex",
            compact: true,
            selection: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: data,
      color: color,
      width: chartWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "4xxYCMuaU3v2/40s8VLFQG3BGh0=", false, function () {
  return [_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_7__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGhCeUJyZWFrcG9pbnQiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVMZWdlbmRXaWR0aCIsInVuZGVmaW5lZCIsImF2YWlsYWJsZUNoYXJ0V2lkdGgiLCJmdWxsc2NyZWVuQ29udGFpbmVyUmVmIiwidXNlUmVmIiwiZnVsbHNjcmVlbkJ1dHRvblJlZiIsImlzRnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJkb2N1bWVudCIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJjaGFydFdpZHRoIiwic2V0Q2hhcnRXaWR0aCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIm5hbWUiLCJleGl0RnVsbHNjcmVlbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwcmV2Iiwic3R5bGVzIiwi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Qyw2REFBRDtBQUFzQixhQUFLLEVBQUMsYUFBNUI7QUFBMEMsYUFBSyxFQUFFckMsS0FBakQ7QUFBd0QsYUFBSyxFQUFFVztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxzRUFBQyxzREFBRDtBQUFBLCtCQUNFLHNFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGdCQUFNLE1BQWxCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxzRUFBQywwREFBRDtBQUNFLGlCQUFLLEVBQUV6QixHQURUO0FBRUUsb0JBQVEsRUFBRUUsUUFGWjtBQUdFLG1CQUFPLEVBQUVwQixVQUhYO0FBSUUsdUJBQVcsRUFBQyxZQUpkO0FBS0UsbUJBQU8sTUFMVDtBQU1FLHFCQUFTO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFrQkUsc0VBQUMsNERBQUQ7QUFBcUIsVUFBSSxFQUFFdUIsSUFBM0I7QUFBaUMsV0FBSyxFQUFFUyxLQUF4QztBQUErQyxXQUFLLEVBQUV1QjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBdEVEOztHQUFNdkMsdUI7VUFvQjJCMEIsNEQ7OztLQXBCM0IxQix1QjtBQXdFU0Esc0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LjRlOWUwZGU1YTU1OTkxM2U5ZDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRHJvcGRvd24sIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGxpZmVFeHBlY3RhbmN5IGZyb20gJy4uLy4uL3N0b3JlL2xpZmUtZXhwZWN0YW5jeS5qc29uJ1xyXG5pbXBvcnQgeyBBdmVyYWdlTGlmZVllYXJzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYXZlcmFnZUxpZmVZZWFycydcclxuaW1wb3J0IHsgU2V4IH0gZnJvbSAnLi4vLi4vdHlwZXMvc2V4J1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludCwgeyBCcmVha3BvaW50IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQnJlYWtwb2ludCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5Q2hhcnQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lMZWdlbmQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUxlZ2VuZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBzZXhPcHRpb25zID0gW1xyXG4gIHsga2V5OiAwLCB2YWx1ZTogU2V4LkJvdGgsIHRleHQ6ICdCb3RoJyB9LFxyXG4gIHsga2V5OiAxLCB2YWx1ZTogU2V4Lk1hbiwgdGV4dDogJ01hbicgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IFNleC5Xb21hbiwgdGV4dDogJ1dvbWFuJyB9LFxyXG5dXHJcblxyXG50eXBlIEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtrZXkgaW4ga2V5b2YgdHlwZW9mIEJyZWFrcG9pbnRdPzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHdpZHRoQnlCcmVha3BvaW50OiBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBbQnJlYWtwb2ludC5YU21hbGxdOiAyODAsXHJcbiAgW0JyZWFrcG9pbnQuU21hbGxdOiA1MjAsXHJcbiAgW0JyZWFrcG9pbnQuTWVkaXVtXTogNzIwLFxyXG4gIFtCcmVha3BvaW50LkxhcmdlXTogOTMwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhTGFyZ2VdOiAxMTAwLFxyXG4gIFtCcmVha3BvaW50LkV4dHJhRXh0cmFMYXJnZV06IDExMDAsXHJcbn1cclxuXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZXgsIHNldFNleF0gPSB1c2VTdGF0ZTxTZXg+KFNleC5Cb3RoKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUsIHsgdmFsdWUgfSkgPT4gc2V0U2V4KHZhbHVlKSwgW10pXHJcblxyXG4gIGNvbnN0IGRhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSB1c2VNZW1vKCgpID0+IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFxyXG4gICAgbGlmZUV4cGVjdGFuY3kucmVkdWNlKChhY2M6IFtzdHJpbmcsIG51bWJlcl1bXSwgY3VyOiBBdmVyYWdlTGlmZVllYXJzKSA9PiB7XHJcbiAgICAgIGFjYy5wdXNoKFtjdXIuY29kZSwgY3VyW3NleF1dKVxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCBbXSlcclxuICApLCBbc2V4XSlcclxuXHJcbiAgY29uc3QgY29sb3I6IGQzLlNjYWxlU2VxdWVudGlhbDxzdHJpbmcsICcjZjJmMmYyJz4gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGRvbWFpbkJ5ID0gZDMuZXh0ZW50KEFycmF5LmZyb20oZGF0YS52YWx1ZXMoKSkpXHJcblxyXG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpXHJcbiAgICAgIC5kb21haW4oZG9tYWluQnkgYXMgW251bWJlciwgbnVtYmVyXSlcclxuICAgICAgLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJkQnUpXHJcbiAgICAgIC51bmtub3duKCcjZjJmMmYyJylcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGNvbnN0IGJyZWFrcG9pbnQ6IEJyZWFrcG9pbnQgPSB1c2VCcmVha3BvaW50KClcclxuICBjb25zdCBhdmFpbGFibGVMZWdlbmRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkID0gYnJlYWtwb2ludCA9PT0gQnJlYWtwb2ludC5YU21hbGwgPyB3aWR0aEJ5QnJlYWtwb2ludFtCcmVha3BvaW50LlhTbWFsbF0gOiB1bmRlZmluZWRcclxuICBjb25zdCBhdmFpbGFibGVDaGFydFdpZHRoOiBudW1iZXIgPSB3aWR0aEJ5QnJlYWtwb2ludFticmVha3BvaW50XSFcclxuXHJcbiAgY29uc3QgZnVsbHNjcmVlbkNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcclxuICBjb25zdCBmdWxsc2NyZWVuQnV0dG9uUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtpc0Z1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtjaGFydFdpZHRoLCBzZXRDaGFydFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oYXZhaWxhYmxlQ2hhcnRXaWR0aClcclxuXHJcbiAgKCgpID0+IChcclxuICAgIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogYXZhaWxhYmxlQ2hhcnRXaWR0aFxyXG4gICksIFtpc0Z1bGxzY3JlZW5dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAmJiBpc0Z1bGxzY3JlZW4pIHtcclxuICAgICAgZnVsbHNjcmVlbkNvbnRhaW5lclJlZi5jdXJyZW50IS5yZXF1ZXN0RnVsbHNjcmVlbigpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgYWxlcnQoYEVycm9yIGF0dGVtcHRpbmcgdG8gZW5hYmxlIGZ1bGwtc2NyZWVuIG1vZGU6ICR7ZXJyLm1lc3NhZ2V9ICgke2Vyci5uYW1lfSlgKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0Z1bGxzY3JlZW5dKVxyXG5cclxuICBjb25zdCB0b2dnbGVGdWxsc2NyZWVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RnVsbHNjcmVlbihwcmV2ID0+ICFwcmV2KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gcmVmPXtmdWxsc2NyZWVuQ29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8YnV0dG9uIHJlZj17ZnVsbHNjcmVlbkJ1dHRvblJlZn0gb25DbGljaz17dG9nZ2xlRnVsbHNjcmVlbn0+RnVsbHNjcmVlbjwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhbmVsfT5cclxuICAgICAgICA8TGlmZUV4cGVjdGFuY3lMZWdlbmQgdGl0bGU9XCJBZ2UgKHllYXJzKVwiIGNvbG9yPXtjb2xvcn0gd2lkdGg9e2F2YWlsYWJsZUxlZ2VuZFdpZHRofSAvPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHNleDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXh9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NleE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBzZXgnXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaWZlRXhwZWN0YW5jeUNoYXJ0IGRhdGE9e2RhdGF9IGNvbG9yPXtjb2xvcn0gd2lkdGg9e2NoYXJ0V2lkdGh9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=