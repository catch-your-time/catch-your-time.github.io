webpackHotUpdate_N_E("pages/life-expectancy",{

/***/ "./components/lifeExpectancyChart/lifeExpectancyContainer.tsx":
/*!********************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json");
var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json", 1);
/* harmony import */ var _types_sex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/sex */ "./types/sex.ts");
/* harmony import */ var _lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lifeExpectancyChart */ "./components/lifeExpectancyChart/lifeExpectancyChart.tsx");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lifeExpectancyLegend */ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyContainer.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var sexOptions = [{
  key: 0,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Both,
  text: 'Both'
}, {
  key: 1,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Man,
  text: 'Man'
}, {
  key: 2,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Woman,
  text: 'Woman'
}];

var LifeExpectancyContainer = function LifeExpectancyContainer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Both),
      sex = _useState[0],
      setSex = _useState[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e, _ref) {
    var value = _ref.value;
    return setSex(value);
  }, []);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return new Map(_store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_3__.reduce(function (acc, cur) {
      acc.push([cur.code, cur[sex]]);
      return acc;
    }, []));
  }, [sex]);
  var color = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var domainBy = d3__WEBPACK_IMPORTED_MODULE_0__["extent"](Array.from(data.values()));
    return d3__WEBPACK_IMPORTED_MODULE_0__["scaleSequential"]().domain(domainBy).interpolator(d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRdBu"]).unknown('#f2f2f2');
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Age (years)",
        color: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
            value: sex,
            onChange: onChange,
            options: sexOptions,
            placeholder: "Select sex",
            compact: true,
            selection: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: data,
      color: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "t4YEXQ4zRK/paMk30B5G9tCkw7o=");

_c = LifeExpectancyContainer;
/* harmony default export */ __webpack_exports__["default"] = (LifeExpectancyContainer);

var _c;

$RefreshReg$(_c, "LifeExpectancyContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzZXhPcHRpb25zIiwia2V5IiwidmFsdWUiLCJTZXgiLCJCb3RoIiwidGV4dCIsIk1hbiIsIldvbWFuIiwiTGlmZUV4cGVjdGFuY3lDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNleCIsInNldFNleCIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwiZGF0YSIsInVzZU1lbW8iLCJNYXAiLCJsaWZlRXhwZWN0YW5jeSIsInJlZHVjZSIsImFjYyIsImN1ciIsInB1c2giLCJjb2RlIiwiY29sb3IiLCJkb21haW5CeSIsImQzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwidW5rbm93biIsInN0eWxlcyIsImNvbnRhaW5lciIsInBhbmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsS0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBSyxFQUFFQyw4Q0FBRyxDQUFDQyxJQUFyQjtBQUEyQkMsTUFBSSxFQUFFO0FBQWpDLENBRGlCLEVBRWpCO0FBQUVKLEtBQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUssRUFBRUMsOENBQUcsQ0FBQ0csR0FBckI7QUFBMEJELE1BQUksRUFBRTtBQUFoQyxDQUZpQixFQUdqQjtBQUFFSixLQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFLLEVBQUVDLDhDQUFHLENBQUNJLEtBQXJCO0FBQTRCRixNQUFJLEVBQUU7QUFBbEMsQ0FIaUIsQ0FBbkI7O0FBTUEsSUFBTUcsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQUE7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQU1OLDhDQUFHLENBQUNDLElBQVYsQ0FETTtBQUFBLE1BQzdCTSxHQUQ2QjtBQUFBLE1BQ3hCQyxNQUR3Qjs7QUFFcEMsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQ7QUFBQSxRQUFNWixLQUFOLFFBQU1BLEtBQU47QUFBQSxXQUFrQlMsTUFBTSxDQUFDVCxLQUFELENBQXhCO0FBQUEsR0FBRCxFQUFrQyxFQUFsQyxDQUE1QjtBQUVBLE1BQU1hLElBQUksR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU0sSUFBSUMsR0FBSixDQUN6QkMsd0RBQWMsQ0FBQ0MsTUFBZixDQUFzQixVQUFDQyxHQUFELEVBQWFDLEdBQWIsRUFBdUM7QUFDM0RELFNBQUcsQ0FBQ0UsSUFBSixDQUFTLENBQUNELEdBQUcsQ0FBQ0UsSUFBTCxFQUFXRixHQUFHLENBQUNYLEdBQUQsQ0FBZCxDQUFUO0FBQ0EsYUFBT1UsR0FBUDtBQUNELEtBSEQsRUFHRyxFQUhILENBRHlCLENBQU47QUFBQSxHQUFELEVBS2pCLENBQUNWLEdBQUQsQ0FMaUIsQ0FBcEI7QUFPQSxNQUFNYyxLQUFLLEdBQUdSLHFEQUFPLENBQUMsWUFBTTtBQUMxQixRQUFNUyxRQUFRLEdBQUdDLHlDQUFBLENBQVVDLEtBQUssQ0FBQ0MsSUFBTixDQUFXYixJQUFJLENBQUNjLE1BQUwsRUFBWCxDQUFWLENBQWpCO0FBRUEsV0FBT0gsa0RBQUEsR0FDSkksTUFESSxDQUNHTCxRQURILEVBRUpNLFlBRkksQ0FFU0wsa0RBRlQsRUFHSk0sT0FISSxDQUdJLFNBSEosQ0FBUDtBQUlELEdBUG9CLEVBT2xCLENBQUNqQixJQUFELENBUGtCLENBQXJCO0FBU0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUVrQix1RUFBTSxDQUFDQyxTQUEzQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCx1RUFBTSxDQUFDRSxLQUF2QjtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQXNCLGFBQUssRUFBQyxhQUE1QjtBQUEwQyxhQUFLLEVBQUVYO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHNEQUFEO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZ0JBQU0sTUFBbEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLDBEQUFEO0FBQ0UsaUJBQUssRUFBRWQsR0FEVDtBQUVFLG9CQUFRLEVBQUVFLFFBRlo7QUFHRSxtQkFBTyxFQUFFWixVQUhYO0FBSUUsdUJBQVcsRUFBQyxZQUpkO0FBS0UsbUJBQU8sTUFMVDtBQU1FLHFCQUFTO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFpQkUscUVBQUMsNERBQUQ7QUFBcUIsVUFBSSxFQUFFZSxJQUEzQjtBQUFpQyxXQUFLLEVBQUVTO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F6Q0Q7O0dBQU1oQix1Qjs7S0FBQUEsdUI7QUEyQ1NBLHNGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpZmUtZXhwZWN0YW5jeS4wNzc2M2Y4OTkwYWNhZGQwYTg1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRHJvcGRvd24sIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGxpZmVFeHBlY3RhbmN5IGZyb20gJy4uLy4uL3N0b3JlL2xpZmUtZXhwZWN0YW5jeS5qc29uJ1xyXG5pbXBvcnQgeyBBdmVyYWdlTGlmZVllYXJzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYXZlcmFnZUxpZmVZZWFycydcclxuaW1wb3J0IHsgU2V4IH0gZnJvbSAnLi4vLi4vdHlwZXMvc2V4J1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lDaGFydCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUNoYXJ0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGlmZUV4cGVjdGFuY3lMZWdlbmQgZnJvbSAnLi9saWZlRXhwZWN0YW5jeUxlZ2VuZCdcclxuXHJcbmNvbnN0IHNleE9wdGlvbnMgPSBbXHJcbiAgeyBrZXk6IDAsIHZhbHVlOiBTZXguQm90aCwgdGV4dDogJ0JvdGgnIH0sXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBTZXguTWFuLCB0ZXh0OiAnTWFuJyB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogU2V4LldvbWFuLCB0ZXh0OiAnV29tYW4nIH0sXHJcbl1cclxuXHJcbmNvbnN0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZXgsIHNldFNleF0gPSB1c2VTdGF0ZTxTZXg+KFNleC5Cb3RoKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUsIHsgdmFsdWUgfSkgPT4gc2V0U2V4KHZhbHVlKSwgW10pXHJcblxyXG4gIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IG5ldyBNYXA8YW55LCBhbnk+KFxyXG4gICAgbGlmZUV4cGVjdGFuY3kucmVkdWNlKChhY2M6IGFueVtdLCBjdXI6IEF2ZXJhZ2VMaWZlWWVhcnMpID0+IHtcclxuICAgICAgYWNjLnB1c2goW2N1ci5jb2RlLCBjdXJbc2V4XV0pXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKVxyXG4gICksIFtzZXhdKVxyXG5cclxuICBjb25zdCBjb2xvciA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZG9tYWluQnkgPSBkMy5leHRlbnQoQXJyYXkuZnJvbShkYXRhLnZhbHVlcygpKSlcclxuXHJcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKClcclxuICAgICAgLmRvbWFpbihkb21haW5CeSBhcyBbbnVtYmVyLCBudW1iZXJdKVxyXG4gICAgICAuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmRCdSlcclxuICAgICAgLnVua25vd24oJyNmMmYyZjInKVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFuZWx9PlxyXG4gICAgICAgIDxMaWZlRXhwZWN0YW5jeUxlZ2VuZCB0aXRsZT1cIkFnZSAoeWVhcnMpXCIgY29sb3I9e2NvbG9yfSAvPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQgaW5saW5lPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VsZWN0IHNleDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZXh9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NleE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBzZXgnXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaWZlRXhwZWN0YW5jeUNoYXJ0IGRhdGE9e2RhdGF9IGNvbG9yPXtjb2xvcn0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZmVFeHBlY3RhbmN5Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==