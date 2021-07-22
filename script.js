const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

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

loginButton.addEventListener('click', checkLogin);

// Fonte: https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado
/*agreement.onclick = function () {
  const checkButton = document.querySelector('input[name=\'agreement\']:checked');
  submitBtn.disabled = checkButton ? false : true;
};*/

agreement.addEventListener('click', enableSendButton);
