function getScroll(){
	return {
		left: window.pageXOffset
			|| document.documentElement.scrollLeft 
			|| document.body.scrollLeft || 0,
		top: window.pageYOffset
			|| document.documentElement.scrollTop
			|| document.body.scrollTop || 0
	};
}

var moveIdBlock = document.querySelector('#content-info');
var coverIdBlock = document.querySelector('#banner');
var nav = document.querySelector('#nav-box');
var subNav = document.querySelector('#sub-nav');
var opacity = parseInt(getComputedStyle(nav)["opacity"]);
window.addEventListener('scroll',function(){
// 盖住banner
	if(getScroll().top <= coverIdBlock.offsetHeight){
		moveIdBlock.style.marginTop = -getScroll().top + 'px';
	}
	
	
	if(parseInt(getScroll().top) >=  parseInt(nav.offsetHeight) && parseInt(getComputedStyle(subNav)["opacity"]) === 0){
			changeOpacity(subNav, 100, 0, 40);
			subNav.style.marginTop = '';
			if(opacity > 0 ){
				opacity -= 0.01;
				console.log(opacity);
			}
		}else if(parseInt(getScroll().top) <  parseInt(nav.offsetHeight) && parseInt(getComputedStyle(subNav)["opacity"]) === 1){
			changeOpacity(subNav, 0, 100, 40)
			subNav.style.marginTop =  parseInt(nav.offsetHeight) + 'px';
		}

});

// 把对话弄没

var canncelSpanTalk = document.querySelector('#talk>.talk-head>span');
var talk = document.querySelector('#talk');
var talkSmall = document.querySelector('#small-talk');

canncelSpanTalk.addEvent('click', function(){
	talk.style.display = 'none';
	talkSmall.style.display = 'block';
});

talkSmall.addEvent('click', function(){
	talk.style.display = 'block';
	talkSmall.style.display = 'none';
});