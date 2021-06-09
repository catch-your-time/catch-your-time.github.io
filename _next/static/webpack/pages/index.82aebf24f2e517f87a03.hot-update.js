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
    debugger;

    if (reminder) {
      return;
    }

    dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["createEvent"])({
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
    }));
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

/***/ }),

/***/ "./store/event.ts":
/*!************************!*\
  !*** ./store/event.ts ***!
  \************************/
/*! exports provided: createEvent, patchEvent, getEvents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchEvent", function() { return patchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvents", function() { return getEvents; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  byId: {},
  isLoading: false,
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
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref, _ref2) {
    var start, end, summary, description, _ref$recurrence, recurrence, _ref$reminders, reminders, rejectWithValue, getState, _getState, id, _yield$gapi$client$re, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = _ref.start, end = _ref.end, summary = _ref.summary, description = _ref.description, _ref$recurrence = _ref.recurrence, recurrence = _ref$recurrence === void 0 ? [] : _ref$recurrence, _ref$reminders = _ref.reminders, reminders = _ref$reminders === void 0 ? [] : _ref$reminders;
            rejectWithValue = _ref2.rejectWithValue, getState = _ref2.getState;
            _context.prev = 2;
            debugger;
            _getState = getState(), id = _getState.calendar.id;
            _context.next = 7;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(id, "/events"),
              method: 'post',
              body: _objectSpread(_objectSpread({
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
              }, recurrence.length > 0 ? {
                recurrence: recurrence
              } : {}), reminders.length > 0 ? {
                reminders: {
                  useDefault: false,
                  overrides: reminders
                }
              } : {})
            });

          case 7:
            _yield$gapi$client$re = _context.sent;
            result = _yield$gapi$client$re.result;
            return _context.abrupt("return", result);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", rejectWithValue(_context.t0.result));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}());
var patchEvent = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createAsyncThunk"])('event/patch', /*#__PURE__*/function () {
  var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref4, _ref5) {
    var id, summary, description, rejectWithValue, getState, _getState2, calendarId, _yield$gapi$client$re2, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref4.id, summary = _ref4.summary, description = _ref4.description;
            rejectWithValue = _ref5.rejectWithValue, getState = _ref5.getState;
            _context2.prev = 2;
            _getState2 = getState(), calendarId = _getState2.calendar.id;
            _context2.next = 6;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(calendarId, "/events/").concat(id),
              method: 'patch',
              body: {
                summary: summary,
                description: description
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
var getEvents = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createAsyncThunk"])('event/get', /*#__PURE__*/function () {
  var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_, _ref7) {
    var rejectWithValue, getState, _getState3, id, _yield$gapi$client$re3, items;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            rejectWithValue = _ref7.rejectWithValue, getState = _ref7.getState;
            _getState3 = getState(), id = _getState3.calendar.id;
            _context3.prev = 2;
            _context3.next = 5;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(id, "/events")
            });

          case 5:
            _yield$gapi$client$re3 = _context3.sent;
            items = _yield$gapi$client$re3.result.items;
            return _context3.abrupt("return", items);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            return _context3.abrupt("return", rejectWithValue(_context3.t0.result));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref8.apply(this, arguments);
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
      action.payload.forEach(function (_ref9) {
        var id = _ref9.id,
            start = _ref9.start,
            end = _ref9.end,
            description = _ref9.description,
            status = _ref9.status,
            summary = _ref9.summary,
            htmlLink = _ref9.htmlLink;
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
    builder.addCase(patchEvent.pending, function (state) {});
    builder.addCase(patchEvent.fulfilled, function (state, action) {
      var _action$payload2 = action.payload,
          id = _action$payload2.id,
          summary = _action$payload2.summary,
          description = _action$payload2.description;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2V2ZW50LnRzIl0sIm5hbWVzIjpbIlJFTUlOREVSX0RBVEUiLCJUYWJsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInllYXJzQ29uZmlnIiwiaXNTaG93NTN0aFdlZWsiLCJ5ZWFycyIsImdldFllYXJzIiwiYmluZCIsImNhbGVuZGFyIiwiY2FsZW5kYXJJZCIsImlkIiwiZXZlbnQiLCJieUlkIiwidXNlRWZmZWN0IiwiZ2V0RXZlbnRzIiwiZmluZEV2ZW50cyIsInVzZU1lbW8iLCJmaW5kRXZlbnRzQnlEYXRlIiwicmVtaW5kZXIiLCJjcmVhdGVFdmVudCIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsInN0YXJ0IiwiZW5kIiwicmVjdXJyZW5jZSIsInJlbWluZGVycyIsIm1ldGhvZCIsIm1pbnV0ZXMiLCJjb250ZXh0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzZWxlY3RlZFdlZWsiLCJzZXRTZWxlY3RlZFdlZWsiLCJzdHlsZXMiLCJ0YWJsZSIsIkNPVU5UX1dFRUsiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwieWVhciIsImNuIiwid2VlayIsIndlZWtIZWFkIiwieWVhckhlYWQiLCJ3ZWVrSW5kZXgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJwYXJzZVN0YXJ0RGF0ZSIsImZvcm1hdERhdGUiLCJwYXJzZUVuZERhdGUiLCJjcmVhdGVBc3luY1RodW5rIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsInBhdGgiLCJib2R5IiwidGltZVpvbmUiLCJ0cmFuc3BhcmVuY3kiLCJ2aXNpYmlsaXR5IiwibGVuZ3RoIiwidXNlRGVmYXVsdCIsIm92ZXJyaWRlcyIsInJlc3VsdCIsInBhdGNoRXZlbnQiLCJfIiwiaXRlbXMiLCJldmVudFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZm9yRWFjaCIsInN0YXR1cyIsImh0bWxMaW5rIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsWUFBdEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQix3QkFHU0MsbUVBQWMsQ0FBQztBQUFBLFFBQUdDLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFdBQXFCQSxXQUFyQjtBQUFBLEdBQUQsQ0FIdkI7QUFBQSxNQUdWQyxjQUhVLG1CQUdWQSxjQUhVOztBQUlsQixNQUFNQyxLQUFLLEdBQUdILG1FQUFjLENBQUNJLHNEQUFRLENBQUNDLElBQVQsQ0FBYyxJQUFkLEVBQW9CSCxjQUFwQixDQUFELENBQTVCOztBQUprQix5QkFRZEYsbUVBQWMsQ0FBQztBQUFBLFFBQUdNLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFdBQWtCQSxRQUFsQjtBQUFBLEdBQUQsQ0FSQTtBQUFBLE1BT1pDLFVBUFksb0JBT2hCQyxFQVBnQjs7QUFBQSx5QkFZZFIsbUVBQWMsQ0FBQztB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O0FBQUEsVUFDMUNDLFdBRDBDLG9CQUMxQ0EsV0FEMEM7QUFFL0QsVUFBTVYsS0FBSyxHQUFHK0UsS0FBSyxDQUFDOUUsSUFBTixDQUFXRixFQUFYLENBQWQ7QUFDQUMsV0FBSyxDQUFDRCxFQUFOLEdBQVdBLEVBQVg7QUFDQUMsV0FBSyxDQUFDUyxPQUFOLEdBQWdCQSxPQUFoQjtBQUNBVCxXQUFLLENBQUNVLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0QsS0FORDtBQVFBa0UsV0FBTyxDQUFDQyxPQUFSLENBQWdCVCxVQUFVLENBQUNrQixRQUEzQixFQUFxQyxVQUFDUCxLQUFELEVBQWdCRSxNQUFoQixFQUEyQixDQUMvRCxDQUREO0FBRUQ7QUEzRTRCLENBQUQsQ0FBOUI7QUE4RWVWLHlFQUFVLENBQUNnQixPQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MmFlYmYyNGYyZTUxN2Y4N2EwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXV0YWJsZVJlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFibGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IENPVU5UX1dFRUsgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVFdmVudCwgZ2V0RXZlbnRzIH0gZnJvbSAnLi4vLi4vc3RvcmUvZXZlbnQnXHJcbmltcG9ydCBmaW5kRXZlbnRzQnlEYXRlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbmRFdmVudHNCeURhdGUnXHJcbmltcG9ydCBFdmVudCBmcm9tICcuLi9ldmVudC9ldmVudCdcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgZ2V0WWVhcnMsIFdlZWsgYXMgSVdlZWsgfSBmcm9tICcuLi8uLi9zdG9yZS95ZWFycydcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vd2Vlay93ZWVrJ1xyXG5pbXBvcnQgV2Vla0hlYWQgZnJvbSAnLi4vd2Vla0hlYWQvd2Vla0hlYWQnXHJcblxyXG5jb25zdCBSRU1JTkRFUl9EQVRFID0gJzIwMjEtMDEtMDEnXHJcblxyXG5jb25zdCBUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgeyBpc1Nob3c1M3RoV2VlayB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgeWVhcnNDb25maWcgfSkgPT4geWVhcnNDb25maWcpXHJcbiAgY29uc3QgeWVhcnMgPSB1c2VBcHBTZWxlY3RvcihnZXRZZWFycy5iaW5kKG51bGwsIGlzU2hvdzUzdGhXZWVrKSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXIgfSkgPT4gY2FsZW5kYXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGJ5SWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgZXZlbnQgfSkgPT4gZXZlbnQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRFdmVudHMoKSlcclxuICAgIH1cclxuICB9LCBbY2FsZW5kYXJJZF0pXHJcblxyXG4gIC8vIFRPRE86INC/0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0L/QtdGA0LXQtNC10LvQsNGC0Ywg0L3QsCDRgdC10YDQstC40YEsINC40LvQuCDQsiDRgdGC0L7RgNC1INC90LDQtNC+INC00L7QsdCw0LLQu9GP0YLRjCBpZFxyXG4gIGNvbnN0IGZpbmRFdmVudHMgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHNCeURhdGUoYnlJZCksIFtieUlkXSlcclxuXHJcbiAgY29uc3QgcmVtaW5kZXIgPSBmaW5kRXZlbnRzKFJFTUlOREVSX0RBVEUsIFJFTUlOREVSX0RBVEUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGlmIChyZW1pbmRlcikge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaChjcmVhdGVFdmVudCh7XHJcbiAgICAgIHN1bW1hcnk6ICfQodC+0LfQtNCw0YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ct0YLQviDQvdCw0L/QvtC80LjQvdCw0L3QuNC1LCDRh9GC0L7QsdGLINCS0Ysg0L3QtSDQt9Cw0LHRi9C70Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0YbQtdC70Ywg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0L3QtdC00LXQu9GOLicsXHJcbiAgICAgIHN0YXJ0OiBSRU1JTkRFUl9EQVRFLFxyXG4gICAgICBlbmQ6IFJFTUlOREVSX0RBVEUsXHJcbiAgICAgIHJlY3VycmVuY2U6IFtcclxuICAgICAgICAnUlJVTEU6RlJFUT1XRUVLTFk7QllEQVk9U1U7V0tTVD1NTydcclxuICAgICAgXSxcclxuICAgICAgcmVtaW5kZXJzOiBbXHJcbiAgICAgICAgeyBtZXRob2Q6ICdlbWFpbCcsIG1pbnV0ZXM6IDYwICogMTIgfSxcclxuICAgICAgICB7IG1ldGhvZDogJ3BvcHVwJywgbWludXRlczogNjAgKiA1IH1cclxuICAgICAgXVxyXG4gICAgfSkpXHJcbiAgfSwgW3JlbWluZGVyXSlcclxuXHJcbiAgY29uc3QgY29udGV4dFJlZjogTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gdXNlUmVmKClcclxuICBjb25zdCBbc2VsZWN0ZWRXZWVrLCBzZXRTZWxlY3RlZFdlZWtdID0gdXNlU3RhdGU8SVdlZWsgfCBudWxsPihudWxsKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgIDxXZWVrSGVhZCB3ZWVrc0luWWVhcj17Q09VTlRfV0VFS30vPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHllYXJzKS5tYXAoKHllYXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMueWVhcil9IGtleT17YCR7eWVhcn1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLndlZWssIHN0eWxlcy53ZWVrSGVhZCwgc3R5bGVzLnllYXJIZWFkKX0+e3llYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcnNbeWVhcl0ubWFwKCh3ZWVrLCB3ZWVrSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFdlZWsga2V5PXt3ZWVrfSBpZD17d2Vla30gZmluZEV2ZW50cz17ZmluZEV2ZW50c30gc2VsZWN0ZWRXZWVrPXtzZWxlY3RlZFdlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkV2Vlaz17c2V0U2VsZWN0ZWRXZWVrfSBjb250ZXh0PXtjb250ZXh0UmVmfS8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgPFBvcHVwIGNvbnRleHQ9e2NvbnRleHRSZWZ9IG9wZW49eyEhc2VsZWN0ZWRXZWVrfT5cclxuICAgICAgICB7c2VsZWN0ZWRXZWVrICYmIChcclxuICAgICAgICAgIDxFdmVudCB3ZWVrPXtzZWxlY3RlZFdlZWt9IGluaXRpYWxWYWx1ZXM9e2ZpbmRFdmVudHMoc2VsZWN0ZWRXZWVrLnN0YXJ0RGF0ZSwgc2VsZWN0ZWRXZWVrLmVuZERhdGUpfS8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Qb3B1cD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBBcGlFcnJvciwgRGljdEJ5SWRTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL3N0YXRlJ1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgcGFkWmVybyB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIEV2ZW50RGF0ZSB7XHJcbiAgZGF0ZTogc3RyaW5nLFxyXG4gIHRpbWVab25lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudCB7XHJcbiAgc3VtbWFyeTogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgc3RhcnQ6IEV2ZW50RGF0ZSxcclxuICBlbmQ6IEV2ZW50RGF0ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UmVzcG9uc2UgZXh0ZW5kcyBFdmVudCB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBzdGF0dXM6IHN0cmluZyxcclxuICBodG1sTGluazogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEV2ZW50cyA9IERpY3RCeUlkU3RhdGU8RXZlbnRSZXNwb25zZT5cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogRXZlbnRzID0ge1xyXG4gIGJ5SWQ6IHt9LFxyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcblxyXG4vKlxyXG4gIGlzQ3JlYXRpbmc6IGZhbHNlLFxyXG4gIGNyZWF0ZWQ6IGZhbHNlLFxyXG4gIGNyZWF0aW5nRXJyb3I6IG51bGwsXHJcbiovXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcHJlcGFyZUVuZERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAvLyBTZXQgbmV4dCBkYXkuIEdDQSBzZXRzIGVuZCBkYXRlIGJ5IGV4Y2x1c2l2ZVxyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSlcclxuICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAge1xyXG4gICAgc3RhcnQ6IHN0cmluZyxcclxuICAgIGVuZDogc3RyaW5nLFxyXG4gICAgc3VtbWFyeTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHJlY3VycmVuY2U/OiBzdHJpbmdbXSxcclxuICAgIHJlbWluZGVycz86IHtcclxuICAgICAgbWV0aG9kOiAnZW1haWwnIHwgJ3BvcHVwJyxcclxuICAgICAgbWludXRlczogbnVtYmVyXHJcbiAgICB9W11cclxuICB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9jcmVhdGUnLFxyXG4gIGFzeW5jICh7IHN0YXJ0LCBlbmQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCByZWN1cnJlbmNlID0gW10sIHJlbWluZGVycyA9IFtdIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkZWJ1Z2dlcjtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVTdGFydERhdGUoc3RhcnQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVFbmREYXRlKGVuZCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXHJcbiAgICAgICAgICAuLi4oXHJcbiAgICAgICAgICAgIHJlY3VycmVuY2UubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgcmVjdXJyZW5jZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgLi4uKFxyXG4gICAgICAgICAgICByZW1pbmRlcnMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgcmVtaW5kZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVzZURlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBvdmVycmlkZXM6IHJlbWluZGVycyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQgYXMgRXZlbnRSZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAgeyBpZDogc3RyaW5nLCBzdW1tYXJ5OiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcgfSxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvcGF0Y2gnLFxyXG4gIGFzeW5jICh7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZDogY2FsZW5kYXJJZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2NhbGVuZGFySWR9L2V2ZW50cy8ke2lkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdClcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFdmVudHMgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2VbXSxcclxuICB2b2lkLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9nZXQnLFxyXG4gIGFzeW5jIChfLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyByZXN1bHQ6IHsgaXRlbXMgfSB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gaXRlbXMgYXMgRXZlbnRSZXNwb25zZVtdXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQgYXMgQXBpRXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5jb25zdCBldmVudFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdldmVudCcsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiBidWlsZGVyID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKCh7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9KSA9PiB7XHJcbiAgICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfVxyXG5cclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBudWxsXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuYnlJZFtpZF1cclxuICAgICAgZXZlbnQuaWQgPSBpZFxyXG4gICAgICBldmVudC5zdW1tYXJ5ID0gc3VtbWFyeVxyXG4gICAgICBldmVudC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShwYXRjaEV2ZW50LnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50U2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9