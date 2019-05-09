(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chart-chartdemo-module"],{

/***/ "./src/app/components/chart/chart.ts":
/*!*******************************************!*\
  !*** ./src/app/components/chart/chart.ts ***!
  \*******************************************/
/*! exports provided: UIChart, ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIChart", function() { return UIChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
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


var UIChart = /** @class */ (function () {
    function UIChart(el) {
        this.el = el;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        this.onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(UIChart.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (val) {
            this._data = val;
            this.reinit();
        },
        enumerable: true,
        configurable: true
    });
    UIChart.prototype.ngAfterViewInit = function () {
        this.initChart();
        this.initialized = true;
    };
    UIChart.prototype.onCanvasClick = function (event) {
        if (this.chart) {
            var element = this.chart.getElementAtEvent(event);
            var dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    };
    UIChart.prototype.initChart = function () {
        var opts = this.options || {};
        opts.responsive = this.responsive;
        // allows chart to resize in responsive mode
        if (opts.responsive && (this.height || this.width)) {
            opts.maintainAspectRatio = false;
        }
        this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
            type: this.type,
            data: this.data,
            options: this.options,
            plugins: this.plugins
        });
    };
    UIChart.prototype.getCanvas = function () {
        return this.el.nativeElement.children[0].children[0];
    };
    UIChart.prototype.getBase64Image = function () {
        return this.chart.toBase64Image();
    };
    UIChart.prototype.generateLegend = function () {
        if (this.chart) {
            return this.chart.generateLegend();
        }
    };
    UIChart.prototype.refresh = function () {
        if (this.chart) {
            this.chart.update();
        }
    };
    UIChart.prototype.reinit = function () {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    };
    UIChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UIChart.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UIChart.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UIChart.prototype, "plugins", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UIChart.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UIChart.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UIChart.prototype, "responsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UIChart.prototype, "onDataSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIChart.prototype, "data", null);
    UIChart = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-chart',
            template: "\n        <div style=\"position:relative\" [style.width]=\"responsive && !width ? null : width\" [style.height]=\"responsive && !height ? null : height\">\n            <canvas [attr.width]=\"responsive && !width ? null : width\" [attr.height]=\"responsive && !height ? null : height\" (click)=\"onCanvasClick($event)\"></canvas>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UIChart);
    return UIChart;
}());

var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [UIChart],
            declarations: [UIChart]
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/barchart/barchartdemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/chart/barchart/barchartdemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">BarChart</span>\r\n        <span>A bar chart or bar graph is a chart that presents Grouped data with rectangular bars with lengths proportional to the values that they represent.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation-charts\">\r\n    <p-chart type=\"bar\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/chart/barchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"barchartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class BarChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'My First dataset',\r\n                    backgroundColor: '#42A5F5',\r\n                    borderColor: '#1E88E5',\r\n                    data: [65, 59, 80, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'My Second dataset',\r\n                    backgroundColor: '#9CCC65',\r\n                    borderColor: '#7CB342',\r\n                    data: [28, 48, 40, 19, 86, 27, 90]\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"barchartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"bar\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/chart/barchart/barchartdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/chart/barchart/barchartdemo.ts ***!
  \********************************************************************/
/*! exports provided: BarChartDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartDemo", function() { return BarChartDemo; });
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

var BarChartDemo = /** @class */ (function () {
    function BarChartDemo() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
    BarChartDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./barchartdemo.html */ "./src/app/showcase/components/chart/barchart/barchartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], BarChartDemo);
    return BarChartDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/chartdemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/chart/chartdemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChartDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDemoRoutingModule", function() { return ChartDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chartdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartdemo */ "./src/app/showcase/components/chart/chartdemo.ts");
/* harmony import */ var _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piechart/piechartdemo */ "./src/app/showcase/components/chart/piechart/piechartdemo.ts");
/* harmony import */ var _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doughnutchart/doughnutchartdemo */ "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts");
/* harmony import */ var _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barchart/barchartdemo */ "./src/app/showcase/components/chart/barchart/barchartdemo.ts");
/* harmony import */ var _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./linechart/linechartdemo */ "./src/app/showcase/components/chart/linechart/linechartdemo.ts");
/* harmony import */ var _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./polarareachart/polarareachartdemo */ "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts");
/* harmony import */ var _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radarchart/radarchartdemo */ "./src/app/showcase/components/chart/radarchart/radarchartdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChartDemoRoutingModule = /** @class */ (function () {
    function ChartDemoRoutingModule() {
    }
    ChartDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _chartdemo__WEBPACK_IMPORTED_MODULE_2__["ChartDemo"] },
                    { path: 'pie', component: _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_3__["PieChartDemo"] },
                    { path: 'doughnut', component: _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_4__["DoughnutChartDemo"] },
                    { path: 'bar', component: _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_5__["BarChartDemo"] },
                    { path: 'line', component: _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_6__["LineChartDemo"] },
                    { path: 'polararea', component: _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_7__["PolarAreaChartDemo"] },
                    { path: 'radar', component: _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_8__["RadarChartDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ChartDemoRoutingModule);
    return ChartDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/chartdemo.html":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/chart/chartdemo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Charts</span>\r\n        <span>Chart components are based on <a style=\"color:#68d4f9\" href=\"http://www.chartjs.org/\">Charts.js</a> 2.7.x, an open source HTML5 based charting library.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 style=\"margin-top:0px\">Charts.js</h3>\r\n    <p>To begin with, first you must install the charts.js package using npm and then include \r\n        it in your project. An example with CLI would be;</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install chart.js --save\r\n</code>\r\n</pre>\r\n        \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n\"scripts\": [\r\n    \"../node_modules/chart.js/dist/Chart.js\",\r\n    //..others\r\n],\r\n</code>\r\n</pre>\r\n\r\n    <h3>Chart Component</h3>\r\n    <p>Chart component is used to display a chart on page. The classname is UIChart and element tag is p-chart.</p>\r\n    \r\n<h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ChartModule&#125; from 'primeng/chart';\r\n</code>\r\n</pre>\r\n\r\n    <h3>Change Detection</h3>\r\n    <p>In order to chart to redraw itself, a new data object needs to be created. Changing the array contents without creating a new\r\n    array instance does not trigger change detection.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"pie\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n&lt;button type=\"button\" pButton (click)=\"update($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nupdate(event: Event) &#123;\r\n    this.data = //create new data\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <h3>Properties</h3>\r\n    <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Type</th>\r\n                    <th>Default</th>\r\n                    <th>Description</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>type</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Type of the chart.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>data</td>\r\n                    <td>any</td>\r\n                    <td>null</td>\r\n                    <td>Data to display.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>options</td>\r\n                    <td>any</td>\r\n                    <td>null</td>\r\n                    <td>Options to customize the chart.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>plugins</td>\r\n                    <td>any[]</td>\r\n                    <td>null</td>\r\n                    <td>Array of per-chart plugins to customize the chart behaviour.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>width</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Width of the chart.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>height</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Height of the chart.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>responsive</td>\r\n                    <td>boolean</td>\r\n                    <td>true</td>\r\n                    <td>Whether the chart is redrawn on screen size change.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>onDataSelect</td>\r\n                    <td>function</td>\r\n                    <td>null</td>\r\n                    <td>Callback to execute when an element on chart is clicked.</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <h3>Methods</h3>\r\n    <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Parameters</th>\r\n                    <th>Description</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>refresh</td>\r\n                    <td>-</td>\r\n                    <td>Redraws the graph with new data.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>reinit</td>\r\n                    <td>-</td>\r\n                    <td>Destroys the graph first and then creates it again.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>generateLegend</td>\r\n                    <td>-</td>\r\n                    <td>Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    \r\n\r\n    <h3>Chart Types</h3>\r\n    <p>Chart type is defined using the type property. Currently there are 6 options available; pie, doughtnut, line(line or horizontalBar), bar, radar and polarArea.</p>\r\n\r\n    <h3>Data</h3>\r\n    <p>Data of a chart is provided using a binding to the data property, each type has its own format of data. Here is an example of a line chart.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LineChartDemo &#123;\r\n\r\n    data: any;\r\n    \r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'First Dataset',\r\n                    data: [65, 59, 80, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Second Dataset',\r\n                    data: [28, 48, 40, 19, 86, 27, 90]\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <h3>Options</h3>\r\n    <p>While a series can be customized per dataset, general chart options are defined with options property. \r\n        Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js documentation.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\" [options]=\"options\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LineChartDemo &#123;\r\n\r\n    data: any;\r\n    \r\n    options: any;\r\n    \r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'First Dataset',\r\n                    data: [65, 59, 80, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Second Dataset',\r\n                    data: [28, 48, 40, 19, 86, 27, 90]\r\n                &#125;\r\n            ]\r\n        &#125;\r\n        \r\n        this.options = &#123;\r\n            title: &#123;\r\n                display: true,\r\n                text: 'My Title',\r\n                fontSize: 16\r\n            &#125;,\r\n            legend: &#123;\r\n                position: 'bottom'\r\n            &#125;\r\n        &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <h3>Events</h3>\r\n    <p>When data is selected with click event, chart component provides onDataSelect callback to process the selected data.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nselectData(event) &#123;\r\n    //event.dataset = Selected dataset\r\n    //event.element = Selected element\r\n    //event.element._datasetIndex = Index of the dataset in data\r\n    //event.element._index = Index of the data in dataset\r\n&#125;\r\n</code>\r\n</pre>  \r\n\r\n    <h3>Responsive</h3>\r\n    <p>Charts are responsive by default and vw-vh units should be used when customizing the width and height of the chart.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\" width=\"40vw\" height=\"80vh\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n<p>If the chart is not responsive, other units should be preferred.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\" width=\"400px\" height=\"400px\" [responsive]=\"false\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/chart/chartdemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/chart/chartdemo.module.ts ***!
  \***************************************************************/
/*! exports provided: ChartDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDemoModule", function() { return ChartDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chartdemo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartdemo-routing.module */ "./src/app/showcase/components/chart/chartdemo-routing.module.ts");
/* harmony import */ var _chartdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartdemo */ "./src/app/showcase/components/chart/chartdemo.ts");
/* harmony import */ var _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piechart/piechartdemo */ "./src/app/showcase/components/chart/piechart/piechartdemo.ts");
/* harmony import */ var _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doughnutchart/doughnutchartdemo */ "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts");
/* harmony import */ var _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barchart/barchartdemo */ "./src/app/showcase/components/chart/barchart/barchartdemo.ts");
/* harmony import */ var _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linechart/linechartdemo */ "./src/app/showcase/components/chart/linechart/linechartdemo.ts");
/* harmony import */ var _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./polarareachart/polarareachartdemo */ "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts");
/* harmony import */ var _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radarchart/radarchartdemo */ "./src/app/showcase/components/chart/radarchart/radarchartdemo.ts");
/* harmony import */ var _components_chart_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/chart/chart */ "./src/app/components/chart/chart.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ChartDemoModule = /** @class */ (function () {
    function ChartDemoModule() {
    }
    ChartDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chartdemo_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChartDemoRoutingModule"],
                _components_chart_chart__WEBPACK_IMPORTED_MODULE_10__["ChartModule"],
                _components_toast_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"]
            ],
            declarations: [
                _chartdemo__WEBPACK_IMPORTED_MODULE_3__["ChartDemo"],
                _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_4__["PieChartDemo"],
                _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_5__["DoughnutChartDemo"],
                _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_6__["BarChartDemo"],
                _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_7__["LineChartDemo"],
                _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_8__["PolarAreaChartDemo"],
                _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_9__["RadarChartDemo"]
            ]
        })
    ], ChartDemoModule);
    return ChartDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/chartdemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/chart/chartdemo.ts ***!
  \********************************************************/
/*! exports provided: ChartDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDemo", function() { return ChartDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartDemo = /** @class */ (function () {
    function ChartDemo() {
    }
    ChartDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./chartdemo.html */ "./src/app/showcase/components/chart/chartdemo.html")
        })
    ], ChartDemo);
    return ChartDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DoughnutChart</span>\r\n        <span>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation-charts\">\r\n    <p-chart type=\"doughnut\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/doughnutchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"doughnutchartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DoughnutChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['A','B','C'],\r\n            datasets: [\r\n                &#123;\r\n                    data: [300, 50, 100],\r\n                    backgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ],\r\n                    hoverBackgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ]\r\n                &#125;]    \r\n            &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"doughnutchartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"doughnut\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts ***!
  \******************************************************************************/
/*! exports provided: DoughnutChartDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutChartDemo", function() { return DoughnutChartDemo; });
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

var DoughnutChartDemo = /** @class */ (function () {
    function DoughnutChartDemo() {
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    }
    DoughnutChartDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./doughnutchartdemo.html */ "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], DoughnutChartDemo);
    return DoughnutChartDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/linechart/linechartdemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/chart/linechart/linechartdemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">LineChart</span>\r\n        <span>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation-charts\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/linechart/linechartdemo\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"linechartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LineChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor(private messageService: MessageService) &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'First Dataset',\r\n                    data: [65, 59, 80, 81, 56, 55, 40],\r\n                    fill: false,\r\n                    borderColor: '#4bc0c0'\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Second Dataset',\r\n                    data: [28, 48, 40, 19, 86, 27, 90],\r\n                    fill: false,\r\n                    borderColor: '#565656'\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n\r\n    selectData(event) &#123;\r\n        this.messageService.add(&#123;severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"linechartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/chart/linechart/linechartdemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/chart/linechart/linechartdemo.ts ***!
  \**********************************************************************/
/*! exports provided: LineChartDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartDemo", function() { return LineChartDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartDemo = /** @class */ (function () {
    function LineChartDemo(messageService) {
        this.messageService = messageService;
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
    }
    LineChartDemo.prototype.selectData = function (event) {
        this.messageService.add({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
    };
    LineChartDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./linechartdemo.html */ "./src/app/showcase/components/chart/linechart/linechartdemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], LineChartDemo);
    return LineChartDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/piechart/piechartdemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/chart/piechart/piechartdemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">PieChart</span>\r\n        <span>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation-charts\">\r\n    <p-chart type=\"pie\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/piechart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"piechartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class PieChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['A','B','C'],\r\n            datasets: [\r\n                &#123;\r\n                    data: [300, 50, 100],\r\n                    backgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ],\r\n                    hoverBackgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ]\r\n                &#125;]    \r\n            &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"piechartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"pie\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/chart/piechart/piechartdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/chart/piechart/piechartdemo.ts ***!
  \********************************************************************/
/*! exports provided: PieChartDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartDemo", function() { return PieChartDemo; });
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

var PieChartDemo = /** @class */ (function () {
    function PieChartDemo() {
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    }
    PieChartDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./piechartdemo.html */ "./src/app/showcase/components/chart/piechart/piechartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], PieChartDemo);
    return PieChartDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.html":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/components/chart/polarareachart/polarareachartdemo.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">PolarAreaChart</span>\r\n        <span>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation-charts\">\r\n    <p-chart type=\"polarArea\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/polarchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"polarareachartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class PolarAreaChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            datasets: [&#123;\r\n                data: [\r\n                    11,\r\n                    16,\r\n                    7,\r\n                    3,\r\n                    14\r\n                ],\r\n                backgroundColor: [\r\n                    \"#FF6384\",\r\n                    \"#4BC0C0\",\r\n                    \"#FFCE56\",\r\n                    \"#E7E9ED\",\r\n                    \"#36A2EB\"\r\n                ],\r\n                label: 'My dataset'\r\n            &#125;],\r\n            labels: [\r\n                \"Red\",\r\n                \"Green\",\r\n                \"Yellow\",\r\n                \"Grey\",\r\n                \"Blue\"\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"polarareachartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"polarArea\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts ***!
  \********************************************************************************/
/*! exports provided: PolarAreaChartDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarAreaChartDemo", function() { return PolarAreaChartDemo; });
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

var PolarAreaChartDemo = /** @class */ (function () {
    function PolarAreaChartDemo() {
        this.data = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ],
                    label: 'My dataset'
                }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };
    }
    PolarAreaChartDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./polarareachartdemo.html */ "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], PolarAreaChartDemo);
    return PolarAreaChartDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/chart/radarchart/radarchartdemo.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/chart/radarchart/radarchartdemo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">RadarChart</span>\r\n        <span>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation-charts\">\r\n    <p-chart type=\"radar\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/radarchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"radarchartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class RadarChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'My First dataset',\r\n                    backgroundColor: 'rgba(179,181,198,0.2)',\r\n                    borderColor: 'rgba(179,181,198,1)',\r\n                    pointBackgroundColor: 'rgba(179,181,198,1)',\r\n                    pointBorderColor: '#fff',\r\n                    pointHoverBackgroundColor: '#fff',\r\n                    pointHoverBorderColor: 'rgba(179,181,198,1)',\r\n                    data: [65, 59, 90, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'My Second dataset',\r\n                    backgroundColor: 'rgba(255,99,132,0.2)',\r\n                    borderColor: 'rgba(255,99,132,1)',\r\n                    pointBackgroundColor: 'rgba(255,99,132,1)',\r\n                    pointBorderColor: '#fff',\r\n                    pointHoverBackgroundColor: '#fff',\r\n                    pointHoverBorderColor: 'rgba(255,99,132,1)',\r\n                    data: [28, 48, 40, 19, 96, 27, 100]\r\n                &#125;\r\n            ]\r\n        &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"radarchartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"radar\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/chart/radarchart/radarchartdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/chart/radarchart/radarchartdemo.ts ***!
  \************************************************************************/
/*! exports provided: RadarChartDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadarChartDemo", function() { return RadarChartDemo; });
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

var RadarChartDemo = /** @class */ (function () {
    function RadarChartDemo() {
        this.data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    }
    RadarChartDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./radarchartdemo.html */ "./src/app/showcase/components/chart/radarchart/radarchartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], RadarChartDemo);
    return RadarChartDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-chart-chartdemo-module.js.map