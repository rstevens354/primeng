(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-confirmdialog-confirmdialogdemo-module"],{

/***/ "./src/app/components/common/messageservice.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/common/messageservice.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clearSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.messageObserver = this.messageSource.asObservable();
        this.clearObserver = this.clearSource.asObservable();
    }
    MessageService.prototype.add = function (message) {
        if (message) {
            this.messageSource.next(message);
        }
    };
    MessageService.prototype.addAll = function (messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    };
    MessageService.prototype.clear = function (key) {
        this.clearSource.next(key || null);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/components/confirmdialog/confirmdialog.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/confirmdialog/confirmdialog.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmDialog, ConfirmDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return ConfirmDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function() { return ConfirmDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _common_confirmationservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/confirmationservice */ "./src/app/components/common/confirmationservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(el, renderer, confirmationService, zone) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.zone = zone;
        this.acceptIcon = 'pi pi-check';
        this.acceptLabel = 'Yes';
        this.acceptVisible = true;
        this.rejectIcon = 'pi pi-times';
        this.rejectLabel = 'No';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.blockScroll = true;
        this.closable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.subscription = this.confirmationService.requireConfirmation$.subscribe(function (confirmation) {
            if (confirmation.key === _this.key) {
                _this.confirmation = confirmation;
                _this.message = _this.confirmation.message || _this.message;
                _this.icon = _this.confirmation.icon || _this.icon;
                _this.header = _this.confirmation.header || _this.header;
                _this.rejectVisible = _this.confirmation.rejectVisible == null ? _this.rejectVisible : _this.confirmation.rejectVisible;
                _this.acceptVisible = _this.confirmation.acceptVisible == null ? _this.acceptVisible : _this.confirmation.acceptVisible;
                _this.acceptLabel = _this.confirmation.acceptLabel || _this.acceptLabel;
                _this.rejectLabel = _this.confirmation.rejectLabel || _this.rejectLabel;
                if (_this.confirmation.accept) {
                    _this.confirmation.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
                }
                if (_this.confirmation.reject) {
                    _this.confirmation.rejectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
                }
                if (_this.confirmation.blockScroll === false) {
                    _this.blockScroll = _this.confirmation.blockScroll;
                }
                _this.visible = true;
            }
        });
    }
    Object.defineProperty(ConfirmDialog.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            this._width = val;
            console.warn("width property is deprecated, use style to define the width of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmDialog.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            this._height = val;
            console.warn("height property is deprecated, use style to define the height of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    ConfirmDialog.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.setDimensions();
                this.contentContainer = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.container, '.ui-dialog-content');
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.container, 'button').focus();
                this.appendContainer();
                this.moveOnTop();
                this.bindGlobalListeners();
                this.enableModality();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    ConfirmDialog.prototype.setDimensions = function () {
        if (this.width) {
            this.container.style.width = this.width + 'px';
        }
        if (this.height) {
            this.container.style.height = this.height + 'px';
        }
    };
    ConfirmDialog.prototype.appendContainer = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.container, this.appendTo);
        }
    };
    ConfirmDialog.prototype.restoreAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    ConfirmDialog.prototype.enableModality = function () {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex) - 1);
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            document.body.appendChild(this.mask);
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
            if (this.blockScroll) {
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
            }
        }
    };
    ConfirmDialog.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            if (this.blockScroll) {
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }
            this.mask = null;
        }
    };
    ConfirmDialog.prototype.close = function (event) {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        event.preventDefault();
    };
    ConfirmDialog.prototype.hide = function () {
        this.visible = false;
    };
    ConfirmDialog.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
        }
    };
    ConfirmDialog.prototype.bindGlobalListeners = function () {
        var _this = this;
        if (this.closeOnEscape && this.closable && !this.documentEscapeListener) {
            this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
                if (event.which == 27) {
                    if (parseInt(_this.container.style.zIndex) === (_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex + _this.baseZIndex) && _this.visible) {
                        _this.close(event);
                    }
                }
            });
        }
    };
    ConfirmDialog.prototype.unbindGlobalListeners = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    ConfirmDialog.prototype.onOverlayHide = function () {
        this.disableModality();
        this.unbindGlobalListeners();
        this.container = null;
    };
    ConfirmDialog.prototype.ngOnDestroy = function () {
        this.restoreAppend();
        this.onOverlayHide();
        this.subscription.unsubscribe();
    };
    ConfirmDialog.prototype.accept = function () {
        if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    ConfirmDialog.prototype.reject = function () {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "acceptVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "rejectVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptButtonStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectButtonStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "closeOnEscape", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "blockScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "rtl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "closable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "key", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ConfirmDialog.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "transitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_4__["Footer"]),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "footer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfirmDialog.prototype, "contentViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialog.prototype, "width", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialog.prototype, "height", null);
    ConfirmDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-confirmDialog',
            template: "\n        <div [ngClass]=\"{'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl}\" [ngStyle]=\"style\" [class]=\"styleClass\" (mousedown)=\"moveOnTop()\"\n            [@animation]=\"{value: 'visible', params: {transitionParams: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" *ngIf=\"visible\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\">\n                <span class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                    <span class=\"pi pi-fw pi-times\"></span>\n                </a>\n            </div>\n            <div #content class=\"ui-dialog-content ui-widget-content\">\n                <i [ngClass]=\"'ui-confirmdialog-icon'\" [class]=\"icon\" *ngIf=\"icon\"></i>\n                <span class=\"ui-confirmdialog-message\" [innerHTML]=\"message\"></span>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"!footer\">\n                <button type=\"button\" pButton [icon]=\"acceptIcon\" [label]=\"acceptLabel\" (click)=\"accept()\" [class]=\"acceptButtonStyleClass\" *ngIf=\"acceptVisible\"></button>\n                <button type=\"button\" pButton [icon]=\"rejectIcon\" [label]=\"rejectLabel\" (click)=\"reject()\" [class]=\"rejectButtonStyleClass\" *ngIf=\"rejectVisible\"></button>\n            </div>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(0.7)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _common_confirmationservice__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ConfirmDialog);
    return ConfirmDialog;
}());

var ConfirmDialogModule = /** @class */ (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"]],
            exports: [ConfirmDialog, _button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _common_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            declarations: [ConfirmDialog]
        })
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ConfirmDialogDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemoRoutingModule", function() { return ConfirmDialogDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmdialogdemo */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmDialogDemoRoutingModule = /** @class */ (function () {
    function ConfirmDialogDemoRoutingModule() {
    }
    ConfirmDialogDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ConfirmDialogDemoRoutingModule);
    return ConfirmDialogDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/confirmdialog/confirmdialogdemo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">ConfirmDialog</span>\r\n        <span>ConfirmDialog is backed by a service utilizing Observables to display confirmation windows\r\n            easily that can be shared by multiple actions on the same component.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">    \r\n    <p-confirmDialog [style]=\"{width: '50vw'}\"></p-confirmDialog>\r\n\r\n    <button type=\"button\" (click)=\"confirm1()\" pButton icon=\"pi pi-check\" label=\"Confirm\"></button>\r\n    \r\n    <button type=\"button\" (click)=\"confirm2()\" pButton icon=\"pi pi-times\" label=\"Delete\"></button>\r\n\r\n    <p-messages [value]=\"msgs\"></p-messages>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ConfirmDialogModule&#125; from 'primeng/confirmdialog';\r\nimport &#123;ConfirmationService&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>ConfirmDialog is defined using p-confirmDialog tag and an instance of ConfirmationService is required to display it by \r\n                calling confirm method.</p>\r\n                    \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"&gt;&lt;/p-confirmDialog&gt;\r\n\r\n&lt;button type=\"text\" (click)=\"confirm()\" pButton icon=\"pi pi-check\" label=\"Confirm\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ConfirmDialogDemo &#123; \r\n           \r\n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\r\n\r\n    confirm() &#123;\r\n        this.confirmationService.confirm(&#123;\r\n            message: 'Are you sure that you want to perform this action?',\r\n            accept: () => &#123;\r\n                //Actual logic to perform a confirmation\r\n            &#125;\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Confirm method takes a confirmation instance used to customize the dialog UI along with accept and reject actions.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>message</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Message of the confirmation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Optional key to match the key of the confirm dialog, necessary to use when component tree has multiple confirm dialogs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to display next to the message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>accept</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when action is confirmed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>reject</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when action is rejected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>acceptLabel</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Label of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rejectLabel</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Label of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>acceptVisible</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Visibility of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rejectVisible</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Visibility of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>blockScroll</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether background scroll should be blocked when dialog is visible.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Customization</h3>\r\n            <p>Properties of the dialog are defined in two ways, message, icon and header properties can either\r\n            be defined using confirm method or declaratively on p-confirmDialog ng-template. If these values are unlikely to change then\r\n            declarative approach would be useful, still properties defined in a ng-template can be overriden with confirm method call.</p>\r\n            \r\n            <p>In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with\r\n            a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-confirmDialog #cd header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;button type=\"button\" pButton icon=\"pi pi-times\" label=\"No\" (click)=\"cd.reject()\"&gt;&lt;/button&gt;\r\n        &lt;button type=\"button\" pButton icon=\"pi pi-check\" label=\"Yes\" (click)=\"cd.accept()\"&gt;&lt;/button&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-confirmDialog&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the ConfirmDialog open and hide animations can be customized using the transitionOptions property with a default value as <b>400ms cubic-bezier(0.25, 0.8, 0.25, 1)</b>, \r\n                example below disables the animation altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-confirmDialog [transitionOptions]=\"'0ms'\"&gt;\r\n&lt;/p-confirmDialog&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                         <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Title text of the dialog.</td>\r\n                         </tr>\r\n                         <tr>\r\n                           <td>message</td>\r\n                           <td>string</td>\r\n                           <td>null</td>\r\n                           <td>Message of the confirmation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>icon</td>\r\n                          <td>string</td>\r\n                          <td>null</td>\r\n                          <td>Icon to display next to message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>acceptLabel</td>\r\n                          <td>string</td>\r\n                          <td>Yes</td>\r\n                          <td>Label of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>acceptIcon</td>\r\n                          <td>string</td>\r\n                          <td>pi pi-check</td>\r\n                          <td>Icon of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>acceptVisible</td>\r\n                          <td>boolean</td>\r\n                          <td>true</td>\r\n                          <td>Visibility of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>rejectLabel</td>\r\n                          <td>string</td>\r\n                          <td>No</td>\r\n                          <td>Label of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>rejectIcon</td>\r\n                          <td>string</td>\r\n                          <td>pi pi-times</td>\r\n                          <td>Icon of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>rejectVisible</td>\r\n                          <td>boolean</td>\r\n                          <td>true</td>\r\n                          <td>Visibility of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>width (deprecated, use style property)</td>\r\n                            <td>Number</td>\r\n                            <td>auto</td>\r\n                            <td>Width of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>height (deprecated, use style property)</td>\r\n                            <td>Number</td>\r\n                            <td>auto</td>\r\n                            <td>Height of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closeOnEscape</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rtl</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled dialog is displayed in RTL direction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Adds a close icon to the header to hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>acceptButtonStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rejectButtonStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>transitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>400ms cubic-bezier(0.25, 0.8, 0.25, 1)</td>\r\n                            <td>Transition options of the animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-dialog</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-confirmdialog</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar</td>\r\n                            <td>Container of header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-title</td>\r\n                            <td>Header element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-icon</td>\r\n                            <td>Icon container inside header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-close</td>\r\n                            <td>Close icon element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>ConfirmationService</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/confirmdialog\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>    \r\n&lt;p-confirmDialog [style]=\"&#123;width: '50vw'&#125;\"&gt;&lt;/p-confirmDialog&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"confirm1()\" pButton icon=\"pi pi-check\" label=\"Confirm\"&gt;&lt;/button&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"confirm2()\" pButton icon=\"pi pi-times\" label=\"Delete\"&gt;&lt;/button&gt;\r\n\r\n&lt;p-messages [value]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: 'showcase/demo/confirmdialog/confirmdialogdemo.html',\r\n    providers: [ConfirmationService]\r\n&#125;)\r\nexport class ConfirmDialogDemo &#123;\r\n    \r\n    msgs: Message[] = [];\r\n    \r\n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\r\n\r\n    confirm1() &#123;\r\n        this.confirmationService.confirm(&#123;\r\n            message: 'Are you sure that you want to proceed?',\r\n            header: 'Confirmation',\r\n            icon: 'pi pi-exclamation-triangle',\r\n            accept: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'You have accepted'&#125;];\r\n            &#125;,\r\n            reject: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\r\n            &#125;\r\n        &#125;);\r\n    &#125;\r\n\r\n    confirm2() &#123;\r\n        this.confirmationService.confirm(&#123;\r\n            message: 'Do you want to delete this record?',\r\n            header: 'Delete Confirmation',\r\n            icon: 'pi pi-info-circle',\r\n            accept: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'Record deleted'&#125;];\r\n            &#125;,\r\n            reject: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\r\n            &#125;\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmDialogDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemoModule", function() { return ConfirmDialogDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmdialogdemo */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
/* harmony import */ var _confirmdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmdialogdemo-routing.module */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts");
/* harmony import */ var _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/confirmdialog/confirmdialog */ "./src/app/components/confirmdialog/confirmdialog.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_messages_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/messages/messages */ "./src/app/components/messages/messages.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ConfirmDialogDemoModule = /** @class */ (function () {
    function ConfirmDialogDemoModule() {
    }
    ConfirmDialogDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _confirmdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogDemoRoutingModule"],
                _components_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _components_messages_messages__WEBPACK_IMPORTED_MODULE_6__["MessagesModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogDemo"]
            ]
        })
    ], ConfirmDialogDemoModule);
    return ConfirmDialogDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmDialogDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemo", function() { return ConfirmDialogDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/common/api */ "./src/app/components/common/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogDemo = /** @class */ (function () {
    function ConfirmDialogDemo(confirmationService) {
        this.confirmationService = confirmationService;
        this.msgs = [];
    }
    ConfirmDialogDemo.prototype.confirm1 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    ConfirmDialogDemo.prototype.confirm2 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: function () {
                _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    ConfirmDialogDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./confirmdialogdemo.html */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.html"),
            providers: [_components_common_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]],
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_components_common_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], ConfirmDialogDemo);
    return ConfirmDialogDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-confirmdialog-confirmdialogdemo-module.js.map