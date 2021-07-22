const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const charCounter = document.querySelector('#counter');

function checkLogin() {
  const emailValue = email.value;
  const passwordValue = password.value;
  if (emailValue !== 'tryber@teste.com') {
    return alert('Login ou senha inválidos.');
  }
  if (passwordValue !== '123456') {
    return alert('Login ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
}

function enableSendButton(event) {
  if (event.target.checked === true) {
    submitBtn.disabled = false;
  }
  if (event.target.checked === false) {
    submitBtn.disabled = true;
  }
}

function countingChar(event) {
  const typedTextLength = event.target.value.length;
  const maxTextLength = event.target.maxLength;
  let numChar = parseInt(charCounter.textContent, 10);
  numChar = maxTextLength - typedTextLength;
  charCounter.textContent = numChar;
}

loginButton.addEventListener('click', checkLogin);

// Fonte: https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado
/* agreement.onclick = function () {
  const checkButton = document.querySelector('input[name=\'agreement\']:checked');
  submitBtn.disabled = checkButton ? false : true;
}; */

agreement.addEventListener('click', enableSendButton);

textArea.addEventListener('input', countingChar);
