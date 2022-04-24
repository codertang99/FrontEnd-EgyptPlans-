var LINTERVAL = 4000;
var width = 1536;
var DURATION = 1000;
var INTERVAL = 20;
var pos = 0;

// move 为要移动的element,由多个img组成的长条div
// imgs 为move的div下 img的伪数组


// 右移
function moveRight(move, imgs){
	// ===================步骤<一> 选择运动模式===============
	var nowLeft = parseInt(move.offsetLeft);
	// 2. 在-1 * width 位置时,把第一块移到为最后一块,并把left瞬间变为0px;
	// 			达到运行步骤 1 的条件
	if(nowLeft  <= -1 * width){
		move.appendChild(imgs[0]);
		move.style.left  = '0px';						
	}
	// 1. 0px -----> -1 * width位置
	animation(move, -1*width,DURATION, INTERVAL);
	// ==================步骤<二> 选择亮起的指示标  span=============     
		
	// 确定块的位置
	var bannerImg = imgs[pos];
	// 确定在块位置激活的图片
	var imgActive = parseInt(bannerImg.dataset['img']);
		
	// （因为它比timeriInt = setTimeout(scroll, LINTERVAL + INTERVAL);）
	// 让当前位置的span 取下 span-active。
	spans[imgActive].setAttribute('class', '');
	
	if(imgActive < (imgs.length - 1)){
		// 给下一个span激活
		spans[imgActive+1].setAttribute('class', 'span-active');
	}else{
		// 在最右时(最后一个),激活第一个
		spans[0].setAttribute('class', 'span-active');
	}
	
	// 若不是最右(最后一个)  位置加1
	if(pos < 1){
		pos += 1;
	}			
	
	timeriInt = setTimeout(scroll, LINTERVAL + INTERVAL);
}

// 左移
function moveLeft(move, imgs){
	// ===================步骤<一>  选择运动模式	===============
	console.log(123);
	var nowLeft = parseInt(move.offsetLeft);
	var imgLength = imgs.length;
	// 1. 当为第一格在框内时,把最后一块移到为第一块,并把left瞬间变为-1 * width;
			// 达到运行  步骤 2 的条件
	if(nowLeft >= 0){
		var tmp = move.removeChild(imgs[imgLength - 1]);
		move.insertBefore(tmp, imgs[0]);
		move.style.left  = -width + 'px';						
	}
	// 2. 再把-1 * width 移到 0px
	animation(move, 0,DURATION, INTERVAL);	
	// ==================步骤<二>   选择亮起的指示标  span=============     
	var bannerImg = imgs[pos];
	var imgActive = parseInt(bannerImg.dataset['img']);
	
	// 让当前位置的span 取下 span-active。
	for(var i = 0; i < spans.length; i++){
		
	spans[i].setAttribute('class', '');
	}
		
	if(imgActive > 0){
		// 前一个span激活
		spans[imgActive-1].setAttribute('class', 'span-active');
	}else{
		// 若在最左（第一个） 激活最后一个
		spans[imgs.length - 1].setAttribute('class', 'span-active');
	}	
	// pos初始为0   若不是在第一（pos=0），pos减1
	if(pos > 0){
		console.log(123);
		pos -= 1;
	}			
	timeriInt = setTimeout(scroll, LINTERVAL + INTERVAL);
}

// 清除前面的事件
function clearTimer(){
	clearTimeout(timeriInt);
	clearTimeout(timerR);
	clearTimeout(timerL);
}

// 放在外面无法正确运行




// ========运行模块===========
// 获取操作部件
function getMoveParts(){
	var move = document.querySelector('#banner .img-window');
	var imgs = document.querySelectorAll('#banner .img-window>div');
	return [move, imgs];
}

getMoveParts();

var imgs = document.querySelectorAll('#banner .img-window>div');
var spans = document.querySelectorAll('.cent-btn>span');

// 设定编号
for(var i0 = 0; i0 < imgs.length; i0++){
	spans[i0].dataset['span'] = i0;
	imgs[i0].dataset['img'] = i0;
}

function scroll(){
	// 获取 
	var parts = getMoveParts();
	var move = parts[0];
	var imgs = parts[1];	
	moveRight(move, imgs);
}

var left = document.querySelector('.ctr-btn>.pre');
var right = document.querySelector('.ctr-btn>.next');

var timeriInt = setTimeout(scroll, LINTERVAL);

console.log(left);

var timerR = right.onclick = function(){				
	clearTimer();
	console.log(123);
	var parts = getMoveParts();
	var move = parts[0];
	var imgs = parts[1];
	moveRight(move, imgs)
}


var timerL = left.onclick= function(){
	clearTimer();
	console.log(123);
	var parts = getMoveParts();
	var move = parts[0];
	var imgs = parts[1];
	moveLeft(move, imgs)
}