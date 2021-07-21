const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');

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

loginButton.addEventListener('click', checkLogin);
