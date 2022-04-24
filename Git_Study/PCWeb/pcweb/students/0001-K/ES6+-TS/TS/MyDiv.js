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
var MyDiv = /** @class */ (function (_super) {
    __extends(MyDiv, _super);
    function MyDiv() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this._children = [];
        _this.myself = _super.prototype.createSelf.call(_this, { type: 'div', background: _this.background });
        return _this;
    }
    Object.defineProperty(MyDiv.prototype, "myself", {
        get: function () {
            return this._myself;
        },
        set: function (myself) {
            this._myself = myself;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyDiv.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    MyDiv.prototype.append = function () {
        var ele = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ele[_i] = arguments[_i];
        }
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].constructor.name === 'MyImg' || ele[i].constructor.name === 'MyClickable' || ele[i].constructor.name === 'MySwiper') {
                this.myself.appendChild(ele[i].myself);
                this._children.push(ele[i]);
                ele[i]._parent = this.myself;
            }
        }
    };
    ;
    MyDiv.prototype.remove = function () {
        var ele = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ele[_i] = arguments[_i];
        }
        for (var i = 0; i < this._children.length; i++) {
            for (var j = 0; j < ele.length; j++) {
                if (this._children[i] === ele[j]) {
                    ele[j].myself.remove();
                    ele[j]._parent = null;
                    this._children.splice(i, 1);
                }
            }
        }
    };
    ;
    return MyDiv;
}(BaseClass_1.BaseWithBackground));
exports.MyDiv = MyDiv;
