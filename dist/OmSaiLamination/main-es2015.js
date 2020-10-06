(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill-list/bill-list.component */ "./src/app/bill-list/bill-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");









const routes = [
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'billing', component: _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_2__["BillListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'print/:billNo', component: _print_print_component__WEBPACK_IMPORTED_MODULE_5__["PrintComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'edit/:id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', redirectTo: 'billing', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".title[_ngcontent-%COMP%] {\r\n  letter-spacing: 2px;\r\n  font-weight: 300;\r\n  text-align: right;\r\n}\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill-list/bill-list.component */ "./src/app/bill-list/bill-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var _consumerData_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./consumerData.service */ "./src/app/consumerData.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bill.service */ "./src/app/bill.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _consumerData_service__WEBPACK_IMPORTED_MODULE_11__["ConsumerDataService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _bill_service__WEBPACK_IMPORTED_MODULE_13__["BillService"], _login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"], _auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]
        ],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_6__["BillListComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
        _print_print_component__WEBPACK_IMPORTED_MODULE_10__["PrintComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_6__["BillListComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                    _print_print_component__WEBPACK_IMPORTED_MODULE_10__["PrintComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]
                ],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _consumerData_service__WEBPACK_IMPORTED_MODULE_11__["ConsumerDataService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _bill_service__WEBPACK_IMPORTED_MODULE_13__["BillService"], _login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"], _auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");




class AuthGuard {
    constructor(route, loginService) {
        this.route = route;
        this.loginService = loginService;
    }
    canActivate() {
        if (this.loginService.logIn()) {
            return true;
        }
        else {
            this.route.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/bill-list/bill-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bill-list/bill-list.component.ts ***!
  \**************************************************/
/*! exports provided: BillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillListComponent", function() { return BillListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bill.service */ "./src/app/bill.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function BillListComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillListComponent_tr_24_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const list_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showBill(list_r1.BillNo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillListComponent_tr_24_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const list_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editBill(list_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillListComponent_tr_24_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const list_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteBill(list_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.BillNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.ConsumerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, list_r1.BillNoDate, "dd/MM/yyyy"));
} }
class BillListComponent {
    constructor(routes, billService) {
        this.routes = routes;
        this.billService = billService;
    }
    ngOnInit() {
        this.billService.getBillList().subscribe((listBill) => this.Records = listBill, (err) => console.log(err));
    }
    addBillClick() {
        this.routes.navigate(['form']);
    }
    trackByBillNo(index, record) {
        return record.BillNo;
    }
    showBill(billno) {
        this.routes.navigate(['print', billno]);
    }
    editBill(id) {
        this.routes.navigate(['/edit', id]);
    }
    deleteBill(id) {
        if (confirm('Are you sure want to delete this bill')) {
            this.billService.deleteBill(id).subscribe(() => {
                console.log(`bill with ID ${id} is deleted`);
                this.ngOnInit();
            }, (err) => console.log(err));
        }
    }
}
BillListComponent.ɵfac = function BillListComponent_Factory(t) { return new (t || BillListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bill_service__WEBPACK_IMPORTED_MODULE_2__["BillService"])); };
BillListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillListComponent, selectors: [["app-bill-list"]], decls: 25, vars: 2, consts: [[1, "container"], ["type", "button", 1, "btn", "btn-primary", "add-bill", 3, "click"], [1, "table", "table-hover", "table-striped", "auto-index"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["width", "10%"], ["width", "35%"], ["width", "15%"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["widht", "10%"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function BillListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillListComponent_Template_button_click_3_listener() { return ctx.addBillClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " + Add Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "sr. no.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bill No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name of Consumer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Show Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BillListComponent_tr_24_Template, 19, 7, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Records)("ngForTrackBy", ctx.trackByBillNo);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".add-bill[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 0px 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC1saXN0L2JpbGwtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2JpbGwtbGlzdC9iaWxsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYmlsbCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHggNjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill-list',
                templateUrl: './bill-list.component.html',
                styleUrls: ['./bill-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _bill_service__WEBPACK_IMPORTED_MODULE_2__["BillService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/bill.service.ts":
/*!*********************************!*\
  !*** ./src/app/bill.service.ts ***!
  \*********************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class BillService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:3000/bills';
    }
    getBillList() {
        return this.httpClient.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error: ', errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('There is problem with the service. Please try again later.');
    }
    getBill(id) {
        return this.httpClient.get(`${this.baseUrl}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    addBill(bill) {
        return this.httpClient.post(this.baseUrl, bill, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    updateBill(bill) {
        return this.httpClient.put(`${this.baseUrl}/${bill.id}`, bill, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    deleteBill(id) {
        return this.httpClient.delete(`${this.baseUrl}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
BillService.ɵfac = function BillService_Factory(t) { return new (t || BillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BillService, factory: BillService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/consumerData.service.ts":
/*!*****************************************!*\
  !*** ./src/app/consumerData.service.ts ***!
  \*****************************************/
/*! exports provided: ConsumerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerDataService", function() { return ConsumerDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ConsumerDataService {
    getRecords() {
        return [{
                ConsumerName: 'Navoday Printers',
                ConsumerCity: 'Aurangabad',
                ConsumerGST: '27AQFPP9778F1Z5',
                BillNo: 1,
                BillNoDate: '2017-07-05',
                DCNo: null,
                DCDate: '',
                PONo: null,
                PODate: '',
                Products: [
                    { ProductName: '3 MM PVC FORM PESTING', HSNCode: '39201099', Size: 1560, Qty: null, RatePer: 25, Amount: 39000 },
                    { ProductName: 'PVC FILM', HSNCode: '3919', Size: 1405.66, Qty: null, RatePer: 15, Amount: 21085 }
                ],
                Total: 60085,
                CGSTP: 9,
                SGSTP: 9,
                CGST: 5407.5,
                SGST: 5407.5,
                GrandTotal: 70500
            },
            {
                ConsumerName: 'Ajay Printers',
                ConsumerCity: 'Aurangabad',
                ConsumerGST: '27AQFPP9778F1Z5',
                BillNo: 2,
                BillNoDate: '2017-08-21',
                DCNo: null,
                DCDate: '',
                PONo: null,
                PODate: '',
                Products: [
                    { ProductName: 'PVC Pesting', HSNCode: 39201099, Size: 1560, Qty: null, RatePer: 25, Amount: 30000 },
                    { ProductName: '3 MM PVC FORM PESTING', HSNCode: 3919, Size: 1405.66, Qty: null, RatePer: 15, Amount: 20000 }
                ],
                Total: 50000,
                CGSTP: 10,
                SGSTP: 10,
                CGST: 5000,
                SGST: 5000,
                GrandTotal: 60000
            },
            {
                ConsumerName: 'asjdf Printers',
                ConsumerCity: 'pune',
                ConsumerGST: '27AQFPP9778F1Z5',
                BillNo: 3,
                BillNoDate: '2020-09-12',
                DCNo: null,
                DCDate: '',
                PONo: null,
                PODate: '',
                Products: [
                    { ProductName: '3 MM PVC FORM PESTING', HSNCode: 39201099, Size: 1560, Qty: null, RatePer: 25, Amount: 39000 }
                ],
                Total: 60085,
                CGSTP: 9,
                SGSTP: 9,
                CGST: 5407.5,
                SGST: 5407.5,
                GrandTotal: 70500
            }
        ];
    }
    newRecord(data) {
        let record = this.getRecords();
        record.unshift(data);
        return record;
    }
}
ConsumerDataService.ɵfac = function ConsumerDataService_Factory(t) { return new (t || ConsumerDataService)(); };
ConsumerDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConsumerDataService, factory: ConsumerDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsumerDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataService {
    getRecords() {
        return [
            { Name: 'navoday Printers', City: 'Aurangabad', Date: new Date('1/5/2020') },
            { Name: 'ajay Printers', City: 'Aurangabad', Date: new Date('2/25/2020') }
        ];
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bill.service */ "./src/app/bill.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function FormComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13, " ");
} }
function FormComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bill number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bill Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_tr_74_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_tr_74_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 67);
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r20);
} }
function FormComponent_tr_74_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_tr_74_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function FormComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_tr_74_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.productNameChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormComponent_tr_74_span_7_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "datalist", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormComponent_tr_74_option_9_Template, 1, 1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormComponent_tr_74_Template_input_keyup_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r23.calculateAmount(); return ctx_r23.SubTotal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormComponent_tr_74_Template_input_keyup_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r24.calculateAmount(); return ctx_r24.SubTotal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormComponent_tr_74_span_18_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormComponent_tr_74_span_21_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_tr_74_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r15 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.removeProduct(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, product_r14.get("ProductName").touched && product_r14.get("ProductName").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r14.get("ProductName").touched && product_r14.get("ProductName").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.new);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, product_r14.get("RatePer").touched && product_r14.get("RatePer").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r14.get("RatePer").touched && product_r14.get("RatePer").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, product_r14.get("Amount").touched && product_r14.get("Amount").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r14.get("Amount").touched && product_r14.get("Amount").invalid);
} }
function FormComponent_span_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CGST % is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SGST % is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CGST amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SGST amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Grand Total is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormComponent {
    constructor(fb, route, routes, billService) {
        this.fb = fb;
        this.route = route;
        this.routes = routes;
        this.billService = billService;
        this.amount = [];
        this.consumerOptions = new Array();
        this.frmConsumer = this.fb.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            GSTNo: [''],
            Billno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            DCno: [''],
            DCDate: [''],
            POno: [''],
            PODate: [''],
            products: this.fb.array([
                this.addProduct()
            ]),
            Total: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CGSTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SGSTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CGST: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SGST: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            GrandTotal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.mycontrol = this.frmConsumer.get('Name');
        this.options = [];
        this.productOptions = [];
    }
    //tslint:disable
    ngOnInit() {
        this.routes.paramMap.subscribe(params => {
            const billId = +params.get('id');
            if (billId) {
                this.title = "Edit Invoice";
                this.getBillById(billId);
            }
            else {
                this.title = "Create Invoice";
                this.bill = {
                    id: null,
                    ConsumerName: '',
                    ConsumerCity: '',
                    ConsumerGST: '',
                    BillNo: null,
                    BillNoDate: '',
                    DCNo: null,
                    DCDate: '',
                    PONo: null,
                    PODate: '',
                    Products: [],
                    Total: null,
                    CGSTP: null,
                    SGSTP: null,
                    CGST: null,
                    SGST: null,
                    GrandTotal: null,
                };
            }
        });
        this.billService.getBillList().subscribe((res) => this.copyOptions(res), (err) => console.log(err));
        this.billService.getBillList().subscribe((res) => this.copyProductOptions(res), (err) => console.log(err));
        this.filteredOptions = this.mycontrol.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filter(value)));
        this.frmConsumer.get('Name').valueChanges.subscribe((value) => this.consumerNameChange(value));
    }
    copyOptions(data) {
        this.consumer = data;
        for (let i = 0; i < data.length; i++) {
            this.options[i] = data[i].ConsumerName;
        }
        this.consumerOptions = Array.from(new Set(this.options));
    }
    copyProductOptions(data) {
        data.forEach(a => a.Products.forEach(b => this.productOptions.push(b.ProductName)));
        this.new = Array.from(new Set(this.productOptions));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.consumerOptions.filter(option => option.toLowerCase().includes(filterValue));
    }
    getBillById(id) {
        this.billService.getBill(id).subscribe((res) => {
            this.editBill(res);
            this.bill = res;
        }, (err) => console.log(err));
    }
    editBill(data) {
        this.frmConsumer.get('Name').patchValue(data.ConsumerName);
        this.frmConsumer.get('City').patchValue(data.ConsumerCity);
        this.frmConsumer.get('GSTNo').patchValue(data.ConsumerGST);
        this.frmConsumer.get('Billno').patchValue(data.BillNo);
        this.frmConsumer.get('Date').patchValue(data.BillNoDate);
        this.frmConsumer.get('DCno').patchValue(data.DCNo);
        this.frmConsumer.get('DCDate').patchValue(data.DCDate);
        this.frmConsumer.get('POno').patchValue(data.PONo);
        this.frmConsumer.get('PODate').patchValue(data.PODate);
        this.frmConsumer.get('Total').patchValue(data.Total);
        this.frmConsumer.get('CGSTP').patchValue(data.CGSTP);
        this.frmConsumer.get('CGST').patchValue(data.CGST);
        this.frmConsumer.get('SGSTP').patchValue(data.SGSTP);
        this.frmConsumer.get('SGST').patchValue(data.SGST);
        this.frmConsumer.get('GrandTotal').patchValue(data.GrandTotal);
        this.frmConsumer.setControl('products', this.setExistingProducts(data.Products));
    }
    setExistingProducts(ProductSet) {
        const formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        ProductSet.forEach(s => {
            formArray.push(this.fb.group({
                ProductName: s.ProductName,
                HSNCode: s.HSNCode,
                Size: s.Size,
                Qty: s.Qty,
                RatePer: s.RatePer,
                Amount: s.Amount
            }));
        });
        return formArray;
    }
    addProduct() {
        return this.fb.group({
            ProductName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            HSNCode: [''],
            Size: [''],
            Qty: [''],
            RatePer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get Controls() {
        return this.frmConsumer.get('products');
    }
    addMoreProducts() {
        this.frmConsumer.get('products').push(this.addProduct());
    }
    removeProduct(index) {
        this.Controls.removeAt(index);
    }
    consumerNameChange(value) {
        let name = value.toLowerCase();
        let bill = this.consumer.find(data => data.ConsumerName.toLowerCase().includes(name));
        console.log(bill);
        if (bill.ConsumerName !== undefined && bill.ConsumerName === value) {
            let City = bill.ConsumerCity;
            let GSTno = bill.ConsumerGST;
            this.frmConsumer.get('City').patchValue(City);
            this.frmConsumer.get('GSTNo').patchValue(GSTno);
        }
        else if (bill.ConsumerName !== undefined && bill.ConsumerName.toLowerCase() === value) {
            let City = bill.ConsumerCity;
            let GSTno = bill.ConsumerGST;
            this.frmConsumer.get('City').patchValue(City);
            this.frmConsumer.get('GSTNo').patchValue(GSTno);
        }
        else {
            let City = '';
            let GSTno = '';
            this.frmConsumer.get('City').patchValue(City);
            this.frmConsumer.get('GSTNo').patchValue(GSTno);
        }
    }
    productNameChange(event) {
        let name = event.target.value.toLowerCase();
        let bill = this.consumer.find(data => data.Products.find(prod => prod.ProductName.toLowerCase() === name));
        let product = bill.Products.find(data => data.ProductName === event.target.value);
        let length = this.Controls.length;
        if (product.ProductName !== undefined && product.ProductName === event.target.value) {
            let HSNCode = product.HSNCode;
            this.Controls.at(length - 1).get('HSNCode').patchValue(HSNCode);
        }
        else {
            console.log('nothing');
        }
    }
    calculateAmount() {
        const formArray = this.frmConsumer.get('products').value;
        const control = this.frmConsumer.get('products');
        for (let i = 0; i < formArray.length; i++) {
            if (formArray[i].Qty) {
                this.calAmount = (formArray[i].Qty) * (formArray[i].RatePer);
                this.amount[i] = this.calAmount;
                this.Controls.at(i).get('Amount').setValue(this.calAmount);
            }
            else {
                this.calAmount = (formArray[i].Size) * (formArray[i].RatePer);
                this.amount[i] = this.calAmount;
                this.Controls.at(i).get('Amount').setValue(this.calAmount);
            }
        }
    }
    SubTotal() {
        this.subAmount = 0;
        this.sum = 0;
        for (let value of this.amount) {
            this.subAmount = this.sum + value;
            this.sum = this.subAmount;
        }
        this.subAmount = +this.subAmount.toFixed(2);
        this.frmConsumer.get('Total').patchValue(this.subAmount);
        this.calGST();
        this.calSGST();
    }
    calGST() {
        const per = this.frmConsumer.get('CGSTP').value;
        if (per) {
            this.cgstAmount = this.subAmount * (per / 100);
            this.cgstAmount = +this.cgstAmount.toFixed(2);
            this.frmConsumer.get('CGST').setValue(this.cgstAmount);
            this.grandAmount = (+this.subAmount) + (+this.cgstAmount) + (+this.sgstAmount);
            this.grandAmount = +Math.round(this.grandAmount.toFixed(2));
            this.frmConsumer.get('GrandTotal').setValue(this.grandAmount);
        }
    }
    calSGST() {
        const per = this.frmConsumer.get('SGSTP').value;
        if (per) {
            this.sgstAmount = this.subAmount * (per / 100);
            this.sgstAmount = +this.sgstAmount.toFixed(2);
            this.frmConsumer.get('SGST').setValue(this.sgstAmount);
            this.grandAmount = (+this.subAmount) + (+this.cgstAmount) + (+this.sgstAmount);
            this.grandAmount = +Math.round(this.grandAmount.toFixed(2));
            this.frmConsumer.get('GrandTotal').setValue(this.grandAmount);
        }
    }
    onSubmit() {
        this.MapFormValuesToBillModel();
        if (this.bill.id) {
            this.billService.updateBill(this.bill).subscribe(() => this.route.navigate(['print', this.bill.BillNo]), (err) => console.log(err));
        }
        else {
            this.billService.addBill(this.bill).subscribe(() => this.route.navigate(['print', this.bill.BillNo]), (err) => console.log(err));
        }
    }
    MapFormValuesToBillModel() {
        this.bill.ConsumerName = this.frmConsumer.value.Name;
        this.bill.ConsumerCity = this.frmConsumer.value.City;
        this.bill.ConsumerGST = this.frmConsumer.value.GSTNo;
        this.bill.BillNo = +this.frmConsumer.value.Billno;
        this.bill.BillNoDate = this.frmConsumer.value.Date;
        this.bill.DCNo = this.frmConsumer.value.DCno;
        this.bill.DCDate = this.frmConsumer.value.DCDate;
        this.bill.PONo = this.frmConsumer.value.POno;
        this.bill.PODate = this.frmConsumer.value.PODate;
        this.bill.Total = +this.frmConsumer.value.Total;
        this.bill.CGST = +this.frmConsumer.value.CGST;
        this.bill.CGSTP = +this.frmConsumer.value.CGSTP;
        this.bill.SGST = +this.frmConsumer.value.SGST;
        this.bill.SGSTP = +this.frmConsumer.value.SGSTP;
        this.bill.GrandTotal = +this.frmConsumer.value.GrandTotal;
        this.bill.Products = this.frmConsumer.value.products;
    }
    pathChange() {
        if (this.frmConsumer.dirty) {
            let locate = confirm("Are you sure to leave this page? All information will be discarded");
            if (locate == true) {
                this.route.navigate(['/billing']);
            }
        }
        else {
            this.route.navigate(['/billing']);
        }
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 135, vars: 49, consts: [[1, "card", "panel"], [1, "card-header", "bg-secondary", "text-white"], [1, "card-title"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], [1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "formControlName", "Name", "name", "name", "id", "name", "placeholder", "Company Name", 1, "form-control", 3, "matAutocomplete", "ngClass"], ["class", "help-block text-danger", 4, "ngIf"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "GSTNo", "name", "GSTNo", "id", "GSTNo", "placeholder", "GST NO.", 1, "form-control", "mt-3"], ["type", "text", "formControlName", "City", "name", "city", "id", "city", "placeholder", "Address", 1, "form-control", 3, "ngClass"], [1, "form-group", "mt-3"], ["type", "number", "formControlName", "Billno", "name", "billNo", "id", "billNo", "placeholder", "Bill No", 1, "form-control", "w-50", 3, "ngClass"], ["type", "text", "formControlName", "DCno", "name", "DCno", "id", "DCno", "placeholder", "D.C. No", 1, "form-control", "w-50", "mt-3"], ["type", "text", "formControlName", "POno", "name", "POno", "id", "POno", "placeholder", "P.O. No", 1, "form-control", "w-50", "mt-3"], [1, "input-group"], [1, "input-group-append"], [1, "input-group-text"], ["type", "date", "formControlName", "Date", "name", "date", "id", "date", 1, "form-control", "d-inline", "w-50", 3, "ngClass"], ["class", "help-block text-danger ml-2", 4, "ngIf"], [1, "input-group", "mt-3"], ["type", "date", "formControlName", "DCDate", "name", "DCdate", "id", "DCdate", 1, "form-control", "w-50"], ["type", "date", "formControlName", "PODate", "name", "POdate", "id", "POdate", 1, "form-control", "w-50"], [1, "card", "mt-4"], [1, "card-header"], [1, "table"], ["width", "2%", 1, "text-center"], ["width", "30%", 1, "text-center"], ["width", "18%", 1, "text-center"], ["width", "15%", 1, "text-center"], ["width", "10%", 1, "text-center"], ["colspan", "2", "width", "15%", 1, "text-center"], ["formArrayName", "products", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "form-group", "mt-4"], [1, "input-group", "w-25"], ["for", "subtotal"], ["type", "number", "formControlName", "Total", "name", "subtotal", "id", "subtotal", "placeholder", "SubTotal", "readonly", "", 1, "form-control", "ml-2", 3, "ngClass"], ["class", "help-block text-danger", "style", "margin-left: 5em;", 4, "ngIf"], [1, "row", "mt-3"], [1, "input-group", "w-50"], ["for", "cgstp"], ["type", "number", "formControlName", "CGSTP", "name", "cgstp", "id", "cgstp", "placeholder", "CGST in %", 1, "form-control", "ml-2", 3, "ngClass", "keyup"], [1, "input-group-prepend"], ["class", "help-block text-danger", "style", "margin-left: 4em;", 4, "ngIf"], [1, "input-group", "w-50", "mt-3"], ["for", "number"], ["type", "text", "formControlName", "SGSTP", "name", "sgstp", "id", "sgstp", "placeholder", "SGST in %", 1, "form-control", "ml-2", 3, "ngClass", "keyup"], [1, "input-group", "w-75"], ["for", "cgst"], [1, "input-group-append", "ml-2"], ["type", "number", "formControlName", "CGST", "name", "cgst", "id", "cgst", "placeholder", "CGST Amount", "readonly", "", 1, "form-control", 3, "ngClass"], ["class", "help-block text-danger", "style", "margin-left: 10em;", 4, "ngIf"], [1, "input-group", "mt-3", "w-75"], ["for", "sgst"], ["type", "number", "formControlName", "SGST", "name", "sgst", "id", "sgst", "placeholder", "SGST Amount", "readonly", "", 1, "form-control", 3, "ngClass"], ["for", "grandtotal"], ["type", "number", "formControlName", "GrandTotal", "name", "grandtotal", "id", "grandtotal", "placeholder", "Grand Total", "readonly", "", 1, "form-control", "ml-2", 3, "ngClass"], [1, "card-footer", "bg-secondary"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", "ml-2", 3, "click"], [1, "help-block", "text-danger"], [3, "value"], [1, "help-block", "text-danger", "ml-2"], ["formArrayName", "products"], [3, "formGroupName"], [1, "text-center"], ["type", "text", "list", "auto", "formControlName", "ProductName", "id", "'productName' + i", "placeholder", "Product Name", 1, "form-control", "productList", 3, "ngClass", "change"], ["id", "auto"], ["type", "text", "formControlName", "HSNCode", "id", "'hsnCode' + i", "placeholder", "HSN Code", 1, "form-control"], ["type", "text", "formControlName", "Size", "id", "'size' + i", "placeholder", "Sqft./Size", 1, "form-control"], ["type", "number", "formControlName", "Qty", "id", "'qty' + i", "placeholder", "Quantity", 1, "form-control", 3, "keyup"], ["type", "number", "formControlName", "RatePer", "id", "'rate' + i", "placeholder", "Rate", 1, "form-control", 3, "ngClass", "keyup"], ["type", "number", "formControlName", "Amount", "id", "'amount' + it", "placeholder", "Amount", "readonly", "", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "exit", 3, "click"], [1, "help-block", "text-danger", 2, "margin-left", "5em"], [1, "help-block", "text-danger", 2, "margin-left", "4em"], [1, "help-block", "text-danger", 2, "margin-left", "10em"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Invoice To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormComponent_span_14_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-autocomplete", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormComponent_mat_option_17_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FormComponent_span_23_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Invoice Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FormComponent_span_31_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bill Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FormComponent_span_40_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "D.C. Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "P.O. Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sr.No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "HSN Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sqft./Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Rate Per");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, FormComponent_tr_74_Template, 25, 15, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_76_listener() { return ctx.addMoreProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "SubTotal :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, FormComponent_span_86_Template, 2, 0, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "CGST :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormComponent_Template_input_keyup_92_listener() { return ctx.calGST(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, FormComponent_span_96_Template, 2, 0, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "SGST :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormComponent_Template_input_keyup_100_listener() { return ctx.calSGST(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, FormComponent_span_104_Template, 2, 0, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "CGST Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, FormComponent_span_113_Template, 2, 0, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "SGST Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, FormComponent_span_121_Template, 2, 0, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Grand Total :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, FormComponent_span_129_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_133_listener() { return ctx.pathChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmConsumer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.frmConsumer.get("Name").touched && ctx.frmConsumer.get("Name").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("Name").touched && ctx.frmConsumer.get("Name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 27, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.frmConsumer.get("City").touched && ctx.frmConsumer.get("City").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("City").touched && ctx.frmConsumer.get("City").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx.frmConsumer.get("Billno").touched && ctx.frmConsumer.get("Billno").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("Billno").touched && ctx.frmConsumer.get("Billno").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx.frmConsumer.get("Date").touched && ctx.frmConsumer.get("Date").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("Date").touched && ctx.frmConsumer.get("Date").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Controls.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.frmConsumer.get("products").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.frmConsumer.get("Total").touched && ctx.frmConsumer.get("Total").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("Total").touched && ctx.frmConsumer.get("Total").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.frmConsumer.get("CGSTP").touched && ctx.frmConsumer.get("CGSTP").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("CGSTP").touched && ctx.frmConsumer.get("CGSTP").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx.frmConsumer.get("SGSTP").touched && ctx.frmConsumer.get("SGSTP").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("SGSTP").touched && ctx.frmConsumer.get("SGSTP").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, ctx.frmConsumer.get("CGST").touched && ctx.frmConsumer.get("CGST").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("CGST").touched && ctx.frmConsumer.get("CGST").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.frmConsumer.get("SGST").touched && ctx.frmConsumer.get("SGST").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("SGST").touched && ctx.frmConsumer.get("SGST").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c0, ctx.frmConsumer.get("GrandTotal").touched && ctx.frmConsumer.get("GrandTotal").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmConsumer.get("GrandTotal").touched && ctx.frmConsumer.get("GrandTotal").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.frmConsumer.invalid);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".panel[_ngcontent-%COMP%] {\r\n\twidth: 1100px;\r\n\tmargin: auto;\r\n}\r\n.label[_ngcontent-%COMP%] {\r\n\tfont-weight: bold;\r\n\tfont-size: 20px;\r\n}\r\n.exit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  color: rgb(107, 103, 103);\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n\tfont-size: 20px;\r\n}\r\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n\tmargin: 0;\r\n}\r\n.full-width[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n.productList[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\r\n\tdisplay: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9uZXdfaW52b2ljZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBOztDQUVDLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLFNBQVM7QUFDVjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9mb3JtL25ld19pbnZvaWNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcblx0d2lkdGg6IDExMDBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuLmxhYmVsIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmV4aXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogcmdiKDEwNywgMTAzLCAxMDMpO1xyXG59XHJcbmxhYmVsIHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcbn1cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wcm9kdWN0TGlzdDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './new_invoice.html',
                styleUrls: ['./new_invoice.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.id = 'passed';
        this.url = 'http://localhost:3000/user';
    }
    getUser() {
        return this.httpClient.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error: ', errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('There is problem with the service. Please try again later.');
    }
    logIn() {
        return !!sessionStorage.getItem('token');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UserId and Password does not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(loginService, route) {
        this.loginService = loginService;
        this.route = route;
        this.notValid = false;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.loginService.getUser().subscribe((listBill) => {
            if (listBill[0].name === form.txtUser && listBill[0].password === form.txtPassword) {
                sessionStorage.setItem('token', listBill[0].id);
                this.route.navigate(['/billing']);
            }
            else {
                this.notValid = true;
            }
        }, (err) => console.log(err));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 38, vars: 1, consts: [[1, "main"], [1, "container-fluid", "top_bar"], [1, "row", "p-2", "text-white"], [1, "col-md-6", "contact_info"], [1, "col-md-6", "d-none", "d-md-inline"], [1, "title"], [1, "container-fluid"], [1, "text-center"], ["src", "../../assets/logo.png", "height", "110px", "width", "300px", "alt", "Logo here..."], [1, "section"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "ngSubmit"], ["frmLogin", "ngForm"], [1, "form-group"], ["for", "user"], ["type", "text", "name", "txtUser", "ngModel", "", "id", "user", 1, "form-control"], ["txtUser", "ngModel"], ["for", "password"], ["type", "password", "name", "txtPassword", "ngModel", "", "id", "password", 1, "form-control"], ["txtPassword", "ngModel"], ["class", "help-block text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success"], [1, "help-block", "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "omsailamination@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "| +91 9823327590");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Display | Sign Board | Momento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_span_34_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notValid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".section[_ngcontent-%COMP%] {\r\n    padding: 25px 0;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin: auto;\r\n    background-color: rgba(0, 0, 0, 0.479);\r\n    color: white;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    letter-spacing: 2px;\r\n    font-weight: 300;\r\n    text-align: right;\r\n}\r\n.top_bar[_ngcontent-%COMP%]{background:#f26522}\r\n.main[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(rgba(212, 201, 201, 0.336),rgb(238, 151, 93));\r\n    height: 625px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0EsU0FBUyxrQkFBa0I7QUFDM0I7SUFDSSwrRUFBK0U7SUFDL0UsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ3OSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRvcF9iYXJ7YmFja2dyb3VuZDojZjI2NTIyfVxyXG4ubWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMTIsIDIwMSwgMjAxLCAwLjMzNikscmdiKDIzOCwgMTUxLCA5MykpO1xyXG4gICAgaGVpZ2h0OiA2MjVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MenuComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onLoginClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(loginService, route) {
        this.loginService = loginService;
        this.route = route;
    }
    ngOnInit() {
    }
    onLoginClick() {
        this.route.navigate(['login']);
    }
    onBillingClick() {
        this.route.navigate(['billing']);
    }
    onLogoutClick() {
        sessionStorage.removeItem('token');
        this.route.navigate(['login']);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 21, vars: 2, consts: [[1, "container-fluid"], [1, "row", "justify-content-between"], [1, "col-md-6"], ["src", "../../assets/logo.png", "height", "50px", "width", "auto", "alt", "Logo here..."], [1, "col-md-6", "d-none", "d-md-inline"], [1, "title"], [1, "navbar", "navbar-expand-md", "bg-dark", "navbar-dark", "sticky-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseNav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapseNav", 1, "collapse", "navbar-collapse", "justify-content-between"], [1, "navbar-nav"], [1, "nav-item"], [1, "btn", "btn-dark", 3, "click"], ["class", "btn btn-dark", 3, "click", 4, "ngIf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Display | Sign Board | Momento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_14_listener() { return ctx.onBillingClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuComponent_button_18_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_button_19_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginService.logIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.logIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".title[_ngcontent-%COMP%] {\r\n    letter-spacing: 2px;\r\n    font-weight: 300;\r\n    text-align: right;\r\n  }\r\n  .navbar-toggler[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/print/print.component.ts":
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bill.service */ "./src/app/bill.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");









function PrintComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.ProductName == null || product_r1.ProductName == "" ? "-" : product_r1.ProductName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.HSNCode == null || product_r1.HSNCode == "" ? "-" : product_r1.HSNCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.Size == null || product_r1.Size == "" ? "-" : product_r1.Size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.Qty == null || product_r1.Qty == "" ? "-" : product_r1.Qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.RatePer == null || product_r1.RatePer == "" ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, product_r1.RatePer, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.Amount == null || product_r1.Amount == "" ? "-" : product_r1.Amount, "");
} }
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;
class PrintComponent {
    //tslint:disable
    constructor(datepipe, route, billService, routes) {
        this.datepipe = datepipe;
        this.route = route;
        this.billService = billService;
        this.routes = routes;
        this.billno = +this.route.snapshot.paramMap.get('billNo');
        this.content = document.getElementsByClassName('print');
        this.body = [];
    }
    ngOnInit() {
        this.billService.getBillList().subscribe((listBill) => {
            const data = listBill;
            this.consumer = data.filter(a => a.BillNo === this.billno);
            this.number = Math.floor(this.consumer[0].GrandTotal);
            this.word = convert(this.number);
            function fun(n) {
                let str = '';
                let units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
                let tens = ["", "", "Twenty ", "Thirty ", "Fourty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "];
                if (n < 20) {
                    str = units[n];
                }
                else if (n >= 20 && n < 100) {
                    str = tens[Math.floor(n / 10)] + units[n % 10];
                }
                return str;
            }
            function convert(num) {
                let ss = '';
                if (num < 100) {
                    ss = fun(num);
                }
                else if (num >= 100 && num < 1000) {
                    ss = fun(Math.floor(num / 100)) + " Hundred " + convert(num % 100);
                }
                else if (num >= 1000 && num < 100000) {
                    ss = fun(Math.floor(num / 1000)) + " Thousand " + convert(num % 1000);
                }
                else if (num >= 100000 && num < 10000000) {
                    ss = fun(Math.floor(num / 100000)) + " Lakh " + convert(num % 100000);
                }
                else if (num >= 10000000 && num < 1000000000) {
                    ss = fun(Math.floor(num / 10000000)) + " Crore " + convert(num % 10000000);
                }
                return ss;
            }
        }, (err) => console.log(err));
    }
    print() {
        const billDate = this.datepipe.transform(this.consumer[0].BillNoDate, 'dd/MM/yyyy');
        const DCDate = this.datepipe.transform(this.consumer[0].DCDate, 'dd/MM/yyyy');
        const PODate = this.datepipe.transform(this.consumer[0].PODate, 'dd/MM/yyyy');
        //Dynamically creating table body for pdfMake
        var productDetails = this.consumer[0].Products;
        var headers = {
            file_0: {
                col_1: { text: 'Sr.\nNo.', bold: true, fillColor: '#A9A9A9' },
                col_2: { text: 'Description', bold: true, alignment: 'center', fillColor: '#A9A9A9' },
                col_3: { text: 'HSN Code', bold: true, fillColor: '#A9A9A9' },
                col_4: { text: 'Sqft./Size', bold: true, fillColor: '#A9A9A9' },
                col_5: { text: 'Qty.', bold: true, fillColor: '#A9A9A9' },
                col_6: { text: 'Rate per', bold: true, fillColor: '#A9A9A9' },
                col_7: { text: 'Amount', bold: true, fillColor: '#A9A9A9' }
            }
        };
        var rows = productDetails;
        this.body = [];
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                var header = headers[key];
                var row = new Array();
                row.push(header.col_1);
                row.push(header.col_2);
                row.push(header.col_3);
                row.push(header.col_4);
                row.push(header.col_5);
                row.push(header.col_6);
                row.push(header.col_7);
                this.body.push(row);
            }
        }
        for (var i = 0; i < rows.length; i++) {
            var row = new Array();
            row.push(i + 1);
            row.push(rows[i].ProductName);
            row.push((rows[i].HSNCode == null || rows[i].HSNCode == '') ? '-' : rows[i].HSNCode);
            row.push((rows[i].Size == null || rows[i].Size == '') ? '-' : rows[i].Size);
            row.push((rows[i].Qty == null || rows[i].Qty == '') ? '-' : rows[i].Qty);
            row.push((rows[i].RatePer == null || rows[i].RatePer == '') ? '-' : `${rows[i].RatePer}/-`);
            row.push((rows[i].Amount == null || rows[i].Amount == '') ? '-' : `${rows[i].Amount}/-`);
            this.body.push(row);
        }
        // playground requires you to assign document definition to a variable called dd
        this.dd = {
            info: {
                title: `${this.consumer[0].ConsumerName}-${this.consumer[0].BillNo}.pdf`
            },
            pageSize: 'A4',
            pageMargins: [20, 20, 20, 20],
            content: [
                {
                    style: 'tableExample',
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 1 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 1 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'black';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'black';
                        },
                    },
                    table: {
                        widths: ['*', '*'],
                        heights: ['auto', 'auto', 'auto', 380, 'auto', 50],
                        body: [
                            [{ image: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logo, width: 180, alignment: 'center', margin: [10, 10, 10, 10] }, { type: 'none', style: 'bold', margin: [20, 22, 30, 10], ol: ['Address of the company', 'City', 'Tel. : 1234567890, 0123456789', 'E-mail : test@gmail.com'] }],
                            [{ text: 'INVOICE', colSpan: 2, alignment: 'center', fontSize: 24, bold: 'true' }, ''],
                            [{ text: `To, \n ${this.consumer[0].ConsumerName}\n${this.consumer[0].ConsumerCity}\n\nGSTN ${this.consumer[0].ConsumerGST}`, bold: true, margin: 10 }, { bold: true, margin: 10, table: { widths: [120, '*'], body: [[`Bill No.   : ${(this.consumer[0].BillNo) ? this.consumer[0].BillNo : ' '}`, `Date : ${(this.consumer[0].BillNoDate) ? billDate : ' '}`], [`D.C. No. : ${(this.consumer[0].DCNo) ? this.consumer[0].DCNo : ' '}`, `Date : ${(this.consumer[0].DCDate) ? DCDate : ' '}`], [`P.O. No.  : ${(this.consumer[0].PONo) ? this.consumer[0].PONo : ' '}`, `Date : ${(this.consumer[0].PODate) ? PODate : ' '}`]] }, layout: 'noBorders' }],
                            [{
                                    style: 'tableExample',
                                    table: {
                                        headerRows: 1,
                                        widths: ['auto', '*', 60, 60, 40, 40, 60],
                                        body: this.body
                                    },
                                    colSpan: 2,
                                    margin: [5, 10, 5, 0]
                                }, ''],
                            [{
                                    table: {
                                        widths: [350, '*'],
                                        body: [
                                            [{ text: `Rs in Words : ${this.word} Rupees`, bold: true, border: [false, false, true, false], margin: [0, 0] }, { border: [false, false, false, false], table: { widths: ['auto', '*'], body: [[{ text: 'TOTAL', bold: true, border: [false, false, true, true] }, { text: `${this.consumer[0].Total}/-`, bold: true, border: [true, false, false, true] }], [{ text: `CGST  ${this.consumer[0].CGSTP}%`, bold: true, border: [false, true, true, true] }, { text: `${this.consumer[0].CGST}/-`, bold: true, border: [true, true, false, true] }], [{ text: `SGST  ${this.consumer[0].SGSTP}%`, bold: true, border: [false, true, true, true] }, { text: `${this.consumer[0].SGST}/-`, bold: true, border: [true, true, false, true] }], [{ text: 'G TOTAL', bold: true, border: [false, true, true, false] }, { text: `${this.consumer[0].GrandTotal}/-`, bold: true, border: [true, true, false, false] }]] } }]
                                        ]
                                    },
                                    colSpan: 2
                                }, ''],
                            [{
                                    table: {
                                        widths: ['auto', 'auto', '*'],
                                        body: [
                                            [{ text: [
                                                        { text: 'Bank Details\n', bold: true, fontSize: 13 },
                                                        { text: 'Bank Name   : **** ****\n', bold: true },
                                                        { text: 'Branch           : ', bold: true },
                                                        { text: '*** *** ***\n', bold: true, fontSize: 9 },
                                                        { text: 'A/C. No.        : ***\n', bold: true },
                                                        { text: 'IFSC Code     : ***', bold: true }
                                                    ], bold: true, margin: [5, 5, 5, 5], border: [false, false, true, false], fontSize: 10 }, { text: 'GSTN ************', fontSize: 13, alignment: 'center', bold: true, margin: [10, 20, 20, 20], border: [true, false, true, false] }, { image: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].img, width: 90, margin: [70, 30, 0, 0], border: [true, false, false, false] }],
                                        ]
                                    },
                                    colSpan: 2
                                }, '']
                        ]
                    }
                },
            ]
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.createPdf(this.dd).open();
        // pdfMake.createPdf(this.dd).download(`${this.consumer[0].ConsumerName}-${this.consumer[0].BillNo}.pdf`); 
    }
    navigateToList() {
        this.routes.navigate(['billing']);
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 129, vars: 26, consts: [[1, "print"], ["width", "100%", 1, "table"], ["colspan", "3"], [1, "row"], [1, "col-6", 2, "border-right", "1px solid black"], ["src", "../../assets/logo.png", "alt", "", "width", "300px", "height", "100px"], [1, "col-6"], ["colspan", "3", 2, "padding", "0px"], [1, "title"], [1, "col-5", 2, "border-right", "1px solid black"], [1, "CusName"], [1, "col-7"], [1, "table", 2, "border", "none"], [2, "border", "none"], ["colspan", "3", 2, "padding", "0"], ["id", "content", 1, "table"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], ["colspan", "2"], ["colspan", "1", 2, "padding", "0px"], [1, "table", "table-sm"], ["colspan", "1", "width", "34%"], ["colspan", "1", "width", "33%"], ["colspan", "1", "width", "50%"], ["src", "../../assets/logo.png", "alt", "", "width", "300px", "height", "100px", 1, "lastLogo"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "ml-3", 3, "click"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Address of the company,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "City.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tel. : 1234567890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "E-mail : test@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "INVOICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "sr.no.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "HSN Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sqft./ Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Qty.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Rate Per");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Amount (in Rs.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, PrintComponent_tr_75_Template, 18, 10, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "G TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Bank Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\tBank name     :***\n\tBranch        :***\n\tA/C. No.      :***\n\tIFSC Code     :***\n\t\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "GSTN ***");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "For");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintComponent_Template_button_click_124_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintComponent_Template_button_click_126_listener() { return ctx.navigateToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.consumer[0].ConsumerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.consumer[0].ConsumerCity, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GSTN ", ctx.consumer[0].ConsumerGST, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bill No. : ", ctx.consumer[0].BillNo ? ctx.consumer[0].BillNo : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 17, ctx.consumer[0].BillNoDate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D.C. No. : ", ctx.consumer[0].DCNo ? ctx.consumer[0].DCNo : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 20, ctx.consumer[0].DCDate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("P.O. No. : ", ctx.consumer[0].PONo ? ctx.consumer[0].PONo : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 23, ctx.consumer[0].PODate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.consumer[0].Products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. in words : ", ctx.word, " Rupees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.consumer[0].Total, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("CGST ", ctx.consumer[0].CGSTP, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.consumer[0].CGST, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SGST ", ctx.consumer[0].SGSTP, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.consumer[0].SGST, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.consumer[0].GrandTotal, "");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".print[_ngcontent-%COMP%] {\r\n  width: 900px;\r\n  margin: auto;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n\tborder: 1px solid black;\r\n  border-collapse: collapse;\r\n  font-weight: bold;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n\tborder: 1px solid black;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n\tborder: 1px solid black;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 2em;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n}\r\n.CusName[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQvdGFibGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0NBQ0MsdUJBQXVCO0VBQ3RCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL3ByaW50L3RhYmxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludCB7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG50YWJsZSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG50ciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxudGQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4uQ3VzTmFtZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print',
                templateUrl: './table.html',
                styleUrls: ['./table.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
const environment = {
    production: false,
    img: 'data:image/png;base64,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',
    logo: 'data:image/png;base64,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'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ajay Data\Projects\Angular\Om Sai Lamination\OmSaiLamination\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map