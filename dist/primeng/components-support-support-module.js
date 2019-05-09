(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-support-support-module"],{

/***/ "./src/app/showcase/components/support/support-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/support/support-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SupportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportRoutingModule", function() { return SupportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component */ "./src/app/showcase/components/support/support.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportRoutingModule = /** @class */ (function () {
    function SupportRoutingModule() {
    }
    SupportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SupportRoutingModule);
    return SupportRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/support/support.component.html":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/support/support.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Support</span>\r\n        <span>Professional support for the open source innovation</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section support\">\r\n    <div class=\"support-image\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <h3>PrimeNG PRO Support</h3>\r\n                <p>With PrimeNG PRO, it's easy to support, tune and add features to PrimeNG as if it were an in-house framework.</p>\r\n                <a class=\"home-button\" href=\"mailto:primeng@primetek.com.tr\">GET A QUOTE</a>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <img alt=\"PRO\" src=\"assets/showcase/images/home/icon-pro.svg\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <p>PrimeNG PRO is a term based commercial support service. With the exclusive services of Pro account, \r\n                    you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>\r\n                    \r\n    <h4>Standard PRO Services</h4>\r\n    <ul>\r\n        <li>Access to pro.primefaces.org</li>\r\n        <li>Response within 1 business day.</li>\r\n        <li>Defect patches.</li>\r\n        <li>Private branch management in case you need.</li>\r\n        <li>Customized builds.</li>\r\n        <li>Unlimited number of cases.</li>\r\n        <li>Remote desktop connection.</li>\r\n        <li>Conference calls for discussions.</li>\r\n        <li>High priority to your issues.</li>\r\n        <li>Notifications about security updates.</li>\r\n    </ul>\r\n                \r\n    <h4>New Features (Optional)</h4>\t\t\t\r\n                \r\n    <p>New feature and enhancement requests are not available in core services and provided via an hour based model instead.  When you have a feature request we provide an estimate, if you confirm we deliver your request within an estimated timeframe and deduct the amount of work from your hours. These requests can be;</p>\r\n\r\n    <ul>\r\n        <li>New components.</li>\r\n        <li>New functionality to existing components.</li>\r\n        <li>Changing the way a certain functionality is implemented.</li>\r\n        <li>Accessibility improvements.</li>\r\n        <li>Proof of Concept implementations of a use case.</li>\r\n        <li>Code reviews to offer best practices.</li>\r\n    </ul>\r\n    \r\n    <p>You can purchase additional hours along with the subscription and also anytime during your subscription period. If your subscription term ends with unused hours, they will be added to your new subscription term in case you extend.</p>    \r\n\r\n    <h3 style=\"margin-top:0px\">Community Support</h3>\r\n    <p><a href=\"https://forum.primefaces.org/viewforum.php?f=35&sid=45e34922772fa61d6741489375083cde\">Forum</a> is where the community users gather to seek support, post topics and discuss the technology. PrimeTek does not\r\n    guarantee response at forum although it is monitored and maintained by our staff. If you need to secure our response within 4 business hours, you may consider PrimeNG PRO support.</p>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/support/support.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/support/support.component.ts ***!
  \******************************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/showcase/components/support/support.component.html")
        })
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/support/support.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/support/support.module.ts ***!
  \***************************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component */ "./src/app/showcase/components/support/support.component.ts");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/showcase/components/support/support-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SupportModule = /** @class */ (function () {
    function SupportModule() {
    }
    SupportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _support_routing_module__WEBPACK_IMPORTED_MODULE_3__["SupportRoutingModule"]
            ],
            declarations: [
                _support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"]
            ]
        })
    ], SupportModule);
    return SupportModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-support-support-module.js.map