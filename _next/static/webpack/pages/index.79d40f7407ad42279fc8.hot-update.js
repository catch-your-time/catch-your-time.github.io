webpackHotUpdate_N_E("pages/index",{

/***/ "./components/table/table.tsx":
/*!************************************!*\
  !*** ./components/table/table.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.module.scss */ "./components/table/table.module.scss");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_table_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./constants/constants.ts");
/* harmony import */ var _store_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/event */ "./store/event.ts");
/* harmony import */ var _services_findEventsByDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/findEventsByDate */ "./services/findEventsByDate.ts");
/* harmony import */ var _event_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event/event */ "./components/event/event.tsx");
/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/store */ "./hooks/store.ts");
/* harmony import */ var _store_years__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/years */ "./store/years.ts");
/* harmony import */ var _week_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../week/week */ "./components/week/week.tsx");
/* harmony import */ var _weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../weekHead/weekHead */ "./components/weekHead/weekHead.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\AEFedotov\\projects\\catch-my-time\\components\\table\\table.tsx",
    _this = undefined,
    _s = $RefreshSig$();
















var Table = function Table() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useAppSelector = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(function (_ref) {
    var yearsConfig = _ref.yearsConfig;
    return yearsConfig;
  }),
      isShow53thWeek = _useAppSelector.isShow53thWeek;

  var years = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(_store_years__WEBPACK_IMPORTED_MODULE_10__["getYears"].bind(null, isShow53thWeek));

  var _useAppSelector2 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(function (_ref2) {
    var calendar = _ref2.calendar;
    return calendar;
  }),
      calendarId = _useAppSelector2.id;

  var _useAppSelector3 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(function (_ref3) {
    var event = _ref3.event;
    return event;
  }),
      byId = _useAppSelector3.byId;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (calendarId) {
      dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["getEvents"])());
    }
  }, [calendarId]); // TODO: попробовать переделать на сервис, или в сторе надо добавлять id

  var findEvents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_services_findEventsByDate__WEBPACK_IMPORTED_MODULE_7__["default"])(byId);
  }, [byId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    findEvents();
  }, [findEvents]);
  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selectedWeek = _useState[0],
      setSelectedWeek = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
      weeksInYear: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, _this), years[year].map(function (week, weekIndex) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_week_week__WEBPACK_IMPORTED_MODULE_11__["default"], {
            id: week,
            findEvents: findEvents,
            selectedWeek: selectedWeek,
            setSelectedWeek: setSelectedWeek,
            context: contextRef
          }, week, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
      context: contextRef,
      open: !!selectedWeek,
      children: selectedWeek && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_event_event__WEBPACK_IMPORTED_MODULE_8__["default"], {
        week: selectedWeek,
        initialValues: findEvents(selectedWeek.startDate, selectedWeek.endDate)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Table, "BIfM+OjsQuzYg0jQdBrclfJBlUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"]];
});

_c = Table;
/* harmony default export */ __webpack_exports__["default"] = (Table);

var _c;

$RefreshReg$(_c, "Table");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giXSwibmFtZXMiOlsiVGFibGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ5ZWFyc0NvbmZpZyIsImlzU2hvdzUzdGhXZWVrIiwieWVhcnMiLCJnZXRZZWFycyIsImJpbmQiLCJjYWxlbmRhciIsImNhbGVuZGFySWQiLCJpZCIsImV2ZW50IiwiYnlJZCIsInVzZUVmZmVjdCIsImdldEV2ZW50cyIsImZpbmRFdmVudHMiLCJ1c2VNZW1vIiwiZmluZEV2ZW50c0J5RGF0ZSIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkV2VlayIsInNldFNlbGVjdGVkV2VlayIsInN0eWxlcyIsInRhYmxlIiwiQ09VTlRfV0VFSyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ5ZWFyIiwiY24iLCJ3ZWVrIiwid2Vla0hlYWQiLCJ5ZWFySGVhZCIsIndlZWtJbmRleCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHdCQUdTQyxtRUFBYyxDQUFDO0FBQUEsUUFBR0MsV0FBSCxRQUFHQSxXQUFIO0FBQUEsV0FBcUJBLFdBQXJCO0FBQUEsR0FBRCxDQUh2QjtBQUFBLE1BR1ZDLGNBSFUsbUJBR1ZBLGNBSFU7O0FBSWxCLE1BQU1DLEtBQUssR0FBR0gsbUVBQWMsQ0FBQ0ksc0RBQVEsQ0FBQ0MsSUFBVCxDQUFjLElBQWQsRUFBb0JILGNBQXBCLENBQUQsQ0FBNUI7O0FBSmtCLHlCQVFkRixtRUFB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YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDT1VOVF9XRUVLIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgZ2V0RXZlbnRzIH0gZnJvbSAnLi4vLi4vc3RvcmUvZXZlbnQnXHJcbmltcG9ydCBmaW5kRXZlbnRzQnlEYXRlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbmRFdmVudHNCeURhdGUnXHJcbmltcG9ydCBFdmVudCBmcm9tICcuLi9ldmVudC9ldmVudCdcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgZ2V0WWVhcnMsIFdlZWsgYXMgSVdlZWsgfSBmcm9tICcuLi8uLi9zdG9yZS95ZWFycydcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vd2Vlay93ZWVrJ1xyXG5pbXBvcnQgV2Vla0hlYWQgZnJvbSAnLi4vd2Vla0hlYWQvd2Vla0hlYWQnXHJcblxyXG5jb25zdCBUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgeyBpc1Nob3c1M3RoV2VlayB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgeWVhcnNDb25maWcgfSkgPT4geWVhcnNDb25maWcpXHJcbiAgY29uc3QgeWVhcnMgPSB1c2VBcHBTZWxlY3RvcihnZXRZZWFycy5iaW5kKG51bGwsIGlzU2hvdzUzdGhXZWVrKSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXIgfSkgPT4gY2FsZW5kYXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGJ5SWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgZXZlbnQgfSkgPT4gZXZlbnQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRFdmVudHMoKSlcclxuICAgIH1cclxuICB9LCBbY2FsZW5kYXJJZF0pXHJcblxyXG4gIC8vIFRPRE86INC/0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0L/QtdGA0LXQtNC10LvQsNGC0Ywg0L3QsCDRgdC10YDQstC40YEsINC40LvQuCDQsiDRgdGC0L7RgNC1INC90LDQtNC+INC00L7QsdCw0LLQu9GP0YLRjCBpZFxyXG4gIGNvbnN0IGZpbmRFdmVudHMgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHNCeURhdGUoYnlJZCksIFtieUlkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpbmRFdmVudHMoKVxyXG4gIH0sIFtmaW5kRXZlbnRzXSlcclxuXHJcbiAgY29uc3QgY29udGV4dFJlZjogTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gdXNlUmVmKClcclxuICBjb25zdCBbc2VsZWN0ZWRXZWVrLCBzZXRTZWxlY3RlZFdlZWtdID0gdXNlU3RhdGU8SVdlZWsgfCBudWxsPihudWxsKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgIDxXZWVrSGVhZCB3ZWVrc0luWWVhcj17Q09VTlRfV0VFS30vPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHllYXJzKS5tYXAoKHllYXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMueWVhcil9IGtleT17YCR7eWVhcn1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLndlZWssIHN0eWxlcy53ZWVrSGVhZCwgc3R5bGVzLnllYXJIZWFkKX0+e3llYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcnNbeWVhcl0ubWFwKCh3ZWVrLCB3ZWVrSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFdlZWsga2V5PXt3ZWVrfSBpZD17d2Vla30gZmluZEV2ZW50cz17ZmluZEV2ZW50c30gc2VsZWN0ZWRXZWVrPXtzZWxlY3RlZFdlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkV2Vlaz17c2V0U2VsZWN0ZWRXZWVrfSBjb250ZXh0PXtjb250ZXh0UmVmfS8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgPFBvcHVwIGNvbnRleHQ9e2NvbnRleHRSZWZ9IG9wZW49eyEhc2VsZWN0ZWRXZWVrfT5cclxuICAgICAgICB7c2VsZWN0ZWRXZWVrICYmIChcclxuICAgICAgICAgIDxFdmVudCB3ZWVrPXtzZWxlY3RlZFdlZWt9IGluaXRpYWxWYWx1ZXM9e2ZpbmRFdmVudHMoc2VsZWN0ZWRXZWVrLnN0YXJ0RGF0ZSwgc2VsZWN0ZWRXZWVrLmVuZERhdGUpfS8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Qb3B1cD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==