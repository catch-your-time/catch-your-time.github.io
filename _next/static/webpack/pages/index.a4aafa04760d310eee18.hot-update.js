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
    var start, end, summary, description, _ref$reminders, reminders, rejectWithValue, getState, _getState, id, _yield$gapi$client$re, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = _ref.start, end = _ref.end, summary = _ref.summary, description = _ref.description, _ref$reminders = _ref.reminders, reminders = _ref$reminders === void 0 ? [] : _ref$reminders;
            rejectWithValue = _ref2.rejectWithValue, getState = _ref2.getState;
            _context.prev = 2;
            _getState = getState(), id = _getState.calendar.id;
            _context.next = 6;
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/".concat(id, "/events"),
              method: 'post',
              body: _objectSpread({
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
              }, reminders.length > 0 ? {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImVycm9yIiwicHJlcGFyZVN0YXJ0RGF0ZSIsImZvcm1hdHRlZERhdGUiLCJkYXRlIiwiRGF0ZSIsIm1vbnRoRnJvbTF0bzEyIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInBhZFplcm8iLCJnZXREYXRlIiwicHJlcGFyZUVuZERhdGUiLCJzZXREYXRlIiwicGFyc2VTdGFydERhdGUiLCJmb3JtYXREYXRlIiwicGFyc2VFbmREYXRlIiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVBc3luY1RodW5rIiwic3RhcnQiLCJlbmQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJyZW1pbmRlcnMiLCJyZWplY3RXaXRoVmFsdWUiLCJnZXRTdGF0ZSIsImlkIiwiY2FsZW5kYXIiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsInBhdGgiLCJtZXRob2QiLCJib2R5IiwidGltZVpvbmUiLCJ0cmFuc3BhcmVuY3kiLCJ2aXNpYmlsaXR5IiwibGVuZ3RoIiwidXNlRGVmYXVsdCIsIm92ZXJyaWRlcyIsInJlc3VsdCIsInBhdGNoRXZlbnQiLCJjYWxlbmRhcklkIiwiZ2V0RXZlbnRzIiwiXyIsIml0ZW1zIiwiZXZlbnRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsImZvckVhY2giLCJzdGF0dXMiLCJodG1sTGluayIsInJlamVjdGVkIiwiZXZlbnQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQXNCQSxJQUFNQSxZQUFvQixHQUFHO0FBQzNCQyxNQUFJLEVBQUUsRUFEcUI7QUFFM0JDLFdBQVMs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UCxLQUFELEVBQWdCRSxNQUFoQixFQUEyQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxLQVZEO0FBWUFMLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQlgsVUFBVSxDQUFDWSxPQUEzQixFQUFvQyxVQUFDQyxLQUFELEVBQW1CLENBQ3RELENBREQ7QUFHQUgsV0FBTyxDQUFDQyxPQUFSLENBQWdCWCxVQUFVLENBQUNjLFNBQTNCLEVBQXNDLFVBQUNELEtBQUQsRUFBZ0JFLE1BQWhCLEVBQTJCO0FBQUEsNkJBQzFCQSxNQUFNLENBQUNDLE9BRG1CO0FBQUEsVUFDdkQvQixFQUR1RCxvQkFDdkRBLEVBRHVEO0FBQUEsVUFDbkRMLE9BRG1ELG9CQUNuREEsT0FEbUQ7QUFBQSxVQUMxQ0MsV0FEMEMsb0JBQzFDQSxXQUQwQztBQUUvRCxVQUFNd0MsS0FBSyxHQUFHUixLQUFLLENBQUN0RCxJQUFOLENBQVcwQixFQUFYLENBQWQ7QUFDQW9DLFdBQUssQ0FBQ3BDLEVBQU4sR0FBV0EsRUFBWDtBQUNBb0MsV0FBSyxDQUFDekMsT0FBTixHQUFnQkEsT0FBaEI7QUFDQXlDLFdBQUssQ0FBQ3hDLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0QsS0FORDtBQVFBNkIsV0FBTyxDQUFDQyxPQUFSLENBQWdCWCxVQUFVLENBQUNvQixRQUEzQixFQUFxQyxVQUFDUCxLQUFELEVBQWdCRSxNQUFoQixFQUEyQixDQUMvRCxDQUREO0FBRUQ7QUEzRTRCLENBQUQsQ0FBOUI7QUE4RWVWLHlFQUFVLENBQUNpQixPQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNGFhZmEwNDc2MGQzMTBlZWUxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBBcGlFcnJvciwgRGljdEJ5SWRTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL3N0YXRlJ1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgcGFkWmVybyB9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIEV2ZW50RGF0ZSB7XHJcbiAgZGF0ZTogc3RyaW5nLFxyXG4gIHRpbWVab25lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudCB7XHJcbiAgc3VtbWFyeTogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgc3RhcnQ6IEV2ZW50RGF0ZSxcclxuICBlbmQ6IEV2ZW50RGF0ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UmVzcG9uc2UgZXh0ZW5kcyBFdmVudCB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBzdGF0dXM6IHN0cmluZyxcclxuICBodG1sTGluazogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEV2ZW50cyA9IERpY3RCeUlkU3RhdGU8RXZlbnRSZXNwb25zZT5cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogRXZlbnRzID0ge1xyXG4gIGJ5SWQ6IHt9LFxyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcblxyXG4vKlxyXG4gIGlzQ3JlYXRpbmc6IGZhbHNlLFxyXG4gIGNyZWF0ZWQ6IGZhbHNlLFxyXG4gIGNyZWF0aW5nRXJyb3I6IG51bGwsXHJcbiovXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcHJlcGFyZUVuZERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZm9ybWF0dGVkRGF0ZSlcclxuICBjb25zdCBtb250aEZyb20xdG8xMiA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAvLyBTZXQgbmV4dCBkYXkuIEdDQSBzZXRzIGVuZCBkYXRlIGJ5IGV4Y2x1c2l2ZVxyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpXHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtwYWRaZXJvKG1vbnRoRnJvbTF0bzEyKX0tJHtwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKX1gXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlU3RhcnREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSlcclxuICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRXZlbnQgPSBjcmVhdGVBc3luY1RodW5rPEV2ZW50UmVzcG9uc2UsXHJcbiAge1xyXG4gICAgc3RhcnQ6IHN0cmluZyxcclxuICAgIGVuZDogc3RyaW5nLFxyXG4gICAgc3VtbWFyeTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHJlbWluZGVycz86IHtcclxuICAgICAgbWV0aG9kOiAnZW1haWwnIHwgJ3BvcHVwJyxcclxuICAgICAgbWludXRlczogbnVtYmVyXHJcbiAgICB9W11cclxuICB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9jcmVhdGUnLFxyXG4gIGFzeW5jICh7IHN0YXJ0LCBlbmQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCByZW1pbmRlcnMgPSBbXSB9LCB7IHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYWxlbmRhcjogeyBpZCB9IH0gPSBnZXRTdGF0ZSgpXHJcblxyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy8ke2lkfS9ldmVudHNgLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVTdGFydERhdGUoc3RhcnQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHByZXBhcmVFbmREYXRlKGVuZCksXHJcbiAgICAgICAgICAgIHRpbWVab25lOiAnRXVyb3BlL01vc2NvdydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAncHJpdmF0ZScsXHJcbiAgICAgICAgICAuLi4oXHJcbiAgICAgICAgICAgIHJlbWluZGVycy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICByZW1pbmRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgdXNlRGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJyaWRlczogcmVtaW5kZXJzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdCBhcyBFdmVudFJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQgYXMgQXBpRXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7IGlkOiBzdHJpbmcsIHN1bW1hcnk6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyB9LFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICdldmVudC9wYXRjaCcsXHJcbiAgYXN5bmMgKHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkOiBjYWxlbmRhcklkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7Y2FsZW5kYXJJZH0vZXZlbnRzLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEV2ZW50cyA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZVtdLFxyXG4gIHZvaWQsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2dldCcsXHJcbiAgYXN5bmMgKF8sIHsgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNhbGVuZGFyOiB7IGlkIH0gfSA9IGdldFN0YXRlKClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdDogeyBpdGVtcyB9IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzLyR7aWR9L2V2ZW50c2BcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBpdGVtcyBhcyBFdmVudFJlc3BvbnNlW11cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IGV2ZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2V2ZW50JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IGJ1aWxkZXIgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5wZW5kaW5nLCAoc3RhdGU6IEV2ZW50cykgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKHsgaWQsIHN0YXJ0LCBlbmQsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHN1bW1hcnksIGh0bWxMaW5rIH0pID0+IHtcclxuICAgICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgICBlbmQuZGF0ZSA9IHBhcnNlRW5kRGF0ZShlbmQuZGF0ZSlcclxuXHJcbiAgICAgICAgc3RhdGUuYnlJZFtpZF0gPSB7IGlkLCBzdGFydCwgZW5kLCBkZXNjcmlwdGlvbiwgc3RhdHVzLCBzdW1tYXJ5LCBodG1sTGluayB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRFdmVudHMucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSBmYWxzZVxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgc3RhcnQuZGF0ZSA9IHBhcnNlU3RhcnREYXRlKHN0YXJ0LmRhdGUpXHJcbiAgICAgIGVuZC5kYXRlID0gcGFyc2VFbmREYXRlKGVuZC5kYXRlKVxyXG5cclxuICAgICAgc3RhdGUuYnlJZFtpZF0gPSB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiwgc3RhcnQsIGVuZCwgc3RhdHVzLCBodG1sTGluayB9XHJcblxyXG4vKlxyXG4gICAgICBzdGF0ZS5pc0NyZWF0aW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IHRydWVcclxuICAgICAgc3RhdGUuY3JlYXRpbmdFcnJvciA9IG51bGxcclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGNyZWF0ZUV2ZW50LnJlamVjdGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gZmFsc2VcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgc3RhdGUuY3JlYXRpbmdFcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuY3JlYXRpbmdFcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShwYXRjaEV2ZW50LnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShwYXRjaEV2ZW50LmZ1bGZpbGxlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBzdW1tYXJ5LCBkZXNjcmlwdGlvbiB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgZXZlbnQgPSBzdGF0ZS5ieUlkW2lkXVxyXG4gICAgICBldmVudC5pZCA9IGlkXHJcbiAgICAgIGV2ZW50LnN1bW1hcnkgPSBzdW1tYXJ5XHJcbiAgICAgIGV2ZW50LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRTbGljZS5yZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=