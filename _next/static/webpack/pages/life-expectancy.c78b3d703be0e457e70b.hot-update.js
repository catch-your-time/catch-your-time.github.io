webpackHotUpdate_N_E("pages/life-expectancy",{

/***/ "./components/lifeExpectancyChart/lifeExpectancyChart.tsx":
/*!****************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyChart.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! topojson */ "./node_modules/topojson/index.js");
/* harmony import */ var _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/countries-50m.json */ "./store/countries-50m.json");
var _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/countries-50m.json */ "./store/countries-50m.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyChart.tsx",
    _this = undefined,
    _s = $RefreshSig$();





 // https://observablehq.com/@d3/world-choropleth


var LifeExpectancyChart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function (_ref) {
  _s();

  var data = _ref.data,
      color = _ref.color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 970 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 500 : _ref$height;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!svgRef.current) {
      return;
    }

    var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_2__["geoEqualEarth"])();
    var path = Object(d3_geo__WEBPACK_IMPORTED_MODULE_2__["geoPath"])(projection);
    var countries = topojson__WEBPACK_IMPORTED_MODULE_3__["feature"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_4__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_4__.objects.countries);
    var outline = {
      type: 'Sphere'
    };
    var location = window.location.toString(); // Clear a previous chart

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.current).selectAll('*').remove();
    var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.current).style('display', 'block').attr('viewBox', [0, 0, width, height].toString());
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
    g.append('path').datum(topojson__WEBPACK_IMPORTED_MODULE_3__["mesh"](_store_countries_50m_json__WEBPACK_IMPORTED_MODULE_4__, _store_countries_50m_json__WEBPACK_IMPORTED_MODULE_4__.objects.countries, function (a, b) {
      return a !== b;
    })).attr('fill', 'none').attr('stroke', 'white').attr('stroke-linejoin', 'round').attr('d', path);
    svg.append('use').attr('xlink:href', new URL('#clip', location).toString()).attr('fill', 'none').attr('stroke', 'black');
    svg.call(d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]().extent([[0, 0], [width, height]]).scaleExtent([1, 8]).on('zoom', zoomed));

    function zoomed(_ref2) {
      var transform = _ref2.transform;
      console.log(transform);
      g.attr('transform', transform);
    }
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, _this);
}, "89Ty783ABEwsfMbSOeu9vscWF34="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIkxpZmVFeHBlY3RhbmN5Q2hhcnQiLCJtZW1vIiwiZGF0YSIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzdmdSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsImNvdW50cmllcyIsInRvcG9qc29uIiwid29ybGQiLCJvYmplY3RzIiwib3V0bGluZSIsInR5cGUiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiZDMiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJzdmciLCJzdHlsZSIsImF0dHIiLCJkZWZzIiwiYXBwZW5kIiwiVVJMIiwiZyIsImZlYXR1cmVzIiwiam9pbiIsImQiLCJnZXQiLCJpZCIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImRhdHVtIiwiYSIsImIiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUNBLElBQU1BLG1CQUFtQixnQkFBR0Msa0RBQUksU0FLN0IsZ0JBS0c7QUFBQTs7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSx3QkFGSkMsS0FFSTtBQUFBLE1BRkpBLEtBRUksMkJBRkksR0FFSjtBQUFBLHlCQURKQyxNQUNJO0FBQUEsTUFESkEsTUFDSSw0QkFESyxHQUNMO0FBQ0osTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFnQixJQUFoQixDQUFyQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxR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ZWN0YW5jeS5jNzhiM2Q3MDNiZTBlNDU3ZTcwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGQgZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBhbnksXHJcbiAgY29sb3I6IGFueSxcclxuICB3aWR0aD86IG51bWJlcixcclxuICBoZWlnaHQ/OiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCA9IDk3MCxcclxuICBoZWlnaHQgPSA1MDAsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvamVjdGlvbjogR2VvUHJvamVjdGlvbiA9IGdlb0VxdWFsRWFydGgoKVxyXG4gICAgY29uc3QgcGF0aDogR2VvUGF0aCA9IGdlb1BhdGgocHJvamVjdGlvbilcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5cclxuICAgIGNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9ICh7IHR5cGU6ICdTcGhlcmUnIH0pXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXHJcblxyXG4gICAgLy8gQ2xlYXIgYSBwcmV2aW91cyBjaGFydFxyXG4gICAgZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBkZWZzID0gc3ZnLmFwcGVuZCgnZGVmcycpXHJcblxyXG4gICAgZGVmcy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnb3V0bGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgcGF0aChvdXRsaW5lKSlcclxuXHJcbiAgICBkZWZzLmFwcGVuZCgnY2xpcFBhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnY2xpcCcpXHJcbiAgICAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcblxyXG4gICAgZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG5cclxuICAgIGcuYXBwZW5kKCdnJylcclxuICAgICAgLnNlbGVjdEFsbCgncGF0aCcpXHJcbiAgICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcclxuICAgICAgLmpvaW4oJ3BhdGgnKVxyXG4gICAgICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3IoZGF0YS5nZXQoZC5pZCkpKVxyXG4gICAgICAuYXR0cignZCcsIHBhdGgpXHJcbiAgICAgIC5hcHBlbmQoJ3RpdGxlJylcclxuICAgICAgLnRleHQoZCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke2QucHJvcGVydGllcy5uYW1lfSAke2RhdGEuaGFzKGQuaWQpID8gZGF0YS5nZXQoZC5pZCkgOiAnTi9BJ31gXHJcbiAgICAgIH0pXHJcblxyXG4gICAgZy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuZGF0dW0odG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcclxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG5cclxuICAgIHN2Zy5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxyXG5cclxuICAgIHN2Zy5jYWxsKGQzLnpvb20oKVxyXG4gICAgICAuZXh0ZW50KFtbMCwgMF0sIFt3aWR0aCwgaGVpZ2h0XV0pXHJcbiAgICAgIC5zY2FsZUV4dGVudChbMSwgOF0pXHJcbiAgICAgIC5vbignem9vbScsIHpvb21lZCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHpvb21lZCh7IHRyYW5zZm9ybSB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRyYW5zZm9ybSk7XHJcbiAgICAgIFxyXG4gICAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgcmVmPXtzdmdSZWZ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XHJcbiAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=