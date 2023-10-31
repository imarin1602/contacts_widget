import contactMessengers from './modules/contacts_widget';
import contactsData from '../data/contacts_data.json';

import '../assets/css/reset.css';
import '../assets/css/animate.css';
import '../assets/css/styles.css';

window.addEventListener('DOMContentLoaded', () => {
		'use strict';
		contactMessengers(contactsData, '.messenger__container');
});