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
var BaseClass_1 = require("./BaseClass");
var MyImg = /** @class */ (function (_super) {
    __extends(MyImg, _super);
    function MyImg() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.myself = _super.prototype.createSelf.call(_this, { type: 'img', src: _this.src });
        return _this;
    }
    Object.defineProperty(MyImg.prototype, "myself", {
        get: function () {
            return this._myself;
        },
        set: function (myself) {
            this._myself = myself;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyImg.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (src) {
            this._src = src;
            if (this.myself) {
                if (typeof src === 'string') {
                    this.myself.src = src;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return MyImg;
}(BaseClass_1.BaseClassWithSrc));
exports.MyImg = MyImg;
