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
var MySwiper = /** @class */ (function (_super) {
    __extends(MySwiper, _super);
    function MySwiper(picture, autoPlay, interval) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.picture = picture;
        _this.autoPlay = autoPlay;
        _this.interval = interval;
        _this.myself = _this.createSwiper(_this.width, _this.height, _this.background, _this.autoPlay, _this.interval, _this.picture);
        return _this;
    }
    Object.defineProperty(MySwiper.prototype, "picture", {
        get: function () {
            return this._picture;
        },
        set: function (picture) {
            this._picture = picture;
            if (this.myself) {
                this.myself = this.createSwiper(this.width, this.height, this.background, this.autoPlay, this.interval, this.picture);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySwiper.prototype, "autoPlay", {
        get: function () {
            return this._autoPlay;
        },
        set: function (autoPlay) {
            this._autoPlay = autoPlay;
            if (this.myself) {
                this.myself = this.createSwiper(this.width, this.height, this.background, this.autoPlay, this.interval, this.picture);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MySwiper.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (interval) {
            this._interval = interval;
            if (this.myself) {
                this.myself = this.createSwiper(this.width, this.height, this.background, this.autoPlay, this.interval, this.picture);
            }
        },
        enumerable: true,
        configurable: true
    });
    MySwiper.prototype.createSwiper = function (width, height, backgroundColor, autoPlay, INTERVAL, picture) {
        // ========条件==========
        var LINTERVAL = 3000;
        var DURATION = 500;
        var banner = document.createElement('div');
        banner.className = 'banner';
        banner.innerHTML = "\n            <div class=\"window\">\n                <div class=\"list\">\n                </div>\n                <span class=\"left\"> <</span>\n                <span class=\"right\">></span>\n            </div>\n        ";
        banner.style.cssText = "\n            position: relative;\n            width: " + width + "px;\n            height: " + height + "px;\n            background-color: " + backgroundColor + ";\n            ";
        var bannerWindow = banner.querySelector('.window');
        bannerWindow.style.cssText = "\n            width: " + width + "px;\n            height: " + height + "px;\t\t\t\t\n            border: 6px solid skyblue;\n            z-index: 5;\n            position: absolute;\n            left: 50%;\n            margin-left: -" + width / 2 + "px;\t\n            overflow: hidden;\n        ";
        var btnSpans = banner.querySelectorAll('.window>span');
        btnSpans[0].style.cssText = "\n            position: absolute;\n            display: inline-block;\n            font-size: 30px;\n            color: #fff;\n            line-height: 30px;\n            width: 25px;\n            height: 30px;\n            margin: 0 5px;\n            background-color: #333;\n            opacity: 0.8;\n            z-index: 5;\n            left: -5px;\n            top: 50%;\n            margin-top: -15px;\n        ";
        btnSpans[1].style.cssText = "\n            position: absolute;\n            display: inline-block;\n            font-size: 30px;\n            color: #fff;\n            line-height: 30px;\n            width: 25px;\n            height: 30px;\n            margin: 0 5px;\n            background-color: #333;\n            opacity: 0.6;\n            z-index: 5;\n            right: -5px;\n            top: 50%;\n            margin-top: -15px;\n        ";
        var list = banner.querySelector('.list');
        list.style.cssText = "\n            width: 650%;\n            position: absolute;\n            left: 0px;\n        ";
        function addImg(picture) {
            for (var i = 0; i < picture.length; i++) {
                list.innerHTML += "<div><img src=\"" + picture[i].src + "\"></div>";
            }
            var lisDivs = banner.querySelectorAll('.list>div ');
            var lisDivsImgs = banner.querySelectorAll('.list>div>img');
            for (var i = 0; i < lisDivs.length; i++) {
                lisDivs[i].style.cssText = "\n                    width: " + width + "px;\n                    height: " + height + "px;\n                    text-align: center;\n                    line-height: 200px;\n                    font-size: 58px;\n                    float: left;\n                ";
                lisDivsImgs[i].style.cssText = "\n                    width: " + width + "px;\n                    height: " + height + "px;\n                ";
            }
        }
        addImg(picture);
        // ================== animation里element不能用 : HTMLElement 会报错  类型“void”的参数不能赋给类型“number”的参数。
        function animation(element, leftEnd, duration, interval) {
            var leftStart = element.offsetLeft;
            var stepTmp = (leftEnd - leftStart) / (duration / interval);
            var step = Math.floor(stepTmp);
            if (step === 0) {
                step = stepTmp > 0 ? 1 : -1;
            }
            element.timer && clearInterval(element.timer);
            // ??????????????????
            element.timer = setInterval(function () {
                if (Math.abs(leftEnd - element.offsetLeft) <= Math.abs(step)) {
                    element.style.left = leftEnd + 'px';
                }
                else {
                    element.style.left = (element.offsetLeft + step) + 'px';
                }
            }, interval);
        }
        // ==================================核心===============================================================
        // =====================================================================================================
        // ----------------------右移 (实际上块要左 left -1 * width <---  0px )-------------------
        function moveRight(move, imgs) {
            // ???????????????????????
            var nowLeft = Math.floor(move.offsetLeft);
            // 2. 在-1 * width 位置时,把第一块移到为最后一块,并把left瞬间变为0px;
            // 			达到运行步骤 1 的条件
            if (nowLeft <= -1 * width) {
                move.appendChild(imgs[0]);
                move.style.left = '0px';
            }
            // 1. 0px -----> -1 * width位置				
            animation(move, -1 * width, DURATION, INTERVAL);
            timeriInt = setTimeout(scroll, LINTERVAL + INTERVAL);
        }
        // ---------------------------左移 (实际上块要向右 left -1 * width --->  0px )----------------
        function moveLeft(move, imgs) {
            var nowLeft = Math.floor(move.offsetLeft);
            var imgLength = imgs.length;
            // 1. 当为第一格在框内时,把最后一块移到为第一块,并把left瞬间变为-1 * width;
            // 达到运行  步骤 2 的条件
            if (nowLeft >= 0) {
                var tmp = move.removeChild(imgs[imgLength - 1]);
                move.insertBefore(tmp, imgs[0]);
                move.style.left = -width + 'px';
            }
            // 2. 再把-1 * width 移到 0px
            animation(move, 0, DURATION, INTERVAL);
            timeriInt = setTimeout(scroll, LINTERVAL + INTERVAL);
        }
        // ==================================核心   END===============================================================
        // =====================================================================================================
        // 清除前面的事件
        function clearTimer() {
            clearTimeout(timeriInt);
        }
        function scroll() {
            // 获取 
            var move = banner.querySelector('.list');
            var imgs = banner.querySelectorAll('.list>div');
            moveRight(move, imgs);
        }
        // ===========================运行模块==========================
        var left = banner.querySelector('.window>.left');
        var right = banner.querySelector('.window>.right');
        var timeriInt;
        // ========轮播=========
        if (autoPlay) {
            timeriInt = setTimeout(scroll, LINTERVAL);
        }
        // ========右移=========
        right.onclick = function () {
            clearTimer();
            var move = banner.querySelector('.list');
            var imgs = banner.querySelectorAll('.list>div');
            moveRight(move, imgs);
        };
        // ========左移=========
        left.onclick = function () {
            clearTimer();
            var move = banner.querySelector('.list');
            var imgs = banner.querySelectorAll('.list>div');
            moveLeft(move, imgs);
        };
        return banner;
    };
    return MySwiper;
}(BaseClass_1.BaseWithBackground));
exports.MySwiper = MySwiper;
