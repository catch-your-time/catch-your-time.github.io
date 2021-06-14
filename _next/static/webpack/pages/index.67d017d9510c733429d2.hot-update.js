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
    debugger;

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
      weeksInYear: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
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
            lineNumber: 78,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
        lineNumber: 89,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
};

_s(Table, "VfGBDr8QKAjzzsz+iFuLQHrnQSo=", false, function () {
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

/***/ }),

/***/ "./store/event.ts":
/*!************************!*\
  !*** ./store/event.ts ***!
  \************************/
/*! exports provided: createEvent, createReminderEvent, patchEvent, getEvents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReminderEvent", function() { return createReminderEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchEvent", function() { return patchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvents", function() { return getEvents; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");





var initialState = {
  byId: {},
  isLoading: false,
  isLoaded: false,
  error: null
  /*
    isCreating: false,
    created: false,
    creatingError: null,
  */

};

var prepareStartDate = function prepareStartDate(formattedDate) {
  var date = new Date(formattedDate);
  var monthFrom1to12 = date.getMonth() + 1;
  return "".concat(date.getFullYear(), "-").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["padZero"])(monthFrom1to12), "-").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["padZero"])(date.getDate()));
};

var prepareEndDate = function prepareEndDate(formattedDate) {
  var date = new Date(formattedDate);
  var monthFrom1to12 = date.getMonth() + 1; // Set next day. GCA sets end date by exclusive

  date.setDate(date.getDate() + 1);
  return "".concat(date.getFullYear(), "-").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["padZero"])(monthFrom1to12), "-").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["padZero"])(date.getDate()));
};

var prepareDateTime = function prepareDateTime(dateTime) {
  var timeSeparator = 'T';

  var _dateTime$split = dateTime.split(timeSeparator),
      _dateTime$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_dateTime$split, 2),
      date = _dateTime$split2[0],
      time = _dateTime$split2[1];

  date = prepareStartDate(date);
  return "".concat(date).concat(timeSeparator).concat(time);
};

var parseStartDate = function parseStartDate(formattedDate) {
  var date = new Date(formattedDate);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(date);
};

var parseEndDate = function parseEndDate(formattedDate) {
  var date = new Date(formattedDate); // Set next day. GCA sets end date by exclusive

  date.setDate(date.getDate() - 1);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(date);
};

var createEvent = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createAsyncThunk"])('event/create', /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref, _ref2) {
    var start, end, summary, description, rejectWithValue, getState, _getState, id, _yield$gapi$client$re, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = _ref.start, end = _ref.end, summary = _ref.summary, description = _ref.description;
            rejectWithValue = _ref2.rejectWithValue, getState = _ref2.getState;
            _context.prev = 2;
            _getState = getState(), id = _getState.calendar.id;
            _context.next = 6;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(id, "/events"),
              method: 'post',
              body: {
                start: {
                  date: prepareStartDate(start),
                  timeZone: 'Europe/Moscow'
                },
                end: {
                  date: prepareEndDate(end),
                  timeZone: 'Europe/Moscow'
                },
                summary: summary,
                description: description,
                transparency: 'transparent',
                visibility: 'private'
              }
            });

          case 6:
            _yield$gapi$client$re = _context.sent;
            result = _yield$gapi$client$re.result;
            return _context.abrupt("return", result);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", rejectWithValue(_context.t0.result));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}());
var createReminderEvent = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createAsyncThunk"])('reminderEvent/create', /*#__PURE__*/function () {
  var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref4, _ref5) {
    var summary, description, startTime, endTime, _ref4$recurrence, recurrence, _ref4$reminders, reminders, rejectWithValue, getState, _getState2, id, _yield$gapi$client$re2, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            summary = _ref4.summary, description = _ref4.description, startTime = _ref4.startTime, endTime = _ref4.endTime, _ref4$recurrence = _ref4.recurrence, recurrence = _ref4$recurrence === void 0 ? [] : _ref4$recurrence, _ref4$reminders = _ref4.reminders, reminders = _ref4$reminders === void 0 ? [] : _ref4$reminders;
            rejectWithValue = _ref5.rejectWithValue, getState = _ref5.getState;
            _context2.prev = 2;
            _getState2 = getState(), id = _getState2.calendar.id;
            _context2.next = 6;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(id, "/events"),
              method: 'post',
              body: {
                start: {
                  dateTime: prepareDateTime(startTime),
                  timeZone: 'Europe/Moscow'
                },
                end: {
                  dateTime: prepareDateTime(endTime),
                  timeZone: 'Europe/Moscow'
                },
                summary: summary,
                description: description,
                transparency: 'transparent',
                visibility: 'private',
                recurrence: recurrence,
                reminders: {
                  useDefault: false,
                  overrides: reminders
                }
              }
            });

          case 6:
            _yield$gapi$client$re2 = _context2.sent;
            result = _yield$gapi$client$re2.result;
            return _context2.abrupt("return", result);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", rejectWithValue(_context2.t0.result));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}());
var patchEvent = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createAsyncThunk"])('event/patch', /*#__PURE__*/function () {
  var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref7, _ref8) {
    var id, summary, description, rejectWithValue, getState, _getState3, calendarId, _yield$gapi$client$re3, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref7.id, summary = _ref7.summary, description = _ref7.description;
            rejectWithValue = _ref8.rejectWithValue, getState = _ref8.getState;
            _context3.prev = 2;
            _getState3 = getState(), calendarId = _getState3.calendar.id;
            _context3.next = 6;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(calendarId, "/events/").concat(id),
              method: 'patch',
              body: {
                summary: summary,
                description: description
              }
            });

          case 6:
            _yield$gapi$client$re3 = _context3.sent;
            result = _yield$gapi$client$re3.result;
            return _context3.abrupt("return", result);

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            return _context3.abrupt("return", rejectWithValue(_context3.t0.result));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref9.apply(this, arguments);
  };
}());
var getEvents = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createAsyncThunk"])('event/get', /*#__PURE__*/function () {
  var _ref11 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_, _ref10) {
    var rejectWithValue, getState, _getState4, id, _yield$gapi$client$re4, items;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            rejectWithValue = _ref10.rejectWithValue, getState = _ref10.getState;
            _getState4 = getState(), id = _getState4.calendar.id;
            _context4.prev = 2;
            _context4.next = 5;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(id, "/events")
            });

          case 5:
            _yield$gapi$client$re4 = _context4.sent;
            items = _yield$gapi$client$re4.result.items;
            return _context4.abrupt("return", items);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](2);
            return _context4.abrupt("return", rejectWithValue(_context4.t0.result));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 10]]);
  }));

  return function (_x7, _x8) {
    return _ref11.apply(this, arguments);
  };
}());
var eventSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createSlice"])({
  name: 'event',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(getEvents.pending, function (state) {
      state.isLoading = true;
    });
    builder.addCase(getEvents.fulfilled, function (state, action) {
      state.isLoading = false;
      state.isLoaded = true;
      action.payload.forEach(function (_ref12) {
        var id = _ref12.id,
            start = _ref12.start,
            end = _ref12.end,
            description = _ref12.description,
            status = _ref12.status,
            summary = _ref12.summary,
            htmlLink = _ref12.htmlLink;
        start.date = parseStartDate(start.date);
        end.date = parseEndDate(end.date);
        state.byId[id] = {
          id: id,
          start: start,
          end: end,
          description: description,
          status: status,
          summary: summary,
          htmlLink: htmlLink
        };
      });
    });
    builder.addCase(getEvents.rejected, function (state, action) {
      state.isLoading = false;

      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(createEvent.pending, function (state) {
      /*
            state.isCreating = true
            state.created = false
      */
    });
    builder.addCase(createEvent.fulfilled, function (state, action) {
      var _action$payload = action.payload,
          id = _action$payload.id,
          summary = _action$payload.summary,
          description = _action$payload.description,
          start = _action$payload.start,
          end = _action$payload.end,
          status = _action$payload.status,
          htmlLink = _action$payload.htmlLink;
      start.date = parseStartDate(start.date);
      end.date = parseEndDate(end.date);
      state.byId[id] = {
        id: id,
        summary: summary,
        description: description,
        start: start,
        end: end,
        status: status,
        htmlLink: htmlLink
      };
      /*
            state.isCreating = false
            state.created = true
            state.creatingError = null
      */
    });
    builder.addCase(createEvent.rejected, function (state, action) {
      /*
            state.isCreating = false
            state.created = false
            if (action.payload) {
              state.creatingError = action.payload.error
            } else {
              state.creatingError = action.error
            }
      */
    });
    builder.addCase(createReminderEvent.pending, function (state) {});
    builder.addCase(createReminderEvent.fulfilled, function (state, action) {
      var _action$payload2 = action.payload,
          id = _action$payload2.id,
          summary = _action$payload2.summary,
          description = _action$payload2.description,
          start = _action$payload2.start,
          end = _action$payload2.end,
          status = _action$payload2.status,
          htmlLink = _action$payload2.htmlLink;
      debugger;
      start.date = parseStartDate(start.date);
      end.date = parseEndDate(end.date);
      state.byId[id] = {
        id: id,
        summary: summary,
        description: description,
        start: start,
        end: end,
        status: status,
        htmlLink: htmlLink
      };
    });
    builder.addCase(createReminderEvent.rejected, function (state, action) {});
    builder.addCase(patchEvent.pending, function (state) {});
    builder.addCase(patchEvent.fulfilled, function (state, action) {
      var _action$payload3 = action.payload,
          id = _action$payload3.id,
          summary = _action$payload3.summary,
          description = _action$payload3.description;
      var event = state.byId[id];
      event.id = id;
      event.summary = summary;
      event.description = description;
    });
    builder.addCase(patchEvent.rejected, function (state, action) {});
  }
});
/* harmony default export */ __webpack_exports__["default"] = (eventSlice.reducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2V2ZW50LnRzIl0sIm5hbWVzIjpbIlJFTUlOREVSX0RBVEUiLCJUYWJsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInllYXJzQ29uZmlnIiwiaXNTaG93NTN0aFdlZWsiLCJ5ZWFycyIsImdldFllYXJzIiwiYmluZCIsImNhbGVuZGFyIiwiY2FsZW5kYXJJZCIsImlkIiwiZXZlbnQiLCJieUlkIiwiaXNMb2FkZWQiLCJ1c2VFZmZlY3QiLCJnZXRFdmVudHMiLCJmaW5kRXZlbnRzIiwidXNlTWVtbyIsImZpbmRFdmVudHNCeURhdGUiLCJyZW1pbmRlciIsImNyZWF0ZVJlbWluZGVyRXZlbnQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwicmVjdXJyZW5jZSIsInJlbWluZGVycyIsIm1ldGhvZCIsIm1pbnV0ZXMiLCJjb250ZXh0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzZWxlY3RlZFdlZWsiLCJzZXRTZWxlY3RlZFdlZWsiLCJzdHlsZXMiLCJ0YWJsZSIsIkNPVU5UX1dFRUsiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwieWVhciIsImNuIiwid2VlayIsIndlZWtIZWFkIiwieWVhckhlYWQiLCJ3ZWVrSW5kZXgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJwcmVwYXJlRGF0ZVRpbWUiLCJkYXRlVGltZSIsInRpbWVTZXBhcmF0b3IiLCJzcGxpdCIsInRpbWUiLCJwYXJzZVN0YXJ0RGF0ZSIsImZvcm1hdERhdGUiLCJwYXJzZUVuZERhdGUiLCJjcmVhdGVFdmVudCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJzdGFydCIsImVuZCIsInJlamVjdFdpdGhWYWx1ZSIsImdldFN0YXRlIiwiZ2FwaSIsImNsaWVudCIsInJlcXVlc3QiLCJwYXRoIiwiYm9keSIsInRpbWVab25lIiwidHJhbnNwYXJlbmN5IiwidmlzaWJpbGl0eSIsInJlc3VsdCIsInVzZURlZmF1bHQiLCJvdmVycmlkZXMiLCJwYXRjaEV2ZW50IiwiXyIsIml0ZW1zIiwiZXZlbnRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsImZvckVhY2giLCJzdGF0dXMiLCJodG1sTGluayIsInJlamVjdGVkIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFlBQXRCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0Isd0JBR1NDLG1FQUFjLENBQUM7QUFBQSxRQUFHQyxXQUFILFFBQUdBLFdBQUg7QUFBQSxXQUFxQkEsV0FBckI7QUFBQSxHQUFELENBSHZCO0FBQUEsTUFHVkMsY0FIVSxtQkFHVkEsY0FIVTs7QUFJbEIsTUFBTUMsS0FBSyxHQUFHSCxtRUFBYyxDQUFDSSxzREFBUSxDQUFDQyxJQUFULENBQWMsSUFBZCxFQUFvQkgsY0FBcEIsQ0FBRCxDQUE1Qjs7QUFKa0IseUJBUWRGLG1FQUFjLENBQUM7QUFBQSxRQUFH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LEVBQVJBO0FBQWhELE9BQWpCO0FBQ0QsS0FSRDtBQVVBVCxXQUFPLENBQUNDLE9BQVIsQ0FBZ0I1RSxtQkFBbUIsQ0FBQ3FGLFFBQXBDLEVBQThDLFVBQUNQLEtBQUQsRUFBZ0JFLE1BQWhCLEVBQTJCLENBQ3hFLENBREQ7QUFHQUwsV0FBTyxDQUFDQyxPQUFSLENBQWdCVCxVQUFVLENBQUNVLE9BQTNCLEVBQW9DLFVBQUNDLEtBQUQsRUFBbUIsQ0FDdEQsQ0FERDtBQUdBSCxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JULFVBQVUsQ0FBQ1ksU0FBM0IsRUFBc0MsVUFBQ0QsS0FBRCxFQUFnQkUsTUFBaEIsRUFBMkI7QUFBQSw2QkFDMUJBLE1BQU0sQ0FBQ0MsT0FEbUI7QUFBQSxVQUN2RDNGLEVBRHVELG9CQUN2REEsRUFEdUQ7QUFBQSxVQUNuRFcsT0FEbUQsb0JBQ25EQSxPQURtRDtBQUFBLFVBQzFDQyxXQUQwQyxvQkFDMUNBLFdBRDBDO0FBRS9ELFVBQU1YLEtBQUssR0FBR3VGLEtBQUssQ0FBQ3RGLElBQU4sQ0FBV0YsRUFBWCxDQUFkO0FBQ0FDLFdBQUssQ0FBQ0QsRUFBTixHQUFXQSxFQUFYO0FBQ0FDLFdBQUssQ0FBQ1UsT0FBTixHQUFnQkEsT0FBaEI7QUFDQVYsV0FBSyxDQUFDVyxXQUFOLEdBQW9CQSxXQUFwQjtBQUNELEtBTkQ7QUFRQXlFLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQlQsVUFBVSxDQUFDa0IsUUFBM0IsRUFBcUMsVUFBQ1AsS0FBRCxFQUFnQkUsTUFBaEIsRUFBMkIsQ0FDL0QsQ0FERDtBQUVEO0FBNUY0QixDQUFELENBQTlCO0FBK0ZlVix5RUFBVSxDQUFDZ0IsT0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdkMDE3ZDk1MTBjNzMzNDI5ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDT1VOVF9XRUVLIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgY3JlYXRlUmVtaW5kZXJFdmVudCwgZ2V0RXZlbnRzIH0gZnJvbSAnLi4vLi4vc3RvcmUvZXZlbnQnXHJcbmltcG9ydCBmaW5kRXZlbnRzQnlEYXRlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbmRFdmVudHNCeURhdGUnXHJcbmltcG9ydCBFdmVudCBmcm9tICcuLi9ldmVudC9ldmVudCdcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgZ2V0WWVhcnMsIFdlZWsgYXMgSVdlZWsgfSBmcm9tICcuLi8uLi9zdG9yZS95ZWFycydcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vd2Vlay93ZWVrJ1xyXG5pbXBvcnQgV2Vla0hlYWQgZnJvbSAnLi4vd2Vla0hlYWQvd2Vla0hlYWQnXHJcblxyXG5jb25zdCBSRU1JTkRFUl9EQVRFID0gJzIwMjEtMDEtMDEnXHJcblxyXG5jb25zdCBUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgeyBpc1Nob3c1M3RoV2VlayB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgeWVhcnNDb25maWcgfSkgPT4geWVhcnNDb25maWcpXHJcbiAgY29uc3QgeWVhcnMgPSB1c2VBcHBTZWxlY3RvcihnZXRZZWFycy5iaW5kKG51bGwsIGlzU2hvdzUzdGhXZWVrKSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXIgfSkgPT4gY2FsZW5kYXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGJ5SWQsXHJcbiAgICBpc0xvYWRlZFxyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBldmVudCB9KSA9PiBldmVudClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYWxlbmRhcklkKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldEV2ZW50cygpKVxyXG4gICAgfVxyXG4gIH0sIFtjYWxlbmRhcklkXSlcclxuXHJcbiAgY29uc3QgZmluZEV2ZW50cyA9IHVzZU1lbW8oKCkgPT4gZmluZEV2ZW50c0J5RGF0ZShieUlkKSwgW2J5SWRdKVxyXG5cclxuICBjb25zdCByZW1pbmRlciA9IHVzZU1lbW8oKCkgPT4gZmluZEV2ZW50cyhSRU1JTkRFUl9EQVRFLCBSRU1JTkRFUl9EQVRFKSwgW2J5SWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBpZiAoIWlzTG9hZGVkIHx8IHJlbWluZGVyKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKGNyZWF0ZVJlbWluZGVyRXZlbnQoe1xyXG4gICAgICBzdW1tYXJ5OiAn0KHQvtC30LTQsNGC0Ywg0YbQtdC70Ywg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0L3QtdC00LXQu9GOJyxcclxuICAgICAgZGVzY3JpcHRpb246ICfQrdGC0L4g0L3QsNC/0L7QvNC40L3QsNC90LjQtSwg0YfRgtC+0LHRiyDQktGLINC90LUg0LfQsNCx0YvQu9C4INGD0YHRgtCw0L3QvtCy0LjRgtGMINGG0LXQu9GMINC90LAg0YHQu9C10LTRg9GO0YnRg9GOINC90LXQtNC10LvRji4nLFxyXG4gICAgICBzdGFydFRpbWU6IGAke1JFTUlOREVSX0RBVEV9VDE1OjAwOjAwYCxcclxuICAgICAgZW5kVGltZTogYCR7UkVNSU5ERVJfREFURX1UMTc6MDA6MDBgLFxyXG4gICAgICAvLyBUT0RPOiDQstGL0L3QtdGB0YLQuCDQsiDQutC+0L3RhNC40LMg0LrQvtCz0LTQsCDQvdCw0L/QvtC80LjQvdCw0YLRjCwg0LrQvtCz0LTQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDQvdC10LTQtdC70Y9cclxuICAgICAgcmVjdXJyZW5jZTogW1xyXG4gICAgICAgICdSUlVMRTpGUkVRPVdFRUtMWTtCWURBWT1TVTtXS1NUPU1PJ1xyXG4gICAgICBdLFxyXG4gICAgICByZW1pbmRlcnM6IFtcclxuICAgICAgICB7IG1ldGhvZDogJ2VtYWlsJywgbWludXRlczogNjAgKiA0IH0sXHJcbiAgICAgICAgeyBtZXRob2Q6ICdwb3B1cCcsIG1pbnV0ZXM6IDYwICogMiB9XHJcbiAgICAgIF1cclxuICAgIH0pKVxyXG4gIH0sIFtpc0xvYWRlZCwgcmVtaW5kZXJdKVxyXG5cclxuICBjb25zdCBjb250ZXh0UmVmOiBNdXRhYmxlUmVmT2JqZWN0PGFueT4gPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFdlZWssIHNldFNlbGVjdGVkV2Vla10gPSB1c2VTdGF0ZTxJV2VlayB8IG51bGw+KG51bGwpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgPFdlZWtIZWFkIHdlZWtzSW5ZZWFyPXtDT1VOVF9XRUVLfS8+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoeWVhcnMpLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy55ZWFyKX0ga2V5PXtgJHt5ZWFyfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMud2Vlaywgc3R5bGVzLndlZWtIZWFkLCBzdHlsZXMueWVhckhlYWQpfT57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyc1t5ZWFyXS5tYXAoKHdlZWssIHdlZWtJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8V2VlayBrZXk9e3dlZWt9IGlkPXt3ZWVrfSBmaW5kRXZlbnRzPXtmaW5kRXZlbnRzfSBzZWxlY3RlZFdlZWs9e3NlbGVjdGVkV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRXZWVrPXtzZXRTZWxlY3RlZFdlZWt9IGNvbnRleHQ9e2NvbnRleHRSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICA8UG9wdXAgY29udGV4dD17Y29udGV4dFJlZn0gb3Blbj17ISFzZWxlY3RlZFdlZWt9PlxyXG4gICAgICAgIHtzZWxlY3RlZFdlZWsgJiYgKFxyXG4gICAgICAgICAgPEV2ZW50IHdlZWs9e3NlbGVjdGVkV2Vla30gaW5pdGlhbFZhbHVlcz17ZmluZEV2ZW50cyhzZWxlY3RlZFdlZWsuc3RhcnREYXRlLCBzZWxlY3RlZFdlZWsuZW5kRGF0ZSl9Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcHVwPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEFwaUVycm9yLCBEaWN0QnlJZFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGUnXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBwYWRaZXJvIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5pbnRlcmZhY2UgRXZlbnREYXRlIHtcclxuICBkYXRlOiBzdHJpbmcsXHJcbiAgdGltZVpvbmU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50IHtcclxuICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICBzdGFydDogRXZlbnREYXRlLFxyXG4gIGVuZDogRXZlbnREYXRlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRSZXNwb25zZSBleHRlbmRzIEV2ZW50IHtcclxuICBpZDogc3RyaW5nLFxyXG4gIHN0YXR1czogc3RyaW5nLFxyXG4gIGh0bWxMaW5rOiBzdHJpbmdcclxufVxyXG5cclxuLy8gVE9ETzog0LLRi9C90LXRgdGC0LggaXNMb2FkZWQg0LIg0L7QsdGJ0LjQtSDRgtC40L/Ri1xyXG5leHBvcnQgdHlwZSBFdmVudHMgPSBEaWN0QnlJZFN0YXRlPEV2ZW50UmVzcG9uc2U+ICYge1xyXG4gIGlzTG9hZGVkOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogRXZlbnRzID0ge1xyXG4gIGJ5SWQ6IHt9LFxyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG5cclxuLypcclxuICBpc0NyZWF0aW5nOiBmYWxzZSxcclxuICBjcmVhdGVkOiBmYWxzZSxcclxuICBjcmVhdGluZ0Vycm9yOiBudWxsLFxyXG4qL1xyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgY29uc3QgbW9udGhGcm9tMXRvMTIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgY29uc3QgbW9udGhGcm9tMXRvMTIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkWmVybyhtb250aEZyb20xdG8xMil9LSR7cGFkWmVybyhkYXRlLmdldERhdGUoKSl9YFxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRGF0ZVRpbWUgPSAoZGF0ZVRpbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgdGltZVNlcGFyYXRvciA9ICdUJ1xyXG4gIGxldCBbZGF0ZSwgdGltZV06IHN0cmluZ1tdID0gZGF0ZVRpbWUuc3BsaXQodGltZVNlcGFyYXRvcik7XHJcbiAgZGF0ZSA9IHByZXBhcmVTdGFydERhdGUoZGF0ZSlcclxuICByZXR1cm4gYCR7ZGF0ZX0ke3RpbWVTZXBhcmF0b3J9JHt0aW1lfWA7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSlcclxuICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxufVxyXG5cclxuaW50ZXJmYWNlIElFdmVudFBhcmFtcyBleHRlbmRzIElDYWxlbmRhclBhcmFtcyB7XHJcbiAgc3RhcnQ6IHN0cmluZyxcclxuICBlbmQ6IHN0cmluZyxcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZW1pbmRlclBhcmFtcyBleHRlbmRzIElDYWxlbmRhclBhcmFtcyB7XHJcbiAgc3RhcnRUaW1lOiBzdHJpbmcsXHJcbiAgZW5kVGltZTogc3RyaW5nLFxyXG4gIHJlY3VycmVuY2U6IHN0cmluZ1tdLFxyXG4gIHJlbWluZGVyczoge1xyXG4gICAgbWV0aG9kOiAnZW1haWwnIHwgJ3BvcHVwJyxcclxuICAgIG1pbnV0ZXM6IG51bWJlclxyXG4gIH1bXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAgSUV2ZW50UGFyYW1zLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9jcmVhdGUnLFxyXG4gIGFzeW5jICh7XHJcbiAgICBzdGFydCxcclxuICAgIGVuZCxcclxuICAgIHN1bW1hcnksXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVTdGFydERhdGUoc3RhcnQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVFbmREYXRlKGVuZCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0IGFzIEV2ZW50UmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZW1pbmRlckV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIElSZW1pbmRlclBhcmFtcyxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAncmVtaW5kZXJFdmVudC9jcmVhdGUnLFxyXG4gIGFzeW5jICh7XHJcbiAgICBzdW1tYXJ5LFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBzdGFydFRpbWUsXHJcbiAgICBlbmRUaW1lLFxyXG4gICAgcmVjdXJyZW5jZSA9IFtdLFxyXG4gICAgcmVtaW5kZXJzID0gW11cclxuICB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lOiBwcmVwYXJlRGF0ZVRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDoge1xyXG4gICAgICAgICAgICBkYXRlVGltZTogcHJlcGFyZURhdGVUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbmN5OiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxyXG4gICAgICAgICAgcmVjdXJyZW5jZSxcclxuICAgICAgICAgIHJlbWluZGVyczoge1xyXG4gICAgICAgICAgICB1c2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgb3ZlcnJpZGVzOiByZW1pbmRlcnMsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdCBhcyBFdmVudFJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQgYXMgQXBpRXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7IGlkOiBzdHJpbmcsIHN1bW1hcnk6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9wYXRjaCcsXHJcbiAgYXN5bmMgKHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkOiBjYWxlbmRhcklkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7Y2FsZW5kYXJJZH0vZXZlbnRzLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEV2ZW50cyA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZVtdLFxyXG4gIHZvaWQsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2dldCcsXHJcbiAgYXN5bmMgKF8sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdDogeyBpdGVtcyB9IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2BcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBpdGVtcyBhcyBFdmVudFJlc3BvbnNlW11cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IGV2ZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2V2ZW50JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IGJ1aWxkZXIgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmlzTG9hZGVkID0gdHJ1ZVxyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKCh7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9KSA9PiB7XHJcbiAgICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfVxyXG5cclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBudWxsXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlUmVtaW5kZXJFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlUmVtaW5kZXJFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfSA9IGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZVJlbWluZGVyRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBldmVudCA9IHN0YXRlLmJ5SWRbaWRdXHJcbiAgICAgIGV2ZW50LmlkID0gaWRcclxuICAgICAgZXZlbnQuc3VtbWFyeSA9IHN1bW1hcnlcclxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudFNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==