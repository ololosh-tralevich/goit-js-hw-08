import throttle from 'lodash.throttle';

const userForm = document.querySelector('form');
const userEmail = document.querySelector('form label input');
const userMessage = document.querySelector('form label textarea');

function checkLocalStorageData() {
  let userData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (userData !== null) {
    userEmail.value = userData.email;
    userMessage.value = userData.password;
  }
}
checkLocalStorageData();

let dataObject = {
  email: '',
  password: '',
};

userForm.addEventListener(
  'input',
  throttle(event => {
    dataObject.email = userEmail.value;
    dataObject.password = userMessage.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
  }, 0),
);

userForm.addEventListener('submit', event => {
  event.preventDefault();
  userEmail.value = '';
  userMessage.value = '';

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
});
