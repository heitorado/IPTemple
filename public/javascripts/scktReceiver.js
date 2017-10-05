
var socket = io();

//trata o recebimento da propagação do evento pelo servidor
socket.on('chat message', function(msg){

	//var newCard = $('<div class="exercise-card">').append($('<div class="card-container">')).append($('<h4><b>Prece recebida:</b></h4>')).append($('<div id="msgRecvd"></div>').append($('<p></p>').text(msg)));
  
 	//$(newCard).hide().appendTo('#msgCards').fadeTo(100,1);
	$('#msgCards').append($('<hr></hr><p></p>').text(msg)).fadeTo(100,1);

  console.log(msg);
  window.scrollBy(0, 1000000000); //desce a janela
});