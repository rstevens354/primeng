(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-togglebutton-togglebuttondemo-module"],{

/***/ "./src/app/components/togglebutton/togglebutton.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/togglebutton/togglebutton.ts ***!
  \*********************************************************/
/*! exports provided: TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButton, ToggleButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLEBUTTON_VALUE_ACCESSOR", function() { return TOGGLEBUTTON_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return ToggleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModule", function() { return ToggleButtonModule; });
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



var TOGGLEBUTTON_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ToggleButton; }),
    multi: true
};
var ToggleButton = /** @class */ (function () {
    function ToggleButton() {
        this.onLabel = 'Yes';
        this.offLabel = 'No';
        this.iconPos = 'left';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checked = false;
        this.focus = false;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    ToggleButton.prototype.ngAfterViewInit = function () {
        this.checkbox = this.checkboxViewChild.nativeElement;
    };
    ToggleButton.prototype.toggle = function (event) {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onModelChange(this.checked);
            this.onModelTouched();
            this.onChange.emit({
                originalEvent: event,
                checked: this.checked
            });
            this.checkbox.focus();
        }
    };
    ToggleButton.prototype.onFocus = function () {
        this.focus = true;
    };
    ToggleButton.prototype.onBlur = function () {
        this.focus = false;
        this.onModelTouched();
    };
    ToggleButton.prototype.writeValue = function (value) {
        this.checked = value;
    };
    ToggleButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ToggleButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ToggleButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Object.defineProperty(ToggleButton.prototype, "hasOnLabel", {
        get: function () {
            return this.onLabel && this.onLabel.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButton.prototype, "hasOffLabel", {
        get: function () {
            return this.onLabel && this.onLabel.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleButton.prototype, "onLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleButton.prototype, "offLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleButton.prototype, "onIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleButton.prototype, "offIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToggleButton.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleButton.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleButton.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleButton.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ToggleButton.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleButton.prototype, "iconPos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToggleButton.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('checkbox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ToggleButton.prototype, "checkboxViewChild", void 0);
    ToggleButton = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-toggleButton',
            template: "\n        <div [ngClass]=\"{'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all': true, 'ui-button-text-only': (!onIcon && !offIcon), \n                'ui-button-text-icon-left': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === 'left'), \n                'ui-button-text-icon-right': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === 'right'),'ui-button-icon-only': (onIcon && offIcon && !hasOnLabel && !hasOffLabel),\n                'ui-state-active': checked,'ui-state-focus':focus,'ui-state-disabled':disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\" \n                (click)=\"toggle($event)\" (keydown.enter)=\"toggle($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #checkbox type=\"checkbox\" [attr.id]=\"inputId\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [attr.tabindex]=\"tabindex\">\n            </div>\n            <span *ngIf=\"onIcon||offIcon\" class=\"ui-button-icon-left\" [class]=\"checked ? this.onIcon : this.offIcon\" [ngClass]=\"{'ui-button-icon-left': (iconPos === 'left'), \n            'ui-button-icon-right': (iconPos === 'right')}\"></span>\n            <span class=\"ui-button-text ui-unselectable-text\">{{checked ? hasOnLabel ? onLabel : 'ui-btn' : hasOffLabel ? offLabel : 'ui-btn'}}</span>\n        </div>\n    ",
            providers: [TOGGLEBUTTON_VALUE_ACCESSOR]
        })
    ], ToggleButton);
    return ToggleButton;
}());

var ToggleButtonModule = /** @class */ (function () {
    function ToggleButtonModule() {
    }
    ToggleButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [ToggleButton],
            declarations: [ToggleButton]
        })
    ], ToggleButtonModule);
    return ToggleButtonModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/togglebutton/togglebuttondemo-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/components/togglebutton/togglebuttondemo-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ToggleButtonDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonDemoRoutingModule", function() { return ToggleButtonDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _togglebuttondemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./togglebuttondemo */ "./src/app/showcase/components/togglebutton/togglebuttondemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToggleButtonDemoRoutingModule = /** @class */ (function () {
    function ToggleButtonDemoRoutingModule() {
    }
    ToggleButtonDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _togglebuttondemo__WEBPACK_IMPORTED_MODULE_2__["ToggleButtonDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ToggleButtonDemoRoutingModule);
    return ToggleButtonDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/togglebutton/togglebuttondemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/togglebutton/togglebuttondemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">ToggleButton</span>\r\n        <span>ToggleButton is used to select a boolean value using a button.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic - ({{checked1}})</h3>\r\n    <p-toggleButton [(ngModel)]=\"checked1\" [style]=\"{'width':'150px'}\"></p-toggleButton>\r\n\r\n    <h3>Customized - ({{checked2}})</h3>\r\n    <p-toggleButton [(ngModel)]=\"checked2\" onLabel=\"I confirm\" offLabel=\"I reject\" onIcon=\"pi pi-check\" offIcon=\"pi pi-times\" [style]=\"{'width':'150px'}\"></p-toggleButton>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ToggleButtonModule&#125; from 'primeng/togglebutton';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way binding to a boolean property is defined using the standard ngModel directive.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toggleButton [(ngModel)]=\"checked\"&gt;&lt;/p-toggleButton&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    checked: boolean;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>As model is two-way binding enabled, setting the bound value as true displays the state as checked.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n   checked: boolean = true;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>ToggleButton can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toggleButton formControlName=\"agreed\"&gt;&lt;/p-toggleButton&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Labels</h3>\r\n            <p>Labels are customized using onLabel and offLabel properties.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toggleButton onLabel=\"I confirm\" offLabel=\"I reject\"\r\n            onIcon=\"pi pi-check\" offIcon=\"pi pi-times\" [(ngModel)]=\"val\"&gt;&lt;/p-toggleButton&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Icons</h3>\r\n            <p>Icon on a ToggleButton is specified with the onIcon and offIcon properties and position is customized using the iconPos property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toggleButton onLabel=\"I confirm\" offLabel=\"I reject\" \r\n            onIcon=\"fa fa-check\" offIcon=\"fa fa-times\" iconPos=\"right\" [(ngModel)]=\"val\"&gt;&lt;/p-toggleButton&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                         <tr>\r\n                            <td>onLabel</td>\r\n                            <td>string</td>\r\n                            <td>Yes</td>\r\n                            <td>Label for the on state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>offLabel</td>\r\n                            <td>string</td>\r\n                            <td>No</td>\r\n                            <td>Label for the off state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon for the on state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>offIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon for the off state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onChange</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.checked: boolean value to represent checked state.</td>\r\n                            <td>Callback to invoke on state change.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toggleButton (onChange)=\"handleChange($event)\" [(ngModel)]=\"val\"&gt;\r\n</code>\r\n</pre>\r\n <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    handleChange(e) &#123;\r\n        var isChecked = e.checked;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-togglebutton</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-button-icon-left</td>\r\n                            <td>Icon element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-button-icon-right</td>\r\n                            <td>Icon element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-button-text</td>\r\n                            <td>Label element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/togglebutton\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic - ({{checked1}})&lt;/h3&gt;\r\n&lt;p-toggleButton [(ngModel)]=\"checked1\" [style]=\"&#123;'width':'150px'&#125;\"&gt;&lt;/p-toggleButton&gt;\r\n\r\n&lt;h3&gt;Customized - ({{checked2}})&lt;/h3&gt;\r\n&lt;p-toggleButton [(ngModel)]=\"checked2\" onLabel=\"I confirm\" offLabel=\"I reject\" onIcon=\"pi pi-check\" offIcon=\"pi pi-times\" [style]=\"&#123;'width':'150px'&#125;\"&gt;&lt;/p-toggleButton&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ToggleButtonDemo &#123;\r\n\r\n    checked1: boolean = false;\r\n\r\n    checked2: boolean = true;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/togglebutton/togglebuttondemo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/togglebutton/togglebuttondemo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ToggleButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonDemoModule", function() { return ToggleButtonDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _togglebuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./togglebuttondemo */ "./src/app/showcase/components/togglebutton/togglebuttondemo.ts");
/* harmony import */ var _togglebuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./togglebuttondemo-routing.module */ "./src/app/showcase/components/togglebutton/togglebuttondemo-routing.module.ts");
/* harmony import */ var _components_togglebutton_togglebutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/togglebutton/togglebutton */ "./src/app/components/togglebutton/togglebutton.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ToggleButtonDemoModule = /** @class */ (function () {
    function ToggleButtonDemoModule() {
    }
    ToggleButtonDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _togglebuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ToggleButtonDemoRoutingModule"],
                _components_togglebutton_togglebutton__WEBPACK_IMPORTED_MODULE_5__["ToggleButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _togglebuttondemo__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonDemo"]
            ]
        })
    ], ToggleButtonDemoModule);
    return ToggleButtonDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/togglebutton/togglebuttondemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/togglebutton/togglebuttondemo.ts ***!
  \**********************************************************************/
/*! exports provided: ToggleButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonDemo", function() { return ToggleButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToggleButtonDemo = /** @class */ (function () {
    function ToggleButtonDemo() {
        this.checked1 = false;
        this.checked2 = true;
    }
    ToggleButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./togglebuttondemo.html */ "./src/app/showcase/components/togglebutton/togglebuttondemo.html")
        })
    ], ToggleButtonDemo);
    return ToggleButtonDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-togglebutton-togglebuttondemo-module.js.map