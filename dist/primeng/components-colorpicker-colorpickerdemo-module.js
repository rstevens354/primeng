(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-colorpicker-colorpickerdemo-module"],{

/***/ "./src/app/components/colorpicker/colorpicker.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/colorpicker/colorpicker.ts ***!
  \*******************************************************/
/*! exports provided: COLORPICKER_VALUE_ACCESSOR, ColorPicker, ColorPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORPICKER_VALUE_ACCESSOR", function() { return COLORPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var COLORPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ColorPicker; }),
    multi: true
};
var ColorPicker = /** @class */ (function () {
    function ColorPicker(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.format = 'hex';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultColor = 'ff0000';
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(ColorPicker.prototype, "colorSelector", {
        set: function (element) {
            this.colorSelectorViewChild = element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPicker.prototype, "colorHandle", {
        set: function (element) {
            this.colorHandleViewChild = element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPicker.prototype, "hue", {
        set: function (element) {
            this.hueViewChild = element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPicker.prototype, "hueHandle", {
        set: function (element) {
            this.hueHandleViewChild = element;
        },
        enumerable: true,
        configurable: true
    });
    ColorPicker.prototype.onHueMousedown = function (event) {
        if (this.disabled) {
            return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.hueDragging = true;
        this.pickHue(event);
    };
    ColorPicker.prototype.pickHue = function (event) {
        var top = this.hueViewChild.nativeElement.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        this.value = this.validateHSB({
            h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
            s: this.value.s,
            b: this.value.b
        });
        this.updateColorSelector();
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event, value: this.getValueToUpdate() });
    };
    ColorPicker.prototype.onColorMousedown = function (event) {
        if (this.disabled) {
            return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.colorDragging = true;
        this.pickColor(event);
    };
    ColorPicker.prototype.pickColor = function (event) {
        var rect = this.colorSelectorViewChild.nativeElement.getBoundingClientRect();
        var top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        var left = rect.left + document.body.scrollLeft;
        var saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150);
        var brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150);
        this.value = this.validateHSB({
            h: this.value.h,
            s: saturation,
            b: brightness
        });
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event, value: this.getValueToUpdate() });
    };
    ColorPicker.prototype.getValueToUpdate = function () {
        var val;
        switch (this.format) {
            case 'hex':
                val = '#' + this.HSBtoHEX(this.value);
                break;
            case 'rgb':
                val = this.HSBtoRGB(this.value);
                break;
            case 'hsb':
                val = this.value;
                break;
        }
        return val;
    };
    ColorPicker.prototype.updateModel = function () {
        this.onModelChange(this.getValueToUpdate());
    };
    ColorPicker.prototype.writeValue = function (value) {
        if (value) {
            switch (this.format) {
                case 'hex':
                    this.value = this.HEXtoHSB(value);
                    break;
                case 'rgb':
                    this.value = this.RGBtoHSB(value);
                    break;
                case 'hsb':
                    this.value = value;
                    break;
            }
        }
        else {
            this.value = this.HEXtoHSB(this.defaultColor);
        }
        this.updateColorSelector();
        this.updateUI();
    };
    ColorPicker.prototype.updateColorSelector = function () {
        if (this.colorSelectorViewChild) {
            var hsb = {};
            hsb.s = 100;
            hsb.b = 100;
            hsb.h = this.value.h;
            this.colorSelectorViewChild.nativeElement.style.backgroundColor = '#' + this.HSBtoHEX(hsb);
        }
    };
    ColorPicker.prototype.updateUI = function () {
        if (this.colorHandleViewChild && this.hueHandleViewChild.nativeElement) {
            this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + 'px';
            this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + 'px';
            this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - (150 * this.value.h / 360)) + 'px';
        }
        this.inputBgColor = '#' + this.HSBtoHEX(this.value);
    };
    ColorPicker.prototype.onInputFocus = function () {
        this.onModelTouched();
    };
    ColorPicker.prototype.show = function () {
        this.overlayVisible = true;
    };
    ColorPicker.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                if (!this.inline) {
                    this.overlay = event.element;
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++_dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
                    }
                    this.alignOverlay();
                    this.bindDocumentClickListener();
                    this.updateColorSelector();
                    this.updateUI();
                }
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    ColorPicker.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.overlay, this.appendTo);
        }
    };
    ColorPicker.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    ColorPicker.prototype.alignOverlay = function () {
        if (this.appendTo)
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].absolutePosition(this.overlay, this.inputViewChild.nativeElement);
        else
            _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].relativePosition(this.overlay, this.inputViewChild.nativeElement);
    };
    ColorPicker.prototype.hide = function () {
        this.overlayVisible = false;
    };
    ColorPicker.prototype.onInputClick = function () {
        this.selfClick = true;
        this.togglePanel();
    };
    ColorPicker.prototype.togglePanel = function () {
        if (!this.overlayVisible)
            this.show();
        else
            this.hide();
    };
    ColorPicker.prototype.onInputKeydown = function (event) {
        switch (event.which) {
            //space
            case 32:
                this.togglePanel();
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide();
                break;
        }
    };
    ColorPicker.prototype.onPanelClick = function () {
        this.selfClick = true;
    };
    ColorPicker.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ColorPicker.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ColorPicker.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    ColorPicker.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.selfClick) {
                    _this.overlayVisible = false;
                    _this.unbindDocumentClickListener();
                }
                _this.selfClick = false;
                _this.cd.markForCheck();
            });
        }
    };
    ColorPicker.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    ColorPicker.prototype.bindDocumentMousemoveListener = function () {
        var _this = this;
        if (!this.documentMousemoveListener) {
            this.documentMousemoveListener = this.renderer.listen('document', 'mousemove', function (event) {
                if (_this.colorDragging) {
                    _this.pickColor(event);
                }
                if (_this.hueDragging) {
                    _this.pickHue(event);
                }
            });
        }
    };
    ColorPicker.prototype.unbindDocumentMousemoveListener = function () {
        if (this.documentMousemoveListener) {
            this.documentMousemoveListener();
            this.documentMousemoveListener = null;
        }
    };
    ColorPicker.prototype.bindDocumentMouseupListener = function () {
        var _this = this;
        if (!this.documentMouseupListener) {
            this.documentMouseupListener = this.renderer.listen('document', 'mouseup', function () {
                _this.colorDragging = false;
                _this.hueDragging = false;
                _this.unbindDocumentMousemoveListener();
                _this.unbindDocumentMouseupListener();
            });
        }
    };
    ColorPicker.prototype.unbindDocumentMouseupListener = function () {
        if (this.documentMouseupListener) {
            this.documentMouseupListener();
            this.documentMouseupListener = null;
        }
    };
    ColorPicker.prototype.validateHSB = function (hsb) {
        return {
            h: Math.min(360, Math.max(0, hsb.h)),
            s: Math.min(100, Math.max(0, hsb.s)),
            b: Math.min(100, Math.max(0, hsb.b))
        };
    };
    ColorPicker.prototype.validateRGB = function (rgb) {
        return {
            r: Math.min(255, Math.max(0, rgb.r)),
            g: Math.min(255, Math.max(0, rgb.g)),
            b: Math.min(255, Math.max(0, rgb.b))
        };
    };
    ColorPicker.prototype.validateHEX = function (hex) {
        var len = 6 - hex.length;
        if (len > 0) {
            var o = [];
            for (var i = 0; i < len; i++) {
                o.push('0');
            }
            o.push(hex);
            hex = o.join('');
        }
        return hex;
    };
    ColorPicker.prototype.HEXtoRGB = function (hex) {
        var hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return { r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF) };
    };
    ColorPicker.prototype.HEXtoHSB = function (hex) {
        return this.RGBtoHSB(this.HEXtoRGB(hex));
    };
    ColorPicker.prototype.RGBtoHSB = function (rgb) {
        var hsb = {
            h: 0,
            s: 0,
            b: 0
        };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        if (max != 0) {
        }
        hsb.s = max != 0 ? 255 * delta / max : 0;
        if (hsb.s != 0) {
            if (rgb.r == max) {
                hsb.h = (rgb.g - rgb.b) / delta;
            }
            else if (rgb.g == max) {
                hsb.h = 2 + (rgb.b - rgb.r) / delta;
            }
            else {
                hsb.h = 4 + (rgb.r - rgb.g) / delta;
            }
        }
        else {
            hsb.h = -1;
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
            hsb.h += 360;
        }
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb;
    };
    ColorPicker.prototype.HSBtoRGB = function (hsb) {
        var rgb = {
            r: null, g: null, b: null
        };
        var h = Math.round(hsb.h);
        var s = Math.round(hsb.s * 255 / 100);
        var v = Math.round(hsb.b * 255 / 100);
        if (s == 0) {
            rgb = {
                r: v,
                g: v,
                b: v
            };
        }
        else {
            var t1 = v;
            var t2 = (255 - s) * v / 255;
            var t3 = (t1 - t2) * (h % 60) / 60;
            if (h == 360)
                h = 0;
            if (h < 60) {
                rgb.r = t1;
                rgb.b = t2;
                rgb.g = t2 + t3;
            }
            else if (h < 120) {
                rgb.g = t1;
                rgb.b = t2;
                rgb.r = t1 - t3;
            }
            else if (h < 180) {
                rgb.g = t1;
                rgb.r = t2;
                rgb.b = t2 + t3;
            }
            else if (h < 240) {
                rgb.b = t1;
                rgb.r = t2;
                rgb.g = t1 - t3;
            }
            else if (h < 300) {
                rgb.b = t1;
                rgb.g = t2;
                rgb.r = t2 + t3;
            }
            else if (h < 360) {
                rgb.r = t1;
                rgb.g = t2;
                rgb.b = t1 - t3;
            }
            else {
                rgb.r = 0;
                rgb.g = 0;
                rgb.b = 0;
            }
        }
        return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
    };
    ColorPicker.prototype.RGBtoHEX = function (rgb) {
        var hex = [
            rgb.r.toString(16),
            rgb.g.toString(16),
            rgb.b.toString(16)
        ];
        for (var key in hex) {
            if (hex[key].length == 1) {
                hex[key] = '0' + hex[key];
            }
        }
        return hex.join('');
    };
    ColorPicker.prototype.HSBtoHEX = function (hsb) {
        return this.RGBtoHEX(this.HSBtoRGB(hsb));
    };
    ColorPicker.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.overlay = null;
    };
    ColorPicker.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColorPicker.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ColorPicker.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "format", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ColorPicker.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ColorPicker.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ColorPicker.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "showTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "hideTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ColorPicker.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ColorPicker.prototype, "inputViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('colorSelector'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorPicker.prototype, "colorSelector", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('colorHandle'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorPicker.prototype, "colorHandle", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hue'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorPicker.prototype, "hue", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hueHandle'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorPicker.prototype, "hueHandle", null);
    ColorPicker = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-colorPicker',
            template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-colorpicker ui-widget':true,'ui-colorpicker-overlay':!inline,'ui-colorpicker-dragging':colorDragging||hueDragging}\">\n            <input #input type=\"text\" *ngIf=\"!inline\" class=\"ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all\" readonly=\"readonly\" [ngClass]=\"{'ui-state-disabled': disabled}\"\n                (focus)=\"onInputFocus()\" (click)=\"onInputClick()\" (keydown)=\"onInputKeydown($event)\" [attr.id]=\"inputId\" [attr.tabindex]=\"tabindex\" [disabled]=\"disabled\"\n                [style.backgroundColor]=\"inputBgColor\">\n            <div *ngIf=\"inline || overlayVisible\" [ngClass]=\"{'ui-colorpicker-panel ui-corner-all': true, 'ui-colorpicker-overlay-panel ui-shadow':!inline, 'ui-state-disabled': disabled}\" (click)=\"onPanelClick()\"\n                [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"inline === true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n                <div class=\"ui-colorpicker-content\">\n                    <div #colorSelector class=\"ui-colorpicker-color-selector\" (mousedown)=\"onColorMousedown($event)\">\n                        <div class=\"ui-colorpicker-color\">\n                            <div #colorHandle class=\"ui-colorpicker-color-handle\"></div>\n                        </div>\n                    </div>\n                    <div #hue class=\"ui-colorpicker-hue\" (mousedown)=\"onHueMousedown($event)\">\n                        <div #hueHandle class=\"ui-colorpicker-hue-handle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('overlayAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(5%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{showTransitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{hideTransitionParams}}'))
                ])
            ],
            providers: [COLORPICKER_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ColorPicker);
    return ColorPicker;
}());

var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [ColorPicker],
            declarations: [ColorPicker]
        })
    ], ColorPickerModule);
    return ColorPickerModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/colorpicker/colorpickerdemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/colorpicker/colorpickerdemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ColorPickerDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDemoRoutingModule", function() { return ColorPickerDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _colorpickerdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorpickerdemo */ "./src/app/showcase/components/colorpicker/colorpickerdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColorPickerDemoRoutingModule = /** @class */ (function () {
    function ColorPickerDemoRoutingModule() {
    }
    ColorPickerDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _colorpickerdemo__WEBPACK_IMPORTED_MODULE_2__["ColorPickerDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ColorPickerDemoRoutingModule);
    return ColorPickerDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/colorpicker/colorpickerdemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/colorpicker/colorpickerdemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">ColorPicker</span>\r\n        <span>ColorPicker is an input component to select a color.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Inline</h3>\r\n    <p-colorPicker [(ngModel)]=\"color1\" [inline]=\"true\"></p-colorPicker>\r\n    \r\n    <p style=\"margin-top:.5em\">Selected Color: <span style=\"display:inline-block;width:32px;height:32px;vertical-align:middle\" [style.backgroundColor]=\"color1\"></span> {{color1}} </p>    \r\n    \r\n    <h3>Overlay</h3>\r\n    <p-colorPicker [(ngModel)]=\"color2\"></p-colorPicker>\r\n    \r\n    <p style=\"margin-top:.5em\">Selected Color: <span [ngStyle]=\"{'color':color2}\">{{color2}}</span></p> \r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header =\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ColorPickerModule&#125; from 'primeng/colorpicker';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>ColorPicker uses ngModel directive to bind a value.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-colorPicker [(ngModel)]=\"color\"&gt;&lt;/p-colorPicker&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponent &#123;\r\n\r\n    color: string;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Formats</h3>\r\n            <p>Default color format to use in value binding is \"hex\" and other possible values are \"rgb\" and \"hsb\". \r\n                Example below has 3 colorpickers having default values with different formats.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-colorPicker [(ngModel)]=\"color1\"&gt;&lt;/p-colorPicker&gt;\r\n&lt;p-colorPicker [(ngModel)]=\"color2\" format=\"rgb\"&gt;&lt;/p-colorPicker&gt;\r\n&lt;p-colorPicker [(ngModel)]=\"color3\" format=\"hsb\"&gt;&lt;/p-colorPicker&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponent &#123;\r\n\r\n    color1: string;\r\n    \r\n    color2: any = &#123;\r\n        r: 100, g: 130, b: 150\r\n    &#125;;\r\n    \r\n    color3: any = &#123;\r\n        h: 100, s: 50, b: 50\r\n    &#125;;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Overlay and Inline</h3>\r\n            <p>ColorPicker can be displayed as inline or as an overlay (default) using the \"inline\" property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-colorPicker [(ngModel)]=\"color1\" &gt;&lt;/p-colorPicker&gt;\r\n&lt;p-colorPicker [(ngModel)]=\"color2\" [inline]=\"true\"&gt;&lt;/p-colorPicker&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Colorpicker can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-colorPicker formControlName=\"color\"&gt;&lt;/p-colorPicker&gt;\r\n</code>\r\n</pre>\r\n     \r\n        <h3>Animation Configuration</h3>\r\n        <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \r\n            example below disables the animations altogether.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-colorPicker [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" formControlName=\"color\"&gt;&lt;/p-colorPicker&gt;\r\n</code>\r\n</pre>       \r\n    \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inline</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to display as an overlay or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>format</td>\r\n                            <td>string</td>\r\n                            <td>hex</td>\r\n                            <td>Format to use in value binding, supported formats are \"hex\", \"rgb\" and \"hsb\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the dropdown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>225ms ease-out</td>\r\n                            <td>Transition options of the show animation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hideTransitionOptions</td>\r\n                            <td>string</td>\r\n                            <td>195ms ease-in</td>\r\n                            <td>Transition options of the hide animation.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n        <h3>Events</h3>\r\n        <div class=\"doc-tablewrapper\">\r\n            <table class=\"doc-table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Parameters</th>\r\n                    <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>onChange</td>\r\n                        <td>event.originalEvent: Browser event<br />\r\n                            event.value: Selected color\r\n                        </td>\r\n                        <td>Callback to invoke when a color is selected.</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <h3>Styling</h3>\r\n        <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n        <div class=\"doc-tablewrapper\">\r\n            <table class=\"doc-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>ui-colorpicker</td>\r\n                        <td>Container element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-overlay</td>\r\n                        <td>Container element in overlay mode.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-preview </td>\r\n                        <td>Preview input in overlay mode.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-panel</td>\r\n                        <td>Panel element of the colorpicker.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-content</td>\r\n                        <td>Wrapper that contains color and hue sections.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-color-selector</td>\r\n                        <td>Color selector container.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-color</td>\r\n                        <td>Color element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-color-handle</td>\r\n                        <td>Handle of the color element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-hue</td>\r\n                        <td>Hue slider.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-colorpicker-hue-handle</td>\r\n                        <td>Handle of the hue slider.</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <h3>Dependencies</h3>\r\n        <p>None.</p>\r\n\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/colorpicker\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Inline&lt;/h3&gt;\r\n&lt;p-colorPicker [(ngModel)]=\"color1\" [inline]=\"true\"&gt;&lt;/p-colorPicker&gt;\r\n\r\n&lt;p style=\"margin-top:.5em\"&gt;Selected Color: &lt;span style=\"display:inline-block;width:32px;height:32px;vertical-align:middle\" [style.backgroundColor]=\"color1\"&gt;&lt;/span&gt; &#123;&#123;color1&#125;&#125; &lt;/p&gt;    \r\n\r\n&lt;h3&gt;Overlay&lt;/h3&gt;\r\n&lt;p-colorPicker [(ngModel)]=\"color2\"&gt;&lt;/p-colorPicker&gt;\r\n\r\n&lt;p style=\"margin-top:.5em\"&gt;Selected Color: &lt;span [ngStyle]=\"&#123;'color':color2&#125;\"&gt;&#123;&#123;color2&#125;&#125;&lt;/span&gt;&lt;/p&gt; \r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ColorPickerDemo &#123;\r\n\r\n    color1: string;\r\n    \r\n    color2: string = '#1976D2';\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/colorpicker/colorpickerdemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/colorpicker/colorpickerdemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: ColorPickerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDemoModule", function() { return ColorPickerDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _colorpickerdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorpickerdemo */ "./src/app/showcase/components/colorpicker/colorpickerdemo.ts");
/* harmony import */ var _colorpickerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorpickerdemo-routing.module */ "./src/app/showcase/components/colorpicker/colorpickerdemo-routing.module.ts");
/* harmony import */ var _components_colorpicker_colorpicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/colorpicker/colorpicker */ "./src/app/components/colorpicker/colorpicker.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ColorPickerDemoModule = /** @class */ (function () {
    function ColorPickerDemoModule() {
    }
    ColorPickerDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _colorpickerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ColorPickerDemoRoutingModule"],
                _components_colorpicker_colorpicker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _colorpickerdemo__WEBPACK_IMPORTED_MODULE_3__["ColorPickerDemo"]
            ]
        })
    ], ColorPickerDemoModule);
    return ColorPickerDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/colorpicker/colorpickerdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/colorpicker/colorpickerdemo.ts ***!
  \********************************************************************/
/*! exports provided: ColorPickerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDemo", function() { return ColorPickerDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColorPickerDemo = /** @class */ (function () {
    function ColorPickerDemo() {
        this.color2 = '#1976D2';
    }
    ColorPickerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./colorpickerdemo.html */ "./src/app/showcase/components/colorpicker/colorpickerdemo.html")
        })
    ], ColorPickerDemo);
    return ColorPickerDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-colorpicker-colorpickerdemo-module.js.map