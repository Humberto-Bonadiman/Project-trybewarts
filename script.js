const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');

function checkLogin () {
  let emailValue = email.value;
  let passwordValue = password.value;
  if (emailValue !== 'tryber@teste.com') {
    return alert('Login ou senha inválidos.');
  } else if (passwordValue !== '123456') {
    return alert('Login ou senha inválidos.');
  } else {
    return alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', checkLogin);