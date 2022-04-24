"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass = /** @class */ (function () {
    function BaseClass(width, height, visiable) {
        this.width = width;
        this.height = height;
        this.visiable = visiable;
        this.myself = null;
        this._parent = null;
    }
    Object.defineProperty(BaseClass.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseClass.prototype, "myself", {
        get: function () {
            return this._myself;
        },
        set: function (myself) {
            this._myself = myself;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseClass.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
            if (this.myself) {
                this.myself.style.width = this.width + 'px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseClass.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
            if (this.myself) {
                this.myself.style.height = this.height + 'px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseClass.prototype, "visiable", {
        get: function () {
            return this._visiable;
        },
        set: function (visiable) {
            this._visiable = visiable;
            if (this.myself) {
                if (typeof this.visiable === 'boolean') {
                    if (this.visiable) {
                        this.myself.style.visibility = 'visiable';
                    }
                    else {
                        this.myself.style.visibility = 'hidden';
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseClass.prototype.appendTo = function (HTMLElement) {
        var parent;
        if (typeof HTMLElement === 'string') {
            parent = document.querySelector(HTMLElement);
            this._parent = parent;
        }
        else if (HTMLElement.nodeType === 1) {
            parent = HTMLElement;
            this._parent = parent;
        }
        parent.appendChild(this.myself);
    };
    BaseClass.prototype.takeOff = function () {
        this.myself.remove();
        this._parent = null;
    };
    BaseClass.prototype.createSelf = function (_a) {
        var type = _a.type, background = _a.background, src = _a.src, backgroundImg = _a.backgroundImg;
        var myself = document.createElement(type);
        if (Number.isInteger(this.width)) {
            myself.style.width = this.width + 'px';
        }
        if (Number.isInteger(this.height)) {
            myself.style.height = this.height + 'px';
        }
        var regExp = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
        if (regExp.test(background)) {
            myself.style.backgroundColor = background;
        }
        if (typeof this.visiable === 'boolean') {
            if (this.visiable) {
                myself.style.visibility = 'visiable';
            }
            else {
                myself.style.visibility = 'hidden';
            }
        }
        if (typeof src === 'string') {
            // ====?????????????????????????
            // let myself: HTMLImageElement;
            myself.src = src;
        }
        if (typeof backgroundImg === 'string') {
            myself.style.backgroundImage = backgroundImg;
            myself.style.backgroundRepeat = 'no-repeat';
        }
        return myself;
    };
    return BaseClass;
}());
exports.BaseClass = BaseClass;
var BaseWithBackground = /** @class */ (function (_super) {
    __extends(BaseWithBackground, _super);
    function BaseWithBackground(background) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.background = background;
        return _this;
    }
    Object.defineProperty(BaseWithBackground.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (background) {
            if (this.myself) {
                this._background = background;
                var regExp = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
                if (regExp.test(background)) {
                    this.myself.style.backgroundColor = background;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return BaseWithBackground;
}(BaseClass));
exports.BaseWithBackground = BaseWithBackground;
var BaseClassWithSrc = /** @class */ (function (_super) {
    __extends(BaseClassWithSrc, _super);
    function BaseClassWithSrc(src) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this._src = src;
        return _this;
    }
    return BaseClassWithSrc;
}(BaseClass));
exports.BaseClassWithSrc = BaseClassWithSrc;
