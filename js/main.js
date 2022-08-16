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
