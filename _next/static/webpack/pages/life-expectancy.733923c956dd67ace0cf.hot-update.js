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
    setChartWidth(widthByBreakpoint[breakpoint]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwid2lkdGhCeUJyZWFrcG9pbnQiLCJCcmVha3BvaW50IiwiWFNtYWxsIiwiU21hbGwiLCJNZWRpdW0iLCJMYXJnZSIsIkV4dHJhTGFyZ2UiLCJFeHRyYUV4dHJhTGFyZ2UiLCJMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsInVzZVN0YXRlIiwic2V4Iiwic2V0U2V4Iiwib25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJkYXRhIiwidXNlTWVtbyIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJjb2xvciIsImRvbWFpbkJ5IiwiZDMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJ1bmtub3duIiwiYnJlYWtwb2ludCIsInVzZUJyZWFrcG9pbnQiLCJhdmFpbGFibGVMZWdlbmRXaWR0aCIsInVuZGVmaW5lZCIsImF2YWlsYWJsZUNoYXJ0V2lkdGgiLCJjaGFydFdpZHRoIiwic2V0Q2hhcnRXaWR0aCIsImZ1bGxzY3JlZW5Db250YWluZXJSZWYiLCJ1c2VSZWYiLCJpc0Z1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuRWxlbWVudCIsImN1cnJlbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIm5hbWUiLCJleGl0RnVsbHNjcmVlbiIsImhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwcmV2Iiwic3R5bGVzIiwiY29udGFpbmVyIiwicGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDQyxJQUFyQjtBQUEyQkMsTUFBSSxFQUFFO0FBQWpDLENBRGlCLEVBRWpCO0FBQUVKLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFBRUMsOENBQUcsQ0FBQ0csR0FBckI7QUFBMEJELE1BQUksRUFBRTtBQUFoQyxDQUZpQixFQUdqQjtBQUFFSixLQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFLLEVBQUVDLDhDQUFHLENBQUNJLEtBQXJCO0FBQTRCRixNQUFJLEVBQUU7QUFBbEMsQ0FIaUIsQ0FBbkI7QUFVQSxJQUFNRyxpQkFBdUMsMklBQzFDQywrREFBVSxDQUFDQyxNQUQrQixFQUN0QixHQURzQixpSEFFMUNELCtEQUFVLENBQUNFLEtBRitCLEVBRXZCLEdBRnVCLGlIQUcxQ0YsK0RBQVUsQ0FBQ0csTUFIK0IsRUFHdEIsR0FIc0IsaUhBSTFDSCwrREFBVSxDQUFDSSxLQUorQixFQUl2QixHQUp1QixpSEFLMUNKLCtEQUFVLENBQUNLLFVBTCtCLEVBS2xCLElBTGtCLGlIQU0xQ0wsK0RBQVUsQ0FBQ00sZUFOK0IsRUFNYixJQU5hLHNCQUE3Qzs7QUFTQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBTWQsOENBQUcsQ0FBQ0MsSUFBVixDQURNO0FBQUEsTUFDN0JjLEdBRDZCO0FBQUEsTUFDeEJDLE1BRHdCOztBQUVwQyxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRDtB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QUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQWVFLHNFQUFDLHdEQUFEO0FBQVEsbUJBQU8sRUFBRXFFLGdCQUFqQjtBQUFtQyxnQkFBSSxNQUF2QztBQUFBLG1DQUNFLHNFQUFDLHNEQUFEO0FBQU0sa0JBQUksRUFBRW5CLFlBQVksR0FBRyxVQUFILEdBQWdCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF3QkUsc0VBQUMsNERBQUQ7QUFBcUIsVUFBSSxFQUFFM0IsSUFBM0I7QUFBaUMsV0FBSyxFQUFFUyxLQUF4QztBQUErQyxXQUFLLEVBQUVjO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0EzRkQ7O0dBQU05Qix1QjtVQW9CMkIwQiw0RDs7O0tBcEIzQjFCLHVCO0FBNkZTQSxzRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuNzMzOTIzYzk1NmRkNjdhY2UwY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEcm9wZG93biwgRm9ybSwgQnV0dG9uLCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsaWZlRXhwZWN0YW5jeSBmcm9tICcuLi8uLi9zdG9yZS9saWZlLWV4cGVjdGFuY3kuanNvbidcclxuaW1wb3J0IHsgQXZlcmFnZUxpZmVZZWFycyB9IGZyb20gJy4uLy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uLy4uL3R5cGVzL3NleCdcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQsIHsgQnJlYWtwb2ludCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUJyZWFrcG9pbnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUNoYXJ0IGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5TGVnZW5kIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lMZWdlbmQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgc2V4T3B0aW9ucyA9IFtcclxuICB7IGtleTogMCwgdmFsdWU6IFNleC5Cb3RoLCB0ZXh0OiAnQm90aCcgfSxcclxuICB7IGtleTogMSwgdmFsdWU6IFNleC5NYW4sIHRleHQ6ICdNYW4nIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBTZXguV29tYW4sIHRleHQ6ICdXb21hbicgfSxcclxuXVxyXG5cclxudHlwZSBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBba2V5IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XT86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCB3aWR0aEJ5QnJlYWtwb2ludDogQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW0JyZWFrcG9pbnQuWFNtYWxsXTogMjgwLFxyXG4gIFtCcmVha3BvaW50LlNtYWxsXTogNTIwLFxyXG4gIFtCcmVha3BvaW50Lk1lZGl1bV06IDcyMCxcclxuICBbQnJlYWtwb2ludC5MYXJnZV06IDkzMCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUxhcmdlXTogMTEwMCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUV4dHJhTGFyZ2VdOiAxMTAwLFxyXG59XHJcblxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGU8U2V4PihTZXguQm90aClcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCB7IHZhbHVlIH0pID0+IHNldFNleCh2YWx1ZSksIFtdKVxyXG5cclxuICBjb25zdCBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihcclxuICAgIGxpZmVFeHBlY3RhbmN5LnJlZHVjZSgoYWNjOiBbc3RyaW5nLCBudW1iZXJdW10sIGN1cjogQXZlcmFnZUxpZmVZZWFycykgPT4ge1xyXG4gICAgICBhY2MucHVzaChbY3VyLmNvZGUsIGN1cltzZXhdXSlcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pXHJcbiAgKSwgW3NleF0pXHJcblxyXG4gIGNvbnN0IGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBkb21haW5CeSA9IGQzLmV4dGVudChBcnJheS5mcm9tKGRhdGEudmFsdWVzKCkpKVxyXG5cclxuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbkJ5IGFzIFtudW1iZXIsIG51bWJlcl0pXHJcbiAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSZEJ1KVxyXG4gICAgICAudW5rbm93bignI2YyZjJmMicpXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBjb25zdCBicmVha3BvaW50OiBCcmVha3BvaW50ID0gdXNlQnJlYWtwb2ludCgpXHJcbiAgY29uc3QgYXZhaWxhYmxlTGVnZW5kV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCA9IGJyZWFrcG9pbnQgPT09IEJyZWFrcG9pbnQuWFNtYWxsID8gd2lkdGhCeUJyZWFrcG9pbnRbQnJlYWtwb2ludC5YU21hbGxdIDogdW5kZWZpbmVkXHJcbiAgY29uc3QgYXZhaWxhYmxlQ2hhcnRXaWR0aDogbnVtYmVyID0gd2lkdGhCeUJyZWFrcG9pbnRbYnJlYWtwb2ludF0hXHJcbiAgY29uc3QgW2NoYXJ0V2lkdGgsIHNldENoYXJ0V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPihhdmFpbGFibGVDaGFydFdpZHRoKVxyXG5cclxuICBjb25zdCBmdWxsc2NyZWVuQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtpc0Z1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDaGFydFdpZHRoKHdpZHRoQnlCcmVha3BvaW50W2JyZWFrcG9pbnRdISlcclxuICB9LCBbYXZhaWxhYmxlQ2hhcnRXaWR0aF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNGdWxsc2NyZWVuICYmICFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICBmdWxsc2NyZWVuQ29udGFpbmVyUmVmLmN1cnJlbnQhXHJcbiAgICAgICAgLnJlcXVlc3RGdWxsc2NyZWVuKClcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGFsZXJ0KGBFcnJvciBhdHRlbXB0aW5nIHRvIGVuYWJsZSBmdWxsLXNjcmVlbiBtb2RlOiAke2Vyci5tZXNzYWdlfSAoJHtlcnIubmFtZX0pYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRnVsbHNjcmVlbl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVGdWxsc2NyZWVuY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBzZXRDaGFydFdpZHRoKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogYXZhaWxhYmxlQ2hhcnRXaWR0aClcclxuICAgICAgc2V0RnVsbHNjcmVlbighIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KVxyXG4gICAgICBjb25zb2xlLmxvZygnaGFuZGxlRnVsbHNjcmVlbmNoYW5nZScsIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIGF2YWlsYWJsZUNoYXJ0V2lkdGgpO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlRnVsbHNjcmVlbmNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFthdmFpbGFibGVDaGFydFdpZHRoXSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlRnVsbHNjcmVlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZ1bGxzY3JlZW4ocHJldiA9PiAhcHJldilcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHJlZj17ZnVsbHNjcmVlbkNvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBpbmxpbmUgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IHdpZHRoPXthdmFpbGFibGVMZWdlbmRXaWR0aH0gLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHNleDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2V4fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17c2V4T3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWxlY3Qgc2V4J1xyXG4gICAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZ1bGxzY3JlZW59IGljb24+XHJcbiAgICAgICAgICAgICAgPEljb24gbmFtZT17aXNGdWxsc2NyZWVuID8gJ2NvbXByZXNzJyA6ICdleHBhbmQnfSAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGlmZUV4cGVjdGFuY3lDaGFydCBkYXRhPXtkYXRhfSBjb2xvcj17Y29sb3J9IHdpZHRoPXtjaGFydFdpZHRofSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9