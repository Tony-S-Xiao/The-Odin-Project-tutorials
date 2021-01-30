import page_manager from './page.js';

(() => {
    let tab = document.createElement('ul');
    tab.id = 'tab-panel';
    document.querySelector('#content').appendChild(tab);
})();

page_manager.addPage('Home');
page_manager.addPage('Menu');
page_manager.addPage('Testimonials');
page_manager.addPage('Contact');
page_manager.addCard('https://www.w3schools.com/images/w3schools_green.jpg', 'wow a box', 2);
page_manager.addCard('https://www.w3schools.com/images/w3schools_green.jpg', 'wow a box', 2);
page_manager.addCard('https://www.w3schools.com/images/w3schools_green.jpg', 'wow a box', 2);
page_manager.addCard('https://www.w3schools.com/images/w3schools_green.jpg', 'wow a box', 1);
page_manager.addCard('https://www.w3schools.com/images/w3schools_green.jpg', 'wow a box', 0);