webpackHotUpdate_N_E("pages/life-expectancy",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdXNlci50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzZXgiLCJTZXgiLCJXb21hbiIsImJpcnRoZGF5cyIsIkRhdGUiLCJsb2NhbGVzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJsb2FkZWQiLCJnZXRVc2VySW5mbyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJfIiwidGh1bmtBUEkiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsIkdPT0dMRV9BUElfVVJMIiwicmVzdWx0IiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0VXNlciIsImZpZWxkcyIsIlBFT1BMRV9BUElfVVJMIiwiam9pbiIsImZpbmRQcmltYXJ5IiwidmFsdWVzIiwiZmluZCIsInZhbHVlIiwibWV0YWRhdGEiLCJwcmltYXJ5IiwidXNlclNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZ2VuZGVycyIsIm5hbWVzIiwicGhvdG9zIiwiaWQiLCJzb3VyY2UiLCJkaXNwbGF5TmFtZSIsInBpY3R1cmUiLCJ1cmwiLCJNYW4iLCJiaXJ0aGRheXNEYXRlIiwiZGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsInJlamVjdGVkIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFvQ0EsSUFBTUEsWUFBMkIsR0FBRztBQUNsQ0MsS0FBRyxFQUFFQyw4Q0FBRyxDQUFDQyxLQUR5QjtBQUVsQ0MsV0FBUyxFQUFFLENBQUMsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBRnNCO0FBR2xDQyxTQUFPLEVBQUUsSUFIeUI7QUFJbENDLFdBQVMsRUFBRSxLQUp1QjtBQUtsQ0MsT0FBSyxFQUFFLElBTDJCO0FB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Q0Q7QUFDRixLQVJEO0FBU0Q7QUEzQzJCLENBQUQsQ0FBN0I7QUE4Q0E7QUFFZXNCLHdFQUFTLENBQUMyQixPQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWZlLWV4cGVjdGFuY3kuOTgwYzhlYmMwNGExZDM1ZWYzNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgQXBpRXJyb3IgfSBmcm9tICcuLi90eXBlcy9zdGF0ZSdcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi9zdG9yZSdcclxuaW1wb3J0IHsgR09PR0xFX0FQSV9VUkwsIFBFT1BMRV9BUElfVVJMIH0gZnJvbSAnLi4vYXBpJ1xyXG5pbXBvcnQgeyBTZXggfSBmcm9tICcuLi90eXBlcy9zZXgnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIgZXh0ZW5kcyBBcGlFcnJvciB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcGljdHVyZTogc3RyaW5nLFxyXG4gIGJpcnRoZGF5czogbnVtYmVyLFxyXG4gIGxvY2FsZXM6IHN0cmluZyxcclxuICBzZXg6IFNleCxcclxuICBpc0xvYWRpbmc6IGJvb2xlYW4sXHJcbiAgbG9hZGVkOiBib29sZWFuLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlclJlc3BvbnNlTWV0YWRhdGEge1xyXG4gIG1ldGFkYXRhOiB7XHJcbiAgICBwcmltYXJ5OiBib29sZWFuLFxyXG4gICAgc291cmNlOiB7XHJcbiAgICAgIGlkOiBzdHJpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBVc2VyUmVzcG9uc2Uge1xyXG4gIGxvY2FsZXM6ICh7IHZhbHVlPzogc3RyaW5nIH0gJiBVc2VyUmVzcG9uc2VNZXRhZGF0YSlbXSxcclxuICBuYW1lczogKHsgZGlzcGxheU5hbWU/OiBzdHJpbmcgfSAmIFVzZXJSZXNwb25zZU1ldGFkYXRhKVtdLFxyXG4gIHBob3RvczogKHsgdXJsPzogc3RyaW5nIH0gJiBVc2VyUmVzcG9uc2VNZXRhZGF0YSlbXSxcclxuICBnZW5kZXJzOiAoeyB2YWx1ZT86IFNleCB9ICYgVXNlclJlc3BvbnNlTWV0YWRhdGEpW10sXHJcbiAgYmlydGhkYXlzOiAoe1xyXG4gICAgZGF0ZToge1xyXG4gICAgICB5ZWFyOiBudW1iZXIsXHJcbiAgICAgIG1vbnRoOiBudW1iZXIsXHJcbiAgICAgIGRheTogbnVtYmVyLFxyXG4gICAgfVxyXG4gIH0gJiBVc2VyUmVzcG9uc2VNZXRhZGF0YSlbXSxcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQYXJ0aWFsPFVzZXI+ID0ge1xyXG4gIHNleDogU2V4LldvbWFuLFxyXG4gIGJpcnRoZGF5czogK25ldyBEYXRlKDE5ODksIDksIDI5KSxcclxuICBsb2NhbGVzOiAndXMnLFxyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgbG9hZGVkOiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBnZXRVc2VySW5mbyA9IGNyZWF0ZUFzeW5jVGh1bms8VXNlcixcclxuICB1bmRlZmluZWQsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ3VzZXIvZ2V0JyxcclxuICBhc3luYyAoXywgdGh1bmtBUEkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICAncGF0aCc6IGAke0dPT0dMRV9BUElfVVJMfS9vYXV0aDIvdjEvdXNlcmluZm9gLFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gdGh1bmtBUEkucmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZ2V0VXNlciA9IGNyZWF0ZUFzeW5jVGh1bms8VXNlclJlc3BvbnNlLFxyXG4gIHVuZGVmaW5lZCxcclxuICB7IHJlamVjdFZhbHVlOiBBcGlFcnJvciwgc3RhdGU6IFJvb3RTdGF0ZSB9PihcclxuICAndXNlci9nZXQnLFxyXG4gIGFzeW5jIChfLCB0aHVua0FQSSkgPT4ge1xyXG4gICAgY29uc3QgZmllbGRzID0gWyduYW1lcycsICdwaG90b3MnLCAnYmlydGhkYXlzJywgJ2dlbmRlcnMnXVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcclxuICAgICAgICAncGF0aCc6IGAke1BFT1BMRV9BUElfVVJMfS92MS9wZW9wbGUvbWU/cGVyc29uRmllbGRzPSR7ZmllbGRzLmpvaW4oJywnKX1gLFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gdGh1bmtBUEkucmVqZWN0V2l0aFZhbHVlKGUucmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZmluZFByaW1hcnkgPSA8VCBleHRlbmRzIFVzZXJSZXNwb25zZU1ldGFkYXRhPiAodmFsdWVzOiBUW10gPSBbXSkgPT4gdmFsdWVzLmZpbmQoKHZhbHVlKSA9PiB2YWx1ZS5tZXRhZGF0YS5wcmltYXJ5KVxyXG5cclxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICd1c2VyJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IGJ1aWxkZXIgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldFVzZXIucGVuZGluZywgKHN0YXRlOiBQYXJ0aWFsPFVzZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgICAgc3RhdGUubG9hZGVkID0gZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldFVzZXIuZnVsZmlsbGVkLCAoc3RhdGU6IFBhcnRpYWw8VXNlcj4sIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxVc2VyUmVzcG9uc2U+KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYmlydGhkYXlzLCBnZW5kZXJzLCBuYW1lcywgcGhvdG9zIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBuYW1lID0gZmluZFByaW1hcnkobmFtZXMpXHJcbiAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgc3RhdGUuaWQgPSBuYW1lLm1ldGFkYXRhLnNvdXJjZS5pZDtcclxuICAgICAgICBzdGF0ZS5uYW1lID0gbmFtZS5kaXNwbGF5TmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlLnBpY3R1cmUgPSBmaW5kUHJpbWFyeShwaG90b3MpPy51cmxcclxuXHJcbiAgICAgIGNvbnN0IHNleCA9IGZpbmRQcmltYXJ5KGdlbmRlcnMpPy52YWx1ZVxyXG4gICAgICBpZiAoc2V4KSB7XHJcbiAgICAgICAgc3RhdGUuc2V4ID0gc2V4ID8/IFNleC5NYW5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYmlydGhkYXlzRGF0ZSA9IGZpbmRQcmltYXJ5KGJpcnRoZGF5cyk/LmRhdGVcclxuICAgICAgaWYgKGJpcnRoZGF5c0RhdGUpIHtcclxuICAgICAgICBzdGF0ZS5iaXJ0aGRheXMgPSArbmV3IERhdGUoYmlydGhkYXlzRGF0ZS55ZWFyLCBiaXJ0aGRheXNEYXRlLm1vbnRoIC0gMSwgYmlydGhkYXlzRGF0ZS5kYXkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmxvYWRlZCA9IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gVE9ETzogc2hvdyBhbiBlcnJvclxyXG4gICAgYnVpbGRlci5hZGRDYXNlKGdldFVzZXIucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmxvYWRlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCB7IGdldFVzZXIgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==