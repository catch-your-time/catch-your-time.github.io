webpackHotUpdate_N_E("pages/index",{

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
___CSS_LOADER_EXPORT___.push([module.i, ".table_table__3RBCe {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n.table_year__UDE80 {\n  display: -moz-box;\n  display: flex;\n}\n.table_year__UDE80:last-child .table_week__2NfJL {\n  border-bottom-width: 1px;\n}\n\n.table_week__2NfJL {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  width: -webkit-calc((100vh) / (var(--count-years) + 1));\n  width: -moz-calc((100vh) / (var(--count-years) + 1));\n  width: calc((100vh) / (var(--count-years) + 1));\n  height: -webkit-calc((100vh) / (var(--count-years) + 1));\n  height: -moz-calc((100vh) / (var(--count-years) + 1));\n  height: calc((100vh) / (var(--count-years) + 1));\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 255, 0.4);\n  border-bottom-width: 0;\n  border-left-width: 0;\n  background: rgba(0, 0, 255, 0.1);\n}\n.table_week__2NfJL:nth-child(2) {\n  border-left-width: 1px;\n}\n.table_week__2NfJL:nth-child(54) {\n  border-bottom-width: 1px;\n}\n\n.table_target__wqXR6 {\n  background: cadetblue;\n  width: 40%;\n  height: 40%;\n}\n\n.table_weekHead__J3vA7, .table_yearHead__1tUb1 {\n  border-color: #fff;\n  background: #fff;\n  font-size: 50%;\n  letter-spacing: 0;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n}\n\n.table_yearHead__1tUb1 {\n  min-width: 30px;\n  -moz-box-pack: end;\n       justify-content: flex-end;\n}\n\n.table_weekPast__3MA38 {\n  border-color: rgba(0, 0, 0, 0.4);\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.table_weekCurrent__FcsEh {\n  border-color: #00FF00;\n  background: rgba(0, 255, 0, 0.3);\n  box-shadow: 0 1px 1px 1px #00FF00;\n}", "",{"version":3,"sources":["webpack://table.module.scss"],"names":[],"mappings":"AAIA;EACE,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,iBAAA;AAHF;;AAMA;EACE,iBAAA;EAAA,aAAA;AAHF;AAMI;EAGM,wBAjBK;AAWf;;AAaA;EACE,2BAAA;OAAA,sBAAA;EACA,uDAAA;EAAA,oDAAA;EAAA,+CAAA;EACA,wDAAA;EAAA,qDAAA;EAAA,gDAAA;EAGE,iBA9BW;EA+BX,mBA9BW;EA+BX,kCA9BW;EAgCT,sBAAA;EAGA,oBAAA;EAIJ,gCAAA;AAlBF;AAoBE;EAGM,sBA9CO;AA0Bf;AAyBE;EAGM,wBAtDO;AA6Bf;;AA+BA;EACE,qBAAA;EAEA,UADQ;EAER,WAFQ;AA3BV;;AAgCA;EACE,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EAAA,aAAA;EACA,qBAAA;OAAA,uBAAA;EACA,sBAAA;OAAA,mBAAA;AA7BF;;AA+BA;EACE,eAAA;EACA,kBAAA;OAAA,yBAAA;AA5BF;;AA+BA;EACE,gCAAA;EACA,8BAAA;AA5BF;;AA+BA;EACE,qBAAA;EACA,gCAAA;EACA,iCAAA;AA5BF","sourcesContent":["$border-width: 1px;\r\n$border-style: solid;\r\n$border-color: rgba(0, 0, 255, .4);\r\n\r\n.table {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.year {\r\n  display: flex;\r\n\r\n  &:last-child {\r\n    .week {\r\n      border: {\r\n        bottom: {\r\n          width: $border-width;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.week {\r\n  box-sizing: border-box;\r\n  width: calc((100vh) / (var(--count-years) + 1));\r\n  height: calc((100vh) / (var(--count-years) + 1));\r\n\r\n  border: {\r\n    width: $border-width;\r\n    style: $border-style;\r\n    color: $border-color;\r\n    bottom: {\r\n      width: 0;\r\n    }\r\n    left: {\r\n      width: 0;\r\n    };\r\n  }\r\n\r\n  background: rgba(0, 0, 255, .1);\r\n\r\n  &:nth-child(2) {\r\n    border: {\r\n      left: {\r\n        width: $border-width;\r\n      };\r\n    }\r\n  }\r\n\r\n  &:nth-child(54) {\r\n    border: {\r\n      bottom: {\r\n        width: $border-width;\r\n      };\r\n    }\r\n  }\r\n}\r\n\r\n.target {\r\n  background: cadetblue;\r\n  $width: 40%;\r\n  width: $width;\r\n  height: $width;\r\n}\r\n\r\n.weekHead, .yearHead {\r\n  border-color: #fff;\r\n  background: #fff;\r\n  font-size: 50%;\r\n  letter-spacing: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.yearHead {\r\n  min-width: 30px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.weekPast {\r\n  border-color: rgba(0, 0, 0, .4);\r\n  background: rgba(0, 0, 0, .3);\r\n}\r\n\r\n.weekCurrent {\r\n  border-color: #00FF00;\r\n  background: rgba(0, 255, 0, 0.3);\r\n  box-shadow: 0 1px 1px 1px #00FF00;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0JBQXdCLHNCQUFzQixrQkFBa0IsOEJBQThCLCtCQUErQixnQ0FBZ0Msc0JBQXNCLEdBQUcsd0JBQXdCLHNCQUFzQixrQkFBa0IsR0FBRyxvREFBb0QsNkJBQTZCLEdBQUcsd0JBQXdCLGdDQUFnQyxnQ0FBZ0MsNERBQTRELHlEQUF5RCxvREFBb0QsNkRBQTZELDBEQUEwRCxxREFBcUQsc0JBQXNCLHdCQUF3Qix1Q0FBdUMsMkJBQTJCLHlCQUF5QixxQ0FBcUMsR0FBRyxtQ0FBbUMsMkJBQTJCLEdBQUcsb0NBQW9DLDZCQUE2QixHQUFHLDBCQUEwQiwwQkFBMEIsZUFBZSxnQkFBZ0IsR0FBRyxvREFBb0QsdUJBQXVCLHFCQUFxQixtQkFBbUIsc0JBQXNCLHNCQUFzQixrQkFBa0IsMEJBQTBCLGlDQUFpQywyQkFBMkIsNkJBQTZCLEdBQUcsNEJBQTRCLG9CQUFvQix1QkFBdUIsbUNBQW1DLEdBQUcsNEJBQTRCLHFDQUFxQyxtQ0FBbUMsR0FBRywrQkFBK0IsMEJBQTBCLHFDQUFxQyxzQ0FBc0MsR0FBRyxPQUFPLGtGQUFrRixXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyw2Q0FBNkMseUJBQXlCLHVDQUF1QyxnQkFBZ0Isb0JBQW9CLDZCQUE2Qix3QkFBd0IsS0FBSyxlQUFlLG9CQUFvQix3QkFBd0IsZUFBZSxtQkFBbUIscUJBQXFCLG1DQUFtQyxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssZUFBZSw2QkFBNkIsc0RBQXNELHVEQUF1RCxtQkFBbUIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsaUJBQWlCLG1CQUFtQixTQUFTLGVBQWUsbUJBQW1CLFVBQVUsT0FBTywwQ0FBMEMsMEJBQTBCLGlCQUFpQixpQkFBaUIsaUNBQWlDLFlBQVksU0FBUyxPQUFPLDJCQUEyQixpQkFBaUIsbUJBQW1CLGlDQUFpQyxZQUFZLFNBQVMsT0FBTyxLQUFLLGlCQUFpQiw0QkFBNEIsa0JBQWtCLG9CQUFvQixxQkFBcUIsS0FBSyw4QkFBOEIseUJBQXlCLHVCQUF1QixxQkFBcUIsd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssZUFBZSxzQkFBc0IsZ0NBQWdDLEtBQUssbUJBQW1CLHNDQUFzQyxvQ0FBb0MsS0FBSyxzQkFBc0IsNEJBQTRCLHVDQUF1Qyx3Q0FBd0MsS0FBSyx1QkFBdUI7QUFDbnBJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NmU1ZjFiMWQ2Nzc3ZWY3ZDM3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYmxlX3RhYmxlX18zUkJDZSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLnRhYmxlX3llYXJfX1VERTgwIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRhYmxlX3llYXJfX1VERTgwOmxhc3QtY2hpbGQgLnRhYmxlX3dlZWtfXzJOZkpMIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLnRhYmxlX3dlZWtfXzJOZkpMIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoKDEwMHZoKSAvICh2YXIoLS1jb3VudC15ZWFycykgKyAxKSk7XFxuICB3aWR0aDogLW1vei1jYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcbiAgd2lkdGg6IGNhbGMoKDEwMHZoKSAvICh2YXIoLS1jb3VudC15ZWFycykgKyAxKSk7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygoMTAwdmgpIC8gKHZhcigtLWNvdW50LXllYXJzKSArIDEpKTtcXG4gIGhlaWdodDogLW1vei1jYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcbiAgaGVpZ2h0OiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC40KTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbn1cXG4udGFibGVfd2Vla19fMk5mSkw6bnRoLWNoaWxkKDIpIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XFxufVxcbi50YWJsZV93ZWVrX18yTmZKTDpudGgtY2hpbGQoNTQpIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLnRhYmxlX3RhcmdldF9fd3FYUjYge1xcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNDAlO1xcbn1cXG5cXG4udGFibGVfd2Vla0hlYWRfX0ozdkE3LCAudGFibGVfeWVhckhlYWRfXzF0VWIxIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBmb250LXNpemU6IDUwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWJsZV95ZWFySGVhZF9fMXRVYjEge1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgLW1vei1ib3gtcGFjazogZW5kO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFibGVfd2Vla1Bhc3RfXzNNQTM4IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4udGFibGVfd2Vla0N1cnJlbnRfX0Zjc0VoIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwRkYwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDFweCAjMDBGRjAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vdGFibGUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0FBSEY7QUFNSTtFQUdNLHdCQWpCSztBQVdmOztBQWFBO0VBQ0UsMkJBQUE7T0FBQSxzQkFBQTtFQUNBLHVEQUFBO0VBQUEsb0RBQUE7RUFBQSwrQ0FBQTtFQUNBLHdEQUFBO0VBQUEscURBQUE7RUFBQSxnREFBQTtFQUdFLGlCQTlCVztFQStCWCxtQkE5Qlc7RUErQlgsa0NBOUJXO0VBZ0NULHNCQUFBO0VBR0Esb0JBQUE7RUFJSixnQ0FBQTtBQWxCRjtBQW9CRTtFQUdNLHNCQTlDTztBQTBCZjtBQXlCRTtFQUdNLHdCQXRETztBQTZCZjs7QUErQkE7RUFDRSxxQkFBQTtFQUVBLFVBRFE7RUFFUixXQUZRO0FBM0JWOztBQWdDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtPQUFBLHVCQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtBQTdCRjs7QUErQkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7T0FBQSx5QkFBQTtBQTVCRjs7QUErQkE7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FBNUJGOztBQStCQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQTVCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuJGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuJGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIC40KTtcXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnllYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIC53ZWVrIHtcXHJcXG4gICAgICBib3JkZXI6IHtcXHJcXG4gICAgICAgIGJvdHRvbToge1xcclxcbiAgICAgICAgICB3aWR0aDogJGJvcmRlci13aWR0aDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLndlZWsge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcclxcblxcclxcbiAgYm9yZGVyOiB7XFxyXFxuICAgIHdpZHRoOiAkYm9yZGVyLXdpZHRoO1xcclxcbiAgICBzdHlsZTogJGJvcmRlci1zdHlsZTtcXHJcXG4gICAgY29sb3I6ICRib3JkZXItY29sb3I7XFxyXFxuICAgIGJvdHRvbToge1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIGxlZnQ6IHtcXHJcXG4gICAgICB3aWR0aDogMDtcXHJcXG4gICAgfTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAuMSk7XFxyXFxuXFxyXFxuICAmOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIGJvcmRlcjoge1xcclxcbiAgICAgIGxlZnQ6IHtcXHJcXG4gICAgICAgIHdpZHRoOiAkYm9yZGVyLXdpZHRoO1xcclxcbiAgICAgIH07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6bnRoLWNoaWxkKDU0KSB7XFxyXFxuICAgIGJvcmRlcjoge1xcclxcbiAgICAgIGJvdHRvbToge1xcclxcbiAgICAgICAgd2lkdGg6ICRib3JkZXItd2lkdGg7XFxyXFxuICAgICAgfTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFyZ2V0IHtcXHJcXG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcXHJcXG4gICR3aWR0aDogNDAlO1xcclxcbiAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gIGhlaWdodDogJHdpZHRoO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0hlYWQsIC55ZWFySGVhZCB7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiA1MCU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi55ZWFySGVhZCB7XFxyXFxuICBtaW4td2lkdGg6IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla1Bhc3Qge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0N1cnJlbnQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMDBGRjAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMXB4ICMwMEZGMDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRhYmxlXCI6IFwidGFibGVfdGFibGVfXzNSQkNlXCIsXG5cdFwieWVhclwiOiBcInRhYmxlX3llYXJfX1VERTgwXCIsXG5cdFwid2Vla1wiOiBcInRhYmxlX3dlZWtfXzJOZkpMXCIsXG5cdFwidGFyZ2V0XCI6IFwidGFibGVfdGFyZ2V0X193cVhSNlwiLFxuXHRcIndlZWtIZWFkXCI6IFwidGFibGVfd2Vla0hlYWRfX0ozdkE3XCIsXG5cdFwieWVhckhlYWRcIjogXCJ0YWJsZV95ZWFySGVhZF9fMXRVYjFcIixcblx0XCJ3ZWVrUGFzdFwiOiBcInRhYmxlX3dlZWtQYXN0X18zTUEzOFwiLFxuXHRcIndlZWtDdXJyZW50XCI6IFwidGFibGVfd2Vla0N1cnJlbnRfX0Zjc0VoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==