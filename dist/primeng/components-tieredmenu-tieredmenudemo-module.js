(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tieredmenu-tieredmenudemo-module"],{

/***/ "./src/app/components/tieredmenu/tieredmenu.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tieredmenu/tieredmenu.ts ***!
  \*****************************************************/
/*! exports provided: TieredMenuSub, TieredMenu, TieredMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuSub", function() { return TieredMenuSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenu", function() { return TieredMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuModule", function() { return TieredMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var TieredMenuSub = /** @class */ (function () {
    function TieredMenuSub(tieredMenu, cf) {
        this.tieredMenu = tieredMenu;
        this.cf = cf;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.hideDelay = 250;
    }
    TieredMenuSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        this.activeItem = item;
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            if (this.autoZIndex) {
                sublist.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
            }
            sublist.style.zIndex = String(++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex);
            sublist.style.top = '0px';
            sublist.style.left = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
        }
    };
    TieredMenuSub.prototype.onItemMouseLeave = function (event) {
        var _this = this;
        this.hideTimeout = setTimeout(function () {
            _this.activeItem = null;
            _this.cf.markForCheck();
        }, this.hideDelay);
    };
    TieredMenuSub.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        if (!item.items && this.tieredMenu.popup) {
            this.tieredMenu.hide();
        }
    };
    TieredMenuSub.prototype.listClick = function (event) {
        this.activeItem = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TieredMenuSub.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TieredMenuSub.prototype, "root", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TieredMenuSub.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TieredMenuSub.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TieredMenuSub.prototype, "hideDelay", void 0);
    TieredMenuSub = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-tieredMenuSub',
            template: "\n        <ul [ngClass]=\"{'ui-widget-content ui-corner-all ui-shadow ui-submenu-list': !root}\" (click)=\"listClick($event)\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listItem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menuitem-active':listItem==activeItem,'ui-helper-hidden': child.visible === false}\"\n                    [class]=\"child.styleClass\" [ngStyle]=\"child.style\"\n                    (mouseenter)=\"onItemMouseEnter($event, listItem, child)\" (mouseleave)=\"onItemMouseLeave($event)\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, child)\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-state-active'\" \n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\"\n                        class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, child)\">\n                        \n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-tieredMenuSub class=\"ui-submenu\" [item]=\"child\" *ngIf=\"child.items\" [baseZIndex]=\"baseZIndex\" [autoZIndex]=\"autoZIndex\" [hideDelay]=\"hideDelay\"></p-tieredMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    "
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TieredMenu; }))),
        __metadata("design:paramtypes", [TieredMenu, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TieredMenuSub);
    return TieredMenuSub;
}());

var TieredMenu = /** @class */ (function () {
    function TieredMenu(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.hideDelay = 250;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
    }
    TieredMenu.prototype.toggle = function (event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    };
    TieredMenu.prototype.show = function (event) {
        this.target = event.currentTarget;
        this.visible = true;
        this.preventDocumentDefault = true;
    };
    TieredMenu.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                if (this.popup) {
                    this.container = event.element;
                    this.moveOnTop();
                    this.appendOverlay();
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].absolutePosition(this.container, this.target);
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                }
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    TieredMenu.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.container, this.appendTo);
        }
    };
    TieredMenu.prototype.restoreOverlayAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    TieredMenu.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
        }
    };
    TieredMenu.prototype.hide = function () {
        this.visible = false;
    };
    TieredMenu.prototype.onWindowResize = function () {
        this.hide();
    };
    TieredMenu.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.preventDocumentDefault) {
                    _this.hide();
                }
                _this.preventDocumentDefault = false;
            });
        }
    };
    TieredMenu.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    TieredMenu.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    TieredMenu.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    TieredMenu.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.preventDocumentDefault = false;
        this.target = null;
    };
    TieredMenu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            this.restoreOverlayAppend();
            this.onOverlayHide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TieredMenu.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TieredMenu.prototype, "popup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TieredMenu.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TieredMenu.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TieredMenu.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TieredMenu.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TieredMenu.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TieredMenu.prototype, "hideDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TieredMenu.prototype, "showTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TieredMenu.prototype, "hideTransitionOptions", void 0);
    TieredMenu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-tieredMenu',
            template: "\n        <div [ngClass]=\"{'ui-tieredmenu ui-widget ui-widget-content ui-corner-all':true, 'ui-tieredmenu-dynamic ui-shadow':popup}\" [class]=\"styleClass\" [ngStyle]=\"style\"\n            [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"popup !== true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" *ngIf=\"!popup || visible\">\n            <p-tieredMenuSub [item]=\"model\" root=\"root\" [baseZIndex]=\"baseZIndex\" [autoZIndex]=\"autoZIndex\" [hideDelay]=\"hideDelay\"></p-tieredMenuSub>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('overlayAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(5%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{showTransitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{hideTransitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TieredMenu);
    return TieredMenu;
}());

var TieredMenuModule = /** @class */ (function () {
    function TieredMenuModule() {
    }
    TieredMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [TieredMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [TieredMenu, TieredMenuSub]
        })
    ], TieredMenuModule);
    return TieredMenuModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TieredMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemoRoutingModule", function() { return TieredMenuDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tieredmenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tieredmenudemo */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TieredMenuDemoRoutingModule = /** @class */ (function () {
    function TieredMenuDemoRoutingModule() {
    }
    TieredMenuDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _tieredmenudemo__WEBPACK_IMPORTED_MODULE_2__["TieredMenuDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], TieredMenuDemoRoutingModule);
    return TieredMenuDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.html":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Tiered Menu</span>\r\n        <span>TieredMenu displays submenus in nested overlays.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-tieredMenu [model]=\"items\"></p-tieredMenu>\r\n\r\n    <h3>Popup</h3>\r\n    <p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"></p-tieredMenu>\r\n    <button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TieredMenuModule&#125; from 'primeng/tieredmenu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>TieredMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>TieredMenu requires nested menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TieredMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Popup Mode</h3>\r\n            <p>Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \r\n                    from the anchor element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"fa fa fa-fw fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-tieredMenu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"fa fa fa-fw fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>popup</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if menu would displayed as a popup.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable\r\n                                of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideDelay</td>\r\n                            <td>number</td>\r\n                            <td>250</td>\r\n                            <td>Delay in milliseconds to hide the menu on mouse leave.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>225ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>195ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>toggle</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Toggles the visibility of the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>show</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Displays the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hide</td>\r\n                            <td>-</td>\r\n                            <td>Hides the popup menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>ui-tieredmenu</td>\r\n                        <td>Container element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menu-list</td>\r\n                        <td>List element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem</td>\r\n                        <td>Menuitem element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-text</td>\r\n                        <td>Label of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-icon</td>\r\n                        <td>Icon of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-submenu-icon</td>\r\n                        <td>Arrow icon of a submenu.</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tieredmenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\r\n\r\n&lt;h3&gt;Popup&lt;/h3&gt;\r\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TieredMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                icon: 'pi pi-fw pi-file',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;separator:true&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Help',\r\n                icon: 'pi pi-fw pi-question',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Contents'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Search', \r\n                        icon: 'pi pi-fw pi-search', \r\n                        items: [\r\n                            &#123;\r\n                                label: 'Text', \r\n                                items: [\r\n                                    &#123;\r\n                                        label: 'Workspace'\r\n                                    &#125;\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'File'\r\n                            &#125;\r\n                    ]&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Actions',\r\n                icon: 'pi pi-fw pi-cog',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Edit',\r\n                        icon: 'pi pi-fw pi-pencil',\r\n                        items: [\r\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\r\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Other',\r\n                        icon: 'pi pi-fw pi-tags',\r\n                        items: [\r\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;separator:true&#125;,\r\n            &#123;\r\n                label: 'Quit', icon: 'pi pi-fw pi-times'\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: TieredMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemoModule", function() { return TieredMenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tieredmenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tieredmenudemo */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");
/* harmony import */ var _tieredmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tieredmenudemo-routing.module */ "./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts");
/* harmony import */ var _components_tieredmenu_tieredmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/tieredmenu/tieredmenu */ "./src/app/components/tieredmenu/tieredmenu.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TieredMenuDemoModule = /** @class */ (function () {
    function TieredMenuDemoModule() {
    }
    TieredMenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tieredmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["TieredMenuDemoRoutingModule"],
                _components_tieredmenu_tieredmenu__WEBPACK_IMPORTED_MODULE_4__["TieredMenuModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _tieredmenudemo__WEBPACK_IMPORTED_MODULE_2__["TieredMenuDemo"]
            ]
        })
    ], TieredMenuDemoModule);
    return TieredMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo.ts ***!
  \******************************************************************/
/*! exports provided: TieredMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemo", function() { return TieredMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TieredMenuDemo = /** @class */ (function () {
    function TieredMenuDemo() {
    }
    TieredMenuDemo.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [{
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            },
            { separator: true },
            {
                label: 'Quit', icon: 'pi pi-fw pi-times'
            }
        ];
    };
    TieredMenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tieredmenudemo.html */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.html")
        })
    ], TieredMenuDemo);
    return TieredMenuDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-tieredmenu-tieredmenudemo-module.js.map