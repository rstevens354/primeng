(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-lightbox-lightboxdemo-module"],{

/***/ "./src/app/components/lightbox/lightbox.ts":
/*!*************************************************!*\
  !*** ./src/app/components/lightbox/lightbox.ts ***!
  \*************************************************/
/*! exports provided: Lightbox, LightboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lightbox", function() { return Lightbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxModule", function() { return LightboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Lightbox = /** @class */ (function () {
    function Lightbox(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.type = 'image';
        this.effectDuration = '500ms';
        this.autoZIndex = true;
        this.baseZIndex = 0;
    }
    Lightbox.prototype.onImageClick = function (event, image, i, content) {
        this.index = i;
        this.loading = true;
        content.style.width = 32 + 'px';
        content.style.height = 32 + 'px';
        this.show();
        this.displayImage(image);
        this.preventDocumentClickListener = true;
        event.preventDefault();
    };
    Lightbox.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.panel = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.el.nativeElement, '.ui-lightbox ');
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.panel, this.appendTo);
        }
        this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
            if (!_this.preventDocumentClickListener && _this.visible) {
                _this.hide(event);
            }
            _this.preventDocumentClickListener = false;
            _this.cd.markForCheck();
        });
    };
    Lightbox.prototype.onLinkClick = function (event, content) {
        this.show();
        this.preventDocumentClickListener = true;
        event.preventDefault();
    };
    Lightbox.prototype.displayImage = function (image) {
        var _this = this;
        setTimeout(function () {
            _this.cd.markForCheck();
            _this.currentImage = image;
            _this.captionText = image.title;
            _this.center();
        }, 1000);
    };
    Lightbox.prototype.show = function () {
        this.mask = document.createElement('div');
        _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
        document.body.appendChild(this.mask);
        if (this.autoZIndex) {
            this.zindex = this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].zindex);
        }
        this.mask.style.zIndex = this.zindex - 1;
        this.center();
        this.visible = true;
    };
    Lightbox.prototype.hide = function (event) {
        this.captionText = null;
        this.index = null;
        this.currentImage = null;
        this.visible = false;
        this.panel.style.left = 'auto';
        this.panel.style.top = 'auto';
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }
        event.preventDefault();
    };
    Lightbox.prototype.center = function () {
        var elementWidth = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.panel);
        var elementHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.panel);
        if (elementWidth == 0 && elementHeight == 0) {
            this.panel.style.visibility = 'hidden';
            this.panel.style.display = 'block';
            elementWidth = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.panel);
            elementHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.panel);
            this.panel.style.display = 'none';
            this.panel.style.visibility = 'visible';
        }
        var viewport = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;
        this.panel.style.left = x + 'px';
        this.panel.style.top = y + 'px';
    };
    Lightbox.prototype.onImageLoad = function (event, content) {
        var _this = this;
        var image = event.target;
        image.style.visibility = 'hidden';
        image.style.display = 'block';
        var imageWidth = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(image);
        var imageHeight = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(image);
        image.style.display = 'none';
        image.style.visibility = 'visible';
        content.style.width = imageWidth + 'px';
        content.style.height = imageHeight + 'px';
        this.panel.style.left = parseInt(this.panel.style.left) + (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.panel) - imageWidth) / 2 + 'px';
        this.panel.style.top = parseInt(this.panel.style.top) + (_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.panel) - imageHeight) / 2 + 'px';
        setTimeout(function () {
            _this.cd.markForCheck();
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].fadeIn(image, 500);
            image.style.display = 'block';
            //this.captionText = this.currentImage.title;
            _this.loading = false;
        }, parseInt(this.effectDuration));
    };
    Lightbox.prototype.prev = function (placeholder) {
        this.captionText = null;
        this.loading = true;
        placeholder.style.display = 'none';
        if (this.index > 0) {
            this.displayImage(this.images[--this.index]);
        }
    };
    Lightbox.prototype.next = function (placeholder) {
        this.captionText = null;
        this.loading = true;
        placeholder.style.display = 'none';
        if (this.index <= (this.images.length - 1)) {
            this.displayImage(this.images[++this.index]);
        }
    };
    Object.defineProperty(Lightbox.prototype, "leftVisible", {
        get: function () {
            return this.images && this.images.length && this.index != 0 && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lightbox.prototype, "rightVisible", {
        get: function () {
            return this.images && this.images.length && this.index < (this.images.length - 1) && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    Lightbox.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.panel);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], Lightbox.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Lightbox.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Lightbox.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Lightbox.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Lightbox.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Lightbox.prototype, "easing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Lightbox.prototype, "effectDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Lightbox.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Lightbox.prototype, "baseZIndex", void 0);
    Lightbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-lightbox',
            template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"(type == 'image')\">\n            <a *ngFor=\"let image of images; let i = index;\" [href]=\"image.source\" (click)=\"onImageClick($event,image,i,content)\">\n                <img [src]=\"image.thumbnail\" [title]=\"image.title\" [alt]=\"image.alt\">\n            </a>\n        </div>\n        <span [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"(type == 'content')\" (click)=\"onLinkClick($event,content)\">\n            <ng-content select=\"a\"></ng-content>\n        </span>\n        <div class=\"ui-lightbox ui-widget ui-corner-all ui-shadow\" [style.display]=\"visible ? 'block' : 'none'\" [style.zIndex]=\"zindex\"\n            [ngClass]=\"{'ui-lightbox-loading': loading}\"\n            [style.transitionProperty]=\"'all'\" [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\" (click)=\"preventDocumentClickListener=true\">\n           <div class=\"ui-lightbox-content-wrapper\">\n              <a class=\"ui-state-default ui-lightbox-nav-left ui-corner-right\" [style.zIndex]=\"zindex + 1\" (click)=\"prev(img)\"\n                [ngClass]=\"{'ui-helper-hidden':!leftVisible}\"><span class=\"ui-lightbox-nav-icon pi pi-chevron-left\"></span></a>\n              <div #content class=\"ui-lightbox-content ui-corner-all\" \n                [style.transitionProperty]=\"'width,height'\" [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\">\n                <img #img [src]=\"currentImage ? currentImage.source||'' : ''\" (load)=\"onImageLoad($event,content)\" style=\"display:none\">\n                <ng-content></ng-content>\n              </div>\n              <a class=\"ui-state-default ui-lightbox-nav-right ui-corner-left ui-helper-hidden\" [style.zIndex]=\"zindex + 1\" (click)=\"next(img)\"\n                [ngClass]=\"{'ui-helper-hidden':!rightVisible}\"><span class=\"ui-lightbox-nav-icon pi pi-chevron-right\"></span></a>\n           </div>\n           <div class=\"ui-lightbox-caption ui-widget-header\" [style.display]=\"captionText ? 'block' : 'none'\">\n              <span class=\"ui-lightbox-caption-text\">{{captionText}}</span><a class=\"ui-lightbox-close ui-corner-all\" tabindex=\"0\" (click)=\"hide($event)\" (keydown.enter)=\"hide($event)\"><span class=\"pi pi-times\"></span></a>\n              <div style=\"clear:both\"></div>\n           </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], Lightbox);
    return Lightbox;
}());

var LightboxModule = /** @class */ (function () {
    function LightboxModule() {
    }
    LightboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Lightbox],
            declarations: [Lightbox]
        })
    ], LightboxModule);
    return LightboxModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LightboxDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxDemoRoutingModule", function() { return LightboxDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lightboxdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lightboxdemo */ "./src/app/showcase/components/lightbox/lightboxdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightboxDemoRoutingModule = /** @class */ (function () {
    function LightboxDemoRoutingModule() {
    }
    LightboxDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _lightboxdemo__WEBPACK_IMPORTED_MODULE_2__["LightboxDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], LightboxDemoRoutingModule);
    return LightboxDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/lightbox/lightboxdemo.html":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/lightbox/lightboxdemo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Lightbox</span>\r\n        <span>LightBox is a modal overlay component to display images, videos, inline html content and iframes.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-lightbox [images]=\"images\"></p-lightbox>\r\n\r\n    <h3>Content</h3>\r\n    <p-lightbox type=\"content\">\r\n        <a class=\"group\" href=\"#\">\r\n            Watch Video\r\n        </a>\r\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </p-lightbox>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;LightboxModule&#125; from 'primeng/lightbox';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Lightbox has two modes; <i>image</i> and <i>custom content</i> defined using type property. In image mode a collection of\r\n            images are required to display where an image object in the collection defines the source of the original image, thumbnail image and the title.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LightboxDemo &#123;\r\n\r\n    images: any[];\r\n\r\n    constructor() &#123;\r\n        this.images = [];\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>Content mode is enabled by setting type property to \"content\", providing an anchor to open the lightbox and content to display inside lightbox.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-lightbox type=\"content\"&gt;\r\n    &lt;a class=\"group\" href=\"#\"&gt;\r\n        Watch Video\r\n    &lt;/a&gt;\r\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\r\n&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Effects</h3>\r\n            <p>The easing function to use between image transitions is \"ease-out\" by default and this can be customized using easing property. \r\n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values. Duration\r\n            of the effect can be changed using effectDuration option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-lightbox [images]=\"images\" easing=\"ease-in\" effectDuration=\"1500ms\"&gt;&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>images</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of images to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>image</td>\r\n                            <td>Type of the lightbox, valid values are \"image\" and \"content\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>easing</td>\r\n                            <td>string</td>\r\n                            <td>ease-out</td>\r\n                            <td>Easing to use for transition between images.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>effectDuration</td>\r\n                            <td>string</td>\r\n                            <td>500ms</td>\r\n                            <td>Duration of the transition between the images.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-lightbox</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-nav-right</td>\r\n                            <td>Element to navigate to next image.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-nav-left</td>\r\n                            <td>Element to navigate to previous image.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-caption</td>\r\n                            <td>Caption element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-caption-text</td>\r\n                            <td>Text of caption.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-close</td>\r\n                            <td>Close icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/lightbox\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\r\n\r\n&lt;h3&gt;Content&lt;/h3&gt;\r\n&lt;p-lightbox type=\"content\"&gt;\r\n    &lt;a class=\"group\" href=\"#\"&gt;\r\n        Watch Video\r\n    &lt;/a&gt;\r\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\r\n&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LightboxDemo &#123;\r\n\r\n    images: any[];\r\n\r\n    constructor() &#123;\r\n        this.images = [];\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/lightbox/lightboxdemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/lightbox/lightboxdemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: LightboxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxDemoModule", function() { return LightboxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lightboxdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lightboxdemo */ "./src/app/showcase/components/lightbox/lightboxdemo.ts");
/* harmony import */ var _lightboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightboxdemo-routing.module */ "./src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts");
/* harmony import */ var _components_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/lightbox/lightbox */ "./src/app/components/lightbox/lightbox.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LightboxDemoModule = /** @class */ (function () {
    function LightboxDemoModule() {
    }
    LightboxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _lightboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["LightboxDemoRoutingModule"],
                _components_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _lightboxdemo__WEBPACK_IMPORTED_MODULE_2__["LightboxDemo"]
            ]
        })
    ], LightboxDemoModule);
    return LightboxDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/lightbox/lightboxdemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/lightbox/lightboxdemo.ts ***!
  \**************************************************************/
/*! exports provided: LightboxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxDemo", function() { return LightboxDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightboxDemo = /** @class */ (function () {
    function LightboxDemo() {
        this.images = [];
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title: 'Sopranos 1' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title: 'Sopranos 2' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title: 'Sopranos 3' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title: 'Sopranos 4' });
    }
    LightboxDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./lightboxdemo.html */ "./src/app/showcase/components/lightbox/lightboxdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], LightboxDemo);
    return LightboxDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-lightbox-lightboxdemo-module.js.map