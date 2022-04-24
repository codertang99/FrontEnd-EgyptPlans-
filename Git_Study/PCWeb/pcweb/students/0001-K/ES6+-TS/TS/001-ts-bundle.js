(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyDiv_1 = require("./MyDiv");
var MySwiper_1 = require("./MySwiper");
var MyImg_1 = require("./MyImg");
var MyClickable_1 = require("./MyClickable");
var parent1 = document.querySelector('#div1');
var parent2 = document.querySelector('#div2');
// ==================== MyDiv ====================
// 创建 MyDiv
var myDiv1 = new MyDiv_1.MyDiv('#0f0', 500, 550, true);
// 即时修改
myDiv1.width = 612;
myDiv1.height = 800;
// myDiv1.visiable = false;
myDiv1.background = '#ccc';
// 添加到parent
myDiv1.appendTo(parent1);
// 从parent移除
myDiv1.takeOff();
// 再次添加到parent
myDiv1.appendTo(parent1);
// ================== MySwiper =================
// 创建
var picture = [{ src: './img/p1.jpg', onclick: function () { return console.log(123); } }, { src: './img/p2.jpg', onclick: function () { return console.log(123); } }, { src: './img/p3.jpg', onclick: function () { return console.log(123); } }, { src: './img/p4.jpg', onclick: function () { return console.log(123); } }];
var mySwiper = new MySwiper_1.MySwiper(picture, false, 20, '#0f0', 600, 600, true);
// 即时修改
mySwiper.autoPlay = true;
mySwiper.interval = 50;
mySwiper.picture = [{ src: './img/p7.jpg', onclick: function () { return console.log(123); } }, { src: './img/p8.jpg', onclick: function () { return console.log(123); } }, { src: './img/p6.jpg', onclick: function () { return console.log(123); } }, { src: './img/p4.jpg', onclick: function () { return console.log(123); } }];
// 用MyDiv添加
myDiv1.append(mySwiper);
// mySwiper.appendTo(parent);
// 移除
mySwiper.takeOff();
// 添加
mySwiper.appendTo(myDiv1.myself);
console.log(mySwiper);
// ================== MyImg =======================
// 创建
var img1 = new MyImg_1.MyImg('./img/p2.jpg', 204, 200, true);
var img2 = new MyImg_1.MyImg('./img/p3.jpg', 204, 200, true);
var img3 = new MyImg_1.MyImg('./img/p4.jpg', 204, 200, true);
var img4 = new MyImg_1.MyImg('./img/p5.jpg', 204, 200, true);
myDiv1.append(img1, img2, img3,img4);
myDiv1.remove(img1);
console.log(img1);
// ================== MyClickable =================
// 创建
var fn = function () {
    console.log(15697);
}
var myClickable = new MyClickable_1.MyClickable('url(./img/p1.jpg)', fn, '#0f0', 891, 800, true);
// 添加
console.log(myClickable);
myClickable.appendTo(parent2);
myClickable.onclick = fn;
console.log(myClickable);
myClickable.src = 'url(./img/bg.jpeg)';
myClickable.background = '#f00';
// 修改
myClickable.takeOff();
myClickable.appendTo(parent2);
myClickable.myself.addEventListener('click', myClickable.onclick);
myDiv1.remove(img1);

},{"./MyClickable":3,"./MyDiv":4,"./MyImg":5,"./MySwiper":6}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./BaseClass":2}],4:[function(require,module,exports){
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

},{"./BaseClass":2}],5:[function(require,module,exports){
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

},{"./BaseClass":2}],6:[function(require,module,exports){
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

},{"./BaseClass":2}]},{},[1]);
