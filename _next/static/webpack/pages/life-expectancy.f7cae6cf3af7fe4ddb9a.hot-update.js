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
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("clipPath", {
        id: "clip",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
          xlinkHref: new URL('#outline', location).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
      "clip-path": "url(".concat(new URL('#clip', location), ")"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("use", {
        xlinkHref: new URL('#outline', location).toString(),
        fill: "none",
        stroke: "#747474"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, _this);
}, "hlktVz28JK5XrkH3G9NipskqRZQ="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwid29ybGQiLCJ3b3JsZE9iaiIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsImJvdW5kcyIsImEiLCJiIiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsImxvY2F0aW9uIiwid2luZG93IiwidG9TdHJpbmciLCJMaWZlRXhwZWN0YW5jeUNoYXJ0IiwibWVtbyIsImRhdGEiLCJjb2xvciIsIndpZHRoIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlTWVtbyIsImZpdFdpZHRoIiwieDAiLCJ5MCIsIngxIiwieTEiLCJkeSIsIk1hdGgiLCJjZWlsIiwibCIsIm1pbiIsInVzZUVmZmVjdCIsInNjYWxlIiwicHJlY2lzaW9uIiwiaGVpZ2h0IiwiY3VycmVudCIsInN2ZyIsImQzIiwic2VsZWN0IiwiY2FsbCIsImV4dGVudCIsInNjYWxlRXh0ZW50Iiwib24iLCJ6b29tZWQiLCJ0cmFuc2Zvcm0iLCJhdHRyIiwiY291bnRyaWVzRmVhdHVyZXMiLCJmZWF0dXJlcyIsIm1hcCIsImNvdW50cnkiLCJpZCIsImdldCIsInByb3BlcnRpZXMiLCJuYW1lIiwiaGFzIiwic3R5bGVzIiwiY2hhcnQiLCJ1bmRlZmluZWQiLCJVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQWtCLEdBQUc7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBM0I7QUFDQSxJQUFNQyxLQUEwQixHQUFHQyxzREFBbkM7QUFDQSxJQUFNQyxTQUFvQyxHQUFHQyxnREFBQSxDQUFpQkgsS0FBakIsRUFBd0JBLEtBQUssQ0FBQ0ksT0FBTixDQUFjRixTQUF0QyxDQUE3QztB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QWtCLElBQUk4QyxHQUFKLENBQVEsT0FBUixFQUFpQmhELFFBQWpCLENBQWxCLE1BQUg7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUUsSUFBSWdELEdBQUosQ0FBUSxVQUFSLEVBQW9CaEQsUUFBcEIsRUFBOEJFLFFBQTlCLEVBRGI7QUFFRSxZQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBLG1CQUNHa0MsaUJBREgsZUFFRTtBQUFNLGNBQUksRUFBQyxNQUFYO0FBQWtCLGdCQUFNLEVBQUMsT0FBekI7QUFBaUMsNkJBQWdCLE9BQWpEO0FBQXlELFdBQUMsWUFBRXRDLElBQUksQ0FBQ0wsTUFBRCxDQUFOLDJDQUFrQnNEO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFTRTtBQUNFLGlCQUFTLEVBQUUsSUFBSUMsR0FBSixDQUFRLFVBQVIsRUFBb0JoRCxRQUFwQixFQUE4QkUsUUFBOUIsRUFEYjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsY0FBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBeEYrQixrQ0FBaEM7TUFBTUMsbUI7QUEwRlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS5mN2NhZTZjZjNhZjdmZTRkZGI5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGRPYmogZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfVxyXG5jb25zdCB3b3JsZDogdG9wb2pzb24uV29ybGRBdGxhcyA9IHdvcmxkT2JqIGFzIG9iamVjdCBhcyB0b3BvanNvbi5Xb3JsZEF0bGFzXHJcbmNvbnN0IGNvdW50cmllczogR2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbiA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5jb25zdCBib3VuZHM6IEdlb0pTT04uTXVsdGlMaW5lU3RyaW5nID0gdG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKVxyXG5jb25zdCBwcm9qZWN0aW9uOiBHZW9Qcm9qZWN0aW9uID0gZ2VvRXF1YWxFYXJ0aCgpXHJcbmNvbnN0IHBhdGg6IEdlb1BhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pXHJcbmNvbnN0IGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlmZS1leHBlY3RhbmN5J1xyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+LFxyXG4gIGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+LFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICBjb25zdCBbW3gwLCB5MF0sIFt4MSwgeTFdXSA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uLmZpdFdpZHRoKHdpZHRoLCBvdXRsaW5lKSkuYm91bmRzKG91dGxpbmUpLCBbd2lkdGhdKVxyXG4gIGNvbnN0IGR5ID0gTWF0aC5jZWlsKHkxIC0geTApXHJcbiAgY29uc3QgbCA9IE1hdGgubWluKE1hdGguY2VpbCh4MSAtIHgwKSwgZHkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0aW9uLnNjYWxlKHByb2plY3Rpb24uc2NhbGUoKSAqIChsIC0gMSkgLyBsKS5wcmVjaXNpb24oMC4yKVxyXG4gIH0sIFtwcm9qZWN0aW9uLCBsXSlcclxuICBcclxuICBjb25zdCBoZWlnaHQgPSBkeVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSBzdmcuc2VsZWN0KCcuY291bnRyaWVzJylcclxuXHJcbiAgICBzdmcuY2FsbChcclxuICAgICAgZDMuem9vbTx0eXBlb2Ygc3ZnUmVmLmN1cnJlbnQsIGFueT4oKVxyXG4gICAgICAgIC5leHRlbnQoW1swLCAwXSwgW3dpZHRoLCBoZWlnaHRdXSlcclxuICAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDVdKVxyXG4gICAgICAgIC5vbignem9vbScsIHpvb21lZClcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbWVkKHsgdHJhbnNmb3JtIH06IGFueSkge1xyXG4gICAgICBjb3VudHJpZXMuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSBjb3VudHJpZXMuZmVhdHVyZXMubWFwKChjb3VudHJ5OiBHZW9KU09OLkZlYXR1cmUpID0+IHtcclxuICAgIGxldCB7IGlkIH0gPSBjb3VudHJ5XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBpZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD17Y29sb3IoZGF0YS5nZXQoaWQpISl9XHJcbiAgICAgICAgZD17cGF0aChjb3VudHJ5KSF9XHJcbiAgICAgID5cclxuICAgICAgICA8dGl0bGU+e2NvdW50cnkucHJvcGVydGllcz8ubmFtZX0ge2RhdGEuaGFzKGlkKSA/IGRhdGEuZ2V0KGlkKSA6ICdOL0EnfTwvdGl0bGU+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgIClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICByZWY9e3N2Z1JlZn1cclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD17WzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCl9IFxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFydH1cclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHBhdGggaWQ9XCJvdXRsaW5lXCIgZD17cGF0aChvdXRsaW5lKSA/PyB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFwiPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8ZyBjbGlwLXBhdGg9e2B1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYH0+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJjb3VudHJpZXNcIj5cclxuICAgICAgICAgIHtjb3VudHJpZXNGZWF0dXJlc31cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9e3BhdGgoYm91bmRzKSA/PyB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzQ3NDc0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==