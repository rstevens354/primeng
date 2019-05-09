(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~7d432c56"],{

/***/ "./src/app/components/codehighlighter/codehighlighter.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/codehighlighter/codehighlighter.ts ***!
  \***************************************************************/
/*! exports provided: CodeHighlighter, CodeHighlighterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function() { return CodeHighlighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function() { return CodeHighlighterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeHighlighter = /** @class */ (function () {
    function CodeHighlighter(el) {
        this.el = el;
    }
    CodeHighlighter.prototype.ngAfterViewInit = function () {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
        }
    };
    CodeHighlighter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pCode]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CodeHighlighter);
    return CodeHighlighter;
}());

var CodeHighlighterModule = /** @class */ (function () {
    function CodeHighlighterModule() {
    }
    CodeHighlighterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [CodeHighlighter],
            declarations: [CodeHighlighter]
        })
    ], CodeHighlighterModule);
    return CodeHighlighterModule;
}());



/***/ }),

/***/ "./src/app/components/tabview/tabview.ts":
/*!***********************************************!*\
  !*** ./src/app/components/tabview/tabview.ts ***!
  \***********************************************/
/*! exports provided: TabViewNav, TabPanel, TabView, TabViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewNav", function() { return TabViewNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return TabView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewModule", function() { return TabViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip/tooltip */ "./src/app/components/tooltip/tooltip.ts");
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
var TabViewNav = /** @class */ (function () {
    function TabViewNav() {
        this.orientation = 'top';
        this.onTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTabCloseClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TabViewNav.prototype.getDefaultHeaderClass = function (tab) {
        var styleClass = 'ui-state-default ui-corner-' + this.orientation;
        if (tab.headerStyleClass) {
            styleClass = styleClass + " " + tab.headerStyleClass;
        }
        return styleClass;
    };
    TabViewNav.prototype.clickTab = function (event, tab) {
        this.onTabClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    TabViewNav.prototype.clickClose = function (event, tab) {
        this.onTabCloseClick.emit({
            originalEvent: event,
            tab: tab
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabViewNav.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabViewNav.prototype, "orientation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TabViewNav.prototype, "onTabClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TabViewNav.prototype, "onTabCloseClick", void 0);
    TabViewNav = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[p-tabViewNav]',
            host: {
                '[class.ui-tabview-nav]': 'true',
                '[class.ui-helper-reset]': 'true',
                '[class.ui-helper-clearfix]': 'true',
                '[class.ui-widget-header]': 'true',
                '[class.ui-corner-all]': 'true'
            },
            template: "\n        <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n            <li [class]=\"getDefaultHeaderClass(tab)\" [ngStyle]=\"tab.headerStyle\" role=\"presentation\"\n                [ngClass]=\"{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-disabled': tab.disabled}\"\n                (click)=\"clickTab($event,tab)\" *ngIf=\"!tab.closed\" tabindex=\"0\" (keydown.enter)=\"clickTab($event,tab)\">\n                <a [attr.id]=\"tab.id + '-label'\" role=\"tab\" [attr.aria-selected]=\"tab.selected\" [attr.aria-controls]=\"tab.id\" [pTooltip]=\"tab.tooltip\" [tooltipPosition]=\"orientation\">\n                    <ng-container *ngIf=\"!tab.headerTemplate\" >\n                        <span class=\"ui-tabview-left-icon\" [ngClass]=\"tab.leftIcon\" *ngIf=\"tab.leftIcon\"></span>\n                        <span class=\"ui-tabview-title\">{{tab.header}}</span>\n                        <span class=\"ui-tabview-right-icon\" [ngClass]=\"tab.rightIcon\" *ngIf=\"tab.rightIcon\"></span>\n                    </ng-container>\n                    <ng-container *ngIf=\"tab.headerTemplate\">\n                        <ng-container *ngTemplateOutlet=\"tab.headerTemplate\"></ng-container>\n                    </ng-container>\n                </a>\n                <span *ngIf=\"tab.closable\" class=\"ui-tabview-close pi pi-times\" (click)=\"clickClose($event,tab)\"></span>\n            </li>\n        </ng-template>\n    ",
        })
    ], TabViewNav);
    return TabViewNav;
}());

var TabPanel = /** @class */ (function () {
    function TabPanel(viewContainer) {
        this.viewContainer = viewContainer;
        this.cache = true;
        this.id = "ui-tabpanel-" + idx++;
    }
    TabPanel.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                default:
                    _this.contentTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(TabPanel.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            this.loaded = true;
        },
        enumerable: true,
        configurable: true
    });
    TabPanel.prototype.ngOnDestroy = function () {
        this.view = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabPanel.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabPanel.prototype, "closable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabPanel.prototype, "headerStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "headerStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "leftIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabPanel.prototype, "rightIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabPanel.prototype, "cache", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabPanel.prototype, "tooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabPanel.prototype, "templates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TabPanel.prototype, "selected", null);
    TabPanel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-tabPanel',
            template: "\n        <div [attr.id]=\"id\" class=\"ui-tabview-panel ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': !selected}\"\n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"id + '-label'\" *ngIf=\"!closed\">\n            <ng-content></ng-content>\n            <ng-container *ngIf=\"contentTemplate && (cache ? loaded : selected)\">\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </ng-container>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], TabPanel);
    return TabPanel;
}());

var TabView = /** @class */ (function () {
    function TabView(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TabView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initTabs();
        this.tabPanels.changes.subscribe(function (_) {
            _this.initTabs();
        });
    };
    TabView.prototype.initTabs = function () {
        this.tabs = this.tabPanels.toArray();
        var selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
        }
    };
    TabView.prototype.open = function (event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            var selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            tab.selected = true;
            var selectedTabIndex = this.findTabIndex(tab);
            this.preventActiveIndexPropagation = true;
            this.activeIndexChange.emit(selectedTabIndex);
            this.onChange.emit({ originalEvent: event, index: selectedTabIndex });
        }
        if (event) {
            event.preventDefault();
        }
    };
    TabView.prototype.close = function (event, tab) {
        var _this = this;
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: function () {
                    _this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    };
    TabView.prototype.closeTab = function (tab) {
        if (tab.disabled) {
            return;
        }
        if (tab.selected) {
            tab.selected = false;
            for (var i = 0; i < this.tabs.length; i++) {
                var tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    };
    TabView.prototype.findSelectedTab = function () {
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    };
    TabView.prototype.findTabIndex = function (tab) {
        var index = -1;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    };
    TabView.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Object.defineProperty(TabView.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (val) {
            this._activeIndex = val;
            if (this.preventActiveIndexPropagation) {
                this.preventActiveIndexPropagation = false;
                return;
            }
            if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
                this.findSelectedTab().selected = false;
                this.tabs[this._activeIndex].selected = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabView.prototype, "orientation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabView.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabView.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabView.prototype, "controlClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(TabPanel),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabView.prototype, "tabPanels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TabView.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TabView.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TabView.prototype, "activeIndexChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TabView.prototype, "activeIndex", null);
    TabView = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-tabView',
            template: "\n        <div [ngClass]=\"'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation!='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n            <div class=\"ui-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation=='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n        </div>\n    ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TabView);
    return TabView;
}());

var TabViewModule = /** @class */ (function () {
    function TabViewModule() {
    }
    TabViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"]],
            exports: [TabView, TabPanel, TabViewNav, _common_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [TabView, TabPanel, TabViewNav]
        })
    ], TabViewModule);
    return TabViewModule;
}());



/***/ }),

/***/ "./src/app/components/tooltip/tooltip.ts":
/*!***********************************************!*\
  !*** ./src/app/components/tooltip/tooltip.ts ***!
  \***********************************************/
/*! exports provided: Tooltip, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
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



var Tooltip = /** @class */ (function () {
    function Tooltip(el, zone) {
        this.el = el;
        this.zone = zone;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
        this.appendTo = 'body';
        this.tooltipZIndex = 'auto';
        this.escape = true;
    }
    Tooltip.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.tooltipEvent === 'hover') {
                _this.mouseEnterListener = _this.onMouseEnter.bind(_this);
                _this.mouseLeaveListener = _this.onMouseLeave.bind(_this);
                _this.clickListener = _this.onClick.bind(_this);
                _this.el.nativeElement.addEventListener('mouseenter', _this.mouseEnterListener);
                _this.el.nativeElement.addEventListener('mouseleave', _this.mouseLeaveListener);
                _this.el.nativeElement.addEventListener('click', _this.clickListener);
            }
            else if (_this.tooltipEvent === 'focus') {
                _this.focusListener = _this.onFocus.bind(_this);
                _this.blurListener = _this.onBlur.bind(_this);
                _this.el.nativeElement.addEventListener('focus', _this.focusListener);
                _this.el.nativeElement.addEventListener('blur', _this.blurListener);
            }
        });
    };
    Tooltip.prototype.onMouseEnter = function (e) {
        if (!this.container && !this.showTimeout) {
            this.activate();
        }
    };
    Tooltip.prototype.onMouseLeave = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.onFocus = function (e) {
        this.activate();
    };
    Tooltip.prototype.onBlur = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.onClick = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.activate = function () {
        var _this = this;
        this.active = true;
        this.clearHideTimeout();
        if (this.showDelay)
            this.showTimeout = setTimeout(function () { _this.show(); }, this.showDelay);
        else
            this.show();
        if (this.life) {
            var duration = this.showDelay ? this.life + this.showDelay : this.life;
            this.hideTimeout = setTimeout(function () { _this.hide(); }, duration);
        }
    };
    Tooltip.prototype.deactivate = function () {
        var _this = this;
        this.active = false;
        this.clearShowTimeout();
        if (this.hideDelay) {
            this.clearHideTimeout(); //life timeout
            this.hideTimeout = setTimeout(function () { _this.hide(); }, this.hideDelay);
        }
        else {
            this.hide();
        }
    };
    Object.defineProperty(Tooltip.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (this.active) {
                if (this._text) {
                    if (this.container && this.container.offsetParent)
                        this.updateText();
                    else
                        this.show();
                }
                else {
                    this.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.create = function () {
        this.container = document.createElement('div');
        var tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        this.tooltipText = document.createElement('div');
        this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        this.updateText();
        if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
        }
        this.container.appendChild(this.tooltipText);
        if (this.appendTo === 'body')
            document.body.appendChild(this.container);
        else if (this.appendTo === 'target')
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.el.nativeElement);
        else
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.appendTo);
        this.container.style.display = 'inline-block';
    };
    Tooltip.prototype.show = function () {
        if (!this.text || this.disabled) {
            return;
        }
        this.create();
        this.align();
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].fadeIn(this.container, 250);
        if (this.tooltipZIndex === 'auto')
            this.container.style.zIndex = ++_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].zindex;
        else
            this.container.style.zIndex = this.tooltipZIndex;
        this.bindDocumentResizeListener();
    };
    Tooltip.prototype.hide = function () {
        this.remove();
    };
    Tooltip.prototype.updateText = function () {
        if (this.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this._text));
        }
        else {
            this.tooltipText.innerHTML = this._text;
        }
    };
    Tooltip.prototype.align = function () {
        var position = this.tooltipPosition;
        switch (position) {
            case 'top':
                this.alignTop();
                if (this.isOutOfBounds()) {
                    this.alignBottom();
                    if (this.isOutOfBounds()) {
                        this.alignRight();
                        if (this.isOutOfBounds()) {
                            this.alignLeft();
                        }
                    }
                }
                break;
            case 'bottom':
                this.alignBottom();
                if (this.isOutOfBounds()) {
                    this.alignTop();
                    if (this.isOutOfBounds()) {
                        this.alignRight();
                        if (this.isOutOfBounds()) {
                            this.alignLeft();
                        }
                    }
                }
                break;
            case 'left':
                this.alignLeft();
                if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
            case 'right':
                this.alignRight();
                if (this.isOutOfBounds()) {
                    this.alignLeft();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
        }
    };
    Tooltip.prototype.getHostOffset = function () {
        if (this.appendTo === 'body' || this.appendTo === 'target') {
            var offset = this.el.nativeElement.getBoundingClientRect();
            var targetLeft = offset.left + _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollLeft();
            var targetTop = offset.top + _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollTop();
            return { left: targetLeft, top: targetTop };
        }
        else {
            return { left: 0, top: 0 };
        }
    };
    Tooltip.prototype.alignRight = function () {
        this.preAlign('right');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement);
        var top = hostOffset.top + (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignLeft = function () {
        this.preAlign('left');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left - _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
        var top = hostOffset.top + (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignTop = function () {
        this.preAlign('top');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
        var top = hostOffset.top - _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignBottom = function () {
        this.preAlign('bottom');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
        var top = hostOffset.top + _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.preAlign = function (position) {
        this.container.style.left = -999 + 'px';
        this.container.style.top = -999 + 'px';
        var defaultClassName = 'ui-tooltip ui-widget ui-tooltip-' + position;
        this.container.className = this.tooltipStyleClass ? defaultClassName + ' ' + this.tooltipStyleClass : defaultClassName;
    };
    Tooltip.prototype.isOutOfBounds = function () {
        var offset = this.container.getBoundingClientRect();
        var targetTop = offset.top;
        var targetLeft = offset.left;
        var width = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
        var height = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
        var viewport = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getViewport();
        return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
    };
    Tooltip.prototype.onWindowResize = function (e) {
        this.hide();
    };
    Tooltip.prototype.bindDocumentResizeListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.resizeListener = _this.onWindowResize.bind(_this);
            window.addEventListener('resize', _this.resizeListener);
        });
    };
    Tooltip.prototype.unbindDocumentResizeListener = function () {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    };
    Tooltip.prototype.unbindEvents = function () {
        if (this.tooltipEvent === 'hover') {
            this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
            this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
            this.el.nativeElement.removeEventListener('click', this.clickListener);
        }
        else if (this.tooltipEvent === 'focus') {
            this.el.nativeElement.removeEventListener('focus', this.focusListener);
            this.el.nativeElement.removeEventListener('blur', this.blurListener);
        }
        this.unbindDocumentResizeListener();
    };
    Tooltip.prototype.remove = function () {
        if (this.container && this.container.parentElement) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.container);
            else if (this.appendTo === 'target')
                this.el.nativeElement.removeChild(this.container);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeChild(this.container, this.appendTo);
        }
        this.unbindDocumentResizeListener();
        this.clearTimeouts();
        this.container = null;
    };
    Tooltip.prototype.clearShowTimeout = function () {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = null;
        }
    };
    Tooltip.prototype.clearHideTimeout = function () {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    };
    Tooltip.prototype.clearTimeouts = function () {
        this.clearShowTimeout();
        this.clearHideTimeout();
    };
    Tooltip.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.remove();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Tooltip.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "positionStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tooltipDisabled"),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "escape", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "showDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "hideDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "life", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pTooltip'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Tooltip.prototype, "text", null);
    Tooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pTooltip]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], Tooltip);
    return Tooltip;
}());

var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Tooltip],
            declarations: [Tooltip]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~7d432c56.js.map