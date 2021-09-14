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
  var _path2, _path3;

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
  var location = true ? window.location.toString() : undefined; //@ts-ignore

  var countries = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return topojson__WEBPACK_IMPORTED_MODULE_4__["feature"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__.objects.countries);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!svgRef.current) {
      return;
    }

    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](svgRef.current);
    var countries = svg.select('.countries');
    svg.call(d3__WEBPACK_IMPORTED_MODULE_2__["zoom"]().extent([[0, 0], [width, height]]).scaleExtent([1, 7]).on('zoom', zoomed));

    function zoomed(_ref2) {
      var transform = _ref2.transform;
      countries.attr('transform', transform);
    }
  }, []); //@ts-ignore

  var countriesFeatures = countries.features.map(function (country) {
    var _path;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
      fill: color(data.get(country.id)),
      d: (_path = path(country)) !== null && _path !== void 0 ? _path : undefined,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
        children: [country.properties.name, " ", data.has(country.id) ? data.get(country.id) : 'N/A']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
    d: (_path2 = path(bounds)) !== null && _path2 !== void 0 ? _path2 : undefined
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 27
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height,
    viewBox: [0, 0, width, height].toString(),
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.chart,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("defs", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
        id: "outline",
        d: (_path3 = path(outline)) !== null && _path3 !== void 0 ? _path3 : undefined
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
        className: "countries",
        children: [countriesFeatures, countriesBounds]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, _this);
}, "1IZ8TC2YLHQi0y+0hijlF1mU9Gg="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJ3b3JsZCIsIm9iamVjdHMiLCJjdXJyZW50Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImF0dHIiLCJjb3VudHJpZXNGZWF0dXJlcyIsImZlYXR1cmVzIiwibWFwIiwiY291bnRyeSIsImdldCIsImlkIiwidW5kZWZpbmVkIiwicHJvcGVydGllcyIsIm5hbWUiLCJoYXMiLCJhIiwiYiIsImNvdW50cmllc0JvdW5kcyIsInN0eWxlcyIsImNoYXJ0IiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFJO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxtQkFBbUIsZ0JBQUdDLGtEQUFJLFNBSTdCLGdCQUlHO0FBQUE7O0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsS0FFSSxR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TiwyQ0FBbUJxRDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFVLFVBQUUsRUFBQyxNQUFiO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFLElBQUlTLEdBQUosQ0FBUSxVQUFSLEVBQW9CakMsUUFBcEIsRUFBOEJFLFFBQTlCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFhRTtBQUFHLGlDQUFrQixJQUFJK0IsR0FBSixDQUFRLE9BQVIsRUFBaUJqQyxRQUFqQixDQUFsQixNQUFIO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFFLElBQUlpQyxHQUFKLENBQVEsVUFBUixFQUFvQmpDLFFBQXBCLEVBQThCRSxRQUE5QixFQURiO0FBRUUsWUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxtQkFDR2dCLGlCQURILEVBRUdZLGVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRTtBQUNFLGlCQUFTLEVBQUUsSUFBSUcsR0FBSixDQUFRLFVBQVIsRUFBb0JqQyxRQUFwQixFQUE4QkUsUUFBOUIsRUFEYjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsY0FBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBN0YrQixrQ0FBaEM7TUFBTTdCLG1CO0FBK0ZTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuNGM3NDJjMDFjZDY0YWI1OGNmMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbywgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IHsgZ2VvRXF1YWxFYXJ0aCwgR2VvUGF0aCwgZ2VvUGF0aCwgR2VvUHJvamVjdGlvbiwgR2VvU3BoZXJlIH0gZnJvbSAnZDMtZ2VvJ1xyXG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbidcclxuaW1wb3J0IHdvcmxkIGZyb20gJy4uLy4uL3N0b3JlL2NvdW50cmllcy01MG0uanNvbidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBvdXRsaW5lOiBHZW9TcGhlcmUgPSAoeyB0eXBlOiAnU3BoZXJlJyB9KVxyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBhbnksXHJcbiAgY29sb3I6IGFueSxcclxuICB3aWR0aD86IG51bWJlcixcclxufT4oKHtcclxuICBkYXRhLFxyXG4gIGNvbG9yLFxyXG4gIHdpZHRoID0gOTcwLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpXHJcblxyXG4gIGNvbnN0IHByb2plY3Rpb246IEdlb1Byb2plY3Rpb24gPSB1c2VNZW1vKCgpID0+IGdlb0VxdWFsRWFydGgoKSwgW10pXHJcbiAgY29uc3QgcGF0aDogR2VvUGF0aCA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uKSwgW10pXHJcblxyXG4gIGNvbnN0IFtbeDAsIHkwXSwgW3gxLCB5MV1dID0gdXNlTWVtbygoKSA9PiBnZW9QYXRoKHByb2plY3Rpb24uZml0V2lkdGgod2lkdGgsIG91dGxpbmUpKS5ib3VuZHMob3V0bGluZSksIFtdKVxyXG4gIGNvbnN0IGR5ID0gTWF0aC5jZWlsKHkxIC0geTApXHJcbiAgY29uc3QgbCA9IE1hdGgubWluKE1hdGguY2VpbCh4MSAtIHgwKSwgZHkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0aW9uLnNjYWxlKHByb2plY3Rpb24uc2NhbGUoKSAqIChsIC0gMSkgLyBsKS5wcmVjaXNpb24oMC4yKVxyXG4gIH0sIFtwcm9qZWN0aW9uLCBsXSlcclxuICBcclxuICBjb25zdCBoZWlnaHQgPSBkeVxyXG5cclxuICBjb25zdCBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xpZmUtZXhwZWN0YW5jeSdcclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBjb3VudHJpZXMgPSB1c2VNZW1vKCgpID0+IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IHN2Zy5zZWxlY3QoJy5jb3VudHJpZXMnKVxyXG5cclxuICAgIHN2Zy5jYWxsKFxyXG4gICAgICBkMy56b29tPHR5cGVvZiBzdmdSZWYuY3VycmVudCwgYW55PigpXHJcbiAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbd2lkdGgsIGhlaWdodF1dKVxyXG4gICAgICAgIC5zY2FsZUV4dGVudChbMSwgN10pXHJcbiAgICAgICAgLm9uKCd6b29tJywgem9vbWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoeyB0cmFuc2Zvcm0gfTogYW55KSB7XHJcbiAgICAgIGNvdW50cmllcy5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICAvL0B0cy1pZ25vcmVcclxuICBjb25zdCBjb3VudHJpZXNGZWF0dXJlcyA9IGNvdW50cmllcy5mZWF0dXJlcy5tYXAoKGNvdW50cnk6IGFueSkgPT4gKFxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD17Y29sb3IoZGF0YS5nZXQoY291bnRyeS5pZCkpfVxyXG4gICAgICBkPXtwYXRoKGNvdW50cnkpID8/IHVuZGVmaW5lZH1cclxuICAgID5cclxuICAgICAgPHRpdGxlPntjb3VudHJ5LnByb3BlcnRpZXMubmFtZX0ge2RhdGEuaGFzKGNvdW50cnkuaWQpID8gZGF0YS5nZXQoY291bnRyeS5pZCkgOiAnTi9BJ308L3RpdGxlPlxyXG4gICAgPC9wYXRoPlxyXG4gICkpXHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGJvdW5kcyA9IHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzLCAoYSwgYikgPT4gYSAhPT0gYilcclxuICBjb25zdCBjb3VudHJpZXNCb3VuZHMgPSA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPXtwYXRoKGJvdW5kcykgPz8gdW5kZWZpbmVkfS8+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHJlZj17c3ZnUmVmfVxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PXtbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKX0gXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0fVxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8cGF0aCBpZD1cIm91dGxpbmVcIiBkPXtwYXRoKG91dGxpbmUpID8/IHVuZGVmaW5lZH0gLz5cclxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwXCI+XHJcbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gLz5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxnIGNsaXAtcGF0aD17YHVybCgke25ldyBVUkwoJyNjbGlwJywgbG9jYXRpb24pfSlgfT5cclxuICAgICAgICA8dXNlXHJcbiAgICAgICAgICB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT1cImNvdW50cmllc1wiPlxyXG4gICAgICAgICAge2NvdW50cmllc0ZlYXR1cmVzfVxyXG4gICAgICAgICAge2NvdW50cmllc0JvdW5kc31cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiM3NDc0NzRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9