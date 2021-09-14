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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwid29ybGQiLCJ3b3JsZE9iaiIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsInByb2plY3Rpb24iLCJnZW9FcXVhbEVhcnRoIiwicGF0aCIsImdlb1BhdGgiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInVzZU1lbW8iLCJmaXRXaWR0aCIsImJvdW5kcyIsIngwIiwieTAiLCJ4MSIsInkxIiwiZHkiLCJNYXRoIiwiY2VpbCIsImwiLCJtaW4iLCJ1c2VFZmZlY3QiLCJzY2FsZSIsInByZWNpc2lvbiIsImhlaWdodCIsImN1cnJlbnQiLCJzdmciLCJkMyIsInNlbGVjdCIsImNhbGwiLCJleHRlbnQiLCJzY2FsZUV4dGVudCIsIm9uIiwiem9vbWVkIiwidHJhbnNmb3JtIiwiYXR0ciIsImNvdW50cmllc0ZlYXR1cmVzIiwiZmVhdHVyZXMiLCJtYXAiLCJjb3VudHJ5IiwiaWQiLCJnZXQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImEiLCJiIiwiYm91bmRzUGF0aCIsInVuZGVmaW5lZCIsInN0eWxlcyIsImNoYXJ0IiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFHO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTNCO0FBQ0EsSUFBTUMsS0FBMEIsR0FBR0Msc0RBQW5DO0FBQ0EsSUFBTUMsU0FBb0MsR0FBR0MsZ0RBQUEsQ0FBaUJILEtBQWpCLEVBQXdCQSxLQUFLLENBQUNJLE9BQU4sQ0FBY0Ys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ZUFFRTtBQUFVLFVBQUUsRUFBQyxNQUFiO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFLElBQUlHLEdBQUosQ0FBUSxVQUFSLEVBQW9CcEQsUUFBcEIsRUFBOEJFLFFBQTlCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFhRTtBQUFHLGlDQUFrQixJQUFJa0QsR0FBSixDQUFRLE9BQVIsRUFBaUJwRCxRQUFqQixDQUFsQixNQUFIO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFFLElBQUlvRCxHQUFKLENBQVEsVUFBUixFQUFvQnBELFFBQXBCLEVBQThCRSxRQUE5QixFQURiO0FBRUUsWUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxtQkFDR21DLGlCQURILGVBRUU7QUFBTSxjQUFJLEVBQUMsTUFBWDtBQUFrQixnQkFBTSxFQUFDLE9BQXpCO0FBQWlDLDZCQUFnQixPQUFqRDtBQUF5RCxXQUFDLEVBQUVXO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRTtBQUNFLGlCQUFTLEVBQUUsSUFBSUksR0FBSixDQUFRLFVBQVIsRUFBb0JwRCxRQUFwQixFQUE4QkUsUUFBOUIsRUFEYjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsY0FBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBM0YrQixrQ0FBaEM7TUFBTUMsbUI7QUE2RlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS5iNDBlOTE5Nzg4MjAyZjhlNTNhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGRPYmogZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfVxyXG5jb25zdCB3b3JsZDogdG9wb2pzb24uV29ybGRBdGxhcyA9IHdvcmxkT2JqIGFzIG9iamVjdCBhcyB0b3BvanNvbi5Xb3JsZEF0bGFzXHJcbmNvbnN0IGNvdW50cmllczogR2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbiA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5jb25zdCBwcm9qZWN0aW9uOiBHZW9Qcm9qZWN0aW9uID0gZ2VvRXF1YWxFYXJ0aCgpXHJcbmNvbnN0IHBhdGg6IEdlb1BhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pXHJcbmNvbnN0IGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlmZS1leHBlY3RhbmN5J1xyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+LFxyXG4gIGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+LFxyXG4gIHdpZHRoPzogbnVtYmVyLFxyXG59Pigoe1xyXG4gIGRhdGEsXHJcbiAgY29sb3IsXHJcbiAgd2lkdGggPSA5NzAsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgY29uc3QgW1t4MCwgeTBdLCBbeDEsIHkxXV0gPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbi5maXRXaWR0aCh3aWR0aCwgb3V0bGluZSkpLmJvdW5kcyhvdXRsaW5lKSwgW10pXHJcbiAgY29uc3QgZHkgPSBNYXRoLmNlaWwoeTEgLSB5MClcclxuICBjb25zdCBsID0gTWF0aC5taW4oTWF0aC5jZWlsKHgxIC0geDApLCBkeSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3Rpb24uc2NhbGUocHJvamVjdGlvbi5zY2FsZSgpICogKGwgLSAxKSAvIGwpLnByZWNpc2lvbigwLjIpXHJcbiAgfSwgW3Byb2plY3Rpb24sIGxdKVxyXG4gIFxyXG4gIGNvbnN0IGhlaWdodCA9IGR5XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IHN2Zy5zZWxlY3QoJy5jb3VudHJpZXMnKVxyXG5cclxuICAgIHN2Zy5jYWxsKFxyXG4gICAgICBkMy56b29tPHR5cGVvZiBzdmdSZWYuY3VycmVudCwgYW55PigpXHJcbiAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbd2lkdGgsIGhlaWdodF1dKVxyXG4gICAgICAgIC5zY2FsZUV4dGVudChbMSwgNV0pXHJcbiAgICAgICAgLm9uKCd6b29tJywgem9vbWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoeyB0cmFuc2Zvcm0gfTogYW55KSB7XHJcbiAgICAgIGNvdW50cmllcy5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjb3VudHJpZXNGZWF0dXJlcyA9IGNvdW50cmllcy5mZWF0dXJlcy5tYXAoKGNvdW50cnk6IEdlb0pTT04uRmVhdHVyZSkgPT4ge1xyXG4gICAgbGV0IHsgaWQgfSA9IGNvdW50cnlcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGlkID0gaWQudG9TdHJpbmcoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPXtjb2xvcihkYXRhLmdldChpZCkhKX1cclxuICAgICAgICBkPXtwYXRoKGNvdW50cnkpIX1cclxuICAgICAgPlxyXG4gICAgICAgIDx0aXRsZT57Y291bnRyeS5wcm9wZXJ0aWVzPy5uYW1lfSB7ZGF0YS5oYXMoaWQpID8gZGF0YS5nZXQoaWQpIDogJ04vQSd9PC90aXRsZT5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGJvdW5kcyA9IHVzZU1lbW8oKCkgPT4gdG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSwgW10pXHJcbiAgY29uc3QgYm91bmRzUGF0aCA9IHVzZU1lbW8oKCkgPT4gcGF0aChib3VuZHMpID8/IHVuZGVmaW5lZCwgW2JvdW5kc10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHJlZj17c3ZnUmVmfVxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PXtbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKX0gXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0fVxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8cGF0aCBpZD1cIm91dGxpbmVcIiBkPXtwYXRoKG91dGxpbmUpID8/IHVuZGVmaW5lZH0gLz5cclxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwXCI+XHJcbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gLz5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxnIGNsaXAtcGF0aD17YHVybCgke25ldyBVUkwoJyNjbGlwJywgbG9jYXRpb24pfSlgfT5cclxuICAgICAgICA8dXNlXHJcbiAgICAgICAgICB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT1cImNvdW50cmllc1wiPlxyXG4gICAgICAgICAge2NvdW50cmllc0ZlYXR1cmVzfVxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD17Ym91bmRzUGF0aH0gLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiM3NDc0NzRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9