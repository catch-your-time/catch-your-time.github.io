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
      d: path,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
        children: ["$", country.properties.name, " $", data.has(country.id) ? data.get(country.id) : 'N/A']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJ3b3JsZCIsIm9iamVjdHMiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImNvdW50cmllc0ZlYXR1cmVzIiwiZmVhdHVyZXMiLCJtYXAiLCJjb3VudHJ5IiwiZ2V0IiwiaWQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsInN0eWxlcyIsImNoYXJ0IiwidW5kZWZpbmVkIiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFJO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxtQkFBbUIsZ0JBQUdDLGtEQUFJLFNBSTdCLGdCQUlHO0FBQUE7O0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsd0JBREpDLEtBQ0k7QUFBQSxNQURKQSxLQUNJ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akIsQ0FBbEIsTUFBSDtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBRSxJQUFJNEIsR0FBSixDQUFRLFVBQVIsRUFBb0I1QixRQUFwQixFQUE4QkUsUUFBOUIsRUFEYjtBQUVFLFlBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUEsa0JBQUljO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFDRSxpQkFBUyxFQUFFLElBQUlZLEdBQUosQ0FBUSxVQUFSLEVBQW9CNUIsUUFBcEIsRUFBOEJFLFFBQTlCLEVBRGI7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLGNBQU0sRUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQTlJK0Isa0NBQWhDO01BQU03QixtQjtBQWdKU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5Ljk1ODA0Y2M4MzJlMzFlODQ1N2I5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZU1lbW8sIG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCB7IGdlb0VxdWFsRWFydGgsIEdlb1BhdGgsIGdlb1BhdGgsIEdlb1Byb2plY3Rpb24sIEdlb1NwaGVyZSB9IGZyb20gJ2QzLWdlbydcclxuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nXHJcbmltcG9ydCB3b3JsZCBmcm9tICcuLi8uLi9zdG9yZS9jb3VudHJpZXMtNTBtLmpzb24nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgb3V0bGluZTogR2VvU3BoZXJlID0gKHsgdHlwZTogJ1NwaGVyZScgfSlcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogYW55LFxyXG4gIGNvbG9yOiBhbnksXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCA9IDk3MCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICBjb25zdCBwcm9qZWN0aW9uOiBHZW9Qcm9qZWN0aW9uID0gdXNlTWVtbygoKSA9PiBnZW9FcXVhbEVhcnRoKCksIFtdKVxyXG4gIGNvbnN0IHBhdGg6IEdlb1BhdGggPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbiksIFtdKVxyXG5cclxuICBjb25zdCBbW3gwLCB5MF0sIFt4MSwgeTFdXSA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uLmZpdFdpZHRoKHdpZHRoLCBvdXRsaW5lKSkuYm91bmRzKG91dGxpbmUpLCBbXSlcclxuICBjb25zdCBkeSA9IE1hdGguY2VpbCh5MSAtIHkwKVxyXG4gIGNvbnN0IGwgPSBNYXRoLm1pbihNYXRoLmNlaWwoeDEgLSB4MCksIGR5KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdGlvbi5zY2FsZShwcm9qZWN0aW9uLnNjYWxlKCkgKiAobCAtIDEpIC8gbCkucHJlY2lzaW9uKDAuMilcclxuICB9LCBbcHJvamVjdGlvbiwgbF0pXHJcbiAgXHJcbiAgY29uc3QgaGVpZ2h0ID0gZHlcclxuXHJcbiAgLy8gY29uc3QgbG9jYXRpb24gPSB3aW5kb3c/LmxvY2F0aW9uPy50b1N0cmluZygpID8/ICdzc3InXHJcbiAgY29uc3QgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saWZlLWV4cGVjdGFuY3knXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcblxyXG4gICAgLy8gQ2xlYXIgYSBwcmV2aW91cyBjaGFydFxyXG4gICAgLy8gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgICAgLy8gLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgICAgLy8gLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKSlcclxuXHJcbiAgICAvLyBjb25zdCBkZWZzID0gc3ZnLmFwcGVuZCgnZGVmcycpXHJcblxyXG4gICAgLy8gZGVmcy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgLy8gICAuYXR0cignaWQnLCAnb3V0bGluZScpXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aChvdXRsaW5lKSlcclxuXHJcbiAgICAvLyBkZWZzLmFwcGVuZCgnY2xpcFBhdGgnKVxyXG4gICAgLy8gICAuYXR0cignaWQnLCAnY2xpcCcpXHJcbiAgICAvLyAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAvLyAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuXHJcbiAgICAvLyBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC8vIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAvLyAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCdnJylcclxuICAgIC8vICAgLnNlbGVjdEFsbCgncGF0aCcpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXHJcbiAgICAvLyAgIC5qb2luKCdwYXRoJylcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgZCA9PiBjb2xvcihkYXRhLmdldChkLmlkKSkpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuYXR0cignZCcsIHBhdGgpXHJcbiAgICAvLyAgIC5hcHBlbmQoJ3RpdGxlJylcclxuICAgIC8vICAgLnRleHQoZCA9PiB7XHJcbiAgICAvLyAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgICAgcmV0dXJuIGAke2QucHJvcGVydGllcy5uYW1lfSAke2RhdGEuaGFzKGQuaWQpID8gZGF0YS5nZXQoZC5pZCkgOiAnTi9BJ31gXHJcbiAgICAvLyAgIH0pXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmRhdHVtKHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzLCAoYSwgYikgPT4gYSAhPT0gYikpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aClcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgndXNlJylcclxuICAgIC8vICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZScsICcjNzQ3NDc0JylcclxuXHJcbiAgICBzdmcuY2FsbChcclxuICAgICAgZDMuem9vbTx0eXBlb2Ygc3ZnUmVmLmN1cnJlbnQsIGFueT4oKVxyXG4gICAgICAgIC5leHRlbnQoW1swLCAwXSwgW3dpZHRoLCBoZWlnaHRdXSlcclxuICAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDddKVxyXG4gICAgICAgIC5vbignem9vbScsIHpvb21lZClcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbWVkKHsgdHJhbnNmb3JtIH06IGFueSkge1xyXG4gICAgICAvLyBnLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBjb3VudHJpZXNGZWF0dXJlcyA9IGNvdW50cmllcy5mZWF0dXJlcy5tYXAoKGNvdW50cnk6IGFueSkgPT4gKFxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD17Y29sb3IoZGF0YS5nZXQoY291bnRyeS5pZCkpfVxyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgZD17cGF0aH1cclxuICAgID5cclxuICAgICAgPHRpdGxlPiR7Y291bnRyeS5wcm9wZXJ0aWVzLm5hbWV9ICR7ZGF0YS5oYXMoY291bnRyeS5pZCkgPyBkYXRhLmdldChjb3VudHJ5LmlkKSA6ICdOL0EnfTwvdGl0bGU+XHJcbiAgICA8L3BhdGg+XHJcbiAgKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgcmVmPXtzdmdSZWZ9XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9e1swLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpfSBcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnR9XHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxwYXRoIGlkPVwib3V0bGluZVwiIGQ9e3BhdGgob3V0bGluZSkgPz8gdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBcIj5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSAvPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgY2xpcC1wYXRoPXtgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWB9PlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGc+e2NvdW50cmllc0ZlYXR1cmVzfTwvZz5cclxuICAgICAgICA8dXNlXHJcbiAgICAgICAgICB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc0NzQ3NFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=