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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height,
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.chart
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInByb2plY3Rpb24iLCJ1c2VNZW1vIiwiZ2VvRXF1YWxFYXJ0aCIsInBhdGgiLCJnZW9QYXRoIiwiZml0V2lkdGgiLCJib3VuZHMiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImR5IiwiTWF0aCIsImNlaWwiLCJsIiwibWluIiwidXNlRWZmZWN0Iiwic2NhbGUiLCJwcmVjaXNpb24iLCJoZWlnaHQiLCJjdXJyZW50IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJ0b1N0cmluZyIsImNvdW50cmllcyIsInRvcG9qc29uIiwid29ybGQiLCJvYmplY3RzIiwiZDMiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJzdmciLCJzdHlsZSIsImF0dHIiLCJkZWZzIiwiYXBwZW5kIiwiVVJMIiwiZyIsImZlYXR1cmVzIiwiam9pbiIsImQiLCJnZXQiLCJpZCIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImRhdHVtIiwiYSIsImIiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsInN0eWxlcyIsImNoYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFJO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxtQkFBbUIsZ0JBQUdDLGtEQUFJLFNBSTdCLGdCQUlHO0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxL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SVEsaUJBSlIsRUFJMkIsT0FKM0IsRUFLR0EsSUFMSCxDQUtRLEdBTFIsRUFLYTlCLElBTGI7QUFPQWtDLEtBQUMsQ0FBQ0YsTUFBRixDQUFTLEtBQVQsRUFDR0YsSUFESCxDQUNRLFlBRFIsRUFDc0IsSUFBSUcsR0FBSixDQUFRLFVBQVIsRUFBb0JmLFFBQXBCLEVBQThCRSxRQUE5QixFQUR0QixFQUVHVSxJQUZILENBRVEsTUFGUixFQUVnQixNQUZoQixFQUdHQSxJQUhILENBR1EsUUFIUixFQUdrQixTQUhsQjtBQUtBRixPQUFHLENBQUNtQixJQUFKLENBQ0V0Qix1Q0FBQSxHQUNHdUIsTUFESCxDQUNVLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQ3RELEtBQUQsRUFBUXNCLE1BQVIsQ0FBVCxDQURWLEVBRUdpQyxXQUZILENBRWUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZmLEVBR0dDLEVBSEgsQ0FHTSxNQUhOLEVBR2NDLE1BSGQsQ0FERjs7QUFPQSxhQUFTQSxNQUFULFFBQW9DO0FBQUEsVUFBbEJDLFNBQWtCLFNBQWxCQSxTQUFrQjtBQUNsQ2xCLE9BQUMsQ0FBQ0osSUFBRixDQUFPLFdBQVAsRUFBb0JzQixTQUFwQjtBQUNEO0FBQ0YsR0FsRVEsRUFrRU4sQ0FBQzVELElBQUQsQ0FsRU0sQ0FBVDtBQW9FQSxzQkFDRTtBQUFLLE9BQUcsRUFBRUcsTUFBVjtBQUFrQixTQUFLLEVBQUVELEtBQXpCO0FBQWdDLFVBQU0sRUFBRXNCLE1BQXhDO0FBQWdELGFBQVMsRUFBRXFDLHVFQUFNLENBQUNDO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBL0YrQixrQ0FBaEM7TUFBTWhFLG1CO0FBaUdTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuNjdiZTlkYzIyNWVmNjQzMDRjZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbywgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IHsgZ2VvRXF1YWxFYXJ0aCwgR2VvUGF0aCwgZ2VvUGF0aCwgR2VvUHJvamVjdGlvbiwgR2VvU3BoZXJlIH0gZnJvbSAnZDMtZ2VvJ1xyXG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbidcclxuaW1wb3J0IHdvcmxkIGZyb20gJy4uLy4uL3N0b3JlL2NvdW50cmllcy01MG0uanNvbidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBvdXRsaW5lOiBHZW9TcGhlcmUgPSAoeyB0eXBlOiAnU3BoZXJlJyB9KVxyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBhbnksXHJcbiAgY29sb3I6IGFueSxcclxuICB3aWR0aD86IG51bWJlcixcclxufT4oKHtcclxuICBkYXRhLFxyXG4gIGNvbG9yLFxyXG4gIHdpZHRoID0gOTcwLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpXHJcblxyXG4gIGNvbnN0IHByb2plY3Rpb246IEdlb1Byb2plY3Rpb24gPSB1c2VNZW1vKCgpID0+IGdlb0VxdWFsRWFydGgoKSwgW10pXHJcbiAgY29uc3QgcGF0aDogR2VvUGF0aCA9IHVzZU1lbW8oKCkgPT4gZ2VvUGF0aChwcm9qZWN0aW9uKSwgW10pXHJcblxyXG4gIGNvbnN0IFtbeDAsIHkwXSwgW3gxLCB5MV1dID0gdXNlTWVtbygoKSA9PiBnZW9QYXRoKHByb2plY3Rpb24uZml0V2lkdGgod2lkdGgsIG91dGxpbmUpKS5ib3VuZHMob3V0bGluZSksIFtdKVxyXG4gIGNvbnN0IGR5ID0gTWF0aC5jZWlsKHkxIC0geTApXHJcbiAgY29uc3QgbCA9IE1hdGgubWluKE1hdGguY2VpbCh4MSAtIHgwKSwgZHkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0aW9uLnNjYWxlKHByb2plY3Rpb24uc2NhbGUoKSAqIChsIC0gMSkgLyBsKS5wcmVjaXNpb24oMC4yKVxyXG4gIH0sIFtwcm9qZWN0aW9uLCBsXSlcclxuICBcclxuICBjb25zdCBoZWlnaHQgPSBkeVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuXHJcbiAgICAvLyBDbGVhciBhIHByZXZpb3VzIGNoYXJ0XHJcbiAgICBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpXHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KVxyXG4gICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKVxyXG4gICAgICAuYXR0cigndmlld0JveCcsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XS50b1N0cmluZygpKVxyXG5cclxuICAgIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJylcclxuXHJcbiAgICBkZWZzLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsICdvdXRsaW5lJylcclxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKG91dGxpbmUpKVxyXG5cclxuICAgIGRlZnMuYXBwZW5kKCdjbGlwUGF0aCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsICdjbGlwJylcclxuICAgICAgLmFwcGVuZCgndXNlJylcclxuICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG5cclxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsIGB1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYClcclxuXHJcbiAgICBnLmFwcGVuZCgndXNlJylcclxuICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcblxyXG4gICAgZy5hcHBlbmQoJ2cnKVxyXG4gICAgICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxyXG4gICAgICAuam9pbigncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiBjb2xvcihkYXRhLmdldChkLmlkKSkpXHJcbiAgICAgIC5hdHRyKCdkJywgcGF0aClcclxuICAgICAgLmFwcGVuZCgndGl0bGUnKVxyXG4gICAgICAudGV4dChkID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9ICR7ZGF0YS5oYXMoZC5pZCkgPyBkYXRhLmdldChkLmlkKSA6ICdOL0EnfWBcclxuICAgICAgfSlcclxuXHJcbiAgICBnLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5kYXR1bSh0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpKVxyXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsICd3aGl0ZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxyXG4gICAgICAuYXR0cignZCcsIHBhdGgpXHJcblxyXG4gICAgZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnIzc0NzQ3NCcpXHJcblxyXG4gICAgc3ZnLmNhbGwoXHJcbiAgICAgIGQzLnpvb208dHlwZW9mIHN2Z1JlZi5jdXJyZW50LCBhbnk+KClcclxuICAgICAgICAuZXh0ZW50KFtbMCwgMF0sIFt3aWR0aCwgaGVpZ2h0XV0pXHJcbiAgICAgICAgLnNjYWxlRXh0ZW50KFsxLCA3XSlcclxuICAgICAgICAub24oJ3pvb20nLCB6b29tZWQpXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHpvb21lZCh7IHRyYW5zZm9ybSB9OiBhbnkpIHtcclxuICAgICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgcmVmPXtzdmdSZWZ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0fSAvPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9