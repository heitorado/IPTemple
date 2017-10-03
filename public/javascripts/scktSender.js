//sem url em io() = localhost
//ao clicar em send, o evento 'chat message' dispara pro servidor, levando a mensagem.

$(function() {
  var socket = io();
  $('form').submit(function()
  {
  	console.log($('#m').val());
  	if ($('#m').val()) 
  	{
  		socket.emit('chat message', $('#m').val());
    		$('#m').val('');
    		return false;
  	}
  	return false;
  });

  //trata o recebimento da propagação do evento pelo servidor
  /*socket.on('chat message', function(msg){
    $('#messages').append($('<div class="msgtext"><p>').text(msg));
    $('#messages').append($('</p></div>'));
    window.scrollBy(0, 1000000000); //desce a janela
  });*/
});