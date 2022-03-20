var WebSocket = require("ws")

var WebSocketServer = WebSocket.Server

var server = new WebSocketServer({
  port: 3000
})

server.on("connection", function(ws) {
  console.log("[server connection]");

  ws.on("message", function(message) {
    console.log(message);
    console.log("[Server message] " + message);
    setTimeout(() => {
      var backMessage = message + " received back"
      console.log("[Server send message ]" + backMessage);
      ws.send(backMessage, function(err) {
        if(err) {
          console.log(err);
        }
      })
    }, 2000);
  })

})

console.log("app running at port 3000");