
function animationOpacity(element, nowoPacity ,alpha, interval, duration){
	// var nowoPacity = parseFloat(getComputedStyle(element)["opacity"]);
	var start = (1 - nowoPacity) * 100;	
	var stepTmp = (alpha - start)/(duration/interval);
	var step = Math.floor(stepTmp);
	if(step === 0){
		step = stepTmp > 0 ? 1 : -1;
	}	
	console.log(start);
	element.timer && clearInterval(element.timer);
	element.timer = setInterval(function(){
	if(Math.abs(nowoPacity) <= Math.abs(step)){
		setOpacity(element, alpha);
		// element.style.filter='alpha(opacity:'+alpha+')';
		// element.style.opacity= 1 - alpha/100;
		// element.style.zIndex = '';
		clearInterval(element.timer);
	}else{
		alpha += speed
		setOpacity(element, alpha);
		// element.style.filter='alpha(opacity:'+alpha+')';
		// element.style.opacity= 1 - alpha/100;
	}
}, interval)
}

function setOpacity(element, alpha){
	element.style.filter='alpha(opacity:'+alpha+')';
	element.style.opacity= 1 - alpha/100;
}



function changeLis(adUl, adLis, oldK, k){
	adLis[oldK].setAttribute('class', '');
	adLis[k].setAttribute('class', 'active');
	adUl.dataset['li'] = k;
}
	

function changeOpacity(element, value, alpha, interval){
	element.timer && clearInterval(element.timer);
	
	element.timer = setInterval(function(){
		var speed = 0;
		if(alpha > value){
			speed = -10;
		}else{
			speed = 10;
		}
		if(alpha == value){
			clearInterval(element.timer);
		}else{
			alpha += speed;

			//兼容浏览器
			element.style.filter = "alpha(opacity:"+alpha+")";
			element.style.opacity = alpha/100 ;
		}
	},interval);
 }


