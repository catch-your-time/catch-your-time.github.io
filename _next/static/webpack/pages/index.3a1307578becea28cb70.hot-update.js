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
  }, [calendarId]); // TODO: попробовать переделать на сервис, или в сторе надо добавлять id

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

    dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["createEvent"])({
      summary: 'Создать цель на следующую неделю',
      description: 'Это напоминание, чтобы Вы не забыли установить цель на следующую неделю.',
      start: REMINDER_DATE,
      end: REMINDER_DATE,
      // TODO: вынести в конфиг когда напоминать, когда начинается неделя
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
      lineNumber: 70,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
            lineNumber: 79,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
        lineNumber: 90,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
      state.isLoaded = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2V2ZW50LnRzIl0sIm5hbWVzIjpbIlJFTUlOREVSX0RBVEUiLCJUYWJsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInllYXJzQ29uZmlnIiwiaXNTaG93NTN0aFdlZWsiLCJ5ZWFycyIsImdldFllYXJzIiwiYmluZCIsImNhbGVuZGFyIiwiY2FsZW5kYXJJZCIsImlkIiwiZXZlbnQiLCJieUlkIiwiaXNMb2FkZWQiLCJ1c2VFZmZlY3QiLCJnZXRFdmVudHMiLCJmaW5kRXZlbnRzIiwidXNlTWVtbyIsImZpbmRFdmVudHNCeURhdGUiLCJyZW1pbmRlciIsImNyZWF0ZUV2ZW50Iiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwic3RhcnQiLCJlbmQiLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwibWV0aG9kIiwibWludXRlcyIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkV2VlayIsInNldFNlbGVjdGVkV2VlayIsInN0eWxlcyIsInRhYmxlIiwiQ09VTlRfV0VFSyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ5ZWFyIiwiY24iLCJ3ZWVrIiwid2Vla0hlYWQiLCJ5ZWFySGVhZCIsIndlZWtJbmRleCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJlcnJvciIsInByZXBhcmVTdGFydERhdGUiLCJmb3JtYXR0ZWREYXRlIiwiZGF0ZSIsIkRhdGUiLCJtb250aEZyb20xdG8xMiIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJwYWRaZXJvIiwiZ2V0RGF0ZSIsInByZXBhcmVFbmREYXRlIiwic2V0RGF0ZSIsInBhcnNlU3RhcnREYXRlIiwiZm9ybWF0RGF0ZSIsInBhcnNlRW5kRGF0ZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJyZWplY3RXaXRoVmFsdWUiLCJnZXRTdGF0ZSIsImdhcGkiLCJjbGllbnQiLCJyZXF1ZXN0IiwicGF0aCIsImJvZHkiLCJ0aW1lWm9uZSIsInRyYW5zcGFyZW5jeSIsInZpc2liaWxpdHkiLCJsZW5ndGgiLCJ1c2VEZWZhdWx0Iiwib3ZlcnJpZGVzIiwicmVzdWx0IiwicGF0Y2hFdmVudCIsIl8iLCJpdGVtcyIsImV2ZW50U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJmb3JFYWNoIiwic3RhdHVzIiwiaHRtbExpbmsiLCJyZWplY3RlZCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxZQUF0Qjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHdCQUdTQyxtRUFBYyxDQUFDO0FBQUEsUUFBR0MsV0FBSCxRQUFHQSxXQUFIO0FBQUEsV0FBcUJBLFdBQXJCO0FBQUEsR0FBRCxDQUh2QjtBQUFBLE1BR1ZDLGNBSFUsbUJBR1ZBLGNBSFU7O0FBSWxCLE1BQU1DLEtBQUssR0FBR0gsbUVBQWMsQ0FBQ0ksc0RBQVEsQ0FBQ0MsSUFBVCxDQUFjLElBQWQsRUFBb0JILGNBQXBCLENBQUQsQ0FBNUI7O0FBSmtCLHlCQVFkRixtRUFBYyxDQUFDO0FBQUEsUUFBR00sUUFBSCxTQUFHQSxRQUFIO0FBQUEsV0FBa0JBLFFBQWxCO0FBQUEsR0FBRCxDQVJBO0FBQUEsTUFPWkMsVUFQWSxvQkFPaEJDLEVBUGdCOztBQUFBLHlCQWFkUixt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QUQsRUFBbUIsQ0FDdEQsQ0FERDtBQUdBSCxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JULFVBQVUsQ0FBQ1ksU0FBM0IsRUFBc0MsVUFBQ0QsS0FBRCxFQUFnQkUsTUFBaEIsRUFBMkI7QUFBQSw2QkFDMUJBLE1BQU0sQ0FBQ0MsT0FEbUI7QUFBQSxVQUN2RHBGLEVBRHVELG9CQUN2REEsRUFEdUQ7QUFBQSxVQUNuRFcsT0FEbUQsb0JBQ25EQSxPQURtRDtBQUFBLFVBQzFDQyxXQUQwQyxvQkFDMUNBLFdBRDBDO0FBRS9ELFVBQU1YLEtBQUssR0FBR2dGLEtBQUssQ0FBQy9FLElBQU4sQ0FBV0YsRUFBWCxDQUFkO0FBQ0FDLFdBQUssQ0FBQ0QsRUFBTixHQUFXQSxFQUFYO0FBQ0FDLFdBQUssQ0FBQ1UsT0FBTixHQUFnQkEsT0FBaEI7QUFDQVYsV0FBSyxDQUFDVyxXQUFOLEdBQW9CQSxXQUFwQjtBQUNELEtBTkQ7QUFRQWtFLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQlQsVUFBVSxDQUFDa0IsUUFBM0IsRUFBcUMsVUFBQ1AsS0FBRCxFQUFnQkUsTUFBaEIsRUFBMkIsQ0FDL0QsQ0FERDtBQUVEO0FBNUU0QixDQUFELENBQTlCO0FBK0VlVix5RUFBVSxDQUFDZ0IsT0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ExMzA3NTc4YmVjZWEyOGNiNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDT1VOVF9XRUVLIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgY3JlYXRlRXZlbnQsIGdldEV2ZW50cyB9IGZyb20gJy4uLy4uL3N0b3JlL2V2ZW50J1xyXG5pbXBvcnQgZmluZEV2ZW50c0J5RGF0ZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maW5kRXZlbnRzQnlEYXRlJ1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vZXZlbnQvZXZlbnQnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3Mvc3RvcmUnXHJcbmltcG9ydCB7IGdldFllYXJzLCBXZWVrIGFzIElXZWVrIH0gZnJvbSAnLi4vLi4vc3RvcmUveWVhcnMnXHJcbmltcG9ydCBXZWVrIGZyb20gJy4uL3dlZWsvd2VlaydcclxuaW1wb3J0IFdlZWtIZWFkIGZyb20gJy4uL3dlZWtIZWFkL3dlZWtIZWFkJ1xyXG5cclxuY29uc3QgUkVNSU5ERVJfREFURSA9ICcyMDIxLTAxLTAxJ1xyXG5cclxuY29uc3QgVGFibGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93NTN0aFdlZWsgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IHllYXJzQ29uZmlnIH0pID0+IHllYXJzQ29uZmlnKVxyXG4gIGNvbnN0IHllYXJzID0gdXNlQXBwU2VsZWN0b3IoZ2V0WWVhcnMuYmluZChudWxsLCBpc1Nob3c1M3RoV2VlaykpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkOiBjYWxlbmRhcklkXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGNhbGVuZGFyIH0pID0+IGNhbGVuZGFyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBieUlkLFxyXG4gICAgaXNMb2FkZWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgZXZlbnQgfSkgPT4gZXZlbnQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRFdmVudHMoKSlcclxuICAgIH1cclxuICB9LCBbY2FsZW5kYXJJZF0pXHJcblxyXG4gIC8vIFRPRE86INC/0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0L/QtdGA0LXQtNC10LvQsNGC0Ywg0L3QsCDRgdC10YDQstC40YEsINC40LvQuCDQsiDRgdGC0L7RgNC1INC90LDQtNC+INC00L7QsdCw0LLQu9GP0YLRjCBpZFxyXG4gIGNvbnN0IGZpbmRFdmVudHMgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHNCeURhdGUoYnlJZCksIFtieUlkXSlcclxuXHJcbiAgY29uc3QgcmVtaW5kZXIgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHMoUkVNSU5ERVJfREFURSwgUkVNSU5ERVJfREFURSksIFtieUlkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRlYnVnZ2VyXHJcbiAgICBpZiAoIWlzTG9hZGVkIHx8IHJlbWluZGVyKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKGNyZWF0ZUV2ZW50KHtcclxuICAgICAgc3VtbWFyeTogJ9Ch0L7Qt9C00LDRgtGMINGG0LXQu9GMINC90LAg0YHQu9C10LTRg9GO0YnRg9GOINC90LXQtNC10LvRjicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn0K3RgtC+INC90LDQv9C+0LzQuNC90LDQvdC40LUsINGH0YLQvtCx0Ysg0JLRiyDQvdC1INC30LDQsdGL0LvQuCDRg9GB0YLQsNC90L7QstC40YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4uJyxcclxuICAgICAgc3RhcnQ6IFJFTUlOREVSX0RBVEUsXHJcbiAgICAgIGVuZDogUkVNSU5ERVJfREFURSxcclxuICAgICAgLy8gVE9ETzog0LLRi9C90LXRgdGC0Lgg0LIg0LrQvtC90YTQuNCzINC60L7Qs9C00LAg0L3QsNC/0L7QvNC40L3QsNGC0YwsINC60L7Qs9C00LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0L3QtdC00LXQu9GPXHJcbiAgICAgIHJlY3VycmVuY2U6IFtcclxuICAgICAgICAnUlJVTEU6RlJFUT1XRUVLTFk7QllEQVk9U1U7V0tTVD1NTydcclxuICAgICAgXSxcclxuICAgICAgcmVtaW5kZXJzOiBbXHJcbiAgICAgICAgeyBtZXRob2Q6ICdlbWFpbCcsIG1pbnV0ZXM6IDYwICogMTIgfSxcclxuICAgICAgICB7IG1ldGhvZDogJ3BvcHVwJywgbWludXRlczogNjAgKiA1IH1cclxuICAgICAgXVxyXG4gICAgfSkpXHJcbiAgfSwgW2NhbGVuZGFySWQsIHJlbWluZGVyXSlcclxuXHJcbiAgY29uc3QgY29udGV4dFJlZjogTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gdXNlUmVmKClcclxuICBjb25zdCBbc2VsZWN0ZWRXZWVrLCBzZXRTZWxlY3RlZFdlZWtdID0gdXNlU3RhdGU8SVdlZWsgfCBudWxsPihudWxsKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgIDxXZWVrSGVhZCB3ZWVrc0luWWVhcj17Q09VTlRfV0VFS30vPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHllYXJzKS5tYXAoKHllYXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMueWVhcil9IGtleT17YCR7eWVhcn1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLndlZWssIHN0eWxlcy53ZWVrSGVhZCwgc3R5bGVzLnllYXJIZWFkKX0+e3llYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcnNbeWVhcl0ubWFwKCh3ZWVrLCB3ZWVrSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFdlZWsga2V5PXt3ZWVrfSBpZD17d2Vla30gZmluZEV2ZW50cz17ZmluZEV2ZW50c30gc2VsZWN0ZWRXZWVrPXtzZWxlY3RlZFdlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkV2Vlaz17c2V0U2VsZWN0ZWRXZWVrfSBjb250ZXh0PXtjb250ZXh0UmVmfS8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgPFBvcHVwIGNvbnRleHQ9e2NvbnRleHRSZWZ9IG9wZW49eyEhc2VsZWN0ZWRXZWVrfT5cclxuICAgICAgICB7c2VsZWN0ZWRXZWVrICYmIChcclxuICAgICAgICAgIDxFdmVudCB3ZWVrPXtzZWxlY3RlZFdlZWt9IGluaXRpYWxWYWx1ZXM9e2ZpbmRFdmVudHMoc2VsZWN0ZWRXZWVrLnN0YXJ0RGF0ZSwgc2VsZWN0ZWRXZWVrLmVuZERhdGUpfS8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Qb3B1cD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBBcGlFcnJvciwgRGljdEJ5SWRTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL3N0YXRlJ1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgcGFkWmVybyB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIEV2ZW50RGF0ZSB7XHJcbiAgZGF0ZTogc3RyaW5nLFxyXG4gIHRpbWVab25lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudCB7XHJcbiAgc3VtbWFyeTogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgc3RhcnQ6IEV2ZW50RGF0ZSxcclxuICBlbmQ6IEV2ZW50RGF0ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UmVzcG9uc2UgZXh0ZW5kcyBFdmVudCB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBzdGF0dXM6IHN0cmluZyxcclxuICBodG1sTGluazogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEV2ZW50cyA9IERpY3RCeUlkU3RhdGU8RXZlbnRSZXNwb25zZT4gJiB7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBFdmVudHMgPSB7XHJcbiAgYnlJZDoge30sXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcblxyXG4vKlxyXG4gIGlzQ3JlYXRpbmc6IGZhbHNlLFxyXG4gIGNyZWF0ZWQ6IGZhbHNlLFxyXG4gIGNyZWF0aW5nRXJyb3I6IG51bGwsXHJcbiovXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcHJlcGFyZUVuZERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAvLyBTZXQgbmV4dCBkYXkuIEdDQSBzZXRzIGVuZCBkYXRlIGJ5IGV4Y2x1c2l2ZVxyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSlcclxuICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAge1xyXG4gICAgc3RhcnQ6IHN0cmluZyxcclxuICAgIGVuZDogc3RyaW5nLFxyXG4gICAgc3VtbWFyeTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHJlY3VycmVuY2U/OiBzdHJpbmdbXSxcclxuICAgIHJlbWluZGVycz86IHtcclxuICAgICAgbWV0aG9kOiAnZW1haWwnIHwgJ3BvcHVwJyxcclxuICAgICAgbWludXRlczogbnVtYmVyXHJcbiAgICB9W11cclxuICB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9jcmVhdGUnLFxyXG4gIGFzeW5jICh7IHN0YXJ0LCBlbmQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCByZWN1cnJlbmNlID0gW10sIHJlbWluZGVycyA9IFtdIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZVN0YXJ0RGF0ZShzdGFydCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZUVuZERhdGUoZW5kKSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRyYW5zcGFyZW5jeTogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJyxcclxuICAgICAgICAgIC4uLihcclxuICAgICAgICAgICAgcmVjdXJyZW5jZS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICByZWN1cnJlbmNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICAuLi4oXHJcbiAgICAgICAgICAgIHJlbWluZGVycy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICByZW1pbmRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgdXNlRGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJyaWRlczogcmVtaW5kZXJzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdCBhcyBFdmVudFJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQgYXMgQXBpRXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7IGlkOiBzdHJpbmcsIHN1bW1hcnk6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9wYXRjaCcsXHJcbiAgYXN5bmMgKHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkOiBjYWxlbmRhcklkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7Y2FsZW5kYXJJZH0vZXZlbnRzLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEV2ZW50cyA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZVtdLFxyXG4gIHZvaWQsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2dldCcsXHJcbiAgYXN5bmMgKF8sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdDogeyBpdGVtcyB9IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2BcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBpdGVtcyBhcyBFdmVudFJlc3BvbnNlW11cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IGV2ZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2V2ZW50JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IGJ1aWxkZXIgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmlzTG9hZGVkID0gdHJ1ZVxyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKCh7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9KSA9PiB7XHJcbiAgICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfVxyXG5cclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBudWxsXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuYnlJZFtpZF1cclxuICAgICAgZXZlbnQuaWQgPSBpZFxyXG4gICAgICBldmVudC5zdW1tYXJ5ID0gc3VtbWFyeVxyXG4gICAgICBldmVudC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShwYXRjaEV2ZW50LnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50U2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9