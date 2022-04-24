var companySpans = document.querySelectorAll('#company .comp-l-b>div>span');
// 控制按钮的上一级盒子div
// company 轮播图
var companyDiv = document.querySelectorAll('#company .comp-l-b>div');
var companyImgs = document.querySelectorAll('#company>.comp-contain>.comp-l-t>.img-list>img');
var companyImgList = document.querySelector('#company>.comp-contain>.comp-l-t>.img-list');
var boxDiv = document.querySelector('#company .comp-l-b');
var txt = document.querySelector('#company .txt');
var txtP = document.querySelector('#company .txt>p');
var txtSpan = document.querySelector('#company .txt>span');
console.log(companySpans,companyImgs,companyImgList);

var compImgWidth = 590;

boxDiv.dataset['span'] = '0';
boxDiv.addEvent('mouseover', function(){
	var target = this.getTarget();
	for(var x = 0; x < companySpans.length; x++){
		if(target === companyDiv[x]){
			var oldX = parseInt(boxDiv.dataset['span']);
			if(x !== oldX){
				changeTextByData(target, txtP, txtSpan, 'data-p', 'data-span')
				changeSpans(boxDiv, companyDiv, oldX, x, 'active', 'span')
				changeSpansBg(companySpans, oldX, x, 'data-bg', 'data-bgh');
				animation(companyImgList, -compImgWidth*x, 500, INTERVAL);
			}
		}
	}
									
});


// company2 轮播图
var company2Spans = document.querySelectorAll('#company-2>.comp-contain>.jineng_swiper_dian>span');
var company2SpanBox = document.querySelector('#company-2>.comp-contain>.jineng_swiper_dian');
var company2MacbList = document.querySelector('.left-img>.macb-window>.macb-list') ; //用来移动
var company2MacList = document.querySelector('.mac-window>.mac-list') ; //用来移动

// 右边icon
var company2Icons = document.querySelectorAll('#company-2 .right-top-bot>div');
var iconBox = document.querySelector('#company-2 .right-top-bot');
var percentWidth = document.querySelector('#company-2 .zitiao'); //进度条
var introduceParts =document.querySelectorAll('#company-2 .jieshao_s>div')
var level = document.querySelector('#company-2 .right-center>p>span'); 

console.log(iconBox);


var comp2MacImgWidth = 393;
var comp2MacbImgWidth = 267;

company2SpanBox.dataset['span'] = '0';
company2SpanBox.addEvent('click', function(){
	var target = this.getTarget();
	for(var i = 0; i < company2Spans.length; i++){
		if(target === company2Spans[i]){
			var oldI = parseInt(company2SpanBox.dataset['span']);
			if(i !== oldI){
				level.innerText = company2Icons[i].getAttribute('data-chengdu');
				percentWidth.style.width = company2Icons[i].getAttribute('data-bizhong');
				changeSpans(company2SpanBox, company2Spans, oldI, i, 'active', 'span');
				switchSpans(introduceParts, oldI, i, 'true');
				changeSpansBg(company2Icons, oldI, i, 'data-bg', 'data-bgh');
				animation(company2MacList, -comp2MacImgWidth*i, 500, INTERVAL);
				animation(company2MacbList, -comp2MacbImgWidth*i, 500, INTERVAL);
			}
		}
	}									
});

iconBox.addEvent('mouseover', function(){
	var target = this.getTarget();
	for(var i = 0; i < company2Spans.length; i++){
		if(target === company2Icons[i]){
			var oldI = parseInt(company2SpanBox.dataset['span']);
			if(i !== oldI){
				level.innerText = company2Icons[i].getAttribute('data-chengdu');
				percentWidth.style.width = company2Icons[i].getAttribute('data-bizhong');
				changeSpans(company2SpanBox, company2Spans, oldI, i, 'active', 'span');
				switchSpans(introduceParts, oldI, i, 'true');
				changeSpansBg(company2Icons, oldI, i, 'data-bg', 'data-bgh');
				animation(company2MacList, -comp2MacImgWidth*i, 500, INTERVAL);
				animation(company2MacbList, -comp2MacbImgWidth*i, 500, INTERVAL);
			}
		}
	}									
});


var contentList = document.querySelector('.class-content>.content-list');
var arrowUp = document.querySelector('.class-arrow>.you');
var arrowDown = document.querySelector('.class-arrow>.zuo');
var contentImgList = document.querySelector('.class-right>.img-window>.img-list');
var contents = document.querySelectorAll('.class-content>.content-list>div');
var arrow = document.querySelector('.class-arrow');
var stageData = ['第一阶段','第二阶段','第三阶段','第四阶段','第五阶段'];
var stage = document.querySelector('.kecheng_biaoti>.text');

var contentHeight = 440;
var imgHeight = 545;
	console.log(stage);

arrowDown.addEvent('click', function(){
	var oldJ = parseInt(arrow.dataset['index']);
	if(oldJ < contents.length - 1){
		var j = oldJ + 1;
		animationTB(contentList, -contentHeight*j, 100, 20);
		animationTB(contentImgList, -imgHeight*j, 100, 20);
		arrow.dataset['index'] = j;
		stage.innerText = stageData[j];
		if(j === contents.length -1){
			arrowDown.style.backgroundColor = '#ccc';
		}else{
			arrowDown.style.backgroundColor = '#de2986';
			arrowUp.style.backgroundColor = '#de2986';
		}
	}
	
});

arrowUp.addEvent('click', function(){
	var oldJ = parseInt(arrow.dataset['index']);
	console.log(oldJ);
	if(oldJ > 0){
		var j = oldJ - 1;
		animationTB(contentList, -contentHeight*j, 100, 20);
		animationTB(contentImgList, -imgHeight*j, 100, 20);
		arrow.dataset['index'] = j;
		stage.innerText = stageData[j];
		if(j === 0){
			arrowUp.style.backgroundColor = '#ccc';
		}else{
			arrowDown.style.backgroundColor = '#de2986';
			arrowUp.style.backgroundColor = '#de2986';
		}
	}
	
});


// certify 轮播图
var certifyWidth = 540;
var certifyImgWidth = 200;

var arrowLeft = document.querySelector('.arrow-btn>.zuo');
var arrowRight = document.querySelector('.arrow-btn>.you');
var leftWindowImgList = document.querySelector('#certify .left-window>div');
var rightWindowImgList = document.querySelector('#certify .right-window>div');
var leftWindowImgs = document.querySelectorAll('#certify .left-window>div>img');
var rightWindowImgs = document.querySelectorAll('#certify .right-window>div>img');
console.log(leftWindowImgs);

var certifyList = document.querySelector('.center-window>.cert-list');
var certifyListContents = document.querySelectorAll('.center-window>.cert-list>div');
for(k = 0; k < certifyListContents.length; k++){
	certifyListContents[k].dataset['centent'] = k;
}

arrowRight.addEvent('click', function(){
	var certifyList = document.querySelector('.center-window>.cert-list');
	var certifyListContents = document.querySelectorAll('.center-window>.cert-list>div');
	var leftWindowImgList = document.querySelector('#certify .left-window>div');
	var rightWindowImgList = document.querySelector('#certify .right-window>div');
	var leftWindowImgs = document.querySelectorAll('#certify .left-window>div>img');
	var rightWindowImgs = document.querySelectorAll('#certify .right-window>div>img');
	moveLeftRecircle(certifyList, certifyListContents, certifyWidth, 300, 20);
	moveLeftRecircle(leftWindowImgList, leftWindowImgs, certifyImgWidth, 0, 20);
	moveLeftRecircle(rightWindowImgList, rightWindowImgs, certifyImgWidth, 0, 20);

});

arrowLeft.addEvent('click', function(){
	var certifyList = document.querySelector('.center-window>.cert-list');
	var certifyListContents = document.querySelectorAll('.center-window>.cert-list>div');
	var leftWindowImgList = document.querySelector('#certify .left-window>div');
	var rightWindowImgList = document.querySelector('#certify .right-window>div');
	var leftWindowImgs = document.querySelectorAll('#certify .left-window>div>img');
	var rightWindowImgs = document.querySelectorAll('#certify .right-window>div>img');
	moveRightRecircle(certifyList, certifyListContents, certifyWidth, 300, 20);
	moveRightRecircle(leftWindowImgList, leftWindowImgs, certifyImgWidth, 0, 20);
	moveRightRecircle(rightWindowImgList, rightWindowImgs, certifyImgWidth, 0, 20);
});