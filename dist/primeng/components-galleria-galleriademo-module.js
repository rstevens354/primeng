(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-galleria-galleriademo-module"],{

/***/ "./src/app/components/galleria/galleria.ts":
/*!*************************************************!*\
  !*** ./src/app/components/galleria/galleria.ts ***!
  \*************************************************/
/*! exports provided: Galleria, GalleriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galleria", function() { return Galleria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaModule", function() { return GalleriaModule; });
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



var Galleria = /** @class */ (function () {
    function Galleria(el) {
        this.el = el;
        this.panelWidth = 600;
        this.panelHeight = 400;
        this.frameWidth = 60;
        this.frameHeight = 40;
        this.activeIndex = 0;
        this.showFilmstrip = true;
        this.autoPlay = true;
        this.transitionInterval = 4000;
        this.showCaption = true;
        this.effectDuration = 500;
        this.onImageClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onImageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stripLeft = 0;
    }
    Galleria.prototype.ngAfterViewChecked = function () {
        if (this.imagesChanged) {
            this.stopSlideshow();
            this.render();
            this.imagesChanged = false;
        }
    };
    Object.defineProperty(Galleria.prototype, "images", {
        get: function () {
            return this._images;
        },
        set: function (value) {
            this._images = value;
            this.imagesChanged = true;
            if (this.initialized) {
                this.activeIndex = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Galleria.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        this.panelWrapper = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.el.nativeElement, 'ul.ui-galleria-panel-wrapper');
        this.initialized = true;
        if (this.showFilmstrip) {
            this.stripWrapper = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.container, 'div.ui-galleria-filmstrip-wrapper');
            this.strip = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.stripWrapper, 'ul.ui-galleria-filmstrip');
        }
        if (this.images && this.images.length) {
            this.render();
        }
    };
    Galleria.prototype.render = function () {
        this.panels = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].find(this.panelWrapper, 'li.ui-galleria-panel');
        if (this.showFilmstrip) {
            this.frames = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].find(this.strip, 'li.ui-galleria-frame');
            this.stripWrapper.style.width = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].width(this.panelWrapper) - 50 + 'px';
            this.stripWrapper.style.height = this.frameHeight + 'px';
        }
        if (this.showCaption) {
            this.caption = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.container, 'div.ui-galleria-caption');
            this.caption.style.bottom = this.showFilmstrip ? _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.stripWrapper, true) + 'px' : 0 + 'px';
            this.caption.style.width = _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].width(this.panelWrapper) + 'px';
        }
        if (this.autoPlay) {
            this.startSlideshow();
        }
        this.container.style.visibility = 'visible';
    };
    Galleria.prototype.startSlideshow = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.next();
        }, this.transitionInterval);
        this.slideshowActive = true;
    };
    Galleria.prototype.stopSlideshow = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.slideshowActive = false;
    };
    Galleria.prototype.clickNavRight = function () {
        if (this.slideshowActive) {
            this.stopSlideshow();
        }
        this.next();
    };
    Galleria.prototype.clickNavLeft = function () {
        if (this.slideshowActive) {
            this.stopSlideshow();
        }
        this.prev();
    };
    Galleria.prototype.frameClick = function (frame) {
        if (this.slideshowActive) {
            this.stopSlideshow();
        }
        this.select(_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].index(frame), false);
    };
    Galleria.prototype.prev = function () {
        if (this.activeIndex !== 0) {
            this.select(this.activeIndex - 1, true);
        }
    };
    Galleria.prototype.next = function () {
        if (this.activeIndex !== (this.panels.length - 1)) {
            this.select(this.activeIndex + 1, true);
        }
        else {
            this.select(0, false);
            this.stripLeft = 0;
        }
    };
    Galleria.prototype.select = function (index, reposition) {
        if (index !== this.activeIndex) {
            var oldPanel = this.panels[this.activeIndex], newPanel = this.panels[index];
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].fadeIn(newPanel, this.effectDuration);
            if (this.showFilmstrip) {
                var oldFrame = this.frames[this.activeIndex], newFrame = this.frames[index];
                if (reposition === undefined || reposition === true) {
                    var frameLeft = newFrame.offsetLeft, stepFactor = this.frameWidth + parseInt(getComputedStyle(newFrame)['margin-right'], 10), stripLeft = this.strip.offsetLeft, frameViewportLeft = frameLeft + stripLeft, frameViewportRight = frameViewportLeft + this.frameWidth;
                    if (frameViewportRight > _dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].width(this.stripWrapper))
                        this.stripLeft -= stepFactor;
                    else if (frameViewportLeft < 0)
                        this.stripLeft += stepFactor;
                }
            }
            this.activeIndex = index;
            this.onImageChange.emit({ index: index });
        }
    };
    Galleria.prototype.clickImage = function (event, image, i) {
        this.onImageClicked.emit({ originalEvent: event, image: image, index: i });
    };
    Galleria.prototype.ngOnDestroy = function () {
        this.stopSlideshow();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Galleria.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Galleria.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Galleria.prototype, "panelWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Galleria.prototype, "panelHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Galleria.prototype, "frameWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Galleria.prototype, "frameHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Galleria.prototype, "activeIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Galleria.prototype, "showFilmstrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Galleria.prototype, "autoPlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Galleria.prototype, "transitionInterval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Galleria.prototype, "showCaption", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Galleria.prototype, "effectDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Galleria.prototype, "onImageClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Galleria.prototype, "onImageChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Galleria.prototype, "images", null);
    Galleria = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-galleria',
            template: "\n        <div [ngClass]=\"{'ui-galleria ui-widget ui-widget-content ui-corner-all':true}\" [ngStyle]=\"style\" [class]=\"styleClass\" [style.width.px]=\"panelWidth\">\n            <ul class=\"ui-galleria-panel-wrapper\" [style.width.px]=\"panelWidth\" [style.height.px]=\"panelHeight\">\n                <li *ngFor=\"let image of images;let i=index\" class=\"ui-galleria-panel\" [ngClass]=\"{'ui-helper-hidden':i!=activeIndex}\"\n                    [style.width.px]=\"panelWidth\" [style.height.px]=\"panelHeight\" (click)=\"clickImage($event,image,i)\">\n                    <img class=\"ui-panel-images\" [src]=\"image.source\" [alt]=\"image.alt\" [title]=\"image.title\"/>\n                </li>\n            </ul>\n            <div [ngClass]=\"{'ui-galleria-filmstrip-wrapper':true}\" *ngIf=\"showFilmstrip\">\n                <ul class=\"ui-galleria-filmstrip\" style=\"transition:left 1s\" [style.left.px]=\"stripLeft\">\n                    <li #frame *ngFor=\"let image of images;let i=index\" [ngClass]=\"{'ui-galleria-frame-active':i==activeIndex}\" class=\"ui-galleria-frame\" (click)=\"frameClick(frame)\"\n                        [style.width.px]=\"frameWidth\" [style.height.px]=\"frameHeight\" [style.transition]=\"'opacity 0.75s ease'\">\n                        <div class=\"ui-galleria-frame-content\">\n                            <img [src]=\"image.source\" [alt]=\"image.alt\" [title]=\"image.title\" class=\"ui-galleria-frame-image\"\n                                [style.width.px]=\"frameWidth\" [style.height.px]=\"frameHeight\">\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"ui-galleria-nav-prev pi pi-fw pi-chevron-left\" (click)=\"clickNavLeft()\" [style.bottom.px]=\"frameHeight/2\" *ngIf=\"activeIndex !== 0\"></div>\n            <div class=\"ui-galleria-nav-next pi pi-fw pi-chevron-right\" (click)=\"clickNavRight()\" [style.bottom.px]=\"frameHeight/2\"></div>\n            <div class=\"ui-galleria-caption\" *ngIf=\"showCaption&&images\" style=\"display:block\">\n                <h4>{{images[activeIndex]?.title}}</h4><p>{{images[activeIndex]?.alt}}</p>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Galleria);
    return Galleria;
}());

var GalleriaModule = /** @class */ (function () {
    function GalleriaModule() {
    }
    GalleriaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Galleria],
            declarations: [Galleria]
        })
    ], GalleriaModule);
    return GalleriaModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/galleria/galleriademo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/galleria/galleriademo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GalleriaDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaDemoRoutingModule", function() { return GalleriaDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _galleriademo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./galleriademo */ "./src/app/showcase/components/galleria/galleriademo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleriaDemoRoutingModule = /** @class */ (function () {
    function GalleriaDemoRoutingModule() {
    }
    GalleriaDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _galleriademo__WEBPACK_IMPORTED_MODULE_2__["GalleriaDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], GalleriaDemoRoutingModule);
    return GalleriaDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/galleria/galleriademo.html":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/galleria/galleriademo.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Galleria</span>\r\n        <span>Galleria is a content gallery component.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;GalleriaModule&#125; from 'primeng/galleria';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Galleria requires a set of images to display. Source attribute defines the path of the image whereas title and alt attributes are used in the caption section\r\n                to display summary and description about an image.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\" [showCaption]=\"true\"&gt;&lt;/p-galleria&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class GalleriaDemo implements OnInit &#123;\r\n    \r\n    images: any[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.images = [];\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>panelWidth</td>\r\n                            <td>number</td>\r\n                            <td>600</td>\r\n                            <td>Width of the content panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>panelHeight</td>\r\n                            <td>number</td>\r\n                            <td>400</td>\r\n                            <td>Height of the content panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frameWidth</td>\r\n                            <td>number</td>\r\n                            <td>60</td>\r\n                            <td>Width of the filmstrip frames.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frameHeight</td>\r\n                            <td>number</td>\r\n                            <td>40</td>\r\n                            <td>Height of the filmstrip frames.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showFilmstrip</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines visibility of filmstrip.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoPlay</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Images are displayed with a slideshow in autoPlay mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>transitionInterval</td>\r\n                            <td>number</td>\r\n                            <td>4000</td>\r\n                            <td>Time in milliseconds between each slide in autoPlay mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>effectDuration</td>\r\n                            <td>number</td>\r\n                            <td>250</td>\r\n                            <td>Duration of animation in milliseconds.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showCaption</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Displays information retrieved from title and alt attributes of images in content caption.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>activeIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the current active image of galleria images.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h4>Events</h4>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onImageClicked</td>\r\n                            <td>\r\n                                event.image: Image Object<br>\r\n                                event.originalEvent: Click Object<br>\r\n                                event.index: Index of the image\r\n                            </td>\r\n                            <td>Callback to invoke when the displayed image is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onImageChange</td>\r\n                            <td>\r\n                                event.index: Index of the image\r\n                            </td>\r\n                            <td>Callback to invoke when an image changes.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-galleria</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-galleria-panel-wrapper</td>\r\n                            <td>Parent of item containers.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-galleria-filmstrip-wrapper</td>\r\n                            <td>Container of filmstrip.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-galleria-filmstrip</td>\r\n                            <td>Filmstrip element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-galleria-frame</td>\r\n                            <td>Frame element of thumbnail</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-galleria-nav-next</td>\r\n                            <td>Icon to navigate to next item</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-galleria-nav-prev</td>\r\n                            <td>Icon to navigate to previous item</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-galleria-caption</td>\r\n                            <td>Caption element that displays title and description of an item</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\" showCaption=\"true\"&gt;&lt;/p-galleria&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class GalleriaDemo implements OnInit &#123;\r\n    \r\n    images: any[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.images = [];\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/showcase/components/galleria/galleriademo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/galleria/galleriademo.module.ts ***!
  \*********************************************************************/
/*! exports provided: GalleriaDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaDemoModule", function() { return GalleriaDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _galleriademo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./galleriademo */ "./src/app/showcase/components/galleria/galleriademo.ts");
/* harmony import */ var _galleriademo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galleriademo-routing.module */ "./src/app/showcase/components/galleria/galleriademo-routing.module.ts");
/* harmony import */ var _components_galleria_galleria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/galleria/galleria */ "./src/app/components/galleria/galleria.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GalleriaDemoModule = /** @class */ (function () {
    function GalleriaDemoModule() {
    }
    GalleriaDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _galleriademo_routing_module__WEBPACK_IMPORTED_MODULE_3__["GalleriaDemoRoutingModule"],
                _components_galleria_galleria__WEBPACK_IMPORTED_MODULE_4__["GalleriaModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _galleriademo__WEBPACK_IMPORTED_MODULE_2__["GalleriaDemo"]
            ]
        })
    ], GalleriaDemoModule);
    return GalleriaDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/galleria/galleriademo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/galleria/galleriademo.ts ***!
  \**************************************************************/
/*! exports provided: GalleriaDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaDemo", function() { return GalleriaDemo; });
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

var GalleriaDemo = /** @class */ (function () {
    function GalleriaDemo() {
        this.images = [];
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    }
    GalleriaDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./galleriademo.html */ "./src/app/showcase/components/galleria/galleriademo.html")
        }),
        __metadata("design:paramtypes", [])
    ], GalleriaDemo);
    return GalleriaDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-galleria-galleriademo-module.js.map