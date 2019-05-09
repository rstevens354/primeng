(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menumodel-menumodeldemo-module"],{

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

/***/ "./src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MenuModelDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModelDemoRoutingModule", function() { return MenuModelDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menumodeldemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menumodeldemo */ "./src/app/showcase/components/menumodel/menumodeldemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModelDemoRoutingModule = /** @class */ (function () {
    function MenuModelDemoRoutingModule() {
    }
    MenuModelDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _menumodeldemo__WEBPACK_IMPORTED_MODULE_2__["MenuModelDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MenuModelDemoRoutingModule);
    return MenuModelDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/menumodel/menumodeldemo.html":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/menumodel/menumodeldemo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">MenuModel API</span>\r\n        <span>PrimeNG menus components share a common api to specify the menuitems and submenus.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 class=\"first\">MenuItem</h3>\r\n    <p>Core of the api is MenuItem class that defines various options such as the label, icon and children of an item in a menu. Example below\r\n    is a sample configuration with Menu component.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MenuModule&#125; from 'primeng/menu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n\r\n    private items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [&#123;\r\n            label: 'File',\r\n            items: [\r\n                &#123;label: 'New', icon: 'fa fa-plus'&#125;,\r\n                &#123;label: 'Open', icon: 'fa fa-download'&#125;\r\n            ]\r\n        &#125;,\r\n        &#123;\r\n            label: 'Edit',\r\n            items: [\r\n                &#123;label: 'Undo', icon: 'fa fa-refresh'&#125;,\r\n                &#123;label: 'Redo', icon: 'fa fa-repeat'&#125;\r\n            ]\r\n        &#125;];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <p>MenuItem provides the following properties. Note that not all of them may be utilized by the menu component.</p>\r\n    <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Type</th>\r\n                    <th>Default</th>\r\n                    <th>Description</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>id</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Identifier of the element.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>label</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Text of the item.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>icon</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Icon of the item.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>command</td>\r\n                    <td>function</td>\r\n                    <td>null</td>\r\n                    <td>Callback to execute when item is clicked.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>url</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>External link to navigate when item is clicked.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>routerLink</td>\r\n                    <td>array</td>\r\n                    <td>null</td>\r\n                    <td>RouterLink definition for internal navigation.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>routerLinkActiveOptions</td>\r\n                    <td>object</td>\r\n                    <td>null</td>\r\n                    <td>Configuration for active router link.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>queryParams</td>\r\n                    <td>object</td>\r\n                    <td>null</td>\r\n                    <td>Query parameters for internal navigation via routerLink.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>items</td>\r\n                    <td>array</td>\r\n                    <td>null</td>\r\n                    <td>An array of children menuitems.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>expanded</td>\r\n                    <td>boolean</td>\r\n                    <td>false</td>\r\n                    <td>Visibility of submenu.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>disabled</td>\r\n                    <td>boolean</td>\r\n                    <td>false</td>\r\n                    <td>When set as true, disables the menuitem.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>visible</td>\r\n                    <td>boolean</td>\r\n                    <td>true</td>\r\n                    <td>Whether the dom element of menuitem is created or not.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>target</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Specifies where to open the linked document.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>separator</td>\r\n                    <td>boolean</td>\r\n                    <td>false</td>\r\n                    <td>Defines the item as a separator.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>style</td>\r\n                    <td>object</td>\r\n                    <td>null</td>\r\n                    <td>Inline style of the menuitem.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>styleClass</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Style class of the menuitem.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>badge</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Value of the badge.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>badgeStyleClass</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Style class of the badge.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>title</td>\r\n                    <td>string</td>\r\n                    <td>null</td>\r\n                    <td>Tooltip text of the item.</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>automationId</td>\r\n                    <td>any</td>\r\n                    <td>null</td>\r\n                    <td>Value of HTML data-* attribute.</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <h4>Command</h4>\r\n    <p>The function to invoke when an item is clicked is defined using the command property.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n\r\n    private items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [&#123;\r\n            label: 'File',\r\n            items: [\r\n                &#123;label: 'New', icon: 'fa fa-plus', command: (event) => &#123;\r\n                    //event.originalEvent: Browser event\r\n                    //event.item: menuitem metadata\r\n                }}\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <h4>Navigation</h4>\r\n    <p>Navigation is specified using url property for external links and with routerLink for internal ones. If a menuitem has an active route, <i>ui-state-active</i> style class is added as an indicator. Active route link can be\r\n    configured with routerLinkActiveOptions property of MenuItem API.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n\r\n    private items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [&#123;\r\n            label: 'File',\r\n            items: [\r\n                &#123;label: 'New', icon: 'fa fa-plus', url: 'http://www.primefaces.org/primeng'&#125;,\r\n                &#123;label: 'Open', icon: 'fa fa-download', routerLink: ['/pagename']&#125;\r\n                &#123;label: 'Recent Files', icon: 'fa fa-download', routerLink: ['/pagename'], queryParams: &#123;'recent': 'true'&#125;&#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/menumodel/menumodeldemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/menumodel/menumodeldemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: MenuModelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModelDemoModule", function() { return MenuModelDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menumodeldemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menumodeldemo */ "./src/app/showcase/components/menumodel/menumodeldemo.ts");
/* harmony import */ var _menumodeldemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menumodeldemo-routing.module */ "./src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MenuModelDemoModule = /** @class */ (function () {
    function MenuModelDemoModule() {
    }
    MenuModelDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _menumodeldemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuModelDemoRoutingModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_4__["CodeHighlighterModule"]
            ],
            declarations: [
                _menumodeldemo__WEBPACK_IMPORTED_MODULE_2__["MenuModelDemo"]
            ]
        })
    ], MenuModelDemoModule);
    return MenuModelDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/menumodel/menumodeldemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/menumodel/menumodeldemo.ts ***!
  \****************************************************************/
/*! exports provided: MenuModelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModelDemo", function() { return MenuModelDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuModelDemo = /** @class */ (function () {
    function MenuModelDemo() {
    }
    MenuModelDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./menumodeldemo.html */ "./src/app/showcase/components/menumodel/menumodeldemo.html")
        })
    ], MenuModelDemo);
    return MenuModelDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-menumodel-menumodeldemo-module.js.map