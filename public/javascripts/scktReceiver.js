
var socket = io();

//trata o recebimento da propagação do evento pelo servidor
socket.on('chat message', function(msg){
  $('#msgCards').append($('<div class="exercise-card">').append($('<div class="card-container">')).append($('<h4><b>Mensagem:</b></h4>').append($('<p></p>').text(msg))));


  console.log(msg);
  window.scrollBy(0, 1000000000); //desce a janela
});