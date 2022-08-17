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
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)



