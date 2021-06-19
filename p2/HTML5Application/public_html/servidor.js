var express = require('express'),
        aplicacion=express(),
        server=require('http').createServer(aplicacion);
io=require('socket.io').listen(server);



aplicacion.get("/",function(req,res){
    res.sendFile(__dirname+'/juego.html');
});


io.sockets.on('conection',function(socket){
   console.log("jugada");
   
socket.on('jugada',function (dataS){
   io.sockets.emit('jugada2',dataS);
   console.log("jugada"+dataS.id+"--"+dataS.id2);
    
});   
    
    
});
server.listen(8383);