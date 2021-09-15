webpackHotUpdate_N_E("pages/index",{

/***/ "./store/user.ts":
/*!***********************!*\
  !*** ./store/user.ts ***!
  \***********************/
/*! exports provided: getUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./api/index.ts");
/* harmony import */ var _types_sex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/sex */ "./types/sex.ts");





var initialState = {
  sex: _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Woman,
  birthdays: +new Date(1989, 9, 29),
  locales: 'us',
  isLoading: false,
  error: null,
  loaded: false
};
var getUserInfo = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])('user/get', /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_, thunkAPI) {
    var _yield$gapi$client$re, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return gapi.client.request({
              'path': "".concat(_api__WEBPACK_IMPORTED_MODULE_3__["GOOGLE_API_URL"], "/oauth2/v1/userinfo")
            });

          case 3:
            _yield$gapi$client$re = _context.sent;
            result = _yield$gapi$client$re.result;
            return _context.abrupt("return", result);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", thunkAPI.rejectWithValue(_context.t0.result));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var getUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])('user/get', /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_, thunkAPI) {
    var fields, _yield$gapi$client$re2, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fields = ['names', 'photos', 'birthdays', 'genders'];
            _context2.prev = 1;
            _context2.next = 4;
            return gapi.client.request({
              'path': "".concat(_api__WEBPACK_IMPORTED_MODULE_3__["PEOPLE_API_URL"], "/v1/people/me?personFields=").concat(fields.join(','))
            });

          case 4:
            _yield$gapi$client$re2 = _context2.sent;
            result = _yield$gapi$client$re2.result;
            return _context2.abrupt("return", result);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", thunkAPI.rejectWithValue(_context2.t0.result));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

var findPrimary = function findPrimary() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return values.find(function (value) {
    return value.metadata.primary;
  });
};

var userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createSlice"])({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(getUser.pending, function (state) {
      state.isLoading = true;
      state.loaded = false;
    });
    builder.addCase(getUser.fulfilled, function (state, action) {
      var _findPrimary, _findPrimary2, _findPrimary3;

      var _action$payload = action.payload,
          birthdays = _action$payload.birthdays,
          genders = _action$payload.genders,
          names = _action$payload.names,
          photos = _action$payload.photos;
      var name = findPrimary(names);

      if (name) {
        state.id = name.metadata.source.id;
        state.name = name.displayName;
      }

      state.picture = (_findPrimary = findPrimary(photos)) === null || _findPrimary === void 0 ? void 0 : _findPrimary.url;
      var sex = (_findPrimary2 = findPrimary(genders)) === null || _findPrimary2 === void 0 ? void 0 : _findPrimary2.value;

      if (sex) {
        state.sex = sex !== null && sex !== void 0 ? sex : _types_sex__WEBPACK_IMPORTED_MODULE_4__["Sex"].Man;
      }

      var birthdaysDate = (_findPrimary3 = findPrimary(birthdays)) === null || _findPrimary3 === void 0 ? void 0 : _findPrimary3.date;

      if (birthdaysDate) {
        state.birthdays = +new Date(birthdaysDate.year, birthdaysDate.month - 1, birthdaysDate.day);
      }

      state.isLoading = false;
      state.loaded = true;
    }); // TODO: show an error

    builder.addCase(getUser.rejected, function (state, action) {
      state.isLoading = false;
      state.loaded = false;

      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error = action.error;
      }
    });
  }
});

/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdXNlci50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzZXgiLCJTZXgiLCJXb21hbiIsImJpcnRoZGF5cyIsIkRhdGUiLCJsb2NhbGVzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJsb2FkZWQiLCJnZXRVc2VySW5mbyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJfIiwidGh1bmtBUEkiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsIkdPT0dMRV9BUElfVVJMIiwicmVzdWx0IiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0VXNlciIsImZpZWxkcyIsIlBFT1BMRV9BUElfVVJMIiwiam9pbiIsImZpbmRQcmltYXJ5IiwidmFsdWVzIiwiZmluZCIsInZhbHVlIiwibWV0YWRhdGEiLCJwcmltYXJ5IiwidXNlclNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZ2VuZGVycyIsIm5hbWVzIiwicGhvdG9zIiwiaWQiLCJzb3VyY2UiLCJkaXNwbGF5TmFtZSIsInBpY3R1cmUiLCJ1cmwiLCJNYW4iLCJiaXJ0aGRheXNEYXRlIiwiZGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsInJlamVjdGVkIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFvQ0EsSUFBTUEsWUFBMkIsR0FBRztBQUNsQ0MsS0FBRyxFQUFFQyw4Q0FBRyxDQUFDQyxLQUR5QjtBQUVsQ0MsV0FBUyxFQUFFLENBQUMsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBRnNCO0FBR2xDQyxTQUFPLEVBQUUsSUFIeUI7QUFJbENDLFdBQVMsRUFBRSxLQUp1QjtBQUtsQ0MsT0FBSyxFQUFFLElBTDJCO0FB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Q0Q7QUFDRixLQVJEO0FBU0Q7QUEzQzJCLENBQUQsQ0FBN0I7QUE4Q0E7QUFFZXNCLHdFQUFTLENBQUMyQixPQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODBjOGViYzA0YTFkMzVlZjM1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBBcGlFcnJvciB9IGZyb20gJy4uL3R5cGVzL3N0YXRlJ1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgeyBHT09HTEVfQVBJX1VSTCwgUEVPUExFX0FQSV9VUkwgfSBmcm9tICcuLi9hcGknXHJcbmltcG9ydCB7IFNleCB9IGZyb20gJy4uL3R5cGVzL3NleCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciBleHRlbmRzIEFwaUVycm9yIHtcclxuICBpZDogc3RyaW5nLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwaWN0dXJlOiBzdHJpbmcsXHJcbiAgYmlydGhkYXlzOiBudW1iZXIsXHJcbiAgbG9jYWxlczogc3RyaW5nLFxyXG4gIHNleDogU2V4LFxyXG4gIGlzTG9hZGluZzogYm9vbGVhbixcclxuICBsb2FkZWQ6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmludGVyZmFjZSBVc2VyUmVzcG9uc2VNZXRhZGF0YSB7XHJcbiAgbWV0YWRhdGE6IHtcclxuICAgIHByaW1hcnk6IGJvb2xlYW4sXHJcbiAgICBzb3VyY2U6IHtcclxuICAgICAgaWQ6IHN0cmluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXJSZXNwb25zZSB7XHJcbiAgbG9jYWxlczogKHsgdmFsdWU/OiBzdHJpbmcgfSAmIFVzZXJSZXNwb25zZU1ldGFkYXRhKVtdLFxyXG4gIG5hbWVzOiAoeyBkaXNwbGF5TmFtZT86IHN0cmluZyB9ICYgVXNlclJlc3BvbnNlTWV0YWRhdGEpW10sXHJcbiAgcGhvdG9zOiAoeyB1cmw/OiBzdHJpbmcgfSAmIFVzZXJSZXNwb25zZU1ldGFkYXRhKVtdLFxyXG4gIGdlbmRlcnM6ICh7IHZhbHVlPzogU2V4IH0gJiBVc2VyUmVzcG9uc2VNZXRhZGF0YSlbXSxcclxuICBiaXJ0aGRheXM6ICh7XHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIHllYXI6IG51bWJlcixcclxuICAgICAgbW9udGg6IG51bWJlcixcclxuICAgICAgZGF5OiBudW1iZXIsXHJcbiAgICB9XHJcbiAgfSAmIFVzZXJSZXNwb25zZU1ldGFkYXRhKVtdLFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFBhcnRpYWw8VXNlcj4gPSB7XHJcbiAgc2V4OiBTZXguV29tYW4sXHJcbiAgYmlydGhkYXlzOiArbmV3IERhdGUoMTk4OSwgOSwgMjkpLFxyXG4gIGxvY2FsZXM6ICd1cycsXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBsb2FkZWQ6IGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyLFxyXG4gIHVuZGVmaW5lZCxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAndXNlci9nZXQnLFxyXG4gIGFzeW5jIChfLCB0aHVua0FQSSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgICdwYXRoJzogYCR7R09PR0xFX0FQSV9VUkx9L29hdXRoMi92MS91c2VyaW5mb2AsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiB0aHVua0FQSS5yZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5jb25zdCBnZXRVc2VyID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyUmVzcG9uc2UsXHJcbiAgdW5kZWZpbmVkLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICd1c2VyL2dldCcsXHJcbiAgYXN5bmMgKF8sIHRodW5rQVBJKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBbJ25hbWVzJywgJ3Bob3RvcycsICdiaXJ0aGRheXMnLCAnZ2VuZGVycyddXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdhcGkuY2xpZW50LnJlcXVlc3Qoe1xyXG4gICAgICAgICdwYXRoJzogYCR7UEVPUExFX0FQSV9VUkx9L3YxL3Blb3BsZS9tZT9wZXJzb25GaWVsZHM9JHtmaWVsZHMuam9pbignLCcpfWAsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiB0aHVua0FQSS5yZWplY3RXaXRoVmFsdWUoZS5yZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5jb25zdCBmaW5kUHJpbWFyeSA9IDxUIGV4dGVuZHMgVXNlclJlc3BvbnNlTWV0YWRhdGE+ICh2YWx1ZXM6IFRbXSA9IFtdKSA9PiB2YWx1ZXMuZmluZCgodmFsdWUpID0+IHZhbHVlLm1ldGFkYXRhLnByaW1hcnkpXHJcblxyXG5jb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3VzZXInLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogYnVpbGRlciA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0VXNlci5wZW5kaW5nLCAoc3RhdGU6IFBhcnRpYWw8VXNlcj4pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5sb2FkZWQgPSBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0VXNlci5mdWxmaWxsZWQsIChzdGF0ZTogUGFydGlhbDxVc2VyPiwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJSZXNwb25zZT4pID0+IHtcclxuICAgICAgY29uc3QgeyBiaXJ0aGRheXMsIGdlbmRlcnMsIG5hbWVzLCBwaG90b3MgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IG5hbWUgPSBmaW5kUHJpbWFyeShuYW1lcylcclxuICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICBzdGF0ZS5pZCA9IG5hbWUubWV0YWRhdGEuc291cmNlLmlkO1xyXG4gICAgICAgIHN0YXRlLm5hbWUgPSBuYW1lLmRpc3BsYXlOYW1lXHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUucGljdHVyZSA9IGZpbmRQcmltYXJ5KHBob3Rvcyk/LnVybFxyXG5cclxuICAgICAgY29uc3Qgc2V4ID0gZmluZFByaW1hcnkoZ2VuZGVycyk/LnZhbHVlXHJcbiAgICAgIGlmIChzZXgpIHtcclxuICAgICAgICBzdGF0ZS5zZXggPSBzZXggPz8gU2V4Lk1hblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBiaXJ0aGRheXNEYXRlID0gZmluZFByaW1hcnkoYmlydGhkYXlzKT8uZGF0ZVxyXG4gICAgICBpZiAoYmlydGhkYXlzRGF0ZSkge1xyXG4gICAgICAgIHN0YXRlLmJpcnRoZGF5cyA9ICtuZXcgRGF0ZShiaXJ0aGRheXNEYXRlLnllYXIsIGJpcnRoZGF5c0RhdGUubW9udGggLSAxLCBiaXJ0aGRheXNEYXRlLmRheSlcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUubG9hZGVkID0gdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBUT0RPOiBzaG93IGFuIGVycm9yXHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0VXNlci5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUubG9hZGVkID0gZmFsc2VcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IHsgZ2V0VXNlciB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9