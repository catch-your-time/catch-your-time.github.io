webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Layout.module.scss */ "./styles/Layout.module.scss");
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/store */ "./hooks/store.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.tsx");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/table/table */ "./components/table/table.tsx");
/* harmony import */ var _store_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/calendar */ "./store/calendar.ts");
/* harmony import */ var _store_calendarId__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/calendarId */ "./store/calendarId.ts");
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/form/form */ "./components/form/form.tsx");
/* harmony import */ var _store_mainPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/mainPage */ "./store/mainPage.ts");
/* harmony import */ var _store_averageLifeYears__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/averageLifeYears */ "./store/averageLifeYears.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


















var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // TODO: show all errors

  var _useAppSelector = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (_ref) {
    var auth = _ref.auth;
    return auth;
  }),
      isSignedIn = _useAppSelector.isSignedIn,
      isSignedInFirebase = _useAppSelector.isSignedInFirebase;

  var _useAppSelector2 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (_ref2) {
    var user = _ref2.user;
    return user;
  }),
      userId = _useAppSelector2.id,
      birthdays = _useAppSelector2.birthdays,
      sex = _useAppSelector2.sex,
      locales = _useAppSelector2.locales;

  var _useAppSelector3 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (_ref3) {
    var calendar = _ref3.calendar;
    return calendar;
  }),
      calendarId = _useAppSelector3.id,
      calendarError = _useAppSelector3.error,
      calendarIsLoading = _useAppSelector3.isLoading;

  var _useAppSelector4 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (_ref4) {
    var calendarId = _ref4.calendarId;
    return calendarId;
  }),
      calendarIdPersist = _useAppSelector4.id,
      calendarIdPersistLoaded = _useAppSelector4.loaded,
      calendarIdError = _useAppSelector4.error,
      calendarIdIsLoading = _useAppSelector4.isLoading;

  var _useAppSelector5 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (_ref5) {
    var mainPage = _ref5.mainPage;
    return mainPage;
  }),
      isShowForm = _useAppSelector5.isShowForm,
      country = _useAppSelector5.country;

  var _useAppSelector6 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (_ref6) {
    var yearsConfig = _ref6.yearsConfig;
    return yearsConfig;
  }),
      isShow53thWeek = _useAppSelector6.isShow53thWeek;

  var isShow53thWeekInit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return isShow53thWeek;
  }, []); // TODO: вынести в customHook начало

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(country),
      countryInit = _useState[0],
      setCountryInit = _useState[1];

  var initialForms = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      birthdays: birthdays,
      sex: sex,
      locales: countryInit,
      isShow53thWeek: isShow53thWeekInit
    };
  }, [birthdays, sex, countryInit, isShow53thWeekInit]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!country) {
      dispatch(Object(_store_mainPage__WEBPACK_IMPORTED_MODULE_13__["updateCountry"])(_store_averageLifeYears__WEBPACK_IMPORTED_MODULE_14__["defaultSelectedCountryId"]));
    }
  }, [country]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!countryInit && country) {
      setCountryInit(country);
    }
  }, [country, countryInit]); // TODO: вынести в customHook конец

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (userId && isSignedInFirebase) {
      dispatch(Object(_store_calendarId__WEBPACK_IMPORTED_MODULE_11__["getCalendarId"])(userId));
    }
  }, [isSignedInFirebase, userId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!calendarIdPersistLoaded) {
      return;
    }

    if (calendarIdPersist) {
      dispatch(Object(_store_calendar__WEBPACK_IMPORTED_MODULE_10__["getCalendar"])(calendarIdPersist));
    } else {
      dispatch(Object(_store_calendar__WEBPACK_IMPORTED_MODULE_10__["createCalendar"])());
    }
  }, [isSignedInFirebase, userId, calendarIdPersist, calendarIdPersistLoaded]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (calendarId && userId && isSignedInFirebase && calendarIdPersistLoaded && !calendarIdPersist) {
      dispatch(Object(_store_calendarId__WEBPACK_IMPORTED_MODULE_11__["setCalendarId"])({
        userId: userId,
        calendarId: calendarId
      }));
    }
  }, [isSignedInFirebase, userId, calendarId, calendarIdPersist, calendarIdPersistLoaded]);
  var onClickShowForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(_store_mainPage__WEBPACK_IMPORTED_MODULE_13__["toggleIsShowForm"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("div", {
    className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("title", {
        children: "Catch your time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("main", {
      className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("div", {
        className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.head,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
          as: "h1",
          className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("a", {
            href: "#".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["TABLE_ANCHOR"]),
            children: "Catch your time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 45
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          active: isShowForm,
          onClick: onClickShowForm,
          icon: true,
          className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
            name: "setting"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("sup", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
            color: "teal",
            circular: true,
            size: "small",
            children: "pre-alpha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 16
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_form_form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        initialValues: initialForms
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("div", {
        className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_table_table__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, _this);
};

_s(Home, "9PSV8kDVIz3ZezI13D0RqvypXiY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], _hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"]];
});

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJhdXRoIiwiaXNTaWduZWRJbiIsImlzU2lnbmVkSW5GaXJlYmFzZSIsInVzZXIiLCJ1c2VySWQiLCJpZCIsImJpcnRoZGF5cyIsInNleCIsImxvY2FsZXMiLCJjYWxlbmRhciIsImNhbGVuZGFySWQiLCJjYWxlbmRhckVycm9yIiwiZXJyb3IiLCJjYWxlbmRhcklzTG9hZGluZyIsImlzTG9hZGluZyIsImNhbGVuZGFySWRQZXJzaXN0IiwiY2FsZW5kYXJJZFBlcnNpc3RMb2FkZWQiLCJsb2FkZWQiLCJjYWxlbmRhcklkRXJyb3IiLCJjYWxlbmRhcklkSXNMb2FkaW5nIiwibWFpblBhZ2UiLCJpc1Nob3dGb3JtIiwiY291bnRyeSIsInllYXJzQ29uZmlnIiwiaXNTaG93NTN0aFdlZWsiLCJpc1Nob3c1M3RoV2Vla0luaXQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJjb3VudHJ5SW5pdCIsInNldENvdW50cnlJbml0IiwiaW5pdGlhbEZvcm1zIiwidXNlRWZmZWN0IiwidXBkYXRlQ291bnRyeSIsImRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCIsImdldENhbGVuZGFySWQiLCJnZXRDYWxlbmRhciIsImNyZWF0ZUNhbGVuZGFyIiwic2V0Q2FsZW5kYXJJZCIsIm9uQ2xpY2tTaG93Rm9ybSIsInVzZUNhbGxiYWNrIiwidG9nZ2xlSXNTaG93Rm9ybSIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJoZWFkIiwiaDEiLCJUQUJMRV9BTkNIT1IiLCJidXR0b24iLCJncmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VEYsZUFXRTtBQUFLLGlCQUFTLEVBQUVXLGlFQUFNLENBQUNPLElBQXZCO0FBQUEsK0JBQ0Usc0VBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQXdCRSxzRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBaEhEOztHQUFNcEQsSTtVQUNhRSx1RCxFQU1iQywyRCxFQU9BQSwyRCxFQU1BQSwyRCxFQU9BQSwyRCxFQUU0QkEsMkQsRUFFTEEsMkQ7OztLQS9CdkJILEk7O0FBa0hTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NWZlOTMwZGE3ZmRhY2Q4Yjc0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyIGFzIEgxLCBJY29uLCBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3Mvc3RvcmUnXHJcbmltcG9ydCB7IFRBQkxFX0FOQ0hPUiB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXHJcbmltcG9ydCB7IFJvb3RJbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUnXHJcbmltcG9ydCB7IGNyZWF0ZUNhbGVuZGFyLCBnZXRDYWxlbmRhciB9IGZyb20gJy4uL3N0b3JlL2NhbGVuZGFyJ1xyXG5pbXBvcnQgeyBnZXRDYWxlbmRhcklkLCBzZXRDYWxlbmRhcklkIH0gZnJvbSAnLi4vc3RvcmUvY2FsZW5kYXJJZCdcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Zvcm0nXHJcbmltcG9ydCB7IHRvZ2dsZUlzU2hvd0Zvcm0sIHVwZGF0ZUNvdW50cnkgfSBmcm9tICcuLi9zdG9yZS9tYWluUGFnZSdcclxuaW1wb3J0IHsgZGVmYXVsdFNlbGVjdGVkQ291bnRyeUlkIH0gZnJvbSAnLi4vc3RvcmUvYXZlcmFnZUxpZmVZZWFycydcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIC8vIFRPRE86IHNob3cgYWxsIGVycm9yc1xyXG4gIGNvbnN0IHtcclxuICAgIGlzU2lnbmVkSW4sXHJcbiAgICBpc1NpZ25lZEluRmlyZWJhc2VcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgYXV0aCB9KSA9PiBhdXRoKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZDogdXNlcklkLFxyXG4gICAgYmlydGhkYXlzLFxyXG4gICAgc2V4LFxyXG4gICAgbG9jYWxlc1xyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyB1c2VyIH0pID0+IHVzZXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkOiBjYWxlbmRhcklkLFxyXG4gICAgZXJyb3I6IGNhbGVuZGFyRXJyb3IsXHJcbiAgICBpc0xvYWRpbmc6IGNhbGVuZGFySXNMb2FkaW5nXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGNhbGVuZGFyIH0pID0+IGNhbGVuZGFyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZDogY2FsZW5kYXJJZFBlcnNpc3QsXHJcbiAgICBsb2FkZWQ6IGNhbGVuZGFySWRQZXJzaXN0TG9hZGVkLFxyXG4gICAgZXJyb3I6IGNhbGVuZGFySWRFcnJvcixcclxuICAgIGlzTG9hZGluZzogY2FsZW5kYXJJZElzTG9hZGluZ1xyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBjYWxlbmRhcklkIH0pID0+IGNhbGVuZGFySWQpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93Rm9ybSwgY291bnRyeSB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgbWFpblBhZ2UgfSkgPT4gbWFpblBhZ2UpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93NTN0aFdlZWsgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IHllYXJzQ29uZmlnIH0pID0+IHllYXJzQ29uZmlnKVxyXG5cclxuICBjb25zdCBpc1Nob3c1M3RoV2Vla0luaXQgPSB1c2VNZW1vKCgpID0+IGlzU2hvdzUzdGhXZWVrLCBbXSlcclxuXHJcbiAgLy8gVE9ETzog0LLRi9C90LXRgdGC0Lgg0LIgY3VzdG9tSG9vayDQvdCw0YfQsNC70L5cclxuICBjb25zdCBbY291bnRyeUluaXQsIHNldENvdW50cnlJbml0XSA9IHVzZVN0YXRlKGNvdW50cnkpXHJcblxyXG4gIGNvbnN0IGluaXRpYWxGb3JtcyA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgIGJpcnRoZGF5czogYmlydGhkYXlzLFxyXG4gICAgc2V4OiBzZXgsXHJcbiAgICBsb2NhbGVzOiBjb3VudHJ5SW5pdCxcclxuICAgIGlzU2hvdzUzdGhXZWVrOiBpc1Nob3c1M3RoV2Vla0luaXRcclxuICB9KSwgW2JpcnRoZGF5cywgc2V4LCBjb3VudHJ5SW5pdCwgaXNTaG93NTN0aFdlZWtJbml0XSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY291bnRyeSkge1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVDb3VudHJ5KGRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCkpXHJcbiAgICB9XHJcbiAgfSwgW2NvdW50cnldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjb3VudHJ5SW5pdCAmJiBjb3VudHJ5KSB7XHJcbiAgICAgIHNldENvdW50cnlJbml0KGNvdW50cnkpXHJcbiAgICB9XHJcbiAgfSwgW2NvdW50cnksIGNvdW50cnlJbml0XSlcclxuICAvLyBUT0RPOiDQstGL0L3QtdGB0YLQuCDQsiBjdXN0b21Ib29rINC60L7QvdC10YZcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VySWQgJiYgaXNTaWduZWRJbkZpcmViYXNlKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldENhbGVuZGFySWQodXNlcklkKSlcclxuICAgIH1cclxuICB9LCBbaXNTaWduZWRJbkZpcmViYXNlLCB1c2VySWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjYWxlbmRhcklkUGVyc2lzdExvYWRlZCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FsZW5kYXJJZFBlcnNpc3QpIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0Q2FsZW5kYXIoY2FsZW5kYXJJZFBlcnNpc3QpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goY3JlYXRlQ2FsZW5kYXIoKSlcclxuICAgIH1cclxuICB9LCBbaXNTaWduZWRJbkZpcmViYXNlLCB1c2VySWQsIGNhbGVuZGFySWRQZXJzaXN0LCBjYWxlbmRhcklkUGVyc2lzdExvYWRlZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCAmJiB1c2VySWQgJiYgaXNTaWduZWRJbkZpcmViYXNlICYmIGNhbGVuZGFySWRQZXJzaXN0TG9hZGVkICYmICFjYWxlbmRhcklkUGVyc2lzdCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRDYWxlbmRhcklkKHsgdXNlcklkLCBjYWxlbmRhcklkIH0pKVxyXG4gICAgfVxyXG4gIH0sIFtpc1NpZ25lZEluRmlyZWJhc2UsIHVzZXJJZCwgY2FsZW5kYXJJZCwgY2FsZW5kYXJJZFBlcnNpc3QsIGNhbGVuZGFySWRQZXJzaXN0TG9hZGVkXSlcclxuXHJcbiAgY29uc3Qgb25DbGlja1Nob3dGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2godG9nZ2xlSXNTaG93Rm9ybSgpKSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DYXRjaCB5b3VyIHRpbWU8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyLz5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICA8SDEgYXM9XCJoMVwiIGNsYXNzTmFtZT17c3R5bGVzLmgxfT48YSBocmVmPXtgIyR7VEFCTEVfQU5DSE9SfWB9PkNhdGNoIHlvdXIgdGltZTwvYT48L0gxPlxyXG4gICAgICAgICAgPEJ1dHRvbiBhY3RpdmU9e2lzU2hvd0Zvcm19IG9uQ2xpY2s9e29uQ2xpY2tTaG93Rm9ybX0gaWNvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwic2V0dGluZ1wiLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPHN1cD48TGFiZWwgY29sb3I9XCJ0ZWFsXCIgY2lyY3VsYXIgc2l6ZT1cInNtYWxsXCI+cHJlLWFscGhhPC9MYWJlbD48L3N1cD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvcm0gaW5pdGlhbFZhbHVlcz17aW5pdGlhbEZvcm1zfS8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8VGFibGUvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxSb290SW5pdGlhbFN0YXRlPiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgcGFnZTogJ21haW4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==