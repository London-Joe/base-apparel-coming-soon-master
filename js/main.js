const form = document.querySelector('.base-form');
const emailInput = document.querySelector('#email');
const input = document.querySelector('.input-group');
const submit = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
 event.preventDefault();
console.log('All good');

 validateForm();
})

function validateForm() {
 // email
if (emailInput.value.trim().length == '') {
 setError(emailInput, 'Email cannot be empty');
}else if(isEmailValid(emailInput.value)) {
 input.classList.remove('error');
 submit.classList.remove('error');
}else {
 setError(emailInput, 'Please provide a valid email');
}
}

function setError(element, errorMessage) {
 const parent = element.parentElement;
 parent.classList.add('error');
 const errorText = parent.querySelector('.email-p');
 errorText.textContent = errorMessage;
 submit.classList.add('error');
}


function isEmailValid(email) {
 const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return emailRegExp.test(email);
}