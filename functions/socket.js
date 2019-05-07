function socket(io){
    io.on('connection', function (socket) {
        console.log("conectado un nuevo usuarip")
        socket.on('draw', function (data) {
            console.log("pinto")
			io.emit('drawData', data);
		});
    
    })
}

module.exports.socket = socket