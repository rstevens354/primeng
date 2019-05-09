(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-theming-theming-module"],{

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

/***/ "./src/app/showcase/components/theming/theming-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/theming/theming-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ThemingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingRoutingModule", function() { return ThemingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theming_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theming.component */ "./src/app/showcase/components/theming/theming.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemingRoutingModule = /** @class */ (function () {
    function ThemingRoutingModule() {
    }
    ThemingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _theming_component__WEBPACK_IMPORTED_MODULE_2__["ThemingComponent"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ThemingRoutingModule);
    return ThemingRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/theming/theming.component.html":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/theming/theming.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Theming</span>\r\n        <span>Choose from a variety of premium themes or develop your own theme using PrimeNG Theme Designer API.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 style=\"margin-top:0\">Theme Designer API</h3>\r\n    <p><a href=\"https://www.primefaces.org/designer/primeng\">Designer API</a> is the ultimate tool to create your own PrimeNG experience powered by a SASS based theme engine \r\n        with 500+ variables and a demo application. In addition, PrimeNG only ships the generated CSS of Nova, Luna and Rhea themes whereas Designer provides\r\n        full access to the whole SASS structure and the variables of these pre-built themes.</p>\r\n    <p>Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.</p>\r\n    \r\n    <p>Visit <a href=\"https://www.primefaces.org/designer/primeng\">Designer API HomePage</a> for more information, live demos and access to a trial version.</p>\r\n    <a href=\"http://www.primefaces.org/designer/primeng\">\r\n        <img alt=\"Why You Should PrimeNG\" src=\"assets/showcase/images/primeng-designer.jpg\" style=\"width:100%\">\r\n    </a>\r\n\r\n    <h3>Premium Templates</h3>\r\n    <p>Powered by Angular CLI, create awesome applications in no time using the premium templates of PrimeNG and impress your users.</p>\r\n    <p>Premium Templates are advanced Angular CLI applications featuring a full application layout with various menu orientations, templates pages such as landing, login and \r\n        premium themes that share the same design language of the layout for a unified look.</p>\r\n    <div class=\"templates\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/babylon-ng\">\r\n                    <img alt=\"Babylon\" src=\"assets/showcase/images/layouts/babylon-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/olympia-ng\">\r\n                    <img alt=\"Olympia\" src=\"assets/showcase/images/layouts/olympia-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/california-ng\">\r\n                    <img alt=\"California\" src=\"assets/showcase/images/layouts/california-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/ecuador-ng\">\r\n                    <img alt=\"Ecuador\" src=\"assets/showcase/images/layouts/ecuador-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/harmony-ng\">\r\n                    <img alt=\"Harmony\" src=\"assets/showcase/images/layouts/harmony-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/apollo-ng\">\r\n                    <img alt=\"Apollo\" src=\"assets/showcase/images/layouts/apollo-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/serenity-ng\">\r\n                    <img alt=\"Serenity\" src=\"assets/showcase/images/layouts/serenity-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a href=\"https://www.primefaces.org/layouts/avalon-ng\">\r\n                    <img alt=\"Avalon\" src=\"assets/showcase/images/layouts/avalon-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/verona-ng\">\r\n                    <img alt=\"Verona\" src=\"assets/showcase/images/layouts/verona-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/manhattan-ng\">\r\n                    <img alt=\"Manhattan\" src=\"assets/showcase/images/layouts/manhattan-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/paradise-ng\">\r\n                    <img alt=\"Paradise\" src=\"assets/showcase/images/layouts/paradise-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/ultima-ng\">\r\n                    <img alt=\"Ultima\" src=\"assets/showcase/images/layouts/ultima-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/barcelona-ng\">\r\n                    <img alt=\"Barcelona\" src=\"assets/showcase/images/layouts/barcelona-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/morpheus-ng\">\r\n                    <img alt=\"Morpheus\" src=\"assets/showcase/images/layouts/morpheus-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/atlantis-ng\">\r\n                    <img alt=\"Atlantis\" src=\"assets/showcase/images/layouts/atlantis-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/poseidon-ng\">\r\n                    <img alt=\"Poseidon\" src=\"assets/showcase/images/layouts/poseidon-ng.jpg\">\r\n                </a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <a href=\"https://www.primefaces.org/layouts/omega-ng\">\r\n                    <img alt=\"Omega\" src=\"assets/showcase/images/layouts/omega-ng.jpg\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/theming/theming.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/theming/theming.component.ts ***!
  \******************************************************************/
/*! exports provided: ThemingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingComponent", function() { return ThemingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemingComponent = /** @class */ (function () {
    function ThemingComponent() {
    }
    ThemingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./theming.component.html */ "./src/app/showcase/components/theming/theming.component.html")
        })
    ], ThemingComponent);
    return ThemingComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/theming/theming.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/theming/theming.module.ts ***!
  \***************************************************************/
/*! exports provided: ThemingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingModule", function() { return ThemingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theming_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theming.component */ "./src/app/showcase/components/theming/theming.component.ts");
/* harmony import */ var _theming_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theming-routing.module */ "./src/app/showcase/components/theming/theming-routing.module.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ThemingModule = /** @class */ (function () {
    function ThemingModule() {
    }
    ThemingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theming_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemingRoutingModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_4__["CodeHighlighterModule"]
            ],
            declarations: [
                _theming_component__WEBPACK_IMPORTED_MODULE_2__["ThemingComponent"]
            ]
        })
    ], ThemingModule);
    return ThemingModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-theming-theming-module.js.map