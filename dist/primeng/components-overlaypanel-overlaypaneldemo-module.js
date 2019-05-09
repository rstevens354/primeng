(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-overlaypanel-overlaypaneldemo-module"],{

/***/ "./src/app/components/overlaypanel/overlaypanel.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/overlaypanel/overlaypanel.ts ***!
  \*********************************************************/
/*! exports provided: OverlayPanel, OverlayPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPanel", function() { return OverlayPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPanelModule", function() { return OverlayPanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverlayPanel = /** @class */ (function () {
    function OverlayPanel(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.dismissable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
    }
    OverlayPanel.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener && this.dismissable) {
            this.zone.runOutsideAngular(function () {
                var documentEvent = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].isIOS() ? 'touchstart' : 'click';
                _this.documentClickListener = _this.renderer.listen('document', documentEvent, function (event) {
                    if (!_this.container.contains(event.target) && _this.target !== event.target && !_this.target.contains(event.target)) {
                        _this.zone.run(function () {
                            _this.hide();
                        });
                    }
                    _this.cd.markForCheck();
                });
            });
        }
    };
    OverlayPanel.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    OverlayPanel.prototype.toggle = function (event, target) {
        var _this = this;
        if (this.visible) {
            this.visible = false;
            if (this.hasTargetChanged(event, target)) {
                this.target = target || event.currentTarget || event.target;
                setTimeout(function () {
                    _this.visible = true;
                }, 200);
            }
        }
        else {
            this.show(event, target);
        }
    };
    OverlayPanel.prototype.show = function (event, target) {
        this.target = target || event.currentTarget || event.target;
        this.visible = true;
    };
    OverlayPanel.prototype.hasTargetChanged = function (event, target) {
        return this.target != null && this.target !== (target || event.currentTarget || event.target);
    };
    OverlayPanel.prototype.appendContainer = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.appendTo);
        }
    };
    OverlayPanel.prototype.restoreAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    OverlayPanel.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.onShow.emit(null);
                this.appendContainer();
                if (this.autoZIndex) {
                    this.container.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].zindex));
                }
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].absolutePosition(this.container, this.target);
                if (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.container).top < _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.target).top) {
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.container, 'ui-overlaypanel-flipped');
                }
                if (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.container).left < _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.target).left &&
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.container).left > 0) {
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.container, 'ui-overlaypanel-shifted');
                }
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                break;
            case 'void':
                this.onContainerDestroy();
                this.onHide.emit({});
                break;
        }
    };
    OverlayPanel.prototype.hide = function () {
        this.visible = false;
    };
    OverlayPanel.prototype.onCloseClick = function (event) {
        this.hide();
        event.preventDefault();
    };
    OverlayPanel.prototype.onWindowResize = function (event) {
        this.hide();
    };
    OverlayPanel.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    OverlayPanel.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    OverlayPanel.prototype.onContainerDestroy = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
    };
    OverlayPanel.prototype.ngOnDestroy = function () {
        this.target = null;
        if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OverlayPanel.prototype, "dismissable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OverlayPanel.prototype, "showCloseIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OverlayPanel.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OverlayPanel.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OverlayPanel.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OverlayPanel.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OverlayPanel.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OverlayPanel.prototype, "showTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OverlayPanel.prototype, "hideTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OverlayPanel.prototype, "onShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OverlayPanel.prototype, "onHide", void 0);
    OverlayPanel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-overlayPanel',
            template: "\n        <div [ngClass]=\"'ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow'\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            [@animation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" *ngIf=\"visible\">\n            <div class=\"ui-overlaypanel-content\">\n                <ng-content></ng-content>\n            </div>\n            <a tabindex=\"0\" *ngIf=\"showCloseIcon\" class=\"ui-overlaypanel-close ui-state-default\" (click)=\"onCloseClick($event)\" (keydown.enter)=\"hide()\">\n                <span class=\"ui-overlaypanel-close-icon pi pi-times\"></span>\n            </a>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'translateY(5%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{showTransitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{hideTransitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OverlayPanel);
    return OverlayPanel;
}());

var OverlayPanelModule = /** @class */ (function () {
    function OverlayPanelModule() {
    }
    OverlayPanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [OverlayPanel],
            declarations: [OverlayPanel]
        })
    ], OverlayPanelModule);
    return OverlayPanelModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: OverlayPanelDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPanelDemoRoutingModule", function() { return OverlayPanelDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overlaypaneldemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlaypaneldemo */ "./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OverlayPanelDemoRoutingModule = /** @class */ (function () {
    function OverlayPanelDemoRoutingModule() {
    }
    OverlayPanelDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _overlaypaneldemo__WEBPACK_IMPORTED_MODULE_2__["OverlayPanelDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], OverlayPanelDemoRoutingModule);
    return OverlayPanelDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/overlaypanel/overlaypaneldemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/overlaypanel/overlaypaneldemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">OverlayPanel</span>\r\n        <span>OverlayPanel is a container component that can overlay other components on page.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p>Click the button to show the panel.</p>\r\n    <button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"></button>\r\n\r\n    <p-overlayPanel #op1>\r\n        <img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" />\r\n    </p-overlayPanel>\r\n    \r\n    <h3>Customized</h3>\r\n    <p>This OverlayPanel gets displayed on hover of the icon and displays a close icon.</p>\r\n    <i class=\"pi pi-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"></i>\r\n    \r\n    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\r\n        <p-table [value]=\"cars1\" [style]=\"{width: '500px'}\" [paginator]=\"true\" [rows]=\"5\">\r\n            <ng-template pTemplate=\"header\">\r\n                <tr>\r\n                    <th pSortableColumn=\"vin\">Vin <p-sortIcon field=\"vin\"></p-sortIcon></th>\r\n                    <th pSortableColumn=\"year\">Year <p-sortIcon field=\"year\"></p-sortIcon></th>\r\n                    <th pSortableColumn=\"brand\">Brand <p-sortIcon field=\"brand\"></p-sortIcon></th>\r\n                    <th pSortableColumn=\"color\">Color <p-sortIcon field=\"color\"></p-sortIcon></th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-car>\r\n                <tr>\r\n                    <td>{{car.vin}}</td>\r\n                    <td>{{car.year}}</td>\r\n                    <td>{{car.brand}}</td>\r\n                    <td>{{car.color}}</td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </p-overlayPanel>\r\n    \r\n    <h3>Table Integration</h3>\r\n    <p-table [value]=\"cars2\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th style=\"width: 4em\"></th>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Brand</th>\r\n                <th>Color</th>\r\n                \r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-car>\r\n            <tr>\r\n                <td>\r\n                    <button type=\"button\" pButton (click)=\"selectCar($event,car,op3)\" icon=\"pi pi-search\"></button>\r\n                </td>\r\n                <td>{{car.vin}}</td>\r\n                <td>{{car.year}}</td>\r\n                <td>{{car.brand}}</td>\r\n                <td>{{car.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    \r\n    <p-overlayPanel #op3>\r\n        <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\" width=\"120\" height=\"120\" *ngIf=\"selectedCar\"/>\r\n    </p-overlayPanel>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;OverlayPanelModule&#125; from 'primeng/overlaypanel';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>OverlayPanel is defined using p-overlayPanel element and is displayed using the <i>show</i> or <i>toggle</i> method of a local ng-template variable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-overlayPanel #op&gt;\r\n    Content\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n            <h3>Show and Hide</h3>\r\n            <p><i>show</i> method takes two parameters, first one is the event and it is mandatory. By default the target component to align the overlay is the event target, \r\n            if you'd like to align it to another element, provide it as the second parameter. Similarly calling <i>hide()</i> hides the overlay panel and the <i>toggle</i> method \r\n            toggles the visibility of the panel. In example below, clicking the button displays the overlayPanel aligned to the actualTarget div, not the button itself.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-overlayPanel #op&gt;\r\n    Content\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;button type=\"text\" pButton label=\"Custom Target\" (click)=\"op.show($event, actualTarget)\"&gt;&lt;/button&gt;\r\n&lt;div #actualTarget&gt;&lt;/div&gt;\r\n</code>\r\n</pre>\r\n        \r\n        \r\n            <h3>Dismissable and CloseIcon</h3>\r\n            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior. Additionally enablign showCloseIcon property \r\n            displays a close icon at the top right corner to close the panel</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-overlayPanel #op [dismissable]=\"true\" [showCloseIcon]=\"true\"&gt;\r\n    Content\r\n&lt;/p-overlayPanel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-overlayPanel [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #op [dismissable]=\"true\" [showCloseIcon]=\"true\"&gt;\r\n    Content\r\n&lt;/p-overlayPanel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>dismissable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Enables to hide the overlay when outside is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showCloseIcon</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, displays a close icon at top right corner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the panel, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>225ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>195ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onShow</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke when an overlay becomes visible.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHide</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke after overlay gets hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>toggle</td>\r\n                            <td>event: browser event <br>\r\n                                target?: target element to align the panel, defaults to event.target\r\n                            </td>\r\n                            <td>Toggles the visibility of the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>show</td>\r\n                            <td>event: browser event <br>\r\n                                target?: target element to align the panel to\r\n                            </td>\r\n                            <td>Displays the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hide</td>\r\n                            <td>-</td>\r\n                            <td>Hides the panel.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-overlaypanel</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-overlaypanel-content</td>\r\n                            <td>Content of the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-overlaypanel-close</td>\r\n                            <td>Close icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/overlaypanel\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p&gt;Click the button to show the panel.&lt;/p&gt;\r\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"&gt;&lt;/button&gt;\r\n\r\n&lt;p-overlayPanel #op1&gt;\r\n    &lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" /&gt;\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;h3&gt;Customized&lt;/h3&gt;\r\n&lt;p&gt;This OverlayPanel gets displayed on hover of the icon, is not dismissable and displays a close icon.&lt;/p&gt;\r\n&lt;i class=\"pi pi-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"&gt;&lt;/i&gt;\r\n\r\n&lt;p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\"&gt;\r\n    &lt;p-table [value]=\"cars1\" [style]=\"&#123;width: '500px'&#125; [paginator]=\"true\" [rows]=\"5\"\"&gt;\r\n        &lt;ng-template pTemplate=\"header\"&gt;\r\n            &lt;tr&gt;\r\n                &lt;th pSortableColumn=\"vin\"&gt;Vin &lt;p-sortIcon field=\"vin\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n                &lt;th pSortableColumn=\"year\"&gt;Year &lt;p-sortIcon field=\"year\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n                &lt;th pSortableColumn=\"brand\"&gt;Brand &lt;p-sortIcon field=\"brand\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n                &lt;th pSortableColumn=\"color\"&gt;Color &lt;p-sortIcon field=\"color\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n            &lt;/tr&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n            &lt;tr&gt;\r\n                &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n                &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n                &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n                &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n            &lt;/tr&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-table&gt;\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;h3&gt;Table Integration&lt;/h3&gt;\r\n&lt;p-table [value]=\"cars2\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width: 4em\"&gt;&lt;/th&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;button type=\"button\" pButton (click)=\"selectCar($event,car,op3)\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;p-overlayPanel #op3&gt;\r\n    &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;selectedCar.brand&#125;&#125;.png\" *ngIf=\"selectedCar\"/&gt;\r\n&lt;/p-overlayPanel&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class OverlayPanelDemo &#123;\r\n\r\n    cars1: Car[];\r\n    \r\n    cars2: Car[];\r\n    \r\n    selectedCar: Car;\r\n    \r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\r\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\r\n    &#125;\r\n    \r\n    selectCar(event,car: Car, overlaypanel: OverlayPanel) &#123;\r\n        this.selectedCar = car;\r\n        overlaypanel.toggle(event);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/overlaypanel/overlaypaneldemo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/overlaypanel/overlaypaneldemo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OverlayPanelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPanelDemoModule", function() { return OverlayPanelDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _overlaypaneldemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlaypaneldemo */ "./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");
/* harmony import */ var _overlaypaneldemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlaypaneldemo-routing.module */ "./src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts");
/* harmony import */ var _components_overlaypanel_overlaypanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/overlaypanel/overlaypanel */ "./src/app/components/overlaypanel/overlaypanel.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OverlayPanelDemoModule = /** @class */ (function () {
    function OverlayPanelDemoModule() {
    }
    OverlayPanelDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _overlaypaneldemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelDemoRoutingModule"],
                _components_overlaypanel_overlaypanel__WEBPACK_IMPORTED_MODULE_4__["OverlayPanelModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _components_table_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _overlaypaneldemo__WEBPACK_IMPORTED_MODULE_2__["OverlayPanelDemo"]
            ]
        })
    ], OverlayPanelDemoModule);
    return OverlayPanelDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts ***!
  \**********************************************************************/
/*! exports provided: OverlayPanelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPanelDemo", function() { return OverlayPanelDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverlayPanelDemo = /** @class */ (function () {
    function OverlayPanelDemo(carService) {
        this.carService = carService;
    }
    OverlayPanelDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
    };
    OverlayPanelDemo.prototype.selectCar = function (event, car, overlaypanel) {
        this.selectedCar = car;
        overlaypanel.toggle(event);
    };
    OverlayPanelDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./overlaypaneldemo.html */ "./src/app/showcase/components/overlaypanel/overlaypaneldemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], OverlayPanelDemo);
    return OverlayPanelDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-overlaypanel-overlaypaneldemo-module.js.map