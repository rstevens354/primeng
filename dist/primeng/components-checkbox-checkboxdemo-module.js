(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-checkbox-checkboxdemo-module"],{

/***/ "./src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckboxDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemoRoutingModule", function() { return CheckboxDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _checkboxdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxdemo */ "./src/app/showcase/components/checkbox/checkboxdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckboxDemoRoutingModule = /** @class */ (function () {
    function CheckboxDemoRoutingModule() {
    }
    CheckboxDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _checkboxdemo__WEBPACK_IMPORTED_MODULE_2__["CheckboxDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], CheckboxDemoRoutingModule);
    return CheckboxDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/checkbox/checkboxdemo.html":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/checkbox/checkboxdemo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Checkbox</span>\r\n        <span>Checkbox is an extension to standard checkbox element with skinning capabilities.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\r\n        <div class=\"ui-g-12\"><p-checkbox name=\"group1\" value=\"New York\" label=\"New York\" [(ngModel)]=\"selectedCities\" inputId=\"ny\"></p-checkbox></div>\r\n        <div class=\"ui-g-12\"><p-checkbox name=\"group1\" value=\"San Francisco\" label=\"San Francisco\" [(ngModel)]=\"selectedCities\" inputId=\"sf\"></p-checkbox></div>\r\n        <div class=\"ui-g-12\"><p-checkbox name=\"group1\" value=\"Los Angeles\" label=\"Los Angeles\" [(ngModel)]=\"selectedCities\" inputId=\"la\"></p-checkbox></div>\r\n    </div>\r\n\r\n    Selected Cities: <span *ngFor=\"let city of selectedCities\" style=\"margin-right:10px\">{{city}}</span>\r\n\r\n    <h3>Preselection</h3>\r\n    <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\r\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Technology\" label=\"Technology\" [(ngModel)]=\"selectedCategories\" inputId=\"technology\"></p-checkbox></div>\r\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Finance\" label=\"Finance\" [(ngModel)]=\"selectedCategories\" inputId=\"finance\"></p-checkbox></div>\r\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Sports\" label=\"Sports\" [(ngModel)]=\"selectedCategories\" inputId=\"sports\"></p-checkbox></div>\r\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Entertainment\" label=\"Entertainment\" [(ngModel)]=\"selectedCategories\" inputId=\"entertainment\"></p-checkbox></div>\r\n    </div>\r\n\r\n    Selected Categories: <span *ngFor=\"let cat of selectedCategories\" style=\"margin-right:10px\">{{cat}}</span>\r\n    \r\n    <h3>Boolean - {{checked}}</h3>\r\n    <p-checkbox [(ngModel)]=\"checked\" binary=\"true\"></p-checkbox>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;CheckboxModule&#125; from 'primeng/checkbox';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value.</p>\r\n            \r\n            <h4>Multiple Values</h4>\r\n            <p>Multiple mode is enabled by default, ngModel property refers to an array to bind the selected values.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-checkbox name=\"groupname\" value=\"val1\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\r\n&lt;p-checkbox name=\"groupname\" value=\"val2\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    selectedValues: string[] = [];\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>As ngModel is two-way binding enabled, prepopulating the model array with values is enough to display the related\r\n            checkboxes as checked by default.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    selectedValues: string[] = ['val1','val2'];\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <h4>Label</h4>\r\n        <p>The label attribute provides a label text for the checkbox. This label is also clickable and toggles the checked state.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-checkbox name=\"groupname\" value=\"val1\" label=\"Value 1\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\r\n&lt;p-checkbox name=\"groupname\" value=\"val2\" label=\"Value 2\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\r\n</code>\r\n</pre>\r\n\r\n        <h4>Boolean Value</h4>\r\n        <p>A single boolean value can be bound using the ngModel property as well by enabling the binary option.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    value: boolean;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-checkbox [(ngModel)]=\"value\" binary=\"true\"&gt;&lt;/p-checkbox&gt;\r\n</code>\r\n</pre>\r\n\r\n        <h3>Model Driven Forms</h3>\r\n        <p>Checkbox can be used in a model driven form as well. In this case, due to an <a href=\"https://github.com/angular/angular/issues/17685\">issue</a> in Angular bind the formControl instance \r\n            instead of using formControlName.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;!-- Wrong --&gt;\r\n&lt;p-checkbox formControlName=\"cities\"&gt;&lt;/p-checkbox&gt;\r\n\r\n&lt;!-- Correct --&gt;\r\n&lt;p-checkbox [formControl]=\"myFormGroup.controls['cities']\"&gt;&lt;/p-checkbox&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>name</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the checkbox group.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Value of the checkbox.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Label of the checkbox.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>binary</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Allows to select a boolean value instead of multiple values.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>labelStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the label.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>checkboxIcon</td>\r\n                            <td>string</td>\r\n                            <td>pi pi-check</td>\r\n                            <td>Icon class of the checkbox icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onChange</td>\r\n                            <td>checked: Boolean value to represent new state of checkbox.</td>\r\n                            <td>Callback to invoke on checkbox click.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-chkbox</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-chkbox-box</td>\r\n                            <td>Container of icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-chkbox-icon</td>\r\n                            <td>Icon element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-chkbox-label</td>\r\n                            <td>Label element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-label-active</td>\r\n                            <td>Label element of a checked state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-label-focus</td>\r\n                            <td>Label element of a focused state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-label-disabled</td>\r\n                            <td>Label element of a disabled state.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/checkbox\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\"&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"New York\" label=\"New York\" [(ngModel)]=\"selectedCities\" inputId=\"ny\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"San Francisco\" label=\"San Francisco\" [(ngModel)]=\"selectedCities\" inputId=\"sf\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"Los Angeles\" label=\"Los Angeles\" [(ngModel)]=\"selectedCities\" inputId=\"la\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\nSelected Cities: &lt;span *ngFor=\"let city of selectedCities\" style=\"margin-right:10px\"&gt;{{city}}&lt;/span&gt;\r\n\r\n&lt;h3&gt;Preselection&lt;/h3&gt;\r\n&lt;div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\"&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Technology\" label=\"Technology\" [(ngModel)]=\"selectedCategories\" inputId=\"technology\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Finance\" label=\"Finance\" [(ngModel)]=\"selectedCategories\" inputId=\"finance\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Sports\" label=\"Sports\" [(ngModel)]=\"selectedCategories\" inputId=\"sports\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Entertainment\" label=\"Entertainment\" [(ngModel)]=\"selectedCategories\" inputId=\"entertainment\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\nSelected Categories: &lt;span *ngFor=\"let cat of selectedCategories\" style=\"margin-right:10px\"&gt;{{cat}} &lt;/span&gt;\r\n\r\n&lt;h3&gt;Boolean - {{checked}}&lt;/h3&gt;\r\n&lt;p-checkbox [(ngModel)]=\"checked\" binary=\"true\"&gt;&lt;/p-checkbox&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class CheckboxDemo &#123;\r\n\r\n    selectedCities: string[] = [];\r\n\r\n    selectedCategories: string[] = ['Technology', 'Sports'];\r\n\r\n    checked: boolean = false;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/checkbox/checkboxdemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/checkbox/checkboxdemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: CheckboxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemoModule", function() { return CheckboxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _checkboxdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkboxdemo */ "./src/app/showcase/components/checkbox/checkboxdemo.ts");
/* harmony import */ var _checkboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkboxdemo-routing.module */ "./src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts");
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/checkbox/checkbox */ "./src/app/components/checkbox/checkbox.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CheckboxDemoModule = /** @class */ (function () {
    function CheckboxDemoModule() {
    }
    CheckboxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _checkboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["CheckboxDemoRoutingModule"],
                _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__["CheckboxModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _checkboxdemo__WEBPACK_IMPORTED_MODULE_3__["CheckboxDemo"]
            ]
        })
    ], CheckboxDemoModule);
    return CheckboxDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/checkbox/checkboxdemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/checkbox/checkboxdemo.ts ***!
  \**************************************************************/
/*! exports provided: CheckboxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemo", function() { return CheckboxDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckboxDemo = /** @class */ (function () {
    function CheckboxDemo() {
        this.selectedCities = [];
        this.selectedCategories = ['Technology', 'Sports'];
        this.checked = false;
    }
    CheckboxDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./checkboxdemo.html */ "./src/app/showcase/components/checkbox/checkboxdemo.html"),
            styles: ["\n        .ui-grid .ui-grid-col-1,\n        .ui-grid .ui-grid-col-11 {\n            padding: 4px 10px;\n        }\n\n        .ui-grid label {\n            display: block;\n            margin: 2px 0 0 4px;\n        }\n    "]
        })
    ], CheckboxDemo);
    return CheckboxDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-checkbox-checkboxdemo-module.js.map