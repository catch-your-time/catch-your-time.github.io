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
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJjdXJyZW50IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJ0b1N0cmluZyIsImNvdW50cmllcyIsInRvcG9qc29uIiwid29ybGQiLCJvYmplY3RzIiwiZDMiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJzdmciLCJzdHlsZSIsImF0dHIiLCJkZWZzIiwiYXBwZW5kIiwiVVJMIiwiZyIsImZlYXR1cmVzIiwiam9pbiIsImQiLCJnZXQiLCJpZCIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImRhdHVtIiwiYSIsImIiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxPQUFrQixHQUFJO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxtQkFBbUIsZ0JBQUdDLGtEQUFJLFNBSTdCLGdCQUlHO0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsd0JBREpDLEtBQ0k7QUFB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R0EsSUFMSCxDQUtRLEdBTFIsRUFLYTlCLElBTGI7QUFPQWtDLEtBQUMsQ0FBQ0YsTUFBRixDQUFTLEtBQVQsRUFDR0YsSUFESCxDQUNRLFlBRFIsRUFDc0IsSUFBSUcsR0FBSixDQUFRLFVBQVIsRUFBb0JmLFFBQXBCLEVBQThCRSxRQUE5QixFQUR0QixFQUVHVSxJQUZILENBRVEsTUFGUixFQUVnQixNQUZoQixFQUdHQSxJQUhILENBR1EsUUFIUixFQUdrQixTQUhsQjtBQUtBRixPQUFHLENBQUNtQixJQUFKLENBQ0V0Qix1Q0FBQSxHQUNHdUIsTUFESCxDQUNVLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQ3RELEtBQUQsRUFBUXNCLE1BQVIsQ0FBVCxDQURWLEVBRUdpQyxXQUZILENBRWUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZmLEVBR0dDLEVBSEgsQ0FHTSxNQUhOLEVBR2NDLE1BSGQsQ0FERjs7QUFPQSxhQUFTQSxNQUFULFFBQW9DO0FBQUEsVUFBbEJDLFNBQWtCLFNBQWxCQSxTQUFrQjtBQUNsQ2xCLE9BQUMsQ0FBQ0osSUFBRixDQUFPLFdBQVAsRUFBb0JzQixTQUFwQjtBQUNEO0FBQ0YsR0FsRVEsRUFrRU4sQ0FBQzVELElBQUQsQ0FsRU0sQ0FBVDtBQW9FQSxzQkFDRTtBQUFLLE9BQUcsRUFBRUcsTUFBVjtBQUFrQixTQUFLLEVBQUVELEtBQXpCO0FBQWdDLFVBQU0sRUFBRXNCLE1BQXhDO0FBQWdELGFBQVMsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQS9GK0Isa0NBQWhDO01BQU0xQixtQjtBQWlHU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlmZS1leHBlY3RhbmN5LjkzNjNmNTY5NWNlMzRhMzQzNTc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZU1lbW8sIG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCB7IGdlb0VxdWFsRWFydGgsIEdlb1BhdGgsIGdlb1BhdGgsIEdlb1Byb2plY3Rpb24sIEdlb1NwaGVyZSB9IGZyb20gJ2QzLWdlbydcclxuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nXHJcbmltcG9ydCB3b3JsZCBmcm9tICcuLi8uLi9zdG9yZS9jb3VudHJpZXMtNTBtLmpzb24nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3Qgb3V0bGluZTogR2VvU3BoZXJlID0gKHsgdHlwZTogJ1NwaGVyZScgfSlcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogYW55LFxyXG4gIGNvbG9yOiBhbnksXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCA9IDk3MCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICBjb25zdCBwcm9qZWN0aW9uOiBHZW9Qcm9qZWN0aW9uID0gdXNlTWVtbygoKSA9PiBnZW9FcXVhbEVhcnRoKCksIFtdKVxyXG4gIGNvbnN0IHBhdGg6IEdlb1BhdGggPSB1c2VNZW1vKCgpID0+IGdlb1BhdGgocHJvamVjdGlvbiksIFtdKVxyXG5cclxuICBjb25zdCBbW3gwLCB5MF0sIFt4MSwgeTFdXSA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uLmZpdFdpZHRoKHdpZHRoLCBvdXRsaW5lKSkuYm91bmRzKG91dGxpbmUpLCBbXSlcclxuICBjb25zdCBkeSA9IE1hdGguY2VpbCh5MSAtIHkwKVxyXG4gIGNvbnN0IGwgPSBNYXRoLm1pbihNYXRoLmNlaWwoeDEgLSB4MCksIGR5KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdGlvbi5zY2FsZShwcm9qZWN0aW9uLnNjYWxlKCkgKiAobCAtIDEpIC8gbCkucHJlY2lzaW9uKDAuMilcclxuICB9LCBbcHJvamVjdGlvbiwgbF0pXHJcbiAgXHJcbiAgY29uc3QgaGVpZ2h0ID0gZHlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxyXG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMpXHJcblxyXG4gICAgLy8gQ2xlYXIgYSBwcmV2aW91cyBjaGFydFxyXG4gICAgZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBkZWZzID0gc3ZnLmFwcGVuZCgnZGVmcycpXHJcblxyXG4gICAgZGVmcy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnb3V0bGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgcGF0aChvdXRsaW5lKSlcclxuXHJcbiAgICBkZWZzLmFwcGVuZCgnY2xpcFBhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnY2xpcCcpXHJcbiAgICAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcblxyXG4gICAgZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG5cclxuICAgIGcuYXBwZW5kKCdnJylcclxuICAgICAgLnNlbGVjdEFsbCgncGF0aCcpXHJcbiAgICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcclxuICAgICAgLmpvaW4oJ3BhdGgnKVxyXG4gICAgICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3IoZGF0YS5nZXQoZC5pZCkpKVxyXG4gICAgICAuYXR0cignZCcsIHBhdGgpXHJcbiAgICAgIC5hcHBlbmQoJ3RpdGxlJylcclxuICAgICAgLnRleHQoZCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke2QucHJvcGVydGllcy5uYW1lfSAke2RhdGEuaGFzKGQuaWQpID8gZGF0YS5nZXQoZC5pZCkgOiAnTi9BJ31gXHJcbiAgICAgIH0pXHJcblxyXG4gICAgZy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuZGF0dW0odG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcclxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG5cclxuICAgIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyM3NDc0NzQnKVxyXG5cclxuICAgIHN2Zy5jYWxsKFxyXG4gICAgICBkMy56b29tPHR5cGVvZiBzdmdSZWYuY3VycmVudCwgYW55PigpXHJcbiAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbd2lkdGgsIGhlaWdodF1dKVxyXG4gICAgICAgIC5zY2FsZUV4dGVudChbMSwgN10pXHJcbiAgICAgICAgLm9uKCd6b29tJywgem9vbWVkKVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoeyB0cmFuc2Zvcm0gfTogYW55KSB7XHJcbiAgICAgIGcuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHJlZj17c3ZnUmVmfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9