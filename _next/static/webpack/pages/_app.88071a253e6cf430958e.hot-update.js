webpackHotUpdate_N_E("pages/_app",{

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

var prepareDateTime = function prepareDateTime(dateTime, prepareDate) {
  var timeSeparator = 'T';

  var _dateTime$split = dateTime.split(timeSeparator),
      _dateTime$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_dateTime$split, 2),
      date = _dateTime$split2[0],
      time = _dateTime$split2[1];

  date = prepareDate(date);
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
                  dateTime: prepareDateTime(startTime, prepareStartDate),
                  timeZone: 'Europe/Moscow'
                },
                end: {
                  dateTime: prepareDateTime(endTime, prepareStartDate),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImlzTG9hZGVkIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJwcmVwYXJlRGF0ZVRpbWUiLCJkYXRlVGltZSIsInByZXBhcmVEYXRlIiwidGltZVNlcGFyYXRvciIsInNwbGl0IiwidGltZSIsInBhcnNlU3RhcnREYXRlIiwiZm9ybWF0RGF0ZSIsInBhcnNlRW5kRGF0ZSIsImNyZWF0ZUV2ZW50IiwiY3JlYXRlQXN5bmNUaHVuayIsInN0YXJ0IiwiZW5kIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJpZCIsImNhbGVuZGFyIiwiZ2FwaSIsImNsaWVudCIsInJlcXVlc3QiLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsInRpbWVab25lIiwidHJhbnNwYXJlbmN5IiwidmlzaWJpbGl0eSIsInJlc3VsdCIsImNyZWF0ZVJlbWluZGVyRXZlbnQiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwicmVjdXJyZW5jZSIsInJlbWluZGVycyIsInVzZURlZmF1bHQiLCJvdmVycmlkZXMiLCJwYXRjaEV2ZW50IiwiY2FsZW5kYXJJZCIsImdldEV2ZW50cyIsIl8iLCJpdGVtcyIsImV2ZW50U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJmb3JFYWNoIiwic3RhdHVzIiwiaHRtbExpbmsiLCJyZWpl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QUFYO0FBQ0F3QyxXQUFLLENBQUM1QyxPQUFOLEdBQWdCQSxPQUFoQjtBQUNBNEMsV0FBSyxDQUFDM0MsV0FBTixHQUFvQkEsV0FBcEI7QUFDRCxLQU5EO0FBUUFnQyxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JYLFVBQVUsQ0FBQ29CLFFBQTNCLEVBQXFDLFVBQUNQLEtBQUQsRUFBZ0JFLE1BQWhCLEVBQTJCLENBQy9ELENBREQ7QUFFRDtBQTVGNEIsQ0FBRCxDQUE5QjtBQStGZVYseUVBQVUsQ0FBQ2lCLE9BQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODgwNzFhMjUzZTZjZjQzMDk1OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgQXBpRXJyb3IsIERpY3RCeUlkU3RhdGUgfSBmcm9tICcuLi90eXBlcy9zdGF0ZSdcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCB7IGZvcm1hdERhdGUsIHBhZFplcm8gfSBmcm9tICcuLi91dGlscydcclxuXHJcbmludGVyZmFjZSBFdmVudERhdGUge1xyXG4gIGRhdGU6IHN0cmluZyxcclxuICB0aW1lWm9uZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnQge1xyXG4gIHN1bW1hcnk6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIHN0YXJ0OiBFdmVudERhdGUsXHJcbiAgZW5kOiBFdmVudERhdGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFJlc3BvbnNlIGV4dGVuZHMgRXZlbnQge1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgc3RhdHVzOiBzdHJpbmcsXHJcbiAgaHRtbExpbms6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBUT0RPOiDQstGL0L3QtdGB0YLQuCBpc0xvYWRlZCDQsiDQvtCx0YnQuNC1INGC0LjQv9GLXHJcbmV4cG9ydCB0eXBlIEV2ZW50cyA9IERpY3RCeUlkU3RhdGU8RXZlbnRSZXNwb25zZT4gJiB7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBFdmVudHMgPSB7XHJcbiAgYnlJZDoge30sXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcblxyXG4vKlxyXG4gIGlzQ3JlYXRpbmc6IGZhbHNlLFxyXG4gIGNyZWF0ZWQ6IGZhbHNlLFxyXG4gIGNyZWF0aW5nRXJyb3I6IG51bGwsXHJcbiovXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcHJlcGFyZUVuZERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAvLyBTZXQgbmV4dCBkYXkuIEdDQSBzZXRzIGVuZCBkYXRlIGJ5IGV4Y2x1c2l2ZVxyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVEYXRlVGltZSA9IChcclxuICBkYXRlVGltZTogc3RyaW5nLFxyXG4gIHByZXBhcmVEYXRlOiB0eXBlb2YgcHJlcGFyZVN0YXJ0RGF0ZSB8IHR5cGVvZiBwcmVwYXJlRW5kRGF0ZVxyXG4pOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHRpbWVTZXBhcmF0b3IgPSAnVCdcclxuICBsZXQgW2RhdGUsIHRpbWVdOiBzdHJpbmdbXSA9IGRhdGVUaW1lLnNwbGl0KHRpbWVTZXBhcmF0b3IpO1xyXG4gIGRhdGUgPSBwcmVwYXJlRGF0ZShkYXRlKVxyXG4gIHJldHVybiBgJHtkYXRlfSR7dGltZVNlcGFyYXRvcn0ke3RpbWV9YDtcclxufVxyXG5cclxuY29uc3QgcGFyc2VTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSlcclxufVxyXG5cclxuY29uc3QgcGFyc2VFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ2FsZW5kYXJQYXJhbXMge1xyXG4gIHN1bW1hcnk6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUV2ZW50UGFyYW1zIGV4dGVuZHMgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdGFydDogc3RyaW5nLFxyXG4gIGVuZDogc3RyaW5nLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVJlbWluZGVyUGFyYW1zIGV4dGVuZHMgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdGFydFRpbWU6IHN0cmluZyxcclxuICBlbmRUaW1lOiBzdHJpbmcsXHJcbiAgcmVjdXJyZW5jZTogc3RyaW5nW10sXHJcbiAgcmVtaW5kZXJzOiB7XHJcbiAgICBtZXRob2Q6ICdlbWFpbCcgfCAncG9wdXAnLFxyXG4gICAgbWludXRlczogbnVtYmVyXHJcbiAgfVtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICBJRXZlbnRQYXJhbXMsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgc3VtbWFyeSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZVN0YXJ0RGF0ZShzdGFydCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZUVuZERhdGUoZW5kKSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRyYW5zcGFyZW5jeTogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQgYXMgRXZlbnRSZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlbWluZGVyRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAgSVJlbWluZGVyUGFyYW1zLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdyZW1pbmRlckV2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHtcclxuICAgIHN1bW1hcnksXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHN0YXJ0VGltZSxcclxuICAgIGVuZFRpbWUsXHJcbiAgICByZWN1cnJlbmNlID0gW10sXHJcbiAgICByZW1pbmRlcnMgPSBbXVxyXG4gIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgZGF0ZVRpbWU6IHByZXBhcmVEYXRlVGltZShzdGFydFRpbWUsIHByZXBhcmVTdGFydERhdGUpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lOiBwcmVwYXJlRGF0ZVRpbWUoZW5kVGltZSwgcHJlcGFyZVN0YXJ0RGF0ZSksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXHJcbiAgICAgICAgICByZWN1cnJlbmNlLFxyXG4gICAgICAgICAgcmVtaW5kZXJzOiB7XHJcbiAgICAgICAgICAgIHVzZURlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvdmVycmlkZXM6IHJlbWluZGVycyxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0IGFzIEV2ZW50UmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaEV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIHsgaWQ6IHN0cmluZywgc3VtbWFyeTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L3BhdGNoJyxcclxuICBhc3luYyAoeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQ6IGNhbGVuZGFySWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtjYWxlbmRhcklkfS9ldmVudHMvJHtpZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ3BhdGNoJyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RXZlbnRzID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlW10sXHJcbiAgdm9pZCxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvZ2V0JyxcclxuICBhc3luYyAoXywgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0OiB7IGl0ZW1zIH0gfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW1zIGFzIEV2ZW50UmVzcG9uc2VbXVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZXZlbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZXZlbnQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogYnVpbGRlciA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuaXNMb2FkZWQgPSB0cnVlXHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKHsgaWQsIHN0YXJ0LCBlbmQsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHN1bW1hcnksIGh0bWxMaW5rIH0pID0+IHtcclxuICAgICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgICAgc3RhdGUuYnlJZFtpZF0gPSB7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSBmYWxzZVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgIGVuZC5kYXRlID0gcGFyc2VFbmREYXRlKGVuZC5kYXRlKVxyXG5cclxuICAgICAgc3RhdGUuYnlJZFtpZF0gPSB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9XHJcblxyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IHRydWVcclxuICAgICAgc3RhdGUuY3JlYXRpbmdFcnJvciA9IG51bGxcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgc3RhdGUuY3JlYXRpbmdFcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuY3JlYXRpbmdFcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVSZW1pbmRlckV2ZW50LnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVSZW1pbmRlckV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgIGRlYnVnZ2VyXHJcbiAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlUmVtaW5kZXJFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuYnlJZFtpZF1cclxuICAgICAgZXZlbnQuaWQgPSBpZFxyXG4gICAgICBldmVudC5zdW1tYXJ5ID0gc3VtbWFyeVxyXG4gICAgICBldmVudC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShwYXRjaEV2ZW50LnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50U2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9