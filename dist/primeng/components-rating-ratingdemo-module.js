(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-rating-ratingdemo-module"],{

/***/ "./src/app/components/rating/rating.ts":
/*!*********************************************!*\
  !*** ./src/app/components/rating/rating.ts ***!
  \*********************************************/
/*! exports provided: RATING_VALUE_ACCESSOR, Rating, RatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_VALUE_ACCESSOR", function() { return RATING_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RATING_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Rating; }),
    multi: true
};
var Rating = /** @class */ (function () {
    function Rating(cd) {
        this.cd = cd;
        this.stars = 5;
        this.cancel = true;
        this.iconOnClass = 'pi pi-star';
        this.iconOffClass = 'pi pi-star-o';
        this.iconCancelClass = 'pi pi-ban';
        this.onRate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Rating.prototype.ngOnInit = function () {
        this.starsArray = [];
        for (var i = 0; i < this.stars; i++) {
            this.starsArray[i] = i;
        }
    };
    Rating.prototype.rate = function (event, i) {
        if (!this.readonly && !this.disabled) {
            this.value = (i + 1);
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onRate.emit({
                originalEvent: event,
                value: (i + 1)
            });
        }
        event.preventDefault();
    };
    Rating.prototype.clear = function (event) {
        if (!this.readonly && !this.disabled) {
            this.value = null;
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onCancel.emit(event);
        }
        event.preventDefault();
    };
    Rating.prototype.writeValue = function (value) {
        this.value = value;
        this.cd.detectChanges();
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Rating.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Rating.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Rating.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Rating.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Rating.prototype, "stars", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Rating.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Rating.prototype, "iconOnClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Rating.prototype, "iconOnStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Rating.prototype, "iconOffClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Rating.prototype, "iconOffStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Rating.prototype, "iconCancelClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Rating.prototype, "iconCancelStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Rating.prototype, "onRate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Rating.prototype, "onCancel", void 0);
    Rating = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-rating',
            template: "\n        <div class=\"ui-rating\" [ngClass]=\"{'ui-state-disabled': disabled}\">\n            <a [attr.tabindex]=\"disabled ? null : '0'\" *ngIf=\"cancel\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\"  class=\"ui-rating-cancel\">\n                <span class=\"ui-rating-icon\" [ngClass]=\"iconCancelClass\" [ngStyle]=\"iconCancelStyle\"></span>\n            </a>\n            <a [attr.tabindex]=\"disabled ? null : '0'\" *ngFor=\"let star of starsArray;let i=index\" (click)=\"rate($event,i)\" (keydown.enter)=\"rate($event,i)\">\n                <span class=\"ui-rating-icon\" \n                    [ngClass]=\"(!value || i >= value) ? iconOffClass : iconOnClass\"\n                    [ngStyle]=\"(!value || i >= value) ? iconOffStyle : iconOnStyle\"\n                ></span>\n            </a>\n        </div>\n    ",
            providers: [RATING_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], Rating);
    return Rating;
}());

var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    RatingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Rating],
            declarations: [Rating]
        })
    ], RatingModule);
    return RatingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/rating/ratingdemo-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/rating/ratingdemo-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RatingDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDemoRoutingModule", function() { return RatingDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ratingdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ratingdemo */ "./src/app/showcase/components/rating/ratingdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RatingDemoRoutingModule = /** @class */ (function () {
    function RatingDemoRoutingModule() {
    }
    RatingDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _ratingdemo__WEBPACK_IMPORTED_MODULE_2__["RatingDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RatingDemoRoutingModule);
    return RatingDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/rating/ratingdemo.html":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/rating/ratingdemo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Rating</span>\r\n        <span>Rating components is a star based selection input.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic {{val1}}</h3> \r\n    <p-rating [(ngModel)]=\"val1\"></p-rating>\r\n\r\n    <h3>Callback {{val2}}</h3>\r\n    <p-rating [(ngModel)]=\"val2\" (onRate)=\"handleRate($event)\" (onCancel)=\"handleCancel($event)\"></p-rating> <span *ngIf=\"msg\" style=\"margin-left:10px\">{{msg}}</span>\r\n\r\n    <h3>No Cancel {{val3}}</h3> \r\n    <p-rating [(ngModel)]=\"val3\" [cancel]=\"false\"></p-rating>\r\n\r\n    <h3>ReadOnly</h3> \r\n    <p-rating [ngModel]=\"5\" readonly=\"true\" stars=\"10\" [cancel]=\"false\"></p-rating>\r\n\r\n    <h3>Disabled</h3> \r\n    <p-rating [ngModel]=\"val4\" disabled=\"true\" stars=\"10\"></p-rating>\r\n    \r\n    <h3>Custom Icons</h3> \r\n    <p-rating [ngModel]=\"val5\" iconOnClass=\"pi pi-circle-on\" iconOffClass=\"pi pi-circle-off\" iconCancelClass=\"pi pi-times\"></p-rating>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;RatingModule&#125; from 'primeng/rating';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way value binding is defined using ngModel.</p>\r\n                    \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-rating [(ngModel)]=\"val\"&gt;&lt;/p-rating&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    val: number;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Defining a default value would be enough to display the initial number of selected stars.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    val: number = 3;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Rating can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-rating formControlName=\"score\"&gt;&lt;/p-rating&gt;\r\n</code>\r\n</pre>\r\n\r\n                    <h3>Properties</h3>\r\n                    <div class=\"doc-tablewrapper\">\r\n                        <table class=\"doc-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Type</th>\r\n                                    <th>Default</th>\r\n                                    <th>Description</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>stars</td>\r\n                                    <td>number</td>\r\n                                    <td>5</td>\r\n                                    <td>Number of stars.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>cancel</td>\r\n                                    <td>boolean</td>\r\n                                    <td>true</td>\r\n                                    <td>When specified a cancel icon is displayed to allow removing the value.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>disabled</td>\r\n                                    <td>boolean</td>\r\n                                    <td>false</td>\r\n                                    <td>When present, it specifies that the element should be disabled.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>readonly</td>\r\n                                    <td>boolean</td>\r\n                                    <td>false</td>\r\n                                    <td>When present, changing the value is not possible.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>iconOnClass</td>\r\n                                    <td>string</td>\r\n                                    <td>pi pi-star</td>\r\n                                    <td>Style class of the on icon.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>iconOffClass</td>\r\n                                    <td>string</td>\r\n                                    <td>pi pi-star</td>\r\n                                    <td>Style class of the off icon.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>iconCancelClass</td>\r\n                                    <td>string</td>\r\n                                    <td>pi pi-ban</td>\r\n                                    <td>Style class of the cancel icon.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>iconOnStyle</td>\r\n                                    <td>object</td>\r\n                                    <td>null</td>\r\n                                    <td>Inline style of the on icon.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>iconOffStyle</td>\r\n                                    <td>object</td>\r\n                                    <td>null</td>\r\n                                    <td>Inline style of the off icon.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>iconCancelStyle</td>\r\n                                    <td>object</td>\r\n                                    <td>null</td>\r\n                                    <td>Inline style of the cancel icon.</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <h3>Events</h3>\r\n                    <div class=\"doc-tablewrapper\">\r\n                        <table class=\"doc-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Parameters</th>\r\n                                    <th>Description</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>onRate</td>\r\n                                    <td>event.originalEvent: browser event <br>\r\n                                        event.value: selected value\r\n                                    </td>\r\n                                    <td>Callback to invoke on rate change.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>onCancel</td>\r\n                                    <td>event: browser event</td>\r\n                                    <td>Callback to invoke when value is removed.</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <h3>Styling</h3>\r\n                    <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n                    <div class=\"doc-tablewrapper\">\r\n                        <table class=\"doc-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Element</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>ui-rating</td>\r\n                                    <td>Container element</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>ui-rating-star</td>\r\n                                    <td>Star element</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>ui-rating-star-on</td>\r\n                                    <td>Selected star element.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>ui-rating-cancel</td>\r\n                                    <td>Cancel icon.</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <h3>Dependencies</h3>\r\n                    <p>None.</p>\r\n                </p-tabPanel>\r\n\r\n                <p-tabPanel header=\"Source\">\r\n                    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/rating\" class=\"btn-viewsource\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                        <span>View on GitHub</span>\r\n                    </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic {{val1}}&lt;/h3&gt; \r\n&lt;p-rating [(ngModel)]=\"val1\"&gt;&lt;/p-rating&gt;\r\n\r\n&lt;h3&gt;Callback {{val2}}&lt;/h3&gt;\r\n&lt;p-rating [(ngModel)]=\"val2\" (onRate)=\"handleRate($event)\" (onCancel)=\"handleCancel($event)\"&gt;&lt;/p-rating&gt; &lt;span *ngIf=\"msg\" style=\"margin-left:10px\"&gt;{{msg}}&lt;/span&gt;\r\n\r\n&lt;h3&gt;No Cancel {{val3}}&lt;/h3&gt; \r\n&lt;p-rating [(ngModel)]=\"val3\" [cancel]=\"false\"&gt;&lt;/p-rating&gt;\r\n\r\n&lt;h3&gt;ReadOnly&lt;/h3&gt; \r\n&lt;p-rating [ngModel]=\"5\" readonly=\"true\" stars=\"10\" [cancel]=\"false\"&gt;&lt;/p-rating&gt;\r\n\r\n&lt;h3&gt;Disabled&lt;/h3&gt; \r\n&lt;p-rating [ngModel]=\"val4\" disabled=\"true\" stars=\"10\"&gt;&lt;/p-rating&gt;\r\n\r\n&lt;h3>Custom Icons&lt;/h3&gt;\r\n&lt;p-rating [ngModel]=\"val5\" iconOnClass=\"pi pi-circle-on\" iconOffClass=\"pi pi-circle-off\" iconCancelClass=\"pi pi-times\"&gt;;&lt;/p-rating&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class RatingDemo &#123;\r\n\r\n    val1: number;\r\n\r\n    val2: number = 5;\r\n\r\n    val3: number;\r\n\r\n    val4: number = 5;\r\n\r\n    val5: number;\r\n\r\n    msg: string;\r\n\r\n    handleRate(event) &#123;\r\n        this.msg = \"You have rated \" + event.value;\r\n    &#125;\r\n\r\n    handleCancel(event) &#123;\r\n        this.msg = \"Rating Cancelled\";\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n                </p-tabPanel>\r\n            </p-tabView>\r\n        </div>"

/***/ }),

/***/ "./src/app/showcase/components/rating/ratingdemo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/showcase/components/rating/ratingdemo.module.ts ***!
  \*****************************************************************/
/*! exports provided: RatingDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDemoModule", function() { return RatingDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ratingdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ratingdemo */ "./src/app/showcase/components/rating/ratingdemo.ts");
/* harmony import */ var _ratingdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ratingdemo-routing.module */ "./src/app/showcase/components/rating/ratingdemo-routing.module.ts");
/* harmony import */ var _components_rating_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/rating/rating */ "./src/app/components/rating/rating.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RatingDemoModule = /** @class */ (function () {
    function RatingDemoModule() {
    }
    RatingDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ratingdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["RatingDemoRoutingModule"],
                _components_rating_rating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _ratingdemo__WEBPACK_IMPORTED_MODULE_3__["RatingDemo"]
            ]
        })
    ], RatingDemoModule);
    return RatingDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/rating/ratingdemo.ts":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/rating/ratingdemo.ts ***!
  \**********************************************************/
/*! exports provided: RatingDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDemo", function() { return RatingDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RatingDemo = /** @class */ (function () {
    function RatingDemo() {
        this.val4 = 5;
    }
    RatingDemo.prototype.handleRate = function (event) {
        this.msg = "You have rated " + event.value;
    };
    RatingDemo.prototype.handleCancel = function (event) {
        this.msg = "Rating Cancelled";
    };
    RatingDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ratingdemo.html */ "./src/app/showcase/components/rating/ratingdemo.html")
        })
    ], RatingDemo);
    return RatingDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-rating-ratingdemo-module.js.map