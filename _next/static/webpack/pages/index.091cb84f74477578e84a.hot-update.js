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
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\table\\table.tsx",
    _this = undefined,
    _s = $RefreshSig$();















var REMINDER_DATE = '2021-01-01';

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
      byId = _useAppSelector3.byId,
      isLoaded = _useAppSelector3.isLoaded;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (calendarId) {
      dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["getEvents"])());
    }
  }, [calendarId]);
  var findEvents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_services_findEventsByDate__WEBPACK_IMPORTED_MODULE_7__["default"])(byId);
  }, [byId]);
  var reminder = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return findEvents(REMINDER_DATE, REMINDER_DATE);
  }, [byId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isLoaded || reminder) {
      return;
    }

    dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["createReminderEvent"])({
      summary: 'Создать цель на следующую неделю',
      description: 'Это напоминание, чтобы Вы не забыли установить цель на следующую неделю.',
      startTime: "".concat(REMINDER_DATE, "T15:00:00"),
      endTime: "".concat(REMINDER_DATE, "T17:00:00"),
      // TODO: вынести в конфиг когда напоминать, когда начинается неделя
      recurrence: ['RRULE:FREQ=WEEKLY;BYDAY=SU;WKST=MO'],
      reminders: [{
        method: 'email',
        minutes: 60 * 4
      }, {
        method: 'popup',
        minutes: 60 * 2
      }]
    }));
  }, [isLoaded, reminder]);
  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selectedWeek = _useState[0],
      setSelectedWeek = _useState[1];

  var countYears = Object.keys(years).length;
  console.log(countYears);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    document.documentElement.style.setProperty('--count-years', String(countYears));
  }, [countYears]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("a", {
      href: "#"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
      weeksInYear: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
            lineNumber: 87,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 98,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, _this);
};

_s(Table, "XvgShMcmuT8GZCvgc0zOcRG4/10=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giXSwibmFtZXMiOlsiUkVNSU5ERVJfREFURSIsIlRhYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwieWVhcnNDb25maWciLCJpc1Nob3c1M3RoV2VlayIsInllYXJzIiwiZ2V0WWVhcnMiLCJiaW5kIiwiY2FsZW5kYXIiLCJjYWxlbmRhcklkIiwiaWQiLCJldmVudCIsImJ5SWQiLCJpc0xvYWRlZCIsInVzZUVmZmVjdCIsImdldEV2ZW50cyIsImZpbmRFdmVudHMiLCJ1c2VNZW1vIiwiZmluZEV2ZW50c0J5RGF0ZSIsInJlbWluZGVyIiwiY3JlYXRlUmVtaW5kZXJFdmVudCIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwibWV0aG9kIiwibWludXRlcyIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkV2VlayIsInNldFNlbGVjdGVkV2VlayIsImNvdW50WWVhcnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVzZUxheW91dEVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIlN0cmluZyIsInN0eWxlcyIsInRhYmxlIiwiQ09VTlRfV0VFSyIsIm1hcCIsInllYXIiLCJjbiIsIndlZWsiLCJ3ZWVrSGVhZCIsInllYXJIZWFkIiwid2Vla0luZGV4Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFlBQXRCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0Isd0JBR1NDLG1FQUFjLENBQUM7QUFBQSxRQUFHQyxXQUFILFFBQUdBLFdBQUg7QUFBQSxXQUFxQkEsV0FBckI7QUFBQSxHQUFELENBSHZCO0FBQUEsTUFHVkMsY0FIVSxtQkFHVkEsY0FIVTs7QUFJbEIsTUFBTUMsS0FBSyxHQUFHSCxtRUFBYyxDQUFDSSxzREFBUSxDQUFDQyxJQUFULENBQWMsSUFBZCxFQUFvQkgsY0FBcEIsQ0FBRCxDQUE1Qjs7QUFKa0IseUJBUWRGLG1FQUFjLENBQUM7QUFBQSxRQUFHTSxRQUFILFNBQUdBLFFBQUg7QUFBQSxXQUFrQkEsUUFBbEI7QUFBQSxHQUFELENBUkE7QUFBQSxNQU9aQyxVQVBZLG9CQU9oQkMsRUFQZ0I7O0FBQUEseUJBYWRSLG1FQUFjLENBQUM7QUFBQSxRQUFHUyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFlQSxLQUFmO0FBQUEsR0FBRCxDQWJBO0FBQUEsTUFXaEJDLElBWGdCLG9CQVdoQkEsSUFYZ0I7QUFBQSxNQVloQkMsUUFaZ0Isb0JBWWhCQSxRQVpnQjs7QUFlbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLFVBQUosRUFBZ0I7QUFDZFQsY0FBUSxDQUFDZSw4REFBUyxFQUFWLENBQVI7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDTixVQUFELENBSk0sQ0FBVDtBQU1BLE1BQU1PLFVBQVUsR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU1DLDBFQUFnQixDQUFDTixJQUFELENBQXRCO0FBQUEsR0FBRCxFQUErQixDQUFDQSxJQUFELENBQS9CLENBQTFCO0FBRUEsTUFBTU8sUUFBUSxHQUFHRixxREFBTyxDQUFDO0FBQUEsV0FBTUQsVUFBVSxDQUFDbEIsYUFBRCxFQUFnQkEsYUFBaEIsQ0FBaEI7QUFBQSxHQUFELEVBQWlELENBQUNjLElBQUQsQ0FBakQsQ0FBeEI7QUFFQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDRCxRQUFELElBQWFNLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRURuQixZQUFRLENBQUNvQix3RUFBbUIsQ0FBQztBQUMzQkMsYUFBTyxFQUFFLGtDQURrQjtBQUUzQkMsaUJBQVcsRUFBRSwwRUFGYztBQUczQkMsZUFBUyxZQUFLekIsYUFBTCxjQUhrQjtBQUkzQjBCLGFBQU8sWUFBSzFCLGFBQUwsY0FKb0I7QUFLM0I7QUFDQTJCLGdCQUFVLEVBQUUsQ0FDVixvQ0FEVSxDQU5lO0FBUzNCQyxlQUFTLEVBQUUsQ0FDVDtBQUFFQyxjQUFNLEVBQUUsT0FBVjtBQUFtQkMsZUFBTyxFQUFFLEtBQUs7QUFBakMsT0FEUyxFQUVUO0FBQUVELGNBQU0sRUFBRSxPQUFWO0FBQW1CQyxlQUFPLEVBQUUsS0FBSztBQUFqQyxPQUZTO0FBVGdCLEtBQUQsQ0FBcEIsQ0FBUjtBQWNELEdBbkJRLEVBbUJOLENBQUNmLFFBQUQsRUFBV00sUUFBWCxDQW5CTSxDQUFUO0FBcUJBLE1BQU1VLFVBQWlDLEdBQUdDLG9EQUFNLEVBQWhEOztBQTlDa0Isa0JBK0NzQkMsc0RBQVEsQ0FBZSxJQUFmLENBL0M5QjtBQUFBLE1BK0NYQyxZQS9DVztBQUFBLE1BK0NHQyxlQS9DSDs7QUFpRGxCLE1BQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVkvQixLQUFaLEVBQW1CZ0MsTUFBdEM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLFVBQVo7QUFDQU0sK0RBQWUsQ0FBQyxZQUFNO0FBQ3BCQyxZQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUNFLGVBREYsRUFFRUMsTUFBTSxDQUFDWCxVQUFELENBRlI7QUFJRCxHQUxjLEVBS1osQ0FBQ0EsVUFBRCxDQUxZLENBQWY7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVkseURBQU0sQ0FBQ0MsS0FBdkI7QUFBQSw0QkFDRTtBQUFHLFVBQUksRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHNFQUFDLDJEQUFEO0FBQVUsaUJBQVcsRUFBRUMsK0RBQVVBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUtJYixNQUFNLENBQUNDLElBQVAsQ0FBWS9CLEtBQVosRUFBbUI0QyxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDL0IsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFQyxpREFBRSxDQUFDTCx5REFBTSxDQUFDSSxJQUFSLENBQWxCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQyxpREFBRSxDQUFDTCx5REFBTSxDQUFDTSxJQUFSLEVBQWNOLHlEQUFNLENBQUNPLFFBQXJCLEVBQStCUCx5REFBTSxDQUFDUSxRQUF0QyxDQUFsQjtBQUFBLG9CQUFvRUo7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUdJN0MsS0FBSyxDQUFDNkMsSUFBRCxDQUFMLENBQVlELEdBQVosQ0FBZ0IsVUFBQ0csSUFBRCxFQUFPRyxTQUFQO0FBQUEsOEJBQ2Qsc0VBQUMsbURBQUQ7QUFBaUIsY0FBRSxFQUFFSCxJQUFyQjtBQUEyQixzQkFBVSxFQUFFcEMsVUFBdkM7QUFBbUQsd0JBQVksRUFBRWdCLFlBQWpFO0FBQ00sMkJBQWUsRUFBRUMsZUFEdkI7QUFDd0MsbUJBQU8sRUFBRUo7QUFEakQsYUFBV3VCLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWhCLENBSEo7QUFBQSxtQkFBeUNGLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELEtBWkQsQ0FMSixlQW9CRSxzRUFBQyx1REFBRDtBQUFPLGFBQU8sRUFBRXJCLFVBQWhCO0FBQTRCLFVBQUksRUFBRSxDQUFDLENBQUNHLFlBQXBDO0FBQUEsZ0JBQ0dBLFlBQVksaUJBQ1gsc0VBQUMsb0RBQUQ7QUFBTyxZQUFJLEVBQUVBLFlBQWI7QUFBMkIscUJBQWEsRUFBRWhCLFVBQVUsQ0FBQ2dCLFlBQVksQ0FBQ3dCLFNBQWQsRUFBeUJ4QixZQUFZLENBQUN5QixPQUF0QztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQXRGRDs7R0FBTTFELEs7VUFDYUUsdUQsRUFFVUMsMkQsRUFDYkEsMkQsRUFJVkEsMkQsRUFLQUEsMkQ7OztLQWJBSCxLO0FBd0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOTFjYjg0Zjc0NDc3NTc4ZTg0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXV0YWJsZVJlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWJsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ09VTlRfV0VFSyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNyZWF0ZVJlbWluZGVyRXZlbnQsIGdldEV2ZW50cyB9IGZyb20gJy4uLy4uL3N0b3JlL2V2ZW50J1xyXG5pbXBvcnQgZmluZEV2ZW50c0J5RGF0ZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maW5kRXZlbnRzQnlEYXRlJ1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vZXZlbnQvZXZlbnQnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3Mvc3RvcmUnXHJcbmltcG9ydCB7IGdldFllYXJzLCBXZWVrIGFzIElXZWVrIH0gZnJvbSAnLi4vLi4vc3RvcmUveWVhcnMnXHJcbmltcG9ydCBXZWVrIGZyb20gJy4uL3dlZWsvd2VlaydcclxuaW1wb3J0IFdlZWtIZWFkIGZyb20gJy4uL3dlZWtIZWFkL3dlZWtIZWFkJ1xyXG5cclxuY29uc3QgUkVNSU5ERVJfREFURSA9ICcyMDIxLTAxLTAxJ1xyXG5cclxuY29uc3QgVGFibGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93NTN0aFdlZWsgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IHllYXJzQ29uZmlnIH0pID0+IHllYXJzQ29uZmlnKVxyXG4gIGNvbnN0IHllYXJzID0gdXNlQXBwU2VsZWN0b3IoZ2V0WWVhcnMuYmluZChudWxsLCBpc1Nob3c1M3RoV2VlaykpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkOiBjYWxlbmRhcklkXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGNhbGVuZGFyIH0pID0+IGNhbGVuZGFyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBieUlkLFxyXG4gICAgaXNMb2FkZWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgZXZlbnQgfSkgPT4gZXZlbnQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRFdmVudHMoKSlcclxuICAgIH1cclxuICB9LCBbY2FsZW5kYXJJZF0pXHJcblxyXG4gIGNvbnN0IGZpbmRFdmVudHMgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHNCeURhdGUoYnlJZCksIFtieUlkXSlcclxuXHJcbiAgY29uc3QgcmVtaW5kZXIgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHMoUkVNSU5ERVJfREFURSwgUkVNSU5ERVJfREFURSksIFtieUlkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNMb2FkZWQgfHwgcmVtaW5kZXIpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goY3JlYXRlUmVtaW5kZXJFdmVudCh7XHJcbiAgICAgIHN1bW1hcnk6ICfQodC+0LfQtNCw0YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ct0YLQviDQvdCw0L/QvtC80LjQvdCw0L3QuNC1LCDRh9GC0L7QsdGLINCS0Ysg0L3QtSDQt9Cw0LHRi9C70Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0YbQtdC70Ywg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0L3QtdC00LXQu9GOLicsXHJcbiAgICAgIHN0YXJ0VGltZTogYCR7UkVNSU5ERVJfREFURX1UMTU6MDA6MDBgLFxyXG4gICAgICBlbmRUaW1lOiBgJHtSRU1JTkRFUl9EQVRFfVQxNzowMDowMGAsXHJcbiAgICAgIC8vIFRPRE86INCy0YvQvdC10YHRgtC4INCyINC60L7QvdGE0LjQsyDQutC+0LPQtNCwINC90LDQv9C+0LzQuNC90LDRgtGMLCDQutC+0LPQtNCwINC90LDRh9C40L3QsNC10YLRgdGPINC90LXQtNC10LvRj1xyXG4gICAgICByZWN1cnJlbmNlOiBbXHJcbiAgICAgICAgJ1JSVUxFOkZSRVE9V0VFS0xZO0JZREFZPVNVO1dLU1Q9TU8nXHJcbiAgICAgIF0sXHJcbiAgICAgIHJlbWluZGVyczogW1xyXG4gICAgICAgIHsgbWV0aG9kOiAnZW1haWwnLCBtaW51dGVzOiA2MCAqIDQgfSxcclxuICAgICAgICB7IG1ldGhvZDogJ3BvcHVwJywgbWludXRlczogNjAgKiAyIH1cclxuICAgICAgXVxyXG4gICAgfSkpXHJcbiAgfSwgW2lzTG9hZGVkLCByZW1pbmRlcl0pXHJcblxyXG4gIGNvbnN0IGNvbnRleHRSZWY6IE11dGFibGVSZWZPYmplY3Q8YW55PiA9IHVzZVJlZigpXHJcbiAgY29uc3QgW3NlbGVjdGVkV2Vlaywgc2V0U2VsZWN0ZWRXZWVrXSA9IHVzZVN0YXRlPElXZWVrIHwgbnVsbD4obnVsbClcclxuXHJcbiAgY29uc3QgY291bnRZZWFycyA9IE9iamVjdC5rZXlzKHllYXJzKS5sZW5ndGhcclxuICBjb25zb2xlLmxvZyhjb3VudFllYXJzKVxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbiAgICAgICctLWNvdW50LXllYXJzJyxcclxuICAgICAgU3RyaW5nKGNvdW50WWVhcnMpXHJcbiAgICApXHJcbiAgfSwgW2NvdW50WWVhcnNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICA8V2Vla0hlYWQgd2Vla3NJblllYXI9e0NPVU5UX1dFRUt9Lz5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBPYmplY3Qua2V5cyh5ZWFycykubWFwKCh5ZWFyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnllYXIpfSBrZXk9e2Ake3llYXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy53ZWVrLCBzdHlsZXMud2Vla0hlYWQsIHN0eWxlcy55ZWFySGVhZCl9Pnt5ZWFyfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXJzW3llYXJdLm1hcCgod2Vlaywgd2Vla0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxXZWVrIGtleT17d2Vla30gaWQ9e3dlZWt9IGZpbmRFdmVudHM9e2ZpbmRFdmVudHN9IHNlbGVjdGVkV2Vlaz17c2VsZWN0ZWRXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFdlZWs9e3NldFNlbGVjdGVkV2Vla30gY29udGV4dD17Y29udGV4dFJlZn0vPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxQb3B1cCBjb250ZXh0PXtjb250ZXh0UmVmfSBvcGVuPXshIXNlbGVjdGVkV2Vla30+XHJcbiAgICAgICAge3NlbGVjdGVkV2VlayAmJiAoXHJcbiAgICAgICAgICA8RXZlbnQgd2Vlaz17c2VsZWN0ZWRXZWVrfSBpbml0aWFsVmFsdWVzPXtmaW5kRXZlbnRzKHNlbGVjdGVkV2Vlay5zdGFydERhdGUsIHNlbGVjdGVkV2Vlay5lbmREYXRlKX0vPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUG9wdXA+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=