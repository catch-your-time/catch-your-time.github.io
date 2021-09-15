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
    if (!document.fullscreenElement && isFullscreen) {
      fullscreenContainerRef.current.requestFullscreen()["catch"](function (err) {
        alert("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
      });
    } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGhCeUJyZWFrcG9pbnQiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVMZWdlbmRXaWR0aCIsInVuZGVmaW5lZCIsImF2YWlsYWJsZUNoYXJ0V2lkdGgiLCJmdWxsc2NyZWVuQ29udGFpbmVyUmVmIiwidXNlUmVmIiwiZnVsbHNjcmVlbkJ1dHRvblJlZiIsImlzRnVsbHNjcmVlbiIsInNldEZ1bGxzY3JlZW4iLCJjaGFydFdpZHRoIiwic2V0Q2hhcnRXaWR0aCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImN1cnJlbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIm5hbWUiLCJleGl0RnVsbHNjcmVlbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwcmV2Iiwic3R5bGVzIiwi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TSxDQUFDRSxLQUF2QjtBQUFBLDhCQUNFLHNFQUFDLDZEQUFEO0FBQXNCLGFBQUssRUFBQyxhQUE1QjtBQUEwQyxhQUFLLEVBQUVyQyxLQUFqRDtBQUF3RCxhQUFLLEVBQUVXO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHNFQUFDLHNEQUFEO0FBQUEsK0JBQ0Usc0VBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZ0JBQU0sTUFBbEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHNFQUFDLDBEQUFEO0FBQ0UsaUJBQUssRUFBRXpCLEdBRFQ7QUFFRSxvQkFBUSxFQUFFRSxRQUZaO0FBR0UsbUJBQU8sRUFBRXBCLFVBSFg7QUFJRSx1QkFBVyxFQUFDLFlBSmQ7QUFLRSxtQkFBTyxNQUxUO0FBTUUscUJBQVM7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQWtCRSxzRUFBQyw0REFBRDtBQUFxQixVQUFJLEVBQUV1QixJQUEzQjtBQUFpQyxXQUFLLEVBQUVTLEtBQXhDO0FBQStDLFdBQUssRUFBRW1CO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0FyRUQ7O0dBQU1uQyx1QjtVQW9CMkIwQiw0RDs7O0tBcEIzQjFCLHVCO0FBdUVTQSxzRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuMDY0OGFiM2YxODMzZTMzY2U1MDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEcm9wZG93biwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgbGlmZUV4cGVjdGFuY3kgZnJvbSAnLi4vLi4vc3RvcmUvbGlmZS1leHBlY3RhbmN5Lmpzb24nXHJcbmltcG9ydCB7IEF2ZXJhZ2VMaWZlWWVhcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hdmVyYWdlTGlmZVllYXJzJ1xyXG5pbXBvcnQgeyBTZXggfSBmcm9tICcuLi8uLi90eXBlcy9zZXgnXHJcbmltcG9ydCB1c2VCcmVha3BvaW50LCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VCcmVha3BvaW50J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lDaGFydCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUxlZ2VuZCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5TGVnZW5kJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IHNleE9wdGlvbnMgPSBbXHJcbiAgeyBrZXk6IDAsIHZhbHVlOiBTZXguQm90aCwgdGV4dDogJ0JvdGgnIH0sXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBTZXguTWFuLCB0ZXh0OiAnTWFuJyB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogU2V4LldvbWFuLCB0ZXh0OiAnV29tYW4nIH0sXHJcbl1cclxuXHJcbnR5cGUgQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW2tleSBpbiBrZXlvZiB0eXBlb2YgQnJlYWtwb2ludF0/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3Qgd2lkdGhCeUJyZWFrcG9pbnQ6IEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtCcmVha3BvaW50LlhTbWFsbF06IDI4MCxcclxuICBbQnJlYWtwb2ludC5TbWFsbF06IDUyMCxcclxuICBbQnJlYWtwb2ludC5NZWRpdW1dOiA3MjAsXHJcbiAgW0JyZWFrcG9pbnQuTGFyZ2VdOiA5MzAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFMYXJnZV06IDExMDAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFFeHRyYUxhcmdlXTogMTEwMCxcclxufVxyXG5cclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NleCwgc2V0U2V4XSA9IHVzZVN0YXRlPFNleD4oU2V4LkJvdGgpXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSwgeyB2YWx1ZSB9KSA9PiBzZXRTZXgodmFsdWUpLCBbXSlcclxuXHJcbiAgY29uc3QgZGF0YTogTWFwPHN0cmluZywgbnVtYmVyPiA9IHVzZU1lbW8oKCkgPT4gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oXHJcbiAgICBsaWZlRXhwZWN0YW5jeS5yZWR1Y2UoKGFjYzogW3N0cmluZywgbnVtYmVyXVtdLCBjdXI6IEF2ZXJhZ2VMaWZlWWVhcnMpID0+IHtcclxuICAgICAgYWNjLnB1c2goW2N1ci5jb2RlLCBjdXJbc2V4XV0pXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKVxyXG4gICksIFtzZXhdKVxyXG5cclxuICBjb25zdCBjb2xvcjogZDMuU2NhbGVTZXF1ZW50aWFsPHN0cmluZywgJyNmMmYyZjInPiA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZG9tYWluQnkgPSBkMy5leHRlbnQoQXJyYXkuZnJvbShkYXRhLnZhbHVlcygpKSlcclxuXHJcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKClcclxuICAgICAgLmRvbWFpbihkb21haW5CeSBhcyBbbnVtYmVyLCBudW1iZXJdKVxyXG4gICAgICAuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmRCdSlcclxuICAgICAgLnVua25vd24oJyNmMmYyZjInKVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgY29uc3QgYnJlYWtwb2ludDogQnJlYWtwb2ludCA9IHVzZUJyZWFrcG9pbnQoKVxyXG4gIGNvbnN0IGF2YWlsYWJsZUxlZ2VuZFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSBicmVha3BvaW50ID09PSBCcmVha3BvaW50LlhTbWFsbCA/IHdpZHRoQnlCcmVha3BvaW50W0JyZWFrcG9pbnQuWFNtYWxsXSA6IHVuZGVmaW5lZFxyXG4gIGNvbnN0IGF2YWlsYWJsZUNoYXJ0V2lkdGg6IG51bWJlciA9IHdpZHRoQnlCcmVha3BvaW50W2JyZWFrcG9pbnRdIVxyXG5cclxuICBjb25zdCBmdWxsc2NyZWVuQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IGZ1bGxzY3JlZW5CdXR0b25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgW2lzRnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgY29uc3QgW2NoYXJ0V2lkdGgsIHNldENoYXJ0V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPihhdmFpbGFibGVDaGFydFdpZHRoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiAoXHJcbiAgICBzZXRDaGFydFdpZHRoKGlzRnVsbHNjcmVlbiAmJiBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IGF2YWlsYWJsZUNoYXJ0V2lkdGgpXHJcbiAgKSwgW2lzRnVsbHNjcmVlbl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICYmIGlzRnVsbHNjcmVlbikge1xyXG4gICAgICBmdWxsc2NyZWVuQ29udGFpbmVyUmVmLmN1cnJlbnQhLnJlcXVlc3RGdWxsc2NyZWVuKCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBhbGVydChgRXJyb3IgYXR0ZW1wdGluZyB0byBlbmFibGUgZnVsbC1zY3JlZW4gbW9kZTogJHtlcnIubWVzc2FnZX0gKCR7ZXJyLm5hbWV9KWApO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRnVsbHNjcmVlbl0pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZUZ1bGxzY3JlZW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRGdWxsc2NyZWVuKHByZXYgPT4gIXByZXYpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiByZWY9e2Z1bGxzY3JlZW5Db250YWluZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxidXR0b24gcmVmPXtmdWxsc2NyZWVuQnV0dG9uUmVmfSBvbkNsaWNrPXt0b2dnbGVGdWxsc2NyZWVufT5GdWxsc2NyZWVuPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFuZWx9PlxyXG4gICAgICAgIDxMaWZlRXhwZWN0YW5jeUxlZ2VuZCB0aXRsZT1cIkFnZSAoeWVhcnMpXCIgY29sb3I9e2NvbG9yfSB3aWR0aD17YXZhaWxhYmxlTGVnZW5kV2lkdGh9IC8+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc2V4PC9sYWJlbD5cclxuICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NleH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c2V4T3B0aW9uc31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IHNleCdcclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpZmVFeHBlY3RhbmN5Q2hhcnQgZGF0YT17ZGF0YX0gY29sb3I9e2NvbG9yfSB3aWR0aD17Y2hhcnRXaWR0aH0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==