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
                  dateTime: prepareDateTime(endTime, prepareEndDate),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImlzTG9hZGVkIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJwcmVwYXJlRGF0ZVRpbWUiLCJkYXRlVGltZSIsInByZXBhcmVEYXRlIiwidGltZVNlcGFyYXRvciIsInNwbGl0IiwidGltZSIsInBhcnNlU3RhcnREYXRlIiwiZm9ybWF0RGF0ZSIsInBhcnNlRW5kRGF0ZSIsImNyZWF0ZUV2ZW50IiwiY3JlYXRlQXN5bmNUaHVuayIsInN0YXJ0IiwiZW5kIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJpZCIsImNhbGVuZGFyIiwiZ2FwaSIsImNsaWVudCIsInJlcXVlc3QiLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsInRpbWVab25lIiwidHJhbnNwYXJlbmN5IiwidmlzaWJpbGl0eSIsInJlc3VsdCIsImNyZWF0ZVJlbWluZGVyRXZlbnQiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwicmVjdXJyZW5jZSIsInJlbWluZGVycyIsInVzZURlZmF1bHQiLCJvdmVycmlkZXMiLCJwYXRjaEV2ZW50IiwiY2FsZW5kYXJJZCIsImdldEV2ZW50cyIsIl8iLCJpdGVtcyIsImV2ZW50U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJmb3JFYWNoIiwic3RhdHVzIiwiaHRtbExpbmsiLCJyZWpl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QVg7QUFDQXdDLFdBQUssQ0FBQzVDLE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0E0QyxXQUFLLENBQUMzQyxXQUFOLEdBQW9CQSxXQUFwQjtBQUNELEtBTkQ7QUFRQWdDLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQlgsVUFBVSxDQUFDb0IsUUFBM0IsRUFBcUMsVUFBQ1AsS0FBRCxFQUFnQkUsTUFBaEIsRUFBMkIsQ0FDL0QsQ0FERDtBQUVEO0FBNUY0QixDQUFELENBQTlCO0FBK0ZlVix5RUFBVSxDQUFDaUIsT0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjE5YWQxY2QxMjRhMDMwM2Q3NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgQXBpRXJyb3IsIERpY3RCeUlkU3RhdGUgfSBmcm9tICcuLi90eXBlcy9zdGF0ZSdcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCB7IGZvcm1hdERhdGUsIHBhZFplcm8gfSBmcm9tICcuLi91dGlscydcclxuXHJcbmludGVyZmFjZSBFdmVudERhdGUge1xyXG4gIGRhdGU6IHN0cmluZyxcclxuICB0aW1lWm9uZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnQge1xyXG4gIHN1bW1hcnk6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIHN0YXJ0OiBFdmVudERhdGUsXHJcbiAgZW5kOiBFdmVudERhdGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFJlc3BvbnNlIGV4dGVuZHMgRXZlbnQge1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgc3RhdHVzOiBzdHJpbmcsXHJcbiAgaHRtbExpbms6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBUT0RPOiDQstGL0L3QtdGB0YLQuCBpc0xvYWRlZCDQsiDQvtCx0YnQuNC1INGC0LjQv9GLXHJcbmV4cG9ydCB0eXBlIEV2ZW50cyA9IERpY3RCeUlkU3RhdGU8RXZlbnRSZXNwb25zZT4gJiB7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBFdmVudHMgPSB7XHJcbiAgYnlJZDoge30sXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcblxyXG4vKlxyXG4gIGlzQ3JlYXRpbmc6IGZhbHNlLFxyXG4gIGNyZWF0ZWQ6IGZhbHNlLFxyXG4gIGNyZWF0aW5nRXJyb3I6IG51bGwsXHJcbiovXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcHJlcGFyZUVuZERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAvLyBTZXQgbmV4dCBkYXkuIEdDQSBzZXRzIGVuZCBkYXRlIGJ5IGV4Y2x1c2l2ZVxyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVEYXRlVGltZSA9IChcclxuICBkYXRlVGltZTogc3RyaW5nLFxyXG4gIHByZXBhcmVEYXRlOiB0eXBlb2YgcHJlcGFyZVN0YXJ0RGF0ZSB8IHR5cGVvZiBwcmVwYXJlRW5kRGF0ZVxyXG4pOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHRpbWVTZXBhcmF0b3IgPSAnVCdcclxuICBsZXQgW2RhdGUsIHRpbWVdOiBzdHJpbmdbXSA9IGRhdGVUaW1lLnNwbGl0KHRpbWVTZXBhcmF0b3IpO1xyXG4gIGRhdGUgPSBwcmVwYXJlRGF0ZShkYXRlKVxyXG4gIHJldHVybiBgJHtkYXRlfSR7dGltZVNlcGFyYXRvcn0ke3RpbWV9YDtcclxufVxyXG5cclxuY29uc3QgcGFyc2VTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSlcclxufVxyXG5cclxuY29uc3QgcGFyc2VFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ2FsZW5kYXJQYXJhbXMge1xyXG4gIHN1bW1hcnk6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUV2ZW50UGFyYW1zIGV4dGVuZHMgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdGFydDogc3RyaW5nLFxyXG4gIGVuZDogc3RyaW5nLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVJlbWluZGVyUGFyYW1zIGV4dGVuZHMgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdGFydFRpbWU6IHN0cmluZyxcclxuICBlbmRUaW1lOiBzdHJpbmcsXHJcbiAgcmVjdXJyZW5jZTogc3RyaW5nW10sXHJcbiAgcmVtaW5kZXJzOiB7XHJcbiAgICBtZXRob2Q6ICdlbWFpbCcgfCAncG9wdXAnLFxyXG4gICAgbWludXRlczogbnVtYmVyXHJcbiAgfVtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICBJRXZlbnRQYXJhbXMsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgc3VtbWFyeSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZVN0YXJ0RGF0ZShzdGFydCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmQ6IHtcclxuICAgICAgICAgICAgZGF0ZTogcHJlcGFyZUVuZERhdGUoZW5kKSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRyYW5zcGFyZW5jeTogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQgYXMgRXZlbnRSZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlbWluZGVyRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAgSVJlbWluZGVyUGFyYW1zLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdyZW1pbmRlckV2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHtcclxuICAgIHN1bW1hcnksXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHN0YXJ0VGltZSxcclxuICAgIGVuZFRpbWUsXHJcbiAgICByZWN1cnJlbmNlID0gW10sXHJcbiAgICByZW1pbmRlcnMgPSBbXVxyXG4gIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2AsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgZGF0ZVRpbWU6IHByZXBhcmVEYXRlVGltZShzdGFydFRpbWUsIHByZXBhcmVTdGFydERhdGUpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lOiBwcmVwYXJlRGF0ZVRpbWUoZW5kVGltZSwgcHJlcGFyZUVuZERhdGUpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbmN5OiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxyXG4gICAgICAgICAgcmVjdXJyZW5jZSxcclxuICAgICAgICAgIHJlbWluZGVyczoge1xyXG4gICAgICAgICAgICB1c2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgb3ZlcnJpZGVzOiByZW1pbmRlcnMsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdCBhcyBFdmVudFJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQgYXMgQXBpRXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7IGlkOiBzdHJpbmcsIHN1bW1hcnk6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9wYXRjaCcsXHJcbiAgYXN5bmMgKHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkOiBjYWxlbmRhcklkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7Y2FsZW5kYXJJZH0vZXZlbnRzLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEV2ZW50cyA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZVtdLFxyXG4gIHZvaWQsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2dldCcsXHJcbiAgYXN5bmMgKF8sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdDogeyBpdGVtcyB9IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2BcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBpdGVtcyBhcyBFdmVudFJlc3BvbnNlW11cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IGV2ZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2V2ZW50JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IGJ1aWxkZXIgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmlzTG9hZGVkID0gdHJ1ZVxyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKCh7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9KSA9PiB7XHJcbiAgICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfVxyXG5cclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBudWxsXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlUmVtaW5kZXJFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlUmVtaW5kZXJFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfSA9IGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZVJlbWluZGVyRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBldmVudCA9IHN0YXRlLmJ5SWRbaWRdXHJcbiAgICAgIGV2ZW50LmlkID0gaWRcclxuICAgICAgZXZlbnQuc3VtbWFyeSA9IHN1bW1hcnlcclxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudFNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==