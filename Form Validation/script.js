let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('contact-name').value;
  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write your full name';
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById('contact-phone').value;
  if (phone.length == 0) {
    phoneError.innerHTML = 'Phone no is required';
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Only digits please';
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('contact-email').value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email Invalid';
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-circle-check"></i>';
  return true;
}
function validateMessage() {
  let message = document.getElementById('contact-message').value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + ' more characters required';
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}
