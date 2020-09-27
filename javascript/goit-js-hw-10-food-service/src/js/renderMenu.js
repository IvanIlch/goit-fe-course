import itemTemplate from '../templete/gallery-template.hbs';
import menuItems from '../menu.json';

const listRef = document.querySelector('.js-menu');

const renderMenu = itemTemplate(menuItems);
listRef.insertAdjacentHTML('beforeend', renderMenu);
