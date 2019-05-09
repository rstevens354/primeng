(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slidemenu-slidemenudemo-module"],{

/***/ "./src/app/components/slidemenu/slidemenu.ts":
/*!***************************************************!*\
  !*** ./src/app/components/slidemenu/slidemenu.ts ***!
  \***************************************************/
/*! exports provided: SlideMenuSub, SlideMenu, SlideMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuSub", function() { return SlideMenuSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenu", function() { return SlideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuModule", function() { return SlideMenuModule; });
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





var SlideMenuSub = /** @class */ (function () {
    function SlideMenuSub(slideMenu) {
        this.slideMenu = slideMenu;
        this.backLabel = 'Back';
        this.easing = 'ease-out';
    }
    SlideMenuSub.prototype.itemClick = function (event, item, listitem) {
        var _this = this;
        if (item.disabled) {
            event.preventDefault();
            return;
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
        if (item.items && !this.slideMenu.animating) {
            this.slideMenu.left -= this.slideMenu.menuWidth;
            this.activeItem = listitem;
            this.slideMenu.animating = true;
            setTimeout(function () { return _this.slideMenu.animating = false; }, this.effectDuration);
        }
        if (!item.items && this.slideMenu.popup) {
            this.slideMenu.hide();
        }
    };
    SlideMenuSub.prototype.ngOnDestroy = function () {
        this.activeItem = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideMenuSub.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideMenuSub.prototype, "root", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideMenuSub.prototype, "backLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SlideMenuSub.prototype, "menuWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideMenuSub.prototype, "effectDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideMenuSub.prototype, "easing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SlideMenuSub.prototype, "index", void 0);
    SlideMenuSub = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-slideMenuSub',
            template: "\n        <ul [ngClass]=\"{'ui-slidemenu-rootlist':root, 'ui-submenu-list':!root, 'ui-active-submenu': (-slideMenu.left == (index * menuWidth))}\"\n            [style.width.px]=\"menuWidth\" [style.left.px]=\"root ? slideMenu.left : slideMenu.menuWidth\"\n            [style.transitionProperty]=\"root ? 'left' : 'none'\" [style.transitionDuration]=\"effectDuration + 'ms'\" [style.transitionTimingFunction]=\"easing\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listitem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menuitem-active':listitem==activeItem,'ui-helper-hidden': child.visible === false}\"\n                    [class]=\"child.styleClass\" [ngStyle]=\"child.style\">\n                    <a *ngIf=\"!child.routerLink\" [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" \n                        (click)=\"itemClick($event, child, listitem)\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-state-active'\" \n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" \n                        (click)=\"itemClick($event, child, listitem)\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-slideMenuSub class=\"ui-submenu\" [item]=\"child\" [index]=\"index + 1\" [menuWidth]=\"menuWidth\" *ngIf=\"child.items\"></p-slideMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    "
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SlideMenu; }))),
        __metadata("design:paramtypes", [SlideMenu])
    ], SlideMenuSub);
    return SlideMenuSub;
}());

var SlideMenu = /** @class */ (function () {
    function SlideMenu(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.menuWidth = 190;
        this.viewportHeight = 180;
        this.effectDuration = 250;
        this.easing = 'ease-out';
        this.backLabel = 'Back';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.left = 0;
        this.animating = false;
    }
    SlideMenu.prototype.ngAfterViewChecked = function () {
        if (!this.viewportUpdated && !this.popup && this.containerViewChild) {
            this.updateViewPort();
            this.viewportUpdated = true;
        }
    };
    Object.defineProperty(SlideMenu.prototype, "container", {
        set: function (element) {
            this.containerViewChild = element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideMenu.prototype, "backward", {
        set: function (element) {
            this.backwardViewChild = element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideMenu.prototype, "slideMenuContent", {
        set: function (element) {
            this.slideMenuContentViewChild = element;
        },
        enumerable: true,
        configurable: true
    });
    SlideMenu.prototype.updateViewPort = function () {
        this.slideMenuContentViewChild.nativeElement.style.height = this.viewportHeight - _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getHiddenElementOuterHeight(this.backwardViewChild.nativeElement) + 'px';
    };
    SlideMenu.prototype.toggle = function (event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    };
    SlideMenu.prototype.show = function (event) {
        this.target = event.currentTarget;
        this.visible = true;
        this.preventDocumentDefault = true;
    };
    SlideMenu.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                if (this.popup) {
                    this.updateViewPort();
                    this.moveOnTop();
                    this.appendOverlay();
                    _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].absolutePosition(this.containerViewChild.nativeElement, this.target);
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                }
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    SlideMenu.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.containerViewChild.nativeElement);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.containerViewChild.nativeElement, this.appendTo);
        }
    };
    SlideMenu.prototype.restoreOverlayAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
        }
    };
    SlideMenu.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
        }
    };
    SlideMenu.prototype.hide = function () {
        this.visible = false;
    };
    SlideMenu.prototype.onWindowResize = function () {
        this.hide();
    };
    SlideMenu.prototype.onClick = function (event) {
        this.preventDocumentDefault = true;
    };
    SlideMenu.prototype.goBack = function () {
        this.left += this.menuWidth;
    };
    SlideMenu.prototype.bindDocumentClickListener = function () {
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
    SlideMenu.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    SlideMenu.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    SlideMenu.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    SlideMenu.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.preventDocumentDefault = false;
        this.target = null;
        this.left = 0;
    };
    SlideMenu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            this.restoreOverlayAppend();
            this.onOverlayHide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SlideMenu.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideMenu.prototype, "popup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SlideMenu.prototype, "menuWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SlideMenu.prototype, "viewportHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "effectDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "easing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "backLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideMenu.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SlideMenu.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "showTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "hideTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SlideMenu.prototype, "container", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backward'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SlideMenu.prototype, "backward", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slideMenuContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SlideMenu.prototype, "slideMenuContent", null);
    SlideMenu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-slideMenu',
            template: "\n        <div #container [ngClass]=\"{'ui-slidemenu ui-widget ui-widget-content ui-corner-all':true, 'ui-slidemenu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"onClick($event)\"\n            [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"popup !== true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" *ngIf=\"!popup || visible\">\n            <div class=\"ui-slidemenu-wrapper\" [style.height.px]=\"viewportHeight\">\n                <div #slideMenuContent class=\"ui-slidemenu-content\">\n                    <p-slideMenuSub [item]=\"model\" root=\"root\" [index]=\"0\" [menuWidth]=\"menuWidth\" [effectDuration]=\"effectDuration\" [easing]=\"easing\"></p-slideMenuSub>\n                </div>\n                <div #backward class=\"ui-slidemenu-backward ui-widget-header ui-corner-all\" [style.display]=\"left ? 'block' : 'none'\" (click)=\"goBack()\">\n                    <span class=\"ui-slidemenu-backward-icon pi pi-fw pi-caret-left\"></span><span>{{backLabel}}</span>\n                </div>\n            </div>\n        </div>\n    ",
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
    ], SlideMenu);
    return SlideMenu;
}());

var SlideMenuModule = /** @class */ (function () {
    function SlideMenuModule() {
    }
    SlideMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [SlideMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [SlideMenu, SlideMenuSub]
        })
    ], SlideMenuModule);
    return SlideMenuModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SlideMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuDemoRoutingModule", function() { return SlideMenuDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _slidemenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slidemenudemo */ "./src/app/showcase/components/slidemenu/slidemenudemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideMenuDemoRoutingModule = /** @class */ (function () {
    function SlideMenuDemoRoutingModule() {
    }
    SlideMenuDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _slidemenudemo__WEBPACK_IMPORTED_MODULE_2__["SlideMenuDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SlideMenuDemoRoutingModule);
    return SlideMenuDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo.html":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/slidemenu/slidemenudemo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Slide Menu</span>\r\n        <span>SlideMenu displays submenus with slide animation.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-slideMenu [model]=\"items\" [viewportHeight]=\"250\"></p-slideMenu>\r\n\r\n    <h3>Popup</h3>\r\n    <p-slideMenu #menu [model]=\"items\" [popup]=\"true\" [viewportHeight]=\"250\"></p-slideMenu>\r\n    <button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SlideMenuModule&#125; from 'primeng/slidemenu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>SlideMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>SlideMenu requires nested menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slideMenu [model]=\"items\"&gt;&lt;/p-slideMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SlideMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Popup Mode</h3>\r\n            <p>SlideMenu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \r\n                    from the anchor element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Effects</h3>\r\n            <p>The easing function to use is \"ease-out\" by default and this can be customized using easing property. \r\n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slideMenu #menu [model]=\"items\" effectDuration=\"1000\" easing=\"ease-in\"&gt;&lt;/p-slideMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slideMenu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>popup</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if menu would displayed as a popup.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>easing</td>\r\n                            <td>string</td>\r\n                            <td>ease-out</td>\r\n                            <td>Easing animation to use for sliding.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>effectDuration</td>\r\n                            <td>any</td>\r\n                            <td>250</td>\r\n                            <td>Duration of the sliding animation in milliseconds.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>backLabel</td>\r\n                            <td>string</td>\r\n                            <td>Back</td>\r\n                            <td>Label of element to navigate back.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>menuWidth</td>\r\n                            <td>number</td>\r\n                            <td>180</td>\r\n                            <td>Width of the submenus.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>viewportHeight</td>\r\n                            <td>number</td>\r\n                            <td>175</td>\r\n                            <td>Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>225ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>195ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>toggle</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Toggles the visibility of the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>show</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Displays the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hide</td>\r\n                            <td>-</td>\r\n                            <td>Hides the popup menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-slidemenu</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-slidemenu-wrapper</td>\r\n                            <td>Wrapper of content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-slidemenu-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-slidemenu-backward</td>\r\n                            <td>Element to navigate to previous menu on click.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menu-list</td>\r\n                            <td>List element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem</td>\r\n                            <td>Menuitem element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-text</td>\r\n                            <td>Label of a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-icon</td>\r\n                            <td>Icon of a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-submenu-icon</td>\r\n                            <td>Arrow icon of a submenu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slidemenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;p-slideMenu [model]=\"items\" [viewportHeight]=\"250\"&gt;&lt;/p-slideMenu&gt;\r\n\r\n&lt;h3&gt;Popup&lt;/h3&gt;\r\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\" [viewportHeight]=\"250\"&gt;&lt;/p-slideMenu&gt;\r\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SlideMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                icon: 'pi pi-fw pi-file',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;separator:true&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Help',\r\n                icon: 'pi pi-fw pi-question',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Contents'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Search', \r\n                        icon: 'pi pi-fw pi-search', \r\n                        items: [\r\n                            &#123;\r\n                                label: 'Text', \r\n                                items: [\r\n                                    &#123;\r\n                                        label: 'Workspace'\r\n                                    &#125;\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'File'\r\n                            &#125;\r\n                    ]&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Actions',\r\n                icon: 'pi pi-fw pi-cog',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Edit',\r\n                        icon: 'pi pi-fw pi-pencil',\r\n                        items: [\r\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\r\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Other',\r\n                        icon: 'pi pi-fw pi-tags',\r\n                        items: [\r\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;separator:true&#125;,\r\n            &#123;\r\n                label: 'Quit', icon: 'pi pi-fw pi-times'\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/slidemenu/slidemenudemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: SlideMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuDemoModule", function() { return SlideMenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slidemenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slidemenudemo */ "./src/app/showcase/components/slidemenu/slidemenudemo.ts");
/* harmony import */ var _slidemenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidemenudemo-routing.module */ "./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts");
/* harmony import */ var _components_slidemenu_slidemenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/slidemenu/slidemenu */ "./src/app/components/slidemenu/slidemenu.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SlideMenuDemoModule = /** @class */ (function () {
    function SlideMenuDemoModule() {
    }
    SlideMenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _slidemenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["SlideMenuDemoRoutingModule"],
                _components_slidemenu_slidemenu__WEBPACK_IMPORTED_MODULE_4__["SlideMenuModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _slidemenudemo__WEBPACK_IMPORTED_MODULE_2__["SlideMenuDemo"]
            ]
        })
    ], SlideMenuDemoModule);
    return SlideMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/slidemenu/slidemenudemo.ts ***!
  \****************************************************************/
/*! exports provided: SlideMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuDemo", function() { return SlideMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideMenuDemo = /** @class */ (function () {
    function SlideMenuDemo() {
    }
    SlideMenuDemo.prototype.ngOnInit = function () {
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
    SlideMenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./slidemenudemo.html */ "./src/app/showcase/components/slidemenu/slidemenudemo.html"),
            styles: ["\n        :host ::ng-deep .ui-slidemenu {\n            width: 13.5em\n        }\n    "]
        })
    ], SlideMenuDemo);
    return SlideMenuDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-slidemenu-slidemenudemo-module.js.map