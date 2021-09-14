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
  var _path;

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


    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](svgRef.current); // .style('display', 'block')
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

    function zoomed(_ref2) {// g.attr('transform', transform);

      var transform = _ref2.transform;
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
        lineNumber: 121,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
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
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
        children: countriesFeatures
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJ3b3JsZCIsIm9iamVjdHMiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImNvdW50cmllc0ZlYXR1cmVzIiwiZmVhdHVyZXMiLCJtYXAiLCJjb3VudHJ5IiwiZ2V0IiwiaWQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsInN0eWxlcyIsImNoYXJ0IiwidW5kZWZpbmVkIiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFJO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxtQkFBbUIsZ0JBQUdDLGtEQUFJLFNBSTdCLGdCQUlHO0FBQUE7O0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsd0JBREpDLEtBQ0k7QUFBQSxNQURKQSxLQUNJ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T0FBUixFQUFpQjVCLFFBQWpCLENBQWxCLE1BQUg7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUUsSUFBSTRCLEdBQUosQ0FBUSxVQUFSLEVBQW9CNUIsUUFBcEIsRUFBOEJFLFFBQTlCLEVBRGI7QUFFRSxZQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFBLGtCQUFJYztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FO0FBQ0UsaUJBQVMsRUFBRSxJQUFJWSxHQUFKLENBQVEsVUFBUixFQUFvQjVCLFFBQXBCLEVBQThCRSxRQUE5QixFQURiO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxjQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0E5SStCLGtDQUFoQztNQUFNN0IsbUI7QUFnSlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS4wYTc5ZDRhYjQ2YjQ4MzAyZTg1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGQgZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9ICh7IHR5cGU6ICdTcGhlcmUnIH0pXHJcblxyXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL3dvcmxkLWNob3JvcGxldGhcclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDaGFydCA9IG1lbW88e1xyXG4gIGRhdGE6IGFueSxcclxuICBjb2xvcjogYW55LFxyXG4gIHdpZHRoPzogbnVtYmVyLFxyXG59Pigoe1xyXG4gIGRhdGEsXHJcbiAgY29sb3IsXHJcbiAgd2lkdGggPSA5NzAsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgY29uc3QgcHJvamVjdGlvbjogR2VvUHJvamVjdGlvbiA9IHVzZU1lbW8oKCkgPT4gZ2VvRXF1YWxFYXJ0aCgpLCBbXSlcclxuICBjb25zdCBwYXRoOiBHZW9QYXRoID0gdXNlTWVtbygoKSA9PiBnZW9QYXRoKHByb2plY3Rpb24pLCBbXSlcclxuXHJcbiAgY29uc3QgW1t4MCwgeTBdLCBbeDEsIHkxXV0gPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbi5maXRXaWR0aCh3aWR0aCwgb3V0bGluZSkpLmJvdW5kcyhvdXRsaW5lKSwgW10pXHJcbiAgY29uc3QgZHkgPSBNYXRoLmNlaWwoeTEgLSB5MClcclxuICBjb25zdCBsID0gTWF0aC5taW4oTWF0aC5jZWlsKHgxIC0geDApLCBkeSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3Rpb24uc2NhbGUocHJvamVjdGlvbi5zY2FsZSgpICogKGwgLSAxKSAvIGwpLnByZWNpc2lvbigwLjIpXHJcbiAgfSwgW3Byb2plY3Rpb24sIGxdKVxyXG4gIFxyXG4gIGNvbnN0IGhlaWdodCA9IGR5XHJcblxyXG4gIC8vIGNvbnN0IGxvY2F0aW9uID0gd2luZG93Py5sb2NhdGlvbj8udG9TdHJpbmcoKSA/PyAnc3NyJ1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlmZS1leHBlY3RhbmN5J1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIC8vIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5cclxuICAgIC8vIENsZWFyIGEgcHJldmlvdXMgY2hhcnRcclxuICAgIC8vIGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCkuc2VsZWN0QWxsKCcqJykucmVtb3ZlKClcclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICAgIC8vIC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXHJcbiAgICAgIC8vIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgLy8gY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKVxyXG5cclxuICAgIC8vIGRlZnMuYXBwZW5kKCdwYXRoJylcclxuICAgIC8vICAgLmF0dHIoJ2lkJywgJ291dGxpbmUnKVxyXG4gICAgLy8gICAuYXR0cignZCcsIHBhdGgob3V0bGluZSkpXHJcblxyXG4gICAgLy8gZGVmcy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgIC8vICAgLmF0dHIoJ2lkJywgJ2NsaXAnKVxyXG4gICAgLy8gICAuYXBwZW5kKCd1c2UnKVxyXG4gICAgLy8gICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgLy8gY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAvLyAuYXR0cignY2xpcC1wYXRoJywgYHVybCgke25ldyBVUkwoJyNjbGlwJywgbG9jYXRpb24pfSlgKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgLy8gICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgnZycpXHJcbiAgICAvLyAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxyXG4gICAgLy8gICAuam9pbigncGF0aCcpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3IoZGF0YS5nZXQoZC5pZCkpKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG4gICAgLy8gICAuYXBwZW5kKCd0aXRsZScpXHJcbiAgICAvLyAgIC50ZXh0KGQgPT4ge1xyXG4gICAgLy8gICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAgIHJldHVybiBgJHtkLnByb3BlcnRpZXMubmFtZX0gJHtkYXRhLmhhcyhkLmlkKSA/IGRhdGEuZ2V0KGQuaWQpIDogJ04vQSd9YFxyXG4gICAgLy8gICB9KVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCdwYXRoJylcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5kYXR1bSh0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpKVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZScsICd3aGl0ZScpXHJcbiAgICAvLyAgIC5hdHRyKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxyXG4gICAgLy8gICAuYXR0cignZCcsIHBhdGgpXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAvLyAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAvLyAgIC5hdHRyKCdzdHJva2UnLCAnIzc0NzQ3NCcpXHJcblxyXG4gICAgc3ZnLmNhbGwoXHJcbiAgICAgIGQzLnpvb208dHlwZW9mIHN2Z1JlZi5jdXJyZW50LCBhbnk+KClcclxuICAgICAgICAuZXh0ZW50KFtbMCwgMF0sIFt3aWR0aCwgaGVpZ2h0XV0pXHJcbiAgICAgICAgLnNjYWxlRXh0ZW50KFsxLCA3XSlcclxuICAgICAgICAub24oJ3pvb20nLCB6b29tZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHpvb21lZCh7IHRyYW5zZm9ybSB9OiBhbnkpIHtcclxuICAgICAgLy8gZy5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSBjb3VudHJpZXMuZmVhdHVyZXMubWFwKChjb3VudHJ5OiBhbnkpID0+IChcclxuICAgIDxwYXRoXHJcbiAgICAgIGZpbGw9e2NvbG9yKGRhdGEuZ2V0KGNvdW50cnkuaWQpKX1cclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGQ9e3BhdGgoY291bnRyeSl9XHJcbiAgICA+XHJcbiAgICAgIDx0aXRsZT57Y291bnRyeS5wcm9wZXJ0aWVzLm5hbWV9IHtkYXRhLmhhcyhjb3VudHJ5LmlkKSA/IGRhdGEuZ2V0KGNvdW50cnkuaWQpIDogJ04vQSd9PC90aXRsZT5cclxuICAgIDwvcGF0aD5cclxuICApKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICByZWY9e3N2Z1JlZn1cclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD17WzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCl9IFxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFydH1cclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHBhdGggaWQ9XCJvdXRsaW5lXCIgZD17cGF0aChvdXRsaW5lKSA/PyB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFwiPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8ZyBjbGlwLXBhdGg9e2B1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYH0+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Zz57Y291bnRyaWVzRmVhdHVyZXN9PC9nPlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzQ3NDc0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==