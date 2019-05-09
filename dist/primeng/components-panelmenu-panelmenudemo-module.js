(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-panelmenu-panelmenudemo-module"],{

/***/ "./src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PanelMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenuDemoRoutingModule", function() { return PanelMenuDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _panelmenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panelmenudemo */ "./src/app/showcase/components/panelmenu/panelmenudemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanelMenuDemoRoutingModule = /** @class */ (function () {
    function PanelMenuDemoRoutingModule() {
    }
    PanelMenuDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _panelmenudemo__WEBPACK_IMPORTED_MODULE_2__["PanelMenuDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PanelMenuDemoRoutingModule);
    return PanelMenuDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/panelmenu/panelmenudemo.html":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/panelmenu/panelmenudemo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Menu - PanelMenu</span>\r\n        <span>PanelMenu is a hybrid of accordion-tree components.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-panelMenu [model]=\"items\" [style]=\"{'width':'300px'}\" [multiple]=\"false\"></p-panelMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;PanelMenuModule&#125; from 'primeng/panelmenu';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>PanelMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>PanelMenu requires nested menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panelMenu [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class PanelMenuDemo &#123;\r\n  \r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                icon: 'pi pi-pw pi-file',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'User', icon: 'pi pi-fw pi-user-plus'&#125;,\r\n                            &#123;label: 'Filter', icon: 'pi pi-fw pi-filter'&#125;\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open', icon: 'pi pi-fw pi-external-link'&#125;,\r\n                    &#123;separator: true&#125;,\r\n                    &#123;label: 'Quit', icon: 'pi pi-fw pi-times'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Help',\r\n                icon: 'pi pi-fw pi-question',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Contents',\r\n                        icon: 'pi pi-pi pi-bars'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Search', \r\n                        icon: 'pi pi-pi pi-search', \r\n                        items: [\r\n                            &#123;\r\n                                label: 'Text', \r\n                                items: [\r\n                                    &#123;\r\n                                        label: 'Workspace'\r\n                                    &#125;\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'User',\r\n                                icon: 'pi pi-fw pi-file',\r\n                            &#125;\r\n                    ]&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Actions',\r\n                icon: 'pi pi-fw pi-cog',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Edit',\r\n                        icon: 'pi pi-fw pi-pencil',\r\n                        items: [\r\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\r\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Other',\r\n                        icon: 'pi pi-fw pi-tags',\r\n                        items: [\r\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Initial State</h3>\r\n            <p>MenuItem has an expanded property to control the visibility of a submenu, you may use this property to control the state from the menumodel.</p>\r\n\r\n            <h3>Animation Configuration</h3>\r\n            <p>Transition of the toggle animation can be customized using the transitionOptions property with a default value as <b>400ms cubic-bezier(0.86, 0, 0.07, 1)</b>, \r\n                example below disables the animation altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n &lt;p-panelMenu [transitionOptions]=\"'0ms'\" [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\r\n</code>\r\n</pre>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiple</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether multiple tabs can be activated at the same time or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>transitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>400ms cubic-bezier(0.86, 0, 0.07, 1)</td>\r\n                            <td>Transition options of the animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-panelmenu</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panelmenu-header</td>\r\n                            <td>Accordion header of root submenu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panelmenu-content</td>\r\n                            <td>Accordion content of root submenu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menu-list</td>\r\n                            <td>List element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem</td>\r\n                            <td>Menuitem element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-text</td>\r\n                            <td>Label of a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menuitem-icon</td>\r\n                            <td>Icon of a menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panelmenu-icon</td>\r\n                            <td>Arrow icon of an accordion header.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panelmenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panelMenu [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class PanelMenuDemo &#123;\r\n  \r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'File',\r\n                icon: 'pi pi-pw pi-file',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'pi pi-fw pi-plus',\r\n                        items: [\r\n                            &#123;label: 'User', icon: 'pi pi-fw pi-user-plus'&#125;,\r\n                            &#123;label: 'Filter', icon: 'pi pi-fw pi-filter'&#125;\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open', icon: 'pi pi-fw pi-external-link'&#125;,\r\n                    &#123;separator: true&#125;,\r\n                    &#123;label: 'Quit', icon: 'pi pi-fw pi-times'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'pi pi-fw pi-pencil',\r\n                items: [\r\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\r\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Help',\r\n                icon: 'pi pi-fw pi-question',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Contents',\r\n                        icon: 'pi pi-pi pi-bars'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Search', \r\n                        icon: 'pi pi-pi pi-search', \r\n                        items: [\r\n                            &#123;\r\n                                label: 'Text', \r\n                                items: [\r\n                                    &#123;\r\n                                        label: 'Workspace'\r\n                                    &#125;\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'User',\r\n                                icon: 'pi pi-fw pi-file',\r\n                            &#125;\r\n                    ]&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Actions',\r\n                icon: 'pi pi-fw pi-cog',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Edit',\r\n                        icon: 'pi pi-fw pi-pencil',\r\n                        items: [\r\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\r\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Other',\r\n                        icon: 'pi pi-fw pi-tags',\r\n                        items: [\r\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/panelmenu/panelmenudemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/panelmenu/panelmenudemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: PanelMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenuDemoModule", function() { return PanelMenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _panelmenudemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panelmenudemo */ "./src/app/showcase/components/panelmenu/panelmenudemo.ts");
/* harmony import */ var _panelmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panelmenudemo-routing.module */ "./src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts");
/* harmony import */ var _components_panelmenu_panelmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/panelmenu/panelmenu */ "./src/app/components/panelmenu/panelmenu.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PanelMenuDemoModule = /** @class */ (function () {
    function PanelMenuDemoModule() {
    }
    PanelMenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _panelmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["PanelMenuDemoRoutingModule"],
                _components_panelmenu_panelmenu__WEBPACK_IMPORTED_MODULE_4__["PanelMenuModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _panelmenudemo__WEBPACK_IMPORTED_MODULE_2__["PanelMenuDemo"]
            ]
        })
    ], PanelMenuDemoModule);
    return PanelMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/panelmenu/panelmenudemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/panelmenu/panelmenudemo.ts ***!
  \****************************************************************/
/*! exports provided: PanelMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenuDemo", function() { return PanelMenuDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelMenuDemo = /** @class */ (function () {
    function PanelMenuDemo() {
    }
    PanelMenuDemo.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [{
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
                            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
                        ]
                    },
                    { label: 'Open', icon: 'pi pi-fw pi-external-link' },
                    { separator: true },
                    { label: 'Quit', icon: 'pi pi-fw pi-times' }
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
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
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
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
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
            }
        ];
    };
    PanelMenuDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./panelmenudemo.html */ "./src/app/showcase/components/panelmenu/panelmenudemo.html")
        })
    ], PanelMenuDemo);
    return PanelMenuDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-panelmenu-panelmenudemo-module.js.map