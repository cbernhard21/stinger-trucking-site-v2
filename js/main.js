import { createHeader } from '../components/header.js';
import { createFooter } from '../components/footer.js';
import { handleContactForm } from './contact.js';
import { insertPhoneNumber } from './helpers.js';
import { displayGallery } from './gallery.js';

const path = window.location.pathname;

// RUN ALL GLOBAL FUNCTIONS AFTER PAGE LOADS
createHeader(insertPhoneNumber());
createFooter(insertPhoneNumber());
insertPhoneNumber();

if (path === '/photos.html') {
  displayGallery();
}

if (path === '/index.html') {
  handleContactForm();
}
