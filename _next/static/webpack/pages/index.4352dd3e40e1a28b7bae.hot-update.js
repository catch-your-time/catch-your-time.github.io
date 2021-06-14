webpackHotUpdate_N_E("pages/index",{

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

var DATE_TIME_SEPARATOR = 'T';

var prepareDateTime = function prepareDateTime(dateTime) {
  var _dateTime$split = dateTime.split(DATE_TIME_SEPARATOR),
      _dateTime$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_dateTime$split, 2),
      date = _dateTime$split2[0],
      time = _dateTime$split2[1];

  date = prepareStartDate(date);
  return "".concat(date).concat(DATE_TIME_SEPARATOR).concat(time);
};

var getDateFromDateTime = function getDateFromDateTime(dateTime) {
  return dateTime.split(DATE_TIME_SEPARATOR)[0];
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

        // Reminder
        if (start.dateTime && end.dateTime) {
          start.date = parseStartDate(getDateFromDateTime(start.dateTime));
          end.date = parseStartDate(getDateFromDateTime(end.dateTime));
        } else {
          start.date = parseStartDate(start.date);
          end.date = parseEndDate(end.date);
        }

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
      start.date = parseStartDate(getDateFromDateTime(start.dateTime));
      end.date = parseStartDate(getDateFromDateTime(end.dateTime));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImlzTG9hZGVkIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJEQVRFX1RJTUVfU0VQQVJBVE9SIiwicHJlcGFyZURhdGVUaW1lIiwiZGF0ZVRpbWUiLCJzcGxpdCIsInRpbWUiLCJnZXREYXRlRnJvbURhdGVUaW1lIiwicGFyc2VTdGFydERhdGUiLCJmb3JtYXREYXRlIiwicGFyc2VFbmREYXRlIiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVBc3luY1RodW5rIiwic3RhcnQiLCJlbmQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJyZWplY3RXaXRoVmFsdWUiLCJnZXRTdGF0ZSIsImlkIiwiY2FsZW5kYXIiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsInBhdGgiLCJtZXRob2QiLCJib2R5IiwidGltZVpvbmUiLCJ0cmFuc3BhcmVuY3kiLCJ2aXNpYmlsaXR5IiwicmVzdWx0IiwiY3JlYXRlUmVtaW5kZXJFdmVudCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwidXNlRGVmYXVsdCIsIm92ZXJyaWRlcyIsInBhdGNoRXZlbnQiLCJjYWxlbmRhcklkIiwiZ2V0RXZlbnRzIiwiXyIsIml0ZW1zIiwiZXZlbnRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsImZvckVhY2giLCJzdGF0dXMiLCJo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QUREO0FBR0FMLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQlgsVUFBVSxDQUFDWSxPQUEzQixFQUFvQyxVQUFDQyxLQUFELEVBQW1CLENBQ3RELENBREQ7QUFHQUgsV0FBTyxDQUFDQyxPQUFSLENBQWdCWCxVQUFVLENBQUNjLFNBQTNCLEVBQXNDLFVBQUNELEtBQUQsRUFBZ0JFLE1BQWhCLEVBQTJCO0FBQUEsNkJBQzFCQSxNQUFNLENBQUNDLE9BRG1CO0FBQUEsVUFDdkRuQyxFQUR1RCxvQkFDdkRBLEVBRHVEO0FBQUEsVUFDbkRKLE9BRG1ELG9CQUNuREEsT0FEbUQ7QUFBQSxVQUMxQ0MsV0FEMEMsb0JBQzFDQSxXQUQwQztBQUUvRCxVQUFNMkMsS0FBSyxHQUFHUixLQUFLLENBQUNoRSxJQUFOLENBQVdnQyxFQUFYLENBQWQ7QUFDQXdDLFdBQUssQ0FBQ3hDLEVBQU4sR0FBV0EsRUFBWDtBQUNBd0MsV0FBSyxDQUFDNUMsT0FBTixHQUFnQkEsT0FBaEI7QUFDQTRDLFdBQUssQ0FBQzNDLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0QsS0FORDtBQVFBZ0MsV0FBTyxDQUFDQyxPQUFSLENBQWdCWCxVQUFVLENBQUNvQixRQUEzQixFQUFxQyxVQUFDUCxLQUFELEVBQWdCRSxNQUFoQixFQUEyQixDQUMvRCxDQUREO0FBRUQ7QUFqRzRCLENBQUQsQ0FBOUI7QUFvR2VWLHlFQUFVLENBQUNpQixPQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MzUyZGQzZTQwZTFhMjhiN2JhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBBcGlFcnJvciwgRGljdEJ5SWRTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL3N0YXRlJ1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgcGFkWmVybyB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIEV2ZW50RGF0ZSB7XHJcbiAgZGF0ZTogc3RyaW5nLFxyXG4gIGRhdGVUaW1lPzogc3RyaW5nLFxyXG4gIHRpbWVab25lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudCB7XHJcbiAgc3VtbWFyeTogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgc3RhcnQ6IEV2ZW50RGF0ZSxcclxuICBlbmQ6IEV2ZW50RGF0ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UmVzcG9uc2UgZXh0ZW5kcyBFdmVudCB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBzdGF0dXM6IHN0cmluZyxcclxuICBodG1sTGluazogc3RyaW5nXHJcbn1cclxuXHJcbi8vIFRPRE86INCy0YvQvdC10YHRgtC4IGlzTG9hZGVkINCyINC+0LHRidC40LUg0YLQuNC/0YtcclxuZXhwb3J0IHR5cGUgRXZlbnRzID0gRGljdEJ5SWRTdGF0ZTxFdmVudFJlc3BvbnNlPiAmIHtcclxuICBpc0xvYWRlZDogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEV2ZW50cyA9IHtcclxuICBieUlkOiB7fSxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGlzTG9hZGVkOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuXHJcbi8qXHJcbiAgaXNDcmVhdGluZzogZmFsc2UsXHJcbiAgY3JlYXRlZDogZmFsc2UsXHJcbiAgY3JlYXRpbmdFcnJvcjogbnVsbCxcclxuKi9cclxufVxyXG5cclxuY29uc3QgcHJlcGFyZVN0YXJ0RGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkWmVybyhtb250aEZyb20xdG8xMil9LSR7cGFkWmVybyhkYXRlLmdldERhdGUoKSl9YFxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSlcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgREFURV9USU1FX1NFUEFSQVRPUiA9ICdUJ1xyXG5cclxuY29uc3QgcHJlcGFyZURhdGVUaW1lID0gKGRhdGVUaW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGxldCBbZGF0ZSwgdGltZV06IHN0cmluZ1tdID0gZGF0ZVRpbWUuc3BsaXQoREFURV9USU1FX1NFUEFSQVRPUik7XHJcbiAgZGF0ZSA9IHByZXBhcmVTdGFydERhdGUoZGF0ZSlcclxuICByZXR1cm4gYCR7ZGF0ZX0ke0RBVEVfVElNRV9TRVBBUkFUT1J9JHt0aW1lfWBcclxufVxyXG5cclxuY29uc3QgZ2V0RGF0ZUZyb21EYXRlVGltZSA9IChkYXRlVGltZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcclxuICByZXR1cm4gZGF0ZVRpbWUuc3BsaXQoREFURV9USU1FX1NFUEFSQVRPUilbMF1cclxufVxyXG5cclxuY29uc3QgcGFyc2VTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSlcclxufVxyXG5cclxuY29uc3QgcGFyc2VFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ2FsZW5kYXJQYXJhbXMge1xyXG4gIHN1bW1hcnk6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUV2ZW50UGFyYW1zIGV4dGVuZHMgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdGFydDogc3RyaW5nLFxyXG4gIGVuZDogc3RyaW5nLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVJlbWluZGVyUGFyYW1zIGV4dGVuZHMgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdGFydFRpbWU6IHN0cmluZyxcclxuICBlbmRUaW1lOiBzdHJpbmcsXHJcbiAgcmVjdXJyZW5jZTogc3RyaW5nW10sXHJcbiAgcmVtaW5kZXJzOiB7XHJcbiAgICBtZXRob2Q6ICdlbWFpbCcgfCAncG9wdXAnLFxyXG4gICAgbWludXRlczogbnVtYmVyXHJcbiAgfVtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICBJRXZlbnRQYXJhbXMsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgc3VtbWFyeSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZVN0YXJ0RGF0ZShzdGFydCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZUVuZERhdGUoZW5kKSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRyYW5zcGFyZW5jeTogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQgYXMgRXZlbnRSZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlbWluZGVyRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAgSVJlbWluZGVyUGFyYW1zLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdyZW1pbmRlckV2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHtcclxuICAgIHN1bW1hcnksXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHN0YXJ0VGltZSxcclxuICAgIGVuZFRpbWUsXHJcbiAgICByZWN1cnJlbmNlID0gW10sXHJcbiAgICByZW1pbmRlcnMgPSBbXVxyXG4gIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgZGF0ZVRpbWU6IHByZXBhcmVEYXRlVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lOiBwcmVwYXJlRGF0ZVRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXHJcbiAgICAgICAgICByZWN1cnJlbmNlLFxyXG4gICAgICAgICAgcmVtaW5kZXJzOiB7XHJcbiAgICAgICAgICAgIHVzZURlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvdmVycmlkZXM6IHJlbWluZGVycyxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0IGFzIEV2ZW50UmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaEV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIHsgaWQ6IHN0cmluZywgc3VtbWFyeTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L3BhdGNoJyxcclxuICBhc3luYyAoeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQ6IGNhbGVuZGFySWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtjYWxlbmRhcklkfS9ldmVudHMvJHtpZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ3BhdGNoJyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RXZlbnRzID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlW10sXHJcbiAgdm9pZCxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvZ2V0JyxcclxuICBhc3luYyAoXywgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0OiB7IGl0ZW1zIH0gfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW1zIGFzIEV2ZW50UmVzcG9uc2VbXVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZXZlbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZXZlbnQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogYnVpbGRlciA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuaXNMb2FkZWQgPSB0cnVlXHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKHsgaWQsIHN0YXJ0LCBlbmQsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHN1bW1hcnksIGh0bWxMaW5rIH0pID0+IHtcclxuICAgICAgICAvLyBSZW1pbmRlclxyXG4gICAgICAgIGlmIChzdGFydC5kYXRlVGltZSAmJiBlbmQuZGF0ZVRpbWUpIHtcclxuICAgICAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShnZXREYXRlRnJvbURhdGVUaW1lKHN0YXJ0LmRhdGVUaW1lKSEpXHJcbiAgICAgICAgICBlbmQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKGdldERhdGVGcm9tRGF0ZVRpbWUoZW5kLmRhdGVUaW1lKSEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN0YXJ0LCBlbmQsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHN1bW1hcnksIGh0bWxMaW5rIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IHRydWVcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfSA9IGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuXHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gbnVsbFxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZVJlbWluZGVyRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZVJlbWluZGVyRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKGdldERhdGVGcm9tRGF0ZVRpbWUoc3RhcnQuZGF0ZVRpbWUhKSEpXHJcbiAgICAgIGVuZC5kYXRlID0gcGFyc2VTdGFydERhdGUoZ2V0RGF0ZUZyb21EYXRlVGltZShlbmQuZGF0ZVRpbWUhKSEpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZVJlbWluZGVyRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBldmVudCA9IHN0YXRlLmJ5SWRbaWRdXHJcbiAgICAgIGV2ZW50LmlkID0gaWRcclxuICAgICAgZXZlbnQuc3VtbWFyeSA9IHN1bW1hcnlcclxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudFNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==