const express=require('express');
const socket=require('socket.io');
const app=express();

//listen to port
const server=app.listen(4000,function(){
  console.log('Listening to port 4000');
})

const io=socket(server);

///serve static files:-
app.use(express.static('public'));

io.on('connection',function(socket){
socket.on('chat message',function(data){
  console.log(data);
  ///recieved message from user now Spread the message;
  io.sockets.emit('new',data);
})
socket.on('typing',function(userName){
  io.sockets.emit('typing',userName);

})
})
