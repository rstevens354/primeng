(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dynamicdialog-dynamicdialogdemo-module"],{

/***/ "./src/app/showcase/components/dynamicdialog/carslistdemo.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/dynamicdialog/carslistdemo.ts ***!
  \*******************************************************************/
/*! exports provided: CarsListDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsListDemo", function() { return CarsListDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
/* harmony import */ var _components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/api */ "./src/app/components/common/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarsListDemo = /** @class */ (function () {
    function CarsListDemo(carService, ref, config) {
        this.carService = carService;
        this.ref = ref;
        this.config = config;
    }
    CarsListDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    CarsListDemo.prototype.selectCar = function (car) {
        this.ref.close(car);
    };
    CarsListDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <p-table [value]=\"cars\" [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th pSortableColumn=\"vin\">Vin <p-sortIcon field=\"vin\"></p-sortIcon></th>\n                    <th pSortableColumn=\"year\">Year <p-sortIcon field=\"year\"></p-sortIcon></th>\n                    <th pSortableColumn=\"brand\">Brand <p-sortIcon field=\"brand\"></p-sortIcon></th>\n                    <th pSortableColumn=\"color\">Color <p-sortIcon field=\"color\"></p-sortIcon></th>\n                    <th style=\"width:4em\"></th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-car>\n                <tr>\n                    <td><span class=\"ui-column-title\">Vin</span>{{car.vin}}</td>\n                    <td><span class=\"ui-column-title\">Year</span>{{car.year}}</td>\n                    <td><span class=\"ui-column-title\">Brand</span>{{car.brand}}</td>\n                    <td><span class=\"ui-column-title\">Color</span>{{car.color}}</td>\n                    <td>\n                        <button pButton icon=\"pi pi-search\" (click)=\"selectCar(car)\"></button>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    "
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"], _components_common_api__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"], _components_common_api__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]])
    ], CarsListDemo);
    return CarsListDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/showcase/components/dynamicdialog/dynamicdialogdemo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DynamicDialogDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogDemoRoutingModule", function() { return DynamicDialogDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicdialogdemo */ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DynamicDialogDemoRoutingModule = /** @class */ (function () {
    function DynamicDialogDemoRoutingModule() {
    }
    DynamicDialogDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DynamicDialogDemoRoutingModule);
    return DynamicDialogDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Dynamic Dialog</span>\r\n        <span>Dialogs can be created dynamically with any component as the content using a DialogService.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <button type=\"button\" (click)=\"show()\" pButton icon=\"pi pi-info-circle\" label=\"Show\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DynamicDialogModule&#125; from 'primeng/dynamicdialog';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Dynamic dialogs require an instance of a DialogService that is responsible for displaying a dialog with a component as its content. Since the dynamically\r\n                loaded content is not defined at build time, a configuration is necessary using the entryComponents of your parent module. Example below, displays a list of cars\r\n                using the CarsListDemo component so it needs to be configured at entryComponents along with the import of DynamicDialogModule. The configuration of the demo page is as follows;\r\n            </p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@NgModule(&#123;\r\n    imports: [\r\n        CommonModule,\r\n        DynamicDialogModule,\r\n        ToastModule,\r\n        TableModule,\r\n        ButtonModule\r\n    ],\r\n    declarations: [\r\n        DynamicDialogDemo,\r\n        CarsListDemo\r\n    ],\r\n    entryComponents: [\r\n        CarsListDemo\r\n    ]\r\n&#125;)\r\nexport class DynamicDialogDemoModule &#123;\r\n</code>\r\n</pre>\r\n\r\n            <p>Next step, is injecting an instance of a DialogService to the component that will open the dialog.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;DialogService&#125; from 'primeng/api';\r\nimport &#123;CarsListDemo&#125; from './carslistdemo';\r\nimport &#123;Car&#125; from '../../components/domain/car';\r\n\r\n@Component(&#123;\r\n    templateUrl: './dynamicdialogdemo.html',\r\n    providers: [DialogService]\r\n&#125;)\r\nexport class DynamicDialogDemo &#123;\r\n\r\n    constructor(public dialogService: DialogService) &#123;&#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Displaying a dialog is done with the open method where the first parameter is the type of component to load and the second parameter is the configuration of the Dialog such as header, width and more.</p>\r\n                \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n&lt;button type=\"button\" (click)=\"show()\" pButton icon=\"pi pi-info-circle\" label=\"Show\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshow() &#123;\r\n    const ref = this.dialogService.open(CarsListDemo, &#123;\r\n        header: 'Choose a Car',\r\n        width: '70%'\r\n    &#125;);\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>In case you need to pass data to the component that is dynamically loaded, use the data property that can be access using the DynamicDialogConfig class. In additon, the loaded component can also control the Dialog using the DynamicDialogRef API.\r\n                Both the DynamicDialogConfig and DynamicDialogRef are injectable using the constructor.\r\n            </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshow() &#123;\r\n    const ref = this.dialogService.open(CarsListDemo, &#123;\r\n        data: &#123;\r\n            id: '51gF3'\r\n        &#125;,\r\n        header: 'Choose a Car',\r\n        width: '70%'\r\n    &#125;);\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;Car&#125; from '../../components/domain/car';\r\nimport &#123;CarService&#125; from '../../service/carservice';\r\nimport &#123;DynamicDialogRef&#125; from 'primeng/api';\r\nimport &#123;DynamicDialogConfig&#125; from 'primeng/api';\r\n\r\n@Component(&#123;\r\n    templateUrl: './carslistdemo.html',\r\n&#125;)\r\nexport class CarsListDemo &#123;\r\n\r\n    cars: Car[];\r\n            \r\n    constructor(private carService: CarService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        //id: this.config.id\r\n        this.carService.getCarsSmall(id).then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<p>Most of the time, requirement is returning a value from the dialog. DialogRef's close method is used for this purpose where the parameter passed will be available at the onClose\r\nevent at the caller. Here is an example on how to close the dialog from the CarsListDemo by passing a selected car.\r\n</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;Car&#125; from '../../components/domain/car';\r\nimport &#123;CarService&#125; from '../../service/carservice';\r\nimport &#123;DynamicDialogRef&#125; from 'primeng/api';\r\nimport &#123;DynamicDialogConfig&#125; from 'primeng/api';\r\n\r\n@Component(&#123;\r\n    templateUrl: './carslistdemo.html',\r\n&#125;)\r\nexport class CarsListDemo &#123;\r\n\r\n    cars: Car[];\r\n            \r\n    constructor(private carService: CarService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        //id: this.config.id\r\n        this.carService.getCarsSmall(id).then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    selectCar(car: Car) &#123;\r\n        this.ref.close(car);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Now at the class that opens the dialog, the selected car gets passed to the Observable.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshow() &#123;\r\n    const ref = this.dialogService.open(CarsListDemo, &#123;\r\n        header: 'Choose a Car',\r\n        width: '70%'\r\n    &#125;);\r\n\r\n    ref.onClose.subscribe((car: Car) => &#123;\r\n        if (car) &#123;\r\n            this.messageService.add(&#123;severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin&#125;);\r\n        &#125;\r\n    &#125;);\r\n&#125;\r\n</code>\r\n</pre>\r\n            <h3>Properties for DynamicDialog</h3>\r\n            <p>Dynamic Dialogs provide the following customization options.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>data</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>An object to pass to the component loaded inside the Dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footer</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Footer text of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>width</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Width of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>height</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Height of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closeOnEscape</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dismissableMask</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifices if clicking the modal background should hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rtl</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled dialog is displayed in RTL direction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contentStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the content section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>transitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>400ms cubic-bezier(0.25, 0.8, 0.25, 1)</td>\r\n                            <td>Transition options of the animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Adds a close icon to the header to hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showHeader</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show the header or not.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onShow</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is shown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHide</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-dialog</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dynamicdialog</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar</td>\r\n                            <td>Container of header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-title</td>\r\n                            <td>Header element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-icon</td>\r\n                            <td>Icon container inside header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-close</td>\r\n                            <td>Close icon element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-footer</td>\r\n                            <td>Footer element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dynamicdialog\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n\r\n            <h3>DynamicDialogDemo</h3>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"show()\" pButton icon=\"pi pi-info-circle\" label=\"Show\">&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DynamicDialogDemo &#123;\r\n\r\n    constructor(public dialogService: DialogService, public messageService: MessageService) &#123;&#125;\r\n\r\n    show() &#123;\r\n        const ref = this.dialogService.open(CarsListDemo, &#123;\r\n            header: 'Choose a Car',\r\n            width: '70%',\r\n            contentStyle: &#123;\"max-height\": \"350px\", \"overflow\": \"auto\"&#125;\r\n        &#125;);\r\n\r\n        ref.onClose.subscribe((car: Car) =>&#123;\r\n            if (car) &#123;\r\n                this.messageService.add(&#123;severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin&#125;);\r\n            &#125;\r\n        &#125;);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>CarsListDemo</h3>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\" [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th pSortableColumn=\"vin\"&gt;Vin &lt;p-sortIcon field=\"vin\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n            &lt;th pSortableColumn=\"year\"&gt;Year &lt;p-sortIcon field=\"year\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n            &lt;th pSortableColumn=\"brand\"&gt;Brand &lt;p-sortIcon field=\"brand\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n            &lt;th pSortableColumn=\"color\"&gt;Color &lt;p-sortIcon field=\"color\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\r\n            &lt;th style=\"width:4em\"&gt;&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Vin&lt;/span&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Year&lt;/span&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Brand&lt;/span&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Color&lt;/span&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;\r\n                &lt;button pButton icon=\"pi pi-search\" (click)=\"selectCar(car)\"&gt;&lt;/button&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class CarsListDemo &#123;\r\n\r\n    cars: Car[];\r\n            \r\n    constructor(private carService: CarService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    selectCar(car: Car) &#123;\r\n        this.ref.close(car);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DynamicDialogDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogDemoModule", function() { return DynamicDialogDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dynamicdialog_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/dynamicdialog/dynamicdialog */ "./src/app/components/dynamicdialog/dynamicdialog.ts");
/* harmony import */ var _dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialogdemo */ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts");
/* harmony import */ var _dynamicdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicdialogdemo-routing.module */ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo-routing.module.ts");
/* harmony import */ var _carslistdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carslistdemo */ "./src/app/showcase/components/dynamicdialog/carslistdemo.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/table/table */ "./src/app/components/table/table.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DynamicDialogDemoModule = /** @class */ (function () {
    function DynamicDialogDemoModule() {
    }
    DynamicDialogDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dynamicdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogDemoRoutingModule"],
                _components_dynamicdialog_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogModule"],
                _components_toast_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
                _components_table_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_9__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_10__["CodeHighlighterModule"]
            ],
            declarations: [
                _dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogDemo"],
                _carslistdemo__WEBPACK_IMPORTED_MODULE_5__["CarsListDemo"]
            ],
            entryComponents: [
                _carslistdemo__WEBPACK_IMPORTED_MODULE_5__["CarsListDemo"]
            ]
        })
    ], DynamicDialogDemoModule);
    return DynamicDialogDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts ***!
  \************************************************************************/
/*! exports provided: DynamicDialogDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogDemo", function() { return DynamicDialogDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/common/api */ "./src/app/components/common/api.ts");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");
/* harmony import */ var _carslistdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carslistdemo */ "./src/app/showcase/components/dynamicdialog/carslistdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicDialogDemo = /** @class */ (function () {
    function DynamicDialogDemo(dialogService, messageService) {
        this.dialogService = dialogService;
        this.messageService = messageService;
    }
    DynamicDialogDemo.prototype.show = function () {
        var _this = this;
        var ref = this.dialogService.open(_carslistdemo__WEBPACK_IMPORTED_MODULE_3__["CarsListDemo"], {
            header: 'Choose a Car',
            width: '70%',
            contentStyle: { "max-height": "350px", "overflow": "auto" }
        });
        ref.onClose.subscribe(function (car) {
            if (car) {
                _this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin });
            }
        });
    };
    DynamicDialogDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dynamicdialogdemo.html */ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.html"),
            providers: [_components_common_api__WEBPACK_IMPORTED_MODULE_1__["DialogService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_components_common_api__WEBPACK_IMPORTED_MODULE_1__["DialogService"], _components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], DynamicDialogDemo);
    return DynamicDialogDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-dynamicdialog-dynamicdialogdemo-module.js.map