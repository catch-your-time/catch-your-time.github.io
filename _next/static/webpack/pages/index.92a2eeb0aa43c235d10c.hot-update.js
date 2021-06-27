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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    document.documentElement.style.setProperty('--count-week', // String(isShow53thWeek ? COUNT_WEEK + 1 : COUNT_WEEK)
    String(Object.keys(years).length));
  }, [years, isShow53thWeek]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
      weeksInYear: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
            lineNumber: 85,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
        lineNumber: 96,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giXSwibmFtZXMiOlsiUkVNSU5ERVJfREFURSIsIlRhYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwieWVhcnNDb25maWciLCJpc1Nob3c1M3RoV2VlayIsInllYXJzIiwiZ2V0WWVhcnMiLCJiaW5kIiwiY2FsZW5kYXIiLCJjYWxlbmRhcklkIiwiaWQiLCJldmVudCIsImJ5SWQiLCJpc0xvYWRlZCIsInVzZUVmZmVjdCIsImdldEV2ZW50cyIsImZpbmRFdmVudHMiLCJ1c2VNZW1vIiwiZmluZEV2ZW50c0J5RGF0ZSIsInJlbWluZGVyIiwiY3JlYXRlUmVtaW5kZXJFdmVudCIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwibWV0aG9kIiwibWludXRlcyIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkV2VlayIsInNldFNlbGVjdGVkV2VlayIsInVzZUxheW91dEVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIlN0cmluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJ0YWJsZSIsIkNPVU5UX1dFRUsiLCJtYXAiLCJ5ZWFyIiwiY24iLCJ3ZWVrIiwid2Vla0hlYWQiLCJ5ZWFySGVhZCIsIndlZWtJbmRleCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxZQUF0Qjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxH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QSwyRCxFQUlWQSwyRCxFQUtBQSwyRDs7O0tBYkFILEs7QUFzRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkyYTJlZWIwYWE0M2MyMzVkMTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDT1VOVF9XRUVLIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgY3JlYXRlUmVtaW5kZXJFdmVudCwgZ2V0RXZlbnRzIH0gZnJvbSAnLi4vLi4vc3RvcmUvZXZlbnQnXHJcbmltcG9ydCBmaW5kRXZlbnRzQnlEYXRlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbmRFdmVudHNCeURhdGUnXHJcbmltcG9ydCBFdmVudCBmcm9tICcuLi9ldmVudC9ldmVudCdcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgZ2V0WWVhcnMsIFdlZWsgYXMgSVdlZWsgfSBmcm9tICcuLi8uLi9zdG9yZS95ZWFycydcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vd2Vlay93ZWVrJ1xyXG5pbXBvcnQgV2Vla0hlYWQgZnJvbSAnLi4vd2Vla0hlYWQvd2Vla0hlYWQnXHJcblxyXG5jb25zdCBSRU1JTkRFUl9EQVRFID0gJzIwMjEtMDEtMDEnXHJcblxyXG5jb25zdCBUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgeyBpc1Nob3c1M3RoV2VlayB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgeWVhcnNDb25maWcgfSkgPT4geWVhcnNDb25maWcpXHJcbiAgY29uc3QgeWVhcnMgPSB1c2VBcHBTZWxlY3RvcihnZXRZZWFycy5iaW5kKG51bGwsIGlzU2hvdzUzdGhXZWVrKSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXIgfSkgPT4gY2FsZW5kYXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGJ5SWQsXHJcbiAgICBpc0xvYWRlZFxyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBldmVudCB9KSA9PiBldmVudClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYWxlbmRhcklkKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldEV2ZW50cygpKVxyXG4gICAgfVxyXG4gIH0sIFtjYWxlbmRhcklkXSlcclxuXHJcbiAgY29uc3QgZmluZEV2ZW50cyA9IHVzZU1lbW8oKCkgPT4gZmluZEV2ZW50c0J5RGF0ZShieUlkKSwgW2J5SWRdKVxyXG5cclxuICBjb25zdCByZW1pbmRlciA9IHVzZU1lbW8oKCkgPT4gZmluZEV2ZW50cyhSRU1JTkRFUl9EQVRFLCBSRU1JTkRFUl9EQVRFKSwgW2J5SWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0xvYWRlZCB8fCByZW1pbmRlcikge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaChjcmVhdGVSZW1pbmRlckV2ZW50KHtcclxuICAgICAgc3VtbWFyeTogJ9Ch0L7Qt9C00LDRgtGMINGG0LXQu9GMINC90LAg0YHQu9C10LTRg9GO0YnRg9GOINC90LXQtNC10LvRjicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn0K3RgtC+INC90LDQv9C+0LzQuNC90LDQvdC40LUsINGH0YLQvtCx0Ysg0JLRiyDQvdC1INC30LDQsdGL0LvQuCDRg9GB0YLQsNC90L7QstC40YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4uJyxcclxuICAgICAgc3RhcnRUaW1lOiBgJHtSRU1JTkRFUl9EQVRFfVQxNTowMDowMGAsXHJcbiAgICAgIGVuZFRpbWU6IGAke1JFTUlOREVSX0RBVEV9VDE3OjAwOjAwYCxcclxuICAgICAgLy8gVE9ETzog0LLRi9C90LXRgdGC0Lgg0LIg0LrQvtC90YTQuNCzINC60L7Qs9C00LAg0L3QsNC/0L7QvNC40L3QsNGC0YwsINC60L7Qs9C00LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0L3QtdC00LXQu9GPXHJcbiAgICAgIHJlY3VycmVuY2U6IFtcclxuICAgICAgICAnUlJVTEU6RlJFUT1XRUVLTFk7QllEQVk9U1U7V0tTVD1NTydcclxuICAgICAgXSxcclxuICAgICAgcmVtaW5kZXJzOiBbXHJcbiAgICAgICAgeyBtZXRob2Q6ICdlbWFpbCcsIG1pbnV0ZXM6IDYwICogNCB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiAncG9wdXAnLCBtaW51dGVzOiA2MCAqIDIgfVxyXG4gICAgICBdXHJcbiAgICB9KSlcclxuICB9LCBbaXNMb2FkZWQsIHJlbWluZGVyXSlcclxuXHJcbiAgY29uc3QgY29udGV4dFJlZjogTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gdXNlUmVmKClcclxuICBjb25zdCBbc2VsZWN0ZWRXZWVrLCBzZXRTZWxlY3RlZFdlZWtdID0gdXNlU3RhdGU8SVdlZWsgfCBudWxsPihudWxsKVxyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxyXG4gICAgICAnLS1jb3VudC13ZWVrJyxcclxuICAgICAgLy8gU3RyaW5nKGlzU2hvdzUzdGhXZWVrID8gQ09VTlRfV0VFSyArIDEgOiBDT1VOVF9XRUVLKVxyXG4gICAgICBTdHJpbmcoT2JqZWN0LmtleXMoeWVhcnMpLmxlbmd0aClcclxuICAgIClcclxuICB9LCBbeWVhcnMsIGlzU2hvdzUzdGhXZWVrXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxyXG4gICAgICA8V2Vla0hlYWQgd2Vla3NJblllYXI9e0NPVU5UX1dFRUt9Lz5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBPYmplY3Qua2V5cyh5ZWFycykubWFwKCh5ZWFyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnllYXIpfSBrZXk9e2Ake3llYXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy53ZWVrLCBzdHlsZXMud2Vla0hlYWQsIHN0eWxlcy55ZWFySGVhZCl9Pnt5ZWFyfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXJzW3llYXJdLm1hcCgod2Vlaywgd2Vla0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxXZWVrIGtleT17d2Vla30gaWQ9e3dlZWt9IGZpbmRFdmVudHM9e2ZpbmRFdmVudHN9IHNlbGVjdGVkV2Vlaz17c2VsZWN0ZWRXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFdlZWs9e3NldFNlbGVjdGVkV2Vla30gY29udGV4dD17Y29udGV4dFJlZn0vPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxQb3B1cCBjb250ZXh0PXtjb250ZXh0UmVmfSBvcGVuPXshIXNlbGVjdGVkV2Vla30+XHJcbiAgICAgICAge3NlbGVjdGVkV2VlayAmJiAoXHJcbiAgICAgICAgICA8RXZlbnQgd2Vlaz17c2VsZWN0ZWRXZWVrfSBpbml0aWFsVmFsdWVzPXtmaW5kRXZlbnRzKHNlbGVjdGVkV2Vlay5zdGFydERhdGUsIHNlbGVjdGVkV2Vlay5lbmREYXRlKX0vPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUG9wdXA+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=