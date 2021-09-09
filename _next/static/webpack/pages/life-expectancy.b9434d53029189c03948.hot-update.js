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
    defs.append('clipPath').attr('id', 'clip2').append('rect').attr('x', '0').attr('y', '0').attr('width', '100').attr('height', '200');
    var g = svg.append('g') // .attr('clip-path', `url(${new URL('#clip', location)})`)
    .attr('clip-path', "url(".concat(new URL('#clip2', location), ")")); // g.append('use')
    // .attr('xlink:href', new URL('#outline', location).toString())
    // .attr('fill', 'red')

    g.append('g').selectAll('path').data(countries.features).join('path').attr('fill', function (d) {
      return color(data.get(d.id));
    }).attr('d', path).append('title').text(function (d) {
      return "".concat(d.properties.name, " ").concat(data.has(d.id) ? data.get(d.id) : 'N/A');
    }); // g.attr('clip-path', `url(${new URL('#clip', location)})`)
    // g.append('path')
    //   .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'white')
    //   .attr('stroke-linejoin', 'round')
    //   .attr('d', path)
    // svg.append('use')
    //   .attr('xlink:href', new URL('#outline', location).toString())
    //   // .attr('clip-path', `url(${new URL('#clip', location)})`)
    //   .attr('fill', 'none')
    //   .attr('stroke', 'black')

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
    lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIkxpZmVFeHBlY3RhbmN5Q2hhcnQiLCJtZW1vIiwiZGF0YSIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzdmdSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJwYXRoIiwiZ2VvUGF0aCIsImNvdW50cmllcyIsInRvcG9qc29uIiwid29ybGQiLCJvYmplY3RzIiwib3V0bGluZSIsInR5cGUiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiZDMiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJzdmciLCJzdHlsZSIsImF0dHIiLCJkZWZzIiwiYXBwZW5kIiwiVVJMIiwiZyIsImZlYXR1cmVzIiwiam9pbiIsImQiLCJnZXQiLCJpZCIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImNhbGwiLCJleHRlbnQiLCJzY2FsZUV4dGVudCIsIm9uIiwiem9vbWVkIiwidHJhbnNmb3JtIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTUEsbUJBQW1CLGdCQUFHQyxrREFBSSxTQUs3QixnQkFLRztBQUFBOztBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLEtBR0ksUUFISkEsS0FHSTtBQUFBLHdCQUZKQyxLQUVJO0FBQUEsTUFGSkEsS0FFSSwyQkFGSSxHQUVKO0FBQUEseUJBREpDLE1BQ0k7QUFBQSxNQURKQSxNQUNJLDRCQURLLEdBQ0w7QUFDSixNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQWdCLElBQWhCLENBQXJCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0YsTUFBTSxD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Q0E7O0FBR0FYLE9BQUcsQ0FBQ2dCLElBQUosQ0FBU25CLHVDQUFBLEdBQ05vQixNQURNLENBQ0MsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDdkMsS0FBRCxFQUFRQyxNQUFSLENBQVQsQ0FERCxFQUVOdUMsV0FGTSxDQUVNLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGTixFQUdOQyxFQUhNLENBR0gsTUFIRyxFQUdLQyxNQUhMLENBQVQ7O0FBS0EsYUFBU0EsTUFBVCxRQUErQjtBQUFBLFVBQWJDLFNBQWEsU0FBYkEsU0FBYTtBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFFQWYsT0FBQyxDQUFDSixJQUFGLENBQU8sV0FBUCxFQUFvQm1CLFNBQXBCO0FBQ0Q7QUFFRixHQXBGUSxFQW9GTixDQUFDN0MsSUFBRCxDQXBGTSxDQUFUO0FBc0ZBLHNCQUNFO0FBQUssT0FBRyxFQUFFSSxNQUFWO0FBQWtCLFNBQUssRUFBRUYsS0FBekI7QUFBZ0MsVUFBTSxFQUFFQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQXRHK0Isa0NBQWhDO01BQU1MLG1CO0FBd0dTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuYjk0MzRkNTMwMjkxODljMDM5NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IHsgZ2VvRXF1YWxFYXJ0aCwgR2VvUGF0aCwgZ2VvUGF0aCwgR2VvUHJvamVjdGlvbiwgR2VvU3BoZXJlIH0gZnJvbSAnZDMtZ2VvJ1xyXG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbidcclxuaW1wb3J0IHdvcmxkIGZyb20gJy4uLy4uL3N0b3JlL2NvdW50cmllcy01MG0uanNvbidcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogYW55LFxyXG4gIGNvbG9yOiBhbnksXHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbiAgaGVpZ2h0PzogbnVtYmVyLFxyXG59Pigoe1xyXG4gIGRhdGEsXHJcbiAgY29sb3IsXHJcbiAgd2lkdGggPSA5NzAsXHJcbiAgaGVpZ2h0ID0gNTAwLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN2Z1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3Rpb246IEdlb1Byb2plY3Rpb24gPSBnZW9FcXVhbEVhcnRoKClcclxuICAgIGNvbnN0IHBhdGg6IEdlb1BhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuXHJcbiAgICBjb25zdCBvdXRsaW5lOiBHZW9TcGhlcmUgPSAoeyB0eXBlOiAnU3BoZXJlJyB9KVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxyXG5cclxuICAgIC8vIENsZWFyIGEgcHJldmlvdXMgY2hhcnRcclxuICAgIGQzLnNlbGVjdChzdmdSZWYuY3VycmVudCkuc2VsZWN0QWxsKCcqJykucmVtb3ZlKClcclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpXHJcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKVxyXG5cclxuICAgIGRlZnMuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgJ291dGxpbmUnKVxyXG4gICAgICAuYXR0cignZCcsIHBhdGgob3V0bGluZSkpXHJcblxyXG4gICAgZGVmcy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgJ2NsaXAnKVxyXG4gICAgICAuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgZGVmcy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgJ2NsaXAyJylcclxuICAgICAgLmFwcGVuZCgncmVjdCcpXHJcbiAgICAgIC5hdHRyKCd4JywgJzAnKVxyXG4gICAgICAuYXR0cigneScsICcwJylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgJzEwMCcpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAnMjAwJylcclxuXHJcbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC8vIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAyJywgbG9jYXRpb24pfSlgKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAvLyAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAgIC8vIC5hdHRyKCdmaWxsJywgJ3JlZCcpXHJcblxyXG4gICAgZy5hcHBlbmQoJ2cnKVxyXG4gICAgICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxyXG4gICAgICAuam9pbigncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiBjb2xvcihkYXRhLmdldChkLmlkKSkpXHJcbiAgICAgIC5hdHRyKCdkJywgcGF0aClcclxuICAgICAgLmFwcGVuZCgndGl0bGUnKVxyXG4gICAgICAudGV4dChkID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9ICR7ZGF0YS5oYXMoZC5pZCkgPyBkYXRhLmdldChkLmlkKSA6ICdOL0EnfWBcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGcuYXR0cignY2xpcC1wYXRoJywgYHVybCgke25ldyBVUkwoJyNjbGlwJywgbG9jYXRpb24pfSlgKVxyXG5cclxuICAgIC8vIGcuYXBwZW5kKCdwYXRoJylcclxuICAgIC8vICAgLmRhdHVtKHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzLCAoYSwgYikgPT4gYSAhPT0gYikpXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcclxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXHJcbiAgICAvLyAgIC5hdHRyKCdkJywgcGF0aClcclxuXHJcbiAgICAvLyBzdmcuYXBwZW5kKCd1c2UnKVxyXG4gICAgLy8gICAuYXR0cigneGxpbms6aHJlZicsIG5ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCkpXHJcbiAgICAvLyAgIC8vIC5hdHRyKCdjbGlwLXBhdGgnLCBgdXJsKCR7bmV3IFVSTCgnI2NsaXAnLCBsb2NhdGlvbil9KWApXHJcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcclxuXHJcblxyXG4gICAgc3ZnLmNhbGwoZDMuem9vbSgpXHJcbiAgICAgIC5leHRlbnQoW1swLCAwXSwgW3dpZHRoLCBoZWlnaHRdXSlcclxuICAgICAgLnNjYWxlRXh0ZW50KFsxLCA4XSlcclxuICAgICAgLm9uKCd6b29tJywgem9vbWVkKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbWVkKHsgdHJhbnNmb3JtIH0pIHtcclxuICAgICAgY29uc29sZS5sb2codHJhbnNmb3JtKTtcclxuICAgICAgXHJcbiAgICAgIGcuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyByZWY9e3N2Z1JlZn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==