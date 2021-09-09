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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyChart.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var outline = {
  type: 'Sphere'
}; // https://observablehq.com/@d3/world-choropleth

var LifeExpectancyChart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function (_ref) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!svgRef.current) {
      return;
    }

    var location = window.location.toString();
    var countries = topojson__WEBPACK_IMPORTED_MODULE_4__["feature"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__.objects.countries); // Clear a previous chart

    d3__WEBPACK_IMPORTED_MODULE_2__["select"](svgRef.current).selectAll('*').remove();
    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](svgRef.current).style('display', 'block').attr('viewBox', [0, 0, width, height].toString());
    var defs = svg.append('defs');
    defs.append('path').attr('id', 'outline').attr('d', path(outline));
    defs.append('clipPath').attr('id', 'clip').append('use').attr('xlink:href', new URL('#outline', location).toString());
    var g = svg.append('g').attr('clip-path', "url(".concat(new URL('#clip', location), ")"));
    g.append('use').attr('xlink:href', new URL('#outline', location).toString()).attr('fill', 'white');
    g.append('g').selectAll('path').data(countries.features).join('path').attr('fill', function (d) {
      return color(data.get(d.id));
    }).attr('d', path).append('title').text(function (d) {
      return "".concat(d.properties.name, " ").concat(data.has(d.id) ? data.get(d.id) : 'N/A');
    });
    g.append('path').datum(topojson__WEBPACK_IMPORTED_MODULE_4__["mesh"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_5__.objects.countries, function (a, b) {
      return a !== b;
    })).attr('fill', 'none').attr('stroke', 'white').attr('stroke-linejoin', 'round').attr('d', path);
    g.append('use').attr('xlink:href', new URL('#outline', location).toString()).attr('fill', 'none').attr('stroke', '#747474');
    svg.call(d3__WEBPACK_IMPORTED_MODULE_2__["zoom"]().extent([[0, 0], [width, height]]).scaleExtent([1, 7]).on('zoom', zoomed));

    function zoomed(_ref2) {
      var transform = _ref2.transform;
      g.attr('transform', transform);
    }
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height,
    className: ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/lifeExpectancyChart/lifeExpectancyChart.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/lifeExpectancyChart/lifeExpectancyChart.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lifeExpectancyChart_container__1VY6X {\n  max-width: 970px;\n  margin: 0 auto 1em;\n}\n\n.lifeExpectancyChart_panel__23elq {\n  display: -moz-box;\n  display: flex;\n  width: 100%;\n}\n.lifeExpectancyChart_panel__23elq :first-child {\n  margin: 0 2em 0 0;\n}\n\n.lifeExpectancyChart_chart__uPak8 {\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in;\n}", "",{"version":3,"sources":["webpack://lifeExpectancyChart.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,iBAAA;EAAA,aAAA;EACA,WAAA;AACJ;AACI;EACI,iBAAA;AACR;;AAGA;EACI,uBAAA;EAAA,oBAAA;EAAA,eAAA;AAAJ","sourcesContent":[".container {\r\n    max-width: 970px;\r\n    margin: 0 auto 1em;\r\n}\r\n\r\n.panel {\r\n    display: flex;\r\n    width: 100%;\r\n\r\n    :first-child {\r\n        margin: 0 2em 0 0;\r\n    }\r\n}\r\n\r\n.chart {\r\n    cursor: zoom-in;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "lifeExpectancyChart_container__1VY6X",
	"panel": "lifeExpectancyChart_panel__23elq",
	"chart": "lifeExpectancyChart_chart__uPak8"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpZmVFeHBlY3RhbmN5Q2hhcnQvbGlmZUV4cGVjdGFuY3lDaGFydC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJvdXRsaW5lIiwidHlwZSIsIkxpZmVFeHBlY3RhbmN5Q2hhcnQiLCJtZW1vIiwiZGF0YSIsImNvbG9yIiwid2lkdGgiLCJzdmdSZWYiLCJ1c2VSZWYiLCJwcm9qZWN0aW9uIiwidXNlTWVtbyIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsImZpdFdpZHRoIiwiYm91bmRzIiwieDAiLCJ5MCIsIngxIiwieTEiLCJkeSIsIk1hdGgiLCJjZWlsIiwibCIsIm1pbiIsInVzZUVmZmVjdCIsInNjYWxlIiwicHJlY2lzaW9uIiwiaGVpZ2h0IiwiY3VycmVudCIsImxvY2F0aW9uIiwid2luZG93IiwidG9TdHJpbmciLCJjb3VudHJpZXMiLCJ0b3BvanNvbiIsIndvcmxkIiwib2JqZWN0cyIsImQzIiwic2VsZWN0QWxsIiwicmVtb3ZlIiwic3ZnIiwic3R5bGUiLCJhdHRyIiwiZGVmcyIsImFwcGVuZCIsIlVSTCIsImciLCJmZWF0dXJlcyIsImpvaW4iLCJkIiwiZ2V0IiwiaWQiLCJ0ZXh0IiwicHJvcGVydGllcyIsIm5hbWUiLCJoYXMiLCJkYXR1bSIsImEiLCJiIiwiY2FsbCIsImV4dGVudCIsInNjYWxlRXh0ZW50Iiwib24iLCJ6b29tZWQiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBa0IsR0FBSTtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUE1QixDLENBRUE7O0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHQyxrREFBSSxTQUk3QixnQkFJ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QUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMscUJBQXFCLHVCQUF1QixHQUFHLHVDQUF1QyxzQkFBc0Isa0JBQWtCLGdCQUFnQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyx1Q0FBdUMsNEJBQTRCLHlCQUF5QixvQkFBb0IsR0FBRyxPQUFPLGdHQUFnRyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxxQ0FBcUMseUJBQXlCLDJCQUEyQixLQUFLLGdCQUFnQixzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsU0FBUyxLQUFLLGdCQUFnQix3QkFBd0IsS0FBSyx1QkFBdUI7QUFDejZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS43ZDk3MDY1ZjFjODY2ZDMxNTRkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGQgZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5cclxuY29uc3Qgb3V0bGluZTogR2VvU3BoZXJlID0gKHsgdHlwZTogJ1NwaGVyZScgfSlcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogYW55LFxyXG4gIGNvbG9yOiBhbnksXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCA9IDk3MCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICBjb25zdCBwcm9qZWN0aW9uOiBHZW9Qcm9qZWN0aW9uID0gdXNlTWVtbygoKSA9PiBnZW9FcXVhbEVhcnRoKCksIFtdKVxyXG4gIGNvbnN0IHBhdGg6IEdlb1BhdGggPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbiksIFtdKVxyXG5cclxuICBjb25zdCBbW3gwLCB5MF0sIFt4MSwgeTFdXSA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uLmZpdFdpZHRoKHdpZHRoLCBvdXRsaW5lKSkuYm91bmRzKG91dGxpbmUpLCBbXSlcclxuICBjb25zdCBkeSA9IE1hdGguY2VpbCh5MSAtIHkwKVxyXG4gIGNvbnN0IGwgPSBNYXRoLm1pbihNYXRoLmNlaWwoeDEgLSB4MCksIGR5KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdGlvbi5zY2FsZShwcm9qZWN0aW9uLnNjYWxlKCkgKiAobCAtIDEpIC8gbCkucHJlY2lzaW9uKDAuMilcclxuICB9LCBbcHJvamVjdGlvbiwgbF0pXHJcbiAgXHJcbiAgY29uc3QgaGVpZ2h0ID0gZHlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxyXG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcblxyXG4gICAgLy8gQ2xlYXIgYSBwcmV2aW91cyBjaGFydFxyXG4gICAgZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBkZWZzID0gc3ZnLmFwcGVuZCgnZGVmcycpXHJcblxyXG4gICAgZGVmcy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnb3V0bGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgcGF0aChvdXRsaW5lKSlcclxuXHJcbiAgICBkZWZzLmFwcGVuZCgnY2xpcFBhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnY2xpcCcpXHJcbiAgICAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcblxyXG4gICAgZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG5cclxuICAgIGcuYXBwZW5kKCdnJylcclxuICAgICAgLnNlbGVjdEFsbCgncGF0aCcpXHJcbiAgICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcclxuICAgICAgLmpvaW4oJ3BhdGgnKVxyXG4gICAgICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3IoZGF0YS5nZXQoZC5pZCkpKVxyXG4gICAgICAuYXR0cignZCcsIHBhdGgpXHJcbiAgICAgIC5hcHBlbmQoJ3RpdGxlJylcclxuICAgICAgLnRleHQoZCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke2QucHJvcGVydGllcy5uYW1lfSAke2RhdGEuaGFzKGQuaWQpID8gZGF0YS5nZXQoZC5pZCkgOiAnTi9BJ31gXHJcbiAgICAgIH0pXHJcblxyXG4gICAgZy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuZGF0dW0odG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcclxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG5cclxuICAgIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyM3NDc0NzQnKVxyXG5cclxuICAgIHN2Zy5jYWxsKFxyXG4gICAgICBkMy56b29tPHR5cGVvZiBzdmdSZWYuY3VycmVudCwgYW55PigpXHJcbiAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbd2lkdGgsIGhlaWdodF1dKVxyXG4gICAgICAgIC5zY2FsZUV4dGVudChbMSwgN10pXHJcbiAgICAgICAgLm9uKCd6b29tJywgem9vbWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoeyB0cmFuc2Zvcm0gfTogYW55KSB7XHJcbiAgICAgIGcuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHJlZj17c3ZnUmVmfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGlmZUV4cGVjdGFuY3lDaGFydF9jb250YWluZXJfXzFWWTZYIHtcXG4gIG1heC13aWR0aDogOTcwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxZW07XFxufVxcblxcbi5saWZlRXhwZWN0YW5jeUNoYXJ0X3BhbmVsX18yM2VscSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxpZmVFeHBlY3RhbmN5Q2hhcnRfcGFuZWxfXzIzZWxxIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW46IDAgMmVtIDAgMDtcXG59XFxuXFxuLmxpZmVFeHBlY3RhbmN5Q2hhcnRfY2hhcnRfX3VQYWs4IHtcXG4gIGN1cnNvcjogLXdlYmtpdC16b29tLWluO1xcbiAgY3Vyc29yOiAtbW96LXpvb20taW47XFxuICBjdXJzb3I6IHpvb20taW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUdBO0VBQ0ksdUJBQUE7RUFBQSxvQkFBQTtFQUFBLGVBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5NzBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAyZW0gMCAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jaGFydCB7XFxyXFxuICAgIGN1cnNvcjogem9vbS1pbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibGlmZUV4cGVjdGFuY3lDaGFydF9jb250YWluZXJfXzFWWTZYXCIsXG5cdFwicGFuZWxcIjogXCJsaWZlRXhwZWN0YW5jeUNoYXJ0X3BhbmVsX18yM2VscVwiLFxuXHRcImNoYXJ0XCI6IFwibGlmZUV4cGVjdGFuY3lDaGFydF9jaGFydF9fdVBhazhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9