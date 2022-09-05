export function insertPhoneNumber() {
  const phoneNumber = '989-614-2783';
  const href = `tel:${phoneNumber}`;
  const phoneNumberContainer = document.querySelectorAll('.phoneNumberContainer');
  phoneNumberContainer.forEach((container) => {
    container.textContent = phoneNumber;
    container.setAttribute('href', `${href}`);
  });
  return phoneNumber;
}
