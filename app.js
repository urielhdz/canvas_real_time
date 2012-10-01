var io = require("socket.io").listen(8080);

io.sockets.on("connection",arranque);

function arranque(usuario)
{
	usuario.on("nuevosDatos", function(data){
		usuario.broadcast.emit("nombreDesdeServidor",data);
	});
	usuario.on("limpiaLienzo",function(){
		usuario.broadcast.emit("limpienSuLienzo");
	});
}