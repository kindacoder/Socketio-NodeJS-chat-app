var socket=io.connect(); ///writing 4000 is not compulsory

//now Query the dom part:-
var input=$("#m");
var messages=$('#messages');
var button=$("#button");
var user=prompt('What is your name ?')
var typing=$("#typing");


///add button click event
button.on('click',function(){
  console.log('button clicked ');
  socket.emit('chat message',input.val());
})

///add keyup event

$("input").keyup(function(){
        socket.emit('typing',user);
  });


//get the message from the server
socket.on('new', function(msg){

  messages.append('<li>'+msg+'</li>');
    typing.html("");
    });

socket.on('typing',function(userName){
typing.html(userName+' is typing a message');
    });
