var express = require("express");
var app = express();
var socket = require('socket.io');
var server = app.listen(3000);

app.use(express.static("public"));

console.log("server is running");
var io = socket(server);
io.sockets.on('connection', function(socket){
  console.log("New client: " + socket.id);
  socket.on('mouse',function(data){
  	    socket.broadcast.emit('mouse', data);

});
});

