(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-menudemo-module"],{

/***/ "./src/app/showcase/components/menu/menudemo-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/menu/menudemo-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDemoRoutingModule", function() { return MenuDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menudemo */ "./src/app/showcase/components/menu/menudemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuDemoRoutingModule = /** @class */ (function () {
    function MenuDemoRoutingModule() {
    }
    MenuDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _menudemo__WEBPACK_IMPORTED_MODULE_2__["MenuDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MenuDemoRoutingModule);
    return MenuDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/menu/menudemo.html":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/menu/menudemo.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Menu</span>\r\n        <span>Menu is a navigation/command component that supports dynamic and static positioning.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-menu [model]=\"items\"></p-menu>\r\n\r\n    <h3>Popup</h3>\r\n    <p-menu #menu [popup]=\"true\" [model]=\"items\"></p-menu>\r\n    <button type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MenuModule&#125; from 'primeng/menu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>Menu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Menu requires a collection of menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n    \r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'New', icon: 'pi pi-fw pi-plus'&#125;,\r\n            &#123;label: 'Open', icon: 'pi pi-fw pi-download'&#125;,\r\n            &#123;label: 'Undo', icon: 'pi pi-fw pi-refresh'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>SubMenus</h3>\r\n            <p>Menu supports 1 level of nesting via subitems of an item.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n    \r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [&#123;\r\n            label: 'File',\r\n            items: [\r\n                &#123;label: 'New', icon: 'pi pi-fw pi-plus'&#125;,\r\n                &#123;label: 'Download', icon: 'pi pi-fw pi-download'&#125;\r\n            ]\r\n        &#125;,\r\n        &#123;\r\n            label: 'Edit',\r\n            items: [\r\n                &#123;label: 'Add User', icon: 'pi pi-fw pi-user-plus'&#125;,\r\n                &#123;label: 'Remove User', icon: 'pi pi-fw pi-user-minus'&#125;\r\n            ]\r\n        &#125;];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Popup Mode</h3>\r\n            <p>Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \r\n                    from the anchor element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-menu #menu [popup]=\"true\" [model]=\"items\"&gt;&lt;/p-menu&gt;\r\n&lt;button type=\"button\" pButton icon=\"fa fa-fw fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n                example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-menu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [popup]=\"true\" [model]=\"items\"&gt;&lt;/p-menu&gt;\r\n&lt;button type=\"button\" pButton icon=\"fa fa-fw fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>       \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>popup</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if menu would displayed as a popup.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>225ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>195ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onShow</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when overlay menu is shown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHide</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when overlay menu is hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>toggle</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Toggles the visibility of the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>show</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Displays the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hide</td>\r\n                            <td>-</td>\r\n                            <td>Hides the popup menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-menu</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menu-list</td>\r\n                            <td>List element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem</td>\r\n                            <td>Menuitem element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-text</td>\r\n                            <td>Label of a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-icon</td>\r\n                            <td>Icon of a menuitem.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\r\n\r\n&lt;h3&gt;Popup&lt;/h3&gt;\r\n&lt;p-menu #menu [popup]=\"true\" [model]=\"items\"&gt;&lt;/p-menu&gt;\r\n&lt;button type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n    \r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [&#123;\r\n            label: 'File',\r\n            items: [\r\n                &#123;label: 'New', icon: 'pi pi-fw pi-plus'&#125;,\r\n                &#123;label: 'Download', icon: 'pi pi-fw pi-download'&#125;\r\n            ]\r\n        &#125;,\r\n        &#123;\r\n            label: 'Edit',\r\n            items: [\r\n                &#123;label: 'Add User', icon: 'pi pi-fw pi-user-plus'&#125;,\r\n                &#123;label: 'Remove User', icon: 'pi pi-fw pi-user-minus'&#125;\r\n            ]\r\n        &#125;];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/menu/menudemo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/showcase/components/menu/menudemo.module.ts ***!
  \*************************************************************/
/*! exports provided: MenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDemoModule", function() { return MenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menudemo */ "./src/app/showcase/components/menu/menudemo.ts");
/* harmony import */ var _menudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menudemo-routing.module */ "./src/app/showcase/components/menu/menudemo-routing.module.ts");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/menu/menu */ "./src/app/components/menu/menu.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






;


var MenuDemoModule = /** @class */ (function () {
    function MenuDemoModule() {
    }
    MenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _menudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuDemoRoutingModule"],
                _components_menu_menu__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _menudemo__WEBPACK_IMPORTED_MODULE_2__["MenuDemo"]
            ]
        })
    ], MenuDemoModule);
    return MenuDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/menu/menudemo.ts":
/*!******************************************************!*\
  !*** ./src/app/showcase/components/menu/menudemo.ts ***!
  \******************************************************/
/*! exports provided: MenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDemo", function() { return MenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuDemo = /** @class */ (function () {
    function MenuDemo() {
    }
    MenuDemo.prototype.ngOnInit = function () {
        this.items = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Download', icon: 'pi pi-fw pi-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
                    { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' }
                ]
            }];
    };
    MenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./menudemo.html */ "./src/app/showcase/components/menu/menudemo.html")
        })
    ], MenuDemo);
    return MenuDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-menu-menudemo-module.js.map