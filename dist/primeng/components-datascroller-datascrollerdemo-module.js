(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-datascroller-datascrollerdemo-module"],{

/***/ "./src/app/components/datascroller/datascroller.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/datascroller/datascroller.ts ***!
  \*********************************************************/
/*! exports provided: DataScroller, DataScrollerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScroller", function() { return DataScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerModule", function() { return DataScrollerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataScroller = /** @class */ (function () {
    function DataScroller(el, renderer, zone) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.buffer = 0.9;
        this.trackBy = function (index, item) { return item; };
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataToRender = [];
        this.first = 0;
        this.page = 0;
    }
    DataScroller.prototype.ngOnInit = function () {
        this.load();
    };
    DataScroller.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.loader) {
            this.loaderClickListener = this.renderer.listen(this.loader, 'click', function () {
                _this.load();
            });
        }
        else {
            this.bindScrollListener();
        }
    };
    DataScroller.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    DataScroller.prototype.load = function () {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.page * this.rows,
                rows: this.rows
            });
        }
        this.page = this.page + 1;
    };
    DataScroller.prototype.shouldLoad = function () {
        if (this.lazy)
            return (this.rows * this.page < this.totalRecords);
        else
            return this.value && this.value.length && (this.rows * this.page < this.value.length);
    };
    DataScroller.prototype.reset = function () {
        this.page = 0;
    };
    DataScroller.prototype.isEmpty = function () {
        return !this.value || (this.value.length == 0);
    };
    DataScroller.prototype.bindScrollListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.inline) {
                _this.inlineScrollListener = _this.onInlineScroll.bind(_this);
                _this.contentViewChild.nativeElement.addEventListener('scroll', _this.inlineScrollListener);
            }
            else {
                _this.windowScrollListener = _this.onWindowScroll.bind(_this);
                window.addEventListener('scroll', _this.windowScrollListener);
            }
        });
    };
    DataScroller.prototype.unbindScrollListener = function () {
        if (this.inlineScrollListener) {
            this.contentViewChild.nativeElement.removeEventListener('scroll', this.inlineScrollListener);
        }
        if (this.windowScrollListener) {
            window.removeEventListener('scroll', this.windowScrollListener);
        }
        if (this.loaderClickListener) {
            this.loaderClickListener();
            this.loaderClickListener = null;
        }
    };
    DataScroller.prototype.onInlineScroll = function () {
        var _this = this;
        var scrollTop = this.contentViewChild.nativeElement.scrollTop;
        var scrollHeight = this.contentViewChild.nativeElement.scrollHeight;
        var viewportHeight = this.contentViewChild.nativeElement.clientHeight;
        if ((scrollTop >= ((scrollHeight * this.buffer) - (viewportHeight)))) {
            if (this.shouldLoad()) {
                this.zone.run(function () {
                    _this.load();
                });
            }
        }
    };
    DataScroller.prototype.onWindowScroll = function () {
        var _this = this;
        var docBody = document.body;
        var docElement = document.documentElement;
        var scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
        var winHeight = docElement.clientHeight;
        var docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);
        if (scrollTop >= ((docHeight * this.buffer) - winHeight)) {
            if (this.shouldLoad()) {
                this.zone.run(function () {
                    _this.load();
                });
            }
        }
    };
    DataScroller.prototype.ngOnDestroy = function () {
        this.unbindScrollListener();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DataScroller.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DataScroller.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataScroller.prototype, "lazy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DataScroller.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DataScroller.prototype, "buffer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataScroller.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "scrollHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "loader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DataScroller.prototype, "totalRecords", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], DataScroller.prototype, "trackBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["Header"]),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["Footer"]),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "footer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DataScroller.prototype, "templates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DataScroller.prototype, "contentViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DataScroller.prototype, "onLazyLoad", void 0);
    DataScroller = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-dataScroller',
            template: "\n    <div [ngClass]=\"{'ui-datascroller ui-widget': true, 'ui-datascroller-inline': inline}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n        <div class=\"ui-datascroller-header ui-widget-header ui-corner-top\" *ngIf=\"header\">\n            <ng-content select=\"p-header\"></ng-content>\n        </div>\n        <div #content class=\"ui-datascroller-content ui-widget-content\" [ngStyle]=\"{'max-height': scrollHeight}\">\n            <ul class=\"ui-datascroller-list\">\n                <li *ngFor=\"let item of value | slice:first:(first + (page * rows)); trackBy: trackBy; let i = index\">\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ui-datascroller-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n            <ng-content select=\"p-footer\"></ng-content>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DataScroller);
    return DataScroller;
}());

var DataScrollerModule = /** @class */ (function () {
    function DataScrollerModule() {
    }
    DataScrollerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [DataScroller, _common_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [DataScroller]
        })
    ], DataScrollerModule);
    return DataScrollerModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerdemo-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DatascrollerDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatascrollerDemoRoutingModule", function() { return DatascrollerDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datascrollerdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datascrollerdemo */ "./src/app/showcase/components/datascroller/datascrollerdemo.ts");
/* harmony import */ var _datascrollerinfinitedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datascrollerinfinitedemo */ "./src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts");
/* harmony import */ var _datascrollerinlinedemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datascrollerinlinedemo */ "./src/app/showcase/components/datascroller/datascrollerinlinedemo.ts");
/* harmony import */ var _datascrollerloaderdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datascrollerloaderdemo */ "./src/app/showcase/components/datascroller/datascrollerloaderdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DatascrollerDemoRoutingModule = /** @class */ (function () {
    function DatascrollerDemoRoutingModule() {
    }
    DatascrollerDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _datascrollerdemo__WEBPACK_IMPORTED_MODULE_2__["DataScrollerDemo"] },
                    { path: 'inline', component: _datascrollerinlinedemo__WEBPACK_IMPORTED_MODULE_4__["DataScrollerInlineDemo"] },
                    { path: 'loader', component: _datascrollerloaderdemo__WEBPACK_IMPORTED_MODULE_5__["DataScrollerLoaderDemo"] },
                    { path: 'infinite', component: _datascrollerinfinitedemo__WEBPACK_IMPORTED_MODULE_3__["DataScrollerInfiniteDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DatascrollerDemoRoutingModule);
    return DatascrollerDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerdemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataScroller</span>\r\n        <span>DataScroller displays data with on demand loading using scroll. Scroll down to view the demo.</span>\r\n        <span>DataScroller is deprecated, use <a [routerLink]=\"['/virtualscroll']\">VirtualScroller</a> instead.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DataScrollerModule&#125; from 'primeng/datascroller';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>DataScroller requires a collection of items as its value, number of rows to load and a ng-template content to display\r\n                    where each item can be accessed using the implicit variable.</p>\r\n\r\n            <p>Throughout the samples, a car interface having vin, brand, year and color properties are used\r\n                to define an object to be displayed by the datascroller. Cars are loaded by a CarService that\r\n                connects to a server to fetch the cars with a Promise.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport interface Car &#123;\r\n    vin;\r\n    year;\r\n    brand;\r\n    color;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Injectable&#125; from 'angular2/core';\r\nimport &#123;Http, Response&#125; from 'angular2/http';\r\nimport &#123;Car&#125; from '../domain/car';\r\n\r\n@Injectable()\r\nexport class CarService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getCarsLarge() &#123;\r\n        return this.http.get('/showcase/resources/data/cars-large.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;Car[]&gt; res.json().data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Here is a sample DataScroller that displays a list of cars where each load event adds 10 more rows if available.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataScrollertDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        Car content\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Sections</h3>\r\n            <p>Header and Footer are the two sections that are capable of displaying custom content.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        Car content\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Inline</h3>\r\n            <p>By default DataScroller listens to the scroll event of window, the alternative is the inline mode where container of the DataScroller element itself is used as the event target. Set inline option to true to enable this mode.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataScroller [value]=\"cars\" [inline]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        Car content\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n             onLazyLoad callback everytime paging happens. To implement lazy loading,\r\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource along with the logical number of total records. onLazyLoad gets an event object\r\n            that contains information about what to load.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\" [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        Car content\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadData(event) &#123;\r\n    //event.first = First row offset\r\n    //event.rows = Number of rows per page\r\n    //add more records to the cars array\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to fetch in a load event.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inline</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if the event target to listen the scroll event is the element itself.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Max height of the content area in inline mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loader</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Reference of the target element whose click event loads the data instead of scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>trackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>buffer</td>\r\n                            <td>number</td>\r\n                            <td>0.9</td>\r\n                            <td>Number of buffer size.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of total records, defaults to length of value when not defined.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onLazyLoad</td>\r\n                            <td>event.first = First row offset <br>\r\n                                event.rows = Number of rows per page <br></td>\r\n                            <td>Callback to invoke in lazy mode to load new data.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>reset</td>\r\n                            <td>-</td>\r\n                            <td>Resets data.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-datascroller</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datascroller-header</td>\r\n                            <td>Header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datascroller-footer</td>\r\n                            <td>Footer section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datascroller-content</td>\r\n                            <td>Wrapper of item container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datascroller-list</td>\r\n                            <td>Item container element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\"&gt;\r\n    &lt;p-header&gt;\r\n        Scroll Down to Load More\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\" let-i=\"index\"&gt;\r\n        &lt;div class=\"ui-g car-item\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataScrollerDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataScroller [value]=\"cars\" [rows]=\"10\">\r\n        <p-header>\r\n            Scroll Down to Load More\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"item\" let-i=\"index\">\r\n            <div class=\"ui-g car-item\">\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataScroller>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerdemo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DataScrollerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerDemoModule", function() { return DataScrollerDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datascrollerdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datascrollerdemo */ "./src/app/showcase/components/datascroller/datascrollerdemo.ts");
/* harmony import */ var _datascrollersubmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datascrollersubmenu */ "./src/app/showcase/components/datascroller/datascrollersubmenu.ts");
/* harmony import */ var _datascrollerinfinitedemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datascrollerinfinitedemo */ "./src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts");
/* harmony import */ var _datascrollerinlinedemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datascrollerinlinedemo */ "./src/app/showcase/components/datascroller/datascrollerinlinedemo.ts");
/* harmony import */ var _datascrollerloaderdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datascrollerloaderdemo */ "./src/app/showcase/components/datascroller/datascrollerloaderdemo.ts");
/* harmony import */ var _datascrollerdemo_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datascrollerdemo-routing.module */ "./src/app/showcase/components/datascroller/datascrollerdemo-routing.module.ts");
/* harmony import */ var _components_datascroller_datascroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/datascroller/datascroller */ "./src/app/components/datascroller/datascroller.ts");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/dialog/dialog */ "./src/app/components/dialog/dialog.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DataScrollerDemoModule = /** @class */ (function () {
    function DataScrollerDemoModule() {
    }
    DataScrollerDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _datascrollerdemo_routing_module__WEBPACK_IMPORTED_MODULE_7__["DatascrollerDemoRoutingModule"],
                _components_datascroller_datascroller__WEBPACK_IMPORTED_MODULE_8__["DataScrollerModule"],
                _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                _components_toast_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"]
            ],
            declarations: [
                _datascrollerdemo__WEBPACK_IMPORTED_MODULE_2__["DataScrollerDemo"],
                _datascrollerinfinitedemo__WEBPACK_IMPORTED_MODULE_4__["DataScrollerInfiniteDemo"],
                _datascrollerinlinedemo__WEBPACK_IMPORTED_MODULE_5__["DataScrollerInlineDemo"],
                _datascrollerloaderdemo__WEBPACK_IMPORTED_MODULE_6__["DataScrollerLoaderDemo"],
                _datascrollersubmenu__WEBPACK_IMPORTED_MODULE_3__["DataScrollerSubMenu"]
            ]
        })
    ], DataScrollerDemoModule);
    return DataScrollerDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerdemo.ts ***!
  \**********************************************************************/
/*! exports provided: DataScrollerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerDemo", function() { return DataScrollerDemo; });
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


var DataScrollerDemo = /** @class */ (function () {
    function DataScrollerDemo(carService) {
        this.carService = carService;
    }
    DataScrollerDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataScrollerDemo.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayDialog = true;
    };
    DataScrollerDemo.prototype.onDialogHide = function () {
        this.selectedCar = null;
    };
    DataScrollerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datascrollerdemo.html */ "./src/app/showcase/components/datascroller/datascrollerdemo.html"),
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataScrollerDemo);
    return DataScrollerDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinfinitedemo.html":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerinfinitedemo.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataScroller  - Infinite</span>\r\n        <span>DataScroller supports lazy loading via virtual scrolling so that each scroll event fetches new chunk of data from a remote datasource. This example generates\r\n        the new records on-the-fly and scrolling is infinite.</span><br><span>Scroll to the bottom of this page to see the demo.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datascrollerinfinitedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataScrollerInfiniteDemo &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService, private messageService: MessageService) &#123; &#125;\r\n\r\n    loadData(event) &#123;\r\n        //initialize\r\n        if(!this.cars) &#123;\r\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n        &#125;\r\n        //in real application, newArray should be loaded from a remote datasource\r\n        else &#123;\r\n            let newArray = this.cars.slice(0);\r\n            for(let i = 0; i < newArray.length; i++) &#123;\r\n                this.cars.push(newArray[i]);\r\n            &#125;\r\n            this.messageService.add(&#123;severity:'info', summary:'Data Loaded', detail:'Between ' + event.first + ' and ' + (event.first + event.rows)&#125;);\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datascrollerinfinitedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinfinitedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\" (onLazyLoad)=\"loadData($event)\" [lazy]=\"true\"&gt;\r\n    &lt;p-header&gt;\r\n        Scroll Down to to Load More\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g car-item\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <p-dataScroller [value]=\"cars\" [rows]=\"10\" (onLazyLoad)=\"loadData($event)\" [lazy]=\"true\" [totalRecords]=\"totalRecords\">\r\n        <p-header>\r\n            Scroll Down to to Load More\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"item\">\r\n            <div class=\"ui-g car-item\">\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataScroller>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts ***!
  \******************************************************************************/
/*! exports provided: DataScrollerInfiniteDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerInfiniteDemo", function() { return DataScrollerInfiniteDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataScrollerInfiniteDemo = /** @class */ (function () {
    function DataScrollerInfiniteDemo(carService, messageService) {
        this.carService = carService;
        this.messageService = messageService;
        this.totalRecords = 50;
    }
    DataScrollerInfiniteDemo.prototype.loadData = function (event) {
        var _this = this;
        //initialize
        if (!this.cars) {
            this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        }
        //in real application, newArray should be loaded from a remote datasource
        else {
            var newArray = this.cars.slice(0);
            for (var i = 0; i < newArray.length; i++) {
                this.cars.push(newArray[i]);
            }
            this.messageService.add({ severity: 'info', summary: 'Data Loaded', detail: 'Between ' + event.first + ' and ' + (event.first + event.rows) });
        }
    };
    DataScrollerInfiniteDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datascrollerinfinitedemo.html */ "./src/app/showcase/components/datascroller/datascrollerinfinitedemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], DataScrollerInfiniteDemo);
    return DataScrollerInfiniteDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinlinedemo.html":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerinlinedemo.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataScroller - <span class=\"subitem\">Inline</span></span>\r\n        <span>DataScroller can listen scroll event of itself rather than document in inline mode.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataScroller [value]=\"cars\" [rows]=\"10\" [inline]=\"true\" scrollHeight=\"500px\">\r\n        <p-header>\r\n            Scroll Down to to Load More\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"item\">\r\n            <div class=\"ui-g car-item\">\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataScroller>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datascrollerinlinedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinlinedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataScrollerInlineDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datascrollerinlinedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinlinedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\" [inline]=\"true\" scrollHeight=\"500px\"&gt;\r\n    &lt;p-header&gt;\r\n        Scroll Down to to Load More\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g car-item\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinlinedemo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerinlinedemo.ts ***!
  \****************************************************************************/
/*! exports provided: DataScrollerInlineDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerInlineDemo", function() { return DataScrollerInlineDemo; });
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


var DataScrollerInlineDemo = /** @class */ (function () {
    function DataScrollerInlineDemo(carService) {
        this.carService = carService;
    }
    DataScrollerInlineDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataScrollerInlineDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datascrollerinlinedemo.html */ "./src/app/showcase/components/datascroller/datascrollerinlinedemo.html"),
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataScrollerInlineDemo);
    return DataScrollerInlineDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerloaderdemo.html":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerloaderdemo.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataScroller - Loader</span>\r\n        <span>Instead of scrolling, click event of an element can be used to load data.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataScroller [value]=\"cars\" [rows]=\"5\" [loader]=\"loadButton\">\r\n        <p-header>\r\n            Click Load Button at Footer to Load More\r\n        </p-header>\r\n        <ng-template let-car pTemplate=\"item\">\r\n            <div class=\"ui-g car-item\">\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-9\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\r\n            \r\n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <p-footer>\r\n            <button #loadButton type=\"text\" icon=\"pi pi-plus\" pButton label=\"Load\"></button>\r\n        </p-footer>\r\n    </p-dataScroller>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datascrollerloaderdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerloaderdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataScrollerLoaderDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datascrollerinlinedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerloaderdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"5\" [loader]=\"loadButton\"&gt;\r\n    &lt;p-header&gt;\r\n        Click Load Button at Footer to Load More\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g car-item\"&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\r\n                &lt;div class=\"ui-g\"&gt;\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\r\n\r\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;button #loadButton type=\"text\" icon=\"pi pi-refresh\" pButton label=\"Load\"&gt;&lt;/button&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dataScroller&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerloaderdemo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollerloaderdemo.ts ***!
  \****************************************************************************/
/*! exports provided: DataScrollerLoaderDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerLoaderDemo", function() { return DataScrollerLoaderDemo; });
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


var DataScrollerLoaderDemo = /** @class */ (function () {
    function DataScrollerLoaderDemo(carService) {
        this.carService = carService;
    }
    DataScrollerLoaderDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataScrollerLoaderDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datascrollerloaderdemo.html */ "./src/app/showcase/components/datascroller/datascrollerloaderdemo.html"),
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataScrollerLoaderDemo);
    return DataScrollerLoaderDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollersubmenu.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/datascroller/datascrollersubmenu.ts ***!
  \*************************************************************************/
/*! exports provided: DataScrollerSubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerSubMenu", function() { return DataScrollerSubMenu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataScrollerSubMenu = /** @class */ (function () {
    function DataScrollerSubMenu() {
    }
    DataScrollerSubMenu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datascroller-demos',
            template: "\n        <div id=\"datatable-submenu\" class=\"content-section content-submenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['/datascroller']\">&#9679; Window</a></li>\n                <li><a [routerLink]=\"['/datascroller/inline']\">&#9679; Inline</a></li>\n                <li><a [routerLink]=\"['/datascroller/loader']\">&#9679; Loader</a></li>\n                <li><a [routerLink]=\"['/datascroller/infinite']\">&#9679; Infinite</a></li>\n            </ul>\n        </div>\n    "
        })
    ], DataScrollerSubMenu);
    return DataScrollerSubMenu;
}());



/***/ })

}]);
//# sourceMappingURL=components-datascroller-datascrollerdemo-module.js.map