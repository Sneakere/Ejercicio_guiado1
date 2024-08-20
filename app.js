$(document).ready(function () {
    $("#enviar").click(function () {
        var nombre = $("#nombre").val()
        var email = $("#email").val()
        var mensaje = $("#Mensaje").val()

        $("#nombreform").append(nombre);
        $("#emailform").append(email);
        $("#mensajeform").append(mensaje);

        $("#nombre").val('');
        $("#email").val('');
        $("#Mensaje").val('');
    })
})