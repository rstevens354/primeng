(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-confirmdialog-confirmdialogdemo-module~components-dynamicdialog-dynamicdialogdemo~45f858cf"],{

/***/ "./src/app/components/common/api.ts":
/*!******************************************!*\
  !*** ./src/app/components/common/api.ts ***!
  \******************************************/
/*! exports provided: DomHandler, TreeDragDropService, ConfirmationService, MessageService, DialogService, DynamicDialogConfig, DynamicDialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomHandler", function() { return _dom_domhandler__WEBPACK_IMPORTED_MODULE_0__["DomHandler"]; });

/* harmony import */ var _treedragdropservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treedragdropservice */ "./src/app/components/common/treedragdropservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return _treedragdropservice__WEBPACK_IMPORTED_MODULE_1__["TreeDragDropService"]; });

/* harmony import */ var _confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmationservice */ "./src/app/components/common/confirmationservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return _confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]; });

/* harmony import */ var _messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messageservice */ "./src/app/components/common/messageservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]; });

/* harmony import */ var _dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamicdialog/dialogservice */ "./src/app/components/dynamicdialog/dialogservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_4__["DialogService"]; });

/* harmony import */ var _dynamicdialog_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function() { return _dynamicdialog_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogConfig"]; });

/* harmony import */ var _dynamicdialog_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function() { return _dynamicdialog_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"]; });










/***/ }),

/***/ "./src/app/components/common/confirmationservice.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/common/confirmationservice.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfirmationService = /** @class */ (function () {
    function ConfirmationService() {
        this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    ConfirmationService.prototype.confirm = function (confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    };
    ConfirmationService.prototype.onAccept = function () {
        this.acceptConfirmationSource.next();
    };
    ConfirmationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ConfirmationService);
    return ConfirmationService;
}());



/***/ }),

/***/ "./src/app/components/common/treedragdropservice.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/common/treedragdropservice.ts ***!
  \**********************************************************/
/*! exports provided: TreeDragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return TreeDragDropService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragStopSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TreeDragDropService);
    return TreeDragDropService;
}());



/***/ }),

/***/ "./src/app/components/dynamicdialog/dialogservice.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dynamicdialog/dialogservice.ts ***!
  \***********************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamicdialog */ "./src/app/components/dynamicdialog/dynamicdialog.ts");
/* harmony import */ var _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicdialog-injector */ "./src/app/components/dynamicdialog/dynamicdialog-injector.ts");
/* harmony import */ var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony import */ var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogService = /** @class */ (function () {
    function DialogService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DialogService.prototype.open = function (componentType, config) {
        var dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    };
    DialogService.prototype.appendDialogComponentToBody = function (config) {
        var _this = this;
        var map = new WeakMap();
        map.set(_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"], config);
        var dialogRef = new _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"]();
        map.set(_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"], dialogRef);
        var sub = dialogRef.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogComponent"]);
        var componentRef = componentFactory.create(new _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogInjector"](this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        return dialogRef;
    };
    DialogService.prototype.removeDialogComponentFromBody = function () {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-config.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-config.ts ***!
  \******************************************************************/
/*! exports provided: DynamicDialogConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function() { return DynamicDialogConfig; });
var DynamicDialogConfig = /** @class */ (function () {
    function DynamicDialogConfig() {
    }
    return DynamicDialogConfig;
}());



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-injector.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-injector.ts ***!
  \********************************************************************/
/*! exports provided: DynamicDialogInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogInjector", function() { return DynamicDialogInjector; });
var DynamicDialogInjector = /** @class */ (function () {
    function DynamicDialogInjector(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    DynamicDialogInjector.prototype.get = function (token, notFoundValue, flags) {
        var value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicDialogInjector;
}());



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-ref.ts ***!
  \***************************************************************/
/*! exports provided: DynamicDialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function() { return DynamicDialogRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var DynamicDialogRef = /** @class */ (function () {
    function DynamicDialogRef() {
        this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onClose = this._onClose.asObservable();
    }
    DynamicDialogRef.prototype.close = function (result) {
        this._onClose.next(result);
    };
    return DynamicDialogRef;
}());



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog.ts ***!
  \***********************************************************/
/*! exports provided: DynamicDialogComponent, DynamicDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogComponent", function() { return DynamicDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogModule", function() { return DynamicDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicdialogcontent */ "./src/app/components/dynamicdialog/dynamicdialogcontent.ts");
/* harmony import */ var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DynamicDialogComponent = /** @class */ (function () {
    function DynamicDialogComponent(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
    }
    DynamicDialogComponent.prototype.ngAfterViewInit = function () {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    };
    DynamicDialogComponent.prototype.onOverlayClicked = function (evt) {
        this.dialogRef.close();
    };
    DynamicDialogComponent.prototype.onDialogClicked = function (evt) {
        evt.stopPropagation();
    };
    DynamicDialogComponent.prototype.loadChildComponent = function (componentType) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    };
    DynamicDialogComponent.prototype.moveOnTop = function () {
        if (this.config.autoZIndex !== false) {
            var zIndex = this.config.baseZIndex || 0 + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
        }
    };
    DynamicDialogComponent.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.moveOnTop();
                this.bindGlobalListeners();
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
                break;
            case 'void':
                this.onContainerDestroy();
                break;
        }
    };
    DynamicDialogComponent.prototype.onAnimationEnd = function (event) {
        if (event.toState === 'void') {
            this.dialogRef.close();
        }
    };
    DynamicDialogComponent.prototype.onContainerDestroy = function () {
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
        this.unbindGlobalListeners();
        this.container = null;
    };
    DynamicDialogComponent.prototype.close = function () {
        this.visible = false;
    };
    DynamicDialogComponent.prototype.onMaskClick = function () {
        if (this.config.dismissableMask) {
            this.close();
        }
    };
    DynamicDialogComponent.prototype.bindGlobalListeners = function () {
        if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
        }
    };
    DynamicDialogComponent.prototype.unbindGlobalListeners = function () {
        this.unbindDocumentEscapeListener();
    };
    DynamicDialogComponent.prototype.bindDocumentEscapeListener = function () {
        var _this = this;
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
                if (parseInt(_this.container.style.zIndex) == _dom_domhandler__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex) {
                    _this.close();
                }
            }
        });
    };
    DynamicDialogComponent.prototype.unbindDocumentEscapeListener = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    DynamicDialogComponent.prototype.ngOnDestroy = function () {
        this.onContainerDestroy();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogContent"]),
        __metadata("design:type", _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogContent"])
    ], DynamicDialogComponent.prototype, "insertionPoint", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mask'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DynamicDialogComponent.prototype, "maskViewChild", void 0);
    DynamicDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-dynamicDialog',
            template: "\n\t\t<div #mask class=\"ui-widget-overlay ui-dialog-mask ui-dialog-mask-scrollblocker\" *ngIf=\"visible\" (click)=\"onMaskClick()\"></div>\n\t\t<div [ngClass]=\"{'ui-dialog ui-dynamicdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl': config.rtl}\" [ngStyle]=\"config.style\" [class]=\"config.styleClass\"\n\t\t\t[@animation]=\"{value: 'visible', params: {transitionParams: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}\" \n\t\t\t(@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" *ngIf=\"visible\"\n\t\t\t[style.width]=\"config.width\" [style.height]=\"config.height\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" *ngIf=\"config.showHeader === false ? false: true\">\n                <span class=\"ui-dialog-title\">{{config.header}}</span>\n                <a [ngClass]=\"'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'\" tabindex=\"0\" role=\"button\" (click)=\"close()\" (keydown.enter)=\"close()\" *ngIf=\"config.closable === false ? false : true\">\n                    <span class=\"pi pi-times\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\" [ngStyle]=\"config.contentStyle\">\n\t\t\t\t<ng-template pDynamicDialogContent></ng-template>\n\t\t\t</div>\n\t\t\t<div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"config.footer\">\n\t\t\t\t{{config.footer}}\n            </div>\n\t\t</div>\n\t",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"], _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_6__["DynamicDialogRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DynamicDialogComponent);
    return DynamicDialogComponent;
}());

var DynamicDialogModule = /** @class */ (function () {
    function DynamicDialogModule() {
    }
    DynamicDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [DynamicDialogComponent, _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogContent"]],
            entryComponents: [DynamicDialogComponent]
        })
    ], DynamicDialogModule);
    return DynamicDialogModule;
}());



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialogcontent.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialogcontent.ts ***!
  \******************************************************************/
/*! exports provided: DynamicDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogContent", function() { return DynamicDialogContent; });
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

var DynamicDialogContent = /** @class */ (function () {
    function DynamicDialogContent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    DynamicDialogContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pDynamicDialogContent]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], DynamicDialogContent);
    return DynamicDialogContent;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-confirmdialog-confirmdialogdemo-module~components-dynamicdialog-dynamicdialogdemo~45f858cf.js.map