webpackHotUpdate_N_E("pages/index",{

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
            debugger;
            return _context.abrupt("return", result);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            debugger;
            console.log(_context.t0);
            return _context.abrupt("return", rejectWithValue(_context.t0.result));

          case 17:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImVycm9yIiwicHJlcGFyZVN0YXJ0RGF0ZSIsImZvcm1hdHRlZERhdGUiLCJkYXRlIiwiRGF0ZSIsIm1vbnRoRnJvbTF0bzEyIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInBhZFplcm8iLCJnZXREYXRlIiwicHJlcGFyZUVuZERhdGUiLCJzZXREYXRlIiwicGFyc2VTdGFydERhdGUiLCJmb3JtYXREYXRlIiwicGFyc2VFbmREYXRlIiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVBc3luY1RodW5rIiwic3RhcnQiLCJlbmQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJpZCIsImNhbGVuZGFyIiwiZ2FwaSIsImNsaWVudCIsInJlcXVlc3QiLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsInRpbWVab25lIiwidHJhbnNwYXJlbmN5IiwidmlzaWJpbGl0eSIsImxlbmd0aCIsInVzZURlZmF1bHQiLCJvdmVycmlkZXMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicGF0Y2hFdmVudCIsImNhbGVuZGFySWQiLCJnZXRFdmVudHMiLCJfIiwiaXRlbXMiLCJldmVudFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZm9yRWFjaCIsInN0YXR1cyIsImh0bWxMaW5rIiwicmVqZWN0ZWQiLCJldmVudCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBc0JBLElBQU1BLFlBQW9CLEdBQUc7QUFDM0JD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Y2svcGFnZXMvaW5kZXguOWQxZThiNTlhYTExZGJjN2NjYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgQXBpRXJyb3IsIERpY3RCeUlkU3RhdGUgfSBmcm9tICcuLi90eXBlcy9zdGF0ZSdcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCB7IGZvcm1hdERhdGUsIHBhZFplcm8gfSBmcm9tICcuLi91dGlscydcclxuXHJcbmludGVyZmFjZSBFdmVudERhdGUge1xyXG4gIGRhdGU6IHN0cmluZyxcclxuICB0aW1lWm9uZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnQge1xyXG4gIHN1bW1hcnk6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIHN0YXJ0OiBFdmVudERhdGUsXHJcbiAgZW5kOiBFdmVudERhdGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFJlc3BvbnNlIGV4dGVuZHMgRXZlbnQge1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgc3RhdHVzOiBzdHJpbmcsXHJcbiAgaHRtbExpbms6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFdmVudHMgPSBEaWN0QnlJZFN0YXRlPEV2ZW50UmVzcG9uc2U+XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEV2ZW50cyA9IHtcclxuICBieUlkOiB7fSxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG5cclxuLypcclxuICBpc0NyZWF0aW5nOiBmYWxzZSxcclxuICBjcmVhdGVkOiBmYWxzZSxcclxuICBjcmVhdGluZ0Vycm9yOiBudWxsLFxyXG4qL1xyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgY29uc3QgbW9udGhGcm9tMXRvMTIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgY29uc3QgbW9udGhGcm9tMXRvMTIgPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkWmVybyhtb250aEZyb20xdG8xMil9LSR7cGFkWmVybyhkYXRlLmdldERhdGUoKSl9YFxyXG59XHJcblxyXG5jb25zdCBwYXJzZVN0YXJ0RGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGxldCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKVxyXG59XHJcblxyXG5jb25zdCBwYXJzZUVuZERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICAvLyBTZXQgbmV4dCBkYXkuIEdDQSBzZXRzIGVuZCBkYXRlIGJ5IGV4Y2x1c2l2ZVxyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDEpXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIHtcclxuICAgIHN0YXJ0OiBzdHJpbmcsXHJcbiAgICBlbmQ6IHN0cmluZyxcclxuICAgIHN1bW1hcnk6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICByZWN1cnJlbmNlPzogc3RyaW5nW10sXHJcbiAgICByZW1pbmRlcnM/OiB7XHJcbiAgICAgIG1ldGhvZDogJ2VtYWlsJyB8ICdwb3B1cCcsXHJcbiAgICAgIG1pbnV0ZXM6IG51bWJlclxyXG4gICAgfVtdXHJcbiAgfSxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvY3JlYXRlJyxcclxuICBhc3luYyAoeyBzdGFydCwgZW5kLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgcmVjdXJyZW5jZSA9IFtdLCByZW1pbmRlcnMgPSBbXSB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVTdGFydERhdGUoc3RhcnQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVFbmREYXRlKGVuZCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXHJcbiAgICAgICAgICAuLi4oXHJcbiAgICAgICAgICAgIHJlY3VycmVuY2UubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgcmVjdXJyZW5jZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgLi4uKFxyXG4gICAgICAgICAgICByZW1pbmRlcnMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgcmVtaW5kZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVzZURlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBvdmVycmlkZXM6IHJlbWluZGVycyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgZGVidWdnZXJcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQgYXMgRXZlbnRSZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAgeyBpZDogc3RyaW5nLCBzdW1tYXJ5OiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcgfSxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvcGF0Y2gnLFxyXG4gIGFzeW5jICh7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZDogY2FsZW5kYXJJZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2NhbGVuZGFySWR9L2V2ZW50cy8ke2lkfWAsXHJcbiAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdClcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFdmVudHMgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2VbXSxcclxuICB2b2lkLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9nZXQnLFxyXG4gIGFzeW5jIChfLCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyByZXN1bHQ6IHsgaXRlbXMgfSB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gaXRlbXMgYXMgRXZlbnRSZXNwb25zZVtdXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQgYXMgQXBpRXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5jb25zdCBldmVudFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdldmVudCcsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiBidWlsZGVyID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKCh7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9KSA9PiB7XHJcbiAgICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgIHN0YXRlLmJ5SWRbaWRdID0geyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfVxyXG5cclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBudWxsXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmNyZWF0aW5nRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuYnlJZFtpZF1cclxuICAgICAgZXZlbnQuaWQgPSBpZFxyXG4gICAgICBldmVudC5zdW1tYXJ5ID0gc3VtbWFyeVxyXG4gICAgICBldmVudC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShwYXRjaEV2ZW50LnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50U2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9