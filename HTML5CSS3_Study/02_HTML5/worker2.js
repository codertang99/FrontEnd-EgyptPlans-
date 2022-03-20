var total = 10
self.onmessage = function() {
  var count = 0;
  for(var i=0; i<total; i++) {
    count += i;
  }

  this.postMessage(count)

}