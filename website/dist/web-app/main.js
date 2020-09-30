(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_services_offered_services_offered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/services-offered/services-offered.component */ "./src/app/components/services-offered/services-offered.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_care_tips_care_tips_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/care-tips/care-tips.component */ "./src/app/components/care-tips/care-tips.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");








var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Services', component: _components_services_offered_services_offered_component__WEBPACK_IMPORTED_MODULE_4__["ServicesOfferedComponent"] },
    { path: 'Gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"] },
    { path: 'CareTips', component: _components_care_tips_care_tips_component__WEBPACK_IMPORTED_MODULE_6__["CareTipsComponent"] },
    { path: 'ContactUS', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tan z-depth-2\">\n  <app-navbar></app-navbar>\n  <div class=\"outlet-container\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #eee; }\nh2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 32px;\n  color: #EA1C30;\n  font-weight: 600; }\nh2 span {\n    color: #fff;\n    margin: 0 15px; }\nh2:before {\n    background: #EA1C30;\n    height: 2px;\n    -webkit-box-flex: 0.15;\n            flex: 0.15;\n    content: ''; }\nh2.left:after {\n    background: none; }\np {\n  font-size: 20px;\n  line-height: 1.8; }\nli {\n  font-size: 20px; }\n.box {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.box p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\n.main-text {\n  color: #EA1C30; }\n@media (max-width: 650px) {\n  h2 {\n    font-size: 22px; }\n  p {\n    font-size: 18px;\n    line-height: 1.4; }\n  .box {\n    margin-top: 25px;\n    padding: 15px; }\n    .box p {\n      font-size: 18px;\n      line-height: 1.3; }\n  li {\n    font-size: 18px; } }\n.tan {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(120, 144, 156, 0.3)), to(rgba(120, 144, 156, 0.3))), url('bg.jpg');\n  background: linear-gradient(rgba(120, 144, 156, 0.3), rgba(120, 144, 156, 0.3)), url('bg.jpg');\n  background-position: left center;\n  background-repeat: repeat-y; }\n.outlet-container {\n  min-height: 600px;\n  padding-top: 25px;\n  padding-bottom: 25px; }\n.container {\n  padding: 35px;\n  border-radius: 5px;\n  background: #e4eaeb; }\n@media (max-width: 1150px) {\n  .outlet-container {\n    padding: 0; }\n  .container {\n    padding: 10px; } }\n/*\n@media (max-width:650px){\n\n  .container {\n    background: #cfd8dc;\n  }\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21pZ3VlbGNoYXZlei9SZXBvcy9HaWZ0V3JhcHBpbmcvd2ViLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtBQVVsQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBVGE7RUFVYixnQkFBZ0IsRUFBQTtBQUxsQjtJQVFJLFdBWlM7SUFhWCxjQUFjLEVBQUE7QUFUaEI7SUFhSSxtQkFsQlc7SUFtQlgsV0FBVztJQUNYLHNCQUFVO1lBQVYsVUFBVTtJQUNWLFdBQVcsRUFBQTtBQWhCZjtJQW1CSSxnQkFBZ0IsRUFBQTtBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG1CQXRDYTtFQXVDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBSnBCO0lBTUksV0ExQ1M7SUEyQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBSWI7RUFDRSxjQXBEYSxFQUFBO0FBd0RmO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0lBRmY7TUFJSSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7QUNoRkg7RUFFRSx3SUFBdUc7RUFBdkcsOEZBQXVHO0VBQ3ZHLGdDQUFnQztFQUNoQywyQkFBMkIsRUFBQTtBQUc3QjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7QUFJdEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CRFZrQixFQUFBO0FDY3BCO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLGFBQWEsRUFBQSxFQUNkO0FBR0g7Ozs7OztFQ3FERSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG5cbiRwYWxldHRlOiAoXG4gIG1haW46ICNFQTFDMzAsXG4gIHdoaXRlOiAjZmZmLFxuICBvZmYtV2hpdGU6ICNlNGVhZWJcbik7XG5cbmgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSx3aGl0ZSk7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB9XG5cbiAgJjpiZWZvcmV7XG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBmbGV4OiAwLjE1O1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG4gICYubGVmdDphZnRlcntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG5cbmxpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZDogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwIHtcbiAgICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSx3aGl0ZSk7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ubWFpbi10ZXh0IHtcbiAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG4gIC5ib3gge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgfVxuICB9XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vLi4vc3R5bGVzLnNjc3MnO1xuXG4udGFuIHtcblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxMjAsMTQ0LDE1NiwuMyksIHJnYmEoMTIwLDE0NCwxNTYsLjMpKSwgdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2JnLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xufVxuXG4ub3V0bGV0LWNvbnRhaW5lcntcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG9mZi1XaGl0ZSk7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6MTE1MHB4KSB7XG4gIC5vdXRsZXQtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuXG4vKlxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpe1xuXG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNjZmQ4ZGM7XG4gIH1cbn0qL1xuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7IH1cblxuaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjRUExQzMwO1xuICBmb250LXdlaWdodDogNjAwOyB9XG4gIGgyIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMCAxNXB4OyB9XG4gIGgyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI0VBMUMzMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBmbGV4OiAwLjE1O1xuICAgIGNvbnRlbnQ6ICcnOyB9XG4gIGgyLmxlZnQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuODsgfVxuXG5saSB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZDogI0VBMUMzMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gIC5ib3ggcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDsgfVxuXG4ubWFpbi10ZXh0IHtcbiAgY29sb3I6ICNFQTFDMzA7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7IH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7IH1cbiAgLmJveCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAxNXB4OyB9XG4gICAgLmJveCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7IH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMThweDsgfSB9XG5cbi50YW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxMjAsIDE0NCwgMTU2LCAwLjMpLCByZ2JhKDEyMCwgMTQ0LCAxNTYsIDAuMykpLCB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTsgfVxuXG4ub3V0bGV0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7IH1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2U0ZWFlYjsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC5vdXRsZXQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwOyB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7IH0gfVxuXG4vKlxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpe1xuXG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNjZmQ4ZGM7XG4gIH1cbn0qL1xuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_services_offered_services_offered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/services-offered/services-offered.component */ "./src/app/components/services-offered/services-offered.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_care_tips_care_tips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/care-tips/care-tips.component */ "./src/app/components/care-tips/care-tips.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_my_carousel_my_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/my-carousel/my-carousel.component */ "./src/app/components/my-carousel/my-carousel.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_services_offered_services_offered_component__WEBPACK_IMPORTED_MODULE_9__["ServicesOfferedComponent"],
                _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
                _components_care_tips_care_tips_component__WEBPACK_IMPORTED_MODULE_11__["CareTipsComponent"],
                _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
                _components_my_carousel_my_carousel_component__WEBPACK_IMPORTED_MODULE_13__["MyCarouselComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/care-tips/care-tips.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/care-tips/care-tips.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <h2>Care Tips</h2>\n      <p>\n        Here are some steps you can take to help take better care of your floors\n        in between visits:\n      </p>\n      <ul>\n        <li>\n          Wash your floors with water only. If you want a scent or soap, use\n          \"Fabuloso\", found on the bottom shelf at most grocery stores in the\n          floor cleansers aisle. You can also use \"Neutral Floor Cleaner\",\n          available at Home Depot. Create a solution with mostly water and a\n          very small amount of the soap.\n        </li>\n        <li>\n          Do not leave any standing water or liquids on the floors for an\n          extended period of time. When left on the floors, they can deteriorate\n          the sealer and can cause stains and etch marks that stay in the stone.\n        </li>\n        <li>\n          With shower walls, you can purchase a small squeegee at the grocery\n          store. After bathing, just run the squeegee from top to bottom to\n          remove any standing water. This also helps keep stains from forming on\n          your shower walls.\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-lg-6\">\n        <app-my-carousel [slides]=\"slides\"> </app-my-carousel>\n    </div>\n    <div class=\"col-sm-12 text-center\">\n      <a\n        mdbBtn\n        type=\"button\"\n        class=\"blue-grey darken-3 white-text\"\n        mdbWavesEffect\n        href=\"../../../assets/pdfs/StoneFloorMaintenance.pdf\"\n        target=\"_blank\"\n        size=\"lg\"\n      >\n        More Care Instructions\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/care-tips/care-tips.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/care-tips/care-tips.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #eee; }\nh2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 32px;\n  color: #EA1C30;\n  font-weight: 600; }\nh2 span {\n    color: #fff;\n    margin: 0 15px; }\nh2:before {\n    background: #EA1C30;\n    height: 2px;\n    -webkit-box-flex: 0.15;\n            flex: 0.15;\n    content: ''; }\nh2.left:after {\n    background: none; }\np {\n  font-size: 20px;\n  line-height: 1.8; }\nli {\n  font-size: 20px; }\n.box {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.box p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\n.main-text {\n  color: #EA1C30; }\n@media (max-width: 650px) {\n  h2 {\n    font-size: 22px; }\n  p {\n    font-size: 18px;\n    line-height: 1.4; }\n  .box {\n    margin-top: 25px;\n    padding: 15px; }\n    .box p {\n      font-size: 18px;\n      line-height: 1.3; }\n  li {\n    font-size: 18px; } }\n.view {\n  max-height: 550px;\n  border-radius: 5px; }\n.view img {\n    max-height: 550px;\n    border-radius: 5px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: left center; }\n.email-text {\n  color: black;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21pZ3VlbGNoYXZlei9SZXBvcy9HaWZ0V3JhcHBpbmcvd2ViLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY2FyZS10aXBzL2NhcmUtdGlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7QUFVbEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQVRhO0VBVWIsZ0JBQWdCLEVBQUE7QUFMbEI7SUFRSSxXQVpTO0lBYVgsY0FBYyxFQUFBO0FBVGhCO0lBYUksbUJBbEJXO0lBbUJYLFdBQVc7SUFDWCxzQkFBVTtZQUFWLFVBQVU7SUFDVixXQUFXLEVBQUE7QUFoQmY7SUFtQkksZ0JBQWdCLEVBQUE7QUFJcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxtQkF0Q2E7RUF1Q2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUpwQjtJQU1JLFdBMUNTO0lBMkNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTtBQUliO0VBQ0UsY0FwRGEsRUFBQTtBQXdEZjtFQUNFO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtJQUZmO01BSUksZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBR3BCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCO0FDaEZIO0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBSHBCO0lBT0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGdDQUFnQyxFQUFBO0FBS2xDO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJlLXRpcHMvY2FyZS10aXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cblxuJHBhbGV0dGU6IChcbiAgbWFpbjogI0VBMUMzMCxcbiAgd2hpdGU6ICNmZmYsXG4gIG9mZi1XaGl0ZTogI2U0ZWFlYlxuKTtcblxuaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICAmOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGZsZXg6IDAuMTU7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgJi5sZWZ0OmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxubGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHAge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5tYWluLXRleHQge1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbiAgLmJveCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG4gIH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi52aWV3IHtcblxuICBtYXgtaGVpZ2h0OiA1NTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIGltZyB7XG5cbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG5cbiAgfVxufVxuXG4uZW1haWwtdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/care-tips/care-tips.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/care-tips/care-tips.component.ts ***!
  \*************************************************************/
/*! exports provided: CareTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareTipsComponent", function() { return CareTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CareTipsComponent = /** @class */ (function () {
    function CareTipsComponent() {
        this.slides = [
            { url: '../../../assets/images/_Example1/E1_2.jpg' },
            { url: '../../../assets/images/_Example1/E1_8.jpg' },
            { url: '../../../assets/images/_Example2/E2_5.jpg' }
            /*{url: '../../../assets/images/_Example2/E2_1.jpg'},
            {url: '../../../assets/images/_Example2/E2_7.jpg'}*/
        ];
    }
    CareTipsComponent.prototype.ngOnInit = function () {
    };
    CareTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-care-tips',
            template: __webpack_require__(/*! ./care-tips.component.html */ "./src/app/components/care-tips/care-tips.component.html"),
            styles: [__webpack_require__(/*! ./care-tips.component.scss */ "./src/app/components/care-tips/care-tips.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CareTipsComponent);
    return CareTipsComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <h2>Contact Us</h2>\n      <ul>\n        <li><span class=\"font-weight-bold\">Phone: </span> <a class=\"phone-text\" href=\"tel:850-585-3132\">850-585-3132</a></li>\n        <li>\n          <span class=\"font-weight-bold\">E-mail: </span>\n          <a class=\"email-text\" href=\"mailto:nnwfl@crystalmarblepolishing.com\">nwfl@crystalmarblepolishing.com</a>\n        </li>\n        <li>\n          <span class=\"font-weight-bold\">Location: </span> Northwest Florida and\n          Gulf Coast\n        </li>\n\n        <!--<li> <span class=\"font-weight-bold\">Northwest Florida </span>and gulf coast area: <span class=\"font-weight-bold\">850-585-3132</span></li>\n        <li><span class=\"font-weight-bold\">E-mail </span>: nwfl@crystalmarblepolishing.com</li>-->\n      </ul>\n      <div class=\"box\">\n        <p>\n          High, Medium, or Low shine…We will give you an on-site sample of our\n          work, so you can decide exactly what you want your floors to look\n          like.\n        </p>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <app-my-carousel [slides]=\"slides\"> </app-my-carousel>\n    </div>\n    <div class=\"col-sm-12 text-center\">\n      <p class=\"text-center\">\n        Licensed and insured\n        <span class=\"font-weight-bold main-text\"> | </span> Best references\n        available upon request\n        <span class=\"font-weight-bold main-text\"> | </span>\n        Commercial and residential customers welcome.\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #eee; }\nh2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 32px;\n  color: #EA1C30;\n  font-weight: 600; }\nh2 span {\n    color: #fff;\n    margin: 0 15px; }\nh2:before {\n    background: #EA1C30;\n    height: 2px;\n    -webkit-box-flex: 0.15;\n            flex: 0.15;\n    content: ''; }\nh2.left:after {\n    background: none; }\np {\n  font-size: 20px;\n  line-height: 1.8; }\nli {\n  font-size: 20px; }\n.box {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.box p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\n.main-text {\n  color: #EA1C30; }\n@media (max-width: 650px) {\n  h2 {\n    font-size: 22px; }\n  p {\n    font-size: 18px;\n    line-height: 1.4; }\n  .box {\n    margin-top: 25px;\n    padding: 15px; }\n    .box p {\n      font-size: 18px;\n      line-height: 1.3; }\n  li {\n    font-size: 18px; } }\n.view {\n  max-height: 550px;\n  border-radius: 5px; }\n.view img {\n    max-height: 550px;\n    border-radius: 5px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: left center; }\n.email-text {\n  color: black;\n  text-decoration: underline; }\n.phone-text {\n  color: black;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21pZ3VlbGNoYXZlei9SZXBvcy9HaWZ0V3JhcHBpbmcvd2ViLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtBQVVsQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBVGE7RUFVYixnQkFBZ0IsRUFBQTtBQUxsQjtJQVFJLFdBWlM7SUFhWCxjQUFjLEVBQUE7QUFUaEI7SUFhSSxtQkFsQlc7SUFtQlgsV0FBVztJQUNYLHNCQUFVO1lBQVYsVUFBVTtJQUNWLFdBQVcsRUFBQTtBQWhCZjtJQW1CSSxnQkFBZ0IsRUFBQTtBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG1CQXRDYTtFQXVDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBSnBCO0lBTUksV0ExQ1M7SUEyQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBSWI7RUFDRSxjQXBEYSxFQUFBO0FBd0RmO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0lBRmY7TUFJSSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7QUNoRkg7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFIcEI7SUFPRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZ0NBQWdDLEVBQUE7QUFLbEM7RUFDRSxZQUFZO0VBQ1osMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxZQUFZO0VBQ1oscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG5cbiRwYWxldHRlOiAoXG4gIG1haW46ICNFQTFDMzAsXG4gIHdoaXRlOiAjZmZmLFxuICBvZmYtV2hpdGU6ICNlNGVhZWJcbik7XG5cbmgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSx3aGl0ZSk7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB9XG5cbiAgJjpiZWZvcmV7XG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBmbGV4OiAwLjE1O1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG4gICYubGVmdDphZnRlcntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG5cbmxpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZDogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwIHtcbiAgICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSx3aGl0ZSk7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ubWFpbi10ZXh0IHtcbiAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG4gIC5ib3gge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgfVxuICB9XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4udmlldyB7XG5cbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBpbWcge1xuXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuXG4gIH1cbn1cblxuLmVtYWlsLXRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucGhvbmUtdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.slides = [
            { url: '../../../assets/images/_Example1/E1_2.jpg' },
            { url: '../../../assets/images/_Example1/E1_8.jpg' },
            { url: '../../../assets/images/_Example2/E2_5.jpg' }
            /*{url: '../../../assets/images/_Example2/E2_1.jpg'},
            {url: '../../../assets/images/_Example2/E2_7.jpg'}*/
        ];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/components/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer teal z-depth-0\">\n  <!--Footer Links-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <h5 class=\"brand text-center\">Crystal Marble Polishing</h5>\n        <p>\n          Regardless of the service you select, we will make sure that you are\n          happy with the outcome. We offer competitive pricing with our excellent\n          workmanship and professional service. Call for a free estimates!\n        </p>\n        <p class=\"font-weight-bold text-center\"><a class=\"white-phone-text\" href=\"tel:330-860-3993\">\n            <mdb-icon fas icon=\"phone\" aria-hidden=\"true\"></mdb-icon>\n            330-860-3993</a\n          ></p>\n      </div>\n      <div class=\"col-md-4\">\n        <ul>\n          <li>\n            <mdb-icon\n              fas\n              icon=\"angle-right\"\n              class=\"pr-2\"\n              aria-hidden=\"true\">\n            </mdb-icon>\n            <a [routerLink]=\"['/']\">Home</a>\n          </li>\n          <!--<li>\n              <mdb-icon\n                fas\n                icon=\"angle-right\"\n                class=\"pr-2\"\n                aria-hidden=\"true\">\n              </mdb-icon>\n              <a [routerLink]=\"['/Services']\">Services</a></li>\n          <li>\n              <mdb-icon\n                fas\n                icon=\"angle-right\"\n                class=\"pr-2\"\n                aria-hidden=\"true\">\n              </mdb-icon>\n              <a [routerLink]=\"['/Gallery']\">Gallery</a></li>\n          <li>\n              <mdb-icon\n                fas\n                icon=\"angle-right\"\n                class=\"pr-2\"\n                aria-hidden=\"true\">\n              </mdb-icon>\n              <a [routerLink]=\"['/CareTips']\">Care Tips</a></li>\n          <li>\n              <mdb-icon\n                fas\n                icon=\"angle-right\"\n                class=\"pr-2\"\n                aria-hidden=\"true\">\n              </mdb-icon>\n              <a [routerLink]=\"['/ContactUS']\">Contact Us</a></li>-->\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <!--Copyright-->\n  <div class=\"teal darken-4\">\n    <div class=\"container mx-auto text-center\">\n      <a [routerLink]=\"['/']\"> © 2020 Copyright: EmilysChristmasMagic </a>\n      |\n      <a href=\"https://miguelchavezweb.com/\" target=\"_blank\">\n        Powered by: MiguelChavezWeb.com</a\n      >\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer {\n  padding-top: 30px;\n  bottom: 0;\n  z-index: 1030; }\n\nli {\n  list-style: none;\n  margin-left: 5em; }\n\nul {\n  padding: 0; }\n\n@media (max-width: 770px) {\n  .pr-2 {\n    display: none; }\n  li {\n    margin-left: 0em;\n    text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUNGLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVlbTtcbn1cblxudWwge1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NzBweCkge1xuICAucHItMntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <h2>Gallery</h2>\n    </div>\n  </div>\n      <p>\n        Take a look through our galleries (Travertine, Marble, Terrazzo & Other). There are picture examples of\n        different types of stones we have worked on. Swipe through\n        the pictures or click on anyone to enlarge it.\n      </p>\n  <h3>\n    <mdb-icon fas icon=\"caret-right\" class=\"pr-2\" aria-hidden=\"true\"> </mdb-icon\n    >Travertine\n  </h3>\n  <app-my-carousel [slides]=\"travertineSlides\"> </app-my-carousel>\n  <h3 class=\"mt-5\">\n    <mdb-icon fas icon=\"caret-right\" class=\"pr-2\" aria-hidden=\"true\"> </mdb-icon\n    >Marble\n  </h3>\n  <app-my-carousel [slides]=\"marbleSlides\"> </app-my-carousel>\n  <h3 class=\"mt-5\">\n    <mdb-icon fas icon=\"caret-right\" class=\"pr-2\" aria-hidden=\"true\"> </mdb-icon\n    >Terrazzo\n  </h3>\n  <app-my-carousel [slides]=\"terrazzoSlides\"> </app-my-carousel>\n  <h3 class=\"mt-5\">\n    <mdb-icon fas icon=\"caret-right\" class=\"pr-2\" aria-hidden=\"true\"> </mdb-icon\n    >Other\n  </h3>\n  <app-my-carousel [slides]=\"otherSlides\"> </app-my-carousel>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #eee; }\nh2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 32px;\n  color: #EA1C30;\n  font-weight: 600; }\nh2 span {\n    color: #fff;\n    margin: 0 15px; }\nh2:before {\n    background: #EA1C30;\n    height: 2px;\n    -webkit-box-flex: 0.15;\n            flex: 0.15;\n    content: ''; }\nh2.left:after {\n    background: none; }\np {\n  font-size: 20px;\n  line-height: 1.8; }\nli {\n  font-size: 20px; }\n.box {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.box p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\n.main-text {\n  color: #EA1C30; }\n@media (max-width: 650px) {\n  h2 {\n    font-size: 22px; }\n  p {\n    font-size: 18px;\n    line-height: 1.4; }\n  .box {\n    margin-top: 25px;\n    padding: 15px; }\n    .box p {\n      font-size: 18px;\n      line-height: 1.3; }\n  li {\n    font-size: 18px; } }\nh3 {\n  font-weight: 400;\n  font-size: 32px;\n  color: #EA1C30; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21pZ3VlbGNoYXZlei9SZXBvcy9HaWZ0V3JhcHBpbmcvd2ViLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtBQVVsQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBVGE7RUFVYixnQkFBZ0IsRUFBQTtBQUxsQjtJQVFJLFdBWlM7SUFhWCxjQUFjLEVBQUE7QUFUaEI7SUFhSSxtQkFsQlc7SUFtQlgsV0FBVztJQUNYLHNCQUFVO1lBQVYsVUFBVTtJQUNWLFdBQVcsRUFBQTtBQWhCZjtJQW1CSSxnQkFBZ0IsRUFBQTtBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG1CQXRDYTtFQXVDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBSnBCO0lBTUksV0ExQ1M7SUEyQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBSWI7RUFDRSxjQXBEYSxFQUFBO0FBd0RmO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0lBRmY7TUFJSSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7QUNqRkg7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNER2EsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cblxuJHBhbGV0dGU6IChcbiAgbWFpbjogI0VBMUMzMCxcbiAgd2hpdGU6ICNmZmYsXG4gIG9mZi1XaGl0ZTogI2U0ZWFlYlxuKTtcblxuaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICAmOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGZsZXg6IDAuMTU7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgJi5sZWZ0OmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxubGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHAge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5tYWluLXRleHQge1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbiAgLmJveCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG4gIH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.travertineSlides = [
            { url: '../../../assets/images/Travertine/Travertine1.jpg' },
            { url: '../../../assets/images/Travertine/Travertine2.jpg' },
            { url: '../../../assets/images/Travertine/Travertine3.jpg' },
            { url: '../../../assets/images/Travertine/Travertine4.jpg' },
            { url: '../../../assets/images/Travertine/Travertine5.jpg' },
            { url: '../../../assets/images/Travertine/Travertine6.jpg' },
            { url: '../../../assets/images/Travertine/Travertine7.jpg' },
            { url: '../../../assets/images/Travertine/Travertine8.jpg' },
            { url: '../../../assets/images/Travertine/Travertine9.jpg' },
            { url: '../../../assets/images/Travertine/Travertine10.jpg' },
            { url: '../../../assets/images/Travertine/Travertine11.jpg' },
            { url: '../../../assets/images/Travertine/Travertine12.jpg' },
            { url: '../../../assets/images/Travertine/Travertine13.jpg' }
        ];
        this.marbleSlides = [
            { url: '../../../assets/images/Marble/Marble1.jpg' },
            { url: '../../../assets/images/Marble/Marble2.jpg' },
            { url: '../../../assets/images/Marble/Marble3.jpg' },
            { url: '../../../assets/images/Marble/Marble4.jpg' },
            { url: '../../../assets/images/Marble/Marble5.jpg' },
            { url: '../../../assets/images/Marble/Marble6.jpg' },
            { url: '../../../assets/images/Marble/Marble7.jpg' },
            { url: '../../../assets/images/Marble/Marble8.jpg' },
            { url: '../../../assets/images/Marble/Marble9.jpg' },
            { url: '../../../assets/images/Marble/Marble10.jpg' },
            { url: '../../../assets/images/Marble/Marble11.jpg' },
            { url: '../../../assets/images/Marble/Marble12.jpg' },
            { url: '../../../assets/images/Marble/Marble13.jpg' }
        ];
        this.terrazzoSlides = [
            { url: '../../../assets/images/Terrazzo/Terrazzo1.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo2.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo3.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo4.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo5.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo6.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo7.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo8.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo9.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo10.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo11.jpg' },
            { url: '../../../assets/images/Terrazzo/Terrazzo12.jpg' }
        ];
        this.otherSlides = [
            { url: '../../../assets/images/Other/Other1.jpg' },
            { url: '../../../assets/images/Other/Other2.jpg' },
            { url: '../../../assets/images/Other/Other3.jpg' },
            { url: '../../../assets/images/Other/Other4.jpg' },
            { url: '../../../assets/images/Other/Other5.jpg' },
            { url: '../../../assets/images/Other/Other6.jpg' },
            { url: '../../../assets/images/Other/Other7.jpg' },
            { url: '../../../assets/images/Other/Other8.jpg' },
            { url: '../../../assets/images/Other/Other9.jpg' },
            { url: '../../../assets/images/Other/Other10.jpg' },
            { url: '../../../assets/images/Other/Other11.jpg' },
            { url: '../../../assets/images/Other/Other12.jpg' },
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2>About Us</h2>\n      <p>\n        Here at <span class=\"font-weight-bold\">Emily’s Christmas Magic </span> have one goal in mind, a easy beautiful Christmas for you and your family! Let us take care of making your Christmas picture perfect!\n      </p>\n      <p>\n        We offer competitive pricing with our excellent workmanship and\n        professional service.\n      </p>\n      <h2>Contact</h2>\n      <ul>\n        <li><span class=\"font-weight-bold\">Phone: </span> <a class=\"phone-text\" href=\"tel:850-585-3132\">330-860-3993</a></li>\n        <li>\n          <span class=\"font-weight-bold\">E-mail: </span>\n          <a class=\"email-text\" href=\"mailto:EmilysChristmasMagic@gmail.com\">EmilysChristmasMagic@gmail.com</a>\n        </li>\n        <li>\n          <span class=\"font-weight-bold\">Location: </span> Orlando Area\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-12\">\n      <p class=\"text-center mt-2\">\n        Custom magic available upon request\n        <span class=\"font-weight-bold redd-text\"> | </span>\n        All customers welcome.\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #eee; }\nh2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 32px;\n  color: #EA1C30;\n  font-weight: 600; }\nh2 span {\n    color: #fff;\n    margin: 0 15px; }\nh2:before {\n    background: #EA1C30;\n    height: 2px;\n    -webkit-box-flex: 0.15;\n            flex: 0.15;\n    content: ''; }\nh2.left:after {\n    background: none; }\np {\n  font-size: 20px;\n  line-height: 1.8; }\nli {\n  font-size: 20px; }\n.box {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.box p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\n.main-text {\n  color: #EA1C30; }\n@media (max-width: 650px) {\n  h2 {\n    font-size: 22px; }\n  p {\n    font-size: 18px;\n    line-height: 1.4; }\n  .box {\n    margin-top: 25px;\n    padding: 15px; }\n    .box p {\n      font-size: 18px;\n      line-height: 1.3; }\n  li {\n    font-size: 18px; } }\n.redd-text {\n  color: #EA1C30; }\n.email-text {\n  color: black;\n  text-decoration: underline; }\n.phone-text {\n  color: black;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21pZ3VlbGNoYXZlei9SZXBvcy9HaWZ0V3JhcHBpbmcvd2ViLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtBQVVsQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBVGE7RUFVYixnQkFBZ0IsRUFBQTtBQUxsQjtJQVFJLFdBWlM7SUFhWCxjQUFjLEVBQUE7QUFUaEI7SUFhSSxtQkFsQlc7SUFtQlgsV0FBVztJQUNYLHNCQUFVO1lBQVYsVUFBVTtJQUNWLFdBQVcsRUFBQTtBQWhCZjtJQW1CSSxnQkFBZ0IsRUFBQTtBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG1CQXRDYTtFQXVDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBSnBCO0lBTUksV0ExQ1M7SUEyQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBSWI7RUFDRSxjQXBEYSxFQUFBO0FBd0RmO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0lBRmY7TUFJSSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7QUNoRkg7RUFDRSxjRElhLEVBQUE7QUNEZjtFQUNFLFlBQVk7RUFDWiwwQkFBMEIsRUFBQTtBQUU1QjtFQUNFLFlBQVk7RUFDWixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cblxuJHBhbGV0dGU6IChcbiAgbWFpbjogI0VBMUMzMCxcbiAgd2hpdGU6ICNmZmYsXG4gIG9mZi1XaGl0ZTogI2U0ZWFlYlxuKTtcblxuaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICAmOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGZsZXg6IDAuMTU7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgJi5sZWZ0OmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxubGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHAge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5tYWluLXRleHQge1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbiAgLmJveCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG4gIH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5yZWRkLXRleHQge1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbn1cblxuLmVtYWlsLXRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnBob25lLXRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.slides = [
            { url: '../../../assets/images/_Example1/E1_2.jpg' },
            { url: '../../../assets/images/_Example1/E1_8.jpg' },
            { url: '../../../assets/images/_Example2/E2_5.jpg' }
            /*{url: '../../../assets/images/_Example2/E2_1.jpg'},
            {url: '../../../assets/images/_Example2/E2_7.jpg'}*/
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/my-carousel/my-carousel.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-carousel/my-carousel.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-carousel\n  class=\"carousel slide carousel-fade\"\n  (activeSlideChange)=\"cIndex = $event.relatedTarget\"\n  [animation]=\"'fade'\"\n>\n  <div *ngFor=\"let slide of slides; let index = index\">\n    <mdb-carousel-item>\n      <a href=\"{{ slide.url }}\" target=\"_blank\" class=\"view\">\n        <img\n          class=\"d-block\"\n          src=\"{{ slide.url }}\"\n          alt=\"{{ index }}\"\n          *ngIf=\"\n            index == cIndex ||\n            index == cIndex - 1 ||\n            index == cIndex + 1 ||\n            index == cIndex + 2 ||\n            index == 0\n          \"\n        />\n        <div class=\"mask rgba-black-slight waves-light\" mdbWavesEffect></div>\n      </a>\n    </mdb-carousel-item>\n  </div>\n</mdb-carousel>\n"

/***/ }),

/***/ "./src/app/components/my-carousel/my-carousel.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-carousel/my-carousel.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  max-height: 600px;\n  border-radius: 5px; }\n  .view img {\n    max-height: 600px;\n    border-radius: 5px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: right center; }\n  @media (max-width: 950px) {\n  .view {\n    max-width: 100%; }\n    .view img {\n      max-width: 100%; } }\n  @media (max-width: 650px) {\n  .view {\n    max-height: 200px; }\n    .view img {\n      max-height: 200px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL2FwcC9jb21wb25lbnRzL215LWNhcm91c2VsL215LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBSHBCO0lBT0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGlDQUFpQyxFQUFBO0VBTW5DO0VBQ0U7SUFFRSxlQUFlLEVBQUE7SUFGakI7TUFNSSxlQUFlLEVBQUEsRUFHaEI7RUFNTDtFQUNFO0lBRUUsaUJBQWlCLEVBQUE7SUFGbkI7TUFNSSxpQkFBaUIsRUFBQSxFQUdsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktY2Fyb3VzZWwvbXktY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52aWV3IHtcblxuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIGltZyB7XG5cbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuXG4gIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDo5NTBweCkge1xuICAudmlldyB7XG5cbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBpbWcge1xuXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cblxuICAgIH1cbiAgfVxufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpIHtcbiAgLnZpZXcge1xuXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG5cbiAgICBpbWcge1xuXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcblxuXG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-carousel/my-carousel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-carousel/my-carousel.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCarouselComponent", function() { return MyCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyCarouselComponent = /** @class */ (function () {
    function MyCarouselComponent() {
    }
    MyCarouselComponent.prototype.ngOnInit = function () {
        console.log(this.slides);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MyCarouselComponent.prototype, "slides", void 0);
    MyCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-carousel',
            template: __webpack_require__(/*! ./my-carousel.component.html */ "./src/app/components/my-carousel/my-carousel.component.html"),
            styles: [__webpack_require__(/*! ./my-carousel.component.scss */ "./src/app/components/my-carousel/my-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyCarouselComponent);
    return MyCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- As a heading -->\n<div class=\"mx-auto\" id=\"headerNavbar\">\n  <div class=\"container\">\n    <div class=\"row  \">\n      <div id=\"main-logo\" class=\"col-lg-4 text-center\">\n        <a [routerLink]=\"['/']\">\n          <img\n            src=\"../../../assets/images/ECM_color2.png\"\n            alt=\"Emily's Christmas Magic\"\n            height=\"120\"\n            class=\"mx-auto\"\n          />\n        </a>\n      </div>\n      <div class=\"col-lg-8 my-auto text-center\">\n        <h1 class=\"\">\n          <mdb-icon\n            fas\n            icon=\"phone\"\n            class=\"teal-text pr-2\"\n            aria-hidden=\"true\"\n          ></mdb-icon\n          ><b><a class=\"phone-text\" href=\"tel:330-860-3993\">330-860-3993</a></b>\n        </h1>\n        <h3 class=\"\">\n          <mdb-icon\n            fas\n            icon=\"envelope\"\n            class=\"teal-text pr-2\"\n            aria-hidden=\"true\"\n          >\n          </mdb-icon>\n          <a class=\"email-text\" href=\"mailto:EmilysChristmasMagic@gmail.com\"\n            >EmilysChristmasMagic@gmail.com</a\n          >\n        </h3>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Navbar-->\n<mdb-navbar\n  SideClass=\"navbar navbar-expand-lg navbar-dark teal\"\n  style=\"background-color: rgba(0, 0, 0, 0.2);\"\n  id=\"stickNavbar\"\n>\n  <!-- Navbar brand -->\n  <logo>\n    <a class=\"navbar-brand my-auto\" [routerLink]=\"['/']\">\n      <img\n        *ngIf=\"this.showMore\"\n        class=\"navbar-brand\"\n        src=\"../../../assets/images/logo_b&w.png\"\n        alt=\"logo\"\n      />\n    </a>\n  </logo>\n  <!-- Collapsible content -->\n  <links>\n    <!-- Links -->\n    <ul class=\"navbar-nav mx-auto\">\n      <li class=\"nav-item navbar-brand \">\n        <a class=\"nav-link waves-light\" [routerLink]=\"['/']\" mdbWavesEffect\n          >Home</a\n        >\n      </li>\n      <!--<li class=\"nav-item navbar-brand\">\n        <a\n          class=\"nav-link waves-light\"\n          [routerLink]=\"['/Services']\"\n          mdbWavesEffect\n          >Services</a\n        >\n      </li>\n      <li class=\"nav-item navbar-brand\">\n        <a\n          class=\"nav-link waves-light\"\n          [routerLink]=\"['/Gallery']\"\n          mdbWavesEffect\n          >Gallery</a\n        >\n      </li>\n      <li class=\"nav-item navbar-brand\">\n        <a\n          class=\"nav-link waves-light\"\n          [routerLink]=\"['/CareTips']\"\n          mdbWavesEffect\n          >Care Tips</a\n        >\n      </li>\n      <li class=\"nav-item navbar-brand\">\n        <a\n          class=\"nav-link waves-light\"\n          [routerLink]=\"['/ContactUS']\"\n          mdbWavesEffect\n          >Contact Us</a\n        >\n      </li>\n      <li class=\"nav-item navbar-brand\">\n        <a\n          href=\"https://www.facebook.com/CmpCrystalMarblePolishing\"\n          target=\"_blank\"\n          class=\"nav-link\"\n        >\n          mdb-icon fab icon=\"facebook\"></mdb-icon>\n          Facebook\n        </a>\n      </li>-->\n    </ul>\n    <!-- Links -->\n\n    <ul *ngIf=\"this.showMore\" class=\"navbar-nav ml-auto nav-flex-icons\">\n      <li class=\"nav-item navbar-brand\">\n        <a class=\"white-phone-text\" href=\"tel:850-585-3132\">\n          <mdb-icon fas icon=\"phone\" aria-hidden=\"true\"></mdb-icon>\n          850-585-3132</a\n        >\n      </li>\n    </ul>\n  </links>\n  <!-- Collapsible content -->\n</mdb-navbar>\n<!--/.Navbar-->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #eee; }\nh2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 32px;\n  color: #EA1C30;\n  font-weight: 600; }\nh2 span {\n    color: #fff;\n    margin: 0 15px; }\nh2:before {\n    background: #EA1C30;\n    height: 2px;\n    -webkit-box-flex: 0.15;\n            flex: 0.15;\n    content: ''; }\nh2.left:after {\n    background: none; }\np {\n  font-size: 20px;\n  line-height: 1.8; }\nli {\n  font-size: 20px; }\n.box {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.box p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\n.main-text {\n  color: #EA1C30; }\n@media (max-width: 650px) {\n  h2 {\n    font-size: 22px; }\n  p {\n    font-size: 18px;\n    line-height: 1.4; }\n  .box {\n    margin-top: 25px;\n    padding: 15px; }\n    .box p {\n      font-size: 18px;\n      line-height: 1.3; }\n  li {\n    font-size: 18px; } }\n.navbar-brand-brand {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n.nav-item-item {\n  margin: 0px; }\n.navbar {\n  min-height: 60px; }\n.navbar-brand {\n  padding: 0px 0px;\n  height: 60px;\n  line-height: 60px;\n  margin-right: 0.7em; }\n#headerNavbar {\n  background: #e4eaeb; }\n.nav-link {\n  display: block;\n  padding: 0; }\n.email-text {\n  color: black;\n  text-decoration: underline; }\n.phone-text {\n  color: black;\n  text-decoration: none; }\n.white-phone-text {\n  color: #fff;\n  text-decoration: none;\n  margin-left: 10px; }\n@media (max-width: 1150px) {\n  .navbar-brand {\n    margin-right: 0.3em; }\n  h1 {\n    font-size: 26px; }\n  h3 {\n    font-size: 18px; } }\n@media (max-width: 650px) {\n  #main-logo img {\n    max-height: 90px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21pZ3VlbGNoYXZlei9SZXBvcy9HaWZ0V3JhcHBpbmcvd2ViLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7QUFVbEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQVRhO0VBVWIsZ0JBQWdCLEVBQUE7QUFMbEI7SUFRSSxXQVpTO0lBYVgsY0FBYyxFQUFBO0FBVGhCO0lBYUksbUJBbEJXO0lBbUJYLFdBQVc7SUFDWCxzQkFBVTtZQUFWLFVBQVU7SUFDVixXQUFXLEVBQUE7QUFoQmY7SUFtQkksZ0JBQWdCLEVBQUE7QUFJcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxtQkF0Q2E7RUF1Q2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUpwQjtJQU1JLFdBMUNTO0lBMkNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTtBQUliO0VBQ0UsY0FwRGEsRUFBQTtBQXdEZjtFQUNFO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtJQUZmO01BSUksZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBR3BCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCO0FDakZIO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UsV0FBVyxFQUFBO0FBRWI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsbUJEWmtCLEVBQUE7QUNlcEI7RUFDRSxjQUFjO0VBQ2QsVUFBVSxFQUFBO0FBR1o7RUFDRSxZQUFZO0VBQ1osMEJBQTBCLEVBQUE7QUFFNUI7RUFDRSxZQUFZO0VBQ1oscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxXRDlCVztFQytCWCxxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7QUFJbkI7RUFDRTtJQUNFLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCO0FBRUg7RUFDRTtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cblxuJHBhbGV0dGU6IChcbiAgbWFpbjogI0VBMUMzMCxcbiAgd2hpdGU6ICNmZmYsXG4gIG9mZi1XaGl0ZTogI2U0ZWFlYlxuKTtcblxuaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICAmOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGZsZXg6IDAuMTU7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgJi5sZWZ0OmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxubGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHAge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLHdoaXRlKTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5tYWluLXRleHQge1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSxtYWluKTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbiAgLmJveCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG4gIH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG4ubmF2YmFyLWJyYW5kLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ubmF2LWl0ZW0taXRlbSB7XG4gIG1hcmdpbjogMHB4O1xufVxuLm5hdmJhciB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuN2VtO1xufVxuXG4jaGVhZGVyTmF2YmFye1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwYWxldHRlLG9mZi1XaGl0ZSk7XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZW1haWwtdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucGhvbmUtdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLndoaXRlLXBob25lLXRleHQge1xuICBjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSx3aGl0ZSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6MTE1MHB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XG4gIH1cbiAgaDF7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjY1MHB4KSB7XG4gICNtYWluLWxvZ28gaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA5MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.showMore = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('scroll', function () {
            var headerNavbar = document.getElementById('headerNavbar');
            var stickNavbar = document.getElementById('stickNavbar');
            var distanceToTop = stickNavbar.getBoundingClientRect().top;
            var distanceToBottom = headerNavbar.getBoundingClientRect().bottom;
            if (distanceToTop <= 0) {
                stickNavbar.classList.add('fixed-top');
                _this.showMore = true;
            }
            if (distanceToBottom > 80) {
                stickNavbar.classList.remove('fixed-top');
                _this.showMore = false;
            }
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/services-offered/services-offered.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/services-offered/services-offered.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2>Services</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <!--Card image\n        <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n          <mdb-card-img\n            src=\"https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg\"\n          ></mdb-card-img>\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        /Card image-->\n\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Diamond Grinding</h4>\n          <p class=\"text-card\">\n            Essentially a Wet Sanding. This process removes surface scratches,\n            surface wear and tear marks, etch marks, etc…This will make the\n            floor smooth and ready for polishing\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Sealing</h4>\n          <p class=\"text-card\">\n            Penetrating sealer protects the floor from the inside out, filling\n            the pores with silicone and creating a protective barrier at the\n            floor surface\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Polishing</h4>\n          <p class=\"text-card\">\n            Process gives the floor shine. If the floor was not diamond grinded,\n            it will clean the surface as well\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Crystallizing</h4>\n          <p class=\"text-card\">\n            Crystallizing will give the floor an additional boost of shine and\n            hardens the surface.\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Lippage Removal</h4>\n          <p class=\"text-card\">\n            Removes lippage (difference in height between tiles) between tiles\n            prior to polishing…the ULTIMATE service\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Stripping</h4>\n          <p class=\"text-card\">\n            Removal of topical coatings or wax to expose stone\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Repairs</h4>\n          <p class=\"text-card\">\n            Repair of holes, cracks, loose tiles and more\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Maintenance</h4>\n          <p class=\"text-card\">\n            Service plans to keep your stone looking great\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n    <div class=\"col-md-4\">\n      <!--Card-->\n      <mdb-card cascade=\"true\" wider=\"true\">\n        <mdb-card-body cascade=\"true\" class=\"\">\n          <h4 class=\"card-title\">Walls and Countertops</h4>\n          <p class=\"text-card\">\n            All above services are also available for walls and countertops\n          </p>\n        </mdb-card-body>\n      </mdb-card>\n      <!--/.Card-->\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <div class=\"col-md-6\">\n      <h2 class=\"mb-0\">Types of Stone we Service</h2>\n      <span class=\"small-text mb-3\">INCLUDE, BUT ARE NOT LIMITED TO:</span>\n      <ul>\n        <li>Marble</li>\n        <li>Travertine</li>\n        <li>Terrazzo</li>\n        <li>Mexican Tile/Terracotta/Saltillo</li>\n        <li>Slate</li>\n        <li>Vinyl</li>\n        <li>Granite</li>\n        <li>Limestone</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"box\">\n        <p>\n          We also service and repair Walls, Tables, and other types of Natural\n          stone surfaces in addition to flooring.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/services-offered/services-offered.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/services-offered/services-offered.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #eee; }\nh2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 32px;\n  color: #EA1C30;\n  font-weight: 600; }\nh2 span {\n    color: #fff;\n    margin: 0 15px; }\nh2:before {\n    background: #EA1C30;\n    height: 2px;\n    -webkit-box-flex: 0.15;\n            flex: 0.15;\n    content: ''; }\nh2.left:after {\n    background: none; }\np {\n  font-size: 20px;\n  line-height: 1.8; }\nli {\n  font-size: 20px; }\n.box {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.box p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\n.main-text {\n  color: #EA1C30; }\n@media (max-width: 650px) {\n  h2 {\n    font-size: 22px; }\n  p {\n    font-size: 18px;\n    line-height: 1.4; }\n  .box {\n    margin-top: 25px;\n    padding: 15px; }\n    .box p {\n      font-size: 18px;\n      line-height: 1.3; }\n  li {\n    font-size: 18px; } }\n.card-title {\n  color: #EA1C30; }\nh3 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #EA1C30; }\np {\n  font-size: 16px;\n  line-height: 1.2;\n  padding: 0; }\n.card-body {\n  padding-bottom: 0.5em; }\n.row {\n  display: -webkit-box;\n  display: flex; }\n.row > [class*='col-'] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.card {\n  height: 100%; }\n.test {\n  background: #EA1C30;\n  margin-top: 50px;\n  padding: 35px;\n  border-radius: 5px; }\n.test p {\n    color: #fff;\n    font-size: 23px;\n    line-height: 1.3;\n    text-align: center;\n    margin: 0; }\nul {\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2; }\n.small-text {\n  font-size: 13px;\n  color: black;\n  margin: 0;\n  margin-left: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWd1ZWxjaGF2ZXovUmVwb3MvR2lmdFdyYXBwaW5nL3dlYi1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21pZ3VlbGNoYXZlei9SZXBvcy9HaWZ0V3JhcHBpbmcvd2ViLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMtb2ZmZXJlZC9zZXJ2aWNlcy1vZmZlcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTtBQVVsQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBVGE7RUFVYixnQkFBZ0IsRUFBQTtBQUxsQjtJQVFJLFdBWlM7SUFhWCxjQUFjLEVBQUE7QUFUaEI7SUFhSSxtQkFsQlc7SUFtQlgsV0FBVztJQUNYLHNCQUFVO1lBQVYsVUFBVTtJQUNWLFdBQVcsRUFBQTtBQWhCZjtJQW1CSSxnQkFBZ0IsRUFBQTtBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG1CQXRDYTtFQXVDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBSnBCO0lBTUksV0ExQ1M7SUEyQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBSWI7RUFDRSxjQXBEYSxFQUFBO0FBd0RmO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0lBRmY7TUFJSSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFHcEI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7QUNqRkg7RUFDRSxjREthLEVBQUE7QUNIZjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsY0RBYSxFQUFBO0FDR2Y7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtBQUdkO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxvQkFBb0I7RUFHcEIsYUFBcUIsRUFBQTtBQUV2QjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7QUFFeEI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLG1CRDVCYTtFQzZCYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBSnBCO0lBTUksV0RoQ1M7SUNpQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBSWI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy1vZmZlcmVkL3NlcnZpY2VzLW9mZmVyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuXG4kcGFsZXR0ZTogKFxuICBtYWluOiAjRUExQzMwLFxuICB3aGl0ZTogI2ZmZixcbiAgb2ZmLVdoaXRlOiAjZTRlYWViXG4pO1xuXG5oMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsd2hpdGUpO1xuICBtYXJnaW46IDAgMTVweDtcbiAgfVxuXG4gICY6YmVmb3Jle1xuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgZmxleDogMC4xNTtcbiAgICBjb250ZW50OiAnJztcbiAgfVxuICAmLmxlZnQ6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuXG5wIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS44O1xufVxuXG5saSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJveCB7XG4gIGJhY2tncm91bmQ6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcCB7XG4gICAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsd2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLm1haW4tdGV4dCB7XG4gIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOjY1MHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuICAuYm94IHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cbiAgfVxuICBsaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcbi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG59XG5oMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLG1haW4pO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZC1ib2R5e1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogICAgICAgICBmbGV4O1xufVxuLnJvdyA+IFtjbGFzcyo9J2NvbC0nXSB7XG5cdCBkaXNwbGF5OiBmbGV4O1xuXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGVzdCB7XG4gIGJhY2tncm91bmQ6IG1hcC1nZXQoJHBhbGV0dGUsbWFpbik7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcCB7XG4gICAgY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsd2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxudWwge1xuICBjb2x1bW5zOiAyO1xuICAtd2Via2l0LWNvbHVtbnM6IDI7XG4gIC1tb3otY29sdW1uczogMjtcbn1cblxuLnNtYWxsLXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogNGVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/services-offered/services-offered.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/services-offered/services-offered.component.ts ***!
  \***************************************************************************/
/*! exports provided: ServicesOfferedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesOfferedComponent", function() { return ServicesOfferedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesOfferedComponent = /** @class */ (function () {
    function ServicesOfferedComponent() {
    }
    ServicesOfferedComponent.prototype.ngOnInit = function () {
    };
    ServicesOfferedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-offered',
            template: __webpack_require__(/*! ./services-offered.component.html */ "./src/app/components/services-offered/services-offered.component.html"),
            styles: [__webpack_require__(/*! ./services-offered.component.scss */ "./src/app/components/services-offered/services-offered.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesOfferedComponent);
    return ServicesOfferedComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miguelchavez/Repos/GiftWrapping/web-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map