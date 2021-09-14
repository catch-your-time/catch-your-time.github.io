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
}; // https://observablehq.com/@d3/world-choropleth

var LifeExpectancyChart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function (_ref) {
  var _path, _path2;

  _s();

  var data = _ref.data,
      color = _ref.color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 970 : _ref$width;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var projection = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoEqualEarth"])();
  }, []);
  var path = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])(projection);
  }, []);

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
  var height = dy; // const location = window?.location?.toString() ?? 'ssr'

  var location = true ? window.location.toString() : undefined; //@ts-ignore

  var countries = topojson__WEBPACK_IMPORTED_MODULE_4__["feature"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__.objects.countries);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!svgRef.current) {
      return;
    } // const location = window.location.toString()
    //@ts-ignore
    // const countries = topojson.feature(world, world.objects.countries)
    // Clear a previous chart
    // d3.select(svgRef.current).selectAll('*').remove()


    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](svgRef.current);
    var countries = svg.select('.countries'); // .style('display', 'block')
    // .attr('viewBox', [0, 0, width, height].toString())
    // const defs = svg.append('defs')
    // defs.append('path')
    //   .attr('id', 'outline')
    //   .attr('d', path(outline))
    // defs.append('clipPath')
    //   .attr('id', 'clip')
    //   .append('use')
    //   .attr('xlink:href', new URL('#outline', location).toString())
    // const g = svg.append('g')
    // .attr('clip-path', `url(${new URL('#clip', location)})`)
    // g.append('use')
    //   .attr('xlink:href', new URL('#outline', location).toString())
    //   .attr('fill', 'white')
    // g.append('g')
    //   .selectAll('path')
    //   //@ts-ignore
    //   .data(countries.features)
    //   .join('path')
    //   //@ts-ignore
    //   .attr('fill', d => color(data.get(d.id)))
    //   //@ts-ignore
    //   .attr('d', path)
    //   .append('title')
    //   .text(d => {
    //     //@ts-ignore
    //     return `${d.properties.name} ${data.has(d.id) ? data.get(d.id) : 'N/A'}`
    //   })
    // g.append('path')
    //   //@ts-ignore
    //   .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'white')
    //   .attr('stroke-linejoin', 'round')
    //   .attr('d', path)
    // g.append('use')
    //   .attr('xlink:href', new URL('#outline', location).toString())
    //   .attr('fill', 'none')
    //   .attr('stroke', '#747474')

    svg.call(d3__WEBPACK_IMPORTED_MODULE_2__["zoom"]().extent([[0, 0], [width, height]]).scaleExtent([1, 7]).on('zoom', zoomed));

    function zoomed(_ref2) {
      var transform = _ref2.transform;
      countries.attr('transform', transform);
    }
  }, [data]); //@ts-ignore

  var countriesFeatures = countries.features.map(function (country) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
      fill: color(data.get(country.id)) //@ts-ignore
      ,
      d: path(country),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
        children: [country.properties.name, " ", data.has(country.id) ? data.get(country.id) : 'N/A']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }, _this);
  }); //@ts-ignore

  var bounds = topojson__WEBPACK_IMPORTED_MODULE_4__["mesh"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__.objects.countries, function (a, b) {
    return a !== b;
  });

  var countriesBounds = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
    fill: "none",
    stroke: "white",
    "stroke-linejoin": "round",
    d: (_path = path(bounds)) !== null && _path !== void 0 ? _path : undefined
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 27
  }, _this); //@ts-ignore


  console.log(topojson__WEBPACK_IMPORTED_MODULE_4__["mesh"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__.objects.countries, function (a, b) {
    return a !== b;
  }));
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
        lineNumber: 142,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
        className: "countries",
        children: countriesFeatures
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this), countriesBounds, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, _this);
}, "3gpUYeZT+b9E8KNdWlkjs0+GJgk="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJ3b3JsZCIsIm9iamVjdHMiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImF0dHIiLCJjb3VudHJpZXNGZWF0dXJlcyIsImZlYXR1cmVzIiwibWFwIiwiY291bnRyeSIsImdldCIsImlkIiwicHJvcGVydGllcyIsIm5hbWUiLCJoYXMiLCJhIiwiYiIsImNvdW50cmllc0JvdW5kcyIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjaGFydCIsIlVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBa0IsR0FBSTtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUE1QixDLENBRUE7O0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHQyxrREFBSSxTQUk3QixnQkFJRztBQUFBOztBQUFBOztBQUFBLE1BSEpDLElBR0ksUUFISkEsSUFHSTtB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UyxFQUFFLElBQUlNLEdBQUosQ0FBUSxVQUFSLEVBQW9CbkMsUUFBcEIsRUFBOEJFLFFBQTlCLEVBRGI7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLGNBQU0sRUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQXZKK0Isa0NBQWhDO01BQU03QixtQjtBQXlKU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LjVmNWY1MzgyZTQxN2Q5ZDhmZGFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZU1lbW8sIG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCB7IGdlb0VxdWFsRWFydGgsIEdlb1BhdGgsIGdlb1BhdGgsIEdlb1Byb2plY3Rpb24sIEdlb1NwaGVyZSB9IGZyb20gJ2QzLWdlbydcclxuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nXHJcbmltcG9ydCB3b3JsZCBmcm9tICcuLi8uLi9zdG9yZS9jb3VudHJpZXMtNTBtLmpzb24nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgb3V0bGluZTogR2VvU3BoZXJlID0gKHsgdHlwZTogJ1NwaGVyZScgfSlcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogYW55LFxyXG4gIGNvbG9yOiBhbnksXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCA9IDk3MCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICBjb25zdCBwcm9qZWN0aW9uOiBHZW9Qcm9qZWN0aW9uID0gdXNlTWVtbygoKSA9PiBnZW9FcXVhbEVhcnRoKCksIFtdKVxyXG4gIGNvbnN0IHBhdGg6IEdlb1BhdGggPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbiksIFtdKVxyXG5cclxuICBjb25zdCBbW3gwLCB5MF0sIFt4MSwgeTFdXSA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uLmZpdFdpZHRoKHdpZHRoLCBvdXRsaW5lKSkuYm91bmRzKG91dGxpbmUpLCBbXSlcclxuICBjb25zdCBkeSA9IE1hdGguY2VpbCh5MSAtIHkwKVxyXG4gIGNvbnN0IGwgPSBNYXRoLm1pbihNYXRoLmNlaWwoeDEgLSB4MCksIGR5KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdGlvbi5zY2FsZShwcm9qZWN0aW9uLnNjYWxlKCkgKiAobCAtIDEpIC8gbCkucHJlY2lzaW9uKDAuMilcclxuICB9LCBbcHJvamVjdGlvbiwgbF0pXHJcbiAgXHJcbiAgY29uc3QgaGVpZ2h0ID0gZHlcclxuXHJcbiAgLy8gY29uc3QgbG9jYXRpb24gPSB3aW5kb3c/LmxvY2F0aW9uPy50b1N0cmluZygpID8/ICdzc3InXHJcbiAgY29uc3QgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saWZlLWV4cGVjdGFuY3knXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcblxyXG4gICAgLy8gQ2xlYXIgYSBwcmV2aW91cyBjaGFydFxyXG4gICAgLy8gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IHN2Zy5zZWxlY3QoJy5jb3VudHJpZXMnKVxyXG4gICAgICAvLyAuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxyXG4gICAgICAvLyAuYXR0cigndmlld0JveCcsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpKVxyXG5cclxuICAgIC8vIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJylcclxuXHJcbiAgICAvLyBkZWZzLmFwcGVuZCgncGF0aCcpXHJcbiAgICAvLyAgIC5hdHRyKCdpZCcsICdvdXRsaW5lJylcclxuICAgIC8vICAgLmF0dHIoJ2QnLCBwYXRoKG91dGxpbmUpKVxyXG5cclxuICAgIC8vIGRlZnMuYXBwZW5kKCdjbGlwUGF0aCcpXHJcbiAgICAvLyAgIC5hdHRyKCdpZCcsICdjbGlwJylcclxuICAgIC8vICAgLmFwcGVuZCgndXNlJylcclxuICAgIC8vICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG5cclxuICAgIC8vIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgLy8gLmF0dHIoJ2NsaXAtcGF0aCcsIGB1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYClcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgndXNlJylcclxuICAgIC8vICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ2cnKVxyXG4gICAgLy8gICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcclxuICAgIC8vICAgLmpvaW4oJ3BhdGgnKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGNvbG9yKGRhdGEuZ2V0KGQuaWQpKSlcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aClcclxuICAgIC8vICAgLmFwcGVuZCgndGl0bGUnKVxyXG4gICAgLy8gICAudGV4dChkID0+IHtcclxuICAgIC8vICAgICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgICByZXR1cm4gYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9ICR7ZGF0YS5oYXMoZC5pZCkgPyBkYXRhLmdldChkLmlkKSA6ICdOL0EnfWBcclxuICAgIC8vICAgfSlcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgncGF0aCcpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuZGF0dW0odG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSlcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAvLyAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcclxuICAgIC8vICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgLy8gICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgJyM3NDc0NzQnKVxyXG5cclxuICAgIHN2Zy5jYWxsKFxyXG4gICAgICBkMy56b29tPHR5cGVvZiBzdmdSZWYuY3VycmVudCwgYW55PigpXHJcbiAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbd2lkdGgsIGhlaWdodF1dKVxyXG4gICAgICAgIC5zY2FsZUV4dGVudChbMSwgN10pXHJcbiAgICAgICAgLm9uKCd6b29tJywgem9vbWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoeyB0cmFuc2Zvcm0gfTogYW55KSB7XHJcbiAgICAgIGNvdW50cmllcy5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSBjb3VudHJpZXMuZmVhdHVyZXMubWFwKChjb3VudHJ5OiBhbnkpID0+IChcclxuICAgIDxwYXRoXHJcbiAgICAgIGZpbGw9e2NvbG9yKGRhdGEuZ2V0KGNvdW50cnkuaWQpKX1cclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGQ9e3BhdGgoY291bnRyeSl9XHJcbiAgICA+XHJcbiAgICAgIDx0aXRsZT57Y291bnRyeS5wcm9wZXJ0aWVzLm5hbWV9IHtkYXRhLmhhcyhjb3VudHJ5LmlkKSA/IGRhdGEuZ2V0KGNvdW50cnkuaWQpIDogJ04vQSd9PC90aXRsZT5cclxuICAgIDwvcGF0aD5cclxuICApKVxyXG5cclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBib3VuZHMgPSB0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpXHJcbiAgY29uc3QgY291bnRyaWVzQm91bmRzID0gPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD17cGF0aChib3VuZHMpID8/IHVuZGVmaW5lZH0vPlxyXG5cclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zb2xlLmxvZyh0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICByZWY9e3N2Z1JlZn1cclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD17WzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCl9IFxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFydH1cclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHBhdGggaWQ9XCJvdXRsaW5lXCIgZD17cGF0aChvdXRsaW5lKSA/PyB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFwiPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8ZyBjbGlwLXBhdGg9e2B1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYH0+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJjb3VudHJpZXNcIj57Y291bnRyaWVzRmVhdHVyZXN9PC9nPlxyXG4gICAgICAgIHtjb3VudHJpZXNCb3VuZHN9XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiM3NDc0NzRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9