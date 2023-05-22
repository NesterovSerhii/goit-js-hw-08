import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

refs.input.addEventListener('input', throttle(onInputChange, 500));
refs.message.addEventListener('input', throttle(onMessageChange, 500));
refs.form.addEventListener('submit', onSubmitHandle);
window.addEventListener('DOMContentLoaded', fillData);

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitHandle(event) {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}

function onInputChange(event) {
  inputValue = event.target.value;
  formData.email = inputValue;
  saveFormData();
} 

function onMessageChange(event) {
  messageValue = event.target.value;
  formData.message = messageValue;
  saveFormData();
} 

function fillData() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  
if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    refs.input.value = email;
    refs.message.value = message;
}
else {
    refs.input.value = '';
    refs.message.value = '';
  }
}