(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputswitch-inputswitchdemo-module"],{

/***/ "./src/app/components/inputswitch/inputswitch.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/inputswitch/inputswitch.ts ***!
  \*******************************************************/
/*! exports provided: INPUTSWITCH_VALUE_ACCESSOR, InputSwitch, InputSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUTSWITCH_VALUE_ACCESSOR", function() { return INPUTSWITCH_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitch", function() { return InputSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchModule", function() { return InputSwitchModule; });
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



var INPUTSWITCH_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputSwitch; }),
    multi: true
};
var InputSwitch = /** @class */ (function () {
    function InputSwitch(cd) {
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checked = false;
        this.focused = false;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    InputSwitch.prototype.onClick = function (event, cb) {
        if (!this.disabled && !this.readonly) {
            this.toggle(event);
            cb.focus();
        }
    };
    InputSwitch.prototype.onInputChange = function (event) {
        if (!this.readonly) {
            var inputChecked = event.target.checked;
            this.updateModel(event, inputChecked);
        }
    };
    InputSwitch.prototype.toggle = function (event) {
        this.updateModel(event, !this.checked);
    };
    InputSwitch.prototype.updateModel = function (event, value) {
        this.checked = value;
        this.onModelChange(this.checked);
        this.onChange.emit({
            originalEvent: event,
            checked: this.checked
        });
    };
    InputSwitch.prototype.onFocus = function (event) {
        this.focused = true;
    };
    InputSwitch.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
    };
    InputSwitch.prototype.writeValue = function (checked) {
        this.checked = checked;
        this.cd.markForCheck();
    };
    InputSwitch.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    InputSwitch.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    InputSwitch.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputSwitch.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputSwitch.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputSwitch.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputSwitch.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputSwitch.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InputSwitch.prototype, "onChange", void 0);
    InputSwitch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-inputSwitch',
            template: "\n        <div [ngClass]=\"{'ui-inputswitch ui-widget': true, 'ui-inputswitch-checked': checked, 'ui-state-disabled': disabled, 'ui-inputswitch-readonly': readonly, 'ui-inputswitch-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" />\n            </div>\n            <span class=\"ui-inputswitch-slider\"></span>\n        </div>\n    ",
            providers: [INPUTSWITCH_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], InputSwitch);
    return InputSwitch;
}());

var InputSwitchModule = /** @class */ (function () {
    function InputSwitchModule() {
    }
    InputSwitchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [InputSwitch],
            declarations: [InputSwitch]
        })
    ], InputSwitchModule);
    return InputSwitchModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InputSwitchDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchDemoRoutingModule", function() { return InputSwitchDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inputswitchdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputswitchdemo */ "./src/app/showcase/components/inputswitch/inputswitchdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputSwitchDemoRoutingModule = /** @class */ (function () {
    function InputSwitchDemoRoutingModule() {
    }
    InputSwitchDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _inputswitchdemo__WEBPACK_IMPORTED_MODULE_2__["InputSwitchDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], InputSwitchDemoRoutingModule);
    return InputSwitchDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputswitch/inputswitchdemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/inputswitch/inputswitchdemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">InputSwitch</span>\r\n        <span>InputSwitch is used to select a boolean value.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic - {{checked1}}</h3>\r\n    <p-inputSwitch [(ngModel)]=\"checked1\"></p-inputSwitch>\r\n\r\n    <h3>Labels - {{checked2}}</h3>\r\n    <p-inputSwitch [(ngModel)]=\"checked2\"></p-inputSwitch>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;InputSwitchModule&#125; from 'primeng/inputswitch';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way binding to a boolean property is defined using the standard ngModel directive.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputSwitch [(ngModel)]=\"checked\"&gt;&lt;/p-inputSwitch&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    checked: boolean;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>As model is two-way binding enabled, setting the bound value as true displays the state as checked by default.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n   checked: boolean = true;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>InputSwitch can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputSwitch formControlName=\"enabled\"&gt;&lt;/p-inputSwitch&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>tabindex</td>\r\n                          <td>number</td>\r\n                          <td>null</td>\r\n                          <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the input element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>name</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the input element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component cannot be edited.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>onChange</td>\r\n                        <td>event.originalEvent: browser event<br>\r\n                            event.checked: checked state as a boolean</td>\r\n                        <td>Callback to invoke on state change.</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inputSwitch (onChange)=\"handleChange($event)\" [(ngModel)]=\"val\"&gt;\r\n</code>\r\n</pre>\r\n <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    handleChange(e) &#123;\r\n        let isChecked = e.checked;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-inputswitch</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-inputswitch-checked</td>\r\n                            <td>Container element in active state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-inputswitch-slider</td>\r\n                            <td>Slider element behind the handle.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputswitch\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic - {{checked1}}&lt;/h3&gt;\r\n&lt;p-inputSwitch [(ngModel)]=\"checked1\"&gt;&lt;/p-inputSwitch&gt;\r\n\r\n&lt;h3&gt;Labels - &lt;span&gt; {{checked2}}&lt;/h3&gt;\r\n&lt;p-inputSwitch [(ngModel)]=\"checked2\"&gt;&lt;/p-inputSwitch&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class InputSwitchDemo &#123;\r\n\r\n    checked1: boolean = false;\r\n\r\n    checked2: boolean = true;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/inputswitch/inputswitchdemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/inputswitch/inputswitchdemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: InputSwitchDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchDemoModule", function() { return InputSwitchDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inputswitchdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputswitchdemo */ "./src/app/showcase/components/inputswitch/inputswitchdemo.ts");
/* harmony import */ var _inputswitchdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputswitchdemo-routing.module */ "./src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts");
/* harmony import */ var _components_inputswitch_inputswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/inputswitch/inputswitch */ "./src/app/components/inputswitch/inputswitch.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var InputSwitchDemoModule = /** @class */ (function () {
    function InputSwitchDemoModule() {
    }
    InputSwitchDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _inputswitchdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["InputSwitchDemoRoutingModule"],
                _components_inputswitch_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _inputswitchdemo__WEBPACK_IMPORTED_MODULE_3__["InputSwitchDemo"]
            ]
        })
    ], InputSwitchDemoModule);
    return InputSwitchDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputswitch/inputswitchdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/inputswitch/inputswitchdemo.ts ***!
  \********************************************************************/
/*! exports provided: InputSwitchDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchDemo", function() { return InputSwitchDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputSwitchDemo = /** @class */ (function () {
    function InputSwitchDemo() {
        this.checked1 = false;
        this.checked2 = true;
    }
    InputSwitchDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./inputswitchdemo.html */ "./src/app/showcase/components/inputswitch/inputswitchdemo.html")
        })
    ], InputSwitchDemo);
    return InputSwitchDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-inputswitch-inputswitchdemo-module.js.map