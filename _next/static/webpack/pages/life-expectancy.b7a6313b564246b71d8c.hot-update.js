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
        lineNumber: 68,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this);
  });
  var bounds = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return topojson__WEBPACK_IMPORTED_MODULE_4__["mesh"](world, world.objects.countries, function (a, b) {
      return a !== b;
    });
  }, []);
  var boundsPath = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _path;

    return (_path = path(bounds)) !== null && _path !== void 0 ? _path : undefined;
  }, [bounds]);
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
}, "w3+9W2oVIUtEErhh5M4cyD9VSK0="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q2hhcnQudHN4Il0sIm5hbWVzIjpbIm91dGxpbmUiLCJ0eXBlIiwid29ybGQiLCJ3b3JsZE9iaiIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsInByb2plY3Rpb24iLCJnZW9FcXVhbEVhcnRoIiwicGF0aCIsImdlb1BhdGgiLCJsb2NhdGlvbiIsIndpbmRvdyIsInRvU3RyaW5nIiwiTGlmZUV4cGVjdGFuY3lDaGFydCIsIm1lbW8iLCJkYXRhIiwiY29sb3IiLCJ3aWR0aCIsInN2Z1JlZiIsInVzZVJlZiIsInVzZU1lbW8iLCJmaXRXaWR0aCIsImJvdW5kcyIsIngwIiwieTAiLCJ4MSIsInkxIiwiZHkiLCJNYXRoIiwiY2VpbCIsImwiLCJtaW4iLCJ1c2VFZmZlY3QiLCJzY2FsZSIsInByZWNpc2lvbiIsImhlaWdodCIsImN1cnJlbnQiLCJzdmciLCJkMyIsInNlbGVjdCIsImNhbGwiLCJleHRlbnQiLCJzY2FsZUV4dGVudCIsIm9uIiwiem9vbWVkIiwidHJhbnNmb3JtIiwiYXR0ciIsImNvdW50cmllc0ZlYXR1cmVzIiwiZmVhdHVyZXMiLCJtYXAiLCJjb3VudHJ5IiwiaWQiLCJnZXQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsImhhcyIsImEiLCJiIiwiYm91bmRzUGF0aCIsInVuZGVmaW5lZCIsInN0eWxlcyIsImNoYXJ0IiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFrQixHQUFHO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTNCO0FBQ0EsSUFBTUMsS0FBMEIsR0FBR0Msc0RBQW5DO0FBQ0EsSUFBTUMsU0FBb0MsR0FBR0MsZ0RBQUEsQ0FBaUJILEtBQWpCLEVBQXdCQSxLQUFLLENBQUNJLE9BQU4sQ0FBY0Ys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QUMsTUFBYjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRSxJQUFJRyxHQUFKLENBQVEsVUFBUixFQUFvQnBELFFBQXBCLEVBQThCRSxRQUE5QjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBYUU7QUFBRyxpQ0FBa0IsSUFBSWtELEdBQUosQ0FBUSxPQUFSLEVBQWlCcEQsUUFBakIsQ0FBbEIsTUFBSDtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBRSxJQUFJb0QsR0FBSixDQUFRLFVBQVIsRUFBb0JwRCxRQUFwQixFQUE4QkUsUUFBOUIsRUFEYjtBQUVFLFlBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUEsbUJBQ0dtQyxpQkFESCxlQUVFO0FBQU0sY0FBSSxFQUFDLE1BQVg7QUFBa0IsZ0JBQU0sRUFBQyxPQUF6QjtBQUFpQyw2QkFBZ0IsT0FBakQ7QUFBeUQsV0FBQyxFQUFFVztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBU0U7QUFDRSxpQkFBUyxFQUFFLElBQUlJLEdBQUosQ0FBUSxVQUFSLEVBQW9CcEQsUUFBcEIsRUFBOEJFLFFBQTlCLEVBRGI7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLGNBQU0sRUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQTNGK0Isa0NBQWhDO01BQU1DLG1CO0FBNkZTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuYjdhNjMxM2I1NjQyNDZiNzFkOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbywgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuaW1wb3J0IHsgZ2VvRXF1YWxFYXJ0aCwgR2VvUGF0aCwgZ2VvUGF0aCwgR2VvUHJvamVjdGlvbiwgR2VvU3BoZXJlIH0gZnJvbSAnZDMtZ2VvJ1xyXG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbidcclxuaW1wb3J0IHdvcmxkT2JqIGZyb20gJy4uLy4uL3N0b3JlL2NvdW50cmllcy01MG0uanNvbidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBvdXRsaW5lOiBHZW9TcGhlcmUgPSB7IHR5cGU6ICdTcGhlcmUnIH1cclxuY29uc3Qgd29ybGQ6IHRvcG9qc29uLldvcmxkQXRsYXMgPSB3b3JsZE9iaiBhcyBvYmplY3QgYXMgdG9wb2pzb24uV29ybGRBdGxhc1xyXG5jb25zdCBjb3VudHJpZXM6IEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb24gPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmNvdW50cmllcylcclxuY29uc3QgcHJvamVjdGlvbjogR2VvUHJvamVjdGlvbiA9IGdlb0VxdWFsRWFydGgoKVxyXG5jb25zdCBwYXRoOiBHZW9QYXRoID0gZ2VvUGF0aChwcm9qZWN0aW9uKVxyXG5jb25zdCBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xpZmUtZXhwZWN0YW5jeSdcclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvd29ybGQtY2hvcm9wbGV0aFxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNoYXJ0ID0gbWVtbzx7XHJcbiAgZGF0YTogTWFwPHN0cmluZywgbnVtYmVyPixcclxuICBjb2xvcjogZDMuU2NhbGVTZXF1ZW50aWFsPHN0cmluZywgJyNmMmYyZjInPixcclxuICB3aWR0aD86IG51bWJlcixcclxufT4oKHtcclxuICBkYXRhLFxyXG4gIGNvbG9yLFxyXG4gIHdpZHRoLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpXHJcblxyXG4gIGNvbnN0IFtbeDAsIHkwXSwgW3gxLCB5MV1dID0gdXNlTWVtbygoKSA9PiBnZW9QYXRoKHByb2plY3Rpb24uZml0V2lkdGgod2lkdGgsIG91dGxpbmUpKS5ib3VuZHMob3V0bGluZSksIFtdKVxyXG4gIGNvbnN0IGR5ID0gTWF0aC5jZWlsKHkxIC0geTApXHJcbiAgY29uc3QgbCA9IE1hdGgubWluKE1hdGguY2VpbCh4MSAtIHgwKSwgZHkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0aW9uLnNjYWxlKHByb2plY3Rpb24uc2NhbGUoKSAqIChsIC0gMSkgLyBsKS5wcmVjaXNpb24oMC4yKVxyXG4gIH0sIFtwcm9qZWN0aW9uLCBsXSlcclxuICBcclxuICBjb25zdCBoZWlnaHQgPSBkeVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSBzdmcuc2VsZWN0KCcuY291bnRyaWVzJylcclxuXHJcbiAgICBzdmcuY2FsbChcclxuICAgICAgZDMuem9vbTx0eXBlb2Ygc3ZnUmVmLmN1cnJlbnQsIGFueT4oKVxyXG4gICAgICAgIC5leHRlbnQoW1swLCAwXSwgW3dpZHRoLCBoZWlnaHRdXSlcclxuICAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDVdKVxyXG4gICAgICAgIC5vbignem9vbScsIHpvb21lZClcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbWVkKHsgdHJhbnNmb3JtIH06IGFueSkge1xyXG4gICAgICBjb3VudHJpZXMuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSBjb3VudHJpZXMuZmVhdHVyZXMubWFwKChjb3VudHJ5OiBHZW9KU09OLkZlYXR1cmUpID0+IHtcclxuICAgIGxldCB7IGlkIH0gPSBjb3VudHJ5XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBpZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD17Y29sb3IoZGF0YS5nZXQoaWQpISl9XHJcbiAgICAgICAgZD17cGF0aChjb3VudHJ5KSF9XHJcbiAgICAgID5cclxuICAgICAgICA8dGl0bGU+e2NvdW50cnkucHJvcGVydGllcz8ubmFtZX0ge2RhdGEuaGFzKGlkKSA/IGRhdGEuZ2V0KGlkKSA6ICdOL0EnfTwvdGl0bGU+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgIClcclxuICB9KVxyXG5cclxuICBjb25zdCBib3VuZHMgPSB1c2VNZW1vKCgpID0+IHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuY291bnRyaWVzLCAoYSwgYikgPT4gYSAhPT0gYiksIFtdKVxyXG4gIGNvbnN0IGJvdW5kc1BhdGggPSB1c2VNZW1vKCgpID0+IHBhdGgoYm91bmRzKSA/PyB1bmRlZmluZWQsIFtib3VuZHNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICByZWY9e3N2Z1JlZn1cclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgdmlld0JveD17WzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCl9IFxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFydH1cclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHBhdGggaWQ9XCJvdXRsaW5lXCIgZD17cGF0aChvdXRsaW5lKSA/PyB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFwiPlxyXG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9e25ldyBVUkwoJyNvdXRsaW5lJywgbG9jYXRpb24pLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8ZyBjbGlwLXBhdGg9e2B1cmwoJHtuZXcgVVJMKCcjY2xpcCcsIGxvY2F0aW9uKX0pYH0+XHJcbiAgICAgICAgPHVzZVxyXG4gICAgICAgICAgeGxpbmtIcmVmPXtuZXcgVVJMKCcjb3V0bGluZScsIGxvY2F0aW9uKS50b1N0cmluZygpfSBcclxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJjb3VudHJpZXNcIj5cclxuICAgICAgICAgIHtjb3VudHJpZXNGZWF0dXJlc31cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9e2JvdW5kc1BhdGh9IC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICAgIDx1c2VcclxuICAgICAgICAgIHhsaW5rSHJlZj17bmV3IFVSTCgnI291dGxpbmUnLCBsb2NhdGlvbikudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzQ3NDc0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==