(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputtextarea-inputtextareademo-module"],{

/***/ "./src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: InputTextareaDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaDemoRoutingModule", function() { return InputTextareaDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inputtextareademo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputtextareademo */ "./src/app/showcase/components/inputtextarea/inputtextareademo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputTextareaDemoRoutingModule = /** @class */ (function () {
    function InputTextareaDemoRoutingModule() {
    }
    InputTextareaDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _inputtextareademo__WEBPACK_IMPORTED_MODULE_2__["InputTextareaDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], InputTextareaDemoRoutingModule);
    return InputTextareaDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputtextarea/inputtextareademo.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/inputtextarea/inputtextareademo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">InputTextarea</span>\r\n        <span>Inputtextarea add styling and autoResize functionality to standard textare element.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <textarea rows=\"5\" cols=\"30\" pInputTextarea></textarea>\r\n\r\n    <h3>Float Label</h3>\r\n    <span class=\"ui-float-label\">\r\n        <textarea id=\"float-input\" rows=\"5\" cols=\"30\" pInputTextarea></textarea>\r\n        <label for=\"float-input\">Summary</label>\r\n    </span>\r\n\r\n    <h3>AutoResize</h3>\r\n    <textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;InputTextareaModule&#125; from 'primeng/inputtextarea';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>InputTextarea is applied to an input field with pInputTextarea directive.</p>\r\n                    \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;textarea pInputTextarea&gt;&lt;/textarea&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Binding</h3>\r\n            <p>A model can be bound using the standard ngModel directive.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;textarea pInputTextarea [(ngModel)]=\"property\"&gt;&lt;/textarea&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>AutoResize</h3>\r\n            <p>In auto resize mode, textarea grows instead of displaying a scrollbar. When this feature is enabled, rows and cols properties\r\n            are required to be defined.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"&gt;&lt;/textarea&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>autoResize</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, textarea size changes as being typed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onResize</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when element is resized.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-inputtextarea</td>\r\n                            <td>Textarea element</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputtextarea\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;textarea rows=\"5\" cols=\"30\" pInputTextarea&gt;&lt;/textarea&gt;\r\n\r\n&lt;h3&gt;AutoResize&lt;/h3&gt;\r\n&lt;textarea rows=\"5\" cols=\"30\" pInputTextarea autoResize=\"autoResize\"&gt;&lt;/textarea&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/inputtextarea/inputtextareademo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/inputtextarea/inputtextareademo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InputTextareaDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaDemoModule", function() { return InputTextareaDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inputtextareademo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputtextareademo */ "./src/app/showcase/components/inputtextarea/inputtextareademo.ts");
/* harmony import */ var _inputtextareademo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputtextareademo-routing.module */ "./src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts");
/* harmony import */ var _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/inputtextarea/inputtextarea */ "./src/app/components/inputtextarea/inputtextarea.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InputTextareaDemoModule = /** @class */ (function () {
    function InputTextareaDemoModule() {
    }
    InputTextareaDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _inputtextareademo_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputTextareaDemoRoutingModule"],
                _components_inputtextarea_inputtextarea__WEBPACK_IMPORTED_MODULE_4__["InputTextareaModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _inputtextareademo__WEBPACK_IMPORTED_MODULE_2__["InputTextareaDemo"]
            ]
        })
    ], InputTextareaDemoModule);
    return InputTextareaDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputtextarea/inputtextareademo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/inputtextarea/inputtextareademo.ts ***!
  \************************************************************************/
/*! exports provided: InputTextareaDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaDemo", function() { return InputTextareaDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputTextareaDemo = /** @class */ (function () {
    function InputTextareaDemo() {
    }
    InputTextareaDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./inputtextareademo.html */ "./src/app/showcase/components/inputtextarea/inputtextareademo.html")
        })
    ], InputTextareaDemo);
    return InputTextareaDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-inputtextarea-inputtextareademo-module.js.map