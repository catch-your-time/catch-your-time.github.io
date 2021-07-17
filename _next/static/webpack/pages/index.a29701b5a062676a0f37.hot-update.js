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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("meta", {
        name: "description",
        content: "This is a calendar. It starts from your birthday and draw years by weeks."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
            lineNumber: 115,
            columnNumber: 45
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
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
            lineNumber: 117,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_form_form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        initialValues: initialForms
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("div", {
        className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("a", {
          id: _constants_constants__WEBPACK_IMPORTED_MODULE_6__["TABLE_ANCHOR"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_table_table__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJhdXRoIiwiaXNTaWduZWRJbiIsImlzU2lnbmVkSW5GaXJlYmFzZSIsInVzZXIiLCJ1c2VySWQiLCJpZCIsImJpcnRoZGF5cyIsInNleCIsImxvY2FsZXMiLCJjYWxlbmRhciIsImNhbGVuZGFySWQiLCJjYWxlbmRhckVycm9yIiwiZXJyb3IiLCJjYWxlbmRhcklzTG9hZGluZyIsImlzTG9hZGluZyIsImNhbGVuZGFySWRQZXJzaXN0IiwiY2FsZW5kYXJJZFBlcnNpc3RMb2FkZWQiLCJsb2FkZWQiLCJjYWxlbmRhcklkRXJyb3IiLCJjYWxlbmRhcklkSXNMb2FkaW5nIiwibWFpblBhZ2UiLCJpc1Nob3dGb3JtIiwiY291bnRyeSIsInllYXJzQ29uZmlnIiwiaXNTaG93NTN0aFdlZWsiLCJpc1Nob3c1M3RoV2Vla0luaXQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJjb3VudHJ5SW5pdCIsInNldENvdW50cnlJbml0IiwiaW5pdGlhbEZvcm1zIiwidXNlRWZmZWN0IiwidXBkYXRlQ291bnRyeSIsImRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCIsImdldENhbGVuZGFySWQiLCJnZXRDYWxlbmRhciIsImNyZWF0ZUNhbGVuZGFyIiwic2V0Q2FsZW5kYXJJZCIsIm9uQ2xpY2tTaG93Rm9ybSIsInVzZUNhbGxiYWNrIiwidG9nZ2xlSXNTaG93Rm9ybSIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJoZWFkIiwiaDEiLCJUQUJMRV9BTkNIT1IiLCJidXR0b24iLCJncmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxzRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBeUJFLHNFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0FqSEQ7O0dBQU1sRCxJO1VBQ2FFLHVELEVBTWJDLDJELEVBT0FBLDJELEVBTUFBLDJELEVBT0FBLDJELEVBRTRCQSwyRCxFQUVMQSwyRDs7O0tBL0J2QkgsSTs7QUFtSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyOTcwMWI1YTA2MjY3NmEwZjM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXIgYXMgSDEsIEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzL3N0b3JlJ1xyXG5pbXBvcnQgeyBUQUJMRV9BTkNIT1IgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBSb290SW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlJ1xyXG5pbXBvcnQgeyBjcmVhdGVDYWxlbmRhciwgZ2V0Q2FsZW5kYXIgfSBmcm9tICcuLi9zdG9yZS9jYWxlbmRhcidcclxuaW1wb3J0IHsgZ2V0Q2FsZW5kYXJJZCwgc2V0Q2FsZW5kYXJJZCB9IGZyb20gJy4uL3N0b3JlL2NhbGVuZGFySWQnXHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9mb3JtJ1xyXG5pbXBvcnQgeyB0b2dnbGVJc1Nob3dGb3JtLCB1cGRhdGVDb3VudHJ5IH0gZnJvbSAnLi4vc3RvcmUvbWFpblBhZ2UnXHJcbmltcG9ydCB7IGRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCB9IGZyb20gJy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICAvLyBUT0RPOiBzaG93IGFsbCBlcnJvcnNcclxuICBjb25zdCB7XHJcbiAgICBpc1NpZ25lZEluLFxyXG4gICAgaXNTaWduZWRJbkZpcmViYXNlXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGF1dGggfSkgPT4gYXV0aClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IHVzZXJJZCxcclxuICAgIGJpcnRoZGF5cyxcclxuICAgIHNleCxcclxuICAgIGxvY2FsZXNcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgdXNlciB9KSA9PiB1c2VyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZDogY2FsZW5kYXJJZCxcclxuICAgIGVycm9yOiBjYWxlbmRhckVycm9yLFxyXG4gICAgaXNMb2FkaW5nOiBjYWxlbmRhcklzTG9hZGluZ1xyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBjYWxlbmRhciB9KSA9PiBjYWxlbmRhcilcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRQZXJzaXN0LFxyXG4gICAgbG9hZGVkOiBjYWxlbmRhcklkUGVyc2lzdExvYWRlZCxcclxuICAgIGVycm9yOiBjYWxlbmRhcklkRXJyb3IsXHJcbiAgICBpc0xvYWRpbmc6IGNhbGVuZGFySWRJc0xvYWRpbmdcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXJJZCB9KSA9PiBjYWxlbmRhcklkKVxyXG5cclxuICBjb25zdCB7IGlzU2hvd0Zvcm0sIGNvdW50cnkgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IG1haW5QYWdlIH0pID0+IG1haW5QYWdlKVxyXG5cclxuICBjb25zdCB7IGlzU2hvdzUzdGhXZWVrIH0gPSB1c2VBcHBTZWxlY3RvcigoeyB5ZWFyc0NvbmZpZyB9KSA9PiB5ZWFyc0NvbmZpZylcclxuXHJcbiAgY29uc3QgaXNTaG93NTN0aFdlZWtJbml0ID0gdXNlTWVtbygoKSA9PiBpc1Nob3c1M3RoV2VlaywgW10pXHJcblxyXG4gIC8vIFRPRE86INCy0YvQvdC10YHRgtC4INCyIGN1c3RvbUhvb2sg0L3QsNGH0LDQu9C+XHJcbiAgY29uc3QgW2NvdW50cnlJbml0LCBzZXRDb3VudHJ5SW5pdF0gPSB1c2VTdGF0ZShjb3VudHJ5KVxyXG5cclxuICBjb25zdCBpbml0aWFsRm9ybXMgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICBiaXJ0aGRheXM6IGJpcnRoZGF5cyxcclxuICAgIHNleDogc2V4LFxyXG4gICAgbG9jYWxlczogY291bnRyeUluaXQsXHJcbiAgICBpc1Nob3c1M3RoV2VlazogaXNTaG93NTN0aFdlZWtJbml0XHJcbiAgfSksIFtiaXJ0aGRheXMsIHNleCwgY291bnRyeUluaXQsIGlzU2hvdzUzdGhXZWVrSW5pdF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNvdW50cnkpIHtcclxuICAgICAgZGlzcGF0Y2godXBkYXRlQ291bnRyeShkZWZhdWx0U2VsZWN0ZWRDb3VudHJ5SWQpKVxyXG4gICAgfVxyXG4gIH0sIFtjb3VudHJ5XSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY291bnRyeUluaXQgJiYgY291bnRyeSkge1xyXG4gICAgICBzZXRDb3VudHJ5SW5pdChjb3VudHJ5KVxyXG4gICAgfVxyXG4gIH0sIFtjb3VudHJ5LCBjb3VudHJ5SW5pdF0pXHJcbiAgLy8gVE9ETzog0LLRi9C90LXRgdGC0Lgg0LIgY3VzdG9tSG9vayDQutC+0L3QtdGGXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcklkICYmIGlzU2lnbmVkSW5GaXJlYmFzZSkge1xyXG4gICAgICBkaXNwYXRjaChnZXRDYWxlbmRhcklkKHVzZXJJZCkpXHJcbiAgICB9XHJcbiAgfSwgW2lzU2lnbmVkSW5GaXJlYmFzZSwgdXNlcklkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FsZW5kYXJJZFBlcnNpc3RMb2FkZWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhbGVuZGFySWRQZXJzaXN0KSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldENhbGVuZGFyKGNhbGVuZGFySWRQZXJzaXN0KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZUNhbGVuZGFyKCkpXHJcbiAgICB9XHJcbiAgfSwgW2lzU2lnbmVkSW5GaXJlYmFzZSwgdXNlcklkLCBjYWxlbmRhcklkUGVyc2lzdCwgY2FsZW5kYXJJZFBlcnNpc3RMb2FkZWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhbGVuZGFySWQgJiYgdXNlcklkICYmIGlzU2lnbmVkSW5GaXJlYmFzZSAmJiBjYWxlbmRhcklkUGVyc2lzdExvYWRlZCAmJiAhY2FsZW5kYXJJZFBlcnNpc3QpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0Q2FsZW5kYXJJZCh7IHVzZXJJZCwgY2FsZW5kYXJJZCB9KSlcclxuICAgIH1cclxuICB9LCBbaXNTaWduZWRJbkZpcmViYXNlLCB1c2VySWQsIGNhbGVuZGFySWQsIGNhbGVuZGFySWRQZXJzaXN0LCBjYWxlbmRhcklkUGVyc2lzdExvYWRlZF0pXHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTaG93Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHRvZ2dsZUlzU2hvd0Zvcm0oKSksIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q2F0Y2ggeW91ciB0aW1lPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhpcyBpcyBhIGNhbGVuZGFyLiBJdCBzdGFydHMgZnJvbSB5b3VyIGJpcnRoZGF5IGFuZCBkcmF3IHllYXJzIGJ5IHdlZWtzLlwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIvPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgIDxIMSBhcz1cImgxXCIgY2xhc3NOYW1lPXtzdHlsZXMuaDF9PjxhIGhyZWY9e2AjJHtUQUJMRV9BTkNIT1J9YH0+Q2F0Y2ggeW91ciB0aW1lPC9hPjwvSDE+XHJcbiAgICAgICAgICA8QnV0dG9uIGFjdGl2ZT17aXNTaG93Rm9ybX0gb25DbGljaz17b25DbGlja1Nob3dGb3JtfSBpY29uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzZXR0aW5nXCIvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxGb3JtIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxGb3Jtc30vPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgPGEgaWQ9e1RBQkxFX0FOQ0hPUn0gLz5cclxuICAgICAgICAgIDxUYWJsZS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxGb290ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFJvb3RJbml0aWFsU3RhdGU+ID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICBwYWdlOiAnbWFpbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9