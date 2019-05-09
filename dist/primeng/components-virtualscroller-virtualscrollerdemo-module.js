(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-virtualscroller-virtualscrollerdemo-module"],{

/***/ "./src/app/components/virtualscroller/virtualscroller.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/virtualscroller/virtualscroller.ts ***!
  \***************************************************************/
/*! exports provided: VirtualScroller, VirtualScrollerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScroller", function() { return VirtualScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollerModule", function() { return VirtualScrollerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VirtualScroller = /** @class */ (function () {
    function VirtualScroller(el) {
        this.el = el;
        this.cache = true;
        this.first = 0;
        this.trackBy = function (index, item) { return item; };
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._totalRecords = 0;
        this.lazyValue = [];
        this.page = 0;
    }
    Object.defineProperty(VirtualScroller.prototype, "totalRecords", {
        get: function () {
            return this._totalRecords;
        },
        set: function (val) {
            this._totalRecords = val;
            this.lazyValue = Array.from({ length: this._totalRecords });
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
            this.first = 0;
            this.scrollTo(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScroller.prototype, "value", {
        get: function () {
            return this.lazy ? this.lazyValue : this._value;
        },
        set: function (val) {
            if (this.lazy) {
                if (val) {
                    var arr = this.cache ? this.lazyValue.slice() : Array.from({ length: this._totalRecords });
                    for (var i = this.first, j = 0; i < (this.first + this.rows); i++, j++) {
                        arr[i] = val[j];
                    }
                    this.lazyValue = arr;
                }
            }
            else {
                this._value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    VirtualScroller.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                case 'loadingItem':
                    _this.loadingItemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    VirtualScroller.prototype.onScrollIndexChange = function (index) {
        var p = Math.floor(index / this.rows);
        if (p !== this.page) {
            this.page = p;
            this.first = this.page * this.rows;
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
    };
    VirtualScroller.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.rows
        };
    };
    VirtualScroller.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    VirtualScroller.prototype.scrollTo = function (index) {
        if (this.viewPortViewChild && this.viewPortViewChild['elementRef'] && this.viewPortViewChild['elementRef'].nativeElement) {
            this.viewPortViewChild['elementRef'].nativeElement.scrollTop = index * this.itemSize;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], VirtualScroller.prototype, "itemSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VirtualScroller.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VirtualScroller.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VirtualScroller.prototype, "scrollHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VirtualScroller.prototype, "lazy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], VirtualScroller.prototype, "cache", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], VirtualScroller.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], VirtualScroller.prototype, "first", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], VirtualScroller.prototype, "trackBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["Header"]),
        __metadata("design:type", Object)
    ], VirtualScroller.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["Footer"]),
        __metadata("design:type", Object)
    ], VirtualScroller.prototype, "footer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], VirtualScroller.prototype, "templates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewport'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VirtualScroller.prototype, "viewPortViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VirtualScroller.prototype, "onLazyLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], VirtualScroller.prototype, "totalRecords", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], VirtualScroller.prototype, "value", null);
    VirtualScroller = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-virtualScroller',
            template: "\n        <div [ngClass]=\"'ui-virtualscroller ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-virtualscroller-header ui-widget-header ui-corner-top\" *ngIf=\"header\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div #content class=\"ui-virtualscroller-content ui-widget-content\">\n                <ul class=\"ui-virtualscroller-list\">\n                    <cdk-virtual-scroll-viewport #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" (scrolledIndexChange)=\"onScrollIndexChange($event)\">\n                        <ng-container *cdkVirtualFor=\"let item of value; trackBy: trackBy; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd; \">\n                            <li [ngStyle]=\"{'height': itemSize + 'px'}\">\n                                <ng-container *ngTemplateOutlet=\"item ? itemTemplate : loadingItemTemplate; context: {$implicit: item, index: i, count: c, first: f, last: l, even: e, odd: o}\"></ng-container>\n                            </li>\n                        </ng-container>\n                    </cdk-virtual-scroll-viewport>\n                </ul>\n            </div>\n            <div class=\"ui-virtualscroller-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], VirtualScroller);
    return VirtualScroller;
}());

var VirtualScrollerModule = /** @class */ (function () {
    function VirtualScrollerModule() {
    }
    VirtualScrollerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]],
            exports: [VirtualScroller, _common_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]],
            declarations: [VirtualScroller]
        })
    ], VirtualScrollerModule);
    return VirtualScrollerModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/components/virtualscroller/virtualscrollerdemo-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: VirtualScrollerDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollerDemoRoutingModule", function() { return VirtualScrollerDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtualscrollerdemo */ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VirtualScrollerDemoRoutingModule = /** @class */ (function () {
    function VirtualScrollerDemoRoutingModule() {
    }
    VirtualScrollerDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollerDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], VirtualScrollerDemoRoutingModule);
    return VirtualScrollerDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.html":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/virtualscroller/virtualscrollerdemo.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">VirtualScroller</span>\r\n        <span>VirtualScroller is an efficient way of rendering lists by displaying a small subset of data in the viewport at any time.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Lazy Loading</h3>\r\n    <p-virtualScroller [value]=\"lazyCars\" scrollHeight=\"500px\" [itemSize]=\"150\" [rows]=\"100\" [cache]=\"false\" \r\n            [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [totalRecords]=\"totalLazyCarsLength\">\r\n        <p-header>\r\n            List of Cars\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"item\" let-i=\"index\">\r\n            <div class=\"ui-g car-item\">\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div style=\"font-size: 24px; text-align: center; padding-top: 48px\">{{i}}</div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car?.brand}}.png\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-8\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.vin}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.year}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.brand}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.color}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-car pTemplate=\"loadingItem\">\r\n            <div class=\"ui-g car-item empty-car-item\">\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"empty-car-item-index\"></div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"empty-car-item-image\"></div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-8\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12\"><div class=\"empty-car-item-text\"></div></div>\r\n                        <div class=\"ui-g-12\"><div class=\"empty-car-item-text\"></div></div>\r\n                        <div class=\"ui-g-12\"><div class=\"empty-car-item-text\"></div></div>\r\n                        <div class=\"ui-g-12\"><div class=\"empty-car-item-text\"></div></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-virtualScroller>\r\n\r\n    <h3>Prepopulated List</h3>\r\n    <p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"150\">\r\n        <p-header>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-6 sort-container\">\r\n                    <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange()\" [style]=\"{'min-width':'140px'}\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-6 title-container\">\r\n                    List of Cars\r\n                </div>\r\n            </div>\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"item\" let-i=\"index\">\r\n            <div class=\"ui-g car-item\">\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div style=\"font-size: 24px; text-align: center; padding-top: 48px\">{{i}}</div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car?.brand}}.png\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-8\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.vin}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.year}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.brand}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car?.color}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-virtualScroller>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>CDK</h3>\r\n            <p>VirtualScrolling depends on @angular/cdk's ScrollingModule so begin with installing CDK if not already installed.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install @angular/cdk --save\r\n</code>\r\n</pre>\r\n\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;VirtualScrollerModule&#125; from 'primeng/virtualscroller';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>VirtualScroller requires a collection of items as its value, height of an item size, height of the scrollable viewport and a ng-template to display\r\n                    where each item can be accessed using the implicit variable.</p>\r\n\r\n            <p>Throughout the samples, a car interface having vin, brand, year and color properties are used\r\n                to define an object to be displayed by the VirtualScroller. Cars are loaded by a CarService that\r\n                connects to a server to fetch the cars with a Promise. Note that this is for demo purposes only, \r\n                any data source such as an Observable can be used as an alternative as well.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport interface Car &#123;\r\n    vin;\r\n    year;\r\n    brand;\r\n    color;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123; HttpClient &#125; from '@angular/common/http';\r\nimport &#123; Injectable &#125; from '@angular/core';\r\n\r\nimport &#123; Car &#125; from '../domain/car';\r\n\r\n@Injectable()\r\nexport class CarService &#123;\r\n\r\n    constructor(private http: HttpClient) &#123;&#125;\r\n\r\n    getCarsSmall() &#123;\r\n        return this.http.get('/showcase/resources/data/cars-small.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;Car[]&gt; res.data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Here is a sample VirtualScroller that displays a list of cars loaded from a remote datasource.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class VirtualScrollerDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"150\"&gt;\r\n    &lt;ng-template pTemplate=\"item\" let-car&gt;\r\n        Car content\r\n    &lt;/ng-template&gt;\r\n&lt;/p-virtualScroller&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Sections</h3>\r\n            <p>Header and Footer are the two sections that are capable of displaying custom content.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"150\"&gt;\r\n    &lt;p-header&gt;Header Content&lt;/p-header&gt;\r\n    &lt;p-footer&gt;Footer Content&lt;/p-footer&gt;\r\n    &lt;ng-template pTemplate=\"item\" let-car&gt;\r\n        Car content\r\n    &lt;/ng-template&gt;\r\n&lt;/p-virtualScroller&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy mode is handy to deal with large datasets where instead of loading the entire data, small chunks of data are loaded on demand by invoking\r\n             onLazyLoad callback everytime scrolling requires a new chunk. To implement lazy loading,\r\n            enable lazy attribute, initialize the number of logical rows with a query and finally implement a method callback using onLazyLoad that actually loads a chunk from a datasource. onLazyLoad gets an event object\r\n            that contains information about the chunk of data to load such as the index and number of items to load. Notice that a new template called loadingItem is also required to display as a placeholder while the new items are being loaded.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-virtualScroller [value]=\"lazyCars\" scrollHeight=\"500px\" [itemSize]=\"150\" [rows]=\"100\" [cache]=\"false\" \r\n    [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [totalRecords]=\"totalLazyCarsLength\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        Car content\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"loadingItem\"&gt;\r\n        Loading...\r\n    &lt;/ng-template&gt;\r\n&lt;/p-virtualScroller&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadData(event) &#123;\r\n    //event.first = First row offset\r\n    //event.rows = Number of rows per page\r\n    //this.lazyCars = load new chunk between first index and (first + rows) last index\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>itemSize</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Height of an item in the list.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to display per page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>first</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the first row to be displayed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of total records, defaults to length of value when not defined.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Max height of the content area in inline mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>trackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onLazyLoad</td>\r\n                            <td>event.first = First row offset <br>\r\n                                event.rows = Number of rows per page <br></td>\r\n                            <td>Callback to invoke in lazy mode to load new data.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>scrollTo</td>\r\n                            <td>index: Index of the item</td>\r\n                            <td>Scrolls to the item with the given index.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-virtualscroller</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-virtualscroller-header</td>\r\n                            <td>Header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-virtualscroller-footer</td>\r\n                            <td>Footer section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-virtualscroller-content</td>\r\n                            <td>Content section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-virtualscroller-list</td>\r\n                            <td>List element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>Angular CDK.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/virtualscroller\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Lazy Loading&lt;/h3&gt;\r\n&lt;p-virtualScroller [value]=\"lazyCars\" scrollHeight=\"500px\" [itemSize]=\"150\" [rows]=\"100\" [cache]=\"false\" \r\n        [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [totalRecords]=\"totalLazyCarsLength\"&gt;\r\n    &lt;p-header&gt;\r\n        List of Cars\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\" let-i=\"index\"&gt;\r\n        &lt;div class=\"ui-g car-item\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n                &lt;div style=\"font-size: 24px; text-align: center; padding-top: 48px\"&gt;&#123;&#123;i&#125;&#125;&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car?.brand&#125;&#125;.png\"&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-8\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.vin&#125;&#125;&lt;/div&gt;\r\n        \r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.year&#125;&#125;&lt;/div&gt;\r\n        \r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.brand&#125;&#125;&lt;/div&gt;\r\n        \r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.color&#125;&#125;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car pTemplate=\"loadingItem\"&gt;\r\n        &lt;div class=\"ui-g car-item empty-car-item\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n                &lt;div class=\"empty-car-item-index\"&gt;&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n                &lt;div class=\"empty-car-item-image\"&gt;&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-8\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-12\"&gt;&lt;div class=\"empty-car-item-text\"&gt;&lt;/div&gt;&lt;/div&gt;\r\n                    &lt;div class=\"ui-g-12\"&gt;&lt;div class=\"empty-car-item-text\"&gt;&lt;/div&gt;&lt;/div&gt;\r\n                    &lt;div class=\"ui-g-12\"&gt;&lt;div class=\"empty-car-item-text\"&gt;&lt;/div&gt;&lt;/div&gt;\r\n                    &lt;div class=\"ui-g-12\"&gt;&lt;div class=\"empty-car-item-text\"&gt;&lt;/div&gt;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-virtualScroller&gt;\r\n\r\n&lt;h3&gt;Prepopulated List&lt;/h3&gt;\r\n&lt;p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"150\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;div class=\"ui-g\"&gt;\r\n            &lt;div class=\"ui-g-6 sort-container\"&gt;\r\n                &lt;p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange()\" [style]=\"&#123;'min-width':'140px'&#125;\"&gt;&lt;/p-dropdown&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-6 title-container\"&gt;\r\n                List of Cars\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\" let-i=\"index\"&gt;\r\n        &lt;div class=\"ui-g car-item\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n                &lt;div style=\"font-size: 24px; text-align: center; padding-top: 48px\"&gt;&#123;&#123;i&#125;&#125;&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car?.brand&#125;&#125;.png\"&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-8\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.vin&#125;&#125;&lt;/div&gt;\r\n        \r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.year&#125;&#125;&lt;/div&gt;\r\n        \r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.brand&#125;&#125;&lt;/div&gt;\r\n        \r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car?.color&#125;&#125;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-virtualScroller&gt;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './virtualscrollerdemo.html',\r\n    styles: [`\r\n        .car-item .ui-md-3 &#123;\r\n            text-align: center;\r\n        &#125;\r\n        \r\n        .car-item .ui-g-10 &#123;\r\n            font-weight: bold;\r\n        &#125;\r\n\r\n        .empty-car-item-index &#123;\r\n            background-color: #f1f1f1;\r\n            width: 60px;\r\n            height: 60px;\r\n            margin: 36px auto 0 auto;\r\n            animation: pulse 1s infinite ease-in-out;\r\n        &#125;\r\n\r\n        .empty-car-item-image &#123;\r\n            background-color: #f1f1f1;\r\n            width: 120px;\r\n            height: 120px;\r\n            animation: pulse 1s infinite ease-in-out;\r\n        &#125;\r\n\r\n        .empty-car-item-text &#123;\r\n            background-color: #f1f1f1;\r\n            height: 18px;\r\n            animation: pulse 1s infinite ease-in-out;\r\n        &#125;\r\n\r\n        .title-container &#123;\r\n            padding: 1em;\r\n            text-align: right;\r\n        &#125;\r\n\r\n        .sort-container &#123;\r\n            text-align: left;\r\n        &#125;\r\n\r\n        @media (max-width: 40em) &#123;\r\n            .car-item &#123;\r\n                text-align: center;\r\n            &#125;\r\n        &#125;\r\n    `]\r\n&#125;)\r\nexport class VirtualScrollerDemo implements OnInit &#123;\r\n\r\n    cars: Car[] = [];\r\n\r\n    lazyCars: Car[];\r\n    \r\n    brands: string[];\r\n\r\n    colors: string[];\r\n\r\n    totalLazyCarsLength: number;\r\n\r\n    timeout: any;\r\n\r\n    sortKey: string;\r\n\r\n    sortOptions: SelectItem[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.brands = [\r\n            'Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'\r\n        ];\r\n\r\n        this.colors = [\r\n            'Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'\r\n        ];\r\n\r\n        for (let i = 0; i &lt; 10000; i++) &#123;\r\n            this.cars.push(this.generateCar());\r\n        &#125;\r\n\r\n        //in a real application, make a remote request to retrieve the number of records only, not the actual records\r\n        this.totalLazyCarsLength = 10000;\r\n\r\n        this.sortOptions = [\r\n            &#123;label: 'Newest First', value: '!year'&#125;,\r\n            &#123;label: 'Oldest First', value: 'year'&#125;\r\n        ];\r\n    &#125;\r\n\r\n    generateCar(): Car &#123;\r\n        return &#123;\r\n            vin: this.generateVin(),\r\n            brand: this.generateBrand(),\r\n            color: this.generateColor(),\r\n            year: this.generateYear()\r\n        &#125;\r\n    &#125;\r\n\r\n    generateVin() &#123;\r\n        let text = \"\";\r\n        let possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\r\n        \r\n        for (var i = 0; i &lt; 5; i++) &#123;\r\n            text += possible.charAt(Math.floor(Math.random() * possible.length));\r\n        &#125;\r\n        \r\n        return text;\r\n    &#125;\r\n\r\n    generateBrand() &#123;\r\n        return this.brands[Math.floor(Math.random() * Math.floor(10))];\r\n    &#125;\r\n\r\n    generateColor() &#123;\r\n        return this.colors[Math.floor(Math.random() * Math.floor(7))];\r\n    &#125;\r\n\r\n    generateYear() &#123;\r\n        return 2000 + Math.floor(Math.random() * Math.floor(19));\r\n    &#125;\r\n\r\n    loadCarsLazy(event: LazyLoadEvent) &#123;\r\n        //in a real application, make a remote request to load data using state metadata from event\r\n        //event.first = First row offset\r\n        //event.rows = Number of rows per page\r\n\r\n        //imitate db connection over a network\r\n        if (this.timeout) &#123;\r\n            clearTimeout(this.timeout);\r\n        &#125;\r\n        \r\n        this.timeout = setTimeout(() => &#123;\r\n            this.lazyCars = [];\r\n            if (this.cars) &#123;\r\n                this.lazyCars = this.cars.slice(event.first, (event.first + event.rows));\r\n            &#125;\r\n        &#125;, 1000);\r\n    &#125;\r\n\r\n    onSortChange() &#123;\r\n        if (this.sortKey.indexOf('!') === 0)\r\n            this.sort(-1);\r\n        else\r\n            this.sort(1);\r\n    &#125;\r\n\r\n    sort(order: number): void &#123;\r\n        let cars = [...this.cars];\r\n        cars.sort((data1, data2) => &#123;\r\n            let value1 = data1.year;\r\n            let value2 = data2.year;\r\n            let result = (value1 &lt; value2) ? -1 : (value1 > value2) ? 1 : 0;\r\n\r\n            return (order * result);\r\n        &#125;);\r\n\r\n        this.cars = cars;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/virtualscroller/virtualscrollerdemo.module.ts ***!
  \***********************************************************************************/
/*! exports provided: VirtualScrollerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollerDemoModule", function() { return VirtualScrollerDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtualscrollerdemo */ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts");
/* harmony import */ var _virtualscrollerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./virtualscrollerdemo-routing.module */ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo-routing.module.ts");
/* harmony import */ var _components_virtualscroller_virtualscroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/virtualscroller/virtualscroller */ "./src/app/components/virtualscroller/virtualscroller.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/dropdown/dropdown */ "./src/app/components/dropdown/dropdown.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var VirtualScrollerDemoModule = /** @class */ (function () {
    function VirtualScrollerDemoModule() {
    }
    VirtualScrollerDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _virtualscrollerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerDemoRoutingModule"],
                _components_virtualscroller_virtualscroller__WEBPACK_IMPORTED_MODULE_5__["VirtualScrollerModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_9__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_10__["CodeHighlighterModule"]
            ],
            declarations: [
                _virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerDemo"]
            ]
        })
    ], VirtualScrollerDemoModule);
    return VirtualScrollerDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts ***!
  \****************************************************************************/
/*! exports provided: VirtualScrollerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollerDemo", function() { return VirtualScrollerDemo; });
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


var VirtualScrollerDemo = /** @class */ (function () {
    function VirtualScrollerDemo(carService) {
        this.carService = carService;
        this.cars = [];
    }
    VirtualScrollerDemo.prototype.ngOnInit = function () {
        this.brands = [
            'Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'
        ];
        this.colors = [
            'Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'
        ];
        for (var i = 0; i < 10000; i++) {
            this.cars.push(this.generateCar());
        }
        //in a real application, make a remote request to retrieve the number of records only, not the actual records
        this.totalLazyCarsLength = 10000;
        this.sortOptions = [
            { label: 'Newest First', value: '!year' },
            { label: 'Oldest First', value: 'year' }
        ];
    };
    VirtualScrollerDemo.prototype.generateCar = function () {
        return {
            vin: this.generateVin(),
            brand: this.generateBrand(),
            color: this.generateColor(),
            year: this.generateYear()
        };
    };
    VirtualScrollerDemo.prototype.generateVin = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    VirtualScrollerDemo.prototype.generateBrand = function () {
        return this.brands[Math.floor(Math.random() * Math.floor(10))];
    };
    VirtualScrollerDemo.prototype.generateColor = function () {
        return this.colors[Math.floor(Math.random() * Math.floor(7))];
    };
    VirtualScrollerDemo.prototype.generateYear = function () {
        return 2000 + Math.floor(Math.random() * Math.floor(19));
    };
    VirtualScrollerDemo.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        var _this = this;
        //imitate db connection over a network
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            _this.lazyCars = [];
            if (_this.cars) {
                _this.lazyCars = _this.cars.slice(event.first, (event.first + event.rows));
            }
        }, 1000);
    };
    VirtualScrollerDemo.prototype.onSortChange = function () {
        if (this.sortKey.indexOf('!') === 0)
            this.sort(-1);
        else
            this.sort(1);
    };
    VirtualScrollerDemo.prototype.sort = function (order) {
        var cars = this.cars.slice();
        cars.sort(function (data1, data2) {
            var value1 = data1.year;
            var value2 = data2.year;
            var result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            return (order * result);
        });
        this.cars = cars;
    };
    VirtualScrollerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./virtualscrollerdemo.html */ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.html"),
            styles: ["\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        .empty-car-item-index {\n            background-color: #f1f1f1;\n            width: 60px;\n            height: 60px;\n            margin: 36px auto 0 auto;\n            animation: pulse 1s infinite ease-in-out;\n        }\n\n        .empty-car-item-image {\n            background-color: #f1f1f1;\n            width: 120px;\n            height: 120px;\n            animation: pulse 1s infinite ease-in-out;\n        }\n\n        .empty-car-item-text {\n            background-color: #f1f1f1;\n            height: 18px;\n            animation: pulse 1s infinite ease-in-out;\n        }\n\n        .title-container {\n            padding: 1em;\n            text-align: right;\n        }\n\n        .sort-container {\n            text-align: left;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], VirtualScrollerDemo);
    return VirtualScrollerDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-virtualscroller-virtualscrollerdemo-module.js.map