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
      byId = _useAppSelector3.byId;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (calendarId) {
      dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["getEvents"])());
    }
  }, [calendarId]); // TODO: попробовать переделать на сервис, или в сторе надо добавлять id

  var findEvents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_services_findEventsByDate__WEBPACK_IMPORTED_MODULE_7__["default"])(byId);
  }, [byId]);
  var reminder = findEvents(REMINDER_DATE, REMINDER_DATE);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (reminder) {
      return;
    }

    debugger;
    Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["createEvent"])({
      summary: 'Создать цель на следующую неделю',
      description: 'Это напоминание, чтобы Вы не забыли установить цель на следующую неделю.',
      start: REMINDER_DATE,
      end: REMINDER_DATE,
      recurrence: ['RRULE:FREQ=WEEKLY;BYDAY=SU;WKST=MO'],
      reminders: [{
        method: 'email',
        minutes: 60 * 12
      }, {
        method: 'popup',
        minutes: 60 * 5
      }]
    });
  }, [reminder]);
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
      lineNumber: 68,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
            lineNumber: 77,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
        lineNumber: 88,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giXSwibmFtZXMiOlsiUkVNSU5ERVJfREFURSIsIlRhYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwieWVhcnNDb25maWciLCJpc1Nob3c1M3RoV2VlayIsInllYXJzIiwiZ2V0WWVhcnMiLCJiaW5kIiwiY2FsZW5kYXIiLCJjYWxlbmRhcklkIiwiaWQiLCJldmVudCIsImJ5SWQiLCJ1c2VFZmZlY3QiLCJnZXRFdmVudHMiLCJmaW5kRXZlbnRzIiwidXNlTWVtbyIsImZpbmRFdmVudHNCeURhdGUiLCJyZW1pbmRlciIsImNyZWF0ZUV2ZW50Iiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwic3RhcnQiLCJlbmQiLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwibWV0aG9kIiwibWludXRlcyIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkV2VlayIsInNldFNlbGVjdGVkV2VlayIsInN0eWxlcyIsInRhYmxlIiwiQ09VTlRfV0VFSyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ5ZWFyIiwiY24iLCJ3ZWVrIiwid2Vla0hlYWQiLCJ5ZWFySGVhZCIsIndlZWtJbmRleCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxZQUF0Qjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHdCQUdTQyxtRUFBYyxDQUFDO0FBQUEsUUFBR0MsV0FBSCxRQUFHQSxXQUFIO0FBQUEsV0FBcUJBLFdBQXJC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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFoQixDQUhKO0FBQUEsbUJBQXlDRixJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxLQVpELENBSkosZUFtQkUsc0VBQUMsdURBQUQ7QUFBTyxhQUFPLEVBQUVYLFVBQWhCO0FBQTRCLFVBQUksRUFBRSxDQUFDLENBQUNHLFlBQXBDO0FBQUEsZ0JBQ0dBLFlBQVksaUJBQ1gsc0VBQUMsb0RBQUQ7QUFBTyxZQUFJLEVBQUVBLFlBQWI7QUFBMkIscUJBQWEsRUFBRWhCLFVBQVUsQ0FBQ2dCLFlBQVksQ0FBQ2MsU0FBZCxFQUF5QmQsWUFBWSxDQUFDZSxPQUF0QztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQTVFRDs7R0FBTS9DLEs7VUFDYUUsdUQsRUFFVUMsMkQsRUFDYkEsMkQsRUFJVkEsMkQsRUFJQUEsMkQ7OztLQVpBSCxLO0FBOEVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MjcwZmNlYzM5NzUzZGVlOGM2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXV0YWJsZVJlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFibGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IENPVU5UX1dFRUsgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVFdmVudCwgZ2V0RXZlbnRzIH0gZnJvbSAnLi4vLi4vc3RvcmUvZXZlbnQnXHJcbmltcG9ydCBmaW5kRXZlbnRzQnlEYXRlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbmRFdmVudHNCeURhdGUnXHJcbmltcG9ydCBFdmVudCBmcm9tICcuLi9ldmVudC9ldmVudCdcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgZ2V0WWVhcnMsIFdlZWsgYXMgSVdlZWsgfSBmcm9tICcuLi8uLi9zdG9yZS95ZWFycydcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vd2Vlay93ZWVrJ1xyXG5pbXBvcnQgV2Vla0hlYWQgZnJvbSAnLi4vd2Vla0hlYWQvd2Vla0hlYWQnXHJcblxyXG5jb25zdCBSRU1JTkRFUl9EQVRFID0gJzIwMjEtMDEtMDEnXHJcblxyXG5jb25zdCBUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgeyBpc1Nob3c1M3RoV2VlayB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgeWVhcnNDb25maWcgfSkgPT4geWVhcnNDb25maWcpXHJcbiAgY29uc3QgeWVhcnMgPSB1c2VBcHBTZWxlY3RvcihnZXRZZWFycy5iaW5kKG51bGwsIGlzU2hvdzUzdGhXZWVrKSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXIgfSkgPT4gY2FsZW5kYXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGJ5SWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgZXZlbnQgfSkgPT4gZXZlbnQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRFdmVudHMoKSlcclxuICAgIH1cclxuICB9LCBbY2FsZW5kYXJJZF0pXHJcblxyXG4gIC8vIFRPRE86INC/0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0L/QtdGA0LXQtNC10LvQsNGC0Ywg0L3QsCDRgdC10YDQstC40YEsINC40LvQuCDQsiDRgdGC0L7RgNC1INC90LDQtNC+INC00L7QsdCw0LLQu9GP0YLRjCBpZFxyXG4gIGNvbnN0IGZpbmRFdmVudHMgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHNCeURhdGUoYnlJZCksIFtieUlkXSlcclxuXHJcbiAgY29uc3QgcmVtaW5kZXIgPSBmaW5kRXZlbnRzKFJFTUlOREVSX0RBVEUsIFJFTUlOREVSX0RBVEUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVtaW5kZXIpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjcmVhdGVFdmVudCh7XHJcbiAgICAgIHN1bW1hcnk6ICfQodC+0LfQtNCw0YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ct0YLQviDQvdCw0L/QvtC80LjQvdCw0L3QuNC1LCDRh9GC0L7QsdGLINCS0Ysg0L3QtSDQt9Cw0LHRi9C70Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0YbQtdC70Ywg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0L3QtdC00LXQu9GOLicsXHJcbiAgICAgIHN0YXJ0OiBSRU1JTkRFUl9EQVRFLFxyXG4gICAgICBlbmQ6IFJFTUlOREVSX0RBVEUsXHJcbiAgICAgIHJlY3VycmVuY2U6IFtcclxuICAgICAgICAnUlJVTEU6RlJFUT1XRUVLTFk7QllEQVk9U1U7V0tTVD1NTydcclxuICAgICAgXSxcclxuICAgICAgcmVtaW5kZXJzOiBbXHJcbiAgICAgICAgeyBtZXRob2Q6ICdlbWFpbCcsIG1pbnV0ZXM6IDYwICogMTIgfSxcclxuICAgICAgICB7IG1ldGhvZDogJ3BvcHVwJywgbWludXRlczogNjAgKiA1IH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuICB9LCBbcmVtaW5kZXJdKVxyXG5cclxuICBjb25zdCBjb250ZXh0UmVmOiBNdXRhYmxlUmVmT2JqZWN0PGFueT4gPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFdlZWssIHNldFNlbGVjdGVkV2Vla10gPSB1c2VTdGF0ZTxJV2VlayB8IG51bGw+KG51bGwpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgPFdlZWtIZWFkIHdlZWtzSW5ZZWFyPXtDT1VOVF9XRUVLfS8+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoeWVhcnMpLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy55ZWFyKX0ga2V5PXtgJHt5ZWFyfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMud2Vlaywgc3R5bGVzLndlZWtIZWFkLCBzdHlsZXMueWVhckhlYWQpfT57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyc1t5ZWFyXS5tYXAoKHdlZWssIHdlZWtJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8V2VlayBrZXk9e3dlZWt9IGlkPXt3ZWVrfSBmaW5kRXZlbnRzPXtmaW5kRXZlbnRzfSBzZWxlY3RlZFdlZWs9e3NlbGVjdGVkV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRXZWVrPXtzZXRTZWxlY3RlZFdlZWt9IGNvbnRleHQ9e2NvbnRleHRSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICA8UG9wdXAgY29udGV4dD17Y29udGV4dFJlZn0gb3Blbj17ISFzZWxlY3RlZFdlZWt9PlxyXG4gICAgICAgIHtzZWxlY3RlZFdlZWsgJiYgKFxyXG4gICAgICAgICAgPEV2ZW50IHdlZWs9e3NlbGVjdGVkV2Vla30gaW5pdGlhbFZhbHVlcz17ZmluZEV2ZW50cyhzZWxlY3RlZFdlZWsuc3RhcnREYXRlLCBzZWxlY3RlZFdlZWsuZW5kRGF0ZSl9Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcHVwPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9