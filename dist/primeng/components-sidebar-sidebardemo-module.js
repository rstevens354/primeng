(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sidebar-sidebardemo-module"],{

/***/ "./src/app/components/sidebar/sidebar.ts":
/*!***********************************************!*\
  !*** ./src/app/components/sidebar/sidebar.ts ***!
  \***********************************************/
/*! exports provided: Sidebar, SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Sidebar = /** @class */ (function () {
    function Sidebar(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.position = 'left';
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.modal = true;
        this.dismissible = true;
        this.showCloseIcon = true;
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Sidebar.prototype.ngAfterViewInit = function () {
        this.initialized = true;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.containerViewChild.nativeElement);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.containerViewChild.nativeElement, this.appendTo);
        }
        if (this.visible) {
            this.show();
        }
    };
    Object.defineProperty(Sidebar.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (val) {
            this._visible = val;
            if (this.initialized && this.containerViewChild && this.containerViewChild.nativeElement) {
                if (this._visible)
                    this.show();
                else {
                    if (this.preventVisibleChangePropagation)
                        this.preventVisibleChangePropagation = false;
                    else
                        this.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Sidebar.prototype.ngAfterViewChecked = function () {
        if (this.executePostDisplayActions) {
            this.onShow.emit({});
            this.executePostDisplayActions = false;
        }
    };
    Sidebar.prototype.show = function () {
        this.executePostDisplayActions = true;
        if (this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
        }
        if (this.modal) {
            this.enableModality();
        }
    };
    Sidebar.prototype.hide = function () {
        this.onHide.emit({});
        if (this.modal) {
            this.disableModality();
        }
    };
    Sidebar.prototype.close = function (event) {
        this.preventVisibleChangePropagation = true;
        this.hide();
        this.visibleChange.emit(false);
        event.preventDefault();
    };
    Sidebar.prototype.enableModality = function () {
        var _this = this;
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addMultipleClasses(this.mask, 'ui-widget-overlay ui-sidebar-mask');
            if (this.dismissible) {
                this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
                    if (_this.dismissible) {
                        _this.close(event);
                    }
                });
            }
            document.body.appendChild(this.mask);
            if (this.blockScroll) {
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
            }
        }
    };
    Sidebar.prototype.disableModality = function () {
        if (this.mask) {
            this.unbindMaskClickListener();
            document.body.removeChild(this.mask);
            if (this.blockScroll) {
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }
            this.mask = null;
        }
    };
    Sidebar.prototype.unbindMaskClickListener = function () {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    };
    Sidebar.prototype.ngOnDestroy = function () {
        this.initialized = false;
        if (this.visible) {
            this.hide();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
        }
        this.unbindMaskClickListener();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "fullScreen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "blockScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Sidebar.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "dismissible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "showCloseIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Sidebar.prototype, "containerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Sidebar.prototype, "onShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Sidebar.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Sidebar.prototype, "visibleChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Sidebar.prototype, "visible", null);
    Sidebar = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-sidebar',
            template: "\n        <div #container [ngClass]=\"{'ui-sidebar ui-widget ui-widget-content ui-shadow':true, 'ui-sidebar-active': visible, \n            'ui-sidebar-left': (position === 'left'), 'ui-sidebar-right': (position === 'right'),\n            'ui-sidebar-top': (position === 'top'), 'ui-sidebar-bottom': (position === 'bottom'), \n            'ui-sidebar-full': fullScreen}\"\n            [@panelState]=\"visible ? 'visible' : 'hidden'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <a [ngClass]=\"{'ui-sidebar-close ui-corner-all':true}\" *ngIf=\"showCloseIcon\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                <span class=\"pi pi-times\"></span>\n            </a>\n            <ng-content></ng-content>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('panelState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], Sidebar);
    return Sidebar;
}());

var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [Sidebar],
            declarations: [Sidebar]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SidebarDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemoRoutingModule", function() { return SidebarDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebardemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebardemo */ "./src/app/showcase/components/sidebar/sidebardemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidebarDemoRoutingModule = /** @class */ (function () {
    function SidebarDemoRoutingModule() {
    }
    SidebarDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _sidebardemo__WEBPACK_IMPORTED_MODULE_2__["SidebarDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SidebarDemoRoutingModule);
    return SidebarDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.html":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/sidebar/sidebardemo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Sidebar</span>\r\n        <span>Sidebar is a panel component displayed as an overlay.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Left Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n\r\n    <p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Right Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n\r\n    <p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Top Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n\r\n    <p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Bottom Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n\r\n    <p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Full Screen Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"pi pi-arrow-right\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"pi pi-arrow-left\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"pi pi-arrow-down\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"pi pi-arrow-up\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"pi pi-th-large\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SidebarModule&#125; from 'primeng/sidebar';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Sidebar is used as a container and visibility is controlled with visible property.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\"&gt;\r\n    Content\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;button type=\"text\" (click)=\"display = true\" pButton icon=\"pi pi-plus\" label=\"Show\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Position</h3>\r\n            <p>Sidebar can either be located as the left (default), right, top or bottom of the screen depending on the position property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\" position=\"right\"&gt;\r\n    Content\r\n&lt;/p-sidebar&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Size</h3>\r\n            <p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\" [style]=\"&#123;width:'30em'&#125;\"&gt;&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-sm\"&gt;&lt;/p-sidebar&gt;\r\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-md\"&gt;&lt;/p-sidebar&gt;\r\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-lg\"&gt;&lt;/p-sidebar&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Full Screen</h3>\r\n            <p>Full screen mode allows the sidebar to cover whole screen.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\" [fullScreen]=\"true\"&gt;\r\nContent\r\n&lt;/p-sidebar&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>visible</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifies the visibility of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>position</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Specifies the position of the sidebar, valid values are \"left\", \"right\", \"bottom\" and \"top\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>fullScreen</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Adds a close icon to the header to hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>blockScroll</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to block scrolling of the document when sidebar is active.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>modal</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether an overlay mask is displayed behind the sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dismissible</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to dismiss sidebar on click of the mask.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showCloseIcon</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to display the close icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onShow</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is shown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHide</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-sidebar</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-left</td>\r\n                            <td>Container element of left sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-right</td>\r\n                            <td>Container element of right sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-top</td>\r\n                            <td>Container element of top sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-bottom</td>\r\n                            <td>Container element of bottom sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-full</td>\r\n                            <td>Container element of a full screen sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-active</td>\r\n                            <td>Container element when sidebar is visible.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-close</td>\r\n                            <td>Close anchor element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-sm</td>\r\n                            <td>Small sized sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-md</td>\r\n                            <td>Medium sized sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-lg</td>\r\n                            <td>Large sized sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-mask</td>\r\n                            <td>Modal layer of the sidebar.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/sidebar\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Left Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Right Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Top Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Bottom Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Full Screen Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"pi pi-arrow-right\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"pi pi-arrow-left\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"pi pi-arrow-down\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"pi pi-arrow-up\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"pi pi-th-large\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SidebarDemo &#123;\r\n\r\n    visibleSidebar1;\r\n\r\n    visibleSidebar2;\r\n\r\n    visibleSidebar3;\r\n\r\n    visibleSidebar4;\r\n\r\n    visibleSidebar5;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n            </p-tabPanel>\r\n        </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/sidebar/sidebardemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemoModule", function() { return SidebarDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sidebardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebardemo */ "./src/app/showcase/components/sidebar/sidebardemo.ts");
/* harmony import */ var _sidebardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebardemo-routing.module */ "./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/sidebar/sidebar */ "./src/app/components/sidebar/sidebar.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SidebarDemoModule = /** @class */ (function () {
    function SidebarDemoModule() {
    }
    SidebarDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sidebardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["SidebarDemoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _sidebardemo__WEBPACK_IMPORTED_MODULE_3__["SidebarDemo"]
            ]
        })
    ], SidebarDemoModule);
    return SidebarDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/sidebar/sidebardemo.ts ***!
  \************************************************************/
/*! exports provided: SidebarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemo", function() { return SidebarDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarDemo = /** @class */ (function () {
    function SidebarDemo() {
    }
    SidebarDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./sidebardemo.html */ "./src/app/showcase/components/sidebar/sidebardemo.html"),
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
        })
    ], SidebarDemo);
    return SidebarDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-sidebar-sidebardemo-module.js.map