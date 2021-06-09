webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImlzTG9hZGVkIiwiZXJyb3IiLCJwcmVwYXJlU3RhcnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwibW9udGhGcm9tMXRvMTIiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicGFkWmVybyIsImdldERhdGUiLCJwcmVwYXJlRW5kRGF0ZSIsInNldERhdGUiLCJwYXJzZVN0YXJ0RGF0ZSIsImZvcm1hdERhdGUiLCJwYXJzZUVuZERhdGUiLCJjcmVhdGVFdmVudCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJzdGFydCIsImVuZCIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsInJlY3VycmVuY2UiLCJyZW1pbmRlcnMiLCJyZWplY3RXaXRoVmFsdWUiLCJnZXRTdGF0ZSIsImlkIiwiY2FsZW5kYXIiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsInBhdGgiLCJtZXRob2QiLCJib2R5IiwidGltZVpvbmUiLCJ0cmFuc3BhcmVuY3kiLCJ2aXNpYmlsaXR5IiwibGVuZ3RoIiwidXNlRGVmYXVsdCIsIm92ZXJyaWRlcyIsInJlc3VsdCIsInBhdGNoRXZlbnQiLCJjYWxlbmRhcklkIiwiZ2V0RXZlbnRzIiwiXyIsIml0ZW1zIiwiZXZlbnRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsImZvckVhY2giLCJzdGF0dXMiLCJodG1sTGluayIsInJlamVjdGVkIiwiZXZlbnQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQXNCQSxJQUFNQSxZQUFvQixHQUFHO0FBQzNCQyxNQUFJ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NDA5NTk0M2Y3OWI4MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgQXBpRXJyb3IsIERpY3RCeUlkU3RhdGUgfSBmcm9tICcuLi90eXBlcy9zdGF0ZSdcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCB7IGZvcm1hdERhdGUsIHBhZFplcm8gfSBmcm9tICcuLi91dGlscydcclxuXHJcbmludGVyZmFjZSBFdmVudERhdGUge1xyXG4gIGRhdGU6IHN0cmluZyxcclxuICB0aW1lWm9uZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnQge1xyXG4gIHN1bW1hcnk6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIHN0YXJ0OiBFdmVudERhdGUsXHJcbiAgZW5kOiBFdmVudERhdGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFJlc3BvbnNlIGV4dGVuZHMgRXZlbnQge1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgc3RhdHVzOiBzdHJpbmcsXHJcbiAgaHRtbExpbms6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFdmVudHMgPSBEaWN0QnlJZFN0YXRlPEV2ZW50UmVzcG9uc2U+XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEV2ZW50cyA9IHtcclxuICBieUlkOiB7fSxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGlzTG9hZGVkOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuXHJcbi8qXHJcbiAgaXNDcmVhdGluZzogZmFsc2UsXHJcbiAgY3JlYXRlZDogZmFsc2UsXHJcbiAgY3JlYXRpbmdFcnJvcjogbnVsbCxcclxuKi9cclxufVxyXG5cclxuY29uc3QgcHJlcGFyZVN0YXJ0RGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkWmVybyhtb250aEZyb20xdG8xMil9LSR7cGFkWmVybyhkYXRlLmdldERhdGUoKSl9YFxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSlcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcGFyc2VTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSlcclxufVxyXG5cclxuY29uc3QgcGFyc2VFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7XHJcbiAgICBzdGFydDogc3RyaW5nLFxyXG4gICAgZW5kOiBzdHJpbmcsXHJcbiAgICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgcmVjdXJyZW5jZT86IHN0cmluZ1tdLFxyXG4gICAgcmVtaW5kZXJzPzoge1xyXG4gICAgICBtZXRob2Q6ICdlbWFpbCcgfCAncG9wdXAnLFxyXG4gICAgICBtaW51dGVzOiBudW1iZXJcclxuICAgIH1bXVxyXG4gIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHsgc3RhcnQsIGVuZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHJlY3VycmVuY2UgPSBbXSwgcmVtaW5kZXJzID0gW10gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYCxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdGFydDoge1xyXG4gICAgICAgICAgICBkYXRlOiBwcmVwYXJlU3RhcnREYXRlKHN0YXJ0KSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDoge1xyXG4gICAgICAgICAgICBkYXRlOiBwcmVwYXJlRW5kRGF0ZShlbmQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbmN5OiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxyXG4gICAgICAgICAgLi4uKFxyXG4gICAgICAgICAgICByZWN1cnJlbmNlLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlY3VycmVuY2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIC4uLihcclxuICAgICAgICAgICAgcmVtaW5kZXJzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlbWluZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICB1c2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVzOiByZW1pbmRlcnMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0IGFzIEV2ZW50UmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaEV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIHsgaWQ6IHN0cmluZywgc3VtbWFyeTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L3BhdGNoJyxcclxuICBhc3luYyAoeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQ6IGNhbGVuZGFySWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtjYWxlbmRhcklkfS9ldmVudHMvJHtpZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ3BhdGNoJyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RXZlbnRzID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlW10sXHJcbiAgdm9pZCxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvZ2V0JyxcclxuICBhc3luYyAoXywgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0OiB7IGl0ZW1zIH0gfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW1zIGFzIEV2ZW50UmVzcG9uc2VbXVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZXZlbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZXZlbnQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogYnVpbGRlciA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgoeyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfSkgPT4ge1xyXG4gICAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICAgIGVuZC5kYXRlID0gcGFyc2VFbmREYXRlKGVuZC5kYXRlKVxyXG5cclxuICAgICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN0YXJ0LCBlbmQsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHN1bW1hcnksIGh0bWxMaW5rIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IHRydWVcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfSA9IGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuXHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gbnVsbFxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBldmVudCA9IHN0YXRlLmJ5SWRbaWRdXHJcbiAgICAgIGV2ZW50LmlkID0gaWRcclxuICAgICAgZXZlbnQuc3VtbWFyeSA9IHN1bW1hcnlcclxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudFNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==