(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-terminal-terminaldemo-module"],{

/***/ "./src/app/components/terminal/terminal.ts":
/*!*************************************************!*\
  !*** ./src/app/components/terminal/terminal.ts ***!
  \*************************************************/
/*! exports provided: Terminal, TerminalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalModule", function() { return TerminalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _terminalservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terminalservice */ "./src/app/components/terminal/terminalservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Terminal = /** @class */ (function () {
    function Terminal(el, terminalService) {
        var _this = this;
        this.el = el;
        this.terminalService = terminalService;
        this.commands = [];
        this.subscription = terminalService.responseHandler.subscribe(function (response) {
            _this.commands[_this.commands.length - 1].response = response;
            _this.commandProcessed = true;
        });
    }
    Terminal.prototype.ngAfterViewInit = function () {
        this.container = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].find(this.el.nativeElement, '.ui-terminal')[0];
    };
    Terminal.prototype.ngAfterViewChecked = function () {
        if (this.commandProcessed) {
            this.container.scrollTop = this.container.scrollHeight;
            this.commandProcessed = false;
        }
    };
    Object.defineProperty(Terminal.prototype, "response", {
        set: function (value) {
            if (value) {
                this.commands[this.commands.length - 1].response = value;
                this.commandProcessed = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Terminal.prototype.handleCommand = function (event) {
        if (event.keyCode == 13) {
            this.commands.push({ text: this.command });
            this.terminalService.sendCommand(this.command);
            this.command = '';
        }
    };
    Terminal.prototype.focus = function (element) {
        element.focus();
    };
    Terminal.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Terminal.prototype, "welcomeMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Terminal.prototype, "prompt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Terminal.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Terminal.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Terminal.prototype, "response", null);
    Terminal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-terminal',
            template: "\n        <div [ngClass]=\"'ui-terminal ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"focus(in)\">\n            <div *ngIf=\"welcomeMessage\">{{welcomeMessage}}</div>\n            <div class=\"ui-terminal-content\">\n                <div *ngFor=\"let command of commands\">\n                    <span>{{prompt}}</span>\n                    <span class=\"ui-terminal-command\">{{command.text}}</span>\n                    <div>{{command.response}}</div>\n                </div>\n            </div>\n            <div>\n                <span class=\"ui-terminal-content-prompt\">{{prompt}}</span>\n                <input #in type=\"text\" [(ngModel)]=\"command\" class=\"ui-terminal-input\" autocomplete=\"off\" (keydown)=\"handleCommand($event)\" autofocus>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _terminalservice__WEBPACK_IMPORTED_MODULE_4__["TerminalService"]])
    ], Terminal);
    return Terminal;
}());

var TerminalModule = /** @class */ (function () {
    function TerminalModule() {
    }
    TerminalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
            exports: [Terminal],
            declarations: [Terminal]
        })
    ], TerminalModule);
    return TerminalModule;
}());



/***/ }),

/***/ "./src/app/components/terminal/terminalservice.ts":
/*!********************************************************!*\
  !*** ./src/app/components/terminal/terminalservice.ts ***!
  \********************************************************/
/*! exports provided: TerminalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalService", function() { return TerminalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TerminalService = /** @class */ (function () {
    function TerminalService() {
        this.commandSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.responseSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.commandHandler = this.commandSource.asObservable();
        this.responseHandler = this.responseSource.asObservable();
    }
    TerminalService.prototype.sendCommand = function (command) {
        if (command) {
            this.commandSource.next(command);
        }
    };
    TerminalService.prototype.sendResponse = function (response) {
        if (response) {
            this.responseSource.next(response);
        }
    };
    TerminalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TerminalService);
    return TerminalService;
}());



/***/ }),

/***/ "./src/app/showcase/components/terminal/terminaldemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/terminal/terminaldemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TerminalDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalDemoRoutingModule", function() { return TerminalDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _terminaldemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminaldemo */ "./src/app/showcase/components/terminal/terminaldemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TerminalDemoRoutingModule = /** @class */ (function () {
    function TerminalDemoRoutingModule() {
    }
    TerminalDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _terminaldemo__WEBPACK_IMPORTED_MODULE_2__["TerminalDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], TerminalDemoRoutingModule);
    return TerminalDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/terminal/terminaldemo.html":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/terminal/terminaldemo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Terminal</span>\r\n        <span>Terminal is a text based user interface. Enter \"date\" to display the current date.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"></p-terminal>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TerminalModule&#125; from 'primeng/terminal';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Commands are processed using observables via the TerminalService. Import this service into your component and subscribe\r\n            to commandHandler to process commands by sending replies with sendResponse function.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;TerminalService&#125; from 'primeng/components/terminal/terminalservice';\r\n\r\n@Component(&#123;\r\n    template: '&lt;p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"&gt;&lt;/p-terminal&gt;',\r\n    providers: [TerminalService]\r\n&#125;)\r\nexport class TerminalDemo &#123;\r\n    \r\n    constructor(private terminalService: TerminalService) &#123;\r\n        this.terminalService.commandHandler.subscribe(command => &#123;\r\n            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\r\n            this.terminalService.sendResponse(response);\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>welcomeMessage</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Initial text to display on terminal.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>prompt</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Prompt text for each command.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-terminal</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-terminal-content</td>\r\n                            <td>Content of terminal.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-terminal-content-prompt</td>\r\n                            <td>Prompt text.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-terminal-input</td>\r\n                            <td>Input element to enter commands.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n<p-tabPanel header=\"Source\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/terminal\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"&gt;&lt;/p-terminal&gt;\r\n</code>\r\n</pre>\r\n    \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;TerminalService&#125; from 'primeng/components/terminal/terminalservice';\r\nimport &#123;Subscription&#125; from 'rxjs/Subscription';\r\n\r\n@Component(&#123;\r\n    templateUrl: './terminaldemo.html',\r\n    providers: [TerminalService]\r\n&#125;)\r\nexport class TerminalDemo &#123;\r\n\r\n    subscription: Subscription;\r\n    \r\n    constructor(private terminalService: TerminalService) &#123;\r\n        this.terminalService.commandHandler.subscribe(command => &#123;\r\n            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\r\n            this.terminalService.sendResponse(response);\r\n        &#125;);\r\n    &#125;\r\n    \r\n    ngOnDestroy() &#123;\r\n        if(this.subscription) &#123;\r\n            this.subscription.unsubscribe();\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n</p-tabPanel>\r\n\r\n\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/terminal/terminaldemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/terminal/terminaldemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: TerminalDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalDemoModule", function() { return TerminalDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _terminaldemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminaldemo */ "./src/app/showcase/components/terminal/terminaldemo.ts");
/* harmony import */ var _terminaldemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminaldemo-routing.module */ "./src/app/showcase/components/terminal/terminaldemo-routing.module.ts");
/* harmony import */ var _components_terminal_terminal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/terminal/terminal */ "./src/app/components/terminal/terminal.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TerminalDemoModule = /** @class */ (function () {
    function TerminalDemoModule() {
    }
    TerminalDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _terminaldemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["TerminalDemoRoutingModule"],
                _components_terminal_terminal__WEBPACK_IMPORTED_MODULE_4__["TerminalModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _terminaldemo__WEBPACK_IMPORTED_MODULE_2__["TerminalDemo"]
            ]
        })
    ], TerminalDemoModule);
    return TerminalDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/terminal/terminaldemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/terminal/terminaldemo.ts ***!
  \**************************************************************/
/*! exports provided: TerminalDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalDemo", function() { return TerminalDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/terminal/terminalservice */ "./src/app/components/terminal/terminalservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminalDemo = /** @class */ (function () {
    function TerminalDemo(terminalService) {
        var _this = this;
        this.terminalService = terminalService;
        this.subscription = this.terminalService.commandHandler.subscribe(function (command) {
            var response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            _this.terminalService.sendResponse(response);
        });
    }
    TerminalDemo.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TerminalDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./terminaldemo.html */ "./src/app/showcase/components/terminal/terminaldemo.html"),
            providers: [_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__["TerminalService"]]
        }),
        __metadata("design:paramtypes", [_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__["TerminalService"]])
    ], TerminalDemo);
    return TerminalDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-terminal-terminaldemo-module.js.map