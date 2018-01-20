const express = require('express');
const socket = require('socket.io');
const app = express();
var port = process.env.PORT || 3000;

//listen to port
const server = app.listen(port);

const io = socket(server);

///serve static files:-
app.use(express.static('public'));
app.use('/favicon.ico', express.static('images/favicon.ico'));

io.on('connection', function(socket) {
    socket.on('chat message', function(data) {
        console.log(data);
        ///recieved message from user now Spread the message;
        io.sockets.emit('new', data);
    })
    socket.on('typing', function(userName) {
        io.sockets.emit('typing', userName);

    })
})