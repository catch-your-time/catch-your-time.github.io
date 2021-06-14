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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImlzTG9hZGVkIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJwcmVwYXJlRGF0ZVRpbWUiLCJkYXRlVGltZSIsInRpbWVTZXBhcmF0b3IiLCJzcGxpdCIsInRpbWUiLCJwYXJzZVN0YXJ0RGF0ZSIsImZvcm1hdERhdGUiLCJwYXJzZUVuZERhdGUiLCJjcmVhdGVFdmVudCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJzdGFydCIsImVuZCIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsInJlamVjdFdpdGhWYWx1ZSIsImdldFN0YXRlIiwiaWQiLCJjYWxlbmRhciIsImdhcGkiLCJjbGllbnQiLCJyZXF1ZXN0IiwicGF0aCIsIm1ldGhvZCIsImJvZHkiLCJ0aW1lWm9uZSIsInRyYW5zcGFyZW5jeSIsInZpc2liaWxpdHkiLCJyZXN1bHQiLCJjcmVhdGVSZW1pbmRlckV2ZW50Iiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInJlY3VycmVuY2UiLCJyZW1pbmRlcnMiLCJ1c2VEZWZhdWx0Iiwib3ZlcnJpZGVzIiwicGF0Y2hFdmVudCIsImNhbGVuZGFySWQiLCJnZXRFdmVudHMiLCJfIiwiaXRlbXMiLCJldmVudFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZm9yRWFjaCIsInN0YXR1cyIsImh0bWxMaW5rIiwicmVqZWN0ZWQiLCJldmVudCIs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QUssQ0FBQzNDLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0QsS0FORDtBQVFBZ0MsV0FBTyxDQUFDQyxPQUFSLENBQWdCWCxVQUFVLENBQUNvQixRQUEzQixFQUFxQyxVQUFDUCxLQUFELEVBQWdCRSxNQUFoQixFQUEyQixDQUMvRCxDQUREO0FBRUQ7QUE1RjRCLENBQUQsQ0FBOUI7QUErRmVWLHlFQUFVLENBQUNpQixPQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY3ZDAxN2Q5NTEwYzczMzQyOWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEFwaUVycm9yLCBEaWN0QnlJZFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGUnXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBwYWRaZXJvIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5pbnRlcmZhY2UgRXZlbnREYXRlIHtcclxuICBkYXRlOiBzdHJpbmcsXHJcbiAgdGltZVpvbmU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50IHtcclxuICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICBzdGFydDogRXZlbnREYXRlLFxyXG4gIGVuZDogRXZlbnREYXRlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRSZXNwb25zZSBleHRlbmRzIEV2ZW50IHtcclxuICBpZDogc3RyaW5nLFxyXG4gIHN0YXR1czogc3RyaW5nLFxyXG4gIGh0bWxMaW5rOiBzdHJpbmdcclxufVxyXG5cclxuLy8gVE9ETzog0LLRi9C90LXRgdGC0LggaXNMb2FkZWQg0LIg0L7QsdGJ0LjQtSDRgtC40L/Ri1xyXG5leHBvcnQgdHlwZSBFdmVudHMgPSBEaWN0QnlJZFN0YXRlPEV2ZW50UmVzcG9uc2U+ICYge1xyXG4gIGlzTG9hZGVkOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogRXZlbnRzID0ge1xyXG4gIGJ5SWQ6IHt9LFxyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG5cclxuLypcclxuICBpc0NyZWF0aW5nOiBmYWxzZSxcclxuICBjcmVhdGVkOiBmYWxzZSxcclxuICBjcmVhdGluZ0Vycm9yOiBudWxsLFxyXG4qL1xyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgY29uc3QgbW9udGhGcm9tMXRvMTIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgY29uc3QgbW9udGhGcm9tMXRvMTIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkWmVybyhtb250aEZyb20xdG8xMil9LSR7cGFkWmVybyhkYXRlLmdldERhdGUoKSl9YFxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRGF0ZVRpbWUgPSAoZGF0ZVRpbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgdGltZVNlcGFyYXRvciA9ICdUJ1xyXG4gIGxldCBbZGF0ZSwgdGltZV06IHN0cmluZ1tdID0gZGF0ZVRpbWUuc3BsaXQodGltZVNlcGFyYXRvcik7XHJcbiAgZGF0ZSA9IHByZXBhcmVTdGFydERhdGUoZGF0ZSlcclxuICByZXR1cm4gYCR7ZGF0ZX0ke3RpbWVTZXBhcmF0b3J9JHt0aW1lfWA7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSlcclxuICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNhbGVuZGFyUGFyYW1zIHtcclxuICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxufVxyXG5cclxuaW50ZXJmYWNlIElFdmVudFBhcmFtcyBleHRlbmRzIElDYWxlbmRhclBhcmFtcyB7XHJcbiAgc3RhcnQ6IHN0cmluZyxcclxuICBlbmQ6IHN0cmluZyxcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZW1pbmRlclBhcmFtcyBleHRlbmRzIElDYWxlbmRhclBhcmFtcyB7XHJcbiAgc3RhcnRUaW1lOiBzdHJpbmcsXHJcbiAgZW5kVGltZTogc3RyaW5nLFxyXG4gIHJlY3VycmVuY2U6IHN0cmluZ1tdLFxyXG4gIHJlbWluZGVyczoge1xyXG4gICAgbWV0aG9kOiAnZW1haWwnIHwgJ3BvcHVwJyxcclxuICAgIG1pbnV0ZXM6IG51bWJlclxyXG4gIH1bXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAgSUV2ZW50UGFyYW1zLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9jcmVhdGUnLFxyXG4gIGFzeW5jICh7XHJcbiAgICBzdGFydCxcclxuICAgIGVuZCxcclxuICAgIHN1bW1hcnksXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVTdGFydERhdGUoc3RhcnQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVFbmREYXRlKGVuZCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0IGFzIEV2ZW50UmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZW1pbmRlckV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIElSZW1pbmRlclBhcmFtcyxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAncmVtaW5kZXJFdmVudC9jcmVhdGUnLFxyXG4gIGFzeW5jICh7XHJcbiAgICBzdW1tYXJ5LFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBzdGFydFRpbWUsXHJcbiAgICBlbmRUaW1lLFxyXG4gICAgcmVjdXJyZW5jZSA9IFtdLFxyXG4gICAgcmVtaW5kZXJzID0gW11cclxuICB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lOiBwcmVwYXJlRGF0ZVRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDoge1xyXG4gICAgICAgICAgICBkYXRlVGltZTogcHJlcGFyZURhdGVUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbmN5OiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxyXG4gICAgICAgICAgcmVjdXJyZW5jZSxcclxuICAgICAgICAgIHJlbWluZGVyczoge1xyXG4gICAgICAgICAgICB1c2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgb3ZlcnJpZGVzOiByZW1pbmRlcnMsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdCBhcyBFdmVudFJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQgYXMgQXBpRXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7IGlkOiBzdHJpbmcsIHN1bW1hcnk6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9wYXRjaCcsXHJcbiAgYXN5bmMgKHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkOiBjYWxlbmRhcklkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7Y2FsZW5kYXJJZH0vZXZlbnRzLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEV2ZW50cyA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZVtdLFxyXG4gIHZvaWQsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2dldCcsXHJcbiAgYXN5bmMgKF8sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdDogeyBpdGVtcyB9IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2BcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBpdGVtcyBhcyBFdmVudFJlc3BvbnNlW11cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IGV2ZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2V2ZW50JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IGJ1aWxkZXIgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmlzTG9hZGVkID0gdHJ1ZVxyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKCh7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9KSA9PiB7XHJcbiAgICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfVxyXG5cclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBudWxsXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlUmVtaW5kZXJFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlUmVtaW5kZXJFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfSA9IGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZVJlbWluZGVyRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBldmVudCA9IHN0YXRlLmJ5SWRbaWRdXHJcbiAgICAgIGV2ZW50LmlkID0gaWRcclxuICAgICAgZXZlbnQuc3VtbWFyeSA9IHN1bW1hcnlcclxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudFNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==