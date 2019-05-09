(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputtext-inputtextdemo-module"],{

/***/ "./src/app/showcase/components/inputtext/inputtextdemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/inputtext/inputtextdemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InputTextDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextDemoRoutingModule", function() { return InputTextDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inputtextdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputtextdemo */ "./src/app/showcase/components/inputtext/inputtextdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputTextDemoRoutingModule = /** @class */ (function () {
    function InputTextDemoRoutingModule() {
    }
    InputTextDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _inputtextdemo__WEBPACK_IMPORTED_MODULE_2__["InputTextDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], InputTextDemoRoutingModule);
    return InputTextDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputtext/inputtextdemo.html":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/inputtext/inputtextdemo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Inputtext</span>\r\n        <span>InputText is an extension to standard input element with theming.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"text\"> \r\n    <span id=\"text\">{{text}}</span>\r\n    \r\n    <h3>Float Label</h3>\r\n    <span class=\"ui-float-label\">\r\n        <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n        <label for=\"float-input\">Username</label>\r\n    </span>\r\n\r\n    <h3>Disabled</h3>\r\n    <input id=\"disabled-input\" type=\"text\" size=\"30\" pInputText [disabled]=\"disabled\" />\r\n\r\n    <button id=\"disabled-btn\" type=\"button\" (click)=\"toggleDisabled()\" pButton label=\"Toggle\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;InputTextModule&#125; from 'primeng/inputtext';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>InputText is applied to an input field with pInputText directive.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pInputText /&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Binding</h3>\r\n            <p>A model can be bound using standard ngModel directive.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pInputText [(ngModel)]=\"property\"/&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Addons</h3>\r\n            <p>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside\r\n                .ui-inputgroup element. Multiple addons can be used within the same group as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-inputgroup\"&gt;\r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-user\"&gt;&lt;/i&gt;&lt;/span&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-inputgroup\"&gt;\r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-credit-card\"&gt;&lt;/i&gt;&lt;/span&gt;  \r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-cc-visa\"&gt;&lt;/i&gt;&lt;/span&gt;   \r\n    &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt; \r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;  \r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Float Label</h3>\r\n            <p>A floating label is implemented by wrapping the input and the label inside a container with .ui-float-label class.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;span class=\"ui-float-label\"&gt;\r\n    &lt;input id=\"float-input\" type=\"text\" size=\"30\" pInputText&gt; \r\n    &lt;label for=\"float-input\"&gt;Username&lt;/label&gt;\r\n&lt;/span&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-inputtext</td>\r\n                            <td>Input element</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputtext\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"text\"&gt; \r\n&lt;span id=\"text\"&gt;&#123;&#123;text&#125;&#125;&lt;/span&gt;\r\n\r\n&lt;h3&gt;Float Label&lt;/h3&gt;\r\n&lt;span class=\"ui-float-label\"&gt;\r\n    &lt;input id=\"float-input\" type=\"text\" size=\"30\" pInputText&gt; \r\n    &lt;label for=\"float-input\"&gt;Username&lt;/label&gt;\r\n&lt;/span&gt;\r\n\r\n&lt;h3&gt;Disabled&lt;/h3&gt;\r\n&lt;input id=\"disabled-input\" type=\"text\" size=\"30\" pInputText [disabled]=\"disabled\" /&gt;\r\n\r\n&lt;button id=\"disabled-btn\" type=\"button\" (click)=\"toggleDisabled()\" pButton label=\"Toggle\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class InputTextDemo &#123;\r\n\r\n    text: string;\r\n\r\n    disabled: boolean = true;\r\n\r\n    toggleDisabled() &#123;\r\n        this.disabled = !this.disabled;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/inputtext/inputtextdemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/inputtext/inputtextdemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: InputTextDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextDemoModule", function() { return InputTextDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inputtextdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputtextdemo */ "./src/app/showcase/components/inputtext/inputtextdemo.ts");
/* harmony import */ var _inputtextdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputtextdemo-routing.module */ "./src/app/showcase/components/inputtext/inputtextdemo-routing.module.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InputTextDemoModule = /** @class */ (function () {
    function InputTextDemoModule() {
    }
    InputTextDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _inputtextdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["InputTextDemoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _inputtextdemo__WEBPACK_IMPORTED_MODULE_3__["InputTextDemo"]
            ]
        })
    ], InputTextDemoModule);
    return InputTextDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputtext/inputtextdemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/inputtext/inputtextdemo.ts ***!
  \****************************************************************/
/*! exports provided: InputTextDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextDemo", function() { return InputTextDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputTextDemo = /** @class */ (function () {
    function InputTextDemo() {
        this.disabled = true;
    }
    InputTextDemo.prototype.toggleDisabled = function () {
        this.disabled = !this.disabled;
    };
    InputTextDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./inputtextdemo.html */ "./src/app/showcase/components/inputtext/inputtextdemo.html")
        })
    ], InputTextDemo);
    return InputTextDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-inputtext-inputtextdemo-module.js.map