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
var path = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])(projection);
var location = true ? window.location.toString() : undefined; // https://observablehq.com/@d3/world-choropleth

var LifeExpectancyChart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function (_ref) {
  var _path2;

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
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this);
  });
  var boundsPath = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _path;

    return (_path = path(bounds)) !== null && _path !== void 0 ? _path : undefined;
  }, [bounds, width]);
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
}, "qx0OxsQ1B14qoTXz93vorAxJ5RE="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwid29ybGQiLCJ3b3JsZE9iaiIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsImJvdW5kcyIsImEiLCJiIiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsImxvY2F0aW9uIiwid2luZG93IiwidG9TdHJpbmciLCJMaWZlRXhwZWN0YW5jeUNoYXJ0IiwibWVtbyIsImRhdGEiLCJjb2xvciIsIndpZHRoIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlTWVtbyIsImZpdFdpZHRoIiwieDAiLCJ5MCIsIngxIiwieTEiLCJkeSIsIk1hdGgiLCJjZWlsIiwibCIsIm1pbiIsInVzZUVmZmVjdCIsInNjYWxlIiwicHJlY2lzaW9uIiwiaGVpZ2h0IiwiY3VycmVudCIsInN2ZyIsImQzIiwic2VsZWN0IiwiY2FsbCIsImV4dGVudCIsInNjYWxlRXh0ZW50Iiwib24iLCJ6b29tZWQiLCJ0cmFuc2Zvcm0iLCJhdHRyIiwiY291bnRyaWVzRmVhdHVyZXMiLCJmZWF0dXJlcyIsIm1hcCIsImNvdW50cnkiLCJpZCIsImdldCIsInByb3BlcnRpZXMiLCJuYW1lIiwiaGFzIiwiYm91bmRzUGF0aCIsInVuZGVmaW5lZCIsInN0eWxlcyIsImNoYXJ0IiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFHO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTNCO0FBQ0EsSUFBTUMsS0FBMEIsR0FBR0Msc0RBQW5DO0FBQ0EsSUFBTUMsU0FBb0MsR0FBR0MsZ0RBQUEsQ0FBaUJILEtBQWpCLEVBQXdCQSxLQUFLLENBQUNJLE9BQU4sQ0FBY0YsU0FBdEMsQ0FBN0M7QUFDQSxJQUFNRyxNQUErQixHQUFHRiw2Q0FBQSxDQUFjSCxLQUFkLEVBQXFCQSxLQUFLLENBQUNJLE9BQU4sQ0FBY0YsU0FBbkMsRUFBOEMsVUFBQ0ksQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVUQsQ0FBQyxLQUFLQyxDQUFoQjtBQUFBLENBQTlDLENBQXhDO0FBQ0EsSUFBTUMsVUFBeUIsR0FBR0MsNERBQWEsRUFBL0M7QUFDQSxJQUFNQyxJQUFhLEdBQUdDLHNEQUFPLENBQUNILFVBQUQsQ0FBN0I7QUFDQSxJQUFNSSxRQUFRLEdBQUcsT0FBZ0NDLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsUUFBaEIsRUFBaEMsR0FBNkQsU0FBOUUsQyxDQUVBOztBQUNBLElBQU1DLG1CQUFtQixnQkFBR0Msa0RBQUksU0FJN0IsZ0JBSUc7QUFBQTs7QUFBQTs7QUFBQSxNQUhKQyxJQUdJLFFBSEpBLElBR0k7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQWdCLElBQWhCLENBQXJCOztBQURJLGlCQUd5QkMscURBQU8sQ0FBQztBQUFBLFdBQU1YLHNEQUFPLENBQUNILFVBQVUsQ0FBQ2UsUUFBWCxDQUFvQkosS0FBcEIsRUFBMkJyQixPQUEzQixDQUFELENBQVAsQ0FBNkNPLE1BQTdDLENBQW9EUCxPQUFwRCxDQUFOO0FBQUEsR0FBRCxFQUFxRSxDQUFDcUIsS0FBRCxDQUFyRSxDQUhoQztBQUFBO0FBQUEsTUFHSUssRUFISjtBQUFBLE1BR1FDLEVBSFI7QUFBQTtBQUFBLE1BR2NDLEVBSGQ7QUFBQSxNQUdrQkMsRUFIbEI7O0FBSUosTUFBTUMsRUFBRSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsRUFBRSxHQUFHRixFQUFmLENBQVg7QUFDQSxNQUFNTSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTSCxJQUFJLENBQUNDLElBQUwsQ0FBVUosRUFBRSxHQUFHRixFQUFmLENBQVQsRUFBNkJJLEVBQTdCLENBQVY7QUFFQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2R6QixjQUFVLENBQUMwQixLQUFYLENBQWlCMUIsVUFBVSxDQUFDMEIsS0FBWCxNQUFzQkgsQ0FBQyxHQUFHLENBQTFCLElBQStCQSxDQUFoRCxFQUFtREksU0FBbkQsQ0FBNkQsR0FBN0Q7QUFDRCxHQUZRLEVBRU4sQ0FBQzNCLFVBQUQsRUFBYXVCLENBQWIsQ0FGTSxDQUFUO0FBSUEsTUFBTUssTUFBTSxHQUFHUixFQUFmO0FBRUFLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ2IsTUFBTSxDQUFDaUIsT0FBWixFQUFxQjtBQUNuQjtBQUNEOztBQUVELFFBQU1DLEdBQUcsR0FBR0MseUNBQUEsQ0FBVW5CLE1BQU0sQ0FBQ2lCLE9BQWpCLENBQVo7QUFDQSxRQUFNbkMsU0FBUyxHQUFHb0MsR0FBRyxDQUFDRSxNQUFKLENBQVcsWUFBWCxDQUFsQjtBQUVBRixPQUFHLENBQUNHLElBQUosQ0FDRUYsdUNBQUEsR0FDR0csTUFESCxDQUNVLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQ3ZCLEtBQUQsRUFBUWlCLE1BQVIsQ0FBVCxDQURWLEVBRUdPLFdBRkgsQ0FFZSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRmYsRUFHR0MsRUFISCxDQUdNLE1BSE4sRUFHY0MsTUFIZCxDQURGOztBQU9BLGFBQVNBLE1BQVQsUUFBb0M7QUFBQSxVQUFsQkMsU0FBa0IsU0FBbEJBLFNBQWtCO0FBQ2xDNUMsZUFBUyxDQUFDNkMsSUFBVixDQUFlLFdBQWYsRUFBNEJELFNBQTVCO0FBQ0Q7QUFDRixHQWxCUSxFQWtCTixFQWxCTSxDQUFUO0FBb0JBLE1BQU1FLGlCQUFpQixHQUFHOUMsU0FBUyxDQUFDK0MsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsT0FBRCxFQUE4QjtBQUFBOztBQUFBLFFBQ3ZFQyxFQUR1RSxHQUNoRUQsT0FEZ0UsQ0FDdkVDLEVBRHVFOztBQUU3RSxRQUFJLENBQUNBLEVBQUwsRUFBUztBQUNQLGFBQU8sSUFBUDtBQUNEOztBQUNEQSxNQUFFLEdBQUdBLEVBQUUsQ0FBQ3RDLFFBQUgsRUFBTDtBQUNBLHdCQUNFO0FBQ0UsVUFBSSxFQUFFSSxLQUFLLENBQUNELElBQUksQ0FBQ29DLEdBQUwsQ0FBU0QsRUFBVCxDQUFELENBRGI7QUFFRSxPQUFDLEVBQUUxQyxJQUFJLENBQUN5QyxPQUFELENBRlQ7QUFBQSw2QkFJRTtBQUFBLDBDQUFRQSxPQUFPLENBQUNHLFVBQWhCLHdEQUFRLG9CQUFvQkMsSUFBNUIsT0FBbUN0QyxJQUFJLENBQUN1QyxHQUFMLENBQVNKLEVBQVQsSUFBZW5DLElBQUksQ0FBQ29DLEdBQUwsQ0FBU0QsRUFBVCxDQUFmLEdBQThCLEtBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVFELEdBZHlCLENBQTFCO0FBZ0JBLE1BQU1LLFVBQVUsR0FBR25DLHFEQUFPLENBQUM7QUFBQTs7QUFBQSxvQkFBTVosSUFBSSxDQUFDTCxNQUFELENBQVYseUNBQXNCcUQsU0FBdEI7QUFBQSxHQUFELEVBQWtDLENBQUNyRCxNQUFELEVBQVNjLEtBQVQsQ0FBbEMsQ0FBMUI7QUFFQSxzQkFDRTtBQUNFLE9BQUcsRUFBRUMsTUFEUDtBQUVFLFNBQUssRUFBRUQsS0FGVDtBQUdFLFVBQU0sRUFBRWlCLE1BSFY7QUFJRSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPakIsS0FBUCxFQUFjaUIsTUFBZCxFQUFzQnRCLFFBQXRCLEVBSlg7QUFLRSxhQUFTLEVBQUU2Qyx1RUFBTSxDQUFDQyxLQUxwQjtBQUFBLDRCQU9FO0FBQUEsOEJBQ0U7QUFBTSxVQUFFLEVBQUMsU0FBVDtBQUFtQixTQUFDLFlBQUVsRCxJQUFJLENBQUNaLE9BQUQsQ0FBTiwyQ0FBbUI0RDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFVLFVBQUUsRUFBQyxNQUFiO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFLElBQUlHLEdBQUosQ0FBUSxVQUFSLEVBQW9CakQsUUFBcEIsRUFBOEJFLFFBQTlCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFhRTtBQUFHLGlDQUFrQixJQUFJK0MsR0FBSixDQUFRLE9BQVIsRUFBaUJqRCxRQUFqQixDQUFsQixNQUFIO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFFLElBQUlpRCxHQUFKLENBQVEsVUFBUixFQUFvQmpELFFBQXBCLEVBQThCRSxRQUE5QixFQURiO0FBRUUsWUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxtQkFDR2tDLGlCQURILGVBRUU7QUFBTSxjQUFJLEVBQUMsTUFBWDtBQUFrQixnQkFBTSxFQUFDLE9BQXpCO0FBQWlDLDZCQUFnQixPQUFqRDtBQUF5RCxXQUFDLEVBQUVTO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRTtBQUNFLGlCQUFTLEVBQUUsSUFBSUksR0FBSixDQUFRLFVBQVIsRUFBb0JqRCxRQUFwQixFQUE4QkUsUUFBOUIsRUFEYjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsY0FBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBMUYrQixrQ0FBaEM7TUFBTUMsbUI7QUE0RlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS5hOWJhNjQ5MmQ3YzIzYzNlZjdkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGRPYmogZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfVxyXG5jb25zdCB3b3JsZDogdG9wb2pzb24uV29ybGRBdGxhcyA9IHdvcmxkT2JqIGFzIG9iamVjdCBhcyB0b3BvanNvbi5Xb3JsZEF0bGFzXHJcbmNvbnN0IGNvdW50cmllczogR2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbiA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5jb25zdCBib3VuZHM6IEdlb0pTT04uTXVsdGlMaW5lU3RyaW5nID0gdG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKVxyXG5jb25zdCBwcm9qZWN0aW9uOiBHZW9Qcm9qZWN0aW9uID0gZ2VvRXF1YWxFYXJ0aCgpXHJcbmNvbnN0IHBhdGg6IEdlb1BhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pXHJcbmNvbnN0IGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlmZS1leHBlY3RhbmN5J1xyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+LFxyXG4gIGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+LFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICBjb25zdCBbW3gwLCB5MF0sIFt4MSwgeTFdXSA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uLmZpdFdpZHRoKHdpZHRoLCBvdXRsaW5lKSkuYm91bmRzKG91dGxpbmUpLCBbd2lkdGhdKVxyXG4gIGNvbnN0IGR5ID0gTWF0aC5jZWlsKHkxIC0geTApXHJcbiAgY29uc3QgbCA9IE1hdGgubWluKE1hdGguY2VpbCh4MSAtIHgwKSwgZHkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0aW9uLnNjYWxlKHByb2plY3Rpb24uc2NhbGUoKSAqIChsIC0gMSkgLyBsKS5wcmVjaXNpb24oMC4yKVxyXG4gIH0sIFtwcm9qZWN0aW9uLCBsXSlcclxuICBcclxuICBjb25zdCBoZWlnaHQgPSBkeVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSBzdmcuc2VsZWN0KCcuY291bnRyaWVzJylcclxuXHJcbiAgICBzdmcuY2FsbChcclxuICAgICAgZDMuem9vbTx0eXBlb2Ygc3ZnUmVmLmN1cnJlbnQsIGFueT4oKVxyXG4gICAgICAgIC5leHRlbnQoW1swLCAwXSwgW3dpZHRoLCBoZWlnaHRdXSlcclxuICAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDVdKVxyXG4gICAgICAgIC5vbignem9vbScsIHpvb21lZClcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbWVkKHsgdHJhbnNmb3JtIH06IGFueSkge1xyXG4gICAgICBjb3VudHJpZXMuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSBjb3VudHJpZXMuZmVhdHVyZXMubWFwKChjb3VudHJ5OiBHZW9KU09OLkZlYXR1cmUpID0+IHtcclxuICAgIGxldCB7IGlkIH0gPSBjb3VudHJ5XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBpZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD17Y29sb3IoZGF0YS5nZXQoaWQpISl9XHJcbiAgICAgICAgZD17cGF0aChjb3VudHJ5KSF9XHJcbiAgICAgID5cclxuICAgICAgICA8dGl0bGU+e2NvdW50cnkucHJvcGVydGllcz8ubmFtZX0ge2RhdGEuaGFzKGlkKSA/IGRhdGEuZ2V0KGlkKSA6ICdOL0EnfTwvdGl0bGU+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgIClcclxuICB9KVxyXG5cclxuICBjb25zdCBib3VuZHNQYXRoID0gdXNlTWVtbygoKSA9PiBwYXRoKGJvdW5kcykgPz8gdW5kZWZpbmVkLCBbYm91bmRzLCB3aWR0aF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHJlZj17c3ZnUmVmfVxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICB2aWV3Qm94PXtbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKX0gXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0fVxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8cGF0aCBpZD1cIm91dGxpbmVcIiBkPXtwYXRoKG91dGxpbmUpID8/IHVuZGVmaW5lZH0gLz5cclxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwXCI+XHJcbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gLz5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxnIGNsaXAtcGF0aD17YHVybCgke25ldyBVUkwoJyNjbGlwJywgbG9jYXRpb24pfSlgfT5cclxuICAgICAgICA8dXNlXHJcbiAgICAgICAgICB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT1cImNvdW50cmllc1wiPlxyXG4gICAgICAgICAge2NvdW50cmllc0ZlYXR1cmVzfVxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD17Ym91bmRzUGF0aH0gLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiM3NDc0NzRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9