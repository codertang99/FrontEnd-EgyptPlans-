function animation(element, target, duration, interval) {
  var STEPTEMP = (target - element.offsetLeft) / (duration / interval)
  var STEP = Math.floor(STEPTEMP);
  if(STEP === 0) {
    STEP = STEPTEMP > 0 ? STEP = 1 : STEP = -1;
  }
  
  element.timer && clearInterval(element.timer)

  element.timer = setInterval(() => {

    if(Math.abs(target - element.offsetLeft) <= Math.abs(STEP)) {
      element.style.left = target + "px";
      clearInterval(element.timer)
    } else {
      element.style.left = element.offsetLeft + STEP + "px"
    }
    
  }, interval);
}