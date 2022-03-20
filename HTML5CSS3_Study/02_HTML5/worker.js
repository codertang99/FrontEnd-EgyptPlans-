// console.log(self);

self.onmessage = function(e) {
  var data = e.data
  switch(data.type) {
    case "importScript":
      importScripts("./a.js")
      console.log("[worker thread]", a, b);
      this.postMessage("[worker thread]" + "I receiverd a = " + a + " b = " + b)
      break;
    case "close":
      this.close()
      this.postMessage("[worker thread] close")
      break;
    case "calc":
      var number = 0;
      var count = 0;
      for(var i=0; i< data.result; i++) {
        number += i;
        if(i >= data.result / 100 * count) {
          console.log(11);
          count++
          this.postMessage({type: "progress", progress: count})
        }
      }
      this.postMessage({type: "result", result: number})
      break;
    default:
      console.log(e.data);
  }

  
}