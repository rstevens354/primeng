(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-spinner-spinnerdemo-module"],{

/***/ "./src/app/components/spinner/spinner.ts":
/*!***********************************************!*\
  !*** ./src/app/components/spinner/spinner.ts ***!
  \***********************************************/
/*! exports provided: SPINNER_VALUE_ACCESSOR, Spinner, SpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_VALUE_ACCESSOR", function() { return SPINNER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SPINNER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Spinner; }),
    multi: true
};
var Spinner = /** @class */ (function () {
    function Spinner(el) {
        this.el = el;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.step = 1;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.keyPattern = /[0-9\+\-]/;
        this.negativeSeparator = '-';
    }
    Object.defineProperty(Spinner.prototype, "decimalSeparator", {
        set: function (value) {
            console.warn("decimalSeparator property is removed as Spinner does not format the value anymore.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner.prototype, "thousandSeparator", {
        set: function (value) {
            console.warn("thousandSeparator property is removed as Spinner does not format the value anymore.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner.prototype, "formatInput", {
        set: function (value) {
            console.warn("formatInput property is removed as Spinner does not format the value anymore.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner.prototype, "type", {
        set: function (value) {
            console.warn("type property is removed as Spinner does not format the value anymore");
        },
        enumerable: true,
        configurable: true
    });
    Spinner.prototype.ngAfterViewInit = function () {
        if (this.value && this.value.toString().indexOf('.') > 0) {
            this.precision = this.value.toString().split(/[.]/)[1].length;
        }
        else if (this.step % 1 !== 0) {
            // If step is not an integer then extract the length of the decimal part
            this.precision = this.step.toString().split(/[,]|[.]/)[1].length;
        }
    };
    Spinner.prototype.repeat = function (event, interval, dir) {
        var _this = this;
        var i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(function () {
            _this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
    };
    Spinner.prototype.spin = function (event, dir) {
        var step = this.step * dir;
        var currentValue;
        if (this.value)
            currentValue = (typeof this.value === 'string') ? this.parseValue(this.value) : this.value;
        else
            currentValue = 0;
        if (this.precision)
            this.value = parseFloat(this.toFixed(currentValue + step, this.precision));
        else
            this.value = currentValue + step;
        if (this.maxlength !== undefined && this.value.toString().length > this.maxlength) {
            this.value = currentValue;
        }
        if (this.min !== undefined && this.value < this.min) {
            this.value = this.min;
        }
        if (this.max !== undefined && this.value > this.max) {
            this.value = this.max;
        }
        this.onModelChange(this.value);
        this.onChange.emit(event);
    };
    Spinner.prototype.toFixed = function (value, precision) {
        var power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    };
    Spinner.prototype.onUpButtonMousedown = function (event) {
        if (!this.disabled) {
            this.inputfieldViewChild.nativeElement.focus();
            this.repeat(event, null, 1);
            this.updateFilledState();
            event.preventDefault();
        }
    };
    Spinner.prototype.onUpButtonMouseup = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onUpButtonMouseleave = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onDownButtonMousedown = function (event) {
        if (!this.disabled) {
            this.inputfieldViewChild.nativeElement.focus();
            this.repeat(event, null, -1);
            this.updateFilledState();
            event.preventDefault();
        }
    };
    Spinner.prototype.onDownButtonMouseup = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onDownButtonMouseleave = function (event) {
        if (!this.disabled) {
            this.clearTimer();
        }
    };
    Spinner.prototype.onInputKeydown = function (event) {
        if (event.which == 38) {
            this.spin(event, 1);
            event.preventDefault();
        }
        else if (event.which == 40) {
            this.spin(event, -1);
            event.preventDefault();
        }
    };
    Spinner.prototype.onInputChange = function (event) {
        this.onChange.emit(event);
    };
    Spinner.prototype.onInput = function (event) {
        this.value = this.parseValue(event.target.value);
        this.onModelChange(this.value);
        this.updateFilledState();
    };
    Spinner.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Spinner.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    Spinner.prototype.parseValue = function (val) {
        var value;
        if (val.trim() === '') {
            value = null;
        }
        else {
            if (this.precision)
                value = parseFloat(val.replace(',', '.'));
            else
                value = parseInt(val, 10);
            if (!isNaN(value)) {
                if (this.max !== null && value > this.max) {
                    value = this.max;
                }
                if (this.min !== null && value < this.min) {
                    value = this.min;
                }
            }
            else {
                value = null;
            }
        }
        return value;
    };
    Spinner.prototype.clearTimer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    Spinner.prototype.writeValue = function (value) {
        this.value = value;
        this.updateFilledState();
    };
    Spinner.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Spinner.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Spinner.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Spinner.prototype.updateFilledState = function () {
        this.filled = (this.value !== undefined && this.value != null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Spinner.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Spinner.prototype, "onFocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Spinner.prototype, "onBlur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Spinner.prototype, "step", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Spinner.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Spinner.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Spinner.prototype, "maxlength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Spinner.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Spinner.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Spinner.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Spinner.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Spinner.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Spinner.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Spinner.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Spinner.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Spinner.prototype, "inputStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Spinner.prototype, "inputStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputfield'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Spinner.prototype, "inputfieldViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Spinner.prototype, "decimalSeparator", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Spinner.prototype, "thousandSeparator", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Spinner.prototype, "formatInput", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Spinner.prototype, "type", null);
    Spinner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-spinner',
            template: "\n        <span class=\"ui-spinner ui-widget ui-corner-all\">\n            <input #inputfield type=\"number\" [attr.id]=\"inputId\" [value]=\"value === 0 ? '0' : value||null\" [attr.name]=\"name\"\n            [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [attr.placeholder]=\"placeholder\" [disabled]=\"disabled\" [readonly]=\"readonly\" [attr.required]=\"required\"\n            (keydown)=\"onInputKeydown($event)\" (blur)=\"onInputBlur($event)\" (input)=\"onInput($event)\" (change)=\"onInputChange($event)\" (focus)=\"onInputFocus($event)\"\n            [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [ngClass]=\"'ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all'\">\n            <button type=\"button\" [ngClass]=\"{'ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}\" [disabled]=\"disabled||readonly\" [attr.tabindex]=\"tabindex\" [attr.readonly]=\"readonly\"\n                (mouseleave)=\"onUpButtonMouseleave($event)\" (mousedown)=\"onUpButtonMousedown($event)\" (mouseup)=\"onUpButtonMouseup($event)\">\n                <span class=\"ui-spinner-button-icon pi pi-caret-up ui-clickable\"></span>\n            </button>\n            <button type=\"button\" [ngClass]=\"{'ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}\" [disabled]=\"disabled||readonly\" [attr.tabindex]=\"tabindex\" [attr.readonly]=\"readonly\"\n                (mouseleave)=\"onDownButtonMouseleave($event)\" (mousedown)=\"onDownButtonMousedown($event)\" (mouseup)=\"onDownButtonMouseup($event)\">\n                <span class=\"ui-spinner-button-icon pi pi-caret-down ui-clickable\"></span>\n            </button>\n        </span>\n    ",
            host: {
                '[class.ui-inputwrapper-filled]': 'filled',
                '[class.ui-inputwrapper-focus]': 'focus'
            },
            providers: [SPINNER_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Spinner);
    return Spinner;
}());

var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    SpinnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_2__["InputTextModule"]],
            exports: [Spinner],
            declarations: [Spinner]
        })
    ], SpinnerModule);
    return SpinnerModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/spinner/spinnerdemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/spinner/spinnerdemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SpinnerDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemoRoutingModule", function() { return SpinnerDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _spinnerdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinnerdemo */ "./src/app/showcase/components/spinner/spinnerdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpinnerDemoRoutingModule = /** @class */ (function () {
    function SpinnerDemoRoutingModule() {
    }
    SpinnerDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _spinnerdemo__WEBPACK_IMPORTED_MODULE_2__["SpinnerDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SpinnerDemoRoutingModule);
    return SpinnerDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/spinner/spinnerdemo.html":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/spinner/spinnerdemo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Spinner</span>\r\n        <span>Spinner is an input component to provide a numerical input.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-spinner size=\"30\" [(ngModel)]=\"val1\"></p-spinner>\r\n\r\n    <h3>Min/Max</h3>\r\n    <p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"></p-spinner>\r\n\r\n    <h3>Step</h3>\r\n    <p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"></p-spinner>\r\n    \r\n    <h3>Disabled</h3>\r\n    <p-spinner size=\"30\" [(ngModel)]=\"val4\" [disabled]=\"true\"></p-spinner>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SpinnerModule&#125; from 'primeng/spinner';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way value binding is defined using standard ngModel directive.</p>     \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\"&gt;&lt;/p-spinner&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Spinner can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-spinner formControlName=\"age\"&gt;&lt;/p-spinner&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Min-Max</h3>\r\n            <p>Boundaries are specified with min and max attributes.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Step</h3>\r\n            <p>Step factor is 1 by default and can be customized with step option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\" [step]=\"0.25\"&gt;&lt;/p-spinner&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>step</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Step factor to increment/decrement the value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>min</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Mininum boundary value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>max</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum boundary value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>placeholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Hint text for the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>undefined</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>undefined</td>\r\n                            <td>When present, it specifies that the element should be read-only.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>maxlength</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum number of character allows in the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>size</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Size of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>text</td>\r\n                            <td>Type of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>required</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>name</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the input field.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>event: Blur event</td>\r\n                            <td>Callback to invoke when input loses focus.</td>\r\n                        </tr>       \r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when input gets focus.</td>\r\n                        </tr>                 \r\n                        <tr>\r\n                            <td>onChange</td>\r\n                            <td>event: Change event</td>\r\n                            <td>Callback to invoke on value change.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-spinner</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-spinner-up</td>\r\n                            <td>Up element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-spinner-down</td>\r\n                            <td>Down button</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/spinner\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val1\"&gt;&lt;/p-spinner&gt;\r\n\r\n&lt;h3&gt;Min/Max&lt;/h3&gt;\r\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\r\n\r\n&lt;h3&gt;Step&lt;/h3&gt;\r\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"&gt;&lt;/p-spinner&gt;\r\n\r\n&lt;h3&gt;Disabled&lt;/h3&gt;\r\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val4\" [disabled]=\"true\"&gt;&lt;/p-spinner&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SpinnerDemo &#123;\r\n\r\n    val1: number;\r\n\r\n    val2: number;\r\n\r\n    val3: number;\r\n\r\n    val4: number = 100;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/spinner/spinnerdemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/spinner/spinnerdemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: SpinnerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemoModule", function() { return SpinnerDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spinnerdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinnerdemo */ "./src/app/showcase/components/spinner/spinnerdemo.ts");
/* harmony import */ var _spinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinnerdemo-routing.module */ "./src/app/showcase/components/spinner/spinnerdemo-routing.module.ts");
/* harmony import */ var _components_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/spinner/spinner */ "./src/app/components/spinner/spinner.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



;





var SpinnerDemoModule = /** @class */ (function () {
    function SpinnerDemoModule() {
    }
    SpinnerDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _spinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpinnerDemoRoutingModule"],
                _components_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__["SpinnerModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _spinnerdemo__WEBPACK_IMPORTED_MODULE_3__["SpinnerDemo"]
            ]
        })
    ], SpinnerDemoModule);
    return SpinnerDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/spinner/spinnerdemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/spinner/spinnerdemo.ts ***!
  \************************************************************/
/*! exports provided: SpinnerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemo", function() { return SpinnerDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnerDemo = /** @class */ (function () {
    function SpinnerDemo() {
        this.val4 = 100;
    }
    SpinnerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./spinnerdemo.html */ "./src/app/showcase/components/spinner/spinnerdemo.html")
        })
    ], SpinnerDemo);
    return SpinnerDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-spinner-spinnerdemo-module.js.map