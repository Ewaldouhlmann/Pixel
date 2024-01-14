const number_card = document.querySelector("#card-number");
const titularName = document.querySelector("#card-name");
const validate = document.querySelector("#card-validate");
const card_number1 = document.querySelector("#card-number1");
const card_number2 = document.querySelector("#card-number2");
const card_number3 = document.querySelector("#card-number3");
const card_number4 = document.querySelector("#card-number4");
const card_titular = document.querySelector("#card-titular");
const card_date = document.querySelector("#card-date");

number_card.addEventListener("input", formatCardNumber);
titularName.addEventListener("input", formatCardTitular);
validate.addEventListener("input", formatValidate);
card_number1.addEventListener("input", formatCardNumber);
card_number2.addEventListener("input", formatCardNumber);
card_number3.addEventListener("input", formatCardNumber);
card_number4.addEventListener("input", formatCardNumber);
card_titular.addEventListener("input", formatCardTitular);
card_date.addEventListener("input", formatValidate);
document.getElementById('btn_addcard').addEventListener('click', function () {
    verifyForm()
});

let number_card_prevlenght = 0;
function formatCardNumber(event) {
    let cardNumber = event.target.value.replace(/\D/g, '');
    let formattedNumber = '';

    for (let i = 0; i < cardNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedNumber += ' ';
        }
        if (i < 4) {
            updateCardNumber(cardNumber[i], i, card_number1);
        } else if (i < 8) {
            updateCardNumber(cardNumber[i], i - 4, card_number2);
        } else if (i < 12) {
            updateCardNumber(cardNumber[i], i - 8, card_number3);
        } else {
            updateCardNumber(cardNumber[i], i - 12, card_number4);
        }
        formattedNumber += cardNumber[i];
    }
    if (cardNumber.length == 0) {
        resetCardNumberFields()
    } else if (cardNumber.length < number_card_prevlenght) {
        // Usuário apagou caracteres, retornar para '*'
        if (cardNumber.length < 4) {
            updateCardNumber('*', cardNumber.length, card_number1);
        } else if (cardNumber.length < 8) {
            updateCardNumber('*', cardNumber.length - 4, card_number2);
        } else if (cardNumber.length < 12) {
            updateCardNumber('*', cardNumber.length - 8, card_number3);
        } else {
            updateCardNumber('*', cardNumber.length - 12, card_number4);
        }
    }

    number_card_prevlenght = cardNumber.length;

    event.target.value = formattedNumber;
}

function updateCardNumber(digit, position, cardNumberInput) {
    let currentNumber = cardNumberInput.value.replace(/\D/g, '');
    let formattedNumber = '';

    for (let i = 0; i < 4; i++) {
        formattedNumber += i === position ? digit : currentNumber[i] || '*';
    }

    cardNumberInput.value = formattedNumber;
}

function resetCardNumberFields() {
    card_number1.value = '****';
    card_number2.value = '****';
    card_number3.value = '****';
    card_number4.value = '****';
}


function formatCardTitular(event) {
    let cardName = event.target.value.replace(/^[\s.]+/, ''); // Remove ponto e espaco no início
    cardName = cardName.replace(/[^a-zA-Z\s.]/g, '');
    cardName = cardName.toUpperCase();
    updateCardTitular(cardName);
    event.target.value = cardName;
}

function updateCardTitular(cardName) {
    card_titular.value = cardName;
}

function formatValidate(event) {
    let validateNumber = event.target.value.replace(/\D/g, '');
    let formattedValidate = '';

    for (let i = 0; i < validateNumber.length; i++) {
        if (i === 2) {
            formattedValidate += '/';
        }
        if (i === 0) {
            formattedValidate += validateFirstNumber(validateNumber[i]);
        } else if (i === 1) {
            formattedValidate += validateSecondNumber(validateNumber[i - 1], validateNumber[i]);
        } else {
            formattedValidate += validateNumber[i];
        }
    } updateValidate(formattedValidate)

    event.target.value = formattedValidate;
}

function updateValidate(str) {
    card_date.value = str;
}

function validateFirstNumber(firstnum) {
    if (firstnum == '0' || firstnum == '1') {
        return firstnum;
    } else {
        return ''
    }
}

function validateSecondNumber(firstnum, secondnum) {
    if (firstnum == '1') {
        if (secondnum !== '0' && secondnum !== '1' && secondnum !== '2') {
            return '';
        }
    } return secondnum;
}

function verifyForm() {
    const warningNum = document.getElementById('warning-number');
    const number_card = document.querySelector("#card-number").value;
    const titularName = document.querySelector("#card-name").value;
    const validate = document.querySelector("#card-validate").value;
    const cvv = document.querySelector("#card-cvv").value;

    // Limpa o aviso anterior
    warningNum.textContent = '';
    //verifica se tem dados nao preenchidos
    if (number_card === '' || titularName === '' || validate === '' || cvv === '') {
        warningNum.textContent = 'Preencha todos os dados';
    } else if (number_card.length !== 19) {
        warningNum.textContent = 'Verifique o número do cartão'
    }
    if (warningNum.textContent) {
        return;
    }

    // Se tudo estiver correto, continue com a lógica para adicionar o cartão
    addcard(number_card, titularName, validate, cvv)
}

function addcard(number, titular, validate, cvv) {
    /*msg box informando cartao adicionado*/
    alert("Cartão adicionado!" + titular);
    document.querySelector("#card-number").value = '';
    document.querySelector("#card-name").value = '';
    document.querySelector("#card-validate").value = '';
    document.querySelector("#card-cvv").value = '';
    resetCardNumberFields()
    document.querySelector("#card-titular").value = '';
    document.querySelector("#card-date").value = '';
}
