(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-fieldset-fieldsetdemo-module"],{

/***/ "./src/app/components/fieldset/fieldset.ts":
/*!*************************************************!*\
  !*** ./src/app/components/fieldset/fieldset.ts ***!
  \*************************************************/
/*! exports provided: Fieldset, FieldsetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return Fieldset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetModule", function() { return FieldsetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var idx = 0;
var Fieldset = /** @class */ (function () {
    function Fieldset(el) {
        this.el = el;
        this.collapsed = false;
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = "ui-fieldset-" + idx++;
    }
    Fieldset.prototype.toggle = function (event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.collapsed)
            this.expand(event);
        else
            this.collapse(event);
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        event.preventDefault();
    };
    Fieldset.prototype.expand = function (event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    };
    Fieldset.prototype.collapse = function (event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    };
    Fieldset.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Fieldset.prototype.onToggleDone = function (event) {
        this.animating = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Fieldset.prototype, "legend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Fieldset.prototype, "toggleable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Fieldset.prototype, "collapsed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Fieldset.prototype, "collapsedChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Fieldset.prototype, "onBeforeToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Fieldset.prototype, "onAfterToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Fieldset.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Fieldset.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Fieldset.prototype, "transitionOptions", void 0);
    Fieldset = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-fieldset',
            template: "\n        <fieldset [attr.id]=\"id\" [ngClass]=\"{'ui-fieldset ui-widget ui-widget-content ui-corner-all': true, 'ui-fieldset-toggleable': toggleable}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <legend class=\"ui-fieldset-legend ui-corner-all ui-state-default ui-unselectable-text\">\n                <ng-container *ngIf=\"toggleable; else legendContent\">\n                    <a tabindex=\"0\" (click)=\"toggle($event)\" (keydown.enter)=\"toggle($event)\" [attr.aria-controls]=\"id + '-content'\" [attr.aria-expanded]=\"!collapsed\">\n                        <ng-container *ngTemplateOutlet=\"legendContent\"></ng-container>\n                    </a>\n                </ng-container>\n                <ng-template #legendContent>\n                    <span class=\"ui-fieldset-toggler pi\" *ngIf=\"toggleable\" [ngClass]=\"{'pi-minus': !collapsed,'pi-plus':collapsed}\"></span>\n                    <span class=\"ui-fieldset-legend-text\">{{legend}}</span>\n                    <ng-content select=\"p-header\"></ng-content>\n                </ng-template>\n            </legend>\n            <div [attr.id]=\"id + '-content'\" class=\"ui-fieldset-content-wrapper\" [@fieldsetContent]=\"collapsed ? {value: 'hidden', params: {transitionParams: transitionOptions}} : {value: 'visible', params: {transitionParams: transitionOptions}}\" \n                        [ngClass]=\"{'ui-fieldset-content-wrapper-overflown': collapsed||animating}\" [attr.aria-hidden]=\"collapsed\"\n                         (@fieldsetContent.done)=\"onToggleDone($event)\" role=\"region\">\n                <div class=\"ui-fieldset-content\">\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </fieldset>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fieldsetContent', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Fieldset);
    return Fieldset;
}());

var FieldsetModule = /** @class */ (function () {
    function FieldsetModule() {
    }
    FieldsetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [Fieldset, _common_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [Fieldset]
        })
    ], FieldsetModule);
    return FieldsetModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/fieldset/fieldsetdemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/fieldset/fieldsetdemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FieldsetDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetDemoRoutingModule", function() { return FieldsetDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fieldsetdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fieldsetdemo */ "./src/app/showcase/components/fieldset/fieldsetdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FieldsetDemoRoutingModule = /** @class */ (function () {
    function FieldsetDemoRoutingModule() {
    }
    FieldsetDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _fieldsetdemo__WEBPACK_IMPORTED_MODULE_2__["FieldsetDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], FieldsetDemoRoutingModule);
    return FieldsetDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/fieldset/fieldsetdemo.html":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/fieldset/fieldsetdemo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Fieldset</span>\r\n        <span>Fieldset is a grouping component with the optional content toggle feature.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-fieldset legend=\"Godfather I\">\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n        kind and benevolent to those who give respect, \r\n        but given to ruthless violence whenever anything stands against the good of the family.\r\n    </p-fieldset>\r\n    <br>\r\n    <p-fieldset legend=\"Toggleable\" [toggleable]=\"true\">\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n        kind and benevolent to those who give respect, \r\n        but given to ruthless violence whenever anything stands against the good of the family.\r\n    </p-fieldset>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;FieldsetModule&#125; from 'primeng/fieldset';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Fieldset is defined with p-fieldset element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fieldset legend=\"Header\"&gt;\r\n    Content\r\n&lt;/p-fieldset&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Toggleable</h3>\r\n            <p>Content of the fieldset can be expanded and collapsed using toggleable option, default state is defined with collapsed option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fieldset legend=\"Header\" [toggleable]=\"true\"&gt;\r\n    Content\r\n&lt;/p-fieldset&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Custom Legend</h3>\r\n            <p>Legend content can be customized with p-header component.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fieldset&gt;\r\n    &lt;p-header&gt;Custom Legend Content&lt;/p-header&gt;\r\n    Content\r\n&lt;/p-fieldset&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of toggle animation can be customized using the transitionOptions property with a default value as <b>400ms cubic-bezier(0.86, 0, 0.07, 1)</b>, \r\n                example below disables the animation altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fieldset [transitionOptions]=\"'0ms'\"&gt;\r\n&lt;/p-fieldset&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>legend</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of the fieldset.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>toggleable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified, content can toggled by clicking the legend.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapsed</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines the default visibility state of the content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the fieldset.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the fieldset.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>transitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>400ms cubic-bezier(0.86, 0, 0.07, 1)</td>\r\n                            <td>Transition options of the animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onBeforeToggle</td>\r\n                            <td>event.originalEvent: browser event<br>\r\n                                event.collapsed: state as a boolean</td>\r\n                            <td>Callback to invoke before content toggle.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onAfterToggle</td>\r\n                            <td>event.originalEvent: browser event<br>\r\n                                event.collapsed: state as a boolean</td>\r\n                            <td>Callback to invoke after content toggle.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-fieldset</td>\r\n                            <td>Fieldset element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-fieldset-toggleable</td>\r\n                            <td>Toggleable fieldset element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-fieldset-legend</td>\r\n                            <td>Legend element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-fieldset-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/fieldset\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-fieldset legend=\"Godfather I\"&gt;\r\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n    kind and benevolent to those who give respect, \r\n    but given to ruthless violence whenever anything stands against the good of the family.\r\n&lt;/p-fieldset&gt;\r\n\r\n&lt;p-fieldset legend=\"Toggleable\" [toggleable]=\"true\"&gt;\r\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n    kind and benevolent to those who give respect, \r\n    but given to ruthless violence whenever anything stands against the good of the family.\r\n&lt;/p-fieldset&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/fieldset/fieldsetdemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/fieldset/fieldsetdemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: FieldsetDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetDemoModule", function() { return FieldsetDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fieldsetdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fieldsetdemo */ "./src/app/showcase/components/fieldset/fieldsetdemo.ts");
/* harmony import */ var _fieldsetdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldsetdemo-routing.module */ "./src/app/showcase/components/fieldset/fieldsetdemo-routing.module.ts");
/* harmony import */ var _components_fieldset_fieldset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/fieldset/fieldset */ "./src/app/components/fieldset/fieldset.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FieldsetDemoModule = /** @class */ (function () {
    function FieldsetDemoModule() {
    }
    FieldsetDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fieldsetdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["FieldsetDemoRoutingModule"],
                _components_fieldset_fieldset__WEBPACK_IMPORTED_MODULE_4__["FieldsetModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _fieldsetdemo__WEBPACK_IMPORTED_MODULE_2__["FieldsetDemo"]
            ]
        })
    ], FieldsetDemoModule);
    return FieldsetDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/fieldset/fieldsetdemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/fieldset/fieldsetdemo.ts ***!
  \**************************************************************/
/*! exports provided: FieldsetDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetDemo", function() { return FieldsetDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldsetDemo = /** @class */ (function () {
    function FieldsetDemo() {
    }
    FieldsetDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./fieldsetdemo.html */ "./src/app/showcase/components/fieldset/fieldsetdemo.html")
        })
    ], FieldsetDemo);
    return FieldsetDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-fieldset-fieldsetdemo-module.js.map