(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-progressspinner-progressspinnerdemo-module"],{

/***/ "./src/app/components/progressspinner/progressspinner.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/progressspinner/progressspinner.ts ***!
  \***************************************************************/
/*! exports provided: ProgressSpinner, ProgressSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinner", function() { return ProgressSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerModule", function() { return ProgressSpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressSpinner = /** @class */ (function () {
    function ProgressSpinner() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressSpinner.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "strokeWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "fill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "animationDuration", void 0);
    ProgressSpinner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-progressSpinner',
            template: "\n        <div class=\"ui-progress-spinner\" [ngStyle]=\"style\" [ngClass]=\"styleClass\">\n            <svg class=\"ui-progress-spinner-svg\" viewBox=\"25 25 50 50\" [style.animation-duration]=\"animationDuration\">\n                <circle class=\"ui-progress-spinner-circle\" cx=\"50\" cy=\"50\" r=\"20\" [attr.fill]=\"fill\" [attr.stroke-width]=\"strokeWidth\" stroke-miterlimit=\"10\"/>\n            </svg>\n        </div>\n    "
        })
    ], ProgressSpinner);
    return ProgressSpinner;
}());

var ProgressSpinnerModule = /** @class */ (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [ProgressSpinner],
            declarations: [ProgressSpinner]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProgressSpinnerDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDemoRoutingModule", function() { return ProgressSpinnerDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _progressspinnerdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressspinnerdemo */ "./src/app/showcase/components/progressspinner/progressspinnerdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressSpinnerDemoRoutingModule = /** @class */ (function () {
    function ProgressSpinnerDemoRoutingModule() {
    }
    ProgressSpinnerDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _progressspinnerdemo__WEBPACK_IMPORTED_MODULE_2__["ProgressSpinnerDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProgressSpinnerDemoRoutingModule);
    return ProgressSpinnerDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo.html":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/progressspinner/progressspinnerdemo.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">ProgressSpinner</span>\r\n        <span>ProgressSpinner is a process status indicator.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-progressSpinner></p-progressSpinner>\r\n\r\n    <h3>Custom</h3>\r\n    <p-progressSpinner [style]=\"{width: '50px', height: '50px'}\" strokeWidth=\"8\" fill=\"#EEEEEE\" animationDuration=\".5s\"></p-progressSpinner>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ProgressSpinnerModule&#125; from 'primeng/progressspinner';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>ProgressSpinner is defined using p-progressSpinner element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-progressSpinner&gt;&lt;/p-progressSpinner&gt;\r\n</code>\r\n</pre>\r\n            <h3>Colors</h3>\r\n            <p>Colors of the spinner can be changed by overriding the keyframes animation</p>\r\n<pre>\r\n<code class=\"language-css\" pCode ngNonBindable>\r\n@keyframes ui-progress-spinner-color &#123;\r\n    100%,\r\n    0% &#123;\r\n        stroke: #d62d20;\r\n    &#125;\r\n    40% &#123;\r\n        stroke: #0057e7;\r\n    &#125;\r\n    66% &#123;\r\n        stroke: #008744;\r\n    &#125;\r\n    80%,\r\n    90% &#123;\r\n        stroke: #ffa700;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            \r\n\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>strokeWidth</td>\r\n                            <td>string</td>\r\n                            <td>2</td>\r\n                            <td>Width of the circle stroke.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>fill</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Color for the background of the circle.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>animationDuration</td>\r\n                            <td>string</td>\r\n                            <td>2s</td>\r\n                            <td>Duration of the rotate animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-progress-spinner</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-progress-circle</td>\r\n                            <td>SVG element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-progress-path</td>\r\n                            <td>Circle element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/progressspinner\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;Basic&lt;/h3&gt;\r\n&lt;p-progressSpinner&gt;&lt;/p-progressSpinner&gt;\r\n\r\n&lt;h3&gt;Custom&lt;/h3&gt;\r\n&lt;p-progressSpinner [style]=\"&#123;width: '50px', height: '50px'&#125;\" strokeWidth=\"8\" fill=\"#EEEEEE\" animationDuration=\".5s\"&gt;&lt;/p-progressSpinner&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/progressspinner/progressspinnerdemo.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProgressSpinnerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDemoModule", function() { return ProgressSpinnerDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progressspinnerdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressspinnerdemo */ "./src/app/showcase/components/progressspinner/progressspinnerdemo.ts");
/* harmony import */ var _progressspinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressspinnerdemo-routing.module */ "./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts");
/* harmony import */ var _components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/progressspinner/progressspinner */ "./src/app/components/progressspinner/progressspinner.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProgressSpinnerDemoModule = /** @class */ (function () {
    function ProgressSpinnerDemoModule() {
    }
    ProgressSpinnerDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _progressspinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProgressSpinnerDemoRoutingModule"],
                _components_progressspinner_progressspinner__WEBPACK_IMPORTED_MODULE_4__["ProgressSpinnerModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _progressspinnerdemo__WEBPACK_IMPORTED_MODULE_2__["ProgressSpinnerDemo"]
            ]
        })
    ], ProgressSpinnerDemoModule);
    return ProgressSpinnerDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/progressspinner/progressspinnerdemo.ts ***!
  \****************************************************************************/
/*! exports provided: ProgressSpinnerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDemo", function() { return ProgressSpinnerDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressSpinnerDemo = /** @class */ (function () {
    function ProgressSpinnerDemo() {
    }
    ProgressSpinnerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./progressspinnerdemo.html */ "./src/app/showcase/components/progressspinner/progressspinnerdemo.html")
        })
    ], ProgressSpinnerDemo);
    return ProgressSpinnerDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-progressspinner-progressspinnerdemo-module.js.map