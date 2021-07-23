const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const charCounter = document.querySelector('#counter');
const evaluationForm = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastname = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const subject = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.rate');
const textarea = document.querySelector('#textarea');

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

// Fonte: https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado

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

function writeFullName() {
  const fullName = `Nome: ${inputName.value} ${inputLastname.value}`;
  const paragraphFullName = document.createElement('p');
  paragraphFullName.innerHTML = fullName;
  evaluationForm.appendChild(paragraphFullName);
}

function writeEmail() {
  const inputEmailValue = `Email: ${inputEmail.value}`;
  const paragraphInputEmail = document.createElement('p');
  paragraphInputEmail.innerHTML = inputEmailValue;
  evaluationForm.appendChild(paragraphInputEmail);
}

function writeHouse() {
  const optionHouse = house.options[house.selectedIndex].text;
  const textHouse = `Casa: ${optionHouse}`;
  const paragraphHouse = document.createElement('p');
  paragraphHouse.innerHTML = textHouse;
  evaluationForm.appendChild(paragraphHouse);
}

function writeFamily() {
  const familyItens = [];
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      familyItens.push(family[index].value);
    }
  }
  const textFamily = `Família: ${familyItens}`;
  const paragraphFamily = document.createElement('p');
  paragraphFamily.innerHTML = textFamily;
  evaluationForm.appendChild(paragraphFamily);
}

function writeSubject() {
  const subjectItens = [];
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      subjectItens.push(` ${subject[index].value}`);
    }
  }
  const textSubject = `Matérias: ${subjectItens}`;
  const paragraphSubject = document.createElement('p');
  paragraphSubject.innerHTML = textSubject;
  evaluationForm.appendChild(paragraphSubject);
}

function writeRate() {
  const rateItens = [];
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      rateItens.push(rate[index].value);
    }
  }
  const textRate = `Avaliação: ${rateItens}`;
  const paragraphRate = document.createElement('p');
  paragraphRate.innerHTML = textRate;
  evaluationForm.appendChild(paragraphRate);
}

function writeNotes() {
  const notes = `Observações: ${textarea.value}`;
  const paragraphNotes = document.createElement('p');
  paragraphNotes.innerHTML = notes;
  evaluationForm.appendChild(paragraphNotes);
}

function filledInformation() {
  evaluationForm.innerHTML = '';
  writeFullName();
  writeEmail();
  writeHouse();
  writeFamily();
  writeSubject();
  writeRate();
  writeNotes();
}

loginButton.addEventListener('click', checkLogin);

agreement.addEventListener('click', enableSendButton);

textArea.addEventListener('input', countingChar);

submitBtn.addEventListener('click', filledInformation);
