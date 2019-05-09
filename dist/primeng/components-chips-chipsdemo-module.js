(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chips-chipsdemo-module"],{

/***/ "./src/app/components/chips/chips.ts":
/*!*******************************************!*\
  !*** ./src/app/components/chips/chips.ts ***!
  \*******************************************/
/*! exports provided: CHIPS_VALUE_ACCESSOR, Chips, ChipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHIPS_VALUE_ACCESSOR", function() { return CHIPS_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chips", function() { return Chips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsModule", function() { return ChipsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CHIPS_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Chips; }),
    multi: true
};
var Chips = /** @class */ (function () {
    function Chips(el) {
        this.el = el;
        this.allowDuplicate = true;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChipClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Chips.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    Chips.prototype.onClick = function (event) {
        this.inputViewChild.nativeElement.focus();
    };
    Chips.prototype.onItemClick = function (event, item) {
        this.onChipClick.emit({
            originalEvent: event,
            value: item
        });
    };
    Chips.prototype.writeValue = function (value) {
        this.value = value;
        this.updateMaxedOut();
    };
    Chips.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Chips.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Chips.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Chips.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    Chips.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    Chips.prototype.onInputBlur = function (event) {
        this.focus = false;
        if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
            this.addItem(event, this.inputViewChild.nativeElement.value);
            this.inputViewChild.nativeElement.value = '';
        }
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Chips.prototype.removeItem = function (event, index) {
        if (this.disabled) {
            return;
        }
        var removedItem = this.value[index];
        this.value = this.value.filter(function (val, i) { return i != index; });
        this.onModelChange(this.value);
        this.onRemove.emit({
            originalEvent: event,
            value: removedItem
        });
        this.updateMaxedOut();
    };
    Chips.prototype.addItem = function (event, item) {
        this.value = this.value || [];
        if (item && item.trim().length) {
            if (this.allowDuplicate || this.value.indexOf(item) === -1) {
                this.value = this.value.concat([item]);
                this.onModelChange(this.value);
                this.onAdd.emit({
                    originalEvent: event,
                    value: item
                });
            }
        }
        this.updateMaxedOut();
    };
    Chips.prototype.onKeydown = function (event) {
        switch (event.which) {
            //backspace
            case 8:
                if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
                    this.value = this.value.slice();
                    var removedItem = this.value.pop();
                    this.onModelChange(this.value);
                    this.onRemove.emit({
                        originalEvent: event,
                        value: removedItem
                    });
                }
                break;
            //enter
            case 13:
                this.addItem(event, this.inputViewChild.nativeElement.value);
                this.inputViewChild.nativeElement.value = '';
                event.preventDefault();
                break;
            case 9:
                if (this.addOnTab && this.inputViewChild.nativeElement.value !== '') {
                    this.addItem(event, this.inputViewChild.nativeElement.value);
                    this.inputViewChild.nativeElement.value = '';
                    event.preventDefault();
                }
                break;
            default:
                if (this.max && this.value && this.max === this.value.length) {
                    event.preventDefault();
                }
                break;
        }
    };
    Chips.prototype.updateMaxedOut = function () {
        if (this.inputViewChild && this.inputViewChild.nativeElement) {
            if (this.max && this.value && this.max === this.value.length)
                this.inputViewChild.nativeElement.disabled = true;
            else
                this.inputViewChild.nativeElement.disabled = this.disabled || false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Chips.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Chips.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Chips.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Chips.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Chips.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Chips.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Chips.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "allowDuplicate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Chips.prototype, "inputStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Chips.prototype, "inputStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "addOnTab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "addOnBlur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Chips.prototype, "onAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Chips.prototype, "onRemove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Chips.prototype, "onFocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Chips.prototype, "onBlur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Chips.prototype, "onChipClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputtext'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Chips.prototype, "inputViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], Chips.prototype, "templates", void 0);
    Chips = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-chips',
            template: "\n        <div [ngClass]=\"'ui-chips ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event)\">\n            <ul [ngClass]=\"{'ui-inputtext ui-state-default ui-corner-all':true,'ui-state-focus':focus,'ui-state-disabled':disabled}\">\n                <li #token *ngFor=\"let item of value; let i = index;\" class=\"ui-chips-token ui-state-highlight ui-corner-all\" (click)=\"onItemClick($event, item)\">\n                    <span *ngIf=\"!disabled\" class=\"ui-chips-token-icon pi pi-fw pi-times\" (click)=\"removeItem($event,i)\"></span>\n                    <span *ngIf=\"!itemTemplate\" class=\"ui-chips-token-label\">{{field ? resolveFieldData(item,field) : item}}</span>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n                </li>\n                <li class=\"ui-chips-input-token\">\n                    <input #inputtext type=\"text\" [attr.id]=\"inputId\" [attr.placeholder]=\"(value && value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event)\" \n                        (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" [disabled]=\"disabled\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\">\n                </li>\n            </ul>\n        </div>\n    ",
            providers: [CHIPS_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Chips);
    return Chips;
}());

var ChipsModule = /** @class */ (function () {
    function ChipsModule() {
    }
    ChipsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], _common_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            exports: [Chips, _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], _common_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [Chips]
        })
    ], ChipsModule);
    return ChipsModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/chips/chipsdemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/chips/chipsdemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChipsDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemoRoutingModule", function() { return ChipsDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chipsdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chipsdemo */ "./src/app/showcase/components/chips/chipsdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChipsDemoRoutingModule = /** @class */ (function () {
    function ChipsDemoRoutingModule() {
    }
    ChipsDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _chipsdemo__WEBPACK_IMPORTED_MODULE_2__["ChipsDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ChipsDemoRoutingModule);
    return ChipsDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/chips/chipsdemo.html":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/chips/chipsdemo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Chips</span>\r\n        <span>Chips is used to enter multiple values on an inputfield.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-chips [(ngModel)]=\"values1\"></p-chips>\r\n    \r\n    <h3>Template</h3>\r\n    <p-chips [(ngModel)]=\"values2\">\r\n        <ng-template let-item pTemplate=\"item\">\r\n            {{item}} - (active) <i class=\"fa fa-user\" style=\"margin-right:2em\"></i>\r\n        </ng-template>\r\n    </p-chips>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ChipsModule&#125; from 'primeng/chips';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Chips requires an array as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chips [(ngModel)]=\"values\"&gt;&lt;/p-chips&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    values: string[];\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Chips can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chips formControlName=\"cities\"&gt;&lt;/p-chips&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Custom Content</h3>\r\n            <p>A chip is customized using a ng-template element where the value is passed as the implicit variable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chips [(ngModel)]=\"values\"&gt;\r\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\r\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"fa fa-user\"&gt;&lt;/i&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-chips&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>field</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the property to display on a chip.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>max</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum number of entries allowed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>placeholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Advisory information to display on input.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>allowDuplicate</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to allow duplicate values or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>addOnTab</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to add an item on tab key press.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>addOnBlur</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to add an item when the input loses focus.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onAdd</td>\r\n                            <td>originalEvent: Browser event <br >\r\n                                value: Added item value\r\n                            </td>\r\n                            <td>Callback to invoke when a value is added.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRemove</td>\r\n                            <td>originalEvent: Browser event <br >\r\n                                value: Added item value\r\n                            </td>\r\n                            <td>Callback to invoke when a value is removed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onChipClick</td>\r\n                            <td>originalEvent: Browser event <br >\r\n                                value: Clicked item value\r\n                            </td>\r\n                            <td>Callback to invoke when a chip is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>originalEvent: Browser event</td>\r\n                            <td>Callback to invoke when a input is focused.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>originalEvent: Browser event</td>\r\n                            <td>Callback to invoke when a input loses focus.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-chips</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-chips-token</td>\r\n                            <td>Chip element container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-chips-token-icon</td>\r\n                            <td>Icon of a chip.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-chips-token-label</td>\r\n                            <td>Label of a chip.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-chips-input-token</td>\r\n                            <td>Container of input element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chips\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-chips [(ngModel)]=\"values1\" &gt;&lt;/p-chips&gt;\r\n\r\n&lt;h3&gt;ng-template&lt;/h3&gt;\r\n&lt;p-chips [(ngModel)]=\"values2\"&gt;\r\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\r\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"fa fa-user\" style=\"margin-right:2em\"&gt;&lt;/i&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-chips&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ChipsDemo &#123;\r\n\r\n    values1: string[];\r\n    \r\n    values2: string[];\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/chips/chipsdemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/chips/chipsdemo.module.ts ***!
  \***************************************************************/
/*! exports provided: ChipsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemoModule", function() { return ChipsDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chipsdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chipsdemo */ "./src/app/showcase/components/chips/chipsdemo.ts");
/* harmony import */ var _chipsdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chipsdemo-routing.module */ "./src/app/showcase/components/chips/chipsdemo-routing.module.ts");
/* harmony import */ var _components_chips_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/chips/chips */ "./src/app/components/chips/chips.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChipsDemoModule = /** @class */ (function () {
    function ChipsDemoModule() {
    }
    ChipsDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _chipsdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChipsDemoRoutingModule"],
                _components_chips_chips__WEBPACK_IMPORTED_MODULE_5__["ChipsModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _chipsdemo__WEBPACK_IMPORTED_MODULE_3__["ChipsDemo"]
            ]
        })
    ], ChipsDemoModule);
    return ChipsDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/chips/chipsdemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/chips/chipsdemo.ts ***!
  \********************************************************/
/*! exports provided: ChipsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemo", function() { return ChipsDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChipsDemo = /** @class */ (function () {
    function ChipsDemo() {
    }
    ChipsDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./chipsdemo.html */ "./src/app/showcase/components/chips/chipsdemo.html")
        })
    ], ChipsDemo);
    return ChipsDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-chips-chipsdemo-module.js.map