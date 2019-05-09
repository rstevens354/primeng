(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dragdrop-dragdropdemo-module"],{

/***/ "./src/app/components/dragdrop/dragdrop.ts":
/*!*************************************************!*\
  !*** ./src/app/components/dragdrop/dragdrop.ts ***!
  \*************************************************/
/*! exports provided: Draggable, Droppable, DragDropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return Droppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Draggable = /** @class */ (function () {
    function Draggable(el, zone) {
        this.el = el;
        this.zone = zone;
        this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Draggable.prototype.ngAfterViewInit = function () {
        if (!this.pDraggableDisabled) {
            this.el.nativeElement.draggable = true;
            this.bindMouseListeners();
        }
    };
    Draggable.prototype.bindDragListener = function () {
        var _this = this;
        if (!this.dragListener) {
            this.zone.runOutsideAngular(function () {
                _this.dragListener = _this.drag.bind(_this);
                _this.el.nativeElement.addEventListener('drag', _this.dragListener);
            });
        }
    };
    Draggable.prototype.unbindDragListener = function () {
        var _this = this;
        if (this.dragListener) {
            this.zone.runOutsideAngular(function () {
                _this.el.nativeElement.removeEventListener('drag', _this.dragListener);
                _this.dragListener = null;
            });
        }
    };
    Draggable.prototype.bindMouseListeners = function () {
        var _this = this;
        if (!this.mouseDownListener && !this.mouseUpListener) {
            this.zone.runOutsideAngular(function () {
                _this.mouseDownListener = _this.mousedown.bind(_this);
                _this.mouseUpListener = _this.mouseup.bind(_this);
                _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
                _this.el.nativeElement.addEventListener('mouseup', _this.mouseUpListener);
            });
        }
    };
    Draggable.prototype.unbindMouseListeners = function () {
        var _this = this;
        if (this.mouseDownListener && this.mouseUpListener) {
            this.zone.runOutsideAngular(function () {
                _this.el.nativeElement.removeEventListener('mousedown', _this.mouseDownListener);
                _this.el.nativeElement.removeEventListener('mouseup', _this.mouseUpListener);
                _this.mouseDownListener = null;
                _this.mouseUpListener = null;
            });
        }
    };
    Draggable.prototype.drag = function (event) {
        this.onDrag.emit(event);
    };
    Draggable.prototype.dragStart = function (event) {
        if (this.allowDrag()) {
            if (this.dragEffect) {
                event.dataTransfer.effectAllowed = this.dragEffect;
            }
            event.dataTransfer.setData('text', this.scope);
            this.onDragStart.emit(event);
            this.bindDragListener();
        }
        else {
            event.preventDefault();
        }
    };
    Draggable.prototype.dragEnd = function (event) {
        this.onDragEnd.emit(event);
        this.unbindDragListener();
    };
    Draggable.prototype.mousedown = function (event) {
        this.handle = event.target;
    };
    Draggable.prototype.mouseup = function (event) {
        this.handle = null;
    };
    Draggable.prototype.allowDrag = function () {
        if (this.dragHandle && this.handle)
            return _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].matches(this.handle, this.dragHandle);
        else
            return true;
    };
    Draggable.prototype.ngOnDestroy = function () {
        this.unbindDragListener();
        this.unbindMouseListeners();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pDraggable'),
        __metadata("design:type", String)
    ], Draggable.prototype, "scope", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Draggable.prototype, "pDraggableDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Draggable.prototype, "dragEffect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Draggable.prototype, "dragHandle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Draggable.prototype, "onDragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Draggable.prototype, "onDragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Draggable.prototype, "onDrag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Draggable.prototype, "dragStart", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Draggable.prototype, "dragEnd", null);
    Draggable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pDraggable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], Draggable);
    return Draggable;
}());

var Droppable = /** @class */ (function () {
    function Droppable(el, zone) {
        this.el = el;
        this.zone = zone;
        this.onDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Droppable.prototype.ngAfterViewInit = function () {
        if (!this.pDroppableDisabled) {
            this.bindDragOverListener();
        }
    };
    Droppable.prototype.bindDragOverListener = function () {
        var _this = this;
        if (!this.dragOverListener) {
            this.zone.runOutsideAngular(function () {
                _this.dragOverListener = _this.dragOver.bind(_this);
                _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            });
        }
    };
    Droppable.prototype.unbindDragOverListener = function () {
        var _this = this;
        if (this.dragOverListener) {
            this.zone.runOutsideAngular(function () {
                _this.el.nativeElement.removeEventListener('dragover', _this.dragOverListener);
                _this.dragOverListener = null;
            });
        }
    };
    Droppable.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    Droppable.prototype.drop = function (event) {
        if (this.allowDrop(event)) {
            event.preventDefault();
            this.onDrop.emit(event);
        }
    };
    Droppable.prototype.dragEnter = function (event) {
        event.preventDefault();
        if (this.dropEffect) {
            event.dataTransfer.dropEffect = this.dropEffect;
        }
        this.onDragEnter.emit(event);
    };
    Droppable.prototype.dragLeave = function (event) {
        event.preventDefault();
        this.onDragLeave.emit(event);
    };
    Droppable.prototype.allowDrop = function (event) {
        var dragScope = event.dataTransfer.getData('text');
        if (typeof (this.scope) == "string" && dragScope == this.scope) {
            return true;
        }
        else if (this.scope instanceof Array) {
            for (var j = 0; j < this.scope.length; j++) {
                if (dragScope == this.scope[j]) {
                    return true;
                }
            }
        }
        return false;
    };
    Droppable.prototype.ngOnDestroy = function () {
        this.unbindDragOverListener();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pDroppable'),
        __metadata("design:type", Object)
    ], Droppable.prototype, "scope", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Droppable.prototype, "pDroppableDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Droppable.prototype, "dropEffect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Droppable.prototype, "onDragEnter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Droppable.prototype, "onDragLeave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Droppable.prototype, "onDrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Droppable.prototype, "drop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Droppable.prototype, "dragEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Droppable.prototype, "dragLeave", null);
    Droppable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pDroppable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], Droppable);
    return Droppable;
}());

var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Draggable, Droppable],
            declarations: [Draggable, Droppable]
        })
    ], DragDropModule);
    return DragDropModule;
}());



/***/ }),

/***/ "./src/app/components/panel/panel.ts":
/*!*******************************************!*\
  !*** ./src/app/components/panel/panel.ts ***!
  \*******************************************/
/*! exports provided: Panel, PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
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




var idx = 0;
var Panel = /** @class */ (function () {
    function Panel(el) {
        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'pi pi-plus';
        this.collapseIcon = 'pi pi-minus';
        this.showHeader = true;
        this.toggler = "icon";
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = "ui-panel-" + idx++;
    }
    Panel.prototype.onHeaderClick = function (event) {
        if (this.toggler === 'header') {
            this.toggle(event);
        }
    };
    Panel.prototype.onIconClick = function (event) {
        if (this.toggler === 'icon') {
            this.toggle(event);
        }
    };
    Panel.prototype.toggle = function (event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        event.preventDefault();
    };
    Panel.prototype.expand = function (event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    };
    Panel.prototype.collapse = function (event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    };
    Panel.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Panel.prototype.onToggleDone = function (event) {
        this.animating = false;
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Panel.prototype, "toggleable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Panel.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Panel.prototype, "collapsed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Panel.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Panel.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Panel.prototype, "expandIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Panel.prototype, "collapseIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Panel.prototype, "showHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Panel.prototype, "toggler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Panel.prototype, "collapsedChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Panel.prototype, "onBeforeToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Panel.prototype, "onAfterToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Panel.prototype, "transitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["Footer"]),
        __metadata("design:type", Object)
    ], Panel.prototype, "footerFacet", void 0);
    Panel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-panel',
            template: "\n        <div [attr.id]=\"id\" [ngClass]=\"'ui-panel ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div [ngClass]=\"{'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all': true, 'ui-panel-titlebar-clickable': (toggleable && toggler === 'header')}\" \n                *ngIf=\"showHeader\" (click)=\"onHeaderClick($event)\">\n                <span class=\"ui-panel-title\" *ngIf=\"header\">{{header}}</span>\n                <ng-content select=\"p-header\"></ng-content>\n                <a *ngIf=\"toggleable\" [attr.id]=\"id + '-label'\" class=\"ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default\" tabindex=\"0\"\n                    (click)=\"onIconClick($event)\" (keydown.enter)=\"onIconClick($event)\" [attr.aria-controls]=\"id + '-content'\" role=\"tab\" [attr.aria-expanded]=\"!collapsed\">\n                    <span [class]=\"collapsed ? expandIcon : collapseIcon\"></span>\n                </a>\n            </div>\n            <div [attr.id]=\"id + '-content'\" class=\"ui-panel-content-wrapper\" [@panelContent]=\"collapsed ? {value: 'hidden', params: {transitionParams: transitionOptions}} : {value: 'visible', params: {transitionParams: transitionOptions}}\" (@panelContent.done)=\"onToggleDone($event)\"\n                [ngClass]=\"{'ui-panel-content-wrapper-overflown': collapsed||animating}\"\n                role=\"region\" [attr.aria-hidden]=\"collapsed\" [attr.aria-labelledby]=\"id + '-label'\">\n                <div class=\"ui-panel-content ui-widget-content\">\n                    <ng-content></ng-content>\n                </div>\n                \n                <div class=\"ui-panel-footer ui-widget-content\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('panelContent', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: '0',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: '*',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Panel);
    return Panel;
}());

var PanelModule = /** @class */ (function () {
    function PanelModule() {
    }
    PanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Panel, _common_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [Panel]
        })
    ], PanelModule);
    return PanelModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DragDropDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDemoRoutingModule", function() { return DragDropDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dragdropdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragdropdemo */ "./src/app/showcase/components/dragdrop/dragdropdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragDropDemoRoutingModule = /** @class */ (function () {
    function DragDropDemoRoutingModule() {
    }
    DragDropDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _dragdropdemo__WEBPACK_IMPORTED_MODULE_2__["DragDropDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DragDropDemoRoutingModule);
    return DragDropDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dragdrop/dragdropdemo.html":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/dragdrop/dragdropdemo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Drag and Drop</span>\r\n        <span>pDraggable and pDroppable directives apply drag-drop behaviors to any element.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Drag Only</h3>\r\n    <div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\">\r\n        <p-panel header=\"Drag Header\">\r\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n        </p-panel>\r\n    </div>\r\n\r\n    <h3>Drag and Drop to Table</h3>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-6 ui-g-nopad drag-column\">\r\n            <ul style=\"margin:0;padding:0\">\r\n                <li *ngFor=\"let car of availableCars\" class=\"ui-helper-clearfix\" pDraggable=\"cars\"\r\n                    (onDragStart)=\"dragStart($event,car)\" (onDragEnd)=\"dragEnd($event)\">\r\n                    <i class=\"fa fa-arrows fa-2x\" style=\"float:right;margin-top:8px\"></i>\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"float:left\" draggable=\"false\">\r\n                    <div style=\"margin:8px 0 0 8px;float:left\">{{car.vin}} - {{car.year}}</div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6 drop-column\" pDroppable=\"cars\" \r\n            (onDrop)=\"drop($event)\" [ngClass]=\"{'ui-highlight-car':draggedCar}\">\r\n            <p-table [value]=\"selectedCars\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Vin</th>\r\n                        <th>Year</th>\r\n                        <th>Brand</th>\r\n                        <th>Color</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-car>\r\n                    <tr>\r\n                        <td>{{car.vin}}</td>\r\n                        <td>{{car.year}}</td>\r\n                        <td>{{car.brand}}</td>\r\n                        <td>{{car.color}}</td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DragDropModule&#125; from 'primeng/dragdrop';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>pDraggable and pDroppable are attached to a target element to add drag-drop behavior. The value of a Directive attribute is required\r\n            and it defines the scope to match draggables with droppables. Droppable scope can also be an array to accept multiple droppables.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDraggable=\"dd\"&gt;Draggable Div&lt;/div&gt;\r\n\r\n&lt;div pDroppable=\"dd\"&gt;Droppable Div&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Drag Handle</h3>\r\n            <p>Drag handle is used to restrict dragging unless mousedown occurs on the specified element. Panel below can only be dragged using its header.</p>\r\n\r\n            <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\"&gt;\r\n    &lt;p-panel header=\"Drag Header\"&gt;\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;/p-panel&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Draggable</h3>\r\n            <h4>Attributes</h4>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>dragEffect</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines the cursor style, valid values are none, copy, move, link, copyMove, copyLink, linkMove and all.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dragHandle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Selector to define the drag handle, by default anywhere on the target element is a drag handle to start dragging.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pDraggableDisabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the element is draggable, useful for conditional cases.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h4>Events</h4>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onDragStart</td>\r\n                            <td>\r\n                                event: browser event\r\n                            </td>\r\n                            <td>Callback to invoke when drag begins.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDrag</td>\r\n                            <td>\r\n                                event: browser event\r\n                            </td>\r\n                            <td>Callback to invoke on dragging.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDragEnd</td>\r\n                            <td>\r\n                                event: browser event\r\n                            </td>\r\n                            <td>Callback to invoke when drag ends.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Droppable</h3>\r\n            <h4>Attributes</h4>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>dropEffect</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines the cursor style on drag over, valid values are copy, relocate, link and move.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pDroppableDisabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the element is droppable, useful for conditional cases.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h4>Events</h4>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onDragEnter</td>\r\n                            <td>\r\n                                event: browser event\r\n                            </td>\r\n                            <td>Callback to invoke when a draggable enters drop area.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDrop</td>\r\n                            <td>\r\n                                event: browser event\r\n                            </td>\r\n                            <td>Callback to invoke when a draggable is dropped onto drop area.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDragLeave</td>\r\n                            <td>\r\n                                event: browser event\r\n                            </td>\r\n                            <td>Callback to invoke when a draggable leave drop area.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>Native HTML5 DragDrop.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dragdrop\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Drag Only&lt;/h3&gt;\r\n&lt;div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\"&gt;\r\n    &lt;p-panel header=\"Drag Header\"&gt;\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;/p-panel&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Drag and Drop to Table&lt;/h3&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 ui-g-nopad drag-column\"&gt;\r\n        &lt;ul style=\"margin:0;padding:0\"&gt;\r\n            &lt;li *ngFor=\"let car of availableCars\" class=\"ui-helper-clearfix\" pDraggable=\"cars\"\r\n                (onDragStart)=\"dragStart($event,car)\" (onDragEnd)=\"dragEnd($event)\"&gt;\r\n                &lt;i class=\"fa fa-arrows fa-2x\" style=\"float:right;margin-top:8px\"&gt;&lt;/i&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\" style=\"float:left\" draggable=\"false\"&gt;\r\n                &lt;div style=\"margin:8px 0 0 8px;float:left\"&gt;&#123;&#123;car.vin&#125;&#125; - &#123;&#123;car.year&#125;&#125;&lt;/div&gt;\r\n            &lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6 drop-column\" pDroppable=\"cars\" \r\n        (onDrop)=\"drop($event)\" [ngClass]=\"&#123;'ui-highlight-car':draggedCar&#125;\"&gt;\r\n        &lt;p-table [value]=\"selectedCars\"&gt;\r\n            &lt;ng-template pTemplate=\"header\"&gt;\r\n                &lt;tr&gt;\r\n                    &lt;th&gt;Vin&lt;/th&gt;\r\n                    &lt;th&gt;Year&lt;/th&gt;\r\n                    &lt;th&gt;Brand&lt;/th&gt;\r\n                    &lt;th&gt;Color&lt;/th&gt;\r\n                &lt;/tr&gt;\r\n            &lt;/ng-template&gt;\r\n            &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n                &lt;tr&gt;\r\n                    &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n                    &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n                &lt;/tr&gt;\r\n            &lt;/ng-template&gt;\r\n        &lt;/p-table&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DragDropDemo &#123;\r\n\r\n    availableCars: Car[];\r\n\r\n    selectedCars: Car[];\r\n\r\n    draggedCar: Car;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.selectedCars = [];\r\n        this.carService.getCarsSmall().then(cars => this.availableCars = cars);\r\n    &#125;\r\n\r\n    dragStart(event,car: Car) &#123;\r\n        this.draggedCar = car;\r\n    &#125;\r\n\r\n    drop(event) &#123;\r\n        if(this.draggedCar) &#123;\r\n            let draggedCarIndex = this.findIndex(this.draggedCar);\r\n            this.selectedCars = [...this.selectedCars, this.draggedCar];\r\n            this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);\r\n            this.draggedCar = null;\r\n        &#125;\r\n    &#125;\r\n\r\n    dragEnd(event) &#123;\r\n        this.draggedCar = null;\r\n    &#125;\r\n\r\n    findIndex(car: Car) &#123;\r\n        let index = -1;\r\n        for(let i = 0; i < this.availableCars.length; i++) &#123;\r\n            if(car.vin === this.availableCars[i].vin) &#123;\r\n                index = i;\r\n                break;\r\n            &#125;\r\n        &#125;\r\n        return index;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/dragdrop/dragdropdemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/dragdrop/dragdropdemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: DragDropDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDemoModule", function() { return DragDropDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dragdropdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragdropdemo */ "./src/app/showcase/components/dragdrop/dragdropdemo.ts");
/* harmony import */ var _dragdropdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dragdropdemo-routing.module */ "./src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts");
/* harmony import */ var _components_dragdrop_dragdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dragdrop/dragdrop */ "./src/app/components/dragdrop/dragdrop.ts");
/* harmony import */ var _components_panel_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/panel/panel */ "./src/app/components/panel/panel.ts");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DragDropDemoModule = /** @class */ (function () {
    function DragDropDemoModule() {
    }
    DragDropDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dragdropdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["DragDropDemoRoutingModule"],
                _components_dragdrop_dragdrop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _components_panel_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
                _components_table_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _dragdropdemo__WEBPACK_IMPORTED_MODULE_2__["DragDropDemo"]
            ]
        })
    ], DragDropDemoModule);
    return DragDropDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dragdrop/dragdropdemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/dragdrop/dragdropdemo.ts ***!
  \**************************************************************/
/*! exports provided: DragDropDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDemo", function() { return DragDropDemo; });
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


var DragDropDemo = /** @class */ (function () {
    function DragDropDemo(carService) {
        this.carService = carService;
    }
    DragDropDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.availableCars = cars; });
    };
    DragDropDemo.prototype.dragStart = function (event, car) {
        this.draggedCar = car;
    };
    DragDropDemo.prototype.drop = function (event) {
        if (this.draggedCar) {
            var draggedCarIndex_1 = this.findIndex(this.draggedCar);
            this.selectedCars = this.selectedCars.concat([this.draggedCar]);
            this.availableCars = this.availableCars.filter(function (val, i) { return i != draggedCarIndex_1; });
            this.draggedCar = null;
        }
    };
    DragDropDemo.prototype.dragEnd = function (event) {
        this.draggedCar = null;
    };
    DragDropDemo.prototype.findIndex = function (car) {
        var index = -1;
        for (var i = 0; i < this.availableCars.length; i++) {
            if (car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    };
    DragDropDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dragdropdemo.html */ "./src/app/showcase/components/dragdrop/dragdropdemo.html"),
            styles: ["\n        :host ::ng-deep .drag-column {\n            padding-right: .5em;\n        }\n\n        :host ::ng-deep .drop-column {\n            border: 1px solid #c8c8c8;\n            background-color: #ffffff;\n        }\n\n        .ui-g li {\n            list-style-type: none;\n            padding: 10px;\n            margin-bottom: 5px;\n            border: 1px solid #c8c8c8;\n            background-color: #ffffff;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DragDropDemo);
    return DragDropDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-dragdrop-dragdropdemo-module.js.map