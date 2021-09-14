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
  });

  var countriesBounds = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
    fill: "none",
    stroke: "white",
    "stroke-linejoin": "round",
    d: path(topojson__WEBPACK_IMPORTED_MODULE_4__["mesh"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__.objects.countries, function (a, b) {
      return a !== b;
    }))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
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
        d: (_path = path(outline)) !== null && _path !== void 0 ? _path : undefined
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
        className: "countries",
        children: countriesFeatures
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, _this), countriesBounds, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJ3b3JsZCIsIm9iamVjdHMiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImF0dHIiLCJjb3VudHJpZXNGZWF0dXJlcyIsImZlYXR1cmVzIiwibWFwIiwiY291bnRyeSIsImdldCIsImlkIiwicHJvcGVydGllcyIsIm5hbWUiLCJoYXMiLCJjb3VudHJpZXNCb3VuZHMiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjaGFydCIsInVuZGVmaW5lZCIsIlVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBa0IsR0FBSTtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUE1QixDLENBRUE7O0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHQyxrREFBSSxTQUk3QixnQkFJRztBQUFBOztBQUFBOztBQUFBLE1BSEpDLElBR0ksUUFISkEsSUFHSTtB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RUFEYjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsY0FBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBckorQixrQ0FBaEM7TUFBTTdCLG1CO0FBdUpTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuYzVmNzM3MWU3NzUyNzU0ZjFiYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbywgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IHsgZ2VvRXF1YWxFYXJ0aCwgR2VvUGF0aCwgZ2VvUGF0aCwgR2VvUHJvamVjdGlvbiwgR2VvU3BoZXJlIH0gZnJvbSAnZDMtZ2VvJ1xyXG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbidcclxuaW1wb3J0IHdvcmxkIGZyb20gJy4uLy4uL3N0b3JlL2NvdW50cmllcy01MG0uanNvbidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBvdXRsaW5lOiBHZW9TcGhlcmUgPSAoeyB0eXBlOiAnU3BoZXJlJyB9KVxyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBhbnksXHJcbiAgY29sb3I6IGFueSxcclxuICB3aWR0aD86IG51bWJlcixcclxufT4oKHtcclxuICBkYXRhLFxyXG4gIGNvbG9yLFxyXG4gIHdpZHRoID0gOTcwLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpXHJcblxyXG4gIGNvbnN0IHByb2plY3Rpb246IEdlb1Byb2plY3Rpb24gPSB1c2VNZW1vKCgpID0+IGdlb0VxdWFsRWFydGgoKSwgW10pXHJcbiAgY29uc3QgcGF0aDogR2VvUGF0aCA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uKSwgW10pXHJcblxyXG4gIGNvbnN0IFtbeDAsIHkwXSwgW3gxLCB5MV1dID0gdXNlTWVtbygoKSA9PiBnZW9QYXRoKHByb2plY3Rpb24uZml0V2lkdGgod2lkdGgsIG91dGxpbmUpKS5ib3VuZHMob3V0bGluZSksIFtdKVxyXG4gIGNvbnN0IGR5ID0gTWF0aC5jZWlsKHkxIC0geTApXHJcbiAgY29uc3QgbCA9IE1hdGgubWluKE1hdGguY2VpbCh4MSAtIHgwKSwgZHkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0aW9uLnNjYWxlKHByb2plY3Rpb24uc2NhbGUoKSAqIChsIC0gMSkgLyBsKS5wcmVjaXNpb24oMC4yKVxyXG4gIH0sIFtwcm9qZWN0aW9uLCBsXSlcclxuICBcclxuICBjb25zdCBoZWlnaHQgPSBkeVxyXG5cclxuICAvLyBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdz8ubG9jYXRpb24/LnRvU3RyaW5nKCkgPz8gJ3NzcidcclxuICBjb25zdCBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xpZmUtZXhwZWN0YW5jeSdcclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuXHJcbiAgICAvLyBDbGVhciBhIHByZXZpb3VzIGNoYXJ0XHJcbiAgICAvLyBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpXHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KVxyXG4gICAgY29uc3QgY291bnRyaWVzID0gc3ZnLnNlbGVjdCgnLmNvdW50cmllcycpXHJcbiAgICAgIC8vIC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXHJcbiAgICAgIC8vIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgLy8gY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKVxyXG5cclxuICAgIC8vIGRlZnMuYXBwZW5kKCdwYXRoJylcclxuICAgIC8vICAgLmF0dHIoJ2lkJywgJ291dGxpbmUnKVxyXG4gICAgLy8gICAuYXR0cignZCcsIHBhdGgob3V0bGluZSkpXHJcblxyXG4gICAgLy8gZGVmcy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgIC8vICAgLmF0dHIoJ2lkJywgJ2NsaXAnKVxyXG4gICAgLy8gICAuYXBwZW5kKCd1c2UnKVxyXG4gICAgLy8gICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgLy8gY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAvLyAuYXR0cignY2xpcC1wYXRoJywgYHVybCgke25ldyBVUkwoJyNjbGlwJywgbG9jYXRpb24pfSlgKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgLy8gICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuXHJcbiAgICAvLyBnLmFwcGVuZCgnZycpXHJcbiAgICAvLyAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxyXG4gICAgLy8gICAuam9pbigncGF0aCcpXHJcbiAgICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3IoZGF0YS5nZXQoZC5pZCkpKVxyXG4gICAgLy8gICAvL0B0cy1pZ25vcmVcclxuICAgIC8vICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG4gICAgLy8gICAuYXBwZW5kKCd0aXRsZScpXHJcbiAgICAvLyAgIC50ZXh0KGQgPT4ge1xyXG4gICAgLy8gICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gICAgIHJldHVybiBgJHtkLnByb3BlcnRpZXMubmFtZX0gJHtkYXRhLmhhcyhkLmlkKSA/IGRhdGEuZ2V0KGQuaWQpIDogJ04vQSd9YFxyXG4gICAgLy8gICB9KVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCdwYXRoJylcclxuICAgIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgICAvLyAgIC5kYXR1bSh0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpKVxyXG4gICAgLy8gICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZScsICd3aGl0ZScpXHJcbiAgICAvLyAgIC5hdHRyKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxyXG4gICAgLy8gICAuYXR0cignZCcsIHBhdGgpXHJcblxyXG4gICAgLy8gZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAvLyAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAvLyAgIC5hdHRyKCdzdHJva2UnLCAnIzc0NzQ3NCcpXHJcblxyXG4gICAgc3ZnLmNhbGwoXHJcbiAgICAgIGQzLnpvb208dHlwZW9mIHN2Z1JlZi5jdXJyZW50LCBhbnk+KClcclxuICAgICAgICAuZXh0ZW50KFtbMCwgMF0sIFt3aWR0aCwgaGVpZ2h0XV0pXHJcbiAgICAgICAgLnNjYWxlRXh0ZW50KFsxLCA3XSlcclxuICAgICAgICAub24oJ3pvb20nLCB6b29tZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHpvb21lZCh7IHRyYW5zZm9ybSB9OiBhbnkpIHtcclxuICAgICAgY291bnRyaWVzLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBjb3VudHJpZXNGZWF0dXJlcyA9IGNvdW50cmllcy5mZWF0dXJlcy5tYXAoKGNvdW50cnk6IGFueSkgPT4gKFxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD17Y29sb3IoZGF0YS5nZXQoY291bnRyeS5pZCkpfVxyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgZD17cGF0aChjb3VudHJ5KX1cclxuICAgID5cclxuICAgICAgPHRpdGxlPntjb3VudHJ5LnByb3BlcnRpZXMubmFtZX0ge2RhdGEuaGFzKGNvdW50cnkuaWQpID8gZGF0YS5nZXQoY291bnRyeS5pZCkgOiAnTi9BJ308L3RpdGxlPlxyXG4gICAgPC9wYXRoPlxyXG4gICkpXHJcblxyXG4gIGNvbnN0IGNvdW50cmllc0JvdW5kcyA9IDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9e3BhdGgodG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSl9Lz5cclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc29sZS5sb2codG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgcmVmPXtzdmdSZWZ9XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHZpZXdCb3g9e1swLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpfSBcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnR9XHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxwYXRoIGlkPVwib3V0bGluZVwiIGQ9e3BhdGgob3V0bGluZSkgPz8gdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBcIj5cclxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSAvPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgY2xpcC1wYXRoPXtgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWB9PlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwiY291bnRyaWVzXCI+e2NvdW50cmllc0ZlYXR1cmVzfTwvZz5cclxuICAgICAgICB7Y291bnRyaWVzQm91bmRzfVxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzQ3NDc0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==