(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-messages-messagesdemo-module"],{

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

/***/ "./src/app/showcase/components/messages/messagesdemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/messages/messagesdemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MessagesDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemoRoutingModule", function() { return MessagesDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messagesdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messagesdemo */ "./src/app/showcase/components/messages/messagesdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesDemoRoutingModule = /** @class */ (function () {
    function MessagesDemoRoutingModule() {
    }
    MessagesDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _messagesdemo__WEBPACK_IMPORTED_MODULE_2__["MessagesDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MessagesDemoRoutingModule);
    return MessagesDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.html":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/messages/messagesdemo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Messages</span>\r\n        <span>Messages is used to display messages inline.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-messages [(value)]=\"msgs\"></p-messages>\r\n\r\n    <h3 class=\"first\">Basic</h3>\r\n    <div>\r\n        <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\r\n        <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\r\n        <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\r\n        <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\r\n        <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\r\n        <button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" style=\"float:right\" label=\"Clear\"></button>\r\n    </div>\r\n    \r\n    <h3>Message Service</h3>\r\n    <button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"></button>\r\n    \r\n    <h3>Inline Message CSS</h3>\r\n    <p>p-message component is used to display inline messages mostly within forms.</p>\r\n    <p-message severity=\"info\" text=\"PrimeNG Rocks\"></p-message>\r\n    <p-message severity=\"success\" text=\"Record Saved\"></p-message>  \r\n    <p-message severity=\"warn\" text=\"Are you sure?\"></p-message>  \r\n    <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n    \r\n    <div style=\"margin-top:30px\">\r\n        <input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\">\r\n        <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n    </div>\r\n    \r\n    <div style=\"margin-top:30px\">\r\n        <input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\">\r\n        <p-message severity=\"error\"></p-message>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MessagesModule&#125; from 'primeng/messages';\r\nimport &#123;MessageModule&#125; from 'primeng/message';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>A single message is specified by Message interface in PrimeNG that defines the id, severity, summary and detail as the properties.\r\n                Messages to display can either be defined using the value property which should an array of Message instances or using \r\n               a MessageService are defined using the value property which should an array of Message instances.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Message Array</h3>\r\n            <p>A binding to the value property is required to provide messages to the component.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"show()\"&gt;Show&lt;/button&gt;\r\n&lt;button type=\"button\" (click)=\"clear()\"&gt;Hide&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshow() &#123;\r\n    this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n&#125;\r\n\r\nhide() &#123;\r\n    this.msgs = [];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Message Service</h3>\r\n            <p>MessageService alternative does not require a value binding to an array.\r\n            In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself \r\n            so that descandant components can have it injected. If there are multiple message components having the same message service, you may use key property of the component\r\n            to match the key of the message to implement scoping.</p>\r\n            \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MessageService&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;Message&#125; from 'primeng//api';\r\nimport &#123;MessageService&#125; from 'primeng/api';\r\n\r\n@Component(&#123;\r\n    templateUrl: './messagesdemo.html'\r\n    &#125;)\r\n    export class MessageServiceDemo &#123;\r\n\r\n        constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n        addSingle() &#123;\r\n            this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n        &#125;\r\n\r\n        addMultiple() &#123;\r\n            this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\r\n                            &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\r\n        &#125;\r\n        \r\n        clear() &#123;\r\n            this.messageService.clear();\r\n        &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Closable</h3>\r\n            <p>Messages are closable by default resulting in a close icon being displayed on top right corner.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In order to disable closable messages, set closable to false. Note that in this case two-way binding is not necessary as the component\r\n            does not need to update its value.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [value]=\"msgs\" [closable]=\"false\"&gt;&lt;/p-messages&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Severities</h3>\r\n            <p>Here are the possible values for the severity of a message.</p>\r\n            <ul>\r\n                <li>success</li>\r\n                <li>info</li>\r\n                <li>warn</li>\r\n                <li>error</li>\r\n            </ul>\r\n            \r\n            <h3>Message Component</h3>\r\n            <p>Message component is useful in cases where messages need to be displayed related to an element such as forms. It has two property, severity and text of the message.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\r\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\r\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\r\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-message [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of messages to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines if message box can be closed by the click icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>enableService</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether displaying services messages are enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Id to match the key of the message to enable scoping in service based messaging.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>300ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>250ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-messages</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-info</td>\r\n                            <td>Container element when displaying info messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-warn</td>\r\n                            <td>Container element when displaying warning messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-error</td>\r\n                            <td>Container element when displaying error messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-success</td>\r\n                            <td>Container element when displaying success messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-close</td>\r\n                            <td>Close icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-icon</td>\r\n                            <td>Severity icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-summary</td>\r\n                            <td>Summary of a message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-detail</td>\r\n                            <td>Detail of a message.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/messages\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;div&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" style=\"float:right\" label=\"Clear\"&gt;&lt;/button&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Message Service&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\r\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\r\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\r\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\r\n\r\n&lt;div style=\"margin-top:30px\"&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\"&gt;\r\n    &lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div style=\"margin-top:30px\"&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\"&gt;\r\n    &lt;p-message severity=\"error\"&gt;&lt;/p-message&gt;\r\n&lt;/div>\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;SelectItem&#125; from 'primeng/components/common/api';\r\nimport &#123;Message&#125; from 'primeng/components/common/api';\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n\r\n@Component(&#123;\r\n    templateUrl: './messagesdemo.html',\r\n    styles: [`\r\n        :host ::ng-deep button &#123;\r\n            margin-right: .25em;\r\n        &#125;\r\n\r\n        :host ::ng-deep .ui-message,\r\n        :host ::ng-deep .ui-inputtext &#123;\r\n            margin-right: .25em;\r\n        &#125;\r\n    `],\r\n    providers: [MessageService]\r\n&#125;)\r\nexport class MessagesDemo &#123;\r\n\r\n    msgs: Message[] = [];\r\n    \r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    showSuccess() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'success', summary:'Success Message', detail:'Order submitted'&#125;);\r\n    &#125;\r\n\r\n    showInfo() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n    &#125;\r\n\r\n    showWarn() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'&#125;);\r\n    &#125;\r\n\r\n    showError() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'error', summary:'Error Message', detail:'Validation failed'&#125;);\r\n    &#125;\r\n\r\n    showMultiple() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;);\r\n    &#125;\r\n    \r\n    showViaService() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n    &#125;\r\n\r\n    clear() &#123;\r\n        this.msgs = [];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/messages/messagesdemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: MessagesDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemoModule", function() { return MessagesDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _messagesdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messagesdemo */ "./src/app/showcase/components/messages/messagesdemo.ts");
/* harmony import */ var _messagesdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messagesdemo-routing.module */ "./src/app/showcase/components/messages/messagesdemo-routing.module.ts");
/* harmony import */ var _components_messages_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/messages/messages */ "./src/app/components/messages/messages.ts");
/* harmony import */ var _components_message_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/message/message */ "./src/app/components/message/message.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MessagesDemoModule = /** @class */ (function () {
    function MessagesDemoModule() {
    }
    MessagesDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _messagesdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["MessagesDemoRoutingModule"],
                _components_messages_messages__WEBPACK_IMPORTED_MODULE_4__["MessagesModule"],
                _components_message_message__WEBPACK_IMPORTED_MODULE_5__["MessageModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
            ],
            declarations: [
                _messagesdemo__WEBPACK_IMPORTED_MODULE_2__["MessagesDemo"]
            ]
        })
    ], MessagesDemoModule);
    return MessagesDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/messages/messagesdemo.ts ***!
  \**************************************************************/
/*! exports provided: MessagesDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemo", function() { return MessagesDemo; });
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


var MessagesDemo = /** @class */ (function () {
    function MessagesDemo(messageService) {
        this.messageService = messageService;
        this.msgs = [];
    }
    MessagesDemo.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    MessagesDemo.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemo.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemo.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemo.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    MessagesDemo.prototype.showViaService = function () {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    };
    MessagesDemo.prototype.clear = function () {
        this.msgs = [];
    };
    MessagesDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./messagesdemo.html */ "./src/app/showcase/components/messages/messagesdemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]],
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .ui-message,\n        :host ::ng-deep .ui-inputtext {\n            margin-right: .25em;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesDemo);
    return MessagesDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-messages-messagesdemo-module.js.map