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
    g.append('use').attr('xlink:href', new URL('#outline', location).toString()).attr('fill', 'red');
    g.append('g').selectAll('path').data(countries.features).join('path').attr('fill', function (d) {
      return color(data.get(d.id));
    }).attr('d', path).append('title').text(function (d) {
      return "".concat(d.properties.name, " ").concat(data.has(d.id) ? data.get(d.id) : 'N/A');
    }); // g.append('path')
    //   .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'white')
    //   .attr('stroke-linejoin', 'round')
    //   .attr('d', path)

    svg.append('use').attr('xlink:href', new URL('#outline', location).toString()).attr('clip-path', "url(".concat(new URL('#clip', location), ")")).attr('fill', 'none').attr('stroke', 'black');
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
    lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIkxpZmVFeHBlY3RhbmN5Q2hhcnQiLCJtZW1vIiwiZGF0YSIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzdmdSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsImNvdW50cmllcyIsInRvcG9qc29uIiwid29ybGQiLCJvYmplY3RzIiwib3V0bGluZSIsInR5cGUiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiZDMiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJzdmciLCJzdHlsZSIsImF0dHIiLCJkZWZzIiwiYXBwZW5kIiwiVVJMIiwiZyIsImZlYXR1cmVzIiwiam9pbiIsImQiLCJnZXQiLCJpZCIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImNhbGwiLCJleHRlbnQiLCJzY2FsZUV4dGVudCIsIm9uIiwiem9vbWVkIiwidHJhbnNmb3JtIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTUEsbUJBQW1CLGdCQUFHQyxrREFBSSxTQUs3QixnQkFLRztBQUFBOztBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLEtBR0ksUUFISkEsS0FHSTtBQUFBLHdCQUZKQyxLQUVJO0FBQUEsTUFGSkEsS0FFSSwyQkFGSSxHQUVKO0FBQUEseUJBREpDLE1BQ0k7QUFBQSxNQURKQSxNQUNJLDRCQURLLEdBQ0w7QUFDSixNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQWdCLElBQWhCLENBQXJCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0YsTUFBTSxD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USxXQUZSLGdCQUU0QixJQUFJRyxHQUFKLENBQVEsT0FBUixFQUFpQlgsUUFBakIsQ0FGNUIsUUFHR1EsSUFISCxDQUdRLE1BSFIsRUFHZ0IsTUFIaEIsRUFJR0EsSUFKSCxDQUlRLFFBSlIsRUFJa0IsT0FKbEI7QUFPQUYsT0FBRyxDQUFDZ0IsSUFBSixDQUFTbkIsdUNBQUEsR0FDTm9CLE1BRE0sQ0FDQyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUN2QyxLQUFELEVBQVFDLE1BQVIsQ0FBVCxDQURELEVBRU51QyxXQUZNLENBRU0sQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZOLEVBR05DLEVBSE0sQ0FHSCxNQUhHLEVBR0tDLE1BSEwsQ0FBVDs7QUFLQSxhQUFTQSxNQUFULFFBQStCO0FBQUEsVUFBYkMsU0FBYSxTQUFiQSxTQUFhO0FBQzdCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUVBZixPQUFDLENBQUNKLElBQUYsQ0FBTyxXQUFQLEVBQW9CbUIsU0FBcEI7QUFDRDtBQUVGLEdBekVRLEVBeUVOLENBQUM3QyxJQUFELENBekVNLENBQVQ7QUEyRUEsc0JBQ0U7QUFBSyxPQUFHLEVBQUVJLE1BQVY7QUFBa0IsU0FBSyxFQUFFRixLQUF6QjtBQUFnQyxVQUFNLEVBQUVDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBM0YrQixrQ0FBaEM7TUFBTUwsbUI7QUE2RlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS42NDYzNWQxMjk4MzMwNzgwMDE4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBHZW9QYXRoLCBnZW9QYXRoLCBHZW9Qcm9qZWN0aW9uLCBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJ1xyXG5pbXBvcnQgd29ybGQgZnJvbSAnLi4vLi4vc3RvcmUvY291bnRyaWVzLTUwbS5qc29uJ1xyXG5cclxuLy8gaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy93b3JsZC1jaG9yb3BsZXRoXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q2hhcnQgPSBtZW1vPHtcclxuICBkYXRhOiBhbnksXHJcbiAgY29sb3I6IGFueSxcclxuICB3aWR0aD86IG51bWJlcixcclxuICBoZWlnaHQ/OiBudW1iZXIsXHJcbn0+KCh7XHJcbiAgZGF0YSxcclxuICBjb2xvcixcclxuICB3aWR0aCA9IDk3MCxcclxuICBoZWlnaHQgPSA1MDAsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3ZnUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvamVjdGlvbjogR2VvUHJvamVjdGlvbiA9IGdlb0VxdWFsRWFydGgoKVxyXG4gICAgY29uc3QgcGF0aDogR2VvUGF0aCA9IGdlb1BhdGgocHJvamVjdGlvbilcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzKVxyXG5cclxuICAgIGNvbnN0IG91dGxpbmU6IEdlb1NwaGVyZSA9ICh7IHR5cGU6ICdTcGhlcmUnIH0pXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXHJcblxyXG4gICAgLy8gQ2xlYXIgYSBwcmV2aW91cyBjaGFydFxyXG4gICAgZDMuc2VsZWN0KHN2Z1JlZi5jdXJyZW50KS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0udG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBkZWZzID0gc3ZnLmFwcGVuZCgnZGVmcycpXHJcblxyXG4gICAgZGVmcy5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnb3V0bGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgcGF0aChvdXRsaW5lKSlcclxuXHJcbiAgICBkZWZzLmFwcGVuZCgnY2xpcFBhdGgnKVxyXG4gICAgICAuYXR0cignaWQnLCAnY2xpcCcpXHJcbiAgICAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuXHJcbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcblxyXG4gICAgZy5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgbmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAncmVkJylcclxuXHJcbiAgICBnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxyXG4gICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXHJcbiAgICAgIC5qb2luKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGNvbG9yKGRhdGEuZ2V0KGQuaWQpKSlcclxuICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxyXG4gICAgICAuYXBwZW5kKCd0aXRsZScpXHJcbiAgICAgIC50ZXh0KGQgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHtkLnByb3BlcnRpZXMubmFtZX0gJHtkYXRhLmhhcyhkLmlkKSA/IGRhdGEuZ2V0KGQuaWQpIDogJ04vQSd9YFxyXG4gICAgICB9KVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCdwYXRoJylcclxuICAgIC8vICAgLmRhdHVtKHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzLCAoYSwgYikgPT4gYSAhPT0gYikpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aClcclxuXHJcbiAgICBzdmcuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcclxuXHJcblxyXG4gICAgc3ZnLmNhbGwoZDMuem9vbSgpXHJcbiAgICAgIC5leHRlbnQoW1swLCAwXSwgW3dpZHRoLCBoZWlnaHRdXSlcclxuICAgICAgLnNjYWxlRXh0ZW50KFsxLCA4XSlcclxuICAgICAgLm9uKCd6b29tJywgem9vbWVkKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbWVkKHsgdHJhbnNmb3JtIH0pIHtcclxuICAgICAgY29uc29sZS5sb2codHJhbnNmb3JtKTtcclxuICAgICAgXHJcbiAgICAgIGcuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyByZWY9e3N2Z1JlZn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==