const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true;

  if (nameValue === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(nameInput);
  }

  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    isValid = false;
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(emailInput, 'Invalid email format');
    isValid = false;
  } else {
    setSuccessFor(emailInput);
  }

  if (messageValue === '') {
    setErrorFor(messageInput, 'Message cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(messageInput);
  }

  if (isValid) {
    // Here, you can add the logic to submit the form or perform other actions
    alert('Form submitted successfully!');
    form.reset();
  }
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.error-text');

  formControl.classList.add('error');
  errorText.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.error-text');

  formControl.classList.remove('error');
  errorText.innerText = '';
}

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
