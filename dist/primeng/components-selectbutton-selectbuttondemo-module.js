(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-selectbutton-selectbuttondemo-module"],{

/***/ "./src/app/components/selectbutton/selectbutton.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/selectbutton/selectbutton.ts ***!
  \*********************************************************/
/*! exports provided: SELECTBUTTON_VALUE_ACCESSOR, SelectButton, SelectButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTBUTTON_VALUE_ACCESSOR", function() { return SELECTBUTTON_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButton", function() { return SelectButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButtonModule", function() { return SelectButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utils_objectutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/objectutils */ "./src/app/components/utils/objectutils.ts");
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




var SELECTBUTTON_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SelectButton; }),
    multi: true
};
var SelectButton = /** @class */ (function () {
    function SelectButton(cd) {
        this.cd = cd;
        this.tabindex = 0;
        this.onOptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(SelectButton.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            var opts = this.optionLabel ? _utils_objectutils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
            this._options = opts;
        },
        enumerable: true,
        configurable: true
    });
    SelectButton.prototype.writeValue = function (value) {
        this.value = value;
        this.cd.markForCheck();
    };
    SelectButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    SelectButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    SelectButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    SelectButton.prototype.onItemClick = function (event, option, index) {
        if (this.disabled || option.disabled) {
            return;
        }
        if (this.multiple) {
            var itemIndex_1 = this.findItemIndex(option);
            if (itemIndex_1 != -1)
                this.value = this.value.filter(function (val, i) { return i != itemIndex_1; });
            else
                this.value = (this.value || []).concat([option.value]);
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    SelectButton.prototype.onFocus = function (event) {
        this.focusedItem = event.target;
    };
    SelectButton.prototype.onBlur = function (event) {
        this.focusedItem = null;
        this.onModelTouched();
    };
    SelectButton.prototype.isSelected = function (option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return _utils_objectutils__WEBPACK_IMPORTED_MODULE_2__["ObjectUtils"].equals(option.value, this.value, this.dataKey);
    };
    SelectButton.prototype.findItemIndex = function (option) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SelectButton.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectButton.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectButton.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectButton.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "dataKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "optionLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectButton.prototype, "onOptionClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectButton.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", Object)
    ], SelectButton.prototype, "itemTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectButton.prototype, "options", null);
    SelectButton = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-selectButton',
            template: "\n        <div [ngClass]=\"'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + (options ? options.length : 0)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div *ngFor=\"let option of options; let i = index\" #btn class=\"ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}\"\n                [ngClass]=\"{'ui-state-active':isSelected(option), 'ui-state-disabled': disabled || option.disabled, 'ui-state-focus': btn == focusedItem, \n                'ui-button-text-icon-left': (option.icon != null), 'ui-button-icon-only': (option.icon && !option.label)}\" (click)=\"onItemClick($event,option,i)\" (keydown.enter)=\"onItemClick($event,option,i)\"\n                [attr.title]=\"option.title\" [attr.aria-label]=\"option.label\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [attr.tabindex]=\"tabindex\">\n                <ng-container *ngIf=\"!itemTemplate else customcontent\">\n                    <span [ngClass]=\"['ui-clickable', 'ui-button-icon-left']\" [class]=\"option.icon\" *ngIf=\"option.icon\"></span>\n                    <span class=\"ui-button-text ui-clickable\">{{option.label||'ui-btn'}}</span>\n                </ng-container>\n                <ng-template #customcontent>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: i}\"></ng-container>\n                </ng-template>\n            </div>\n        </div>\n    ",
            providers: [SELECTBUTTON_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SelectButton);
    return SelectButton;
}());

var SelectButtonModule = /** @class */ (function () {
    function SelectButtonModule() {
    }
    SelectButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [SelectButton],
            declarations: [SelectButton]
        })
    ], SelectButtonModule);
    return SelectButtonModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SelectButtonDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButtonDemoRoutingModule", function() { return SelectButtonDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selectbuttondemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectbuttondemo */ "./src/app/showcase/components/selectbutton/selectbuttondemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectButtonDemoRoutingModule = /** @class */ (function () {
    function SelectButtonDemoRoutingModule() {
    }
    SelectButtonDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _selectbuttondemo__WEBPACK_IMPORTED_MODULE_2__["SelectButtonDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SelectButtonDemoRoutingModule);
    return SelectButtonDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/selectbutton/selectbuttondemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">SelectButton</span>\r\n        <span>SelectButton is used to choose single or multiple items from a list using buttons.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Single</h3>\r\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\r\n\r\n    <p>Selected Type: <span style=\"font-weight: bold\">{{selectedType}}</span></p>\r\n\r\n    <h3>Multiple</h3>\r\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"></p-selectButton>\r\n    <p>Selected Types: <span style=\"font-weight: bold\" *ngFor=\"let type of selectedTypes\">{{type}} </span></p>\r\n\r\n    <h3>Icon Only</h3>\r\n    <p-selectButton [options]=\"modes\" [(ngModel)]=\"selectedModes\" multiple=\"multiple\"></p-selectButton>\r\n    <p>Selected Modes: <span style=\"font-weight: bold\" *ngFor=\"let mode of selectedModes\">{{mode}} </span></p>\r\n\r\n    <h3>Custom Template</h3>\r\n    <p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\" optionLabel=\"name\">\r\n        <ng-template let-item>\r\n            <div style=\"padding: .5em 1em\">\r\n                <img style=\"vertical-align: middle; margin-right: .5em\" src=\"assets/showcase/images/demo/flag/{{item.value.flag}}\" height=\"20px\"/>\r\n                <span>{{item.name}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </p-selectButton>\r\n    <p>Selected Country: <span style=\"font-weight: bold\">{{selectedCountry?.name}}</span></p>\r\n\r\n    <hr>\r\n    <button type=\"button\" (click)=\"clear()\" pButton icon=\"pi pi-times\" label=\"Clear\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SelectButtonModule&#125; from 'primeng/selectbutton';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>SelectButton requires a value to bind and a collection of options. There are two alternatives of how to define the options property; one way is providing a collection of SelectItem\r\n            instances whereas other way is providing an array of arbitrary objects along with the optionLabel property to specify the field name of the option. SelectItem API is designed to have more control on how \r\n            the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice. Example below demonstrates both cases.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-selectButton [options]=\"cities1\" [(ngModel)]=\"selectedCity1\"&gt;&lt;/p-selectButton&gt;\r\n\r\n&lt;p-selectButton [options]=\"cities2\" [(ngModel)]=\"selectedCity2\" optionLabel=\"name\"&gt;&lt;/p-selectButton&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SelectItem&#125; from 'primeng/api';\r\n\r\nexport class MyModel &#123;\r\n\r\n    cities1: SelectItem[];\r\n\r\n    cities2: City[];\r\n\r\n    selectedCity1: City;\r\n\r\n    selectedCity2: City;\r\n\r\n    constructor() &#123;\r\n      //SelectItem API with label-value pairs\r\n      this.cities1 = [\r\n          &#123;label:'Select City', value:null&#125;,\r\n          &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\r\n          &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\r\n          &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\r\n          &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;\r\n          &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\r\n      ];\r\n      \r\n      //An array of cities\r\n      this.cities2 = [\r\n          &#123;name: 'New York', code: 'NY'&#125;,\r\n          &#123;name: 'Rome', code: 'RM'&#125;,\r\n          &#123;name: 'London', code: 'LDN'&#125;,\r\n          &#123;name: 'Istanbul', code: 'IST'&#125;,\r\n          &#123;name: 'Paris', code: 'PRS'&#125;\r\n      ];\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Multiple</h3>\r\n            <p>SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. \r\n                In multiple case, model property should be an array instance that is not null or undefined.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-selectButton [options]=\"cities\" [(ngModel)]=\"selectedCities\" multiple=\"multiple\" &gt;&lt;/p-selectButton&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SelectItem&#125; from 'primeng/api';\r\n\r\nexport class MyModel &#123;\r\n\r\n    cities: SelectItem[];\r\n\r\n    selectedCities: string[] = [];\r\n\r\n    constructor() &#123;\r\n        this.cities = [];\r\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\r\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\r\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\r\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\r\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>SelectButton can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-selectButton [options]=\"cities\" formControlName=\"selectedCity\"&gt;&lt;/p-selectButton&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Icons</h3>\r\n            <p>Button options can display icons using the icon property of the SelectItem API.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"&gt;&lt;/p-selectButton&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SelectButtonDemo &#123;\r\n\r\n    types: SelectItem[];\r\n\r\n    selectedType: string;\r\n\r\n    constructor() &#123;\r\n        this.types = [];\r\n        this.types.push(&#123;title: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'&#125;);\r\n        this.types.push(&#123;title: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'&#125;);\r\n        this.types.push(&#123;title: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Disabled Options</h3>\r\n            <p>Particular options can be prevented from selection using the disabled property of SelectItem API.</p>\r\n\r\n            <h3>Templating</h3>\r\n            <p>Items support templating to display custom content inside the buttons using an ng-template that receives the option as the implicit variable. Note that\r\n                if an arbitrary object is used as the option instead of the SelectItem API, internally they are converted to SelectItems which means in the template\r\n                the arbitrary object can be access using the value property.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\" optionLabel=\"name\"&gt;\r\n    &lt;ng-template let-item&gt;\r\n        &lt;img src=\"assets/showcase/images/demo/flag/&#123;&#123;item.value.flag&#125;&#125;\" /&gt;\r\n        &lt;span&gt;&#123;&#123;item.name&#125;&#125;&lt;/span&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-selectButton&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SelectButtonDemo &#123;\r\n        \r\n    countries: any[];\r\n\r\n    selectedCountry: any;\r\n\r\n    constructor() &#123;\r\n        this.countries = [\r\n            &#123;name: 'USA', flag: 'usa.png'&#125;,\r\n            &#123;name: 'Germany', flag: 'germany.png'&#125;,\r\n            &#123;name: 'Japan', flag: 'japan.png'&#125;\r\n        ];\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>options</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of selectitems to display as the available options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>optionLabel</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiple</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified, allows selecting multiple values.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dataKey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>A property to uniquely identify a value in options.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onChange</td>\r\n                            <td>event.originalEvent: browser event<br />\r\n                                event.value: single value or an array of values that are selected\r\n                            </td>\r\n                            <td>Callback to invoke when value changes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOptionClick</td>\r\n                            <td>event.originalEvent: browser event<br />\r\n                                event.option: SelectItem instance of the clicked button<br />\r\n                                event.index: Index of the clicked button\r\n                            </td>\r\n                            <td>Callback to invoke when a button is clicked.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\r\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"&gt;&lt;/p-selectButton&gt;\r\n\r\n&lt;p&gt;Selected Type: &lt;span style=\"font-weight: bold\"&gt;&#123;&#123;selectedType&#125;&#125;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;h3&gt;Multiple&lt;/h3&gt;\r\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\r\n&lt;p&gt;Selected Types: &lt;span style=\"font-weight: bold\" *ngFor=\"let type of selectedTypes\"&gt;&#123;&#123;type&#125;&#125; &lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;h3&gt;Icon Only&lt;/h3&gt;\r\n&lt;p-selectButton [options]=\"modes\" [(ngModel)]=\"selectedModes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\r\n&lt;p&gt;Selected Modes: &lt;span style=\"font-weight: bold\" *ngFor=\"let mode of selectedModes\"&gt;&#123;&#123;mode&#125;&#125; &lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;h3&gt;Custom Template&lt;/h3&gt;\r\n&lt;p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\" optionLabel=\"name\"&gt;\r\n    &lt;ng-template let-item&gt;\r\n        &lt;div style=\"padding: .5em 1em\"&gt;\r\n            &lt;img style=\"vertical-align: middle; margin-right: .5em\" src=\"assets/showcase/images/demo/flag/&#123;&#123;item.value.flag&#125;&#125;\" height=\"20px\"/&gt;\r\n            &lt;span&gt;&#123;&#123;item.name&#125;&#125;&lt;/span&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-selectButton&gt;\r\n&lt;p&gt;Selected Country: &lt;span style=\"font-weight: bold\"&gt;&#123;&#123;selectedCountry?.name&#125;&#125;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;hr&gt;\r\n&lt;button type=\"button\" (click)=\"clear()\" pButton icon=\"pi pi-times\" label=\"Clear\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SelectButtonDemo &#123;\r\n\r\n    types: SelectItem[];\r\n\r\n    selectedType: string;\r\n\r\n    selectedTypes: string[] = ['PayPal','MasterCard'];\r\n\r\n    selectedModes: string[];\r\n\r\n    modes: SelectItem[];\r\n\r\n    countries: any[];\r\n\r\n    selectedCountry: any;\r\n\r\n    constructor() &#123;\r\n        this.types = [\r\n            &#123;label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'&#125;,\r\n            &#123;label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'&#125;,\r\n            &#123;label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'&#125;\r\n        ];\r\n\r\n        this.modes = [\r\n            &#123;value: 'Bold', title: 'Bold', icon: 'fa fa-fw fa-bold'&#125;,\r\n            &#123;value: 'Italic', title: 'Italic', icon: 'fa fa-fw fa-italic'&#125;,\r\n            &#123;value: 'Underline', title: 'Underline', icon: 'fa fa-fw fa-underline'&#125;\r\n        ];\r\n\r\n        this.countries = [\r\n            &#123;name: 'USA', flag: 'usa.png'&#125;,\r\n            &#123;name: 'Germany', flag: 'germany.png'&#125;,\r\n            &#123;name: 'Japan', flag: 'japan.png'&#125;\r\n        ];\r\n    &#125;\r\n\r\n    clear() &#123;\r\n        this.selectedType = null;\r\n        this.selectedTypes = [];\r\n        this.selectedModes = [];\r\n        this.selectedCountry = null;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/selectbutton/selectbuttondemo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButtonDemoModule", function() { return SelectButtonDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _selectbuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectbuttondemo */ "./src/app/showcase/components/selectbutton/selectbuttondemo.ts");
/* harmony import */ var _selectbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectbuttondemo-routing.module */ "./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts");
/* harmony import */ var _components_selectbutton_selectbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/selectbutton/selectbutton */ "./src/app/components/selectbutton/selectbutton.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SelectButtonDemoModule = /** @class */ (function () {
    function SelectButtonDemoModule() {
    }
    SelectButtonDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _selectbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectButtonDemoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_selectbutton_selectbutton__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _selectbuttondemo__WEBPACK_IMPORTED_MODULE_3__["SelectButtonDemo"]
            ]
        })
    ], SelectButtonDemoModule);
    return SelectButtonDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/selectbutton/selectbuttondemo.ts ***!
  \**********************************************************************/
/*! exports provided: SelectButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButtonDemo", function() { return SelectButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectButtonDemo = /** @class */ (function () {
    function SelectButtonDemo() {
        this.selectedTypes = ['PayPal', 'MasterCard'];
        this.types = [
            { label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal' },
            { label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa' },
            { label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard' }
        ];
        this.modes = [
            { value: 'Bold', title: 'Bold', icon: 'fa fa-fw fa-bold' },
            { value: 'Italic', title: 'Italic', icon: 'fa fa-fw fa-italic' },
            { value: 'Underline', title: 'Underline', icon: 'fa fa-fw fa-underline' }
        ];
        this.countries = [
            { name: 'USA', flag: 'usa.png' },
            { name: 'Germany', flag: 'germany.png' },
            { name: 'Japan', flag: 'japan.png' }
        ];
    }
    SelectButtonDemo.prototype.clear = function () {
        this.selectedType = null;
        this.selectedTypes = [];
        this.selectedModes = [];
        this.selectedCountry = null;
    };
    SelectButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./selectbuttondemo.html */ "./src/app/showcase/components/selectbutton/selectbuttondemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], SelectButtonDemo);
    return SelectButtonDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-selectbutton-selectbuttondemo-module.js.map