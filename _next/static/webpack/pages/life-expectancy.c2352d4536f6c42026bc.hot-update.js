webpackHotUpdate_N_E("pages/life-expectancy",{

/***/ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx":
/*!*****************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyLegend.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyLegend.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var ramp = function ramp(color) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  var canvas = document.createElement('canvas');
  canvas.width = n;
  canvas.height = 1;
  var context = canvas.getContext('2d');

  for (var i = 0; i < n; ++i) {
    context.fillStyle = color(i / (n - 1));
    context.fillRect(i, 0, 1, 1);
  }

  return canvas;
}; // https://observablehq.com/@d3/color-legend


var LifeExpectancyLegend = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function (_ref) {
  _s();

  var color = _ref.color,
      title = _ref.title,
      _ref$tickSize = _ref.tickSize,
      tickSize = _ref$tickSize === void 0 ? 6 : _ref$tickSize,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 300 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 44 + tickSize : _ref$height,
      _ref$marginTop = _ref.marginTop,
      marginTop = _ref$marginTop === void 0 ? 18 : _ref$marginTop,
      _ref$marginRight = _ref.marginRight,
      marginRight = _ref$marginRight === void 0 ? 0 : _ref$marginRight,
      _ref$marginBottom = _ref.marginBottom,
      marginBottom = _ref$marginBottom === void 0 ? 16 + tickSize : _ref$marginBottom,
      _ref$marginLeft = _ref.marginLeft,
      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft,
      _ref$ticks = _ref.ticks,
      ticks = _ref$ticks === void 0 ? width / 64 : _ref$ticks,
      tickFormat = _ref.tickFormat,
      tickValues = _ref.tickValues;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!svgRef.current) {
      return;
    }

    var outline = {
      type: 'Sphere'
    };
    var location = window.location.toString();
    var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgRef.current).attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height].toString()).style('overflow', 'visible').style('display', 'block');

    var tickAdjust = function tickAdjust(g) {
      return g.selectAll('.tick line').attr('y1', marginTop + marginBottom - height);
    };

    var x; // Continuous

    if (color.interpolate) {
      var n = Math.min(color.domain().length, color.range().length);
      x = color.copy().rangeRound(d3__WEBPACK_IMPORTED_MODULE_1__["quantize"](d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](marginLeft, width - marginRight), n));
      svg.append('image').attr('x', marginLeft).attr('y', marginTop).attr('width', width - marginLeft - marginRight).attr('height', height - marginTop - marginBottom).attr('preserveAspectRatio', 'none').attr('xlink:href', ramp(color.copy().domain(d3__WEBPACK_IMPORTED_MODULE_1__["quantize"](d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](0, 1), n))).toDataURL());
    } // Sequential
    else if (color.interpolator) {
        x = Object.assign(color.copy().interpolator(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"](marginLeft, width - marginRight)), {
          range: function range() {
            return [marginLeft, width - marginRight];
          }
        });
        svg.append('image').attr('x', marginLeft).attr('y', marginTop).attr('width', width - marginLeft - marginRight).attr('height', height - marginTop - marginBottom).attr('preserveAspectRatio', 'none').attr('xlink:href', ramp(color.interpolator()).toDataURL()); // scaleSequentialQuantile doesn’t implement ticks or tickFormat.

        if (!x.ticks) {
          if (tickValues === undefined) {
            var _n = Math.round(ticks + 1);

            tickValues = d3__WEBPACK_IMPORTED_MODULE_1__["range"](_n).map(function (i) {
              return d3__WEBPACK_IMPORTED_MODULE_1__["quantile"](color.domain(), i / (_n - 1));
            });
          }

          if (typeof tickFormat !== 'function') {
            tickFormat = d3__WEBPACK_IMPORTED_MODULE_1__["format"](tickFormat === undefined ? ',f' : tickFormat);
          }
        }
      } // Threshold
      else if (color.invertExtent) {
          var thresholds = color.thresholds ? color.thresholds() // scaleQuantize
          : color.quantiles ? color.quantiles() // scaleQuantile
          : color.domain(); // scaleThreshold

          var thresholdFormat = tickFormat === undefined ? function (d) {
            return d;
          } : typeof tickFormat === 'string' ? d3__WEBPACK_IMPORTED_MODULE_1__["format"](tickFormat) : tickFormat;
          x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([-1, color.range().length - 1]).rangeRound([marginLeft, width - marginRight]);
          svg.append('g').selectAll('rect').data(color.range()).join('rect').attr('x', function (d, i) {
            return x(i - 1);
          }).attr('y', marginTop).attr('width', function (d, i) {
            return x(i) - x(i - 1);
          }).attr('height', height - marginTop - marginBottom) //@ts-ignore
          .attr('fill', function (d) {
            return d;
          });
          tickValues = d3__WEBPACK_IMPORTED_MODULE_1__["range"](thresholds.length);

          tickFormat = function tickFormat(i) {
            return thresholdFormat(thresholds[i], i);
          };
        } // Ordinal
        else {
            x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().domain(color.domain()).rangeRound([marginLeft, width - marginRight]);
            svg.append('g').selectAll('rect').data(color.domain()).join('rect').attr('x', x).attr('y', marginTop).attr('width', Math.max(0, x.bandwidth() - 1)).attr('height', height - marginTop - marginBottom).attr('fill', color);

            tickAdjust = function tickAdjust() {};
          }

    svg.append('g').attr('transform', "translate(0,".concat(height - marginBottom, ")")).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).ticks(ticks, typeof tickFormat === 'string' ? tickFormat : undefined).tickFormat(typeof tickFormat === 'function' ? tickFormat : undefined).tickSize(tickSize).tickValues(tickValues)).call(tickAdjust).call(function (g) {
      return g.select('.domain').remove();
    }).call(function (g) {
      return g.append('text').attr('x', marginLeft).attr('y', marginTop + marginBottom - height - 6).attr('fill', 'currentColor').attr('text-anchor', 'start').attr('font-weight', 'bold').attr('class', 'title') //@ts-ignore
      .text(title);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
    ref: svgRef,
    width: width,
    height: height,
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.legend
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 5
  }, _this);
}, "89Ty783ABEwsfMbSOeu9vscWF34="));
_c2 = LifeExpectancyLegend;
/* harmony default export */ __webpack_exports__["default"] = (LifeExpectancyLegend);

var _c, _c2;

$RefreshReg$(_c, "LifeExpectancyLegend$memo");
$RefreshReg$(_c2, "LifeExpectancyLegend");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5TGVnZW5kLnRzeCJdLCJuYW1lcyI6WyJyYW1wIiwiY29sb3IiLCJuIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImkiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkxpZmVFeHBlY3RhbmN5TGVnZW5kIiwibWVtbyIsInRpdGxlIiwidGlja1NpemUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJ0aWNrcyIsInRpY2tGb3JtYXQiLCJ0aWNrVmFsdWVzIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIm91dGxpbmUiLCJ0eXBlIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJ0b1N0cmluZyIsInN2ZyIsImQzIiwiYXR0ciIsInN0eWxlIiwidGlja0FkanVzdCIsImciLCJzZWxlY3RBbGwiLCJ4IiwiaW50ZXJwb2xhdGUiLCJNYXRoIiwibWluIiwiZG9tYWluIiwibGVuZ3RoIiwicmFuZ2UiLCJjb3B5IiwicmFuZ2VSb3VuZCIsImFwcGVuZCIsInRvRGF0YVVSTCIsImludGVycG9sYXRvciIsIk9iamVjdCIsImFzc2lnbiIsInVuZGVmaW5lZCIsInJvdW5kIiwibWFwIiwiaW52ZXJ0RXh0ZW50IiwidGhyZXNob2xkcyIsInF1YW50aWxlcyIsInRocmVzaG9sZEZvcm1hdCIsImQiLCJkYXRhIiwiam9pbiIsIm1heCIsImJhbmR3aWR0aCIsImNhbGwiLCJzZWxlY3QiLCJyZW1vdmUiLCJ0ZXh0Iiwic3R5bGVzIiwibGVnZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFD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QUFNMUQsb0I7QUFtS1NBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS5jMjM1MmQ0NTM2ZjZjNDIwMjZiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgeyBHZW9TcGhlcmUgfSBmcm9tICdkMy1nZW8nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgcmFtcCA9IChjb2xvcjogYW55LCBuOiBudW1iZXIgPSAyNTYpID0+IHtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICBjYW52YXMud2lkdGggPSBuXHJcbiAgY2FudmFzLmhlaWdodCA9IDFcclxuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XHJcbiAgICBjb250ZXh0IS5maWxsU3R5bGUgPSBjb2xvcihpIC8gKG4gLSAxKSk7XHJcbiAgICBjb250ZXh0IS5maWxsUmVjdChpLCAwLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjYW52YXM7XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvY29sb3ItbGVnZW5kXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5TGVnZW5kID0gbWVtbzx7XHJcbiAgY29sb3I6IGFueSxcclxuICB0aXRsZT86IHN0cmluZyxcclxuICB0aWNrU2l6ZT86IG51bWJlcixcclxuICB3aWR0aD86IG51bWJlcixcclxuICBoZWlnaHQ/OiBudW1iZXIsXHJcbiAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gIG1hcmdpblJpZ2h0PzogbnVtYmVyLFxyXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlcixcclxuICBtYXJnaW5MZWZ0PzogbnVtYmVyLFxyXG4gIHRpY2tzPzogbnVtYmVyLFxyXG4gIHRpY2tGb3JtYXQ/OiBhbnksXHJcbiAgdGlja1ZhbHVlcz86IGFueVxyXG59Pigoe1xyXG4gIGNvbG9yLFxyXG4gIHRpdGxlLFxyXG4gIHRpY2tTaXplID0gNixcclxuICB3aWR0aCA9IDMwMCxcclxuICBoZWlnaHQgPSA0NCArIHRpY2tTaXplLFxyXG4gIG1hcmdpblRvcCA9IDE4LFxyXG4gIG1hcmdpblJpZ2h0ID0gMCxcclxuICBtYXJnaW5Cb3R0b20gPSAxNiArIHRpY2tTaXplLFxyXG4gIG1hcmdpbkxlZnQgPSAwLFxyXG4gIHRpY2tzID0gd2lkdGggLyA2NCxcclxuICB0aWNrRm9ybWF0LFxyXG4gIHRpY2tWYWx1ZXNcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdmdSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRsaW5lOiBHZW9TcGhlcmUgPSAoeyB0eXBlOiAnU3BoZXJlJyB9KVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXHJcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdLnRvU3RyaW5nKCkpXHJcbiAgICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCAndmlzaWJsZScpXHJcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgIGxldCB0aWNrQWRqdXN0ID0gKGc6IGFueSkgPT4gZy5zZWxlY3RBbGwoJy50aWNrIGxpbmUnKS5hdHRyKCd5MScsIG1hcmdpblRvcCArIG1hcmdpbkJvdHRvbSAtIGhlaWdodCk7XHJcbiAgICBsZXQgeDogYW55O1xyXG5cclxuICAgIC8vIENvbnRpbnVvdXNcclxuICAgIGlmIChjb2xvci5pbnRlcnBvbGF0ZSkge1xyXG4gICAgICBjb25zdCBuID0gTWF0aC5taW4oY29sb3IuZG9tYWluKCkubGVuZ3RoLCBjb2xvci5yYW5nZSgpLmxlbmd0aCk7XHJcblxyXG4gICAgICB4ID0gY29sb3IuY29weSgpLnJhbmdlUm91bmQoZDMucXVhbnRpemUoZDMuaW50ZXJwb2xhdGUobWFyZ2luTGVmdCwgd2lkdGggLSBtYXJnaW5SaWdodCksIG4pKTtcclxuXHJcbiAgICAgIHN2Zy5hcHBlbmQoJ2ltYWdlJylcclxuICAgICAgICAuYXR0cigneCcsIG1hcmdpbkxlZnQpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBtYXJnaW5Ub3ApXHJcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQpXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCAtIG1hcmdpblRvcCAtIG1hcmdpbkJvdHRvbSlcclxuICAgICAgICAuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICdub25lJylcclxuICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIHJhbXAoY29sb3IuY29weSgpLmRvbWFpbihkMy5xdWFudGl6ZShkMy5pbnRlcnBvbGF0ZSgwLCAxKSwgbikpKS50b0RhdGFVUkwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VxdWVudGlhbFxyXG4gICAgZWxzZSBpZiAoY29sb3IuaW50ZXJwb2xhdG9yKSB7XHJcbiAgICAgIHggPSBPYmplY3QuYXNzaWduKGNvbG9yLmNvcHkoKVxyXG4gICAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSb3VuZChtYXJnaW5MZWZ0LCB3aWR0aCAtIG1hcmdpblJpZ2h0KSksXHJcbiAgICAgICAgeyByYW5nZSgpIHsgcmV0dXJuIFttYXJnaW5MZWZ0LCB3aWR0aCAtIG1hcmdpblJpZ2h0XTsgfSB9KTtcclxuXHJcbiAgICAgIHN2Zy5hcHBlbmQoJ2ltYWdlJylcclxuICAgICAgICAuYXR0cigneCcsIG1hcmdpbkxlZnQpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBtYXJnaW5Ub3ApXHJcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQpXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCAtIG1hcmdpblRvcCAtIG1hcmdpbkJvdHRvbSlcclxuICAgICAgICAuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICdub25lJylcclxuICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIHJhbXAoY29sb3IuaW50ZXJwb2xhdG9yKCkpLnRvRGF0YVVSTCgpKTtcclxuXHJcbiAgICAgIC8vIHNjYWxlU2VxdWVudGlhbFF1YW50aWxlIGRvZXNu4oCZdCBpbXBsZW1lbnQgdGlja3Mgb3IgdGlja0Zvcm1hdC5cclxuICAgICAgaWYgKCF4LnRpY2tzKSB7XHJcbiAgICAgICAgaWYgKHRpY2tWYWx1ZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgbiA9IE1hdGgucm91bmQodGlja3MgKyAxKTtcclxuICAgICAgICAgIHRpY2tWYWx1ZXMgPSBkMy5yYW5nZShuKS5tYXAoaSA9PiBkMy5xdWFudGlsZShjb2xvci5kb21haW4oKSwgaSAvIChuIC0gMSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aWNrRm9ybWF0ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICB0aWNrRm9ybWF0ID0gZDMuZm9ybWF0KHRpY2tGb3JtYXQgPT09IHVuZGVmaW5lZCA/ICcsZicgOiB0aWNrRm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaHJlc2hvbGRcclxuICAgIGVsc2UgaWYgKGNvbG9yLmludmVydEV4dGVudCkge1xyXG4gICAgICBjb25zdCB0aHJlc2hvbGRzXHJcbiAgICAgICAgPSBjb2xvci50aHJlc2hvbGRzID8gY29sb3IudGhyZXNob2xkcygpIC8vIHNjYWxlUXVhbnRpemVcclxuICAgICAgICAgIDogY29sb3IucXVhbnRpbGVzID8gY29sb3IucXVhbnRpbGVzKCkgLy8gc2NhbGVRdWFudGlsZVxyXG4gICAgICAgICAgICA6IGNvbG9yLmRvbWFpbigpOyAvLyBzY2FsZVRocmVzaG9sZFxyXG5cclxuICAgICAgY29uc3QgdGhyZXNob2xkRm9ybWF0XHJcbiAgICAgICAgPSB0aWNrRm9ybWF0ID09PSB1bmRlZmluZWQgPyAoZDogYW55KSA9PiBkXHJcbiAgICAgICAgICA6IHR5cGVvZiB0aWNrRm9ybWF0ID09PSAnc3RyaW5nJyA/IGQzLmZvcm1hdCh0aWNrRm9ybWF0KVxyXG4gICAgICAgICAgICA6IHRpY2tGb3JtYXQ7XHJcblxyXG4gICAgICB4ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgIC5kb21haW4oWy0xLCBjb2xvci5yYW5nZSgpLmxlbmd0aCAtIDFdKVxyXG4gICAgICAgIC5yYW5nZVJvdW5kKFttYXJnaW5MZWZ0LCB3aWR0aCAtIG1hcmdpblJpZ2h0XSk7XHJcblxyXG4gICAgICBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAuc2VsZWN0QWxsKCdyZWN0JylcclxuICAgICAgICAuZGF0YShjb2xvci5yYW5nZSgpKVxyXG4gICAgICAgIC5qb2luKCdyZWN0JylcclxuICAgICAgICAuYXR0cigneCcsIChkLCBpKSA9PiB4KGkgLSAxKSlcclxuICAgICAgICAuYXR0cigneScsIG1hcmdpblRvcClcclxuICAgICAgICAuYXR0cignd2lkdGgnLCAoZCwgaSkgPT4geChpKSAtIHgoaSAtIDEpKVxyXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgLSBtYXJnaW5Ub3AgLSBtYXJnaW5Cb3R0b20pXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGQpO1xyXG5cclxuICAgICAgdGlja1ZhbHVlcyA9IGQzLnJhbmdlKHRocmVzaG9sZHMubGVuZ3RoKTtcclxuICAgICAgdGlja0Zvcm1hdCA9IChpOiBhbnkpID0+IHRocmVzaG9sZEZvcm1hdCh0aHJlc2hvbGRzW2ldLCBpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcmRpbmFsXHJcbiAgICBlbHNlIHtcclxuICAgICAgeCA9IGQzLnNjYWxlQmFuZCgpXHJcbiAgICAgICAgLmRvbWFpbihjb2xvci5kb21haW4oKSlcclxuICAgICAgICAucmFuZ2VSb3VuZChbbWFyZ2luTGVmdCwgd2lkdGggLSBtYXJnaW5SaWdodF0pO1xyXG5cclxuICAgICAgc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXHJcbiAgICAgICAgLmRhdGEoY29sb3IuZG9tYWluKCkpXHJcbiAgICAgICAgLmpvaW4oJ3JlY3QnKVxyXG4gICAgICAgIC5hdHRyKCd4JywgeClcclxuICAgICAgICAuYXR0cigneScsIG1hcmdpblRvcClcclxuICAgICAgICAuYXR0cignd2lkdGgnLCBNYXRoLm1heCgwLCB4LmJhbmR3aWR0aCgpIC0gMSkpXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCAtIG1hcmdpblRvcCAtIG1hcmdpbkJvdHRvbSlcclxuICAgICAgICAuYXR0cignZmlsbCcsIGNvbG9yKTtcclxuXHJcbiAgICAgIHRpY2tBZGp1c3QgPSAoKSA9PiB7IH07XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHQgLSBtYXJnaW5Cb3R0b219KWApXHJcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeClcclxuICAgICAgICAudGlja3ModGlja3MsIHR5cGVvZiB0aWNrRm9ybWF0ID09PSAnc3RyaW5nJyA/IHRpY2tGb3JtYXQgOiB1bmRlZmluZWQpXHJcbiAgICAgICAgLnRpY2tGb3JtYXQodHlwZW9mIHRpY2tGb3JtYXQgPT09ICdmdW5jdGlvbicgPyB0aWNrRm9ybWF0IDogdW5kZWZpbmVkKVxyXG4gICAgICAgIC50aWNrU2l6ZSh0aWNrU2l6ZSlcclxuICAgICAgICAudGlja1ZhbHVlcyh0aWNrVmFsdWVzKSlcclxuICAgICAgLmNhbGwodGlja0FkanVzdClcclxuICAgICAgLmNhbGwoZyA9PiBnLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpKVxyXG4gICAgICAuY2FsbChnID0+IGcuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneCcsIG1hcmdpbkxlZnQpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b20gLSBoZWlnaHQgLSA2KVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ2N1cnJlbnRDb2xvcicpXHJcbiAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcclxuICAgICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAnYm9sZCcpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3RpdGxlJylcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAudGV4dCh0aXRsZSkpO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyByZWY9e3N2Z1JlZn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kfSAvPlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5TGVnZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==