(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-progressbar-progressbardemo-module"],{

/***/ "./src/app/showcase/components/progressbar/progressbardemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/progressbar/progressbardemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProgressBarDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoRoutingModule", function() { return ProgressBarDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _progressbardemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbardemo */ "./src/app/showcase/components/progressbar/progressbardemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressBarDemoRoutingModule = /** @class */ (function () {
    function ProgressBarDemoRoutingModule() {
    }
    ProgressBarDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _progressbardemo__WEBPACK_IMPORTED_MODULE_2__["ProgressBarDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProgressBarDemoRoutingModule);
    return ProgressBarDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressbar/progressbardemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/progressbar/progressbardemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">ProgressBar</span>\r\n        <span>ProgressBar is a process status indicator.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <h3 class=\"first\">Dynamic</h3>\r\n    <p-progressBar [value]=\"value\"></p-progressBar>\r\n\r\n    <h3>Static</h3>\r\n    <p-progressBar [value]=\"50\"></p-progressBar>\r\n\r\n    <h3>Indeterminate</h3>\r\n    <p-progressBar mode=\"indeterminate\" [style]=\"{'height': '6px'}\"></p-progressBar>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ProgressBarModule&#125; from 'primeng/progressbar';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>ProgressBar has two modes; \"determinate\" and \"indeterminate\". Former requires a value between 0 and 100 to display the progress.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-progressBar [value]=\"value\"&gt;&lt;/p-progressBar&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    value: number = 0;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Indeterminate has no such a requirement and is simple enabled using mode property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-progressBar mode=\"indeterminate\"&gt;&lt;/p-progressBar&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Current value of the progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showValue</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Show or hide progress bar value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>unit</td>\r\n                            <td>string</td>\r\n                            <td>%</td>\r\n                            <td>Unit sign appended to the value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>mode</td>\r\n                            <td>string</td>\r\n                            <td>determinate</td>\r\n                            <td>Defines the mode of the progress, valid values are \"determinate\" and \"indeterminate\".</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-progressbar</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-progressbar-determinate</td>\r\n                            <td>Container element of a determinate progressbar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-progressbar-indeterminate</td>\r\n                            <td>Container element of an indeterminate progressbar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-progressbar-value</td>\r\n                            <td>Element whose width changes according to value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-progressbar-label</td>\r\n                            <td>Label element that displays the current value.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/progressbar\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Dynamic&lt;/h3&gt;\r\n&lt;p-progressBar [value]=\"value\"&gt;&lt;/p-progressBar&gt;\r\n\r\n&lt;h3&gt;Static&lt;/h3&gt;\r\n&lt;p-progressBar [value]=\"50\"&gt;&lt;/p-progressBar&gt;\r\n\r\n&lt;h3&gt;Indeterminate&lt;/h3&gt;\r\n&lt;p-progressBar mode=\"indeterminate\" [style]=\"&#123;'height': '6px'&#125;\"&gt;&lt;/p-progressBar&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ProgressBarDemo &#123;\r\n\r\n    value: number = 0;\r\n\r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        let interval = setInterval(() => &#123;\r\n            this.value = this.value + Math.floor(Math.random() * 10) + 1;\r\n            if(this.value >= 100) &#123;\r\n                this.value = 100;\r\n                this.messageService.add(&#123;severity: 'info', summary: 'Success', detail: 'Process Completed'&#125;);\r\n                clearInterval(interval);\r\n            &#125;\r\n        &#125;, 2000);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/progressbar/progressbardemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/progressbar/progressbardemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressBarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoModule", function() { return ProgressBarDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progressbardemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbardemo */ "./src/app/showcase/components/progressbar/progressbardemo.ts");
/* harmony import */ var _progressbardemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbardemo-routing.module */ "./src/app/showcase/components/progressbar/progressbardemo-routing.module.ts");
/* harmony import */ var _components_progressbar_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/progressbar/progressbar */ "./src/app/components/progressbar/progressbar.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProgressBarDemoModule = /** @class */ (function () {
    function ProgressBarDemoModule() {
    }
    ProgressBarDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _progressbardemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProgressBarDemoRoutingModule"],
                _components_progressbar_progressbar__WEBPACK_IMPORTED_MODULE_4__["ProgressBarModule"],
                _components_toast_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _progressbardemo__WEBPACK_IMPORTED_MODULE_2__["ProgressBarDemo"]
            ]
        })
    ], ProgressBarDemoModule);
    return ProgressBarDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressbar/progressbardemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/progressbar/progressbardemo.ts ***!
  \********************************************************************/
/*! exports provided: ProgressBarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemo", function() { return ProgressBarDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/common/messageservice */ "./src/app/components/common/messageservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressBarDemo = /** @class */ (function () {
    function ProgressBarDemo(messageService) {
        this.messageService = messageService;
        this.value = 0;
    }
    ProgressBarDemo.prototype.ngOnInit = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                _this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(interval);
            }
        }, 2000);
    };
    ProgressBarDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./progressbardemo.html */ "./src/app/showcase/components/progressbar/progressbardemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], ProgressBarDemo);
    return ProgressBarDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-progressbar-progressbardemo-module.js.map