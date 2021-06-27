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

  var countYears = Object.keys(years).length;
  console.log(countYears);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    document.documentElement.style.setProperty('--count-years', String(countYears));
  }, [countYears]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("a", {
      id: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["TABLE_ANCHOR"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
      weeksInYear: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
            lineNumber: 87,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 98,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
      dispatch(Object(_store_mainPage__WEBPACK_IMPORTED_MODULE_13__["updateCountry"])(_store_averageLifeYears__WEBPACK_IMPORTED_MODULE_14__["defaultSelectedCountryId"]));
    }
  }, [country]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!countryInit && country) {
      setCountryInit(country);
    }
  }, [country, countryInit]); // TODO: вынести в customHook конец

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (email && isSignedInFirebase) {
      dispatch(Object(_store_calendarId__WEBPACK_IMPORTED_MODULE_11__["getCalendarId"])(email));
    }
  }, [isSignedInFirebase, email]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!calendarIdLoaded) {
      return;
    }

    if (calendarIdPersist) {
      dispatch(Object(_store_calendar__WEBPACK_IMPORTED_MODULE_10__["getCalendar"])(calendarIdPersist));
    } else {
      dispatch(Object(_store_calendar__WEBPACK_IMPORTED_MODULE_10__["createCalendar"])());
    }
  }, [isSignedInFirebase, email, calendarIdPersist, calendarIdLoaded]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (calendarId && email && isSignedInFirebase && calendarIdLoaded && !calendarIdPersist) {
      dispatch(Object(_store_calendarId__WEBPACK_IMPORTED_MODULE_11__["setCalendarId"])({
        email: email,
        calendarId: calendarId
      }));
    }
  }, [isSignedInFirebase, email, calendarId, calendarIdPersist, calendarIdLoaded]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJSRU1JTkRFUl9EQVRFIiwiVGFibGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ5ZWFyc0NvbmZpZyIsImlzU2hvdzUzdGhXZWVrIiwieWVhcnMiLCJnZXRZZWFycyIsImJpbmQiLCJjYWxlbmRhciIsImNhbGVuZGFySWQiLCJpZCIsImV2ZW50IiwiYnlJZCIsImlzTG9hZGVkIiwidXNlRWZmZWN0IiwiZ2V0RXZlbnRzIiwiZmluZEV2ZW50cyIsInVzZU1lbW8iLCJmaW5kRXZlbnRzQnlEYXRlIiwicmVtaW5kZXIiLCJjcmVhdGVSZW1pbmRlckV2ZW50Iiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInJlY3VycmVuY2UiLCJyZW1pbmRlcnMiLCJtZXRob2QiLCJtaW51dGVzIiwiY29udGV4dFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwic2VsZWN0ZWRXZWVrIiwic2V0U2VsZWN0ZWRXZWVrIiwiY291bnRZZWFycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidXNlTGF5b3V0RWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiU3RyaW5nIiwic3R5bGVzIiwidGFibGUiLCJUQUJMRV9BTkNIT1IiLCJDT1VOVF9XRUVLIiwibWFwIiwieWVhciIsImNuIiwid2VlayIsIndlZWtIZWFkIiwieWVhckhlYWQiLCJ3ZWVrSW5kZXgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiSG9tZSIsImF1dGgiLCJpc1NpZ25lZEluIiwiaXNTaWduZWRJbkZpcmViYXNlIiwidXNlciIsImVtYWlsIiwiYmlydGhkYXlzIiwic2V4IiwibG9jYWxlcyIsImNhbGVuZGFyRXJyb3IiLCJlcnJvciIsImNhbGVuZGFySXNMb2FkaW5nIiwiaXNMb2FkaW5nIiwiY2FsZW5kYXJJZFBlcnNpc3QiLCJjYWxlbmRhcklkTG9hZGVkIiwibG9hZGVkIiwiY2FsZW5kYXJJZEVycm9yIiwiY2FsZW5kYXJJZElzTG9hZGluZyIsIm1haW5QYWdlIiwiaXNTaG93Rm9ybSIsImNvdW50cnkiLCJpc1Nob3c1M3RoV2Vla0luaXQiLCJjb3VudHJ5SW5pdCIsInNldENvdW50cnlJbml0IiwiaW5pdGlhbEZvcm1zIiwidXBkYXRlQ291bnRyeSIsImRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCIsImdldENhbGVuZGFySWQiLCJnZXRDYWxlbmRhciIsImNyZWF0ZUNhbGVuZGFyIiwic2V0Q2FsZW5kYXJJZCIsIm9uQ2xpY2tTaG93Rm9ybSIsInVzZUNhbGxiYWNrIiwidG9nZ2xlSXNTaG93Rm9ybSIsImNvbnRhaW5lciIsIm1haW4iLCJoZWFkIiwiaDEiLCJidXR0b24iLCJncmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsWUFBdEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQix3QkFHU0MsbUVBQWMsQ0FBQztBQUFBLFFBQUdDLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFdBQXFCQSxXQUFyQjtBQUFBLEdBQUQsQ0FIdkI7QUFBQSxNQUdWQyxjQUhVLG1CQUdWQSxjQUhVOztBQUlsQixNQUFNQyxLQUFLLEdBQUdILG1FQUFjLENBQUNJLHNEQUFRLENBQUNDLElBQVQsQ0FBYyxJQUFkLEVBQW9CSCxjQUFwQixDQUFELENBQTVCOztBQUprQix5QkFRZEYsbUVBQWMsQ0FBQztBQUFBLFFBQUdN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QUE7QUFBQSxlQURGLGVBU0Usc0VBQUMsOERBQUQ7QUFBTSxxQkFBYSxFQUFFZDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFXRTtBQUFLLGlCQUFTLEVBQUVyQyxpRUFBTSxDQUFDb0QsSUFBdkI7QUFBQSwrQkFDRSxzRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBd0JFLHNFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0FoSEQ7O0dBQU12QyxJO1VBQ2ExRCx1RCxFQU1iQywyRCxFQU9BQSwyRCxFQU1BQSwyRCxFQU9BQSwyRCxFQUU0QkEsMkQsRUFFTEEsMkQ7OztLQS9CdkJ5RCxJOztBQWtIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjI3YmY4OWQ2ZGEzZTZhNTY1MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFibGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IENPVU5UX1dFRUssIFRBQkxFX0FOQ0hPUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNyZWF0ZVJlbWluZGVyRXZlbnQsIGdldEV2ZW50cyB9IGZyb20gJy4uLy4uL3N0b3JlL2V2ZW50J1xyXG5pbXBvcnQgZmluZEV2ZW50c0J5RGF0ZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maW5kRXZlbnRzQnlEYXRlJ1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vZXZlbnQvZXZlbnQnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3Mvc3RvcmUnXHJcbmltcG9ydCB7IGdldFllYXJzLCBXZWVrIGFzIElXZWVrIH0gZnJvbSAnLi4vLi4vc3RvcmUveWVhcnMnXHJcbmltcG9ydCBXZWVrIGZyb20gJy4uL3dlZWsvd2VlaydcclxuaW1wb3J0IFdlZWtIZWFkIGZyb20gJy4uL3dlZWtIZWFkL3dlZWtIZWFkJ1xyXG5cclxuY29uc3QgUkVNSU5ERVJfREFURSA9ICcyMDIxLTAxLTAxJ1xyXG5cclxuY29uc3QgVGFibGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIGNvbnN0IHsgaXNTaG93NTN0aFdlZWsgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IHllYXJzQ29uZmlnIH0pID0+IHllYXJzQ29uZmlnKVxyXG4gIGNvbnN0IHllYXJzID0gdXNlQXBwU2VsZWN0b3IoZ2V0WWVhcnMuYmluZChudWxsLCBpc1Nob3c1M3RoV2VlaykpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkOiBjYWxlbmRhcklkXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGNhbGVuZGFyIH0pID0+IGNhbGVuZGFyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBieUlkLFxyXG4gICAgaXNMb2FkZWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgZXZlbnQgfSkgPT4gZXZlbnQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FsZW5kYXJJZCkge1xyXG4gICAgICBkaXNwYXRjaChnZXRFdmVudHMoKSlcclxuICAgIH1cclxuICB9LCBbY2FsZW5kYXJJZF0pXHJcblxyXG4gIGNvbnN0IGZpbmRFdmVudHMgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHNCeURhdGUoYnlJZCksIFtieUlkXSlcclxuXHJcbiAgY29uc3QgcmVtaW5kZXIgPSB1c2VNZW1vKCgpID0+IGZpbmRFdmVudHMoUkVNSU5ERVJfREFURSwgUkVNSU5ERVJfREFURSksIFtieUlkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNMb2FkZWQgfHwgcmVtaW5kZXIpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goY3JlYXRlUmVtaW5kZXJFdmVudCh7XHJcbiAgICAgIHN1bW1hcnk6ICfQodC+0LfQtNCw0YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ct0YLQviDQvdCw0L/QvtC80LjQvdCw0L3QuNC1LCDRh9GC0L7QsdGLINCS0Ysg0L3QtSDQt9Cw0LHRi9C70Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0YbQtdC70Ywg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0L3QtdC00LXQu9GOLicsXHJcbiAgICAgIHN0YXJ0VGltZTogYCR7UkVNSU5ERVJfREFURX1UMTU6MDA6MDBgLFxyXG4gICAgICBlbmRUaW1lOiBgJHtSRU1JTkRFUl9EQVRFfVQxNzowMDowMGAsXHJcbiAgICAgIC8vIFRPRE86INCy0YvQvdC10YHRgtC4INCyINC60L7QvdGE0LjQsyDQutC+0LPQtNCwINC90LDQv9C+0LzQuNC90LDRgtGMLCDQutC+0LPQtNCwINC90LDRh9C40L3QsNC10YLRgdGPINC90LXQtNC10LvRj1xyXG4gICAgICByZWN1cnJlbmNlOiBbXHJcbiAgICAgICAgJ1JSVUxFOkZSRVE9V0VFS0xZO0JZREFZPVNVO1dLU1Q9TU8nXHJcbiAgICAgIF0sXHJcbiAgICAgIHJlbWluZGVyczogW1xyXG4gICAgICAgIHsgbWV0aG9kOiAnZW1haWwnLCBtaW51dGVzOiA2MCAqIDQgfSxcclxuICAgICAgICB7IG1ldGhvZDogJ3BvcHVwJywgbWludXRlczogNjAgKiAyIH1cclxuICAgICAgXVxyXG4gICAgfSkpXHJcbiAgfSwgW2lzTG9hZGVkLCByZW1pbmRlcl0pXHJcblxyXG4gIGNvbnN0IGNvbnRleHRSZWY6IE11dGFibGVSZWZPYmplY3Q8YW55PiA9IHVzZVJlZigpXHJcbiAgY29uc3QgW3NlbGVjdGVkV2Vlaywgc2V0U2VsZWN0ZWRXZWVrXSA9IHVzZVN0YXRlPElXZWVrIHwgbnVsbD4obnVsbClcclxuXHJcbiAgY29uc3QgY291bnRZZWFycyA9IE9iamVjdC5rZXlzKHllYXJzKS5sZW5ndGhcclxuICBjb25zb2xlLmxvZyhjb3VudFllYXJzKVxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbiAgICAgICctLWNvdW50LXllYXJzJyxcclxuICAgICAgU3RyaW5nKGNvdW50WWVhcnMpXHJcbiAgICApXHJcbiAgfSwgW2NvdW50WWVhcnNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgIDxhIGlkPXtUQUJMRV9BTkNIT1J9PjwvYT5cclxuICAgICAgPFdlZWtIZWFkIHdlZWtzSW5ZZWFyPXtDT1VOVF9XRUVLfS8+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoeWVhcnMpLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy55ZWFyKX0ga2V5PXtgJHt5ZWFyfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMud2Vlaywgc3R5bGVzLndlZWtIZWFkLCBzdHlsZXMueWVhckhlYWQpfT57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyc1t5ZWFyXS5tYXAoKHdlZWssIHdlZWtJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8V2VlayBrZXk9e3dlZWt9IGlkPXt3ZWVrfSBmaW5kRXZlbnRzPXtmaW5kRXZlbnRzfSBzZWxlY3RlZFdlZWs9e3NlbGVjdGVkV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRXZWVrPXtzZXRTZWxlY3RlZFdlZWt9IGNvbnRleHQ9e2NvbnRleHRSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICA8UG9wdXAgY29udGV4dD17Y29udGV4dFJlZn0gb3Blbj17ISFzZWxlY3RlZFdlZWt9PlxyXG4gICAgICAgIHtzZWxlY3RlZFdlZWsgJiYgKFxyXG4gICAgICAgICAgPEV2ZW50IHdlZWs9e3NlbGVjdGVkV2Vla30gaW5pdGlhbFZhbHVlcz17ZmluZEV2ZW50cyhzZWxlY3RlZFdlZWsuc3RhcnREYXRlLCBzZWxlY3RlZFdlZWsuZW5kRGF0ZSl9Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcHVwPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxyXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXIgYXMgSDEsIEljb24sIExhYmVsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgVEFCTEVfQU5DSE9SIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgUm9vdEluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy90YWJsZS90YWJsZSdcclxuaW1wb3J0IHsgY3JlYXRlQ2FsZW5kYXIsIGdldENhbGVuZGFyIH0gZnJvbSAnLi4vc3RvcmUvY2FsZW5kYXInXHJcbmltcG9ydCB7IGdldENhbGVuZGFySWQsIHNldENhbGVuZGFySWQgfSBmcm9tICcuLi9zdG9yZS9jYWxlbmRhcklkJ1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vZm9ybSdcclxuaW1wb3J0IHsgdG9nZ2xlSXNTaG93Rm9ybSwgdXBkYXRlQ291bnRyeSB9IGZyb20gJy4uL3N0b3JlL21haW5QYWdlJ1xyXG5pbXBvcnQgeyBkZWZhdWx0U2VsZWN0ZWRDb3VudHJ5SWQgfSBmcm9tICcuLi9zdG9yZS9hdmVyYWdlTGlmZVllYXJzJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgLy8gVE9ETzogc2hvdyBhbGwgZXJyb3JzXHJcbiAgY29uc3Qge1xyXG4gICAgaXNTaWduZWRJbixcclxuICAgIGlzU2lnbmVkSW5GaXJlYmFzZVxyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBhdXRoIH0pID0+IGF1dGgpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGVtYWlsLFxyXG4gICAgYmlydGhkYXlzLFxyXG4gICAgc2V4LFxyXG4gICAgbG9jYWxlc1xyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyB1c2VyIH0pID0+IHVzZXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkOiBjYWxlbmRhcklkLFxyXG4gICAgZXJyb3I6IGNhbGVuZGFyRXJyb3IsXHJcbiAgICBpc0xvYWRpbmc6IGNhbGVuZGFySXNMb2FkaW5nXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGNhbGVuZGFyIH0pID0+IGNhbGVuZGFyKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZDogY2FsZW5kYXJJZFBlcnNpc3QsXHJcbiAgICBsb2FkZWQ6IGNhbGVuZGFySWRMb2FkZWQsXHJcbiAgICBlcnJvcjogY2FsZW5kYXJJZEVycm9yLFxyXG4gICAgaXNMb2FkaW5nOiBjYWxlbmRhcklkSXNMb2FkaW5nXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGNhbGVuZGFySWQgfSkgPT4gY2FsZW5kYXJJZClcclxuXHJcbiAgY29uc3QgeyBpc1Nob3dGb3JtLCBjb3VudHJ5IH0gPSB1c2VBcHBTZWxlY3RvcigoeyBtYWluUGFnZSB9KSA9PiBtYWluUGFnZSlcclxuXHJcbiAgY29uc3QgeyBpc1Nob3c1M3RoV2VlayB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgeWVhcnNDb25maWcgfSkgPT4geWVhcnNDb25maWcpXHJcblxyXG4gIGNvbnN0IGlzU2hvdzUzdGhXZWVrSW5pdCA9IHVzZU1lbW8oKCkgPT4gaXNTaG93NTN0aFdlZWssIFtdKVxyXG5cclxuICAvLyBUT0RPOiDQstGL0L3QtdGB0YLQuCDQsiBjdXN0b21Ib29rINC90LDRh9Cw0LvQvlxyXG4gIGNvbnN0IFtjb3VudHJ5SW5pdCwgc2V0Q291bnRyeUluaXRdID0gdXNlU3RhdGUoY291bnRyeSlcclxuXHJcbiAgY29uc3QgaW5pdGlhbEZvcm1zID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgYmlydGhkYXlzOiBiaXJ0aGRheXMsXHJcbiAgICBzZXg6IHNleCxcclxuICAgIGxvY2FsZXM6IGNvdW50cnlJbml0LFxyXG4gICAgaXNTaG93NTN0aFdlZWs6IGlzU2hvdzUzdGhXZWVrSW5pdFxyXG4gIH0pLCBbYmlydGhkYXlzLCBzZXgsIGNvdW50cnlJbml0LCBpc1Nob3c1M3RoV2Vla0luaXRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjb3VudHJ5KSB7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUNvdW50cnkoZGVmYXVsdFNlbGVjdGVkQ291bnRyeUlkKSlcclxuICAgIH1cclxuICB9LCBbY291bnRyeV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNvdW50cnlJbml0ICYmIGNvdW50cnkpIHtcclxuICAgICAgc2V0Q291bnRyeUluaXQoY291bnRyeSlcclxuICAgIH1cclxuICB9LCBbY291bnRyeSwgY291bnRyeUluaXRdKVxyXG4gIC8vIFRPRE86INCy0YvQvdC10YHRgtC4INCyIGN1c3RvbUhvb2sg0LrQvtC90LXRhlxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVtYWlsICYmIGlzU2lnbmVkSW5GaXJlYmFzZSkge1xyXG4gICAgICBkaXNwYXRjaChnZXRDYWxlbmRhcklkKGVtYWlsKSlcclxuICAgIH1cclxuICB9LCBbaXNTaWduZWRJbkZpcmViYXNlLCBlbWFpbF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbGVuZGFySWRMb2FkZWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhbGVuZGFySWRQZXJzaXN0KSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldENhbGVuZGFyKGNhbGVuZGFySWRQZXJzaXN0KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZUNhbGVuZGFyKCkpXHJcbiAgICB9XHJcbiAgfSwgW2lzU2lnbmVkSW5GaXJlYmFzZSwgZW1haWwsIGNhbGVuZGFySWRQZXJzaXN0LCBjYWxlbmRhcklkTG9hZGVkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYWxlbmRhcklkICYmIGVtYWlsICYmIGlzU2lnbmVkSW5GaXJlYmFzZSAmJiBjYWxlbmRhcklkTG9hZGVkICYmICFjYWxlbmRhcklkUGVyc2lzdCkge1xyXG4gICAgICBkaXNwYXRjaChzZXRDYWxlbmRhcklkKHsgZW1haWwsIGNhbGVuZGFySWQgfSkpXHJcbiAgICB9XHJcbiAgfSwgW2lzU2lnbmVkSW5GaXJlYmFzZSwgZW1haWwsIGNhbGVuZGFySWQsIGNhbGVuZGFySWRQZXJzaXN0LCBjYWxlbmRhcklkTG9hZGVkXSlcclxuXHJcbiAgY29uc3Qgb25DbGlja1Nob3dGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2godG9nZ2xlSXNTaG93Rm9ybSgpKSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DYXRjaCB5b3VyIHRpbWU8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyLz5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICA8SDEgYXM9XCJoMVwiIGNsYXNzTmFtZT17c3R5bGVzLmgxfT48YSBocmVmPXtgIyR7VEFCTEVfQU5DSE9SfWB9PkNhdGNoIHlvdXIgdGltZTwvYT48L0gxPlxyXG4gICAgICAgICAgPEJ1dHRvbiBhY3RpdmU9e2lzU2hvd0Zvcm19IG9uQ2xpY2s9e29uQ2xpY2tTaG93Rm9ybX0gaWNvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwic2V0dGluZ1wiLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPHN1cD48TGFiZWwgY29sb3I9XCJ0ZWFsXCIgY2lyY3VsYXIgc2l6ZT1cInNtYWxsXCI+cHJlLWFscGhhPC9MYWJlbD48L3N1cD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvcm0gaW5pdGlhbFZhbHVlcz17aW5pdGlhbEZvcm1zfS8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8VGFibGUvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxSb290SW5pdGlhbFN0YXRlPiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgcGFnZTogJ21haW4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==