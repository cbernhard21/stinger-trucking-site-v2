import { createHeader } from '../components/header.js';

function insertPhoneNumber() {
  const phoneNumber = '123-555-5555';

  const phoneNumberContainer = document.querySelectorAll('.phoneNumberContainer');

  phoneNumberContainer.forEach((container) => {
    container.textContent = phoneNumber;
  });

  return phoneNumber;
}

// RUN ALL GLOBAL FUNCTIONS AFTER PAGE LOADS

createHeader(insertPhoneNumber());
insertPhoneNumber();
