webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_product_create_product_component__ = __webpack_require__("./src/app/create-product/create-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__ = __webpack_require__("./src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_pages_mens_perfume_page_mens_perfume_page_component__ = __webpack_require__("./src/app/product-pages/mens-perfume-page/mens-perfume-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_pages_ladies_perfume_page_ladies_perfume_page_component__ = __webpack_require__("./src/app/product-pages/ladies-perfume-page/ladies-perfume-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_pages_makeup_page_makeup_page_component__ = __webpack_require__("./src/app/product-pages/makeup-page/makeup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stock_page_stock_page_component__ = __webpack_require__("./src/app/stock-page/stock-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__update_product_update_product_component__ = __webpack_require__("./src/app/update-product/update-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {StockPageComponent} from "./product-pages/stock-page/stock-page.component";


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'mperfume', component: __WEBPACK_IMPORTED_MODULE_4__product_pages_mens_perfume_page_mens_perfume_page_component__["a" /* MensPerfumePageComponent */] },
    { path: 'lperfume', component: __WEBPACK_IMPORTED_MODULE_5__product_pages_ladies_perfume_page_ladies_perfume_page_component__["a" /* LadiesPerfumePageComponent */] },
    { path: 'makeup', component: __WEBPACK_IMPORTED_MODULE_6__product_pages_makeup_page_makeup_page_component__["a" /* MakeupPageComponent */] },
    { path: 'stock', component: __WEBPACK_IMPORTED_MODULE_8__stock_page_stock_page_component__["a" /* StockPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'newProduct', component: __WEBPACK_IMPORTED_MODULE_2__create_product_create_product_component__["a" /* CreateProductComponent */] },
    { path: 'updateProduct', component: __WEBPACK_IMPORTED_MODULE_9__update_product_update_product_component__["a" /* UpdateProductComponent */] },
    { path: 'updateProduct/:productId', component: __WEBPACK_IMPORTED_MODULE_9__update_product_update_product_component__["a" /* UpdateProductComponent */] },
    // { path: 'manager', component: AdminPageComponent},
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, config)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div class=\"container\">\r\n    <app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n</div> -->\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__ = __webpack_require__("./src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_product_create_product_component__ = __webpack_require__("./src/app/create-product/create-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_pages_mens_perfume_page_mens_perfume_page_component__ = __webpack_require__("./src/app/product-pages/mens-perfume-page/mens-perfume-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_pages_ladies_perfume_page_ladies_perfume_page_component__ = __webpack_require__("./src/app/product-pages/ladies-perfume-page/ladies-perfume-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_pages_makeup_page_makeup_page_component__ = __webpack_require__("./src/app/product-pages/makeup-page/makeup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_list_products_list_component__ = __webpack_require__("./src/app/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__update_product_update_product_component__ = __webpack_require__("./src/app/update-product/update-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__stock_page_stock_page_component__ = __webpack_require__("./src/app/stock-page/stock-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_service__ = __webpack_require__("./src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_form_product_form_component__ = __webpack_require__("./src/app/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__products_filter_pipe__ = __webpack_require__("./src/app/products-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { StockPageComponent } from './product-pages/stock-page/stock-page.component';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__create_product_create_product_component__["a" /* CreateProductComponent */],
                __WEBPACK_IMPORTED_MODULE_10__product_pages_mens_perfume_page_mens_perfume_page_component__["a" /* MensPerfumePageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_pages_ladies_perfume_page_ladies_perfume_page_component__["a" /* LadiesPerfumePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__product_pages_makeup_page_makeup_page_component__["a" /* MakeupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__products_list_products_list_component__["a" /* ProductsListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__stock_page_stock_page_component__["a" /* StockPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__update_product_update_product_component__["a" /* UpdateProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_form_product_form_component__["a" /* ProductFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__products_filter_pipe__["a" /* ProductsFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_18__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-product/create-product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-product/create-product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-product-form [operation]=\"create\"></app-product-form>\r\n"

/***/ }),

/***/ "./src/app/create-product/create-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_service__ = __webpack_require__("./src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateProductComponent = /** @class */ (function () {
    function CreateProductComponent(http, productsService) {
        this.http = http;
        this.productsService = productsService;
        this.create = "create";
        this.Category = [
            'בושם',
            'איפור',
        ];
        this.Gender = [
            'אישה',
            'גבר',
        ];
        this.Status = [
            'זמין',
            'לא זמין',
        ];
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    CreateProductComponent.prototype.createFormControls = function () {
        this.itemName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        this.category = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        this.gender = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        this.price = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
        ]);
        this.amount = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
        ]);
    };
    CreateProductComponent.prototype.createForm = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            itemName: this.itemName,
            category: this.category,
            gender: this.gender,
            status: this.status,
            price: this.price,
            amount: this.amount
        });
    };
    CreateProductComponent.prototype.onSubmit = function () {
        var newProduct = {
            name: this.itemName.value,
            gender: this.gender.value,
            category: this.category.value,
            price: this.price.value,
            status: this.status.value,
            ml: this.amount.value,
            image: "https://www.glamguru.co.il/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/_/o/_one_million_100mle.d.t_paco_rabanne.jpg"
        };
        this.productsService.createProduct(newProduct).subscribe(function (data) { console.log("yesssssssssss"); }, function (err) { return console.error(err); });
    };
    CreateProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-product',
            template: __webpack_require__("./src/app/create-product/create-product.component.html"),
            styles: [__webpack_require__("./src/app/create-product/create-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__products_service__["a" /* ProductsService */]])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown-menu{\r\n    min-width: 20px;\r\n    background-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-item{\r\n    color: #fff;\r\n}\r\n\r\na.dropdown-item:hover{\r\n    background-color: #626b74 !important;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark sticky-top bg-dark r2l\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">סוכני מרום</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\" [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    \r\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li ngbDropdown class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\"\r\n             id=\"navbarDropdown\" role=\"button\"\r\n             data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n             aria-expanded=\"false\">\r\n            בישום\r\n          </a>\r\n          <div class=\"dropdown-menu r2l\" aria-labelledby=\"navbarDropdown\" ngbDropdownMenu>\r\n            <!--<a class=\"dropdown-item\" (click)=\"navigateToProductPage('mperfume')\">גברים</a>-->\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/mperfume']\">גברים</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/lperfume']\">נשים</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\" routerLink=\"manager\">\r\n          <!--<a class=\"nav-link\" (click)=\"navigateToProductPage('makeup')\" href=\"#\">איפור<span class=\"sr-only\">(current)</span></a>-->\r\n          <a class=\"nav-link\" [routerLink]=\"['/makeup']\">איפור<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li ngbDropdown class=\"nav-item dropdown\" *ngIf=\"isUserIsAdmin()\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            מנהל\r\n          </a>\r\n          <div class=\"dropdown-menu r2l\" aria-labelledby=\"navbarDropdown\" ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/stock']\">מלאי</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/newProduct']\">חדש</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <div class=\"form-inline my-2 my-lg-0\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"navToLogin()\" *ngIf=\"isUserIsGuest()\">התחבר</button>\r\n        <button class=\"btn btn-outline-danger my-2 my-sm-0\" type=\"submit\" (click)=\"logout()\" *ngIf=\"!isUserIsGuest()\">התנתק</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.navbarCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isUserIsGuest = function () {
        return this.userService.getPremission() == "guest";
    };
    HeaderComponent.prototype.isUserIsAdmin = function () {
        return this.userService.getPremission() == "admin";
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.setPremission("guest");
        this.router.navigate(['/']);
    };
    HeaderComponent.prototype.navToLogin = function () {
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/***/ (function(module, exports) {

module.exports = ".center-content{\r\n    margin-top: 200px;\r\n}"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center-content\">\r\n  <div class=\"form-row text-center\">\r\n    <div class=\"col-md-2 offset-md-5\" *ngIf=\"userInvalid\">\r\n      <div class=\"alert alert-danger r2l\" role=\"alert\">\r\n        שם משתמש ו/או סיסמא שגויים!\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row text-center\">\r\n    <div class=\"col-md-2 offset-md-5\">\r\n      <div class=\"input-group mb-3\">\r\n        <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control r2l\" placeholder=\"שם משתמש\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row text-center\">\r\n    <div class=\"col-md-2 offset-md-5\">\r\n      <div class=\"input-group mb-3\">\r\n        <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control r2l\" placeholder=\"סיסמא\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n </div>\r\n<div class=\"form-row text-center\">\r\n    <div class=\"col-12\">\r\n        <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"login()\">התחבר</a>\r\n    </div>\r\n </div>"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.username = "";
        this.password = "";
        this.userInvalid = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    //TODO::client error message if the connection failde.
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        var userToCheck = {
            username: this.username,
            password: this.password
        };
        this.userService.login(userToCheck).subscribe(function (data) {
            if (data['errMsg']) {
                _this.userInvalid = true;
            }
            else {
                _this.user = data['premission'];
                _this.userInvalid = false;
                _this.userService.setPremission(_this.user);
                _this.router.navigate(['/']);
                //TODO::move the default page...
            }
        }, function (err) { return console.error(err); });
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-page',
            template: __webpack_require__("./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("./src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/product-form/product-form.component.css":
/***/ (function(module, exports) {

module.exports = ".center-content{\r\n    margin-top: 5%;\r\n}"

/***/ }),

/***/ "./src/app/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center-content\">\n\n    <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"onSubmit()\">\n    \n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\">\n            <div class=\"input-group mb-3\">\n              <input type=\"text\"  class=\"form-control r2l\" placeholder=\"שם מוצר\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" formControlName=\"itemName\" required>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n          <div class=\"alert alert-danger r2l\" role=\"alert\" *ngIf=\"itemName.errors && (itemName.dirty || itemName.touched)\">\n            <p *ngIf=\"itemName.errors.required\">חובה להכניס שם מוצר</p>\n          </div>\n        </div>\n      </div>\n    \n    \n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\">\n            <div class=\"input-group mb-3\">\n              <select class=\"custom-select r2l\" formControlName=\"category\" id=\"inputGroupSelect01\">\n                <option value=\"\" disabled selected>סוג מוצר</option>\n                <option *ngFor=\"let item of Category\" [value]=\"item\"> {{item}} </option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n          <div class=\"alert alert-danger r2l\" role=\"alert\" *ngIf=\"category.errors && (category.dirty || category.touched)\">\n            <p *ngIf=\"category.errors.required\">חובה להכניס סוג מוצר</p>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\">\n            <div class=\"input-group mb-3\">\n              <select class=\"custom-select r2l\" formControlName=\"gender\" id=\"inputGroupSelect01\">\n                <option value=\"\" disabled selected>מין</option>\n                <option *ngFor=\"let kind of Gender\" [value]=\"kind\"> {{kind}} </option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n          <div class=\"alert alert-danger r2l\" role=\"alert\" *ngIf=\"gender.errors && (gender.dirty || gender.touched)\">\n            <p *ngIf=\"gender.errors.required\">חובה להכניס מין</p>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\">\n            <div class=\"input-group mb-3\">\n              <select class=\"custom-select r2l\" formControlName=\"status\" id=\"inputGroupSelect01\">\n                <option value=\"\" disabled selected>זמינות במלאי</option>\n                <option *ngFor=\"let obj of Status\" [value]=\"obj\"> {{obj}} </option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n          <div class=\"alert alert-danger r2l\" role=\"alert\" *ngIf=\"status.errors && (status.dirty || status.touched)\">\n            <p *ngIf=\"status.errors.required\">חובה להכניס סטטוס מוצר</p>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\">\n            <div class=\"input-group mb-3\">\n              <input type=\"number\"  class=\"form-control r2l\" placeholder=\"מחיר\" aria-label=\"Price\" aria-describedby=\"basic-addon1\" formControlName=\"price\" required>\n            </div>\n          </div>\n        </div>  \n      </div>\n    \n    \n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n          <div class=\"alert alert-danger r2l\" role=\"alert\" *ngIf=\"price.errors && (price.dirty || price.touched)\">\n            <p *ngIf=\"price.errors.required\">חובה להכניס מחיר למוצר</p>\n            <p *ngIf=\"price.errors.pattern\">מחיר לא תקין</p>\n          </div>\n        </div>\n      </div>\n    \n    \n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\">\n            <div class=\"input-group mb-3\">\n              <input type=\"number\"  class=\"form-control r2l\" placeholder=\"תכולה\" aria-label=\"\" aria-describedby=\"basic-addon1\" formControlName=\"amount\" required>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n    \n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n          <div class=\"alert alert-danger r2l\" role=\"alert\" *ngIf=\"amount.errors && (amount.dirty || amount.touched)\">\n            <p *ngIf=\"amount.errors.required\">חובה להכניס כמות מ\"ל</p>\n            <p *ngIf=\"amount.errors.pattern\">כמות מ\"ל לא תקינה</p>\n          </div>\n        </div>\n      </div>\n    \n\n      <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-md-4 offset-md-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\"  class=\"form-control r2l\" placeholder=\"כתובת תמונה\" aria-label=\"\" aria-describedby=\"basic-addon1\" formControlName=\"image\" required>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4 offset-md-4\">\n              <div class=\"alert alert-danger r2l\" role=\"alert\" *ngIf=\"image.errors && (image.dirty || image.touched)\">\n                <p *ngIf=\"image.errors.required\">חובה להכניס תמונה</p>\n              </div>\n            </div>\n          </div>\n\n\n      <div class=\"form-row text-center\">\n        <div class=\"col-12\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">שמור מוצר</button>\n        </div>\n      </div>\n    \n      <!-- <pre>{{myForm.value | json}}</pre> -->\n      <!-- <pre>Touched? {{ itemName.touched }}</pre> -->\n    </form>\n    \n    </div>"

/***/ }),

/***/ "./src/app/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(productsService, builder) {
        this.productsService = productsService;
        this.builder = builder;
        this.Category = [
            'בושם',
            'איפור',
        ];
        this.Gender = [
            'אישה',
            'גבר',
        ];
        this.Status = [
            'זמין',
            'לא זמין',
        ];
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
        // const a: FormGroup = null;
        // a.get('name') as FormControl
    };
    // getControl(name: string): FormControl {
    //   return a.get(name) as FormControl
    // }
    ProductFormComponent.prototype.createFormControls = function () {
        if (this.productsToUpdate) {
            this.itemName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.productsToUpdate.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.category = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.productsToUpdate.category, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.gender = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.productsToUpdate.gender, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.productsToUpdate.status, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.price = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.productsToUpdate.price, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
            ]);
            this.amount = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.productsToUpdate.ml, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
            ]);
            this.image = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.productsToUpdate.image, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        }
        else {
            this.itemName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.category = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.gender = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.price = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
            ]);
            this.amount = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
            ]);
            this.image = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        }
    };
    ProductFormComponent.prototype.createForm = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            itemName: this.itemName,
            category: this.category,
            gender: this.gender,
            status: this.status,
            price: this.price,
            amount: this.amount,
            image: this.image
        });
    };
    ProductFormComponent.prototype.onSubmit = function () {
        switch (this.operation) {
            case "update": {
                var productToUpdate = {
                    _id: this.productsToUpdate._id,
                    name: this.itemName.value,
                    gender: this.gender.value,
                    category: this.category.value,
                    price: this.price.value,
                    status: this.status.value,
                    ml: this.amount.value,
                    image: this.image.value
                };
                this.productsService.updateProduct(productToUpdate).subscribe(function (data) { console.log("update"); }, function (err) { return console.error(err); });
                break;
            }
            case "create": {
                var newProduct = {
                    name: this.itemName.value,
                    gender: this.gender.value,
                    category: this.category.value,
                    price: this.price.value,
                    status: this.status.value,
                    ml: this.amount.value,
                    image: this.image.value
                };
                this.productsService.createProduct(newProduct).subscribe(function (data) { console.log("create"); }, function (err) { return console.error(err); });
                break;
            }
            default: {
                //Add error massage
                console.log(this.operation);
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductFormComponent.prototype, "productsToUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProductFormComponent.prototype, "operation", void 0);
    ProductFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-form',
            template: __webpack_require__("./src/app/product-form/product-form.component.html"),
            styles: [__webpack_require__("./src/app/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/product-pages/ladies-perfume-page/ladies-perfume-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-pages/ladies-perfume-page/ladies-perfume-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-products-list [products]=\"ladies\"></app-products-list>"

/***/ }),

/***/ "./src/app/product-pages/ladies-perfume-page/ladies-perfume-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LadiesPerfumePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LadiesPerfumePageComponent = /** @class */ (function () {
    function LadiesPerfumePageComponent(productsService) {
        this.productsService = productsService;
    }
    LadiesPerfumePageComponent.prototype.ngOnInit = function () {
        this.getAllLadiesPerfumeProducts();
    };
    LadiesPerfumePageComponent.prototype.getAllLadiesPerfumeProducts = function () {
        var _this = this;
        this.productsService.getProductsByCategoryAndGenderAndStatus("בושם", "אישה", "זמין").subscribe(function (data) { _this.ladies = data; }, function (err) { return console.error(err); });
    };
    LadiesPerfumePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ladies-perfume-page',
            template: __webpack_require__("./src/app/product-pages/ladies-perfume-page/ladies-perfume-page.component.html"),
            styles: [__webpack_require__("./src/app/product-pages/ladies-perfume-page/ladies-perfume-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], LadiesPerfumePageComponent);
    return LadiesPerfumePageComponent;
}());



/***/ }),

/***/ "./src/app/product-pages/makeup-page/makeup-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-pages/makeup-page/makeup-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  makeup-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/product-pages/makeup-page/makeup-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakeupPageComponent = /** @class */ (function () {
    function MakeupPageComponent() {
    }
    MakeupPageComponent.prototype.ngOnInit = function () {
    };
    MakeupPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-makeup-page',
            template: __webpack_require__("./src/app/product-pages/makeup-page/makeup-page.component.html"),
            styles: [__webpack_require__("./src/app/product-pages/makeup-page/makeup-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MakeupPageComponent);
    return MakeupPageComponent;
}());



/***/ }),

/***/ "./src/app/product-pages/mens-perfume-page/mens-perfume-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-pages/mens-perfume-page/mens-perfume-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-products-list [products]=\"mens\"></app-products-list>"

/***/ }),

/***/ "./src/app/product-pages/mens-perfume-page/mens-perfume-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensPerfumePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MensPerfumePageComponent = /** @class */ (function () {
    function MensPerfumePageComponent(productsService) {
        this.productsService = productsService;
    }
    MensPerfumePageComponent.prototype.ngOnInit = function () {
        this.getAllMensPerfumeProducts();
    };
    MensPerfumePageComponent.prototype.getAllMensPerfumeProducts = function () {
        var _this = this;
        this.productsService.getProductsByCategoryAndGenderAndStatus("בושם", "גבר", "זמין").subscribe(function (data) { _this.mens = data; }, function (err) { return console.error(err); });
    };
    MensPerfumePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mens-perfume-page',
            template: __webpack_require__("./src/app/product-pages/mens-perfume-page/mens-perfume-page.component.html"),
            styles: [__webpack_require__("./src/app/product-pages/mens-perfume-page/mens-perfume-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], MensPerfumePageComponent);
    return MensPerfumePageComponent;
}());



/***/ }),

/***/ "./src/app/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/products-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductsFilterPipe = /** @class */ (function () {
    function ProductsFilterPipe() {
    }
    ProductsFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Book} book The book to compare to the filter.
     * @param {Book} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    ProductsFilterPipe.prototype.applyFilter = function (product, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if ((product.name).toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (product.name !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    ProductsFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'productsFilter',
            pure: false
        })
    ], ProductsFilterPipe);
    return ProductsFilterPipe;
}());



/***/ }),

/***/ "./src/app/products-list/products-list.component.css":
/***/ (function(module, exports) {

module.exports = ".fixed-top-2{\r\n    margin-top: 56px;\r\n}\r\n\r\n.fiexd-side-1{\r\n    margin-right: 10%;\r\n}\r\n\r\n.center-content{\r\n    margin-top: 150px;\r\n}\r\n\r\nhr{\r\n    background: #fff;\r\n    background-color: #fff;\r\n    color: #fff;\r\n}\r\n\r\n.maincontainer{\r\n    position: relative;\r\n    width: 300px;\r\n    height: 340px;\r\n}\r\n\r\nimg.resize {\r\n    width: 300px;\r\n    max-height: 340px;\r\n  }\r\n\r\n.thecard:hover{\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\n.thecard{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.thefront{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    overflow: hidden;\r\n    background: rgb(255, 255, 255);\r\n    color: #333;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n}\r\n\r\n.theback{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    overflow: hidden;\r\n    background: #343a40;\r\n    color: #fff;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    text-align: center;\r\n    border-radius: 20px;\r\n}\r\n\r\n.thefront h3, .theback h3{\r\n    font-family: 'zilla slab', sans-serif;\r\n    padding: 30px;\r\n    font-weight: bold;\r\n    font-size: 28px;\r\n    text-align: center;\r\n  }\r\n\r\n.thefront p, .theback p{\r\n    font-family: 'zilla slab', sans-serif;\r\n    padding: 30px;\r\n    font-weight: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n  }"

/***/ }),

/***/ "./src/app/products-list/products-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light r2l\">\r\n  <form class=\"form-inline\">\r\n    <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"filter.name\" name=\"name\" placeholder=\"שם מוצר...\" aria-label=\"Search\">\r\n  </form>\r\n</nav>\r\n\r\n<br>\r\n\r\n<div *ngIf=\"products\">\r\n  <div class=\"fiexd-side-1 r2l\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3\"  *ngFor=\"let product of products | productsFilter:filter\">\r\n          <br>        \r\n        <div class=\"maincontainer\">\r\n        <div class=\"thecard\">\r\n          <div class=\"thefront\">\r\n              <img class=\"resize\" src=\"{{product.image}}\"  alt=\"Card image\">\r\n          </div>\r\n          <div class=\"theback r2l\">\r\n              <h3 class=\"card-title\">{{product.name}} ל{{product.gender}}</h3>\r\n              <hr>\r\n              <p class=\"card-text\">\r\n                {{product.ml}} מ\"ל\r\n                <br>\r\n                {{product.price}} ₪\r\n                <br>\r\n                {{product.status}} במלאי\r\n              </p>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"show(product)\">הגדל</button>\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"update(product)\" *ngIf=\"isUserIsAdmin()\">ערוך</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(product)\" *ngIf=\"isUserIsAdmin()\">מחק</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!products\">\r\n  לא נטענו שם מוצרים\r\n</div>\r\n        "

/***/ }),

/***/ "./src/app/products-list/products-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product__ = __webpack_require__("./src/app/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(productsService, userService, router) {
        this.productsService = productsService;
        this.userService = userService;
        this.router = router;
        this.filter = new __WEBPACK_IMPORTED_MODULE_4__product__["a" /* Product */]();
    }
    ProductsListComponent.prototype.ngOnInit = function () {
    };
    ProductsListComponent.prototype.isUserIsAdmin = function () {
        return this.userService.getPremission() == "admin";
    };
    ProductsListComponent.prototype.show = function (product) {
    };
    ProductsListComponent.prototype.update = function (product) {
        this.router.navigate(['updateProduct', product._id]);
    };
    ProductsListComponent.prototype.delete = function (product) {
        var _this = this;
        this.productsService.deleteProduct(product).subscribe(function (data) {
            var index = _this.products.indexOf(product);
            _this.products.splice(index, 1);
        }, function (err) { return console.error(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductsListComponent.prototype, "products", void 0);
    ProductsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products-list',
            template: __webpack_require__("./src/app/products-list/products-list.component.html"),
            styles: [__webpack_require__("./src/app/products-list/products-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());

// window.location.reload() 


/***/ }),

/***/ "./src/app/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.productURL = 'http://localhost:3000/item';
    }
    //GET ALL THE PRODUCTS
    ProductsService.prototype.getAllProducts = function () {
        return this.http.get('item');
    };
    //CREATE A NEW PRODUCT
    ProductsService.prototype.createProduct = function (product) {
        var body = JSON.stringify(product);
        return this.http.post('item', body, httpOptions);
    };
    ProductsService.prototype.updateProduct = function (product) {
        var body = JSON.stringify(product);
        return this.http.put('item' + '/' + product._id, body, httpOptions);
    };
    ProductsService.prototype.getProductsById = function (id) {
        return this.http.get('item' + '/' + id);
    };
    ProductsService.prototype.getProductsByCategory = function (category) {
        return this.http.get('item' + '/category/' + category);
    };
    ProductsService.prototype.getProductsByStatus = function (status) {
        return this.http.get('item' + '/status/' + status);
    };
    ProductsService.prototype.getProductsByCategoryAndGender = function (category, gender) {
        return this.http.get('item' + '/category/' + category + '/gender/' + gender);
    };
    ProductsService.prototype.getProductsByCategoryAndGenderAndStatus = function (category, gender, status) {
        return this.http.get('item' + '/category/' + category + '/gender/' + gender + '/status/' + status);
    };
    ProductsService.prototype.deleteProduct = function (product) {
        return this.http.delete('item' + '/' + product._id);
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/stock-page/stock-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock-page/stock-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"getAllProducts()\">הכל</button>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"getAvailableProducts()\">זמין במלאי</button>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"getNotAvailableProducts()\">לא זמין במלאי</button> -->\r\n\r\n<app-products-list [products]=\"stock\"></app-products-list>\r\n"

/***/ }),

/***/ "./src/app/stock-page/stock-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockPageComponent = /** @class */ (function () {
    function StockPageComponent(productsService) {
        this.productsService = productsService;
    }
    StockPageComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    StockPageComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productsService.getAllProducts().subscribe(function (data) { _this.stock = data; }, function (err) { return console.error(err); });
    };
    StockPageComponent.prototype.getNotAvailableProducts = function () {
        var _this = this;
        this.productsService.getProductsByStatus("לא זמין").subscribe(function (data) { _this.stock = data; }, function (err) { return console.error(err); });
    };
    StockPageComponent.prototype.getAvailableProducts = function () {
        var _this = this;
        this.productsService.getProductsByStatus("זמין").subscribe(function (data) { _this.stock = data; }, function (err) { return console.error(err); });
    };
    StockPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stock-page',
            template: __webpack_require__("./src/app/stock-page/stock-page.component.html"),
            styles: [__webpack_require__("./src/app/stock-page/stock-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], StockPageComponent);
    return StockPageComponent;
}());



/***/ }),

/***/ "./src/app/update-product/update-product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-product/update-product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-product-form *ngIf=\"product\" [productsToUpdate]=\"product\" [operation]=\"update\"></app-product-form>\n"

/***/ }),

/***/ "./src/app/update-product/update-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateProductComponent = /** @class */ (function () {
    function UpdateProductComponent(productsService, route) {
        var _this = this;
        this.productsService = productsService;
        this.route = route;
        this.update = "update";
        this.route.params.subscribe(function (params) {
            _this.productsService.getProductsById(params.productId).subscribe(function (data) { _this.product = data; }, function (err) { return console.error(err); });
        });
    }
    UpdateProductComponent.prototype.ngOnInit = function () {
    };
    UpdateProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-product',
            template: __webpack_require__("./src/app/update-product/update-product.component.html"),
            styles: [__webpack_require__("./src/app/update-product/update-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UpdateProductComponent);
    return UpdateProductComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userURL = 'http://localhost:3000/user';
        this.premission = "guest";
    }
    //GET THE CURRENT USER PREMISSION
    UserService.prototype.getPremission = function () {
        return this.premission;
    };
    //SET THE CURRENT USER PREMISSION
    UserService.prototype.setPremission = function (userPremission) {
        this.premission = userPremission;
    };
    UserService.prototype.login = function (user) {
        var body = JSON.stringify(user);
        return this.http.post('user', body, httpOptions);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map