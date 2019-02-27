var socket = io();
var params = new URLSearchParams(window.location.search);

if (!params.has('nombre' || !params.has('sala'))) {
    window.location = 'index.html';
    throw new Error('El nombre y sala es necesario');
};
var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};
//Escuchar informacion
socket.on('connect', function() {
    console.log('Conectado');

    socket.emit('entrarChat', usuario, function(resp) {
        console.log(resp);
    });

});
socket.on('disconnect', function() {
    console.log('Conexion perdida');
});

socket.on('crearMensaje', function(mensaje) {
    console.log('Mensaje', mensaje);
});


socket.on('listaPersona', function(personas) {
    console.log('Personas', personas);
});


//Mensajes privados
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje privado', mensaje);
})