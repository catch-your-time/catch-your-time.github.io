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
            // try {
            _getState = getState(), id = _getState.calendar.id;
            _context.next = 5;
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

          case 5:
            _yield$gapi$client$re = _context.sent;
            result = _yield$gapi$client$re.result;
            debugger;
            return _context.abrupt("return", result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZXZlbnQudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYnlJZCIsImlzTG9hZGluZyIsImVycm9yIiwicHJlcGFyZVN0YXJ0RGF0ZSIsImZvcm1hdHRlZERhdGUiLCJkYXRlIiwiRGF0ZSIsIm1vbnRoRnJvbTF0bzEyIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInBhZFplcm8iLCJnZXREYXRlIiwicHJlcGFyZUVuZERhdGUiLCJzZXREYXRlIiwicGFyc2VTdGFydERhdGUiLCJmb3JtYXREYXRlIiwicGFyc2VFbmREYXRlIiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVBc3luY1RodW5rIiwic3RhcnQiLCJlbmQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0U3RhdGUiLCJpZCIsImNhbGVuZGFyIiwiZ2FwaSIsImNsaWVudCIsInJlcXVlc3QiLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsInRpbWVab25lIiwidHJhbnNwYXJlbmN5IiwidmlzaWJpbGl0eSIsImxlbmd0aCIsInVzZURlZmF1bHQiLCJvdmVycmlkZXMiLCJyZXN1bHQiLCJwYXRjaEV2ZW50IiwiY2FsZW5kYXJJZCIsImdldEV2ZW50cyIsIl8iLCJpdGVtcyIsImV2ZW50U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJmb3JFYWNoIiwic3RhdHVzIiwiaHRtbExpbmsiLCJyZWplY3RlZCIsImV2ZW50IiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFzQkEsSUFBTUEsWUFBb0IsR0FBRztBQUMzQkMsTUFBSSxFQUFFLEVBRHFC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Q0E7QUFDQTtBQUNBO0FBQ0ssS0FiRDtBQWVBVCxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JwQyxXQUFXLENBQUM2QyxRQUE1QixFQUFzQyxVQUFDUCxLQUFELEVBQWdCRSxNQUFoQixFQUEyQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxLQVZEO0FBWUFMLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQlgsVUFBVSxDQUFDWSxPQUEzQixFQUFvQyxVQUFDQyxLQUFELEVBQW1CLENBQ3RELENBREQ7QUFHQUgsV0FBTyxDQUFDQyxPQUFSLENBQWdCWCxVQUFVLENBQUNjLFNBQTNCLEVBQXNDLFVBQUNELEtBQUQsRUFBZ0JFLE1BQWhCLEVBQTJCO0FBQUEsNkJBQzFCQSxNQUFNLENBQUNDLE9BRG1CO0FBQUEsVUFDdkQvQixFQUR1RCxvQkFDdkRBLEVBRHVEO0FBQUEsVUFDbkROLE9BRG1ELG9CQUNuREEsT0FEbUQ7QUFBQSxVQUMxQ0MsV0FEMEMsb0JBQzFDQSxXQUQwQztBQUUvRCxVQUFNeUMsS0FBSyxHQUFHUixLQUFLLENBQUN2RCxJQUFOLENBQVcyQixFQUFYLENBQWQ7QUFDQW9DLFdBQUssQ0FBQ3BDLEVBQU4sR0FBV0EsRUFBWDtBQUNBb0MsV0FBSyxDQUFDMUMsT0FBTixHQUFnQkEsT0FBaEI7QUFDQTBDLFdBQUssQ0FBQ3pDLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0QsS0FORDtBQVFBOEIsV0FBTyxDQUFDQyxPQUFSLENBQWdCWCxVQUFVLENBQUNvQixRQUEzQixFQUFxQyxVQUFDUCxLQUFELEVBQWdCRSxNQUFoQixFQUEyQixDQUMvRCxDQUREO0FBRUQ7QUEzRTRCLENBQUQsQ0FBOUI7QUE4RWVWLHlFQUFVLENBQUNpQixPQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFmZTU4Y2ZlZDgxNGVhMjJmOGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEFwaUVycm9yLCBEaWN0QnlJZFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGUnXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBwYWRaZXJvIH0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5pbnRlcmZhY2UgRXZlbnREYXRlIHtcclxuICBkYXRlOiBzdHJpbmcsXHJcbiAgdGltZVpvbmU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50IHtcclxuICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICBzdGFydDogRXZlbnREYXRlLFxyXG4gIGVuZDogRXZlbnREYXRlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRSZXNwb25zZSBleHRlbmRzIEV2ZW50IHtcclxuICBpZDogc3RyaW5nLFxyXG4gIHN0YXR1czogc3RyaW5nLFxyXG4gIGh0bWxMaW5rOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnRzID0gRGljdEJ5SWRTdGF0ZTxFdmVudFJlc3BvbnNlPlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBFdmVudHMgPSB7XHJcbiAgYnlJZDoge30sXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuXHJcbi8qXHJcbiAgaXNDcmVhdGluZzogZmFsc2UsXHJcbiAgY3JlYXRlZDogZmFsc2UsXHJcbiAgY3JlYXRpbmdFcnJvcjogbnVsbCxcclxuKi9cclxufVxyXG5cclxuY29uc3QgcHJlcGFyZVN0YXJ0RGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7cGFkWmVybyhtb250aEZyb20xdG8xMil9LSR7cGFkWmVybyhkYXRlLmdldERhdGUoKSl9YFxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRW5kRGF0ZSA9IChmb3JtYXR0ZWREYXRlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JtYXR0ZWREYXRlKVxyXG4gIGNvbnN0IG1vbnRoRnJvbTF0bzEyID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIC8vIFNldCBuZXh0IGRheS4gR0NBIHNldHMgZW5kIGRhdGUgYnkgZXhjbHVzaXZlXHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSlcclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke3BhZFplcm8obW9udGhGcm9tMXRvMTIpfS0ke3BhZFplcm8oZGF0ZS5nZXREYXRlKCkpfWBcclxufVxyXG5cclxuY29uc3QgcGFyc2VTdGFydERhdGUgPSAoZm9ybWF0dGVkRGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSlcclxufVxyXG5cclxuY29uc3QgcGFyc2VFbmREYXRlID0gKGZvcm1hdHRlZERhdGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKGZvcm1hdHRlZERhdGUpXHJcbiAgLy8gU2V0IG5leHQgZGF5LiBHQ0Egc2V0cyBlbmQgZGF0ZSBieSBleGNsdXNpdmVcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKVxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGNyZWF0ZUFzeW5jVGh1bms8RXZlbnRSZXNwb25zZSxcclxuICB7XHJcbiAgICBzdGFydDogc3RyaW5nLFxyXG4gICAgZW5kOiBzdHJpbmcsXHJcbiAgICBzdW1tYXJ5OiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgcmVjdXJyZW5jZT86IHN0cmluZ1tdLFxyXG4gICAgcmVtaW5kZXJzPzoge1xyXG4gICAgICBtZXRob2Q6ICdlbWFpbCcgfCAncG9wdXAnLFxyXG4gICAgICBtaW51dGVzOiBudW1iZXJcclxuICAgIH1bXVxyXG4gIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L2NyZWF0ZScsXHJcbiAgYXN5bmMgKHsgc3RhcnQsIGVuZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHJlY3VycmVuY2UgPSBbXSwgcmVtaW5kZXJzID0gW10gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIC8vIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYCxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdGFydDoge1xyXG4gICAgICAgICAgICBkYXRlOiBwcmVwYXJlU3RhcnREYXRlKHN0YXJ0KSxcclxuICAgICAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTW9zY293J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDoge1xyXG4gICAgICAgICAgICBkYXRlOiBwcmVwYXJlRW5kRGF0ZShlbmQpLFxyXG4gICAgICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9Nb3Njb3cnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbmN5OiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxyXG4gICAgICAgICAgLi4uKFxyXG4gICAgICAgICAgICByZWN1cnJlbmNlLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlY3VycmVuY2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIC4uLihcclxuICAgICAgICAgICAgcmVtaW5kZXJzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlbWluZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICB1c2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVzOiByZW1pbmRlcnMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnZ2VyXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0IGFzIEV2ZW50UmVzcG9uc2VcclxuICAgIC8vIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdCBhcyBBcGlFcnJvcilcclxuICAgIC8vIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaEV2ZW50ID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlLFxyXG4gIHsgaWQ6IHN0cmluZywgc3VtbWFyeTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nIH0sXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ2V2ZW50L3BhdGNoJyxcclxuICBhc3luYyAoeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24gfSwgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQ6IGNhbGVuZGFySWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtjYWxlbmRhcklkfS9ldmVudHMvJHtpZH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ3BhdGNoJyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RXZlbnRzID0gY3JlYXRlQXN5bmNUaHVuazxFdmVudFJlc3BvbnNlW10sXHJcbiAgdm9pZCxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAnZXZlbnQvZ2V0JyxcclxuICBhc3luYyAoXywgeyByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgY2FsZW5kYXI6IHsgaWQgfSB9ID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0OiB7IGl0ZW1zIH0gfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBhdGg6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvJHtpZH0vZXZlbnRzYFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW1zIGFzIEV2ZW50UmVzcG9uc2VbXVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0IGFzIEFwaUVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZXZlbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZXZlbnQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogYnVpbGRlciA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0RXZlbnRzLnBlbmRpbmcsIChzdGF0ZTogRXZlbnRzKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgoeyBpZCwgc3RhcnQsIGVuZCwgZGVzY3JpcHRpb24sIHN0YXR1cywgc3VtbWFyeSwgaHRtbExpbmsgfSkgPT4ge1xyXG4gICAgICAgIHN0YXJ0LmRhdGUgPSBwYXJzZVN0YXJ0RGF0ZShzdGFydC5kYXRlKVxyXG4gICAgICAgIGVuZC5kYXRlID0gcGFyc2VFbmREYXRlKGVuZC5kYXRlKVxyXG5cclxuICAgICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN0YXJ0LCBlbmQsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHN1bW1hcnksIGh0bWxMaW5rIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldEV2ZW50cy5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IHRydWVcclxuICAgICAgc3RhdGUuY3JlYXRlZCA9IGZhbHNlXHJcbiovXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVFdmVudC5mdWxmaWxsZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgc3VtbWFyeSwgZGVzY3JpcHRpb24sIHN0YXJ0LCBlbmQsIHN0YXR1cywgaHRtbExpbmsgfSA9IGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICBzdGFydC5kYXRlID0gcGFyc2VTdGFydERhdGUoc3RhcnQuZGF0ZSlcclxuICAgICAgZW5kLmRhdGUgPSBwYXJzZUVuZERhdGUoZW5kLmRhdGUpXHJcblxyXG4gICAgICBzdGF0ZS5ieUlkW2lkXSA9IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uLCBzdGFydCwgZW5kLCBzdGF0dXMsIGh0bWxMaW5rIH1cclxuXHJcbi8qXHJcbiAgICAgIHN0YXRlLmlzQ3JlYXRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5jcmVhdGVkID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gbnVsbFxyXG4qL1xyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoY3JlYXRlRXZlbnQucmVqZWN0ZWQsIChzdGF0ZTogRXZlbnRzLCBhY3Rpb24pID0+IHtcclxuLypcclxuICAgICAgc3RhdGUuaXNDcmVhdGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmNyZWF0ZWQgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZ0Vycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuKi9cclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQucGVuZGluZywgKHN0YXRlOiBFdmVudHMpID0+IHtcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKHBhdGNoRXZlbnQuZnVsZmlsbGVkLCAoc3RhdGU6IEV2ZW50cywgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIHN1bW1hcnksIGRlc2NyaXB0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBldmVudCA9IHN0YXRlLmJ5SWRbaWRdXHJcbiAgICAgIGV2ZW50LmlkID0gaWRcclxuICAgICAgZXZlbnQuc3VtbWFyeSA9IHN1bW1hcnlcclxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UocGF0Y2hFdmVudC5yZWplY3RlZCwgKHN0YXRlOiBFdmVudHMsIGFjdGlvbikgPT4ge1xyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudFNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==