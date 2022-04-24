function animation(element, leftEnd, duration, interval) {
	var leftStart = element.offsetLeft;
	var stepTmp = (leftEnd - leftStart) / (duration / interval);
	var step = Math.floor(stepTmp);
	if (step === 0) {
		step = stepTmp > 0 ? 1 : -1;
	}
	element.timer && clearInterval(element.timer);

	element.timer = setInterval(function () {
		// console.log(element.timer, step, element.offsetLeft - leftEnd);
		if (Math.abs(leftEnd - element.offsetLeft) <= Math.abs(step)) {
			element.style.left = leftEnd + 'px';
			clearInterval(element.timer);
		} else {
			element.style.left = (element.offsetLeft + step) + 'px';
		}
	}, interval);
}

function changeSpans(spanDiv, spans, oldX, x, className, index) {
	spans[oldX].setAttribute('class', '');
	spans[x].setAttribute('class', className);
	spanDiv.dataset[index] = x;
}

function switchSpans(spans, oldX, x, className, index) {
	spans[oldX].setAttribute('class', '');
	spans[x].setAttribute('class', className);
}

function animationTB(element, topEnd, duration, interval) {
	var topStart = element.offsetTop;

	var stepTmp = (topEnd - topStart) / (duration / interval);
	var step = Math.floor(stepTmp);
	if (step === 0) {
		step = stepTmp > 0 ? 1 : -1;
	}
	element.timer && clearInterval(element.timer);
	element.timer = setInterval(function () {
		// console.log(element.timer, step, element.offsetTop - leftEnd);
		if (Math.abs(element.offsetTop - topEnd) <= Math.abs(step)) {
			element.style.top = topEnd + 'px';
			clearInterval(element.timer);
		} else {
			element.style.top = (element.offsetTop + step) + 'px';
		}
	}, interval);
}


function changeSpansBg(spans, oldX, x, oldData, data) {
	spans[oldX].style.background = spans[oldX].getAttribute(oldData);
	spans[x].style.background = spans[x].getAttribute(data);
}

function changeTextByData(target, p, span, ptxt, spantxt) {
	p.innerText = target.getAttribute(ptxt);
	span.innerText = target.getAttribute(spantxt);
}

function changeText(target, p, span, ptxt, spantxt) {
	p.innerText = target.getAttribute(ptxt);
	span.innerText = target.getAttribute(spantxt);
}

function moveLeftRecircle(move, imgs, width, duration, interval) {
	// ===================步骤<一>  选择运动模式	===============
	var nowLeft = parseInt(move.offsetLeft);
	var imgLength = imgs.length;
	// 1. 当为第一格在框内时,把最后一块移到为第一块,并把left瞬间变为-1 * width;
	// 达到运行  步骤 2 的条件
	if (nowLeft >= 0) {
		var tmp = move.removeChild(imgs[imgLength - 1]);
		move.insertBefore(tmp, imgs[0]);
		move.style.left = -width + 'px';
	}
	// 2. 再把-1 * width 移到 0px
	animation(move, 0, duration, interval);
}

function moveRightRecircle(move, imgs, width, duration, interval) {
	// ===================步骤<一> 选择运动模式===============
	var nowLeft = parseInt(move.offsetLeft);
	// 2. 在-1 * width 位置时,把第一块移到为最后一块,并把left瞬间变为0px;
	// 			达到运行步骤 1 的条件
	if (nowLeft <= -1 * width) {
		move.appendChild(imgs[0]);
		move.style.left = '0px';
	}
	// 1. 0px -----> -1 * width位置
	animation(move, -1 * width, duration, interval);
}