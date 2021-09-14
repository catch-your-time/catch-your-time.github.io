webpackHotUpdate_N_E("pages/life-expectancy",{

/***/ "./components/lifeExpectancyChart/lifeExpectancyContainer.tsx":
/*!********************************************************************!*\
  !*** ./components/lifeExpectancyChart/lifeExpectancyContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json");
var _store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../store/life-expectancy.json */ "./store/life-expectancy.json", 1);
/* harmony import */ var _types_sex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/sex */ "./types/sex.ts");
/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useBreakpoint */ "./hooks/useBreakpoint.ts");
/* harmony import */ var _lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lifeExpectancyChart */ "./components/lifeExpectancyChart/lifeExpectancyChart.tsx");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifeExpectancyChart.module.scss */ "./components/lifeExpectancyChart/lifeExpectancyChart.module.scss");
/* harmony import */ var _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifeExpectancyLegend */ "./components/lifeExpectancyChart/lifeExpectancyLegend.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyChart\\lifeExpectancyContainer.tsx",
    _width,
    _this = undefined,
    _s = $RefreshSig$();











var sexOptions = [{
  key: 0,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Both,
  text: 'Both'
}, {
  key: 1,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Man,
  text: 'Man'
}, {
  key: 2,
  value: _types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Woman,
  text: 'Woman'
}];
var width = (_width = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].XSmall, 280), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Small, 520), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Medium, 720), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].Large, 950), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraLarge, 1100), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_width, _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["Breakpoint"].ExtraExtraLarge, 1100), _width);

var LifeExpectancyContainer = function LifeExpectancyContainer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_types_sex__WEBPACK_IMPORTED_MODULE_5__["Sex"].Both),
      sex = _useState[0],
      setSex = _useState[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e, _ref) {
    var value = _ref.value;
    return setSex(value);
  }, []);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return new Map(_store_life_expectancy_json__WEBPACK_IMPORTED_MODULE_4__.reduce(function (acc, cur) {
      acc.push([cur.code, cur[sex]]);
      return acc;
    }, []));
  }, [sex]);
  var color = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var domainBy = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](Array.from(data.values()));
    return d3__WEBPACK_IMPORTED_MODULE_1__["scaleSequential"]().domain(domainBy).interpolator(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRdBu"]).unknown('#f2f2f2');
  }, [data]);
  var breakpoint = Object(_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var availableWidth = width[breakpoint];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("section", {
    className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: _lifeExpectancyChart_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.panel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyLegend__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Age (years)",
        color: color
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            children: "Select sex"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
            value: sex,
            onChange: onChange,
            options: sexOptions,
            placeholder: "Select sex",
            compact: true,
            selection: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_lifeExpectancyChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: data,
      color: color,
      width: availableWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyContainer, "L8587R/CVxwtWMSFga5RxljPaNU=", false, function () {
  return [_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

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

/***/ }),

/***/ "./components/lifeExpectancyTable/lifeExpectancyTable.tsx":
/*!****************************************************************!*\
  !*** ./components/lifeExpectancyTable/lifeExpectancyTable.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/store */ "./hooks/store.ts");
/* harmony import */ var _store_averageLifeYears__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/averageLifeYears */ "./store/averageLifeYears.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\lifeExpectancyTable\\lifeExpectancyTable.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function reducer(state, action) {
  if (action.type === 'CHANGE_SORT') {
    if (state.column === action.column) {
      return _objectSpread(_objectSpread({}, state), {}, {
        data: state.data.slice().reverse(),
        direction: state.direction === 'ascending' ? 'descending' : 'ascending'
      });
    }

    return {
      column: action.column,
      data: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.sortBy(state.data, [action.column]),
      direction: 'ascending'
    };
  }

  throw new Error();
}

var LifeExpectancyTable = function LifeExpectancyTable() {
  _s();

  var tableData = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(_store_averageLifeYears__WEBPACK_IMPORTED_MODULE_6__["selectAllCountries"]);

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(reducer, {
    column: 'both',
    data: tableData,
    direction: 'descending'
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var column = state.column,
      data = state.data,
      direction = state.direction;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    sortable: true,
    celled: true,
    fixed: true,
    striped: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Header, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, {
          sorted: column === 'country' ? direction : null,
          onClick: function onClick() {
            return dispatch({
              type: 'CHANGE_SORT',
              column: 'country'
            });
          },
          children: "Country"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, {
          sorted: column === 'both' ? direction : null,
          onClick: function onClick() {
            return dispatch({
              type: 'CHANGE_SORT',
              column: 'both'
            });
          },
          children: "Both sexes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, {
          sorted: column === 'female' ? direction : null,
          onClick: function onClick() {
            return dispatch({
              type: 'CHANGE_SORT',
              column: 'female'
            });
          },
          children: "Woman"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, {
          sorted: column === 'male' ? direction : null,
          onClick: function onClick() {
            return dispatch({
              type: 'CHANGE_SORT',
              column: 'male'
            });
          },
          children: "Man"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Body, {
      children: data.map(function (_ref) {
        var id = _ref.id,
            country = _ref.country,
            both = _ref.both,
            female = _ref.female,
            male = _ref.male;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, {
            children: country
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, {
            children: both
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, {
            children: female
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, {
            children: male
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(LifeExpectancyTable, "lDD+onnymkTbBhlmxe6co4LY3YM=", false, function () {
  return [_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"]];
});

_c = LifeExpectancyTable;
/* harmony default export */ __webpack_exports__["default"] = (LifeExpectancyTable);

var _c;

$RefreshReg$(_c, "LifeExpectancyTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeUNoYXJ0L2xpZmVFeHBlY3RhbmN5Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWZlRXhwZWN0YW5jeVRhYmxlL2xpZmVFeHBlY3RhbmN5VGFibGUudHN4Il0sIm5hbWVzIjpbInNleE9wdGlvbnMiLCJrZXkiLCJ2YWx1ZSIsIlNleCIsIkJvdGgiLCJ0ZXh0IiwiTWFuIiwiV29tYW4iLCJ3aWR0aCIsIkJyZWFrcG9pbnQiLCJYU21hbGwiLCJTbWFsbCIsIk1lZGl1bSIsIkxhcmdlIiwiRXh0cmFMYXJnZSIsIkV4dHJhRXh0cmFMYXJnZSIsIkxpZmVFeHBlY3RhbmN5Q29udGFpbmVyIiwidXNlU3RhdGUiLCJzZXgiLCJzZXRTZXgiLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZSIsImRhdGEiLCJ1c2VNZW1vIiwiTWFwIiwibGlmZUV4cGVjdGFuY3kiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJwdXNoIiwiY29kZSIsImNvbG9yIiwiZG9tYWluQnkiLCJkMyIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImRvbWFpbiIsImludGVycG9sYXRvciIsInVua25vd24iLCJicmVha3BvaW50IiwidXNlQnJlYWtwb2ludCIsImF2YWlsYWJsZVdpZHRoIiwic3R5bGVzIiwiY29udGFpbmVyIiwicGFuZWwiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29sdW1uIiwic2xpY2UiLCJyZXZlcnNlIiwiZGlyZWN0aW9uIiwiXyIsInNvcnRCeSIsIkVycm9yIiwiTGlmZUV4cGVjdGFuY3lUYWJsZSIsInRhYmxlRGF0YSIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0QWxsQ291bnRyaWVzIiwiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJtYXAiLCJpZCIsImNvdW50cnkiLCJib3RoIiwiZmVtYWxlIiwibWFsZSJdLCJtYXBwaW5ncyI6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R0EsRUFBSDtBQUFBLFlBQU9DLE9BQVAsUUFBT0EsT0FBUDtBQUFBLFlBQWdCQyxJQUFoQixRQUFnQkEsSUFBaEI7QUFBQSxZQUFzQkMsTUFBdEIsUUFBc0JBLE1BQXRCO0FBQUEsWUFBOEJDLElBQTlCLFFBQThCQSxJQUE5QjtBQUFBLDRCQUNSLHFFQUFDLHVEQUFELENBQU8sR0FBUDtBQUFBLGtDQUNFLHFFQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBLHNCQUFhSDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyx1REFBRCxDQUFPLElBQVA7QUFBQSxzQkFBYUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UscUVBQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUEsc0JBQWFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLHFFQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBLHNCQUFhQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxXQUFnQkosRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBcEREOztHQUFNUixtQjtVQUNjRSwyRDs7O0tBRGRGLG1CO0FBc0RTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuM2JlYTk4ZDg5OTFhY2ZkOGIwYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERyb3Bkb3duLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBsaWZlRXhwZWN0YW5jeSBmcm9tICcuLi8uLi9zdG9yZS9saWZlLWV4cGVjdGFuY3kuanNvbidcclxuaW1wb3J0IHsgQXZlcmFnZUxpZmVZZWFycyB9IGZyb20gJy4uLy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uLy4uL3R5cGVzL3NleCdcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQsIHsgQnJlYWtwb2ludCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUJyZWFrcG9pbnQnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUNoYXJ0IGZyb20gJy4vbGlmZUV4cGVjdGFuY3lDaGFydCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpZmVFeHBlY3RhbmN5Q2hhcnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaWZlRXhwZWN0YW5jeUxlZ2VuZCBmcm9tICcuL2xpZmVFeHBlY3RhbmN5TGVnZW5kJ1xyXG5cclxuY29uc3Qgc2V4T3B0aW9ucyA9IFtcclxuICB7IGtleTogMCwgdmFsdWU6IFNleC5Cb3RoLCB0ZXh0OiAnQm90aCcgfSxcclxuICB7IGtleTogMSwgdmFsdWU6IFNleC5NYW4sIHRleHQ6ICdNYW4nIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBTZXguV29tYW4sIHRleHQ6ICdXb21hbicgfSxcclxuXVxyXG5cclxudHlwZSBCcmVha3BvaW50Q2hhcnRXaWR0aCA9IHtcclxuICBba2V5IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XT86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCB3aWR0aDogQnJlYWtwb2ludENoYXJ0V2lkdGggPSB7XHJcbiAgW0JyZWFrcG9pbnQuWFNtYWxsXTogMjgwLFxyXG4gIFtCcmVha3BvaW50LlNtYWxsXTogNTIwLFxyXG4gIFtCcmVha3BvaW50Lk1lZGl1bV06IDcyMCxcclxuICBbQnJlYWtwb2ludC5MYXJnZV06IDk1MCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUxhcmdlXTogMTEwMCxcclxuICBbQnJlYWtwb2ludC5FeHRyYUV4dHJhTGFyZ2VdOiAxMTAwLFxyXG59XHJcblxyXG5jb25zdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGU8U2V4PihTZXguQm90aClcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCB7IHZhbHVlIH0pID0+IHNldFNleCh2YWx1ZSksIFtdKVxyXG5cclxuICBjb25zdCBkYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihcclxuICAgIGxpZmVFeHBlY3RhbmN5LnJlZHVjZSgoYWNjOiBbc3RyaW5nLCBudW1iZXJdW10sIGN1cjogQXZlcmFnZUxpZmVZZWFycykgPT4ge1xyXG4gICAgICBhY2MucHVzaChbY3VyLmNvZGUsIGN1cltzZXhdXSlcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pXHJcbiAgKSwgW3NleF0pXHJcblxyXG4gIGNvbnN0IGNvbG9yOiBkMy5TY2FsZVNlcXVlbnRpYWw8c3RyaW5nLCAnI2YyZjJmMic+ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBkb21haW5CeSA9IGQzLmV4dGVudChBcnJheS5mcm9tKGRhdGEudmFsdWVzKCkpKVxyXG5cclxuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbkJ5IGFzIFtudW1iZXIsIG51bWJlcl0pXHJcbiAgICAgIC5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSZEJ1KVxyXG4gICAgICAudW5rbm93bignI2YyZjJmMicpXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBjb25zdCBicmVha3BvaW50OiBCcmVha3BvaW50ID0gdXNlQnJlYWtwb2ludCgpXHJcbiAgY29uc3QgYXZhaWxhYmxlV2lkdGg6IG51bWJlciA9IHdpZHRoW2JyZWFrcG9pbnRdIVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH0+XHJcbiAgICAgICAgPExpZmVFeHBlY3RhbmN5TGVnZW5kIHRpdGxlPVwiQWdlICh5ZWFycylcIiBjb2xvcj17Y29sb3J9IC8+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZCBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc2V4PC9sYWJlbD5cclxuICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NleH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c2V4T3B0aW9uc31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IHNleCdcclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpZmVFeHBlY3RhbmN5Q2hhcnQgZGF0YT17ZGF0YX0gY29sb3I9e2NvbG9yfSB3aWR0aD17YXZhaWxhYmxlV2lkdGh9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWZlRXhwZWN0YW5jeUNvbnRhaW5lciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3N0b3JlJ1xyXG5pbXBvcnQgeyBBdmVyYWdlTGlmZVllYXJzLCBzZWxlY3RBbGxDb3VudHJpZXMgfSBmcm9tICcuLi8uLi9zdG9yZS9hdmVyYWdlTGlmZVllYXJzJ1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlciAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpIHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDSEFOR0VfU09SVCcpIHtcclxuICAgIGlmIChzdGF0ZS5jb2x1bW4gPT09IGFjdGlvbi5jb2x1bW4pIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhLnNsaWNlKCkucmV2ZXJzZSgpLFxyXG4gICAgICAgIGRpcmVjdGlvbjogc3RhdGUuZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJyA/ICdkZXNjZW5kaW5nJyA6ICdhc2NlbmRpbmcnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29sdW1uOiBhY3Rpb24uY29sdW1uLFxyXG4gICAgICBkYXRhOiBfLnNvcnRCeShzdGF0ZS5kYXRhLCBbYWN0aW9uLmNvbHVtbl0pLFxyXG4gICAgICBkaXJlY3Rpb246ICdhc2NlbmRpbmcnLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKClcclxufVxyXG5cclxuY29uc3QgTGlmZUV4cGVjdGFuY3lUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCB0YWJsZURhdGEgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RBbGxDb3VudHJpZXMpXHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCB7XHJcbiAgICBjb2x1bW46ICdib3RoJyxcclxuICAgIGRhdGE6IHRhYmxlRGF0YSxcclxuICAgIGRpcmVjdGlvbjogJ2Rlc2NlbmRpbmcnLFxyXG4gIH0pXHJcbiAgY29uc3QgeyBjb2x1bW4sIGRhdGEsIGRpcmVjdGlvbiB9ID0gc3RhdGVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZSBzb3J0YWJsZSBjZWxsZWQgZml4ZWQgc3RyaXBlZD5cclxuICAgICAgPFRhYmxlLkhlYWRlcj5cclxuICAgICAgICA8VGFibGUuUm93PlxyXG4gICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGxcclxuICAgICAgICAgICAgc29ydGVkPXtjb2x1bW4gPT09ICdjb3VudHJ5JyA/IGRpcmVjdGlvbiA6IG51bGx9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9TT1JUJywgY29sdW1uOiAnY291bnRyeScgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvdW50cnlcclxuICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsXHJcbiAgICAgICAgICAgIHNvcnRlZD17Y29sdW1uID09PSAnYm90aCcgPyBkaXJlY3Rpb24gOiBudWxsfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfU09SVCcsIGNvbHVtbjogJ2JvdGgnIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCb3RoIHNleGVzXHJcbiAgICAgICAgICA8L1RhYmxlLkhlYWRlckNlbGw+XHJcbiAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbFxyXG4gICAgICAgICAgICBzb3J0ZWQ9e2NvbHVtbiA9PT0gJ2ZlbWFsZScgPyBkaXJlY3Rpb24gOiBudWxsfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfU09SVCcsIGNvbHVtbjogJ2ZlbWFsZScgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFdvbWFuXHJcbiAgICAgICAgICA8L1RhYmxlLkhlYWRlckNlbGw+XHJcbiAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbFxyXG4gICAgICAgICAgICBzb3J0ZWQ9e2NvbHVtbiA9PT0gJ21hbGUnID8gZGlyZWN0aW9uIDogbnVsbH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX1NPUlQnLCBjb2x1bW46ICdtYWxlJyB9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWFuXHJcbiAgICAgICAgICA8L1RhYmxlLkhlYWRlckNlbGw+XHJcbiAgICAgICAgPC9UYWJsZS5Sb3c+XHJcbiAgICAgIDwvVGFibGUuSGVhZGVyPlxyXG4gICAgICA8VGFibGUuQm9keT5cclxuICAgICAgICB7ZGF0YS5tYXAoKHsgaWQsIGNvdW50cnksIGJvdGgsIGZlbWFsZSwgbWFsZSB9OiBBdmVyYWdlTGlmZVllYXJzKSA9PiAoXHJcbiAgICAgICAgICA8VGFibGUuUm93IGtleT17aWR9PlxyXG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57Y291bnRyeX08L1RhYmxlLkNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntib3RofTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2ZlbWFsZX08L1RhYmxlLkNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnttYWxlfTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGUuUm93PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1RhYmxlLkJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlmZUV4cGVjdGFuY3lUYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=