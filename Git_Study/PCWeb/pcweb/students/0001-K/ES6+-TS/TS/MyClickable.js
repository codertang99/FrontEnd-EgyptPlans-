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
var MyClickable = /** @class */ (function (_super) {
    __extends(MyClickable, _super);
    function MyClickable(src, onclick) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.src = src;
        _this.onclick = onclick;
        _this.myself = _super.prototype.createSelf.call(_this, { type: 'div', backgroundImg: _this.src, background: _this.background });
        return _this;
    }
    Object.defineProperty(MyClickable.prototype, "onclick", {
        get: function () {
            return this._onclick;
        },
        set: function (onclick) {
            if (this.myself) {
                this._onclick = onclick;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyClickable.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (src) {
            this._src = src;
            if (this.myself) {
                if (typeof this.src === 'string') {
                    this.myself.style.backgroundImage = src;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return MyClickable;
}(BaseClass_1.BaseWithBackground));
exports.MyClickable = MyClickable;
