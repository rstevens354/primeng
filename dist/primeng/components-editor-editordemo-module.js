(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-editor-editordemo-module"],{

/***/ "./src/app/components/editor/editor.ts":
/*!*********************************************!*\
  !*** ./src/app/components/editor/editor.ts ***!
  \*********************************************/
/*! exports provided: EDITOR_VALUE_ACCESSOR, Editor, EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_VALUE_ACCESSOR", function() { return EDITOR_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/shared */ "./src/app/components/common/shared.ts");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EDITOR_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Editor; }),
    multi: true
};
var Editor = /** @class */ (function () {
    function Editor(el) {
        this.el = el;
        this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Editor.prototype.ngAfterViewInit = function () {
        var _this = this;
        var editorElement = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.el.nativeElement, 'div.ui-editor-content');
        var toolbarElement = _dom_domhandler__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.el.nativeElement, 'div.ui-editor-toolbar');
        var defaultModule = { toolbar: toolbarElement };
        var modules = this.modules ? __assign({}, defaultModule, this.modules) : defaultModule;
        this.quill = new Quill(editorElement, {
            modules: modules,
            placeholder: this.placeholder,
            readOnly: this.readonly,
            theme: 'snow',
            formats: this.formats,
            bounds: this.bounds,
            debug: this.debug,
            scrollingContainer: this.scrollingContainer
        });
        if (this.value) {
            this.quill.pasteHTML(this.value);
        }
        this.quill.on('text-change', function (delta, oldContents, source) {
            if (source === 'user') {
                var html = editorElement.children[0].innerHTML;
                var text = _this.quill.getText().trim();
                if (html === '<p><br></p>') {
                    html = null;
                }
                _this.onTextChange.emit({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source
                });
                _this.onModelChange(html);
                _this.onModelTouched();
            }
        });
        this.quill.on('selection-change', function (range, oldRange, source) {
            _this.onSelectionChange.emit({
                range: range,
                oldRange: oldRange,
                source: source
            });
        });
        this.onInit.emit({
            editor: this.quill
        });
    };
    Editor.prototype.writeValue = function (value) {
        this.value = value;
        if (this.quill) {
            if (value)
                this.quill.pasteHTML(value);
            else
                this.quill.setText('');
        }
    };
    Editor.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Editor.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Editor.prototype.getQuill = function () {
        return this.quill;
    };
    Object.defineProperty(Editor.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (val) {
            this._readonly = val;
            if (this.quill) {
                if (this._readonly)
                    this.quill.disable();
                else
                    this.quill.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Editor.prototype, "onTextChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Editor.prototype, "onSelectionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_common_shared__WEBPACK_IMPORTED_MODULE_2__["Header"]),
        __metadata("design:type", Object)
    ], Editor.prototype, "toolbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Editor.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Editor.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Editor.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], Editor.prototype, "formats", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Editor.prototype, "modules", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Editor.prototype, "bounds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Editor.prototype, "scrollingContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Editor.prototype, "debug", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Editor.prototype, "onInit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Editor.prototype, "readonly", null);
    Editor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-editor',
            template: "\n        <div [ngClass]=\"'ui-widget ui-editor-container ui-corner-all'\" [class]=\"styleClass\">\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"toolbar\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"!toolbar\">\n                <span class=\"ql-formats\">\n                    <select class=\"ql-header\">\n                      <option value=\"1\">Heading</option>\n                      <option value=\"2\">Subheading</option>\n                      <option selected>Normal</option>\n                    </select>\n                    <select class=\"ql-font\">\n                      <option selected>Sans Serif</option>\n                      <option value=\"serif\">Serif</option>\n                      <option value=\"monospace\">Monospace</option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-bold\" aria-label=\"Bold\"></button>\n                    <button class=\"ql-italic\" aria-label=\"Italic\"></button>\n                    <button class=\"ql-underline\" aria-label=\"Underline\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <select class=\"ql-color\"></select>\n                    <select class=\"ql-background\"></select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-list\" value=\"ordered\" aria-label=\"Ordered List\"></button>\n                    <button class=\"ql-list\" value=\"bullet\" aria-label=\"Unordered List\"></button>\n                    <select class=\"ql-align\">\n                        <option selected></option>\n                        <option value=\"center\"></option>\n                        <option value=\"right\"></option>\n                        <option value=\"justify\"></option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-link\" aria-label=\"Insert Link\"></button>\n                    <button class=\"ql-image\" aria-label=\"Insert Image\"></button>\n                    <button class=\"ql-code-block\" aria-label=\"Insert Code Block\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-clean\" aria-label=\"Remove Styles\"></button>\n                </span>\n            </div>\n            <div class=\"ui-editor-content\" [ngStyle]=\"style\"></div>\n        </div>\n    ",
            providers: [EDITOR_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Editor);
    return Editor;
}());

var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Editor, _common_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [Editor]
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/editor/editordemo-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/editor/editordemo-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditorDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemoRoutingModule", function() { return EditorDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editordemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editordemo */ "./src/app/showcase/components/editor/editordemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditorDemoRoutingModule = /** @class */ (function () {
    function EditorDemoRoutingModule() {
    }
    EditorDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _editordemo__WEBPACK_IMPORTED_MODULE_2__["EditorDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditorDemoRoutingModule);
    return EditorDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/editor/editordemo.html":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/editor/editordemo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Editor</span>\r\n        <span>Editor is rich text editor component based on Quill.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-editor [(ngModel)]=\"text1\" [style]=\"{'height':'320px'}\"></p-editor>\r\n    <p>Value: {{text1||'empty'}}</p>\r\n    \r\n    <button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text1=null\"></button>\r\n    \r\n    <hr style=\"border-top:0px;border-color:#dde3e6\">\r\n    \r\n    <h3>Custom Toolbar</h3>\r\n    <p-editor [(ngModel)]=\"text2\" [style]=\"{'height':'320px'}\">\r\n        <p-header>\r\n            <span class=\"ql-formats\">\r\n                <button class=\"ql-bold\" aria-label=\"Bold\"></button>\r\n                <button class=\"ql-italic\" aria-label=\"Italic\"></button>\r\n                <button class=\"ql-underline\" aria-label=\"Underline\"></button>\r\n            </span>\r\n        </p-header>\r\n    </p-editor>\r\n    <p>Value: {{text2||'empty'}}</p>\r\n    \r\n    <button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text2=null\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;EditorModule&#125; from 'primeng/editor';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way value binding is defined with ngModel.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-editor [(ngModel)]=\"text\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class EditorDemo &#123;\r\n    \r\n    text: string;\r\n        \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Editor can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-editor formControlName=\"description\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Toolbar</h3>\r\n            <p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href=\"http://quilljs.com/docs/modules/toolbar/\">Quill documentation</a> for available controls.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;span class=\"ql-format-group\"&gt;\r\n            &lt;span title=\"Bold\" class=\"ql-format-button ql-bold\"&gt;&lt;/span&gt;\r\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\r\n            &lt;span title=\"Italic\" class=\"ql-format-button ql-italic\"&gt;&lt;/span&gt;\r\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\r\n            &lt;span title=\"Underline\" class=\"ql-format-button ql-underline\"&gt;&lt;/span&gt;\r\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\r\n            &lt;span title=\"Strikethrough\" class=\"ql-format-button ql-strike\"&gt;&lt;/span&gt;\r\n        &lt;/span&gt;\r\n    &lt;/p-header&gt;\r\n&lt;/p-editor&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>placeholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Placeholder text to show when editor is empty.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to instantiate the editor to read-only mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>formats</td>\r\n                            <td>string[]</td>\r\n                            <td>null</td>\r\n                            <td>Whitelist of formats to display, see <a href=\"http://quilljs.com/docs/formats/\">here</a> for available options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>modules</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Modules configuration of Editor, see <a href=\"https://quilljs.com/docs/modules/\">here</a> for available options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>debug</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Shortcut for debug. Note debug is a static method and will affect other instances of Quill \r\n                                editors on the page. Only warning and error messages are enabled by default.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>bounds</td>\r\n                            <td>Element</td>\r\n                            <td>document.body</td>\r\n                            <td>DOM Element or a CSS selector for a DOM Element, within which the editor’s ui elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries..</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollingContainer</td>\r\n                            <td>Element</td>\r\n                            <td>null</td>\r\n                            <td>DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. \r\n                                Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling..</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onTextChange</td>\r\n                            <td>event.delta: Representation of the change.<br>\r\n                                event.source: Source of change. Will be either \"user\" or \"api\".<br>\r\n                                event.htmlValue: Current value as html.<br>\r\n                                event.textValue: Current value as text.<br></td>\r\n                            <td>Callback to invoke when the text of the editor is changed by the user.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSelectionChange</td>\r\n                            <td>event.range: Object with index and length keys indicating where the selection exists.<br>\r\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\r\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\r\n                            <td>Callback to invoke when selected text of editor changes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onInit</td>\r\n                            <td>event.editor: Quill editor instance.<br>\r\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\r\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\r\n                            <td>Callback to invoke after editor is initialized.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <p>Refer to <a href=\"http://beta.quilljs.com/docs/api/#events\">Quill documentation</a> for more information.</p>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>getQuill</td>\r\n                            <td>-</td>\r\n                            <td>Returns the underlying quill instance.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-editor-container</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-editor-toolbar</td>\r\n                            <td>Toolbar of the editor</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-editor-content</td>\r\n                            <td>Editable area</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p><a href=\"http://quilljs.com\">Quill</a> Editor 1.0.</p>\r\n            <p>Resources of quill needs to be added to your application. Example setup with CLI is as follows;</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install quill --save\r\n</code>\r\n</pre>\r\n            <p>Add Quill to scripts in angular-cli.json</p>  \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n\"scripts\": [... \"../node_modules/quill/dist/quill.js\"],\r\n</code>\r\n</pre>\r\n            <p>Add Quill css to styles in angular-cli.json</p>  \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n\"styles\": [ ... \"../node_modules/quill/dist/quill.core.css\", \"../node_modules/quill/dist/quill.snow.css\"],\r\n</code> \r\n</pre>        \r\n\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/editor\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;p-editor [(ngModel)]=\"text1\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\r\n&lt;p&gt;Value: &#123;&#123;text1||'empty'&#125;&#125;&lt;/p&gt;\r\n\r\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text1=null\"&gt;&lt;/button&gt;\r\n\r\n&lt;hr style=\"border-top:0px;border-color:#dde3e6\"&gt;\r\n\r\n&lt;h3&gt;Custom Toolbar&lt;/h3&gt;\r\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;span class=\"ql-formats\"&gt;\r\n            &lt;button class=\"ql-bold\" aria-label=\"Bold\"&gt;&lt;/button&gt;\r\n            &lt;button class=\"ql-italic\" aria-label=\"Italic\"&gt;&lt;/button&gt;\r\n            &lt;button class=\"ql-underline\" aria-label=\"Underline\"&gt;&lt;/button&gt;\r\n        &lt;/span&gt;\r\n    &lt;/p-header&gt;\r\n&lt;/p-editor&gt;\r\n&lt;p&gt;Value: &#123;&#123;text2||'empty'&#125;&#125;&lt;/p&gt;\r\n\r\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text2=null\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\n\r\n@Component(&#123;\r\n    templateUrl: './editordemo.html'\r\n&#125;)\r\nexport class EditorDemo &#123;\r\n\r\n    text1: string = '&lt;div&gt;Hello World!&lt;/div&gt;&lt;div&gt;PrimeNG &lt;b&gt;Editor&lt;/b&gt; Rocks&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;';\r\n    \r\n    text2: string;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/editor/editordemo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/showcase/components/editor/editordemo.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditorDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemoModule", function() { return EditorDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editordemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editordemo */ "./src/app/showcase/components/editor/editordemo.ts");
/* harmony import */ var _editordemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editordemo-routing.module */ "./src/app/showcase/components/editor/editordemo-routing.module.ts");
/* harmony import */ var _components_editor_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/editor/editor */ "./src/app/components/editor/editor.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EditorDemoModule = /** @class */ (function () {
    function EditorDemoModule() {
    }
    EditorDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _editordemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditorDemoRoutingModule"],
                _components_editor_editor__WEBPACK_IMPORTED_MODULE_5__["EditorModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _editordemo__WEBPACK_IMPORTED_MODULE_3__["EditorDemo"]
            ]
        })
    ], EditorDemoModule);
    return EditorDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/editor/editordemo.ts":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/editor/editordemo.ts ***!
  \**********************************************************/
/*! exports provided: EditorDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemo", function() { return EditorDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EditorDemo = /** @class */ (function () {
    function EditorDemo() {
        this.text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    }
    EditorDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./editordemo.html */ "./src/app/showcase/components/editor/editordemo.html")
        })
    ], EditorDemo);
    return EditorDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-editor-editordemo-module.js.map