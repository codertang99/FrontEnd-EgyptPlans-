import { MyDiv } from "./MyDiv";
import { MySwiper } from "./MySwiper";
import { MyImg } from "./MyImg";
import { MyClickable } from "./MyClickable";
import { IPicture } from "./BaseClass";

let parent1: HTMLElement = document.querySelector('#div1');
let parent2: HTMLElement = document.querySelector('#div2');

// ==================== MyDiv ====================
// 创建 MyDiv
let myDiv1: MyDiv = new MyDiv('#0f0', 550,550,true);
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
let picture: IPicture[] = [{src: './img/p1.jpg', onclick: () => console.log(123)}, {src: './img/p2.jpg', onclick: () => console.log(123)}, {src: './img/p3.jpg', onclick: () => console.log(123)}, {src: './img/p4.jpg', onclick: () => console.log(123)}];
let mySwiper: MySwiper = new MySwiper(picture, false, 20, '#0f0', 400, 400, true);
// 即时修改
mySwiper.autoPlay = true;
mySwiper.interval = 50;
mySwiper.picture = [{src: './img/p7.jpg', onclick: () => console.log(123)}, {src: './img/p8.jpg', onclick: () => console.log(123)}, {src: './img/p6.jpg', onclick: () => console.log(123)}, {src: './img/p4.jpg', onclick: () => console.log(123)}];
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
let img1: MyImg = new MyImg('./img/p2.jpg', 150,150,true);
let img2: MyImg = new MyImg('./img/p3.jpg', 150,150,true);
let img3: MyImg = new MyImg('./img/p4.jpg', 150,150,true);
myDiv1.append(img1,img2,img3);
myDiv1.remove(img1);
console.log(img1);


// ================== MyClickable =================
// 创建
let myClickable: MyClickable = new MyClickable('url(./img/p1.jpg)', function(){
    console.log(15697);            
}, '#0f0' , 550, 550, true);
// 添加
myClickable.appendTo(parent2);
myClickable.src = 'url(./img/bg.jpeg)';
myClickable.background = '#f00'
// console.log(myClickable.myself);
// 修改
myClickable.takeOff();
myDiv1.append(myClickable);
// myClickable.myself.addEventListener('click', myClickable.onclick);
myClickable.myself.onclick = myClickable.onclick;
console.log(myDiv1);
myDiv1.remove(img1);
