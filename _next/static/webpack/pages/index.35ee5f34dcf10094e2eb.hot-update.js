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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    document.documentElement.style.setProperty('--count-years', String(countYears));
  }, [countYears]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_weekHead_weekHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
      weeksInYear: _constants_constants__WEBPACK_IMPORTED_MODULE_5__["COUNT_WEEK"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), Object.keys(years).map(function (year) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.year),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.week, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.weekHead, _table_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.yearHead),
          children: year
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
            lineNumber: 85,
            columnNumber: 19
          }, _this);
        })]
      }, "".concat(year), true, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
        lineNumber: 96,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/table/table.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/table/table.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table_table__3RBCe {\n  display: -moz-box;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  -moz-box-pack: center;\n       justify-content: center;\n}\n\n.table_year__UDE80 {\n  display: -moz-box;\n  display: flex;\n  width: 100%;\n}\n.table_year__UDE80:last-child .table_week__2NfJL {\n  border-bottom-width: 1px;\n}\n\n.table_week__2NfJL {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  width: -webkit-calc((100vh) / (var(--count-years) + 1));\n  width: -moz-calc((100vh) / (var(--count-years) + 1));\n  width: calc((100vh) / (var(--count-years) + 1));\n  height: -webkit-calc((100vh) / (var(--count-years) + 1));\n  height: -moz-calc((100vh) / (var(--count-years) + 1));\n  height: calc((100vh) / (var(--count-years) + 1));\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 255, 0.4);\n  border-bottom-width: 0;\n  border-left-width: 0;\n  background: rgba(0, 0, 255, 0.1);\n}\n.table_week__2NfJL:nth-child(2) {\n  border-left-width: 1px;\n}\n.table_week__2NfJL:nth-child(54) {\n  border-bottom-width: 1px;\n}\n\n.table_target__wqXR6 {\n  background: cadetblue;\n  width: 40%;\n  height: 40%;\n}\n\n.table_weekHead__J3vA7, .table_yearHead__1tUb1 {\n  border-color: #fff;\n  background: #fff;\n  font-size: -webkit-calc(.7vw);\n  font-size: -moz-calc(.7vw);\n  font-size: calc(.7vw);\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n}\n\n.table_weekPast__3MA38 {\n  border-color: rgba(0, 0, 0, 0.4);\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.table_weekCurrent__FcsEh {\n  border-color: #00FF00;\n  background: rgba(0, 255, 0, 0.3);\n  box-shadow: 0 1px 1px 1px #00FF00;\n}", "",{"version":3,"sources":["webpack://table.module.scss"],"names":[],"mappings":"AAIA;EACE,iBAAA;EAAA,aAAA;EACA,eAAA;EACA,WAAA;EACA,qBAAA;OAAA,uBAAA;AAHF;;AAMA;EACE,iBAAA;EAAA,aAAA;EACA,WAAA;AAHF;AAMI;EAGM,wBAnBK;AAaf;;AAaA;EACE,2BAAA;OAAA,sBAAA;EACA,uDAAA;EAAA,oDAAA;EAAA,+CAAA;EACA,wDAAA;EAAA,qDAAA;EAAA,gDAAA;EAKE,iBAlCW;EAmCX,mBAlCW;EAmCX,kCAlCW;EAoCT,sBAAA;EAGA,oBAAA;EAIJ,gCAAA;AApBF;AAsBE;EAGM,sBAlDO;AA4Bf;AA2BE;EAGM,wBA1DO;AA+Bf;;AAiCA;EACE,qBAAA;EAEA,UADQ;EAER,WAFQ;AA7BV;;AAkCA;EACE,kBAAA;EACA,gBAAA;EACA,6BAAA;EAAA,0BAAA;EAAA,qBAAA;EACA,iBAAA;EAAA,aAAA;EACA,qBAAA;OAAA,uBAAA;EACA,sBAAA;OAAA,mBAAA;AA/BF;;AAkCA;EACE,gCAAA;EACA,8BAAA;AA/BF;;AAkCA;EACE,qBAAA;EACA,gCAAA;EACA,iCAAA;AA/BF","sourcesContent":["$border-width: 1px;\r\n$border-style: solid;\r\n$border-color: rgba(0, 0, 255, .4);\r\n\r\n.table {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n.year {\r\n  display: flex;\r\n  width: 100%;\r\n\r\n  &:last-child {\r\n    .week {\r\n      border: {\r\n        bottom: {\r\n          width: $border-width;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.week {\r\n  box-sizing: border-box;\r\n  width: calc((100vh) / (var(--count-years) + 1));\r\n  height: calc((100vh) / (var(--count-years) + 1));\r\n  //width: calc(100% / (var(--count-week) + 1));\r\n  //height: calc(100vw / (var(--count-week) + 1));\r\n\r\n  border: {\r\n    width: $border-width;\r\n    style: $border-style;\r\n    color: $border-color;\r\n    bottom: {\r\n      width: 0;\r\n    }\r\n    left: {\r\n      width: 0;\r\n    };\r\n  }\r\n\r\n  background: rgba(0, 0, 255, .1);\r\n\r\n  &:nth-child(2) {\r\n    border: {\r\n      left: {\r\n        width: $border-width;\r\n      };\r\n    }\r\n  }\r\n\r\n  &:nth-child(54) {\r\n    border: {\r\n      bottom: {\r\n        width: $border-width;\r\n      };\r\n    }\r\n  }\r\n}\r\n\r\n.target {\r\n  background: cadetblue;\r\n  $width: 40%;\r\n  width: $width;\r\n  height: $width;\r\n}\r\n\r\n.weekHead, .yearHead {\r\n  border-color: #fff;\r\n  background: #fff;\r\n  font-size: calc(.7vw);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.weekPast {\r\n  border-color: rgba(0, 0, 0, .4);\r\n  background: rgba(0, 0, 0, .3);\r\n}\r\n\r\n.weekCurrent {\r\n  border-color: #00FF00;\r\n  background: rgba(0, 255, 0, 0.3);\r\n  box-shadow: 0 1px 1px 1px #00FF00;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"table": "table_table__3RBCe",
	"year": "table_year__UDE80",
	"week": "table_week__2NfJL",
	"target": "table_target__wqXR6",
	"weekHead": "table_weekHead__J3vA7",
	"yearHead": "table_yearHead__1tUb1",
	"weekPast": "table_weekPast__3MA38",
	"weekCurrent": "table_weekCurrent__FcsEh"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiUkVNSU5ERVJfREFURSIsIlRhYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwieWVhcnNDb25maWciLCJpc1Nob3c1M3RoV2VlayIsInllYXJzIiwiZ2V0WWVhcnMiLCJiaW5kIiwiY2FsZW5kYXIiLCJjYWxlbmRhcklkIiwiaWQiLCJldmVudCIsImJ5SWQiLCJpc0xvYWRlZCIsInVzZUVmZmVjdCIsImdldEV2ZW50cyIsImZpbmRFdmVudHMiLCJ1c2VNZW1vIiwiZmluZEV2ZW50c0J5RGF0ZSIsInJlbWluZGVyIiwiY3JlYXRlUmVtaW5kZXJFdmVudCIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJyZWN1cnJlbmNlIiwicmVtaW5kZXJzIiwibWV0aG9kIiwibWludXRlcyIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkV2VlayIsInNldFNlbGVjdGVkV2VlayIsImNvdW50WWVhcnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidXNlTGF5b3V0RWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiU3RyaW5nIiwic3R5bGVzIiwidGFibGUiLCJDT1VOVF9XRUVLIiwibWFwIiwieWVhciIsImNuIiwid2VlayIsIndlZWtIZWFkIiwieWVhckhlYWQiLCJ3ZWVrSW5kZXgiLCJzdGFydERhdGUiLCJlbmREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsWUFBdEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQix3QkFHU0MsbUVBQWMsQ0FBQztBQUFBLFFBQUdDLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFdBQXFCQSxXQUFyQjtBQUFBLEdBQUQsQ0FIdkI7QUFBQSxNQUdWQyxjQUhVLG1CQUdWQSxjQUhVOztBQUlsQixNQUFNQyxLQUFLLEdBQUdILG1FQUFjLENBQUNJLHNEQUFRLENBQUNDLElBQVQsQ0FBYyxJQUFkLEVBQW9CSCxjQUFwQixDQUFELENBQTVCOztBQUprQix5QkFRZEYsbUVBQWMsQ0FBQztBQUFBLFFBQUdNLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFdBQWtCQSxRQUFsQjtBQUFBLEdBQUQsQ0FSQTtBQUFBLE1BT1pDLFVBUFksb0JBT2hCQyxFQVBnQjs7QUFBQSx5QkFhZFIsbUVBQWMsQ0FBQztBQUFBLFFBQUdTLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWVBLEtBQWY7QUFBQSxHQUFELENBYkE7QUFBQSxNQVdoQkMsSUFYZ0Isb0JBV2hCQSxJQVhnQjtBQUFBLE1BWWhCQyxRQVpnQixvQkFZaEJBLFFBWmdCOztBQWVsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsVUFBSixFQUFnQjtBQUNkVCxjQUFRLENBQUNlLDhEQUFTLEVBQVYsQ0FBUjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNOLFVBQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTU8sVUFBVSxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTUMsMEVBQWdCLENBQUNOLElBQUQsQ0FBdEI7QUFBQSxHQUFELEVBQStCLENBQUNBLElBQUQsQ0FBL0IsQ0FBMUI7QUFFQSxNQUFNTyxRQUFRLEdBQUdGLHFEQUFPLENBQUM7QUFBQSxXQUFNRCxVQUFVLENBQUNsQixhQUFELEVBQWdCQSxhQUFoQixDQUFoQjtBQUFBLEdBQUQsRUFBaUQsQ0FBQ2MsSUFBRCxDQUFqRCxDQUF4QjtBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNELFFBQUQsSUFBYU0sUUFBakIsRUFBMkI7QUFDekI7QUFDRDs7QUFFRG5CLFlBQVEsQ0FBQ29CLHdFQUFtQixDQUFDO0FBQzNCQyxhQUFPLEVBQUUsa0NBRGtCO0FBRTNCQyxpQkFBVyxFQUFFLDBFQUZjO0FBRzNCQyxlQUFTLFlBQUt6QixhQUFMLGNBSGtCO0FBSTNCMEIsYUFBTyxZQUFLMUIsYUFBTCxjQUpvQjtBQUszQjtBQUNBMkIsZ0JBQVUsRUFBRSxDQUNWLG9DQURVLENBTmU7QUFTM0JDLGVBQVMsRUFBRSxDQUNUO0FBQUVDLGNBQU0sRUFBRSxPQUFWO0FBQW1CQyxlQUFPLEVBQUUsS0FBSztBQUFqQyxPQURTLEVBRVQ7QUFBRUQsY0FBTSxFQUFFLE9BQVY7QUFBbUJDLGVBQU8sRUFBRSxLQUFLO0FBQWpDLE9BRlM7QUFUZ0IsS0FBRCxDQUFwQixDQUFSO0FBY0QsR0FuQlEsRUFtQk4sQ0FBQ2YsUUFBRCxFQUFXTSxRQUFYLENBbkJNLENBQVQ7QUFxQkEsTUFBTVUsVUFBaUMsR0FBR0Msb0RBQU0sRUFBaEQ7O0FBOUNrQixrQkErQ3NCQyxzREFBUSxDQUFlLElBQWYsQ0EvQzlCO0FBQUEsTUErQ1hDLFlBL0NXO0FBQUEsTUErQ0dDLGVBL0NIOztBQWlEbEIsTUFBTUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWS9CLEtBQVosRUFBbUJnQyxNQUF0QztBQUNBQywrREFBZSxDQUFDLFlBQU07QUFDcEJDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsS0FBekIsQ0FBK0JDLFdBQS9CLENBQ0UsZUFERixFQUVFQyxNQUFNLENBQUNULFVBQUQsQ0FGUjtBQUlELEdBTGMsRUFLWixDQUFDQSxVQUFELENBTFksQ0FBZjtBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFVSx5REFBTSxDQUFDQyxLQUF2QjtBQUFBLDRCQUNFLHNFQUFDLDJEQUFEO0FBQVUsaUJBQVcsRUFBRUMsK0RBQVVBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlJWCxNQUFNLENBQUNDLElBQVAsQ0FBWS9CLEtBQVosRUFBbUIwQyxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDL0IsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFQyxpREFBRSxDQUFDTCx5REFBTSxDQUFDSSxJQUFSLENBQWxCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQyxpREFBRSxDQUFDTCx5REFBTSxDQUFDTSxJQUFSLEVBQWNOLHlEQUFNLENBQUNPLFFBQXJCLEVBQStCUCx5REFBTSxDQUFDUSxRQUF0QyxDQUFsQjtBQUFBLG9CQUFvRUo7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUdJM0MsS0FBSyxDQUFDMkMsSUFBRCxDQUFMLENBQVlELEdBQVosQ0FBZ0IsVUFBQ0csSUFBRCxFQUFPRyxTQUFQO0FBQUEsOEJBQ2Qsc0VBQUMsbURBQUQ7QUFBaUIsY0FBRSxFQUFFSCxJQUFyQjtBQUEyQixzQkFBVSxFQUFFbEMsVUFBdkM7QUFBbUQsd0JBQVksRUFBRWdCLFlBQWpFO0FBQ00sMkJBQWUsRUFBRUMsZUFEdkI7QUFDd0MsbUJBQU8sRUFBRUo7QUFEakQsYUFBV3FCLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWhCLENBSEo7QUFBQSxtQkFBeUNGLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELEtBWkQsQ0FKSixlQW1CRSxzRUFBQyx1REFBRDtBQUFPLGFBQU8sRUFBRW5CLFVBQWhCO0FBQTRCLFVBQUksRUFBRSxDQUFDLENBQUNHLFlBQXBDO0FBQUEsZ0JBQ0dBLFlBQVksaUJBQ1gsc0VBQUMsb0RBQUQ7QUFBTyxZQUFJLEVBQUVBLFlBQWI7QUFBMkIscUJBQWEsRUFBRWhCLFVBQVUsQ0FBQ2dCLFlBQVksQ0FBQ3NCLFNBQWQsRUFBeUJ0QixZQUFZLENBQUN1QixPQUF0QztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXBGRDs7R0FBTXhELEs7VUFDYUUsdUQsRUFFVUMsMkQsRUFDYkEsMkQsRUFJVkEsMkQsRUFLQUEsMkQ7OztLQWJBSCxLO0FBc0ZTQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx3QkFBd0Isc0JBQXNCLGtCQUFrQixvQkFBb0IsZ0JBQWdCLDBCQUEwQixpQ0FBaUMsR0FBRyx3QkFBd0Isc0JBQXNCLGtCQUFrQixnQkFBZ0IsR0FBRyxvREFBb0QsNkJBQTZCLEdBQUcsd0JBQXdCLGdDQUFnQyxnQ0FBZ0MsNERBQTRELHlEQUF5RCxvREFBb0QsNkRBQTZELDBEQUEwRCxxREFBcUQsc0JBQXNCLHdCQUF3Qix1Q0FBdUMsMkJBQTJCLHlCQUF5QixxQ0FBcUMsR0FBRyxtQ0FBbUMsMkJBQTJCLEdBQUcsb0NBQW9DLDZCQUE2QixHQUFHLDBCQUEwQiwwQkFBMEIsZUFBZSxnQkFBZ0IsR0FBRyxvREFBb0QsdUJBQXVCLHFCQUFxQixrQ0FBa0MsK0JBQStCLDBCQUEwQixzQkFBc0Isa0JBQWtCLDBCQUEwQixpQ0FBaUMsMkJBQTJCLDZCQUE2QixHQUFHLDRCQUE0QixxQ0FBcUMsbUNBQW1DLEdBQUcsK0JBQStCLDBCQUEwQixxQ0FBcUMsc0NBQXNDLEdBQUcsT0FBTyxrRkFBa0YsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsNkNBQTZDLHlCQUF5Qix1Q0FBdUMsZ0JBQWdCLG9CQUFvQixzQkFBc0Isa0JBQWtCLDhCQUE4QixLQUFLLGVBQWUsb0JBQW9CLGtCQUFrQix3QkFBd0IsZUFBZSxtQkFBbUIscUJBQXFCLG1DQUFtQyxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssZUFBZSw2QkFBNkIsc0RBQXNELHVEQUF1RCxvREFBb0Qsc0RBQXNELG1CQUFtQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixpQkFBaUIsbUJBQW1CLFNBQVMsZUFBZSxtQkFBbUIsVUFBVSxPQUFPLDBDQUEwQywwQkFBMEIsaUJBQWlCLGlCQUFpQixpQ0FBaUMsWUFBWSxTQUFTLE9BQU8sMkJBQTJCLGlCQUFpQixtQkFBbUIsaUNBQWlDLFlBQVksU0FBUyxPQUFPLEtBQUssaUJBQWlCLDRCQUE0QixrQkFBa0Isb0JBQW9CLHFCQUFxQixLQUFLLDhCQUE4Qix5QkFBeUIsdUJBQXVCLDRCQUE0QixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLG1CQUFtQixzQ0FBc0Msb0NBQW9DLEtBQUssc0JBQXNCLDRCQUE0Qix1Q0FBdUMsd0NBQXdDLEtBQUssdUJBQXVCO0FBQzdtSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzVlZTVmMzRkY2YxMDA5NGUyZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFibGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IENPVU5UX1dFRUsgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBjcmVhdGVSZW1pbmRlckV2ZW50LCBnZXRFdmVudHMgfSBmcm9tICcuLi8uLi9zdG9yZS9ldmVudCdcclxuaW1wb3J0IGZpbmRFdmVudHNCeURhdGUgZnJvbSAnLi4vLi4vc2VydmljZXMvZmluZEV2ZW50c0J5RGF0ZSdcclxuaW1wb3J0IEV2ZW50IGZyb20gJy4uL2V2ZW50L2V2ZW50J1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3N0b3JlJ1xyXG5pbXBvcnQgeyBnZXRZZWFycywgV2VlayBhcyBJV2VlayB9IGZyb20gJy4uLy4uL3N0b3JlL3llYXJzJ1xyXG5pbXBvcnQgV2VlayBmcm9tICcuLi93ZWVrL3dlZWsnXHJcbmltcG9ydCBXZWVrSGVhZCBmcm9tICcuLi93ZWVrSGVhZC93ZWVrSGVhZCdcclxuXHJcbmNvbnN0IFJFTUlOREVSX0RBVEUgPSAnMjAyMS0wMS0wMSdcclxuXHJcbmNvbnN0IFRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICBjb25zdCB7IGlzU2hvdzUzdGhXZWVrIH0gPSB1c2VBcHBTZWxlY3RvcigoeyB5ZWFyc0NvbmZpZyB9KSA9PiB5ZWFyc0NvbmZpZylcclxuICBjb25zdCB5ZWFycyA9IHVzZUFwcFNlbGVjdG9yKGdldFllYXJzLmJpbmQobnVsbCwgaXNTaG93NTN0aFdlZWspKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZDogY2FsZW5kYXJJZFxyXG4gIH0gPSB1c2VBcHBTZWxlY3RvcigoeyBjYWxlbmRhciB9KSA9PiBjYWxlbmRhcilcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgYnlJZCxcclxuICAgIGlzTG9hZGVkXHJcbiAgfSA9IHVzZUFwcFNlbGVjdG9yKCh7IGV2ZW50IH0pID0+IGV2ZW50KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhbGVuZGFySWQpIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0RXZlbnRzKCkpXHJcbiAgICB9XHJcbiAgfSwgW2NhbGVuZGFySWRdKVxyXG5cclxuICBjb25zdCBmaW5kRXZlbnRzID0gdXNlTWVtbygoKSA9PiBmaW5kRXZlbnRzQnlEYXRlKGJ5SWQpLCBbYnlJZF0pXHJcblxyXG4gIGNvbnN0IHJlbWluZGVyID0gdXNlTWVtbygoKSA9PiBmaW5kRXZlbnRzKFJFTUlOREVSX0RBVEUsIFJFTUlOREVSX0RBVEUpLCBbYnlJZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTG9hZGVkIHx8IHJlbWluZGVyKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKGNyZWF0ZVJlbWluZGVyRXZlbnQoe1xyXG4gICAgICBzdW1tYXJ5OiAn0KHQvtC30LTQsNGC0Ywg0YbQtdC70Ywg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0L3QtdC00LXQu9GOJyxcclxuICAgICAgZGVzY3JpcHRpb246ICfQrdGC0L4g0L3QsNC/0L7QvNC40L3QsNC90LjQtSwg0YfRgtC+0LHRiyDQktGLINC90LUg0LfQsNCx0YvQu9C4INGD0YHRgtCw0L3QvtCy0LjRgtGMINGG0LXQu9GMINC90LAg0YHQu9C10LTRg9GO0YnRg9GOINC90LXQtNC10LvRji4nLFxyXG4gICAgICBzdGFydFRpbWU6IGAke1JFTUlOREVSX0RBVEV9VDE1OjAwOjAwYCxcclxuICAgICAgZW5kVGltZTogYCR7UkVNSU5ERVJfREFURX1UMTc6MDA6MDBgLFxyXG4gICAgICAvLyBUT0RPOiDQstGL0L3QtdGB0YLQuCDQsiDQutC+0L3RhNC40LMg0LrQvtCz0LTQsCDQvdCw0L/QvtC80LjQvdCw0YLRjCwg0LrQvtCz0LTQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDQvdC10LTQtdC70Y9cclxuICAgICAgcmVjdXJyZW5jZTogW1xyXG4gICAgICAgICdSUlVMRTpGUkVRPVdFRUtMWTtCWURBWT1TVTtXS1NUPU1PJ1xyXG4gICAgICBdLFxyXG4gICAgICByZW1pbmRlcnM6IFtcclxuICAgICAgICB7IG1ldGhvZDogJ2VtYWlsJywgbWludXRlczogNjAgKiA0IH0sXHJcbiAgICAgICAgeyBtZXRob2Q6ICdwb3B1cCcsIG1pbnV0ZXM6IDYwICogMiB9XHJcbiAgICAgIF1cclxuICAgIH0pKVxyXG4gIH0sIFtpc0xvYWRlZCwgcmVtaW5kZXJdKVxyXG5cclxuICBjb25zdCBjb250ZXh0UmVmOiBNdXRhYmxlUmVmT2JqZWN0PGFueT4gPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFdlZWssIHNldFNlbGVjdGVkV2Vla10gPSB1c2VTdGF0ZTxJV2VlayB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnN0IGNvdW50WWVhcnMgPSBPYmplY3Qua2V5cyh5ZWFycykubGVuZ3RoXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgJy0tY291bnQteWVhcnMnLFxyXG4gICAgICBTdHJpbmcoY291bnRZZWFycylcclxuICAgIClcclxuICB9LCBbY291bnRZZWFyc10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgPFdlZWtIZWFkIHdlZWtzSW5ZZWFyPXtDT1VOVF9XRUVLfS8+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoeWVhcnMpLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy55ZWFyKX0ga2V5PXtgJHt5ZWFyfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMud2Vlaywgc3R5bGVzLndlZWtIZWFkLCBzdHlsZXMueWVhckhlYWQpfT57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyc1t5ZWFyXS5tYXAoKHdlZWssIHdlZWtJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8V2VlayBrZXk9e3dlZWt9IGlkPXt3ZWVrfSBmaW5kRXZlbnRzPXtmaW5kRXZlbnRzfSBzZWxlY3RlZFdlZWs9e3NlbGVjdGVkV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRXZWVrPXtzZXRTZWxlY3RlZFdlZWt9IGNvbnRleHQ9e2NvbnRleHRSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICA8UG9wdXAgY29udGV4dD17Y29udGV4dFJlZn0gb3Blbj17ISFzZWxlY3RlZFdlZWt9PlxyXG4gICAgICAgIHtzZWxlY3RlZFdlZWsgJiYgKFxyXG4gICAgICAgICAgPEV2ZW50IHdlZWs9e3NlbGVjdGVkV2Vla30gaW5pdGlhbFZhbHVlcz17ZmluZEV2ZW50cyhzZWxlY3RlZFdlZWsuc3RhcnREYXRlLCBzZWxlY3RlZFdlZWsuZW5kRGF0ZSl9Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BvcHVwPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxyXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGVfdGFibGVfXzNSQkNlIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhYmxlX3llYXJfX1VERTgwIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFibGVfeWVhcl9fVURFODA6bGFzdC1jaGlsZCAudGFibGVfd2Vla19fMk5mSkwge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4udGFibGVfd2Vla19fMk5mSkwge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygoMTAwdmgpIC8gKHZhcigtLWNvdW50LXllYXJzKSArIDEpKTtcXG4gIHdpZHRoOiAtbW96LWNhbGMoKDEwMHZoKSAvICh2YXIoLS1jb3VudC15ZWFycykgKyAxKSk7XFxuICB3aWR0aDogY2FsYygoMTAwdmgpIC8gKHZhcigtLWNvdW50LXllYXJzKSArIDEpKTtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcbiAgaGVpZ2h0OiAtbW96LWNhbGMoKDEwMHZoKSAvICh2YXIoLS1jb3VudC15ZWFycykgKyAxKSk7XFxuICBoZWlnaHQ6IGNhbGMoKDEwMHZoKSAvICh2YXIoLS1jb3VudC15ZWFycykgKyAxKSk7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjQpO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxufVxcbi50YWJsZV93ZWVrX18yTmZKTDpudGgtY2hpbGQoMikge1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG59XFxuLnRhYmxlX3dlZWtfXzJOZkpMOm50aC1jaGlsZCg1NCkge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4udGFibGVfdGFyZ2V0X193cVhSNiB7XFxuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxufVxcblxcbi50YWJsZV93ZWVrSGVhZF9fSjN2QTcsIC50YWJsZV95ZWFySGVhZF9fMXRVYjEge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogLXdlYmtpdC1jYWxjKC43dncpO1xcbiAgZm9udC1zaXplOiAtbW96LWNhbGMoLjd2dyk7XFxuICBmb250LXNpemU6IGNhbGMoLjd2dyk7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYmxlX3dlZWtQYXN0X18zTUEzOCB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnRhYmxlX3dlZWtDdXJyZW50X19GY3NFaCB7XFxuICBib3JkZXItY29sb3I6ICMwMEZGMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAxcHggIzAwRkYwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3RhYmxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtPQUFBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FBSEY7QUFNSTtFQUdNLHdCQW5CSztBQWFmOztBQWFBO0VBQ0UsMkJBQUE7T0FBQSxzQkFBQTtFQUNBLHVEQUFBO0VBQUEsb0RBQUE7RUFBQSwrQ0FBQTtFQUNBLHdEQUFBO0VBQUEscURBQUE7RUFBQSxnREFBQTtFQUtFLGlCQWxDVztFQW1DWCxtQkFsQ1c7RUFtQ1gsa0NBbENXO0VBb0NULHNCQUFBO0VBR0Esb0JBQUE7RUFJSixnQ0FBQTtBQXBCRjtBQXNCRTtFQUdNLHNCQWxETztBQTRCZjtBQTJCRTtFQUdNLHdCQTFETztBQStCZjs7QUFpQ0E7RUFDRSxxQkFBQTtFQUVBLFVBRFE7RUFFUixXQUZRO0FBN0JWOztBQWtDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLDBCQUFBO0VBQUEscUJBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtPQUFBLHVCQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FBL0JGOztBQWtDQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQS9CRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuJGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuJGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIC40KTtcXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi55ZWFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIC53ZWVrIHtcXHJcXG4gICAgICBib3JkZXI6IHtcXHJcXG4gICAgICAgIGJvdHRvbToge1xcclxcbiAgICAgICAgICB3aWR0aDogJGJvcmRlci13aWR0aDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLndlZWsge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcclxcbiAgLy93aWR0aDogY2FsYygxMDAlIC8gKHZhcigtLWNvdW50LXdlZWspICsgMSkpO1xcclxcbiAgLy9oZWlnaHQ6IGNhbGMoMTAwdncgLyAodmFyKC0tY291bnQtd2VlaykgKyAxKSk7XFxyXFxuXFxyXFxuICBib3JkZXI6IHtcXHJcXG4gICAgd2lkdGg6ICRib3JkZXItd2lkdGg7XFxyXFxuICAgIHN0eWxlOiAkYm9yZGVyLXN0eWxlO1xcclxcbiAgICBjb2xvcjogJGJvcmRlci1jb2xvcjtcXHJcXG4gICAgYm90dG9tOiB7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgbGVmdDoge1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcbiAgICB9O1xcclxcbiAgfVxcclxcblxcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIC4xKTtcXHJcXG5cXHJcXG4gICY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYm9yZGVyOiB7XFxyXFxuICAgICAgbGVmdDoge1xcclxcbiAgICAgICAgd2lkdGg6ICRib3JkZXItd2lkdGg7XFxyXFxuICAgICAgfTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJjpudGgtY2hpbGQoNTQpIHtcXHJcXG4gICAgYm9yZGVyOiB7XFxyXFxuICAgICAgYm90dG9tOiB7XFxyXFxuICAgICAgICB3aWR0aDogJGJvcmRlci13aWR0aDtcXHJcXG4gICAgICB9O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50YXJnZXQge1xcclxcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcclxcbiAgJHdpZHRoOiA0MCU7XFxyXFxuICB3aWR0aDogJHdpZHRoO1xcclxcbiAgaGVpZ2h0OiAkd2lkdGg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrSGVhZCwgLnllYXJIZWFkIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IGNhbGMoLjd2dyk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla1Bhc3Qge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0N1cnJlbnQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMDBGRjAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMXB4ICMwMEZGMDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRhYmxlXCI6IFwidGFibGVfdGFibGVfXzNSQkNlXCIsXG5cdFwieWVhclwiOiBcInRhYmxlX3llYXJfX1VERTgwXCIsXG5cdFwid2Vla1wiOiBcInRhYmxlX3dlZWtfXzJOZkpMXCIsXG5cdFwidGFyZ2V0XCI6IFwidGFibGVfdGFyZ2V0X193cVhSNlwiLFxuXHRcIndlZWtIZWFkXCI6IFwidGFibGVfd2Vla0hlYWRfX0ozdkE3XCIsXG5cdFwieWVhckhlYWRcIjogXCJ0YWJsZV95ZWFySGVhZF9fMXRVYjFcIixcblx0XCJ3ZWVrUGFzdFwiOiBcInRhYmxlX3dlZWtQYXN0X18zTUEzOFwiLFxuXHRcIndlZWtDdXJyZW50XCI6IFwidGFibGVfd2Vla0N1cnJlbnRfX0Zjc0VoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==