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
var myDiv1 = new MyDiv_1.MyDiv('#0f0', 550, 550, true);
// 即时修改
myDiv1.width = 500;
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
var mySwiper = new MySwiper_1.MySwiper(picture, false, 20, '#0f0', 400, 400, true);
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
var img1 = new MyImg_1.MyImg('./img/p2.jpg', 150, 150, true);
var img2 = new MyImg_1.MyImg('./img/p3.jpg', 150, 150, true);
var img3 = new MyImg_1.MyImg('./img/p4.jpg', 150, 150, true);
myDiv1.append(img1, img2, img3);
myDiv1.remove(img1);
console.log(img1);
// ================== MyClickable =================
// 创建
var myClickable = new MyClickable_1.MyClickable('url(./img/p1.jpg)', function () {
    console.log(15697);
}, '#0f0', 550, 550, true);
// 添加
myClickable.appendTo(parent2);
myClickable.src = 'url(./img/bg.jpeg)';
myClickable.background = '#f00';
// console.log(myClickable.myself);
// 修改
myClickable.takeOff();
myDiv1.append(myClickable);
// myClickable.myself.addEventListener('click', myClickable.onclick);
myClickable.myself.onclick = myClickable.onclick;
console.log(myDiv1);
myDiv1.remove(img1);
