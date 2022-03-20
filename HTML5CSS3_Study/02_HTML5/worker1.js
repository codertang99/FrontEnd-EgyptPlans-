var total = 1000
self.onmessage = function(e) {
  var count = 0;
  for(var i=0; i<total; i++) {
    count += i;
  }

  this.postMessage(count)

}