document.getElementById('send-btn').addEventListener('click', function () {
    sendMessage();
});

function sendMessage() {
    //Essa funcao é responsavel por todo o processo enviar mensagem
    let message = document.getElementById('msg-input').value;
    let atual_date = getDate();

    //criar uma div contendo o elemento
    mensagem = createElement(message, atual_date, 'Você', 'enviada');

    let messageContainer = document.getElementById('msg-list');
    messageContainer.appendChild(mensagem);
    CriarResposta();

}

function getDate() {
    //Essa funcao retorna a data atual no formato hh:mm
    let date = new Date();
    let hour = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');

    // Formatar a data no formato desejado (hh:mm)
    let formattedDate = hour + ":" + minutes;

    return formattedDate;
}

function createElement(msg, date, sender, type) {
    // Essa função cria um elemento com a mensagem e adiciona na div de mensagens
    if (type === 'enviada') {
        let message_content = document.createElement('div');
        message_content.classList.add('sended-msg');

        let msgHeader = document.createElement('h');
        msgHeader.id = 'time-msg';
        msgHeader.textContent = sender + ' - ' + date;
        message_content.appendChild(msgHeader);

        let msgBox = document.createElement('div');
        msgBox.id = 'msg-sent-box';
        let msgText = document.createElement('p');
        msgText.id = 'msg-text';
        msgText.textContent = msg;

        //Formatando a mensagem
        message_content.style.textAlign = 'right';
        msgText.style.padding = '10px';
        msgText.style.borderRadius = '8px';
        msgText.style.backgroundColor = '#00B37E';
        msgText.style.display = 'inline-block';
        msgText.style.textAlign = 'right';

        msgBox.appendChild(msgText);
        message_content.appendChild(msgBox);

        let msg_input = document.getElementById('msg-input');
        msg_input.value = '';
        let msgList = document.getElementById('msg-list');
        msgList.appendChild(message_content);
        scrollScreen();
        return message_content;


    } else {
        let message_content = document.createElement('div');
        message_content.classList.add('sended-msg');

        let msgHeader = document.createElement('h');
        msgHeader.id = 'time-msg';
        msgHeader.textContent = sender + ' - ' + date;
        message_content.appendChild(msgHeader);

        let msgBox = document.createElement('div');
        msgBox.id = 'msg-sent-box';
        let msgText = document.createElement('p');
        msgText.id = 'msg-text';
        msgText.textContent = msg;

        msgText.style.padding = '10px';
        msgText.style.borderRadius = '8px';
        msgText.style.backgroundColor = '#633BBC';
        msgText.style.display = 'inline-block';
        msgText.style.textAlign = 'right';

        msgBox.appendChild(msgText);
        message_content.appendChild(msgBox);

        let msg_input = document.getElementById('msg-input');
        msg_input.value = '';

        let msgList = document.getElementById('msg-list');
        msgList.appendChild(message_content);
        scrollScreen();
        return message_content;
    }
}

function CriarResposta() {
    // Gera um tempo aleatório entre 1 segundo e 3 minutos em milissegundos

    // Aguarda o tempo aleatório antes de criar a resposta
    setTimeout(function () {
        // Esta parte será executada após o tempo aleatório
        createElement('Ola, tudo bem?', getDate(), 'Sapixel', 'recebida');
    }, 1000);
}

function scrollScreen() {
    let msgList = document.getElementById('msg-list');
    msgList.scrollTop = msgList.scrollHeight;
}
