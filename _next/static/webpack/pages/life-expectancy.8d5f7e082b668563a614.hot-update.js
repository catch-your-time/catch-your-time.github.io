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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.panel,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
            className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.legendContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: "Age (years)",
              color: color,
              width: availableLegendWidth
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
              children: "Select sex"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
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
              lineNumber: 105,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            onClick: toggleFullscreen,
            icon: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              name: isFullscreen ? 'compress' : 'expand'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
      lineNumber: 120,
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/lifeExpectancyChart/lifeExpectancyChart.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/lifeExpectancyChart/lifeExpectancyChart.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lifeExpectancyChart_container__1VY6X {\n  margin: 0 auto;\n  background: white;\n}\n\n.lifeExpectancyChart_panel__23elq {\n  display: -moz-box;\n  display: flex;\n  padding: 0 0.5em;\n}\n\n.lifeExpectancyChart_chart__uPak8 {\n  margin: 0 auto 1em;\n}\n\n@media (max-width: 575px) {\n  .lifeExpectancyChart_panel__23elq {\n    -moz-box-orient: vertical;\n    -moz-box-direction: normal;\n         flex-direction: column;\n  }\n\n  .lifeExpectancyChart_legend-container__ulHLS {\n    margin-bottom: 0.5em;\n  }\n}", "",{"version":3,"sources":["webpack://lifeExpectancyChart.module.scss","webpack://../../styles/mixins/_media.scss"],"names":[],"mappings":"AAEA;EACI,cAAA;EACA,iBAAA;AADJ;;AAIA;EACI,iBAAA;EAAA,aAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;AADJ;;ACTE;EDcE;IACI,yBAAA;IAAA,0BAAA;SAAA,sBAAA;EADN;;EAIE;IACI,oBAAA;EADN;AACF","sourcesContent":["@import 'styles/mixins/media';\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    background: white;\r\n}\r\n\r\n.panel {\r\n    display: flex;\r\n    padding: 0 .5em;\r\n}\r\n\r\n.chart {\r\n    margin: 0 auto 1em;\r\n}\r\n\r\n@include x-small {\r\n    .panel {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .legend-container {\r\n        margin-bottom: .5em;\r\n    }\r\n}\r\n","@import 'styles/variables/breakpoints';\r\n\r\n@mixin x-small {\r\n  @media (max-width: $small - 1) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "lifeExpectancyChart_container__1VY6X",
	"panel": "lifeExpectancyChart_panel__23elq",
	"chart": "lifeExpectancyChart_chart__uPak8",
	"legend-container": "lifeExpectancyChart_legend-container__ulHLS"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsic2V4T3B0aW9ucyIsImtleSIsInZhbHVlIiwiU2V4IiwiQm90aCIsInRleHQiLCJNYW4iLCJXb21hbiIsIndpZHRoQnlCcmVha3BvaW50IiwiQnJlYWtwb2ludCIsIlhTbWFsbCIsIlNtYWxsIiwiTWVkaXVtIiwiTGFyZ2UiLCJFeHRyYUxhcmdlIiwiRXh0cmFFeHRyYUxhcmdlIiwiTGlmZUV4cGVjdGFuY3lDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNleCIsInNldFNleCIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwiZGF0YSIsInVzZU1lbW8iLCJNYXAiLCJsaWZlRXhwZWN0YW5jeSIsInJlZHVjZSIsImFjYyIsImN1ciIsInB1c2giLCJjb2RlIiwiY29sb3IiLCJkb21haW5CeSIsImQzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwidW5rbm93biIsImJyZWFrcG9pbnQiLCJ1c2VCcmVha3BvaW50IiwiYXZhaWxhYmxlTGVnZW5kV2lkdGgiLCJ1bmRlZmluZWQiLCJhdmFpbGFibGVDaGFydFdpZHRoIiwiY2hhcnRXaWR0aCIsInNldENoYXJ0V2lkdGgiLCJmdWxsc2NyZWVuQ29udGFpbmVyUmVmIiwidXNlUmVmIiwiaXNGdWxsc2NyZWVuIiwic2V0RnVsbHNjcmVlbiIsInVzZUVmZmVjdCIsImhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UiLCJkb2N1bWVudCIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJuYW1lIiwiZXhpdEZ1bGxzY3JlZW4iLCJ0b2dnbGVGdWxsc2NyZWVuIiwicHJldiIsInN0eWxlcyIsImNvbnRhaW5lciIsInBhbmVsIiwibGVnZW5kQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFBRUMsOENBQUcsQ0FBQ0MsSUFBckI7QUFBMkJDLE1BQUksRUFBRTtBQUFqQyxDQURpQixFQUVqQjtBQUFFSixLQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFLLEVBQUVDLDhDQUFHLENBQUNHLEdBQXJCO0FBQTBCRCxNQUFJLEVBQUU7QUFBaEMsQ0FGaUIsRUFHakI7QUFBRUosS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDSSxLQUFyQjtBQUE0QkYsTUFBSSxFQUFFO0FBQWxDLENBSGlCLENBQW5CO0FBVUEsSUFBTUcsaUJBQXVDLDJJQUMxQ0MsK0RBQVUsQ0FBQ0MsTUFEK0IsRUFDdEIsR0FEc0IsaUhBRTFDRCwrREFBVSxDQUFDRSxLQUYrQixFQUV2QixHQUZ1QixpSEFHMUNGLCtEQUFVLENBQUNHLE1BSCtCLEVBR3RCLEdBSHNCLGlIQUkxQ0gsK0RBQVUsQ0FBQ0ksS0FKK0IsRUFJdkIsR0FKdUIsaUhBSzFDSiwrREFBVSxDQUFDSyxVQUwrQixFQUtsQixJQUxrQixpSEFNMUNMLCtEQUFVLENBQUNNLGVBTitCLEVBTWIsSUFOYSxzQkFBN0M7O0FBU0EsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQUE7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQU1kLDhDQUFH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QUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLHVEQUF1RCxvQkFBb0IsdUJBQXVCLDBCQUEwQixLQUFLLGdCQUFnQixzQkFBc0Isd0JBQXdCLEtBQUssZ0JBQWdCLDJCQUEyQixLQUFLLDBCQUEwQixnQkFBZ0IsbUNBQW1DLFNBQVMsK0JBQStCLGdDQUFnQyxTQUFTLEtBQUssOENBQThDLHdCQUF3QixzQ0FBc0MsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUI7QUFDdDVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LjhkNWY3ZTA4MmI2Njg1NjNhNjE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRHJvcGRvd24sIEZvcm0sIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgbGlmZUV4cGVjdGFuY3kgZnJvbSAnLi4vLi4vc3RvcmUvbGlmZS1leHBlY3RhbmN5Lmpzb24nXHJcbmltcG9ydCB7IEF2ZXJhZ2VMaWZlWWVhcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hdmVyYWdlTGlmZVllYXJzJ1xyXG5pbXBvcnQgeyBTZXggfSBmcm9tICcuLi8uLi90eXBlcy9zZXgnXHJcbmltcG9ydCB1c2VCcmVha3BvaW50LCB7IEJyZWFrcG9pbnQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VCcmVha3BvaW50J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lDaGFydCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUxlZ2VuZCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5TGVnZW5kJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IHNleE9wdGlvbnMgPSBbXHJcbiAgeyBrZXk6IDAsIHZhbHVlOiBTZXguQm90aCwgdGV4dDogJ0JvdGgnIH0sXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBTZXguTWFuLCB0ZXh0OiAnTWFuJyB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogU2V4LldvbWFuLCB0ZXh0OiAnV29tYW4nIH0sXHJcbl1cclxuXHJcbnR5cGUgQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW2tleSBpbiBrZXlvZiB0eXBlb2YgQnJlYWtwb2ludF0/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3Qgd2lkdGhCeUJyZWFrcG9pbnQ6IEJyZWFrcG9pbnRDaGFydFdpZHRoID0ge1xyXG4gIFtCcmVha3BvaW50LlhTbWFsbF06IDI4MCxcclxuICBbQnJlYWtwb2ludC5TbWFsbF06IDUyMCxcclxuICBbQnJlYWtwb2ludC5NZWRpdW1dOiA3MjAsXHJcbiAgW0JyZWFrcG9pbnQuTGFyZ2VdOiA5MzAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFMYXJnZV06IDExMDAsXHJcbiAgW0JyZWFrcG9pbnQuRXh0cmFFeHRyYUxhcmdlXTogMTEwMCxcclxufVxyXG5cclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NleCwgc2V0U2V4XSA9IHVzZVN0YXRlPFNleD4oU2V4LkJvdGgpXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSwgeyB2YWx1ZSB9KSA9PiBzZXRTZXgodmFsdWUpLCBbXSlcclxuXHJcbiAgY29uc3QgZGF0YTogTWFwPHN0cmluZywgbnVtYmVyPiA9IHVzZU1lbW8oKCkgPT4gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oXHJcbiAgICBsaWZlRXhwZWN0YW5jeS5yZWR1Y2UoKGFjYzogW3N0cmluZywgbnVtYmVyXVtdLCBjdXI6IEF2ZXJhZ2VMaWZlWWVhcnMpID0+IHtcclxuICAgICAgYWNjLnB1c2goW2N1ci5jb2RlLCBjdXJbc2V4XV0pXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKVxyXG4gICksIFtzZXhdKVxyXG5cclxuICBjb25zdCBjb2xvcjogZDMuU2NhbGVTZXF1ZW50aWFsPHN0cmluZywgJyNmMmYyZjInPiA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZG9tYWluQnkgPSBkMy5leHRlbnQoQXJyYXkuZnJvbShkYXRhLnZhbHVlcygpKSlcclxuXHJcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKClcclxuICAgICAgLmRvbWFpbihkb21haW5CeSBhcyBbbnVtYmVyLCBudW1iZXJdKVxyXG4gICAgICAuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmRCdSlcclxuICAgICAgLnVua25vd24oJyNmMmYyZjInKVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgY29uc3QgYnJlYWtwb2ludDogQnJlYWtwb2ludCA9IHVzZUJyZWFrcG9pbnQoKVxyXG4gIGNvbnN0IGF2YWlsYWJsZUxlZ2VuZFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSBicmVha3BvaW50ID09PSBCcmVha3BvaW50LlhTbWFsbCA/IHdpZHRoQnlCcmVha3BvaW50W0JyZWFrcG9pbnQuWFNtYWxsXSA6IHVuZGVmaW5lZFxyXG4gIGNvbnN0IGF2YWlsYWJsZUNoYXJ0V2lkdGg6IG51bWJlciA9IHdpZHRoQnlCcmVha3BvaW50W2JyZWFrcG9pbnRdIVxyXG4gIGNvbnN0IFtjaGFydFdpZHRoLCBzZXRDaGFydFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oYXZhaWxhYmxlQ2hhcnRXaWR0aClcclxuXHJcbiAgY29uc3QgZnVsbHNjcmVlbkNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcclxuICBjb25zdCBbaXNGdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q2hhcnRXaWR0aChhdmFpbGFibGVDaGFydFdpZHRoKVxyXG4gIH0sIFthdmFpbGFibGVDaGFydFdpZHRoXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZ1bGxzY3JlZW5jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldENoYXJ0V2lkdGgoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBhdmFpbGFibGVDaGFydFdpZHRoKVxyXG4gICAgICBzZXRGdWxsc2NyZWVuKCEhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVGdWxsc2NyZWVuY2hhbmdlJywgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgYXZhaWxhYmxlQ2hhcnRXaWR0aCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBoYW5kbGVGdWxsc2NyZWVuY2hhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlRnVsbHNjcmVlbmNoYW5nZSk7XHJcbiAgICB9XHJcbiAgfSwgW2F2YWlsYWJsZUNoYXJ0V2lkdGhdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzRnVsbHNjcmVlbiAmJiAhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgZnVsbHNjcmVlbkNvbnRhaW5lclJlZi5jdXJyZW50IVxyXG4gICAgICAgIC5yZXF1ZXN0RnVsbHNjcmVlbigpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBhbGVydChgRXJyb3IgYXR0ZW1wdGluZyB0byBlbmFibGUgZnVsbC1zY3JlZW4gbW9kZTogJHtlcnIubWVzc2FnZX0gKCR7ZXJyLm5hbWV9KWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0Z1bGxzY3JlZW5dKVxyXG5cclxuICBjb25zdCB0b2dnbGVGdWxsc2NyZWVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RnVsbHNjcmVlbihwcmV2ID0+ICFwcmV2KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gcmVmPXtmdWxsc2NyZWVuQ29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhbmVsfT5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBpbmxpbmUgd2lkdGhzPVwiZXF1YWxcIj4gKi99XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IHdpZHRoPXthdmFpbGFibGVMZWdlbmRXaWR0aH0gLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHNleDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2V4fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17c2V4T3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWxlY3Qgc2V4J1xyXG4gICAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZ1bGxzY3JlZW59IGljb24+XHJcbiAgICAgICAgICAgICAgPEljb24gbmFtZT17aXNGdWxsc2NyZWVuID8gJ2NvbXByZXNzJyA6ICdleHBhbmQnfSAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGlmZUV4cGVjdGFuY3lDaGFydCBkYXRhPXtkYXRhfSBjb2xvcj17Y29sb3J9IHdpZHRoPXtjaGFydFdpZHRofSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDb250YWluZXIiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGlmZUV4cGVjdGFuY3lDaGFydF9jb250YWluZXJfXzFWWTZYIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5saWZlRXhwZWN0YW5jeUNoYXJ0X3BhbmVsX18yM2VscSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDAuNWVtO1xcbn1cXG5cXG4ubGlmZUV4cGVjdGFuY3lDaGFydF9jaGFydF9fdVBhazgge1xcbiAgbWFyZ2luOiAwIGF1dG8gMWVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcXG4gIC5saWZlRXhwZWN0YW5jeUNoYXJ0X3BhbmVsX18yM2VscSB7XFxuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubGlmZUV4cGVjdGFuY3lDaGFydF9sZWdlbmQtY29udGFpbmVyX191bEhMUyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9taXhpbnMvX21lZGlhLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQ1RFO0VEY0U7SUFDSSx5QkFBQTtJQUFBLDBCQUFBO1NBQUEsc0JBQUE7RUFETjs7RUFJRTtJQUNJLG9CQUFBO0VBRE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdzdHlsZXMvbWl4aW5zL21lZGlhJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAwIC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jaGFydCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuQGluY2x1ZGUgeC1zbWFsbCB7XFxyXFxuICAgIC5wYW5lbCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sZWdlbmQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzL2JyZWFrcG9pbnRzJztcXHJcXG5cXHJcXG5AbWl4aW4geC1zbWFsbCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsIC0gMSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibGlmZUV4cGVjdGFuY3lDaGFydF9jb250YWluZXJfXzFWWTZYXCIsXG5cdFwicGFuZWxcIjogXCJsaWZlRXhwZWN0YW5jeUNoYXJ0X3BhbmVsX18yM2VscVwiLFxuXHRcImNoYXJ0XCI6IFwibGlmZUV4cGVjdGFuY3lDaGFydF9jaGFydF9fdVBhazhcIixcblx0XCJsZWdlbmQtY29udGFpbmVyXCI6IFwibGlmZUV4cGVjdGFuY3lDaGFydF9sZWdlbmQtY29udGFpbmVyX191bEhMU1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=