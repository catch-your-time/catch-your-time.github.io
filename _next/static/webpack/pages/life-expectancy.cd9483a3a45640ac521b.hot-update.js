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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGgiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjb250YWluZXIiLCJwYW5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUFFQyxLQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFLLEVBQUVDLDhDQUFHLENBQUNDLElBQXJCO0FBQTJCQyxNQUFJLEVBQUU7QUFBakMsQ0FEaUIsRUFFakI7QUFBRUosS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDRyxHQUFyQjtBQUEwQkQsTUFBSSxFQUFFO0FBQWhDLENBRmlCLEVBR2pCO0FBQUVKLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFBRUMsOENBQUcsQ0FBQ0ksS0FBckI7QUFBNEJGLE1BQUksRUFBRTtBQUFsQyxDQUhpQixDQUFuQjtBQVVBLElBQU1HLEtBQTJCLG1IQUM5QkMsK0RBQVUsQ0FBQ0MsTUFEbUIsRUFDVixHQURVLHFHQUU5QkQsK0RBQVUsQ0FBQ0UsS0FGbUIsRUFFWCxHQUZXLHFHQUc5QkYsK0RBQVUsQ0FBQ0csTUFIbUIsRUFHVixHQUhVLHFHQUk5QkgsK0RBQVUsQ0FBQ0ksS0FKbUIsRUFJWCxHQUpXLHFHQUs5QkosK0RBQVUsQ0FBQ0ssVUFMbUIsRUFLTixJQUxNLHFHQU05QkwsK0RBQVUsQ0FBQ00sZUFObUIsRUFNRCxJQU5DLFVBQWpDOztBQVNBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFNZCw4Q0FBRyxDQUFDQyxJQUFWLENBRE07QUFBQSxNQUM3QmMsR0FENkI7QUFBQSxNQUN4QkMsTUFEd0I7O0FBRXBDLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFEO0FBQUEsUUFBTXBCLEtBQU4sUUFBTUEsS0FBTjtBQUFBLFdBQWtCaUIsTUFBTSxDQUFDakIsS0FBRCxDQUF4QjtBQUFBLEdBQUQsRUFBa0MsRUFBbEMsQ0FBNUI7QUFFQSxNQUFNcUIsSUFBeUIsR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU0sSUFBSUMsR0FBSixDQUM5Q0Msd0RBQWMsQ0FBQ0MsTUFBZixDQUFzQixVQUFDQyxHQUFELEVBQTBCQyxHQUExQixFQUFvRDtBQUN4RUQsU0FBRyxDQUFDRSxJQUFKLENBQVMsQ0FBQ0QsR0FBRyxDQUFDRSxJQUFMLEVBQVdGLEdBQUcsQ0FBQ1gsR0FBRCxDQUFkLENBQVQ7QUFDQSxhQUFPVSxHQUFQO0FBQ0QsS0FIRCxFQUdHLEVBSEgsQ0FEOEMsQ0FBTjtBQUFBLEdBQUQsRUFLdEMsQ0FBQ1YsR0FBRCxDQUxzQyxDQUF6QztBQU9BLE1BQU1jLEtBQTRDLEdBQUdSLHFEQUFPLENBQUMsWUFBTTtBQUNqRSxRQUFNUyxRQUFRLEdBQUdDLHlDQUFBLENBQVVDLEtBQUssQ0FBQ0MsSUFBTixDQUFXYixJQUFJLENBQUNjLE1BQUwsRUFBWCxDQUFWLENBQWpCO0FBRUEsV0FBT0gsa0RBQUEsR0FDSkksTUFESSxDQUNHTCxRQURILEVBRUpNLFlBRkksQ0FFU0wsa0RBRlQsRUFHSk0sT0FISSxDQUdJLFNBSEosQ0FBUDtBQUlELEdBUDJELEVBT3pELENBQUNqQixJQUFELENBUHlELENBQTVEO0FBU0EsTUFBTWtCLFVBQVUsR0FBR0Msb0VBQWEsRUFBaEM7QUFFQSxNQUFNQyxjQUFjLEdBQUduQyxLQUFLLENBQUNpQyxVQUFELENBQTVCO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLGNBQVUsRUFBVkEsVUFBRjtBQUFjRSxrQkFBYyxFQUFkQTtBQUFkLEdBQVo7QUFHQSxzQkFDRTtBQUFTLGFBQVMsRUFBRUcsdUVBQU0sQ0FBQ0MsU0FBM0I7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsdUVBQU0sQ0FBQ0UsS0FBdkI7QUFBQSw4QkFDRSxzRUFBQyw2REFBRDtBQUFzQixhQUFLLEVBQUMsYUFBNUI7QUFBMEMsYUFBSyxFQUFFaEI7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsc0VBQUMsc0RBQUQ7QUFBQSwrQkFDRSxzRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxnQkFBTSxNQUFsQjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsc0VBQUMsMERBQUQ7QUFDRSxpQkFBSyxFQUFFZCxHQURUO0FBRUUsb0JBQVEsRUFBRUUsUUFGWjtBQUdFLG1CQUFPLEVBQUVwQixVQUhYO0FBSUUsdUJBQVcsRUFBQyxZQUpkO0FBS0UsbUJBQU8sTUFMVDtBQU1FLHFCQUFTO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFpQkUsc0VBQUMsNERBQUQ7QUFBcUIsVUFBSSxFQUFFdUIsSUFBM0I7QUFBaUMsV0FBSyxFQUFFUyxLQUF4QztBQUErQyxXQUFLLEVBQUVXO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0EvQ0Q7O0dBQU0zQix1QjtVQW9CZTBCLDREOzs7S0FwQmYxQix1QjtBQWlEU0Esc0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LmNkOTQ4M2EzYTQ1NjQwYWM1MjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEcm9wZG93biwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgbGlmZUV4cGVjdGFuY3kgZnJvbSAnLi4vLi4vc3RvcmUvbGlmZS1leHBlY3RhbmN5Lmpzb24nXHJcbmltcG9ydCB7IEF2ZXJhZ2VMaWZlWWVhcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hdmVyYWdlTGlmZVllYXJzJ1xyXG5pbXBvcnQgeyBTZXggfSBmcm9tICcuLi8uLi90eXBlcy9zZXgnXHJcbmltcG9ydCB1c2VCcmVha3BvaW50LCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VCcmVha3BvaW50J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lDaGFydCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lMZWdlbmQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUxlZ2VuZCdcclxuXHJcbmNvbnN0IHNleE9wdGlvbnMgPSBbXHJcbiAgeyBrZXk6IDAsIHZhbHVlOiBTZXguQm90aCwgdGV4dDogJ0JvdGgnIH0sXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBTZXguTWFuLCB0ZXh0OiAnTWFuJyB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogU2V4LldvbWFuLCB0ZXh0OiAnV29tYW4nIH0sXHJcbl1cclxuXHJcbnR5cGUgQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW2tleSBpbiBrZXlvZiB0eXBlb2YgQnJlYWtwb2ludF0/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3Qgd2lkdGg6IEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtCcmVha3BvaW50LlhTbWFsbF06IDI4MCxcclxuICBbQnJlYWtwb2ludC5TbWFsbF06IDUyMCxcclxuICBbQnJlYWtwb2ludC5NZWRpdW1dOiA3MjAsXHJcbiAgW0JyZWFrcG9pbnQuTGFyZ2VdOiA5NTAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFMYXJnZV06IDExNjAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFFeHRyYUxhcmdlXTogMTM2MCxcclxufVxyXG5cclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NleCwgc2V0U2V4XSA9IHVzZVN0YXRlPFNleD4oU2V4LkJvdGgpXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSwgeyB2YWx1ZSB9KSA9PiBzZXRTZXgodmFsdWUpLCBbXSlcclxuXHJcbiAgY29uc3QgZGF0YTogTWFwPHN0cmluZywgbnVtYmVyPiA9IHVzZU1lbW8oKCkgPT4gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oXHJcbiAgICBsaWZlRXhwZWN0YW5jeS5yZWR1Y2UoKGFjYzogW3N0cmluZywgbnVtYmVyXVtdLCBjdXI6IEF2ZXJhZ2VMaWZlWWVhcnMpID0+IHtcclxuICAgICAgYWNjLnB1c2goW2N1ci5jb2RlLCBjdXJbc2V4XV0pXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKVxyXG4gICksIFtzZXhdKVxyXG5cclxuICBjb25zdCBjb2xvcjogZDMuU2NhbGVTZXF1ZW50aWFsPHN0cmluZywgJyNmMmYyZjInPiA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZG9tYWluQnkgPSBkMy5leHRlbnQoQXJyYXkuZnJvbShkYXRhLnZhbHVlcygpKSlcclxuXHJcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKClcclxuICAgICAgLmRvbWFpbihkb21haW5CeSBhcyBbbnVtYmVyLCBudW1iZXJdKVxyXG4gICAgICAuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmRCdSlcclxuICAgICAgLnVua25vd24oJyNmMmYyZjInKVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgY29uc3QgYnJlYWtwb2ludCA9IHVzZUJyZWFrcG9pbnQoKVxyXG5cclxuICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IHdpZHRoW2JyZWFrcG9pbnRdXHJcbiAgY29uc29sZS5sb2coeyBicmVha3BvaW50LCBhdmFpbGFibGVXaWR0aCB9KTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFuZWx9PlxyXG4gICAgICAgIDxMaWZlRXhwZWN0YW5jeUxlZ2VuZCB0aXRsZT1cIkFnZSAoeWVhcnMpXCIgY29sb3I9e2NvbG9yfSAvPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHNleDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXh9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NleE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBzZXgnXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaWZlRXhwZWN0YW5jeUNoYXJ0IGRhdGE9e2RhdGF9IGNvbG9yPXtjb2xvcn0gd2lkdGg9e2F2YWlsYWJsZVdpZHRofSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9