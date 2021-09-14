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
        children: [countriesFeatures, countriesBounds]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJ3b3JsZCIsIm9iamVjdHMiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImF0dHIiLCJjb3VudHJpZXNGZWF0dXJlcyIsImZlYXR1cmVzIiwibWFwIiwiY291bnRyeSIsImdldCIsImlkIiwicHJvcGVydGllcyIsIm5hbWUiLCJoYXMiLCJhIiwiYiIsImNvdW50cmllc0JvdW5kcyIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjaGFydCIsIlVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBa0IsR0FBSTtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUE1QixDLENBRUE7O0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHQyxrREFBSSxTQUk3QixnQkFJRztBQUFBOztBQUFBOztBQUFBLE1BSEpDLElBR0ksUUFISkEsSUFHSTtB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aUJBQVMsRUFBRSxJQUFJTSxHQUFKLENBQVEsVUFBUixFQUFvQm5DLFFBQXBCLEVBQThCRSxRQUE5QixFQURiO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxjQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0F6SitCLGtDQUFoQztNQUFNN0IsbUI7QUEySlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS43NDIzMjM1N2JlYzViNzEwMzdmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGQgZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9ICh7IHR5cGU6ICdTcGhlcmUnIH0pXHJcblxyXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL3dvcmxkLWNob3JvcGxldGhcclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDaGFydCA9IG1lbW88e1xyXG4gIGRhdGE6IGFueSxcclxuICBjb2xvcjogYW55LFxyXG4gIHdpZHRoPzogbnVtYmVyLFxyXG59Pigoe1xyXG4gIGRhdGEsXHJcbiAgY29sb3IsXHJcbiAgd2lkdGggPSA5NzAsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgY29uc3QgcHJvamVjdGlvbjogR2VvUHJvamVjdGlvbiA9IHVzZU1lbW8oKCkgPT4gZ2VvRXF1YWxFYXJ0aCgpLCBbXSlcclxuICBjb25zdCBwYXRoOiBHZW9QYXRoID0gdXNlTWVtbygoKSA9PiBnZW9QYXRoKHByb2plY3Rpb24pLCBbXSlcclxuXHJcbiAgY29uc3QgW1t4MCwgeTBdLCBbeDEsIHkxXV0gPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbi5maXRXaWR0aCh3aWR0aCwgb3V0bGluZSkpLmJvdW5kcyhvdXRsaW5lKSwgW10pXHJcbiAgY29uc3QgZHkgPSBNYXRoLmNlaWwoeTEgLSB5MClcclxuICBjb25zdCBsID0gTWF0aC5taW4oTWF0aC5jZWlsKHgxIC0geDApLCBkeSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3Rpb24uc2NhbGUocHJvamVjdGlvbi5zY2FsZSgpICogKGwgLSAxKSAvIGwpLnByZWNpc2lvbigwLjIpXHJcbiAgfSwgW3Byb2plY3Rpb24sIGxdKVxyXG4gIFxyXG4gIGNvbnN0IGhlaWdodCA9IGR5XHJcblxyXG4gIC8vIGNvbnN0IGxvY2F0aW9uID0gd2luZG93Py5sb2NhdGlvbj8udG9TdHJpbmcoKSA/PyAnc3NyJ1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlmZS1leHBlY3RhbmN5J1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIC8vIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5cclxuICAgIC8vIENsZWFyIGEgcHJldmlvdXMgY2hhcnRcclxuICAgIC8vIGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCkuc2VsZWN0QWxsKCcqJykucmVtb3ZlKClcclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSBzdmcuc2VsZWN0KCcuY291bnRyaWVzJylcclxuICAgICAgLy8gLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgICAgLy8gLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKSlcclxuXHJcbiAgICAvLyBjb25zdCBkZWZzID0gc3ZnLmFwcGVuZCgnZGVmcycpXHJcblxyXG4gICAgLy8gZGVmcy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgLy8gICAuYXR0cignaWQnLCAnb3V0bGluZScpXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aChvdXRsaW5lKSlcclxuXHJcbiAgICAvLyBkZWZzLmFwcGVuZCgnY2xpcFBhdGgnKVxyXG4gICAgLy8gICAuYXR0cignaWQnLCAnY2xpcCcpXHJcbiAgICAvLyAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAvLyAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuXHJcbiAgICAvLyBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC8vIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAvLyAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCdnJylcclxuICAgIC8vICAgLnNlbGVjdEFsbCgncGF0aCcpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXHJcbiAgICAvLyAgIC5qb2luKCdwYXRoJylcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgZCA9PiBjb2xvcihkYXRhLmdldChkLmlkKSkpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuYXR0cignZCcsIHBhdGgpXHJcbiAgICAvLyAgIC5hcHBlbmQoJ3RpdGxlJylcclxuICAgIC8vICAgLnRleHQoZCA9PiB7XHJcbiAgICAvLyAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgICAgcmV0dXJuIGAke2QucHJvcGVydGllcy5uYW1lfSAke2RhdGEuaGFzKGQuaWQpID8gZGF0YS5nZXQoZC5pZCkgOiAnTi9BJ31gXHJcbiAgICAvLyAgIH0pXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmRhdHVtKHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzLCAoYSwgYikgPT4gYSAhPT0gYikpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aClcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgndXNlJylcclxuICAgIC8vICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZScsICcjNzQ3NDc0JylcclxuXHJcbiAgICBzdmcuY2FsbChcclxuICAgICAgZDMuem9vbTx0eXBlb2Ygc3ZnUmVmLmN1cnJlbnQsIGFueT4oKVxyXG4gICAgICAgIC5leHRlbnQoW1swLCAwXSwgW3dpZHRoLCBoZWlnaHRdXSlcclxuICAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDddKVxyXG4gICAgICAgIC5vbignem9vbScsIHpvb21lZClcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbWVkKHsgdHJhbnNmb3JtIH06IGFueSkge1xyXG4gICAgICBjb3VudHJpZXMuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGNvdW50cmllc0ZlYXR1cmVzID0gY291bnRyaWVzLmZlYXR1cmVzLm1hcCgoY291bnRyeTogYW55KSA9PiAoXHJcbiAgICA8cGF0aFxyXG4gICAgICBmaWxsPXtjb2xvcihkYXRhLmdldChjb3VudHJ5LmlkKSl9XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBkPXtwYXRoKGNvdW50cnkpfVxyXG4gICAgPlxyXG4gICAgICA8dGl0bGU+e2NvdW50cnkucHJvcGVydGllcy5uYW1lfSB7ZGF0YS5oYXMoY291bnRyeS5pZCkgPyBkYXRhLmdldChjb3VudHJ5LmlkKSA6ICdOL0EnfTwvdGl0bGU+XHJcbiAgICA8L3BhdGg+XHJcbiAgKSlcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgYm91bmRzID0gdG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKVxyXG4gIGNvbnN0IGNvdW50cmllc0JvdW5kcyA9IDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9e3BhdGgoYm91bmRzKSA/PyB1bmRlZmluZWR9Lz5cclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc29sZS5sb2codG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgcmVmPXtzdmdSZWZ9XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9e1swLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpfSBcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnR9XHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxwYXRoIGlkPVwib3V0bGluZVwiIGQ9e3BhdGgob3V0bGluZSkgPz8gdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBcIj5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSAvPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgY2xpcC1wYXRoPXtgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWB9PlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwiY291bnRyaWVzXCI+XHJcbiAgICAgICAgICB7Y291bnRyaWVzRmVhdHVyZXN9XHJcbiAgICAgICAgICB7Y291bnRyaWVzQm91bmRzfVxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8dXNlXHJcbiAgICAgICAgICB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc0NzQ3NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=