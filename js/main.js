import { createHeader } from '../components/header.js';
import { createFooter } from '../components/footer.js';
import { handleContactForm } from './contact.js';
import { insertPhoneNumber } from './helpers.js';

// RUN ALL GLOBAL FUNCTIONS AFTER PAGE LOADS
createHeader(insertPhoneNumber());
createFooter(insertPhoneNumber());
insertPhoneNumber();
handleContactForm();
