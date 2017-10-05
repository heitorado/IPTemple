//sem url em io() = localhost
//ao clicar em send, o evento 'chat message' dispara pro servidor, levando a mensagem.

$(function() {
  var socket = io();
  $('form').submit(function()
  {

    $('.cfmsg').remove();

  	console.log($('#m').val());
  	if ($('#m').val()) 
  	{
  		socket.emit('chat message', $('#m').val());
    	$('#m').val('');
      $('#confirmation').hide();
      $('#confirmation').append('<p class="cfmsg">Prece enviada com sucesso!</p>');
      $('#confirmation').fadeTo(500,1);
      $('#confirmation').fadeTo(2000,0);
      
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


/*animations*/

function main()
{
  $('.welcome').hide();
  $('.welcome').fadeTo(600, 1);
}


$(document).ready(main);