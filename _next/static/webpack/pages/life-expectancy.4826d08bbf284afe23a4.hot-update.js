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
var width = (_width = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall, 280), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Small, 520), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Medium, 720), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Large, 950), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraLarge, 1100), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraExtraLarge, 1100), _width);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("section", {
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Age (years)",
        color: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
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
            lineNumber: 61,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: availableWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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

/***/ }),

/***/ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx":
/*!*****************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyLegend.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyLegend.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var ramp = function ramp(color) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  var canvas = document.createElement('canvas');
  canvas.width = n;
  canvas.height = 1;
  var context = canvas.getContext('2d');

  for (var i = 0; i < n; ++i) {
    context.fillStyle = color(i / (n - 1));
    context.fillRect(i, 0, 1, 1);
  }

  return canvas;
}; // https://observablehq.com/@d3/color-legend


var LifeExpectancyLegend = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function (_ref) {
  _s();

  var color = _ref.color,
      title = _ref.title,
      _ref$tickSize = _ref.tickSize,
      tickSize = _ref$tickSize === void 0 ? 6 : _ref$tickSize,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 320 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 44 + tickSize : _ref$height,
      _ref$marginTop = _ref.marginTop,
      marginTop = _ref$marginTop === void 0 ? 18 : _ref$marginTop,
      _ref$marginRight = _ref.marginRight,
      marginRight = _ref$marginRight === void 0 ? 0 : _ref$marginRight,
      _ref$marginBottom = _ref.marginBottom,
      marginBottom = _ref$marginBottom === void 0 ? 16 + tickSize : _ref$marginBottom,
      _ref$marginLeft = _ref.marginLeft,
      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft,
      _ref$ticks = _ref.ticks,
      ticks = _ref$ticks === void 0 ? width / 64 : _ref$ticks,
      tickFormat = _ref.tickFormat,
      tickValues = _ref.tickValues;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!svgRef.current) {
      return;
    }

    var outline = {
      type: 'Sphere'
    };
    var location = window.location.toString();
    var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.current).attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height].toString()).style('overflow', 'visible').style('display', 'block');

    var tickAdjust = function tickAdjust(g) {
      return g.selectAll('.tick line').attr('y1', marginTop + marginBottom - height);
    };

    var x; // Continuous

    if (color.interpolate) {
      var n = Math.min(color.domain().length, color.range().length);
      x = color.copy().rangeRound(d3__WEBPACK_IMPORTED_MODULE_1__["quantize"](d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](marginLeft, width - marginRight), n));
      svg.append('image').attr('x', marginLeft).attr('y', marginTop).attr('width', width - marginLeft - marginRight).attr('height', height - marginTop - marginBottom).attr('preserveAspectRatio', 'none').attr('xlink:href', ramp(color.copy().domain(d3__WEBPACK_IMPORTED_MODULE_1__["quantize"](d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](0, 1), n))).toDataURL());
    } // Sequential
    else if (color.interpolator) {
        x = Object.assign(color.copy().interpolator(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"](marginLeft, width - marginRight)), {
          range: function range() {
            return [marginLeft, width - marginRight];
          }
        });
        svg.append('image').attr('x', marginLeft).attr('y', marginTop).attr('width', width - marginLeft - marginRight).attr('height', height - marginTop - marginBottom).attr('preserveAspectRatio', 'none').attr('xlink:href', ramp(color.interpolator()).toDataURL()); // scaleSequentialQuantile doesn’t implement ticks or tickFormat.

        if (!x.ticks) {
          if (tickValues === undefined) {
            var _n = Math.round(ticks + 1);

            tickValues = d3__WEBPACK_IMPORTED_MODULE_1__["range"](_n).map(function (i) {
              return d3__WEBPACK_IMPORTED_MODULE_1__["quantile"](color.domain(), i / (_n - 1));
            });
          }

          if (typeof tickFormat !== 'function') {
            tickFormat = d3__WEBPACK_IMPORTED_MODULE_1__["format"](tickFormat === undefined ? ',f' : tickFormat);
          }
        }
      } // Threshold
      else if (color.invertExtent) {
          var thresholds = color.thresholds ? color.thresholds() // scaleQuantize
          : color.quantiles ? color.quantiles() // scaleQuantile
          : color.domain(); // scaleThreshold

          var thresholdFormat = tickFormat === undefined ? function (d) {
            return d;
          } : typeof tickFormat === 'string' ? d3__WEBPACK_IMPORTED_MODULE_1__["format"](tickFormat) : tickFormat;
          x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([-1, color.range().length - 1]).rangeRound([marginLeft, width - marginRight]);
          svg.append('g').selectAll('rect').data(color.range()).join('rect').attr('x', function (d, i) {
            return x(i - 1);
          }).attr('y', marginTop).attr('width', function (d, i) {
            return x(i) - x(i - 1);
          }).attr('height', height - marginTop - marginBottom) //@ts-ignore
          .attr('fill', function (d) {
            return d;
          });
          tickValues = d3__WEBPACK_IMPORTED_MODULE_1__["range"](thresholds.length);

          tickFormat = function tickFormat(i) {
            return thresholdFormat(thresholds[i], i);
          };
        } // Ordinal
        else {
            x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().domain(color.domain()).rangeRound([marginLeft, width - marginRight]);
            svg.append('g').selectAll('rect').data(color.domain()).join('rect').attr('x', x).attr('y', marginTop).attr('width', Math.max(0, x.bandwidth() - 1)).attr('height', height - marginTop - marginBottom).attr('fill', color);

            tickAdjust = function tickAdjust() {};
          }

    svg.append('g').attr('transform', "translate(0,".concat(height - marginBottom, ")")).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).ticks(ticks, typeof tickFormat === 'string' ? tickFormat : undefined).tickFormat(typeof tickFormat === 'function' ? tickFormat : undefined).tickSize(tickSize).tickValues(tickValues)).call(tickAdjust).call(function (g) {
      return g.select('.domain').remove();
    }).call(function (g) {
      return g.append('text').attr('x', marginLeft).attr('y', marginTop + marginBottom - height - 6).attr('fill', 'currentColor').attr('text-anchor', 'start').attr('font-weight', 'bold').attr('class', 'title') //@ts-ignore
      .text(title);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height,
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 5
  }, _this);
}, "89Ty783ABEwsfMbSOeu9vscWF34="));
_c2 = LifeExpectancyLegend;
/* harmony default export */ __webpack_exports__["default"] = (LifeExpectancyLegend);

var _c, _c2;

$RefreshReg$(_c, "LifeExpectancyLegend$memo");
$RefreshReg$(_c2, "LifeExpectancyLegend");

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
___CSS_LOADER_EXPORT___.push([module.i, ".lifeExpectancyChart_container__1VY6X {\n  margin: 0 auto;\n}\n\n.lifeExpectancyChart_panel__23elq {\n  display: -moz-box;\n  display: flex;\n  width: 100%;\n}\n\n.lifeExpectancyChart_legend__gRVXp {\n  margin: 0 2em 0 0;\n}\n\n.lifeExpectancyChart_chart__uPak8 {\n  margin: 0.5em auto 1em;\n}", "",{"version":3,"sources":["webpack://lifeExpectancyChart.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;AACJ;;AAEA;EACI,iBAAA;EAAA,aAAA;EACA,WAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;;AAEA;EACI,sBAAA;AACJ","sourcesContent":[".container {\r\n    margin: 0 auto;\r\n}\r\n\r\n.panel {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.legend {\r\n    margin: 0 2em 0 0;\r\n}\r\n\r\n.chart {\r\n    margin: .5em auto 1em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "lifeExpectancyChart_container__1VY6X",
	"panel": "lifeExpectancyChart_panel__23elq",
	"legend": "lifeExpectancyChart_legend__gRVXp",
	"chart": "lifeExpectancyChart_chart__uPak8"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5TGVnZW5kLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsic2V4T3B0aW9ucyIsImtleSIsInZhbHVlIiwiU2V4IiwiQm90aCIsInRleHQiLCJNYW4iLCJXb21hbiIsIndpZHRoIiwiQnJlYWtwb2ludCIsIlhTbWFsbCIsIlNtYWxsIiwiTWVkaXVtIiwiTGFyZ2UiLCJFeHRyYUxhcmdlIiwiRXh0cmFFeHRyYUxhcmdlIiwiTGlmZUV4cGVjdGFuY3lDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNleCIsInNldFNleCIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwiZGF0YSIsInVzZU1lbW8iLCJNYXAiLCJsaWZlRXhwZWN0YW5jeSIsInJlZHVjZSIsImFjYyIsImN1ciIsInB1c2giLCJjb2RlIiwiY29sb3IiLCJkb21haW5CeSIsImQzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwidW5rbm93biIsImJyZWFrcG9pbnQiLCJ1c2VCcmVha3BvaW50IiwiYXZhaWxhYmxlV2lkdGgiLCJzdHlsZXMiLCJjb250YWluZXIiLCJwYW5lbCIsInJhbXAiLCJuIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaGVpZ2h0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJpIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJMaWZlRXhwZWN0YW5jeUxlZ2VuZCIsIm1lbW8iLCJ0aXRsZSIsInRpY2tTaXplIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwidGlja1ZhbHVlcyIsInN2Z1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJvdXRsaW5lIiwidHlwZSIsImxvY2F0aW9uIiwid2luZG93IiwidG9TdHJpbmciLCJzdmciLCJhdHRyIiwic3R5bGUiLCJ0aWNrQWRqdXN0IiwiZyIsInNlbGVjdEFsbCIsIngiLCJpbnRlcnBvbGF0ZSIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJyYW5nZSIsImNvcHkiLCJyYW5nZVJvdW5kIiwiYXBwZW5kIiwidG9EYXRhVVJMIiwiT2JqZWN0IiwiYXNzaWduIiwidW5kZWZpbmVkIiwicm91bmQiLCJtYXAiLCJpbnZlcnRFeHRlbnQiLCJ0aHJlc2hvbGRzIiwicXVhbnRpbGVzIiwidGhyZXNob2xkRm9ybWF0IiwiZCIsImpvaW4iLCJtYXgiLCJiYW5kd2lkdGgiLCJjYWxsIiwic2VsZWN0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFBRUMsOENBQUcsQ0FBQ0MsSUFBckI7QUFBMkJDLE1BQUksRUFBRTtBQUFqQyxDQURpQixFQUVqQjtBQUFFSixLQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFLLEVBQUVDLDhDQUFHLENBQUNHLEdBQXJCO0FBQTBCRCxNQUFJLEVBQUU7QUFBaEMsQ0FGaUIsRUFHakI7QUFBRUosS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDSSxLQUFyQjtBQUE0QkYsTUFBSSxFQUFFO0FBQWxDLENBSGlCLENBQW5CO0FBVUEsSUFBTUcsS0FBMkIsbUhBQzlCQywrREFBVSxDQUFDQyxNQURtQixFQUNWLEdBRFUs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RCxHQS9IUSxFQStITixFQS9ITSxDQUFUO0FBaUlBLHNCQUNFO0FBQUssT0FBRyxFQUFFUyxNQUFWO0FBQWtCLFNBQUssRUFBRTdELEtBQXpCO0FBQWdDLFVBQU0sRUFBRTRDLE1BQXhDO0FBQWdELGFBQVMsRUFBRVIsdUVBQU1BO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBaktnQyxrQ0FBakM7TUFBTWMsb0I7QUFtS1NBLG1GQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkxBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMsbUJBQW1CLEdBQUcsdUNBQXVDLHNCQUFzQixrQkFBa0IsZ0JBQWdCLEdBQUcsd0NBQXdDLHNCQUFzQixHQUFHLHVDQUF1QywyQkFBMkIsR0FBRyxPQUFPLGdHQUFnRyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxxQ0FBcUMsdUJBQXVCLEtBQUssZ0JBQWdCLHNCQUFzQixvQkFBb0IsS0FBSyxpQkFBaUIsMEJBQTBCLEtBQUssZ0JBQWdCLDhCQUE4QixLQUFLLHVCQUF1QjtBQUNoeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuNDgyNmQwOGJiZjI4NGFmZTIzYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERyb3Bkb3duLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsaWZlRXhwZWN0YW5jeSBmcm9tICcuLi8uLi9zdG9yZS9saWZlLWV4cGVjdGFuY3kuanNvbidcclxuaW1wb3J0IHsgQXZlcmFnZUxpZmVZZWFycyB9IGZyb20gJy4uLy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uLy4uL3R5cGVzL3NleCdcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQsIHsgQnJlYWtwb2ludCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUJyZWFrcG9pbnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUNoYXJ0IGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5TGVnZW5kIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lMZWdlbmQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgc2V4T3B0aW9ucyA9IFtcclxuICB7IGtleTogMCwgdmFsdWU6IFNleC5Cb3RoLCB0ZXh0OiAnQm90aCcgfSxcclxuICB7IGtleTogMSwgdmFsdWU6IFNleC5NYW4sIHRleHQ6ICdNYW4nIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBTZXguV29tYW4sIHRleHQ6ICdXb21hbicgfSxcclxuXVxyXG5cclxudHlwZSBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBba2V5IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XT86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCB3aWR0aDogQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW0JyZWFrcG9pbnQuWFNtYWxsXTogMjgwLFxyXG4gIFtCcmVha3BvaW50LlNtYWxsXTogNTIwLFxyXG4gIFtCcmVha3BvaW50Lk1lZGl1bV06IDcyMCxcclxuICBbQnJlYWtwb2ludC5MYXJnZV06IDk1MCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUxhcmdlXTogMTEwMCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUV4dHJhTGFyZ2VdOiAxMTAwLFxyXG59XHJcblxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGU8U2V4PihTZXguQm90aClcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCB7IHZhbHVlIH0pID0+IHNldFNleCh2YWx1ZSksIFtdKVxyXG5cclxuICBjb25zdCBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihcclxuICAgIGxpZmVFeHBlY3RhbmN5LnJlZHVjZSgoYWNjOiBbc3RyaW5nLCBudW1iZXJdW10sIGN1cjogQXZlcmFnZUxpZmVZZWFycykgPT4ge1xyXG4gICAgICBhY2MucHVzaChbY3VyLmNvZGUsIGN1cltzZXhdXSlcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pXHJcbiAgKSwgW3NleF0pXHJcblxyXG4gIGNvbnN0IGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBkb21haW5CeSA9IGQzLmV4dGVudChBcnJheS5mcm9tKGRhdGEudmFsdWVzKCkpKVxyXG5cclxuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbkJ5IGFzIFtudW1iZXIsIG51bWJlcl0pXHJcbiAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSZEJ1KVxyXG4gICAgICAudW5rbm93bignI2YyZjJmMicpXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBjb25zdCBicmVha3BvaW50OiBCcmVha3BvaW50ID0gdXNlQnJlYWtwb2ludCgpXHJcbiAgY29uc3QgYXZhaWxhYmxlV2lkdGg6IG51bWJlciA9IHdpZHRoW2JyZWFrcG9pbnRdIVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IC8+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc2V4PC9sYWJlbD5cclxuICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NleH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c2V4T3B0aW9uc31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IHNleCdcclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpZmVFeHBlY3RhbmN5Q2hhcnQgZGF0YT17ZGF0YX0gY29sb3I9e2NvbG9yfSB3aWR0aD17YXZhaWxhYmxlV2lkdGh9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IHsgR2VvU3BoZXJlIH0gZnJvbSAnZDMtZ2VvJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IHJhbXAgPSAoY29sb3I6IGFueSwgbjogbnVtYmVyID0gMjU2KSA9PiB7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgY2FudmFzLndpZHRoID0gblxyXG4gIGNhbnZhcy5oZWlnaHQgPSAxXHJcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgY29udGV4dCEuZmlsbFN0eWxlID0gY29sb3IoaSAvIChuIC0gMSkpO1xyXG4gICAgY29udGV4dCEuZmlsbFJlY3QoaSwgMCwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2FudmFzO1xyXG59XHJcblxyXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL2NvbG9yLWxlZ2VuZFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUxlZ2VuZCA9IG1lbW88e1xyXG4gIGNvbG9yOiBhbnksXHJcbiAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgdGlja1NpemU/OiBudW1iZXIsXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbiAgaGVpZ2h0PzogbnVtYmVyLFxyXG4gIG1hcmdpblRvcD86IG51bWJlcixcclxuICBtYXJnaW5SaWdodD86IG51bWJlcixcclxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXIsXHJcbiAgbWFyZ2luTGVmdD86IG51bWJlcixcclxuICB0aWNrcz86IG51bWJlcixcclxuICB0aWNrRm9ybWF0PzogYW55LFxyXG4gIHRpY2tWYWx1ZXM/OiBhbnlcclxufT4oKHtcclxuICBjb2xvcixcclxuICB0aXRsZSxcclxuICB0aWNrU2l6ZSA9IDYsXHJcbiAgd2lkdGggPSAzMjAsXHJcbiAgaGVpZ2h0ID0gNDQgKyB0aWNrU2l6ZSxcclxuICBtYXJnaW5Ub3AgPSAxOCxcclxuICBtYXJnaW5SaWdodCA9IDAsXHJcbiAgbWFyZ2luQm90dG9tID0gMTYgKyB0aWNrU2l6ZSxcclxuICBtYXJnaW5MZWZ0ID0gMCxcclxuICB0aWNrcyA9IHdpZHRoIC8gNjQsXHJcbiAgdGlja0Zvcm1hdCxcclxuICB0aWNrVmFsdWVzXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3V0bGluZTogR2VvU3BoZXJlID0gKHsgdHlwZTogJ1NwaGVyZScgfSlcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxyXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgICAuYXR0cigndmlld0JveCcsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpKVxyXG4gICAgICAuc3R5bGUoJ292ZXJmbG93JywgJ3Zpc2libGUnKVxyXG4gICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICBsZXQgdGlja0FkanVzdCA9IChnOiBhbnkpID0+IGcuc2VsZWN0QWxsKCcudGljayBsaW5lJykuYXR0cigneTEnLCBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b20gLSBoZWlnaHQpO1xyXG4gICAgbGV0IHg6IGFueTtcclxuXHJcbiAgICAvLyBDb250aW51b3VzXHJcbiAgICBpZiAoY29sb3IuaW50ZXJwb2xhdGUpIHtcclxuICAgICAgY29uc3QgbiA9IE1hdGgubWluKGNvbG9yLmRvbWFpbigpLmxlbmd0aCwgY29sb3IucmFuZ2UoKS5sZW5ndGgpO1xyXG5cclxuICAgICAgeCA9IGNvbG9yLmNvcHkoKS5yYW5nZVJvdW5kKGQzLnF1YW50aXplKGQzLmludGVycG9sYXRlKG1hcmdpbkxlZnQsIHdpZHRoIC0gbWFyZ2luUmlnaHQpLCBuKSk7XHJcblxyXG4gICAgICBzdmcuYXBwZW5kKCdpbWFnZScpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCBtYXJnaW5MZWZ0KVxyXG4gICAgICAgIC5hdHRyKCd5JywgbWFyZ2luVG9wKVxyXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoIC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0KVxyXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgLSBtYXJnaW5Ub3AgLSBtYXJnaW5Cb3R0b20pXHJcbiAgICAgICAgLmF0dHIoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAnbm9uZScpXHJcbiAgICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCByYW1wKGNvbG9yLmNvcHkoKS5kb21haW4oZDMucXVhbnRpemUoZDMuaW50ZXJwb2xhdGUoMCwgMSksIG4pKSkudG9EYXRhVVJMKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlcXVlbnRpYWxcclxuICAgIGVsc2UgaWYgKGNvbG9yLmludGVycG9sYXRvcikge1xyXG4gICAgICB4ID0gT2JqZWN0LmFzc2lnbihjb2xvci5jb3B5KClcclxuICAgICAgICAuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUm91bmQobWFyZ2luTGVmdCwgd2lkdGggLSBtYXJnaW5SaWdodCkpLFxyXG4gICAgICAgIHsgcmFuZ2UoKSB7IHJldHVybiBbbWFyZ2luTGVmdCwgd2lkdGggLSBtYXJnaW5SaWdodF07IH0gfSk7XHJcblxyXG4gICAgICBzdmcuYXBwZW5kKCdpbWFnZScpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCBtYXJnaW5MZWZ0KVxyXG4gICAgICAgIC5hdHRyKCd5JywgbWFyZ2luVG9wKVxyXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoIC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0KVxyXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgLSBtYXJnaW5Ub3AgLSBtYXJnaW5Cb3R0b20pXHJcbiAgICAgICAgLmF0dHIoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAnbm9uZScpXHJcbiAgICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCByYW1wKGNvbG9yLmludGVycG9sYXRvcigpKS50b0RhdGFVUkwoKSk7XHJcblxyXG4gICAgICAvLyBzY2FsZVNlcXVlbnRpYWxRdWFudGlsZSBkb2VzbuKAmXQgaW1wbGVtZW50IHRpY2tzIG9yIHRpY2tGb3JtYXQuXHJcbiAgICAgIGlmICgheC50aWNrcykge1xyXG4gICAgICAgIGlmICh0aWNrVmFsdWVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IG4gPSBNYXRoLnJvdW5kKHRpY2tzICsgMSk7XHJcbiAgICAgICAgICB0aWNrVmFsdWVzID0gZDMucmFuZ2UobikubWFwKGkgPT4gZDMucXVhbnRpbGUoY29sb3IuZG9tYWluKCksIGkgLyAobiAtIDEpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGlja0Zvcm1hdCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGlja0Zvcm1hdCA9IGQzLmZvcm1hdCh0aWNrRm9ybWF0ID09PSB1bmRlZmluZWQgPyAnLGYnIDogdGlja0Zvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhyZXNob2xkXHJcbiAgICBlbHNlIGlmIChjb2xvci5pbnZlcnRFeHRlbnQpIHtcclxuICAgICAgY29uc3QgdGhyZXNob2xkc1xyXG4gICAgICAgID0gY29sb3IudGhyZXNob2xkcyA/IGNvbG9yLnRocmVzaG9sZHMoKSAvLyBzY2FsZVF1YW50aXplXHJcbiAgICAgICAgICA6IGNvbG9yLnF1YW50aWxlcyA/IGNvbG9yLnF1YW50aWxlcygpIC8vIHNjYWxlUXVhbnRpbGVcclxuICAgICAgICAgICAgOiBjb2xvci5kb21haW4oKTsgLy8gc2NhbGVUaHJlc2hvbGRcclxuXHJcbiAgICAgIGNvbnN0IHRocmVzaG9sZEZvcm1hdFxyXG4gICAgICAgID0gdGlja0Zvcm1hdCA9PT0gdW5kZWZpbmVkID8gKGQ6IGFueSkgPT4gZFxyXG4gICAgICAgICAgOiB0eXBlb2YgdGlja0Zvcm1hdCA9PT0gJ3N0cmluZycgPyBkMy5mb3JtYXQodGlja0Zvcm1hdClcclxuICAgICAgICAgICAgOiB0aWNrRm9ybWF0O1xyXG5cclxuICAgICAgeCA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAuZG9tYWluKFstMSwgY29sb3IucmFuZ2UoKS5sZW5ndGggLSAxXSlcclxuICAgICAgICAucmFuZ2VSb3VuZChbbWFyZ2luTGVmdCwgd2lkdGggLSBtYXJnaW5SaWdodF0pO1xyXG5cclxuICAgICAgc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXHJcbiAgICAgICAgLmRhdGEoY29sb3IucmFuZ2UoKSlcclxuICAgICAgICAuam9pbigncmVjdCcpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCAoZCwgaSkgPT4geChpIC0gMSkpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBtYXJnaW5Ub3ApXHJcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKGQsIGkpID0+IHgoaSkgLSB4KGkgLSAxKSlcclxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0IC0gbWFyZ2luVG9wIC0gbWFyZ2luQm90dG9tKVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiBkKTtcclxuXHJcbiAgICAgIHRpY2tWYWx1ZXMgPSBkMy5yYW5nZSh0aHJlc2hvbGRzLmxlbmd0aCk7XHJcbiAgICAgIHRpY2tGb3JtYXQgPSAoaTogYW55KSA9PiB0aHJlc2hvbGRGb3JtYXQodGhyZXNob2xkc1tpXSwgaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3JkaW5hbFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHggPSBkMy5zY2FsZUJhbmQoKVxyXG4gICAgICAgIC5kb21haW4oY29sb3IuZG9tYWluKCkpXHJcbiAgICAgICAgLnJhbmdlUm91bmQoW21hcmdpbkxlZnQsIHdpZHRoIC0gbWFyZ2luUmlnaHRdKTtcclxuXHJcbiAgICAgIHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxyXG4gICAgICAgIC5kYXRhKGNvbG9yLmRvbWFpbigpKVxyXG4gICAgICAgIC5qb2luKCdyZWN0JylcclxuICAgICAgICAuYXR0cigneCcsIHgpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBtYXJnaW5Ub3ApXHJcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgTWF0aC5tYXgoMCwgeC5iYW5kd2lkdGgoKSAtIDEpKVxyXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgLSBtYXJnaW5Ub3AgLSBtYXJnaW5Cb3R0b20pXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvcik7XHJcblxyXG4gICAgICB0aWNrQWRqdXN0ID0gKCkgPT4geyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0IC0gbWFyZ2luQm90dG9tfSlgKVxyXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpXHJcbiAgICAgICAgLnRpY2tzKHRpY2tzLCB0eXBlb2YgdGlja0Zvcm1hdCA9PT0gJ3N0cmluZycgPyB0aWNrRm9ybWF0IDogdW5kZWZpbmVkKVxyXG4gICAgICAgIC50aWNrRm9ybWF0KHR5cGVvZiB0aWNrRm9ybWF0ID09PSAnZnVuY3Rpb24nID8gdGlja0Zvcm1hdCA6IHVuZGVmaW5lZClcclxuICAgICAgICAudGlja1NpemUodGlja1NpemUpXHJcbiAgICAgICAgLnRpY2tWYWx1ZXModGlja1ZhbHVlcykpXHJcbiAgICAgIC5jYWxsKHRpY2tBZGp1c3QpXHJcbiAgICAgIC5jYWxsKGcgPT4gZy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKSlcclxuICAgICAgLmNhbGwoZyA9PiBnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCBtYXJnaW5MZWZ0KVxyXG4gICAgICAgIC5hdHRyKCd5JywgbWFyZ2luVG9wICsgbWFyZ2luQm90dG9tIC0gaGVpZ2h0IC0gNilcclxuICAgICAgICAuYXR0cignZmlsbCcsICdjdXJyZW50Q29sb3InKVxyXG4gICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXHJcbiAgICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0aXRsZScpXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLnRleHQodGl0bGUpKTtcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgcmVmPXtzdmdSZWZ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGNsYXNzTmFtZT17c3R5bGVzfSAvPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5TGVnZW5kIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpZmVFeHBlY3RhbmN5Q2hhcnRfY29udGFpbmVyX18xVlk2WCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmxpZmVFeHBlY3RhbmN5Q2hhcnRfcGFuZWxfXzIzZWxxIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlmZUV4cGVjdGFuY3lDaGFydF9sZWdlbmRfX2dSVlhwIHtcXG4gIG1hcmdpbjogMCAyZW0gMCAwO1xcbn1cXG5cXG4ubGlmZUV4cGVjdGFuY3lDaGFydF9jaGFydF9fdVBhazgge1xcbiAgbWFyZ2luOiAwLjVlbSBhdXRvIDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wYW5lbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVnZW5kIHtcXHJcXG4gICAgbWFyZ2luOiAwIDJlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jaGFydCB7XFxyXFxuICAgIG1hcmdpbjogLjVlbSBhdXRvIDFlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibGlmZUV4cGVjdGFuY3lDaGFydF9jb250YWluZXJfXzFWWTZYXCIsXG5cdFwicGFuZWxcIjogXCJsaWZlRXhwZWN0YW5jeUNoYXJ0X3BhbmVsX18yM2VscVwiLFxuXHRcImxlZ2VuZFwiOiBcImxpZmVFeHBlY3RhbmN5Q2hhcnRfbGVnZW5kX19nUlZYcFwiLFxuXHRcImNoYXJ0XCI6IFwibGlmZUV4cGVjdGFuY3lDaGFydF9jaGFydF9fdVBhazhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9