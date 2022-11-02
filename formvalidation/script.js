const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const repasswordValue = repassword.value.trim();
  
  if(usernameValue === '')  {
    setErrorFor(username, 'Username cannot be blank.');
  } else {
    setSuccessFor(username);
  }
  if(emailValue === '')  {
    setErrorFor(email, 'Email cannot be blank.');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid.');
  } else {
    setSuccessFor(email);
  }
  if(passwordValue === '')  {
    setError(password, 'Password canot be empty.');
  } else {
    setSuccessFor(password);
  }
  
  if(repasswordValue === '')  {
  setError(password, 'Password canot be empty.');
  }
  else if(passwordValue !== repasswordValue) {
    setErrorFor(repassword, 'Password does not match.')
   } else {
    setSuccessFor(repassword);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  
  small.innerText = message;
  
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}