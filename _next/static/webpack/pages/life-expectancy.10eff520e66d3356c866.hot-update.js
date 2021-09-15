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
    setChartWidth(availableChartWidth);
  }, [availableChartWidth]);
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
      console.log('handleFullscreenchange', document.fullscreenElement, document.documentElement.clientWidth, availableChartWidth);
    };

    document.addEventListener('fullscreenchange', handleFullscreenchange);
    return function () {
      document.removeEventListener('fullscreenchange', handleFullscreenchange);
    };
  }, [availableChartWidth]);
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          inline: true,
          widths: "equal",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "Age (years)",
              color: color,
              width: availableLegendWidth
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
              children: "Select sex"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
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
              lineNumber: 104,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            onClick: toggleFullscreen,
            icon: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              name: isFullscreen ? 'compress' : 'expand'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: chartWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "6Kca0W80uty2Uo8VxepK6T2/Ffc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGhCeUJyZWFrcG9pbnQiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVMZWdlbmRXaWR0aCIsInVuZGVmaW5lZCIsImF2YWlsYWJsZUNoYXJ0V2lkdGgiLCJjaGFydFdpZHRoIiwic2V0Q2hhcnRXaWR0aCIsImZ1bGxzY3JlZW5Db250YWluZXJSZWYiLCJ1c2VSZWYiLCJpc0Z1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuRWxlbWVudCIsImN1cnJlbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIm5hbWUiLCJleGl0RnVsbHNjcmVlbiIsImhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwcmV2Iiwic3R5bGVzIiwiY29udGFpbmVyIiwicGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDQyxJQUFyQjtBQUEyQkMsTUFBSSxFQUFFO0FBQWpDLENBRGlCLEVBRWpCO0FBQUVKLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFBRUMsOENBQUcsQ0FBQ0csR0FBckI7QUFBMEJELE1BQUksRUFBRTtBQUFoQyxDQUZpQixFQUdqQjtBQUFFSixLQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFLLEVBQUVDLDhDQUFHLENBQUNJLEtBQXJCO0FBQTRCRixNQUFJLEVBQUU7QUFBbEMsQ0FIaUIsQ0FBbkI7QUFVQSxJQUFNRyxpQkFBdUMsMklBQzFDQywrREFBVSxDQUFDQyxNQUQrQixFQUN0QixHQURzQixpSEFFMUNELCtEQUFVLENBQUNFLEtBRitCLEVBRXZCLEdBRnVCLGlIQUcxQ0YsK0RBQVUsQ0FBQ0csTUFIK0IsRUFHdEIsR0FIc0IsaUhBSTFDSCwrREFBVSxDQUFDSSxLQUorQixFQUl2QixHQUp1QixpSEFLMUNKLCtEQUFVLENBQUNLLFVBTCtCLEVBS2xCLElBTGtCLGlIQU0xQ0wsK0RBQVUsQ0FBQ00sZUFOK0IsRUFNYixJQU5hLHNCQUE3Qzs7QUFTQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBTWQsOENBQUcsQ0FBQ0MsSUFBVixDQURNO0FBQUEsTUFDN0JjLEdBRDZCO0FBQUEsTUFDeEJDLE1BRHdCOztBQUVwQyxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRDtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFlRSxzRUFBQyx3REFBRDtBQUFRLG1CQUFPLEVBQUVxRSxnQkFBakI7QUFBbUMsZ0JBQUksTUFBdkM7QUFBQSxtQ0FDRSxzRUFBQyxzREFBRDtBQUFNLGtCQUFJLEVBQUVuQixZQUFZLEdBQUcsVUFBSCxHQUFnQjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBd0JFLHNFQUFDLDREQUFEO0FBQXFCLFVBQUksRUFBRTNCLElBQTNCO0FBQWlDLFdBQUssRUFBRVMsS0FBeEM7QUFBK0MsV0FBSyxFQUFFYztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBM0ZEOztHQUFNOUIsdUI7VUFvQjJCMEIsNEQ7OztLQXBCM0IxQix1QjtBQTZGU0Esc0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LjEwZWZmNTIwZTY2ZDMzNTZjODY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRHJvcGRvd24sIEZvcm0sIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgbGlmZUV4cGVjdGFuY3kgZnJvbSAnLi4vLi4vc3RvcmUvbGlmZS1leHBlY3RhbmN5Lmpzb24nXHJcbmltcG9ydCB7IEF2ZXJhZ2VMaWZlWWVhcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hdmVyYWdlTGlmZVllYXJzJ1xyXG5pbXBvcnQgeyBTZXggfSBmcm9tICcuLi8uLi90eXBlcy9zZXgnXHJcbmltcG9ydCB1c2VCcmVha3BvaW50LCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VCcmVha3BvaW50J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lDaGFydCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUxlZ2VuZCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5TGVnZW5kJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IHNleE9wdGlvbnMgPSBbXHJcbiAgeyBrZXk6IDAsIHZhbHVlOiBTZXguQm90aCwgdGV4dDogJ0JvdGgnIH0sXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBTZXguTWFuLCB0ZXh0OiAnTWFuJyB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogU2V4LldvbWFuLCB0ZXh0OiAnV29tYW4nIH0sXHJcbl1cclxuXHJcbnR5cGUgQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW2tleSBpbiBrZXlvZiB0eXBlb2YgQnJlYWtwb2ludF0/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3Qgd2lkdGhCeUJyZWFrcG9pbnQ6IEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtCcmVha3BvaW50LlhTbWFsbF06IDI4MCxcclxuICBbQnJlYWtwb2ludC5TbWFsbF06IDUyMCxcclxuICBbQnJlYWtwb2ludC5NZWRpdW1dOiA3MjAsXHJcbiAgW0JyZWFrcG9pbnQuTGFyZ2VdOiA5MzAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFMYXJnZV06IDExMDAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFFeHRyYUxhcmdlXTogMTEwMCxcclxufVxyXG5cclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NleCwgc2V0U2V4XSA9IHVzZVN0YXRlPFNleD4oU2V4LkJvdGgpXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSwgeyB2YWx1ZSB9KSA9PiBzZXRTZXgodmFsdWUpLCBbXSlcclxuXHJcbiAgY29uc3QgZGF0YTogTWFwPHN0cmluZywgbnVtYmVyPiA9IHVzZU1lbW8oKCkgPT4gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oXHJcbiAgICBsaWZlRXhwZWN0YW5jeS5yZWR1Y2UoKGFjYzogW3N0cmluZywgbnVtYmVyXVtdLCBjdXI6IEF2ZXJhZ2VMaWZlWWVhcnMpID0+IHtcclxuICAgICAgYWNjLnB1c2goW2N1ci5jb2RlLCBjdXJbc2V4XV0pXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKVxyXG4gICksIFtzZXhdKVxyXG5cclxuICBjb25zdCBjb2xvcjogZDMuU2NhbGVTZXF1ZW50aWFsPHN0cmluZywgJyNmMmYyZjInPiA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZG9tYWluQnkgPSBkMy5leHRlbnQoQXJyYXkuZnJvbShkYXRhLnZhbHVlcygpKSlcclxuXHJcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKClcclxuICAgICAgLmRvbWFpbihkb21haW5CeSBhcyBbbnVtYmVyLCBudW1iZXJdKVxyXG4gICAgICAuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmRCdSlcclxuICAgICAgLnVua25vd24oJyNmMmYyZjInKVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgY29uc3QgYnJlYWtwb2ludDogQnJlYWtwb2ludCA9IHVzZUJyZWFrcG9pbnQoKVxyXG4gIGNvbnN0IGF2YWlsYWJsZUxlZ2VuZFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSBicmVha3BvaW50ID09PSBCcmVha3BvaW50LlhTbWFsbCA/IHdpZHRoQnlCcmVha3BvaW50W0JyZWFrcG9pbnQuWFNtYWxsXSA6IHVuZGVmaW5lZFxyXG4gIGNvbnN0IGF2YWlsYWJsZUNoYXJ0V2lkdGg6IG51bWJlciA9IHdpZHRoQnlCcmVha3BvaW50W2JyZWFrcG9pbnRdIVxyXG4gIGNvbnN0IFtjaGFydFdpZHRoLCBzZXRDaGFydFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oYXZhaWxhYmxlQ2hhcnRXaWR0aClcclxuXHJcbiAgY29uc3QgZnVsbHNjcmVlbkNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcclxuICBjb25zdCBbaXNGdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q2hhcnRXaWR0aChhdmFpbGFibGVDaGFydFdpZHRoKVxyXG4gIH0sIFthdmFpbGFibGVDaGFydFdpZHRoXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0Z1bGxzY3JlZW4gJiYgIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgIGZ1bGxzY3JlZW5Db250YWluZXJSZWYuY3VycmVudCFcclxuICAgICAgICAucmVxdWVzdEZ1bGxzY3JlZW4oKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoYEVycm9yIGF0dGVtcHRpbmcgdG8gZW5hYmxlIGZ1bGwtc2NyZWVuIG1vZGU6ICR7ZXJyLm1lc3NhZ2V9ICgke2Vyci5uYW1lfSlgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9LCBbaXNGdWxsc2NyZWVuXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldENoYXJ0V2lkdGgoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBhdmFpbGFibGVDaGFydFdpZHRoKVxyXG4gICAgICBzZXRGdWxsc2NyZWVuKCEhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVGdWxsc2NyZWVuY2hhbmdlJywgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgYXZhaWxhYmxlQ2hhcnRXaWR0aCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBoYW5kbGVGdWxsc2NyZWVuY2hhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlRnVsbHNjcmVlbmNoYW5nZSk7XHJcbiAgICB9XHJcbiAgfSwgW2F2YWlsYWJsZUNoYXJ0V2lkdGhdKVxyXG5cclxuICBjb25zdCB0b2dnbGVGdWxsc2NyZWVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RnVsbHNjcmVlbihwcmV2ID0+ICFwcmV2KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gcmVmPXtmdWxsc2NyZWVuQ29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhbmVsfT5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGlubGluZSB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8TGlmZUV4cGVjdGFuY3lMZWdlbmQgdGl0bGU9XCJBZ2UgKHllYXJzKVwiIGNvbG9yPXtjb2xvcn0gd2lkdGg9e2F2YWlsYWJsZUxlZ2VuZFdpZHRofSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc2V4PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZXh9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtzZXhPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBzZXgnXHJcbiAgICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlRnVsbHNjcmVlbn0gaWNvbj5cclxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtpc0Z1bGxzY3JlZW4gPyAnY29tcHJlc3MnIDogJ2V4cGFuZCd9IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaWZlRXhwZWN0YW5jeUNoYXJ0IGRhdGE9e2RhdGF9IGNvbG9yPXtjb2xvcn0gd2lkdGg9e2NoYXJ0V2lkdGh9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=