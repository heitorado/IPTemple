
var socket = io();



//Trata o recebimento da propagação do evento pelo servidor
/*socket.on('chat message', function(msg){

	//var newCard = $('<div class="exercise-card">').append($('<div class="card-container">')).append($('<h4><b>Prece recebida:</b></h4>')).append($('<div id="msgRecvd"></div>').append($('<p></p>').text(msg)));
  
 	//$(newCard).hide().appendTo('#msgCards').fadeTo(100,1);
	$('#msgCards').append($('<hr></hr><p></p>').text(msg)).fadeTo(100,1);
	

  console.log('scktReceiver.js -> ' + msg);
  //window.scrollBy(0, 1000000000); //desce a janela
});*/

socket.on('load db', function(allMsgs){
	console.log(allMsgs);

	$.each(allMsgs, function(i, res) {
		console.log(res);
		createMessage(res.key, res.message);
	});

});

socket.on('new message', function(newMsg, newKey){
	console.log(newKey);
	createMessage(newKey, newMsg);
});

/*animations*/

function main()
{
	//ao carregar o documento, emite dizendo que é o receptor.
	socket.emit('server connected');
	$('#messages').hide();
	$('#messages').fadeTo(1000, 1);
}

function createMessage(key, msg){
	console.log(key);
	var newCard = $('<div class="exercise-card">').append($('<div class="card-container">')).append($('<h4><b>Prece recebida:</b></h4>')).append($('<div id="msgRecvd"></div>').attr('id', key).append($('<p></p>').text(msg)));
	$('#msgCards').append($('<hr></hr>').attr('id', String(key) )).append($('<p></p>').text(msg)).fadeTo(100,1);
	
}


$(document).ready(main);