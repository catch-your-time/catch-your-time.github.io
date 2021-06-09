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

    if (!calendarId || reminder) {
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
  }, [calendarId, reminder]);
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
            _getState = getState(), id = _getState.calendar.id;
            _context.next = 6;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2V2ZW50LnRzIl0sIm5hbWVzIjpbIlJFTUlOREVSX0RBVEUiLCJUYWJsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInllYXJzQ29uZmlnIiwiaXNTaG93NTN0aFdlZWsiLCJ5ZWFycyIsImdldFllYXJzIiwiYmluZCIsImNhbGVuZGFyIiwiY2FsZW5kYXJJZCIsImlkIiwiZXZlbnQiLCJieUlkIiwidXNlRWZmZWN0IiwiZ2V0RXZlbnRzIiwiZmluZEV2ZW50cyIsInVzZU1lbW8iLCJmaW5kRXZlbnRzQnlEYXRlIiwicmVtaW5kZXIiLCJjcmVhdGVFdmVudCIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsInN0YXJ0IiwiZW5kIiwicmVjdXJyZW5jZSIsInJlbWluZGVycyIsIm1ldGhvZCIsIm1pbnV0ZXMiLCJjb250ZXh0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzZWxlY3RlZFdlZWsiLCJzZXRTZWxlY3RlZFdlZWsiLCJzdHlsZXMiLCJ0YWJsZSIsIkNPVU5UX1dFRUsiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwieWVhciIsImNuIiwid2VlayIsIndlZWtIZWFkIiwieWVhckhlYWQiLCJ3ZWVrSW5kZXgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJwYXJzZVN0YXJ0RGF0ZSIsImZvcm1hdERhdGUiLCJwYXJzZUVuZERhdGUiLCJjcmVhdGVBc3luY1RodW5rIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsInBhdGgiLCJib2R5IiwidGltZVpvbmUiLCJ0cmFuc3BhcmVuY3kiLCJ2aXNpYmlsaXR5IiwibGVuZ3RoIiwidXNlRGVmYXVsdCIsIm92ZXJyaWRlcyIsInJlc3VsdCIsInBhdGNoRXZlbnQiLCJfIiwiaXRlbXMiLCJldmVudFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZm9yRWFjaCIsInN0YXR1cyIsImh0bWxMaW5rIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsWUFBdEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQix3QkFHU0MsbUVBQWMsQ0FBQztBQUFBLFFBQUdDLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFdBQXFCQSxXQUFyQjtBQUFBLEdBQUQsQ0FIdkI7QUFBQSxNQUdWQyxjQUhVLG1CQUdWQSxjQUhVOztBQUlsQixNQUFNQyxLQUFLLEdBQUdILG1FQUFjLENBQUNJLHNEQUFRLENBQUNDLElBQVQsQ0FBYyxJQUFkLEVBQW9CSCxjQUFwQixDQUFELENBQTVCOztBQUprQix5QkFRZEYsbUVBQWMsQ0FBQztBQUFBLFFBQUdNLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFdBQWtCQSxRQUFsQjtBQUFBLEdBQUQsQ0FSQTtBQUFBLE1BT1pDLFVBUFksb0JBT2hCQyxFQVBnQjs7QUFBQSx5QkFZZFIsbUVBQWMsQ0FBQztB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VUFDbkRVLE9BRG1ELG9CQUNuREEsT0FEbUQ7QUFBQSxVQUMxQ0MsV0FEMEMsb0JBQzFDQSxXQUQwQztBQUUvRCxVQUFNVixLQUFLLEdBQUcrRSxLQUFLLENBQUM5RSxJQUFOLENBQVdGLEVBQVgsQ0FBZDtBQUNBQyxXQUFLLENBQUNELEVBQU4sR0FBV0EsRUFBWDtBQUNBQyxXQUFLLENBQUNTLE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0FULFdBQUssQ0FBQ1UsV0FBTixHQUFvQkEsV0FBcEI7QUFDRCxLQU5EO0FBUUFrRSxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JULFVBQVUsQ0FBQ2tCLFFBQTNCLEVBQXFDLFVBQUNQLEtBQUQsRUFBZ0JFLE1BQWhCLEVBQTJCLENBQy9ELENBREQ7QUFFRDtBQTNFNEIsQ0FBRCxDQUE5QjtBQThFZVYseUVBQVUsQ0FBQ2dCLE9BQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzZWM3YTcyNzZmNmUyM2FhOTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWJsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ09VTlRfV0VFSyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUV2ZW50LCBnZXRFdmVudHMgfSBmcm9tICcuLi8uLi9zdG9yZS9ldmVudCdcclxuaW1wb3J0IGZpbmRFdmVudHNCeURhdGUgZnJvbSAnLi4vLi4vc2VydmljZXMvZmluZEV2ZW50c0J5RGF0ZSdcclxuaW1wb3J0IEV2ZW50IGZyb20gJy4uL2V2ZW50L2V2ZW50J1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3N0b3JlJ1xyXG5pbXBvcnQgeyBnZXRZZWFycywgV2VlayBhcyBJV2VlayB9IGZyb20gJy4uLy4uL3N0b3JlL3llYXJzJ1xyXG5pbXBvcnQgV2VlayBmcm9tICcuLi93ZWVrL3dlZWsnXHJcbmltcG9ydCBXZWVrSGVhZCBmcm9tICcuLi93ZWVrSGVhZC93ZWVrSGVhZCdcclxuXHJcbmNvbnN0IFJFTUlOREVSX0RBVEUgPSAnMjAyMS0wMS0wMSdcclxuXHJcbmNvbnN0IFRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICBjb25zdCB7IGlzU2hvdzUzdGhXZWVrIH0gPSB1c2VBcHBTZWxlY3RvcigoeyB5ZWFyc0NvbmZpZyB9KSA9PiB5ZWFyc0NvbmZpZylcclxuICBjb25zdCB5ZWFycyA9IHVzZUFwcFNlbGVjdG9yKGdldFllYXJzLmJpbmQobnVsbCwgaXNTaG93NTN0aFdlZWspKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZDogY2FsZW5kYXJJZFxyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBjYWxlbmRhciB9KSA9PiBjYWxlbmRhcilcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgYnlJZFxyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBldmVudCB9KSA9PiBldmVudClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYWxlbmRhcklkKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldEV2ZW50cygpKVxyXG4gICAgfVxyXG4gIH0sIFtjYWxlbmRhcklkXSlcclxuXHJcbiAgLy8gVE9ETzog0L/QvtC/0YDQvtCx0L7QstCw0YLRjCDQv9C10YDQtdC00LXQu9Cw0YLRjCDQvdCwINGB0LXRgNCy0LjRgSwg0LjQu9C4INCyINGB0YLQvtGA0LUg0L3QsNC00L4g0LTQvtCx0LDQstC70Y/RgtGMIGlkXHJcbiAgY29uc3QgZmluZEV2ZW50cyA9IHVzZU1lbW8oKCkgPT4gZmluZEV2ZW50c0J5RGF0ZShieUlkKSwgW2J5SWRdKVxyXG5cclxuICBjb25zdCByZW1pbmRlciA9IGZpbmRFdmVudHMoUkVNSU5ERVJfREFURSwgUkVNSU5ERVJfREFURSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgaWYgKCFjYWxlbmRhcklkIHx8IHJlbWluZGVyKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKGNyZWF0ZUV2ZW50KHtcclxuICAgICAgc3VtbWFyeTogJ9Ch0L7Qt9C00LDRgtGMINGG0LXQu9GMINC90LAg0YHQu9C10LTRg9GO0YnRg9GOINC90LXQtNC10LvRjicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn0K3RgtC+INC90LDQv9C+0LzQuNC90LDQvdC40LUsINGH0YLQvtCx0Ysg0JLRiyDQvdC1INC30LDQsdGL0LvQuCDRg9GB0YLQsNC90L7QstC40YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4uJyxcclxuICAgICAgc3RhcnQ6IFJFTUlOREVSX0RBVEUsXHJcbiAgICAgIGVuZDogUkVNSU5ERVJfREFURSxcclxuICAgICAgcmVjdXJyZW5jZTogW1xyXG4gICAgICAgICdSUlVMRTpGUkVRPVdFRUtMWTtCWURBWT1TVTtXS1NUPU1PJ1xyXG4gICAgICBdLFxyXG4gICAgICByZW1pbmRlcnM6IFtcclxuICAgICAgICB7IG1ldGhvZDogJ2VtYWlsJywgbWludXRlczogNjAgKiAxMiB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiAncG9wdXAnLCBtaW51dGVzOiA2MCAqIDUgfVxyXG4gICAgICBdXHJcbiAgICB9KSlcclxuICB9LCBbY2FsZW5kYXJJZCwgcmVtaW5kZXJdKVxyXG5cclxuICBjb25zdCBjb250ZXh0UmVmOiBNdXRhYmxlUmVmT2JqZWN0PGFueT4gPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFdlZWssIHNldFNlbGVjdGVkV2Vla10gPSB1c2VTdGF0ZTxJV2VlayB8IG51bGw+KG51bGwpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgPFdlZWtIZWFkIHdlZWtzSW5ZZWFyPXtDT1VOVF9XRUVLfS8+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoeWVhcnMpLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy55ZWFyKX0ga2V5PXtgJHt5ZWFyfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMud2Vlaywgc3R5bGVzLndlZWtIZWFkLCBzdHlsZXMueWVhckhlYWQpfT57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyc1t5ZWFyXS5tYXAoKHdlZWssIHdlZWtJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8V2VlayBrZXk9e3dlZWt9IGlkPXt3ZWVrfSBmaW5kRXZlbnRzPXtmaW5kRXZlbnRzfSBzZWxlY3RlZFdlZWs9e3NlbGVjdGVkV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRXZWVrPXtzZXRTZWxlY3RlZFdlZWt9IGNvbnRleHQ9e2NvbnRleHRSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICA8UG9wdXAgY29udGV4dD17Y29udGV4dFJlZn0gb3Blbj17ISFzZWxlY3RlZFdlZWt9PlxyXG4gICAgICAgIHtzZWxlY3RlZFdlZWsgJiYgKFxyXG4gICAgICAgICAgPEV2ZW50IHdlZWs9e3NlbGVjdGVkV2Vla30gaW5pdGlhbFZhbHVlcz17ZmluZEV2ZW50cyhzZWxlY3RlZFdlZWsuc3RhcnREYXRlLCBzZWxlY3RlZFdlZWsuZW5kRGF0ZSl9Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcHVwPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEFwaUVycm9yLCBEaWN0QnlJZFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGUnXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBwYWRaZXJvIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5pbnRlcmZhY2UgRXZlbnREYXRlIHtcclxuICBkYXRlOiBzdHJpbmcsXHJcbiAgdGltZVpvbmU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50IHtcclxuICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICBzdGFydDogRXZlbnREYXRlLFxyXG4gIGVuZDogRXZlbnREYXRlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRSZXNwb25zZSBleHRlbmRzIEV2ZW50IHtcclxuICBpZDogc3RyaW5nLFxyXG4gIHN0YXR1czogc3RyaW5nLFxyXG4gIGh0bWxMaW5rOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnRzID0gRGljdEJ5SWRTdGF0ZTxFdmVudFJlc3BvbnNlPlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBFdmVudHMgPSB7XHJcbiAgYnlJZDoge30sXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuXHJcbi8qXHJcbiAgaXNDcmVhdGluZzogZmFsc2UsXHJcbiAgY3JlYXRlZDogZmFsc2UsXHJcbiAgY3JlYXRpbmdFcnJvcjogbnVsbCxcclxuKi9cclxufVxyXG5cclxuY29uc3QgcHJlcGFyZVN0YXJ0RGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkWmVybyhtb250aEZyb20xdG8xMil9LSR7cGFkWmVybyhkYXRlLmdldERhdGUoKSl9YFxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSlcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcGFyc2VTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSlcclxufVxyXG5cclxuY29uc3QgcGFyc2VFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7XHJcbiAgICBzdGFydDogc3RyaW5nLFxyXG4gICAgZW5kOiBzdHJpbmcsXHJcbiAgICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgcmVjdXJyZW5jZT86IHN0cmluZ1tdLFxyXG4gICAgcmVtaW5kZXJzPzoge1xyXG4gICAgICBtZXRob2Q6ICdlbWFpbCcgfCAncG9wdXAnLFxyXG4gICAgICBtaW51dGVzOiBudW1iZXJcclxuICAgIH1bXVxyXG4gIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHsgc3RhcnQsIGVuZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHJlY3VycmVuY2UgPSBbXSwgcmVtaW5kZXJzID0gW10gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYCxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdGFydDoge1xyXG4gICAgICAgICAgICBkYXRlOiBwcmVwYXJlU3RhcnREYXRlKHN0YXJ0KSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDoge1xyXG4gICAgICAgICAgICBkYXRlOiBwcmVwYXJlRW5kRGF0ZShlbmQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbmN5OiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxyXG4gICAgICAgICAgLi4uKFxyXG4gICAgICAgICAgICByZWN1cnJlbmNlLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlY3VycmVuY2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIC4uLihcclxuICAgICAgICAgICAgcmVtaW5kZXJzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlbWluZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICB1c2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVzOiByZW1pbmRlcnMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0IGFzIEV2ZW50UmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaEV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIHsgaWQ6IHN0cmluZywgc3VtbWFyeTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L3BhdGNoJyxcclxuICBhc3luYyAoeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQ6IGNhbGVuZGFySWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtjYWxlbmRhcklkfS9ldmVudHMvJHtpZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ3BhdGNoJyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RXZlbnRzID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlW10sXHJcbiAgdm9pZCxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvZ2V0JyxcclxuICBhc3luYyAoXywgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0OiB7IGl0ZW1zIH0gfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW1zIGFzIEV2ZW50UmVzcG9uc2VbXVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZXZlbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZXZlbnQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogYnVpbGRlciA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgoeyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfSkgPT4ge1xyXG4gICAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICAgIGVuZC5kYXRlID0gcGFyc2VFbmREYXRlKGVuZC5kYXRlKVxyXG5cclxuICAgICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN0YXJ0LCBlbmQsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHN1bW1hcnksIGh0bWxMaW5rIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IHRydWVcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfSA9IGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuXHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gbnVsbFxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBldmVudCA9IHN0YXRlLmJ5SWRbaWRdXHJcbiAgICAgIGV2ZW50LmlkID0gaWRcclxuICAgICAgZXZlbnQuc3VtbWFyeSA9IHN1bW1hcnlcclxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudFNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==