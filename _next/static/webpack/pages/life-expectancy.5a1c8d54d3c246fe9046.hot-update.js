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
    g.append('use').attr('xlink:href', new URL('#outline', location).toString()).attr('fill', 'none').attr('stroke', '#e5e5e5');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIkxpZmVFeHBlY3RhbmN5Q2hhcnQiLCJtZW1vIiwiZGF0YSIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzdmdSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsImNvdW50cmllcyIsInRvcG9qc29uIiwid29ybGQiLCJvYmplY3RzIiwib3V0bGluZSIsInR5cGUiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiZDMiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJzdmciLCJzdHlsZSIsImF0dHIiLCJkZWZzIiwiYXBwZW5kIiwiVVJMIiwiZyIsImZlYXR1cmVzIiwiam9pbiIsImQiLCJnZXQiLCJpZCIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImRhdHVtIiwiYSIsImIiLCJjYWxsIiwiZXh0ZW50Iiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInRyYW5zZm9ybSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUNBLElBQU1BLG1CQUFtQixnQkFBR0Msa0RBQUksU0FLN0IsZ0JBS0c7QUFBQTs7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSx3QkFGSkMsS0FFSTtBQUFBLE1BRkpBLEtBRUksMkJBRkksR0FFSjtBQUFBLHlCQURKQyxNQUNJO0FBQUEsTUFESkEsTUFDSSw0QkFESyxHQUNMO0FBQ0osTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFnQixJQUFoQixDQUFyQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxR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cGVjdGFuY3kuNWExYzhkNTRkM2MyNDZmZTkwNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IHsgZ2VvRXF1YWxFYXJ0aCwgR2VvUGF0aCwgZ2VvUGF0aCwgR2VvUHJvamVjdGlvbiwgR2VvU3BoZXJlIH0gZnJvbSAnZDMtZ2VvJ1xyXG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbidcclxuaW1wb3J0IHdvcmxkIGZyb20gJy4uLy4uL3N0b3JlL2NvdW50cmllcy01MG0uanNvbidcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogYW55LFxyXG4gIGNvbG9yOiBhbnksXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbiAgaGVpZ2h0PzogbnVtYmVyLFxyXG59Pigoe1xyXG4gIGRhdGEsXHJcbiAgY29sb3IsXHJcbiAgd2lkdGggPSA5NzAsXHJcbiAgaGVpZ2h0ID0gNTAwLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3Rpb246IEdlb1Byb2plY3Rpb24gPSBnZW9FcXVhbEVhcnRoKClcclxuICAgIGNvbnN0IHBhdGg6IEdlb1BhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuXHJcbiAgICBjb25zdCBvdXRsaW5lOiBHZW9TcGhlcmUgPSAoeyB0eXBlOiAnU3BoZXJlJyB9KVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxyXG5cclxuICAgIC8vIENsZWFyIGEgcHJldmlvdXMgY2hhcnRcclxuICAgIGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCkuc2VsZWN0QWxsKCcqJykucmVtb3ZlKClcclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXHJcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKVxyXG5cclxuICAgIGRlZnMuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgJ291dGxpbmUnKVxyXG4gICAgICAuYXR0cignZCcsIHBhdGgob3V0bGluZSkpXHJcblxyXG4gICAgZGVmcy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgJ2NsaXAnKVxyXG4gICAgICAuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xpcC1wYXRoJywgYHVybCgke25ldyBVUkwoJyNjbGlwJywgbG9jYXRpb24pfSlgKVxyXG5cclxuICAgIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuXHJcbiAgICBnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxyXG4gICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXHJcbiAgICAgIC5qb2luKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGNvbG9yKGRhdGEuZ2V0KGQuaWQpKSlcclxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG4gICAgICAuYXBwZW5kKCd0aXRsZScpXHJcbiAgICAgIC50ZXh0KGQgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHtkLnByb3BlcnRpZXMubmFtZX0gJHtkYXRhLmhhcyhkLmlkKSA/IGRhdGEuZ2V0KGQuaWQpIDogJ04vQSd9YFxyXG4gICAgICB9KVxyXG5cclxuICAgIGcuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmRhdHVtKHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzLCAoYSwgYikgPT4gYSAhPT0gYikpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcclxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXHJcbiAgICAgIC5hdHRyKCdkJywgcGF0aClcclxuXHJcbiAgICBnLmFwcGVuZCgndXNlJylcclxuICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCBuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpKVxyXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjZTVlNWU1JylcclxuXHJcbiAgICBzdmcuY2FsbChkMy56b29tKClcclxuICAgICAgLmV4dGVudChbWzAsIDBdLCBbd2lkdGgsIGhlaWdodF1dKVxyXG4gICAgICAuc2NhbGVFeHRlbnQoWzEsIDhdKVxyXG4gICAgICAub24oJ3pvb20nLCB6b29tZWQpKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoeyB0cmFuc2Zvcm0gfSkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0cmFuc2Zvcm0pO1xyXG4gICAgICBcclxuICAgICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHJlZj17c3ZnUmVmfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q2hhcnQiXSwic291cmNlUm9vdCI6IiJ9