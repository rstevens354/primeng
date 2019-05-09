(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-toast-toastdemo-module"],{

/***/ "./src/app/showcase/components/toast/toastdemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/toast/toastdemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ToastDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastDemoRoutingModule", function() { return ToastDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toastdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastdemo */ "./src/app/showcase/components/toast/toastdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToastDemoRoutingModule = /** @class */ (function () {
    function ToastDemoRoutingModule() {
    }
    ToastDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _toastdemo__WEBPACK_IMPORTED_MODULE_2__["ToastDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ToastDemoRoutingModule);
    return ToastDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/toast/toastdemo.html":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/toast/toastdemo.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Toast</span>\r\n        <span>Toast is used to display messages in an overlay.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n    <p-toast [style]=\"{marginTop: '80px'}\" position=\"top-left\" key=\"tl\"></p-toast>\r\n\r\n    <p-toast [style]=\"{marginTop: '80px'}\" position=\"top-center\" key=\"tc\"></p-toast>\r\n\r\n    <p-toast [style]=\"{marginTop: '80px'}\" styleClass=\"custom-toast\" key=\"custom\" position=\"bottom-center\"></p-toast>\r\n\r\n    <p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\">\r\n        <ng-template let-message pTemplate=\"message\">\r\n            <div style=\"text-align: center\">\r\n                <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\r\n                <h3>{{message.summary}}</h3>\r\n                <p>{{message.detail}}</p>\r\n            </div>\r\n            <div class=\"ui-g ui-fluid\">\r\n                <div class=\"ui-g-6\">\r\n                    <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-success\"></button>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\"></button>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-toast>\r\n\r\n    <h3 class=\"first\">Severities</h3>\r\n    <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\r\n    <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\r\n    <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\r\n    <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\r\n    <button type=\"button\" pButton (click)=\"showCustom()\" label=\"Custom\"></button>\r\n\r\n\r\n    <h3>Multiple</h3>\r\n    <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\r\n\r\n    <h3>Clear</h3>\r\n    <button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" label=\"Remove All\"></button>\r\n\r\n    <h3>Positions</h3>\r\n    <button type=\"button\" pButton (click)=\"showTopLeft()\" label=\"Top Left\" class=\"ui-button-success\"></button>\r\n    <button type=\"button\" pButton (click)=\"showTopCenter()\" label=\"Top Center\" class=\"ui-button-info\"></button>\r\n\r\n    <h3>Template</h3>\r\n    <button type=\"button\" pButton (click)=\"showConfirm()\" label=\"Confirm\" class=\"ui-button-warning\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ToastModule&#125; from 'primeng/toast';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>A single message is specified by the Message interface having the following properties.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>severity</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Severity level of the message, valid values are \"success\", \"info\", \"warn\" and \"error\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>summary</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Summary text of the message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>detail</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Detail text of the message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>id</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Key of the message in case message is targeted to a specific toast component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>life</td>\r\n                            <td>number</td>\r\n                            <td>3000</td>\r\n                            <td>Number of time in milliseconds to wait before closing the message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sticky</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the message should be automatically closed based on life property or kept visible.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>When enabled, displays a close icon to hide a message manually.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>data</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Arbitrary object to associate with the message.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <p>A message is displayed using a MessageService, make sure your component has an injectable MessageService defined as a provider otherwise Toast cannot be utilized.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast&gt;&lt;/p-toast&gt;\r\n</code>\r\n</pre>\r\n       \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;MessageService&#125; from 'primeng/api';\r\n\r\n@Component(&#123;\r\n    templateUrl: './my.component.html'\r\n&#125;)\r\nexport class MyComponent &#123;\r\n    \r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n    \r\n    addSingle() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n    &#125;\r\n    \r\n    addMultiple() &#123;\r\n        this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\r\n                                    &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\r\n    &#125;\r\n    \r\n    clear() &#123;\r\n        this.messageService.clear();\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Positions</h3>\r\n            <p>Toast supports various positions where default is \"top-right\".</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast position=\"top-left\"&gt;&lt;/p-toast&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Valid values of the position property would be;</p>\r\n            <ul>\r\n                <li>top-right</li>\r\n                <li>top-left</li>\r\n                <li>bottom-right</li>\r\n                <li>bottom-left</li>\r\n                <li>top-center</li>\r\n                <li>bottom-center</li>\r\n                <li>center</li>\r\n            </ul>\r\n\r\n            <h3>Targeting Messages</h3>\r\n            <p>A page may have multiple toast components, in case you'd like to target a specific message to a particular toast, use the key property so that toast and the message can match.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast key=\"myKey1\"&gt;&lt;/p-toast&gt;\r\n&lt;p-toast key=\"myKey2\"&gt;&lt;/p-toast&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.messageService.add(&#123;key: 'myKey1': severity:'success', summary: 'Summary Text', detail: 'Detail Text'&#125;);\r\nthis.messageService.add(&#123;key: 'myKey2': severity:'success', summary: 'Summary Text', detail: 'Detail Text'&#125;);\r\n</code>\r\n</pre>\r\n\r\n            <h3>Clearing Messages</h3>\r\n            <p>Clicking the close icon on the message, removes it manually. Same can also be achieved programmatically using the clear function of the message service. Calling it without\r\n                any arguments, removes all displayed messages whereas calling it with a key, removes the messages displayed on a toast having the same key.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast key=\"myKey1\"&gt;&lt;/p-toast&gt;\r\n&lt;p-toast key=\"myKey2\"&gt;&lt;/p-toast&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.messageService.clear();            //clears messages of both toast components\r\nthis.messageService.clear('myKey1');    //clears messages of the first toast only\r\n</code>\r\n</pre>\r\n\r\n            <h3>Templating</h3>\r\n            <p>Templating allows customizing the content where the message instance is available as the implicit variable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\"&gt;\r\n    &lt;ng-template let-message pTemplate=\"message\"&gt;\r\n        &lt;div style=\"text-align: center\"&gt;\r\n            &lt;i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"&gt;&lt;/i&gt;\r\n            &lt;h3&gt;&#123;&#123;message.summary&#125;&#125;&lt;/h3&gt;\r\n            &lt;p&gt;&#123;&#123;message.detail&#125;&#125;&lt;/p&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g ui-fluid\"&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;\r\n                &lt;button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;\r\n                &lt;button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-toast&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\"&gt;&lt;/p-toast&gt;\r\n</code>\r\n</pre>  \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Key to match the key of a message to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>position</td>\r\n                            <td>string</td>\r\n                            <td>top-right</td>\r\n                            <td>Position of the component, valid values are \"top-right\", \"top-left\", \"bottom-left\", \"bottom-right\", \"top-center, \"bottom-center\" and \"center\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>modal</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines whether background should be blocked when a message is displayed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>300ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>250ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onClose</td>\r\n                            <td>event.message: Removed message</td>\r\n                            <td>Callback to invoke when a message is closed.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-toast</td>\r\n                            <td>Main container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-top-right</td>\r\n                            <td>Main container element positioned at the top right of the screen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-top-left</td>\r\n                            <td>Main container element positioned at the top right of the screen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-bottom-right</td>\r\n                            <td>Main container element positioned at the top right of the screen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-bottom-left</td>\r\n                            <td>Main container element positioned at the top right of the screen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-top-center</td>\r\n                            <td>Main container element positioned at the top center of the screen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-bottom-center</td>\r\n                            <td>Main container element positioned at the bottom center of the screen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-center</td>\r\n                            <td>Main container element positioned at the center of the screen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-message</td>\r\n                            <td>Element of a message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-message-info</td>\r\n                            <td>Element of an info message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-message-success</td>\r\n                            <td>Element of an success message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-message-warn</td>\r\n                            <td>Element of an warn message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-message-error</td>\r\n                            <td>Element of an error message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-message-content</td>\r\n                            <td>Content element of a message element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-close-icon</td>\r\n                            <td>Icon to close a message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-toast-message-text-content</td>\r\n                            <td>Content element of the message text.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/toast\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\" position=\"top-left\" key=\"tl\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\" position=\"top-center\" key=\"tc\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\" styleClass=\"custom-toast\" key=\"custom\" position=\"bottom-center\"&gt;&lt;/p-toast&gt;\r\n\r\n&lt;p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\"&gt;\r\n    &lt;ng-template let-message pTemplate=\"message\"&gt;\r\n        &lt;div style=\"text-align: center\"&gt;\r\n            &lt;i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"&gt;&lt;/i&gt;\r\n            &lt;h3&gt;&#123;&#123;message.summary&#125;&#125;&lt;/h3&gt;\r\n            &lt;p&gt;&#123;&#123;message.detail&#125;&#125;&lt;/p&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g ui-fluid\"&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;\r\n                &lt;button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;\r\n                &lt;button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-toast&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Severities&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Multiple&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Clear&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" label=\"Remove All\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Positions&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showTopLeft()\" label=\"Top Left\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showTopCenter()\" label=\"Top Center\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Template&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showConfirm()\" label=\"Confirm\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './toastdemo.html',\r\n    styles: [`\r\n        :host ::ng-deep button &#123;\r\n            margin-right: .25em;\r\n        &#125;\r\n\r\n        :host ::ng-deep .custom-toast .ui-toast-message &#123;\r\n            color: #ffffff;\r\n            background: #FC466B;\r\n            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);\r\n            background: linear-gradient(to right, #3F5EFB, #FC466B);\r\n        &#125;\r\n\r\n        :host ::ng-deep .custom-toast .ui-toast-close-icon &#123;\r\n            color: #ffffff;\r\n        &#125;\r\n    `],\r\n    providers: [MessageService]\r\n&#125;)\r\nexport class ToastDemo &#123;\r\n\r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    showSuccess() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary: 'Success Message', detail:'Order submitted'&#125;);\r\n    &#125;\r\n\r\n    showInfo() &#123;\r\n        this.messageService.add(&#123;severity:'info', summary: 'Info Message', detail:'PrimeNG rocks'&#125;);\r\n    &#125;\r\n\r\n    showWarn() &#123;\r\n        this.messageService.add(&#123;severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes'&#125;);\r\n    &#125;\r\n\r\n    showError() &#123;\r\n        this.messageService.add(&#123;severity:'error', summary: 'Error Message', detail:'Validation failed'&#125;);\r\n    &#125;\r\n\r\n    showCustom() &#123;\r\n        this.messageService.add(&#123;key: 'custom', severity:'info', summary: 'Custom Toast', detail:'With a Gradient'&#125;);\r\n    &#125;\r\n\r\n    showTopLeft() &#123;\r\n        this.messageService.add(&#123;key: 'tl', severity:'info', summary: 'Success Message', detail:'Order submitted'&#125;);\r\n    &#125;\r\n\r\n    showTopCenter() &#123;\r\n        this.messageService.add(&#123;key: 'tc', severity:'warn', summary: 'Info Message', detail:'PrimeNG rocks'&#125;);\r\n    &#125;\r\n\r\n    showConfirm() &#123;\r\n        this.messageService.clear();\r\n        this.messageService.add(&#123;key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'&#125;);\r\n    &#125;\r\n\r\n    showMultiple() &#123;\r\n        this.messageService.addAll([\r\n            &#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;,\r\n            &#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;,\r\n            &#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;\r\n        ]);\r\n    &#125;\r\n\r\n    onConfirm() &#123;\r\n        this.messageService.clear('c');\r\n    &#125;\r\n\r\n    onReject() &#123;\r\n        this.messageService.clear('c');\r\n    &#125;\r\n    \r\n    clear() &#123;\r\n        this.messageService.clear();\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/toast/toastdemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/toast/toastdemo.module.ts ***!
  \***************************************************************/
/*! exports provided: ToastDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastDemoModule", function() { return ToastDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toastdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastdemo */ "./src/app/showcase/components/toast/toastdemo.ts");
/* harmony import */ var _toastdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastdemo-routing.module */ "./src/app/showcase/components/toast/toastdemo-routing.module.ts");
/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/toast/toast */ "./src/app/components/toast/toast.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ToastDemoModule = /** @class */ (function () {
    function ToastDemoModule() {
    }
    ToastDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _toastdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ToastDemoRoutingModule"],
                _components_toast_toast__WEBPACK_IMPORTED_MODULE_4__["ToastModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _toastdemo__WEBPACK_IMPORTED_MODULE_2__["ToastDemo"]
            ]
        })
    ], ToastDemoModule);
    return ToastDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/toast/toastdemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/toast/toastdemo.ts ***!
  \********************************************************/
/*! exports provided: ToastDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastDemo", function() { return ToastDemo; });
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


var ToastDemo = /** @class */ (function () {
    function ToastDemo(messageService) {
        this.messageService = messageService;
    }
    ToastDemo.prototype.showSuccess = function () {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    ToastDemo.prototype.showInfo = function () {
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    ToastDemo.prototype.showWarn = function () {
        this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    ToastDemo.prototype.showError = function () {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    ToastDemo.prototype.showCustom = function () {
        this.messageService.add({ key: 'custom', severity: 'info', summary: 'Custom Toast', detail: 'With a Gradient' });
    };
    ToastDemo.prototype.showTopLeft = function () {
        this.messageService.add({ key: 'tl', severity: 'info', summary: 'Success Message', detail: 'Order submitted' });
    };
    ToastDemo.prototype.showTopCenter = function () {
        this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    ToastDemo.prototype.showConfirm = function () {
        this.messageService.clear();
        this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
    };
    ToastDemo.prototype.showMultiple = function () {
        this.messageService.addAll([
            { severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' },
            { severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' },
            { severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' }
        ]);
    };
    ToastDemo.prototype.onConfirm = function () {
        this.messageService.clear('c');
    };
    ToastDemo.prototype.onReject = function () {
        this.messageService.clear('c');
    };
    ToastDemo.prototype.clear = function () {
        this.messageService.clear();
    };
    ToastDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./toastdemo.html */ "./src/app/showcase/components/toast/toastdemo.html"),
            providers: [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]],
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .custom-toast .ui-toast-message {\n            color: #ffffff;\n            background: #FC466B;\n            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);\n            background: linear-gradient(to right, #3F5EFB, #FC466B);\n        }\n\n        :host ::ng-deep .custom-toast .ui-toast-close-icon {\n            color: #ffffff;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], ToastDemo);
    return ToastDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-toast-toastdemo-module.js.map