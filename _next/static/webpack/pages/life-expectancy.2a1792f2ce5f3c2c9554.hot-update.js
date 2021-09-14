webpackHotUpdate_N_E("pages/life-expectancy",{

/***/ "./components/lifeExpectancyChart/lifeExpectancyChart.tsx":
/*!****************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyChart.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! topojson */ "./node_modules/topojson/index.js");
/* harmony import */ var _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/countries-50m.json */ "./store/countries-50m.json");
var _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/countries-50m.json */ "./store/countries-50m.json", 1);
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyChart.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var outline = {
  type: 'Sphere'
};
var world = _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__;
var countries = topojson__WEBPACK_IMPORTED_MODULE_4__["feature"](world, world.objects.countries);
var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoEqualEarth"])();
var path = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])(projection);
var location = true ? window.location.toString() : undefined; // https://observablehq.com/@d3/world-choropleth

var LifeExpectancyChart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function (_ref) {
  var _path2;

  _s();

  var data = _ref.data,
      color = _ref.color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 970 : _ref$width;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])(projection.fitWidth(width, outline)).bounds(outline);
  }, []),
      _useMemo$ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMemo[0], 2),
      x0 = _useMemo$[0],
      y0 = _useMemo$[1],
      _useMemo$2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMemo[1], 2),
      x1 = _useMemo$2[0],
      y1 = _useMemo$2[1];

  var dy = Math.ceil(y1 - y0);
  var l = Math.min(Math.ceil(x1 - x0), dy);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    projection.scale(projection.scale() * (l - 1) / l).precision(0.2);
  }, [projection, l]);
  var height = dy;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!svgRef.current) {
      return;
    }

    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](svgRef.current);
    var countries = svg.select('.countries');
    svg.call(d3__WEBPACK_IMPORTED_MODULE_2__["zoom"]().extent([[0, 0], [width, height]]).scaleExtent([1, 5]).on('zoom', zoomed));

    function zoomed(_ref2) {
      var transform = _ref2.transform;
      countries.attr('transform', transform);
    }
  }, []);
  var countriesFeatures = countries.features.map(function (country) {
    var _country$properties;

    var id = country.id;

    if (!id) {
      return null;
    }

    id = id.toString();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
      fill: color(data.get(id)),
      d: path(country),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
        children: [(_country$properties = country.properties) === null || _country$properties === void 0 ? void 0 : _country$properties.name, " ", data.has(id) ? data.get(id) : 'N/A']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this);
  });
  var bounds = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return topojson__WEBPACK_IMPORTED_MODULE_4__["mesh"](world, world.objects.countries, function (a, b) {
      return a !== b;
    });
  }, []);
  var boundsPath = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _path;

    return (_path = path(bounds)) !== null && _path !== void 0 ? _path : undefined;
  }, [bounds]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height,
    viewBox: [0, 0, width, height].toString(),
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.chart,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("defs", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
        id: "outline",
        d: (_path2 = path(outline)) !== null && _path2 !== void 0 ? _path2 : undefined
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
        className: "countries",
        children: [countriesFeatures, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
          fill: "none",
          stroke: "white",
          "stroke-linejoin": "round",
          d: boundsPath
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
}, "w3+9W2oVIUtEErhh5M4cyD9VSK0="));
_c2 = LifeExpectancyChart;
/* harmony default export */ __webpack_exports__["default"] = (LifeExpectancyChart);

var _c, _c2;

$RefreshReg$(_c, "LifeExpectancyChart$memo");
$RefreshReg$(_c2, "LifeExpectancyChart");

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

/***/ "./components/lifeExpectancyChart/lifeExpectancyContainer.tsx":
/*!********************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json");
var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json", 1);
/* harmony import */ var _types_sex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/sex */ "./types/sex.ts");
/* harmony import */ var _lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lifeExpectancyChart */ "./components/lifeExpectancyChart/lifeExpectancyChart.tsx");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lifeExpectancyLegend */ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyContainer.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var sexOptions = [{
  key: 0,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Both,
  text: 'Both'
}, {
  key: 1,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Man,
  text: 'Man'
}, {
  key: 2,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Woman,
  text: 'Woman'
}];

var LifeExpectancyContainer = function LifeExpectancyContainer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Both),
      sex = _useState[0],
      setSex = _useState[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e, _ref) {
    var value = _ref.value;
    return setSex(value);
  }, []);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return new Map(_store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_3__.reduce(function (acc, cur) {
      acc.push([cur.code, cur[sex]]);
      return acc;
    }, []));
  }, [sex]);
  var color = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var domainBy = d3__WEBPACK_IMPORTED_MODULE_0__["extent"](Array.from(data.values()));
    return d3__WEBPACK_IMPORTED_MODULE_0__["scaleSequential"]().domain(domainBy).interpolator(d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]).unknown('#f2f2f2');
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Age (years)",
        color: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
            value: sex,
            onChange: onChange,
            options: sexOptions,
            placeholder: "Select sex",
            compact: true,
            selection: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: data,
      color: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "gS0oXt6aKCrMHT13TKRk7kMKTc8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpZmVFeHBlY3RhbmN5Q2hhcnQvbGlmZUV4cGVjdGFuY3lDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwid29ybGQiLCJ3b3JsZE9iaiIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsInByb2plY3Rpb24iLCJnZW9FcXVhbEVhcnRoIiwicGF0aCIsImdlb1BhdGgiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInVzZU1lbW8iLCJmaXRXaWR0aCIsImJvdW5kcyIsIngwIiwieTAiLCJ4MSIsInkxIiwiZHkiLCJNYXRoIiwiY2VpbCIsImwiLCJtaW4iLCJ1c2VFZmZlY3QiLCJzY2FsZSIsInByZWNpc2lvbiIsImhlaWdodCIsImN1cnJlbnQiLCJzdmciLCJkMyIsInNlbGVjdCIsImNhbGwiLCJleHRlbnQiLCJzY2FsZUV4dGVudCIsIm9uIiwiem9vbWVkIiwidHJhbnNmb3JtIiwiYXR0ciIsImNvdW50cmllc0ZlYXR1cmVzIiwiZmVhdHVyZXMiLCJtYXAiLCJjb3VudHJ5IiwiaWQiLCJnZXQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImEiLCJiIiwiYm91bmRzUGF0aCIsInVuZGVmaW5lZCIsInN0eWxlcyIsImNoYXJ0IiwiVVJMIiwic2V4T3B0aW9ucyIsImtleSIsInZhbHVlIiwiU2V4IiwiQm90aCIsInRleHQiLCJNYW4iLCJXb21hbiIsIkxpZmVFeHBlY3RhbmN5Q29udGFpbmVyIiwidXNlU3RhdGUiLCJzZXgiLCJzZXRTZXgiLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZSIsIk1hcCIsImxpZmVFeHBlY3RhbmN5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHVzaCIsImNvZGUiLCJkb21haW5CeSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImRvbWFpbiIsImludGVycG9sYXRvciIsInVua25vd24iLCJjb250YWluZXIiLCJwYW5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBa0IsR0FBRztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUEzQjtBQUNBLElBQU1DLEtBQTBCLEdBQUdDLHNEQUFuQztBQUNBLElBQU1DLFNBQW9DLEdBQUdDLGdEQUFBLENBQWlCSCxLQUFqQixFQUF3QkEsS0FBSyxDQUFDSSxPQUFOLENBQWNGLFNBQXRDLENBQTdDO0FBQ0EsSUFBTUcsVUFBeUIsR0FBR0MsNERBQWEsRUFBL0M7QUFDQSxJQUFNQyxJQUFhLEdBQUdDLHNEQUFPLENBQUNILFVBQUQsQ0FBN0I7QUFDQSxJQUFNSSxRQUFRLEdBQUcsT0FBZ0NDLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsUUFBaEIsRUFBaEMsR0FBNkQsU0FBOUUsQyxDQUVBOztBQUNBLElBQU1DLG1CQUFtQixnQkFBR0Msa0RBQUksU0FJN0IsZ0JBSUc7QUFBQTs7QUFBQTs7QUFBQSxNQUhKQyxJQUdJLFFBSEpBLElBR0k7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSx3QkFESkMsS0FDSTtBQUFBLE1BREpBLEtBQ0ksMkJBREksR0FDSjtBQUNKLE1BQU1DLE1BQU0sR0FBR0Msb0RBQU0sQ0FBZ0IsSUFBaEIsQ0FBckI7O0FBREksaUJBR3lCQyxxREFBTyxDQUFDO0FBQUEsV0FBTVgsc0RBQU8sQ0FBQ0gsVUFBVSxDQUFDZSxRQUFYLENBQW9CSixLQUFwQixFQUEyQmxCLE9BQTNCLENBQUQsQ0FBUCxDQUE2Q3VCLE1BQTdDLENBQW9EdkIsT0FBcEQsQ0FBTjtBQUFBLEdBQUQsRUFBcUUsRUFBckUsQ0FI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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLDBEQUFEO0FBQ0UsaUJBQUssRUFBRXlELEdBRFQ7QUFFRSxvQkFBUSxFQUFFRSxRQUZaO0FBR0UsbUJBQU8sRUFBRVosVUFIWDtBQUlFLHVCQUFXLEVBQUMsWUFKZDtBQUtFLG1CQUFPLE1BTFQ7QUFNRSxxQkFBUztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBaUJFLHFFQUFDLDREQUFEO0FBQXFCLFVBQUksRUFBRWhELElBQTNCO0FBQWlDLFdBQUssRUFBRUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQXpDRDs7R0FBTXVELHVCOztLQUFBQSx1QjtBQTJDU0Esc0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LjJhMTc5MmYyY2U1ZjNjMmM5NTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZU1lbW8sIG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCB7IGdlb0VxdWFsRWFydGgsIEdlb1BhdGgsIGdlb1BhdGgsIEdlb1Byb2plY3Rpb24sIEdlb1NwaGVyZSB9IGZyb20gJ2QzLWdlbydcclxuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nXHJcbmltcG9ydCB3b3JsZE9iaiBmcm9tICcuLi8uLi9zdG9yZS9jb3VudHJpZXMtNTBtLmpzb24nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgb3V0bGluZTogR2VvU3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9XHJcbmNvbnN0IHdvcmxkOiB0b3BvanNvbi5Xb3JsZEF0bGFzID0gd29ybGRPYmogYXMgb2JqZWN0IGFzIHRvcG9qc29uLldvcmxkQXRsYXNcclxuY29uc3QgY291bnRyaWVzOiBHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcbmNvbnN0IHByb2plY3Rpb246IEdlb1Byb2plY3Rpb24gPSBnZW9FcXVhbEVhcnRoKClcclxuY29uc3QgcGF0aDogR2VvUGF0aCA9IGdlb1BhdGgocHJvamVjdGlvbilcclxuY29uc3QgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saWZlLWV4cGVjdGFuY3knXHJcblxyXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL3dvcmxkLWNob3JvcGxldGhcclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDaGFydCA9IG1lbW88e1xyXG4gIGRhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4sXHJcbiAgY29sb3I6IGQzLlNjYWxlU2VxdWVudGlhbDxzdHJpbmcsICcjZjJmMmYyJz4sXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCA9IDk3MCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICBjb25zdCBbW3gwLCB5MF0sIFt4MSwgeTFdXSA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uLmZpdFdpZHRoKHdpZHRoLCBvdXRsaW5lKSkuYm91bmRzKG91dGxpbmUpLCBbXSlcclxuICBjb25zdCBkeSA9IE1hdGguY2VpbCh5MSAtIHkwKVxyXG4gIGNvbnN0IGwgPSBNYXRoLm1pbihNYXRoLmNlaWwoeDEgLSB4MCksIGR5KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdGlvbi5zY2FsZShwcm9qZWN0aW9uLnNjYWxlKCkgKiAobCAtIDEpIC8gbCkucHJlY2lzaW9uKDAuMilcclxuICB9LCBbcHJvamVjdGlvbiwgbF0pXHJcbiAgXHJcbiAgY29uc3QgaGVpZ2h0ID0gZHlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KVxyXG4gICAgY29uc3QgY291bnRyaWVzID0gc3ZnLnNlbGVjdCgnLmNvdW50cmllcycpXHJcblxyXG4gICAgc3ZnLmNhbGwoXHJcbiAgICAgIGQzLnpvb208dHlwZW9mIHN2Z1JlZi5jdXJyZW50LCBhbnk+KClcclxuICAgICAgICAuZXh0ZW50KFtbMCwgMF0sIFt3aWR0aCwgaGVpZ2h0XV0pXHJcbiAgICAgICAgLnNjYWxlRXh0ZW50KFsxLCA1XSlcclxuICAgICAgICAub24oJ3pvb20nLCB6b29tZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHpvb21lZCh7IHRyYW5zZm9ybSB9OiBhbnkpIHtcclxuICAgICAgY291bnRyaWVzLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNvdW50cmllc0ZlYXR1cmVzID0gY291bnRyaWVzLmZlYXR1cmVzLm1hcCgoY291bnRyeTogR2VvSlNPTi5GZWF0dXJlKSA9PiB7XHJcbiAgICBsZXQgeyBpZCB9ID0gY291bnRyeVxyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgaWQgPSBpZC50b1N0cmluZygpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9e2NvbG9yKGRhdGEuZ2V0KGlkKSEpfVxyXG4gICAgICAgIGQ9e3BhdGgoY291bnRyeSkhfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHRpdGxlPntjb3VudHJ5LnByb3BlcnRpZXM/Lm5hbWV9IHtkYXRhLmhhcyhpZCkgPyBkYXRhLmdldChpZCkgOiAnTi9BJ308L3RpdGxlPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgYm91bmRzID0gdXNlTWVtbygoKSA9PiB0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpLCBbXSlcclxuICBjb25zdCBib3VuZHNQYXRoID0gdXNlTWVtbygoKSA9PiBwYXRoKGJvdW5kcykgPz8gdW5kZWZpbmVkLCBbYm91bmRzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgcmVmPXtzdmdSZWZ9XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9e1swLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpfSBcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnR9XHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxwYXRoIGlkPVwib3V0bGluZVwiIGQ9e3BhdGgob3V0bGluZSkgPz8gdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBcIj5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSAvPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgY2xpcC1wYXRoPXtgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWB9PlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwiY291bnRyaWVzXCI+XHJcbiAgICAgICAgICB7Y291bnRyaWVzRmVhdHVyZXN9XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPXtib3VuZHNQYXRofSAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8dXNlXHJcbiAgICAgICAgICB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc0NzQ3NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDaGFydCIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERyb3Bkb3duLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsaWZlRXhwZWN0YW5jeSBmcm9tICcuLi8uLi9zdG9yZS9saWZlLWV4cGVjdGFuY3kuanNvbidcclxuaW1wb3J0IHsgQXZlcmFnZUxpZmVZZWFycyB9IGZyb20gJy4uLy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uLy4uL3R5cGVzL3NleCdcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5Q2hhcnQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpZmVFeHBlY3RhbmN5TGVnZW5kIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lMZWdlbmQnXHJcblxyXG5jb25zdCBzZXhPcHRpb25zID0gW1xyXG4gIHsga2V5OiAwLCB2YWx1ZTogU2V4LkJvdGgsIHRleHQ6ICdCb3RoJyB9LFxyXG4gIHsga2V5OiAxLCB2YWx1ZTogU2V4Lk1hbiwgdGV4dDogJ01hbicgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IFNleC5Xb21hbiwgdGV4dDogJ1dvbWFuJyB9LFxyXG5dXHJcblxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGU8U2V4PihTZXguQm90aClcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCB7IHZhbHVlIH0pID0+IHNldFNleCh2YWx1ZSksIFtdKVxyXG5cclxuICBjb25zdCBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihcclxuICAgIGxpZmVFeHBlY3RhbmN5LnJlZHVjZSgoYWNjOiBbc3RyaW5nLCBudW1iZXJdW10sIGN1cjogQXZlcmFnZUxpZmVZZWFycykgPT4ge1xyXG4gICAgICBhY2MucHVzaChbY3VyLmNvZGUsIGN1cltzZXhdXSlcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pXHJcbiAgKSwgW3NleF0pXHJcblxyXG4gIGNvbnN0IGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBkb21haW5CeSA9IGQzLmV4dGVudChBcnJheS5mcm9tKGRhdGEudmFsdWVzKCkpKVxyXG5cclxuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbkJ5IGFzIFtudW1iZXIsIG51bWJlcl0pXHJcbiAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSZEJ1KVxyXG4gICAgICAudW5rbm93bignI2YyZjJmMicpXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IC8+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc2V4PC9sYWJlbD5cclxuICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NleH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c2V4T3B0aW9uc31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IHNleCdcclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpZmVFeHBlY3RhbmN5Q2hhcnQgZGF0YT17ZGF0YX0gY29sb3I9e2NvbG9yfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9