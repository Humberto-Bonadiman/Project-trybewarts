const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('.login-button');

function checkLogin () {
  if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert("Login ou senha inválidos.");
  } else {
    alert("Olá, Tryber!");
  }
}

loginButton.addEventListener('click', checkLogin);