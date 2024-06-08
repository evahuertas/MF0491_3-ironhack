/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */
var btnEnviar = document.querySelector('#btn-send')

btnEnviar.addEventListener('click', function (e) {
    var inputMessage = document.querySelector('#message').value
    console.log(" input : " , inputMessage)

    var lastMessage = document.querySelector('#last-message');
    lastMessage.textContent = inputMessage;

    document.querySelector('#message').value = '';
})