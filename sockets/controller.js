const socketController = (socket) => {
    // console.log('Cliente conectado', socket.id);
    socket.on('disconnect', () => {
        // console.log('client desconectado');
    });

    // Callback cuando todo salió bien
    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);
    });
};

module.exports = {
    socketController
};