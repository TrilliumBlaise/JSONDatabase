const form = document.querySelector('#form');
const errorDiv = document.querySelector('.errors');
const errorList = document.querySelector('.errors-list');
const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const inputPasswordConfirm = document.querySelector('#password-confirmation');
const inputCheckbox = document.querySelector('#terms');

form.addEventListener('submit', e => {
  clearErrors();
  const errorArray = [];

  if (inputUsername.value.length < 6) {
    errorArray.push('Username must be at least 6 characters long');
  }
  if (inputPassword.value.length < 10) {
    errorArray.push('Password must be at least 10 characters long');
  }
  if (inputPassword.value != inputPasswordConfirm.value) {
    errorArray.push('The inputted passwords do not match');
  }
  if (!inputCheckbox.checked) {
    errorArray.push('You must agree to the terms and conditions');
  }

  if (errorArray.length != 0) {
    e.preventDefault();
    showErrors(errorArray);
  }
});

function clearErrors() {
  errorDiv.classList.remove('show');
  // errorList.innerHTML = '';
  while (errorList.children.length != 0) {
    errorList.removeChild(errorList.firstElementChild);
  }
}

function showErrors(errorMessages) {
  console.log(errorList);
  errorMessages.forEach(error => {
    const liElement = document.createElement('li');
    liElement.innerText = error;
    errorList.appendChild(liElement);
  });
  errorDiv.classList.add('show');
}
