(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-contextmenu-contextmenudemo-module"],{

/***/ "./src/app/showcase/components/contextmenu/contextmenudemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/contextmenu/contextmenudemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ContextMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuDemoRoutingModule", function() { return ContextMenuDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contextmenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextmenudemo */ "./src/app/showcase/components/contextmenu/contextmenudemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContextMenuDemoRoutingModule = /** @class */ (function () {
    function ContextMenuDemoRoutingModule() {
    }
    ContextMenuDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _contextmenudemo__WEBPACK_IMPORTED_MODULE_2__["ContextMenuDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ContextMenuDemoRoutingModule);
    return ContextMenuDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/contextmenu/contextmenudemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/contextmenu/contextmenudemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">ContextMenu</span>\r\n        <span>ContextMenu displays an overlay menu on right click of its target. This page has two menus, one for the document and one for the image. Note that \r\n        components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a special integration.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">    \r\n    <p-contextMenu [global]=\"true\" [model]=\"items1\"></p-contextMenu>\r\n    \r\n    <p-contextMenu [target]=\"img\" [model]=\"items2\"></p-contextMenu>\r\n    \r\n    <img #img src=\"assets/showcase/images/primeng-text.svg\" alt=\"Logo\">\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ContextMenuModule&#125; from 'primeng/contextmenu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>ContextMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>ContextMenu requires nested menuitems as its model and in its simplest form ContextMenu is attached to the document with global setting. .</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-contextMenu [global]=\"true\" [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Target</h3>\r\n            <p>ContextMenu can be attached to a particular element whose local template variable name is defined using the target property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-contextMenu [target]=\"img\" [model]=\"items2\" &gt;&lt;/p-contextMenu&gt;\r\n\r\n&lt;img #img src=\"assets/showcase/images/primeng.svg\" alt=\"Logo\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Exclusive Integrations</h3>\r\n            <p>Some components like DataTable require special attention so they provide a different method to attach a context menu. Refer to \r\n            individual documentation of components with special integration like DataTable.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ContextMenuDemo &#123;\r\n\r\n    private items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>global</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Attaches the menu to document instead of a particular item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>target</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Local template variable name of the element to attach the context menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>triggerEvent</td>\r\n                            <td>string</td>\r\n                            <td>contextmenu</td>\r\n                            <td>Event for which the menu must be displayed.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>toggle</td>\r\n                            <td>event (optional): mouse event</td>\r\n                            <td>Toggles the visibility of the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>show</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Displays the popup menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hide</td>\r\n                            <td>-</td>\r\n                            <td>Hides the popup menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>ui-contextmenu</td>\r\n                        <td>Container element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menu-list</td>\r\n                        <td>List element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem</td>\r\n                        <td>Menuitem element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-text</td>\r\n                        <td>Label of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-icon</td>\r\n                        <td>Icon of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-submenu-icon</td>\r\n                        <td>Arrow icon of a submenu.</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/contextmenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-contextMenu [global]=\"true\" [model]=\"items1\"&gt;&lt;/p-contextMenu&gt;\r\n\r\n&lt;p-contextMenu [target]=\"img\" [model]=\"items2\"&gt;&lt;/p-contextMenu&gt;\r\n\r\n&lt;img #img src=\"assets/showcase/images/primeng-text.svg\" alt=\"Logo\"&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ContextMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n    \r\n    items2: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items1 = [\r\n            &#123;\r\n                label: 'File',\r\n                icon: 'pi pi-fw pi-file',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;separator:true&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Help',\r\n                icon: 'pi pi-fw pi-question',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Contents'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Search', \r\n                        icon: 'pi pi-fw pi-search', \r\n                        items: [\r\n                            &#123;\r\n                                label: 'Text', \r\n                                items: [\r\n                                    &#123;\r\n                                        label: 'Workspace'\r\n                                    &#125;\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'File'\r\n                            &#125;\r\n                    ]&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Actions',\r\n                icon: 'pi pi-fw pi-cog',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Edit',\r\n                        icon: 'pi pi-fw pi-pencil',\r\n                        items: [\r\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\r\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Other',\r\n                        icon: 'pi pi-fw pi-tags',\r\n                        items: [\r\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;separator:true&#125;,\r\n            &#123;\r\n                label: 'Quit', icon: 'pi pi-fw pi-times'\r\n            &#125;\r\n        ];\r\n\r\n        this.items2 = [\r\n            &#123;\r\n                label: 'Next',\r\n                icon: 'pi pi-fw pi-chevron-right'\r\n            &#125;,\r\n            &#123;\r\n                label: 'Prev',\r\n                icon: 'pi pi-fw pi-chevron-left'\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/contextmenu/contextmenudemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/contextmenu/contextmenudemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: ContextMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuDemoModule", function() { return ContextMenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contextmenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextmenudemo */ "./src/app/showcase/components/contextmenu/contextmenudemo.ts");
/* harmony import */ var _contextmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contextmenudemo-routing.module */ "./src/app/showcase/components/contextmenu/contextmenudemo-routing.module.ts");
/* harmony import */ var _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/contextmenu/contextmenu */ "./src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContextMenuDemoModule = /** @class */ (function () {
    function ContextMenuDemoModule() {
    }
    ContextMenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _contextmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContextMenuDemoRoutingModule"],
                _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_4__["ContextMenuModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _contextmenudemo__WEBPACK_IMPORTED_MODULE_2__["ContextMenuDemo"]
            ]
        })
    ], ContextMenuDemoModule);
    return ContextMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/contextmenu/contextmenudemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/contextmenu/contextmenudemo.ts ***!
  \********************************************************************/
/*! exports provided: ContextMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuDemo", function() { return ContextMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContextMenuDemo = /** @class */ (function () {
    function ContextMenuDemo() {
    }
    ContextMenuDemo.prototype.ngOnInit = function () {
        this.items1 = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [{
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            },
            { separator: true },
            {
                label: 'Quit', icon: 'pi pi-fw pi-times'
            }
        ];
        this.items2 = [
            {
                label: 'Next',
                icon: 'pi pi-fw pi-chevron-right'
            },
            {
                label: 'Prev',
                icon: 'pi pi-fw pi-chevron-left'
            }
        ];
    };
    ContextMenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./contextmenudemo.html */ "./src/app/showcase/components/contextmenu/contextmenudemo.html")
        })
    ], ContextMenuDemo);
    return ContextMenuDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-contextmenu-contextmenudemo-module.js.map