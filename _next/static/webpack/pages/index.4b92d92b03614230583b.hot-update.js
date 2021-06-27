webpackHotUpdate_N_E("pages/index",{

/***/ "./components/table/table.tsx":
/*!************************************!*\
  !*** ./components/table/table.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.module.scss */ "./components/table/table.module.scss");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_table_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./constants/constants.ts");
/* harmony import */ var _store_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/event */ "./store/event.ts");
/* harmony import */ var _services_findEventsByDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/findEventsByDate */ "./services/findEventsByDate.ts");
/* harmony import */ var _event_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event/event */ "./components/event/event.tsx");
/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/store */ "./hooks/store.ts");
/* harmony import */ var _store_years__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/years */ "./store/years.ts");
/* harmony import */ var _week_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../week/week */ "./components/week/week.tsx");
/* harmony import */ var _weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../weekHead/weekHead */ "./components/weekHead/weekHead.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\AFedotov\\projects\\catch-my-time\\components\\table\\table.tsx",
    _this = undefined,
    _s = $RefreshSig$();















var REMINDER_DATE = '2021-01-01';

var Table = function Table() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useAppSelector = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(function (_ref) {
    var yearsConfig = _ref.yearsConfig;
    return yearsConfig;
  }),
      isShow53thWeek = _useAppSelector.isShow53thWeek;

  var years = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(_store_years__WEBPACK_IMPORTED_MODULE_10__["getYears"].bind(null, isShow53thWeek));

  var _useAppSelector2 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(function (_ref2) {
    var calendar = _ref2.calendar;
    return calendar;
  }),
      calendarId = _useAppSelector2.id;

  var _useAppSelector3 = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"])(function (_ref3) {
    var event = _ref3.event;
    return event;
  }),
      byId = _useAppSelector3.byId,
      isLoaded = _useAppSelector3.isLoaded;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (calendarId) {
      dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["getEvents"])());
    }
  }, [calendarId]);
  var findEvents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_services_findEventsByDate__WEBPACK_IMPORTED_MODULE_7__["default"])(byId);
  }, [byId]);
  var reminder = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return findEvents(REMINDER_DATE, REMINDER_DATE);
  }, [byId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isLoaded || reminder) {
      return;
    }

    dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_6__["createReminderEvent"])({
      summary: 'Создать цель на следующую неделю',
      description: 'Это напоминание, чтобы Вы не забыли установить цель на следующую неделю.',
      startTime: "".concat(REMINDER_DATE, "T15:00:00"),
      endTime: "".concat(REMINDER_DATE, "T17:00:00"),
      // TODO: вынести в конфиг когда напоминать, когда начинается неделя
      recurrence: ['RRULE:FREQ=WEEKLY;BYDAY=SU;WKST=MO'],
      reminders: [{
        method: 'email',
        minutes: 60 * 4
      }, {
        method: 'popup',
        minutes: 60 * 2
      }]
    }));
  }, [isLoaded, reminder]);
  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selectedWeek = _useState[0],
      setSelectedWeek = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    document.documentElement.style.setProperty('--count-week', String(isShow53thWeek ? _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"] + 1 : _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]));
  }, [isShow53thWeek]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
      weeksInYear: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }, _this), years[year].map(function (week, weekIndex) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_week_week__WEBPACK_IMPORTED_MODULE_11__["default"], {
            id: week,
            findEvents: findEvents,
            selectedWeek: selectedWeek,
            setSelectedWeek: setSelectedWeek,
            context: contextRef
          }, week, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
      context: contextRef,
      open: !!selectedWeek,
      children: selectedWeek && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_event_event__WEBPACK_IMPORTED_MODULE_8__["default"], {
        week: selectedWeek,
        initialValues: findEvents(selectedWeek.startDate, selectedWeek.endDate)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, _this);
};

_s(Table, "XvgShMcmuT8GZCvgc0zOcRG4/10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"], _hooks_store__WEBPACK_IMPORTED_MODULE_9__["useAppSelector"]];
});

_c = Table;
/* harmony default export */ __webpack_exports__["default"] = (Table);

var _c;

$RefreshReg$(_c, "Table");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ "./components/footer.tsx");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/table/table */ "./components/table/table.tsx");
/* harmony import */ var _store_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/calendar */ "./store/calendar.ts");
/* harmony import */ var _store_calendarId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/calendarId */ "./store/calendarId.ts");
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/form/form */ "./components/form/form.tsx");
/* harmony import */ var _store_mainPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/mainPage */ "./store/mainPage.ts");
/* harmony import */ var _store_averageLifeYears__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/averageLifeYears */ "./store/averageLifeYears.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
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
      email = _useAppSelector2.email,
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
      calendarIdLoaded = _useAppSelector4.loaded,
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
      dispatch(Object(_store_mainPage__WEBPACK_IMPORTED_MODULE_12__["updateCountry"])(_store_averageLifeYears__WEBPACK_IMPORTED_MODULE_13__["defaultSelectedCountryId"]));
    }
  }, [country]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!countryInit && country) {
      setCountryInit(country);
    }
  }, [country, countryInit]); // TODO: вынести в customHook конец

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (email && isSignedInFirebase) {
      dispatch(Object(_store_calendarId__WEBPACK_IMPORTED_MODULE_10__["getCalendarId"])(email));
    }
  }, [isSignedInFirebase, email]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!calendarIdLoaded) {
      return;
    }

    if (calendarIdPersist) {
      dispatch(Object(_store_calendar__WEBPACK_IMPORTED_MODULE_9__["getCalendar"])(calendarIdPersist));
    } else {
      dispatch(Object(_store_calendar__WEBPACK_IMPORTED_MODULE_9__["createCalendar"])());
    }
  }, [isSignedInFirebase, email, calendarIdPersist, calendarIdLoaded]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (calendarId && email && isSignedInFirebase && calendarIdLoaded && !calendarIdPersist) {
      dispatch(Object(_store_calendarId__WEBPACK_IMPORTED_MODULE_10__["setCalendarId"])({
        email: email,
        calendarId: calendarId
      }));
    }
  }, [isSignedInFirebase, email, calendarId, calendarIdPersist, calendarIdLoaded]);
  var onClickShowForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(_store_mainPage__WEBPACK_IMPORTED_MODULE_12__["toggleIsShowForm"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
    className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("title", {
        children: "Catch your time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("link", {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("main", {
      className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
        className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.head,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
          as: "h1",
          className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h1,
          children: "Catch your time"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          active: isShowForm,
          onClick: onClickShowForm,
          icon: true,
          className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("sup", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_form_form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        initialValues: initialForms
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
        className: _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_table_table__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
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

_s(Home, "ZBlee6zW+P0iAjovbhccurFnJN0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJSRU1JTkRFUl9EQVRFIiwiVGFibGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ5ZWFyc0NvbmZpZyIsImlzU2hvdzUzdGhXZWVrIiwieWVhcnMiLCJnZXRZZWFycyIsImJpbmQiLCJjYWxlbmRhciIsImNhbGVuZGFySWQiLCJpZCIsImV2ZW50IiwiYnlJZCIsImlzTG9hZGVkIiwidXNlRWZmZWN0IiwiZ2V0RXZlbnRzIiwiZmluZEV2ZW50cyIsInVzZU1lbW8iLCJmaW5kRXZlbnRzQnlEYXRlIiwicmVtaW5kZXIiLCJjcmVhdGVSZW1pbmRlckV2ZW50Iiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInJlY3VycmVuY2UiLCJyZW1pbmRlcnMiLCJtZXRob2QiLCJtaW51dGVzIiwiY29udGV4dFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwic2VsZWN0ZWRXZWVrIiwic2V0U2VsZWN0ZWRXZWVrIiwidXNlTGF5b3V0RWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiU3RyaW5nIiwiQ09VTlRfV0VFSyIsInN0eWxlcyIsInRhYmxlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInllYXIiLCJjbiIsIndlZWsiLCJ3ZWVrSGVhZCIsInllYXJIZWFkIiwid2Vla0luZGV4Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIkhvbWUiLCJhdXRoIiwiaXNTaWduZWRJbiIsImlzU2lnbmVkSW5GaXJlYmFzZSIsInVzZXIiLCJlbWFpbCIsImJpcnRoZGF5cyIsInNleCIsImxvY2FsZXMiLCJjYWxlbmRhckVycm9yIiwiZXJyb3IiLCJjYWxlbmRhcklzTG9hZGluZyIsImlzTG9hZGluZyIsImNhbGVuZGFySWRQZXJzaXN0IiwiY2FsZW5kYXJJZExvYWRlZCIsImxvYWRlZCIsImNhbGVuZGFySWRFcnJvciIsImNhbGVuZGFySWRJc0xvYWRpbmciLCJtYWluUGFnZSIsImlzU2hvd0Zvcm0iLCJjb3VudHJ5IiwiaXNTaG93NTN0aFdlZWtJbml0IiwiY291bnRyeUluaXQiLCJzZXRDb3VudHJ5SW5pdCIsImluaXRpYWxGb3JtcyIsInVwZGF0ZUNvdW50cnkiLCJkZWZhdWx0U2VsZWN0ZWRDb3VudHJ5SWQiLCJnZXRDYWxlbmRhcklkIiwiZ2V0Q2FsZW5kYXIiLCJjcmVhdGVDYWxlbmRhciIsInNldENhbGVuZGFySWQiLCJvbkNsaWNrU2hvd0Zvcm0iLCJ1c2VDYWxsYmFjayIsInRvZ2dsZUlzU2hvd0Zvcm0iLCJjb250YWluZXIiLCJtYWluIiwiaGVhZCIsImgxIiwiYnV0dG9uIiwiZ3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFlBQXRCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0Isd0JBR1NDLG1FQUFjLENBQUM7QUFBQSxRQUFHQyxXQUFILFFBQUdBLFdBQUg7QUFBQSxXQUFxQkEsV0FBckI7QUFBQSxHQUFELENBSHZCO0FBQUEsTUFHVkMsY0FIVSxtQkFHVkEsY0FIVTs7QUFJbEIsTUFBTUMsS0FBSyxHQUFHSCxtRUFBYyxDQUFDSSxzREFBUSxDQUFDQyxJQUFULENBQWMsSUFBZCxFQUFvQkgsY0FBcEIsQ0FBRCxDQUE1Qjs7QUFKa0IseUJBUWRGLG1FQUFjLENBQUM7QUFBQSxRQUFHTSxRQUFILFNBQUdBLFFBQUg7QUFBQSxXQUFrQkEsUUFBbEI7QUFBQSxHQUFELENBUkE7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQWhIRDs7R0FBTXZDLEk7VUFDYXJELHVELEVBTWJDLDJELEVBT0FBLDJELEVBTUFBLDJELEVBT0FBLDJELEVBRTRCQSwyRCxFQUVMQSwyRDs7O0tBL0J2Qm9ELEk7O0FBa0hTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YjkyZDkyYjAzNjE0MjMwNTgzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXV0YWJsZVJlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWJsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ09VTlRfV0VFSyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNyZWF0ZVJlbWluZGVyRXZlbnQsIGdldEV2ZW50cyB9IGZyb20gJy4uLy4uL3N0b3JlL2V2ZW50J1xyXG5pbXBvcnQgZmluZEV2ZW50c0J5RGF0ZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maW5kRXZlbnRzQnlEYXRlJ1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vZXZlbnQvZXZlbnQnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3Mvc3RvcmUnXHJcbmltcG9ydCB7IGdldFllYXJzLCBXZWVrIGFzIElXZWVrIH0gZnJvbSAnLi4vLi4vc3RvcmUveWVhcnMnXHJcbmltcG9ydCBXZWVrIGZyb20gJy4uL3dlZWsvd2VlaydcclxuaW1wb3J0IFdlZWtIZWFkIGZyb20gJy4uL3dlZWtIZWFkL3dlZWtIZWFkJ1xyXG5cclxuY29uc3QgUkVNSU5ERVJfREFURSA9ICcyMDIxLTAxLTAxJ1xyXG5cclxuY29uc3QgVGFibGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93NTN0aFdlZWsgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IHllYXJzQ29uZmlnIH0pID0+IHllYXJzQ29uZmlnKVxyXG4gIGNvbnN0IHllYXJzID0gdXNlQXBwU2VsZWN0b3IoZ2V0WWVhcnMuYmluZChudWxsLCBpc1Nob3c1M3RoV2VlaykpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkOiBjYWxlbmRhcklkXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGNhbGVuZGFyIH0pID0+IGNhbGVuZGFyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBieUlkLFxyXG4gICAgaXNMb2FkZWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgZXZlbnQgfSkgPT4gZXZlbnQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRFdmVudHMoKSlcclxuICAgIH1cclxuICB9LCBbY2FsZW5kYXJJZF0pXHJcblxyXG4gIGNvbnN0IGZpbmRFdmVudHMgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHNCeURhdGUoYnlJZCksIFtieUlkXSlcclxuXHJcbiAgY29uc3QgcmVtaW5kZXIgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHMoUkVNSU5ERVJfREFURSwgUkVNSU5ERVJfREFURSksIFtieUlkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNMb2FkZWQgfHwgcmVtaW5kZXIpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goY3JlYXRlUmVtaW5kZXJFdmVudCh7XHJcbiAgICAgIHN1bW1hcnk6ICfQodC+0LfQtNCw0YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ct0YLQviDQvdCw0L/QvtC80LjQvdCw0L3QuNC1LCDRh9GC0L7QsdGLINCS0Ysg0L3QtSDQt9Cw0LHRi9C70Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0YbQtdC70Ywg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0L3QtdC00LXQu9GOLicsXHJcbiAgICAgIHN0YXJ0VGltZTogYCR7UkVNSU5ERVJfREFURX1UMTU6MDA6MDBgLFxyXG4gICAgICBlbmRUaW1lOiBgJHtSRU1JTkRFUl9EQVRFfVQxNzowMDowMGAsXHJcbiAgICAgIC8vIFRPRE86INCy0YvQvdC10YHRgtC4INCyINC60L7QvdGE0LjQsyDQutC+0LPQtNCwINC90LDQv9C+0LzQuNC90LDRgtGMLCDQutC+0LPQtNCwINC90LDRh9C40L3QsNC10YLRgdGPINC90LXQtNC10LvRj1xyXG4gICAgICByZWN1cnJlbmNlOiBbXHJcbiAgICAgICAgJ1JSVUxFOkZSRVE9V0VFS0xZO0JZREFZPVNVO1dLU1Q9TU8nXHJcbiAgICAgIF0sXHJcbiAgICAgIHJlbWluZGVyczogW1xyXG4gICAgICAgIHsgbWV0aG9kOiAnZW1haWwnLCBtaW51dGVzOiA2MCAqIDQgfSxcclxuICAgICAgICB7IG1ldGhvZDogJ3BvcHVwJywgbWludXRlczogNjAgKiAyIH1cclxuICAgICAgXVxyXG4gICAgfSkpXHJcbiAgfSwgW2lzTG9hZGVkLCByZW1pbmRlcl0pXHJcblxyXG4gIGNvbnN0IGNvbnRleHRSZWY6IE11dGFibGVSZWZPYmplY3Q8YW55PiA9IHVzZVJlZigpXHJcbiAgY29uc3QgW3NlbGVjdGVkV2Vlaywgc2V0U2VsZWN0ZWRXZWVrXSA9IHVzZVN0YXRlPElXZWVrIHwgbnVsbD4obnVsbClcclxuXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgJy0tY291bnQtd2VlaycsXHJcbiAgICAgIFN0cmluZyhpc1Nob3c1M3RoV2VlayA/IENPVU5UX1dFRUsgKyAxIDogQ09VTlRfV0VFSylcclxuICAgIClcclxuICB9LCBbaXNTaG93NTN0aFdlZWtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgIDxXZWVrSGVhZCB3ZWVrc0luWWVhcj17Q09VTlRfV0VFS30vPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHllYXJzKS5tYXAoKHllYXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMueWVhcil9IGtleT17YCR7eWVhcn1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLndlZWssIHN0eWxlcy53ZWVrSGVhZCwgc3R5bGVzLnllYXJIZWFkKX0+e3llYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcnNbeWVhcl0ubWFwKCh3ZWVrLCB3ZWVrSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFdlZWsga2V5PXt3ZWVrfSBpZD17d2Vla30gZmluZEV2ZW50cz17ZmluZEV2ZW50c30gc2VsZWN0ZWRXZWVrPXtzZWxlY3RlZFdlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkV2Vlaz17c2V0U2VsZWN0ZWRXZWVrfSBjb250ZXh0PXtjb250ZXh0UmVmfS8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgPFBvcHVwIGNvbnRleHQ9e2NvbnRleHRSZWZ9IG9wZW49eyEhc2VsZWN0ZWRXZWVrfT5cclxuICAgICAgICB7c2VsZWN0ZWRXZWVrICYmIChcclxuICAgICAgICAgIDxFdmVudCB3ZWVrPXtzZWxlY3RlZFdlZWt9IGluaXRpYWxWYWx1ZXM9e2ZpbmRFdmVudHMoc2VsZWN0ZWRXZWVrLnN0YXJ0RGF0ZSwgc2VsZWN0ZWRXZWVrLmVuZERhdGUpfS8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Qb3B1cD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVcclxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXIgYXMgSDEsIEljb24sIExhYmVsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgQ09VTlRfV0VFSyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXHJcbmltcG9ydCB7IFJvb3RJbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUnXHJcbmltcG9ydCB7IGNyZWF0ZUNhbGVuZGFyLCBnZXRDYWxlbmRhciB9IGZyb20gJy4uL3N0b3JlL2NhbGVuZGFyJ1xyXG5pbXBvcnQgeyBnZXRDYWxlbmRhcklkLCBzZXRDYWxlbmRhcklkIH0gZnJvbSAnLi4vc3RvcmUvY2FsZW5kYXJJZCdcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Zvcm0nXHJcbmltcG9ydCB7IHRvZ2dsZUlzU2hvd0Zvcm0sIHVwZGF0ZUNvdW50cnkgfSBmcm9tICcuLi9zdG9yZS9tYWluUGFnZSdcclxuaW1wb3J0IHsgZGVmYXVsdFNlbGVjdGVkQ291bnRyeUlkIH0gZnJvbSAnLi4vc3RvcmUvYXZlcmFnZUxpZmVZZWFycydcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIC8vIFRPRE86IHNob3cgYWxsIGVycm9yc1xyXG4gIGNvbnN0IHtcclxuICAgIGlzU2lnbmVkSW4sXHJcbiAgICBpc1NpZ25lZEluRmlyZWJhc2VcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgYXV0aCB9KSA9PiBhdXRoKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBlbWFpbCxcclxuICAgIGJpcnRoZGF5cyxcclxuICAgIHNleCxcclxuICAgIGxvY2FsZXNcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgdXNlciB9KSA9PiB1c2VyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZDogY2FsZW5kYXJJZCxcclxuICAgIGVycm9yOiBjYWxlbmRhckVycm9yLFxyXG4gICAgaXNMb2FkaW5nOiBjYWxlbmRhcklzTG9hZGluZ1xyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBjYWxlbmRhciB9KSA9PiBjYWxlbmRhcilcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRQZXJzaXN0LFxyXG4gICAgbG9hZGVkOiBjYWxlbmRhcklkTG9hZGVkLFxyXG4gICAgZXJyb3I6IGNhbGVuZGFySWRFcnJvcixcclxuICAgIGlzTG9hZGluZzogY2FsZW5kYXJJZElzTG9hZGluZ1xyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBjYWxlbmRhcklkIH0pID0+IGNhbGVuZGFySWQpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93Rm9ybSwgY291bnRyeSB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgbWFpblBhZ2UgfSkgPT4gbWFpblBhZ2UpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93NTN0aFdlZWsgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IHllYXJzQ29uZmlnIH0pID0+IHllYXJzQ29uZmlnKVxyXG5cclxuICBjb25zdCBpc1Nob3c1M3RoV2Vla0luaXQgPSB1c2VNZW1vKCgpID0+IGlzU2hvdzUzdGhXZWVrLCBbXSlcclxuXHJcbiAgLy8gVE9ETzog0LLRi9C90LXRgdGC0Lgg0LIgY3VzdG9tSG9vayDQvdCw0YfQsNC70L5cclxuICBjb25zdCBbY291bnRyeUluaXQsIHNldENvdW50cnlJbml0XSA9IHVzZVN0YXRlKGNvdW50cnkpXHJcblxyXG4gIGNvbnN0IGluaXRpYWxGb3JtcyA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgIGJpcnRoZGF5czogYmlydGhkYXlzLFxyXG4gICAgc2V4OiBzZXgsXHJcbiAgICBsb2NhbGVzOiBjb3VudHJ5SW5pdCxcclxuICAgIGlzU2hvdzUzdGhXZWVrOiBpc1Nob3c1M3RoV2Vla0luaXRcclxuICB9KSwgW2JpcnRoZGF5cywgc2V4LCBjb3VudHJ5SW5pdCwgaXNTaG93NTN0aFdlZWtJbml0XSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY291bnRyeSkge1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVDb3VudHJ5KGRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCkpXHJcbiAgICB9XHJcbiAgfSwgW2NvdW50cnldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjb3VudHJ5SW5pdCAmJiBjb3VudHJ5KSB7XHJcbiAgICAgIHNldENvdW50cnlJbml0KGNvdW50cnkpXHJcbiAgICB9XHJcbiAgfSwgW2NvdW50cnksIGNvdW50cnlJbml0XSlcclxuICAvLyBUT0RPOiDQstGL0L3QtdGB0YLQuCDQsiBjdXN0b21Ib29rINC60L7QvdC10YZcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlbWFpbCAmJiBpc1NpZ25lZEluRmlyZWJhc2UpIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0Q2FsZW5kYXJJZChlbWFpbCkpXHJcbiAgICB9XHJcbiAgfSwgW2lzU2lnbmVkSW5GaXJlYmFzZSwgZW1haWxdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjYWxlbmRhcklkTG9hZGVkKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYWxlbmRhcklkUGVyc2lzdCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRDYWxlbmRhcihjYWxlbmRhcklkUGVyc2lzdCkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChjcmVhdGVDYWxlbmRhcigpKVxyXG4gICAgfVxyXG4gIH0sIFtpc1NpZ25lZEluRmlyZWJhc2UsIGVtYWlsLCBjYWxlbmRhcklkUGVyc2lzdCwgY2FsZW5kYXJJZExvYWRlZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCAmJiBlbWFpbCAmJiBpc1NpZ25lZEluRmlyZWJhc2UgJiYgY2FsZW5kYXJJZExvYWRlZCAmJiAhY2FsZW5kYXJJZFBlcnNpc3QpIHtcclxuICAgICAgZGlzcGF0Y2goc2V0Q2FsZW5kYXJJZCh7IGVtYWlsLCBjYWxlbmRhcklkIH0pKVxyXG4gICAgfVxyXG4gIH0sIFtpc1NpZ25lZEluRmlyZWJhc2UsIGVtYWlsLCBjYWxlbmRhcklkLCBjYWxlbmRhcklkUGVyc2lzdCwgY2FsZW5kYXJJZExvYWRlZF0pXHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTaG93Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHRvZ2dsZUlzU2hvd0Zvcm0oKSksIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q2F0Y2ggeW91ciB0aW1lPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlci8+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgPEgxIGFzPVwiaDFcIiBjbGFzc05hbWU9e3N0eWxlcy5oMX0+Q2F0Y2ggeW91ciB0aW1lPC9IMT5cclxuICAgICAgICAgIDxCdXR0b24gYWN0aXZlPXtpc1Nob3dGb3JtfSBvbkNsaWNrPXtvbkNsaWNrU2hvd0Zvcm19IGljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cInNldHRpbmdcIi8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxzdXA+PExhYmVsIGNvbG9yPVwidGVhbFwiIGNpcmN1bGFyIHNpemU9XCJzbWFsbFwiPnByZS1hbHBoYTwvTGFiZWw+PC9zdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxGb3JtIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxGb3Jtc30vPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgPFRhYmxlLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPEZvb3Rlci8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8Um9vdEluaXRpYWxTdGF0ZT4gPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIHBhZ2U6ICdtYWluJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=