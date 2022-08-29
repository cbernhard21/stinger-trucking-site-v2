import { createHeader } from '../components/header.js';
import { createFooter } from '../components/footer.js';


function insertPhoneNumber() {
  const phoneNumber = '989-614-2783';
  const phoneNumberContainer = document.querySelectorAll('.phoneNumberContainer');
  phoneNumberContainer.forEach((container) => {
    container.textContent = phoneNumber;
  });
  return phoneNumber;
}

// RUN ALL GLOBAL FUNCTIONS AFTER PAGE LOADS
createHeader(insertPhoneNumber());
createFooter(insertPhoneNumber());
insertPhoneNumber();


//HANDLE CONTACT FORM

const form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  const messageContainer = document.querySelector(".message-container");
  const successMessage = 'Thanks for your submission!';
  const errorMessage = 'Oops! There was a problem submitting your form';
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      messageContainer.innerHTML = successMessage;
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          messageContainer.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          messageContainer.innerHTML = errorMessage;
        }
      })
    }
  }).catch(error => {
    messageContainer.innerHTML = errorMessage;
  });
}
form.addEventListener("submit", handleSubmit)



