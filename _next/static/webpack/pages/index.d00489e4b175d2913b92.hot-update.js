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
___CSS_LOADER_EXPORT___.push([module.i, ".table_table__3RBCe {\n  display: -moz-box;\n  display: flex;\n  flex-wrap: wrap;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n.table_year__UDE80 {\n  display: -moz-box;\n  display: flex;\n}\n.table_year__UDE80:last-child .table_week__2NfJL {\n  border-bottom-width: 1px;\n}\n\n.table_week__2NfJL {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  width: -webkit-calc((100vh) / (var(--count-years) + 1));\n  width: -moz-calc((100vh) / (var(--count-years) + 1));\n  width: calc((100vh) / (var(--count-years) + 1));\n  height: -webkit-calc((100vh) / (var(--count-years) + 1));\n  height: -moz-calc((100vh) / (var(--count-years) + 1));\n  height: calc((100vh) / (var(--count-years) + 1));\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 255, 0.4);\n  border-bottom-width: 0;\n  border-left-width: 0;\n  background: rgba(0, 0, 255, 0.1);\n}\n.table_week__2NfJL:nth-child(2) {\n  border-left-width: 1px;\n}\n.table_week__2NfJL:nth-child(54) {\n  border-bottom-width: 1px;\n}\n\n.table_target__wqXR6 {\n  background: cadetblue;\n  width: 40%;\n  height: 40%;\n}\n\n.table_weekHead__J3vA7, .table_yearHead__1tUb1 {\n  border-color: #fff;\n  background: #fff;\n  font-size: -webkit-calc(.7vw);\n  font-size: -moz-calc(.7vw);\n  font-size: calc(.7vw);\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n}\n\n.table_weekPast__3MA38 {\n  border-color: rgba(0, 0, 0, 0.4);\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.table_weekCurrent__FcsEh {\n  border-color: #00FF00;\n  background: rgba(0, 255, 0, 0.3);\n  box-shadow: 0 1px 1px 1px #00FF00;\n}", "",{"version":3,"sources":["webpack://table.module.scss"],"names":[],"mappings":"AAIA;EACE,iBAAA;EAAA,aAAA;EACA,eAAA;EAGA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,iBAAA;AALF;;AAQA;EACE,iBAAA;EAAA,aAAA;AALF;AASI;EAGM,wBArBK;AAYf;;AAgBA;EACE,2BAAA;OAAA,sBAAA;EACA,uDAAA;EAAA,oDAAA;EAAA,+CAAA;EACA,wDAAA;EAAA,qDAAA;EAAA,gDAAA;EAKE,iBApCW;EAqCX,mBApCW;EAqCX,kCApCW;EAsCT,sBAAA;EAGA,oBAAA;EAIJ,gCAAA;AAvBF;AAyBE;EAGM,sBApDO;AA2Bf;AA8BE;EAGM,wBA5DO;AA8Bf;;AAoCA;EACE,qBAAA;EAEA,UADQ;EAER,WAFQ;AAhCV;;AAqCA;EACE,kBAAA;EACA,gBAAA;EACA,6BAAA;EAAA,0BAAA;EAAA,qBAAA;EACA,iBAAA;EAAA,aAAA;EACA,qBAAA;OAAA,uBAAA;EACA,sBAAA;OAAA,mBAAA;AAlCF;;AAqCA;EACE,gCAAA;EACA,8BAAA;AAlCF;;AAqCA;EACE,qBAAA;EACA,gCAAA;EACA,iCAAA;AAlCF","sourcesContent":["$border-width: 1px;\r\n$border-style: solid;\r\n$border-color: rgba(0, 0, 255, .4);\r\n\r\n.table {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  //width: 100%;\r\n\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.year {\r\n  display: flex;\r\n  //width: 100%;\r\n\r\n  &:last-child {\r\n    .week {\r\n      border: {\r\n        bottom: {\r\n          width: $border-width;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.week {\r\n  box-sizing: border-box;\r\n  width: calc((100vh) / (var(--count-years) + 1));\r\n  height: calc((100vh) / (var(--count-years) + 1));\r\n  //width: calc(100% / (var(--count-week) + 1));\r\n  //height: calc(100vw / (var(--count-week) + 1));\r\n\r\n  border: {\r\n    width: $border-width;\r\n    style: $border-style;\r\n    color: $border-color;\r\n    bottom: {\r\n      width: 0;\r\n    }\r\n    left: {\r\n      width: 0;\r\n    };\r\n  }\r\n\r\n  background: rgba(0, 0, 255, .1);\r\n\r\n  &:nth-child(2) {\r\n    border: {\r\n      left: {\r\n        width: $border-width;\r\n      };\r\n    }\r\n  }\r\n\r\n  &:nth-child(54) {\r\n    border: {\r\n      bottom: {\r\n        width: $border-width;\r\n      };\r\n    }\r\n  }\r\n}\r\n\r\n.target {\r\n  background: cadetblue;\r\n  $width: 40%;\r\n  width: $width;\r\n  height: $width;\r\n}\r\n\r\n.weekHead, .yearHead {\r\n  border-color: #fff;\r\n  background: #fff;\r\n  font-size: calc(.7vw);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.weekPast {\r\n  border-color: rgba(0, 0, 0, .4);\r\n  background: rgba(0, 0, 0, .3);\r\n}\r\n\r\n.weekCurrent {\r\n  border-color: #00FF00;\r\n  background: rgba(0, 255, 0, 0.3);\r\n  box-shadow: 0 1px 1px 1px #00FF00;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0JBQXdCLHNCQUFzQixrQkFBa0Isb0JBQW9CLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLHNCQUFzQixHQUFHLHdCQUF3QixzQkFBc0Isa0JBQWtCLEdBQUcsb0RBQW9ELDZCQUE2QixHQUFHLHdCQUF3QixnQ0FBZ0MsZ0NBQWdDLDREQUE0RCx5REFBeUQsb0RBQW9ELDZEQUE2RCwwREFBMEQscURBQXFELHNCQUFzQix3QkFBd0IsdUNBQXVDLDJCQUEyQix5QkFBeUIscUNBQXFDLEdBQUcsbUNBQW1DLDJCQUEyQixHQUFHLG9DQUFvQyw2QkFBNkIsR0FBRywwQkFBMEIsMEJBQTBCLGVBQWUsZ0JBQWdCLEdBQUcsb0RBQW9ELHVCQUF1QixxQkFBcUIsa0NBQWtDLCtCQUErQiwwQkFBMEIsc0JBQXNCLGtCQUFrQiwwQkFBMEIsaUNBQWlDLDJCQUEyQiw2QkFBNkIsR0FBRyw0QkFBNEIscUNBQXFDLG1DQUFtQyxHQUFHLCtCQUErQiwwQkFBMEIscUNBQXFDLHNDQUFzQyxHQUFHLE9BQU8sa0ZBQWtGLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLDZDQUE2Qyx5QkFBeUIsdUNBQXVDLGdCQUFnQixvQkFBb0Isc0JBQXNCLG9CQUFvQixpQ0FBaUMsd0JBQXdCLEtBQUssZUFBZSxvQkFBb0Isb0JBQW9CLHdCQUF3QixlQUFlLG1CQUFtQixxQkFBcUIsbUNBQW1DLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxlQUFlLDZCQUE2QixzREFBc0QsdURBQXVELG9EQUFvRCxzREFBc0QsbUJBQW1CLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLGlCQUFpQixtQkFBbUIsU0FBUyxlQUFlLG1CQUFtQixVQUFVLE9BQU8sMENBQTBDLDBCQUEwQixpQkFBaUIsaUJBQWlCLGlDQUFpQyxZQUFZLFNBQVMsT0FBTywyQkFBMkIsaUJBQWlCLG1CQUFtQixpQ0FBaUMsWUFBWSxTQUFTLE9BQU8sS0FBSyxpQkFBaUIsNEJBQTRCLGtCQUFrQixvQkFBb0IscUJBQXFCLEtBQUssOEJBQThCLHlCQUF5Qix1QkFBdUIsNEJBQTRCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssbUJBQW1CLHNDQUFzQyxvQ0FBb0MsS0FBSyxzQkFBc0IsNEJBQTRCLHVDQUF1Qyx3Q0FBd0MsS0FBSyx1QkFBdUI7QUFDdnFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMDA0ODllNGIxNzVkMjkxM2I5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYmxlX3RhYmxlX18zUkJDZSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLnRhYmxlX3llYXJfX1VERTgwIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRhYmxlX3llYXJfX1VERTgwOmxhc3QtY2hpbGQgLnRhYmxlX3dlZWtfXzJOZkpMIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLnRhYmxlX3dlZWtfXzJOZkpMIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoKDEwMHZoKSAvICh2YXIoLS1jb3VudC15ZWFycykgKyAxKSk7XFxuICB3aWR0aDogLW1vei1jYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcbiAgd2lkdGg6IGNhbGMoKDEwMHZoKSAvICh2YXIoLS1jb3VudC15ZWFycykgKyAxKSk7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygoMTAwdmgpIC8gKHZhcigtLWNvdW50LXllYXJzKSArIDEpKTtcXG4gIGhlaWdodDogLW1vei1jYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcbiAgaGVpZ2h0OiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC40KTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbn1cXG4udGFibGVfd2Vla19fMk5mSkw6bnRoLWNoaWxkKDIpIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XFxufVxcbi50YWJsZV93ZWVrX18yTmZKTDpudGgtY2hpbGQoNTQpIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLnRhYmxlX3RhcmdldF9fd3FYUjYge1xcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNDAlO1xcbn1cXG5cXG4udGFibGVfd2Vla0hlYWRfX0ozdkE3LCAudGFibGVfeWVhckhlYWRfXzF0VWIxIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBmb250LXNpemU6IC13ZWJraXQtY2FsYyguN3Z3KTtcXG4gIGZvbnQtc2l6ZTogLW1vei1jYWxjKC43dncpO1xcbiAgZm9udC1zaXplOiBjYWxjKC43dncpO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWJsZV93ZWVrUGFzdF9fM01BMzgge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi50YWJsZV93ZWVrQ3VycmVudF9fRmNzRWgge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBGRjAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMXB4ICMwMEZGMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly90YWJsZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFHQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0FBTEY7QUFTSTtFQUdNLHdCQXJCSztBQVlmOztBQWdCQTtFQUNFLDJCQUFBO09BQUEsc0JBQUE7RUFDQSx1REFBQTtFQUFBLG9EQUFBO0VBQUEsK0NBQUE7RUFDQSx3REFBQTtFQUFBLHFEQUFBO0VBQUEsZ0RBQUE7RUFLRSxpQkFwQ1c7RUFxQ1gsbUJBcENXO0VBcUNYLGtDQXBDVztFQXNDVCxzQkFBQTtFQUdBLG9CQUFBO0VBSUosZ0NBQUE7QUF2QkY7QUF5QkU7RUFHTSxzQkFwRE87QUEyQmY7QUE4QkU7RUFHTSx3QkE1RE87QUE4QmY7O0FBb0NBO0VBQ0UscUJBQUE7RUFFQSxVQURRO0VBRVIsV0FGUTtBQWhDVjs7QUFxQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSwwQkFBQTtFQUFBLHFCQUFBO0VBQ0EsaUJBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7T0FBQSx1QkFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUFsQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJvcmRlci13aWR0aDogMXB4O1xcclxcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAuNCk7XFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAvL3dpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ueWVhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLy93aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIC53ZWVrIHtcXHJcXG4gICAgICBib3JkZXI6IHtcXHJcXG4gICAgICAgIGJvdHRvbToge1xcclxcbiAgICAgICAgICB3aWR0aDogJGJvcmRlci13aWR0aDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLndlZWsge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKCgxMDB2aCkgLyAodmFyKC0tY291bnQteWVhcnMpICsgMSkpO1xcclxcbiAgLy93aWR0aDogY2FsYygxMDAlIC8gKHZhcigtLWNvdW50LXdlZWspICsgMSkpO1xcclxcbiAgLy9oZWlnaHQ6IGNhbGMoMTAwdncgLyAodmFyKC0tY291bnQtd2VlaykgKyAxKSk7XFxyXFxuXFxyXFxuICBib3JkZXI6IHtcXHJcXG4gICAgd2lkdGg6ICRib3JkZXItd2lkdGg7XFxyXFxuICAgIHN0eWxlOiAkYm9yZGVyLXN0eWxlO1xcclxcbiAgICBjb2xvcjogJGJvcmRlci1jb2xvcjtcXHJcXG4gICAgYm90dG9tOiB7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgbGVmdDoge1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcbiAgICB9O1xcclxcbiAgfVxcclxcblxcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIC4xKTtcXHJcXG5cXHJcXG4gICY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYm9yZGVyOiB7XFxyXFxuICAgICAgbGVmdDoge1xcclxcbiAgICAgICAgd2lkdGg6ICRib3JkZXItd2lkdGg7XFxyXFxuICAgICAgfTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJjpudGgtY2hpbGQoNTQpIHtcXHJcXG4gICAgYm9yZGVyOiB7XFxyXFxuICAgICAgYm90dG9tOiB7XFxyXFxuICAgICAgICB3aWR0aDogJGJvcmRlci13aWR0aDtcXHJcXG4gICAgICB9O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50YXJnZXQge1xcclxcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcclxcbiAgJHdpZHRoOiA0MCU7XFxyXFxuICB3aWR0aDogJHdpZHRoO1xcclxcbiAgaGVpZ2h0OiAkd2lkdGg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrSGVhZCwgLnllYXJIZWFkIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IGNhbGMoLjd2dyk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla1Bhc3Qge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0N1cnJlbnQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMDBGRjAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMXB4ICMwMEZGMDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRhYmxlXCI6IFwidGFibGVfdGFibGVfXzNSQkNlXCIsXG5cdFwieWVhclwiOiBcInRhYmxlX3llYXJfX1VERTgwXCIsXG5cdFwid2Vla1wiOiBcInRhYmxlX3dlZWtfXzJOZkpMXCIsXG5cdFwidGFyZ2V0XCI6IFwidGFibGVfdGFyZ2V0X193cVhSNlwiLFxuXHRcIndlZWtIZWFkXCI6IFwidGFibGVfd2Vla0hlYWRfX0ozdkE3XCIsXG5cdFwieWVhckhlYWRcIjogXCJ0YWJsZV95ZWFySGVhZF9fMXRVYjFcIixcblx0XCJ3ZWVrUGFzdFwiOiBcInRhYmxlX3dlZWtQYXN0X18zTUEzOFwiLFxuXHRcIndlZWtDdXJyZW50XCI6IFwidGFibGVfd2Vla0N1cnJlbnRfX0Zjc0VoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==