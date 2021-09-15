webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdXNlci50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzZXgiLCJTZXgiLCJXb21hbiIsImJpcnRoZGF5cyIsIkRhdGUiLCJsb2NhbGVzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJsb2FkZWQiLCJnZXRVc2VySW5mbyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJfIiwidGh1bmtBUEkiLCJnYXBpIiwiY2xpZW50IiwicmVxdWVzdCIsIkdPT0dMRV9BUElfVVJMIiwicmVzdWx0IiwicmVqZWN0V2l0aFZhbHVlIiwiZ2V0VXNlciIsImZpZWxkcyIsIlBFT1BMRV9BUElfVVJMIiwiam9pbiIsImZpbmRQcmltYXJ5IiwidmFsdWVzIiwiZmluZCIsInZhbHVlIiwibWV0YWRhdGEiLCJwcmltYXJ5IiwidXNlclNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZ2VuZGVycyIsIm5hbWVzIiwicGhvdG9zIiwiaWQiLCJzb3VyY2UiLCJkaXNwbGF5TmFtZSIsInBpY3R1cmUiLCJ1cmwiLCJNYW4iLCJiaXJ0aGRheXNEYXRlIiwiZGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsInJlamVjdGVkIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFvQ0EsSUFBTUEsWUFBMkIsR0FBRztBQUNsQ0MsS0FBRyxFQUFFQyw4Q0FBRyxDQUFDQyxLQUR5QjtBQUVsQ0MsV0FBUyxFQUFFLENBQUMsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBRnNCO0FBR2xDQyxTQUFPLEVBQUUsSUFIeUI7QUFJbENDLFdBQVMsRUFBRSxLQUp1QjtBQUtsQ0MsT0FBSyxFQUFFLElBTDJCO0FB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Q0Q7QUFDRixLQVJEO0FBU0Q7QUEzQzJCLENBQUQsQ0FBN0I7QUE4Q0E7QUFFZXNCLHdFQUFTLENBQUMyQixPQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjk4MGM4ZWJjMDRhMWQzNWVmMzU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGUnXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCB7IEdPT0dMRV9BUElfVVJMLCBQRU9QTEVfQVBJX1VSTCB9IGZyb20gJy4uL2FwaSdcclxuaW1wb3J0IHsgU2V4IH0gZnJvbSAnLi4vdHlwZXMvc2V4J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIGV4dGVuZHMgQXBpRXJyb3Ige1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHBpY3R1cmU6IHN0cmluZyxcclxuICBiaXJ0aGRheXM6IG51bWJlcixcclxuICBsb2NhbGVzOiBzdHJpbmcsXHJcbiAgc2V4OiBTZXgsXHJcbiAgaXNMb2FkaW5nOiBib29sZWFuLFxyXG4gIGxvYWRlZDogYm9vbGVhbixcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXJSZXNwb25zZU1ldGFkYXRhIHtcclxuICBtZXRhZGF0YToge1xyXG4gICAgcHJpbWFyeTogYm9vbGVhbixcclxuICAgIHNvdXJjZToge1xyXG4gICAgICBpZDogc3RyaW5nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlclJlc3BvbnNlIHtcclxuICBsb2NhbGVzOiAoeyB2YWx1ZT86IHN0cmluZyB9ICYgVXNlclJlc3BvbnNlTWV0YWRhdGEpW10sXHJcbiAgbmFtZXM6ICh7IGRpc3BsYXlOYW1lPzogc3RyaW5nIH0gJiBVc2VyUmVzcG9uc2VNZXRhZGF0YSlbXSxcclxuICBwaG90b3M6ICh7IHVybD86IHN0cmluZyB9ICYgVXNlclJlc3BvbnNlTWV0YWRhdGEpW10sXHJcbiAgZ2VuZGVyczogKHsgdmFsdWU/OiBTZXggfSAmIFVzZXJSZXNwb25zZU1ldGFkYXRhKVtdLFxyXG4gIGJpcnRoZGF5czogKHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgeWVhcjogbnVtYmVyLFxyXG4gICAgICBtb250aDogbnVtYmVyLFxyXG4gICAgICBkYXk6IG51bWJlcixcclxuICAgIH1cclxuICB9ICYgVXNlclJlc3BvbnNlTWV0YWRhdGEpW10sXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUGFydGlhbDxVc2VyPiA9IHtcclxuICBzZXg6IFNleC5Xb21hbixcclxuICBiaXJ0aGRheXM6ICtuZXcgRGF0ZSgxOTg5LCA5LCAyOSksXHJcbiAgbG9jYWxlczogJ3VzJyxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIGxvYWRlZDogZmFsc2VcclxufVxyXG5cclxuY29uc3QgZ2V0VXNlckluZm8gPSBjcmVhdGVBc3luY1RodW5rPFVzZXIsXHJcbiAgdW5kZWZpbmVkLFxyXG4gIHsgcmVqZWN0VmFsdWU6IEFwaUVycm9yLCBzdGF0ZTogUm9vdFN0YXRlIH0+KFxyXG4gICd1c2VyL2dldCcsXHJcbiAgYXN5bmMgKF8sIHRodW5rQVBJKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgJ3BhdGgnOiBgJHtHT09HTEVfQVBJX1VSTH0vb2F1dGgyL3YxL3VzZXJpbmZvYCxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHRodW5rQVBJLnJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdClcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IGdldFVzZXIgPSBjcmVhdGVBc3luY1RodW5rPFVzZXJSZXNwb25zZSxcclxuICB1bmRlZmluZWQsXHJcbiAgeyByZWplY3RWYWx1ZTogQXBpRXJyb3IsIHN0YXRlOiBSb290U3RhdGUgfT4oXHJcbiAgJ3VzZXIvZ2V0JyxcclxuICBhc3luYyAoXywgdGh1bmtBUEkpID0+IHtcclxuICAgIGNvbnN0IGZpZWxkcyA9IFsnbmFtZXMnLCAncGhvdG9zJywgJ2JpcnRoZGF5cycsICdnZW5kZXJzJ11cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2FwaS5jbGllbnQucmVxdWVzdCh7XHJcbiAgICAgICAgJ3BhdGgnOiBgJHtQRU9QTEVfQVBJX1VSTH0vdjEvcGVvcGxlL21lP3BlcnNvbkZpZWxkcz0ke2ZpZWxkcy5qb2luKCcsJyl9YCxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHRodW5rQVBJLnJlamVjdFdpdGhWYWx1ZShlLnJlc3VsdClcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmNvbnN0IGZpbmRQcmltYXJ5ID0gPFQgZXh0ZW5kcyBVc2VyUmVzcG9uc2VNZXRhZGF0YT4gKHZhbHVlczogVFtdID0gW10pID0+IHZhbHVlcy5maW5kKCh2YWx1ZSkgPT4gdmFsdWUubWV0YWRhdGEucHJpbWFyeSlcclxuXHJcbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAndXNlcicsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiBidWlsZGVyID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRVc2VyLnBlbmRpbmcsIChzdGF0ZTogUGFydGlhbDxVc2VyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmxvYWRlZCA9IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRVc2VyLmZ1bGZpbGxlZCwgKHN0YXRlOiBQYXJ0aWFsPFVzZXI+LCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclJlc3BvbnNlPikgPT4ge1xyXG4gICAgICBjb25zdCB7IGJpcnRoZGF5cywgZ2VuZGVycywgbmFtZXMsIHBob3RvcyB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgbmFtZSA9IGZpbmRQcmltYXJ5KG5hbWVzKVxyXG4gICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgIHN0YXRlLmlkID0gbmFtZS5tZXRhZGF0YS5zb3VyY2UuaWQ7XHJcbiAgICAgICAgc3RhdGUubmFtZSA9IG5hbWUuZGlzcGxheU5hbWVcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5waWN0dXJlID0gZmluZFByaW1hcnkocGhvdG9zKT8udXJsXHJcblxyXG4gICAgICBjb25zdCBzZXggPSBmaW5kUHJpbWFyeShnZW5kZXJzKT8udmFsdWVcclxuICAgICAgaWYgKHNleCkge1xyXG4gICAgICAgIHN0YXRlLnNleCA9IHNleCA/PyBTZXguTWFuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJpcnRoZGF5c0RhdGUgPSBmaW5kUHJpbWFyeShiaXJ0aGRheXMpPy5kYXRlXHJcbiAgICAgIGlmIChiaXJ0aGRheXNEYXRlKSB7XHJcbiAgICAgICAgc3RhdGUuYmlydGhkYXlzID0gK25ldyBEYXRlKGJpcnRoZGF5c0RhdGUueWVhciwgYmlydGhkYXlzRGF0ZS5tb250aCAtIDEsIGJpcnRoZGF5c0RhdGUuZGF5KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5sb2FkZWQgPSB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFRPRE86IHNob3cgYW4gZXJyb3JcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRVc2VyLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5sb2FkZWQgPSBmYWxzZVxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkLmVycm9yXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgeyBnZXRVc2VyIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=