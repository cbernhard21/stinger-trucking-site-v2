export function insertPhoneNumber() {
  const phoneNumber = '989-614-2783';
  const phoneNumberContainer = document.querySelectorAll('.phoneNumberContainer');
  phoneNumberContainer.forEach((container) => {
    container.textContent = phoneNumber;
  });
  return phoneNumber;
}
