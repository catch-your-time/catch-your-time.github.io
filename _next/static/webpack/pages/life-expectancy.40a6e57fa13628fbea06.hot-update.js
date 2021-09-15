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
var bounds = topojson__WEBPACK_IMPORTED_MODULE_4__["mesh"](world, world.objects.countries, function (a, b) {
  return a !== b;
});
var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoEqualEarth"])();
var path = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])(projection); // https://observablehq.com/@d3/world-choropleth

var LifeExpectancyChart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function (_ref) {
  var _path, _path2;

  _s();

  var data = _ref.data,
      color = _ref.color,
      width = _ref.width;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])(projection.fitWidth(width, outline)).bounds(outline);
  }, [width]),
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
  }, [projection, l]); // const location = typeof window !== 'undefined' ? window.location.toString() : 'http://localhost:3000/life-expectancy!'

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      location = _useState[0],
      setLocation = _useState[1];

  console.log(1, location);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setLocation(window.location.toString());
  }, []);
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
        lineNumber: 73,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height,
    viewBox: [0, 0, width, height].toString(),
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.chart,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("defs", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
        id: "outline",
        d: (_path = path(outline)) !== null && _path !== void 0 ? _path : undefined
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
        className: "countries",
        children: [countriesFeatures, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
          fill: "none",
          stroke: "white",
          "stroke-linejoin": "round",
          d: (_path2 = path(bounds)) !== null && _path2 !== void 0 ? _path2 : undefined
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, _this);
}, "QIgFyEZfuWc5B6I4ytqmLvM2QTA="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwid29ybGQiLCJ3b3JsZE9iaiIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsImJvdW5kcyIsImEiLCJiIiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsIkxpZmVFeHBlY3RhbmN5Q2hhcnQiLCJtZW1vIiwiZGF0YSIsImNvbG9yIiwid2lkdGgiLCJzdmdSZWYiLCJ1c2VSZWYiLCJ1c2VNZW1vIiwiZml0V2lkdGgiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJ1c2VTdGF0ZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwidG9TdHJpbmciLCJoZWlnaHQiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImF0dHIiLCJjb3VudHJpZXNGZWF0dXJlcyIsImZlYXR1cmVzIiwibWFwIiwiY291bnRyeSIsImlkIiwiZ2V0IiwicHJvcGVydGllcyIsIm5hbWUiLCJoYXMiLCJzdHlsZXMiLCJjaGFydCIsInVuZGVmaW5lZCIsIlVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBa0IsR0FBRztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUEzQjtBQUNBLElBQU1DLEtBQTBCLEdBQUdDLHNEQUFuQztBQUNBLElBQU1DLFNBQW9DLEdBQUdDLGdEQUFBLENBQWlCSCxLQUFqQixF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RUFBQyxNQUFiO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFLElBQUlDLEdBQUosQ0FBUSxVQUFSLEVBQW9COUIsUUFBcEIsRUFBOEJLLFFBQTlCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFhRTtBQUFHLGlDQUFrQixJQUFJeUIsR0FBSixDQUFRLE9BQVIsRUFBaUI5QixRQUFqQixDQUFsQixNQUFIO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFFLElBQUk4QixHQUFKLENBQVEsVUFBUixFQUFvQjlCLFFBQXBCLEVBQThCSyxRQUE5QixFQURiO0FBRUUsWUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxtQkFDR2EsaUJBREgsZUFFRTtBQUFNLGNBQUksRUFBQyxNQUFYO0FBQWtCLGdCQUFNLEVBQUMsT0FBekI7QUFBaUMsNkJBQWdCLE9BQWpEO0FBQXlELFdBQUMsWUFBRTFDLElBQUksQ0FBQ0wsTUFBRCxDQUFOLDJDQUFrQjBEO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRTtBQUNFLGlCQUFTLEVBQUUsSUFBSUMsR0FBSixDQUFRLFVBQVIsRUFBb0I5QixRQUFwQixFQUE4QkssUUFBOUIsRUFEYjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsY0FBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBN0YrQixrQ0FBaEM7TUFBTTNCLG1CO0FBK0ZTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuNDBhNmU1N2ZhMTM2MjhmYmVhMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCB7IGdlb0VxdWFsRWFydGgsIEdlb1BhdGgsIGdlb1BhdGgsIEdlb1Byb2plY3Rpb24sIEdlb1NwaGVyZSB9IGZyb20gJ2QzLWdlbydcclxuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nXHJcbmltcG9ydCB3b3JsZE9iaiBmcm9tICcuLi8uLi9zdG9yZS9jb3VudHJpZXMtNTBtLmpzb24nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgb3V0bGluZTogR2VvU3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9XHJcbmNvbnN0IHdvcmxkOiB0b3BvanNvbi5Xb3JsZEF0bGFzID0gd29ybGRPYmogYXMgb2JqZWN0IGFzIHRvcG9qc29uLldvcmxkQXRsYXNcclxuY29uc3QgY291bnRyaWVzOiBHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcbmNvbnN0IGJvdW5kczogR2VvSlNPTi5NdWx0aUxpbmVTdHJpbmcgPSB0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpXHJcbmNvbnN0IHByb2plY3Rpb246IEdlb1Byb2plY3Rpb24gPSBnZW9FcXVhbEVhcnRoKClcclxuY29uc3QgcGF0aDogR2VvUGF0aCA9IGdlb1BhdGgocHJvamVjdGlvbilcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogTWFwPHN0cmluZywgbnVtYmVyPixcclxuICBjb2xvcjogZDMuU2NhbGVTZXF1ZW50aWFsPHN0cmluZywgJyNmMmYyZjInPixcclxuICB3aWR0aDogbnVtYmVyLFxyXG59Pigoe1xyXG4gIGRhdGEsXHJcbiAgY29sb3IsXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgY29uc3QgW1t4MCwgeTBdLCBbeDEsIHkxXV0gPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbi5maXRXaWR0aCh3aWR0aCwgb3V0bGluZSkpLmJvdW5kcyhvdXRsaW5lKSwgW3dpZHRoXSlcclxuICBjb25zdCBkeSA9IE1hdGguY2VpbCh5MSAtIHkwKVxyXG4gIGNvbnN0IGwgPSBNYXRoLm1pbihNYXRoLmNlaWwoeDEgLSB4MCksIGR5KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdGlvbi5zY2FsZShwcm9qZWN0aW9uLnNjYWxlKCkgKiAobCAtIDEpIC8gbCkucHJlY2lzaW9uKDAuMilcclxuICB9LCBbcHJvamVjdGlvbiwgbF0pICBcclxuXHJcbiAgLy8gY29uc3QgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saWZlLWV4cGVjdGFuY3khJ1xyXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGU8c3RyaW5nPigpXHJcbiAgY29uc29sZS5sb2coMSwgbG9jYXRpb24pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHNldExvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKSwgW10pXHJcbiAgXHJcbiAgY29uc3QgaGVpZ2h0ID0gZHlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KVxyXG4gICAgY29uc3QgY291bnRyaWVzID0gc3ZnLnNlbGVjdCgnLmNvdW50cmllcycpXHJcblxyXG4gICAgc3ZnLmNhbGwoXHJcbiAgICAgIGQzLnpvb208dHlwZW9mIHN2Z1JlZi5jdXJyZW50LCBhbnk+KClcclxuICAgICAgICAuZXh0ZW50KFtbMCwgMF0sIFt3aWR0aCwgaGVpZ2h0XV0pXHJcbiAgICAgICAgLnNjYWxlRXh0ZW50KFsxLCA1XSlcclxuICAgICAgICAub24oJ3pvb20nLCB6b29tZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHpvb21lZCh7IHRyYW5zZm9ybSB9OiBhbnkpIHtcclxuICAgICAgY291bnRyaWVzLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNvdW50cmllc0ZlYXR1cmVzID0gY291bnRyaWVzLmZlYXR1cmVzLm1hcCgoY291bnRyeTogR2VvSlNPTi5GZWF0dXJlKSA9PiB7XHJcbiAgICBsZXQgeyBpZCB9ID0gY291bnRyeVxyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgaWQgPSBpZC50b1N0cmluZygpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9e2NvbG9yKGRhdGEuZ2V0KGlkKSEpfVxyXG4gICAgICAgIGQ9e3BhdGgoY291bnRyeSkhfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHRpdGxlPntjb3VudHJ5LnByb3BlcnRpZXM/Lm5hbWV9IHtkYXRhLmhhcyhpZCkgPyBkYXRhLmdldChpZCkgOiAnTi9BJ308L3RpdGxlPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgcmVmPXtzdmdSZWZ9XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9e1swLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpfSBcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnR9XHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxwYXRoIGlkPVwib3V0bGluZVwiIGQ9e3BhdGgob3V0bGluZSkgPz8gdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBcIj5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSAvPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgY2xpcC1wYXRoPXtgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWB9PlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwiY291bnRyaWVzXCI+XHJcbiAgICAgICAgICB7Y291bnRyaWVzRmVhdHVyZXN9XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPXtwYXRoKGJvdW5kcykgPz8gdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8dXNlXHJcbiAgICAgICAgICB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc0NzQ3NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=