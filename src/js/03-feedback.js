import throttle from 'lodash.throttle';

const userForm = document.querySelector('form');
const userEmail = document.querySelector('form label input');
const userMessage = document.querySelector('form label textarea');

function checkLocalStorageData() {
  let userData = JSON.parse(localStorage.getItem('feedback-form-state'));
  try {
    if (userData.email || userData.password) {
        userEmail.value = userData.email;
        userMessage.value = userData.password;
    }
    console.log(userData.email);
    console.log(userData.password);
  } catch (error) {
    // logMyErrors(error);
  }
}
checkLocalStorageData();

let dataObject = {
  email: '',
  password: '',
};

userEmail.addEventListener(
  'input',
  throttle(event => {
    dataObject.email = event.currentTarget.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
  }, 0),
);

userMessage.addEventListener(
  'input',
  throttle(event => {
    dataObject.password = event.currentTarget.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
  }, 0),
);

userForm.addEventListener('submit', event => {
  event.preventDefault();
  userEmail.value = "";
  userMessage.value = "";
  console.log(localStorage);
  localStorage.clear();
});
