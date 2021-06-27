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
      id: "life"
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
            href: "#life",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJSRU1JTkRFUl9EQVRFIiwiVGFibGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ5ZWFyc0NvbmZpZyIsImlzU2hvdzUzdGhXZWVrIiwieWVhcnMiLCJnZXRZZWFycyIsImJpbmQiLCJjYWxlbmRhciIsImNhbGVuZGFySWQiLCJpZCIsImV2ZW50IiwiYnlJZCIsImlzTG9hZGVkIiwidXNlRWZmZWN0IiwiZ2V0RXZlbnRzIiwiZmluZEV2ZW50cyIsInVzZU1lbW8iLCJmaW5kRXZlbnRzQnlEYXRlIiwicmVtaW5kZXIiLCJjcmVhdGVSZW1pbmRlckV2ZW50Iiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInJlY3VycmVuY2UiLCJyZW1pbmRlcnMiLCJtZXRob2QiLCJtaW51dGVzIiwiY29udGV4dFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwic2VsZWN0ZWRXZWVrIiwic2V0U2VsZWN0ZWRXZWVrIiwiY291bnRZZWFycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidXNlTGF5b3V0RWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiU3RyaW5nIiwic3R5bGVzIiwidGFibGUiLCJDT1VOVF9XRUVLIiwibWFwIiwieWVhciIsImNuIiwid2VlayIsIndlZWtIZWFkIiwieWVhckhlYWQiLCJ3ZWVrSW5kZXgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiSG9tZSIsImF1dGgiLCJpc1NpZ25lZEluIiwiaXNTaWduZWRJbkZpcmViYXNlIiwidXNlciIsImVtYWlsIiwiYmlydGhkYXlzIiwic2V4IiwibG9jYWxlcyIsImNhbGVuZGFyRXJyb3IiLCJlcnJvciIsImNhbGVuZGFySXNMb2FkaW5nIiwiaXNMb2FkaW5nIiwiY2FsZW5kYXJJZFBlcnNpc3QiLCJjYWxlbmRhcklkTG9hZGVkIiwibG9hZGVkIiwiY2FsZW5kYXJJZEVycm9yIiwiY2FsZW5kYXJJZElzTG9hZGluZyIsIm1haW5QYWdlIiwiaXNTaG93Rm9ybSIsImNvdW50cnkiLCJpc1Nob3c1M3RoV2Vla0luaXQiLCJjb3VudHJ5SW5pdCIsInNldENvdW50cnlJbml0IiwiaW5pdGlhbEZvcm1zIiwidXBkYXRlQ291bnRyeSIsImRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCIsImdldENhbGVuZGFySWQiLCJnZXRDYWxlbmRhciIsImNyZWF0ZUNhbGVuZGFyIiwic2V0Q2FsZW5kYXJJZCIsIm9uQ2xpY2tTaG93Rm9ybSIsInVzZUNhbGxiYWNrIiwidG9nZ2xlSXNTaG93Rm9ybSIsImNvbnRhaW5lciIsIm1haW4iLCJoZWFkIiwiaDEiLCJidXR0b24iLCJncmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsWUFBdEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQix3QkFHU0MsbUVBQWMsQ0FBQztBQUFBLFFBQUdDLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFdBQXFCQSxXQUFyQjtBQUFBLEdBQUQsQ0FIdkI7QUFBQSxNQUdWQyxjQUhVLG1CQUdWQSxjQUhVOztBQUlsQixNQUFNQyxLQUFLLEdBQUdILG1FQUFjLENBQUNJLHNEQUFRLENBQUNDLElBQVQsQ0FBYyxJQUFkLEVBQW9CSCxjQUFwQixDQUFELENBQTVCOztBQUprQix5QkFRZEYsbUVBQWMsQ0FBQztBQUFBLFFBQUdNLFFBQUgsU0FBR0EsUUFB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QWEsRUFBRWQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBV0U7QUFBSyxpQkFBUyxFQUFFcEMsaUVBQU0sQ0FBQ21ELElBQXZCO0FBQUEsK0JBQ0Usc0VBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQXdCRSxzRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBaEhEOztHQUFNdkMsSTtVQUNhekQsdUQsRUFNYkMsMkQsRUFPQUEsMkQsRUFNQUEsMkQsRUFPQUEsMkQsRUFFNEJBLDJELEVBRUxBLDJEOzs7S0EvQnZCd0QsSTs7QUFrSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmYWM4ZjU0OTQ2NjdiOTkyMmNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDT1VOVF9XRUVLIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgY3JlYXRlUmVtaW5kZXJFdmVudCwgZ2V0RXZlbnRzIH0gZnJvbSAnLi4vLi4vc3RvcmUvZXZlbnQnXHJcbmltcG9ydCBmaW5kRXZlbnRzQnlEYXRlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbmRFdmVudHNCeURhdGUnXHJcbmltcG9ydCBFdmVudCBmcm9tICcuLi9ldmVudC9ldmVudCdcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9zdG9yZSdcclxuaW1wb3J0IHsgZ2V0WWVhcnMsIFdlZWsgYXMgSVdlZWsgfSBmcm9tICcuLi8uLi9zdG9yZS95ZWFycydcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vd2Vlay93ZWVrJ1xyXG5pbXBvcnQgV2Vla0hlYWQgZnJvbSAnLi4vd2Vla0hlYWQvd2Vla0hlYWQnXHJcblxyXG5jb25zdCBSRU1JTkRFUl9EQVRFID0gJzIwMjEtMDEtMDEnXHJcblxyXG5jb25zdCBUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgeyBpc1Nob3c1M3RoV2VlayB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgeWVhcnNDb25maWcgfSkgPT4geWVhcnNDb25maWcpXHJcbiAgY29uc3QgeWVhcnMgPSB1c2VBcHBTZWxlY3RvcihnZXRZZWFycy5iaW5kKG51bGwsIGlzU2hvdzUzdGhXZWVrKSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWRcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXIgfSkgPT4gY2FsZW5kYXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGJ5SWQsXHJcbiAgICBpc0xvYWRlZFxyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBldmVudCB9KSA9PiBldmVudClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYWxlbmRhcklkKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldEV2ZW50cygpKVxyXG4gICAgfVxyXG4gIH0sIFtjYWxlbmRhcklkXSlcclxuXHJcbiAgY29uc3QgZmluZEV2ZW50cyA9IHVzZU1lbW8oKCkgPT4gZmluZEV2ZW50c0J5RGF0ZShieUlkKSwgW2J5SWRdKVxyXG5cclxuICBjb25zdCByZW1pbmRlciA9IHVzZU1lbW8oKCkgPT4gZmluZEV2ZW50cyhSRU1JTkRFUl9EQVRFLCBSRU1JTkRFUl9EQVRFKSwgW2J5SWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0xvYWRlZCB8fCByZW1pbmRlcikge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaChjcmVhdGVSZW1pbmRlckV2ZW50KHtcclxuICAgICAgc3VtbWFyeTogJ9Ch0L7Qt9C00LDRgtGMINGG0LXQu9GMINC90LAg0YHQu9C10LTRg9GO0YnRg9GOINC90LXQtNC10LvRjicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn0K3RgtC+INC90LDQv9C+0LzQuNC90LDQvdC40LUsINGH0YLQvtCx0Ysg0JLRiyDQvdC1INC30LDQsdGL0LvQuCDRg9GB0YLQsNC90L7QstC40YLRjCDRhtC10LvRjCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDQvdC10LTQtdC70Y4uJyxcclxuICAgICAgc3RhcnRUaW1lOiBgJHtSRU1JTkRFUl9EQVRFfVQxNTowMDowMGAsXHJcbiAgICAgIGVuZFRpbWU6IGAke1JFTUlOREVSX0RBVEV9VDE3OjAwOjAwYCxcclxuICAgICAgLy8gVE9ETzog0LLRi9C90LXRgdGC0Lgg0LIg0LrQvtC90YTQuNCzINC60L7Qs9C00LAg0L3QsNC/0L7QvNC40L3QsNGC0YwsINC60L7Qs9C00LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0L3QtdC00LXQu9GPXHJcbiAgICAgIHJlY3VycmVuY2U6IFtcclxuICAgICAgICAnUlJVTEU6RlJFUT1XRUVLTFk7QllEQVk9U1U7V0tTVD1NTydcclxuICAgICAgXSxcclxuICAgICAgcmVtaW5kZXJzOiBbXHJcbiAgICAgICAgeyBtZXRob2Q6ICdlbWFpbCcsIG1pbnV0ZXM6IDYwICogNCB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiAncG9wdXAnLCBtaW51dGVzOiA2MCAqIDIgfVxyXG4gICAgICBdXHJcbiAgICB9KSlcclxuICB9LCBbaXNMb2FkZWQsIHJlbWluZGVyXSlcclxuXHJcbiAgY29uc3QgY29udGV4dFJlZjogTXV0YWJsZVJlZk9iamVjdDxhbnk+ID0gdXNlUmVmKClcclxuICBjb25zdCBbc2VsZWN0ZWRXZWVrLCBzZXRTZWxlY3RlZFdlZWtdID0gdXNlU3RhdGU8SVdlZWsgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBjb3VudFllYXJzID0gT2JqZWN0LmtleXMoeWVhcnMpLmxlbmd0aFxyXG4gIGNvbnNvbGUubG9nKGNvdW50WWVhcnMpXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgJy0tY291bnQteWVhcnMnLFxyXG4gICAgICBTdHJpbmcoY291bnRZZWFycylcclxuICAgIClcclxuICB9LCBbY291bnRZZWFyc10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgPGEgaWQ9XCJsaWZlXCI+PC9hPlxyXG4gICAgICA8V2Vla0hlYWQgd2Vla3NJblllYXI9e0NPVU5UX1dFRUt9Lz5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBPYmplY3Qua2V5cyh5ZWFycykubWFwKCh5ZWFyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnllYXIpfSBrZXk9e2Ake3llYXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy53ZWVrLCBzdHlsZXMud2Vla0hlYWQsIHN0eWxlcy55ZWFySGVhZCl9Pnt5ZWFyfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXJzW3llYXJdLm1hcCgod2Vlaywgd2Vla0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxXZWVrIGtleT17d2Vla30gaWQ9e3dlZWt9IGZpbmRFdmVudHM9e2ZpbmRFdmVudHN9IHNlbGVjdGVkV2Vlaz17c2VsZWN0ZWRXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFdlZWs9e3NldFNlbGVjdGVkV2Vla30gY29udGV4dD17Y29udGV4dFJlZn0vPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxQb3B1cCBjb250ZXh0PXtjb250ZXh0UmVmfSBvcGVuPXshIXNlbGVjdGVkV2Vla30+XHJcbiAgICAgICAge3NlbGVjdGVkV2VlayAmJiAoXHJcbiAgICAgICAgICA8RXZlbnQgd2Vlaz17c2VsZWN0ZWRXZWVrfSBpbml0aWFsVmFsdWVzPXtmaW5kRXZlbnRzKHNlbGVjdGVkV2Vlay5zdGFydERhdGUsIHNlbGVjdGVkV2Vlay5lbmREYXRlKX0vPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUG9wdXA+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlXHJcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyIGFzIEgxLCBJY29uLCBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3Mvc3RvcmUnXHJcbmltcG9ydCB7IENPVU5UX1dFRUsgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBSb290SW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlJ1xyXG5pbXBvcnQgeyBjcmVhdGVDYWxlbmRhciwgZ2V0Q2FsZW5kYXIgfSBmcm9tICcuLi9zdG9yZS9jYWxlbmRhcidcclxuaW1wb3J0IHsgZ2V0Q2FsZW5kYXJJZCwgc2V0Q2FsZW5kYXJJZCB9IGZyb20gJy4uL3N0b3JlL2NhbGVuZGFySWQnXHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9mb3JtJ1xyXG5pbXBvcnQgeyB0b2dnbGVJc1Nob3dGb3JtLCB1cGRhdGVDb3VudHJ5IH0gZnJvbSAnLi4vc3RvcmUvbWFpblBhZ2UnXHJcbmltcG9ydCB7IGRlZmF1bHRTZWxlY3RlZENvdW50cnlJZCB9IGZyb20gJy4uL3N0b3JlL2F2ZXJhZ2VMaWZlWWVhcnMnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICAvLyBUT0RPOiBzaG93IGFsbCBlcnJvcnNcclxuICBjb25zdCB7XHJcbiAgICBpc1NpZ25lZEluLFxyXG4gICAgaXNTaWduZWRJbkZpcmViYXNlXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGF1dGggfSkgPT4gYXV0aClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZW1haWwsXHJcbiAgICBiaXJ0aGRheXMsXHJcbiAgICBzZXgsXHJcbiAgICBsb2NhbGVzXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IHVzZXIgfSkgPT4gdXNlcilcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQ6IGNhbGVuZGFySWQsXHJcbiAgICBlcnJvcjogY2FsZW5kYXJFcnJvcixcclxuICAgIGlzTG9hZGluZzogY2FsZW5kYXJJc0xvYWRpbmdcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXIgfSkgPT4gY2FsZW5kYXIpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkOiBjYWxlbmRhcklkUGVyc2lzdCxcclxuICAgIGxvYWRlZDogY2FsZW5kYXJJZExvYWRlZCxcclxuICAgIGVycm9yOiBjYWxlbmRhcklkRXJyb3IsXHJcbiAgICBpc0xvYWRpbmc6IGNhbGVuZGFySWRJc0xvYWRpbmdcclxuICB9ID0gdXNlQXBwU2VsZWN0b3IoKHsgY2FsZW5kYXJJZCB9KSA9PiBjYWxlbmRhcklkKVxyXG5cclxuICBjb25zdCB7IGlzU2hvd0Zvcm0sIGNvdW50cnkgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IG1haW5QYWdlIH0pID0+IG1haW5QYWdlKVxyXG5cclxuICBjb25zdCB7IGlzU2hvdzUzdGhXZWVrIH0gPSB1c2VBcHBTZWxlY3RvcigoeyB5ZWFyc0NvbmZpZyB9KSA9PiB5ZWFyc0NvbmZpZylcclxuXHJcbiAgY29uc3QgaXNTaG93NTN0aFdlZWtJbml0ID0gdXNlTWVtbygoKSA9PiBpc1Nob3c1M3RoV2VlaywgW10pXHJcblxyXG4gIC8vIFRPRE86INCy0YvQvdC10YHRgtC4INCyIGN1c3RvbUhvb2sg0L3QsNGH0LDQu9C+XHJcbiAgY29uc3QgW2NvdW50cnlJbml0LCBzZXRDb3VudHJ5SW5pdF0gPSB1c2VTdGF0ZShjb3VudHJ5KVxyXG5cclxuICBjb25zdCBpbml0aWFsRm9ybXMgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICBiaXJ0aGRheXM6IGJpcnRoZGF5cyxcclxuICAgIHNleDogc2V4LFxyXG4gICAgbG9jYWxlczogY291bnRyeUluaXQsXHJcbiAgICBpc1Nob3c1M3RoV2VlazogaXNTaG93NTN0aFdlZWtJbml0XHJcbiAgfSksIFtiaXJ0aGRheXMsIHNleCwgY291bnRyeUluaXQsIGlzU2hvdzUzdGhXZWVrSW5pdF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNvdW50cnkpIHtcclxuICAgICAgZGlzcGF0Y2godXBkYXRlQ291bnRyeShkZWZhdWx0U2VsZWN0ZWRDb3VudHJ5SWQpKVxyXG4gICAgfVxyXG4gIH0sIFtjb3VudHJ5XSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY291bnRyeUluaXQgJiYgY291bnRyeSkge1xyXG4gICAgICBzZXRDb3VudHJ5SW5pdChjb3VudHJ5KVxyXG4gICAgfVxyXG4gIH0sIFtjb3VudHJ5LCBjb3VudHJ5SW5pdF0pXHJcbiAgLy8gVE9ETzog0LLRi9C90LXRgdGC0Lgg0LIgY3VzdG9tSG9vayDQutC+0L3QtdGGXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZW1haWwgJiYgaXNTaWduZWRJbkZpcmViYXNlKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldENhbGVuZGFySWQoZW1haWwpKVxyXG4gICAgfVxyXG4gIH0sIFtpc1NpZ25lZEluRmlyZWJhc2UsIGVtYWlsXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FsZW5kYXJJZExvYWRlZCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FsZW5kYXJJZFBlcnNpc3QpIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0Q2FsZW5kYXIoY2FsZW5kYXJJZFBlcnNpc3QpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goY3JlYXRlQ2FsZW5kYXIoKSlcclxuICAgIH1cclxuICB9LCBbaXNTaWduZWRJbkZpcmViYXNlLCBlbWFpbCwgY2FsZW5kYXJJZFBlcnNpc3QsIGNhbGVuZGFySWRMb2FkZWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhbGVuZGFySWQgJiYgZW1haWwgJiYgaXNTaWduZWRJbkZpcmViYXNlICYmIGNhbGVuZGFySWRMb2FkZWQgJiYgIWNhbGVuZGFySWRQZXJzaXN0KSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldENhbGVuZGFySWQoeyBlbWFpbCwgY2FsZW5kYXJJZCB9KSlcclxuICAgIH1cclxuICB9LCBbaXNTaWduZWRJbkZpcmViYXNlLCBlbWFpbCwgY2FsZW5kYXJJZCwgY2FsZW5kYXJJZFBlcnNpc3QsIGNhbGVuZGFySWRMb2FkZWRdKVxyXG5cclxuICBjb25zdCBvbkNsaWNrU2hvd0Zvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh0b2dnbGVJc1Nob3dGb3JtKCkpLCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNhdGNoIHlvdXIgdGltZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIvPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgIDxIMSBhcz1cImgxXCIgY2xhc3NOYW1lPXtzdHlsZXMuaDF9PjxhIGhyZWY9XCIjbGlmZVwiPkNhdGNoIHlvdXIgdGltZTwvYT48L0gxPlxyXG4gICAgICAgICAgPEJ1dHRvbiBhY3RpdmU9e2lzU2hvd0Zvcm19IG9uQ2xpY2s9e29uQ2xpY2tTaG93Rm9ybX0gaWNvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwic2V0dGluZ1wiLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPHN1cD48TGFiZWwgY29sb3I9XCJ0ZWFsXCIgY2lyY3VsYXIgc2l6ZT1cInNtYWxsXCI+cHJlLWFscGhhPC9MYWJlbD48L3N1cD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvcm0gaW5pdGlhbFZhbHVlcz17aW5pdGlhbEZvcm1zfS8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8VGFibGUvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxSb290SW5pdGlhbFN0YXRlPiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgcGFnZTogJ21haW4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==