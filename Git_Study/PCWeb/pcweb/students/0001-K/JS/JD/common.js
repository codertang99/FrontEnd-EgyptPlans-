function addClassName(element, className){
	// 1. 判断是否已经存在
	var classNames = element.className.split(' ');
	for(var i = 0; i < classNames.length; i++){
		if(classNames[i] === className){
			break;
		}
	}
	
	//没找着
	if(i === classNames.length){
		if(element.className !== ''){
			element.className += ' ' + className;
		}else{
			element.className = className;
		}
	}
	// 找到,不用加
}

function removeClassName(element, className){
	// 1. 判断是否已经存在
	var classNames = element.className.split(' ');
	for(var i = 0; i < classNames.length; i++){
		if(classNames[i] === className){
			break;
		}
	}
	
	//找到
	if(i !== classNames.length){
		classNames.splice(i, 1);
		element.className = classNames.join(' ');
	}
	
	// 没找到
}