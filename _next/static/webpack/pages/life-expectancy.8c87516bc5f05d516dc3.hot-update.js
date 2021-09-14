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
  var _window$location$toSt, _path;

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
  var height = dy;
  var location = (_window$location$toSt = window.location.toString()) !== null && _window$location$toSt !== void 0 ? _window$location$toSt : 'ssr'; //@ts-ignore

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
      d: path,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
        children: ["$", country.properties.name, " $", data.has(country.id) ? data.get(country.id) : 'N/A']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
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
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
        children: countriesFeatures
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJ3b3JsZCIsIm9iamVjdHMiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImNvdW50cmllc0ZlYXR1cmVzIiwiZmVhdHVyZXMiLCJtYXAiLCJjb3VudHJ5IiwiZ2V0IiwiaWQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsInN0eWxlcyIsImNoYXJ0IiwidW5kZWZpbmVkIiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFJO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxtQkFBbUIsZ0JBQUdDLGtEQUFJLFNBSTdCLGdCQUlHO0FBQUE7O0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsd0JBREpDLEtBQ0k7QUFBQSxNQURKQSxLQUNJ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QSw4QkFDRTtBQUNFLGlCQUFTLEVBQUUsSUFBSTRCLEdBQUosQ0FBUSxVQUFSLEVBQW9CNUIsUUFBcEIsRUFBOEJFLFFBQTlCLEVBRGI7QUFFRSxZQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFBLGtCQUFJYztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FO0FBQ0UsaUJBQVMsRUFBRSxJQUFJWSxHQUFKLENBQVEsVUFBUixFQUFvQjVCLFFBQXBCLEVBQThCRSxRQUE5QixFQURiO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxjQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0E3SStCLGtDQUFoQztNQUFNN0IsbUI7QUErSVNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS44Yzg3NTE2YmM1ZjA1ZDUxNmRjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGQgZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9ICh7IHR5cGU6ICdTcGhlcmUnIH0pXHJcblxyXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL3dvcmxkLWNob3JvcGxldGhcclxuY29uc3QgTGlmZUV4cGVjdGFuY3lDaGFydCA9IG1lbW88e1xyXG4gIGRhdGE6IGFueSxcclxuICBjb2xvcjogYW55LFxyXG4gIHdpZHRoPzogbnVtYmVyLFxyXG59Pigoe1xyXG4gIGRhdGEsXHJcbiAgY29sb3IsXHJcbiAgd2lkdGggPSA5NzAsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgY29uc3QgcHJvamVjdGlvbjogR2VvUHJvamVjdGlvbiA9IHVzZU1lbW8oKCkgPT4gZ2VvRXF1YWxFYXJ0aCgpLCBbXSlcclxuICBjb25zdCBwYXRoOiBHZW9QYXRoID0gdXNlTWVtbygoKSA9PiBnZW9QYXRoKHByb2plY3Rpb24pLCBbXSlcclxuXHJcbiAgY29uc3QgW1t4MCwgeTBdLCBbeDEsIHkxXV0gPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbi5maXRXaWR0aCh3aWR0aCwgb3V0bGluZSkpLmJvdW5kcyhvdXRsaW5lKSwgW10pXHJcbiAgY29uc3QgZHkgPSBNYXRoLmNlaWwoeTEgLSB5MClcclxuICBjb25zdCBsID0gTWF0aC5taW4oTWF0aC5jZWlsKHgxIC0geDApLCBkeSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3Rpb24uc2NhbGUocHJvamVjdGlvbi5zY2FsZSgpICogKGwgLSAxKSAvIGwpLnByZWNpc2lvbigwLjIpXHJcbiAgfSwgW3Byb2plY3Rpb24sIGxdKVxyXG4gIFxyXG4gIGNvbnN0IGhlaWdodCA9IGR5XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkgPz8gJ3NzcidcclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuXHJcbiAgICAvLyBDbGVhciBhIHByZXZpb3VzIGNoYXJ0XHJcbiAgICAvLyBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpXHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KVxyXG4gICAgICAvLyAuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxyXG4gICAgICAvLyAuYXR0cigndmlld0JveCcsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpKVxyXG5cclxuICAgIC8vIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJylcclxuXHJcbiAgICAvLyBkZWZzLmFwcGVuZCgncGF0aCcpXHJcbiAgICAvLyAgIC5hdHRyKCdpZCcsICdvdXRsaW5lJylcclxuICAgIC8vICAgLmF0dHIoJ2QnLCBwYXRoKG91dGxpbmUpKVxyXG5cclxuICAgIC8vIGRlZnMuYXBwZW5kKCdjbGlwUGF0aCcpXHJcbiAgICAvLyAgIC5hdHRyKCdpZCcsICdjbGlwJylcclxuICAgIC8vICAgLmFwcGVuZCgndXNlJylcclxuICAgIC8vICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG5cclxuICAgIC8vIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgLy8gLmF0dHIoJ2NsaXAtcGF0aCcsIGB1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYClcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgndXNlJylcclxuICAgIC8vICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ2cnKVxyXG4gICAgLy8gICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcclxuICAgIC8vICAgLmpvaW4oJ3BhdGgnKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGNvbG9yKGRhdGEuZ2V0KGQuaWQpKSlcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aClcclxuICAgIC8vICAgLmFwcGVuZCgndGl0bGUnKVxyXG4gICAgLy8gICAudGV4dChkID0+IHtcclxuICAgIC8vICAgICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgICByZXR1cm4gYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9ICR7ZGF0YS5oYXMoZC5pZCkgPyBkYXRhLmdldChkLmlkKSA6ICdOL0EnfWBcclxuICAgIC8vICAgfSlcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgncGF0aCcpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuZGF0dW0odG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSlcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAvLyAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcclxuICAgIC8vICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgLy8gICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgJyM3NDc0NzQnKVxyXG5cclxuICAgIHN2Zy5jYWxsKFxyXG4gICAgICBkMy56b29tPHR5cGVvZiBzdmdSZWYuY3VycmVudCwgYW55PigpXHJcbiAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbd2lkdGgsIGhlaWdodF1dKVxyXG4gICAgICAgIC5zY2FsZUV4dGVudChbMSwgN10pXHJcbiAgICAgICAgLm9uKCd6b29tJywgem9vbWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoeyB0cmFuc2Zvcm0gfTogYW55KSB7XHJcbiAgICAgIC8vIGcuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGNvdW50cmllc0ZlYXR1cmVzID0gY291bnRyaWVzLmZlYXR1cmVzLm1hcCgoY291bnRyeTogYW55KSA9PiAoXHJcbiAgICA8cGF0aFxyXG4gICAgICBmaWxsPXtjb2xvcihkYXRhLmdldChjb3VudHJ5LmlkKSl9XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBkPXtwYXRofVxyXG4gICAgPlxyXG4gICAgICA8dGl0bGU+JHtjb3VudHJ5LnByb3BlcnRpZXMubmFtZX0gJHtkYXRhLmhhcyhjb3VudHJ5LmlkKSA/IGRhdGEuZ2V0KGNvdW50cnkuaWQpIDogJ04vQSd9PC90aXRsZT5cclxuICAgIDwvcGF0aD5cclxuICApKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICByZWY9e3N2Z1JlZn1cclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD17WzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCl9IFxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFydH1cclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHBhdGggaWQ9XCJvdXRsaW5lXCIgZD17cGF0aChvdXRsaW5lKSA/PyB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFwiPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8ZyBjbGlwLXBhdGg9e2B1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYH0+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Zz57Y291bnRyaWVzRmVhdHVyZXN9PC9nPlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzQ3NDc0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==